export interface AihotSource {
  name: string;
}

export interface AihotLinks {
  aihot: string;
  original: string;
}

export interface AihotAttribution {
  name: string;
  url: string;
}

export interface AihotItem {
  id: string;
  title: string;
  originalTitle?: string | null;
  summary: string | null;
  source: AihotSource;
  links: AihotLinks;
  publishedAt: string | null;
  discoveredAt: string;
  category: string | null;
  score: number | null;
  selected: boolean;
  reason?: string | null;
  attribution?: AihotAttribution;
}

export interface FrontmatterData {
  title: string;
  aihot_id: string;
  aihot_category: string | null;
  published_at: string | null;
  discovered_at: string;
  source_name: string;
  original_url: string;
  canonical_url: string;
  score: number | null;
  content_kind: "news";
}

export interface SnapshotResponse {
  schemaVersion: number;
  asOf: string;
  fields: "default" | "minimal";
  cursor: string;
  count: number;
  hasMore: boolean;
  nextPage: string | null;
  items: AihotItem[];
}

export interface SelectedUpsertChange {
  op: "upsert";
  changedAt: string;
  item: AihotItem;
}

export interface SelectedRemoveChange {
  op: "remove";
  changedAt: string;
  id: string;
}

export type SelectedChange = SelectedUpsertChange | SelectedRemoveChange;

export interface ChangesResponse {
  schemaVersion: number;
  fields: "default" | "minimal";
  cursor: string;
  count: number;
  hasMore: boolean;
  changes: SelectedChange[];
}

export interface SyncState {
  cursor: string;
  lastSyncAt: string;
  totalItems: number;
  syncedPages?: number;
  lastMode?: "snapshot" | "changes";
  etag?: string;
  endpoint?: string;
}
