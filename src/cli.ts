import { Syncer } from "./syncer";

async function main() {
  const baseUrl = process.env.AIHOT_BASE_URL || "https://aihot.virxact.com";
  const actorId = process.env.AIHOT_ACTOR_ID;
  const rootDir = process.cwd();

  console.log(`[aihot-mirror] Starting sync from ${baseUrl}...`);
  const syncer = new Syncer({ baseUrl, actorId, rootDir });

  const result = await syncer.sync();
  if (result.notModified) {
    console.log(`[aihot-mirror] 304 Not Modified. Total items: ${result.totalItems}`);
  } else {
    console.log(
      `[aihot-mirror] Sync completed successfully! Mode: ${result.mode}, Synced: ${result.syncedCount ?? "incremental"}, Total: ${result.totalItems}, Cursor: ${result.cursor}`
    );
  }
}

main().catch((err) => {
  console.error(`[aihot-mirror] Sync failed:`, err);
  process.exit(1);
});
