# 数学认知世界长篇系列：写作执行计划

> **Goal:** 将设计文档转化为可执行的长篇系列小说写作流程，完成项目结构搭建、资料整理、单元细纲和前三章初稿，并建立可持续的每日写作工作流。

**Architecture：** 采用"设计文档 → 单元细纲 → 逐章写作 → 即时修订"的流水线。手稿按卷/单元分文件存放，研究笔记与正稿分离，每个单元有独立的数学概念清单和遗迹谜题设计表。

---

## 文件结构规划

```
D:/Projects/user/math-world/
├── docs/
│   ├── superpowers/
│   │   ├── specs/2026-07-12-mathematical-cognition-novel-design.md  ← 已存在
│   │   └── plans/2026-07-12-novel-writing-execution-plan.md         ← 本文档
│   └── novel/
│       ├── series-bible.md              # 主角、世界观、境界速查
│       ├── unit-outlines/               # 每个单元的章节细纲
│       │   ├── unit-01-set-theory-outline.md
│       │   ├── unit-02-number-theory-outline.md
│       │   └── ...
│       ├── research-notes/              # 每个分支的研究笔记
│       │   ├── 01-set-theory-notes.md
│       │   ├── 02-number-theory-notes.md
│       │   └── ...
│       └── character-notes/             # 人物小传、前世档案
│           ├── protagonist.md
│           └── previous-lives.md
├── manuscript/                          # 正文
│   ├── book-01-awakening/
│   │   ├── unit-01-set-theory/
│   │   │   ├── chapter-001.md
│   │   │   └── ...
│   │   ├── unit-02-number-theory/
│   │   └── ...
│   ├── book-02-abyss/
│   └── ...
└── README.md                            # 项目说明、当前进度
```

---

## Task 1：搭建项目目录结构

**Files:**
- Create: README.md
- Create: docs/novel/series-bible.md
- Create: docs/novel/unit-outlines/.gitkeep
- Create: docs/novel/research-notes/.gitkeep
- Create: docs/novel/character-notes/.gitkeep
- Create: manuscript/book-01-awakening/unit-01-set-theory/.gitkeep

- [ ] **Step 1：创建所有目录和 README**

新建 `README.md`：

```markdown
# 数学认知世界

一个以数学思维为超能力体系的类地球长篇系列小说。

## 当前阶段
- 设计文档已完成
- 正在准备单元细纲与前三章初稿

## 关键文件
- 设计文档：docs/superpowers/specs/2026-07-12-mathematical-cognition-novel-design.md
- 写作计划：docs/superpowers/plans/2026-07-12-novel-writing-execution-plan.md
- 系列圣经：docs/novel/series-bible.md
- 单元细纲：docs/novel/unit-outlines/
- 研究笔记：docs/novel/research-notes/
- 正文手稿：manuscript/

## 写作原则
1. 每章必须有一个"啊哈"时刻
2. 数学概念必须视觉化、直觉化
3. 单元相对独立，跨单元线索逐步释放
4. 先求写完，再求写好
```

- [ ] **Step 2：初始化 Git 仓库（可选）**

```bash
cd D:/Projects/user/math-world
git init
git add README.md docs/ manuscript/
git commit -m "chore: initialize novel project structure"
```

---

## Task 2：编写系列圣经

**Files:**
- Create: docs/novel/series-bible.md

- [ ] **Step 1：撰写系列圣经**

在 `docs/novel/series-bible.md` 中写入完整的主角档案、世界观速查、境界速查、七位前世关键词。内容引用设计文档的第三、四、七章。

- [ ] **Step 2：提交**

```bash
git add docs/novel/series-bible.md
git commit -m "docs: add series bible"
```

---

## Task 3：建立研究笔记模板

**Files:**
- Create: docs/novel/research-notes/01-set-theory-notes.md
- Create: docs/novel/research-notes/02-number-theory-notes.md (placeholder)

- [ ] **Step 1：撰写单元 1 研究笔记**

```markdown
# 单元 1 研究笔记：数学公理与集合论

## 核心目标
让读者通过主角的眼睛"看见"：
1. 公理不是真理，是选择
2. 集合论的诞生与危机（罗素悖论）
3. 无穷有不同大小（对角线论证）
4. 选择公理的直觉与影响

## 数学概念清单

### 公理系统
- 公理 = 不加证明的初始假设
- 一致性：不会推出矛盾
- 完备性：所有真命题都可证
- 欧几里得第五公设的独立性与非欧几何的发现

### 集合论基础
- 集合、元素、子集、幂集
- 无穷集合：可数无穷 vs 不可数无穷
- 罗素悖论：包含所有不包含自身集合的集合

### 康托尔对角线论证
- 实数不能与自然数一一对应
- 构造对角线数的方法
- 连续统假设

### 选择公理
- 从无限族各取一个元素
- 巴拿赫-塔斯基分球悖论的直觉
- 接受 vs 不接受选择公理的数学差异

## 可视化想法
- 公理系统：大楼地基——地基下面是选择，不是岩石
- 罗素悖论：咬自己尾巴的蛇，或者一面照自己的镜子
- 对角线论证：一张无限长的表，总能构造出表外的东西
- 选择公理：无限个盒子，闭着眼各拿一件

## 遗迹设计
- 场景：旧书店地下密室
- 结构：无数扇门，每扇门通向一个"公理选择"的数学宇宙
- 锁的本质：不是找正确的门——是意识到不存在正确的门，只有"你选的门"

## 参考读物
- 欧几里得《几何原本》第五公设部分
- 罗素《数学原理》序言
- 康托尔集论相关论文
- 任意一本数学基础/集合论入门教材
```

- [ ] **Step 2：提交**

```bash
git add docs/novel/research-notes/
git commit -m "docs: add unit 1 research notes"
```

---

## Task 4：编写单元 1 章节细纲

**Files:**
- Create: docs/novel/unit-outlines/unit-01-set-theory-outline.md

- [ ] **Step 1：撰写单元 1 细纲**

格式：每个概念块 → 对应章节 → 每章的场景 + 数学直觉目标 + "啊哈"目标。

```markdown
# 单元 1 细纲：数学公理与集合论

## 单元信息
- 锚点概念：选择公理与康托尔对角线论证
- 对应境界：第一境·透视者
- 真相碎片：七本书第一本位置的坐标 + 留言"所有大厦都建在沙滩上"

## 概念块 1.1：公理系统（约3章）

### 第1章：多出来的一行
- 场景：旧书店，主角发现批注《几何原本》
- 异常：某页多出一行不该存在的批注
- 结尾：书页发热，留下模糊坐标
- 目标：建立主角形象，制造第一个认知异常

### 第2章：批注人
- 场景：主角调查书的来源、分析七种字迹
- 目标：引入"七个前世"的暗线，扩大神秘感

### 第3章：沙滩上的大厦
- 回到那行批注，主角意识到它不是推导，是"被加进去的前提"
- "啊哈"：公理不是真理，是起点
- 境界突破萌芽：第一境·透视者

## 概念块 1.2：集合与罗素悖论（约2章）

### 第4章：地下密室
- 主角找到旧书店地下密室，无数抽屉
- 每个抽屉是一个集合的定义

### 第5章：咬自己尾巴的蛇
- 一个特殊抽屉："所有不包含自身的集合的集合"
- 主角进入悖论循环，思维"打结"
- "啊哈"：有些东西不能被容纳在系统内
- 第一次认知拓扑变换

## 概念块 1.3：对角线论证（约2章）

### 第6章：无限长的表
- 密室里一张无限长的实数表
- 主角发现总可以构造表外新数
- "啊哈"：无穷也有大小

### 第7章：可数与不可数
- 主角理解无穷的层次
- 可数无穷（自然数）vs 不可数无穷（实数）

## 概念块 1.4：选择公理（约2章）

### 第8章：无限个盒子
- 无限多个非空盒子，必须各取一件
- 但没有取法规则
- "啊哈"：选择在无穷下不显然

### 第9章：选择即力量
- 主角做出选择——不是正确的选择，是他的选择
- 密室最终的门打开
- 境界正式突破至第一境：透视者
- 获得第一本书坐标和留言

## 单元结尾钩子
"所有大厦都建在沙滩上"——数学不是永恒真理，是一系列选择之上的建筑。
主角的追寻正式开始。
```

- [ ] **Step 2：提交**

```bash
git add docs/novel/unit-outlines/unit-01-set-theory-outline.md
git commit -m "docs: add unit 1 chapter outline"
```

---

## Task 5：撰写前三章初稿

**Files:**
- Create: manuscript/book-01-awakening/unit-01-set-theory/chapter-001.md
- Create: manuscript/book-01-awakening/unit-01-set-theory/chapter-002.md
- Create: manuscript/book-01-awakening/unit-01-set-theory/chapter-003.md

- [ ] **Step 1：第 1 章——多出来的一行**

场景：旧书店 · 目标：建主角形象 + 制造异常

- [ ] **Step 2：第 2 章——七种笔迹**

场景：调查书源 · 目标：引入多层字迹伏笔

- [ ] **Step 3：第 3 章——沙滩上的大厦**

场景：解读批注 · 目标：第一个"啊哈"——公理即选择

- [ ] **Step 4：提交**

```bash
git add manuscript/book-01-awakening/unit-01-set-theory/chapter-00{1,2,3}.md
git commit -m "feat: add unit 1 chapters 1-3 first draft"
```

---

## Task 6：修订前三章

**Files:**
- Modify: manuscript/book-01-awakening/unit-01-set-theory/chapter-001.md
- Modify: manuscript/book-01-awakening/unit-01-set-theory/chapter-002.md
- Modify: manuscript/book-01-awakening/unit-01-set-theory/chapter-003.md

检查清单：
- [ ] 主角形象一致（低调、研究型、不张扬）
- [ ] 数学概念是否画面化（不是解释定义，是展示画面）
- [ ] 每章有"啊哈"或悬念推进
- [ ] 无过度解释
- [ ] 第三章的"啊哈"有情感冲击力

---

## Task 7：建立每日写作工作流

**Files:**
- Create: docs/novel/daily-writing-template.md

```markdown
# 每日写作模板

## 写作前（10分钟）
- [ ] 查看今日目标概念块
- [ ] 复习研究笔记
- [ ] 明确本章的"啊哈"是什么

## 写作中（60-90分钟）
- [ ] 按细纲写出正文
- [ ] 不回头改，先写完

## 收尾（15分钟）
- [ ] 记录本章核心概念一句话
- [ ] 记录明天要接的点
- [ ] Git commit
```

单章检查清单：

- [ ] 本章教的数学概念是什么？可视化画面是什么？
- [ ] 主角如何"看见"它？读者能不用公式就理解吗？
- [ ] 开头有场景感？中间有认知挣扎？结尾有"啊哈"或悬念？
- [ ] 有无过度解释？术语是否在需要时才出现？

---

## Task 8：建立进度跟踪

**Files:**
- Modify: README.md

在 README 末尾添加进度跟踪章节：

```markdown
## 写作进度

### 第一卷：觉醒
- [x] 项目结构搭建
- [x] 系列圣经
- [x] 单元 1 细纲
- [x] 单元 1 研究笔记
- [ ] 单元 1 前三章初稿
- [ ] 单元 1 前三章修订
- [ ] 单元 1 完成
- [ ] 单元 2 启动
```

---

## 自我审查

1. **设计覆盖**：Task 2 覆盖世界观/主角/境界，Task 3-4 覆盖单元大纲，Task 5-6 覆盖开篇，Task 7 覆盖写作原则和习惯
2. **占位符**：主角姓名标注"待定"，非 TBD 而是创作留白
3. **一致性**：境界名、单元编号、文件路径与设计文档一致

---

## 执行方式

**计划已保存。** 建议执行方式：

- Task 1-4（项目搭建到单元细纲）可由我协助完成
- Task 5-8（实际写作）由作者主导，我协助审阅和扩展后续单元细纲

我现在就可以帮你执行 Task 1：创建项目目录和 README。