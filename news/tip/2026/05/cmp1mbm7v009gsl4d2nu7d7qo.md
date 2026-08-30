---
"title": "在脚本的shebang行中使用LLM"
"aihot_id": "cmp1mbm7v009gsl4d2nu7d7qo"
"aihot_category": "tip"
"published_at": "2026-05-11T18:48:57.000Z"
"discovered_at": "2026-05-11T19:52:06.459Z"
"source_name": "Simon Willison 博客"
"original_url": "https://simonwillison.net/2026/May/11/llm-shebang"
"canonical_url": "https://aihot.virxact.com/items/cmp1mbm7v009gsl4d2nu7d7qo"
"score": 80
"content_kind": "news"
---

# 在脚本的shebang行中使用LLM

本文介绍了一种创新方法，将LLM工具直接嵌入脚本的shebang行中执行指令。通过LLM的fragments模式，shebang行可执行简单任务，如生成SVG图像；使用-T选项能调用外部工具（如llm_time）创作包含当前时间的俳句；更复杂的是运行YAML模板，其中定义了Python函数作为工具进行数学计算，示例中演示了计算2344乘以5252加134的过程，并通过调试输出展示了分步结果，最终得到12，310，822。这展现了LLM作为脚本解释器的强大扩展性，能够支持从内容生成到数据查询的多样化任务。

- **来源**: Simon Willison 博客
- **原文链接**: [https://simonwillison.net/2026/May/11/llm-shebang](https://simonwillison.net/2026/May/11/llm-shebang)
- **AIHOT 链接**: [https://aihot.virxact.com/items/cmp1mbm7v009gsl4d2nu7d7qo](https://aihot.virxact.com/items/cmp1mbm7v009gsl4d2nu7d7qo)
