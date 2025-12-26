import type { GrammarQuestion } from '~/models/grammar-question';

export const grammar6: GrammarQuestion[] = [
  // ─────────────
  // 6A – NECESSITY, PROHIBITION AND PERMISSION
  // ─────────────
  {
    id: 1,
    area: 'Necessity',
    prompt: 'The report _____ finished by Friday.',
    options: [ 'needs to be', 'needs finishing' ],
    answer: 'needs to be',
    explanation: 'Konstrukcja need + to be + past participle podkreśla konieczność wykonania czynności.',
  },
  {
    id: 2,
    area: 'Necessity',
    prompt: 'My phone battery needs _____ again.',
    options: [ 'charging', 'to charge' ],
    answer: 'charging',
    explanation: 'Need + -ing stosujemy, gdy skupiamy się na samej czynności, a nie na wykonawcy.',
  },
  {
    id: 3,
    area: 'Necessity',
    prompt: 'You _____ show your ID at reception.',
    options: [ 'must', 'are allowed to' ],
    answer: 'must',
    explanation: 'Must wyraża silną konieczność lub obowiązek.',
  },
  {
    id: 4,
    area: 'Prohibition',
    prompt: 'You are not _____ to use your phone during the exam.',
    options: [ 'allowed', 'permitted' ],
    answer: 'allowed',
    explanation: 'Be not allowed to oznacza brak pozwolenia lub zakaz.',
  },
  {
    id: 5,
    area: 'Prohibition',
    prompt: 'Photography is strictly _____ in the museum.',
    options: [ 'forbidden', 'allowed' ],
    answer: 'forbidden',
    explanation: 'Forbidden to formalny sposób wyrażenia zakazu, często w stronie biernej.',
  },
  {
    id: 6,
    area: 'Prohibition',
    prompt: 'You _____ talk during the test.',
    options: [ 'mustn’t', 'don’t have to' ],
    answer: 'mustn’t',
    explanation: 'Mustn’t oznacza całkowity zakaz.',
  },
  {
    id: 7,
    area: 'Permission',
    prompt: 'We were _____ to leave early.',
    options: [ 'allowed', 'needed' ],
    answer: 'allowed',
    explanation: 'Be allowed to wyraża pozwolenie w teraźniejszości lub przeszłości.',
  },
  {
    id: 8,
    area: 'Permission',
    prompt: 'The rules permit visitors _____ photos in this area.',
    options: [ 'to take', 'taking' ],
    answer: 'to take',
    explanation: 'Po permit używamy konstrukcji object + to infinitive.',
  },

  // ─────────────
  // 6B – REPORTED ORDERS, REQUESTS AND ADVICE
  // ─────────────
  {
    id: 9,
    area: 'Reported orders',
    prompt: 'The manager told me _____ late again.',
    options: [ 'not to arrive', 'don’t arrive' ],
    answer: 'not to arrive',
    explanation: 'W reported orders używamy tell + object + to infinitive.',
  },
  {
    id: 10,
    area: 'Reported requests',
    prompt: 'She asked me _____ her with the presentation.',
    options: [ 'to help', 'helping' ],
    answer: 'to help',
    explanation: 'Ask + object + to infinitive służy do relacjonowania próśb.',
  },
  {
    id: 11,
    area: 'Reported advice',
    prompt: 'The doctor advised him _____ more rest.',
    options: [ 'to get', 'getting' ],
    answer: 'to get',
    explanation: 'Advise + object + to infinitive używamy do przekazywania rad.',
  },
  {
    id: 12,
    area: 'Reported orders',
    prompt: 'She ordered us _____ immediately.',
    options: [ 'to leave', 'leaving' ],
    answer: 'to leave',
    explanation: 'Order + object + to infinitive wyraża rozkaz w mowie zależnej.',
  },
  {
    id: 13,
    area: 'Reported speech – tense change',
    prompt: '“I’m feeling stressed,” he said. → He said he _____ stressed.',
    options: [ 'was feeling', 'is feeling' ],
    answer: 'was feeling',
    explanation: 'W mowie zależnej czas zwykle cofa się o jeden stopień w przeszłość.',
  },
  {
    id: 14,
    area: 'Reported questions',
    prompt: 'She asked me if I _____ time to talk.',
    options: [ 'had', 'have' ],
    answer: 'had',
    explanation: 'W reported questions stosujemy kolejność zdania oznajmującego i cofamy czas.',
  },
  {
    id: 15,
    area: 'Reported advice – still true',
    prompt: 'He says that stress _____ a serious problem.',
    options: [ 'is', 'was' ],
    answer: 'is',
    explanation: 'Gdy informacja nadal jest aktualna, nie cofamy czasu w mowie zależnej.',
  },
];