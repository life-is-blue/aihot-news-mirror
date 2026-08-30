---
"title": "一条命令在HF Jobs上启动vLLM服务器"
"aihot_id": "cmqwr2hi6008msliky22llevm"
"aihot_category": "tip"
"published_at": "2026-06-26T00:00:00.000Z"
"discovered_at": "2026-06-27T19:25:33.087Z"
"source_name": "Hugging Face：Blog（RSS）"
"original_url": "https://huggingface.co/blog/vllm-jobs"
"canonical_url": "https://aihot.virxact.com/items/cmqwr2hi6008msliky22llevm"
"score": 62
"content_kind": "news"
---

# 一条命令在HF Jobs上启动vLLM服务器

HuggingFace Jobs 支持一条命令启动 vLLM 服务器，用于测试、评估或批量生成。使用 `hf jobs run` 命令，指定官方 `vllm/vllm-openai` 镜像、GPU flavor（如 `a10g-large`）、暴露端口 8000 并设置超时。服务器启动后可通过 OpenAI 兼容 API 访问，每次请求需携带 HF token 作为 bearer token（仅限有读权限的用户）。示例部署了 Qwen/Qwen3-4B（多 GPU 需 `--tensor-parallel-size`）。`a10g-large` 价格为 $1.50/小时，按分钟计费，可通过 `hf jobs cancel` 停止。

- **来源**: Hugging Face：Blog（RSS）
- **原文链接**: [https://huggingface.co/blog/vllm-jobs](https://huggingface.co/blog/vllm-jobs)
- **AIHOT 链接**: [https://aihot.virxact.com/items/cmqwr2hi6008msliky22llevm](https://aihot.virxact.com/items/cmqwr2hi6008msliky22llevm)
