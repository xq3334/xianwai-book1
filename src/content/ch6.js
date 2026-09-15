// 第六章 · 未来不必一次决定（自我接纳 · 人生的意义 · 此时此刻）
export const ch6 = {
  title: '第六章 · 未来不必一次决定',
  nodes: {
    start: { type: 'dialogue', art: 'classroom', speaker: '', text: '第十四周，生涯规划活动。礼堂里摆了十几张桌子，每张后面坐一个校友。表格上要填三个志愿方向。', next: 'n2' },

    n2: { type: 'dialogue', art: 'entangled', speaker: '妈妈', text: '前一天晚上，妈妈把那张打印纸又拿出来了。「就填这个。我跟你舅舅都问过了。」', next: 'n3' },

    n3: { type: 'dialogue', art: 'entangled', speaker: '顾言', text: '顾言在班里说：「填自己感兴趣的最傻。兴趣不能吃饭。」他说得很确定，好像他从没犹豫过。', next: 'n4' },

    n4: { type: 'dialogue', art: 'entangled', speaker: '林澈', text: '林澈说：「随便填，反正到时候还能改。」', next: 'n5' },

    n5: { type: 'dialogue', art: 'entangled', speaker: '沈老师', text: '沈老师说：「早点定，早点积累。」', next: 'n6' },

    n6: { type: 'dialogue', art: 'entangled', speaker: '', text: '四个人，四个答案，每个都很有道理。你坐在礼堂门口，表格空着。', next: 'n7' },

    n7: { type: 'dialogue', art: 'entangled', speaker: '', text: '你真正的问题不是「填哪个」。你的问题是：我根本不知道我喜欢什么，而所有人好像都知道。', next: 'n8' },

    n8: { type: 'dialogue', art: 'entangled', speaker: '', text: '你打开手机备忘录，看到自己去年写的一行字：「想做能让东西变好用一点的事。」', next: 'n9' },

    n9: { type: 'dialogue', art: 'entangled', speaker: '', text: '写得很含糊。含糊到不能填进任何一张表。', next: 'n10' },

    n10: { type: 'choice', art: 'entangled', prompt: '表格要在今天交。你会怎么做？', choices: [
      { text: '填妈妈那张纸上的专业', effects: [{ trait: 'autonomy', delta: -3 }], next: 'n11a' },
      { text: '填一个听起来最有面子的方向', effects: [{ trait: 'autonomy', delta: -2 }, { trait: 'acceptance', delta: -2 }], next: 'n11b' },
      { text: '继续查资料，先不交，等想清楚', effects: [{ trait: 'action', delta: -2 }], next: 'n11c' },
      { text: '去采访那张桌子后面做产品的校友', effects: [{ trait: 'action', delta: 3 }, { trait: 'autonomy', delta: 2 }, { trait: 'acceptance', delta: 1 }], next: 'n11d' },
      { text: '在表格上写「暂不确定」，附一个一周的小实验计划', effects: [{ trait: 'action', delta: 2 }, { trait: 'autonomy', delta: 3 }, { trait: 'acceptance', delta: 3 }], next: 'n11e' }
    ]},

    n11a: { type: 'dialogue', art: 'entangled', speaker: '', text: '你填完交了。回家路上妈妈打电话来，声音很轻松。你也笑了。可你想不起来这个专业到底学什么。', next: 'n12' },

    n11b: { type: 'dialogue', art: 'entangled', speaker: '', text: '你填了那个名字听起来最好的方向。班里有人「哇」了一声。那一声让你舒服了一整个下午。', next: 'n12' },

    n11c: { type: 'dialogue', art: 'entangled', speaker: '', text: '你收藏了十七篇专业介绍。晚上十二点，你一篇都没看完。表格还是空的。', next: 'n12' },

    n11d: { type: 'dialogue', art: 'corridor', speaker: '校友', text: '「你问我后悔过吗？后悔过三次。」那个人笑了，「但每次后悔的时候我都在做事，所以后悔也算数据。」', next: 'n11d2' },

    n11d2: { type: 'dialogue', art: 'corridor', speaker: '校友', text: '「你现在不用知道答案。你只要知道下一步能试什么。」', next: 'n12' },

    n11e: { type: 'dialogue', art: 'clarity', speaker: '沈老师', text: '沈老师看着你那一栏，愣了一下。「……这样填的人，你是第一个。」', next: 'n11e2' },

    n11e2: { type: 'dialogue', art: 'clarity', speaker: '沈老师', text: '他看完那份一周计划，在旁边签了字。「行。下周来告诉我你试出什么了。」', next: 'n12' },

    n12: { type: 'dialogue', art: 'clarity', speaker: '沈老师', text: '活动结束后，礼堂空了。沈老师在收桌子，你帮他抬另一头。', next: 'n13' },

    n13: { type: 'dialogue', art: 'clarity', speaker: '', text: '「老师，如果选错了怎么办。」', next: 'n14' },

    n14: { type: 'dialogue', art: 'clarity', speaker: '沈老师', text: '「你把人生当成一道题，所以怕选错。」他把桌子放下，「可它更像跳舞。跳舞的人不问『我什么时候到』。」', next: 'n15' },

    n15: { type: 'dialogue', art: 'clarity', speaker: '沈老师', text: '「意义不是等你找到的。是你做着做着，自己给它加上的。」',
      effects: [{ unlockCard: 'meaning' }], next: 'n16' },

    n16: { type: 'dialogue', art: 'clarity', speaker: '', text: '「可我现在什么都不确定。这样也可以吗。」', next: 'n17' },

    n17: { type: 'dialogue', art: 'clarity', speaker: '沈老师', text: '「可以。你只需要承认『我现在就是这个水平』，然后从这里往前迈一步。这不叫放弃，这叫从真实的地方出发。」',
      effects: [{ unlockCard: 'selfacceptance' }, { unlockCard: 'hereandnow' }], next: 'n18' },

    n18: { type: 'observation', art: 'clarity', prompt: '把「决定一生」换成「做一个小实验」。',
      questions: [
        { type: 'text', question: '你现在最好奇、最想多知道一点的事情是什么？（不用高大上，可以很小）' },
        { type: 'text', question: '为期一周，你能做的一个小实验是什么？（要能在七天内做完）' }
      ], next: 'n19' },

    n19: { type: 'practice', art: 'clarity', prompt: '现实练习 · 一周小实验<br><br>写下三行：<br><br>1. 我现在还不知道……<br>2. 但这一周我可以先做……<br>3. 七天后我用什么判断这次实验的结果？<br><br>不要写「我要变得更好」。写「我要联系一个人／做一件东西／读完一样东西」。', next: 'n20' },

    n20: { type: 'dialogue', art: 'clarity', speaker: '妈妈', text: '当晚，妈妈问你填了什么。', next: 'n21' },

    n21: { type: 'choice', art: 'clarity', prompt: '你会怎么说？', choices: [
      { text: '「填了你说的那个。」（无论实际填了什么）', effects: [{ trait: 'autonomy', delta: -2 }, { trait: 'repair', delta: -1 }], next: 'n22a' },
      { text: '「我自己填的。你别管了。」', effects: [{ trait: 'autonomy', delta: 1 }, { trait: 'ally', delta: -2 }, { trait: 'repair', delta: -1 }], next: 'n22b' },
      { text: '「我填了别的。我知道你担心，我们能不能约个时间正式谈一次。」', effects: [{ trait: 'autonomy', delta: 3 }, { trait: 'repair', delta: 3 }, { trait: 'boundary', delta: 2 }], next: 'n22c' }
    ]},

    n22a: { type: 'dialogue', art: 'entangled', speaker: '', text: '她放心了。你回房间，把门关上，坐在床边很久没开灯。', next: 'n23' },

    n22b: { type: 'dialogue', art: 'entangled', speaker: '妈妈', text: '「我别管？」她的声音抬高了，「行，你厉害。」那晚家里很安静，安静得让人难受。', next: 'n23' },

    n22c: { type: 'dialogue', art: 'clarity', speaker: '妈妈', text: '她愣住了。「……正式谈？」', next: 'n22c2' },

    n22c2: { type: 'dialogue', art: 'clarity', speaker: '', text: '「对。周六晚上，半小时。我讲我的想法，你讲你担心什么。我们都不打断对方。」', next: 'n22c3' },

    n22c3: { type: 'dialogue', art: 'clarity', speaker: '妈妈', text: '她看了你几秒，忽然笑了一下，那个笑很复杂。「……你长大了。」然后她说，「周六可以。」', next: 'n23' },

    n23: { type: 'dialogue', art: 'clarity', speaker: '', text: '第十五周。距离提案展还有九天。展板还没做完，数据要重算，讲稿一个字都没写。', next: 'END' }
  }
};
