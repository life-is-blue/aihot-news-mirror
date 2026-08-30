---
"title": "引入上下文检索：大幅提升RAG系统准确性的新方法"
"aihot_id": "cmorb7ml1008tslhfm0c04uo4"
"aihot_category": "tip"
"published_at": "2024-09-18T16:00:00.000Z"
"discovered_at": "2024-09-18T16:00:00.000Z"
"source_name": "Anthropic：Engineering（事故复盘 + 工程实践 · 网页）"
"original_url": "https://www.anthropic.com/engineering/contextual-retrieval"
"canonical_url": "https://aihot.virxact.com/items/cmorb7ml1008tslhfm0c04uo4"
"score": 72
"content_kind": "news"
---

# 引入上下文检索：大幅提升RAG系统准确性的新方法

传统RAG系统在编码时易丢失上下文，导致检索失败。新方法"上下文检索"通过"上下文嵌入"和"上下文BM25"两项子技术，在检索前为文本块添加解释性上下文，能将检索失败次数减少49%，结合重排序后降幅可达67%，显著提升了下游任务性能。对于小于20万token的小型知识库，可直接将其完整内容放入提示词，结合Claude的提示词缓存功能，能降低超过2倍的延迟和高达90%的成本。对于大型知识库，上下文检索则提供了可扩展的解决方案。

- **来源**: Anthropic：Engineering（事故复盘 + 工程实践 · 网页）
- **原文链接**: [https://www.anthropic.com/engineering/contextual-retrieval](https://www.anthropic.com/engineering/contextual-retrieval)
- **AIHOT 链接**: [https://aihot.virxact.com/items/cmorb7ml1008tslhfm0c04uo4](https://aihot.virxact.com/items/cmorb7ml1008tslhfm0c04uo4)
