---
"title": "构建AI智能体应优先设计路由"
"aihot_id": "cmr2jc03c08kssl8zf2bmdjlj"
"aihot_category": "tip"
"published_at": "2026-07-01T00:00:00.000Z"
"discovered_at": "2026-07-01T20:35:37.098Z"
"source_name": "Tomer Tunguz 博客（VC 分析）"
"original_url": "https://www.tomtunguz.com/ai-execution-routing"
"canonical_url": "https://aihot.virxact.com/items/cmr2jc03c08kssl8zf2bmdjlj"
"score": 60
"content_kind": "news"
---

# 构建AI智能体应优先设计路由

构建AI智能体时，应优先设计路由（router）而非选择模型。路由决定每个请求由哪层模型处理。正确路由可使70-80%流量运行在免费本地模型或异步推理上，将AI开销降低90%+。Brian Armstrong指出Coinbase通过更好的默认设置、路由和缓存，在token使用量增长的同时将AI支出减半。路由分三层：技能分类器、路由器、模型选择器。本地计算近乎零成本，异步批量推理比实时推理便宜两个数量级。大多数工作无需秒级返回。同步预测器标记复杂任务，夜间批量评估器更新路由权重。技能蒸馏后，非编码类任务中70-80%智能体流量可由本地模型处理。

- **来源**: Tomer Tunguz 博客（VC 分析）
- **原文链接**: [https://www.tomtunguz.com/ai-execution-routing](https://www.tomtunguz.com/ai-execution-routing)
- **AIHOT 链接**: [https://aihot.virxact.com/items/cmr2jc03c08kssl8zf2bmdjlj](https://aihot.virxact.com/items/cmr2jc03c08kssl8zf2bmdjlj)
