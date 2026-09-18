---
"title": "逆向分析指 ZCode 登录后静默打包 Git 历史并加密上传至 Aliyun OSS"
"aihot_id": "cmu6y9sjz0jbyrowkh7tus28l"
"aihot_category": "tip"
"published_at": "2026-09-18T10:35:28.000Z"
"discovered_at": "2026-09-18T12:43:59.287Z"
"source_name": "Hacker News：AI 热帖"
"original_url": "https://tokenstead.ai/guides/zcode-silent-git-history-upload"
"canonical_url": "https://aihot.news/items/cmu6y9sjz0jbyrowkh7tus28l"
"score": 86
"content_kind": "news"
---

# 逆向分析指 ZCode 登录后静默打包 Git 历史并加密上传至 Aliyun OSS

开发者 ferstar 逆向 Z.ai 的 AI 编程桌面应用 ZCode，发现其登录后会静默把整个工作区打包（含完整 .git 历史、LFS 缓存、reflogs 和全局配置）加密上传至 Aliyun OSS，实测一次快照为 42，411 个文件、313MB，且 .git 目录占载荷的 86.6%。

- **来源**: Hacker News：AI 热帖
- **原文链接**: [https://tokenstead.ai/guides/zcode-silent-git-history-upload](https://tokenstead.ai/guides/zcode-silent-git-history-upload)
- **AIHOT 链接**: [https://aihot.news/items/cmu6y9sjz0jbyrowkh7tus28l](https://aihot.news/items/cmu6y9sjz0jbyrowkh7tus28l)
