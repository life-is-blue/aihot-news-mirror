---
"title": "对齐如何路由：语言模型策略电路的定位、扩展与控制"
"aihot_id": "cmnyot4lh007usl0fthmo0arr"
"aihot_category": "paper"
"published_at": "2026-04-13T00:00:00.000Z"
"discovered_at": "2026-04-14T13:58:42.402Z"
"source_name": "HuggingFace Daily Papers（社区热门论文）"
"original_url": "https://arxiv.org/abs/2604.04385"
"canonical_url": "https://aihot.virxact.com/items/cmnyot4lh007usl0fthmo0arr"
"score": 79
"content_kind": "news"
---

# 对齐如何路由：语言模型策略电路的定位、扩展与控制

研究定位了对齐训练语言模型的策略路由机制：中间层注意力门控检测内容并触发深层放大头输出拒绝信号。该机制在2B至72B参数的12个模型中普遍存在，随规模扩大从单头演变为跨层头带。实验证实门控层贡献不足1%输出却具因果必要性，单头消融在72B模型上效果减弱58倍。调节检测层信号可连续控制策略强度，甚至将拒绝转为有害回答。替换密码可使安全机制失效70-99%，而注入明文门控激活可恢复48%拒绝行为，表明安全能力仅被路由门控而非真正移除。

- **来源**: HuggingFace Daily Papers（社区热门论文）
- **原文链接**: [https://arxiv.org/abs/2604.04385](https://arxiv.org/abs/2604.04385)
- **AIHOT 链接**: [https://aihot.virxact.com/items/cmnyot4lh007usl0fthmo0arr](https://aihot.virxact.com/items/cmnyot4lh007usl0fthmo0arr)
