---
"title": "Anthropic 复盘 Claude 三个基础设施 bug 的根因与修复过程"
"aihot_id": "a1axecn39m6ecgioqf7ychna4"
"aihot_category": "industry"
"published_at": "2025-09-16T16:00:00.000Z"
"discovered_at": "2026-10-20T17:48:30.112Z"
"source_name": "Anthropic：Newsroom（网页）"
"original_url": "https://www.anthropic.com/research/a-postmortem-of-three-recent-issues"
"canonical_url": "https://aihot.news/items/a1axecn39m6ecgioqf7ychna4"
"score": 73
"content_kind": "news"
---

# Anthropic 复盘 Claude 三个基础设施 bug 的根因与修复过程

Anthropic 官方复盘 8 月至 9 月初导致 Claude 响应质量下降的三个基础设施 bug：上下文窗口路由错误使 8 月 31 日最多 16% 的 Sonnet 4 请求受影响，约 30% 的 Claude Code 用户至少有一条消息被路由到错误服务器；TPU 配置错误导致输出乱码；XLA:TPU 近似 top-k 编译错误影响 Haiku 3.5 等模型。

- **来源**: Anthropic：Newsroom（网页）
- **原文链接**: [https://www.anthropic.com/research/a-postmortem-of-three-recent-issues](https://www.anthropic.com/research/a-postmortem-of-three-recent-issues)
- **AIHOT 链接**: [https://aihot.news/items/a1axecn39m6ecgioqf7ychna4](https://aihot.news/items/a1axecn39m6ecgioqf7ychna4)
