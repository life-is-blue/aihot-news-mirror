---
"title": "StreamMA：多智能体推理中的流式通信"
"aihot_id": "cmpyw41ob03vqsli352ld24b0"
"aihot_category": "paper"
"published_at": "2026-06-03T00:00:00.000Z"
"discovered_at": "2026-06-04T02:42:34.022Z"
"source_name": "HuggingFace Daily Papers（社区热门论文）"
"original_url": "https://arxiv.org/abs/2606.05158"
"canonical_url": "https://aihot.virxact.com/items/cmpyw41ob03vqsli352ld24b0"
"score": 73
"content_kind": "news"
---

# StreamMA：多智能体推理中的流式通信

StreamMA 采用"流式通信"范式，每个推理步骤生成后立即流式传输给下游智能体，通过流水线相邻智能体降低端到端延迟。该方法还提升了效果，因为早期步骤更可靠，可避免错误后期步骤误导下游智能体。在数学、科学和代码八项推理基准上，使用 Claude Opus 4.6 和 GPT-5.4 两种大语言模型，及 Chain、Tree、Graph 三种拓扑，StreamMA 平均优于基线 +7.3 个百分点，在 HMMT 2026 上最高达 +22.4 个百分点。研究还发现"步骤级缩放定律"：增加每智能体步骤数可同时提升效果与效率。

- **来源**: HuggingFace Daily Papers（社区热门论文）
- **原文链接**: [https://arxiv.org/abs/2606.05158](https://arxiv.org/abs/2606.05158)
- **AIHOT 链接**: [https://aihot.virxact.com/items/cmpyw41ob03vqsli352ld24b0](https://aihot.virxact.com/items/cmpyw41ob03vqsli352ld24b0)
