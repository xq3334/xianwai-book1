// 序章 · 满分之外
// 先不讲理论，只让玩家体验「别人一句话就能改变我的一天」
export const prologue = {
  title: '序章 · 满分之外',
  nodes: {
    start: { type: 'dialogue', art: 'classroom', speaker: '', text: '高二下学期，第三周。成绩单贴在教室后墙上，纸角被风吹得一直翻。', next: 'p2' },

    p2: { type: 'dialogue', art: 'classroom', speaker: '', text: '你在第九行找到自己的名字。年级四十二。上一次是十七。', next: 'p3' },

    p3: { type: 'dialogue', art: 'classroom', speaker: '', text: '你其实早就知道会掉。可看到那个数字的时候，胃还是往下坠了一下。', next: 'p4' },

    p4: { type: 'dialogue', art: 'classroom', speaker: '顾言', text: '「这次数学最后一题，你是不是把条件看反了？」', next: 'p5' },

    p5: { type: 'dialogue', art: 'classroom', speaker: '', text: '顾言站在你旁边，手里还捏着自己的卷子。年级第二。他说这句话的语气不像挖苦，更像在核对一道题。', next: 'p6' },

    p6: { type: 'dialogue', art: 'classroom', speaker: '', text: '但你听见的不是那道题。你听见的是——他也看见了我的名字在第九行。', next: 'p7' },

    p7: { type: 'choice', art: 'classroom', prompt: '你会怎么做？', choices: [
      { text: '笑一下，说「是啊我太粗心了」，然后转身走开', effects: [{ trait: 'autonomy', delta: -1 }, { trait: 'acceptance', delta: -1 }], next: 'p8a' },
      { text: '把卷子拿出来，问他那一题他是怎么读条件的', effects: [{ trait: 'ally', delta: 2 }, { trait: 'action', delta: 1 }, { trait: 'acceptance', delta: 1 }], next: 'p8b' },
      { text: '说「你考得好，当然看得出来」', effects: [{ trait: 'ally', delta: -2 }], next: 'p8c' },
      { text: '什么都不说，装作在整理书包', effects: [{ trait: 'boundary', delta: -1 }, { trait: 'action', delta: -1 }], next: 'p8d' }
    ]},

    p8a: { type: 'dialogue', art: 'classroom', speaker: '', text: '你听见自己的声音很轻快。轻快得像别人的。走到走廊上，你才发现手心是湿的。', next: 'p9' },

    p8b: { type: 'dialogue', art: 'classroom', speaker: '顾言', text: '「……哦。」他愣了一下，好像没想到你真的会问。「你等我一下，我卷子在抽屉里。」', next: 'p8b2' },

    p8b2: { type: 'dialogue', art: 'classroom', speaker: '', text: '他讲了大概两分钟。你听懂了。奇怪的是，你并没有变得更难受。', next: 'p9' },

    p8c: { type: 'dialogue', art: 'classroom', speaker: '顾言', text: '「……你这话什么意思。」他皱了一下眉，没有再说下去，走了。', next: 'p9' },

    p8d: { type: 'dialogue', art: 'classroom', speaker: '', text: '你把已经装好的书又拿出来一遍。顾言站了三秒，走了。那道题你到现在也没弄明白。', next: 'p9' },

    p9: { type: 'dialogue', art: 'corridor', speaker: '', text: '手机在口袋里震了两下。是妈妈。', next: 'p10' },

    p10: { type: 'dialogue', art: 'corridor', speaker: '妈妈', text: '「成绩出了吧？别急着说，晚上回来我们好好聊。妈妈不是要怪你。」', next: 'p11' },

    p11: { type: 'dialogue', art: 'corridor', speaker: '', text: '「不是要怪你」这四个字，你已经很熟悉了。它后面通常跟着一句「妈妈是为你好」。', next: 'p12' },

    p12: { type: 'dialogue', art: 'corridor', speaker: '林澈', text: '「诶，你在这儿啊。」林澈从楼梯口探出头，「帮我个忙好不好，就一点点。」', next: 'p13' },

    p13: { type: 'dialogue', art: 'corridor', speaker: '林澈', text: '「物理作业，就抄最后两页。真的最后两页。我妈昨天没收我手机，我一晚上都在装乖。」', next: 'p14' },

    p14: { type: 'dialogue', art: 'entangled', speaker: '', text: '你其实想说不。你想说的话已经到了嘴边。', next: 'p15' },

    p15: { type: 'dialogue', art: 'entangled', speaker: '', text: '但你脑子里冒出来的第一句话是：如果我说不，他会不会觉得我最近变了。', next: 'p16' },

    p16: { type: 'choice', art: 'entangled', prompt: '你会怎么做？', choices: [
      { text: '把作业递给他', effects: [{ trait: 'boundary', delta: -2 }, { trait: 'autonomy', delta: -1 }], next: 'p17a' },
      { text: '说「今天不行」，不解释理由', effects: [{ trait: 'boundary', delta: 1 }, { trait: 'ally', delta: -1 }], next: 'p17b' },
      { text: '说「我可以给你讲那两题，但不给你抄」', effects: [{ trait: 'boundary', delta: 2 }, { trait: 'ally', delta: 1 }, { trait: 'autonomy', delta: 1 }], next: 'p17c' },
      { text: '说「我这次也没写完」——撒一个软的谎', effects: [{ trait: 'boundary', delta: -1 }, { trait: 'action', delta: -1 }], next: 'p17d' }
    ]},

    p17a: { type: 'dialogue', art: 'entangled', speaker: '林澈', text: '「你最好了。」他把本子塞进包里就跑了。你站在原地，说不清刚才那一下松开的是什么。', next: 'p18' },

    p17b: { type: 'dialogue', art: 'entangled', speaker: '林澈', text: '「……行吧。」他笑了笑，但那个笑停在半路。走了两步他回头看了你一眼。', next: 'p18' },

    p17c: { type: 'dialogue', art: 'entangled', speaker: '林澈', text: '「讲多麻烦啊。」他咕哝了一句，看你没动，又说：「……那你讲吧。」', next: 'p18' },

    p17d: { type: 'dialogue', art: 'entangled', speaker: '', text: '他信了。你也说不上轻松。你只是又一次绕开了那句真正想说的话。', next: 'p18' },

    p18: { type: 'observation', art: 'entangled', prompt: '在往下走之前，先停一下。刚才那两次对话，你其实一直在做同一件事。',
      questions: [
        { type: 'text', question: '刚才发生的事实是什么？（只写发生了什么，不写你的判断）' },
        { type: 'choice', question: '你最强烈的感受是什么？', options: ['怕被看轻', '愧疚', '不甘心', '疲惫', '生气', '说不清'] },
        { type: 'choice', question: '你刚才那个行为，最想帮你避免什么？', options: ['被人觉得我不行', '让关系变糟', '正面冲突', '承认我需要帮忙', '这些都不准确'] }
      ], next: 'p19' },

    p19: { type: 'dialogue', art: 'classroom', speaker: '沈老师', text: '「下周开始，这学期的『未来提案展』正式启动。」', next: 'p20' },

    p20: { type: 'dialogue', art: 'classroom', speaker: '沈老师', text: '「四人一组，自己选一个真实存在的校园问题，去查，去问，去做出方案。期末公开发表，展板上要写你们每个人的名字。」', next: 'p21' },

    p21: { type: 'dialogue', art: 'classroom', speaker: '', text: '教室里嘈杂起来。分组名单传到你手上时，你已经被写进了第三组，后面还有一行小字：协调人。', next: 'p22' },

    p22: { type: 'dialogue', art: 'classroom', speaker: '林澈', text: '「我给你写的，」林澈在后面戳你的背，「你最会照顾人了，你当组长我们都放心。」', next: 'p23' },

    p23: { type: 'dialogue', art: 'classroom', speaker: '', text: '你看着自己的名字，忽然想到一件很奇怪的事：这一整天，好像没有一件事是我自己决定的。', next: 'p24' },

    p24: { type: 'practice', art: 'clarity', prompt: '现实练习 · 两分钟以内<br><br>回想今天（或最近）一次让你不舒服的互动。<br><br>只写四行：<br>1. 发生了什么？<br>2. 我当时做了什么？<br>3. 我最害怕发生什么？<br>4. 我那样做，可能在保护什么？<br><br>不用写得漂亮，也不用给出结论。', next: 'p25' },

    p25: { type: 'dialogue', art: 'clarity', speaker: '', text: '这一学期还有十六周。展板上要写你的名字。', next: 'END' }
  }
};
