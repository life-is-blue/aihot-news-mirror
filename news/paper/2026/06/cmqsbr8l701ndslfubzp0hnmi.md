---
"title": "思考即回忆：推理如何解锁LLM中的参数化知识"
"aihot_id": "cmqsbr8l701ndslfubzp0hnmi"
"aihot_category": "paper"
"published_at": "2026-06-23T16:00:00.000Z"
"discovered_at": "2026-06-24T17:05:40.380Z"
"source_name": "Google Research：Blog（网页）"
"original_url": "https://research.google/blog/thinking-to-recall-how-reasoning-\
  unlocks-parametric-knowledge-in-llms"
"canonical_url": "https://aihot.virxact.com/items/cmqsbr8l701ndslfubzp0hnmi"
"score": 69
"content_kind": "news"
---

# 思考即回忆：推理如何解锁LLM中的参数化知识

Google Research研究发现，推理（chain-of-thought）能帮助大语言模型（LLM）回忆简单事实，即使这些事实无需复杂推导。在Gemini-2.5 Flash和Pro以及Qwen3-32B上，启用推理后模型能够回答原本无法直接回答的简单问题，pass@k显示正确事实存在于输出分布中。该现象由两个机制驱动：一是生成的推理token充当计算缓冲，允许模型进行隐藏计算以提取参数化知识；二是推理过程中产生的相关事实起到启动效应（factual priming），帮助模型激活正确答案。

- **来源**: Google Research：Blog（网页）
- **原文链接**: [https://research.google/blog/thinking-to-recall-how-reasoning-unlocks-parametric-knowledge-in-llms](https://research.google/blog/thinking-to-recall-how-reasoning-unlocks-parametric-knowledge-in-llms)
- **AIHOT 链接**: [https://aihot.virxact.com/items/cmqsbr8l701ndslfubzp0hnmi](https://aihot.virxact.com/items/cmqsbr8l701ndslfubzp0hnmi)
