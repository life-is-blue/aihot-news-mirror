---
"title": "Sessa：选择性状态空间注意力"
"aihot_id": "cmogoshcb03pwsl5rd37yb6v8"
"aihot_category": "paper"
"published_at": "2026-04-21T00:00:00.000Z"
"discovered_at": "2026-04-21T00:00:00.000Z"
"source_name": "HuggingFace Daily Papers（社区热门论文）"
"original_url": "https://arxiv.org/abs/2604.18580"
"canonical_url": "https://aihot.virxact.com/items/cmogoshcb03pwsl5rd37yb6v8"
"score": 71
"content_kind": "news"
---

# Sessa：选择性状态空间注意力

现代序列建模主要依赖Transformer和结构化状态空间模型，但两者在长上下文处理中均存在局限。Sessa提出一种新解码器架构，将注意力机制置于循环反馈路径内，从而构建多条基于注意力的历史信息传递路径。理论分析表明，在匹配条件下，Sessa可实现幂律记忆衰减O（l^{-β}）（0<β<1），其衰减速度慢于对应的Transformer与Mamba基线，并能实现灵活的选择性信息检索，包括影响力不随距离衰减的模式。实验证明，Sessa在长上下文基准测试中取得最强性能，同时在短上下文语言建模任务上保持竞争力。

- **来源**: HuggingFace Daily Papers（社区热门论文）
- **原文链接**: [https://arxiv.org/abs/2604.18580](https://arxiv.org/abs/2604.18580)
- **AIHOT 链接**: [https://aihot.virxact.com/items/cmogoshcb03pwsl5rd37yb6v8](https://aihot.virxact.com/items/cmogoshcb03pwsl5rd37yb6v8)
