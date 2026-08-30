---
"title": "60倍速冷启动：将同级GPU视为权重服务器"
"aihot_id": "cmosrd1ac00v8slplayzv4fhm"
"aihot_category": "tip"
"published_at": "2026-05-03T16:00:00.000Z"
"discovered_at": "2026-05-05T15:03:06.400Z"
"source_name": "Runway：News（网页）"
"original_url": "https://runwayml.com/news/60x-faster-cold-starts-treating-peer\
  -gpus-as-weight-servers"
"canonical_url": "https://aihot.virxact.com/items/cmosrd1ac00v8slplayzv4fhm"
"score": 55
"content_kind": "news"
---

# 60倍速冷启动：将同级GPU视为权重服务器

Runway平台团队开发的NCCLBack系统，通过P2P权重传输将模型冷启动时间从数分钟缩短至数秒。其核心创新在于让新启动的GPU推理节点直接从集群内已加载权重的同级GPU获取模型参数，而非从云存储重复下载。该系统利用GPU互连（如InfiniBand、NVLink）高达200-400 Gbps的带宽，相比传统存储下载的2-10 Gbps实现了数量级提升。通过Redis协调与NCCL广播原语，NCCLBack确保了数据传输的效率和正确性，使得大规模集群部署新模型时，冷启动时间不随节点数量线性增长，基本保持恒定。

- **来源**: Runway：News（网页）
- **原文链接**: [https://runwayml.com/news/60x-faster-cold-starts-treating-peer-gpus-as-weight-servers](https://runwayml.com/news/60x-faster-cold-starts-treating-peer-gpus-as-weight-servers)
- **AIHOT 链接**: [https://aihot.virxact.com/items/cmosrd1ac00v8slplayzv4fhm](https://aihot.virxact.com/items/cmosrd1ac00v8slplayzv4fhm)
