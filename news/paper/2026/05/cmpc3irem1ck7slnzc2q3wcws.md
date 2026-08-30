---
"title": "训练后 MoE 可通过自蒸馏跳过一半专家"
"aihot_id": "cmpc3irem1ck7slnzc2q3wcws"
"aihot_category": "paper"
"published_at": "2026-05-18T00:00:00.000Z"
"discovered_at": "2026-05-19T03:51:15.818Z"
"source_name": "HuggingFace Daily Papers（社区热门论文）"
"original_url": "https://arxiv.org/abs/2605.18643"
"canonical_url": "https://aihot.virxact.com/items/cmpc3irem1ck7slnzc2q3wcws"
"score": 71
"content_kind": "news"
---

# 训练后 MoE 可通过自蒸馏跳过一半专家

本文提出零专家自蒸馏适应框架，将训练完成的静态混合专家模型转换为高效动态模型。该方法通过在每个混合专家层注入零输出专家，并利用原始模型作为冻结教师进行两阶段自蒸馏适应，以实现稳定的架构转换。在两个大型开源模型及11个基准测试上的实验表明，该方法能消除超过50%的专家计算量，同时仅带来极小的准确率损失，并显著提升端到端推理速度。

- **来源**: HuggingFace Daily Papers（社区热门论文）
- **原文链接**: [https://arxiv.org/abs/2605.18643](https://arxiv.org/abs/2605.18643)
- **AIHOT 链接**: [https://aihot.virxact.com/items/cmpc3irem1ck7slnzc2q3wcws](https://aihot.virxact.com/items/cmpc3irem1ck7slnzc2q3wcws)
