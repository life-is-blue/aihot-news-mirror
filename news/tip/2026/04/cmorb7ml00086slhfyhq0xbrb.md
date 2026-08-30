---
"title": "关于近期 Claude Code 质量报告的更新说明"
"aihot_id": "cmorb7ml00086slhfyhq0xbrb"
"aihot_category": "tip"
"published_at": "2026-04-22T16:00:00.000Z"
"discovered_at": "2026-05-04T14:43:18.055Z"
"source_name": "Anthropic：Engineering（事故复盘 + 工程实践 · 网页）"
"original_url": "https://www.anthropic.com/engineering/april-23-postmortem"
"canonical_url": "https://aihot.virxact.com/items/cmorb7ml00086slhfyhq0xbrb"
"score": 72
"content_kind": "news"
---

# 关于近期 Claude Code 质量报告的更新说明

Anthropic 确认并解决了过去一个月影响 Claude Code、Claude Agent SDK 和 Claude Cowork 的三个问题，所有问题已于 4 月 20 日修复。具体包括：3月4日将 Claude Code 的默认推理强度从"高"改为"中"，导致用户感知智能下降，已于4月7日回滚；3月26日一项缓存优化存在缺陷，导致会话恢复后模型"健忘"和重复，4月10日修复；4月16日一项旨在减少冗余的系统提示指令意外损害了代码质量，4月20日撤销。这些问题影响了 Sonnet 4.6 和 Opus 4.6/4.7 模型，但 API 未受影响。公司已重置所有订阅用户的使用限额，并承诺改进流程以防止类似问题。

- **来源**: Anthropic：Engineering（事故复盘 + 工程实践 · 网页）
- **原文链接**: [https://www.anthropic.com/engineering/april-23-postmortem](https://www.anthropic.com/engineering/april-23-postmortem)
- **AIHOT 链接**: [https://aihot.virxact.com/items/cmorb7ml00086slhfyhq0xbrb](https://aihot.virxact.com/items/cmorb7ml00086slhfyhq0xbrb)
