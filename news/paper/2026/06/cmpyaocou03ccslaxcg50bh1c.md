---
"title": "Ultralytics YOLO26：统一实时端到端视觉模型"
"aihot_id": "cmpyaocou03ccslaxcg50bh1c"
"aihot_category": "paper"
"published_at": "2026-06-02T00:00:00.000Z"
"discovered_at": "2026-06-03T16:42:29.889Z"
"source_name": "HuggingFace Daily Papers（社区热门论文）"
"original_url": "https://arxiv.org/abs/2606.03748"
"canonical_url": "https://aihot.virxact.com/items/cmpyaocou03ccslaxcg50bh1c"
"score": 76
"content_kind": "news"
---

# Ultralytics YOLO26：统一实时端到端视觉模型

Ultralytics YOLO26 采用双头设计实现原生无 NMS 的端到端推理，彻底移除 DFL，获得更轻检测头与无约束回归范围。训练结合混合 Muon-SGD 优化器 MuSGD、转向推理头的 Progressive Loss 及保证小物体正样本的 STAL 标签分配。支持检测、实例分割、姿态估计、定向检测和分类，提供 5 种尺度（n/s/m/l/x）及开放词汇扩展 YOLOE-26。全部尺度在 COCO 上达 40.9-57.5 mAP，T4 TensorRT 延迟 1.7-11.8 ms；YOLOE-26x 在 LVIS minival 文本提示下达 40.6 AP。代码已开源。

- **来源**: HuggingFace Daily Papers（社区热门论文）
- **原文链接**: [https://arxiv.org/abs/2606.03748](https://arxiv.org/abs/2606.03748)
- **AIHOT 链接**: [https://aihot.virxact.com/items/cmpyaocou03ccslaxcg50bh1c](https://aihot.virxact.com/items/cmpyaocou03ccslaxcg50bh1c)
