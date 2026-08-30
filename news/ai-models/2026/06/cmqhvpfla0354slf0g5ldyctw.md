---
"title": "GLM-5.2：为长周期任务而生"
"aihot_id": "cmqhvpfla0354slf0g5ldyctw"
"aihot_category": "ai-models"
"published_at": "2026-06-17T09:01:25.000Z"
"discovered_at": "2026-06-17T09:38:49.576Z"
"source_name": "Hugging Face：Blog（RSS）"
"original_url": "https://huggingface.co/blog/zai-org/glm-52-blog"
"canonical_url": "https://aihot.virxact.com/items/cmqhvpfla0354slf0g5ldyctw"
"score": 83
"content_kind": "news"
---

# GLM-5.2：为长周期任务而生

GLM-5.2 发布，支持 1M token 上下文，采用 IndexShare 架构--每 4 个稀疏注意力层共用一个轻量索引器，将 1M 上下文下每 token FLOPs 降低 2.9 倍；MTP 层改进使推测解码接受长度提升 20%。长周期编码基准上，FrontierSWE 落后 Opus 4.8 仅 1%、领先 GPT-5.5 1%；PostTrainBench 仅次于 Opus 4.8；SWE-Marathon 落后 Opus 4.8 13% 但排名第二。标准编码测试 Terminal-Bench 2.1 获 81.0 分（GLM-5.1 为 63.5），接近 Opus 4.8 的 85.0。模型引入努力级别控制以平衡性能与延迟。MIT 开源许可，无地域限制。

- **来源**: Hugging Face：Blog（RSS）
- **原文链接**: [https://huggingface.co/blog/zai-org/glm-52-blog](https://huggingface.co/blog/zai-org/glm-52-blog)
- **AIHOT 链接**: [https://aihot.virxact.com/items/cmqhvpfla0354slf0g5ldyctw](https://aihot.virxact.com/items/cmqhvpfla0354slf0g5ldyctw)
