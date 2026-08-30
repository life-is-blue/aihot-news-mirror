---
"title": "使用 Claude Code：会话管理与百万级上下文窗口的策略"
"aihot_id": "cmo0p96zy026ksli2n2u47nfc"
"aihot_category": "tip"
"published_at": "2026-04-15T22:47:45.000Z"
"discovered_at": "2026-04-15T23:46:34.391Z"
"source_name": "X：Thariq (@trq212)"
"original_url": "https://x.com/trq212/status/2044548257058328723"
"canonical_url": "https://aihot.virxact.com/items/cmo0p96zy026ksli2n2u47nfc"
"score": 72
"content_kind": "news"
---

# 使用 Claude Code：会话管理与百万级上下文窗口的策略

Claude Code 的百万级上下文窗口在支持长任务的同时，也带来了"上下文腐化"的风险，即模型性能可能在处理约30-40万token后开始下降。因此，有效的会话管理至关重要。关键策略包括：开启新任务时建议新建会话；对于关联任务可酌情保留上下文以提升效率；善用 `/rewind` 回退功能而非直接纠正错误，是维护上下文清洁的核心习惯。用户在每个对话轮次后，应根据情况选择继续、回退、新建会话、压缩或使用子代理。

- **来源**: X：Thariq (@trq212)
- **原文链接**: [https://x.com/trq212/status/2044548257058328723](https://x.com/trq212/status/2044548257058328723)
- **AIHOT 链接**: [https://aihot.virxact.com/items/cmo0p96zy026ksli2n2u47nfc](https://aihot.virxact.com/items/cmo0p96zy026ksli2n2u47nfc)
