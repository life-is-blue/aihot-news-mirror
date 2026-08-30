---
"title": "Bebop：通过带拒绝采样的多token预测加速RL训练"
"aihot_id": "cmq8ws2lk06imslld3t5k4rid"
"aihot_category": "paper"
"published_at": "2026-06-10T00:00:00.000Z"
"discovered_at": "2026-06-11T02:58:56.708Z"
"source_name": "HuggingFace Daily Papers（社区热门论文）"
"original_url": "https://arxiv.org/abs/2606.12370"
"canonical_url": "https://aihot.virxact.com/items/cmq8ws2lk06imslld3t5k4rid"
"score": 73
"content_kind": "news"
---

# Bebop：通过带拒绝采样的多token预测加速RL训练

Bebop系统研究多token预测（MTP）在大语言模型RL后训练中的加速瓶颈。发现MTP接受率与模型熵波动呈负线性关系；概率拒绝采样相比贪婪草稿采样能缓解熵干扰。提出端到端TV损失直接优化多步拒绝采样接受率，带来约10%提升，最高达95%接受率，额外推理吞吐提升25%。在Qwen3.5、Qwen3.6和Qwen3.7上，异步RL训练实现1.8倍端到端加速。预RL阶段的MTP训练结合e2e TV损失和拒绝采样可保持全程一致的加速，无需在线更新。

- **来源**: HuggingFace Daily Papers（社区热门论文）
- **原文链接**: [https://arxiv.org/abs/2606.12370](https://arxiv.org/abs/2606.12370)
- **AIHOT 链接**: [https://aihot.virxact.com/items/cmq8ws2lk06imslld3t5k4rid](https://aihot.virxact.com/items/cmq8ws2lk06imslld3t5k4rid)
