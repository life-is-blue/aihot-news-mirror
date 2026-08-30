---
"title": "DeepSeek 开源 DSpark 投机解码框架，加速 DeepSeek-V4 生成速度 60-85%"
"aihot_id": "cmqwm45f901n6sly0gpl6b6l5"
"aihot_category": "paper"
"published_at": "2026-06-27T16:59:58.000Z"
"discovered_at": "2026-06-27T17:06:49.559Z"
"source_name": "MarkTechPost（RSS）"
"original_url": "https://www.marktechpost.com/2026/06/27/deepseek-releases-dspa\
  rk-a-speculative-decoding-framework-that-accelerates-deepseek-v4-per-user-gen\
  eration-60-85-over-mtp-1"
"canonical_url": "https://aihot.virxact.com/items/cmqwm45f901n6sly0gpl6b6l5"
"score": 79
"content_kind": "news"
---

# DeepSeek 开源 DSpark 投机解码框架，加速 DeepSeek-V4 生成速度 60-85%

DeepSeek 发布 DSpark 投机解码框架并开源检查点与训练代码。该框架不是新模型，而是在 DeepSeek-V4 权重上附加草稿模块，通过半自回归生成（并行骨干 + 轻量级顺序头）实现无损加速。生产环境下，DeepSeek-V4-Flash 和 V4-Pro 每用户生成速度较 MTP-1 基线分别提升 60-85% 和 57-78%。离线测试中，接受长度比 Eagle3 高 26-31%，比 DFlash 高 16-18%。配套 DeepSpec 训练代码库采用 MIT 许可证。

- **来源**: MarkTechPost（RSS）
- **原文链接**: [https://www.marktechpost.com/2026/06/27/deepseek-releases-dspark-a-speculative-decoding-framework-that-accelerates-deepseek-v4-per-user-generation-60-85-over-mtp-1](https://www.marktechpost.com/2026/06/27/deepseek-releases-dspark-a-speculative-decoding-framework-that-accelerates-deepseek-v4-per-user-generation-60-85-over-mtp-1)
- **AIHOT 链接**: [https://aihot.virxact.com/items/cmqwm45f901n6sly0gpl6b6l5](https://aihot.virxact.com/items/cmqwm45f901n6sly0gpl6b6l5)
