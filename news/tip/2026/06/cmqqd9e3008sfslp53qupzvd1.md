---
"title": "我们用免费本地模型对 OpenClaw 仓库进行实时分类"
"aihot_id": "cmqqd9e3008sfslp53qupzvd1"
"aihot_category": "tip"
"published_at": "2026-06-22T00:00:00.000Z"
"discovered_at": "2026-06-23T08:12:23.620Z"
"source_name": "Hugging Face：Blog（RSS）"
"original_url": "https://huggingface.co/blog/local-models-pr-triage"
"canonical_url": "https://aihot.virxact.com/items/cmqqd9e3008sfslp53qupzvd1"
"score": 59
"content_kind": "news"
---

# 我们用免费本地模型对 OpenClaw 仓库进行实时分类

Hugging Face 在 OpenClaw 仓库上测试用 Gemma 和 Qwen 等本地模型实时分类 issue 和 PR。他们使用 Pi agent harness 驱动模型，配合 reposhell 只允许读操作防止提示词注入。测试的模型包括 gemma-4-26b-a4b 和 qwen3.6-35b-a3b，经性能优化后均可在本地生成数百 token/s。该方案运行在 NVIDIA GB10（128 GB 统一内存）上，相比每月 200 美元的 ChatGPT Pro 订阅，可实现近乎实时的通知且仅消耗电费。

- **来源**: Hugging Face：Blog（RSS）
- **原文链接**: [https://huggingface.co/blog/local-models-pr-triage](https://huggingface.co/blog/local-models-pr-triage)
- **AIHOT 链接**: [https://aihot.virxact.com/items/cmqqd9e3008sfslp53qupzvd1](https://aihot.virxact.com/items/cmqqd9e3008sfslp53qupzvd1)
