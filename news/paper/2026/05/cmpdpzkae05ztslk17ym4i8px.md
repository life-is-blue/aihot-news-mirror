---
"title": "CopT：基于连续空间对比验证的在策略推理"
"aihot_id": "cmpdpzkae05ztslk17ym4i8px"
"aihot_category": "paper"
"published_at": "2026-05-19T00:00:00.000Z"
"discovered_at": "2026-05-20T07:07:57.448Z"
"source_name": "HuggingFace Daily Papers（社区热门论文）"
"original_url": "https://arxiv.org/abs/2605.20075"
"canonical_url": "https://aihot.virxact.com/items/cmpdpzkae05ztslk17ym4i8px"
"score": 72
"content_kind": "news"
---

# CopT：基于连续空间对比验证的在策略推理

CopT提出了一种反转传统链式思考（CoT）顺序的推理框架：先生成草稿答案，再进行策略内反思。其核心是将连续嵌入向量转化为推理时的对比验证器，通过比较模型在离散令牌与连续嵌入输入下对同一生成令牌的支持度，构建序列级反向KL估计器，以此评估答案的可靠性。当答案不可靠时，CopT会执行进一步思考，并利用第二个KL估计器动态控制草稿答案的可见性，在保留有用信息与规避误导间取得平衡。在无需额外训练的前提下，该方法在数学、编程等任务上显著提升了准确率（最高达23%）并大幅减少了令牌消耗（高达57%）。

- **来源**: HuggingFace Daily Papers（社区热门论文）
- **原文链接**: [https://arxiv.org/abs/2605.20075](https://arxiv.org/abs/2605.20075)
- **AIHOT 链接**: [https://aihot.virxact.com/items/cmpdpzkae05ztslk17ym4i8px](https://aihot.virxact.com/items/cmpdpzkae05ztslk17ym4i8px)
