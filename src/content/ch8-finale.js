// 终章 · 把自己的名字写上去
export const finale = {
  title: '终章 · 把自己的名字写上去',
  nodes: {
    start: { type: 'dialogue', art: 'classroom', speaker: '', text: '礼堂里坐满了人。评委在第一排。妈妈在第四排右边第三个座位，你看到她举起手机拍了一张。', next: 'n2' },

    n2: { type: 'dialogue', art: 'classroom', speaker: '', text: '展板立在台边。右下角，四个名字排成一列。第三个是你的。', next: 'n3' },

    n3: { type: 'dialogue', art: 'classroom', speaker: '', text: '你走上台。手心是湿的，话筒有点沉。第一句话差点卡住，但你还是说出来了。', next: 'n4' },

    n4: { type: 'dialogue', art: 'classroom', speaker: '', text: '讲到一半，你看见顾言在台下做了一个手势——他在提醒你，翻页的时机到了。', next: 'n5' },

    n5: { type: 'dialogue', art: 'classroom', speaker: '', text: '最后一段，你说：「我们没有解决所有问题。但我们证明了，一件很小的事也可以被看见。」', next: 'n6' },

    n6: { type: 'dialogue', art: 'classroom', speaker: '', text: '那句话不是你一个人想出来的。是许禾写在群里的，被顾言改过一次，被你念了出来。', next: 'n7' },

    n7: { type: 'dialogue', art: 'classroom', speaker: '', text: '掌声响起来。不算特别热烈，但真实。', next: 'n8' },

    n8: { type: 'dialogue', art: 'classroom', speaker: '评委', text: 'Q&A环节，一个评委问：「你们觉得这次项目最大的问题是什么？」', next: 'n9' },

    n9: { type: 'choice', art: 'classroom', prompt: '你会怎么回答？', choices: [
      { text: '「没有问题。我们准备得很充分。」', effects: [{ trait: 'acceptance', delta: -3 }], next: 'n10a' },
      { text: '「数据采集那一周出了点问题，不过我们后来补上了。」', effects: [{ trait: 'acceptance', delta: 1 }, { trait: 'boundary', delta: 1 }], next: 'n10b' },
      { text: '「我们组前期分工不清楚，有一段时间我一个人扛了太多。后来调整过来了。」', effects: [{ trait: 'acceptance', delta: 3 }, { trait: 'ally', delta: 2 }, { trait: 'repair', delta: 2 }], next: 'n10c' }
    ]},

    n10a: { type: 'dialogue', art: 'classroom', speaker: '评委', text: '评委点了点头，没再追问。但你知道这句话说得太满了。', next: 'n11' },

    n10b: { type: 'dialogue', art: 'classroom', speaker: '评委', text: '「补救得很快。」评委说，「这也是能力的一部分。」', next: 'n11' },

    n10c: { type: 'dialogue', art: 'classroom', speaker: '评委', text: '「诚实。」评委笑了，「能在台上承认问题，这比很多成年人做得好。」', next: 'n11' },

    n11: { type: 'dialogue', art: 'corridor', speaker: '', text: '下台后，林澈重重拍了你肩膀一下。许禾说「讲得好」，然后赶紧去收展板。顾言什么都没说，但他给你递了瓶水。', next: 'n12' },

    n12: { type: 'dialogue', art: 'corridor', speaker: '沈老师', text: '「过来。」沈老师叫住你们四个，「我有东西给你们。」', next: 'n13' },

    n13: { type: 'dialogue', art: 'corridor', speaker: '沈老师', text: '他递过来四个信封。「成绩下周出，但我提前写了评语。你们自己看，不用给我看。」', next: 'n14' },

    n14: { type: 'dialogue', art: 'corridor', speaker: '', text: '你没有马上打开。你把信封装进包里，出了礼堂，在走廊尽头的窗户边停下来。', next: 'n15' },

    n15: { type: 'dialogue', art: 'corridor', speaker: '', text: '信封里是一张纸，手写的。第一句话是：「这一学期，你学会了一件比提案更重要的事。」', next: 'n16' },

    n16: { type: 'dialogue', art: 'corridor', speaker: '', text: '后面那几行字，你看了三遍。你没有拍照，也没有发给任何人。你只是把它叠好，放回去。', next: 'n17' },

    n17: { type: 'dialogue', art: 'corridor', speaker: '妈妈', text: '妈妈在门口等你。她说：「讲得挺好。」然后停了一下，「你最近真的变了。」', next: 'n18' },

    n18: { type: 'choice', art: 'corridor', prompt: '你会怎么回应？', choices: [
      { text: '「没有啊，还是原来那样。」', effects: [{ trait: 'acceptance', delta: -2 }], next: 'n19a' },
      { text: '「嗯。变了。」', effects: [{ trait: 'acceptance', delta: 3 }, { trait: 'autonomy', delta: 2 }], next: 'n19b' }
    ]},

    n19a: { type: 'dialogue', art: 'corridor', speaker: '', text: '她笑了笑，没再说什么。你们一起走出校门。', next: 'n20' },

    n19b: { type: 'dialogue', art: 'corridor', speaker: '妈妈', text: '她看着你，眼神很复杂。过了几秒，她说：「……长大了。」', next: 'n20' },

    n20: { type: 'dialogue', art: 'clarity', speaker: '', text: '回家路上，你打开手机。「线外手册」里已经攒了十二张卡片。', next: 'n21' },

    n21: { type: 'dialogue', art: 'clarity', speaker: '', text: '你翻到最后一页，那一页还是空的。上面写着：「下一学期，你准备从哪里开始？」', next: 'n22' },

    n22: { type: 'dialogue', art: 'clarity', speaker: '', text: '这一学期结束了。下学期还没有开始。窗外的线，还在延伸。', next: 'n23' },

    n23: { type: 'dialogue', art: 'clarity', speaker: '', text: '你并不是突然不害怕了。你只是开始把「害怕」当成一种感受，而不是一条必须服从的命令。', next: 'n24' },

    n24: { type: 'dialogue', art: 'clarity', speaker: '', text: '展板上有你的名字。那是你自己写上去的。', next: 'END' }
  }
};
