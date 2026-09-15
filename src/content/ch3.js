// 第三章 · 如果你不喜欢我（被讨厌的勇气）
export const ch3 = {
  title: '第三章 · 如果你不喜欢我',
  nodes: {
    start: { type: 'dialogue', art: 'corridor', speaker: '', text: '第八周，周一早上。林澈把你拉到楼梯间转角，那个位置监控照不到。', next: 'n2' },

    n2: { type: 'dialogue', art: 'corridor', speaker: '林澈', text: '「上周五下午第二节，我没去上课。」他压低声音，「班主任要查那天缺勤，你就说我在跟你对提案展的资料，行吗？」', next: 'n3' },

    n3: { type: 'dialogue', art: 'corridor', speaker: '', text: '「你去哪了？」你问。', next: 'n4' },

    n4: { type: 'dialogue', art: 'corridor', speaker: '林澈', text: '他愣了一下。「……我去网吧了。就一次。真的就一次。」', next: 'n5' },

    n5: { type: 'dialogue', art: 'corridor', speaker: '林澈', text: '「我要是被记了，我妈这次真的会把我手机砸了。你知道她什么脾气。」', next: 'n6' },

    n6: { type: 'dialogue', art: 'entangled', speaker: '', text: '你知道。你去过他家，见过他妈把他试卷摔在地上。那不是演的。', next: 'n7' },

    n7: { type: 'dialogue', art: 'entangled', speaker: '', text: '所以这件事很难。它不是「帮不帮朋友」这么简单。', next: 'n8' },

    n8: { type: 'dialogue', art: 'entangled', speaker: '林澈', text: '「你就说一句话而已。」他看着你，「我们这么多年了，你连这个都不肯？」', next: 'n9' },

    n9: { type: 'choice', art: 'entangled', prompt: '你会怎么做？', choices: [
      { text: '答应他。就一句话，说了就过去了', effects: [{ trait: 'boundary', delta: -3 }, { trait: 'autonomy', delta: -2 }], next: 'n10a' },
      { text: '「你太自私了，你有想过我吗。」', effects: [{ trait: 'boundary', delta: 1 }, { trait: 'ally', delta: -3 }, { trait: 'repair', delta: -1 }], next: 'n10b' },
      { text: '「我不会替你说这句话。但我不会主动去告状。」', effects: [{ trait: 'boundary', delta: 3 }, { trait: 'autonomy', delta: 2 }], next: 'n10c' },
      { text: '「我不撒谎。但我可以跟你一起去跟班主任说。」', effects: [{ trait: 'boundary', delta: 3 }, { trait: 'ally', delta: 2 }, { trait: 'autonomy', delta: 2 }, { trait: 'repair', delta: 1 }], next: 'n10d' },
      { text: '「我现在没法回答你，让我想到中午。」', effects: [{ trait: 'boundary', delta: 1 }, { trait: 'action', delta: -1 }], next: 'n10e' }
    ]},

    n10a: { type: 'dialogue', art: 'entangled', speaker: '', text: '中午班主任真的问了。你说了那句话。你听见自己的声音很平稳，平稳得让你自己害怕。', next: 'n11a' },

    n11a: { type: 'dialogue', art: 'entangled', speaker: '林澈', text: '晚上林澈给你发了一堆表情包。「你真够意思。」', next: 'n12a' },

    n12a: { type: 'dialogue', art: 'entangled', speaker: '', text: '你盯着那句「你真够意思」，忽然明白了一件事：从今天起，他会更确定你不会拒绝他。', next: 'n13' },

    n10b: { type: 'dialogue', art: 'entangled', speaker: '林澈', text: '他的脸一下就变了。「……自私？」他笑了一声，「行，我知道了。」', next: 'n11b' },

    n11b: { type: 'dialogue', art: 'entangled', speaker: '', text: '接下来四天，他没跟你说一句话。提案展的组内消息他也不回。', next: 'n12b' },

    n12b: { type: 'dialogue', art: 'entangled', speaker: '', text: '你确实没有撒谎。你也确实说了一句你并不完全相信的重话。', next: 'n13' },

    n10c: { type: 'dialogue', art: 'entangled', speaker: '林澈', text: '「……什么意思？」他有点没反应过来。「你不帮我，但也不害我？」', next: 'n11c' },

    n11c: { type: 'dialogue', art: 'entangled', speaker: '', text: '「班主任问我，我说我不知道。问你，你自己答。」', next: 'n12c' },

    n12c: { type: 'dialogue', art: 'entangled', speaker: '林澈', text: '他看了你很久。「你以前不这样。」他说完就走了。那天他没再找你。', next: 'n13' },

    n10d: { type: 'dialogue', art: 'entangled', speaker: '林澈', text: '「你疯了？」他声音都变了，「自己去说？」', next: 'n11d' },

    n11d: { type: 'dialogue', art: 'entangled', speaker: '', text: '「记一次缺勤，和被发现撒谎，哪个更麻烦，你自己算。」你说，「我陪你去。这个我做得到。」', next: 'n12d' },

    n12d: { type: 'dialogue', art: 'entangled', speaker: '林澈', text: '他在楼梯间站了很久，最后骂了一句脏话。放学时他发来两个字：「几点。」', next: 'n13' },

    n10e: { type: 'dialogue', art: 'entangled', speaker: '林澈', text: '「想什么啊，一句话的事。」他很不耐烦。中午他没等你，自己去了。', next: 'n11e' },

    n11e: { type: 'dialogue', art: 'entangled', speaker: '', text: '班主任最后没有细问。事情糊过去了。你什么都没做，也什么都没决定。', next: 'n13' },

    n13: { type: 'dialogue', art: 'corridor', speaker: '沈老师', text: '放学后，沈老师在办公室整理提案展的表格。你敲了门。', next: 'n14' },

    n14: { type: 'dialogue', art: 'corridor', speaker: '', text: '「老师，如果做了正确的事，朋友还是生气了，那这算什么？」', next: 'n15' },

    n15: { type: 'dialogue', art: 'corridor', speaker: '沈老师', text: '「算你付了自由的价钱。」他没抬头，「自由不是没人管你。自由是：你选了，然后有人不喜欢你，你还得继续过日子。」', next: 'n16' },

    n16: { type: 'dialogue', art: 'corridor', speaker: '沈老师', text: '「被讨厌的勇气，不是去讨厌别人，也不是逼自己不在乎。它是：我承认我会难受，但我不用别人的满意来决定我该做什么。」',
      effects: [{ unlockCard: 'courage' }], next: 'n17' },

    n17: { type: 'dialogue', art: 'corridor', speaker: '', text: '「那如果他一直不理我呢。」', next: 'n18' },

    n18: { type: 'dialogue', art: 'corridor', speaker: '沈老师', text: '「那是他的课题。你能做的是把门留着。」他停了一下，「不过我要补一句——如果哪天有人威胁你、伤害你、逼你做危险的事，那不叫『被讨厌』。那种情况你要找人，不要自己扛。」', next: 'n19' },

    n19: { type: 'practice', art: 'clarity', prompt: '现实练习 · 一句有边界的「不」<br><br>准备一句你这周真的会用到的话。三个要素：<br><br>1. 具体（不说「我很忙」，说「这周三之前我做不到」）<br>2. 礼貌（不带评价对方的话）<br>3. 留门（说清你做得到的部分）<br><br>写下来，然后找机会说一次。', next: 'n20' },

    n20: { type: 'dialogue', art: 'clarity', speaker: '', text: '第九周，提案展进入调研阶段。你们要在下课时间去三号楼数人数。', next: 'n21' },

    n21: { type: 'dialogue', art: 'clarity', speaker: '', text: '许禾第一个报名。林澈没说话，但他来了。', next: 'END' }
  }
};
