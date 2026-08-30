---
"title": "使用字典学习特征作为分类器"
"aihot_id": "cmoegbh73006uslxxjbk7twca"
"aihot_category": null
"published_at": "2024-06-15T00:00:00.000Z"
"discovered_at": "2024-06-15T00:00:00.000Z"
"source_name": "Anthropic：Transformer Circuits（可解释性研究）"
"original_url": "https://transformer-circuits.pub/2024/features-as-classifiers/index.html"
"canonical_url": "https://aihot.virxact.com/items/cmoegbh73006uslxxjbk7twca"
"score": 73
"content_kind": "news"
---

# 使用字典学习特征作为分类器

Anthropic可解释性团队研究了利用字典学习从大语言模型中提取的人类可解释特征作为分类器。在生物武器提示分类任务中，线性特征分类器性能可与原始激活值分类器竞争甚至更优，而基于特征的决策树分类器虽性能较低但可解释性更强。特征分类器的可解释性有助于可视化数据集并发现虚假相关性，这些相关性可用于构建对抗攻击。然而，使用特征引入了复杂性，因此在性能优先的应用中，原始激活值仍是强大基线。实验表明，特征分类器性能受三个细节影响：数据中是否一致包含"人类/助手"标签、领域相关数据是否混入字典学习训练集，以及是否对上下文进行最大池化而非仅使用最后词元的激活值。

- **来源**: Anthropic：Transformer Circuits（可解释性研究）
- **原文链接**: [https://transformer-circuits.pub/2024/features-as-classifiers/index.html](https://transformer-circuits.pub/2024/features-as-classifiers/index.html)
- **AIHOT 链接**: [https://aihot.virxact.com/items/cmoegbh73006uslxxjbk7twca](https://aihot.virxact.com/items/cmoegbh73006uslxxjbk7twca)
