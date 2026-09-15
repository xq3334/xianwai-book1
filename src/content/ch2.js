// 第二章 · 这是谁的作业（课题分离）
export const ch2 = {
  title: '第二章 · 这是谁的作业',
  nodes: {
    start: { type: 'dialogue', art: 'entangled', speaker: '', text: '第五周。提案展第一次组内会议，定在周三放学后。到场的只有你和许禾。', next: 'n2' },

    n2: { type: 'dialogue', art: 'entangled', speaker: '许禾', text: '「林澈说他有事……顾言说他不来开会，让我们定完发给他。」许禾把手机屏幕转向你，声音越说越小。', next: 'n3' },

    n3: { type: 'dialogue', art: 'entangled', speaker: '', text: '你们组的题目还没定。你在本子上列了七个方向，全是你一个人想的。', next: 'n4' },

    n4: { type: 'dialogue', art: 'entangled', speaker: '沈老师', text: '「协调人，」散会时沈老师叫住你，「我把话说清楚，这个项目的分数是四个人一起的。你们组能不能出成果，我看你。」', next: 'n5' },

    n5: { type: 'dialogue', art: 'entangled', speaker: '', text: '那句「我看你」在你耳朵里响了一整晚。', next: 'n6' },

    n6: { type: 'dialogue', art: 'entangled', speaker: '妈妈', text: '晚饭桌上，妈妈把一张打印纸推过来。「我问了你舅舅。他说现在这个专业最稳，就业率百分之九十几。你先按这个准备。」', next: 'n7' },

    n7: { type: 'dialogue', art: 'entangled', speaker: '妈妈', text: '「你别嫌妈妈啰嗦。你姑姑家那个孩子，当年就是自己乱选，现在三十岁了还在换工作。妈妈不想你走那条路。」', next: 'n8' },

    n8: { type: 'dialogue', art: 'entangled', speaker: '', text: '你知道她是真的怕。她说这些话的时候，手一直在擦已经很干净的桌子。', next: 'n9' },

    n9: { type: 'dialogue', art: 'entangled', speaker: '林澈', text: '十一点，林澈发来消息：「明天英语作文我肯定写不出来，你帮我起个头行不行，就开头三句。」', next: 'n10' },

    n10: { type: 'dialogue', art: 'entangled', speaker: '', text: '你躺在床上，手机举在脸上方。你数了一下今天有多少人在等你解决他们的问题。', next: 'n11' },

    n11: { type: 'dialogue', art: 'entangled', speaker: '', text: '组员来不来开会。妈妈的担心。林澈的作文。老师的期待。你的成绩。你的未来。', next: 'n12' },

    n12: { type: 'dialogue', art: 'entangled', speaker: '', text: '它们缠成一团，你分不清哪一根是你自己的。', next: 'n13' },

    n13: { type: 'taskSeparation', art: 'clarity',
      prompt: '把这些事一件一件拖进对应的区域。<br><br>判断的标准只有一个：<b>最终的结果由谁承担，那件事就是谁的课题。</b><br><br>注意：「我可以影响，但不能决定」这一栏并不是逃避，它是最诚实的一栏。',
      items: [
        { text: '我把提案展的会议时间定下来并通知大家' },
        { text: '林澈来不来开会' },
        { text: '妈妈会不会为我的选择担心' },
        { text: '我要不要替林澈写英语作文' },
        { text: '顾言喜不喜欢我' },
        { text: '我这周补完落下的数学题型' },
        { text: '沈老师怎么评价我这个协调人' },
        { text: '我有没有把「我做得到哪里」说清楚' },
        { text: '许禾能不能完成他那部分' },
        { text: '我最后选什么专业' }
      ], next: 'n14' },

    n14: { type: 'dialogue', art: 'clarity', speaker: '沈老师', text: '第二天你把整理过的纸给沈老师看。他看了很久。', next: 'n15' },

    n15: { type: 'dialogue', art: 'clarity', speaker: '沈老师', text: '「有一件事你放错了。『许禾能不能完成他那部分』——你放进了『我可以决定』。」', next: 'n16' },

    n16: { type: 'dialogue', art: 'clarity', speaker: '沈老师', text: '「你能做的是：把任务讲清楚、问他需要什么、提前确认进度。他最后交不交，是他的课题。」', next: 'n17' },

    n17: { type: 'dialogue', art: 'clarity', speaker: '', text: '「那如果他交不出来，我们组不就完了吗。」你说。', next: 'n18' },

    n18: { type: 'dialogue', art: 'clarity', speaker: '沈老师', text: '「有可能。」他很平静，「那也是这个项目要教你们的东西之一。你替他做完，他这一次就永远学不会。」', next: 'n19' },

    n19: { type: 'dialogue', art: 'clarity', speaker: '沈老师', text: '「课题分离不是不管别人。它是：我先把我这份做好，同时不替别人过他的人生。」',
      effects: [{ unlockCard: 'separation' }], next: 'n20' },

    n20: { type: 'dialogue', art: 'entangled', speaker: '', text: '当晚，林澈的消息又来了：「作文那个开头……？」', next: 'n21' },

    n21: { type: 'choice', art: 'entangled', prompt: '你会怎么回？', choices: [
      { text: '给他写三句开头', effects: [{ trait: 'boundary', delta: -2 }], next: 'n22a' },
      { text: '「我不写。这是你的作业。」', effects: [{ trait: 'boundary', delta: 2 }, { trait: 'ally', delta: -1 }], next: 'n22b' },
      { text: '「开头我不能替你写。但你写完，我可以帮你看一遍。」', effects: [{ trait: 'boundary', delta: 3 }, { trait: 'ally', delta: 1 }, { trait: 'autonomy', delta: 1 }], next: 'n22c' },
      { text: '不回，装睡', effects: [{ trait: 'boundary', delta: -1 }, { trait: 'action', delta: -1 }], next: 'n22d' }
    ]},

    n22a: { type: 'dialogue', art: 'entangled', speaker: '林澈', text: '「爱你！」十分钟后他又发来：「后面那段我也写不出来……」', next: 'n23' },

    n22b: { type: 'dialogue', art: 'entangled', speaker: '林澈', text: '消息显示「已读」。过了四十秒，他回了一个「哦」。你盯着那个字看了很久。', next: 'n23' },

    n22c: { type: 'dialogue', art: 'entangled', speaker: '林澈', text: '「……你最近怎么变这样了。」隔了两分钟，他又发来：「那我写完发你。」', next: 'n23' },

    n22d: { type: 'dialogue', art: 'entangled', speaker: '', text: '你把手机翻过去，屏幕朝下。你没睡着。第二天他没提这件事，你也没提。', next: 'n23' },

    n23: { type: 'practice', art: 'clarity', prompt: '现实练习 · 课题分离<br><br>选一件你现在正被困住的事，写两行：<br><br>1. 我能决定的行动：<br>2. 不由我决定的结果：<br><br>写完之后只做第一行那件事。第二行的部分，先放在那里。', next: 'n24' },

    n24: { type: 'dialogue', art: 'clarity', speaker: '', text: '第六周，第二次组内会议。林澈来了，迟到十二分钟。顾言没来，但发来了一份两千字的资料。', next: 'n25' },

    n25: { type: 'dialogue', art: 'clarity', speaker: '', text: '题目定了下来：《教学楼三号楼卫生间为什么总是排队》。听起来很不体面，但它是真实存在的问题。', next: 'END' }
  }
};
