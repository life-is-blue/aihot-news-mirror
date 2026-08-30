---
"title": "DeepSeek-V4 Flash 强化学习训练登陆 AMD Instinct MI355X GPU，由 Miles 框架支持"
"aihot_id": "cmrf7a5kg000wihpr80vvnaxn"
"aihot_category": "paper"
"published_at": "2026-07-09T16:00:00.000Z"
"discovered_at": "2026-07-10T17:19:11.037Z"
"source_name": "LMSYS：Blog（Chatbot Arena 团队）"
"original_url": "https://www.lmsys.org/blog/2026-07-10-rocm-miles-dsv4"
"canonical_url": "https://aihot.virxact.com/items/cmrf7a5kg000wihpr80vvnaxn"
"score": 61
"content_kind": "news"
---

# DeepSeek-V4 Flash 强化学习训练登陆 AMD Instinct MI355X GPU，由 Miles 框架支持

DeepSeek-V4 Flash 的强化学习训练现已在 AMD Instinct MI355X GPU 上通过 Miles 框架获得支持，基于 ROCm 软件栈运行。该 2840 亿参数 MoE 模型（每 token 激活 130 亿参数）需 SGLang 进行 rollout 生成、Megatron 进行策略更新，Miles 负责异步循环与权重同步。团队解决了 SGLang 与 Megatron 间模型对齐、量化状态在线更新及多节点并行稳定性三大挑战，最终在四个八 GPU 节点上完成端到端验证：超过 100 个优化器步骤中训练-rollout 对数概率差可控，在线奖励持续提升，离线 AIME-2024 基准分数同步上涨。

- **来源**: LMSYS：Blog（Chatbot Arena 团队）
- **原文链接**: [https://www.lmsys.org/blog/2026-07-10-rocm-miles-dsv4](https://www.lmsys.org/blog/2026-07-10-rocm-miles-dsv4)
- **AIHOT 链接**: [https://aihot.virxact.com/items/cmrf7a5kg000wihpr80vvnaxn](https://aihot.virxact.com/items/cmrf7a5kg000wihpr80vvnaxn)
