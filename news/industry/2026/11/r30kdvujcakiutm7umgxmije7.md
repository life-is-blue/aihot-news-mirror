---
"title": "Wiz 解读 OpenJDK 远程代码执行漏洞 CVE-2026-114938（Java4Shell）"
"aihot_id": "r30kdvujcakiutm7umgxmije7"
"aihot_category": "industry"
"published_at": "2026-11-17T22:29:57.000Z"
"discovered_at": "2026-11-17T23:29:27.050Z"
"source_name": "Wiz：Research（安全研究）"
"original_url": "https://www.wiz.io/blog/cve-2026-114938-rce-java4shell-openjdk"
"canonical_url": "https://aihot.news/items/r30kdvujcakiutm7umgxmije7"
"score": 65
"content_kind": "news"
---

# Wiz 解读 OpenJDK 远程代码执行漏洞 CVE-2026-114938（Java4Shell）

2026 年 11 月 17 日披露的 OpenJDK 关键 RCE 漏洞 CVE-2026-114938（Java4Shell）CVSSv4.0 评分 9.2，源于 AVX-512 Base64 解码的汇编代码在处理结尾填充字符时输出数组边界计算下溢，导致堆内存越界写入，已证实可对 Jenkins、Confluence、Apache Tomcat 等实现远程利用。

- **来源**: Wiz：Research（安全研究）
- **原文链接**: [https://www.wiz.io/blog/cve-2026-114938-rce-java4shell-openjdk](https://www.wiz.io/blog/cve-2026-114938-rce-java4shell-openjdk)
- **AIHOT 链接**: [https://aihot.news/items/r30kdvujcakiutm7umgxmije7](https://aihot.news/items/r30kdvujcakiutm7umgxmije7)
