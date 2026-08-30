---
"title": "Nemotron 3.5 ASR：为你的语言、领域或口音进行微调"
"aihot_id": "cmpzjp7tw045aslkp6e927y5j"
"aihot_category": "tip"
"published_at": "2026-06-04T12:59:35.000Z"
"discovered_at": "2026-06-04T13:42:52.868Z"
"source_name": "Hugging Face：Blog（RSS）"
"original_url": "https://huggingface.co/blog/nvidia/fine-tuning-nemotron-35-asr"
"canonical_url": "https://aihot.virxact.com/items/cmpzjp7tw045aslkp6e927y5j"
"score": 75
"content_kind": "news"
---

# Nemotron 3.5 ASR：为你的语言、领域或口音进行微调

Nemotron 3.5 ASR 是一个 600M 参数的多语言流式语音识别模型，单个检查点覆盖 40 种语言-地区（含英、西、德、法、意、日、韩、中、阿拉伯等）。采用 Cache-Aware FastConformer 编码器与 RNNT 解码器，缓存内部状态避免重复计算，实现低延迟流式转录且不损失精度。模型原生输出带标点和大写的生产级文本，无需后处理。支持指定语言（target_lang=es-ES）或自动语言检测（target_lang=auto）。通过注意力上下文大小（att_context_size）可在推理时直接调节延迟-准确率权衡，范围从 80ms 到 1.12s，无需重新训练。模型以 NeMo 检查点形式发布，可用于微调以适配特定语言、领域或口音。

- **来源**: Hugging Face：Blog（RSS）
- **原文链接**: [https://huggingface.co/blog/nvidia/fine-tuning-nemotron-35-asr](https://huggingface.co/blog/nvidia/fine-tuning-nemotron-35-asr)
- **AIHOT 链接**: [https://aihot.virxact.com/items/cmpzjp7tw045aslkp6e927y5j](https://aihot.virxact.com/items/cmpzjp7tw045aslkp6e927y5j)
