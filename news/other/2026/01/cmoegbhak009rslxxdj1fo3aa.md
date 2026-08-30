---
"title": "解锁GPT-OSS的智能体强化学习训练：一项实践回顾"
"aihot_id": "cmoegbhak009rslxxdj1fo3aa"
"aihot_category": null
"published_at": "2026-01-27T01:53:15.000Z"
"discovered_at": "2026-01-27T01:53:15.000Z"
"source_name": "Hugging Face：Blog（RSS）"
"original_url": "https://huggingface.co/blog/LinkedIn/gpt-oss-agentic-rl"
"canonical_url": "https://aihot.virxact.com/items/cmoegbhak009rslxxdj1fo3aa"
"score": 83
"content_kind": "news"
---

# 解锁GPT-OSS的智能体强化学习训练：一项实践回顾

LinkedIn团队探索了将GPT-OSS模型作为智能体应用核心进行强化学习的可行性。实验发现，由于GPT-OSS采用的混合专家架构在两次前向传播中可能产生路由差异，导致在同策略PPO训练中出现重要性采样比率偏离、KL散度爆炸及奖励不增长的问题。团队通过一个关键修复--在同策略条件下强制将旧对数概率设置为新计算值（并分离梯度），确保了重要性采样比率为1，从而恢复了PPO同策略训练的完整性。该修复方案适用于GPT-OSS-20B及GPT-OSS-120B模型。

- **来源**: Hugging Face：Blog（RSS）
- **原文链接**: [https://huggingface.co/blog/LinkedIn/gpt-oss-agentic-rl](https://huggingface.co/blog/LinkedIn/gpt-oss-agentic-rl)
- **AIHOT 链接**: [https://aihot.virxact.com/items/cmoegbhak009rslxxdj1fo3aa](https://aihot.virxact.com/items/cmoegbhak009rslxxdj1fo3aa)
