---
"title": "llama.cpp 服务器新增多模型管理功能"
"aihot_id": "cmoegbhak00a4slxx4drrrsd4"
"aihot_category": null
"published_at": "2025-12-11T15:47:44.000Z"
"discovered_at": "2025-12-11T15:47:44.000Z"
"source_name": "Hugging Face：Blog（RSS）"
"original_url": "https://huggingface.co/blog/ggml-org/model-management-in-llamacpp"
"canonical_url": "https://aihot.virxact.com/items/cmoegbhak00a4slxx4drrrsd4"
"score": 76
"content_kind": "news"
---

# llama.cpp 服务器新增多模型管理功能

llama.cpp 服务器新增了类似 Ollama 的多模型管理功能。该功能采用多进程架构，每个模型独立运行，确保单个模型崩溃不影响其他服务。系统支持自动发现本地 GGUF 模型文件、按需加载，并默认采用 LRU 机制管理最多同时加载4个模型。用户可通过请求中的模型字段路由到特定模型，并可使用 API 进行加载、卸载和列表查看。所有加载的模型可继承路由器的统一设置，也支持通过预设文件为每个模型单独配置参数。内置 Web UI 同样支持模型切换。

- **来源**: Hugging Face：Blog（RSS）
- **原文链接**: [https://huggingface.co/blog/ggml-org/model-management-in-llamacpp](https://huggingface.co/blog/ggml-org/model-management-in-llamacpp)
- **AIHOT 链接**: [https://aihot.virxact.com/items/cmoegbhak00a4slxx4drrrsd4](https://aihot.virxact.com/items/cmoegbhak00a4slxx4drrrsd4)
