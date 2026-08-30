---
"title": "为什么MiniMax大语言模型无法说出\"马嘉祺\"？稀疏Token遗忘的内部调查"
"aihot_id": "cmpunu0g50004slbrmt8z83g7"
"aihot_category": "paper"
"published_at": "2026-05-25T16:00:00.000Z"
"discovered_at": "2026-05-25T16:00:00.000Z"
"source_name": "MiniMax：Blog（网页）"
"original_url": "https://www.minimax.io/blog/sparse-token-forgetting"
"canonical_url": "https://aihot.virxact.com/items/cmpunu0g50004slbrmt8z83g7"
"score": 59
"content_kind": "news"
---

# 为什么MiniMax大语言模型无法说出"马嘉祺"？稀疏Token遗忘的内部调查

MiniMax M2系列大语言模型在生成时无法输出稀疏token"嘉祺"（如"马嘉祺"）。内部调查排除tokenizer对齐问题，发现根因是后训练阶段对低频token的生成概率产生抑制。该问题已在后续模型更新中修复，并顺带解决了其他小语种混合问题。

- **来源**: MiniMax：Blog（网页）
- **原文链接**: [https://www.minimax.io/blog/sparse-token-forgetting](https://www.minimax.io/blog/sparse-token-forgetting)
- **AIHOT 链接**: [https://aihot.virxact.com/items/cmpunu0g50004slbrmt8z83g7](https://aihot.virxact.com/items/cmpunu0g50004slbrmt8z83g7)
