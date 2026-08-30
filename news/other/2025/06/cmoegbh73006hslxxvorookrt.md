---
"title": "一个关于机制（非）忠实性的玩具模型"
"aihot_id": "cmoegbh73006hslxxvorookrt"
"aihot_category": null
"published_at": "2025-06-15T00:00:00.000Z"
"discovered_at": "2025-06-15T00:00:00.000Z"
"source_name": "Anthropic：Transformer Circuits（可解释性研究）"
"original_url": "https://transformer-circuits.pub/2025/faithfulness-toy-model/index.html"
"canonical_url": "https://aihot.virxact.com/items/cmoegbh73006hslxxvorookrt"
"score": 78
"content_kind": "news"
---

# 一个关于机制（非）忠实性的玩具模型

本文通过"绝对值"玩具模型，揭示了稀疏自动编码器（SAE）和转码器在解释神经网络时可能存在的"机制非忠实性"问题。核心在于，即使转码器能很好地近似模型的输入-输出映射，它也可能采用与原始模型完全不同的内部计算机制。作者特别指出，当训练数据中存在重复数据点时，转码器可能形成专门"记忆"该点的特征电路，而原模型并无此机制。这种机制背离可能导致模型在分布外数据上泛化行为出现差异，从而威胁机械可解释性研究的可信度。文章最后简要讨论了"雅可比匹配"等潜在缓解方法。

- **来源**: Anthropic：Transformer Circuits（可解释性研究）
- **原文链接**: [https://transformer-circuits.pub/2025/faithfulness-toy-model/index.html](https://transformer-circuits.pub/2025/faithfulness-toy-model/index.html)
- **AIHOT 链接**: [https://aihot.virxact.com/items/cmoegbh73006hslxxvorookrt](https://aihot.virxact.com/items/cmoegbh73006hslxxvorookrt)
