---
"title": "NeuroBait：微调AI助手，为ADHD大脑点燃多巴胺火花"
"aihot_id": "cmq6gskkl08acsl5i3wx4hdde"
"aihot_category": "tip"
"published_at": "2026-06-09T09:04:58.000Z"
"discovered_at": "2026-06-09T09:55:53.138Z"
"source_name": "Hugging Face：Blog（RSS）"
"original_url": "https://huggingface.co/blog/build-small-hackathon/neurobait-adhd"
"canonical_url": "https://aihot.virxact.com/items/cmq6gskkl08acsl5i3wx4hdde"
"score": 68
"content_kind": "news"
---

# NeuroBait：微调AI助手，为ADHD大脑点燃多巴胺火花

NeuroBait是基于Google gemma-3-12b-it微调的AI对话助手，旨在帮助ADHD患者克服"知道该做什么但无法开始"的执行功能障碍。采用16-bit LoRA（r=16， alpha=16）在Unsloth上训练3个epoch，学习率2e-4，最大序列长度2048，使用单张H100 80GB GPU。数据集为基于真实ADHD场景手工合成的少量数据。部署于Hugging Face Space（ZeroGPU），使用Gradio和标准transformers+peft，运行时以4-bit NF4加载基础模型并应用LoRA适配器。NeuroBait不生成待办清单，而是根据用户上下文给出3-6句温暖流畅的回复，引导用户找到一件微小可立即执行的动作，从而激发多巴胺、降低启动阻力。

- **来源**: Hugging Face：Blog（RSS）
- **原文链接**: [https://huggingface.co/blog/build-small-hackathon/neurobait-adhd](https://huggingface.co/blog/build-small-hackathon/neurobait-adhd)
- **AIHOT 链接**: [https://aihot.virxact.com/items/cmq6gskkl08acsl5i3wx4hdde](https://aihot.virxact.com/items/cmq6gskkl08acsl5i3wx4hdde)
