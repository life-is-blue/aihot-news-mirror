---
"title": "如何让 Claude 不再说\"honest takes\"和\"load-bearing seams\""
"aihot_id": "cmrkw6m9501y5bi5qzfw2z9n5"
"aihot_category": "tip"
"published_at": "2026-07-14T16:39:15.519Z"
"discovered_at": "2026-07-14T16:55:11.332Z"
"source_name": "Hacker News 热门（buzzing.cc 中文翻译）"
"original_url": "https://jola.dev/posts/how-to-stop-claude-from-saying-load-bearing"
"canonical_url": "https://aihot.virxact.com/items/cmrkw6m9501y5bi5qzfw2z9n5"
"score": 70
"content_kind": "news"
---

# 如何让 Claude 不再说"honest takes"和"load-bearing seams"

用户可通过 Claude 的 MessageDisplay Hook 机制自定义词汇替换。编写 Python 脚本，将"seam"替换为"whatchamacallit"、"you're absolutely right"替换为"I'm a complete clown"、"honest take"替换为"spicy doodad"、"load-bearing"替换为"cooked"，保存为 `~/.claude/hooks/wordswap.sh` 并赋予执行权限，再在 `~/.claude/settings.json` 的 hooks 块中配置该命令。Hook 在启动时加载，新会话即生效。

- **来源**: Hacker News 热门（buzzing.cc 中文翻译）
- **原文链接**: [https://jola.dev/posts/how-to-stop-claude-from-saying-load-bearing](https://jola.dev/posts/how-to-stop-claude-from-saying-load-bearing)
- **AIHOT 链接**: [https://aihot.virxact.com/items/cmrkw6m9501y5bi5qzfw2z9n5](https://aihot.virxact.com/items/cmrkw6m9501y5bi5qzfw2z9n5)
