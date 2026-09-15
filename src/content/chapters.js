// 章节索引
import { prologue } from './ch0-prologue.js';
import { ch1 } from './ch1.js';
import { ch2 } from './ch2.js';
import { ch3 } from './ch3.js';
import { ch4 } from './ch4.js';
import { ch5 } from './ch5.js';
import { ch6 } from './ch6.js';
import { ch7 } from './ch7.js';
import { finale } from './ch8-finale.js';

export const chapters = { prologue, ch1, ch2, ch3, ch4, ch5, ch6, ch7, finale };

export const chapterOrder = [
  { id: 'prologue', title: '序章 · 满分之外' },
  { id: 'ch1', title: '第一章 · 我为什么不去' },
  { id: 'ch2', title: '第二章 · 这是谁的作业' },
  { id: 'ch3', title: '第三章 · 如果你不喜欢我' },
  { id: 'ch4', title: '第四章 · 第二名的影子' },
  { id: 'ch5', title: '第五章 · 一句「你真棒」' },
  { id: 'ch6', title: '第六章 · 未来不必一次决定' },
  { id: 'ch7', title: '第七章 · 并肩，不是绑在一起' },
  { id: 'finale', title: '终章 · 把自己的名字写上去' }
];
