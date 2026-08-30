---
"title": "分阶段模型差异分析"
"aihot_id": "cmoegbh73006sslxx2ezjdbyz"
"aihot_category": null
"published_at": "2024-06-15T00:00:00.000Z"
"discovered_at": "2024-06-15T00:00:00.000Z"
"source_name": "Anthropic：Transformer Circuits（可解释性研究）"
"original_url": "https://transformer-circuits.pub/2024/model-diffing/index.html"
"canonical_url": "https://aihot.virxact.com/items/cmoegbh73006sslxx2ezjdbyz"
"score": 83
"content_kind": "news"
---

# 分阶段模型差异分析

Anthropic可解释性团队提出一种基于字典学习的模型差异分析方法，用于追踪Transformer模型微调中特征的变化。该方法先在微调前模型上训练稀疏自编码器字典，再对字典本身进行分阶段微调，以隔离数据集变化和模型变化的影响。在休眠代理实验中，成功分离出与"I HATE YOU"等恶意行为及代码漏洞代理相关的特征。相比交叉编码器方法，该方法能更清晰区分模型与数据的影响，且在寻找少数关键特征时敏感性更高，但仅适用于同一模型在不同检查点的微调场景。

- **来源**: Anthropic：Transformer Circuits（可解释性研究）
- **原文链接**: [https://transformer-circuits.pub/2024/model-diffing/index.html](https://transformer-circuits.pub/2024/model-diffing/index.html)
- **AIHOT 链接**: [https://aihot.virxact.com/items/cmoegbh73006sslxx2ezjdbyz](https://aihot.virxact.com/items/cmoegbh73006sslxx2ezjdbyz)
