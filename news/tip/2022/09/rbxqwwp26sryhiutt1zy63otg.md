---
"title": "Hugging Face 讲解 Accelerate 如何借助 PyTorch 加载和运行超大模型"
"aihot_id": "rbxqwwp26sryhiutt1zy63otg"
"aihot_category": "tip"
"published_at": "2022-09-27T00:00:00.000Z"
"discovered_at": "2026-10-03T15:06:39.949Z"
"source_name": "Hugging Face 社区博客（混合发现）"
"original_url": "https://huggingface.co/blog/accelerate-large-models"
"canonical_url": "https://aihot.news/items/rbxqwwp26sryhiutt1zy63otg"
"score": 71
"content_kind": "news"
---

# Hugging Face 讲解 Accelerate 如何借助 PyTorch 加载和运行超大模型

Hugging Face 发布博客讲解 Accelerate 如何加载和运行超出单机内存的超大模型。核心做法是用 PyTorch meta device 创建空模型、用 infer_auto_device_map 自动计算 GPU、CPU 与磁盘的设备分配，并按分片加载权重，通过 hooks 在每次前向传播前后搬运权重。

- **来源**: Hugging Face 社区博客（混合发现）
- **原文链接**: [https://huggingface.co/blog/accelerate-large-models](https://huggingface.co/blog/accelerate-large-models)
- **AIHOT 链接**: [https://aihot.news/items/rbxqwwp26sryhiutt1zy63otg](https://aihot.news/items/rbxqwwp26sryhiutt1zy63otg)
