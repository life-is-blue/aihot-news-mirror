---
"title": "Claude Code 团队详解四种智能体循环类型"
"aihot_id": "cmr9lm48z00u7ihe85tjkvn5t"
"aihot_category": "tip"
"published_at": "2026-07-06T19:08:45.000Z"
"discovered_at": "2026-07-06T19:13:51.743Z"
"source_name": "X：Claude Devs (@ClaudeDevs)"
"original_url": "https://x.com/ClaudeDevs/status/2074208949205881033"
"canonical_url": "https://aihot.virxact.com/items/cmr9lm48z00u7ihe85tjkvn5t"
"score": 70
"content_kind": "news"
---

# Claude Code 团队详解四种智能体循环类型

Claude Code 团队将"设计循环"定义为智能体重复工作直到满足停止条件，划分四种类型：1）回合循环--手动提示触发，Claude 自判完成，适合短任务，可通过 SKILL.md 提升验证；2）目标循环--`/goal` 手动触发，达成目标或达最大轮数停止，需确定性完成标准（如测试通过数）；3）时间循环--`/loop` 和 `/schedule` 按间隔触发，适合同步消息、检查 PR 等重复任务，可云端运行；4）主动循环--事件或计划触发，无人实时参与，每个子任务独立退出。建议从最简单方案开始，选择性使用复杂循环。

- **来源**: X：Claude Devs (@ClaudeDevs)
- **原文链接**: [https://x.com/ClaudeDevs/status/2074208949205881033](https://x.com/ClaudeDevs/status/2074208949205881033)
- **AIHOT 链接**: [https://aihot.virxact.com/items/cmr9lm48z00u7ihe85tjkvn5t](https://aihot.virxact.com/items/cmr9lm48z00u7ihe85tjkvn5t)
