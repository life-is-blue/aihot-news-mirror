---
"title": "无闲置GPU：Runway的研究计算管理"
"aihot_id": "cmoi4slfw00f0sle9vq5w8way"
"aihot_category": "tip"
"published_at": "2026-04-26T16:00:00.000Z"
"discovered_at": "2026-04-28T04:33:49.632Z"
"source_name": "Runway：News（网页）"
"original_url": "https://runwayml.com/news/no-idle-gpus-managing-research-compute-at-runway"
"canonical_url": "https://aihot.virxact.com/items/cmoi4slfw00f0sle9vq5w8way"
"score": 58
"content_kind": "news"
---

# 无闲置GPU：Runway的研究计算管理

Runway通过采用Kueue作为Kubernetes准入控制器，将GPU利用率提升超过20%，同时保障团队容量。其核心机制是为关键工作预留配额，并设立共享队列借用闲置容量，当配额所有者需要时通过抢占回收资源。该系统运行于昂贵的多租户GPU集群，支持多节点训练的拓扑感知调度和弹性工作负载。具体实现中，团队拥有专用预留队列，而默认队列作为共享机会池，可借用闲置配额运行可中断工作负载。当预留队列需资源时，Kueue基于优先级和运行时间抢占默认队列中的任务，实现资源高效管理。

- **来源**: Runway：News（网页）
- **原文链接**: [https://runwayml.com/news/no-idle-gpus-managing-research-compute-at-runway](https://runwayml.com/news/no-idle-gpus-managing-research-compute-at-runway)
- **AIHOT 链接**: [https://aihot.virxact.com/items/cmoi4slfw00f0sle9vq5w8way](https://aihot.virxact.com/items/cmoi4slfw00f0sle9vq5w8way)
