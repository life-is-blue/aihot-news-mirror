---
"title": "Claude Code 入门：智能体循环"
"aihot_id": "cmr0x7y97001yslb3tyb8w4ce"
"aihot_category": "tip"
"published_at": "2026-06-29T16:00:00.000Z"
"discovered_at": "2026-06-30T17:28:28.530Z"
"source_name": "Claude：Blog（网页）"
"original_url": "https://claude.com/blog/getting-started-with-loops"
"canonical_url": "https://aihot.virxact.com/items/cmr0x7y97001yslb3tyb8w4ce"
"score": 72
"content_kind": "news"
---

# Claude Code 入门：智能体循环

Claude Code 团队将智能体循环定义为 agent 重复工作直到满足停止条件的过程，并划分出四种主要类型：turn-based 循环（用户提示触发，Claude 自行判断完成或需更多上下文）、goal-based 循环（通过 `/goal` 命令设定可验证完成标准与最大轮次）、time-based 循环（通过 `/loop` 按时间间隔重复执行，可用 `/schedule` 移至云端）、以及 proactive 循环（基于事件或计划自动运行，无人实时参与）。文章还介绍了如何编写 SKILL.md 文件将人工验证步骤编码，让 Claude 进行端到端自检，减少 turn-based 循环中的手动操作。

- **来源**: Claude：Blog（网页）
- **原文链接**: [https://claude.com/blog/getting-started-with-loops](https://claude.com/blog/getting-started-with-loops)
- **AIHOT 链接**: [https://aihot.virxact.com/items/cmr0x7y97001yslb3tyb8w4ce](https://aihot.virxact.com/items/cmr0x7y97001yslb3tyb8w4ce)
