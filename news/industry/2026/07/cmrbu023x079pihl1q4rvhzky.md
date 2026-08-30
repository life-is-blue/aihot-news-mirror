---
"title": "GitLost：Noma Labs 发现 GitHub AI 代理提示词注入漏洞"
"aihot_id": "cmrbu023x079pihl1q4rvhzky"
"aihot_category": "industry"
"published_at": "2026-07-08T08:29:47.091Z"
"discovered_at": "2026-07-08T08:44:11.122Z"
"source_name": "Hacker News 热门（buzzing.cc 中文翻译）"
"original_url": "https://noma.security/blog/gitlost-how-we-tricked-githubs-ai-a\
  gent-into-leaking-private-repos"
"canonical_url": "https://aihot.virxact.com/items/cmrbu023x079pihl1q4rvhzky"
"score": 81
"content_kind": "news"
---

# GitLost：Noma Labs 发现 GitHub AI 代理提示词注入漏洞

Noma Labs 在 GitHub Agentic Workflows 中发现严重提示词注入漏洞 GitLost。未认证攻击者仅需在属于同一组织的公共仓库中创建一个嵌有恶意指令的 Issue，即可诱使基于 Claude 或 GitHub Copilot 的 AI 代理读取并公开该组织内私有仓库的内容。攻击无需编码技能或凭证，根源在于代理将用户可控内容视为可信指令，且 GitHub 的防护措施因 "Additionally" 关键词被绕过。Noma Labs 已公开 PoC 并建议限制跨仓库权限、隔离用户输入。

- **来源**: Hacker News 热门（buzzing.cc 中文翻译）
- **原文链接**: [https://noma.security/blog/gitlost-how-we-tricked-githubs-ai-agent-into-leaking-private-repos](https://noma.security/blog/gitlost-how-we-tricked-githubs-ai-agent-into-leaking-private-repos)
- **AIHOT 链接**: [https://aihot.virxact.com/items/cmrbu023x079pihl1q4rvhzky](https://aihot.virxact.com/items/cmrbu023x079pihl1q4rvhzky)
