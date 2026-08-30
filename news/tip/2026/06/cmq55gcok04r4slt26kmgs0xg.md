---
"title": "Pakistan Notice Helper：一款面向本地安全问题的轻量 AI 工具"
"aihot_id": "cmq55gcok04r4slt26kmgs0xg"
"aihot_category": "tip"
"published_at": "2026-06-08T11:46:56.000Z"
"discovered_at": "2026-06-08T11:50:41.320Z"
"source_name": "Hugging Face：Blog（RSS）"
"original_url": "https://huggingface.co/blog/build-small-hackathon/building-pak\
  istan-notice-helper"
"canonical_url": "https://aihot.virxact.com/items/cmq55gcok04r4slt26kmgs0xg"
"score": 74
"content_kind": "news"
---

# Pakistan Notice Helper：一款面向本地安全问题的轻量 AI 工具

Pakistan Notice Helper 是一款安全工具，帮助巴基斯坦用户在点击链接、拨打电话、分享 OTP 或支付前识别可疑消息。它接受文本或截图输入，返回风险等级、简短解释、可见警示标志和安全下一步建议。工具支持英文和乌尔都语，乌尔都模式采用从右向左布局并全界面翻译。最终部署选用 Qwen3.5 4B Q8 模型（通过 llama.cpp + CUDA），在 10 个测试用例中通过了所有高风险诈骗和截图场景。此前曾测试 Qwen3.6 27B（质量高但成本高）和 MiniCPM-V 4.6 Q8（速度慢且不稳定），最终选择了精度、速度和成本平衡的 4B 模型。项目受限于 hackathon 的 32B 模型上限规则。

- **来源**: Hugging Face：Blog（RSS）
- **原文链接**: [https://huggingface.co/blog/build-small-hackathon/building-pakistan-notice-helper](https://huggingface.co/blog/build-small-hackathon/building-pakistan-notice-helper)
- **AIHOT 链接**: [https://aihot.virxact.com/items/cmq55gcok04r4slt26kmgs0xg](https://aihot.virxact.com/items/cmq55gcok04r4slt26kmgs0xg)
