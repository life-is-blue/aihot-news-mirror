---
"title": "Transformer残差流中的特权基向量"
"aihot_id": "cmoegbh73007aslxxzrbpr56o"
"aihot_category": null
"published_at": "2023-03-15T16:00:00.000Z"
"discovered_at": "2023-03-15T16:00:00.000Z"
"source_name": "Anthropic：Transformer Circuits（可解释性研究）"
"original_url": "https://transformer-circuits.pub/2023/privileged-basis/index.html"
"canonical_url": "https://aihot.virxact.com/items/cmoegbh73007aslxxzrbpr56o"
"score": 73
"content_kind": "news"
---

# Transformer残差流中的特权基向量

研究发现Transformer模型的残差流中存在"特权基向量"现象，即某些坐标方向持续出现异常大的激活值，这与"无特权基"的理论预期相悖。通过实验，研究者将根源指向Adam优化器中的逐维度归一化器，而非层归一化或浮点精度问题。在2亿参数模型中，典型层有20至60个维度的激活绝对值超过6。研究还提出使用峰度作为检测指标，发现激活分布峰度普遍大于3，进一步证实了基向量对称性被破坏。

- **来源**: Anthropic：Transformer Circuits（可解释性研究）
- **原文链接**: [https://transformer-circuits.pub/2023/privileged-basis/index.html](https://transformer-circuits.pub/2023/privileged-basis/index.html)
- **AIHOT 链接**: [https://aihot.virxact.com/items/cmoegbh73007aslxxzrbpr56o](https://aihot.virxact.com/items/cmoegbh73007aslxxzrbpr56o)
