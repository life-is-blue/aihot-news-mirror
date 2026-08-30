---
"title": "一个Agent如何通过链式调用两个HuggingFace Space构建3D巴黎画廊"
"aihot_id": "cmq6l2wms09elsl5ipt8ah0ij"
"aihot_category": "tip"
"published_at": "2026-06-09T10:46:19.000Z"
"discovered_at": "2026-06-09T11:55:54.469Z"
"source_name": "Hugging Face：Blog（RSS）"
"original_url": "https://huggingface.co/blog/mishig/spaces-agents-md"
"canonical_url": "https://aihot.virxact.com/items/cmq6l2wms09elsl5ipt8ah0ij"
"score": 76
"content_kind": "news"
---

# 一个Agent如何通过链式调用两个HuggingFace Space构建3D巴黎画廊

一个编码Agent调用HuggingFace上的两个Space，从零构建了展示巴黎地标3D高斯散点图的交互式画廊。Agent先用ideogram-ai/ideogram4生成每个纪念碑的黑色背景图像，再通过VAST-AI/TripoSplat从单张图像重建3D高斯散点（.ply），自动完成坐标系校正、取景、压缩为.ksplat（体积缩小约3倍），并构建基于Three.js的滚动切换、拖拽旋转查看器，最终部署为静态Space。整个过程无需客户端库，每个Space通过`agents.md`暴露可调用API。

- **来源**: Hugging Face：Blog（RSS）
- **原文链接**: [https://huggingface.co/blog/mishig/spaces-agents-md](https://huggingface.co/blog/mishig/spaces-agents-md)
- **AIHOT 链接**: [https://aihot.virxact.com/items/cmq6l2wms09elsl5ipt8ah0ij](https://aihot.virxact.com/items/cmq6l2wms09elsl5ipt8ah0ij)
