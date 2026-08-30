---
"title": "SGLang 引入 Waterfill 与 LPLB 提升 DeepEP MoE 负载均衡"
"aihot_id": "cmqwtlsg0001nslp0zt3eyzhr"
"aihot_category": "ai-products"
"published_at": "2026-06-25T16:00:00.000Z"
"discovered_at": "2026-06-25T16:00:00.000Z"
"source_name": "LMSYS：Blog（Chatbot Arena 团队）"
"original_url": "https://www.lmsys.org/blog/2026-06-26-waterfill-lplb"
"canonical_url": "https://aihot.virxact.com/items/cmqwtlsg0001nslp0zt3eyzhr"
"score": 58
"content_kind": "news"
---

# SGLang 引入 Waterfill 与 LPLB 提升 DeepEP MoE 负载均衡

SGLang 为 DeepEP MoE 推理新增两种调度时负载均衡方法：Waterfill 将共享专家分配给负载更低的 rank，在 DeepSeek-V3/R1 服务负载下使总吞吐量提升 1.48% 至 4.66%，在 DeepSeek V4 上最佳点从 49，253 tok/s 提升至 51，677 tok/s（+4.92%）；LPLB 基于线性规划优化冗余专家副本的 token 路由，配合 EPLB 在相同集群上实现吞吐量提升 0.84% 至 7.34%。

- **来源**: LMSYS：Blog（Chatbot Arena 团队）
- **原文链接**: [https://www.lmsys.org/blog/2026-06-26-waterfill-lplb](https://www.lmsys.org/blog/2026-06-26-waterfill-lplb)
- **AIHOT 链接**: [https://aihot.virxact.com/items/cmqwtlsg0001nslp0zt3eyzhr](https://aihot.virxact.com/items/cmqwtlsg0001nslp0zt3eyzhr)
