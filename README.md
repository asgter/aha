# 数学认知世界

一个以数学思维为超能力体系的类地球长篇系列小说。

## 当前阶段
- 设计文档已完成
- 写作执行计划已完成
- 正在进行：系列圣经 + 单元 1 细纲 + 前三章初稿

## 关键文件
| 文件 | 用途 |
|------|------|
| docs/superpowers/specs/2026-07-12-mathematical-cognition-novel-design.md | 系列设计总蓝图 |
| docs/superpowers/plans/2026-07-12-novel-writing-execution-plan.md | 写作执行计划 |
| docs/novel/series-bible.md | 主角、世界观、境界速查 |
| docs/novel/unit-outlines/ | 每个单元的章节细纲 |
| docs/novel/research-notes/ | 每个数学分支的研究笔记 |
| manuscript/ | 正文手稿 |
| .vitepress/config.mjs | 网站配置（侧边栏按章节自动生成） |
| .github/workflows/deploy.yml | 推送到 main 自动部署到 GitHub Pages |

## 网站（VitePress 静态站点）
用 Markdown 写作，构建时生成 HTML，零数据库、零后端。

```bash
npm install          # 首次安装依赖
npm run docs:dev     # 本地预览（http://localhost:5173）
npm run docs:build   # 生成静态站点到 .vitepress/dist/
```

- 首页在根目录 `index.md`；正文直接读取 `manuscript/` 下的章节。
- 新增 `chapter-NNN.md` 后侧边栏自动更新，无需改配置。
- `docs/` 内部设计文档不会发布到网站（已在 srcExclude 排除）。
- 推送到 GitHub `main` 分支后，Actions 会自动构建并部署（需在仓库 Settings → Pages 中把 Source 设为 GitHub Actions）。

## 写作原则
1. 每章必须有一个"啊哈"时刻
2. 数学概念必须视觉化、直觉化
3. 单元相对独立，跨单元线索逐步释放
4. 先求写完，再求写好

## 写作进度

### 第一卷：觉醒
- [x] 项目结构搭建
- [x] 系列设计文档
- [x] 写作执行计划
- [ ] 系列圣经
- [ ] 单元 1 研究笔记
- [ ] 单元 1 章节细纲
- [ ] 单元 1 前三章初稿
- [ ] 单元 1 前三章修订
- [ ] 单元 1 完成
- [ ] 单元 2 启动
