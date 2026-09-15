// 第五章 · 一句「你真棒」（横向关系 · 表扬与鼓励）
export const ch5 = {
  title: '第五章 · 一句「你真棒」',
  nodes: {
    start: { type: 'dialogue', art: 'classroom', speaker: '', text: '许禾把本子放在你桌上就退了半步，像在等挨骂。', next: 'n2' },

    n2: { type: 'dialogue', art: 'classroom', speaker: '许禾', text: '「周四那天我记的是第三节课后，不是第二节。所以那一天的数据……全错了。」', next: 'n3' },

    n3: { type: 'dialogue', art: 'classroom', speaker: '', text: '那意味着要重新去数一天。而距离提案展只剩五周。', next: 'n4' },

    n4: { type: 'dialogue', art: 'classroom', speaker: '', text: '许禾成绩在班里靠后。他从进组第一天就一直在说「我可能帮不上什么」。', next: 'n5' },

    n5: { type: 'choice', art: 'classroom', prompt: '你会怎么做？', choices: [
      { text: '「没关系没关系，你已经很棒了！我来重做。」', effects: [{ trait: 'boundary', delta: -3 }, { trait: 'ally', delta: -1 }], next: 'n6a' },
      { text: '「这么简单的事都能错？」', effects: [{ trait: 'ally', delta: -3 }, { trait: 'repair', delta: -2 }], next: 'n6b' },
      { text: '「行，我知道了。」然后自己默默去补', effects: [{ trait: 'boundary', delta: -2 }], next: 'n6c' },
      { text: '「你已经数完了另外四天，那四天是能用的。周四这天你想怎么补？」', effects: [{ trait: 'ally', delta: 3 }, { trait: 'boundary', delta: 2 }, { trait: 'autonomy', delta: 1 }], next: 'n6d' }
    ]},

    n6a: { type: 'dialogue', art: 'entangled', speaker: '许禾', text: '「……哦。」他松了口气，但那口气松得很奇怪。「那你辛苦了。」', next: 'n6a2' },

    n6a2: { type: 'dialogue', art: 'entangled', speaker: '', text: '接下来两周，他再也没有主动接过任何任务。', next: 'n7' },

    n6b: { type: 'dialogue', art: 'entangled', speaker: '许禾', text: '他的脸红了，然后白了。「……对不起。」他把本子拿走，第二天开始不再看你的眼睛。', next: 'n7' },

    n6c: { type: 'dialogue', art: 'entangled', speaker: '', text: '你周四又去数了一遍。你没跟任何人说。许禾以为这件事已经过去了，其实它变成了你身上的第五件事。', next: 'n7' },

    n6d: { type: 'dialogue', art: 'clarity', speaker: '许禾', text: '「……我？」他抬起头，「我可以自己再数一次吗。这次我把时间写在最上面。」', next: 'n6d2' },

    n6d2: { type: 'dialogue', art: 'clarity', speaker: '', text: '「可以。周四之前给我就行。」', next: 'n6d3' },

    n6d3: { type: 'dialogue', art: 'clarity', speaker: '许禾', text: '他点了点头，走的时候脚步比来的时候快。周三晚上他就发来了，还附了一张自己画的时间表。', next: 'n7' },

    n7: { type: 'dialogue', art: 'entangled', speaker: '林澈', text: '同一周，林澈交上来一份稿子。三百字，有两段是从网上抄的。', next: 'n8' },

    n8: { type: 'dialogue', art: 'entangled', speaker: '林澈', text: '「怎么样？我写得还行吧？」他很期待地看着你。', next: 'n9' },

    n9: { type: 'choice', art: 'entangled', prompt: '你会怎么说？', choices: [
      { text: '「写得真好，你太厉害了。」（然后回去自己重写）', effects: [{ trait: 'boundary', delta: -3 }, { trait: 'repair', delta: -1 }], next: 'n10a' },
      { text: '「你这不是抄的吗？」', effects: [{ trait: 'ally', delta: -2 }, { trait: 'boundary', delta: 1 }], next: 'n10b' },
      { text: '「第二段和第四段我在网上见过。剩下那一段是你自己写的，那一段的角度很有用。」', effects: [{ trait: 'ally', delta: 2 }, { trait: 'boundary', delta: 3 }, { trait: 'repair', delta: 2 }], next: 'n10c' }
    ]},

    n10a: { type: 'dialogue', art: 'entangled', speaker: '', text: '他很高兴。你熬到一点半重写了那份稿子。第二天他说：「我说了我能写吧。」', next: 'n11' },

    n10b: { type: 'dialogue', art: 'entangled', speaker: '林澈', text: '「查得挺仔细啊你。」他把稿子抽回去，「那你自己写吧。」他三天没交新的。', next: 'n11' },

    n10c: { type: 'dialogue', art: 'clarity', speaker: '林澈', text: '他有点尴尬，但也有点意外。「……哪一段？」', next: 'n10c2' },

    n10c2: { type: 'dialogue', art: 'clarity', speaker: '', text: '「你写『大家不是不想排队，是不知道哪一层人少』。这句话是我们四个人里第一个说出问题在哪的。」', next: 'n10c3' },

    n10c3: { type: 'dialogue', art: 'clarity', speaker: '林澈', text: '他挠了挠头。「那我把那段扩开写？」', next: 'n11' },

    n11: { type: 'dialogue', art: 'clarity', speaker: '沈老师', text: '「你今天做了一件很难的事。」沈老师在办公室门口拦住你，「不过我不确定你自己知不知道那是什么。」', next: 'n12' },

    n12: { type: 'dialogue', art: 'clarity', speaker: '沈老师', text: '「表扬和鼓励，看起来一样，方向完全相反。」', next: 'n13' },

    n13: { type: 'dialogue', art: 'clarity', speaker: '沈老师', text: '「『你真棒』是我坐在上面给你打分。『你完成了这一部分，我看到了』是我站在你旁边说一句实话。」', next: 'n14' },

    n14: { type: 'dialogue', art: 'clarity', speaker: '沈老师', text: '「一个让人上瘾于被评价，一个让人相信自己能解决问题。」',
      effects: [{ unlockCard: 'encouragement' }], next: 'n15' },

    n15: { type: 'dialogue', art: 'clarity', speaker: '', text: '「可许禾确实做得不如我们。这也要装作一样吗。」', next: 'n16' },

    n16: { type: 'dialogue', art: 'clarity', speaker: '沈老师', text: '「不用装。能力有差别，这是事实。」他说，「平等不是假装大家水平一样，是不用高低去定义一个人值多少。」', next: 'n17' },

    n17: { type: 'dialogue', art: 'clarity', speaker: '沈老师', text: '「你可以说『这里错了，我们改』，同时不说『你不行』。这两句话之间的距离，就是横向关系。」',
      effects: [{ unlockCard: 'horizontal' }], next: 'n18' },

    n18: { type: 'dialogue', art: 'entangled', speaker: '', text: '走出办公室，你想起自己从小到大听过最多的一句夸奖：「你最省心了。」', next: 'n19' },

    n19: { type: 'dialogue', art: 'entangled', speaker: '', text: '你忽然发现，那句话夸的不是你，是「你没有给别人添麻烦」。', next: 'n20' },

    n20: { type: 'practice', art: 'clarity', prompt: '现实练习 · 说一句鼓励，不说表扬<br><br>今天找一个人，对他说一句<b>具体的</b>话。<br><br>公式：<br>「谢谢你完成了____，这让____变得更____。」<br><br>不要说「你真厉害」。填空。填不出来就说明你还没看清对方做了什么。', next: 'n21' },

    n21: { type: 'dialogue', art: 'clarity', speaker: '', text: '第十三周结束。展板初稿贴出来了，四个人的名字排在右下角。', next: 'END' }
  }
};
