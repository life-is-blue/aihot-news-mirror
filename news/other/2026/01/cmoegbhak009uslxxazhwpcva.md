---
"title": "差分Transformer V2"
"aihot_id": "cmoegbhak009uslxxazhwpcva"
"aihot_category": null
"published_at": "2026-01-20T03:20:57.000Z"
"discovered_at": "2026-01-20T03:20:57.000Z"
"source_name": "Hugging Face：Blog（RSS）"
"original_url": "https://huggingface.co/blog/microsoft/diff-attn-v2"
"canonical_url": "https://aihot.virxact.com/items/cmoegbhak009uslxxazhwpcva"
"score": 83
"content_kind": "news"
---

# 差分Transformer V2

差分Transformer V2发布，其核心是改进的差分注意力机制。相较于V1，V2将查询头数量翻倍而保持键值头不变，差分操作后将维度缩减，从而在解码时能达到与标准Transformer相当的速度，且无需定制内核。新版本还解决了V1中因注意力分布均匀化导致的数值不稳定问题，特别是消除了RMSNorm层所需的巨大缩放因子（如在长序列下），从而避免了梯度爆炸，旨在实现更稳定的大规模预训练。

- **来源**: Hugging Face：Blog（RSS）
- **原文链接**: [https://huggingface.co/blog/microsoft/diff-attn-v2](https://huggingface.co/blog/microsoft/diff-attn-v2)
- **AIHOT 链接**: [https://aihot.virxact.com/items/cmoegbhak009uslxxazhwpcva](https://aihot.virxact.com/items/cmoegbhak009uslxxazhwpcva)
