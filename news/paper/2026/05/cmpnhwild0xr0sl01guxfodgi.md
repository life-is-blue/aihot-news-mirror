---
"title": "MRT：用于大规模分层图像生成与编辑的掩码区域Transformer"
"aihot_id": "cmpnhwild0xr0sl01guxfodgi"
"aihot_category": "paper"
"published_at": "2026-05-26T00:00:00.000Z"
"discovered_at": "2026-05-27T03:19:20.111Z"
"source_name": "HuggingFace Daily Papers（社区热门论文）"
"original_url": "https://arxiv.org/abs/2605.27235"
"canonical_url": "https://aihot.virxact.com/items/cmpnhwild0xr0sl01guxfodgi"
"score": 70
"content_kind": "news"
---

# MRT：用于大规模分层图像生成与编辑的掩码区域Transformer

MRT是一个20B参数的掩码区域扩散模型，专为多层透明图像生成与编辑设计。它在超过1000万个多语言设计样本上训练，统一了文本到图层、图像到图层和图层到图层三项任务。模型通过选择性token掩码实现灵活的图层生成与编辑，并引入溢出感知画布图层以处理边界不一致问题，支持半透明背景合成。此外，应用扩散蒸馏实现了8步实时生成。实验表明，MRT在所有任务上显著优于先前先进方法与商业系统。用户研究显示，其图像到图层质量优于同期Qwen-Image-Layered模型，推理速度快10-100倍，GPU内存消耗降低50-90%。

- **来源**: HuggingFace Daily Papers（社区热门论文）
- **原文链接**: [https://arxiv.org/abs/2605.27235](https://arxiv.org/abs/2605.27235)
- **AIHOT 链接**: [https://aihot.virxact.com/items/cmpnhwild0xr0sl01guxfodgi](https://aihot.virxact.com/items/cmpnhwild0xr0sl01guxfodgi)
