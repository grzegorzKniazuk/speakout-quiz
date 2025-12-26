import type { GrammarQuestion } from '~/models/grammar-question';

export const grammar8: GrammarQuestion[] = [
  // ─────────────
  // 8A – PARTICIPLE CLAUSES
  // ─────────────
  {
    id: 1,
    area: 'Participle clauses – simultaneous actions',
    prompt: '_____ through the city, she noticed how diverse the community was.',
    options: [ 'Walking', 'Having walked' ],
    answer: 'Walking',
    explanation: 'Używamy -ing, gdy dwie czynności dzieją się w tym samym czasie.',
  },
  {
    id: 2,
    area: 'Participle clauses – prior action',
    prompt: '_____ into the neighbourhood, they quickly made friends.',
    options: [ 'Moving', 'Having moved' ],
    answer: 'Having moved',
    explanation: 'Having + past participle wskazuje, że jedna czynność zakończyła się przed drugą.',
  },
  {
    id: 3,
    area: 'Participle clauses – same subject',
    prompt: '_____ the meeting, he went straight home.',
    options: [ 'Finishing', 'Having finished' ],
    answer: 'Having finished',
    explanation: 'Participle clauses muszą odnosić się do tego samego podmiotu co główne zdanie.',
  },
  {
    id: 4,
    area: 'Participle clauses – cause',
    prompt: '_____ unemployed, many people rely on community support.',
    options: [ 'Being', 'Having been' ],
    answer: 'Being',
    explanation: 'Being + adjective opisuje stan, który jest przyczyną sytuacji.',
  },

  // ─────────────
  // 8B – CONDITIONALS WITH CONJUNCTIONS
  // ─────────────
  {
    id: 5,
    area: 'Zero conditional',
    prompt: 'If people feel connected, communities _____ stronger.',
    options: [ 'are', 'will be' ],
    answer: 'are',
    explanation: 'Zero conditional opisuje rzeczy zawsze lub ogólnie prawdziwe.',
  },
  {
    id: 6,
    area: 'First conditional',
    prompt: 'If we invest in housing, living conditions _____ improve.',
    options: [ 'will', 'would' ],
    answer: 'will',
    explanation: 'First conditional opisuje realne i możliwe skutki w przyszłości.',
  },
  {
    id: 7,
    area: 'Second conditional',
    prompt: 'If I _____ part of that community, I would volunteer.',
    options: [ 'was', 'were' ],
    answer: 'were',
    explanation: 'W second conditional często używamy were zamiast was w stylu formalnym.',
  },
  {
    id: 8,
    area: 'Third conditional',
    prompt: 'If they had acted earlier, the problem _____ worse.',
    options: [ 'wouldn’t have become', 'won’t become' ],
    answer: 'wouldn’t have become',
    explanation: 'Third conditional opisuje hipotetyczne sytuacje w przeszłości.',
  },
  {
    id: 9,
    area: 'Conditionals – unless',
    prompt: 'Many languages will disappear _____ action is taken.',
    options: [ 'unless', 'if' ],
    answer: 'unless',
    explanation: 'Unless oznacza if not i zastępuje przeczenie w conditionalach.',
  },
  {
    id: 10,
    area: 'Conditionals – provided that',
    prompt: 'The project will succeed _____ enough people support it.',
    options: [ 'provided that', 'unless' ],
    answer: 'provided that',
    explanation: 'Provided that oznacza tylko jeśli i wprowadza warunek.',
  },
  {
    id: 11,
    area: 'Conditionals – as long as',
    prompt: 'Communities thrive _____ people communicate.',
    options: [ 'as long as', 'even though' ],
    answer: 'as long as',
    explanation: 'As long as wyraża warunek konieczny do spełnienia.',
  },
  {
    id: 12,
    area: 'Conditionals – on condition that',
    prompt: 'You can join the scheme _____ you follow the rules.',
    options: [ 'on condition that', 'unless' ],
    answer: 'on condition that',
    explanation: 'On condition that jest formalnym sposobem wyrażania warunku.',
  },

  // ─────────────
  // 8C – STRUCTURING AN ARGUMENT
  // ─────────────
  {
    id: 13,
    area: 'Making a claim',
    prompt: '_____ start off by saying that community matters.',
    options: [ 'I’d like to', 'I like to' ],
    answer: 'I’d like to',
    explanation: 'I’d like to start off by saying to formalny sposób rozpoczęcia argumentu.',
  },
  {
    id: 14,
    area: 'Presenting reasons',
    prompt: 'This is true for three main _____ .',
    options: [ 'reasons', 'arguments' ],
    answer: 'reasons',
    explanation: 'Po wyrażeniu this is true for używamy słowa reasons.',
  },
  {
    id: 15,
    area: 'Giving examples',
    prompt: '_____ example of this is local volunteering.',
    options: [ 'A good', 'The good' ],
    answer: 'A good',
    explanation: 'A good example of this is służy do podawania przykładów.',
  },
  {
    id: 16,
    area: 'Showing impact',
    prompt: '_____ a result, people feel less isolated.',
    options: [ 'As', 'By' ],
    answer: 'As',
    explanation: 'As a result pokazuje skutek wcześniej opisanych działań.',
  },
  {
    id: 17,
    area: 'Balancing arguments',
    prompt: '_____ far as I can see, online communities help a lot.',
    options: [ 'As', 'So' ],
    answer: 'As',
    explanation: 'As far as I can see służy do zaznaczenia osobnej opinii.',
  },
];