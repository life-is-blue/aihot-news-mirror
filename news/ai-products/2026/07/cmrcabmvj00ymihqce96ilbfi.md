---
"title": "原生速度的 vLLM transformers 建模后端"
"aihot_id": "cmrcabmvj00ymihqce96ilbfi"
"aihot_category": "ai-products"
"published_at": "2026-07-08T00:00:00.000Z"
"discovered_at": "2026-07-08T16:21:05.358Z"
"source_name": "Hugging Face：Blog（RSS）"
"original_url": "https://huggingface.co/blog/native-speed-vllm-transformers-backend"
"canonical_url": "https://aihot.virxact.com/items/cmrcabmvj00ymihqce96ilbfi"
"score": 66
"content_kind": "news"
---

# 原生速度的 vLLM transformers 建模后端

Hugging Face 宣布 transformers vLLM 后端现与手写原生 vLLM 实现速度相当甚至更快。模型作者无需移植代码，即可自动利用 transformers 获得超快推理。测试使用 Qwen3-4B（单 GPU）、Qwen3-32B（张量并行）和 Qwen3-235B-A22B-FP8 MoE（数据+专家并行）三种配置，吞吐量均达到或超过原生。该后端通过 torch.fx 静态分析图、AST 重写代码实现动态层融合，支持张量/管道/专家并行及 torch.compile。用户仅需添加 `--model-impl transformers` 标志。目前不支持线性注意力模型但即将支持。

- **来源**: Hugging Face：Blog（RSS）
- **原文链接**: [https://huggingface.co/blog/native-speed-vllm-transformers-backend](https://huggingface.co/blog/native-speed-vllm-transformers-backend)
- **AIHOT 链接**: [https://aihot.virxact.com/items/cmrcabmvj00ymihqce96ilbfi](https://aihot.virxact.com/items/cmrcabmvj00ymihqce96ilbfi)
