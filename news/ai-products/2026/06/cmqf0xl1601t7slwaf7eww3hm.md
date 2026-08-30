---
"title": "Flash-KMeans：IO感知的精确K-Means，在GPU上比FAISS快200倍以上"
"aihot_id": "cmqf0xl1601t7slwaf7eww3hm"
"aihot_category": "ai-products"
"published_at": "2026-06-15T09:16:09.000Z"
"discovered_at": "2026-06-15T09:41:48.776Z"
"source_name": "MarkTechPost（RSS）"
"original_url": "https://www.marktechpost.com/2026/06/15/meet-flash-kmeans-an-i\
  o-aware-exact-k-means-that-runs-over-200x-faster-than-faiss-on-gpus"
"canonical_url": "https://aihot.virxact.com/items/cmqf0xl1601t7slwaf7eww3hm"
"score": 73
"content_kind": "news"
---

# Flash-KMeans：IO感知的精确K-Means，在GPU上比FAISS快200倍以上

UC Berkeley与UT Austin团队开源Flash-KMeans（Apache 2.0，`pip install flash-kmeans`），精确实现标准Lloyd's k-Means，通过重构GPU数据流而非改变数学或近似来提速。在NVIDIA H200上，端到端速度比最佳基线快17.9×，比cuML快33×，比FAISS快200×以上。其FlashAssign核避免物化完整N×K距离矩阵，将IO复杂度从O（NK）降至O（Nd+Kd），单核加速最高21.2×；Sort-Inverse Update核通过排序聚类ID减少原子争用，单核加速最高6.3×。支持out-of-core处理，在1B数据点、K=32768时单次迭代仅41.4s。适用于向量搜索索引、稀疏注意力路由、KV缓存压缩等在线场景。

- **来源**: MarkTechPost（RSS）
- **原文链接**: [https://www.marktechpost.com/2026/06/15/meet-flash-kmeans-an-io-aware-exact-k-means-that-runs-over-200x-faster-than-faiss-on-gpus](https://www.marktechpost.com/2026/06/15/meet-flash-kmeans-an-io-aware-exact-k-means-that-runs-over-200x-faster-than-faiss-on-gpus)
- **AIHOT 链接**: [https://aihot.virxact.com/items/cmqf0xl1601t7slwaf7eww3hm](https://aihot.virxact.com/items/cmqf0xl1601t7slwaf7eww3hm)
