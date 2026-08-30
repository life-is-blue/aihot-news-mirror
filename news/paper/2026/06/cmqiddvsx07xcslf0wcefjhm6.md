---
"title": "用SGLang-JAX在TPU上优化Ling-2.6-1T：一个Pallas核将MoE数据移动隐藏在计算中"
"aihot_id": "cmqiddvsx07xcslf0wcefjhm6"
"aihot_category": "paper"
"published_at": "2026-06-16T16:00:00.000Z"
"discovered_at": "2026-06-17T17:53:38.527Z"
"source_name": "LMSYS：Blog（Chatbot Arena 团队）"
"original_url": "https://www.lmsys.org/blog/2026-06-17-ling-2-6-tpu"
"canonical_url": "https://aihot.virxact.com/items/cmqiddvsx07xcslf0wcefjhm6"
"score": 69
"content_kind": "news"
---

# 用SGLang-JAX在TPU上优化Ling-2.6-1T：一个Pallas核将MoE数据移动隐藏在计算中

SGLang-JAX现已支持inclusionAI的Ling-2.6-1T（1T稀疏MoE，63B激活参数，256路由专家，top-8路由加共享专家）在TPU v7x上高效推理。团队开发了Fused MoE V2--一个融合scatter、专家FFN和gather的Pallas核，通过将MoE数据移动隐藏在计算中，使MoE预填充延迟从5.16ms降至2.42ms（降幅53%），解码核延迟从0.249ms降至0.211ms（降幅约15%）。仅替换MoE核即提升预填充吞吐量24.8%，解码吞吐量18.5%-35.3%。在SGLang解码基准测试中，16块TPU v7x芯片输出吞吐量达16块H200 GPU的1.29倍（mc=128）至1.77倍（mc=512）。完整上线还包含混合KV/循环内存池、GLA线性注意力和单控制器数据并行支持。

- **来源**: LMSYS：Blog（Chatbot Arena 团队）
- **原文链接**: [https://www.lmsys.org/blog/2026-06-17-ling-2-6-tpu](https://www.lmsys.org/blog/2026-06-17-ling-2-6-tpu)
- **AIHOT 链接**: [https://aihot.virxact.com/items/cmqiddvsx07xcslf0wcefjhm6](https://aihot.virxact.com/items/cmqiddvsx07xcslf0wcefjhm6)
