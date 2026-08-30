---
"title": "近期三次基础设施故障的事后分析"
"aihot_id": "cmorb7ml0008lslhfg5zt80v7"
"aihot_category": "tip"
"published_at": "2025-09-16T16:00:00.000Z"
"discovered_at": "2025-09-16T16:00:00.000Z"
"source_name": "Anthropic：Engineering（事故复盘 + 工程实践 · 网页）"
"original_url": "https://www.anthropic.com/engineering/a-postmortem-of-three-recent-issues"
"canonical_url": "https://aihot.virxact.com/items/cmorb7ml0008lslhfg5zt80v7"
"score": 73
"content_kind": "news"
---

# 近期三次基础设施故障的事后分析

八月初至九月中旬，Anthropic的三次基础设施漏洞间歇性导致Claude响应质量下降。8月5日，上下文窗口路由错误致使部分Sonnet 4请求被误导向百万token服务器，8月31日高峰时影响16%请求。8月25日，TPU服务器错误配置引发输出损坏，可能在英文回复中生成泰文或中文字符，影响Opus和Sonnet模型。同日部署的代码还触发了编译器漏洞，主要影响Haiku 3.5。所有问题均非需求或负载所致，纯属基础设施漏洞。公司通过回滚部署和修复逻辑于9月18日前全部解决。

- **来源**: Anthropic：Engineering（事故复盘 + 工程实践 · 网页）
- **原文链接**: [https://www.anthropic.com/engineering/a-postmortem-of-three-recent-issues](https://www.anthropic.com/engineering/a-postmortem-of-three-recent-issues)
- **AIHOT 链接**: [https://aihot.virxact.com/items/cmorb7ml0008lslhfg5zt80v7](https://aihot.virxact.com/items/cmorb7ml0008lslhfg5zt80v7)
