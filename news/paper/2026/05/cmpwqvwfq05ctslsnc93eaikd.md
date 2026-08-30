---
"title": "τ_0-WM：用于机器人操控的统一视频-动作世界模型"
"aihot_id": "cmpwqvwfq05ctslsnc93eaikd"
"aihot_category": "paper"
"published_at": "2026-05-31T00:00:00.000Z"
"discovered_at": "2026-05-31T00:00:00.000Z"
"source_name": "HuggingFace Daily Papers（社区热门论文）"
"original_url": "https://arxiv.org/abs/2606.01027"
"canonical_url": "https://aihot.virxact.com/items/cmpwqvwfq05ctslsnc93eaikd"
"score": 70
"content_kind": "news"
---

# τ_0-WM：用于机器人操控的统一视频-动作世界模型

τ_0-World Model （τ_0-WM） 是一个统一的视频-动作世界模型，旨在机器人执行动作前预测并评估其未来后果。模型基于共享的视频扩散主干网络构建，提供两个接口：一个联合预测未来视觉潜在表示与连续动作块的视频动作模型，以及一个能将动作序列展开为多视角未来并预测任务进度分数的动作条件视频模拟器。τ_0-WM 使用约27，300小时的多元数据训练，包括真实机器人遥操作、UMI风格交互、自我中心人类视频等。推理时，模型通过测试时计算采样动作候选，并利用去噪一致性和基于模拟器的修正来筛选低质量动作，在长时程和精细机器人操控任务上表现出优于相关基准的性能。

- **来源**: HuggingFace Daily Papers（社区热门论文）
- **原文链接**: [https://arxiv.org/abs/2606.01027](https://arxiv.org/abs/2606.01027)
- **AIHOT 链接**: [https://aihot.virxact.com/items/cmpwqvwfq05ctslsnc93eaikd](https://aihot.virxact.com/items/cmpwqvwfq05ctslsnc93eaikd)
