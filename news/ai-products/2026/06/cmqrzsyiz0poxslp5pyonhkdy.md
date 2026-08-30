---
"title": "OpenRouter推出统一图像API"
"aihot_id": "cmqrzsyiz0poxslp5pyonhkdy"
"aihot_category": "ai-products"
"published_at": "2026-06-23T00:00:00.000Z"
"discovered_at": "2026-06-24T11:31:04.457Z"
"source_name": "OpenRouter：Announcements（RSS）"
"original_url": "https://openrouter.ai/blog/announcements/image-api"
"canonical_url": "https://aihot.virxact.com/items/cmqrzsyiz0poxslp5pyonhkdy"
"score": 73
"content_kind": "news"
---

# OpenRouter推出统一图像API

OpenRouter推出统一图像API，整合Google、OpenAI、Black Forest Labs、Recraft、ByteDance、Sourceful、Microsoft、xAI等30+模型。新API提供标准化请求格式，通过`/api/v1/images/models`端点返回每个模型的分辨率、宽高比、输出数量、输入参考图数量、种子等能力描述；通过`/api/v1/images/models/{id}/endpoints`端点获取具体服务商的定价与参数支持（如Seedream 4.5每张$0.04、FLUX.2 Pro每百万像素$0.03、GPT-5.4 Image 2按token计费）。OpenAI的GPT 5系列图像模型支持SSE流式预览，启用`"stream"： true`即可边生成边返回预览。新图像模型将仅添加至专用API，建议现有用户切换。

- **来源**: OpenRouter：Announcements（RSS）
- **原文链接**: [https://openrouter.ai/blog/announcements/image-api](https://openrouter.ai/blog/announcements/image-api)
- **AIHOT 链接**: [https://aihot.virxact.com/items/cmqrzsyiz0poxslp5pyonhkdy](https://aihot.virxact.com/items/cmqrzsyiz0poxslp5pyonhkdy)
