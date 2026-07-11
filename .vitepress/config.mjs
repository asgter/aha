import { defineConfig } from 'vitepress'
import fs from 'node:fs'
import path from 'node:path'

const ROOT = path.resolve(process.cwd())
const UNIT_DIR = 'manuscript/book-01-awakening/unit-01-set-theory'

// 从章节文件里读取第一行 `# 标题` 作为侧边栏文字
function readTitle(absPath, fallback) {
  try {
    const first = fs.readFileSync(absPath, 'utf-8').split('\n').find((l) => l.trim().startsWith('#'))
    if (first) return first.replace(/^#+\s*/, '').trim()
  } catch {}
  return fallback
}

// 扫描单元目录，自动生成章节列表（新增章节无需改配置）
function chapterItems(unitDir) {
  const abs = path.join(ROOT, unitDir)
  if (!fs.existsSync(abs)) return []
  return fs
    .readdirSync(abs)
    .filter((f) => /^chapter-\d+\.md$/.test(f))
    .sort()
    .map((f) => ({
      text: readTitle(path.join(abs, f), f.replace('.md', '')),
      link: `/${unitDir}/${f.replace(/\.md$/, '')}`,
    }))
}

export default defineConfig({
  title: '数学认知世界',
  description: '一个以数学思维为超能力体系的类地球长篇系列小说。',
  lang: 'zh-CN',
  base: '/aha/', // 仓库名为 aha，站点部署在 https://asgter.github.io/aha/
  cleanUrls: true,
  lastUpdated: true,

  // 排除内部设计文档与说明，不发布到网站
  srcExclude: ['README.md', 'docs/**', '**/node_modules/**'],

  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '开始阅读', link: `/${UNIT_DIR}/chapter-001` },
    ],
    sidebar: {
      '/manuscript/': [
        {
          text: '第一卷：觉醒',
          items: [
            {
              text: '单元一 · 集合论',
              collapsed: false,
              items: chapterItems(UNIT_DIR),
            },
          ],
        },
      ],
    },
    outline: { label: '本章导航', level: [2, 3] },
    docFooter: { prev: '上一章', next: '下一章' },
    darkModeSwitchLabel: '外观',
    returnToTopLabel: '返回顶部',
    lastUpdatedText: '最后更新',
  },
})
