---
"title": "Program-as-Weights：一种面向模糊函数的编程范式"
"aihot_id": "cmr4blm3e00amsll5l19jk6ce"
"aihot_category": "paper"
"published_at": "2026-07-02T00:00:00.000Z"
"discovered_at": "2026-07-03T02:34:41.072Z"
"source_name": "HuggingFace Daily Papers（社区热门论文）"
"original_url": "https://arxiv.org/abs/2607.02512"
"canonical_url": "https://aihot.virxact.com/items/cmr4blm3e00amsll5l19jk6ce"
"score": 74
"content_kind": "news"
---

# Program-as-Weights：一种面向模糊函数的编程范式

Program-as-Weights （PAW） 提出模糊函数编程范式，将自然语言描述的函数编译为紧凑、可本地执行的神经制品。PAW 使用在 10M 示例数据集 FuzzyBench 上训练的 4B 编译器，为冻结的轻量级解释器输出参数高效适配器。0.6B 的 Qwen3 解释器执行 PAW 程序性能匹敌直接提示 Qwen3-32B，推理内存仅约五十分之一，在 MacBook M3 上达 30 tokens/s。该方法将基础模型从每次输入的求解器重新定义为工具构建器，一次函数定义后生成的制品可离线廉价复用。

- **来源**: HuggingFace Daily Papers（社区热门论文）
- **原文链接**: [https://arxiv.org/abs/2607.02512](https://arxiv.org/abs/2607.02512)
- **AIHOT 链接**: [https://aihot.virxact.com/items/cmr4blm3e00amsll5l19jk6ce](https://aihot.virxact.com/items/cmr4blm3e00amsll5l19jk6ce)
