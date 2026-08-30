---
"title": "仅凭一份文档，Qwen3.7-Max 从 0 交付双端应用"
"aihot_id": "cmq6g8zwp086isl5is6dkxq0k"
"aihot_category": "tip"
"published_at": "2026-06-09T09:27:47.000Z"
"discovered_at": "2026-06-09T09:40:40.431Z"
"source_name": "公众号：通义实验室（千问）"
"original_url": "https://mp.weixin.qq.com/s/bYEZL9LM3daNP9tZReqNwg"
"canonical_url": "https://aihot.virxact.com/items/cmq6g8zwp086isl5is6dkxq0k"
"score": 67
"content_kind": "news"
---

# 仅凭一份文档，Qwen3.7-Max 从 0 交付双端应用

在无设计稿和后端代码的条件下，Qwen3.7-Max 仅凭一份约 15 万字的产品调研文档，于隔离环境中全自动完成移动端与 Web 端两套真实应用从 0 到 1 交付，单端耗时约 4 小时，中途无人工接管。模型不具备图像理解能力，通过像素坐标反推布局约束实现界面还原。实验采用"分阶段注入约束→逐层验收→带错纠正"的闭环控制系统：任务拆分为规划、架构、编码等阶段，验收覆盖静态检查、编译自检（0 error）、路由完整性（Web 端 34 条路由全部可达）、功能扫描及真机冷启动冒烟。失败时错误文本自动注入下一轮重试，使模型数小时内收敛。移动端产出可安装 APK，Web 端 typecheck 与构建均通过。

- **来源**: 公众号：通义实验室（千问）
- **原文链接**: [https://mp.weixin.qq.com/s/bYEZL9LM3daNP9tZReqNwg](https://mp.weixin.qq.com/s/bYEZL9LM3daNP9tZReqNwg)
- **AIHOT 链接**: [https://aihot.virxact.com/items/cmq6g8zwp086isl5is6dkxq0k](https://aihot.virxact.com/items/cmq6g8zwp086isl5is6dkxq0k)
