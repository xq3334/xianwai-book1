export const ch8 = {
  id: 'ch8',
  title: '第八章：林澈的摊牌',
  nodes: {
    start: {
      bg: 'classroom-afternoon',
      narrator: true,
      text: '【十二月初，小组作业答辩前夕】',
      next: 'final_discussion'
    },

    final_discussion: {
      narrator: true,
      text: '小组作业即将答辩，四人最后一次讨论。',
      next: 'atmosphere_better'
    },

    atmosphere_better: {
      chars: [
        { id: 'linche', img: 'linche-presenting', pos: 'left' },
        { id: 'guyan', img: 'guyan-male-listening', pos: 'center' },
        { id: 'xuhe', img: 'xuhe-nervous', pos: 'right' }
      ],
      narrator: true,
      text: '气氛比之前好多了，但仍然微妙。',
      next: 'linche_chairs'
    },

    linche_chairs: {
      narrator: true,
      text: '林澈主持讨论，但会征求意见。许禾能说出自己的想法了，虽然还是有点怕。顾言不再阴阳怪气，但仍然犀利。',
      next: 'inner_like_team'
    },

    inner_like_team: {
      narrator: true,
      inner: true,
      text: '我们终于像个团队了。',
      next: 'discussion_ends'
    },

    discussion_ends: {
      chars: [{ id: 'linche', img: 'linche-slight-smile', pos: 'left' }],
      dialog: { char: '林澈', text: '"那就这样，明天答辩。"' },
      next: 'guyan_thanks'
    },

    guyan_thanks: {
      chars: [{ id: 'guyan', img: 'guyan-male-approving', pos: 'center' }],
      dialog: { char: '顾言', text: '"辛苦了。"' },
      next: 'xuhe_thanks'
    },

    xuhe_thanks: {
      chars: [{ id: 'xuhe', img: 'xuhe-shy-smile', pos: 'right' }],
      dialog: { char: '许禾', text: '"谢谢大家……"' },
      next: 'inner_best_moment'
    },

    inner_best_moment: {
      narrator: true,
      inner: true,
      text: '这可能是这学期最好的时刻。',
      next: 'defense_day'
    },

    defense_day: {
      bg: 'classroom-presentation',
      narrator: true,
      text: '【答辩当天】',
      next: 'four_present'
    },

    four_present: {
      narrator: true,
      text: '四人上台，顺利答辩。',
      next: 'teacher_comments'
    },

    teacher_comments: {
      chars: [{ id: 'teacher', img: 'teacher-evaluating', pos: 'center' }],
      dialog: { char: '老师', text: '"整体不错，但能看出来……团队磨合得比较痛苦。"' },
      next: 'teacher_comments_2'
    },

    teacher_comments_2: {
      dialog: { char: '老师', text: '"不过最后的呈现，确实有你们自己的思考。"' },
      next: 'score'
    },

    score: {
      dialog: { char: '老师', text: '"分数：85分。"' },
      next: 'after_defense'
    },

    after_defense: {
      narrator: true,
      text: '下台后——',
      next: 'linche_disappointed'
    },

    linche_disappointed: {
      chars: [{ id: 'linche', img: 'linche-disappointed', pos: 'left' }],
      dialog: { char: '林澈', text: '看起来有点失落："我以为能到90……"' },
      next: 'guyan_enough'
    },

    guyan_enough: {
      chars: [{ id: 'guyan', img: 'guyan-male-casual', pos: 'center' }],
      dialog: { char: '顾言', text: '"够了，这个组能活到现在就不错了。"' },
      next: 'xuhe_blames_self'
    },

    xuhe_blames_self: {
      chars: [{ id: 'xuhe', img: 'xuhe-guilty', pos: 'right' }],
      dialog: { char: '许禾', text: '小声说："都怪我拖后腿……"' },
      next: 'you_comfort'
    },

    you_comfort: {
      text: '"不是谁拖后腿。我们都尽力了。"',
      next: 'friday_afternoon'
    },

    friday_afternoon: {
      bg: 'rooftop-sunset',
      narrator: true,
      text: '【周五下午，放学后】',
      next: 'linche_pulls_you'
    },

    linche_pulls_you: {
      chars: [{ id: 'linche', img: 'linche-serious', pos: 'left' }],
      narrator: true,
      text: '林澈把你拉到天台。',
      dialog: { char: '林澈', text: '"我想跟你说件事。"' },
      next: 'linche_serious'
    },

    linche_serious: {
      narrator: true,
      text: '他的表情很认真，甚至有点紧张。',
      next: 'linche_admits'
    },

    linche_admits: {
      chars: [{ id: 'linche', img: 'linche-nervous', pos: 'left' }],
      dialog: { char: '林澈', text: '"我知道……这学期我做了很多让你不舒服的事。"' },
      next: 'linche_lists'
    },

    linche_lists: {
      dialog: { char: '林澈', text: '"团建帮你报名，作业替你做决定，还有……控制你。"' },
      next: 'silence'
    },

    silence: {
      narrator: true,
      text: '沉默。',
      next: 'linche_thought_helping'
    },

    linche_thought_helping: {
      chars: [{ id: 'linche', img: 'linche-sad', pos: 'left' }],
      dialog: { char: '林澈', text: '"我以为我是在帮你。"' },
      next: 'linche_guyan_right'
    },

    linche_guyan_right: {
      dialog: { char: '林澈', text: '"但顾言说得对——我不是在帮你，我是在证明你需要我。"' },
      next: 'linche_voice_shakes'
    },

    linche_voice_shakes: {
      narrator: true,
      text: '他声音有点抖：',
      dialog: { char: '林澈', text: '"因为我害怕。"' },
      next: 'you_ask_afraid'
    },

    you_ask_afraid: {
      text: '"害怕什么？"',
      next: 'linche_fear'
    },

    linche_fear: {
      chars: [{ id: 'linche', img: 'linche-vulnerable', pos: 'left' }],
      dialog: { char: '林澈', text: '"害怕你不需要我了，就会离开我。"' },
      next: 'linche_turns_away'
    },

    linche_turns_away: {
      narrator: true,
      text: '林澈背过身：',
      next: 'linche_backstory'
    },

    linche_backstory: {
      chars: [{ id: 'linche', img: 'linche-back-turned', pos: 'left' }],
      dialog: { char: '林澈', text: '"我从小就是这样。"' },
      next: 'linche_parents_divorced'
    },

    linche_parents_divorced: {
      dialog: { char: '林澈', text: '"我爸妈离婚的时候，我妈跟我说：\'你要乖，要懂事，不然妈妈就不要你了。\'"' },
      next: 'linche_since_then'
    },

    linche_since_then: {
      dialog: { char: '林澈', text: '"从那以后，我就特别怕被抛弃。"' },
      next: 'linche_pattern'
    },

    linche_pattern: {
      dialog: { char: '林澈', text: '"所以我拼命对别人好，让自己变得\'有用\'。"' },
      next: 'linche_reason'
    },

    linche_reason: {
      dialog: { char: '林澈', text: '"因为只要我有用，别人就不会离开我。"' },
      next: 'linche_turns_back'
    },

    linche_turns_back: {
      chars: [{ id: 'linche', img: 'linche-vulnerable', pos: 'left' }],
      narrator: true,
      text: '他转过来看着你：',
      next: 'linche_panicked'
    },

    linche_panicked: {
      dialog: { char: '林澈', text: '"但你开始设置边界的时候，我慌了。"' },
      next: 'linche_thought_abandon'
    },

    linche_thought_abandon: {
      dialog: { char: '林澈', text: '"我以为你要抛弃我。"' },
      next: 'linche_tried_harder'
    },

    linche_tried_harder: {
      dialog: { char: '林澈', text: '"所以我更拼命地\'帮\'你，想让你继续依赖我。"' },
      next: 'linche_conflicted'
    },

    linche_conflicted: {
      chars: [{ id: 'linche', img: 'linche-crying', pos: 'left' }],
      dialog: { char: '林澈', text: '"但你越来越独立。这让我既高兴，又害怕。"' },
      next: 'choice_respond'
    },

    choice_respond: {
      prompt: '你的回应：',
      choices: [
        { text: '"我不会离开你。"', next: 'comfort', traits: { ally: 2 } },
        { text: '"但你这样……我确实想离开。"', next: 'honest', traits: { autonomy: 2, boundary: 2 } },
        { text: '"你不需要让自己那么有用。"', next: 'core_truth', traits: { ally: 3, acceptance: 2 } },
        { text: '沉默，等他继续', next: 'wait', traits: { boundary: 1 } }
      ]
    },

    comfort: {
      text: '"我不会离开你。"',
      chars: [{ id: 'linche', img: 'linche-relieved', pos: 'left' }],
      dialog: { char: '林澈', text: '松了口气："真的？"' },
      next: 'you_nod'
    },

    you_nod: {
      text: '你点头。',
      next: 'linche_hugs'
    },

    linche_hugs: {
      chars: [{ id: 'linche', img: 'linche-smile', pos: 'left' }],
      narrator: true,
      text: '林澈笑了，但你知道——他的模式还没真正改变。',
      next: 'end_semester'
    },

    honest: {
      text: '"但你这样……我确实想离开。"',
      chars: [{ id: 'linche', img: 'linche-shocked', pos: 'left' }],
      dialog: { char: '林澈', text: '愣住了，眼神里有受伤。' },
      next: 'you_continue_honest'
    },

    you_continue_honest: {
      text: '"不是因为你不够好，而是因为你不让我做我自己。"',
      next: 'linche_understands'
    },

    linche_understands: {
      chars: [{ id: 'linche', img: 'linche-sad', pos: 'left' }],
      dialog: { char: '林澈', text: '低下头，沉默了很久："……我明白了。"' },
      next: 'linche_will_try'
    },

    linche_will_try: {
      dialog: { char: '林澈', text: '"我会试着……放手。"' },
      next: 'end_semester'
    },

    core_truth: {
      text: '"你不需要让自己那么有用。"',
      chars: [{ id: 'linche', img: 'linche-shocked', pos: 'left' }],
      dialog: { char: '林澈', text: '愣住，眼泪突然掉下来。' },
      next: 'linche_questions_value'
    },

    linche_questions_value: {
      chars: [{ id: 'linche', img: 'linche-crying', pos: 'left' }],
      dialog: { char: '林澈', text: '"但如果我没用了……我还有什么价值？"' },
      next: 'you_answer_value'
    },

    you_answer_value: {
      text: '"你的价值不在于你能帮我做什么。"',
      next: 'you_continue_value'
    },

    you_continue_value: {
      text: '"在于你是林澈。"',
      next: 'you_examples'
    },

    you_examples: {
      text: '"那个会在我考砸时陪我吃宵夜的林澈。那个会认真听我说话的林澈。"',
      next: 'you_not_controller'
    },

    you_not_controller: {
      text: '"不是那个替我做决定的林澈。"',
      next: 'silence_2'
    },

    silence_2: {
      narrator: true,
      text: '沉默。',
      next: 'linche_cries'
    },

    linche_cries: {
      chars: [{ id: 'linche', img: 'linche-crying', pos: 'left' }],
      narrator: true,
      text: '林澈哭了，很久没说话。',
      next: 'linche_will_try_2'
    },

    linche_will_try_2: {
      dialog: { char: '林澈', text: '最后他说："……我试试。"' },
      next: 'linche_less_useful'
    },

    linche_less_useful: {
      dialog: { char: '林澈', text: '"试着做一个\'没那么有用\'的林澈。"' },
      next: 'you_pat_shoulder'
    },

    you_pat_shoulder: {
      text: '你拍拍他肩膀："你本来就够好了。"',
      next: 'end_semester'
    },

    wait: {
      narrator: true,
      text: '你沉默地等他继续。',
      next: 'linche_continues'
    },

    linche_continues: {
      chars: [{ id: 'linche', img: 'linche-sad', pos: 'left' }],
      dialog: { char: '林澈', text: '"……对不起。我会改的。"' },
      next: 'end_semester'
    },

    end_semester: {
      bg: 'library',
      narrator: true,
      text: '【周日，图书馆】',
      next: 'guyan_sits'
    },

    guyan_sits: {
      chars: [{ id: 'guyan', img: 'guyan-male-serious', pos: 'center' }],
      narrator: true,
      text: '你在图书馆，顾言坐到对面。',
      dialog: { char: '顾言', text: '"我跟我妈说了。"' },
      next: 'you_ask_what'
    },

    you_ask_what: {
      text: '你愣住："说什么？"',
      next: 'guyan_switch_liberal'
    },

    guyan_switch_liberal: {
      dialog: { char: '顾言', text: '"我想转文科。"' },
      next: 'you_shocked'
    },

    you_shocked: {
      text: '你震惊："她同意了？"',
      next: 'guyan_no'
    },

    guyan_no: {
      chars: [{ id: 'guyan', img: 'guyan-male-bitter-smile', pos: 'center' }],
      dialog: { char: '顾言', text: '苦笑："没有。她说我疯了。"' },
      next: 'guyan_but_said'
    },

    guyan_but_said: {
      dialog: { char: '顾言', text: '"但我说了。这就够了。"' },
      next: 'silence_3'
    },

    silence_3: {
      narrator: true,
      text: '沉默。',
      next: 'guyan_realization'
    },

    guyan_realization: {
      chars: [{ id: 'guyan', img: 'guyan-male-thinking', pos: 'center' }],
      dialog: { char: '顾言', text: '"我以前觉得，说了没用，不如不说。"' },
      next: 'guyan_learned'
    },

    guyan_learned: {
      dialog: { char: '顾言', text: '"但你让我明白——说不说是我的课题，听不听是她的课题。"' },
      next: 'guyan_no_longer_holding'
    },

    guyan_no_longer_holding: {
      dialog: { char: '顾言', text: '"至少我不再憋着了。"' },
      next: 'guyan_thanks'
    },

    guyan_thanks_you: {
      chars: [{ id: 'guyan', img: 'guyan-male-gentle', pos: 'center' }],
      dialog: { char: '顾言', text: '看着你："谢谢你。"' },
      next: 'you_did_nothing'
    },

    you_did_nothing: {
      text: '你："我什么都没做。"',
      next: 'guyan_you_did'
    },

    guyan_you_did: {
      dialog: { char: '顾言', text: '"你做了。你让我看到，改变是可能的。"' },
      next: 'christmas_eve'
    },

    christmas_eve: {
      bg: 'street-winter',
      narrator: true,
      text: '【圣诞节前，放学路上】',
      next: 'xuhe_chases'
    },

    xuhe_chases: {
      chars: [{ id: 'xuhe', img: 'xuhe-determined', pos: 'right' }],
      narrator: true,
      text: '许禾追上你。',
      dialog: { char: '许禾', text: '"等一下！"' },
      next: 'xuhe_breathless'
    },

    xuhe_breathless: {
      narrator: true,
      text: '她气喘吁吁，看起来鼓起了很大勇气。',
      next: 'xuhe_apologizes'
    },

    xuhe_apologizes: {
      chars: [{ id: 'xuhe', img: 'xuhe-sincere', pos: 'right' }],
      dialog: { char: '许禾', text: '"我……我想跟你道歉。"' },
      next: 'xuhe_rumor_apology'
    },

    xuhe_rumor_apology: {
      dialog: { char: '许禾', text: '"上次造谣的事，是我不对。"' },
      next: 'xuhe_was_angry'
    },

    xuhe_was_angry: {
      dialog: { char: '许禾', text: '"我当时太生气了，觉得你抛弃了我。"' },
      next: 'xuhe_realized'
    },

    xuhe_realized: {
      dialog: { char: '许禾', text: '"但后来我想明白了……你没有抛弃我。"' },
      next: 'xuhe_understanding'
    },

    xuhe_understanding: {
      dialog: { char: '许禾', text: '"你只是……不想替我活。"' },
      next: 'xuhe_lowers_head'
    },

    xuhe_lowers_head: {
      chars: [{ id: 'xuhe', img: 'xuhe-shy', pos: 'right' }],
      narrator: true,
      text: '她低下头：',
      next: 'xuhe_talked_to_girls'
    },

    xuhe_talked_to_girls: {
      dialog: { char: '许禾', text: '"我也去找那几个女生谈了。"' },
      next: 'xuhe_their_feedback'
    },

    xuhe_their_feedback: {
      dialog: { char: '许禾', text: '"她们说……她们觉得我太粘人了，有点窒息。"' },
      next: 'xuhe_hurt_but'
    },

    xuhe_hurt_but: {
      dialog: { char: '许禾', text: '"听到的时候，我很难过。"' },
      next: 'xuhe_at_least'
    },

    xuhe_at_least: {
      dialog: { char: '许禾', text: '"但至少……我知道原因了。"' },
      next: 'choice_respond_xuhe'
    },

    choice_respond_xuhe: {
      prompt: '你的回应：',
      choices: [
        { text: '"我接受你的道歉。"', next: 'accept_apology', traits: { repair: 2, ally: 1 } },
        { text: '"你做得很好。"', next: 'affirm_growth', traits: { ally: 2, acceptance: 1 } },
        { text: '"以后不要再这样了。"', next: 'warn', traits: { boundary: 2 } },
        { text: '沉默，只是点头', next: 'nod_silently', traits: { boundary: 1 } }
      ]
    },

    accept_apology: {
      text: '"我接受你的道歉。"',
      chars: [{ id: 'xuhe', img: 'xuhe-relieved', pos: 'right' }],
      dialog: { char: '许禾', text: '松了口气："谢谢你……"' },
      next: 'chapter_end'
    },

    affirm_growth: {
      text: '"你做得很好。"',
      chars: [{ id: 'xuhe', img: 'xuhe-happy', pos: 'right' }],
      dialog: { char: '许禾', text: '眼睛亮了："真的吗？"' },
      next: 'you_confirm'
    },

    you_confirm: {
      text: '你点头："真的。你在成长。"',
      next: 'xuhe_smiles'
    },

    xuhe_smiles: {
      chars: [{ id: 'xuhe', img: 'xuhe-smile', pos: 'right' }],
      narrator: true,
      text: '许禾第一次露出了真正的笑容。',
      next: 'chapter_end'
    },

    warn: {
      text: '"以后不要再这样了。"',
      chars: [{ id: 'xuhe', img: 'xuhe-guilty', pos: 'right' }],
      dialog: { char: '许禾', text: '点头："我知道了。"' },
      next: 'chapter_end'
    },

    nod_silently: {
      narrator: true,
      text: '你沉默地点了点头。',
      next: 'xuhe_understands'
    },

    xuhe_understands: {
      chars: [{ id: 'xuhe', img: 'xuhe-understanding', pos: 'right' }],
      narrator: true,
      text: '许禾似乎明白了什么，转身离开。',
      next: 'chapter_end'
    },

    chapter_end: {
      narrator: true,
      text: '第八章完',
      next: 'END_CHAPTER'
    }
  }
};
