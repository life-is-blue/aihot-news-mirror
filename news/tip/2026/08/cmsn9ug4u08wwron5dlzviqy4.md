---
"title": "Linear 讲解 Linear Agent 的构建方法与设计取舍"
"aihot_id": "cmsn9ug4u08wwron5dlzviqy4"
"aihot_category": "tip"
"published_at": "2026-08-10T12:19:00.000Z"
"discovered_at": "2026-08-10T13:32:52.244Z"
"source_name": "Linear：Now（RSS）"
"original_url": "https://linear.app/now/how-we-built-linear-agent"
"canonical_url": "https://aihot.news/items/cmsn9ug4u08wwron5dlzviqy4"
"score": 61
"content_kind": "news"
---

# Linear 讲解 Linear Agent 的构建方法与设计取舍

Linear 发文讲解 Linear Agent 的构建方法，核心是不设计固定路径，而是用系统提示词、工具设计、产品模型和运行范围划出边界让智能体自主发挥。文章介绍了 system skills 按需渐进加载以控制上下文、拒绝直接暴露 SDK 等底层原语以换取可预测性，并说明为何从模型 API 向上自研 harness，以支持动态工具注入、上下文化的工具调用确认和异步子智能体执行等编排需求。

- **来源**: Linear：Now（RSS）
- **原文链接**: [https://linear.app/now/how-we-built-linear-agent](https://linear.app/now/how-we-built-linear-agent)
- **AIHOT 链接**: [https://aihot.news/items/cmsn9ug4u08wwron5dlzviqy4](https://aihot.news/items/cmsn9ug4u08wwron5dlzviqy4)
