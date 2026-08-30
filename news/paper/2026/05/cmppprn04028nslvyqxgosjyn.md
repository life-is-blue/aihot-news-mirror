---
"title": "SGLang 团队与 AMD 合作，使 AMD InstinctTM MI355X GPU 的大规模 DeepSeek-R1
  分离式推理在总拥有成本上具备竞争力"
"aihot_id": "cmppprn04028nslvyqxgosjyn"
"aihot_category": "paper"
"published_at": "2026-05-27T16:00:00.000Z"
"discovered_at": "2026-05-28T16:34:57.702Z"
"source_name": "LMSYS：Blog（Chatbot Arena 团队）"
"original_url": "https://www.lmsys.org/blog/2026-05-28-mori"
"canonical_url": "https://aihot.virxact.com/items/cmppprn04028nslvyqxgosjyn"
"score": 69
"content_kind": "news"
---

# SGLang 团队与 AMD 合作，使 AMD InstinctTM MI355X GPU 的大规模 DeepSeek-R1 分离式推理在总拥有成本上具备竞争力

SGLang 与 AMD 团队合作，通过一系列全栈优化，使 AMD InstinctTM MI355X GPU 在运行 DeepSeek-R1 大模型推理时实现了极具竞争力的总拥有成本。在 129 tok/s/user 的交互延迟下，其成本为每百万 token $0.169，比 NVIDIA B200（Dynamo TRT-LLM）方案低 5%，比 B200（SGLang）方案低 40%。吞吐量方面，24 块 AMD GPU 达到 2，436 tok/s/GPU，比使用 48 块 GPU 的 B200 SGLang 方案每 GPU 吞吐量高 1.25 倍。核心优化包括：MoRI 混合 FP4/FP8 量化全到全通信、MoRI-IO KV Cache 后端、两批重叠与 SDMA、ROCm 上的 Specv2 MTP 以及 CPU 流式处理优化。

- **来源**: LMSYS：Blog（Chatbot Arena 团队）
- **原文链接**: [https://www.lmsys.org/blog/2026-05-28-mori](https://www.lmsys.org/blog/2026-05-28-mori)
- **AIHOT 链接**: [https://aihot.virxact.com/items/cmppprn04028nslvyqxgosjyn](https://aihot.virxact.com/items/cmppprn04028nslvyqxgosjyn)
