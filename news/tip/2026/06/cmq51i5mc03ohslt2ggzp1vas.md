---
"title": "Agent 辅助开发，一站式打通 Qwen3-VL Android 端侧推理"
"aihot_id": "cmq51i5mc03ohslt2ggzp1vas"
"aihot_category": "tip"
"published_at": "2026-06-08T09:54:08.000Z"
"discovered_at": "2026-06-08T10:00:08.327Z"
"source_name": "公众号：通义实验室（千问）"
"original_url": "https://mp.weixin.qq.com/s?__biz=MzkxMTYyMTAzNA%3D%3D&mid=2247\
  501437&idx=1&sn=d6c6dcb853adbed4ea946711d478779a"
"canonical_url": "https://aihot.virxact.com/items/cmq51i5mc03ohslt2ggzp1vas"
"score": 68
"content_kind": "news"
---

# Agent 辅助开发，一站式打通 Qwen3-VL Android 端侧推理

通义实验室教程演示了如何用 Agent（Qoder）辅助完成 Qwen3-VL-2B 模型在 Android 端侧的全流程部署。操作包括：检查 JDK 21、NDK 27、CMake 3.18.1 等环境；创建 arm64-v8a 的 Native C++ 工程（minSdk 29、compileSdk 35）；通过 ModelScope CLI 下载约 1.4GB 的 MNN/Qwen3-VL-2B-Instruct-MNN 模型；编译开启 LLM 视觉支持（MNN_BUILD_LLM、LLM_SUPPORT_VISION）的 libMNN.so；构建 APK 并推送模型至手机私有目录。最终 App 提供图文推理页面，输出 MNN 版本（v3.5.0）、ABI 及推理指标。所有繁琐步骤均可由 Agent 自动执行。

- **来源**: 公众号：通义实验室（千问）
- **原文链接**: [https://mp.weixin.qq.com/s?__biz=MzkxMTYyMTAzNA%3D%3D&mid=2247501437&idx=1&sn=d6c6dcb853adbed4ea946711d478779a](https://mp.weixin.qq.com/s?__biz=MzkxMTYyMTAzNA%3D%3D&mid=2247501437&idx=1&sn=d6c6dcb853adbed4ea946711d478779a)
- **AIHOT 链接**: [https://aihot.virxact.com/items/cmq51i5mc03ohslt2ggzp1vas](https://aihot.virxact.com/items/cmq51i5mc03ohslt2ggzp1vas)
