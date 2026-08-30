---
"title": "腾讯混元 AI Infra 新开源：HPC-Ops 推理核心算子全面升级"
"aihot_id": "cmq99cd9g09skslldniw7u2ub"
"aihot_category": "ai-products"
"published_at": "2026-06-11T08:34:59.000Z"
"discovered_at": "2026-06-11T08:50:39.034Z"
"source_name": "公众号：腾讯混元"
"original_url": "https://mp.weixin.qq.com/s/y0vd1cpvWXLSssL1kXxguw"
"canonical_url": "https://aihot.virxact.com/items/cmq99cd9g09skslldniw7u2ub"
"score": 78
"content_kind": "news"
---

# 腾讯混元 AI Infra 新开源：HPC-Ops 推理核心算子全面升级

腾讯混元 AI Infra 团队开源升级 HPC-Ops 推理算子库，推出五大核心算子。Attention 采用运行时动态负载调度，长文本最高加速 2.95x，端到端 QPM 提升 17%；Router GEMM 以双 BF16 组合实现 FP32 精度，对比 CuBLAS FP32 最高提速 3.22x；FusedMoE 相对 vLLM、SGLang 性能提升 1.2x~1.6x；Fused AllReduce+Norm 对比主流方案最高提速 1.68x；Sampler 将解码采样融合为 2 个 CUDA Kernel，相对 vLLM 提速 4.0x~7.5x。所有能力均来自生产实践并完全开源。

- **来源**: 公众号：腾讯混元
- **原文链接**: [https://mp.weixin.qq.com/s/y0vd1cpvWXLSssL1kXxguw](https://mp.weixin.qq.com/s/y0vd1cpvWXLSssL1kXxguw)
- **AIHOT 链接**: [https://aihot.virxact.com/items/cmq99cd9g09skslldniw7u2ub](https://aihot.virxact.com/items/cmq99cd9g09skslldniw7u2ub)
