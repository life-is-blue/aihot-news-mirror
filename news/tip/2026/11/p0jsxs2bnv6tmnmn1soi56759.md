---
"title": "Claude Code Stop hook 技巧：用 exit code 2 让 Claude 在检查失败时自动重试"
"aihot_id": "p0jsxs2bnv6tmnmn1soi56759"
"aihot_category": "tip"
"published_at": "2026-11-13T18:43:37.000Z"
"discovered_at": "2026-11-13T18:56:33.824Z"
"source_name": "X：Lydia Hallie（Anthropic，Claude Code） (@lydiahallie)"
"original_url": "https://x.com/lydiahallie/status/2121313048820617645"
"canonical_url": "https://aihot.news/items/p0jsxs2bnv6tmnmn1soi56759"
"score": 69
"content_kind": "news"
---

# Claude Code Stop hook 技巧：用 exit code 2 让 Claude 在检查失败时自动重试

Lydia Hallie 分享一个 Claude Code 使用技巧：用 Stop hook 让 Claude 在检查失败后自动重试，关键是让 hook 以 exit code 2 退出。exit 2 会把 hook 的 stderr 返回给 Claude 触发重试，exit 1 则是非阻塞的，即使检查失败 Claude 也会直接结束。

- **来源**: X：Lydia Hallie（Anthropic，Claude Code） (@lydiahallie)
- **原文链接**: [https://x.com/lydiahallie/status/2121313048820617645](https://x.com/lydiahallie/status/2121313048820617645)
- **AIHOT 链接**: [https://aihot.news/items/p0jsxs2bnv6tmnmn1soi56759](https://aihot.news/items/p0jsxs2bnv6tmnmn1soi56759)
