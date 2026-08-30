---
"title": "LMSYS与Intel合作通过异构CPU+GPU EPD架构提升视觉语言模型服务性能"
"aihot_id": "cmpvk42bo0015slfpngd3kyca"
"aihot_category": "tip"
"published_at": "2026-05-28T16:00:00.000Z"
"discovered_at": "2026-05-28T16:00:00.000Z"
"source_name": "LMSYS：Blog（Chatbot Arena 团队）"
"original_url": "https://www.lmsys.org/blog/2026-06-01-hetero-epd"
"canonical_url": "https://aihot.virxact.com/items/cmpvk42bo0015slfpngd3kyca"
"score": 61
"content_kind": "news"
---

# LMSYS与Intel合作通过异构CPU+GPU EPD架构提升视觉语言模型服务性能

LMSYS团队（Intel与SGLang）通过Dynamo和SGLang框架，为视觉语言模型（VLM）启用了异构编码-预填充-解耦（EPD）架构。该方案将视觉编码任务从GPU卸载至CPU（如Intel Xeon 6747P），与GPU协同工作。在Qwen3-VL-8B-Instruct模型的测试中，采用4 CPU + 1 GPU作为编码器、4 GPU作为预填充解码器（能力比R=12）的配置，在ISL/OSL 128/256、1080p 8张图像的负载下，实现了P99 TTFT和请求吞吐量约1.2倍至1.3倍的提升，并将P99 TPOT降低了约1.3倍至30倍。

- **来源**: LMSYS：Blog（Chatbot Arena 团队）
- **原文链接**: [https://www.lmsys.org/blog/2026-06-01-hetero-epd](https://www.lmsys.org/blog/2026-06-01-hetero-epd)
- **AIHOT 链接**: [https://aihot.virxact.com/items/cmpvk42bo0015slfpngd3kyca](https://aihot.virxact.com/items/cmpvk42bo0015slfpngd3kyca)
