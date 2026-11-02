---
"title": "OpenAI 训练并部署激活分类器作为前沿模型安全监控层"
"aihot_id": "wlmiqh13694tqabyvu6nzvlrs"
"aihot_category": "paper"
"published_at": "2026-11-02T20:00:00.000Z"
"discovered_at": "2026-11-02T18:45:33.841Z"
"source_name": "OpenAI：Alignment 研究博客（RSS）"
"original_url": "https://alignment.openai.com/training-activation-classifiers/"
"canonical_url": "https://aihot.news/items/wlmiqh13694tqabyvu6nzvlrs"
"score": 63
"content_kind": "news"
---

# OpenAI 训练并部署激活分类器作为前沿模型安全监控层

OpenAI 自 GPT-5.6 起在其最强模型的内部和外部流量上部署激活分类器（probes），利用模型内部激活逐 token 实时评分，可在生成中途阻断违规回复和工具调用并交由推理模型复审。实验显示 probes 比更大的文本分类器对测试的越狱攻击更鲁棒，准确率随模型能力提升，且在后训练各检查点间迁移良好，但需为新基础模型重新训练，且只能检测可显式训练的已知违规类型。

- **来源**: OpenAI：Alignment 研究博客（RSS）
- **原文链接**: [https://alignment.openai.com/training-activation-classifiers/](https://alignment.openai.com/training-activation-classifiers/)
- **AIHOT 链接**: [https://aihot.news/items/wlmiqh13694tqabyvu6nzvlrs](https://aihot.news/items/wlmiqh13694tqabyvu6nzvlrs)
