---
"title": "亲测为实：难以置信的推理速度"
"aihot_id": "cmpr6nk7c0bf4slnok93x9vov"
"aihot_category": "tip"
"published_at": "2026-05-29T17:14:41.000Z"
"discovered_at": "2026-05-29T17:15:28.245Z"
"source_name": "X：Rohan Paul (@rohanpaul_ai)"
"original_url": "https://x.com/rohanpaul_ai/status/2060409504693645440"
"canonical_url": "https://aihot.virxact.com/items/cmpr6nk7c0bf4slnok93x9vov"
"score": 76
"content_kind": "news"
---

# 亲测为实：难以置信的推理速度

Kog团队在标准数据中心GPU上实现了极高的单用户推理速度，在8× AMD MI300X GPUs上达到3，000 tokens/s，在8× NVIDIA H200上达到2，100 tokens/s。相比常规推理速度（约100-300 tokens/s），实现了10-30倍提升。其核心思路是将LLM解码视为内存流问题，通过协同设计monokernel、重建同步机制、针对性内存访问映射及采用延迟张量并行的Laneformer模型架构，消除了传统流程的阻塞点。

- **来源**: X：Rohan Paul (@rohanpaul_ai)
- **原文链接**: [https://x.com/rohanpaul_ai/status/2060409504693645440](https://x.com/rohanpaul_ai/status/2060409504693645440)
- **AIHOT 链接**: [https://aihot.virxact.com/items/cmpr6nk7c0bf4slnok93x9vov](https://aihot.virxact.com/items/cmpr6nk7c0bf4slnok93x9vov)
