---
"title": "小红书 RedKnot 推理引擎：将 KV Cache 按注意力头拆解实现长文本加速"
"aihot_id": "cmqz49v7400e4sldyr126zupc"
"aihot_category": "ai-products"
"published_at": "2026-06-29T11:00:07.000Z"
"discovered_at": "2026-06-29T11:10:44.968Z"
"source_name": "公众号：小红书技术（dots.llm）"
"original_url": "https://mp.weixin.qq.com/s/qRrZvL0aZzYI82djFSrLug"
"canonical_url": "https://aihot.virxact.com/items/cmqz49v7400e4sldyr126zupc"
"score": 72
"content_kind": "news"
---

# 小红书 RedKnot 推理引擎：将 KV Cache 按注意力头拆解实现长文本加速

RedKnot 将 KV Cache 沿注意力头维度拆解，通过头分类稀疏（局部头占 83.4%-96.8%）、稀疏 FFN 和 SegPagedAttention 三个机制统一算法与存储粒度。在 8 卡 H800 上，TTFT 最高加速 1.6-3.54×，单卡并发提升 4.7-7.8×，预填充 FLOPs 削减 67%-79.5%。DeepSeek-V4-Flash 上 128K 上下文 TTFT 加速达 5.16×，KV 传输最多省 6.3×。精度通常不低于稠密 F1 的 95%。

- **来源**: 公众号：小红书技术（dots.llm）
- **原文链接**: [https://mp.weixin.qq.com/s/qRrZvL0aZzYI82djFSrLug](https://mp.weixin.qq.com/s/qRrZvL0aZzYI82djFSrLug)
- **AIHOT 链接**: [https://aihot.virxact.com/items/cmqz49v7400e4sldyr126zupc](https://aihot.virxact.com/items/cmqz49v7400e4sldyr126zupc)
