---
"title": "谷歌发布 Gemma 4 QAT 检查点，支持消费级 GPU 和移动设备本地运行"
"aihot_id": "cmq166ise0cu5sltrv7a12syq"
"aihot_category": "ai-models"
"published_at": "2026-06-05T16:57:24.000Z"
"discovered_at": "2026-06-05T16:59:57.782Z"
"source_name": "X：Google AI for Developers (@googleaidevs)"
"original_url": "https://x.com/googleaidevs/status/2062941872599847268"
"canonical_url": "https://aihot.virxact.com/items/cmq166ise0cu5sltrv7a12syq"
"score": 72
"content_kind": "news"
---

# 谷歌发布 Gemma 4 QAT 检查点，支持消费级 GPU 和移动设备本地运行

谷歌发布 Gemma 4 量化感知训练 （QAT） 检查点，支持在消费级 GPU 和移动设备上本地运行，质量损失极小。新检查点提供 GGUF（Q4_0）格式，覆盖所有尺寸及起草模型，实现最佳本地性能。自定义移动模式采用混合精度方案，将 Gemma 4 压缩至 1GB 以下，包含 2-bit 解码层、优化 KV 缓存和静态激活。通过在训练中模拟压缩（而非训练后量化），大幅降低内存占用并加速解码，同时保持推理质量。

- **来源**: X：Google AI for Developers (@googleaidevs)
- **原文链接**: [https://x.com/googleaidevs/status/2062941872599847268](https://x.com/googleaidevs/status/2062941872599847268)
- **AIHOT 链接**: [https://aihot.virxact.com/items/cmq166ise0cu5sltrv7a12syq](https://aihot.virxact.com/items/cmq166ise0cu5sltrv7a12syq)
