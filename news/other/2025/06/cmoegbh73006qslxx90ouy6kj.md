---
"title": "Crosscoder模型差异分析见解"
"aihot_id": "cmoegbh73006qslxx90ouy6kj"
"aihot_category": null
"published_at": "2025-06-15T00:00:00.000Z"
"discovered_at": "2025-06-15T00:00:00.000Z"
"source_name": "Anthropic：Transformer Circuits（可解释性研究）"
"original_url": "https://transformer-circuits.pub/2025/crosscoder-diffing-update/index.html"
"canonical_url": "https://aihot.virxact.com/items/cmoegbh73006qslxx90ouy6kj"
"score": 78
"content_kind": "news"
---

# Crosscoder模型差异分析见解

Anthropic可解释性团队在Crosscoder模型差异分析中发现，模型独占特征往往多义性高、激活密集，难以解释。实验表明，这是由于有限特征容量下的竞争：共享特征能同时解释两个模型的激活模式，而独占特征需编码更多信息以证明其存在。团队提出缓解策略，即引入少量指定共享特征并降低其稀疏性惩罚，使独占特征变得更可解释和单义。该方法应用于真实模型时，成功分离出能捕捉模型间行为差异的可解释特征。此外，观察到独占特征激活频率比共享特征高一个数量级，且两模型独占特征数量相近。

- **来源**: Anthropic：Transformer Circuits（可解释性研究）
- **原文链接**: [https://transformer-circuits.pub/2025/crosscoder-diffing-update/index.html](https://transformer-circuits.pub/2025/crosscoder-diffing-update/index.html)
- **AIHOT 链接**: [https://aihot.virxact.com/items/cmoegbh73006qslxx90ouy6kj](https://aihot.virxact.com/items/cmoegbh73006qslxx90ouy6kj)
