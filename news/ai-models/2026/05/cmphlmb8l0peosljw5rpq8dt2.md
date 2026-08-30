---
"title": "NVIDIA 发布 Nemotron-Labs Diffusion 系列模型，支持三种生成模式"
"aihot_id": "cmphlmb8l0peosljw5rpq8dt2"
"aihot_category": "ai-models"
"published_at": "2026-05-23T00:02:03.000Z"
"discovered_at": "2026-05-23T00:16:45.469Z"
"source_name": "Hugging Face：Blog（RSS）"
"original_url": "https://huggingface.co/blog/nvidia/nemotron-labs-diffusion"
"canonical_url": "https://aihot.virxact.com/items/cmphlmb8l0peosljw5rpq8dt2"
"score": 63
"content_kind": "news"
---

# NVIDIA 发布 Nemotron-Labs Diffusion 系列模型，支持三种生成模式

NVIDIA 发布 Nemotron-Labs Diffusion 系列，含 3B、8B、14B 文本模型和 8B 视觉-语言模型（VLM），均采用商用友好的 NVIDIA Nemotron Open Model License 或 NVIDIA Source Code License。模型支持自回归、扩散（逐块并行生成后逐步精炼）和自推测（扩散草拟候选 token 再自回归验证）三种模式。8B 模型平均准确率比 Qwen3 8B 提升 1.2%，扩散模式每次前向传递的 token 数（TPF）达自回归的 2.6 倍，自推测达 6-6.4 倍。模型在 1.3T tokens 上预训练、45B tokens 上微调，代码与模型已发布于 HuggingFace 和 GitHub，推理将获 SGLang 支持。

- **来源**: Hugging Face：Blog（RSS）
- **原文链接**: [https://huggingface.co/blog/nvidia/nemotron-labs-diffusion](https://huggingface.co/blog/nvidia/nemotron-labs-diffusion)
- **AIHOT 链接**: [https://aihot.virxact.com/items/cmphlmb8l0peosljw5rpq8dt2](https://aihot.virxact.com/items/cmphlmb8l0peosljw5rpq8dt2)
