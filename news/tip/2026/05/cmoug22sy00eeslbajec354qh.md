---
"title": "vLLM V0 到 V1：在线强化学习中优先确保后端行为正确性"
"aihot_id": "cmoug22sy00eeslbajec354qh"
"aihot_category": "tip"
"published_at": "2026-05-06T19:06:55.000Z"
"discovered_at": "2026-05-06T19:22:21.217Z"
"source_name": "Hugging Face：Blog（RSS）"
"original_url": "https://huggingface.co/blog/ServiceNow-AI/correctness-before-corrections"
"canonical_url": "https://aihot.virxact.com/items/cmoug22sy00eeslbajec354qh"
"score": 65
"content_kind": "news"
---

# vLLM V0 到 V1：在线强化学习中优先确保后端行为正确性

为确保 vLLM 从 0.8.5 到 0.18.1 的重大重写后，在线强化学习训练结果与 V0 参考运行一致，团队优先修复后端行为而非调整 RL 目标。关键修复包括：将日志概率模式设为 `processed_logprobs` 以匹配采样器分布；禁用 V1 特有的前缀缓存和异步调度等运行时默认值；调整权重更新路径以匹配 V0 的缓存保留行为；并确保 rollout 后端使用 fp32 精度的 `lm_head` 进行最终投影。这些措施消除了策略比率均值偏差，使 V1 在 KL 散度、熵等指标上与 V0 达成一致。

- **来源**: Hugging Face：Blog（RSS）
- **原文链接**: [https://huggingface.co/blog/ServiceNow-AI/correctness-before-corrections](https://huggingface.co/blog/ServiceNow-AI/correctness-before-corrections)
- **AIHOT 链接**: [https://aihot.virxact.com/items/cmoug22sy00eeslbajec354qh](https://aihot.virxact.com/items/cmoug22sy00eeslbajec354qh)
