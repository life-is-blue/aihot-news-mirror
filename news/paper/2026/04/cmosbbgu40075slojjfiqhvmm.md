---
"title": "通过warp decode提升MoE模型推理效率"
"aihot_id": "cmosbbgu40075slojjfiqhvmm"
"aihot_category": "paper"
"published_at": "2026-04-06T12:00:00.000Z"
"discovered_at": "2026-04-06T12:00:00.000Z"
"source_name": "Cursor Blog"
"original_url": "https://cursor.com/blog/warp-decode"
"canonical_url": "https://aihot.virxact.com/items/cmosbbgu40075slojjfiqhvmm"
"score": 66
"content_kind": "news"
---

# 通过warp decode提升MoE模型推理效率

针对Blackwell GPU上的小批量解码，研究提出了一种名为"warp decode"的新方法。该方法颠覆了传统以专家为中心的计算路径，改为让每个GPU warp负责计算一个输出神经元。这一根本性改变消除了原有流程中五个纯数据管理的"簿记"步骤，将整个MoE计算层压缩为仅两个内核。其优势在于避免了填充、分散和中间缓冲区的读写，并通过warp独立性实现了更好的调度。在Blackwell GPU上，该方法实现了1.84倍的吞吐量提升，同时输出精度更高，与全FP32参考值的差距缩小了1.4倍，有效加速了模型研发流程。

- **来源**: Cursor Blog
- **原文链接**: [https://cursor.com/blog/warp-decode](https://cursor.com/blog/warp-decode)
- **AIHOT 链接**: [https://aihot.virxact.com/items/cmosbbgu40075slojjfiqhvmm](https://aihot.virxact.com/items/cmosbbgu40075slojjfiqhvmm)
