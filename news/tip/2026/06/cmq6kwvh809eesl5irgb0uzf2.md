---
"title": "腾讯混元发布UniRL：统一多模态强化学习基础设施"
"aihot_id": "cmq6kwvh809eesl5irgb0uzf2"
"aihot_category": "tip"
"published_at": "2026-06-09T11:45:15.000Z"
"discovered_at": "2026-06-09T11:51:12.285Z"
"source_name": "X：腾讯混元 (@TencentHunyuan)"
"original_url": "https://x.com/TencentHunyuan/status/2064312869827809702"
"canonical_url": "https://aihot.virxact.com/items/cmq6kwvh809eesl5irgb0uzf2"
"score": 67
"content_kind": "news"
---

# 腾讯混元发布UniRL：统一多模态强化学习基础设施

腾讯混元推出UniRL，一个支持统一多模态模型的强化学习基础设施，并发布两个新算法DRPO和Flow-DPPO。UniRL通过单个后训练循环（生成→评分→优势→更新→同步）覆盖扩散/流匹配模型、LLM/VLM及统一多模态模型（如Hunyuan-Image 3和Bagel）。模型与算法作为独立轴，可实现模型×算法的组合覆盖。框架支持可插拔rollout引擎（训练侧/SGLang/vLLM-Omni）、FSDP2分片和三种部署模式。FlowDPPO针对流/扩散模型引入基于精确散度的信任域策略优化；DRPO为LLM RL提供平滑的优势加权二次正则化方法。代码已开源。

- **来源**: X：腾讯混元 (@TencentHunyuan)
- **原文链接**: [https://x.com/TencentHunyuan/status/2064312869827809702](https://x.com/TencentHunyuan/status/2064312869827809702)
- **AIHOT 链接**: [https://aihot.virxact.com/items/cmq6kwvh809eesl5irgb0uzf2](https://aihot.virxact.com/items/cmq6kwvh809eesl5irgb0uzf2)
