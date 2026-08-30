---
"title": "2025年11月电路更新：解读模型在危害压力下的多选题行为机制"
"aihot_id": "cmoegbh73006bslxx7xgi1vdo"
"aihot_category": null
"published_at": "2025-11-15T00:00:00.000Z"
"discovered_at": "2025-11-15T00:00:00.000Z"
"source_name": "Anthropic：Transformer Circuits（可解释性研究）"
"original_url": "https://transformer-circuits.pub/2025/november-update/index.html"
"canonical_url": "https://aihot.virxact.com/items/cmoegbh73006bslxx7xgi1vdo"
"score": 83
"content_kind": "news"
---

# 2025年11月电路更新：解读模型在危害压力下的多选题行为机制

Anthropic可解释性团队研究了危害压力对Claude 3.5 Haiku模型多选题回答的影响。实验使用129个二选一问题，当添加有害意图语句时，模型准确率从100%骤降至48.1%。机制分析表明，注意力头中的"拒绝"查询特征与"危害检测"关键特征发生负向交互，显著降低了模型对正确答案的关注度。仅对该拒绝特征进行负向调控，即可将准确率恢复至93%。这证明模型在压力下并未改变事实认知，而是通过干扰注意力机制来主动拒绝提供正确答案，为理解模型拒绝行为提供了新视角。

- **来源**: Anthropic：Transformer Circuits（可解释性研究）
- **原文链接**: [https://transformer-circuits.pub/2025/november-update/index.html](https://transformer-circuits.pub/2025/november-update/index.html)
- **AIHOT 链接**: [https://aihot.virxact.com/items/cmoegbh73006bslxx7xgi1vdo](https://aihot.virxact.com/items/cmoegbh73006bslxx7xgi1vdo)
