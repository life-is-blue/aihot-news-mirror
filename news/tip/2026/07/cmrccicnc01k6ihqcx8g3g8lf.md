---
"title": "Claude Code 的 Model 与 Effort：知道更多 vs. 更加努力"
"aihot_id": "cmrccicnc01k6ihqcx8g3g8lf"
"aihot_category": "tip"
"published_at": "2026-07-08T16:55:53.000Z"
"discovered_at": "2026-07-08T17:22:18.096Z"
"source_name": "X：Claude Devs (@ClaudeDevs)"
"original_url": "https://x.com/ClaudeDevs/status/2074900291062034618"
"canonical_url": "https://aihot.virxact.com/items/cmrccicnc01k6ihqcx8g3g8lf"
"score": 73
"content_kind": "news"
---

# Claude Code 的 Model 与 Effort：知道更多 vs. 更加努力

Claude Code 的 model 和 effort 两种设置都旨在提升输出，但机制不同。model 越大，模型能力越强（基于行业标准基准测试）。effort 控制 Claude 在请求上的总工作量，包括思考时间、读取文件数、验证程度、多步任务推进深度等。高 effort 时 Claude 会执行更多操作（读文件、跑测试、再检查）；低 effort 时更倾向询问上下文。模型选择本质是切换不同的冻结权重集--权重在训练时固定，prompt 和上下文只能引导（steering）而不能改变权重。模型幻觉是权重产生看似合理但错误的 token 序列。

- **来源**: X：Claude Devs (@ClaudeDevs)
- **原文链接**: [https://x.com/ClaudeDevs/status/2074900291062034618](https://x.com/ClaudeDevs/status/2074900291062034618)
- **AIHOT 链接**: [https://aihot.virxact.com/items/cmrccicnc01k6ihqcx8g3g8lf](https://aihot.virxact.com/items/cmrccicnc01k6ihqcx8g3g8lf)
