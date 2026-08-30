---
"title": "不再遗漏任何Token：解析Miles中的Token-In-Token-Out（TITO）"
"aihot_id": "cmq6w1tl0001jslbh8gv57k90"
"aihot_category": "paper"
"published_at": "2026-06-04T16:00:00.000Z"
"discovered_at": "2026-06-04T16:00:00.000Z"
"source_name": "LMSYS：Blog（Chatbot Arena 团队）"
"original_url": "https://www.lmsys.org/blog/2026-05-13-no-token-left-behind"
"canonical_url": "https://aihot.virxact.com/items/cmq6w1tl0001jslbh8gv57k90"
"score": 62
"content_kind": "news"
---

# 不再遗漏任何Token：解析Miles中的Token-In-Token-Out（TITO）

Miles框架提出Token-In-Token-Out（TITO）原则，解决智能体强化学习中训练-推理不匹配：确保rollout过程token序列与训练器评估序列逐位一致。TITO将多轮轨迹视为一个连续序列（每任务一个样本），节省一个数量级计算开销并维持on-policy性。三种破坏场景：反分词-再分词不匹配、聊天模板修剪推理内容、有损模板重新渲染。Miles通过推理会话服务器、三级只追加保证、可插拔TITO分词器和序列比较器实现。典型任务（如SWE-Bench）轨迹含30-50轮。

- **来源**: LMSYS：Blog（Chatbot Arena 团队）
- **原文链接**: [https://www.lmsys.org/blog/2026-05-13-no-token-left-behind](https://www.lmsys.org/blog/2026-05-13-no-token-left-behind)
- **AIHOT 链接**: [https://aihot.virxact.com/items/cmq6w1tl0001jslbh8gv57k90](https://aihot.virxact.com/items/cmq6w1tl0001jslbh8gv57k90)
