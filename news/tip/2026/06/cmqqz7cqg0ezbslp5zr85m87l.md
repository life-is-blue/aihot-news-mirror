---
"title": "在 Transformers.js 中实验提议的跨源存储 API"
"aihot_id": "cmqqz7cqg0ezbslp5zr85m87l"
"aihot_category": "tip"
"published_at": "2026-06-23T00:00:00.000Z"
"discovered_at": "2026-06-23T18:26:40.071Z"
"source_name": "Hugging Face：Blog（RSS）"
"original_url": "https://huggingface.co/blog/cross-origin-storage"
"canonical_url": "https://aihot.virxact.com/items/cmqqz7cqg0ezbslp5zr85m87l"
"score": 64
"content_kind": "news"
---

# 在 Transformers.js 中实验提议的跨源存储 API

Transformers.js 在浏览器中运行 AI 模型时，不同来源的 Web 应用会重复下载并缓存相同的模型资源（如 Xenova/whisper-tiny.en）和 Wasm 运行时文件（如 4，733 kB 的 ort-wasm-simd-threaded.asyncify.wasm），即使资源 URL 相同，浏览器因 Network Isolation Key 隔离缓存，单次 demo 就产生 177 MB 冗余下载和存储。Cross-Origin Storage API 是一项早期提案，旨在让跨来源应用共享缓存的模型和运行时资源。目前该 API 尚未在浏览器原生实现，但可通过 Chrome 扩展注入 polyfill 进行实验。

- **来源**: Hugging Face：Blog（RSS）
- **原文链接**: [https://huggingface.co/blog/cross-origin-storage](https://huggingface.co/blog/cross-origin-storage)
- **AIHOT 链接**: [https://aihot.virxact.com/items/cmqqz7cqg0ezbslp5zr85m87l](https://aihot.virxact.com/items/cmqqz7cqg0ezbslp5zr85m87l)
