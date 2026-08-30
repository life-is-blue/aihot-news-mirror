---
"title": "Flow-DPPO： 面向流匹配模型的散度近端策略优化"
"aihot_id": "cmq7lit3e048zsl5wb6tj587w"
"aihot_category": "paper"
"published_at": "2026-06-09T00:00:00.000Z"
"discovered_at": "2026-06-10T04:56:02.527Z"
"source_name": "HuggingFace Daily Papers（社区热门论文）"
"original_url": "https://arxiv.org/abs/2606.11025"
"canonical_url": "https://aihot.virxact.com/items/cmq7lit3e048zsl5wb6tj587w"
"score": 73
"content_kind": "news"
---

# Flow-DPPO： 面向流匹配模型的散度近端策略优化

针对流匹配模型中在线强化学习比率裁剪策略约束不当的问题，Flow-DPPO 提出用散度近端约束替代。关键洞察是流模型每步策略为高斯分布，可精确计算新旧策略间的 KL 散度。Flow-DPPO 采用非对称散度掩码，仅在梯度更新偏离信任区域且超阈值时阻止更新。实验表明，Flow-DPPO 获得更高奖励，KL 近端效率更优，缓解了灾难性遗忘，促进多目标均衡，并能在比率裁剪失效时支持稳定的多轮训练。代码已开源。

- **来源**: HuggingFace Daily Papers（社区热门论文）
- **原文链接**: [https://arxiv.org/abs/2606.11025](https://arxiv.org/abs/2606.11025)
- **AIHOT 链接**: [https://aihot.virxact.com/items/cmq7lit3e048zsl5wb6tj587w](https://aihot.virxact.com/items/cmq7lit3e048zsl5wb6tj587w)
