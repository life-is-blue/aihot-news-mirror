---
"title": "Ling 2.5 Lightning Attention+MLA 混合线性架构改造实践"
"aihot_id": "cmoecv1p6003usl1973hu5t5o"
"aihot_category": null
"published_at": "2026-02-26T00:00:00.000Z"
"discovered_at": "2026-02-26T00:00:00.000Z"
"source_name": "蚂蚁百灵：Developer Blog（网页）"
"original_url": "https://developer.ant-ling.com/zh-CN/blogs/ling-2-5-hybrid-lin\
  ear-mla-practice"
"canonical_url": "https://aihot.virxact.com/items/cmoecv1p6003usl1973hu5t5o"
"score": 86
"content_kind": "news"
---

# Ling 2.5 Lightning Attention+MLA 混合线性架构改造实践

为提升超长上下文下的计算效率，Ling 2.5架构将Ling 2.0的GQA改造为1：7的Lightning Attention与MLA混合线性注意力。此举旨在利用Lightning Attention提升长序列吞吐，并通过MLA极致压缩KV Cache。为确保改造后性能无损，团队设计了精细的平滑迁移训练策略，包括权重转换、QK Norm融合与Partial RoPE改造等多阶段加训。Scaling Law实验确定了1：7为最优混合比例，最终使万亿参数模型实现了更低的计算成本与更高的长文本推理效率。

- **来源**: 蚂蚁百灵：Developer Blog（网页）
- **原文链接**: [https://developer.ant-ling.com/zh-CN/blogs/ling-2-5-hybrid-linear-mla-practice](https://developer.ant-ling.com/zh-CN/blogs/ling-2-5-hybrid-linear-mla-practice)
- **AIHOT 链接**: [https://aihot.virxact.com/items/cmoecv1p6003usl1973hu5t5o](https://aihot.virxact.com/items/cmoecv1p6003usl1973hu5t5o)
