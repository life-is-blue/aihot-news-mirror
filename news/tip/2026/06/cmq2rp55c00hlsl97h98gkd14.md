---
"title": "五个实验室，五个心智：用小模型构建多模型金融剧情游戏"
"aihot_id": "cmq2rp55c00hlsl97h98gkd14"
"aihot_category": "tip"
"published_at": "2026-06-06T19:02:33.000Z"
"discovered_at": "2026-06-06T19:50:04.457Z"
"source_name": "Hugging Face：Blog（RSS）"
"original_url": "https://huggingface.co/blog/build-small-hackathon/thousand-token-wood-sim-v2"
"canonical_url": "https://aihot.virxact.com/items/cmq2rp55c00hlsl97h98gkd14"
"score": 66
"content_kind": "news"
---

# 五个实验室，五个心智：用小模型构建多模型金融剧情游戏

Thousand Token Wood v2使用四个不同实验室的小模型（gpt-oss-20b、MiniCPM3-4B、Nemotron-Mini-4B及微调Qwen 0.5B）驱动金融模拟游戏的智能体。核心发现是异构服务层摩擦在于vLLM 0.22.1需CUDA工具包，而非模型本身。通过容忍性JSON解析层，添加模型只需一条配置。信息隔离确保内幕标志不在提示词中，扫描测试验证无泄露。记忆用情绪摘要截断避免淹没。微调0.5B模型实现0%自成交、100%有效报价，真相防火墙零泄露。小模型是可靠格式生成器但不可靠推理器，可通过结构化、提示词和微调弥补。

- **来源**: Hugging Face：Blog（RSS）
- **原文链接**: [https://huggingface.co/blog/build-small-hackathon/thousand-token-wood-sim-v2](https://huggingface.co/blog/build-small-hackathon/thousand-token-wood-sim-v2)
- **AIHOT 链接**: [https://aihot.virxact.com/items/cmq2rp55c00hlsl97h98gkd14](https://aihot.virxact.com/items/cmq2rp55c00hlsl97h98gkd14)
