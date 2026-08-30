---
"title": "Stochastic KV Routing： 实现自适应深度方向的缓存共享"
"aihot_id": "cmot2xtld01vvslv77sxlkqqk"
"aihot_category": "paper"
"published_at": "2026-05-05T00:00:00.000Z"
"discovered_at": "2026-05-05T20:27:21.875Z"
"source_name": "Apple Machine Learning Research（RSS）"
"original_url": "https://machinelearning.apple.com/research/stochastic-kv-routing"
"canonical_url": "https://aihot.virxact.com/items/cmot2xtld01vvslv77sxlkqqk"
"score": 59
"content_kind": "news"
---

# Stochastic KV Routing： 实现自适应深度方向的缓存共享

为降低大语言模型推理时KV缓存的高昂内存开销，研究提出了一种沿模型深度维度优化的新方法。该方法通过随机KV路由，在Transformer模型的各层之间动态共享KV缓存，而非每层保留完整独立缓存。实验表明，在保持模型质量基本不变的前提下，该方法能将KV缓存的内存占用减少高达50%，为降低大模型服务成本提供了与现有时间轴压缩、淘汰技术正交的新优化路径。

- **来源**: Apple Machine Learning Research（RSS）
- **原文链接**: [https://machinelearning.apple.com/research/stochastic-kv-routing](https://machinelearning.apple.com/research/stochastic-kv-routing)
- **AIHOT 链接**: [https://aihot.virxact.com/items/cmot2xtld01vvslv77sxlkqqk](https://aihot.virxact.com/items/cmot2xtld01vvslv77sxlkqqk)
