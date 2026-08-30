---
"title": "NVIDIA 发布 Nemotron-Labs-TwoTower 开放权重扩散语言模型"
"aihot_id": "cmr1ti4v001xlsl8zovi1yoqa"
"aihot_category": "ai-models"
"published_at": "2026-07-01T08:10:17.000Z"
"discovered_at": "2026-07-01T08:32:29.962Z"
"source_name": "MarkTechPost（RSS）"
"original_url": "https://www.marktechpost.com/2026/07/01/nvidia-releases-nemotr\
  on-labs-twotower"
"canonical_url": "https://aihot.virxact.com/items/cmr1ti4v001xlsl8zovi1yoqa"
"score": 73
"content_kind": "news"
---

# NVIDIA 发布 Nemotron-Labs-TwoTower 开放权重扩散语言模型

NVIDIA 发布 Nemotron-Labs-TwoTower，基于冻结的自回归骨干 Nemotron-3-Nano-30B-A3B 的扩散语言模型。采用双塔架构：上下文塔冻结，降噪器塔训练，通过层对齐交叉注意力和状态播种协作。在 2×H100 上 BF16 评估，保留 98.7% 的 AR 基线质量，生成吞吐量提升 2.42 倍（γ=0.8，块大小 S=16）。降噪器在约 2.1T token 上训练，骨干使用 25T token 预训练。总参数约 60B，每 token 活跃参数约 3B/塔。支持扩散、模拟 AR 和 AR 三种解码模式。

- **来源**: MarkTechPost（RSS）
- **原文链接**: [https://www.marktechpost.com/2026/07/01/nvidia-releases-nemotron-labs-twotower](https://www.marktechpost.com/2026/07/01/nvidia-releases-nemotron-labs-twotower)
- **AIHOT 链接**: [https://aihot.virxact.com/items/cmr1ti4v001xlsl8zovi1yoqa](https://aihot.virxact.com/items/cmr1ti4v001xlsl8zovi1yoqa)
