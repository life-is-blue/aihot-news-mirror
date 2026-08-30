---
"title": "LongCat-AudioDiT-1B：高保真波形潜空间扩散式文本转语音模型"
"aihot_id": "cmocymrfh0057slqlbzifa44t"
"aihot_category": null
"published_at": "2026-03-30T03:25:12.000Z"
"discovered_at": "2026-03-30T03:25:12.000Z"
"source_name": "美团 LongCat：HuggingFace 新模型"
"original_url": "https://huggingface.co/meituan-longcat/LongCat-AudioDiT-1B"
"canonical_url": "https://aihot.virxact.com/items/cmocymrfh0057slqlbzifa44t"
"score": null
"content_kind": "news"
---

# LongCat-AudioDiT-1B：高保真波形潜空间扩散式文本转语音模型

美团 LongCat 团队开源的扩散式 TTS 模型摒弃传统的 mel-spectrogram 中间表示，直接在波形潜空间操作，仅通过 Wav-VAE 与扩散骨干网络即可合成语音。该模型修复了训练-推理不匹配问题，并以自适应投影引导替代无分类器引导。最大版本 3.5B 在 Seed 基准实现 SOTA 零样本语音克隆，说话人相似度（SIM）在 Seed-ZH 达 0.818、Seed-Hard 达 0.797，超越此前最优的 Seed-TTS。研究还发现 Wav-VAE 的重建保真度与最终合成质量并非正相关。

- **来源**: 美团 LongCat：HuggingFace 新模型
- **原文链接**: [https://huggingface.co/meituan-longcat/LongCat-AudioDiT-1B](https://huggingface.co/meituan-longcat/LongCat-AudioDiT-1B)
- **AIHOT 链接**: [https://aihot.virxact.com/items/cmocymrfh0057slqlbzifa44t](https://aihot.virxact.com/items/cmocymrfh0057slqlbzifa44t)
