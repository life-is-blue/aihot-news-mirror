---
"title": "解决循环：语言和推理的吸引子模型"
"aihot_id": "cmp4esqzr05b5sljxesozzpy3"
"aihot_category": "paper"
"published_at": "2026-05-12T00:00:00.000Z"
"discovered_at": "2026-05-13T18:44:48.196Z"
"source_name": "HuggingFace Daily Papers（社区热门论文）"
"original_url": "https://arxiv.org/abs/2605.12466"
"canonical_url": "https://aihot.virxact.com/items/cmp4esqzr05b5sljxesozzpy3"
"score": 73
"content_kind": "news"
---

# 解决循环：语言和推理的吸引子模型

吸引子模型解决了循环Transformer训练不稳定、成本高和深度固定的问题。它通过主干模块生成初始输出嵌入，吸引子模块迭代优化固定点，并利用隐式微分计算梯度，使训练内存与有效深度无关，迭代次数自适应收敛。在语言建模中，相比标准Transformer，困惑度最高降低46.6%，下游任务准确率最高提升19.7%，训练成本更低；一个770M参数的模型性能优于1.3B参数Transformer。在推理任务中，仅2700万参数模型在约1000个示例下，于Sudoku-Extreme和Maze-Hard上准确率分别达91.4%和93.1%，优于Claude、GPT o3等前沿模型。模型还展现出均衡内化现象，训练后初始输出嵌入接近均衡态，推理时可移除求解器而性能几乎无损，实现了迭代优化的可扩展性。

- **来源**: HuggingFace Daily Papers（社区热门论文）
- **原文链接**: [https://arxiv.org/abs/2605.12466](https://arxiv.org/abs/2605.12466)
- **AIHOT 链接**: [https://aihot.virxact.com/items/cmp4esqzr05b5sljxesozzpy3](https://aihot.virxact.com/items/cmp4esqzr05b5sljxesozzpy3)
