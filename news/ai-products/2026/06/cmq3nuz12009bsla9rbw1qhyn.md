---
"title": "Her · हेर - Claude Code 会话分析工具"
"aihot_id": "cmq3nuz12009bsla9rbw1qhyn"
"aihot_category": "ai-products"
"published_at": "2026-06-07T10:13:41.000Z"
"discovered_at": "2026-06-07T10:50:23.999Z"
"source_name": "Hugging Face：Blog（RSS）"
"original_url": "https://huggingface.co/blog/build-small-hackathon/her-blog"
"canonical_url": "https://aihot.virxact.com/items/cmq3nuz12009bsla9rbw1qhyn"
"score": 70
"content_kind": "news"
---

# Her · हेर - Claude Code 会话分析工具

Her（हेर）是专为 Claude Code 设计的会话分析工具。用户上传 `.jsonl` 文件后，Her 用自然语言重建每轮交互，标记部署、配置变更、秘密等高风险操作并定位到具体轮次。它展示 token 消耗、所用工具、子智能体、技能和 MCP 服务器，并结合 Anthropic 与社区最佳实践给出改进建议（仅在有明确可修复模式时）。内置"Ask Her"问答功能，支持单会话与跨会话项目分析。工具不调用第三方 AI API，使用 Nemotron-Mini-4B-Instruct 模型在 Hugging Face ZeroGPU 上运行，评估引擎完全确定，模型仅负责文本生成与建议。Her 内置 Homebrew、npm、PyPI 主流 CLI 工具数据库，自动识别会话中使用的工具，并对部署工具、数据库客户端等执行活动进行标记提醒。

- **来源**: Hugging Face：Blog（RSS）
- **原文链接**: [https://huggingface.co/blog/build-small-hackathon/her-blog](https://huggingface.co/blog/build-small-hackathon/her-blog)
- **AIHOT 链接**: [https://aihot.virxact.com/items/cmq3nuz12009bsla9rbw1qhyn](https://aihot.virxact.com/items/cmq3nuz12009bsla9rbw1qhyn)
