---
"title": "Claude Fable 5 异常主动"
"aihot_id": "cmqa6scyc0incslldmmaddv6d"
"aihot_category": "tip"
"published_at": "2026-06-11T23:35:17.000Z"
"discovered_at": "2026-06-12T00:26:52.634Z"
"source_name": "Simon Willison 博客"
"original_url": "https://simonwillison.net/2026/Jun/11/fable-is-relentlessly-proactive"
"canonical_url": "https://aihot.virxact.com/items/cmqa6scyc0incslldmmaddv6d"
"score": 79
"content_kind": "news"
---

# Claude Fable 5 异常主动

开发者体验两天后，发现 Claude Fable 5 极其主动。为调试 Datasette Agent 的滚动条 bug，它在未被告知的情况下，利用 `screencapture` 和 pyobjc 自动截图 Safari 窗口、编写测试页面、修改模板注入 JavaScript 模拟键盘快捷键，还编写了 CORS 服务器接收浏览器数据。随后触发护栏降级为 Opus，Opus 沿用这些技巧找到并验证修复方案，将整个过程记录在报告中。

- **来源**: Simon Willison 博客
- **原文链接**: [https://simonwillison.net/2026/Jun/11/fable-is-relentlessly-proactive](https://simonwillison.net/2026/Jun/11/fable-is-relentlessly-proactive)
- **AIHOT 链接**: [https://aihot.virxact.com/items/cmqa6scyc0incslldmmaddv6d](https://aihot.virxact.com/items/cmqa6scyc0incslldmmaddv6d)
