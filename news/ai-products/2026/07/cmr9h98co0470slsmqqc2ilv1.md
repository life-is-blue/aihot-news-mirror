---
"title": "SGLang 集成 DSpark 推测解码：置信度驱动的可变长度验证"
"aihot_id": "cmr9h98co0470slsmqqc2ilv1"
"aihot_category": "ai-products"
"published_at": "2026-07-05T16:00:00.000Z"
"discovered_at": "2026-07-06T17:11:47.280Z"
"source_name": "LMSYS：Blog（Chatbot Arena 团队）"
"original_url": "https://www.lmsys.org/blog/2026-07-06-dspark-sglang"
"canonical_url": "https://aihot.virxact.com/items/cmr9h98co0470slsmqqc2ilv1"
"score": 63
"content_kind": "news"
---

# SGLang 集成 DSpark 推测解码：置信度驱动的可变长度验证

SGLang 团队将 DSpark 推测解码算法集成到开源推理引擎中。该算法采用半自回归块起草器一次生成一组 token，并利用置信度头与顺序温度缩放（STS）为每个请求动态分配可变验证长度，从而在高负载下裁剪无效验证成本。SGLang 支持密集模型（如 Qwen3）和稀疏模型（如 DeepSeek-V4），通过全 CUDA 图处理不规则的每请求验证长度。提供三种验证模式：`static`（全长）、`compact`（生产路径）和 `cap-accept`（接受上限测量）。还引入了零开销调度、基于离线成本表的在线调度器、融合 Triton 核等优化。在 H200 上使用 DeepSeek-V4-Flash 的测试中，DSpark 在整个并发扫描范围内比 MTP 和非推测基线实现了更优的吞吐量-延迟权衡。

- **来源**: LMSYS：Blog（Chatbot Arena 团队）
- **原文链接**: [https://www.lmsys.org/blog/2026-07-06-dspark-sglang](https://www.lmsys.org/blog/2026-07-06-dspark-sglang)
- **AIHOT 链接**: [https://aihot.virxact.com/items/cmr9h98co0470slsmqqc2ilv1](https://aihot.virxact.com/items/cmr9h98co0470slsmqqc2ilv1)
