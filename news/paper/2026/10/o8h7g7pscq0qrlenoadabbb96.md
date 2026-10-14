---
"title": "Visual Studio Copilot 与 SSMS 远程代码执行漏洞（CVE-2026-103572）技术分析"
"aihot_id": "o8h7g7pscq0qrlenoadabbb96"
"aihot_category": "paper"
"published_at": "2026-10-13T22:00:40.000Z"
"discovered_at": "2026-10-14T00:35:27.995Z"
"source_name": "Johann Rehberger / Embrace The Red（RSS）"
"original_url": "https://embracethered.com/blog/posts/2026/visual-studio-copilo\
  t-remote-code-execution/"
"canonical_url": "https://aihot.news/items/o8h7g7pscq0qrlenoadabbb96"
"score": 76
"content_kind": "news"
---

# Visual Studio Copilot 与 SSMS 远程代码执行漏洞（CVE-2026-103572）技术分析

Johann Rehberger 披露 Visual Studio Copilot 与 SQL Server Management Studio 中的远程代码执行漏洞 CVE-2026-103572，根因是利用文件名末尾多加一个点绕过路径校验，写入 .mcp. 或 settings.VisualStudio. 等受保护配置文件，实现任意命令执行。

- **来源**: Johann Rehberger / Embrace The Red（RSS）
- **原文链接**: [https://embracethered.com/blog/posts/2026/visual-studio-copilot-remote-code-execution/](https://embracethered.com/blog/posts/2026/visual-studio-copilot-remote-code-execution/)
- **AIHOT 链接**: [https://aihot.news/items/o8h7g7pscq0qrlenoadabbb96](https://aihot.news/items/o8h7g7pscq0qrlenoadabbb96)
