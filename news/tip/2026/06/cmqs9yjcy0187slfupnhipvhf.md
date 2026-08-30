---
"title": "NVIDIA NeMo AutoModel：一行代码加速Transformer MoE模型微调"
"aihot_id": "cmqs9yjcy0187slfupnhipvhf"
"aihot_category": "tip"
"published_at": "2026-06-24T16:00:13.000Z"
"discovered_at": "2026-06-24T16:15:30.703Z"
"source_name": "Hugging Face：Blog（RSS）"
"original_url": "https://huggingface.co/blog/nvidia/accelerating-fine-tuning-nv\
  idia-nemo-automodel"
"canonical_url": "https://aihot.virxact.com/items/cmqs9yjcy0187slfupnhipvhf"
"score": 66
"content_kind": "news"
---

# NVIDIA NeMo AutoModel：一行代码加速Transformer MoE模型微调

NVIDIA NeMo AutoModel 是基于 Transformers v5 的开源库，添加 Expert Parallelism、DeepEP 融合 all-to-all 调度和 TransformerEngine 内核。在 MoE 模型微调中，相比原生 v5，训练吞吐量提升 3.4-3.7 倍，GPU 内存减少 29-32%，仅需改动一行 import。在 16 节点 128 张 H100 上全微调 Nemotron 3 Ultra 550B A55B 时，v5 因内存不足无法运行，而 AutoModel 凭借 EP=64 专家并行使训练可行。单节点 30B MoE 模型（如 Qwen3-30B-A3B）同样获得可量化的性能优势。

- **来源**: Hugging Face：Blog（RSS）
- **原文链接**: [https://huggingface.co/blog/nvidia/accelerating-fine-tuning-nvidia-nemo-automodel](https://huggingface.co/blog/nvidia/accelerating-fine-tuning-nvidia-nemo-automodel)
- **AIHOT 链接**: [https://aihot.virxact.com/items/cmqs9yjcy0187slfupnhipvhf](https://aihot.virxact.com/items/cmqs9yjcy0187slfupnhipvhf)
