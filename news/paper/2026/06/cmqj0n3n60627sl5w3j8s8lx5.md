---
"title": "SAE干预不可靠：干预后抑制行为的恢复"
"aihot_id": "cmqj0n3n60627sl5w3j8s8lx5"
"aihot_category": "paper"
"published_at": "2026-06-16T00:00:00.000Z"
"discovered_at": "2026-06-16T00:00:00.000Z"
"source_name": "HuggingFace Daily Papers（社区热门论文）"
"original_url": "https://arxiv.org/abs/2606.18322"
"canonical_url": "https://aihot.virxact.com/items/cmqj0n3n60627sl5w3j8s8lx5"
"score": 70
"content_kind": "news"
---

# SAE干预不可靠：干预后抑制行为的恢复

稀疏自编码器（SAE）将残差流激活分解为可解释特征，但干预特定特征后，通过优化残差扰动可恢复原有行为。研究发现这是一种可恢复失败模式：干预阻断一条可见行为路径，却未消除行为本身。即使干预在整个优化和生成期间保持激活，恢复依然可行。在TPP、遗忘、IOI和拒绝引导场景中均观察到可恢复行为。安全关键的拒绝引导场景下有效样本恢复率达95.8%，被防御特征的相对漂移仅0.131。归因分析将恢复路径定位到SAE重建残差，表明控制SAE特征并不能保证控制底层行为。

- **来源**: HuggingFace Daily Papers（社区热门论文）
- **原文链接**: [https://arxiv.org/abs/2606.18322](https://arxiv.org/abs/2606.18322)
- **AIHOT 链接**: [https://aihot.virxact.com/items/cmqj0n3n60627sl5w3j8s8lx5](https://aihot.virxact.com/items/cmqj0n3n60627sl5w3j8s8lx5)
