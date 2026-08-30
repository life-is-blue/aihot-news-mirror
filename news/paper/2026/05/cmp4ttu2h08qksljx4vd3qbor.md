---
"title": "持续更新导致LLM智能体记忆效用衰退"
"aihot_id": "cmp4ttu2h08qksljx4vd3qbor"
"aihot_category": "paper"
"published_at": "2026-05-13T00:00:00.000Z"
"discovered_at": "2026-05-14T01:45:33.071Z"
"source_name": "HuggingFace Daily Papers（社区热门论文）"
"original_url": "https://arxiv.org/abs/2605.12978"
"canonical_url": "https://aihot.virxact.com/items/cmp4ttu2h08qksljx4vd3qbor"
"score": 72
"content_kind": "news"
---

# 持续更新导致LLM智能体记忆效用衰退

研究发现，当前由大语言模型驱动的智能体记忆系统在持续整合更新记忆时，会产生错误记忆，导致性能不升反降。即使基于完全正确的经验进行整合，GPT-4在部分问题上仍有54%的失败率，而这些问题是其无记忆时曾成功解决的。性能衰退源于整合步骤本身，而非原始经验。在受控测试中，默认保留原始经历片段的智能体，其准确率是强制整合版本的两倍；完全禁用整合、仅进行片段管理，能达到与自动管理相当的性能。因此，稳健的智能体记忆系统应将原始经历片段视为首要证据，并明确控制整合的触发条件，而非在每次交互后都自动执行。

- **来源**: HuggingFace Daily Papers（社区热门论文）
- **原文链接**: [https://arxiv.org/abs/2605.12978](https://arxiv.org/abs/2605.12978)
- **AIHOT 链接**: [https://aihot.virxact.com/items/cmp4ttu2h08qksljx4vd3qbor](https://aihot.virxact.com/items/cmp4ttu2h08qksljx4vd3qbor)
