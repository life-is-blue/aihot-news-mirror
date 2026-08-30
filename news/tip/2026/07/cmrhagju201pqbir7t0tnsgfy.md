---
"title": "xAI Grok Build CLI 网络流量分析：上传仓库全部文件及 git 历史"
"aihot_id": "cmrhagju201pqbir7t0tnsgfy"
"aihot_category": "tip"
"published_at": "2026-07-12T03:59:09.632Z"
"discovered_at": "2026-07-12T04:23:45.100Z"
"source_name": "Hacker News 热门（buzzing.cc 中文翻译）"
"original_url": "https://gist.github.com/cereblab/dc9a40bc26120f4540e4e09b75ffb547"
"canonical_url": "https://aihot.virxact.com/items/cmrhagju201pqbir7t0tnsgfy"
"score": 74
"content_kind": "news"
---

# xAI Grok Build CLI 网络流量分析：上传仓库全部文件及 git 历史

对 xAI 官方 Grok Build 编码 CLI（grok 0.2.93）的网络流量分析显示，该工具在消费者登录后会向 xAI 发送三类数据：一是它读取的文件内容（包括 .env 密钥文件）以明文形式通过 POST /v1/responses 传输，并同时打包成 session_state 存档通过 POST /v1/storage 上传并获 HTTP 200 确认；二是整个仓库的全部文件内容及 git 历史，独立于 AI 智能体实际读取的文件--即使提示"不要读取任何文件"，Grok 仍将整个仓库作为 git bundle 上传至 Google Cloud Storage 的 grok-code-session-traces 存储桶；三是该上传机制默认开启，且关闭"改进模型"设置不会禁用（/v1/settings 仍返回 trace_upload_enabled： true）。在 12 GB 仓库测试中，/v1/storage 传输了 5.10 GiB 数据，而模型对话通道仅传输 192 KB，比例约 27，800 倍。分析未证明 xAI 使用这些数据进行训练，但证实了数据被传输、接收并存储。

- **来源**: Hacker News 热门（buzzing.cc 中文翻译）
- **原文链接**: [https://gist.github.com/cereblab/dc9a40bc26120f4540e4e09b75ffb547](https://gist.github.com/cereblab/dc9a40bc26120f4540e4e09b75ffb547)
- **AIHOT 链接**: [https://aihot.virxact.com/items/cmrhagju201pqbir7t0tnsgfy](https://aihot.virxact.com/items/cmrhagju201pqbir7t0tnsgfy)
