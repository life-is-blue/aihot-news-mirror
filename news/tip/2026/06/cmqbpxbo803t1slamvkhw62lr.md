---
"title": "OpenRouter 可靠性与自动故障转移：请求如何持续成功"
"aihot_id": "cmqbpxbo803t1slamvkhw62lr"
"aihot_category": "tip"
"published_at": "2026-06-12T16:00:00.000Z"
"discovered_at": "2026-06-13T02:10:22.554Z"
"source_name": "OpenRouter：Announcements（RSS）"
"original_url": "https://openrouter.ai/blog/insights/reliability-failover"
"canonical_url": "https://aihot.virxact.com/items/cmqbpxbo803t1slamvkhw62lr"
"score": 59
"content_kind": "news"
---

# OpenRouter 可靠性与自动故障转移：请求如何持续成功

OpenRouter 默认启用提供商故障转移（provider failover），模型回退（model fallbacks）则为选择加入。这两层机制分别应对不同类型的故障：提供商故障转移在 API 调用失败时自动切换至其他提供商，模型回退则在指定模型不可用时切换到备选模型。公告详细说明了各层的工作原理以及故障转移的停止条件。

- **来源**: OpenRouter：Announcements（RSS）
- **原文链接**: [https://openrouter.ai/blog/insights/reliability-failover](https://openrouter.ai/blog/insights/reliability-failover)
- **AIHOT 链接**: [https://aihot.virxact.com/items/cmqbpxbo803t1slamvkhw62lr](https://aihot.virxact.com/items/cmqbpxbo803t1slamvkhw62lr)
