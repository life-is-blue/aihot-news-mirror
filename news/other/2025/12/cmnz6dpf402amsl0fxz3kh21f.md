---
"title": "new paper： iREPA diffusion models are a renderer of their underlying
  representations. with this new…"
"aihot_id": "cmnz6dpf402amsl0fxz3kh21f"
"aihot_category": null
"published_at": "2025-12-15T23:28:48.000Z"
"discovered_at": "2025-12-15T23:28:48.000Z"
"source_name": "X：谢赛宁 (@sainingxie)"
"original_url": "https://x.com/sainingxie/status/2000709656491286870"
"canonical_url": "https://aihot.virxact.com/items/cmnz6dpf402amsl0fxz3kh21f"
"score": null
"content_kind": "news"
---

# new paper： iREPA diffusion models are a renderer of their underlying representations. with this new…

新论文：iREPA

扩散模型是其底层表征的渲染器。通过这种新设置，我们能更清楚地洞察这些表征的真正含义。Jas 开始了一场自发的探索，过去三个月我们学到了很多

ps. 这也是我们对一种新型线上"饮水机效应"的小实验，我很喜欢看到这种现象。让我们争论、讨论，然后用真正的努力将其转化为正经科学

【引用 @1jaskiratsingh】：！！️ 表征对生成很重要！但事实证明，我们对表征如何帮助生成的理解一直都是错的 ！！️

我们之前的想法：（我们错了）
❌ 更大的视觉编码器 → 更好的表征 → 更好的生成
❌ 更好的全局语义 → 更好的表征 → 更好的生成

结果发现：
🤯 在表征对齐方面，小 20 倍以上的视觉编码器可以达到与更大模型相似或更好的性能
🤯 线性探测准确率约 20%（全局语义的衡量指标）的视觉编码器可以胜过准确率 >80% 的编码器
🤯 即使是 SiFT 和 HoG 这类经典特征也能带来与现代大得多的视觉编码器相媲美的提升 ！！️

🚨 介绍：什么对表征对齐重要？全局信息还是空间结构 🚨

TL；DR：
✅ 更好的全局语义信息 ≠ 更好的生成
✅ 空间结构（而非全局语义）驱动表征的生成性能
✅ 我们提出 iREPA：仅需 3 行代码，强调空间结构迁移，并在 REPA、REPA-E、Meanflow、JiT 等方法上持续提高收敛速度

在 @AdobeResearch 的激动人心的项目，与 @xingjian_leng、@zongze_wu、@LiangZheng_06、@rzhang88、@elishechtman 和 @sainingxie 合作 🙏

对我来说这也是一次特别有趣且独特的经历，在项目的每一步我们都在证明自己的偏见是错误的 😆

还要大力感谢 @YouJiacheng、@ShumingHu 和 @gallabytes，他们在 X 上的评论开启了这一方向的探索 🫡

论文：https://arxiv.org/abs/2512.10794
代码：https://github.com/End2End-Diffusion/iREPA
项目页面：https://end2end-diffusion.github.io/irepa

更多细节见线程：【1/n】 🧵

- **来源**: X：谢赛宁 (@sainingxie)
- **原文链接**: [https://x.com/sainingxie/status/2000709656491286870](https://x.com/sainingxie/status/2000709656491286870)
- **AIHOT 链接**: [https://aihot.virxact.com/items/cmnz6dpf402amsl0fxz3kh21f](https://aihot.virxact.com/items/cmnz6dpf402amsl0fxz3kh21f)
