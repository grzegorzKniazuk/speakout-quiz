import type { GrammarQuestion } from '~/models/grammar-question';

export const grammar5: GrammarQuestion[] = [
  // ─────────────
  // 5A – Past perfect simple vs continuous
  // ─────────────
  {
    id: 1,
    area: 'Past perfect: simple vs continuous',
    prompt: 'I was exhausted because I _____ for hours.',
    options: [ 'had worked', 'had been working' ],
    answer: 'had been working',
    explanation: 'Czynność trwała przez dłuższy czas przed innym wydarzeniem i jej efekt był widoczny, więc używamy past perfect continuous.',
  },
  {
    id: 2,
    area: 'Past perfect: completed action',
    prompt: 'By the time I arrived, they _____ the meeting.',
    options: [ 'had finished', 'had been finishing' ],
    answer: 'had finished',
    explanation: 'Czynność została zakończona przed innym momentem w przeszłości, więc używamy past perfect simple.',
  },
  {
    id: 3,
    area: 'Past perfect: duration',
    prompt: 'She _____ for a new job for months before she finally succeeded.',
    options: [ 'had looked', 'had been looking' ],
    answer: 'had been looking',
    explanation: 'Podkreślamy czas trwania czynności przed innym wydarzeniem, dlatego używamy formy continuous.',
  },
  {
    id: 4,
    area: 'Past perfect: state verbs',
    prompt: 'I realised I _____ him before.',
    options: [ 'had met', 'had been meeting' ],
    answer: 'had met',
    explanation: 'Czasowniki stanu nie występują w formie continuous, dlatego używamy past perfect simple.',
  },

  // ─────────────
  // 5B – Past plans and intentions
  // ─────────────
  {
    id: 5,
    area: 'Past plans & intentions',
    prompt: 'I was supposed _____ her yesterday, but I forgot.',
    options: [ 'to call', 'calling' ],
    answer: 'to call',
    explanation: 'Po was supposed używamy bezokolicznika z to.',
  },
  {
    id: 6,
    area: 'Past plans & intentions',
    prompt: 'They were planning on _____ abroad, but changed their minds.',
    options: [ 'move', 'moving' ],
    answer: 'moving',
    explanation: 'Po planning on używamy formy -ing.',
  },
  {
    id: 7,
    area: 'Past plans & intentions',
    prompt: 'I was thinking of _____ careers at the time.',
    options: [ 'switch', 'switching' ],
    answer: 'switching',
    explanation: 'Po thinking of zawsze używamy formy -ing.',
  },
  {
    id: 8,
    area: 'Past plans & intentions',
    prompt: 'She was meant _____ the report before the meeting.',
    options: [ 'to finish', 'finishing' ],
    answer: 'to finish',
    explanation: 'Po was meant używamy bezokolicznika z to.',
  },
  {
    id: 9,
    area: 'Past plans & intentions',
    prompt: 'We were hoping _____ the contract that day.',
    options: [ 'to sign', 'signing' ],
    answer: 'to sign',
    explanation: 'Po was hoping używamy bezokolicznika z to.',
  },

  // ─────────────
  // 5C – Describing problems & suggesting solutions
  // ─────────────
  {
    id: 10,
    area: 'Describing problems',
    prompt: 'My laptop keeps _____ during meetings.',
    options: [ 'crash', 'crashing' ],
    answer: 'crashing',
    explanation: 'Po keep używamy formy -ing, aby opisać powtarzający się problem.',
  },
  {
    id: 11,
    area: 'Describing problems',
    prompt: 'I can’t get the microphone _____ properly.',
    options: [ 'working', 'to work' ],
    answer: 'working',
    explanation: 'Konstrukcja can’t get something working służy do opisu problemów technicznych.',
  },
  {
    id: 12,
    area: 'Suggesting solutions',
    prompt: 'Why don’t you try _____ the app again?',
    options: [ 'restart', 'restarting' ],
    answer: 'restarting',
    explanation: 'Po why don’t you try używamy formy -ing.',
  },
  {
    id: 13,
    area: 'Suggesting solutions',
    prompt: 'It might be worth _____ the settings.',
    options: [ 'check', 'checking' ],
    answer: 'checking',
    explanation: 'Po it might be worth używamy formy -ing.',
  },
  {
    id: 14,
    area: 'Explaining solutions',
    prompt: 'It sometimes helps if you _____ the device.',
    options: [ 'restart', 'restarting' ],
    answer: 'restart',
    explanation: 'Po it sometimes helps if używamy bezokolicznika bez to.',
  },

  // ─────────────
  // 5D – Non-defining relative clauses (comments)
  // ─────────────
  {
    id: 15,
    area: 'Non-defining relative clauses',
    prompt: 'I worked with Tom, _____ was a great experience.',
    options: [ 'that', 'which' ],
    answer: 'which',
    explanation: 'W non-defining relative clauses używamy which i oddzielamy je przecinkiem.',
  },
  {
    id: 16,
    area: 'Non-defining relative clauses',
    prompt: 'She joined the company last year, _____ surprised everyone.',
    options: [ 'which', 'that' ],
    answer: 'which',
    explanation: 'Which odnosi się do całego poprzedniego zdania jako komentarz.',
  },
  {
    id: 17,
    area: 'Non-defining relative clauses',
    prompt: 'My manager, _____ idea this was, explained everything.',
    options: [ 'who', 'whose' ],
    answer: 'whose',
    explanation: 'Whose używamy do wyrażania posiadania w relative clauses.',
  },
];