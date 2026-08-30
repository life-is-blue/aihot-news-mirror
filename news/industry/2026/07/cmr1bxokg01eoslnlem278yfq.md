---
"title": "Anthropic在Claude Code中植入隐写术代码识别中国用户"
"aihot_id": "cmr1bxokg01eoslnlem278yfq"
"aihot_category": "industry"
"published_at": "2026-07-01T00:11:00.000Z"
"discovered_at": "2026-07-01T00:20:45.624Z"
"source_name": "公众号：数字生命卡兹克"
"original_url": "https://mp.weixin.qq.com/s/yLb4T2UC16ebKHApdBbgWw"
"canonical_url": "https://aihot.virxact.com/items/cmr1bxokg01eoslnlem278yfq"
"score": 84
"content_kind": "news"
---

# Anthropic在Claude Code中植入隐写术代码识别中国用户

Anthropic在Claude Code中植入隐写术：读取本地时区（Asia/Shanghai或Asia/Urumqi）和ANTHROPIC_BASE_URL环境变量，与一份经base64+XOR（密钥91）加密的147个域名列表（含美团、字节跳动、月之暗面等）比对，识别中国用户。识别后，在请求发送前将系统提示词中日期字符串的单引号（U+0027）替换为其他Unicode字符，连字符改为斜杠，作为2-3比特分类标记传回服务器。该隐蔽行为被社区逆向发现后引发争议，被认为破坏用户信任。

- **来源**: 公众号：数字生命卡兹克
- **原文链接**: [https://mp.weixin.qq.com/s/yLb4T2UC16ebKHApdBbgWw](https://mp.weixin.qq.com/s/yLb4T2UC16ebKHApdBbgWw)
- **AIHOT 链接**: [https://aihot.virxact.com/items/cmr1bxokg01eoslnlem278yfq](https://aihot.virxact.com/items/cmr1bxokg01eoslnlem278yfq)
