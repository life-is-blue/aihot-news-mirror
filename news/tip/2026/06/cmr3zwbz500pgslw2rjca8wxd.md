---
"title": "恶意CDN仍潜伏GitHub Pages，AI让情况恶化"
"aihot_id": "cmr3zwbz500pgslw2rjca8wxd"
"aihot_category": "tip"
"published_at": "2026-06-23T16:00:00.000Z"
"discovered_at": "2026-06-23T16:00:00.000Z"
"source_name": "Berkeley RDI：Blog（AI 安全与评测）"
"original_url": "https://rdi.berkeley.edu/blog/polyfill"
"canonical_url": "https://aihot.virxact.com/items/cmr3zwbz500pgslw2rjca8wxd"
"score": 82
"content_kind": "news"
---

# 恶意CDN仍潜伏GitHub Pages，AI让情况恶化

UC Berkeley研究人员发现，近2000个GitHub Pages站点（18000+页面，累计530K+星标）仍在加载来自polyfill.io及其关联恶意CDN的脚本。这些CDN由已被OFAC制裁的Funnull Technology Inc.（现更名Triad Nexus）运营，2024年被出售后开始条件性注入恶意载荷，劫持移动用户、跳转欺诈站点、伪造认证弹窗窃取凭证。扫描12000+站点确认786个加载polyfill.io，1191个加载其他Funnull CDN。更严峻的是，所有测试的大语言模型在生成前端代码时仍推荐这些被污染的CDN URL，包括CyC2018/CS-Notes（184K⭐）、microsoft/AirSim（18K⭐）等知名项目及多所大学课程页面。

- **来源**: Berkeley RDI：Blog（AI 安全与评测）
- **原文链接**: [https://rdi.berkeley.edu/blog/polyfill](https://rdi.berkeley.edu/blog/polyfill)
- **AIHOT 链接**: [https://aihot.virxact.com/items/cmr3zwbz500pgslw2rjca8wxd](https://aihot.virxact.com/items/cmr3zwbz500pgslw2rjca8wxd)
