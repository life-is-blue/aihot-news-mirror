---
"title": "Claude Code 打开 GitHub 仓库即执行隐藏恶意代码，攻击者可获完全控制"
"aihot_id": "cmqz20a0a000dsly4gw09u9xt"
"aihot_category": "paper"
"published_at": "2026-06-29T10:04:32.000Z"
"discovered_at": "2026-06-29T10:07:17.384Z"
"source_name": "The Decoder：AI News（RSS）"
"original_url": "https://the-decoder.com/claude-code-runs-a-github-repos-hidden\
  -malware-without-verification-giving-attackers-full-control"
"canonical_url": "https://aihot.virxact.com/items/cmqz20a0a000dsly4gw09u9xt"
"score": 73
"content_kind": "news"
---

# Claude Code 打开 GitHub 仓库即执行隐藏恶意代码，攻击者可获完全控制

安全研究人员在 Mozilla 的 GenAI 漏洞赏金平台 0DIN 发现新攻击向量。一个看似正常的 GitHub 仓库包含 setup 脚本，该脚本运行时从 DNS 条目拉取命令并执行，恶意代码从未存在于仓库中，对扫描器、代码审查和 AI 智能体不可见。开发者使用 Claude Code 等 AI 编码工具打开该仓库时，Claude Code 在设置过程中遇到常规错误消息后自动运行该脚本，打开反向 shell，攻击者可窃取 API 密钥和登录凭据并维持持久访问。研究人员建议 AI 智能体应在运行前显示 setup 脚本内容，开发者应将第三方仓库的 setup 说明视为不受信任代码。

- **来源**: The Decoder：AI News（RSS）
- **原文链接**: [https://the-decoder.com/claude-code-runs-a-github-repos-hidden-malware-without-verification-giving-attackers-full-control](https://the-decoder.com/claude-code-runs-a-github-repos-hidden-malware-without-verification-giving-attackers-full-control)
- **AIHOT 链接**: [https://aihot.virxact.com/items/cmqz20a0a000dsly4gw09u9xt](https://aihot.virxact.com/items/cmqz20a0a000dsly4gw09u9xt)
