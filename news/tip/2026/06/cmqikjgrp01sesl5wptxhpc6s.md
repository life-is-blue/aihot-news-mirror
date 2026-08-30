---
"title": "Google 分享 A2UI 与 MCP Apps 三种集成架构模式"
"aihot_id": "cmqikjgrp01sesl5wptxhpc6s"
"aihot_category": "tip"
"published_at": "2026-06-16T16:00:00.000Z"
"discovered_at": "2026-06-17T21:13:53.385Z"
"source_name": "Google Developers Blog（RSS）"
"original_url": "https://developers.googleblog.com/a2ui-and-mcp-apps"
"canonical_url": "https://aihot.virxact.com/items/cmqikjgrp01sesl5wptxhpc6s"
"score": 64
"content_kind": "news"
---

# Google 分享 A2UI 与 MCP Apps 三种集成架构模式

Google 分享了三种集成 A2UI 与 MCP Apps 的架构模式，旨在结合两者优势。A2UI 采用声明式框架，通过 JSON payload 定义 UI，由宿主原生渲染，确保一致性与安全性，但受限于预定义组件库。MCP Apps 在 iframe 中使用标准 Web 技术提供自定义界面，但存在设计碎片化、性能与安全挑战。三种模式包括：通过 MCP 服务器提供 A2UI，利用 MCP Resources 或 Tool 调用传递 JSON，实现"一次编写，原生渲染"的跨平台能力；以及静态与动态交付方案。Google 正考虑扩展 MCP 以原生支持 A2UI。

- **来源**: Google Developers Blog（RSS）
- **原文链接**: [https://developers.googleblog.com/a2ui-and-mcp-apps](https://developers.googleblog.com/a2ui-and-mcp-apps)
- **AIHOT 链接**: [https://aihot.virxact.com/items/cmqikjgrp01sesl5wptxhpc6s](https://aihot.virxact.com/items/cmqikjgrp01sesl5wptxhpc6s)
