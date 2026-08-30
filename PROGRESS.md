# 进度追踪 (PROGRESS.md)

- 目标：将 AIHOT API 镜像为独立、可审计的 Git Markdown 数据源，并作为普通 Git source 接入 git-library。
- 顺序：
  1. 任务0：基线与环境实测（已完成）
  2. 任务1：Item 解析契约与 Frontmatter Markdown 转换（TDD）
  3. 任务2：Snapshot/Changes 原子镜像与故障零污染（TDD）
  4. 任务3：GitHub Actions 自动同步、真实首轮/增量同步并建仓发布
  5. 任务4：git-library 接入普通 Git 镜像源与全门禁验收
- 最大风险：网络波动/限流导致同步中断、staging 替换非原子引发脏状态、git-library 跨仓库契约不兼容。
