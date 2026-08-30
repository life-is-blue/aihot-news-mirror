---
"title": "Claude-thermos：保持 Claude 会话缓存热度，避免重新编码费用"
"aihot_id": "cmryrjtlb04ehrolgi1zd6eqv"
"aihot_category": "tip"
"published_at": "2026-07-24T09:47:29.601Z"
"discovered_at": "2026-07-24T09:54:16.034Z"
"source_name": "Hacker News 热门（buzzing.cc 中文翻译）"
"original_url": "https://github.com/izeigerman/claude-thermos"
"canonical_url": "https://aihot.virxact.com/items/cmryrjtlb04ehrolgi1zd6eqv"
"score": 79
"content_kind": "news"
---

# Claude-thermos：保持 Claude 会话缓存热度，避免重新编码费用

Claude-thermos 通过本地反向代理监控 Claude Code 会话，在主智能体因等待子智能体而空闲超过 5 分钟时，自动发送预热请求刷新提示缓存。实测约 185 次本地会话中，缓存过期导致的重新编码占账单约 22%。工具以 uvx 运行，支持自定义空闲阈值和预热间隔。

- **来源**: Hacker News 热门（buzzing.cc 中文翻译）
- **原文链接**: [https://github.com/izeigerman/claude-thermos](https://github.com/izeigerman/claude-thermos)
- **AIHOT 链接**: [https://aihot.virxact.com/items/cmryrjtlb04ehrolgi1zd6eqv](https://aihot.virxact.com/items/cmryrjtlb04ehrolgi1zd6eqv)
