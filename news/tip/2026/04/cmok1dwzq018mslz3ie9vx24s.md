---
"title": "闪速QLA：基于TileLang构建的高性能线性注意力内核"
"aihot_id": "cmok1dwzq018mslz3ie9vx24s"
"aihot_category": "tip"
"published_at": "2026-04-29T12:16:13.000Z"
"discovered_at": "2026-04-29T12:33:55.938Z"
"source_name": "X：通义千问 / Qwen (@Alibaba_Qwen)"
"original_url": "https://x.com/Alibaba_Qwen/status/2049462758211772663"
"canonical_url": "https://aihot.virxact.com/items/cmok1dwzq018mslz3ie9vx24s"
"score": 66
"content_kind": "news"
---

# 闪速QLA：基于TileLang构建的高性能线性注意力内核

FlashQLA是基于TileLang开发的高性能线性注意力内核，专为提升个人设备上智能体AI性能而设计。它实现了2-3倍的前向传播加速和2倍的反向传播加速。其核心技术包括门控驱动的片上自动计算与通信重叠、硬件友好的代数重构，以及TileLang融合的Warp专用内核。该设计通过自动片上通信重叠显著提升了流处理器利用率，在张量并行、小模型和长上下文任务中效果突出。尽管在大批量处理时，其将GDN流程拆分为两个内核的策略会带来额外内存开销，但在边缘设备和长上下文实际场景中性能更优。反向传播部分通过构建16级、严格片上内存限制下的Warp专用流水线，实现了超过2倍的内核级加速。

- **来源**: X：通义千问 / Qwen (@Alibaba_Qwen)
- **原文链接**: [https://x.com/Alibaba_Qwen/status/2049462758211772663](https://x.com/Alibaba_Qwen/status/2049462758211772663)
- **AIHOT 链接**: [https://aihot.virxact.com/items/cmok1dwzq018mslz3ie9vx24s](https://aihot.virxact.com/items/cmok1dwzq018mslz3ie9vx24s)
