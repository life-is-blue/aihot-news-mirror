---
"title": "Anthropic 用 Claude 揭开 NIST ECDSA 曲线种子来源之谜"
"aihot_id": "ckrtcqc9dnngil5ev7m60ns4v"
"aihot_category": "paper"
"published_at": "2026-10-15T16:00:00.000Z"
"discovered_at": "2026-10-16T19:25:29.271Z"
"source_name": "Anthropic：Research（发表成果 · 网页）"
"original_url": "https://www.anthropic.com/research/ecdsa-curve-origins"
"canonical_url": "https://aihot.news/items/ckrtcqc9dnngil5ev7m60ns4v"
"score": 78
"content_kind": "news"
---

# Anthropic 用 Claude 揭开 NIST ECDSA 曲线种子来源之谜

Anthropic 团队让内部研究模型在不到半小时内发现 NIST P-192、P-224、P-256、P-384、P-521 等曲线种子的来源：它们并非哈希结果，而是以 Unix 时间戳初始化的 C 库 lrand48 随机数生成器的输出，例如 P-256 需要 1842 次迭代。

- **来源**: Anthropic：Research（发表成果 · 网页）
- **原文链接**: [https://www.anthropic.com/research/ecdsa-curve-origins](https://www.anthropic.com/research/ecdsa-curve-origins)
- **AIHOT 链接**: [https://aihot.news/items/ckrtcqc9dnngil5ev7m60ns4v](https://aihot.news/items/ckrtcqc9dnngil5ev7m60ns4v)
