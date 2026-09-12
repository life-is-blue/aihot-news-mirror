---
"title": "vLLM 推出原生 RL 权重同步 API 并修复异步 RL 死锁"
"aihot_id": "cmtynzyln033trog0zd40h0d0"
"aihot_category": "ai-products"
"published_at": "2026-05-28T00:00:00.000Z"
"discovered_at": "2026-05-28T00:00:00.000Z"
"source_name": "vLLM 官方博客（RSS）"
"original_url": "https://vllm.ai/blog/2026-05-28-native-rl-apis"
"canonical_url": "https://aihot.news/items/cmtynzyln033trog0zd40h0d0"
"score": 60
"content_kind": "news"
---

# vLLM 推出原生 RL 权重同步 API 并修复异步 RL 死锁

vLLM 引入原生权重同步 API，将 RL 训练器到推理引擎的权重传输标准化为初始化、开始、更新、结束四阶段，采用可插拔 WeightTransferEngine 抽象，目前支持 NCCL 和 IPC 两种后端并支持 packed tensor 优化。

- **来源**: vLLM 官方博客（RSS）
- **原文链接**: [https://vllm.ai/blog/2026-05-28-native-rl-apis](https://vllm.ai/blog/2026-05-28-native-rl-apis)
- **AIHOT 链接**: [https://aihot.news/items/cmtynzyln033trog0zd40h0d0](https://aihot.news/items/cmtynzyln033trog0zd40h0d0)
