import type { GrammarQuestion } from '~/models/grammar-question';

export const grammar1: GrammarQuestion[] = [
  {
    id: 1,
    area: 'Present perfect: result vs activity',
    prompt: 'We _____ people all morning and we still have five more to see.',
    options: [ 'have interviewed', 'have been interviewing' ],
    answer: 'have been interviewing',
    explanation:
      'Mówimy o TRWAJĄCEJ czynności (all morning, jeszcze się nie skończyła), więc używamy present perfect continuous.',
  },
  {
    id: 2,
    area: 'Present perfect: result vs activity',
    prompt: 'We _____ some really interesting replies.',
    options: [ 'have had', 'have been having' ],
    answer: 'have had',
    explanation:
      'Tutaj liczy się WYNIK (mamy już odpowiedzi), więc używamy present perfect simple.',
  },
  {
    id: 3,
    area: 'Present perfect: how many?',
    prompt: 'We _____ more than 100 applicants for the job.',
    options: [ 'have interviewed', 'have been interviewing' ],
    answer: 'have interviewed',
    explanation:
      'Pytanie dotyczy liczby (how many), więc używamy present perfect simple.',
  },
  {
    id: 4,
    area: 'Present perfect: how long?',
    prompt: 'We _____ for over forty minutes now!',
    options: [ 'have waited', 'have been waiting' ],
    answer: 'have been waiting',
    explanation:
      '„For over forty minutes” podkreśla czas trwania → present perfect continuous.',
  },
  {
    id: 5,
    area: 'Present perfect: finished vs unfinished',
    prompt: 'I _____ that hard work always pays off.',
    options: [ 'have learnt', 'have been learning' ],
    answer: 'have learnt',
    explanation:
      'To gotowy wniosek/lekcja (rezultat), więc używamy present perfect simple.',
  },
  {
    id: 6,
    area: 'Present perfect: unfinished',
    prompt: 'I _____ Mandarin – it’s really hard!',
    options: [ 'have learnt', 'have been learning' ],
    answer: 'have been learning',
    explanation:
      'Nauka wciąż trwa i nie jest zakończona → present perfect continuous.',
  },
  {
    id: 7,
    area: 'Present perfect: experiences',
    prompt: 'I _____ that film about twenty-five times.',
    options: [ 'have seen', 'have been seeing' ],
    answer: 'have seen',
    explanation:
      'Mówimy o liczbie doświadczeń (ile razy) → present perfect simple.',
  },
  {
    id: 8,
    area: 'Present perfect: state verbs',
    prompt: 'We _____ them for about ten years.',
    options: [ 'have known', 'have been knowing' ],
    answer: 'have known',
    explanation:
      'Czasownik ‘know’ to czasownik statyczny – używamy present perfect simple, nie continuous.',
  },
  {
    id: 9,
    area: 'Present perfect: state verbs',
    prompt: 'How long _____ this car?',
    options: [ 'have you owned', 'have you been owning' ],
    answer: 'have you owned',
    explanation:
      '‘Own’ to czasownik statyczny – tylko present perfect simple: have owned.',
  },
  {
    id: 10,
    area: 'Present perfect: for / since',
    prompt: 'She _____ here since 2018.',
    options: [ 'has worked', 'has been working' ],
    answer: 'has been working',
    explanation:
      'Od 2018 do teraz – podkreślamy ciągłość (how long), więc naturalny jest present perfect continuous.',
  },
  {
    id: 11,
    area: 'Present perfect: for / since',
    prompt: 'He _____ on that report all morning!',
    options: [ 'has worked', 'has been working' ],
    answer: 'has been working',
    explanation:
      '„All morning” – czas trwania i czynność w toku → present perfect continuous.',
  },
  {
    id: 12,
    area: 'Present perfect: always / never',
    prompt: 'He _____ driven to work – he always goes by bike.',
    options: [ 'has never', 'has never been' ],
    answer: 'has never',
    explanation:
      'Przy always/never (nawyki/życiowe doświadczenia) stosujemy present perfect simple: has never driven.',
  },

  // -------- INFINITIVE vs -ING: OGÓLNE ZASADY + GB --------
  {
    id: 13,
    area: 'Infinitive: purpose',
    prompt: 'I went to the library _____ for my exam.',
    options: [ 'to study', 'studying' ],
    answer: 'to study',
    explanation:
      '‘To + infinitive’ używamy, żeby wyrazić cel: go somewhere to do something.',
  },
  {
    id: 14,
    area: 'Infinitive after \'be\'',
    prompt: 'The purpose of this article is _____ how memory works.',
    options: [ 'to show', 'showing' ],
    answer: 'to show',
    explanation:
      'Po ‘be’ (is, was, etc.) często używamy to + infinitive: the purpose is to show.',
  },
  {
    id: 15,
    area: 'So as (not) to',
    prompt:
      'She ran to school so as not _____ late.',
    options: [ 'to be', 'being' ],
    answer: 'to be',
    explanation:
      'Po ‘so as (not) to’ zawsze jest infinitive: so as (not) to do something.',
  },
  {
    id: 16,
    area: '-ing after preposition',
    prompt: 'She prepared for her exam by _____ every day with a friend.',
    options: [ 'revising', 'to revise' ],
    answer: 'revising',
    explanation:
      'Po przyimkach (by, in, on, without, etc.) stosujemy formę -ing.',
  },
  {
    id: 17,
    area: '-ing after preposition',
    prompt: 'I passed my exams by _____ really hard.',
    options: [ 'working', 'to work' ],
    answer: 'working',
    explanation:
      'Znowu: po ‘by’ → tylko -ing: by working.',
  },
  {
    id: 18,
    area: 'Infinitive vs -ing: try',
    prompt: 'If your computer freezes, try _____ it off and on again.',
    options: [ 'switching', 'to switch' ],
    answer: 'switching',
    explanation:
      'Try doing = spróbuj jako eksperyment/rozwiązanie (zobaczymy, czy zadziała).',
  },
  {
    id: 19,
    area: 'Infinitive vs -ing: remember',
    prompt:
      'We must remember _____ our medicine tomorrow.',
    options: [ 'to take', 'taking' ],
    answer: 'to take',
    explanation:
      'Remember to do = nie zapomnij wykonać czynności w przyszłości (obowiązek).',
  },
  {
    id: 20,
    area: 'Infinitive vs -ing: remember',
    prompt:
      'I remember _____ in the back garden when I was six years old.',
    options: [ 'to play', 'playing' ],
    answer: 'playing',
    explanation:
      'Remember doing = pamiętam, że coś robiłem w przeszłości (wspomnienie).',
  },
  {
    id: 21,
    area: 'Infinitive vs -ing: forget',
    prompt:
      'Oh no! I forgot _____ the alarm on before we left.',
    options: [ 'to switch', 'switching' ],
    answer: 'to switch',
    explanation:
      'Forget to do = zapomnieć coś zrobić (i tego nie zrobiłem).',
  },
  {
    id: 22,
    area: 'Infinitive vs -ing: forget',
    prompt:
      'She’ll never forget _____ on TV. It was so exciting!',
    options: [ 'singing', 'to sing' ],
    answer: 'singing',
    explanation:
      'Never forget doing = nigdy nie zapomni tego, co już zrobiła (wspomnienie).',
  },
  {
    id: 23,
    area: 'Infinitive vs -ing: stop',
    prompt: 'I stopped _____ my mother on the way home.',
    options: [ 'to call', 'calling' ],
    answer: 'to call',
    explanation:
      'Stop to do = zatrzymałem się, ŻEBY coś zrobić (zmiana aktywności).',
  },
  {
    id: 24,
    area: 'Infinitive vs -ing: stop',
    prompt:
      'Because of his injury, he has stopped _____ altogether.',
    options: [ 'cycling', 'to cycle' ],
    answer: 'cycling',
    explanation:
      'Stop doing = przestać coś robić na stałe (zrezygnował z jazdy na rowerze).',
  },
  {
    id: 25,
    area: 'Infinitive vs -ing: try',
    prompt: 'I _____ more water, but I still get headaches.',
    options: [ 'tried drinking', 'tried to drink' ],
    answer: 'tried drinking',
    explanation:
      'Try doing = eksperyment, próbowałem jako sposobu na problem.',
  },
  {
    id: 26,
    area: 'While / whereas / whilst (contrast)',
    prompt: '_____ Marta is very sociable and outgoing, her sister is quiet and shy.',
    options: [ 'While', 'Whilst', 'Whereas' ],
    answer: 'While',
    explanation: 'Tu łączymy dwie przeciwstawne cechy – while/whilst/whereas są możliwe; wybraliśmy ‘While’ jako najczęstsze w mowie.',
  },
  {
    id: 27,
    area: 'While vs whereas (time vs contrast)',
    prompt: 'Tim made supper _____ I went upstairs for a shower.',
    options: [ 'while', 'whereas' ],
    answer: 'while',
    explanation: 'Tu chodzi o DWIE czynności w tym samym czasie (time), więc używamy while, nie whereas (kontrast).',
  },
  {
    id: 28,
    area: 'Would rather / would prefer',
    prompt: 'I’d _____ have rice than pasta.',
    options: [ 'rather', 'prefer to' ],
    answer: 'rather',
    explanation: '‘Would rather’ + bezokolicznik bez ‘to’: I’d rather have.',
  },
  {
    id: 29,
    area: 'Would rather / would prefer',
    prompt: 'We’d _____ to travel on Tuesday.',
    options: [ 'prefer', 'rather' ],
    answer: 'prefer',
    explanation: '‘Would prefer’ + to + infinitive: we’d prefer to travel.',
  },
  {
    id: 30,
    area: 'Given the choice',
    prompt: '_____ , I’d go to Malawi for my holiday.',
    options: [ 'Given the choice', 'If I’d rather' ],
    answer: 'Given the choice',
    explanation: 'Zgodnie z Grammar Bank: używamy frazy ‘Given the choice, I’d …’ do mówienia o hipotetycznych preferencjach.',
  },
  {
    id: 31,
    area: 'Likes / dislikes',
    prompt: 'I can’t _____ modern shopping centres – they’re so crowded.',
    options: [ 'stand', 'rather' ],
    answer: 'stand',
    explanation: 'Can’t stand + noun / -ing = bardzo czegoś nie lubić.',
  },
  {
    id: 32,
    area: 'Infinitive: so as not to',
    prompt: 'People use memory palaces so as not _____ important information.',
    options: [ 'to forget', 'forgetting' ],
    answer: 'to forget',
    explanation: 'Po ‘so as not to’ zawsze mamy to + infinitive.',
  },
];