import type { VocabularyQuestion } from '~/models/vocabulary-question';

export const vocabulary6: VocabularyQuestion[] = [
  // ─────────────
  // 6A – PREFIXES & CONCENTRATION
  // ─────────────
  {
    id: 1,
    area: '6A – prefixes',
    prompt: 'If you didn’t understand something correctly, you … it.',
    options: [ 'misunderstood', 'rewrote', 'disconnected', 'substandard' ],
    answer: 'misunderstood',
  },
  {
    id: 2,
    area: '6A – prefixes',
    prompt: 'If something is not practical or realistic, it is …',
    options: [ 'unknown', 'impractical', 'substandard', 'incorrect' ],
    answer: 'impractical',
  },
  {
    id: 3,
    area: '6A – prefixes',
    prompt: 'Work that is below an acceptable level is …',
    options: [ 'unknown', 'misread', 'substandard', 'imperfect' ],
    answer: 'substandard',
  },
  {
    id: 4,
    area: '6A – prefixes',
    prompt: 'If you have to do something again, you … it.',
    options: [ 'redo', 'misdo', 'undo', 'disconnect' ],
    answer: 'redo',
  },
  {
    id: 5,
    area: '6A – concentration',
    prompt: 'If something stops you focusing, it is a …',
    options: [ 'trigger', 'distraction', 'habit', 'routine' ],
    answer: 'distraction',
  },
  {
    id: 6,
    area: '6A – concentration',
    prompt: 'Things that make you react emotionally are called … triggers.',
    options: [ 'external', 'internal', 'technical', 'digital' ],
    answer: 'internal',
  },

  // ─────────────
  // 6B – PERSONALITY TYPES
  // ─────────────
  {
    id: 7,
    area: '6B – personality',
    prompt: 'Someone who prefers being alone and is often quiet is an …',
    options: [ 'extrovert', 'introvert', 'optimist', 'leader' ],
    answer: 'introvert',
  },
  {
    id: 8,
    area: '6B – personality',
    prompt: 'Someone who is confident and enjoys being with others is an …',
    options: [ 'introvert', 'extrovert', 'perfectionist', 'individualist' ],
    answer: 'extrovert',
  },
  {
    id: 9,
    area: '6B – personality',
    prompt: 'If someone works better alone than in groups, they are more …',
    options: [ 'competitive', 'introverted', 'ambitious', 'sociable' ],
    answer: 'introverted',
  },

  // ─────────────
  // 6B – REPORTING VERBS
  // ─────────────
  {
    id: 10,
    area: '6B – reporting verbs',
    prompt: 'If you strongly say that something is true, you … it.',
    options: [ 'admit', 'claim', 'deny', 'question' ],
    answer: 'claim',
  },
  {
    id: 11,
    area: '6B – reporting verbs',
    prompt: 'If you accept that something you did was wrong, you … it.',
    options: [ 'admit', 'boast', 'insist', 'threaten' ],
    answer: 'admit',
  },
  {
    id: 12,
    area: '6B – reporting verbs',
    prompt: 'If you say you will do something bad unless something changes, you …',
    options: [ 'suggest', 'threaten', 'deny', 'recommend' ],
    answer: 'threaten',
  },
  {
    id: 13,
    area: '6B – reporting verbs',
    prompt: 'If you proudly talk about your achievements, you …',
    options: [ 'admit', 'boast', 'deny', 'regret' ],
    answer: 'boast',
  },
  {
    id: 14,
    area: '6B – reporting verbs',
    prompt: 'If you say something is not true, you … it.',
    options: [ 'deny', 'admit', 'claim', 'suggest' ],
    answer: 'deny',
  },

  // ─────────────
  // 6C – COLLOCATIONS WITH GET & TAKE
  // ─────────────
  {
    id: 15,
    area: '6C – get & take',
    prompt: 'If you talk about your worries to feel better, you get it … your chest.',
    options: [ 'off', 'from', 'away', 'out' ],
    answer: 'off',
  },
  {
    id: 16,
    area: '6C – get & take',
    prompt: 'If you accept advice and follow it, you … the advice.',
    options: [ 'get', 'take', 'make', 'put' ],
    answer: 'take',
  },
  {
    id: 17,
    area: '6C – get & take',
    prompt: 'If someone understands what you are saying, they … the message.',
    options: [ 'take', 'get', 'receive', 'hold' ],
    answer: 'get',
  },
  {
    id: 18,
    area: '6C – get & take',
    prompt: 'If you say something and someone is offended, they take it …',
    options: [ 'badly', 'seriously', 'personally', 'honestly' ],
    answer: 'personally',
  },
  {
    id: 19,
    area: '6C – get & take',
    prompt: 'If you help someone forget their problems for a while, you take their mind … it.',
    options: [ 'from', 'off', 'away', 'out of' ],
    answer: 'off',
  },

  // ─────────────
  // 6C – GIVING ADVICE TACTFULLY
  // ─────────────
  {
    id: 20,
    area: '6C – advice',
    prompt: 'To give advice gently, you might say: “It might be a good …”',
    options: [ 'way', 'idea', 'thought', 'suggestion' ],
    answer: 'idea',
  },
  {
    id: 21,
    area: '6C – advice',
    prompt: 'To soften advice, you can begin with: “I hope you don’t take this …”',
    options: [ 'wrong', 'personally', 'the wrong way', 'seriously' ],
    answer: 'the wrong way',
  },

  // ─────────────
  // 6D – FILLERS (SPEAKING)
  // ─────────────
  {
    id: 22,
    area: '6D – fillers',
    prompt: 'People use fillers mainly to …',
    options: [
      'sound more formal',
      'gain time to think',
      'avoid answering',
      'change the topic',
    ],
    answer: 'gain time to think',
  },
  {
    id: 23,
    area: '6D – fillers',
    prompt: 'Which of these is a common filler in spoken English?',
    options: [ 'In conclusion', 'Well…', 'However', 'Therefore' ],
    answer: 'Well…',
  },
  {
    id: 24,
    area: '6D – fillers',
    prompt: 'Which phrase helps you think before answering?',
    options: [
      'That’s a good point.',
      'I strongly disagree.',
      'In my opinion',
      'As a result',
    ],
    answer: 'That’s a good point.',
  },
];