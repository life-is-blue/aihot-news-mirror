---
"title": "EMO：为涌现模块化预训练的专家混合模型"
"aihot_id": "cmox4xh0p006lslguuhqaou8t"
"aihot_category": "ai-models"
"published_at": "2026-05-08T16:03:50.000Z"
"discovered_at": "2026-05-08T16:34:07.213Z"
"source_name": "Hugging Face：Blog（RSS）"
"original_url": "https://huggingface.co/blog/allenai/emo"
"canonical_url": "https://aihot.virxact.com/items/cmox4xh0p006lslguuhqaou8t"
"score": 72
"content_kind": "news"
---

# EMO：为涌现模块化预训练的专家混合模型

EMO是一种新型专家混合模型，通过端到端预训练使模块化结构直接从数据中涌现，无需依赖人类定义的先验。该模型允许在特定任务中仅使用12.5%的专家子集（即8个活跃专家中的部分），同时保持接近全模型的性能；当所有128个专家共同使用时，它仍作为强大的通用模型。EMO具有1B活跃参数和14B总参数，训练数据达1万亿令牌。与标准MoE相比，EMO通过文档级路由约束，鼓励专家形成领域专业化组，从而支持选择性使用而不导致严重性能下降，实现了可组合架构，优化了大型稀疏MoE的内存-准确性权衡。

- **来源**: Hugging Face：Blog（RSS）
- **原文链接**: [https://huggingface.co/blog/allenai/emo](https://huggingface.co/blog/allenai/emo)
- **AIHOT 链接**: [https://aihot.virxact.com/items/cmox4xh0p006lslguuhqaou8t](https://aihot.virxact.com/items/cmox4xh0p006lslguuhqaou8t)
