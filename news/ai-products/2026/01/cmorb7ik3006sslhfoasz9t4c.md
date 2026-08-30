---
"title": "高效离线推理框架 Flood：吞吐量显著领先，支持多模态与量化"
"aihot_id": "cmorb7ik3006sslhfoasz9t4c"
"aihot_category": "ai-products"
"published_at": "2026-01-30T07:55:56.000Z"
"discovered_at": "2026-01-30T07:55:56.000Z"
"source_name": "蚂蚁 inclusionAI：GitHub 新仓库"
"original_url": "https://github.com/inclusionAI/flood"
"canonical_url": "https://aihot.virxact.com/items/cmorb7ik3006sslhfoasz9t4c"
"score": 61
"content_kind": "news"
---

# 高效离线推理框架 Flood：吞吐量显著领先，支持多模态与量化

Flood 是一款面向离线应用的高效大语言模型推理框架。它采用流水线并行降低通信开销，并通过分段式KV缓存管理提升连续性。框架支持连续批处理、分块预填充、FP8/INT8量化及多模态模型推理。性能测试表明，其在多种模型和硬件上的吞吐量最高可达 vLLM 的 2.4 倍。其专用内核 SegmentAttention 在处理长序列时，解码速度较 FlashAttention 最高提升 3.16 倍。该项目于 2025 年 3 月开源并快速迭代，已支持前瞻解码等新特性。

- **来源**: 蚂蚁 inclusionAI：GitHub 新仓库
- **原文链接**: [https://github.com/inclusionAI/flood](https://github.com/inclusionAI/flood)
- **AIHOT 链接**: [https://aihot.virxact.com/items/cmorb7ik3006sslhfoasz9t4c](https://aihot.virxact.com/items/cmorb7ik3006sslhfoasz9t4c)
