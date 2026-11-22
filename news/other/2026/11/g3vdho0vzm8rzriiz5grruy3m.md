---
"title": "用户实测用 MiniCPM5-2B 在 Mac 上本地跑通体检报告分析"
"aihot_id": "g3vdho0vzm8rzriiz5grruy3m"
"aihot_category": "opinion"
"published_at": "2026-11-22T11:15:31.000Z"
"discovered_at": "2026-11-22T21:06:44.543Z"
"source_name": "X：面壁智能 OpenBMB (@OpenBMB)"
"original_url": "https://x.com/OpenBMB/status/2124461770043785636"
"canonical_url": "https://aihot.news/items/g3vdho0vzm8rzriiz5grruy3m"
"score": 71
"content_kind": "news"
---

# 用户实测用 MiniCPM5-2B 在 Mac 上本地跑通体检报告分析

用户@cxjwin 分享在 Mac（M4 Pro、48GB）上用 Homebrew 装 llama.cpp 跑 minicpm5-2b、colima 起 Docker 本地运行开源项目 Mirobody 的实测：14 页 PDF 首次处理漏掉 3 页扫描版化验单，截图单独上传后 58 行化验数值逐项与原件对上，其中 20 行成功映射到 LOINC 标准编码，肌酐因名称歧义留空未猜。问超标指标时 2B 模型走 11 步找到全部 5 项箭头指标，但把一项在范围内的血糖误判为超标。接 Claude Code 时改用演示账号避免数据上传。Mirobody 由 Theta Health 以 Apache-2.0 开源，网页版和微信小程序也基于它。

- **来源**: X：面壁智能 OpenBMB (@OpenBMB)
- **原文链接**: [https://x.com/OpenBMB/status/2124461770043785636](https://x.com/OpenBMB/status/2124461770043785636)
- **AIHOT 链接**: [https://aihot.news/items/g3vdho0vzm8rzriiz5grruy3m](https://aihot.news/items/g3vdho0vzm8rzriiz5grruy3m)
