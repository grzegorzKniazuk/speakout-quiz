import type { GrammarQuestion } from '~/models/grammar-question';

export const grammar1: GrammarQuestion[] = [
  // ─────────────
  // 1A – Present perfect: simple vs continuous
  // ─────────────
  {
    id: 1,
    area: 'Present perfect: result vs activity',
    prompt: 'We _____ people all morning and we still have five more to see.',
    options: [ 'have interviewed', 'have been interviewing' ],
    answer: 'have been interviewing',
    explanation: 'Czynność trwała przez pewien czas i nadal się nie skończyła (all morning), więc używamy present perfect continuous.',
  },
  {
    id: 2,
    area: 'Present perfect: result vs activity',
    prompt: 'She _____ three job interviews so far.',
    options: [ 'has been attending', 'has attended' ],
    answer: 'has attended',
    explanation: 'Skupiamy się na rezultacie (ile rozmów), więc używamy present perfect simple.',
  },
  {
    id: 3,
    area: 'Present perfect: how long vs how many',
    prompt: 'How long _____ you _____ English?',
    options: [ 'have / studied', 'have / been studying' ],
    answer: 'have / been studying',
    explanation: 'Pytanie How long dotyczy czasu trwania czynności, więc używamy formy continuous.',
  },
  {
    id: 4,
    area: 'Present perfect: finished vs unfinished',
    prompt: 'I _____ Dutch, but it’s still difficult.',
    options: [ 'have learnt', 'have been learning' ],
    answer: 'have been learning',
    explanation: 'Nauka nadal trwa i nie jest zakończona, więc używamy present perfect continuous.',
  },
  {
    id: 5,
    area: 'Present perfect: finished vs unfinished',
    prompt: 'Oh no! I _____ my phone.',
    options: [ 'have been losing', 'have lost' ],
    answer: 'have lost',
    explanation: 'Czynność jest zakończona, a liczy się jej rezultat (telefon jest zgubiony).',
  },
  {
    id: 6,
    area: 'Present perfect: state verbs',
    prompt: 'How long _____ you _____ her?',
    options: [ 'have / known', 'have / been knowing' ],
    answer: 'have / known',
    explanation: 'Czasowniki stanu (know) nie występują w formie continuous.',
  },
  // ─────────────
  // 1B – Infinitive vs -ing (change of meaning)
  // ─────────────
  {
    id: 7,
    area: 'Infinitive vs -ing',
    prompt: 'I stopped _____ my boss because I needed his advice.',
    options: [ 'to call', 'calling' ],
    answer: 'to call',
    explanation: 'stop + to infinitive = przerwać inną czynność, żeby coś zrobić.',
  },
  {
    id: 8,
    area: 'Infinitive vs -ing',
    prompt: 'I stopped _____ my boss because he never listened.',
    options: [ 'to call', 'calling' ],
    answer: 'calling',
    explanation: 'stop + -ing = przestać wykonywać daną czynność.',
  },
  {
    id: 9,
    area: 'Infinitive vs -ing',
    prompt: 'Do you remember _____ your first day at school?',
    options: [ 'to start', 'starting' ],
    answer: 'starting',
    explanation: 'remember + -ing odnosi się do wspomnienia z przeszłości.',
  },
  {
    id: 10,
    area: 'Infinitive vs -ing',
    prompt: 'Remember _____ your mum when you arrive.',
    options: [ 'to call', 'calling' ],
    answer: 'to call',
    explanation: 'remember + to infinitive oznacza pamiętać, żeby coś zrobić.',
  },
  {
    id: 11,
    area: 'Infinitive vs -ing',
    prompt: 'She tried _____ more water to stop the headaches.',
    options: [ 'to drink', 'drinking' ],
    answer: 'drinking',
    explanation: 'try + -ing oznacza eksperymentowanie, żeby sprawdzić efekt.',
  },

  // ─────────────
  // 1B – Infinitive of purpose / after prepositions
  // ─────────────
  {
    id: 12,
    area: 'Infinitive & -ing forms',
    prompt: 'She studies hard _____ get good results.',
    options: [ 'for', 'to' ],
    answer: 'to',
    explanation: 'To-infinitive służy do wyrażania celu (why?).',
  },
  {
    id: 13,
    area: 'Infinitive & -ing forms',
    prompt: 'He passed his exams by _____ every day.',
    options: [ 'study', 'studying' ],
    answer: 'studying',
    explanation: 'Po przyimkach (by) używamy formy -ing.',
  },

  // ─────────────
  // 1C – Expressing preferences
  // ─────────────
  {
    id: 14,
    area: 'Expressing preferences',
    prompt: 'I’d rather _____ at home tonight.',
    options: [ 'stay', 'to stay' ],
    answer: 'stay',
    explanation: 'Po would rather używamy bezokolicznika bez „to”.',
  },
  {
    id: 15,
    area: 'Expressing preferences',
    prompt: 'I’d prefer _____ earlier tomorrow.',
    options: [ 'leave', 'to leave' ],
    answer: 'to leave',
    explanation: 'Po would prefer używamy bezokolicznika z „to”.',
  },
  {
    id: 16,
    area: 'Expressing preferences',
    prompt: 'I’m not keen on _____ museums.',
    options: [ 'visit', 'visiting' ],
    answer: 'visiting',
    explanation: 'Po przyimkach (on) używamy formy -ing.',
  },
  // ─────────────
  // 1D – while / whereas / whilst
  // ─────────────
  {
    id: 17,
    area: 'Contrasting ideas',
    prompt: 'She’s very outgoing, _____ her sister is shy.',
    options: [ 'while', 'because' ],
    answer: 'while',
    explanation: 'while łączy dwa kontrastujące fakty.',
  },
  {
    id: 18,
    area: 'Contrasting ideas',
    prompt: 'I’m confident at work, _____ I feel nervous in social situations.',
    options: [ 'whereas', 'so' ],
    answer: 'whereas',
    explanation: 'whereas służy do podkreślenia kontrastu między dwoma sytuacjami.',
  },
  {
    id: 19,
    area: 'Contrasting ideas',
    prompt: '_____ he enjoys parties, I prefer quiet evenings.',
    options: [ 'Whilst', 'Although' ],
    answer: 'Whilst',
    explanation: 'whilst działa podobnie jak while i wprowadza kontrast.',
  },
];