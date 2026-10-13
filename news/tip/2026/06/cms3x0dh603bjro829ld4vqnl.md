---
"title": "LangChain 详解 Deep Agents SDK 的上下文管理机制"
"aihot_id": "cms3x0dh603bjro829ld4vqnl"
"aihot_category": "tip"
"published_at": "2026-06-16T19:00:13.000Z"
"discovered_at": "2026-06-16T19:00:13.000Z"
"source_name": "LangChain：Blog（RSS）"
"original_url": "https://www.langchain.com/blog/context-management-for-deepagents"
"canonical_url": "https://aihot.news/items/cms3x0dh603bjro829ld4vqnl"
"score": 63
"content_kind": "news"
---

# LangChain 详解 Deep Agents SDK 的上下文管理机制

LangChain 介绍 Deep Agents SDK 的上下文压缩机制：超过 20,000 tokens 的工具结果卸载到文件系统、上下文达 85% 时截断旧的写/编辑工具调用、空间不足时执行带结构化摘要的总结，完整原始消息保留到文件系统供检索。文章还建议以更低阈值（如 10-20%）人为加大压缩频率来放大信号，并用针在草堆等针对性评测验证摘要后信息可恢复与目标不漂移。

- **来源**: LangChain：Blog（RSS）
- **原文链接**: [https://www.langchain.com/blog/context-management-for-deepagents](https://www.langchain.com/blog/context-management-for-deepagents)
- **AIHOT 链接**: [https://aihot.news/items/cms3x0dh603bjro829ld4vqnl](https://aihot.news/items/cms3x0dh603bjro829ld4vqnl)
