---
"title": "使用Hugging Face轻松构建和共享ROCm内核"
"aihot_id": "cmoegbhak00aislxxixtvdmui"
"aihot_category": null
"published_at": "2025-11-17T00:00:00.000Z"
"discovered_at": "2025-11-17T00:00:00.000Z"
"source_name": "Hugging Face：Blog（RSS）"
"original_url": "https://huggingface.co/blog/build-rocm-kernels"
"canonical_url": "https://aihot.virxact.com/items/cmoegbhak00aislxxixtvdmui"
"score": 73
"content_kind": "news"
---

# 使用Hugging Face轻松构建和共享ROCm内核

Hugging Face的kernels库简化了高性能深度学习内核的构建与共享，支持CUDA、ROCm等多种后端。本文以ROCm兼容内核为例，展示如何利用kernel-builder工具构建、测试并共享内核。以RadeonFlow的GEMM内核为具体案例，该内核是针对AMD Instinct MI300X GPU优化的FP8块状矩阵乘法实现，采用e4m3fnuz浮点格式和每块缩放因子以保持低精度计算准确性，并在2025年AMD开发者挑战赛中获最高奖。指南涵盖项目设置、构建配置及通过kernels社区分享的完整步骤。

- **来源**: Hugging Face：Blog（RSS）
- **原文链接**: [https://huggingface.co/blog/build-rocm-kernels](https://huggingface.co/blog/build-rocm-kernels)
- **AIHOT 链接**: [https://aihot.virxact.com/items/cmoegbhak00aislxxixtvdmui](https://aihot.virxact.com/items/cmoegbhak00aislxxixtvdmui)
