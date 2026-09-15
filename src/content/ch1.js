// 第一章 · 我为什么不去（目的论）
export const ch1 = {
  title: '第一章 · 我为什么不去',
  nodes: {
    start: { type: 'dialogue', art: 'classroom', speaker: '', text: '数学课最后五分钟。老师在讲那道你没弄懂的题型，讲到一半下课铃响了。', next: 'n2' },

    n2: { type: 'dialogue', art: 'classroom', speaker: '老师', text: '「有问题的下课来问我，我在办公室。」', next: 'n3' },

    n3: { type: 'dialogue', art: 'classroom', speaker: '', text: '你有问题。你甚至已经在草稿纸角上写下了要问的那一句。', next: 'n4' },

    n4: { type: 'dialogue', art: 'entangled', speaker: '', text: '但你坐着没动。你先整理了笔袋，又把纸巾折了一下，然后开始擦桌上一块本来就不存在的痕迹。', next: 'n5' },

    n5: { type: 'dialogue', art: 'entangled', speaker: '', text: '教室里的人一个一个走了。顾言收拾完东西，直接去了办公室。', next: 'n6' },

    n6: { type: 'choice', art: 'entangled', prompt: '还有三分钟。你会怎么做？', choices: [
      { text: '拿着草稿纸去办公室', effects: [{ trait: 'action', delta: 2 }, { trait: 'autonomy', delta: 1 }], next: 'n7a' },
      { text: '等顾言问完再去——他在那儿我不想开口', effects: [{ trait: 'action', delta: -1 }], next: 'n7b' },
      { text: '算了，回家自己查', effects: [{ trait: 'action', delta: -2 }, { trait: 'boundary', delta: -1 }], next: 'n7c' },
      { text: '去问顾言，不问老师', effects: [{ trait: 'ally', delta: 1 }, { trait: 'action', delta: 1 }], next: 'n7d' }
    ]},

    n7a: { type: 'dialogue', art: 'corridor', speaker: '老师', text: '「这个条件不是范围，是端点。」两句话，讲完了。你从办公室出来的时候，觉得刚才那十分钟的犹豫有点荒唐。', next: 'n8' },

    n7b: { type: 'dialogue', art: 'corridor', speaker: '', text: '你在走廊上等了六分钟。顾言出来了，后面又进去两个人。第二节课的预备铃响了。你回了教室。', next: 'n8' },

    n7c: { type: 'dialogue', art: 'entangled', speaker: '', text: '你把草稿纸塞进书里。晚上你翻了两本参考书，都不是这个题型。它就这样留在了那里。', next: 'n8' },

    n7d: { type: 'dialogue', art: 'corridor', speaker: '顾言', text: '「你怎么不直接去问？」他讲得很快，但讲清楚了。最后他补了一句，「问老师比问我快。」', next: 'n8' },

    n8: { type: 'dialogue', art: 'corridor', speaker: '沈老师', text: '「你站在办公室门口三次了。」沈老师从后面走过来，抱着一摞表格。', next: 'n9' },

    n9: { type: 'dialogue', art: 'corridor', speaker: '沈老师', text: '「我不问你为什么不进去。我问你另一件事——你不进去的这段时间里，你替自己挡住了什么？」', next: 'n10' },

    n10: { type: 'dialogue', art: 'corridor', speaker: '', text: '你想说「我只是害羞」。可这句话到嘴边就散了。你去问过图书馆借书的规定，也敢在食堂让人重打一份饭。', next: 'n11' },

    n11: { type: 'dialogue', art: 'corridor', speaker: '沈老师', text: '「有些事我们说『做不到』，其实是『暂时不想付出那个代价』。这两句话听起来一样，往下走的路完全不同。」', next: 'n12' },

    n12: { type: 'dialogue', art: 'corridor', speaker: '沈老师', text: '「我不是说你在装。我是说，除了往后找原因，你也可以往前问一句：这个行为想帮我拿到什么。」', next: 'n13' },

    n13: { type: 'observation', art: 'clarity', prompt: '一个人不去问问题，可能有很多种原因。也可能同时有几种。你自己来判断哪些是真的。',
      questions: [
        { type: 'choice', question: '你觉得「不去问」这个行为，最可能在帮你避免什么？', options: ['被老师看出我基础差', '被顾言看到我在问', '承认我需要别人帮忙', '开口时的紧张本身', '万一问了还是不懂，那更难受', '这些都不准确'] },
        { type: 'text', question: '如果这一次「不用证明自己」，你愿意做的最小一步是什么？' }
      ], next: 'n14' },

    n14: { type: 'dialogue', art: 'clarity', speaker: '沈老师', text: '「记住，这不是让你怪自己。你的紧张是真的，过去被人当众问倒的经历也是真的。」', next: 'n15' },

    n15: { type: 'dialogue', art: 'clarity', speaker: '沈老师', text: '「只是那件事没有替你签下今天这一份合同。今天要不要走进那扇门，还是你自己在签。」',
      effects: [{ unlockCard: 'teleology' }], next: 'n16' },

    n16: { type: 'dialogue', art: 'clarity', speaker: '', text: '「线外手册」里多了一页。你把它翻开又合上。', next: 'n17' },

    n17: { type: 'practice', art: 'clarity', prompt: '现实练习 · 目的论<br><br>写下最近一件「你本来想做，却没有做」的事。<br><br>然后写两行：<br>1. 不做这件事，暂时帮我挡住了什么？<br>2. 如果代价小一点，我愿意做的最小一步是什么？<br><br>只写最小一步。越小越好。', next: 'n18' },

    n18: { type: 'dialogue', art: 'classroom', speaker: '', text: '第二天，那道题出现在了小测的第三大题。你写出来了。', next: 'n19' },

    n19: { type: 'dialogue', art: 'classroom', speaker: '', text: '你盯着那个答案看了很久。不是因为它值几分，而是因为它本来可以不出现在这里。', next: 'END' }
  }
};
