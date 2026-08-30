---
"title": "Redis 数组类型交互式体验平台上线"
"aihot_id": "cmorgo5s100jtslahmhynshi0"
"aihot_category": "tip"
"published_at": "2026-05-04T15:53:57.000Z"
"discovered_at": "2026-05-04T17:16:08.020Z"
"source_name": "Simon Willison 博客"
"original_url": "https://simonwillison.net/2026/May/4/redis-array"
"canonical_url": "https://aihot.virxact.com/items/cmorgo5s100jtslahmhynshi0"
"score": 75
"content_kind": "news"
---

# Redis 数组类型交互式体验平台上线

Redis创始人Salvatore Sanfilippo提交了为Redis新增数组数据类型的PR，引入了包括ARCOUNT、ARDEL、ARGREP等在内的18个新命令。其中最引人注目的是ARGREP命令，它利用新集成的TRE正则表达式库，可直接在服务器端对数组值进行正则搜索。目前该功能已在一个分支中实现，开发者Simon Willison借助Claude Code构建了一个交互式在线沙盒，通过运行在浏览器中的WASM版Redis子集，供用户体验这些新命令。Salvatore还撰文详细介绍了在AI辅助下开发此功能的历程。

- **来源**: Simon Willison 博客
- **原文链接**: [https://simonwillison.net/2026/May/4/redis-array](https://simonwillison.net/2026/May/4/redis-array)
- **AIHOT 链接**: [https://aihot.virxact.com/items/cmorgo5s100jtslahmhynshi0](https://aihot.virxact.com/items/cmorgo5s100jtslahmhynshi0)
