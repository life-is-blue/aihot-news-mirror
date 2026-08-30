---
"title": "Ploy 将 AI 智能体默认模型从 Claude Opus 4.8 切换至 GPT-5.6 Sol"
"aihot_id": "cmrig9mkx0024bijp9pr04hss"
"aihot_category": "tip"
"published_at": "2026-07-12T23:41:11.951Z"
"discovered_at": "2026-07-12T23:54:06.097Z"
"source_name": "Hacker News 热门（buzzing.cc 中文翻译）"
"original_url": "https://ploy.ai/blog/migrating-a-production-ai-agent-to-gpt-5-6"
"canonical_url": "https://aihot.virxact.com/items/cmrig9mkx0024bijp9pr04hss"
"score": 70
"content_kind": "news"
---

# Ploy 将 AI 智能体默认模型从 Claude Opus 4.8 切换至 GPT-5.6 Sol

Ploy 将其 AI 智能体默认模型从 Claude Opus 4.8 切换至 OpenAI 今晨发布的 GPT-5.6 Sol。在真实营销网站构建测试中，GPT-5.6 Sol 完成页面平均耗时 3 分 42 秒，较 Opus 4.8 的 8 分钟快 2.2 倍；每次构建成本从 3.06 美元降至 2.22 美元，降低 27%；输出 token 从 33.0K 降至 17.1K，视觉评分从 0.936 提升至 0.970。迁移过程发现，GPT-5.6 会为所有 25 个工具参数填充默认值，导致 52%-64% 的文件读取返回空结果；提示词指令和 OpenAI strict 模式均无法修复此行为。此外，评估框架中约三分之一的原始失败源于针对旧模型的假设，而非模型本身问题。

- **来源**: Hacker News 热门（buzzing.cc 中文翻译）
- **原文链接**: [https://ploy.ai/blog/migrating-a-production-ai-agent-to-gpt-5-6](https://ploy.ai/blog/migrating-a-production-ai-agent-to-gpt-5-6)
- **AIHOT 链接**: [https://aihot.virxact.com/items/cmrig9mkx0024bijp9pr04hss](https://aihot.virxact.com/items/cmrig9mkx0024bijp9pr04hss)
