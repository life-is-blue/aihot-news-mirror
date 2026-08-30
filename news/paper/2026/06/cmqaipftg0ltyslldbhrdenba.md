---
"title": "MiniMax Sparse Attention（MSA）块状稀疏注意力"
"aihot_id": "cmqaipftg0ltyslldbhrdenba"
"aihot_category": "paper"
"published_at": "2026-06-11T00:00:00.000Z"
"discovered_at": "2026-06-12T06:00:31.611Z"
"source_name": "HuggingFace Daily Papers（社区热门论文）"
"original_url": "https://arxiv.org/abs/2606.13392"
"canonical_url": "https://aihot.virxact.com/items/cmqaipftg0ltyslldbhrdenba"
"score": 77
"content_kind": "news"
---

# MiniMax Sparse Attention（MSA）块状稀疏注意力

MiniMax 提出块状稀疏注意力 MSA，基于 GQA 构建。轻量级 Index Branch 为每个 GQA 组独立选择 Top-k KV 块，Main Branch 仅对选中块执行精确块稀疏注意力。在 109B 参数多模态模型上，MSA 与 GQA 性能持平，1M 上下文下每 token 注意力计算减少 28.4 倍。配合协同设计的 GPU 内核，H800 上实现 14.2 倍 prefill 和 7.6 倍 decoding 端到端加速。推理内核与基于 MSA 的多模态模型已公开发布。

- **来源**: HuggingFace Daily Papers（社区热门论文）
- **原文链接**: [https://arxiv.org/abs/2606.13392](https://arxiv.org/abs/2606.13392)
- **AIHOT 链接**: [https://aihot.virxact.com/items/cmqaipftg0ltyslldbhrdenba](https://aihot.virxact.com/items/cmqaipftg0ltyslldbhrdenba)
