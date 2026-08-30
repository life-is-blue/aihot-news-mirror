---
"title": "全球首例 AI Agent 勒索攻击曝光，从漏洞利用到数据库加密全程自主完成"
"aihot_id": "cmr4w2clt05kasll56e54tanx"
"aihot_category": "industry"
"published_at": "2026-07-03T11:57:00.000Z"
"discovered_at": "2026-07-03T12:07:32.932Z"
"source_name": "IT之家（RSS）"
"original_url": "https://www.ithome.com/0/972/424.htm"
"canonical_url": "https://aihot.virxact.com/items/cmr4w2clt05kasll56e54tanx"
"score": 76
"content_kind": "news"
---

# 全球首例 AI Agent 勒索攻击曝光，从漏洞利用到数据库加密全程自主完成

安全厂商 Sysdig 首次记录到 AI Agent"JADEPUFFER"自动完成的勒索攻击。攻击利用暴露的 Langflow 服务漏洞 CVE-2025-3248 远程执行 Python 代码，随后自主收集 OpenAI、Anthropic、DeepSeek、Gemini 等 API 密钥及阿里云、腾讯云、华为云、AWS、Google Cloud、Azure 等云平台凭证，通过 MinIO 默认密码访问对象存储并创建每 30 分钟连接的计划任务。横向移动到 MySQL 和 Nacos 服务器，利用数据库 Root 账号及 Nacos 漏洞 CVE-2021-29441 获取管理权限，加密全部 1342 条配置数据，留下包含比特币钱包地址和 Proton Mail 的勒索信息。AI 在首次操作失败后 31 秒内自主完成错误分析与修复，累计执行超过 600 个攻击载荷，全程无需人类操作。

- **来源**: IT之家（RSS）
- **原文链接**: [https://www.ithome.com/0/972/424.htm](https://www.ithome.com/0/972/424.htm)
- **AIHOT 链接**: [https://aihot.virxact.com/items/cmr4w2clt05kasll56e54tanx](https://aihot.virxact.com/items/cmr4w2clt05kasll56e54tanx)
