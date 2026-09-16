# 游戏引擎修复清单

## 当前状态（2025年1月）

游戏**无法启动**，原因如下：

### 1. 导出名称不匹配（致命）
- `src/engine.js:3` 导入 `chapterOrder`
- `src/content/chapters-v2.js:26` 实际导出 `chapterList`
- **结果**：模块加载失败，游戏无法启动

### 2. 两套不兼容的章节格式并存
**格式A（序章～第三章）**：
```javascript
{
  type: 'dialogue',
  art: 'classroom',
  speaker: '林澈',
  text: '「……」',
  next: 'node2'
}
```

**格式B（第四章～第八章）**：
```javascript
{
  text: '叙述文本',
  bg: 'classroom-afternoon',
  chars: [
    { id: 'linche', img: 'linche-grin', pos: 'left' }
  ],
  dialog: { char: '林澈', text: '"……"' },
  narrator: true,
  inner: true,
  next: 'node2'
}
```

**当前引擎只支持格式A**，第四章开始无法渲染。

### 3. 章节终止标记不一致
- 格式A：`{ type: 'end', nextChapter: 'ch2' }`
- 格式B：`{ next: 'END_CHAPTER' }`
- 终章：`{ type: 'ending' }`（引擎期望 `next: 'ENDING:borrowed'`）

### 4. 美术资源引用错位
**用户提供的基准资源**（6个WebP）：
- `protagonist.webp` - 主角基础表情
- `linche-grin.webp` - 林澈笑容
- `guyan-sharp.webp` - 顾言犀利表情
- `xuhe-sorry.webp` - 许禾道歉表情
- `classroom-day.webp` - 教室白天场景
- `bedroom-night.webp` - 卧室夜晚场景

**第四～八章实际引用的ID**（不存在）：
- 人物：`teacher-shen`, `mother-worry`, `guyan-pause`, `linche-sulk`, `xuhe-try`, `guyan-soft`, 等20+变体
- 场景：`classroom-tense`, `classroom-afternoon`, `counseling-room`, `rooftop-day`, `home-night`, 等15+场景

---

## 修复方案

### 方案A：统一为格式A（推荐）
**优点**：引擎已完整实现，立即可用  
**工作量**：改写ch4-8共2682行内容

**步骤**：
1. 修复 `chapters-v2.js` 导出名为 `chapterOrder`
2. 将ch4-8改写为格式A：
   - `text + bg + chars` → `type: 'dialogue', art: ..., speaker: ..., text: ...`
   - `narrator: true` → `speaker: ''`
   - `dialog: {char, text}` → `speaker: char, text: text`
   - `next: 'END_CHAPTER'` → `type: 'end', nextChapter: 'ch5'`
3. 终章改为 `type: 'end'` 或 `next: 'ENDING:borrowed'`
4. 资源映射：将20+角色ID映射到6个基准图

### 方案B：扩展引擎支持格式B
**优点**：保留ch4-8现有内容  
**工作量**：修改引擎6个文件

**步骤**：
1. 修复 `chapters-v2.js` 导出名
2. 扩展 `engine.js` 处理格式B节点
3. 扩展 `stage.js` 支持 `chars[]` 多角色同屏
4. 扩展 `dialogue.js` 区分 `narrator/inner/dialog`
5. 处理 `END_CHAPTER` 和 `type: 'ending'`
6. 资源映射：同方案A

---

## 执行决策

**采用方案A**，理由：
1. 引擎已完整，改内容比改引擎风险低
2. 格式A更简洁，ch4-8用格式B写得过于冗长
3. 用户明确要求"按照原本的几张基础图片固定下来"，说明不需要复杂的多角色同屏系统

---

## 立即修复步骤

### Step 1: 修复致命导出错误（1分钟）
```javascript
// src/content/chapters-v2.js:26
export const chapterOrder = [  // 改名
  { id: 'prologue', module: prologue },
  // ...
];
```

### Step 2: 建立资源映射表（5分钟）
创建 `src/art/fallback.js`，将所有不存在的ID映射到6个基准图。

### Step 3: 改写第四章（示例）
**原格式B**：
```javascript
start: {
  text: '第二天，教室里。',
  next: 'awkward_silence'
},
awkward_silence: {
  bg: 'classroom-tense',
  text: '小组四人都在座位上，但没有人说话。',
  chars: [
    { id: 'linche', img: 'linche-sulk', pos: 'left' },
    { id: 'xuhe', img: 'xuhe-sorry', pos: 'right' }
  ],
  next: 'observe_tension'
}
```

**改为格式A**：
```javascript
start: {
  type: 'dialogue',
  art: 'classroom-day',
  speaker: '',
  text: '第二天，教室里。小组四人都在座位上，但没有人说话。',
  next: 'observe_tension'
}
```

### Step 4: 改写章节终止
```javascript
// 每章最后
end: { 
  type: 'end', 
  nextChapter: 'ch5'  // 或 'finale'
}
```

### Step 5: 改写终章结局判定
```javascript
// ch-finale-v2.js
ending_judge: {
  type: 'dialogue',
  art: 'classroom',
  speaker: '',
  text: '（根据你的选择，故事将走向不同的结局……）',
  next: 'ENDING:borrowed'  // 或其他结局ID
}
```

---

## 预计工作量

- 修复导出名：1分钟
- 资源映射表：5分钟
- 改写ch4：30分钟（482行 → ~120行）
- 改写ch5：40分钟（442行 → ~150行）
- 改写ch6：35分钟（487行 → ~140行）
- 改写ch7：40分钟（573行 → ~160行）
- 改写ch8：40分钟（589行 → ~170行）
- 改写终章：15分钟（184行 → ~80行）
- 测试通关：30分钟

**总计**：约4小时

---

## 当前行动

用户要求"按照原本的几张基础图片固定下来"，我将：

1. **立即修复致命错误**（导出名）
2. **创建资源映射**（所有角色/场景ID → 6个基准WebP）
3. **询问用户**是否立即开始改写ch4-8，还是先测试序章～第三章能否正常运行