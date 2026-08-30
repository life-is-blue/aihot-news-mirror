---
"title": "RL微调VLM的鲁棒性与思维链一致性研究"
"aihot_id": "cmr3rd0l901bwsl7ld54ejrgb"
"aihot_category": "paper"
"published_at": "2026-07-02T00:00:00.000Z"
"discovered_at": "2026-07-02T17:08:06.316Z"
"source_name": "Apple Machine Learning Research（RSS）"
"original_url": "https://machinelearning.apple.com/research/robustness-chain-th\
  ought-consistency"
"canonical_url": "https://aihot.virxact.com/items/cmr3rd0l901bwsl7ld54ejrgb"
"score": 62
"content_kind": "news"
---

# RL微调VLM的鲁棒性与思维链一致性研究

强化学习（RL）微调被扩展至视觉语言模型（VLM）。研究发现，简单的文本扰动--误导性标题或错误思维链（CoT）--会显著降低模型鲁棒性和置信度，且开源模型衰退更明显。闭源模型呈现类似失败模式，但鲁棒性和推理一致性更强。进一步分析揭示准确性与忠实性的权衡：微调提升基准准确率，但同时侵蚀CoT的可靠性及对上下文变化的鲁棒性；对抗性增强可改善鲁棒性，却无法阻止忠实性漂移。引入忠实性感知奖励能恢复答案与推理的对齐，但与增强结合时训练易崩溃到捷径策略。这些发现强调需联合关注正确性、鲁棒性与视觉推理的忠实性。

- **来源**: Apple Machine Learning Research（RSS）
- **原文链接**: [https://machinelearning.apple.com/research/robustness-chain-thought-consistency](https://machinelearning.apple.com/research/robustness-chain-thought-consistency)
- **AIHOT 链接**: [https://aihot.virxact.com/items/cmr3rd0l901bwsl7ld54ejrgb](https://aihot.virxact.com/items/cmr3rd0l901bwsl7ld54ejrgb)
