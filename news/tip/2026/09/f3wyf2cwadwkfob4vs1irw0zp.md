---
"title": "用一个 uv 编译开关为 vLLM 容器启动省下约 18 秒"
"aihot_id": "f3wyf2cwadwkfob4vs1irw0zp"
"aihot_category": "tip"
"published_at": "2026-09-22T00:00:00.000Z"
"discovered_at": "2026-10-18T22:29:13.220Z"
"source_name": "vLLM 官方博客（RSS）"
"original_url": "https://vllm.ai/blog/2026-09-22-python-bytecode-startup"
"canonical_url": "https://aihot.news/items/f3wyf2cwadwkfob4vs1irw0zp"
"score": 66
"content_kind": "news"
---

# 用一个 uv 编译开关为 vLLM 容器启动省下约 18 秒

vLLM 博客作者 Nils Matteson 实测在镜像构建时设置 ENV UV_COMPILE_BYTECODE=1 预编译字节码，H100 服务器上 Qwen3-8B 和 Qwen3-32B 的启动到首个正确响应中位节省分别为 17.6 秒（17.6%）和 17.8 秒（13.9%）。

- **来源**: vLLM 官方博客（RSS）
- **原文链接**: [https://vllm.ai/blog/2026-09-22-python-bytecode-startup](https://vllm.ai/blog/2026-09-22-python-bytecode-startup)
- **AIHOT 链接**: [https://aihot.news/items/f3wyf2cwadwkfob4vs1irw0zp](https://aihot.news/items/f3wyf2cwadwkfob4vs1irw0zp)
