---
"title": "OpenAI 红队测试发现 Brotli 未认证远程代码执行漏洞并已披露"
"aihot_id": "bflsi3krmtn64gccrmh8dlsdc"
"aihot_category": "industry"
"published_at": "2026-10-23T22:55:45.000Z"
"discovered_at": "2026-10-23T23:16:35.817Z"
"source_name": "X：OpenAI (@OpenAI)"
"original_url": "https://x.com/OpenAI/status/2113766354386084338"
"canonical_url": "https://aihot.news/items/bflsi3krmtn64gccrmh8dlsdc"
"score": 85
"content_kind": "news"
---

# OpenAI 红队测试发现 Brotli 未认证远程代码执行漏洞并已披露

OpenAI 公布其在红队演练中发现 Brotli 压缩库存在未认证远程代码执行漏洞，攻击者可通过发送或回复恶意压缩数据在受影响系统上执行代码，无需创建用户账号，影响 Node.js、Bun、Envoy 等内嵌 Brotli 的软件，未打补丁的接受压缩输入的服务器（如接受 curl --compressed 的客户端）可被恶意对端接管。

- **来源**: X：OpenAI (@OpenAI)
- **原文链接**: [https://x.com/OpenAI/status/2113766354386084338](https://x.com/OpenAI/status/2113766354386084338)
- **AIHOT 链接**: [https://aihot.news/items/bflsi3krmtn64gccrmh8dlsdc](https://aihot.news/items/bflsi3krmtn64gccrmh8dlsdc)
