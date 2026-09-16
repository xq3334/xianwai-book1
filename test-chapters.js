// 快速测试所有章节是否能正常导入
import { chapters, chapterList } from './src/content/chapters-v2.js';

console.log('=== 章节加载测试 ===\n');

console.log('章节列表：');
chapterList.forEach((ch, index) => {
  console.log(`${index + 1}. ${ch.title} (ID: ${ch.id})`);
});

console.log('\n章节对象检查：');
Object.keys(chapters).forEach(key => {
  const chapter = chapters[key];
  if (chapter && chapter.nodes) {
    const nodeCount = Object.keys(chapter.nodes).length;
    console.log(`✓ ${key}: ${chapter.title || '无标题'} - ${nodeCount} 个节点`);
  } else if (chapter && chapter.title) {
    console.log(`✓ ${key}: ${chapter.title} - 旧格式`);
  } else {
    console.log(`✗ ${key}: 加载失败`);
  }
});

console.log('\n=== 测试完成 ===');
