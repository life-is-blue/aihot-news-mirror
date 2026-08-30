---
"title": "Claude Code 自动模式：在安全与效率间取得平衡"
"aihot_id": "cmorb7ml00088slhfqdmq7lr0"
"aihot_category": "ai-products"
"published_at": "2026-03-24T16:00:00.000Z"
"discovered_at": "2026-03-24T16:00:00.000Z"
"source_name": "Anthropic：Engineering（事故复盘 + 工程实践 · 网页）"
"original_url": "https://www.anthropic.com/engineering/claude-code-auto-mode"
"canonical_url": "https://aihot.virxact.com/items/cmorb7ml00088slhfqdmq7lr0"
"score": 77
"content_kind": "news"
---

# Claude Code 自动模式：在安全与效率间取得平衡

Anthropic 为 Claude Code 推出"自动模式"，旨在解决用户因频繁手动批准而产生的"批准疲劳"。该模式介于完全手动审批和危险的无权限跳过之间，采用两层防御机制：输入层通过服务器端提示注入探测器扫描工具输出；输出层则利用基于 Sonnet 4.6 模型的转录分类器，在执行前评估操作风险。分类器采用高效的两阶段设计，先快速过滤，必要时才启动思维链推理。其目标是拦截危险操作（如过度积极行为、无心之失、提示注入等），同时让大部分安全操作无需确认即可运行，内部测试显示用户原本会批准约93%的手动提示。

- **来源**: Anthropic：Engineering（事故复盘 + 工程实践 · 网页）
- **原文链接**: [https://www.anthropic.com/engineering/claude-code-auto-mode](https://www.anthropic.com/engineering/claude-code-auto-mode)
- **AIHOT 链接**: [https://aihot.virxact.com/items/cmorb7ml00088slhfqdmq7lr0](https://aihot.virxact.com/items/cmorb7ml00088slhfqdmq7lr0)
