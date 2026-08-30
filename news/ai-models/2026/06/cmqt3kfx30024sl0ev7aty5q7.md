---
"title": "百度发布Unlimited OCR：3B参数MoE模型，KV缓存恒定实现长文档高效解析"
"aihot_id": "cmqt3kfx30024sl0ev7aty5q7"
"aihot_category": "ai-models"
"published_at": "2026-06-25T05:39:53.000Z"
"discovered_at": "2026-06-25T06:04:20.656Z"
"source_name": "MarkTechPost（RSS）"
"original_url": "https://www.marktechpost.com/2026/06/24/baidu-releases-unlimit\
  ed-ocr-a-3b-model-that-keeps-the-kv-cache-flat-for-long-document-parsing"
"canonical_url": "https://aihot.virxact.com/items/cmqt3kfx30024sl0ev7aty5q7"
"score": 73
"content_kind": "news"
---

# 百度发布Unlimited OCR：3B参数MoE模型，KV缓存恒定实现长文档高效解析

百度推出Unlimited OCR，一个3B参数的MoE模型，推理时仅激活500M参数。其核心创新Reference Sliding Window Attention（R-SWA）将KV缓存大小固定为Lm + n（n默认128），内存和延迟不随输出长度增长。模型基于DeepSeek OCR继续训练4000步，支持32K最大长度，通过DeepEncoder实现16倍token压缩。在OmniDocBench v1.5上整体得分93.23，超出DeepSeek OCR基线6.22分；v1.6得分93.92为最高。Base模式下吞吐达5580 TPS，比DeepSeek OCR提升12.7%，6000 token输出时延迟低35%。适用于整本书转录等场景，代码与权重已在HuggingFace开源。

- **来源**: MarkTechPost（RSS）
- **原文链接**: [https://www.marktechpost.com/2026/06/24/baidu-releases-unlimited-ocr-a-3b-model-that-keeps-the-kv-cache-flat-for-long-document-parsing](https://www.marktechpost.com/2026/06/24/baidu-releases-unlimited-ocr-a-3b-model-that-keeps-the-kv-cache-flat-for-long-document-parsing)
- **AIHOT 链接**: [https://aihot.virxact.com/items/cmqt3kfx30024sl0ev7aty5q7](https://aihot.virxact.com/items/cmqt3kfx30024sl0ev7aty5q7)
