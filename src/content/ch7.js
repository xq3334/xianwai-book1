// 第七章 · 并肩，不是绑在一起（他者信赖 · 他者贡献 · 共同体感觉）
export const ch7 = {
  title: '第七章 · 并肩，不是绑在一起',
  nodes: {
    start: { type: 'dialogue', art: 'entangled', speaker: '', text: '第十六周，周四晚上十一点。展板还有两页没贴完，主讲稿还差最后三段，明天下午就要预演。', next: 'n2' },

    n2: { type: 'dialogue', art: 'entangled', speaker: '', text: '你坐在书桌前，盯着那三段空白的地方。手机上有六条未读消息。', next: 'n3' },

    n3: { type: 'dialogue', art: 'entangled', speaker: '林澈', text: '林澈：「我明天早上要补考，今晚不行了，抱歉。」', next: 'n4' },

    n4: { type: 'dialogue', art: 'entangled', speaker: '许禾', text: '许禾：「数据表我整理完了，放在云盘里。你要是用不上可以删。」', next: 'n5' },

    n5: { type: 'dialogue', art: 'entangled', speaker: '顾言', text: '顾言：「最后一张图我重做了三版，你看哪个能用。」', next: 'n6' },

    n6: { type: 'dialogue', art: 'entangled', speaker: '', text: '你打开云盘。许禾那份表格整理得很细，每一行都标了来源和日期。顾言发来的三版图，最后一版确实比前两版清楚。', next: 'n7' },

    n7: { type: 'dialogue', art: 'entangled', speaker: '', text: '你忽然意识到一件事：你一直在担心他们靠不住。可现在已经到了最后一周，东西一件一件交上来了。', next: 'n8' },

    n8: { type: 'dialogue', art: 'entangled', speaker: '', text: '你以为自己是在「替所有人负责」，其实是在用「控制」换「安全感」。', next: 'n9' },

    n9: { type: 'dialogue', art: 'entangled', speaker: '', text: '凌晨一点，你写完了两段。第三段你写不出来。那一段需要总结整个项目的意义，而你发现你答不上来。', next: 'n10' },

    n10: { type: 'choice', art: 'entangled', prompt: '你会怎么做？', choices: [
      { text: '熬夜自己写完，明天直接交', effects: [{ trait: 'boundary', delta: -3 }, { trait: 'action', delta: 1 }], next: 'n11a' },
      { text: '明天早上叫大家开会，一起想最后一段', effects: [{ trait: 'ally', delta: 3 }, { trait: 'boundary', delta: 2 }, { trait: 'autonomy', delta: 1 }], next: 'n11b' },
      { text: '在组群里问：「有人能帮我想最后一段吗」', effects: [{ trait: 'ally', delta: 2 }, { trait: 'acceptance', delta: 2 }], next: 'n11c' },
      { text: '放弃这一段，明天直接讲两段', effects: [{ trait: 'action', delta: -2 }, { trait: 'acceptance', delta: -1 }], next: 'n11d' }
    ]},

    n11a: { type: 'dialogue', art: 'entangled', speaker: '', text: '你写到三点半。写完了，但你自己看着也觉得空。早上八点到教室，顾言问：「你昨晚没睡？」', next: 'n12' },

    n11b: { type: 'dialogue', art: 'clarity', speaker: '', text: '早上七点十分，你在群里发：「最后一段我写不出来。7:40图书馆碰一下，二十分钟，一起想。」', next: 'n11b2' },

    n11b2: { type: 'dialogue', art: 'clarity', speaker: '顾言', text: '顾言七点十五分回：「行。」许禾发了个OK的表情。林澈没回，但七点三十八分的时候他到了。', next: 'n12' },

    n11c: { type: 'dialogue', art: 'clarity', speaker: '', text: '你在群里发了那句话，然后盯着屏幕。两分钟后，许禾开始打字。', next: 'n11c2' },

    n11c2: { type: 'dialogue', art: 'clarity', speaker: '许禾', text: '许禾：「我觉得……这个项目最有用的不是方案，是我们证明了一件很小的事也可以被看见。」', next: 'n11c3' },

    n11c3: { type: 'dialogue', art: 'clarity', speaker: '顾言', text: '顾言：「可以。再加一句，我们没有解决所有问题，但我们开了一个头。」', next: 'n12' },

    n11d: { type: 'dialogue', art: 'entangled', speaker: '', text: '你第二天直接讲了两段。预演时沈老师问：「结尾呢？」你说：「还没想好。」他没说话，但眼神有点失望。', next: 'n12' },

    n12: { type: 'dialogue', art: 'classroom', speaker: '沈老师', text: '预演结束。沈老师把你们四个叫到走廊。「提案没问题。我想问另一件事——这一学期，你们组谁最累？」', next: 'n13' },

    n13: { type: 'dialogue', art: 'classroom', speaker: '', text: '没有人说话。然后许禾指了你。林澈也点了点头。顾言看了你一眼，没表态。', next: 'n14' },

    n14: { type: 'dialogue', art: 'classroom', speaker: '沈老师', text: '「协调人确实会更累一点。但如果累到别人觉得帮不上忙，那就不叫协调，叫一个人扛。」', next: 'n15' },

    n15: { type: 'dialogue', art: 'classroom', speaker: '沈老师', text: '「信赖不是『我验证过你没问题，所以信你』。信赖是我先相信你会尽力，然后看你怎么做。结果交给你承担。」',
      effects: [{ unlockCard: 'trust' }], next: 'n16' },

    n16: { type: 'dialogue', art: 'classroom', speaker: '', text: '「可我信了，他们没做到怎么办。」你说。', next: 'n17' },

    n17: { type: 'dialogue', art: 'classroom', speaker: '沈老师', text: '「那你们就一起承担结果，一起复盘，一起修。」他说，「一个人全扛，你以为是负责，其实是在剥夺别人成长的机会。」', next: 'n18' },

    n18: { type: 'dialogue', art: 'classroom', speaker: '沈老师', text: '「顺便说一句——归属感不是靠赢过别人换来的。是你做了一件哪怕没人夸也仍然有价值的事。」',
      effects: [{ unlockCard: 'community' }, { unlockCard: 'contribution' }], next: 'n19' },

    n19: { type: 'dialogue', art: 'corridor', speaker: '顾言', text: '散会后，顾言叫住你。「你其实可以早点说你写不出来。」', next: 'n20' },

    n20: { type: 'dialogue', art: 'corridor', speaker: '', text: '「……我以为你们都指望我一个人弄完。」', next: 'n21' },

    n21: { type: 'dialogue', art: 'corridor', speaker: '顾言', text: '「谁这么说了？」他皱了一下眉，「你从第一天就这么觉得，我们也就懒得插手了。」', next: 'n22' },

    n22: { type: 'dialogue', art: 'corridor', speaker: '', text: '你愣住了。你以为你是在照顾所有人，原来他们一直在等你开口。', next: 'n23' },

    n23: { type: 'choice', art: 'corridor', prompt: '顾言要走了。你会不会叫住他？', choices: [
      { text: '不叫。算了', effects: [{ trait: 'repair', delta: -2 }], next: 'n24a' },
      { text: '「顾言。对不起。」', effects: [{ trait: 'repair', delta: 3 }, { trait: 'ally', delta: 2 }, { trait: 'acceptance', delta: 2 }], next: 'n24b' },
      { text: '「下学期如果还有项目，我想跟你再合作一次。」', effects: [{ trait: 'repair', delta: 2 }, { trait: 'ally', delta: 3 }, { trait: 'action', delta: 1 }], next: 'n24c' }
    ]},

    n24a: { type: 'dialogue', art: 'corridor', speaker: '', text: '他走了。你站在原地，想说的话没说出来。', next: 'n25' },

    n24b: { type: 'dialogue', art: 'corridor', speaker: '顾言', text: '「……道什么歉。」他停了几秒，「我也有问题。我一直觉得你不需要帮忙。」', next: 'n24b2' },

    n24b2: { type: 'dialogue', art: 'corridor', speaker: '', text: '你们站在走廊上，谁也没走。最后他说：「后天见。」', next: 'n25' },

    n24c: { type: 'dialogue', art: 'corridor', speaker: '顾言', text: '他愣了一下。「……行啊。」他想了想，「不过下次你得说清楚你做得到哪里。」', next: 'n25' },

    n25: { type: 'practice', art: 'clarity', prompt: '现实练习 · 信赖与贡献<br><br>写两行：<br><br>1. 这周我愿意向谁求助一次？（不是指派任务，是真的承认自己需要帮忙）<br>2. 这周我能为一件事贡献什么？即使没人夸奖，这件事仍然值得做。<br><br>第一行练习信赖，第二行练习贡献。', next: 'n26' },

    n26: { type: 'dialogue', art: 'clarity', speaker: '', text: '第十七周，周五下午两点。提案展正式开始。', next: 'END' }
  }
};
