---
"title": "Google AI 团队分享如何为 LLM-as-a-Judge 评测编写可靠的评分标准"
"aihot_id": "cmtkbz92801nmrowy61g2fsob"
"aihot_category": "tip"
"published_at": "2026-09-02T16:35:00.000Z"
"discovered_at": "2026-09-02T16:48:59.899Z"
"source_name": "Google AI：DEV 作者专属（RSS）"
"original_url": "https://dev.to/googleai/how-to-write-reliable-rubrics-for-llm-\
  as-a-judge-evaluations-ndp"
"canonical_url": "https://aihot.virxact.com/items/cmtkbz92801nmrowy61g2fsob"
"score": 65
"content_kind": "news"
---

# Google AI 团队分享如何为 LLM-as-a-Judge 评测编写可靠的评分标准

Google AI 团队发布教程，讲解如何为 LLM-as-a-Judge 评测编写可靠的布尔式评分标准，指出模糊提示会导致评估不一致和浪费 token。文中给出四条经验：问题保持原子化且互不重叠、只让评判模型评估客观事实（可用 RFC 2119 术语如 MUST 表述）、只评 prompt 中明确要求的内容、用专家标注的 golden set 校准评判模型直至与人类评分一致。

- **来源**: Google AI：DEV 作者专属（RSS）
- **原文链接**: [https://dev.to/googleai/how-to-write-reliable-rubrics-for-llm-as-a-judge-evaluations-ndp](https://dev.to/googleai/how-to-write-reliable-rubrics-for-llm-as-a-judge-evaluations-ndp)
- **AIHOT 链接**: [https://aihot.virxact.com/items/cmtkbz92801nmrowy61g2fsob](https://aihot.virxact.com/items/cmtkbz92801nmrowy61g2fsob)
