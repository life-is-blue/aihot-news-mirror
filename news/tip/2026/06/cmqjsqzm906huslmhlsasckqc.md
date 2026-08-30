---
"title": "驾驭 Claude Code：CLAUDE.md、技能、钩子、规则、子智能体等"
"aihot_id": "cmqjsqzm906huslmhlsasckqc"
"aihot_category": "tip"
"published_at": "2026-06-17T16:00:00.000Z"
"discovered_at": "2026-06-18T17:51:29.795Z"
"source_name": "Claude：Blog（网页）"
"original_url": "https://claude.com/blog/steering-claude-code-skills-hooks-rule\
  s-subagents-and-more"
"canonical_url": "https://aihot.virxact.com/items/cmqjsqzm906huslmhlsasckqc"
"score": 72
"content_kind": "news"
---

# 驾驭 Claude Code：CLAUDE.md、技能、钩子、规则、子智能体等

Claude Code 提供七种自定义指令方式：CLAUDE.md（根目录始终加载，子目录按需加载）、规则（无范围或路径范围）、技能（按需调用，共享 token 预算）、子智能体（隔离上下文运行并返回最终消息）、钩子（生命周期事件触发，绕过压缩）、输出样式（注入系统提示，永不压缩）和附加系统提示（CLI 标志，仅单次有效）。每种方式在加载时机、压缩行为、上下文成本和适用场景上各有不同，例如 CLAUDE.md 适合存放构建命令与编码规范，路径范围规则避免无关上下文消耗，子智能体用于并行隔离任务，钩子用于确定性自动化（如运行 linter 或备份聊天记录）。

- **来源**: Claude：Blog（网页）
- **原文链接**: [https://claude.com/blog/steering-claude-code-skills-hooks-rules-subagents-and-more](https://claude.com/blog/steering-claude-code-skills-hooks-rules-subagents-and-more)
- **AIHOT 链接**: [https://aihot.virxact.com/items/cmqjsqzm906huslmhlsasckqc](https://aihot.virxact.com/items/cmqjsqzm906huslmhlsasckqc)
