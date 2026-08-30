---
"title": "世界模型与语言模型：论具体推理与抽象推理的互补性"
"aihot_id": "cmpxkya4604y3slck1oyytsxu"
"aihot_category": "paper"
"published_at": "2026-06-02T13:07:49.000Z"
"discovered_at": "2026-06-03T04:42:23.121Z"
"source_name": "HuggingFace Daily Papers（社区热门论文）"
"original_url": "https://arxiv.org/abs/2606.03603"
"canonical_url": "https://aihot.virxact.com/items/cmpxkya4604y3slck1oyytsxu"
"score": 70
"content_kind": "news"
---

# 世界模型与语言模型：论具体推理与抽象推理的互补性

本研究探讨了世界模型与多模态大语言模型在预测未来状态时的互补性。世界模型可生成具体的视觉未来轨迹，但可能视觉合理却任务错误；多模态大语言模型则擅长抽象推理。为此，研究提出了"受控的具体推理"框架，并构建了VRQABench和OpenWorldQA两个基准。同时，提出了Privileged-Future On-Policy Self-Distillation（PF-OPSD）方法，该方法在训练时利用真实未来视频作为特权上下文评估推理轨迹，但部署时无需真实未来。实验结果显示，PF-OPSD在两个基准上分别比基线高出10.6%和10.9%，并提升了对噪声或冲突轨迹的鲁棒性。

- **来源**: HuggingFace Daily Papers（社区热门论文）
- **原文链接**: [https://arxiv.org/abs/2606.03603](https://arxiv.org/abs/2606.03603)
- **AIHOT 链接**: [https://aihot.virxact.com/items/cmpxkya4604y3slck1oyytsxu](https://aihot.virxact.com/items/cmpxkya4604y3slck1oyytsxu)
