---
"title": "NVIDIA Cosmos Predict 2.5 微调：使用 LoRA/DoRA 生成机器人视频"
"aihot_id": "cmpbfzxd4172bslnzzdo3g1lc"
"aihot_category": "tip"
"published_at": "2026-05-18T16:00:21.000Z"
"discovered_at": "2026-05-18T16:52:45.883Z"
"source_name": "Hugging Face：Blog（RSS）"
"original_url": "https://huggingface.co/blog/nvidia/cosmos-fine-tuning-for-robo\
  t-video-generation"
"canonical_url": "https://aihot.virxact.com/items/cmpbfzxd4172bslnzzdo3g1lc"
"score": 67
"content_kind": "news"
---

# NVIDIA Cosmos Predict 2.5 微调：使用 LoRA/DoRA 生成机器人视频

NVIDIA Cosmos Predict 2.5 是一个 2B 参数的世界模型，可根据文本、图像或视频片段生成物理合理的视频。通过 LoRA 或 DoRA 在 DiT 的注意力层（to_q， to_k， to_v， to_out.0）和前馈层注入可训练适配器，冻结全部基座权重，在单个 80GB GPU 上即可完成参数高效微调，避免了全量微调的高成本与灾难性遗忘。该流程使用 diffusers 和 accelerate 库，利用 92 个机器人操作视频训练集与 50 个 （prompt， image） 测试对进行微调，并展示如何用微调模型生成合成机器人轨迹以支持下游机器人学习任务。支持单 GPU 与多 GPU 训练，切换不同领域适配器无需重训。

- **来源**: Hugging Face：Blog（RSS）
- **原文链接**: [https://huggingface.co/blog/nvidia/cosmos-fine-tuning-for-robot-video-generation](https://huggingface.co/blog/nvidia/cosmos-fine-tuning-for-robot-video-generation)
- **AIHOT 链接**: [https://aihot.virxact.com/items/cmpbfzxd4172bslnzzdo3g1lc](https://aihot.virxact.com/items/cmpbfzxd4172bslnzzdo3g1lc)
