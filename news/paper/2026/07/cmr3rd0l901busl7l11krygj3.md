---
"title": "VideoFlexTok：可变长度粗到细视频分词"
"aihot_id": "cmr3rd0l901busl7l11krygj3"
"aihot_category": "paper"
"published_at": "2026-07-02T00:00:00.000Z"
"discovered_at": "2026-07-02T17:08:06.316Z"
"source_name": "Apple Machine Learning Research（RSS）"
"original_url": "https://machinelearning.apple.com/research/videoflextok"
"canonical_url": "https://aihot.virxact.com/items/cmr3rd0l901busl7l11krygj3"
"score": 56
"content_kind": "news"
---

# VideoFlexTok：可变长度粗到细视频分词

VideoFlexTok提出一种可变长度token序列的视频表示方法，采用粗到细结构--首个token捕捉语义和运动等抽象信息，后续token添加精细细节，生成流解码器支持任意token数量的视频重建。相比传统3D网格分词，该结构允许根据下游需求调整token数，在相同预算下编码更长视频。在类别和文本到视频生成任务中，VideoFlexTok以1.1B参数（5.2B的1/5）达到可比生成质量（gFVD和ViCLIP Score）。训练一个处理10秒81帧视频的文本到视频模型仅需672个token，比同等3D网格分词器少8倍。

- **来源**: Apple Machine Learning Research（RSS）
- **原文链接**: [https://machinelearning.apple.com/research/videoflextok](https://machinelearning.apple.com/research/videoflextok)
- **AIHOT 链接**: [https://aihot.virxact.com/items/cmr3rd0l901busl7l11krygj3](https://aihot.virxact.com/items/cmr3rd0l901busl7l11krygj3)
