---
"title": "2025年1月电路更新：稀疏自编码器训练方法改进"
"aihot_id": "cmoegbh73006rslxxnc1843iz"
"aihot_category": null
"published_at": "2025-01-15T00:00:00.000Z"
"discovered_at": "2025-01-15T00:00:00.000Z"
"source_name": "Anthropic：Transformer Circuits（可解释性研究）"
"original_url": "https://transformer-circuits.pub/2025/january-update/index.html"
"canonical_url": "https://aihot.virxact.com/items/cmoegbh73006rslxxnc1843iz"
"score": 73
"content_kind": "news"
---

# 2025年1月电路更新：稀疏自编码器训练方法改进

Anthropic可解释性团队分享了稀疏自编码器与交叉编码器训练方法的最新改进。主要更新包括采用JumpReLU激活函数、调整损失函数以增强稀疏性并减少"死特征"，以及详细的参数初始化与优化设置。团队基于Rajamanoharan等人（2024）的技术，但修改了梯度流动方式和稀疏性惩罚项。关键超参数包括λ_S约10、λ_P为3×10−6，并采用线性预热策略。这些改进旨在为外部研究团队提供一个有效的训练起点，相关成果将在未来几个月内进一步发表。

- **来源**: Anthropic：Transformer Circuits（可解释性研究）
- **原文链接**: [https://transformer-circuits.pub/2025/january-update/index.html](https://transformer-circuits.pub/2025/january-update/index.html)
- **AIHOT 链接**: [https://aihot.virxact.com/items/cmoegbh73006rslxxnc1843iz](https://aihot.virxact.com/items/cmoegbh73006rslxxnc1843iz)
