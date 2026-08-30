---
"title": "Reachy Mini 实现完全本地化语音交互"
"aihot_id": "cmpo9tiih0478slv4blj1ms6a"
"aihot_category": "tip"
"published_at": "2026-05-27T00:00:00.000Z"
"discovered_at": "2026-05-27T16:20:48.637Z"
"source_name": "Hugging Face：Blog（RSS）"
"original_url": "https://huggingface.co/blog/local-reachy-mini-conversation"
"canonical_url": "https://aihot.virxact.com/items/cmpo9tiih0478slv4blj1ms6a"
"score": 72
"content_kind": "news"
---

# Reachy Mini 实现完全本地化语音交互

Reachy Mini 机器人现可通过 `speech-to-speech` 库实现完全本地化的语音交互，无需依赖云端。该方案采用级联流水线架构，对外提供 Realtime API 兼容的 WebSocket 接口。默认组件包括 Silero VAD 用于语音活动检测、Parakeet-TDT 作为语音转文本模型、通义千问（Qwen3-TTS）作为文本转语音模型。大语言模型推荐使用 llama.cpp 运行 Gemma 4。所有数据均在本地处理，保障了隐私且无 API 费用。

- **来源**: Hugging Face：Blog（RSS）
- **原文链接**: [https://huggingface.co/blog/local-reachy-mini-conversation](https://huggingface.co/blog/local-reachy-mini-conversation)
- **AIHOT 链接**: [https://aihot.virxact.com/items/cmpo9tiih0478slv4blj1ms6a](https://aihot.virxact.com/items/cmpo9tiih0478slv4blj1ms6a)
