---
"title": "Claude Code v2.1.152 更新发布"
"aihot_id": "cmpne4ihk0wscsl012kwlngba"
"aihot_category": "ai-products"
"published_at": "2026-05-27T01:30:59.000Z"
"discovered_at": "2026-05-27T01:33:32.559Z"
"source_name": "Claude Code：GitHub Releases（RSS）"
"original_url": "https://github.com/anthropics/claude-code/releases/tag/v2.1.152"
"canonical_url": "https://aihot.virxact.com/items/cmpne4ihk0wscsl012kwlngba"
"score": 71
"content_kind": "news"
---

# Claude Code v2.1.152 更新发布

Claude Code 发布 v2.1.152 版本更新。核心改进包括：`/code-review --fix` 现在会将审查建议直接应用于工作目录；技能与斜杠命令支持通过 frontmatter 的 `disallowed-tools` 移除模型工具；新增 `/reload-skills` 命令可不重启会话重新扫描技能目录；`SessionStart` 钩子现可返回 `reloadSkills： true` 重新扫描技能，并可通过 `hookSpecificOutput.sessionTitle` 设置会话标题；新增 `MessageDisplay` 钩子事件以变换或隐藏助手消息。其他更新涉及插件市场管理、主模型不可用时自动切换至 `--fallback-model`、会话用量统计优化等。同时修复了终端样式退化、沙箱警告显示、思考摘要、MCP 服务器去重、远程会话连接及多种会话卡顿问题。

- **来源**: Claude Code：GitHub Releases（RSS）
- **原文链接**: [https://github.com/anthropics/claude-code/releases/tag/v2.1.152](https://github.com/anthropics/claude-code/releases/tag/v2.1.152)
- **AIHOT 链接**: [https://aihot.virxact.com/items/cmpne4ihk0wscsl012kwlngba](https://aihot.virxact.com/items/cmpne4ihk0wscsl012kwlngba)
