---
"title": "MolmoMotion：语言引导的3D运动预测模型"
"aihot_id": "cmqi8qht206mtslf0a4q8mkrb"
"aihot_category": "ai-models"
"published_at": "2026-06-17T15:26:44.000Z"
"discovered_at": "2026-06-17T15:43:34.080Z"
"source_name": "Hugging Face：Blog（RSS）"
"original_url": "https://huggingface.co/blog/allenai/molmomotion"
"canonical_url": "https://aihot.virxact.com/items/cmqi8qht206mtslf0a4q8mkrb"
"score": 69
"content_kind": "news"
---

# MolmoMotion：语言引导的3D运动预测模型

MolmoMotion基于Molmo 2骨干网络，输入视频帧、物体上的3D点标记及文字动作指令（如"移动并旋转桌上放水果的木碗"），预测未来数秒内这些点的3D轨迹。提供两个变体：自回归的MolmoMotion-AR逐步预测坐标，流匹配的MolmoMotion-FM通过连续空间变换处理多可能性运动。同时发布MolmoMotion-1M数据集（含116万视频的3D点轨迹及动作描述）和PointMotionBench基准测试（2700个人工验证视频片段）。模型权重、数据集和基准测试均已开源。

- **来源**: Hugging Face：Blog（RSS）
- **原文链接**: [https://huggingface.co/blog/allenai/molmomotion](https://huggingface.co/blog/allenai/molmomotion)
- **AIHOT 链接**: [https://aihot.virxact.com/items/cmqi8qht206mtslf0a4q8mkrb](https://aihot.virxact.com/items/cmqi8qht206mtslf0a4q8mkrb)
