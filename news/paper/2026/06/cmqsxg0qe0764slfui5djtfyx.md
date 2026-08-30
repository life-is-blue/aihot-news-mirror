---
"title": "Causal-rCM：自回归视频扩散蒸馏的统一教师强制与自强制开源方案"
"aihot_id": "cmqsxg0qe0764slfui5djtfyx"
"aihot_category": "paper"
"published_at": "2026-06-24T00:00:00.000Z"
"discovered_at": "2026-06-25T03:12:57.532Z"
"source_name": "HuggingFace Daily Papers（社区热门论文）"
"original_url": "https://arxiv.org/abs/2606.25473"
"canonical_url": "https://aihot.virxact.com/items/cmqsxg0qe0764slfui5djtfyx"
"score": 70
"content_kind": "news"
---

# Causal-rCM：自回归视频扩散蒸馏的统一教师强制与自强制开源方案

Causal-rCM将扩散蒸馏框架rCM扩展至自回归视频扩散，提出教师强制（TF）与自强制（SF）互补训练范式，并发布统一开源算法与基础设施。通过自定义掩码FlashAttention-2 JVP内核，首次实现基于教师强制的连续时间一致性模型（sCM/MeanFlow）用于自回归视频扩散，收敛速度比离散时间版本快10倍。蒸馏后的2步因果Wan2.1-1.3B模型在仅1或2步采样下取得VBench-T2V分数84.63，仅使用合成数据即达到帧级和块级流式视频生成SOTA。该方法还应用于Cosmos 3全模态世界基础模型，实现动作条件生成的交互式世界模型。

- **来源**: HuggingFace Daily Papers（社区热门论文）
- **原文链接**: [https://arxiv.org/abs/2606.25473](https://arxiv.org/abs/2606.25473)
- **AIHOT 链接**: [https://aihot.virxact.com/items/cmqsxg0qe0764slfui5djtfyx](https://aihot.virxact.com/items/cmqsxg0qe0764slfui5djtfyx)
