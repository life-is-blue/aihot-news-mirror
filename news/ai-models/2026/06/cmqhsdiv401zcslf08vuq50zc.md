---
"title": "MiniMax 发布 MSA 稀疏注意力方法，开源推理内核并推出 MiniMax-M3 模型"
"aihot_id": "cmqhsdiv401zcslf08vuq50zc"
"aihot_category": "ai-models"
"published_at": "2026-06-17T07:44:54.000Z"
"discovered_at": "2026-06-17T08:05:34.282Z"
"source_name": "MarkTechPost（RSS）"
"original_url": "https://www.marktechpost.com/2026/06/17/minimax-sparse-attenti\
  on-msa-a-two-branch-block-sparse-attention-trained-on-a-109b-parameter-moe-wi\
  th-a-3t-token-budget"
"canonical_url": "https://aihot.virxact.com/items/cmqhsdiv401zcslf08vuq50zc"
"score": 70
"content_kind": "news"
---

# MiniMax 发布 MSA 稀疏注意力方法，开源推理内核并推出 MiniMax-M3 模型

MiniMax 发布 MSA（MiniMax Sparse Attention），一种构建在 Grouped Query Attention 上的稀疏注意力方法。它将注意力分解为索引分支与主分支：索引分支以块粒度（默认 128 token）为每个 GQA 组选择 16 个 token 块（固定预算 2048 个键值 token），主分支仅在这些块上执行精确 softmax 注意力。MSA 在 109B 参数 MoE 模型上训练，开源了面向 NVIDIA SM100 GPU 的推理内核 `fmha_sm100`（MIT 许可，支持 BF16/FP8/NVFP4/FP4），并发布生产模型 MiniMax-M3。MSA-PT 在 MMLU、GSM8K、HumanEval、RULER-8K、RULER-32K 上分别达 67.2、77.7、64.0、84.2、77.5，与全注意力基线持平。128K 上下文下，其 exp-free Top-k 选择比 `torch.topk` 快 5.1 倍。

- **来源**: MarkTechPost（RSS）
- **原文链接**: [https://www.marktechpost.com/2026/06/17/minimax-sparse-attention-msa-a-two-branch-block-sparse-attention-trained-on-a-109b-parameter-moe-with-a-3t-token-budget](https://www.marktechpost.com/2026/06/17/minimax-sparse-attention-msa-a-two-branch-block-sparse-attention-trained-on-a-109b-parameter-moe-with-a-3t-token-budget)
- **AIHOT 链接**: [https://aihot.virxact.com/items/cmqhsdiv401zcslf08vuq50zc](https://aihot.virxact.com/items/cmqhsdiv401zcslf08vuq50zc)
