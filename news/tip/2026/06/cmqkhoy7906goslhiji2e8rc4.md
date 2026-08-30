---
"title": "我们在 Elasticsearch 上构建了一个持久化代理内存层，其召回率为0.89"
"aihot_id": "cmqkhoy7906goslhiji2e8rc4"
"aihot_category": "tip"
"published_at": "2026-06-19T05:01:18.006Z"
"discovered_at": "2026-06-19T05:29:50.847Z"
"source_name": "Hacker News 热门（buzzing.cc 中文翻译）"
"original_url": "https://www.elastic.co/search-labs/blog/agent-memory-elasticsearch"
"canonical_url": "https://aihot.virxact.com/items/cmqkhoy7906goslhiji2e8rc4"
"score": 73
"content_kind": "news"
---

# 我们在 Elasticsearch 上构建了一个持久化代理内存层，其召回率为0.89

Agent Builder 正式上市（GA）。基于 Elasticsearch 的持久化内存层将记忆分为情景、语义、程序三类，分别存入独立索引，各设不同写速率与过期规则。召回采用 BM25 与 Jina v5 稠密向量的 RRF 融合，再经交叉编码器重排序。在 168 道 QA 题评估中，R@10 平均 0.89，零跨租户泄漏。该层可通过支持 MCP 协议的客户端访问，不绑定特定运行时，已开源至 GitHub。

- **来源**: Hacker News 热门（buzzing.cc 中文翻译）
- **原文链接**: [https://www.elastic.co/search-labs/blog/agent-memory-elasticsearch](https://www.elastic.co/search-labs/blog/agent-memory-elasticsearch)
- **AIHOT 链接**: [https://aihot.virxact.com/items/cmqkhoy7906goslhiji2e8rc4](https://aihot.virxact.com/items/cmqkhoy7906goslhiji2e8rc4)
