---
"title": "Nemotron-Labs-Diffusion：统一自回归、扩散与自我推测解码的三模式语言模型"
"aihot_id": "cmrbg84yf03mcihl1reivcibq"
"aihot_category": "ai-models"
"published_at": "2026-07-07T00:00:00.000Z"
"discovered_at": "2026-07-08T02:18:33.680Z"
"source_name": "HuggingFace Daily Papers（社区热门论文）"
"original_url": "https://arxiv.org/abs/2607.05722"
"canonical_url": "https://aihot.virxact.com/items/cmrbg84yf03mcihl1reivcibq"
"score": 72
"content_kind": "news"
---

# Nemotron-Labs-Diffusion：统一自回归、扩散与自我推测解码的三模式语言模型

Nemotron-Labs-Diffusion 是一种三模式语言模型，通过联合自回归（AR）和扩散损失训练，在单一架构中统一了 AR、扩散和自我推测解码。研究显示 AR 与扩散目标互补：扩散增强前瞻规划，AR 提供从左至右的语言先验。自我推测模式下，扩散充当草稿模型、AR 负责验证，其接受率和实际设备效率均优于多 token 预测（MTP）。在最优化采样器下，单次前向传播产出 token 数比自我推测最多高 76.5%。该系列包含 3B、8B、14B 参数的基础、指令和视觉语言模型，在准确率和速度上均超越现有开源 AR 和扩散 LM。例如 8B 模型单次前向解码 token 数是 Qwen3-8B 的 6 倍，在 GB200 GPU 上使用 SGLang 运行 SPEED-Bench 时吞吐量提升 4 倍。

- **来源**: HuggingFace Daily Papers（社区热门论文）
- **原文链接**: [https://arxiv.org/abs/2607.05722](https://arxiv.org/abs/2607.05722)
- **AIHOT 链接**: [https://aihot.virxact.com/items/cmrbg84yf03mcihl1reivcibq](https://aihot.virxact.com/items/cmrbg84yf03mcihl1reivcibq)
