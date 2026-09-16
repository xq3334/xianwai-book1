// 章节索引 v2（基于新大纲）
import { prologue } from './ch0-prologue-v2.js';
import { chapter1 } from './ch1-v2.js';
import { chapter2 } from './ch2-v2.js';
import { chapter3 } from './ch3-v2.js';
import { finale } from './ch-finale-v2.js';

export const chapters = {
  prologue,
  ch1: chapter1,
  ch2: chapter2,
  ch3: chapter3,
  finale
};

export const chapterList = [
  { id: 'prologue', title: '序章：意外的任命', chapter: prologue },
  { id: 'ch1', title: '第一章：林澈的边界', chapter: chapter1 },
  { id: 'ch2', title: '第二章：许禾的沼泽', chapter: chapter2 },
  { id: 'ch3', title: '第三章：顾言的刺', chapter: chapter3 },
  { id: 'finale', title: '终章：学期末的选择', chapter: finale }
];
