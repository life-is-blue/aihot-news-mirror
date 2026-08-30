---
"title": "PyTorch 性能分析系列（一）：torch.profiler 入门指南"
"aihot_id": "cmpqubbsx08amslnoeis97f98"
"aihot_category": "tip"
"published_at": "2026-05-29T00:00:00.000Z"
"discovered_at": "2026-05-29T11:30:03.770Z"
"source_name": "Hugging Face：Blog（RSS）"
"original_url": "https://huggingface.co/blog/torch-profiler"
"canonical_url": "https://aihot.virxact.com/items/cmpqubbsx08amslnoeis97f98"
"score": 71
"content_kind": "news"
---

# PyTorch 性能分析系列（一）：torch.profiler 入门指南

本文是 PyTorch profiling 系列的开篇，从最简单的矩阵乘法加偏置操作出发，逐步讲解如何使用 `torch.profiler` 进行性能分析。涵盖 profiler 设置、导出统计表格与 Chrome trace、解读 CPU 和 GPU 活动的时序关系，以及 `torch.compile` 对底层 CUDA kernel 调用链的影响。实验基于 NVIDIA A100-SXM4-80GB GPU 运行，面向基本掌握 PyTorch 但缺乏 profiling 经验的读者。

- **来源**: Hugging Face：Blog（RSS）
- **原文链接**: [https://huggingface.co/blog/torch-profiler](https://huggingface.co/blog/torch-profiler)
- **AIHOT 链接**: [https://aihot.virxact.com/items/cmpqubbsx08amslnoeis97f98](https://aihot.virxact.com/items/cmpqubbsx08amslnoeis97f98)
