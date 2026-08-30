import { afterEach, beforeEach, describe, expect, it } from "bun:test";
import * as fs from "node:fs";
import * as path from "node:path";
import { Syncer } from "../src/syncer";

describe("Task 2: Snapshot and Changes Atomic Syncer", () => {
  let server: any;
  let serverUrl = "";
  let testDir: string;
  let requestLog: Array<{ path: string; headers: Record<string, string> }> = [];

  beforeEach(() => {
    testDir = fs.mkdtempSync(path.join(process.cwd(), ".test_sync_"));
    requestLog = [];
  });

  afterEach(() => {
    if (server) {
      server.stop();
      server = null;
    }
    if (fs.existsSync(testDir)) {
      fs.rmSync(testDir, { recursive: true, force: true });
    }
  });

  function getDirFingerprint(dir: string): string {
    if (!fs.existsSync(dir)) return "NON_EXISTENT";
    const files: string[] = [];
    function scan(d: string, prefix = "") {
      const entries = fs.readdirSync(d, { withFileTypes: true });
      for (const entry of entries) {
        const rel = path.join(prefix, entry.name);
        const full = path.join(d, entry.name);
        if (entry.isDirectory()) {
          scan(full, rel);
        } else if (entry.isFile()) {
          const content = fs.readFileSync(full);
          files.push(`${rel}:${content.length}:${Bun.hash(content)}`);
        }
      }
    }
    scan(dir);
    files.sort();
    return files.join(";");
  }

  it("performs multi-page snapshot sync and saves sync state with cursor", async () => {
    const page1Items = [
      {
        id: "item1",
        title: "Item 1",
        source: { name: "Source 1" },
        links: { aihot: "https://aihot/1", original: "https://orig/1" },
        publishedAt: "2026-02-01T10:00:00.000Z",
        discoveredAt: "2026-02-01T10:00:00.000Z",
        category: "ai-models",
        score: 90,
        selected: true,
        summary: "Summary 1",
      },
    ];
    const page2Items = [
      {
        id: "item2",
        title: "Item 2",
        source: { name: "Source 2" },
        links: { aihot: "https://aihot/2", original: "https://orig/2" },
        publishedAt: "2026-02-02T10:00:00.000Z",
        discoveredAt: "2026-02-02T10:00:00.000Z",
        category: "industry",
        score: 85,
        selected: true,
        summary: "Summary 2",
      },
    ];

    server = Bun.serve({
      port: 0,
      fetch(req) {
        const url = new URL(req.url);
        requestLog.push({ path: url.pathname + url.search, headers: Object.fromEntries(req.headers) });
        if (url.pathname === "/api/v1/selected/snapshot") {
          const page = url.searchParams.get("page");
          if (!page) {
            return Response.json({
              schemaVersion: 1,
              asOf: "2026-02-01T00:00:00.000Z",
              fields: "default",
              cursor: "cursor_snap_100",
              count: 1,
              hasMore: true,
              nextPage: "page_2",
              items: page1Items,
            }, { headers: { ETag: '"snap-etag-1"' } });
          }
          if (page === "page_2") {
            return Response.json({
              schemaVersion: 1,
              asOf: "2026-02-01T00:00:00.000Z",
              fields: "default",
              cursor: "cursor_snap_100",
              count: 1,
              hasMore: false,
              nextPage: null,
              items: page2Items,
            });
          }
        }
        return new Response("Not found", { status: 404 });
      },
    });
    serverUrl = `http://localhost:${server.port}`;

    const syncer = new Syncer({ baseUrl: serverUrl, rootDir: testDir });
    const result = await syncer.sync();

    expect(result.mode).toBe("snapshot");
    expect(result.syncedCount).toBe(2);
    expect(result.cursor).toBe("cursor_snap_100");

    // Verify files created
    expect(fs.existsSync(path.join(testDir, "news/ai-models/2026/02/item1.md"))).toBe(true);
    expect(fs.existsSync(path.join(testDir, "news/industry/2026/02/item2.md"))).toBe(true);
    expect(fs.existsSync(path.join(testDir, "state/sync-state.json"))).toBe(true);
    expect(fs.existsSync(path.join(testDir, "state/id-map.json"))).toBe(true);

    const state = JSON.parse(fs.readFileSync(path.join(testDir, "state/sync-state.json"), "utf8"));
    expect(state.cursor).toBe("cursor_snap_100");
    expect(state.totalItems).toBe(2);
  });

  it("fails immediately if page cursor differs from first page cursor in snapshot", async () => {
    server = Bun.serve({
      port: 0,
      fetch(req) {
        const url = new URL(req.url);
        if (url.pathname === "/api/v1/selected/snapshot") {
          const page = url.searchParams.get("page");
          if (!page) {
            return Response.json({
              schemaVersion: 1,
              cursor: "cursor_snap_100",
              count: 1,
              hasMore: true,
              nextPage: "page_2",
              items: [{
                id: "item1",
                title: "Item 1",
                source: { name: "S1" },
                links: { aihot: "https://aihot/1", original: "https://orig/1" },
                publishedAt: "2026-02-01T10:00:00.000Z",
                discoveredAt: "2026-02-01T10:00:00.000Z",
                category: "ai-models",
                score: null,
                selected: true,
                summary: null,
              }],
            });
          }
          if (page === "page_2") {
            return Response.json({
              schemaVersion: 1,
              cursor: "cursor_different_200", // MISMATCH!
              count: 1,
              hasMore: false,
              nextPage: null,
              items: [{
                id: "item2",
                title: "Item 2",
                source: { name: "S2" },
                links: { aihot: "https://aihot/2", original: "https://orig/2" },
                publishedAt: "2026-02-02T10:00:00.000Z",
                discoveredAt: "2026-02-02T10:00:00.000Z",
                category: "industry",
                score: null,
                selected: true,
                summary: null,
              }],
            });
          }
        }
        return new Response("Not found", { status: 404 });
      },
    });
    serverUrl = `http://localhost:${server.port}`;

    const syncer = new Syncer({ baseUrl: serverUrl, rootDir: testDir });
    await expect(syncer.sync()).rejects.toThrow(/cursor mismatch/i);

    // Verify atomic: news/ and state/ were not committed
    expect(fs.existsSync(path.join(testDir, "news"))).toBe(false);
    expect(fs.existsSync(path.join(testDir, "state"))).toBe(false);
  });

  it("handles changes with upsert, date/category migration, and remove", async () => {
    // Bootstrap initial state with item1 and item2
    fs.mkdirSync(path.join(testDir, "news/ai-models/2026/02"), { recursive: true });
    fs.mkdirSync(path.join(testDir, "news/industry/2026/02"), { recursive: true });
    fs.mkdirSync(path.join(testDir, "state"), { recursive: true });

    fs.writeFileSync(path.join(testDir, "news/ai-models/2026/02/item1.md"), "initial item1");
    fs.writeFileSync(path.join(testDir, "news/industry/2026/02/item2.md"), "initial item2");
    fs.writeFileSync(
      path.join(testDir, "state/id-map.json"),
      JSON.stringify({
        item1: "news/ai-models/2026/02/item1.md",
        item2: "news/industry/2026/02/item2.md",
      })
    );
    fs.writeFileSync(
      path.join(testDir, "state/sync-state.json"),
      JSON.stringify({
        cursor: "cursor_v1",
        lastSyncAt: "2026-02-01T00:00:00.000Z",
        totalItems: 2,
      })
    );

    // Changes:
    // 1. item1 category and date changed to "paper" and "2026-03" (upsert migration)
    // 2. item2 removed (remove)
    // 3. item3 added (upsert new)
    server = Bun.serve({
      port: 0,
      fetch(req) {
        const url = new URL(req.url);
        if (url.pathname === "/api/v1/selected/changes") {
          expect(url.searchParams.get("cursor")).toBe("cursor_v1");
          return Response.json({
            schemaVersion: 1,
            cursor: "cursor_v2",
            count: 3,
            hasMore: false,
            changes: [
              {
                op: "upsert",
                changedAt: "2026-03-01T12:00:00.000Z",
                item: {
                  id: "item1",
                  title: "Item 1 Updated",
                  source: { name: "S1" },
                  links: { aihot: "https://aihot/1", original: "https://orig/1" },
                  publishedAt: "2026-03-01T12:00:00.000Z",
                  discoveredAt: "2026-02-01T10:00:00.000Z",
                  category: "paper",
                  score: 99,
                  selected: true,
                  summary: "New summary",
                },
              },
              {
                op: "remove",
                changedAt: "2026-03-01T12:05:00.000Z",
                id: "item2",
              },
              {
                op: "upsert",
                changedAt: "2026-03-01T12:10:00.000Z",
                item: {
                  id: "item3",
                  title: "Item 3",
                  source: { name: "S3" },
                  links: { aihot: "https://aihot/3", original: "https://orig/3" },
                  publishedAt: "2026-03-05T10:00:00.000Z",
                  discoveredAt: "2026-03-05T10:00:00.000Z",
                  category: "tip",
                  score: null,
                  selected: true,
                  summary: null,
                },
              },
            ],
          });
        }
        return new Response("Not found", { status: 404 });
      },
    });
    serverUrl = `http://localhost:${server.port}`;

    const syncer = new Syncer({ baseUrl: serverUrl, rootDir: testDir });
    const res = await syncer.sync();

    expect(res.mode).toBe("changes");
    expect(res.cursor).toBe("cursor_v2");

    // Old item1 path should be deleted, new item1 path should exist
    expect(fs.existsSync(path.join(testDir, "news/ai-models/2026/02/item1.md"))).toBe(false);
    expect(fs.existsSync(path.join(testDir, "news/paper/2026/03/item1.md"))).toBe(true);

    // item2 should be deleted
    expect(fs.existsSync(path.join(testDir, "news/industry/2026/02/item2.md"))).toBe(false);

    // item3 should exist
    expect(fs.existsSync(path.join(testDir, "news/tip/2026/03/item3.md"))).toBe(true);

    // ID map and state verified
    const idMap = JSON.parse(fs.readFileSync(path.join(testDir, "state/id-map.json"), "utf8"));
    expect(idMap.item1).toBe("news/paper/2026/03/item1.md");
    expect(idMap.item2).toBeUndefined();
    expect(idMap.item3).toBe("news/tip/2026/03/item3.md");
  });

  it("handles 304 Not Modified with zero filesystem modifications", async () => {
    fs.mkdirSync(path.join(testDir, "news/ai-models/2026/02"), { recursive: true });
    fs.mkdirSync(path.join(testDir, "state"), { recursive: true });
    fs.writeFileSync(path.join(testDir, "news/ai-models/2026/02/item1.md"), "content");
    fs.writeFileSync(path.join(testDir, "state/id-map.json"), JSON.stringify({ item1: "news/ai-models/2026/02/item1.md" }));
    fs.writeFileSync(
      path.join(testDir, "state/sync-state.json"),
      JSON.stringify({
        cursor: "cursor_v1",
        lastSyncAt: "2026-02-01T00:00:00.000Z",
        totalItems: 1,
        etag: '"etag-123"',
        endpoint: "/api/v1/selected/changes?cursor=cursor_v1&limit=100",
      })
    );

    const beforeFp = getDirFingerprint(testDir);

    server = Bun.serve({
      port: 0,
      fetch(req) {
        if (req.headers.get("if-none-match") === '"etag-123"') {
          return new Response(null, { status: 304 });
        }
        return new Response("Unexpected", { status: 500 });
      },
    });
    serverUrl = `http://localhost:${server.port}`;

    const syncer = new Syncer({ baseUrl: serverUrl, rootDir: testDir });
    const res = await syncer.sync();

    expect(res.notModified).toBe(true);
    const afterFp = getDirFingerprint(testDir);
    expect(afterFp).toBe(beforeFp);
  });

  it("handles 409 snapshot_required by automatically rebuilding from snapshot", async () => {
    fs.mkdirSync(path.join(testDir, "state"), { recursive: true });
    fs.writeFileSync(
      path.join(testDir, "state/sync-state.json"),
      JSON.stringify({
        cursor: "old_expired_cursor",
        lastSyncAt: "2026-01-01T00:00:00.000Z",
        totalItems: 0,
      })
    );

    server = Bun.serve({
      port: 0,
      fetch(req) {
        const url = new URL(req.url);
        if (url.pathname === "/api/v1/selected/changes") {
          return Response.json({ error: "snapshot_required" }, { status: 409 });
        }
        if (url.pathname === "/api/v1/selected/snapshot") {
          return Response.json({
            schemaVersion: 1,
            cursor: "new_snapshot_cursor",
            count: 1,
            hasMore: false,
            nextPage: null,
            items: [
              {
                id: "rebuilt_item",
                title: "Rebuilt Item",
                source: { name: "S1" },
                links: { aihot: "https://aihot/r", original: "https://orig/r" },
                publishedAt: "2026-03-01T00:00:00.000Z",
                discoveredAt: "2026-03-01T00:00:00.000Z",
                category: "ai-products",
                score: 95,
                selected: true,
                summary: "Rebuilt",
              },
            ],
          });
        }
        return new Response("Not found", { status: 404 });
      },
    });
    serverUrl = `http://localhost:${server.port}`;

    const syncer = new Syncer({ baseUrl: serverUrl, rootDir: testDir });
    const res = await syncer.sync();

    expect(res.mode).toBe("snapshot");
    expect(res.cursor).toBe("new_snapshot_cursor");
    expect(fs.existsSync(path.join(testDir, "news/ai-products/2026/03/rebuilt_item.md"))).toBe(true);
  });

  it("handles 429/503 with Retry-After and bounded retries", async () => {
    let attempts = 0;
    server = Bun.serve({
      port: 0,
      fetch(req) {
        attempts++;
        if (attempts === 1) {
          return new Response("Too Many Requests", {
            status: 429,
            headers: { "Retry-After": "0" },
          });
        }
        if (attempts === 2) {
          return new Response("Service Unavailable", {
            status: 503,
            headers: { "Retry-After": "0" },
          });
        }
        return Response.json({
          schemaVersion: 1,
          cursor: "retry_success_cursor",
          count: 1,
          hasMore: false,
          nextPage: null,
          items: [
            {
              id: "item_retry",
              title: "Retry Item",
              source: { name: "S1" },
              links: { aihot: "https://aihot/r", original: "https://orig/r" },
              publishedAt: "2026-03-01T00:00:00.000Z",
              discoveredAt: "2026-03-01T00:00:00.000Z",
              category: "ai-models",
              score: null,
              selected: true,
              summary: null,
            },
          ],
        });
      },
    });
    serverUrl = `http://localhost:${server.port}`;

    const syncer = new Syncer({ baseUrl: serverUrl, rootDir: testDir, maxRetries: 3 });
    const res = await syncer.sync();

    expect(attempts).toBe(3);
    expect(res.cursor).toBe("retry_success_cursor");
  });

  it("guarantees zero pollution when error injected in page 2 or validation fails", async () => {
    // Initial state
    fs.mkdirSync(path.join(testDir, "news/ai-models/2026/01"), { recursive: true });
    fs.mkdirSync(path.join(testDir, "state"), { recursive: true });
    fs.writeFileSync(path.join(testDir, "news/ai-models/2026/01/existing.md"), "clean existing content");
    fs.writeFileSync(path.join(testDir, "state/id-map.json"), JSON.stringify({ existing: "news/ai-models/2026/01/existing.md" }));
    fs.writeFileSync(
      path.join(testDir, "state/sync-state.json"),
      JSON.stringify({
        cursor: "initial_cursor",
        lastSyncAt: "2026-01-01T00:00:00.000Z",
        totalItems: 1,
      })
    );

    const initialFp = getDirFingerprint(testDir);

    // Server returns invalid item on page 2
    server = Bun.serve({
      port: 0,
      fetch(req) {
        const url = new URL(req.url);
        if (url.pathname === "/api/v1/selected/changes") {
          return Response.json({
            schemaVersion: 1,
            cursor: "corrupt_cursor",
            count: 1,
            hasMore: false,
            changes: [
              {
                op: "upsert",
                changedAt: "2026-03-01T00:00:00.000Z",
                item: {
                  id: "bad/id/escape", // ILLEGAL ID!
                  title: "Bad",
                  source: { name: "S1" },
                  links: { aihot: "https://aihot", original: "https://orig" },
                  publishedAt: "2026-03-01T00:00:00.000Z",
                  discoveredAt: "2026-03-01T00:00:00.000Z",
                  category: "ai-models",
                  score: null,
                  selected: true,
                  summary: null,
                },
              },
            ],
          });
        }
        return new Response("Not found", { status: 404 });
      },
    });
    serverUrl = `http://localhost:${server.port}`;

    const syncer = new Syncer({ baseUrl: serverUrl, rootDir: testDir });
    await expect(syncer.sync()).rejects.toThrow();

    // Verify tree is completely unchanged byte-for-byte
    const afterFailureFp = getDirFingerprint(testDir);
    expect(afterFailureFp).toBe(initialFp);
  });
});
