---
"title": "彩色噪声扩散采样"
"aihot_id": "cmpqjlfr105k3slnoo00wtyvu"
"aihot_category": "paper"
"published_at": "2026-05-28T00:00:00.000Z"
"discovered_at": "2026-05-29T06:30:00.924Z"
"source_name": "HuggingFace Daily Papers（社区热门论文）"
"original_url": "https://arxiv.org/abs/2605.30332"
"canonical_url": "https://aihot.virxact.com/items/cmpqjlfr105k3slnoo00wtyvu"
"score": 74
"content_kind": "news"
---

# 彩色噪声扩散采样

扩散模型的生成轨迹具有频谱偏差，早期处理低频全局结构，后期处理高频细节。传统随机微分方程求解器在整个过程中均匀注入白噪声，能量分配效率低。本研究提出彩色噪声采样（CNS），一种免训练的即插即用采样器。它通过动态、随时间和频率调整的噪声调度，更高效地将能量分配给尚未解析的频段。在SiT、JiT、FLUX等架构上的实验表明，CNS作为推理时的替换采样器显著提升了生成质量：在ImageNet-256上，无引导FID在SiT-XL/2上从8.26降至6.27，在JiT-B/16上从32.39降至26.69，在JiT-H/16上从11.88降至8.31，并且在使用无分类器引导时带来一致改进。

- **来源**: HuggingFace Daily Papers（社区热门论文）
- **原文链接**: [https://arxiv.org/abs/2605.30332](https://arxiv.org/abs/2605.30332)
- **AIHOT 链接**: [https://aihot.virxact.com/items/cmpqjlfr105k3slnoo00wtyvu](https://aihot.virxact.com/items/cmpqjlfr105k3slnoo00wtyvu)
