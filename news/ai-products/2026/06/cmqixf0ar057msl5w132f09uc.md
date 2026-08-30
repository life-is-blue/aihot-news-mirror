---
"title": "cuTile Rust：安全无数据竞争的 GPU 内核系统"
"aihot_id": "cmqixf0ar057msl5w132f09uc"
"aihot_category": "ai-products"
"published_at": "2026-06-18T03:09:11.275Z"
"discovered_at": "2026-06-18T03:14:28.518Z"
"source_name": "Hacker News 热门（buzzing.cc 中文翻译）"
"original_url": "https://github.com/nvlabs/cutile-rs"
"canonical_url": "https://aihot.virxact.com/items/cmqixf0ar057msl5w132f09uc"
"score": 70
"content_kind": "news"
---

# cuTile Rust：安全无数据竞争的 GPU 内核系统

cuTile Rust 是一个基于 tile 的 GPU 编程系统，允许用 Rust 编写内存安全、无数据竞争的内核。它通过 `#【cutile：：module】` 宏将内核 AST 嵌入主机二进制，在运行时经 CUDA Tile IR JIT 编译为 GPU cubin。可变张量在启动前分割，不可变张量共享，启动器在 GPU 工作期间保持所有权。在 NVIDIA B200 上，逐元素操作达 7 TB/s（约 91% 峰值带宽），GEMM 达 2 PFlop/s（约 92% 密集 f16 峰值）。基于 cuTile Rust 构建的 Grout 推理引擎在 RTX 5090 上解码 Qwen3-4B 达 171 tokens/s，在 B200 上解码 Qwen3-32B 达 82 tokens/s。项目处于早期研究阶段。

- **来源**: Hacker News 热门（buzzing.cc 中文翻译）
- **原文链接**: [https://github.com/nvlabs/cutile-rs](https://github.com/nvlabs/cutile-rs)
- **AIHOT 链接**: [https://aihot.virxact.com/items/cmqixf0ar057msl5w132f09uc](https://aihot.virxact.com/items/cmqixf0ar057msl5w132f09uc)
