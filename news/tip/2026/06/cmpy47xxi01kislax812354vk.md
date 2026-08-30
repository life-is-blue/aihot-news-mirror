---
"title": "DharmaOCR 利用 DPO 将文本退化率降低 59.4%"
"aihot_id": "cmpy47xxi01kislax812354vk"
"aihot_category": "tip"
"published_at": "2026-06-03T12:55:11.000Z"
"discovered_at": "2026-06-03T13:41:46.548Z"
"source_name": "Hugging Face：Blog（RSS）"
"original_url": "https://huggingface.co/blog/Dharma-AI/direct-preference-optimi\
  zation-beyond-chatbots"
"canonical_url": "https://aihot.virxact.com/items/cmpy47xxi01kislax812354vk"
"score": 55
"content_kind": "news"
---

# DharmaOCR 利用 DPO 将文本退化率降低 59.4%

4月发布的DharmaOCR（结构化OCR模型）在巴西葡萄牙语文档提取任务中，使用直接偏好优化（DPO）作为监督微调（SFT）后的第二训练阶段。SFT无法直接惩罚文本退化（重复循环），而DPO以模型自身失败输出（退化循环）作为负样本进行偏好训练，使所有测试模型族的文本退化率平均降低59.4%，最高达87.6%（如Nanonets-OCR2-3B从1.61%降至0.20%）。传统DPO多用于聊天对齐，该工作将其扩展至客观的OCR任务，证明DPO可针对性修复特定失败模式。

- **来源**: Hugging Face：Blog（RSS）
- **原文链接**: [https://huggingface.co/blog/Dharma-AI/direct-preference-optimization-beyond-chatbots](https://huggingface.co/blog/Dharma-AI/direct-preference-optimization-beyond-chatbots)
- **AIHOT 链接**: [https://aihot.virxact.com/items/cmpy47xxi01kislax812354vk](https://aihot.virxact.com/items/cmpy47xxi01kislax812354vk)
