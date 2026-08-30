---
"title": "表示分布匹配（RDM）用于一步视觉生成"
"aihot_id": "cmr4dqzbq00uksll5xkxyo3nw"
"aihot_category": "paper"
"published_at": "2026-07-02T00:00:00.000Z"
"discovered_at": "2026-07-03T03:34:50.728Z"
"source_name": "HuggingFace Daily Papers（社区热门论文）"
"original_url": "https://arxiv.org/abs/2607.02375"
"canonical_url": "https://aihot.virxact.com/items/cmr4dqzbq00uksll5xkxyo3nw"
"score": 74
"content_kind": "news"
---

# 表示分布匹配（RDM）用于一步视觉生成

表示分布匹配（RDM）通过匹配冻结预训练编码器下的生成与参考特征分布来训练一步图像生成器。三个发现：经典MMD正确估计后成为可扩展目标；生成批次大小最优超过2048；单一表示可被欺骗，需匹配平衡编码器组合并采用独立于训练损失的SW_r14评估。改进的iRDM在ImageNet上以SW_r14 1.30达一步生成SOTA，PickScore在71.2%样本上偏好iRDM。该方法将四步FLUX.2后训练为一步生成器，在GenEval（0.826对0.794）和PickScore（22.76对22.58）上超越原版，仅需90 H200 GPU小时。

- **来源**: HuggingFace Daily Papers（社区热门论文）
- **原文链接**: [https://arxiv.org/abs/2607.02375](https://arxiv.org/abs/2607.02375)
- **AIHOT 链接**: [https://aihot.virxact.com/items/cmr4dqzbq00uksll5xkxyo3nw](https://aihot.virxact.com/items/cmr4dqzbq00uksll5xkxyo3nw)
