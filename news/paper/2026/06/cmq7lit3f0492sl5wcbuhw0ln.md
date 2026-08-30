---
"title": "混合LLM中的注意力失忆：CoT微调破坏长距离召回及修复方法"
"aihot_id": "cmq7lit3f0492sl5wcbuhw0ln"
"aihot_category": "paper"
"published_at": "2026-06-09T00:00:00.000Z"
"discovered_at": "2026-06-10T04:56:02.527Z"
"source_name": "HuggingFace Daily Papers（社区热门论文）"
"original_url": "https://arxiv.org/abs/2606.11052"
"canonical_url": "https://aihot.virxact.com/items/cmq7lit3f0492sl5wcbuhw0ln"
"score": 75
"content_kind": "news"
---

# 混合LLM中的注意力失忆：CoT微调破坏长距离召回及修复方法

CoT监督微调系统性地降低混合线性注意力模型（如HypeNet、Jet-Nemotron）的长上下文召回能力。在NIAH任务上，HypeNet-9B的S2@256K从67.2%降至9.4%，原因是CoT-SFT使注意力梯度偏向短程模式，破坏长程路由的W_Q和W_K投影。QK-Restore方法无需训练，从微调前检查点恢复W_Q和W_K，保留其余参数；Procrustes变体平衡路由保留与推理适应。在HypeNet-5B上，QK-Restore将S3@256K从65.4%提升至76.4%，推理性能不变。

- **来源**: HuggingFace Daily Papers（社区热门论文）
- **原文链接**: [https://arxiv.org/abs/2606.11052](https://arxiv.org/abs/2606.11052)
- **AIHOT 链接**: [https://aihot.virxact.com/items/cmq7lit3f0492sl5wcbuhw0ln](https://aihot.virxact.com/items/cmq7lit3f0492sl5wcbuhw0ln)
