---
"title": "破解LLM推理中的非确定性"
"aihot_id": "cmq75sy1q0009sl5w22bhu5g3"
"aihot_category": "tip"
"published_at": "2025-09-10T07:01:00.000Z"
"discovered_at": "2025-09-10T07:01:00.000Z"
"source_name": "Thinking Machines Lab：官方博客（RSS）"
"original_url": "https://thinkingmachines.ai/blog/defeating-nondeterminism-in-llm-inference"
"canonical_url": "https://aihot.virxact.com/items/cmq75sy1q0009sl5w22bhu5g3"
"score": 60
"content_kind": "news"
---

# 破解LLM推理中的非确定性

LLM推理的再现性是科学进步的基础，但即使在温度设为0的贪心采样下，ChatGPT等API以及vLLM、SGLang等自托管推理引擎仍无法保证确定性结果。常见的"并发+浮点非结合性"假设并不完整--GPU上重复执行相同矩阵乘法结果完全一致。真正原因在于：部分GPU内核是非确定性的，但LLM前向传播使用的内核均为确定性；推理服务器前向传播本身是确定性的，用户感知的非确定性源于浮点运算非结合性在不同聚合顺序下导致的细微数值差异。文章揭示了这一误解，并探讨如何实现真正可重现的LLM推理输出。

- **来源**: Thinking Machines Lab：官方博客（RSS）
- **原文链接**: [https://thinkingmachines.ai/blog/defeating-nondeterminism-in-llm-inference](https://thinkingmachines.ai/blog/defeating-nondeterminism-in-llm-inference)
- **AIHOT 链接**: [https://aihot.virxact.com/items/cmq75sy1q0009sl5w22bhu5g3](https://aihot.virxact.com/items/cmq75sy1q0009sl5w22bhu5g3)
