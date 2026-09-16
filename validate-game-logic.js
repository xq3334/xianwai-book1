const fs = require('fs');
const path = require('path');
const contentDir = path.join(__dirname, 'src', 'content');
const chapters = fs.readdirSync(contentDir).filter(f => f.startsWith('ch') && f.endsWith('-v2.js'));

console.log('=== 游戏逻辑验证开始 ===\n');

const allIssues = [];

// 1. 检查选择节点的options和choices字段一致性
console.log('【1】检查选择节点字段一致性...');
let choiceFieldIssues = [];
for (const file of chapters) {
  const content = fs.readFileSync(path.join(contentDir, file), 'utf8');
  const matches = content.matchAll(/(\w+):\s*\{[^}]*type:\s*'choice'[^}]*\}/gs);
  
  for (const match of matches) {
    const nodeBlock = match[0];
    const nodeName = match[1];
    const hasOptions = /options:/.test(nodeBlock);
    const hasChoices = /choices:/.test(nodeBlock);
    
    if (hasOptions && hasChoices) {
      choiceFieldIssues.push(`${file} - ${nodeName}: 同时有options和choices`);
    } else if (!hasOptions && !hasChoices) {
      choiceFieldIssues.push(`${file} - ${nodeName}: 缺少options或choices`);
    }
  }
}
if (choiceFieldIssues.length > 0) {
  allIssues.push(...choiceFieldIssues);
  console.log(`  ❌ 发现 ${choiceFieldIssues.length} 个问题:`);
  choiceFieldIssues.forEach(i => console.log(`     ${i}`));
} else {
  console.log('  ✅ 选择节点字段一致性正常\n');
}

// 2. 检查所有next引用是否有效
console.log('【2】检查节点引用完整性...');
let brokenLinks = [];
for (const file of chapters) {
  const content = fs.readFileSync(path.join(contentDir, file), 'utf8');
  
  // 提取所有节点名
  const nodeNames = new Set();
  const nodeMatches = content.matchAll(/^\s+(\w+):\s*\{/gm);
  for (const match of nodeMatches) {
    nodeNames.add(match[1]);
  }
  
  // 提取所有next引用
  const nextRefs = [];
  const nextMatches = content.matchAll(/next:\s*['"](\w+)['"]/g);
  for (const match of nextMatches) {
    nextRefs.push(match[1]);
  }
  
  // 检查断链
  for (const ref of nextRefs) {
    if (ref !== 'END' && ref !== 'end' && !nodeNames.has(ref)) {
      brokenLinks.push(`${file} - 引用了不存在的节点: ${ref}`);
    }
  }
}
if (brokenLinks.length > 0) {
  allIssues.push(...brokenLinks);
  console.log(`  ❌ 发现 ${brokenLinks.length} 个断链:`);
  brokenLinks.slice(0, 10).forEach(i => console.log(`     ${i}`));
  if (brokenLinks.length > 10) console.log(`     ... 还有 ${brokenLinks.length - 10} 个`);
} else {
  console.log('  ✅ 所有节点引用有效\n');
}

// 3. 检查trait效果格式
console.log('【3】检查trait效果格式...');
let traitFormatIssues = [];
for (const file of chapters) {
  const content = fs.readFileSync(path.join(contentDir, file), 'utf8');
  
  // 检查是否使用了旧格式的effects
  const oldFormatMatches = content.matchAll(/effects:\s*\[[^\]]*\]/g);
  for (const match of oldFormatMatches) {
    const effectBlock = match[0];
    // 旧格式: effects: [{ trait: 'xxx', delta: 1 }]
    if (/trait:/.test(effectBlock)) {
      // 这是旧格式，但引擎支持，不算错误
    }
  }
  
  // 检查新格式
  const newFormatMatches = content.matchAll(/traits:\s*\{[^}]*\}/g);
  for (const match of newFormatMatches) {
    const traitBlock = match[0];
    // 新格式: traits: { autonomy: 2 }
    // 检查是否有非法的trait名称
    const validTraits = ['autonomy', 'boundary', 'ally', 'acceptance', 'repair', 'action'];
    const usedTraits = traitBlock.match(/(\w+):/g);
    if (usedTraits) {
      for (const traitMatch of usedTraits) {
        const traitName = traitMatch.replace(':', '');
        if (!validTraits.includes(traitName)) {
          traitFormatIssues.push(`${file} - 使用了无效的trait名称: ${traitName}`);
        }
      }
    }
  }
}
if (traitFormatIssues.length > 0) {
  allIssues.push(...traitFormatIssues);
  console.log(`  ❌ 发现 ${traitFormatIssues.length} 个格式问题:`);
  traitFormatIssues.forEach(i => console.log(`     ${i}`));
} else {
  console.log('  ✅ trait效果格式正常\n');
}

// 4. 检查章节连接性
console.log('【4】检查章节连接性...');
const chapterOrder = require('./src/content/chapters-v2.js').chapterOrder;
let chapterLinkIssues = [];
for (let i = 0; i < chapterOrder.length - 1; i++) {
  const currentChapter = chapterOrder[i];
  const nextChapterId = chapterOrder[i + 1].id;
  
  const file = `${currentChapter.id === 'prologue' ? 'ch0-prologue' : currentChapter.id.replace('chapter', 'ch')}-v2.js`;
  const content = fs.readFileSync(path.join(contentDir, file), 'utf8');
  
  // 检查是否有nextChapter声明
  const nextChapterMatch = content.match(/nextChapter:\s*['"]([^'"]+)['"]/);
  if (!nextChapterMatch) {
    chapterLinkIssues.push(`${file} - 缺少nextChapter声明`);
  } else if (nextChapterMatch[1] !== nextChapterId) {
    chapterLinkIssues.push(`${file} - nextChapter应为"${nextChapterId}"，实际为"${nextChapterMatch[1]}"`);
  }
}
if (chapterLinkIssues.length > 0) {
  allIssues.push(...chapterLinkIssues);
  console.log(`  ❌ 发现 ${chapterLinkIssues.length} 个连接问题:`);
  chapterLinkIssues.forEach(i => console.log(`     ${i}`));
} else {
  console.log('  ✅ 章节连接正常\n');
}

// 5. 检查终止节点
console.log('【5】检查终止节点...');
let endNodeIssues = [];
for (const file of chapters) {
  const content = fs.readFileSync(path.join(contentDir, file), 'utf8');
  
  // 检查是否有type: 'end'节点
  const hasEndNode = /type:\s*'end'/.test(content);
  if (!hasEndNode) {
    endNodeIssues.push(`${file} - 缺少type: 'end'终止节点`);
  }
}
if (endNodeIssues.length > 0) {
  allIssues.push(...endNodeIssues);
  console.log(`  ❌ 发现 ${endNodeIssues.length} 个问题:`);
  endNodeIssues.forEach(i => console.log(`     ${i}`));
} else {
  console.log('  ✅ 所有章节都有终止节点\n');
}

// 总结
console.log('\n=== 验证完成 ===');
if (allIssues.length === 0) {
  console.log('✅ 未发现逻辑问题，游戏应该可以正常运行！');
} else {
  console.log(`❌ 总共发现 ${allIssues.length} 个问题需要修复`);
}
