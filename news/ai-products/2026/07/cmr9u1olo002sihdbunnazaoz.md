---
"title": "Claude Code v2.1.202 发布"
"aihot_id": "cmr9u1olo002sihdbunnazaoz"
"aihot_category": "ai-products"
"published_at": "2026-07-06T22:51:16.000Z"
"discovered_at": "2026-07-06T23:09:54.593Z"
"source_name": "Claude Code：GitHub Releases（RSS）"
"original_url": "https://github.com/anthropics/claude-code/releases/tag/v2.1.202"
"canonical_url": "https://aihot.virxact.com/items/cmr9u1olo002sihdbunnazaoz"
"score": 67
"content_kind": "news"
---

# Claude Code v2.1.202 发布

Claude Code v2.1.202 在 `/config` 中新增"Dynamic workflow size"设置，可控制动态工作流的 agent 数量规模（小/中/大），作为指导性建议而非硬性上限。工作流派生的 agent 现在会发射 `workflow.run_id` 和 `workflow.name` 的 OpenTelemetry 属性。修复了 mTLS 握手失败、远程控制发送命令失败、移动端发送无说明图片被静默丢弃、语音听写在麦克风故障时无限重试（改为暂停输入）、重载已有技能导致重复指令等问题。改进了工作流 agent 列表布局，MCP 错误消息更清晰。`/review <pr>` 恢复为快速单次审查，多 agent 审查请使用 `/code-review`。

- **来源**: Claude Code：GitHub Releases（RSS）
- **原文链接**: [https://github.com/anthropics/claude-code/releases/tag/v2.1.202](https://github.com/anthropics/claude-code/releases/tag/v2.1.202)
- **AIHOT 链接**: [https://aihot.virxact.com/items/cmr9u1olo002sihdbunnazaoz](https://aihot.virxact.com/items/cmr9u1olo002sihdbunnazaoz)
