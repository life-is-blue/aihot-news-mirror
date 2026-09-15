---
"title": "Anthropic 工程师复盘：智能体编程压力下如何扩展测试影响分析服务"
"aihot_id": "cmu1miqz1154mrocnhtw6icqw"
"aihot_category": "tip"
"published_at": "2026-09-13T16:00:00.000Z"
"discovered_at": "2026-09-14T19:15:56.861Z"
"source_name": "Claude：Blog（网页）"
"original_url": "https://claude.com/blog/agentic-coding-is-straining-ci-heres-h\
  ow-we-scaled-test-impact-analysis-at-anthropic"
"canonical_url": "https://aihot.news/items/cmu1miqz1154mrocnhtw6icqw"
"score": 66
"content_kind": "news"
---

# Anthropic 工程师复盘：智能体编程压力下如何扩展测试影响分析服务

Anthropic 工程师撰文分享如何在智能体编程压力下扩展测试影响分析服务。Claude 编写约 80% 的代码，测试数量增长 10x，六个月内 CI 任务增加 25x。文章复盘了三个临时补丁（扩容、按包分片、每日重启）分别只维持 70 天、29 天和不到一天，最终用三周重设计为无状态、内存存储加 journal 的可水平扩展架构，并建议团队按两季度内 25x 负载做容量规划。

- **来源**: Claude：Blog（网页）
- **原文链接**: [https://claude.com/blog/agentic-coding-is-straining-ci-heres-how-we-scaled-test-impact-analysis-at-anthropic](https://claude.com/blog/agentic-coding-is-straining-ci-heres-how-we-scaled-test-impact-analysis-at-anthropic)
- **AIHOT 链接**: [https://aihot.news/items/cmu1miqz1154mrocnhtw6icqw](https://aihot.news/items/cmu1miqz1154mrocnhtw6icqw)
