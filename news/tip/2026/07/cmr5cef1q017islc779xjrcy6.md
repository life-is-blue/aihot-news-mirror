---
"title": "pxpipe：通过图像化压缩输入token降低Claude Code成本"
"aihot_id": "cmr5cef1q017islc779xjrcy6"
"aihot_category": "tip"
"published_at": "2026-07-03T19:19:45.726Z"
"discovered_at": "2026-07-03T19:44:50.967Z"
"source_name": "Hacker News 热门（buzzing.cc 中文翻译）"
"original_url": "https://github.com/teamchong/pxpipe"
"canonical_url": "https://aihot.virxact.com/items/cmr5cef1q017islc779xjrcy6"
"score": 83
"content_kind": "news"
---

# pxpipe：通过图像化压缩输入token降低Claude Code成本

pxpipe是一个本地代理，将系统提示、工具文档和历史记录等密集文本渲染为PNG图像，利用图像token成本取决于像素尺寸的特性压缩输入token。在Fable 5模型上，约25k文本token压缩为约2.7k图像token，端到端账单降低59-70%。SWE-bench Lite 10个实例全部通过，成本从$54降至$27；SWE-bench Pro 19对测试中18对判定一致，单次请求成本降低约60%。该方法有损（精确ID等需保持文本），默认仅处理`claude-fable-5`请求，可通过`PXPIPE_MODELS`变量控制。

- **来源**: Hacker News 热门（buzzing.cc 中文翻译）
- **原文链接**: [https://github.com/teamchong/pxpipe](https://github.com/teamchong/pxpipe)
- **AIHOT 链接**: [https://aihot.virxact.com/items/cmr5cef1q017islc779xjrcy6](https://aihot.virxact.com/items/cmr5cef1q017islc779xjrcy6)
