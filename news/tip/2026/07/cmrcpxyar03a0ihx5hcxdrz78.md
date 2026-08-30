---
"title": "AI预检检查：智能体工作记忆架构"
"aihot_id": "cmrcpxyar03a0ihx5hcxdrz78"
"aihot_category": "tip"
"published_at": "2026-07-08T00:00:00.000Z"
"discovered_at": "2026-07-08T23:38:20.484Z"
"source_name": "Tomer Tunguz 博客（VC 分析）"
"original_url": "https://www.tomtunguz.com/the-ai-preflight-check"
"canonical_url": "https://aihot.virxact.com/items/cmrcpxyar03a0ihx5hcxdrz78"
"score": 57
"content_kind": "news"
---

# AI预检检查：智能体工作记忆架构

一种为AI智能体设计的预检工作记忆架构：查询到来时，系统从磁盘上约90个索引化的技能库中检索最相关技能，仅加载到上下文窗口。本地开源模型Ornith 35B（350亿参数，通过Ollama在Apple Silicon上运行）执行任务，约80%常规任务由本地模型完成，困难任务路由至前沿模型。看门狗记录每次预检决策和技能调用，夜间通过异步推理处理全天轨迹，自动决定哪些技能需新增或固化（如日历排期转为确定性Rust代码），实现自我改进循环。昨天，看门狗首次未提出任何改进建议，系统或接近性能平台期。

- **来源**: Tomer Tunguz 博客（VC 分析）
- **原文链接**: [https://www.tomtunguz.com/the-ai-preflight-check](https://www.tomtunguz.com/the-ai-preflight-check)
- **AIHOT 链接**: [https://aihot.virxact.com/items/cmrcpxyar03a0ihx5hcxdrz78](https://aihot.virxact.com/items/cmrcpxyar03a0ihx5hcxdrz78)
