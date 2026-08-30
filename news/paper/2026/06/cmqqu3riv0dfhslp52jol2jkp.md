---
"title": "可验证搜索不是可学习的链式思维"
"aihot_id": "cmqqu3riv0dfhslp52jol2jkp"
"aihot_category": "paper"
"published_at": "2026-06-20T00:00:00.000Z"
"discovered_at": "2026-06-20T00:00:00.000Z"
"source_name": "HuggingFace Daily Papers（社区热门论文）"
"original_url": "https://arxiv.org/abs/2606.21884"
"canonical_url": "https://aihot.virxact.com/items/cmqqu3riv0dfhslp52jol2jkp"
"score": 74
"content_kind": "news"
---

# 可验证搜索不是可学习的链式思维

论文以九个确定性生成器推理任务为测试床，证明可验证搜索无法作为可学习的CoT进行蒸馏。Cryptarithm任务中，即使backbone规模从3B到671B、采用多种CoT设计、基于可验证奖励的强化学习和自训练，蒸馏后准确率始终为0.01-0.07，而搜索求解器回答71%实例。模型能正确计算97-100%的算术步骤并将正确密码排在候选前八（71%），但无法前向推导。干预实验揭示密码键后，同一实例准确率从0.03提升至0.57。只有移除搜索、预计算组合核心为目录，让模型仅做回忆加验证，才能学会该任务（Private LB 0.92）。结论：蒸馏学到的是记忆和验证，而非搜索。

- **来源**: HuggingFace Daily Papers（社区热门论文）
- **原文链接**: [https://arxiv.org/abs/2606.21884](https://arxiv.org/abs/2606.21884)
- **AIHOT 链接**: [https://aihot.virxact.com/items/cmqqu3riv0dfhslp52jol2jkp](https://aihot.virxact.com/items/cmqqu3riv0dfhslp52jol2jkp)
