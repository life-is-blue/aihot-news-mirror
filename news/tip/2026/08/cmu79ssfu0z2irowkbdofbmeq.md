---
"title": "SGLang 用 SSD Expert Pack 在消费级硬件上运行 DeepSeek-V4-Flash 和 Kimi-K3"
"aihot_id": "cmu79ssfu0z2irowkbdofbmeq"
"aihot_category": "tip"
"published_at": "2026-08-28T16:00:00.000Z"
"discovered_at": "2026-08-28T16:00:00.000Z"
"source_name": "LMSYS：Blog（Chatbot Arena 团队）"
"original_url": "https://www.lmsys.org/blog/2026-08-29-sglang-ssd-expert-pack"
"canonical_url": "https://aihot.news/items/cmu79ssfu0z2irowkbdofbmeq"
"score": 65
"content_kind": "news"
---

# SGLang 用 SSD Expert Pack 在消费级硬件上运行 DeepSeek-V4-Flash 和 Kimi-K3

SGLang 将 SSD-LLaMA 的思路引入 MoE 推理，把放不进显存和内存的路由专家放在 NVMe SSD 上，通过 Expert Pack 连续布局、O_DIRECT 直接 I/O 和带预算的 GPU LFU/LRU 缓存，只加载 router 选中的专家。

- **来源**: LMSYS：Blog（Chatbot Arena 团队）
- **原文链接**: [https://www.lmsys.org/blog/2026-08-29-sglang-ssd-expert-pack](https://www.lmsys.org/blog/2026-08-29-sglang-ssd-expert-pack)
- **AIHOT 链接**: [https://aihot.news/items/cmu79ssfu0z2irowkbdofbmeq](https://aihot.news/items/cmu79ssfu0z2irowkbdofbmeq)
