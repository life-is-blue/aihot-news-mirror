---
"title": "小红书联合北大、上交提出 HYPIC，让混合注意力大模型用上位置无关缓存，首 token 延迟降 3.25 倍"
"aihot_id": "cmsdu108a00ufrofz01bxk6m3"
"aihot_category": "paper"
"published_at": "2026-07-16T10:00:00.000Z"
"discovered_at": "2026-07-16T10:00:00.000Z"
"source_name": "公众号：小红书技术（dots.llm）"
"original_url": "https://mp.weixin.qq.com/s?__biz=Mzg4OTc2MzczNg%3D%3D&mid=2247\
  495626&idx=1&sn=1716d6b911780449e17662c4b1dad973"
"canonical_url": "https://aihot.virxact.com/items/cmsdu108a00ufrofz01bxk6m3"
"score": 75
"content_kind": "news"
---

# 小红书联合北大、上交提出 HYPIC，让混合注意力大模型用上位置无关缓存，首 token 延迟降 3.25 倍

小红书联合北大、上交提出 HYPIC，这是首个在混合注意力大模型上实现位置无关缓存的服务系统。在 4 个生产级混合注意力模型、5 个工作负载上，HYPIC 将首 token 延迟（TTFT）平均降低 3.25 倍，同 SLO 下可持续 QPS 提升 1.66 倍，任务质量与完全重算仅相差 1.71 分。该系统通过缓存段累积转移算子实现线性层常数时间状态组合，并用缝合窗口修复全注意力层跨段对齐。

- **来源**: 公众号：小红书技术（dots.llm）
- **原文链接**: [https://mp.weixin.qq.com/s?__biz=Mzg4OTc2MzczNg%3D%3D&mid=2247495626&idx=1&sn=1716d6b911780449e17662c4b1dad973](https://mp.weixin.qq.com/s?__biz=Mzg4OTc2MzczNg%3D%3D&mid=2247495626&idx=1&sn=1716d6b911780449e17662c4b1dad973)
- **AIHOT 链接**: [https://aihot.virxact.com/items/cmsdu108a00ufrofz01bxk6m3](https://aihot.virxact.com/items/cmsdu108a00ufrofz01bxk6m3)
