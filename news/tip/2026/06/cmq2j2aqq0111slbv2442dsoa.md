---
"title": "Job Searcher"
"aihot_id": "cmq2j2aqq0111slbv2442dsoa"
"aihot_category": "tip"
"published_at": "2026-06-06T15:36:51.000Z"
"discovered_at": "2026-06-06T15:48:22.156Z"
"source_name": "Hugging Face：Blog（RSS）"
"original_url": "https://huggingface.co/blog/build-small-hackathon/job-search-blog"
"canonical_url": "https://aihot.virxact.com/items/cmq2j2aqq0111slbv2442dsoa"
"score": 65
"content_kind": "news"
---

# Job Searcher

Hugging Face 发布 Job Searcher，一个基于 AI 的求职搜索工具。用户上传简历并设定偏好后，系统使用教师模型 DeepSeek V4 Pro 生成 LinkedIn 搜索查询，通过 JobSpy 抓取职位，再对学生模型 Qwen3-8B（8B 参数）进行 LoRA 微调，对每个职位从技能匹配、经验相关性、教育背景、行业领域契合度和资历对齐五个维度给出评分和推理。训练在 Modal 平台单张 A100 上完成。推理部署于 Hugging Face ZeroGPU Space，使用 llama.cpp 实现流式输出。项目开源。

- **来源**: Hugging Face：Blog（RSS）
- **原文链接**: [https://huggingface.co/blog/build-small-hackathon/job-search-blog](https://huggingface.co/blog/build-small-hackathon/job-search-blog)
- **AIHOT 链接**: [https://aihot.virxact.com/items/cmq2j2aqq0111slbv2442dsoa](https://aihot.virxact.com/items/cmq2j2aqq0111slbv2442dsoa)
