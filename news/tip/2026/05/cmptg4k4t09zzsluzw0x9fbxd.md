---
"title": "Step 3.7 Flash：可运行于桌面级设备的198B视觉模型"
"aihot_id": "cmptg4k4t09zzsluzw0x9fbxd"
"aihot_category": "tip"
"published_at": "2026-05-31T06:51:52.000Z"
"discovered_at": "2026-05-31T07:16:11.712Z"
"source_name": "X：阶跃星辰 StepFun (@StepFun_ai)"
"original_url": "https://x.com/StepFun_ai/status/2060977545672335816"
"canonical_url": "https://aihot.virxact.com/items/cmptg4k4t09zzsluzw0x9fbxd"
"score": 80
"content_kind": "news"
---

# Step 3.7 Flash：可运行于桌面级设备的198B视觉模型

阶跃星辰发布了Step 3.7 Flash，这是一款198B参数的视觉模型，旨在DGX Spark等桌面设备上运行。用户实测表明，128GB统一内存是运行门槛，模型占用约104GB。部署无需官方专用llama.cpp分支，主线版本即可。在上下文长度上存在权衡：启用视觉功能时，基于q8 KV cache的64K为上限；若要使用最高256K上下文，则需禁用视觉并切换至q4 KV cache，此时模型与缓存共占约114GB内存。该模型是推理模型，思考过程可能消耗大量max_tokens，需注意设置。

- **来源**: X：阶跃星辰 StepFun (@StepFun_ai)
- **原文链接**: [https://x.com/StepFun_ai/status/2060977545672335816](https://x.com/StepFun_ai/status/2060977545672335816)
- **AIHOT 链接**: [https://aihot.virxact.com/items/cmptg4k4t09zzsluzw0x9fbxd](https://aihot.virxact.com/items/cmptg4k4t09zzsluzw0x9fbxd)
