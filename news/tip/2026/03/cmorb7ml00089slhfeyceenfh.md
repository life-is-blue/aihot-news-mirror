---
"title": "利用对抗网络灵感设计多代理架构，突破长时应用开发瓶颈"
"aihot_id": "cmorb7ml00089slhfeyceenfh"
"aihot_category": "tip"
"published_at": "2026-03-23T16:00:00.000Z"
"discovered_at": "2026-03-23T16:00:00.000Z"
"source_name": "Anthropic：Engineering（事故复盘 + 工程实践 · 网页）"
"original_url": "https://www.anthropic.com/engineering/harness-design-long-running-apps"
"canonical_url": "https://aihot.virxact.com/items/cmorb7ml00089slhfeyceenfh"
"score": 75
"content_kind": "news"
---

# 利用对抗网络灵感设计多代理架构，突破长时应用开发瓶颈

作者受生成对抗网络启发，设计了一个包含规划器、生成器和评估器的三代理架构，以解决Claude在长时应用开发中的两大瓶颈。该架构通过上下文重置机制，有效克服了模型在长任务中的"上下文焦虑"问题；同时，通过分离生成与评估功能，使代理能依据具体标准进行迭代改进，而非盲目自评。这一方法成功使系统能在多小时的自主运行中生成完整的全栈应用程序，突破了此前提示工程和传统工具设计的性能上限。

- **来源**: Anthropic：Engineering（事故复盘 + 工程实践 · 网页）
- **原文链接**: [https://www.anthropic.com/engineering/harness-design-long-running-apps](https://www.anthropic.com/engineering/harness-design-long-running-apps)
- **AIHOT 链接**: [https://aihot.virxact.com/items/cmorb7ml00089slhfeyceenfh](https://aihot.virxact.com/items/cmorb7ml00089slhfeyceenfh)
