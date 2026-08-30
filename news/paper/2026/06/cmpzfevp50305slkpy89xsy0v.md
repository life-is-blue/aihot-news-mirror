---
"title": "Nemotron 预训练的任务种子合成问答生成"
"aihot_id": "cmpzfevp50305slkpy89xsy0v"
"aihot_category": "paper"
"published_at": "2026-06-04T11:24:53.000Z"
"discovered_at": "2026-06-04T11:42:52.150Z"
"source_name": "Hugging Face：Blog（RSS）"
"original_url": "https://huggingface.co/blog/nvidia/task-seeded-sdg"
"canonical_url": "https://aihot.virxact.com/items/cmpzfevp50305slkpy89xsy0v"
"score": 68
"content_kind": "news"
---

# Nemotron 预训练的任务种子合成问答生成

在 Nemotron-3 Nano 模型的 100B token 续训练实验中，任务种子合成数据生成（Task-Seeded SDG）使 MMLU-Pro 提升 1.8 分，平均代码提升 1.9 分，常识理解提升 1.6 分，GPQA 提升 11.1 分，数学成绩保持稳定。该流程利用 lm-eval-harness 中约 70 个公开任务（约 700 子任务）的训练集作为种子，生成新示例并补充推理和上下文，经过格式校验、去重和答案验证后得到精选合成数据集，用于 Nemotron Ultra 和 Super 训练。

- **来源**: Hugging Face：Blog（RSS）
- **原文链接**: [https://huggingface.co/blog/nvidia/task-seeded-sdg](https://huggingface.co/blog/nvidia/task-seeded-sdg)
- **AIHOT 链接**: [https://aihot.virxact.com/items/cmpzfevp50305slkpy89xsy0v](https://aihot.virxact.com/items/cmpzfevp50305slkpy89xsy0v)
