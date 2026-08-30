---
"title": "反思强化学习对大语言模型推理的作用：是稀疏策略选择，而非能力学习"
"aihot_id": "cmp14vzgo0vavsllhmvfhigkn"
"aihot_category": "paper"
"published_at": "2026-05-07T00:00:00.000Z"
"discovered_at": "2026-05-07T00:00:00.000Z"
"source_name": "HuggingFace Daily Papers（社区热门论文）"
"original_url": "https://arxiv.org/abs/2605.06241"
"canonical_url": "https://aihot.virxact.com/items/cmp14vzgo0vavsllhmvfhigkn"
"score": 75
"content_kind": "news"
---

# 反思强化学习对大语言模型推理的作用：是稀疏策略选择，而非能力学习

研究发现，强化学习改进大语言模型推理时，并非教授新策略，而是对基础模型已掌握的解决方案进行概率重分配。其有效影响仅集中在1-3%的高熵决策token上，且所提升的token始终位于基础模型前5个备选之中。基于此，研究者提出无需强化学习的ReasonMaxxer方法，仅在熵选通的决策点施加对比损失，仅需数百次基础模型推演且无需在线生成。在多个模型和数学推理基准测试中，该方法达到或超越了完整强化学习的性能，而训练仅需数十道题目、数分钟的单GPU时间，成本降低约三个数量级。

- **来源**: HuggingFace Daily Papers（社区热门论文）
- **原文链接**: [https://arxiv.org/abs/2605.06241](https://arxiv.org/abs/2605.06241)
- **AIHOT 链接**: [https://aihot.virxact.com/items/cmp14vzgo0vavsllhmvfhigkn](https://aihot.virxact.com/items/cmp14vzgo0vavsllhmvfhigkn)
