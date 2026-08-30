---
"title": "稀疏混合线性变换（MOLT）"
"aihot_id": "cmoegbh73006kslxxnajfsi7t"
"aihot_category": null
"published_at": "2025-06-15T00:00:00.000Z"
"discovered_at": "2025-06-15T00:00:00.000Z"
"source_name": "Anthropic：Transformer Circuits（可解释性研究）"
"original_url": "https://transformer-circuits.pub/2025/bulk-update/index.html"
"canonical_url": "https://aihot.virxact.com/items/cmoegbh73006kslxxnajfsi7t"
"score": 83
"content_kind": "news"
---

# 稀疏混合线性变换（MOLT）

稀疏混合线性变换（MOLT）是一种正在开发的新方法，旨在替代Transformer模型中的MLP层，以解决此前"转码器"方法在计算效率和表示忠实性上的局限。与转码器学习稀疏激活的特征向量不同，MOLT学习稀疏激活的线性变换，这些变换直接对残差流进行线性操作以贡献输出，充当纯粹的计算单元。初步实验表明，MOLT比转码器计算效率更高、机制更忠实，其激活条件具有可解释性，有助于理解层间特征的转换过程。该方法与混合解码器架构相关，但采用了低秩矩阵等不同参数化策略。

- **来源**: Anthropic：Transformer Circuits（可解释性研究）
- **原文链接**: [https://transformer-circuits.pub/2025/bulk-update/index.html](https://transformer-circuits.pub/2025/bulk-update/index.html)
- **AIHOT 链接**: [https://aihot.virxact.com/items/cmoegbh73006kslxxnajfsi7t](https://aihot.virxact.com/items/cmoegbh73006kslxxnajfsi7t)
