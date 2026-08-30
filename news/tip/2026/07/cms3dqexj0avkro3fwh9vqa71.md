---
"title": "合成随机向量数据会误导 PostgreSQL 和 AlloyDB 的向量搜索性能测试"
"aihot_id": "cms3dqexj0avkro3fwh9vqa71"
"aihot_category": "tip"
"published_at": "2026-07-14T04:44:34.000Z"
"discovered_at": "2026-07-14T04:44:34.000Z"
"source_name": "Google AI：DEV 作者专属（RSS）"
"original_url": "https://dev.to/googleai/how-your-sample-data-impact-vector-tes\
  ts-in-postgresql-and-alloydb-211l"
"canonical_url": "https://aihot.virxact.com/items/cms3dqexj0avkro3fwh9vqa71"
"score": 67
"content_kind": "news"
---

# 合成随机向量数据会误导 PostgreSQL 和 AlloyDB 的向量搜索性能测试

Google AI 工程师指出，使用合成随机向量数据测试向量搜索性能可能导致误导性结果。对于 HNSW 索引，合成数据构建耗时 6，601，789 毫秒，而真实数据仅需 4，174，196 毫秒，速度快 1.5 倍，因为随机向量缺乏自然聚类结构，使图索引的节点连接更难建立。

- **来源**: Google AI：DEV 作者专属（RSS）
- **原文链接**: [https://dev.to/googleai/how-your-sample-data-impact-vector-tests-in-postgresql-and-alloydb-211l](https://dev.to/googleai/how-your-sample-data-impact-vector-tests-in-postgresql-and-alloydb-211l)
- **AIHOT 链接**: [https://aihot.virxact.com/items/cms3dqexj0avkro3fwh9vqa71](https://aihot.virxact.com/items/cms3dqexj0avkro3fwh9vqa71)
