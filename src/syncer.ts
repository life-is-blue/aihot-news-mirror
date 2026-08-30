import * as fs from "node:fs";
import * as path from "node:path";
import { AihotClient } from "./client";
import { computeItemPath, itemToMarkdown, parseItem } from "./item";
import type { ChangesResponse, SnapshotResponse, SyncState } from "./types";

export interface SyncerOptions {
  baseUrl?: string;
  rootDir?: string;
  maxRetries?: number;
  actorId?: string;
}

export interface SyncResult {
  mode: "snapshot" | "changes";
  notModified?: boolean;
  syncedCount?: number;
  cursor?: string;
  totalItems?: number;
}

export class Syncer {
  private client: AihotClient;
  private rootDir: string;

  constructor(options: SyncerOptions = {}) {
    this.rootDir = path.resolve(options.rootDir || process.cwd());
    this.client = new AihotClient({
      baseUrl: options.baseUrl,
      maxRetries: options.maxRetries,
      actorId: options.actorId,
    });
  }

  public async sync(): Promise<SyncResult> {
    const stateFile = path.join(this.rootDir, "state", "sync-state.json");
    let state: SyncState | null = null;

    if (fs.existsSync(stateFile)) {
      try {
        state = JSON.parse(fs.readFileSync(stateFile, "utf8"));
      } catch {
        state = null;
      }
    }

    if (state && state.cursor) {
      const changesResult = await this.syncChanges(state);
      if (changesResult.snapshotRequired) {
        console.warn("[syncer] Received 409 snapshot_required. Falling back to full snapshot rebuild.");
        return this.syncSnapshot();
      }
      return changesResult;
    }

    return this.syncSnapshot();
  }

  public async syncSnapshot(): Promise<SyncResult> {
    const stagingDir = this.createStagingDir("snapshot");

    try {
      const stagingNewsDir = path.join(stagingDir, "news");
      const stagingStateDir = path.join(stagingDir, "state");
      fs.mkdirSync(stagingNewsDir, { recursive: true });
      fs.mkdirSync(stagingStateDir, { recursive: true });

      let nextPage: string | null = null;
      let firstCursor: string | null = null;
      let firstEtag: string | undefined;
      const idMap: Record<string, string> = {};
      let totalCount = 0;

      while (true) {
        const queryParams = new URLSearchParams({ limit: "500" });
        if (nextPage) {
          queryParams.set("page", nextPage);
        }
        const endpoint = `/api/v1/selected/snapshot?${queryParams.toString()}`;

        const res = await this.client.fetchJson<SnapshotResponse>(endpoint);
        if (!res.data) {
          throw new Error(`Failed to fetch snapshot page: ${endpoint}`);
        }

        const snapshotData = res.data;
        if (!firstCursor) {
          firstCursor = snapshotData.cursor;
          firstEtag = res.etag;
        } else if (snapshotData.cursor !== firstCursor) {
          throw new Error(
            `Cursor mismatch across snapshot pages! First: "${firstCursor}", Current: "${snapshotData.cursor}"`
          );
        }

        for (const rawItem of snapshotData.items) {
          const item = parseItem(rawItem);
          const relPath = computeItemPath(item);
          const fullPath = path.join(stagingDir, relPath);

          fs.mkdirSync(path.dirname(fullPath), { recursive: true });
          fs.writeFileSync(fullPath, itemToMarkdown(item), "utf8");

          idMap[item.id] = relPath;
          totalCount++;
        }

        if (snapshotData.hasMore && snapshotData.nextPage) {
          nextPage = snapshotData.nextPage;
        } else {
          break;
        }
      }

      if (!firstCursor) {
        throw new Error("No cursor received from snapshot");
      }

      // Write state files in staging
      fs.writeFileSync(
        path.join(stagingStateDir, "id-map.json"),
        JSON.stringify(idMap, null, 2),
        "utf8"
      );

      const newState: SyncState = {
        cursor: firstCursor,
        lastSyncAt: new Date().toISOString(),
        totalItems: Object.keys(idMap).length,
        lastMode: "snapshot",
        etag: firstEtag,
        endpoint: "/api/v1/selected/snapshot?limit=500",
      };

      fs.writeFileSync(
        path.join(stagingStateDir, "sync-state.json"),
        JSON.stringify(newState, null, 2),
        "utf8"
      );

      // Atomic promotion
      this.promoteStaging(stagingDir);

      return {
        mode: "snapshot",
        syncedCount: totalCount,
        cursor: firstCursor,
        totalItems: Object.keys(idMap).length,
      };
    } catch (err) {
      this.cleanupStaging(stagingDir);
      throw err;
    }
  }

  public async syncChanges(currentState: SyncState): Promise<SyncResult & { snapshotRequired?: boolean }> {
    const stagingDir = this.createStagingDir("changes");

    try {
      const srcNewsDir = path.join(this.rootDir, "news");
      const srcStateDir = path.join(this.rootDir, "state");
      const stagingNewsDir = path.join(stagingDir, "news");
      const stagingStateDir = path.join(stagingDir, "state");

      if (fs.existsSync(srcNewsDir)) {
        this.copyRecursive(srcNewsDir, stagingNewsDir);
      } else {
        fs.mkdirSync(stagingNewsDir, { recursive: true });
      }

      if (fs.existsSync(srcStateDir)) {
        this.copyRecursive(srcStateDir, stagingStateDir);
      } else {
        fs.mkdirSync(stagingStateDir, { recursive: true });
      }

      let idMap: Record<string, string> = {};
      const idMapFile = path.join(stagingStateDir, "id-map.json");
      if (fs.existsSync(idMapFile)) {
        try {
          idMap = JSON.parse(fs.readFileSync(idMapFile, "utf8"));
        } catch {
          idMap = {};
        }
      }

      let currentCursor = currentState.cursor;
      let hasMore = true;
      let isFirstRequest = true;
      let firstEtag: string | undefined;

      while (hasMore) {
        const queryParams = new URLSearchParams({
          cursor: currentCursor,
          limit: "100",
        });
        const endpoint = `/api/v1/selected/changes?${queryParams.toString()}`;

        // Only send ETag if exactly matching previous endpoint/cursor
        const sendEtag =
          isFirstRequest && currentState.endpoint === endpoint ? currentState.etag : undefined;

        const res = await this.client.fetchJson<ChangesResponse>(endpoint, sendEtag);

        if (res.notModified) {
          this.cleanupStaging(stagingDir);
          return {
            mode: "changes",
            notModified: true,
            cursor: currentCursor,
            totalItems: Object.keys(idMap).length,
          };
        }

        if (res.snapshotRequired) {
          this.cleanupStaging(stagingDir);
          return {
            mode: "changes",
            snapshotRequired: true,
          };
        }

        if (!res.data) {
          throw new Error(`Failed to fetch changes: ${endpoint}`);
        }

        if (isFirstRequest) {
          firstEtag = res.etag;
        }

        const changesData = res.data;
        for (const change of changesData.changes) {
          if (change.op === "remove") {
            const oldRelPath = idMap[change.id];
            if (oldRelPath) {
              const oldFullPath = path.join(stagingDir, oldRelPath);
              if (fs.existsSync(oldFullPath)) {
                fs.unlinkSync(oldFullPath);
                this.cleanEmptyParents(path.dirname(oldFullPath), stagingNewsDir);
              }
              delete idMap[change.id];
            }
          } else if (change.op === "upsert") {
            const item = parseItem(change.item);
            const newRelPath = computeItemPath(item);
            const oldRelPath = idMap[item.id];

            if (oldRelPath && oldRelPath !== newRelPath) {
              const oldFullPath = path.join(stagingDir, oldRelPath);
              if (fs.existsSync(oldFullPath)) {
                fs.unlinkSync(oldFullPath);
                this.cleanEmptyParents(path.dirname(oldFullPath), stagingNewsDir);
              }
            }

            const newFullPath = path.join(stagingDir, newRelPath);
            fs.mkdirSync(path.dirname(newFullPath), { recursive: true });
            fs.writeFileSync(newFullPath, itemToMarkdown(item), "utf8");

            idMap[item.id] = newRelPath;
          }
        }

        currentCursor = changesData.cursor;
        hasMore = changesData.hasMore;
        isFirstRequest = false;
      }

      // Write updated state in staging
      fs.writeFileSync(
        path.join(stagingStateDir, "id-map.json"),
        JSON.stringify(idMap, null, 2),
        "utf8"
      );

      const newState: SyncState = {
        cursor: currentCursor,
        lastSyncAt: new Date().toISOString(),
        totalItems: Object.keys(idMap).length,
        lastMode: "changes",
        etag: firstEtag,
        endpoint: `/api/v1/selected/changes?cursor=${encodeURIComponent(currentState.cursor)}&limit=100`,
      };

      fs.writeFileSync(
        path.join(stagingStateDir, "sync-state.json"),
        JSON.stringify(newState, null, 2),
        "utf8"
      );

      // Atomic promotion
      this.promoteStaging(stagingDir);

      return {
        mode: "changes",
        cursor: currentCursor,
        totalItems: Object.keys(idMap).length,
      };
    } catch (err) {
      this.cleanupStaging(stagingDir);
      throw err;
    }
  }

  private createStagingDir(prefix: string): string {
    const rand = Math.random().toString(36).slice(2, 8);
    const stagingDir = path.join(this.rootDir, `.staging_${prefix}_${Date.now()}_${rand}`);
    fs.mkdirSync(stagingDir, { recursive: true });
    return stagingDir;
  }

  private cleanupStaging(stagingDir: string): void {
    if (fs.existsSync(stagingDir)) {
      try {
        fs.rmSync(stagingDir, { recursive: true, force: true });
      } catch {}
    }
  }

  private promoteStaging(stagingDir: string): void {
    const targetNews = path.join(this.rootDir, "news");
    const targetState = path.join(this.rootDir, "state");
    const backupNews = path.join(this.rootDir, `.backup_news_${Date.now()}`);
    const backupState = path.join(this.rootDir, `.backup_state_${Date.now()}`);

    const stagingNews = path.join(stagingDir, "news");
    const stagingState = path.join(stagingDir, "state");

    let newsMovedToBackup = false;
    let stateMovedToBackup = false;

    try {
      if (fs.existsSync(targetNews)) {
        fs.renameSync(targetNews, backupNews);
        newsMovedToBackup = true;
      }
      if (fs.existsSync(targetState)) {
        fs.renameSync(targetState, backupState);
        stateMovedToBackup = true;
      }

      if (fs.existsSync(stagingNews)) {
        fs.renameSync(stagingNews, targetNews);
      }
      if (fs.existsSync(stagingState)) {
        fs.renameSync(stagingState, targetState);
      }

      // Cleanup backups on success
      if (newsMovedToBackup && fs.existsSync(backupNews)) {
        fs.rmSync(backupNews, { recursive: true, force: true });
      }
      if (stateMovedToBackup && fs.existsSync(backupState)) {
        fs.rmSync(backupState, { recursive: true, force: true });
      }
      this.cleanupStaging(stagingDir);
    } catch (err) {
      // Rollback
      if (newsMovedToBackup && fs.existsSync(backupNews)) {
        if (fs.existsSync(targetNews)) {
          fs.rmSync(targetNews, { recursive: true, force: true });
        }
        fs.renameSync(backupNews, targetNews);
      }
      if (stateMovedToBackup && fs.existsSync(backupState)) {
        if (fs.existsSync(targetState)) {
          fs.rmSync(targetState, { recursive: true, force: true });
        }
        fs.renameSync(backupState, targetState);
      }
      this.cleanupStaging(stagingDir);
      throw err;
    }
  }

  private cleanEmptyParents(dir: string, baseDir: string): void {
    if (!dir.startsWith(baseDir) || dir === baseDir) return;
    try {
      const files = fs.readdirSync(dir);
      if (files.length === 0) {
        fs.rmdirSync(dir);
        this.cleanEmptyParents(path.dirname(dir), baseDir);
      }
    } catch {}
  }

  private copyRecursive(src: string, dst: string): void {
    fs.mkdirSync(dst, { recursive: true });
    const entries = fs.readdirSync(src, { withFileTypes: true });
    for (const entry of entries) {
      const srcPath = path.join(src, entry.name);
      const dstPath = path.join(dst, entry.name);
      if (entry.isDirectory()) {
        this.copyRecursive(srcPath, dstPath);
      } else if (entry.isFile()) {
        fs.copyFileSync(srcPath, dstPath);
      }
    }
  }
}
