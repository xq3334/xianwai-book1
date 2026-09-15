// 章节索引 v2.0 - 基于新大纲的完整重写版本
import { prologue } from './ch0-prologue-v2.js';
import { chapter1 } from './ch1-v2.js';

// 暂时只导入已完成的章节，其余章节待补充
export const chapters = { 
  prologue, 
  ch1: chapter1,
  // ch2, ch3, ch4, ch5, ch6, ch7, finale 待续
};

export const chapterOrder = [
  { id: 'prologue', title: '序章：意外的任命' },
  { id: 'ch1', title: '第一章：林澈的边界' },
  { id: 'ch2', title: '第二章：许禾的沼泽' },
  { id: 'ch3', title: '第三章：顾言的刺' },
  { id: 'ch4', title: '第四章：重建的尝试' },
  { id: 'ch5', title: '第五章：沈老师的课题' },
  { id: 'ch6', title: '第六章：同盟的瓦解' },
  { id: 'ch7', title: '第七章：信任的崩塌与重建' },
  { id: 'ch8', title: '第八章：林澈的摊牌' },
  { id: 'finale', title: '终章：学期末的选择' }
];
