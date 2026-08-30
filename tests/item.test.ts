import { describe, expect, it } from "bun:test";
import singleFixture from "../fixtures/openapi-snapshot-single.json";
import legacyFixture from "../fixtures/legacy-snake-case.json";
import { parseItem, computeItemPath, itemToMarkdown, parseMarkdownFrontmatter } from "../src/item";

describe("Task 1: AIHOT Mirror Item Parser & File Contract", () => {
  it("parses valid OpenAPI Item with camelCase and nullable fields", () => {
    const raw = singleFixture.items[0];
    const item = parseItem(raw);

    expect(item.id).toBe("cmnw1xr1o003zslc3y7ndvr9i");
    expect(item.title).toBe("Sora 2");
    expect(item.source.name).toBe("Sam Altman：Blog（RSS）");
    expect(item.links.aihot).toBe("https://aihot.virxact.com/items/cmnw1xr1o003zslc3y7ndvr9i");
    expect(item.links.original).toBe("https://blog.samaltman.com/sora-2");
    expect(item.category).toBeNull();
    expect(item.score).toBeNull();
    expect(item.publishedAt).toBe("2025-09-30T17:13:47.000Z");
    expect(item.discoveredAt).toBe("2025-09-30T17:13:47.000Z");
  });

  it("tolerates future category strings and preserves them in parsed item", () => {
    const raw = {
      ...singleFixture.items[0],
      id: "future_cat_1",
      category: "quantum-super-ai",
      score: 95.5,
    };
    const item = parseItem(raw);
    expect(item.category).toBe("quantum-super-ai");
    expect(item.score).toBe(95.5);
  });

  it("rejects legacy snake_case shapes loudly", () => {
    expect(() => parseItem(legacyFixture)).toThrow();
    expect(() => parseItem({
      id: "test1",
      title: "Test",
      source_name: "Source",
      links: { aihot: "https://aihot", original: "https://orig" },
    })).toThrow();
  });

  it("rejects items missing required fields", () => {
    expect(() => parseItem({})).toThrow();
    expect(() => parseItem({ id: "123" })).toThrow();
    expect(() => parseItem({ id: "123", title: "Test", source: {} })).toThrow();
  });

  describe("computeItemPath", () => {
    it("determines path for standard category with publishedAt", () => {
      const item = {
        id: "abc12345",
        category: "ai-models",
        publishedAt: "2025-09-30T17:13:47.000Z",
        discoveredAt: "2025-09-30T17:13:47.000Z",
      };
      expect(computeItemPath(item)).toBe("news/ai-models/2025/09/abc12345.md");
    });

    it("routes null category to other", () => {
      const item = {
        id: "abc12345",
        category: null,
        publishedAt: "2026-01-15T10:00:00.000Z",
        discoveredAt: "2026-01-15T10:00:00.000Z",
      };
      expect(computeItemPath(item)).toBe("news/other/2026/01/abc12345.md");
    });

    it("routes unknown / future category to other folder", () => {
      const item = {
        id: "abc12345",
        category: "neuro-symbolic-v2",
        publishedAt: "2026-03-01T12:00:00.000Z",
        discoveredAt: "2026-03-01T12:00:00.000Z",
      };
      expect(computeItemPath(item)).toBe("news/other/2026/03/abc12345.md");
    });

    it("uses discoveredAt when publishedAt is null", () => {
      const item = {
        id: "abc12345",
        category: "industry",
        publishedAt: null,
        discoveredAt: "2025-11-20T08:30:00.000Z",
      };
      expect(computeItemPath(item)).toBe("news/industry/2025/11/abc12345.md");
    });

    it("prevents path traversal escapes and rejects unsafe IDs", () => {
      expect(() => computeItemPath({
        id: "../escape",
        category: "ai-models",
        publishedAt: "2025-09-30T17:13:47.000Z",
        discoveredAt: "2025-09-30T17:13:47.000Z",
      })).toThrow();

      expect(() => computeItemPath({
        id: "foo/bar",
        category: "ai-models",
        publishedAt: "2025-09-30T17:13:47.000Z",
        discoveredAt: "2025-09-30T17:13:47.000Z",
      })).toThrow();

      expect(() => computeItemPath({
        id: "foo\\bar",
        category: "ai-models",
        publishedAt: "2025-09-30T17:13:47.000Z",
        discoveredAt: "2025-09-30T17:13:47.000Z",
      })).toThrow();

      expect(() => computeItemPath({
        id: "hello world",
        category: "ai-models",
        publishedAt: "2025-09-30T17:13:47.000Z",
        discoveredAt: "2025-09-30T17:13:47.000Z",
      })).toThrow();

      expect(() => computeItemPath({
        id: "",
        category: "ai-models",
        publishedAt: "2025-09-30T17:13:47.000Z",
        discoveredAt: "2025-09-30T17:13:47.000Z",
      })).toThrow();
    });
  });

  describe("itemToMarkdown and frontmatter contract", () => {
    it("generates markdown with required frontmatter and preserved provenance", () => {
      const raw = singleFixture.items[0];
      const item = parseItem(raw);
      const md = itemToMarkdown(item);

      const parsed = parseMarkdownFrontmatter(md);
      expect(parsed.frontmatter.title).toBe("Sora 2");
      expect(parsed.frontmatter.aihot_id).toBe("cmnw1xr1o003zslc3y7ndvr9i");
      expect(parsed.frontmatter.aihot_category).toBeNull();
      expect(parsed.frontmatter.published_at).toBe("2025-09-30T17:13:47.000Z");
      expect(parsed.frontmatter.discovered_at).toBe("2025-09-30T17:13:47.000Z");
      expect(parsed.frontmatter.source_name).toBe("Sam Altman：Blog（RSS）");
      expect(parsed.frontmatter.original_url).toBe("https://blog.samaltman.com/sora-2");
      expect(parsed.frontmatter.canonical_url).toBe("https://aihot.virxact.com/items/cmnw1xr1o003zslc3y7ndvr9i");
      expect(parsed.frontmatter.score).toBeNull();
      expect(parsed.frontmatter.content_kind).toBe("news");

      // Body contains title, summary and provenance
      expect(parsed.body).toContain("# Sora 2");
      expect(parsed.body).toContain(item.summary);
      expect(parsed.body).toContain("Sam Altman：Blog（RSS）");
      expect(parsed.body).toContain("https://blog.samaltman.com/sora-2");
      expect(parsed.body).toContain("https://aihot.virxact.com/items/cmnw1xr1o003zslc3y7ndvr9i");
    });

    it("retains original category in frontmatter even when category is unknown/future", () => {
      const raw = {
        ...singleFixture.items[0],
        id: "future_cat_2",
        category: "quantum-super-ai",
        score: 88,
      };
      const item = parseItem(raw);
      const md = itemToMarkdown(item);
      const parsed = parseMarkdownFrontmatter(md);

      expect(parsed.frontmatter.aihot_category).toBe("quantum-super-ai");
      expect(parsed.frontmatter.score).toBe(88);
    });
  });
});
