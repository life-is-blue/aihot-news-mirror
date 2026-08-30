---
"title": "Composer 2技术报告：面向智能体软件工程的代码模型训练"
"aihot_id": "cmosbbgu40076slojd129u7gt"
"aihot_category": "paper"
"published_at": "2026-03-27T12:00:00.000Z"
"discovered_at": "2026-03-27T12:00:00.000Z"
"source_name": "Cursor Blog"
"original_url": "https://cursor.com/blog/composer-2-technical-report"
"canonical_url": "https://aihot.virxact.com/items/cmosbbgu40076slojd129u7gt"
"score": 72
"content_kind": "news"
---

# Composer 2技术报告：面向智能体软件工程的代码模型训练

本报告介绍了代码模型Composer 2的训练过程。该模型基于开源基础模型Kimi K2.5，通过两阶段训练：首先进行侧重代码的持续预训练以深化编码知识，随后在高度模拟真实Cursor环境的大规模强化学习中提升端到端智能体性能。在自建的真实任务评估集CursorBench上，Composer 2得分为61.3，较前代提升37%，与前沿模型性能相当。在公开基准SWE-bench Multilingual和Terminal-Bench上分别获得73.7和61.7分，并在保持高精度的同时实现了显著更低的推理成本。训练依托为Blackwell GPU定制的高效MoE训练内核、跨区域异步强化学习管道等大规模基础设施完成。

- **来源**: Cursor Blog
- **原文链接**: [https://cursor.com/blog/composer-2-technical-report](https://cursor.com/blog/composer-2-technical-report)
- **AIHOT 链接**: [https://aihot.virxact.com/items/cmosbbgu40076slojd129u7gt](https://aihot.virxact.com/items/cmosbbgu40076slojd129u7gt)
