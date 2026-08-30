---
"title": "将 GitHub CI 迁移到 Hugging Face Jobs"
"aihot_id": "cmq76im3h008vsl5w73krij6y"
"aihot_category": "tip"
"published_at": "2026-06-09T00:00:00.000Z"
"discovered_at": "2026-06-09T21:55:59.206Z"
"source_name": "Hugging Face：Blog（RSS）"
"original_url": "https://huggingface.co/blog/github-ci-hf-jobs"
"canonical_url": "https://aihot.virxact.com/items/cmq76im3h008vsl5w73krij6y"
"score": 74
"content_kind": "news"
---

# 将 GitHub CI 迁移到 Hugging Face Jobs

本文介绍了如何将 GitHub Actions 的 CI 作业迁移到 Hugging Face Jobs 上运行，以解决 GitHub Actions 速度慢、缺乏 GPU 支持等问题。通过使用 huggingface/jobs-actions 桥接，将 GitHub Actions 的 job 转为临时自托管运行器：GitHub App 监听 `workflow_job.queued` webhook，dispatcher Space 验证后启动对应硬件（CPU 或 t4-small、h200 等 GPU）的 HF Job，由 ephemeral runner 执行 CI 并上报结果。作者基于 Trackio 项目实际落地，CPU 作业时间减少约 30%，并新增了 GPU 测试套件。文章分步说明了复制 dispatcher Space、创建并安装 GitHub App、配置 webhook 和 HF_TOKEN 的具体步骤。

- **来源**: Hugging Face：Blog（RSS）
- **原文链接**: [https://huggingface.co/blog/github-ci-hf-jobs](https://huggingface.co/blog/github-ci-hf-jobs)
- **AIHOT 链接**: [https://aihot.virxact.com/items/cmq76im3h008vsl5w73krij6y](https://aihot.virxact.com/items/cmq76im3h008vsl5w73krij6y)
