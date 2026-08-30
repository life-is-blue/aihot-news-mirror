---
"title": "干扰权重的玩具模型研究"
"aihot_id": "cmoegbh73006jslxxn1aaf4vz"
"aihot_category": null
"published_at": "2025-06-15T00:00:00.000Z"
"discovered_at": "2025-06-15T00:00:00.000Z"
"source_name": "Anthropic：Transformer Circuits（可解释性研究）"
"original_url": "https://transformer-circuits.pub/2025/interference-weights/index.html"
"canonical_url": "https://aihot.virxact.com/items/cmoegbh73006jslxxn1aaf4vz"
"score": 83
"content_kind": "news"
---

# 干扰权重的玩具模型研究

本文探讨神经网络中"干扰权重"与"权重叠加"现象，认为这是从特定示例归因分析转向全局电路分析的核心障碍。研究通过在玩具模型中的初步探索得出三点发现：干扰权重可在修改解释的玩具模型中复现，其表现与真实模型相似，分析时通常需滤除；其定义多样，既有原则性定义也有实用启发式方法，可在玩具模型中比较，并有望将计算成本高的原则性定义应用于真实模型少量权重以校准启发式方法；仍需大量玩具模型研究以深入理解。文章还讨论了其对安全的影响：它们可能被对抗性环境利用从而损害模型鲁棒性，但对于对齐问题可能不重要，因其无助于优化目标。

- **来源**: Anthropic：Transformer Circuits（可解释性研究）
- **原文链接**: [https://transformer-circuits.pub/2025/interference-weights/index.html](https://transformer-circuits.pub/2025/interference-weights/index.html)
- **AIHOT 链接**: [https://aihot.virxact.com/items/cmoegbh73006jslxxn1aaf4vz](https://aihot.virxact.com/items/cmoegbh73006jslxxn1aaf4vz)
