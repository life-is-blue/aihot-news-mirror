---
"title": "Cursor IDE 0day 漏洞：打开恶意仓库即可自动执行任意代码"
"aihot_id": "cmrl6xukw00ogbi7hnn35vq0v"
"aihot_category": "industry"
"published_at": "2026-07-14T21:27:11.693Z"
"discovered_at": "2026-07-14T21:56:18.443Z"
"source_name": "Hacker News 热门（buzzing.cc 中文翻译）"
"original_url": "https://mindgard.ai/blog/cursor-0day-when-full-disclosure-beco\
  mes-the-only-protection-left"
"canonical_url": "https://aihot.virxact.com/items/cmrl6xukw00ogbi7hnn35vq0v"
"score": 83
"content_kind": "news"
---

# Cursor IDE 0day 漏洞：打开恶意仓库即可自动执行任意代码

安全公司 Mindgard 于 2025 年 12 月 15 日发现 Cursor IDE 存在严重 0day 漏洞。当用户在 Windows 上打开包含恶意 `git.exe` 的仓库时，Cursor 会自动执行该文件，无需任何用户交互。漏洞源于 Cursor 在加载项目时会在包括工作区在内的多个位置搜索 Git 二进制文件。Mindgard 在 7 个月内多次报告，Cursor CISO 虽确认但因内部自动化故障导致流程中断，至今已发布 70 多个新版本仍未修复。临时缓解措施包括使用 AppLocker 阻止从工作区目录执行该文件名，或在隔离虚拟机中打开不受信任的仓库。

- **来源**: Hacker News 热门（buzzing.cc 中文翻译）
- **原文链接**: [https://mindgard.ai/blog/cursor-0day-when-full-disclosure-becomes-the-only-protection-left](https://mindgard.ai/blog/cursor-0day-when-full-disclosure-becomes-the-only-protection-left)
- **AIHOT 链接**: [https://aihot.virxact.com/items/cmrl6xukw00ogbi7hnn35vq0v](https://aihot.virxact.com/items/cmrl6xukw00ogbi7hnn35vq0v)
