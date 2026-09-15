// 第四章 · 第二名的影子（自卑感与自卑情结）
export const ch4 = {
  title: '第四章 · 第二名的影子',
  nodes: {
    start: { type: 'dialogue', art: 'classroom', speaker: '沈老师', text: '第十周。「市里的青少年提案大赛，每个学校推一个人去做主讲。」', next: 'n2' },

    n2: { type: 'dialogue', art: 'classroom', speaker: '沈老师', text: '「我推荐了顾言。」', next: 'n3' },

    n3: { type: 'dialogue', art: 'entangled', speaker: '', text: '你的手指在桌下收紧了一下。你想过这件事。你甚至偷偷在草稿纸背面写过讲稿。', next: 'n4' },

    n4: { type: 'dialogue', art: 'entangled', speaker: '', text: '你没有告诉任何人。所以现在没有人知道你在难过什么。', next: 'n5' },

    n5: { type: 'dialogue', art: 'entangled', speaker: '', text: '第一个冒出来的念头很难看：他讲话那么冲，上台肯定得罪评委。', next: 'n6' },

    n6: { type: 'dialogue', art: 'entangled', speaker: '', text: '第二个念头是：我果然不行。', next: 'n7' },

    n7: { type: 'dialogue', art: 'entangled', speaker: '许禾', text: '「你是不是也想去啊？」许禾在旁边小声问，「我看你上次讲思路讲得比他清楚。」', next: 'n8' },

    n8: { type: 'choice', art: 'entangled', prompt: '你会怎么做？', choices: [
      { text: '「他一上台就得罪人，你看着吧。」', effects: [{ trait: 'ally', delta: -3 }, { trait: 'acceptance', delta: -2 }], next: 'n9a' },
      { text: '「没有，我没想过。」把讲稿撕掉', effects: [{ trait: 'acceptance', delta: -2 }, { trait: 'action', delta: -2 }], next: 'n9b' },
      { text: '「想。有点不服气。」承认给许禾听', effects: [{ trait: 'acceptance', delta: 2 }, { trait: 'ally', delta: 1 }], next: 'n9c' },
      { text: '去问顾言：他是怎么准备的', effects: [{ trait: 'ally', delta: 3 }, { trait: 'acceptance', delta: 2 }, { trait: 'action', delta: 2 }], next: 'n9d' }
    ]},

    n9a: { type: 'dialogue', art: 'entangled', speaker: '', text: '许禾没接话，低头收拾东西。你说完就后悔了。那句话让你舒服了大概十秒钟。', next: 'n10' },

    n9b: { type: 'dialogue', art: 'entangled', speaker: '', text: '晚上你把那页讲稿撕成很小的碎片。撕完之后，你告诉自己「本来也没想去」。你自己都不太信。', next: 'n10' },

    n9c: { type: 'dialogue', art: 'entangled', speaker: '许禾', text: '「哦……」他想了想，「不服气挺好的吧？我连不服气都没有过。」', next: 'n10' },

    n9d: { type: 'dialogue', art: 'corridor', speaker: '顾言', text: '「你问我准备？」他显然很意外。「……你确定不是来看我出丑的？」', next: 'n9d2' },

    n9d2: { type: 'dialogue', art: 'corridor', speaker: '', text: '「我确定。」你说，「我想学你怎么把资料压成三分钟。」', next: 'n9d3' },

    n9d3: { type: 'dialogue', art: 'corridor', speaker: '顾言', text: '他沉默了几秒，从包里抽出一叠纸。「……这是我删掉的部分。你看删的地方，比看留的地方有用。」', next: 'n10' },

    n10: { type: 'dialogue', art: 'entangled', speaker: '', text: '那天晚上，你在自己房间里坐了很久。', next: 'n11' },

    n11: { type: 'dialogue', art: 'entangled', speaker: '', text: '你想起一件事。上学期顾言考了年级第一，第二天他在厕所门口把一张卷子团了扔进垃圾桶。那张卷子是九十六分。', next: 'n12' },

    n12: { type: 'dialogue', art: 'clarity', speaker: '', text: '也许他也在怕什么。', next: 'n13' },

    n13: { type: 'observation', art: 'clarity', prompt: '把「我不如他」拆开来看。这两句话是不同的东西。',
      questions: [
        { type: 'choice', question: '当你说「我不如顾言」，你更接近哪一句？', options: ['我这一项能力现在比他弱', '我这个人比他差', '我说不清，两个混在一起'] },
        { type: 'text', question: '如果只挑他的一项能力来学，你要学哪一项？这一周你能练的第一步是什么？' }
      ], next: 'n14' },

    n14: { type: 'dialogue', art: 'clarity', speaker: '沈老师', text: '「你今天来找我，不是为了让我改推荐名单吧。」沈老师看着你手里那张写满的纸。', next: 'n15' },

    n15: { type: 'dialogue', art: 'clarity', speaker: '', text: '「不是。我想问，比赛之外还有没有别的机会。」', next: 'n16' },

    n16: { type: 'dialogue', art: 'clarity', speaker: '沈老师', text: '「有。校内提案展的主讲，你们组自己定。」他把表格推过来，「不过这个更难。因为没人会因为它给你发奖状。」', next: 'n17' },

    n17: { type: 'dialogue', art: 'clarity', speaker: '沈老师', text: '「顺便说一句——觉得自己不如别人，这件事本身不是病。它常常是人想往前走的信号。」', next: 'n18' },

    n18: { type: 'dialogue', art: 'clarity', speaker: '沈老师', text: '「变成麻烦的是另一句：『我就是不行，所以我不必再试。』这句话听起来像结论，其实是一张免票。」',
      effects: [{ unlockCard: 'inferiority' }], next: 'n19' },

    n19: { type: 'choice', art: 'clarity', prompt: '校内提案展的主讲，你要不要报？', choices: [
      { text: '报。写下自己的名字', effects: [{ trait: 'action', delta: 3 }, { trait: 'autonomy', delta: 2 }], next: 'n20a' },
      { text: '让组里投票决定', effects: [{ trait: 'autonomy', delta: -2 }], next: 'n20b' },
      { text: '不报。等下次有更充分准备的时候', effects: [{ trait: 'action', delta: -2 }, { trait: 'acceptance', delta: -1 }], next: 'n20c' }
    ]},

    n20a: { type: 'dialogue', art: 'clarity', speaker: '', text: '你把名字写在了那一栏里。笔画很轻，但写完了。', next: 'n21' },

    n20b: { type: 'dialogue', art: 'clarity', speaker: '', text: '组里投了。三票给你，包括你自己那张——你投了许禾。最后还是你。你没有真正选择，只是被选中了。', next: 'n21' },

    n20c: { type: 'dialogue', art: 'clarity', speaker: '', text: '你把表格空着交回去了。沈老师什么也没说。那一栏后来填的是许禾的名字，他填的时候手在抖。', next: 'n21' },

    n21: { type: 'practice', art: 'clarity', prompt: '现实练习 · 把自我否定翻译成问题<br><br>写下一句你最近对自己说过的否定的话。<br><br>然后把它改写成两行：<br>1. 具体是哪一项能力不够？<br>2. 这一周我能练的第一步是什么？<br><br>「我很差」不能练。「我不会做课堂笔记」可以练。', next: 'n22' },

    n22: { type: 'dialogue', art: 'classroom', speaker: '', text: '第十一周，三号楼的调研数据出来了。排队最长的时间段是第二节课后，平均等待四分十七秒。', next: 'n23' },

    n23: { type: 'dialogue', art: 'classroom', speaker: '许禾', text: '「那个……我数错了一天的。」许禾把本子递过来，声音几乎听不见，「对不起。」', next: 'END' }
  }
};
