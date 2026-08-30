---
"title": "RiT：在表示空间中使用原生扩散变换器已足够"
"aihot_id": "cmpg876fh0d6nsljwz0fs9sgm"
"aihot_category": "paper"
"published_at": "2026-05-21T00:00:00.000Z"
"discovered_at": "2026-05-22T01:13:18.135Z"
"source_name": "HuggingFace Daily Papers（社区热门论文）"
"original_url": "https://arxiv.org/abs/2605.21981"
"canonical_url": "https://aihot.virxact.com/items/cmpg876fh0d6nsljwz0fs9sgm"
"score": 70
"content_kind": "news"
---

# RiT：在表示空间中使用原生扩散变换器已足够

本研究探讨预训练表示空间在流匹配学习中的优势。比较像素、SD-VAE与DINOv2特征后发现，尽管像素与DINOv2的内在维度相近，但DINOv2在几何统计特性（如有效秩、协方差条件等）上表现更优，使回归过程更稳定。基于此，我们提出了表示图像变换器（RiT），它使用冻结的DINOv2特征，通过x-prediction目标训练一个原生扩散变换器。在ImageNet 256×256生成任务上，RiT性能优于参数量更多的DiT^DH-XL模型，且生成的常微分方程仅需少量步骤即可高效求解。

- **来源**: HuggingFace Daily Papers（社区热门论文）
- **原文链接**: [https://arxiv.org/abs/2605.21981](https://arxiv.org/abs/2605.21981)
- **AIHOT 链接**: [https://aihot.virxact.com/items/cmpg876fh0d6nsljwz0fs9sgm](https://aihot.virxact.com/items/cmpg876fh0d6nsljwz0fs9sgm)
