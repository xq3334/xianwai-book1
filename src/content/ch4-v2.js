export const ch4 = {
  id: 'ch4',
  title: '第四章：重建的尝试',
  nodes: {
    start: {
      text: '第二天，教室里。',
      next: 'awkward_silence'
    },

    awkward_silence: {
      bg: 'classroom-tense',
      text: '小组四人都在座位上，但没有人说话。',
      chars: [
        { id: 'linche', img: 'linche-sulk', pos: 'left' },
        { id: 'xuhe', img: 'xuhe-sorry', pos: 'right' }
      ],
      next: 'observe_tension'
    },

    observe_tension: {
      narrator: true,
      text: '林澈看起来很疲惫，一直盯着桌上的笔记。许禾眼睛红肿，避开所有人的视线。顾言戴着耳机，像什么都没发生。',
      next: 'inner_question'
    },

    inner_question: {
      narrator: true,
      inner: true,
      text: '这个组已经裂开了。我们还能继续吗？',
      next: 'choice_initiative'
    },

    choice_initiative: {
      prompt: '你决定：',
      choices: [
        { text: '主动说："我们谈谈吧。"', next: 'take_lead', traits: { autonomy: 2, ally: 1 } },
        { text: '等别人先开口', next: 'wait_observe', traits: { boundary: 1 } },
        { text: '提议："要不我们重新分工？"', next: 'avoid_conflict', traits: { repair: 1 } },
        { text: '"我觉得这个组不行了。"', next: 'face_reality', traits: { autonomy: 2 } }
      ]
    },

    take_lead: {
      text: '"我们谈谈吧。"你打破了沉默。',
      chars: [
        { id: 'linche', img: 'linche', pos: 'left' },
        { id: 'guyan', img: 'guyan-pause', pos: 'center' },
        { id: 'xuhe', img: 'xuhe-try', pos: 'right' }
      ],
      next: 'three_look_at_you'
    },

    wait_observe: {
      narrator: true,
      text: '你选择等待。但沉默持续了整整十分钟，最后是林澈叹了口气先离开了座位。',
      next: 'group_dissolve_temp'
    },

    avoid_conflict: {
      text: '"要不我们重新分工？"你试探性地建议。',
      chars: [{ id: 'guyan', img: 'guyan-male-sarcastic', pos: 'center' }],
      dialog: { char: '顾言', text: '"分工？我们连话都说不清楚，还谈什么分工。"' },
      next: 'conflict_not_solved'
    },

    face_reality: {
      text: '"我觉得这个组不行了。"',
      chars: [
        { id: 'linche', img: 'linche-plead', pos: 'left' },
        { id: 'guyan', img: 'guyan-sharp', pos: 'center' }
      ],
      dialog: { char: '林澈', text: '"你……你什么意思？"' },
      next: 'reality_reaction'
    },

    three_look_at_you: {
      dialog: { char: '林澈', text: '"谈什么？"语气有点冷。' },
      next: 'guyan_removes_earphone'
    },

    guyan_removes_earphone: {
      chars: [{ id: 'guyan', img: 'guyan', pos: 'center' }],
      dialog: { char: '顾言', text: '摘下耳机："你想说什么？"' },
      next: 'xuhe_silent'
    },

    xuhe_silent: {
      narrator: true,
      text: '许禾不说话，只是看着你。三双眼睛，三种期待。',
      next: 'choice_what_to_say'
    },

    choice_what_to_say: {
      prompt: '你要说：',
      choices: [
        { text: '"我们都有问题，包括我。"', next: 'admit_共同责任', traits: { autonomy: 2, acceptance: 2 } },
        { text: '"这个作业还要做，我们得想办法。"', next: 'pragmatic_approach', traits: { action: 1 } },
        { text: '"昨天的事……对不起。"', next: 'apologize_first', traits: { repair: 2 } },
        { text: '"我想退出。"', next: 'want_to_quit', traits: { autonomy: -2 } }
      ]
    },

    admit_共同责任: {
      text: '"我们都有问题，包括我。"',
      chars: [
        { id: 'linche', img: 'linche-grin', pos: 'left' },
        { id: 'guyan', img: 'guyan-pause', pos: 'center' }
      ],
      dialog: { char: '林澈', text: '愣住："你有什么问题？"' },
      next: 'continue_confession'
    },

    continue_confession: {
      text: '你深吸一口气，逐一说出你观察到的：',
      next: 'point_out_linche'
    },

    point_out_linche: {
      chars: [{ id: 'linche', img: 'linche-sulk', pos: 'left' }],
      text: '"林澈，你确实很负责，但你总是替我们做决定。"',
      next: 'point_out_xuhe'
    },

    point_out_xuhe: {
      chars: [{ id: 'xuhe', img: 'xuhe-sorry', pos: 'right' }],
      text: '"许禾，你总是希望别人帮你解决问题，但从不自己尝试。"',
      next: 'point_out_guyan'
    },

    point_out_guyan: {
      chars: [{ id: 'guyan', img: 'guyan', pos: 'center' }],
      text: '"顾言，你看得很清楚，但你用攻击的方式表达。"',
      next: 'point_out_self'
    },

    point_out_self: {
      narrator: true,
      text: '"而我……我一直在逃避冲突，假装一切都好。"',
      next: 'silence_after_confession'
    },

    silence_after_confession: {
      narrator: true,
      text: '沉默。',
      next: 'linche_reaction'
    },

    linche_reaction: {
      chars: [{ id: 'linche', img: 'linche-sulk', pos: 'left' }],
      dialog: { char: '林澈', text: '低下头："……我只是想做好。"' },
      next: 'xuhe_cry_reaction'
    },

    xuhe_cry_reaction: {
      chars: [{ id: 'xuhe', img: 'xuhe-sorry', pos: 'right' }],
      dialog: { char: '许禾', text: '开始哭："我是不是真的很没用……"' },
      next: 'guyan_question'
    },

    guyan_question: {
      chars: [{ id: 'guyan', img: 'guyan', pos: 'center' }],
      dialog: { char: '顾言', text: '看着你："然后呢？说完这些，有用吗？"' },
      next: 'choice_after_confession'
    },

    choice_after_confession: {
      prompt: '你的回答：',
      choices: [
        { text: '"至少我们承认了。"', next: 'believe_change', traits: { acceptance: 2, action: 1 } },
        { text: '"我不知道。但总比装作没事好。"', next: 'honest_uncertainty', traits: { autonomy: 1, acceptance: 1 } },
        { text: '"也许没用。但我想试试。"', next: 'persist_trying', traits: { action: 2, ally: 1 } }
      ]
    },

    persist_trying: {
      text: '"也许没用。但我想试试。"',
      next: 'guyan_stares'
    },

    guyan_stares: {
      chars: [{ id: 'guyan', img: 'guyan-pause', pos: 'center' }],
      narrator: true,
      text: '顾言盯着你看了很久。',
      next: 'guyan_proposes_rules'
    },

    guyan_proposes_rules: {
      chars: [{ id: 'guyan', img: 'guyan-sharp', pos: 'center' }],
      dialog: { char: '顾言', text: '"……行。那我说个规矩。"' },
      next: 'new_rule_1'
    },

    new_rule_1: {
      dialog: { char: '顾言', text: '"从现在开始，谁不想做某件事，直接说。不要假装同意，然后背地里抱怨。"' },
      next: 'linche_asks'
    },

    linche_asks: {
      chars: [{ id: 'linche', img: 'linche', pos: 'left' }],
      dialog: { char: '林澈', text: '"那万一意见不统一呢？"' },
      next: 'guyan_voting'
    },

    guyan_voting: {
      chars: [{ id: 'guyan', img: 'guyan', pos: 'center' }],
      dialog: { char: '顾言', text: '"投票。少数服从多数，但多数要尊重少数的不满。"' },
      next: 'xuhe_scared_ask'
    },

    xuhe_scared_ask: {
      chars: [{ id: 'xuhe', img: 'xuhe-try', pos: 'right' }],
      dialog: { char: '许禾', text: '小声说："那……那我也要说出来吗？"' },
      next: 'guyan_else'
    },

    guyan_else: {
      chars: [{ id: 'guyan', img: 'guyan', pos: 'center' }],
      dialog: { char: '顾言', text: '"不然呢？"' },
      next: 'atmosphere_easing'
    },

    atmosphere_easing: {
      narrator: true,
      text: '气氛缓和了一些。',
      next: 'linche_苦笑'
    },

    linche_苦笑: {
      chars: [{ id: 'linche', img: 'linche-sulk', pos: 'left' }],
      dialog: { char: '林澈', text: '苦笑："听起来很理想主义。"' },
      next: 'guyan_better'
    },

    guyan_better: {
      chars: [{ id: 'guyan', img: 'guyan-soft', pos: 'center' }],
      dialog: { char: '顾言', text: '"总比现在这样好。"' },
      next: 'guyan_asks_you'
    },

    guyan_asks_you: {
      dialog: { char: '顾言', text: '看向你："你觉得呢？"' },
      next: 'choice_new_rules'
    },

    choice_new_rules: {
      prompt: '你的态度：',
      choices: [
        { text: '"我同意。"', next: 'agree_rules', traits: { ally: 2, action: 1 } },
        { text: '"我们可以试试。"', next: 'tentative_agree', traits: { action: 1 } },
        { text: '"但执行起来很难。"', next: 'doubt_execution', traits: { boundary: 1 } }
      ]
    },

    agree_rules: {
      text: '"我同意。"',
      next: 'linche_nods'
    },

    linche_nods: {
      chars: [{ id: 'linche', img: 'linche-grin', pos: 'left' }],
      dialog: { char: '林澈', text: '点点头："那就这样吧。"' },
      next: 'first_practice'
    },

    first_practice: {
      narrator: true,
      text: '【周五，第一次"新规则"实践】',
      next: 'friday_discussion'
    },

    friday_discussion: {
      bg: 'classroom-afternoon',
      text: '小组讨论时间。',
      chars: [{ id: 'linche', img: 'linche-grin', pos: 'left' }],
      dialog: { char: '林澈', text: '"我觉得我们可以这样分工——"' },
      next: 'linche_stops'
    },

    linche_stops: {
      narrator: true,
      text: '然后他停住，看着大家：',
      chars: [{ id: 'linche', img: 'linche', pos: 'left' }],
      dialog: { char: '林澈', text: '"你们觉得呢？"' },
      next: 'first_time_asking'
    },

    first_time_asking: {
      narrator: true,
      inner: true,
      text: '这是他第一次主动征求意见。',
      next: 'guyan_disagrees'
    },

    guyan_disagrees: {
      chars: [{ id: 'guyan', img: 'guyan-sharp', pos: 'center' }],
      dialog: { char: '顾言', text: '"我不同意第三部分的安排。"' },
      next: 'linche_deep_breath'
    },

    linche_deep_breath: {
      chars: [{ id: 'linche', img: 'linche-sulk', pos: 'left' }],
      dialog: { char: '林澈', text: '深吸一口气："为什么？"' },
      next: 'guyan_explains'
    },

    guyan_explains: {
      chars: [{ id: 'guyan', img: 'guyan-sharp', pos: 'center' }],
      narrator: true,
      text: '顾言解释了他的理由。讨论很激烈，但没有人摔门。',
      next: 'xuhe_breakthrough'
    },

    xuhe_breakthrough: {
      chars: [{ id: 'xuhe', img: 'xuhe-try', pos: 'right' }],
      dialog: { char: '许禾', text: '突然说："我……我也有个想法。"' },
      next: 'three_look_at_xuhe'
    },

    three_look_at_xuhe: {
      narrator: true,
      text: '三人都看向她。',
      next: 'xuhe_persists'
    },

    xuhe_persists: {
      chars: [{ id: 'xuhe', img: 'xuhe-try', pos: 'right' }],
      narrator: true,
      text: '她声音很小，但坚持说完了。',
      next: 'linche_praise'
    },

    linche_praise: {
      chars: [{ id: 'linche', img: 'linche-grin', pos: 'left' }],
      dialog: { char: '林澈', text: '"这个点子不错。"' },
      next: 'guyan_nods'
    },

    guyan_nods: {
      chars: [{ id: 'guyan', img: 'guyan-soft', pos: 'center' }],
      dialog: { char: '顾言', text: '点头："可以试试。"' },
      next: 'xuhe_eyes_light'
    },

    xuhe_eyes_light: {
      chars: [{ id: 'xuhe', img: 'xuhe-happy', pos: 'right' }],
      narrator: true,
      text: '许禾眼睛亮了。',
      next: 'inner_hope'
    },

    inner_hope: {
      narrator: true,
      inner: true,
      text: '也许……我们真的可以改变？',
      next: 'sunday_night'
    },

    sunday_night: {
      bg: 'home-night',
      narrator: true,
      text: '【周日晚上，在家吃饭】',
      next: 'mom_question'
    },

    mom_question: {
      chars: [{ id: 'mom', img: 'mother-worry', pos: 'center' }],
      dialog: { char: '妈妈', text: '"你最近怎么总是愁眉苦脸的？"' },
      next: 'mom_continues'
    },

    mom_continues: {
      dialog: { char: '妈妈', text: '"学习跟不上了？还是和同学闹矛盾了？"' },
      next: 'choice_respond_mom'
    },

    choice_respond_mom: {
      prompt: '你回答：',
      choices: [
        { text: '"没事。"', next: 'say_nothing', traits: { boundary: 1 } },
        { text: '"妈，我不想当心理委员了。"', next: 'confess_to_mom', traits: { autonomy: 2 } },
        { text: '"我吃饱了。"（离开）', next: 'escape_table', traits: { autonomy: -1 } }
      ]
    },

    confess_to_mom: {
      text: '"妈，我不想当心理委员了。"',
      chars: [{ id: 'mom', img: 'mother', pos: 'center' }],
      dialog: { char: '妈妈', text: '愣住："什么？你说什么？"' },
      next: 'mom_pressure'
    },

    mom_pressure: {
      dialog: { char: '妈妈', text: '"这么好的机会，多少人想当还当不上呢！"' },
      next: 'mom_責任'
    },

    mom_責任: {
      dialog: { char: '妈妈', text: '"而且名单都报上去了，你现在退是什么意思？让老师觉得你不负责任吗？"' },
      next: 'try_explain'
    },

    try_explain: {
      text: '你试图解释："可是我真的——"',
      next: 'mom_cuts'
    },

    mom_cuts: {
      chars: [{ id: 'mom', img: 'mother-upset', pos: 'center' }],
      dialog: { char: '妈妈', text: '"没有可是。你必须做下去。这是你的责任。"' },
      next: 'inner_mom_never_asks'
    },

    inner_mom_never_asks: {
      narrator: true,
      inner: true,
      text: '她从来不问我想要什么。她只在乎别人怎么看我们家。',
      next: 'next_day_counselor'
    },

    say_nothing: {
      text: '"没事。"',
      next: 'mom_committee_talk'
    },

    mom_committee_talk: {
      chars: [{ id: 'mom', img: 'mother', pos: 'center' }],
      dialog: { char: '妈妈', text: '"你是心理委员，不是应该很擅长处理人际关系吗？"' },
      next: 'mom_boasts'
    },

    mom_boasts: {
      dialog: { char: '妈妈', text: '"我跟李阿姨说，她羡慕死了，她家孩子天天跟她吵架。你要给别人做好榜样啊。"' },
      next: 'inner_mom_doesnt_know'
    },

    inner_mom_doesnt_know: {
      narrator: true,
      inner: true,
      text: '她根本不知道当心理委员有多累。或者说，她不在乎。她只在乎我能不能给她长脸。',
      next: 'next_day_counselor'
    },

    escape_table: {
      text: '"我吃饱了。"你站起来回到房间。',
      next: 'inner_cant_say'
    },

    inner_cant_say: {
      narrator: true,
      inner: true,
      text: '我说不出口。她永远不会理解。',
      next: 'next_day_counselor'
    },

    next_day_counselor: {
      bg: 'counseling-room',
      narrator: true,
      text: '【第二天，你被叫到心理咨询室】',
      next: 'teacher_shen_greets'
    },

    teacher_shen_greets: {
      chars: [{ id: 'teacher-shen', img: 'teacher-shen-gentle', pos: 'center' }],
      dialog: { char: '沈老师', text: '递给你一杯热茶："听说你最近压力挺大？"' },
      next: 'you_stunned'
    },

    you_stunned: {
      text: '你愣住："谁说的？"',
      next: 'teacher_observed'
    },

    teacher_observed: {
      chars: [{ id: 'teacher-shen', img: 'teacher-shen-smile', pos: 'center' }],
      dialog: { char: '沈老师', text: '"我观察到的。"' },
      next: 'chapter_end'
    },

    chapter_end: {
      narrator: true,
      text: '第四章完',
      next: 'END_CHAPTER'
    },

    // 其他分支简化结局
    pragmatic_approach: {
      text: '"这个作业还要做，我们得想办法。"',
      narrator: true,
      next: 'group_discusses_pragmatic'
    },

    group_discusses_pragmatic: {
      narrator: true,
      text: '大家点点头，开始务实地讨论分工。气氛依然紧张，但至少能继续下去。',
      next: 'chapter_end'
    },

    apologize_first: {
      text: '"昨天的事……对不起。"',
      chars: [{ id: 'linche', img: 'linche-grin', pos: 'left' }],
      dialog: { char: '林澈', text: '"你道什么歉？又不是你的错。"' },
      next: 'xuhe_cries_again'
    },

    xuhe_cries_again: {
      chars: [{ id: 'xuhe', img: 'xuhe-sorry', pos: 'right' }],
      dialog: { char: '许禾', text: '又开始哭："都是我不好……"' },
      next: 'group_comforts'
    },

    group_comforts: {
      narrator: true,
      text: '大家开始互相道歉、互相安慰。表面和好了，但根本问题没有解决。',
      next: 'chapter_end'
    },

    want_to_quit: {
      text: '"我想退出。"',
      chars: [
        { id: 'linche', img: 'linche-plead', pos: 'left' },
        { id: 'guyan', img: 'guyan-male-disappointed', pos: 'center' }
      ],
      dialog: { char: '林澈', text: '"你……认真的？"' },
      next: 'quit_consequences'
    },

    quit_consequences: {
      narrator: true,
      text: '最终你没能退出——老师不允许期中换组。但你和小组的关系降到了冰点。',
      next: 'chapter_end'
    },

    believe_change: {
      text: '"至少我们承认了。"',
      next: 'guyan_stares'
    },

    honest_uncertainty: {
      text: '"我不知道。但总比装作没事好。"',
      next: 'guyan_nods_slow'
    },

    guyan_nods_slow: {
      chars: [{ id: 'guyan', img: 'guyan-soft', pos: 'center' }],
      dialog: { char: '顾言', text: '缓缓点头："……也对。"' },
      next: 'first_practice'
    },

    tentative_agree: {
      text: '"我们可以试试。"',
      next: 'linche_nods'
    },

    doubt_execution: {
      text: '"但执行起来很难。"',
      chars: [{ id: 'guyan', img: 'guyan', pos: 'center' }],
      dialog: { char: '顾言', text: '"不试怎么知道？"' },
      next: 'first_practice'
    },

    group_dissolve_temp: {
      narrator: true,
      text: '小组暂时陷入了冷战。接下来的几天，大家各做各的，只在必要时交流。',
      next: 'chapter_end'
    },

    conflict_not_solved: {
      narrator: true,
      text: '讨论不了了之。小组依然处于裂痕状态。',
      next: 'chapter_end'
    },

    reality_reaction: {
      narrator: true,
      text: '气氛降到冰点。但最终，因为作业规定不能换组，你们不得不继续。',
      next: 'chapter_end'
    }
  }
};
