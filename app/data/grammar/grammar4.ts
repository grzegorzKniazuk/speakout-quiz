import type { GrammarQuestion } from '~/models/grammar-question';

export const grammar4: GrammarQuestion[] = [
  // ─────────────
  // 4A – FUTURE CONTINUOUS vs FUTURE PERFECT
  // ─────────────
  {
    id: 1,
    area: 'Future continuous vs future perfect',
    prompt: 'This time next year, I _____ in a different city.',
    options: [ 'will live', 'will be living', 'will have lived' ],
    answer: 'will be living',
    explanation: 'Future continuous opisuje czynność, która będzie w trakcie w określonym momencie w przyszłości.',
  },
  {
    id: 2,
    area: 'Future continuous vs future perfect',
    prompt: 'By the end of this year, she _____ her degree.',
    options: [ 'will finish', 'will be finishing', 'will have finished' ],
    answer: 'will have finished',
    explanation: 'Future perfect opisuje czynność, która zostanie zakończona przed określonym momentem w przyszłości.',
  },
  {
    id: 3,
    area: 'Future continuous – in progress',
    prompt: 'At 8 p.m. tonight, we _____ dinner.',
    options: [ 'will have', 'will be having' ],
    answer: 'will be having',
    explanation: 'At + konkretny moment w przyszłości → future continuous.',
  },
  {
    id: 4,
    area: 'Future perfect – completed before',
    prompt: 'By the time you arrive, we _____ eating.',
    options: [ 'will finish', 'will be finishing', 'will have finished' ],
    answer: 'will have finished',
    explanation: 'By the time wskazuje, że czynność zakończy się wcześniej → future perfect.',
  },
  {
    id: 5,
    area: 'Future continuous – temporary',
    prompt: 'Don’t call me at 6 – I _____ at the gym.',
    options: [ 'will train', 'will be training' ],
    answer: 'will be training',
    explanation: 'Future continuous używamy do czynności tymczasowych w określonym czasie.',
  },

  // ─────────────
  // 4B – PASSIVES (GENERAL BELIEFS & OPINIONS)
  // ─────────────
  {
    id: 6,
    area: 'Passives – present belief',
    prompt: 'It _____ believed that adults need about eight hours of sleep.',
    options: [ 'is', 'was', 'has' ],
    answer: 'is',
    explanation: 'It is believed that… używamy do ogólnych przekonań w teraźniejszości.',
  },
  {
    id: 7,
    area: 'Passives – past belief',
    prompt: 'It _____ thought in the past that people needed less sleep.',
    options: [ 'is', 'was', 'has been' ],
    answer: 'was',
    explanation: 'Past simple passive (was thought) odnosi się do przekonań w przeszłości.',
  },
  {
    id: 8,
    area: 'Passives – recent belief',
    prompt: 'It _____ suggested that technology affects sleep quality.',
    options: [ 'is', 'was', 'has been' ],
    answer: 'has been',
    explanation: 'Present perfect passive stosujemy do niedawnych opinii lub badań.',
  },
  {
    id: 9,
    area: 'Passives – formal style',
    prompt: 'It _____ expected that people will work longer hours in the future.',
    options: [ 'is', 'was', 'has' ],
    answer: 'is',
    explanation: 'It is expected that… to formalny sposób wyrażania przewidywań.',
  },
  {
    id: 10,
    area: 'Passives – focus on action',
    prompt: 'The decision _____ made without consulting employees.',
    options: [ 'has', 'was', 'was being' ],
    answer: 'was',
    explanation: 'Strona bierna skupia się na czynności, a nie na wykonawcy.',
  },

  // ─────────────
  // 4C – EXPRESSING AGREEMENT & DISAGREEMENT
  // ─────────────
  {
    id: 11,
    area: 'Agreement',
    prompt: 'A: Exercise should be part of daily life. B: I couldn’t _____ more.',
    options: [ 'agree', 'disagree' ],
    answer: 'agree',
    explanation: 'I couldn’t agree more oznacza całkowitą zgodę.',
  },
  {
    id: 12,
    area: 'Strong disagreement',
    prompt: 'I completely _____ with you about that.',
    options: [ 'agree', 'disagree' ],
    answer: 'disagree',
    explanation: 'I completely disagree to silne wyrażenie braku zgody.',
  },
  {
    id: 13,
    area: 'Partial agreement',
    prompt: 'I agree with you _____ a point, but not everyone has time.',
    options: [ 'to', 'up to' ],
    answer: 'up to',
    explanation: 'Agree up to a point oznacza częściową zgodę.',
  },
  {
    id: 14,
    area: 'Concession',
    prompt: 'That’s a fair point, _____ it could also be argued that rest is important.',
    options: [ 'because', 'although' ],
    answer: 'although',
    explanation: 'Although wprowadza kontrargument po częściowej zgodzie.',
  },
  {
    id: 15,
    area: 'Balancing opinions',
    prompt: 'True, but _____ the other hand, not everyone enjoys sport.',
    options: [ 'on', 'in' ],
    answer: 'on',
    explanation: 'On the other hand służy do pokazania przeciwnego punktu widzenia.',
  },
  {
    id: 16,
    area: 'Opinion phrases',
    prompt: '_____ my opinion, a healthy lifestyle is essential.',
    options: [ 'From', 'In' ],
    answer: 'In',
    explanation: 'In my opinion to standardowy zwrot do wyrażania opinii.',
  },
  {
    id: 17,
    area: 'Perspective',
    prompt: 'From my _____, exercise helps reduce stress.',
    options: [ 'perspective', 'hand' ],
    answer: 'perspective',
    explanation: 'From my perspective oznacza „z mojego punktu widzenia”.',
  },
];