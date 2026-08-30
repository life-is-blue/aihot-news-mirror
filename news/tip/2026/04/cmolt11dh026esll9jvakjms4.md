---
"title": "Claude Code 构建经验：提示缓存的优化实践"
"aihot_id": "cmolt11dh026esll9jvakjms4"
"aihot_category": "tip"
"published_at": "2026-04-29T16:00:00.000Z"
"discovered_at": "2026-04-30T18:15:27.333Z"
"source_name": "Claude：Blog（网页）"
"original_url": "https://claude.com/blog/lessons-from-building-claude-code-prom\
  pt-caching-is-everything"
"canonical_url": "https://aihot.virxact.com/items/cmolt11dh026esll9jvakjms4"
"score": 64
"content_kind": "news"
---

# Claude Code 构建经验：提示缓存的优化实践

Claude Code 团队分享了大规模优化提示缓存的核心策略。提示缓存基于前缀匹配工作，能显著降低延迟与成本，高命中率还能支持更宽松的订阅速率限制。关键实践包括：将静态系统提示和工具定义置于提示词前端以最大化共享前缀；通过消息而非修改提示词来传递更新信息，避免缓存失效；在会话中不切换模型、不增删工具，以维持缓存前缀稳定。此外，针对工具过多或"计划模式"等场景，可通过发送轻量存根或设计专用工具来规避缓存失效，从而在复杂功能中持续利用缓存优势。

- **来源**: Claude：Blog（网页）
- **原文链接**: [https://claude.com/blog/lessons-from-building-claude-code-prompt-caching-is-everything](https://claude.com/blog/lessons-from-building-claude-code-prompt-caching-is-everything)
- **AIHOT 链接**: [https://aihot.virxact.com/items/cmolt11dh026esll9jvakjms4](https://aihot.virxact.com/items/cmolt11dh026esll9jvakjms4)
