---
"title": "Apple Silicon 与 macOS 虚拟机：借助 Llama.cpp 实现 11-16 倍的 LLM 推理加速"
"aihot_id": "cmsox86zv09u6rohdqr80wg0x"
"aihot_category": "paper"
"published_at": "2026-08-11T16:41:17.281Z"
"discovered_at": "2026-08-11T17:15:09.958Z"
"source_name": "Hacker News 热门（buzzing.cc 中文翻译）"
"original_url": "https://github.com/trycua/cua/blob/main/blog/gpu-passthrough-macos-vms.md"
"canonical_url": "https://aihot.virxact.com/items/cmsox86zv09u6rohdqr80wg0x"
"score": 73
"content_kind": "news"
---

# Apple Silicon 与 macOS 虚拟机：借助 Llama.cpp 实现 11-16 倍的 LLM 推理加速

研究团队为 macOS 虚拟机中的 Metal 能力查询构建进程级兼容层，使 llama.cpp 能选用更新的 Metal 内核。在 M1 Ultra 上，TinyLlama 1.1B 的提示处理速度提升 11.08 倍、token 生成提升 16.36 倍，接近裸机性能的 98%；Gemma 4 12B 的提示处理与生成速度分别提升 7.20 倍和 14.54 倍。

- **来源**: Hacker News 热门（buzzing.cc 中文翻译）
- **原文链接**: [https://github.com/trycua/cua/blob/main/blog/gpu-passthrough-macos-vms.md](https://github.com/trycua/cua/blob/main/blog/gpu-passthrough-macos-vms.md)
- **AIHOT 链接**: [https://aihot.virxact.com/items/cmsox86zv09u6rohdqr80wg0x](https://aihot.virxact.com/items/cmsox86zv09u6rohdqr80wg0x)
