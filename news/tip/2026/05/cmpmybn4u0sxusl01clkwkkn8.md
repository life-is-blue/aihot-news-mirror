---
"title": "我们如何对不同产品中的Claude进行隔离控制"
"aihot_id": "cmpmybn4u0sxusl01clkwkkn8"
"aihot_category": "tip"
"published_at": "2026-05-26T18:11:06.012Z"
"discovered_at": "2026-05-26T18:11:06.012Z"
"source_name": "Anthropic：Engineering（事故复盘 + 工程实践 · 网页）"
"original_url": "https://www.anthropic.com/engineering/how-we-contain-claude"
"canonical_url": "https://aihot.virxact.com/items/cmpmybn4u0sxusl01clkwkkn8"
"score": 70
"content_kind": "news"
---

# 我们如何对不同产品中的Claude进行隔离控制

Anthropic通过三重机制控制Claude智能体的部署风险，包括用户误用、模型异常行为和外部攻击。其防护策略聚焦于三个层面：通过沙箱、虚拟机和网络出口控制限制智能体运行环境；利用系统提示词和模型训练引导其行为；以及对MCP服务器、第三方插件等外部内容实施细粒度权限管理。文章以Claude Code、claude.ai和Claude Cowork为例，阐述了不同产品如何设计对应的隔离架构。

- **来源**: Anthropic：Engineering（事故复盘 + 工程实践 · 网页）
- **原文链接**: [https://www.anthropic.com/engineering/how-we-contain-claude](https://www.anthropic.com/engineering/how-we-contain-claude)
- **AIHOT 链接**: [https://aihot.virxact.com/items/cmpmybn4u0sxusl01clkwkkn8](https://aihot.virxact.com/items/cmpmybn4u0sxusl01clkwkkn8)
