---
"title": "使用Gradio后端支持任意自定义前端"
"aihot_id": "cmoegbhaj008uslxxbx90v5om"
"aihot_category": null
"published_at": "2026-04-01T00:00:00.000Z"
"discovered_at": "2026-04-01T00:00:00.000Z"
"source_name": "Hugging Face：Blog（RSS）"
"original_url": "https://huggingface.co/blog/introducing-gradio-server"
"canonical_url": "https://aihot.virxact.com/items/cmoegbhaj008uslxxbx90v5om"
"score": 83
"content_kind": "news"
---

# 使用Gradio后端支持任意自定义前端

Gradio推出的`gradio.Server`组件，允许开发者完全使用React、Svelte或原生HTML/JS等自定义前端框架构建应用，同时无缝继承Grio的后端基础设施优势。该组件基于FastAPI扩展，集成了Gradio的队列系统、并发控制、SSE流式传输及`gradio_client`兼容性。以"Text Behind Image"应用为例，其后端仅需约50行Python代码，通过`@app.api（）`装饰器封装函数，即可自动管理请求队列与GPU并发，并能在Hugging Face Spaces上获得ZeroGPU支持，极大简化了复杂全栈Web应用在Spaces上的部署流程。

- **来源**: Hugging Face：Blog（RSS）
- **原文链接**: [https://huggingface.co/blog/introducing-gradio-server](https://huggingface.co/blog/introducing-gradio-server)
- **AIHOT 链接**: [https://aihot.virxact.com/items/cmoegbhaj008uslxxbx90v5om](https://aihot.virxact.com/items/cmoegbhaj008uslxxbx90v5om)
