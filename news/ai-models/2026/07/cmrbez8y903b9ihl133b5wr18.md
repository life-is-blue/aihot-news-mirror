---
"title": "Pulpie：用于清理网络的Pareto最优模型"
"aihot_id": "cmrbez8y903b9ihl133b5wr18"
"aihot_category": "ai-models"
"published_at": "2026-07-08T01:33:24.910Z"
"discovered_at": "2026-07-08T01:43:39.251Z"
"source_name": "Hacker News 热门（buzzing.cc 中文翻译）"
"original_url": "https://usefeyn.com/blog/pulpie-pareto-optimal-models-for-cleaning-the-web"
"canonical_url": "https://aihot.virxact.com/items/cmrbez8y903b9ihl133b5wr18"
"score": 75
"content_kind": "news"
---

# Pulpie：用于清理网络的Pareto最优模型

Pulpie是一族Pareto最优模型，用于从HTML页面提取主要内容。其最小模型pulpie-orange-small（210M参数）在WebMainBench上取得0.862的ROUGE-5 F1分数，接近600M参数的Dripper（0.864），但成本仅1/20。在NVIDIA L4 GPU上，Pulpie处理速度13.7页/秒，Dripper仅0.68页/秒。清理10亿页HTML，Pulpie成本约$7，900，Dripper需$159，000。模型采用编码器架构，单次前向传播即可标记每个HTML块为内容或模板，已在HuggingFace开源。

- **来源**: Hacker News 热门（buzzing.cc 中文翻译）
- **原文链接**: [https://usefeyn.com/blog/pulpie-pareto-optimal-models-for-cleaning-the-web](https://usefeyn.com/blog/pulpie-pareto-optimal-models-for-cleaning-the-web)
- **AIHOT 链接**: [https://aihot.virxact.com/items/cmrbez8y903b9ihl133b5wr18](https://aihot.virxact.com/items/cmrbez8y903b9ihl133b5wr18)
