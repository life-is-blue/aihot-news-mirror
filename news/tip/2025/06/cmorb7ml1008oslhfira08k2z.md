---
"title": "我们如何构建多智能体研究系统"
"aihot_id": "cmorb7ml1008oslhfira08k2z"
"aihot_category": "tip"
"published_at": "2025-06-12T16:00:00.000Z"
"discovered_at": "2025-06-12T16:00:00.000Z"
"source_name": "Anthropic：Engineering（事故复盘 + 工程实践 · 网页）"
"original_url": "https://www.anthropic.com/engineering/multi-agent-research-system"
"canonical_url": "https://aihot.virxact.com/items/cmorb7ml1008oslhfira08k2z"
"score": 73
"content_kind": "news"
---

# 我们如何构建多智能体研究系统

Claude的多智能体研究系统采用协调器-工作者架构，一个主导智能体分析用户查询并制定策略，并行调用多个专用子智能体协同工作。内部评估显示，以Claude Opus 4为主导、Claude Sonnet 4为子智能体的系统，在研究任务上比单智能体Claude Opus 4性能提升90.2%。该系统擅长处理需要同时探索多个独立方向的广度优先查询，通过分配独立上下文窗口实现并行推理扩容。但多智能体系统消耗的token量约为普通聊天的15倍，适用于任务价值足以支撑性能提升的场景，在需要高度并行化、大信息量或多工具调用的任务中表现卓越。

- **来源**: Anthropic：Engineering（事故复盘 + 工程实践 · 网页）
- **原文链接**: [https://www.anthropic.com/engineering/multi-agent-research-system](https://www.anthropic.com/engineering/multi-agent-research-system)
- **AIHOT 链接**: [https://aihot.virxact.com/items/cmorb7ml1008oslhfira08k2z](https://aihot.virxact.com/items/cmorb7ml1008oslhfira08k2z)
