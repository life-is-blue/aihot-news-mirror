---
"title": "通过简单统一的扩展实现奥赛金牌级推理"
"aihot_id": "cmp6bj8c100i9slnz570dpbpu"
"aihot_category": "paper"
"published_at": "2026-05-13T00:00:00.000Z"
"discovered_at": "2026-05-13T00:00:00.000Z"
"source_name": "HuggingFace Daily Papers（社区热门论文）"
"original_url": "https://arxiv.org/abs/2605.13301"
"canonical_url": "https://aihot.virxact.com/items/cmp6bj8c100i9slnz570dpbpu"
"score": 70
"content_kind": "news"
---

# 通过简单统一的扩展实现奥赛金牌级推理

本文提出一种将预训练推理模型转化为严格奥赛求解器的统一方法。该方法首先采用反向困惑度课程进行监督微调，以灌输严谨的证明搜索与自我检查行为；随后通过两阶段强化学习流程扩展这些能力，最终结合测试时扩展提升性能。基于此方案训练的30B参数模型SU-01，在仅使用约34万条短轨迹微调和200步强化学习后，能稳定处理超过10万token的长轨迹难题，并在IMO、USAMO、IPhO等数学与物理奥赛中达到金牌级表现，同时展现出向数学物理之外科学领域的强推理泛化能力。

- **来源**: HuggingFace Daily Papers（社区热门论文）
- **原文链接**: [https://arxiv.org/abs/2605.13301](https://arxiv.org/abs/2605.13301)
- **AIHOT 链接**: [https://aihot.virxact.com/items/cmp6bj8c100i9slnz570dpbpu](https://aihot.virxact.com/items/cmp6bj8c100i9slnz570dpbpu)
