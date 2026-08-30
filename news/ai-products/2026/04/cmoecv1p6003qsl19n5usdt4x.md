---
"title": "cuLA：用 CUDA 重写线性注意力"
"aihot_id": "cmoecv1p6003qsl19n5usdt4x"
"aihot_category": "ai-products"
"published_at": "2026-04-08T00:00:00.000Z"
"discovered_at": "2026-04-08T00:00:00.000Z"
"source_name": "蚂蚁百灵：Developer Blog（网页）"
"original_url": "https://developer.ant-ling.com/zh-CN/blogs/cula-cuda-linear-attention"
"canonical_url": "https://aihot.virxact.com/items/cmoecv1p6003qsl19n5usdt4x"
"score": 66
"content_kind": "news"
---

# cuLA：用 CUDA 重写线性注意力

cuLA是一套面向GLA、KDA等线性注意力变体的高性能CUDA内核库。它通过手工优化的CuTe DSL与CUTLASS C++实现，深度适配NVIDIA Hopper和Blackwell等新一代GPU架构，旨在将复杂算法转化为可直接调用的高性能算子。其接口与flash-linear-attention保持一致，开发者仅需修改一行import即可低成本接入。性能测试显示，其内核在Blackwell和Hopper GPU上相比Triton基线实现，平均加速比最高达1.52倍。该项目已开源，并计划未来集成至FLA的统一调度机制中。

- **来源**: 蚂蚁百灵：Developer Blog（网页）
- **原文链接**: [https://developer.ant-ling.com/zh-CN/blogs/cula-cuda-linear-attention](https://developer.ant-ling.com/zh-CN/blogs/cula-cuda-linear-attention)
- **AIHOT 链接**: [https://aihot.virxact.com/items/cmoecv1p6003qsl19n5usdt4x](https://aihot.virxact.com/items/cmoecv1p6003qsl19n5usdt4x)
