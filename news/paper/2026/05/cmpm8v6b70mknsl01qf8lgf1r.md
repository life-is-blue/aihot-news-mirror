---
"title": "通过奖励倾斜分布匹配强化少步生成器"
"aihot_id": "cmpm8v6b70mknsl01qf8lgf1r"
"aihot_category": "paper"
"published_at": "2026-05-25T00:00:00.000Z"
"discovered_at": "2026-05-26T06:18:34.850Z"
"source_name": "HuggingFace Daily Papers（社区热门论文）"
"original_url": "https://arxiv.org/abs/2605.26108"
"canonical_url": "https://aihot.virxact.com/items/cmpm8v6b70mknsl01qf8lgf1r"
"score": 75
"content_kind": "news"
---

# 通过奖励倾斜分布匹配强化少步生成器

本文提出奖励倾斜分布匹配蒸馏（RTDMD），这是一个将分布匹配蒸馏与奖励引导强化学习统一应用于少步流生成器的两阶段框架。该方法通过最小化到奖励倾斜教师分布的KL散度，自然分解为分布匹配项与奖励最大化项。第一阶段引入环境一致分布匹配蒸馏（AC-DMD），在子区间进行分布匹配，并通过一致性正则化辅助分数模型追踪生成器分布。第二阶段联合优化两项，并推导混合策略梯度及步子集GRPO（SubGRPO）以降低方差。在SD3、SD3.5和FLUX.2上的实验表明，RTDMD仅用4步推理即可在偏好、美学和组合指标上达到新的 state-of-the-art。

- **来源**: HuggingFace Daily Papers（社区热门论文）
- **原文链接**: [https://arxiv.org/abs/2605.26108](https://arxiv.org/abs/2605.26108)
- **AIHOT 链接**: [https://aihot.virxact.com/items/cmpm8v6b70mknsl01qf8lgf1r](https://aihot.virxact.com/items/cmpm8v6b70mknsl01qf8lgf1r)
