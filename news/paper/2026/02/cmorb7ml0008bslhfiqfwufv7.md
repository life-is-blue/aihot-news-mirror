---
"title": "量化智能体编码评估中的基础设施干扰"
"aihot_id": "cmorb7ml0008bslhfiqfwufv7"
"aihot_category": "paper"
"published_at": "2026-02-04T16:00:00.000Z"
"discovered_at": "2026-02-04T16:00:00.000Z"
"source_name": "Anthropic：Engineering（事故复盘 + 工程实践 · 网页）"
"original_url": "https://www.anthropic.com/engineering/infrastructure-noise"
"canonical_url": "https://aihot.virxact.com/items/cmorb7ml0008bslhfiqfwufv7"
"score": 74
"content_kind": "news"
---

# 量化智能体编码评估中的基础设施干扰

研究发现，在SWE-bench等智能体编码基准测试中，基础设施配置差异对模型评分的影响，可能超过排行榜上顶尖模型之间的微小分差。内部实验显示，在Terminal-Bench 2.0上，最严格与最宽松的资源设置间成功率相差6%。严格限制资源会导致近6%的任务因容器意外终止而失败，而宽松配置下此类错误率可降至0.5%。当资源余量超过基准规格3倍时，智能体甚至能借助额外资源成功完成原本无法解决的任务。这表明评估环境不仅影响测试稳定性，更会改变基准测试实际衡量的能力维度。

- **来源**: Anthropic：Engineering（事故复盘 + 工程实践 · 网页）
- **原文链接**: [https://www.anthropic.com/engineering/infrastructure-noise](https://www.anthropic.com/engineering/infrastructure-noise)
- **AIHOT 链接**: [https://aihot.virxact.com/items/cmorb7ml0008bslhfiqfwufv7](https://aihot.virxact.com/items/cmorb7ml0008bslhfiqfwufv7)
