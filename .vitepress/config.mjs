import { defineConfig } from 'vitepress'
import fs from 'node:fs'
import path from 'node:path'

const ROOT = path.resolve(process.cwd())
const MANUSCRIPT = 'manuscript'

// 卷 / 单元目录名 → 中文显示名（缺省则用目录名兜底）
const BOOK_NAMES = {
  'book-01-awakening': '第一卷：觉醒',
  'book-02-exploration': '第二卷：深渊',
}
const UNIT_NAMES = {
  'unit-01-set-theory': '单元一 · 集合论',
  'unit-02-number-theory': '单元二 · 数论',
  'unit-03-geometry': '单元三 · 几何',
  'unit-04-algebra': '单元四 · 代数',
  'unit-05-galois': '单元五 · 伽罗瓦理论',
  'unit-06-linear-algebra': '单元六 · 线性代数',
  'unit-07-matrix-analysis': '单元七 · 矩阵分析',
  'unit-08-lie-groups': '单元八 · 李群',
  'unit-09-real-analysis': '单元九 · 实变函数',
  'unit-10-complex-analysis': '单元十 · 复变函数',
}

const cn = (map, key) => map[key] || key

// 从章节文件里读取第一行 `# 标题` 作为侧边栏文字
function readTitle(absPath, fallback) {
  try {
    const first = fs.readFileSync(absPath, 'utf-8').split('\n').find((l) => l.trim().startsWith('#'))
    if (first) return first.replace(/^#+\s*/, '').trim()
  } catch {}
  return fallback
}

// 只列出直接子目录（已排序）
function subdirs(absDir) {
  if (!fs.existsSync(absDir)) return []
  return fs
    .readdirSync(absDir, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name)
    .sort()
}

// 扫描单元目录，自动生成章节列表（新增章节无需改配置）
function chapterItems(unitRel) {
  const abs = path.join(ROOT, unitRel)
  if (!fs.existsSync(abs)) return []
  return fs
    .readdirSync(abs)
    .filter((f) => /^chapter-\d+\.md$/.test(f))
    .sort()
    .map((f) => ({
      text: readTitle(path.join(abs, f), f.replace('.md', '')),
      link: `/${unitRel}/${f.replace(/\.md$/, '')}`,
    }))
}

// 扫描全部卷与单元，自动生成完整侧边栏
function buildSidebar() {
  const manuscriptAbs = path.join(ROOT, MANUSCRIPT)
  return subdirs(manuscriptAbs).map((book) => ({
    text: cn(BOOK_NAMES, book),
    items: subdirs(path.join(manuscriptAbs, book)).map((unit) => ({
      text: cn(UNIT_NAMES, unit),
      collapsed: false,
      items: chapterItems(`${MANUSCRIPT}/${book}/${unit}`),
    })),
  }))
}

// 找到全书第一章，作为"开始阅读"入口
function firstChapterLink() {
  const manuscriptAbs = path.join(ROOT, MANUSCRIPT)
  for (const book of subdirs(manuscriptAbs)) {
    for (const unit of subdirs(path.join(manuscriptAbs, book))) {
      const items = chapterItems(`${MANUSCRIPT}/${book}/${unit}`)
      if (items.length) return items[0].link
    }
  }
  return '/'
}

export default defineConfig({
  title: '数学认知世界',
  description: '一个以数学思维为超能力体系的类地球长篇系列小说。',
  lang: 'zh-CN',
  // 根域名托管（腾讯 EdgeOne Pages / Cloudflare Pages / Vercel）用 base '/'
  // 如需回到 Gitee Pages 子路径，设 GITEE_PAGES=1 走 '/math-world/'
  base: process.env.GITEE_PAGES ? '/math-world/' : '/',
  // 现代静态平台支持 URL 重写，开启 cleanUrls 去掉 .html 后缀（更美观）
  // Gitee Pages 纯静态不支持重写，回退时需关闭
  cleanUrls: !process.env.GITEE_PAGES,
  lastUpdated: true,

  // 排除内部设计文档与说明，不发布到网站
  srcExclude: ['README.md', 'docs/**', '**/node_modules/**'],

  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '开始阅读', link: firstChapterLink() },
    ],
    sidebar: {
      '/manuscript/': buildSidebar(),
    },
    outline: { label: '本章导航', level: [2, 3] },
    docFooter: { prev: '上一章', next: '下一章' },
    darkModeSwitchLabel: '外观',
    returnToTopLabel: '返回顶部',
    lastUpdatedText: '最后更新',
  },
})
