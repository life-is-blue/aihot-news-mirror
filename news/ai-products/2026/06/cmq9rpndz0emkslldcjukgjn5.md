---
"title": "Cursor 推出 Auto-review 机制：用分类器智能体动态管控智能体自主权限"
"aihot_id": "cmq9rpndz0emkslldcjukgjn5"
"aihot_category": "ai-products"
"published_at": "2026-06-11T12:00:00.000Z"
"discovered_at": "2026-06-11T17:24:51.755Z"
"source_name": "Cursor Blog"
"original_url": "https://cursor.com/blog/auto-review"
"canonical_url": "https://aihot.virxact.com/items/cmq9rpndz0emkslldcjukgjn5"
"score": 74
"content_kind": "news"
---

# Cursor 推出 Auto-review 机制：用分类器智能体动态管控智能体自主权限

Cursor 近日推出 Auto-review，通过一个专门的分类器智能体在工具调用前审查动作风险。该分类器根据上下文判断动作是否与用户意图一致，高风险时阻止并返回解释给父智能体，低风险时放行。分类器采用小模型，运行在智能体循环内以避免额外延迟，并能读取工作区文件辅助判断。测试基于约12小时内部开发会话生成的6122条标签数据，以及针对读取密钥、操作生产数据等危险场景的合成数据。设计目标是在不频繁阻断日常开发的前提下，拦截风险动作。

- **来源**: Cursor Blog
- **原文链接**: [https://cursor.com/blog/auto-review](https://cursor.com/blog/auto-review)
- **AIHOT 链接**: [https://aihot.virxact.com/items/cmq9rpndz0emkslldcjukgjn5](https://aihot.virxact.com/items/cmq9rpndz0emkslldcjukgjn5)
