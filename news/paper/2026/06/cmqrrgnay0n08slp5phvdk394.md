---
"title": "DFlash：块扩散草稿模型实现最高15倍吞吐量提升"
"aihot_id": "cmqrrgnay0n08slp5phvdk394"
"aihot_category": "paper"
"published_at": "2026-06-24T07:21:10.000Z"
"discovered_at": "2026-06-24T07:37:42.014Z"
"source_name": "MarkTechPost（RSS）"
"original_url": "https://www.marktechpost.com/2026/06/24/dflash-speculative-dec\
  oding-drafts-whole-token-blocks-in-parallel-for-up-to-15x-higher-throughput-o\
  n-nvidia-blackwell"
"canonical_url": "https://aihot.virxact.com/items/cmqrrgnay0n08slp5phvdk394"
"score": 74
"content_kind": "news"
---

# DFlash：块扩散草稿模型实现最高15倍吞吐量提升

DFlash 由 UC San Diego 团队提出，是一种用于投机解码的轻量块扩散草稿模型。它一次前向推理生成整块 token，再由目标模型并行验证，保证输出无损。相比 EAGLE-3，DFlash 实现最高 2.5 倍加速，在 Qwen3-8B 等多种模型上平均无损加速超过 6 倍（MATH-500 达 6.08×）。在 NVIDIA Blackwell 上（TensorRT-LLM），gpt-oss-120b 模型吞吐量提升最高 15 倍，约为 EAGLE-3 的 1.5 倍。核心创新是将目标模型多层隐藏特征注入草稿模型每一层的 Key-Value 投影，使接受长度随草稿深度增长。

- **来源**: MarkTechPost（RSS）
- **原文链接**: [https://www.marktechpost.com/2026/06/24/dflash-speculative-decoding-drafts-whole-token-blocks-in-parallel-for-up-to-15x-higher-throughput-on-nvidia-blackwell](https://www.marktechpost.com/2026/06/24/dflash-speculative-decoding-drafts-whole-token-blocks-in-parallel-for-up-to-15x-higher-throughput-on-nvidia-blackwell)
- **AIHOT 链接**: [https://aihot.virxact.com/items/cmqrrgnay0n08slp5phvdk394](https://aihot.virxact.com/items/cmqrrgnay0n08slp5phvdk394)
