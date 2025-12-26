import type { GrammarQuestion } from '~/models/grammar-question';

export const grammar7: GrammarQuestion[] = [
  // ─────────────
  // 7A – PAST MODALS OF DEDUCTION
  // ─────────────
  {
    id: 1,
    area: 'Past modals of deduction – certainty',
    prompt: 'He _____ been very talented as a child. Everyone noticed it.',
    options: [ 'must have', 'might have' ],
    answer: 'must have',
    explanation: 'Must have używamy, gdy jesteśmy niemal pewni wniosku na podstawie dowodów.',
  },
  {
    id: 2,
    area: 'Past modals of deduction – possibility',
    prompt: 'She _____ studied music before, but I’m not sure.',
    options: [ 'might have', 'can’t have' ],
    answer: 'might have',
    explanation: 'Might have wyraża możliwość bez pewności.',
  },
  {
    id: 3,
    area: 'Past modals of deduction – impossibility',
    prompt: 'He _____ known about the concert – no one told him.',
    options: [ 'can’t have', 'must have' ],
    answer: 'can’t have',
    explanation: 'Can’t have oznacza, że coś było niemożliwe według mówiącego.',
  },
  {
    id: 4,
    area: 'Past modals of deduction – passive',
    prompt: 'Her bag must _____ stolen during the journey.',
    options: [ 'have been', 'be' ],
    answer: 'have been',
    explanation: 'W stronie biernej używamy konstrukcji modal + have been + past participle.',
  },

  // ─────────────
  // 7B – WISH / IF ONLY / SHOULD HAVE
  // ─────────────
  {
    id: 5,
    area: 'Wish – past regret',
    prompt: 'I wish I _____ harder when I was younger.',
    options: [ 'had worked', 'worked' ],
    answer: 'had worked',
    explanation: 'Wish + past perfect wyraża żal dotyczący przeszłości.',
  },
  {
    id: 6,
    area: 'If only – strong regret',
    prompt: 'If only I _____ that opportunity.',
    options: [ 'had taken', 'took' ],
    answer: 'had taken',
    explanation: 'If only działa jak wish, ale z silniejszym ładunkiem emocjonalnym.',
  },
  {
    id: 7,
    area: 'Should have – regret',
    prompt: 'I _____ gone to the audition.',
    options: [ 'should have', 'would have' ],
    answer: 'should have',
    explanation: 'Should have używamy, gdy żałujemy decyzji z przeszłości.',
  },
  {
    id: 8,
    area: 'Wish – annoying habit',
    prompt: 'I wish you _____ interrupt me all the time.',
    options: [ 'wouldn’t', 'hadn’t' ],
    answer: 'wouldn’t',
    explanation: 'Wish + would służy do narzekania na irytujące zachowania w teraźniejszości.',
  },

  // ─────────────
  // 7C – DESCRIBING A PROCESS
  // ─────────────
  {
    id: 9,
    area: 'Describing stages',
    prompt: '_____ with, you’ll need to prepare all the ingredients.',
    options: [ 'To begin', 'To begin with' ],
    answer: 'To begin with',
    explanation: 'To begin with wprowadza pierwszy etap procesu.',
  },
  {
    id: 10,
    area: 'Describing stages',
    prompt: 'The final stage _____ baking the dish.',
    options: [ 'is', 'involves' ],
    answer: 'involves',
    explanation: 'The final stage involves + -ing opisuje ostatni etap procesu.',
  },
  {
    id: 11,
    area: 'Necessity',
    prompt: 'It’s essential _____ the instructions carefully.',
    options: [ 'to follow', 'following' ],
    answer: 'to follow',
    explanation: 'It’s essential to + infinitive wyraża konieczność.',
  },
  {
    id: 12,
    area: 'Recommendation',
    prompt: 'I would recommend _____ some notes first.',
    options: [ 'making', 'to make' ],
    answer: 'making',
    explanation: 'Recommend jest używane z formą -ing.',
  },
  {
    id: 13,
    area: 'Warnings',
    prompt: 'Be careful not _____ too fast.',
    options: [ 'to go', 'going' ],
    answer: 'to go',
    explanation: 'Be careful not to + infinitive służy do ostrzegania przed błędami.',
  },

  // ─────────────
  // 7D – ADVERBIALS OF CONCESSION
  // ─────────────
  {
    id: 14,
    area: 'Adverbials of concession',
    prompt: 'He’s very talented. _____, he still needs to practise.',
    options: [ 'However', 'Although' ],
    answer: 'However',
    explanation: 'However łączy dwa zdania i wprowadza kontrast.',
  },
  {
    id: 15,
    area: 'Adverbials of concession',
    prompt: '_____ he’s talented, he doesn’t perform in public.',
    options: [ 'Although', 'However' ],
    answer: 'Although',
    explanation: 'Although łączy dwie części jednego zdania i wprowadza kontrast.',
  },
  {
    id: 16,
    area: 'Adverbials of concession',
    prompt: 'On the one hand, talent matters. _____, hard work is essential.',
    options: [ 'On the other hand', 'However' ],
    answer: 'On the other hand',
    explanation: 'On the one hand … on the other hand służy do pokazania dwóch stron argumentu.',
  },
];