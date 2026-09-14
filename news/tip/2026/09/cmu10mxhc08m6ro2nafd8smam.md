---
"title": "Hugging Face 用 LoRA 与 Storage Bucket 在 HF Jobs 上跑异步 GRPO，免 NCCL 并提速 3.9 倍"
"aihot_id": "cmu10mxhc08m6ro2nafd8smam"
"aihot_category": "tip"
"published_at": "2026-09-10T00:00:00.000Z"
"discovered_at": "2026-09-10T00:00:00.000Z"
"source_name": "Hugging Face：Blog（RSS）"
"original_url": "https://huggingface.co/blog/asyncgrpo-lora-hfjobs"
"canonical_url": "https://aihot.news/items/cmu10mxhc08m6ro2nafd8smam"
"score": 61
"content_kind": "news"
---

# Hugging Face 用 LoRA 与 Storage Bucket 在 HF Jobs 上跑异步 GRPO，免 NCCL 并提速 3.9 倍

Hugging Face 在 TRL v1.14 的 AsyncGRPOTrainer 中支持只训练和同步 LoRA adapter，配合 Storage Bucket 挂载与代理路由，让训练 Job 和 vLLM 推理 Job 在不同机器上运行而无需 NCCL。

- **来源**: Hugging Face：Blog（RSS）
- **原文链接**: [https://huggingface.co/blog/asyncgrpo-lora-hfjobs](https://huggingface.co/blog/asyncgrpo-lora-hfjobs)
- **AIHOT 链接**: [https://aihot.news/items/cmu10mxhc08m6ro2nafd8smam](https://aihot.news/items/cmu10mxhc08m6ro2nafd8smam)
