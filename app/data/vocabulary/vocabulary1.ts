import type { VocabularyQuestion } from '~/models/vocabulary-question';

export const vocabulary1: VocabularyQuestion[] = [
  // ─────────────
  // 1A – personality adjectives
  // ─────────────
  {
    id: 1,
    area: '1A – personality',
    prompt: 'If someone doesn’t follow rules, they are …',
    options: [ 'curious', 'rebellious', 'reliable', 'thoughtful' ],
    answer: 'rebellious',
  },
  {
    id: 2,
    area: '1A – personality',
    prompt: 'If you are interested in learning new things, you are …',
    options: [ 'curious', 'stubborn', 'argumentative', 'relaxed' ],
    answer: 'curious',
  },
  {
    id: 3,
    area: '1A – personality',
    prompt: 'If you have big plans and want to achieve a lot, you are …',
    options: [ 'ambitious', 'outgoing', 'cheerful', 'reliable' ],
    answer: 'ambitious',
  },
  {
    id: 4,
    area: '1A – personality',
    prompt: 'If you like going out with lots of people and enjoying yourself, you are …',
    options: [ 'outgoing', 'nervous', 'thoughtful', 'stubborn' ],
    answer: 'outgoing',
  },
  {
    id: 5,
    area: '1A – personality',
    prompt: 'If you smile a lot and feel happy most of the time, you are …',
    options: [ 'cheerful', 'optimistic', 'romantic', 'reliable' ],
    answer: 'cheerful',
  },
  {
    id: 6,
    area: '1A – personality',
    prompt: 'People who often disagree with others are …',
    options: [ 'argumentative', 'curious', 'sociable', 'modest' ],
    answer: 'argumentative',
  },
  {
    id: 7,
    area: '1A – personality',
    prompt: 'If you enjoy going to new places and taking risks, you are …',
    options: [ 'adventurous', 'optimistic', 'stubborn', 'thoughtful' ],
    answer: 'adventurous',
  },
  {
    id: 8,
    area: '1A – personality',
    prompt: 'If you refuse to change your mind easily, you are …',
    options: [ 'stubborn', 'reliable', 'generous', 'relaxed' ],
    answer: 'stubborn',
  },
  {
    id: 9,
    area: '1A – personality',
    prompt: 'If people can depend on you, you are …',
    options: [ 'reliable', 'romantic', 'rebellious', 'adventurous' ],
    answer: 'reliable',
  },
  {
    id: 10,
    area: '1A – personality',
    prompt: 'If you think positively about life, you are …',
    options: [ 'optimistic', 'pessimistic', 'nervous', 'grumpy' ],
    answer: 'optimistic',
  },

  // ─────────────
  // 1B – memory: collocations
  // ─────────────
  {
    id: 11,
    area: '1B – memory',
    prompt: 'Memories from when you were very young are called …',
    options: [ 'childhood memories', 'short-term memories', 'false memories', 'recent memories' ],
    answer: 'childhood memories',
  },
  {
    id: 12,
    area: '1B – memory',
    prompt: 'If you can remember things for a long time, you have a good …',
    options: [ 'long-term memory', 'perfect recall', 'short-term memory', 'imagination' ],
    answer: 'long-term memory',
  },
  {
    id: 13,
    area: '1B – memory',
    prompt: 'If you can remember things exactly as they happened, you have …',
    options: [ 'perfect recall', 'false memory', 'short-term memory', 'good focus' ],
    answer: 'perfect recall',
  },
  {
    id: 14,
    area: '1B – memory',
    prompt: 'If something makes you think of the past, it …',
    options: [ 'slips your mind', 'brings back memories', 'rings a bell', 'plays tricks' ],
    answer: 'brings back memories',
  },
  {
    id: 15,
    area: '1B – memory',
    prompt: 'If you learn something so you can repeat it exactly, you learn it …',
    options: [ 'by heart', 'in detail', 'by accident', 'by chance' ],
    answer: 'by heart',
  },
  {
    id: 16,
    area: '1B – memory',
    prompt: 'If you remember every small detail, you remember it …',
    options: [ 'clearly', 'by heart', 'in detail', 'perfectly' ],
    answer: 'in detail',
  },
  {
    id: 17,
    area: '1B – memory',
    prompt: 'If you can remember things from a few moments ago, you have good …',
    options: [ 'short-term memory', 'long-term memory', 'perfect recall', 'concentration' ],
    answer: 'short-term memory',
  },

  // ─────────────
  // 1B – idioms: memory
  // ─────────────
  {
    id: 18,
    area: '1B – memory',
    prompt: 'If something is forgotten immediately, it goes …',
    options: [
      'in one ear and out the other',
      'on the tip of your tongue',
      'down memory lane',
      'by heart',
    ],
    answer: 'in one ear and out the other',
  },
  {
    id: 19,
    area: '1B – memory',
    prompt: 'If you almost remember something but can’t quite say it, it’s …',
    options: [
      'slipped your mind',
      'on the tip of your tongue',
      'ringing a bell',
      'playing tricks',
    ],
    answer: 'on the tip of your tongue',
  },
  {
    id: 20,
    area: '1B – memory',
    prompt: 'If something sounds familiar, it …',
    options: [ 'rings a bell', 'slips your mind', 'plays tricks', 'brings memories' ],
    answer: 'rings a bell',
  },
  {
    id: 21,
    area: '1B – memory',
    prompt: 'If you forget something unexpectedly, it …',
    options: [ 'rings a bell', 'slips your mind', 'comes back', 'sticks' ],
    answer: 'slips your mind',
  },

  // ─────────────
  // 1C – emotions & feelings
  // ─────────────
  {
    id: 22,
    area: '1C – emotions',
    prompt: 'If you love something very much, you are … it.',
    options: [ 'keen on', 'passionate about', 'fed up with', 'terrified of' ],
    answer: 'passionate about',
  },
  {
    id: 23,
    area: '1C – emotions',
    prompt: 'If you like something a lot, you are really … it.',
    options: [ 'into', 'fed up with', 'afraid of', 'worried about' ],
    answer: 'into',
  },
  {
    id: 24,
    area: '1C – emotions',
    prompt: 'If you feel worried about doing something, you are … it.',
    options: [ 'terrified of', 'keen on', 'nervous about', 'fond of' ],
    answer: 'nervous about',
  },
  {
    id: 25,
    area: '1C – emotions',
    prompt: 'If something frightens you a lot, you are … it.',
    options: [ 'terrified of', 'keen on', 'into', 'fed up with' ],
    answer: 'terrified of',
  },
  {
    id: 26,
    area: '1C – emotions',
    prompt: 'If you don’t like something anymore, you are … it.',
    options: [ 'fed up with', 'keen on', 'fond of', 'thrilled by' ],
    answer: 'fed up with',
  },
  {
    id: 27,
    area: '1C – emotions',
    prompt: 'If you like something but not very strongly, you are … it.',
    options: [ 'fond of', 'terrified of', 'fed up with', 'obsessed with' ],
    answer: 'fond of',
  },
  {
    id: 28,
    area: '1C – emotions',
    prompt: 'If something excites you a lot, you are … by it.',
    options: [ 'thrilled', 'nervous', 'fed up', 'keen' ],
    answer: 'thrilled',
  },

  // ─────────────
  // 1D – personality traits (street interviews)
  // ─────────────
  {
    id: 29,
    area: '1D – personality',
    prompt: 'Someone who is friendly, lively and laughs a lot is …',
    options: [ 'bubbly', 'grumpy', 'serious', 'reserved' ],
    answer: 'bubbly',
  },
  {
    id: 30,
    area: '1D – personality',
    prompt: 'If you stay positive when things go wrong, you are …',
    options: [ 'optimistic', 'stressed', 'argumentative', 'grumpy' ],
    answer: 'optimistic',
  },
  {
    id: 31,
    area: '1D – personality',
    prompt: 'If you take your job very seriously, you are … to it.',
    options: [ 'committed', 'keen', 'relaxed', 'curious' ],
    answer: 'committed',
  },
  {
    id: 32,
    area: '1D – personality',
    prompt: 'A person who is kind and caring is …',
    options: [ 'loving', 'rebellious', 'ambitious', 'stubborn' ],
    answer: 'loving',
  },
];