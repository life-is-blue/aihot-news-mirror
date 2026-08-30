---
"title": "通过代码执行提升MCP智能体效率"
"aihot_id": "cmorb7ml0008hslhfkltymj5p"
"aihot_category": "tip"
"published_at": "2025-11-03T16:00:00.000Z"
"discovered_at": "2025-11-03T16:00:00.000Z"
"source_name": "Anthropic：Engineering（事故复盘 + 工程实践 · 网页）"
"original_url": "https://www.anthropic.com/engineering/code-execution-with-mcp"
"canonical_url": "https://aihot.virxact.com/items/cmorb7ml0008hslhfkltymj5p"
"score": 74
"content_kind": "news"
---

# 通过代码执行提升MCP智能体效率

随着AI智能体通过模型上下文协议（MCP）连接的工具数量激增，传统预先加载所有工具定义并通过上下文传递中间结果的方法，导致处理速度变慢、成本增加。问题核心在于工具定义占用大量上下文空间，且中间结果（如完整会议记录）在多次工具调用间重复传递，额外消耗数万令牌。文章提出解决方案：将MCP服务器呈现为代码API，使智能体能按需加载工具，并在执行环境中处理数据，仅将精简结果传回模型，从而显著减少令牌消耗、提升效率并降低成本。

- **来源**: Anthropic：Engineering（事故复盘 + 工程实践 · 网页）
- **原文链接**: [https://www.anthropic.com/engineering/code-execution-with-mcp](https://www.anthropic.com/engineering/code-execution-with-mcp)
- **AIHOT 链接**: [https://aihot.virxact.com/items/cmorb7ml0008hslhfkltymj5p](https://aihot.virxact.com/items/cmorb7ml0008hslhfkltymj5p)
