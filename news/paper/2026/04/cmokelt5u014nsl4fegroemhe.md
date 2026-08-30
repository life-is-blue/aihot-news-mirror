---
"title": "秒级更新万亿参数--大规模分布式强化学习中的点对点权重传输技术"
"aihot_id": "cmokelt5u014nsl4fegroemhe"
"aihot_category": "paper"
"published_at": "2026-04-28T16:00:00.000Z"
"discovered_at": "2026-04-29T18:43:56.245Z"
"source_name": "LMSYS：Blog（Chatbot Arena 团队）"
"original_url": "https://www.lmsys.org/blog/2026-04-29-p2p-update"
"canonical_url": "https://aihot.virxact.com/items/cmokelt5u014nsl4fegroemhe"
"score": 74
"content_kind": "news"
---

# 秒级更新万亿参数--大规模分布式强化学习中的点对点权重传输技术

LMSYS团队针对SGLang中的强化学习工作负载，提出了一种基于RDMA的点对点权重更新机制，作为传统NCCL广播方法的补充。该设计利用源端CPU引擎副本和Mooncake TransferEngine进行P2P RDMA传输，将拥有1T参数的Kimi-K2模型的权重传输时间从53秒大幅缩短至7.2秒，提速7倍。其代价是每个训练等级需在CPU内存中额外占用一个32G的推理引擎副本。此优化最大限度地减少了网络冗余，允许推理服务器更快恢复rollout过程，且兼容所有主流开源模型。

- **来源**: LMSYS：Blog（Chatbot Arena 团队）
- **原文链接**: [https://www.lmsys.org/blog/2026-04-29-p2p-update](https://www.lmsys.org/blog/2026-04-29-p2p-update)
- **AIHOT 链接**: [https://aihot.virxact.com/items/cmokelt5u014nsl4fegroemhe](https://aihot.virxact.com/items/cmokelt5u014nsl4fegroemhe)
