---
"title": "dots.tts 技术报告"
"aihot_id": "cmq4k0mcr01psslot5yxg2wpu"
"aihot_category": "paper"
"published_at": "2026-06-05T00:00:00.000Z"
"discovered_at": "2026-06-05T00:00:00.000Z"
"source_name": "HuggingFace Daily Papers（社区热门论文）"
"original_url": "https://arxiv.org/abs/2606.07080"
"canonical_url": "https://aihot.virxact.com/items/cmq4k0mcr01psslot5yxg2wpu"
"score": 73
"content_kind": "news"
---

# dots.tts 技术报告

dots.tts 是一个 2B 参数的连续自回归 TTS 基座模型，在连续潜在空间中建模语音。其创新包括：多目标训练的 AudioVAE 构建语义结构化连续语音空间；全历史条件的 flow-matching 头保持长程一致性；无奖励自纠正后训练提升鲁棒性和音质。在 Seed-TTS-Eval 上取得最佳平均性能，中文/英文/中文-hard 的 WER 分别为 0.94%/1.30%/6.60%，SIM 分别为 81.0/77.1/79.5。其他基准也达开源 SOTA。基于 CFG 的 MeanFlow 蒸馏实现低延迟推理，输出流首包 85ms，双流 54ms。训练推理代码及检查点已开源。

- **来源**: HuggingFace Daily Papers（社区热门论文）
- **原文链接**: [https://arxiv.org/abs/2606.07080](https://arxiv.org/abs/2606.07080)
- **AIHOT 链接**: [https://aihot.virxact.com/items/cmq4k0mcr01psslot5yxg2wpu](https://aihot.virxact.com/items/cmq4k0mcr01psslot5yxg2wpu)
