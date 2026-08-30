---
"title": "一次失败的（民族国家？）攻击的剖析"
"aihot_id": "cmqwju303014msly0vp9nlrjv"
"aihot_category": "tip"
"published_at": "2026-06-27T15:39:53.429Z"
"discovered_at": "2026-06-27T16:03:00.880Z"
"source_name": "Hacker News 热门（buzzing.cc 中文翻译）"
"original_url": "https://grack.com/blog/2026/06/25/dissecting-a-failed-nation-state-attack"
"canonical_url": "https://aihot.virxact.com/items/cmqwju303014msly0vp9nlrjv"
"score": 81
"content_kind": "news"
---

# 一次失败的（民族国家？）攻击的剖析

作者收到伪装成新加坡VC Lua Ventures的虚假面试邮件，要求完成一个TypeScript仓库的"测试"。作者将仓库交给Claude扫描，在`typescript+5.9.2.patch`中发现base64混淆载荷，该载荷在`patch-package`安装时触发，向`~/.cache-`等目录写入`payload.js`和`mutex.js`，构成后门（命名PinpinRAT）。攻击者使用虚构身份和空洞LinkedIn资料，目标是作者在crates.io上的Rust包。相关信息已报告加拿大CCCS等机构。

- **来源**: Hacker News 热门（buzzing.cc 中文翻译）
- **原文链接**: [https://grack.com/blog/2026/06/25/dissecting-a-failed-nation-state-attack](https://grack.com/blog/2026/06/25/dissecting-a-failed-nation-state-attack)
- **AIHOT 链接**: [https://aihot.virxact.com/items/cmqwju303014msly0vp9nlrjv](https://aihot.virxact.com/items/cmqwju303014msly0vp9nlrjv)
