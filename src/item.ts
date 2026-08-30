import YAML from "yaml";
import type { AihotItem, FrontmatterData } from "./types";

export const KNOWN_CATEGORIES = new Set([
  "ai-models",
  "ai-products",
  "industry",
  "paper",
  "tip",
]);

const SAFE_ID_REGEX = /^[A-Za-z0-9_-]+$/;

const LEGACY_SNAKE_CASE_KEYS = new Set([
  "source_name",
  "published_at",
  "discovered_at",
  "original_url",
  "aihot_url",
  "canonical_url",
  "original_title",
]);

export function isValidSafeId(id: string): boolean {
  if (!id || typeof id !== "string") return false;
  if (!SAFE_ID_REGEX.test(id)) return false;
  if (id === "." || id === "..") return false;
  return true;
}

export function normalizeCategoryFolder(category: string | null | undefined): string {
  if (!category || typeof category !== "string") {
    return "other";
  }
  const trimmed = category.trim();
  if (KNOWN_CATEGORIES.has(trimmed)) {
    return trimmed;
  }
  return "other";
}

export function computeItemPath(item: {
  id: string;
  category?: string | null;
  publishedAt?: string | null;
  discoveredAt: string;
}): string {
  if (!isValidSafeId(item.id)) {
    throw new Error(`Invalid or unsafe item ID: "${item.id}"`);
  }

  const categoryFolder = normalizeCategoryFolder(item.category);
  const dateStr = item.publishedAt || item.discoveredAt;
  if (!dateStr || typeof dateStr !== "string") {
    throw new Error(`Item ${item.id} has no valid publishedAt or discoveredAt date`);
  }

  const date = new Date(dateStr);
  if (isNaN(date.getTime())) {
    throw new Error(`Item ${item.id} has invalid date string: ${dateStr}`);
  }

  const yyyy = String(date.getUTCFullYear());
  const mm = String(date.getUTCMonth() + 1).padStart(2, "0");

  return `news/${categoryFolder}/${yyyy}/${mm}/${item.id}.md`;
}

export function parseItem(raw: unknown): AihotItem {
  if (!raw || typeof raw !== "object" || Array.isArray(raw)) {
    throw new Error("Item must be an object");
  }

  const record = raw as Record<string, unknown>;

  // Reject legacy snake_case shapes loudly
  for (const key of Object.keys(record)) {
    if (LEGACY_SNAKE_CASE_KEYS.has(key)) {
      throw new Error(`Item contains legacy snake_case key: "${key}"`);
    }
  }

  if (typeof record.id !== "string" || !isValidSafeId(record.id)) {
    throw new Error(`Invalid or missing id in item: ${JSON.stringify(record.id)}`);
  }

  if (typeof record.title !== "string" || !record.title.trim()) {
    throw new Error(`Invalid or missing title in item ${record.id}`);
  }

  if (!record.source || typeof record.source !== "object" || typeof (record.source as any).name !== "string") {
    throw new Error(`Invalid or missing source.name in item ${record.id}`);
  }

  if (
    !record.links ||
    typeof record.links !== "object" ||
    typeof (record.links as any).aihot !== "string" ||
    typeof (record.links as any).original !== "string"
  ) {
    throw new Error(`Invalid or missing links in item ${record.id}`);
  }

  if (typeof record.discoveredAt !== "string") {
    throw new Error(`Invalid or missing discoveredAt in item ${record.id}`);
  }

  const publishedAt =
    record.publishedAt === undefined || record.publishedAt === null
      ? null
      : typeof record.publishedAt === "string"
      ? record.publishedAt
      : (() => {
          throw new Error(`Invalid publishedAt in item ${record.id}`);
        })();

  const summary =
    record.summary === undefined || record.summary === null
      ? null
      : typeof record.summary === "string"
      ? record.summary
      : (() => {
          throw new Error(`Invalid summary in item ${record.id}`);
        })();

  const category =
    record.category === undefined || record.category === null
      ? null
      : typeof record.category === "string"
      ? record.category
      : (() => {
          throw new Error(`Invalid category in item ${record.id}`);
        })();

  const score =
    record.score === undefined || record.score === null
      ? null
      : typeof record.score === "number"
      ? record.score
      : (() => {
          throw new Error(`Invalid score in item ${record.id}`);
        })();

  const selected = typeof record.selected === "boolean" ? record.selected : true;

  return {
    id: record.id,
    title: record.title,
    originalTitle: (record.originalTitle as string | null) ?? null,
    summary,
    source: {
      name: (record.source as { name: string }).name,
    },
    links: {
      aihot: (record.links as { aihot: string }).aihot,
      original: (record.links as { original: string }).original,
    },
    publishedAt,
    discoveredAt: record.discoveredAt,
    category,
    score,
    selected,
    reason: (record.reason as string | null) ?? null,
    attribution: (record.attribution as { name: string; url: string }) ?? undefined,
  };
}

export function itemToMarkdown(item: AihotItem): string {
  const frontmatter: FrontmatterData = {
    title: item.title,
    aihot_id: item.id,
    aihot_category: item.category,
    published_at: item.publishedAt,
    discovered_at: item.discoveredAt,
    source_name: item.source.name,
    original_url: item.links.original,
    canonical_url: item.links.aihot,
    score: item.score,
    content_kind: "news",
  };

  const yamlStr = YAML.stringify(frontmatter, {
    nullStr: "null",
    defaultStringType: "QUOTE_DOUBLE",
  });

  const bodyParts: string[] = [`# ${item.title}`];

  if (item.summary && item.summary.trim()) {
    bodyParts.push(item.summary.trim());
  }

  const provenance = [
    `- **来源**: ${item.source.name}`,
    `- **原文链接**: [${item.links.original}](${item.links.original})`,
    `- **AIHOT 链接**: [${item.links.aihot}](${item.links.aihot})`,
  ];
  bodyParts.push(provenance.join("\n"));

  return `---\n${yamlStr}---\n\n${bodyParts.join("\n\n")}\n`;
}

export function parseMarkdownFrontmatter(content: string): {
  frontmatter: Record<string, any>;
  body: string;
} {
  const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) {
    throw new Error("Invalid markdown: missing frontmatter delimiters");
  }

  const rawYaml = match[1];
  const body = match[2];
  const frontmatter = YAML.parse(rawYaml);

  return { frontmatter, body };
}
