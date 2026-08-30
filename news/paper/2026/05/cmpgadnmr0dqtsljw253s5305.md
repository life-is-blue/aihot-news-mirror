---
"title": "Gated DeltaNet-2：解耦线性注意力中的擦除与写入"
"aihot_id": "cmpgadnmr0dqtsljw253s5305"
"aihot_category": "paper"
"published_at": "2026-05-21T00:00:00.000Z"
"discovered_at": "2026-05-22T02:14:06.808Z"
"source_name": "HuggingFace Daily Papers（社区热门论文）"
"original_url": "https://arxiv.org/abs/2605.22791"
"canonical_url": "https://aihot.virxact.com/items/cmpgadnmr0dqtsljw253s5305"
"score": 70
"content_kind": "news"
---

# Gated DeltaNet-2：解耦线性注意力中的擦除与写入

线性注意力通过固定循环状态替代无界缓存，但面临精确编辑压缩记忆的挑战。现有模型如Delta-rule与KDA使用单一标量门同时控制"擦除"与"写入"两个操作。本文提出Gated DeltaNet-2，引入独立的通道级擦除门和写入门，实现了这两个操作的解耦，从而泛化并改进了前代模型。该模型在1.3B参数规模、100B tokens训练下，在语言建模、常识推理等任务中表现优异，尤其在长上下文RULER多键检索基准上优势显著。

- **来源**: HuggingFace Daily Papers（社区热门论文）
- **原文链接**: [https://arxiv.org/abs/2605.22791](https://arxiv.org/abs/2605.22791)
- **AIHOT 链接**: [https://aihot.virxact.com/items/cmpgadnmr0dqtsljw253s5305](https://aihot.virxact.com/items/cmpgadnmr0dqtsljw253s5305)
