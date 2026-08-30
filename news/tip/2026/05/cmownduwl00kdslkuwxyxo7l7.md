---
"title": "MedQA：基于AMD ROCm与LoRA微调Qwen3-1.7B的临床问答模型"
"aihot_id": "cmownduwl00kdslkuwxyxo7l7"
"aihot_category": "tip"
"published_at": "2026-05-08T07:54:18.000Z"
"discovered_at": "2026-05-08T08:23:00.568Z"
"source_name": "Hugging Face：Blog（RSS）"
"original_url": "https://huggingface.co/blog/lablab-ai-amd-developer-hackathon/medqa"
"canonical_url": "https://aihot.virxact.com/items/cmownduwl00kdslkuwxyxo7l7"
"score": 58
"content_kind": "news"
---

# MedQA：基于AMD ROCm与LoRA微调Qwen3-1.7B的临床问答模型

该项目使用AMD Instinct MI300X（192 GB HBM3显存）和ROCm，通过LoRA微调Qwen3-1.7B模型实现医学问答。训练仅用2000条MedMCQA样本，约5分钟完成，仅更新约220万参数（占模型总参数的0.1443%），全程采用fp16精度，无需量化。HuggingFace生态（Transformers、PEFT、TRL、Accelerate）在ROCm上无缝运行，无需修改代码即可直接替代CUDA。模型已上传至HuggingFace Hub并提供在线Demo。

- **来源**: Hugging Face：Blog（RSS）
- **原文链接**: [https://huggingface.co/blog/lablab-ai-amd-developer-hackathon/medqa](https://huggingface.co/blog/lablab-ai-amd-developer-hackathon/medqa)
- **AIHOT 链接**: [https://aihot.virxact.com/items/cmownduwl00kdslkuwxyxo7l7](https://aihot.virxact.com/items/cmownduwl00kdslkuwxyxo7l7)
