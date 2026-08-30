---
"title": "解锁连续批处理中的异步性"
"aihot_id": "cmp5lopxg0fafsljxgkro5pka"
"aihot_category": "tip"
"published_at": "2026-05-14T00:00:00.000Z"
"discovered_at": "2026-05-14T14:45:23.686Z"
"source_name": "Hugging Face：Blog（RSS）"
"original_url": "https://huggingface.co/blog/continuous_async"
"canonical_url": "https://aihot.virxact.com/items/cmp5lopxg0fafsljxgkro5pka"
"score": 59
"content_kind": "news"
---

# 解锁连续批处理中的异步性

在连续批处理中，同步方式导致CPU与GPU交替工作，造成闲置浪费。测试显示，使用8B模型生成8K令牌时，GPU有24%的时间处于空闲状态。异步批处理通过分离工作负载，让CPU准备下一批次（N+1）的同时，GPU计算当前批次（N），从而消除闲置间隙。这可通过CUDA流实现操作并发，无需更改内核或模型，仅需协调硬件执行顺序。理论上，该方法可将总生成时间从300.6秒减少至228秒，实现24%的免费加速。相关技术已集成到transformers库的连续批处理中，显著提升推理性能。

- **来源**: Hugging Face：Blog（RSS）
- **原文链接**: [https://huggingface.co/blog/continuous_async](https://huggingface.co/blog/continuous_async)
- **AIHOT 链接**: [https://aihot.virxact.com/items/cmp5lopxg0fafsljxgkro5pka](https://aihot.virxact.com/items/cmp5lopxg0fafsljxgkro5pka)
