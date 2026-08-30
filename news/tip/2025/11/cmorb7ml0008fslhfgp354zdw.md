---
"title": "为长时运行智能体设计有效约束方案"
"aihot_id": "cmorb7ml0008fslhfgp354zdw"
"aihot_category": "tip"
"published_at": "2025-11-25T16:00:00.000Z"
"discovered_at": "2025-11-25T16:00:00.000Z"
"source_name": "Anthropic：Engineering（事故复盘 + 工程实践 · 网页）"
"original_url": "https://www.anthropic.com/engineering/effective-harnesses-for-\
  long-running-agents"
"canonical_url": "https://aihot.virxact.com/items/cmorb7ml0008fslhfgp354zdw"
"score": 75
"content_kind": "news"
---

# 为长时运行智能体设计有效约束方案

为解决AI智能体在跨越多上下文窗口执行长期任务时的"记忆丢失"与进展不一致问题，Anthropic为Claude Agent SDK开发了一套双重方案。该方案包含一个初始化智能体，负责在首次运行时建立基础环境并生成功能清单；以及一个编码智能体，负责在后续会话中进行增量开发并提交清晰可合并的代码。通过结构化的进度日志和Git历史等机制，引导智能体避免"试图一次性完成所有功能"或"过早宣布完成"的失败模式，从而实现跨会话的持续有效协作。

- **来源**: Anthropic：Engineering（事故复盘 + 工程实践 · 网页）
- **原文链接**: [https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents](https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents)
- **AIHOT 链接**: [https://aihot.virxact.com/items/cmorb7ml0008fslhfgp354zdw](https://aihot.virxact.com/items/cmorb7ml0008fslhfgp354zdw)
