---
"title": "Reasoning Arena：可验证奖励不足时的迹线锦标赛"
"aihot_id": "cmq6ad1x406mnsl5icugz7p62"
"aihot_category": "paper"
"published_at": "2026-06-08T11:57:17.000Z"
"discovered_at": "2026-06-09T06:55:51.421Z"
"source_name": "HuggingFace Daily Papers（社区热门论文）"
"original_url": "https://arxiv.org/abs/2606.09380"
"canonical_url": "https://aihot.virxact.com/items/cmq6ad1x406mnsl5icugz7p62"
"score": 74
"content_kind": "news"
---

# Reasoning Arena：可验证奖励不足时的迹线锦标赛

针对基于可验证奖励的强化学习（RLVR）在组级别奖励无信息时无法提供梯度信号的问题，提出Reasoning Arena自适应训练框架。该框架将非多样化奖励组路由至评判系统，通过迹线锦标赛（trace tournaments）对推理迹线进行头对头比较，转化为相对奖励信号。每个新迹线仅与动态更新的少量锚点比较，然后在不完全比较图上拟合Bradley-Terry模型。在竞赛数学和编程基准上，平均超越RLVR基线7.6%，训练加速27%至41%，节省近50%生成计算量。

- **来源**: HuggingFace Daily Papers（社区热门论文）
- **原文链接**: [https://arxiv.org/abs/2606.09380](https://arxiv.org/abs/2606.09380)
- **AIHOT 链接**: [https://aihot.virxact.com/items/cmq6ad1x406mnsl5icugz7p62](https://aihot.virxact.com/items/cmq6ad1x406mnsl5icugz7p62)
