---
"title": "TRL 新增 Delta Weight Sync：通过 Hub Bucket 传输权重变化，每步从 1.2 GB 降至 20-35 MB"
"aihot_id": "cmpo5j5lm034mslv4qv9h13v8"
"aihot_category": "tip"
"published_at": "2026-05-27T00:00:00.000Z"
"discovered_at": "2026-05-27T14:20:47.567Z"
"source_name": "Hugging Face：Blog（RSS）"
"original_url": "https://huggingface.co/blog/delta-weight-sync"
"canonical_url": "https://aihot.virxact.com/items/cmpo5j5lm034mslv4qv9h13v8"
"score": 61
"content_kind": "news"
---

# TRL 新增 Delta Weight Sync：通过 Hub Bucket 传输权重变化，每步从 1.2 GB 降至 20-35 MB

异步强化学习中，训练器每步需将完整模型权重（如1T参数checkpoint约1 TB）传输给推理引擎。TRL新增PR利用相邻RL优化步骤间约99%的bf16权重比特相同的特点，仅将变化的权重编码为稀疏safetensors文件，上传至Hugging Face Bucket并通知vLLM获取。在Qwen3-0.6B上，每步传输从1.2 GB降至20-35 MB。实验还展示了完全分离的训练场景：训练器、vLLM和Wordle环境分别位于不同机器和Hugging Face Space中，权重通过单个Hub bucket流动，无需共享集群、RDMA或VPN。

- **来源**: Hugging Face：Blog（RSS）
- **原文链接**: [https://huggingface.co/blog/delta-weight-sync](https://huggingface.co/blog/delta-weight-sync)
- **AIHOT 链接**: [https://aihot.virxact.com/items/cmpo5j5lm034mslv4qv9h13v8](https://aihot.virxact.com/items/cmpo5j5lm034mslv4qv9h13v8)
