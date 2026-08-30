# aihot-news-mirror

> 独立、可审计的 AIHOT 新闻 Git Markdown 镜像数据源。

## 1. 职责与定位

`aihot-news-mirror` 是一个自动化维护的公开 Git 仓库，负责将 AIHOT (https://aihot.virxact.com) 官方精选新闻流转换为结构化、版本化、可审计的 Markdown 文档。

- **解耦边界**：上游对接 AIHOT OpenAPI (`/api/v1/selected/snapshot` 与 `/api/v1/selected/changes`)；下游作为标准 Git 仓库供 `git-library` 等系统消费。
- **协议隔离**：下游消费者仅需通过普通 Git clone / pull 获取 Markdown，无需感知 AIHOT 协议、Snapshot、Changes、Cursor 或 ETag。

## 2. 数据目录与文件规范

### 2.1 目录布局
```text
news/
  ├── ai-models/
  │   └── 2026/02/cmnw1xr1o003zslc3y7ndvr9i.md
  ├── ai-products/
  ├── industry/
  ├── paper/
  ├── tip/
  └── other/
state/
  ├── sync-state.json
  └── id-map.json
```

- **路径规则**：`news/{category}/{YYYY}/{MM}/{id}.md`
- **分类路由**：已知分类（`ai-models`, `ai-products`, `industry`, `paper`, `tip`）放入对应目录；`null` 或未来未知分类统一落入 `news/other/` 目录，并在 frontmatter 中保留原始值。
- **时间路由**：优先使用 `published_at` 定位 `YYYY/MM`；若 `published_at` 为 null 则使用 `discovered_at`。
- **安全防逃逸**：ID 严格限制安全字符集，杜绝路径穿越与非法字符。

### 2.2 Markdown 契约
每个 Markdown 文件均包含完整的 YAML frontmatter 与溯源正文：
```yaml
---
title: "Sora 2"
aihot_id: "cmnw1xr1o003zslc3y7ndvr9i"
aihot_category: null
published_at: "2025-09-30T17:13:47.000Z"
discovered_at: "2025-09-30T17:13:47.000Z"
source_name: "Sam Altman：Blog（RSS）"
original_url: "https://blog.samaltman.com/sora-2"
canonical_url: "https://aihot.virxact.com/items/cmnw1xr1o003zslc3y7ndvr9i"
score: null
content_kind: "news"
---

# Sora 2

OpenAI发布Sora应用，集成Sora 2模型，支持快速创作、分享和观看视频...

- **来源**: Sam Altman：Blog（RSS）
- **原文链接**: [https://blog.samaltman.com/sora-2](https://blog.samaltman.com/sora-2)
- **AIHOT 链接**: [https://aihot.virxact.com/items/cmnw1xr1o003zslc3y7ndvr9i](https://aihot.virxact.com/items/cmnw1xr1o003zslc3y7ndvr9i)
```

## 3. 同步、增量与原子回滚

- **首次全量 (Snapshot)**：通过 `/api/v1/selected/snapshot` 分页抓取全量数据，记录基线 `cursor`，跨页 cursor 不一致时拒绝提交。
- **持续增量 (Changes)**：基于 `state/sync-state.json` 中的 `cursor` 水位调用 `/api/v1/selected/changes`，处理 `upsert`（自动处理分类或时间变更导致的路径迁移）与 `remove`（幂等物理删除）。
- **原子暂存与晋升**：同步过程在同文件系统 staging 目录执行，全流程（所有网络响应、文件写入、state 计算）成功后原子替换工作树；任何一步失败均完整回滚，确保 `news/` 与 `state/` 逐字节一致。
- **故障自愈**：遇 `409 snapshot_required` 自动回退全量重建；遇 `304 Not Modified` 零修改；遇 `429/503` 遵循 `Retry-After` 有界重试。
- **自动化运行**：GitHub Actions 每 30 分钟定时运行，仅当工作区产生 diff 时创建提交并推送。

## 4. 来源与授权声明

- **代码授权**：本项目同步工具及测试源码采用 [MIT License](LICENSE)。
- **数据与内容版权**：新闻标题、摘要、发布时间及原文链接均来源于 [AIHOT](https://aihot.virxact.com) 及其原始第三方来源。数据内容非 MIT 授权，个人非商用访问须遵守 [AIHOT 使用条款](https://aihot.virxact.com/terms) 与原权利人版权。
