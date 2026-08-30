---
"title": "Echo-Infinity：学习演化记忆实现实时无限视频生成"
"aihot_id": "cmpyw41ob03vvsli3998nmc40"
"aihot_category": "paper"
"published_at": "2026-06-03T00:00:00.000Z"
"discovered_at": "2026-06-04T02:42:34.022Z"
"source_name": "HuggingFace Daily Papers（社区热门论文）"
"original_url": "https://arxiv.org/abs/2606.04527"
"canonical_url": "https://aihot.virxact.com/items/cmpyw41ob03vvsli3998nmc40"
"score": 79
"content_kind": "news"
---

# Echo-Infinity：学习演化记忆实现实时无限视频生成

Echo-Infinity 是一个自回归（AR）框架，用于实时无限视频生成。它用可学习的演化记忆替代人工缓存策略，通过注意力机制和门控更新 Memory Query，与视频扩散 Transformer（DiTs）端到端优化，支持任意压缩比且计算量不随视频长度增加。同时引入 Unified Relative RoPE Recipe，锚定 sink 帧从 id 0 开始、最新帧 id 不超过预训练最大时间 RoPE id，解除有限 RoPE 约束并缩小外推差距。在长/短视频生成中达到 SOTA，首次实现 24 小时（超 130 万帧）实时滚动生成。

- **来源**: HuggingFace Daily Papers（社区热门论文）
- **原文链接**: [https://arxiv.org/abs/2606.04527](https://arxiv.org/abs/2606.04527)
- **AIHOT 链接**: [https://aihot.virxact.com/items/cmpyw41ob03vvsli3998nmc40](https://aihot.virxact.com/items/cmpyw41ob03vvsli3998nmc40)
