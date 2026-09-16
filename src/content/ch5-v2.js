export const ch5 = {
  id: 'ch5',
  title: '第五章：沈老师的课题',
  nodes: {
    start: {
      bg: 'counseling-room',
      text: '心理咨询室。阳光透过窗帘洒进来，沈老师递给你一杯热茶。',
      chars: [{ id: 'teacher-shen', img: 'shen', pos: 'center' }],
      next: 'teacher_question'
    },

    teacher_question: {
      dialog: { char: '沈老师', text: '"你知道心理委员的职责是什么吗？"' },
      next: 'choice_answer_duty'
    },

    choice_answer_duty: {
      prompt: '你回答：',
      choices: [
        { text: '"……帮助同学解决心理问题？"', next: 'wrong_understanding', traits: { acceptance: 1 } },
        { text: '"我不知道该怎么做。"', next: 'ask_guidance', traits: { autonomy: 1 } },
        { text: '沉默，听她说', next: 'listen_silently', traits: { boundary: 1, acceptance: 1 } }
      ]
    },

    wrong_understanding: {
      chars: [{ id: 'teacher-shen', img: 'shen-nod', pos: 'center' }],
      dialog: { char: '沈老师', text: '笑了："不是。是\'观察\'和\'上报\'。"' },
      next: 'explain_duty'
    },

    ask_guidance: {
      chars: [{ id: 'teacher-shen', img: 'shen', pos: 'center' }],
      dialog: { char: '沈老师', text: '"那让我告诉你——心理委员的职责是\'观察\'和\'上报\'。"' },
      next: 'explain_duty'
    },

    listen_silently: {
      chars: [{ id: 'teacher-shen', img: 'shen', pos: 'center' }],
      dialog: { char: '沈老师', text: '欣赏地看着你："心理委员的职责是\'观察\'和\'上报\'。"' },
      next: 'explain_duty'
    },

    explain_duty: {
      dialog: { char: '沈老师', text: '"你不是心理医生，不需要解决所有人的问题。"' },
      next: 'explain_duty_2'
    },

    explain_duty_2: {
      dialog: { char: '沈老师', text: '"更重要的是，你要先照顾好自己。"' },
      next: 'teacher_asks_question'
    },

    teacher_asks_question: {
      chars: [{ id: 'teacher-shen', img: 'shen-ask', pos: 'center' }],
      dialog: { char: '沈老师', text: '"我问你一个问题。"' },
      next: 'philosophical_question'
    },

    philosophical_question: {
      dialog: { char: '沈老师', text: '"如果许禾一直哭，林澈一直控制，顾言一直攻击——这是谁的课题？"' },
      next: 'you_stunned'
    },

    you_stunned: {
      narrator: true,
      text: '你愣住了。',
      next: 'teacher_answers'
    },

    teacher_answers: {
      chars: [{ id: 'teacher-shen', img: 'shen', pos: 'center' }],
      dialog: { char: '沈老师', text: '"是他们的。不是你的。"' },
      next: 'task_separation_explain'
    },

    task_separation_explain: {
      dialog: { char: '沈老师', text: '"你可以观察，可以倾听，甚至可以建议。但你不能替他们活。"' },
      next: 'task_separation_name'
    },

    task_separation_name: {
      dialog: { char: '沈老师', text: '"因为那是\'课题分离\'。"' },
      next: 'unlock_card'
    },

    unlock_card: {
      unlock: { type: 'knowledge', id: 'task-separation' },
      narrator: true,
      text: '【解锁知识卡片：课题分离】',
      next: 'choice_understanding'
    },

    choice_understanding: {
      prompt: '你的反应：',
      choices: [
        { text: '"我明白了。"', next: 'surface_understanding', traits: { acceptance: 1 } },
        { text: '"但如果我不帮，他们会怎么样？"', next: 'worried', traits: { repair: 1 } },
        { text: '"所以我一直在做他们该做的事？"', next: 'epiphany', traits: { acceptance: 2, autonomy: 1 } }
      ]
    },

    surface_understanding: {
      text: '"我明白了。"',
      chars: [{ id: 'teacher-shen', img: 'shen', pos: 'center' }],
      dialog: { char: '沈老师', text: '看着你，没说话。她知道你还没真正理解。' },
      next: 'days_pass'
    },

    worried: {
      text: '"但如果我不帮，他们会怎么样？"',
      chars: [{ id: 'teacher-shen', img: 'shen-nod', pos: 'center' }],
      dialog: { char: '沈老师', text: '"这个担心本身，就是在承担他们的课题。"' },
      next: 'deeper_explanation'
    },

    epiphany: {
      text: '"所以我一直在做他们该做的事？"',
      chars: [{ id: 'teacher-shen', img: 'shen-nod', pos: 'center' }],
      dialog: { char: '沈老师', text: '点头："对。而且你知道最可怕的是什么吗？"' },
      next: 'most_terrible'
    },

    most_terrible: {
      dialog: { char: '沈老师', text: '"你在剥夺他们成长的机会。"' },
      next: 'xuhe_example'
    },

    xuhe_example: {
      dialog: { char: '沈老师', text: '"许禾永远学不会独立，因为你总帮她。"' },
      next: 'linche_example'
    },

    linche_example: {
      dialog: { char: '沈老师', text: '"林澈永远意识不到问题，因为你总顺从他。"' },
      next: 'guyan_example'
    },

    guyan_example: {
      dialog: { char: '沈老师', text: '"顾言永远不会学会好好说话，因为他发现攻击是有效的。"' },
      next: 'silence'
    },

    silence: {
      narrator: true,
      text: '沉默。',
      next: 'final_blow'
    },

    final_blow: {
      chars: [{ id: 'teacher-shen', img: 'shen-ask', pos: 'center' }],
      dialog: { char: '沈老师', text: '"你不是在帮他们。你是在满足自己\'被需要\'的感觉。"' },
      next: 'inner_hit'
    },

    inner_hit: {
      narrator: true,
      inner: true,
      text: '这句话像一记重锤。她说得对吗？我真的是在帮他们，还是在逃避说"不"？',
      next: 'days_pass'
    },

    deeper_explanation: {
      chars: [{ id: 'teacher-shen', img: 'shen', pos: 'center' }],
      dialog: { char: '沈老师', text: '"他们会面对自己的问题，学会成长。或者不学会，继续挣扎。"' },
      next: 'whose_task_is_it'
    },

    whose_task_is_it: {
      dialog: { char: '沈老师', text: '"但无论如何，那是他们的课题，不是你的。"' },
      next: 'days_pass'
    },

    days_pass: {
      bg: 'classroom-afternoon',
      narrator: true,
      text: '【周四，第一次实践"课题分离"】',
      next: 'xuhe_approaches'
    },

    xuhe_approaches: {
      chars: [{ id: 'xuhe', img: 'xuhe-sorry', pos: 'right' }],
      dialog: { char: '许禾', text: '又来找你："那几个女生还是不理我……你能再帮我看看吗？"' },
      next: 'remember_teacher'
    },

    remember_teacher: {
      narrator: true,
      inner: true,
      text: '你想起沈老师的话。',
      next: 'choice_practice'
    },

    choice_practice: {
      prompt: '你的回应：',
      choices: [
        { text: '"好，我再观察一下。"', next: 'old_pattern', traits: { repair: 1, autonomy: -1 } },
        { text: '"这是你的课题，我帮不了你。"', next: 'cold_refusal', traits: { boundary: 2, ally: -1 } },
        { text: '"你觉得自己可以做些什么？"', next: 'guide_thinking', traits: { boundary: 2, ally: 1, action: 1 } }
      ]
    },

    old_pattern: {
      text: '"好，我再观察一下。"',
      chars: [{ id: 'xuhe', img: 'xuhe-happy', pos: 'right' }],
      narrator: true,
      text: '许禾松了口气。你又回到了旧模式。',
      next: 'inner_failed'
    },

    inner_failed: {
      narrator: true,
      inner: true,
      text: '我又失败了。',
      next: 'week_passes'
    },

    cold_refusal: {
      text: '"这是你的课题，我帮不了你。"',
      chars: [{ id: 'xuhe', img: 'xuhe-try', pos: 'right' }],
      dialog: { char: '许禾', text: '愣住："你……"' },
      next: 'xuhe_hurt_reaction'
    },

    xuhe_hurt_reaction: {
      chars: [{ id: 'xuhe', img: 'xuhe-sorry', pos: 'right' }],
      dialog: { char: '许禾', text: '"所以你真的不管我了……"' },
      next: 'xuhe_leaves_crying'
    },

    xuhe_leaves_crying: {
      narrator: true,
      text: '她哭着走了。',
      next: 'inner_too_cold'
    },

    inner_too_cold: {
      narrator: true,
      inner: true,
      text: '我是不是太冷漠了？但……这就是边界吗？',
      next: 'week_passes'
    },

    guide_thinking: {
      text: '"你觉得自己可以做些什么？"',
      chars: [{ id: 'xuhe', img: 'xuhe-try', pos: 'right' }],
      dialog: { char: '许禾', text: '愣住："我……我不知道。"' },
      next: 'continue_guiding'
    },

    continue_guiding: {
      text: '"那你想过为什么她们不理你吗？"',
      dialog: { char: '许禾', text: '"因为……因为她们讨厌我？"' },
      next: 'ask_directly'
    },

    ask_directly: {
      text: '"你有没有问过她们？"',
      chars: [{ id: 'xuhe', img: 'xuhe-try', pos: 'right' }],
      dialog: { char: '许禾', text: '"我不敢……"' },
      next: 'clarify_help'
    },

    clarify_help: {
      text: '"那你希望我怎么帮你？"',
      dialog: { char: '许禾', text: '"你能替我问吗？"' },
      next: 'set_boundary'
    },

    set_boundary: {
      text: '你深吸一口气："不能。但我可以陪你一起去问。"',
      chars: [{ id: 'xuhe', img: 'xuhe-try', pos: 'right' }],
      next: 'xuhe_reaction'
    },

    xuhe_reaction: {
      dialog: { char: '许禾', text: '眼睛睁大："你……你不帮我说吗？"' },
      next: 'firm_boundary'
    },

    firm_boundary: {
      text: '你摇头："这是你的问题，你要自己面对。"',
      chars: [{ id: 'xuhe', img: 'xuhe-sorry', pos: 'right' }],
      next: 'xuhe_cries'
    },

    xuhe_cries: {
      dialog: { char: '许禾', text: '眼泪掉下来："所以你也不管我了……"' },
      next: 'clarify_not_abandon'
    },

    clarify_not_abandon: {
      text: '"我没有不管你。但我不能替你活。"',
      next: 'xuhe_leaves_crying_2'
    },

    xuhe_leaves_crying_2: {
      narrator: true,
      text: '她哭着走了。',
      next: 'inner_did_right'
    },

    inner_did_right: {
      narrator: true,
      inner: true,
      text: '我做对了吗？还是我太冷漠了？',
      next: 'week_passes'
    },

    week_passes: {
      bg: 'home-night',
      narrator: true,
      text: '【当晚，林澈的私聊】',
      next: 'linche_message'
    },

    linche_message: {
      narrator: true,
      text: '手机震动。',
      next: 'linche_asks_about_xuhe'
    },

    linche_asks_about_xuhe: {
      narrator: true,
      text: '【林澈】："许禾找你了？"',
      next: 'you_reply_yes'
    },

    you_reply_yes: {
      narrator: true,
      text: '【你】："嗯。"',
      next: 'linche_says_xuhe_cried'
    },

    linche_says_xuhe_cried: {
      narrator: true,
      text: '【林澈】："她哭着跟我说，你不愿意帮她了。"',
      next: 'linche_questions'
    },

    linche_questions: {
      narrator: true,
      text: '【林澈】："你是不是……对她太严格了？"',
      next: 'choice_respond_linche'
    },

    choice_respond_linche: {
      prompt: '你回复：',
      choices: [
        { text: '"可能吧……我再想想。"', next: 'waver', traits: { autonomy: -1, boundary: -1 } },
        { text: '"我没有不帮她，我只是不能替她做。"', next: 'persist_boundary', traits: { boundary: 2, autonomy: 1 } },
        { text: '"你觉得我应该怎么做？"', next: 'ask_back', traits: { boundary: 1 } }
      ]
    },

    waver: {
      narrator: true,
      text: '你开始怀疑自己。也许你真的太冷漠了？',
      next: 'night_ends'
    },

    ask_back: {
      narrator: true,
      text: '【林澈】："我觉得……至少要安慰她吧？她现在很难过。"',
      next: 'linche_continues_pressure'
    },

    linche_continues_pressure: {
      narrator: true,
      text: '你盯着屏幕，不知道该怎么回复。',
      next: 'night_ends'
    },

    persist_boundary: {
      narrator: true,
      text: '【你】："安慰不等于替她解决问题。"',
      next: 'linche_silence'
    },

    linche_silence: {
      narrator: true,
      text: '林澈沉默了一会儿。',
      next: 'linche_says_changed'
    },

    linche_says_changed: {
      narrator: true,
      text: '【林澈】："……你变了。"',
      next: 'choice_respond_changed'
    },

    choice_respond_changed: {
      prompt: '你回复：',
      choices: [
        { text: '"对不起，我让你失望了。"', next: 'apologize', traits: { autonomy: -1 } },
        { text: '"也许我就该变。"', next: 'affirm_change', traits: { autonomy: 2, acceptance: 1 } },
        { text: '"你觉得以前的我更好吗？"', next: 'question_back', traits: { autonomy: 1, boundary: 1 } }
      ]
    },

    apologize: {
      narrator: true,
      text: '【林澈】："没事，我理解你。"但你能感觉到他的失落。',
      next: 'night_ends'
    },

    affirm_change: {
      narrator: true,
      text: '【林澈】："……好吧。"他没再回复。',
      next: 'inner_温柔还是好控制'
    },

    inner_温柔还是好控制: {
      narrator: true,
      inner: true,
      text: '"温柔"？还是"好控制"？',
      next: 'night_ends'
    },

    question_back: {
      narrator: true,
      text: '【林澈】："你以前很温柔。"',
      next: 'inner_温柔还是好控制'
    },

    night_ends: {
      narrator: true,
      text: '你关掉手机，躺在床上盯着天花板。',
      next: 'inner_exhausted'
    },

    inner_exhausted: {
      narrator: true,
      inner: true,
      text: '改变真的好累。',
      next: 'chapter_end'
    },

    chapter_end: {
      narrator: true,
      text: '第五章完',
      next: 'END_CHAPTER'
    }
  }
};
