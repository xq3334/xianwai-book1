export const ch6 = {
  id: 'ch6',
  title: '第六章：同盟的瓦解',
  nodes: {
    start: {
      bg: 'classroom-morning',
      narrator: true,
      text: '【周一上午，教室】',
      next: 'enter_classroom'
    },

    enter_classroom: {
      text: '你走进教室，感觉气氛不对。',
      next: 'observe_linche_xuhe'
    },

    observe_linche_xuhe: {
      chars: [
        { id: 'linche', img: 'linche', pos: 'left' },
        { id: 'xuhe', img: 'xuhe-try', pos: 'right' }
      ],
      narrator: true,
      text: '林澈和许禾坐在一起，在小声说话。看到你进来，两人停下了。',
      next: 'observe_guyan'
    },

    observe_guyan: {
      chars: [{ id: 'guyan', img: 'guyan', pos: 'center' }],
      narrator: true,
      text: '顾言坐在角落，看了你一眼，又移开视线。',
      next: 'inner_what_happened'
    },

    inner_what_happened: {
      narrator: true,
      inner: true,
      text: '发生什么了？',
      next: 'group_discussion_time'
    },

    group_discussion_time: {
      narrator: true,
      text: '【上午，小组讨论时间】',
      next: 'four_gather'
    },

    four_gather: {
      chars: [
        { id: 'linche', img: 'linche', pos: 'left' },
        { id: 'guyan', img: 'guyan', pos: 'center' },
        { id: 'xuhe', img: 'xuhe-sorry', pos: 'right' }
      ],
      narrator: true,
      text: '四人聚在一起，气氛微妙。',
      next: 'linche_announces'
    },

    linche_announces: {
      chars: [{ id: 'linche', img: 'linche-grin', pos: 'left' }],
      dialog: { char: '林澈', text: '"我和许禾讨论了一下，觉得第三部分可以这样改。"' },
      next: 'you_stunned'
    },

    you_stunned: {
      text: '你愣住："什么时候讨论的？"',
      next: 'xuhe_answers'
    },

    xuhe_answers: {
      chars: [{ id: 'xuhe', img: 'xuhe-sorry', pos: 'right' }],
      dialog: { char: '许禾', text: '低着头："昨天晚上……"' },
      next: 'linche_casual'
    },

    linche_casual: {
      chars: [{ id: 'linche', img: 'linche', pos: 'left' }],
      dialog: { char: '林澈', text: '"哦，忘了跟你说。反正也不是什么大事。"' },
      next: 'guyan_speaks'
    },

    guyan_speaks: {
      chars: [{ id: 'guyan', img: 'guyan-sharp', pos: 'center' }],
      dialog: { char: '顾言', text: '突然开口："所以现在你们俩一组，我们俩一组？"' },
      next: 'linche_defends'
    },

    linche_defends: {
      chars: [{ id: 'linche', img: 'linche-plead', pos: 'left' }],
      dialog: { char: '林澈', text: '"不是，我只是——"' },
      next: 'guyan_dismisses'
    },

    guyan_dismisses: {
      chars: [{ id: 'guyan', img: 'guyan', pos: 'center' }],
      dialog: { char: '顾言', text: '"算了，无所谓。"戴上耳机。' },
      next: 'inner_divided'
    },

    inner_divided: {
      narrator: true,
      inner: true,
      text: '小组分裂了。而且是以我为分界线。',
      next: 'lunch_rooftop'
    },

    lunch_rooftop: {
      bg: 'rooftop-day',
      narrator: true,
      text: '【中午，天台】',
      next: 'you_alone'
    },

    you_alone: {
      narrator: true,
      text: '你独自来到天台，顾言已经在这里。',
      next: 'guyan_refugee'
    },

    guyan_refugee: {
      chars: [{ id: 'guyan', img: 'guyan-soft', pos: 'center' }],
      dialog: { char: '顾言', text: '"来避难？"' },
      next: 'you_bitter_smile'
    },

    you_bitter_smile: {
      text: '你苦笑。',
      next: 'guyan_i_told_you'
    },

    guyan_i_told_you: {
      chars: [{ id: 'guyan', img: 'guyan-sharp', pos: 'center' }],
      dialog: { char: '顾言', text: '"我说过吧，许禾那种人，你帮不了的。"' },
      next: 'guyan_new_support'
    },

    guyan_new_support: {
      dialog: { char: '顾言', text: '"她找到新的依靠了——林澈。"' },
      next: 'guyan_betrayer'
    },

    guyan_betrayer: {
      dialog: { char: '顾言', text: '"而且他们现在把你当成\'背叛者\'。"' },
      next: 'choice_respond'
    },

    choice_respond: {
      prompt: '你说：',
      choices: [
        { text: '"我没有背叛任何人。"', next: 'defend_self', traits: { autonomy: 1 } },
        { text: '"也许我真的做错了。"', next: 'self_doubt', traits: { autonomy: -1, acceptance: -1 } },
        { text: '"你怎么看？"', next: 'ask_guyan', traits: { ally: 1 } }
      ]
    },

    defend_self: {
      text: '"我没有背叛任何人。"',
      chars: [{ id: 'guyan', img: 'guyan-soft', pos: 'center' }],
      dialog: { char: '顾言', text: '"我知道。但他们不这么想。"' },
      next: 'guyan_perspective'
    },

    self_doubt: {
      text: '"也许我真的做错了。"',
      chars: [{ id: 'guyan', img: 'guyan', pos: 'center' }],
      dialog: { char: '顾言', text: '皱眉："你又开始了。"' },
      next: 'guyan_直接'
    },

    guyan_直接: {
      dialog: { char: '顾言', text: '"你没做错。是他们不想改变。"' },
      next: 'guyan_perspective'
    },

    ask_guyan: {
      text: '"你怎么看？"',
      chars: [{ id: 'guyan', img: 'guyan-pause', pos: 'center' }],
      dialog: { char: '顾言', text: '"我觉得你做得对。"' },
      next: 'guyan_but'
    },

    guyan_but: {
      dialog: { char: '顾言', text: '"但\'对\'不等于\'舒服\'。"' },
      next: 'guyan_perspective'
    },

    guyan_perspective: {
      chars: [{ id: 'guyan', img: 'guyan-sharp', pos: 'center' }],
      dialog: { char: '顾言', text: '"你打破了原来的平衡——林澈掌控，许禾依赖，你顺从，我反抗。"' },
      next: 'guyan_change'
    },

    guyan_change: {
      dialog: { char: '顾言', text: '"现在你不顺从了，他们当然不爽。"' },
      next: 'guyan_hate_change'
    },

    guyan_hate_change: {
      dialog: { char: '顾言', text: '"因为你的改变，让他们也得改变。而人都讨厌改变。"' },
      next: 'silence'
    },

    silence: {
      narrator: true,
      text: '沉默。',
      next: 'guyan_water'
    },

    guyan_water: {
      chars: [{ id: 'guyan', img: 'guyan-soft', pos: 'center' }],
      narrator: true,
      text: '顾言递给你一瓶水：',
      dialog: { char: '顾言', text: '"坚持住。"' },
      next: 'guyan_real_relationship'
    },

    guyan_real_relationship: {
      dialog: { char: '顾言', text: '"真正的关系，是经得起冲突的。"' },
      next: 'guyan_tool_or_friend'
    },

    guyan_tool_or_friend: {
      dialog: { char: '顾言', text: '"如果他们因为你设置边界就疏远你，说明他们要的不是朋友，是工具。"' },
      next: 'inner_hurts'
    },

    inner_hurts: {
      narrator: true,
      inner: true,
      text: '他说得对。但为什么我还是这么难受？',
      next: 'friday_meeting'
    },

    friday_meeting: {
      bg: 'classroom-afternoon',
      narrator: true,
      text: '【周五，期中考试前的班会】',
      next: 'teacher_announces'
    },

    teacher_announces: {
      narrator: true,
      text: '班主任宣布："下周期中考试，大家好好准备。另外，学校要求各班心理委员做一次\'心理状况调查\'。"',
      next: 'all_look_at_you'
    },

    all_look_at_you: {
      narrator: true,
      text: '全班看向你。',
      next: 'after_class'
    },

    after_class: {
      narrator: true,
      text: '下课后——',
      next: 'linche_ignores'
    },

    linche_ignores: {
      narrator: true,
      text: '林澈没有像往常一样找你。',
      next: 'xuhe_avoids'
    },

    xuhe_avoids: {
      narrator: true,
      text: '许禾绕开你走了。',
      next: 'guyan_approaches'
    },

    guyan_approaches: {
      chars: [{ id: 'guyan', img: 'guyan-soft', pos: 'center' }],
      dialog: { char: '顾言', text: '走过来："需要帮忙吗？"' },
      next: 'choice_help'
    },

    choice_help: {
      prompt: '你的回答：',
      choices: [
        { text: '"好啊。"', next: 'accept_help', traits: { ally: 2 } },
        { text: '"我自己来吧。"', next: 'independent', traits: { autonomy: 2 } },
        { text: '"你为什么要帮我？"', next: 'question_why', traits: { boundary: 1 } }
      ]
    },

    accept_help: {
      text: '"好啊。"',
      chars: [{ id: 'guyan', img: 'guyan-soft', pos: 'center' }],
      dialog: { char: '顾言', text: '点头："走吧。"' },
      next: 'sunday_night'
    },

    independent: {
      text: '"我自己来吧。"',
      chars: [{ id: 'guyan', img: 'guyan-soft', pos: 'center' }],
      dialog: { char: '顾言', text: '"行。但有需要随时找我。"' },
      next: 'sunday_night'
    },

    question_why: {
      text: '"你为什么要帮我？"',
      chars: [{ id: 'guyan', img: 'guyan-pause', pos: 'center' }],
      dialog: { char: '顾言', text: '愣了一下，然后笑了。' },
      next: 'guyan_reason'
    },

    guyan_reason: {
      dialog: { char: '顾言', text: '"因为你是唯一一个听我说完话的人。"' },
      next: 'guyan_reason_2'
    },

    guyan_reason_2: {
      dialog: { char: '顾言', text: '"而且你敢承认自己的问题。这很难得。"' },
      next: 'guyan_reason_3'
    },

    guyan_reason_3: {
      dialog: { char: '顾言', text: '"我讨厌虚伪的人，但你……在努力变得不虚伪。"' },
      next: 'guyan_shoulder'
    },

    guyan_shoulder: {
      chars: [{ id: 'guyan', img: 'guyan-soft', pos: 'center' }],
      narrator: true,
      text: '他拍拍你肩膀：',
      dialog: { char: '顾言', text: '"所以我愿意帮你。"' },
      next: 'inner_real_support'
    },

    inner_real_support: {
      narrator: true,
      inner: true,
      text: '原来真正的支持，不是替我做事，而是看见我的努力。',
      next: 'sunday_night'
    },

    sunday_night: {
      bg: 'home-night',
      narrator: true,
      text: '【周日晚上，班级群里突然炸了】',
      next: 'group_message'
    },

    group_message: {
      narrator: true,
      text: '有人发消息："心理委员是不是应该保密啊？"',
      next: 'you_nervous'
    },

    you_nervous: {
      narrator: true,
      inner: true,
      text: '你心一紧，点开。',
      next: 'rumor'
    },

    rumor: {
      narrator: true,
      text: '有人说："我听说XX的问卷结果被说出去了……"',
      next: 'private_message'
    },

    private_message: {
      narrator: true,
      text: '你立刻私聊那个同学："怎么回事？"',
      next: 'classmate_reply'
    },

    classmate_reply: {
      narrator: true,
      text: '对方："许禾跟我说，你跟她讲了我的问卷内容。"',
      next: 'shock'
    },

    shock: {
      narrator: true,
      inner: true,
      text: '震惊、愤怒、不解。',
      next: 'message_xuhe'
    },

    message_xuhe: {
      narrator: true,
      text: '你立刻私聊许禾："你为什么要这么说？"',
      next: 'xuhe_no_reply'
    },

    xuhe_no_reply: {
      narrator: true,
      text: '许禾没回。',
      next: 'ten_minutes'
    },

    ten_minutes: {
      narrator: true,
      text: '过了十分钟——',
      next: 'xuhe_reply_1'
    },

    xuhe_reply_1: {
      narrator: true,
      text: '【许禾】："我没有……我只是随口说的……"',
      next: 'xuhe_reply_2'
    },

    xuhe_reply_2: {
      narrator: true,
      text: '【许禾】："我不知道会这样……"',
      next: 'you_confront'
    },

    you_confront: {
      narrator: true,
      text: '【你】："你明明知道我没跟你说任何人的问卷。"',
      next: 'xuhe_sorry'
    },

    xuhe_sorry: {
      narrator: true,
      text: '【许禾】："对不起……"',
      next: 'xuhe_but'
    },

    xuhe_but: {
      narrator: true,
      text: '【许禾】："但你也不是不理我了吗……"',
      next: 'inner_revenge'
    },

    inner_revenge: {
      narrator: true,
      inner: true,
      text: '她在报复我。因为我拒绝了她。',
      next: 'choice_respond_xuhe'
    },

    choice_respond_xuhe: {
      prompt: '你的回复：',
      choices: [
        { text: '"我们不要再联系了。"', next: 'cut_off', traits: { boundary: 3, ally: -2 } },
        { text: '"你知道这样对我的影响有多大吗？"', next: 'question_impact', traits: { boundary: 2 } },
        { text: '不回复，截图证据', next: 'save_evidence', traits: { action: 2 } }
      ]
    },

    cut_off: {
      narrator: true,
      text: '你发送："我们不要再联系了。"然后删除了她的联系方式。',
      next: 'inner_决裂'
    },

    inner_决裂: {
      narrator: true,
      inner: true,
      text: '决裂了。但我不后悔。',
      next: 'chapter_end'
    },

    question_impact: {
      narrator: true,
      text: '许禾没有再回复。',
      next: 'inner_她不在乎'
    },

    inner_她不在乎: {
      narrator: true,
      inner: true,
      text: '她不在乎。她只在乎自己的感受。',
      next: 'chapter_end'
    },

    save_evidence: {
      narrator: true,
      text: '你截图保存了所有聊天记录，作为证据。',
      next: 'inner_prepare'
    },

    inner_prepare: {
      narrator: true,
      inner: true,
      text: '我要自证清白。',
      next: 'chapter_end'
    },

    chapter_end: {
      narrator: true,
      text: '第六章完',
      next: 'END_CHAPTER'
    }
  }
};
