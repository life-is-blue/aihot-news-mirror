---
"title": "闪存QLA：基于TileLang构建的高性能线性注意力内核"
"aihot_id": "cmok1dwzq018nslz3bcc08gwr"
"aihot_category": "ai-products"
"published_at": "2026-04-29T12:15:51.000Z"
"discovered_at": "2026-04-29T12:33:55.938Z"
"source_name": "X：通义千问 / Qwen (@Alibaba_Qwen)"
"original_url": "https://x.com/Alibaba_Qwen/status/2049462666734026923"
"canonical_url": "https://aihot.virxact.com/items/cmok1dwzq018nslz3bcc08gwr"
"score": 60
"content_kind": "news"
---

# 闪存QLA：基于TileLang构建的高性能线性注意力内核

FlashQLA是基于TileLang构建的高性能线性注意力内核，专为个人设备上的智能体AI设计。其核心创新包括门控驱动的自动片内计算并行、硬件友好的代数重构以及TileLang融合的Warp专用内核，通过提升流处理器利用率，在前向传播上实现2-3倍加速，反向传播实现2倍加速。该技术在小模型、长上下文工作负载和张量并行设置中效果显著，虽然在大批次处理时内存I/O开销略高，但在边缘设备和长上下文场景中实际性能更优。反向传播通过16级Warp专用流水线在严格片上内存限制下实现了核心级加速。相关资源已开源。

- **来源**: X：通义千问 / Qwen (@Alibaba_Qwen)
- **原文链接**: [https://x.com/Alibaba_Qwen/status/2049462666734026923](https://x.com/Alibaba_Qwen/status/2049462666734026923)
- **AIHOT 链接**: [https://aihot.virxact.com/items/cmok1dwzq018nslz3bcc08gwr](https://aihot.virxact.com/items/cmok1dwzq018nslz3bcc08gwr)
