---
"title": "AI 审计代理在 Cloudflare CIRCL 中发现 7 个漏洞"
"aihot_id": "cmrblfb8a050sihl1484pa3wo"
"aihot_category": "tip"
"published_at": "2026-07-08T04:29:33.609Z"
"discovered_at": "2026-07-08T04:44:06.301Z"
"source_name": "Hacker News 热门（buzzing.cc 中文翻译）"
"original_url": "https://blog.zksecurity.xyz/posts/circl-bugs"
"canonical_url": "https://aihot.virxact.com/items/cmrblfb8a050sihl1484pa3wo"
"score": 71
"content_kind": "news"
---

# AI 审计代理在 Cloudflare CIRCL 中发现 7 个漏洞

zkSecurity 的 AI 审计代理 zkao 持续扫描 Cloudflare 的 CIRCL 密码学库，使用 Opus 4.6 + skills 和 GPT-5.3 + skills 等模型发现并确认了 7 个真实漏洞。其中包括阈值 RSA 中 float64 精度丢失（AI 自评 Critical）和属性基加密（CP-ABE）访问控制完全失效（Critical，由 zkao 自行发现）。所有漏洞已在上游修复，多数在 HackerOne 上获得确认和奖励。AI 生成的候选发现仍需人工验证，但 zkao 已能自动完成大部分验证工作。

- **来源**: Hacker News 热门（buzzing.cc 中文翻译）
- **原文链接**: [https://blog.zksecurity.xyz/posts/circl-bugs](https://blog.zksecurity.xyz/posts/circl-bugs)
- **AIHOT 链接**: [https://aihot.virxact.com/items/cmrblfb8a050sihl1484pa3wo](https://aihot.virxact.com/items/cmrblfb8a050sihl1484pa3wo)
