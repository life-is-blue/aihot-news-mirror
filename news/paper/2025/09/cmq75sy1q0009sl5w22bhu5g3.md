---
"title": "Thinking Machines Lab 解析 LLM 推理不确定性成因并开源 batch-invariant 内核"
"aihot_id": "cmq75sy1q0009sl5w22bhu5g3"
"aihot_category": "paper"
"published_at": "2025-09-10T07:01:00.000Z"
"discovered_at": "2025-09-10T07:01:00.000Z"
"source_name": "Thinking Machines Lab：官方博客（RSS）"
"original_url": "https://thinkingmachines.ai/blog/defeating-nondeterminism-in-llm-inference"
"canonical_url": "https://aihot.news/items/cmq75sy1q0009sl5w22bhu5g3"
"score": 68
"content_kind": "news"
---

# Thinking Machines Lab 解析 LLM 推理不确定性成因并开源 batch-invariant 内核

Thinking Machines Lab 发布博客，指出 LLM 推理不确定性的真正原因不是并发加浮点数，而是内核缺乏 batch invariance，服务器负载导致的 batch size 变化会改变单个请求的输出。

- **来源**: Thinking Machines Lab：官方博客（RSS）
- **原文链接**: [https://thinkingmachines.ai/blog/defeating-nondeterminism-in-llm-inference](https://thinkingmachines.ai/blog/defeating-nondeterminism-in-llm-inference)
- **AIHOT 链接**: [https://aihot.news/items/cmq75sy1q0009sl5w22bhu5g3](https://aihot.news/items/cmq75sy1q0009sl5w22bhu5g3)
