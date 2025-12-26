import type { GrammarQuestion } from '~/models/grammar-question';

export const grammar2: GrammarQuestion[] = [
  {
    id: 1,
    area: 'Future probability – will / going to',
    prompt: 'Look at those black clouds! It ______ soon.',
    options: [ 'is going to rain', 'will probably rain', 'might rains' ],
    answer: 'is going to rain',
    explanation:
      'Używamy be going to, gdy mamy dowód w teraźniejszości (czarne chmury). ',
  },
  {
    id: 2,
    area: 'Future probability – will',
    prompt: 'I\'m pretty sure Italy ______ tomorrow.',
    options: [ 'will win', 'is winning', 'is going to won' ],
    answer: 'will win',
    explanation:
      'Will + bezokolicznik do przewidywań opartych na opinii, bez mocnego dowodu. ',
  },
  {
    id: 3,
    area: 'Future probability – adverbs',
    prompt: 'We ______ come to the party – we’re not sure yet.',
    options: [ 'might', 'are certain to', 'are due to' ],
    answer: 'might',
    explanation:
      'Might używamy, gdy coś jest możliwe, ale niepewne. ',
  },
  {
    id: 4,
    area: 'Future probability – adverbs position',
    prompt: 'We ______ definitely be at the conference tomorrow.',
    options: [ 'will', 'definitely will', 'will definitely' ],
    answer: 'will definitely',
    explanation:
      'Przysłówek zwykle stoi po will: will definitely, a przed czasownikiem głównym. ',
  },
  {
    id: 5,
    area: 'Be certain to / be likely to',
    prompt: 'This ambitious study is ______ have a big impact.',
    options: [ 'certain to', 'likely', 'might to' ],
    answer: 'certain to',
    explanation:
      'Be certain to + bezokolicznik, gdy jesteśmy pewni, że coś się wydarzy. ',
  },
  {
    id: 6,
    area: 'Be likely to / unlikely to',
    prompt: 'Virtual reality is ______ affect my industry.',
    options: [ 'unlikely to', 'unlikely for', 'not likely affect' ],
    answer: 'unlikely to',
    explanation:
      'Unlikely to + bezokolicznik używamy, gdy sądzimy, że coś raczej się nie wydarzy. ',
  },
  {
    id: 7,
    area: 'Be due to',
    prompt: 'Researchers are ______ announce the findings tomorrow.',
    options: [ 'due to', 'due', 'going to' ],
    answer: 'due to',
    explanation:
      'Be due to + bezokolicznik oznacza, że coś jest zaplanowane/harmonogram. ',
  },
  {
    id: 8,
    area: 'Will vs could / may not',
    prompt: 'That tech company ______ invest in VR in the future – it’s not certain.',
    options: [ 'may not', 'could not', 'won’t to' ],
    answer: 'may not',
    explanation:
      'Możemy użyć may not / might not dla niepewnej negatywnej przyszłości, ale nie *could not* w tym znaczeniu. ',
  },
  {
    id: 9,
    area: 'Likely / unlikely',
    prompt: 'Some employees are ______ work beyond retirement age.',
    options: [ 'likely to', 'going to likely', 'certain' ],
    answer: 'likely to',
    explanation:
      'Be likely to + bezokolicznik – coś prawdopodobnie się wydarzy. ',
  },
  {
    id: 10,
    area: 'Be due to',
    prompt: 'The train ______ at 6 p.m., according to the timetable.',
    options: [ 'is due to depart', 'is likely depart', 'might to depart' ],
    answer: 'is due to depart',
    explanation:
      'Be due to + bezokolicznik dla zaplanowanych, rozkładowych wydarzeń. ',
  },
  {
    id: 11,
    area: 'Might / could / may',
    prompt: 'We ______ go to Japan next year, but we haven’t decided yet.',
    options: [ 'might', 'are certain to', 'are due to' ],
    answer: 'might',
    explanation:
      'Might / may / could – gdy coś jest możliwe, ale niepewne. ',
  },
  {
    id: 12,
    area: 'Be likely / unlikely',
    prompt: 'My team is ______ reach the next round – they’re playing really well.',
    options: [ 'likely to', 'might to', 'due to' ],
    answer: 'likely to',
    explanation:
      'Be likely to – duże prawdopodobieństwo na podstawie obecnych informacji. ',
  },
  {
    id: 13,
    area: 'Be unlikely / not likely',
    prompt: 'We are ______ go on holiday this year – we just can’t afford it.',
    options: [ 'unlikely to', 'certain to', 'might' ],
    answer: 'unlikely to',
    explanation:
      'Unlikely to / not likely to – prawdopodobnie się nie wydarzy. ',
  },
  {
    id: 14,
    area: 'Future probability – certain to',
    prompt: 'Prices are ______ rise in the next few years.',
    options: [ 'certain to', 'likely for', 'might to' ],
    answer: 'certain to',
    explanation:
      'Be certain to – prawie 100% pewności co do przyszłości. ',
  },
  {
    id: 15,
    area: 'Future probability – might not',
    prompt: 'Jan ______ meet us tonight because she isn\'t feeling well.',
    options: [ 'might not', 'could not', 'won’t probably' ],
    answer: 'might not',
    explanation:
      'Might not – możliwe, że nie, ale nie jest to pewne; *could not* tu nie pasuje. ',
  },
  {
    id: 16,
    area: 'Future probability – adverbs',
    prompt: 'Machines ______ replace human workers for many years.',
    options: [ 'probably won’t', 'won’t probably', 'might not to' ],
    answer: 'probably won’t',
    explanation:
      'Przysłówek zwykle stoi przed won’t: probably won’t, a nie *won’t probably*. ',
  },
  {
    id: 17,
    area: 'Quantifiers – little / a little',
    prompt: 'It was cold, but there was very ______ snow.',
    options: [ 'little', 'a little', 'few' ],
    answer: 'little',
    explanation:
      'Little + niepoliczalne = mało (i raczej za mało); a little = trochę, wystarczająco. ',
  },
  {
    id: 18,
    area: 'Quantifiers – a little',
    prompt: 'Spending ______ time in a green space can improve your mood.',
    options: [ 'a little', 'few', 'no' ],
    answer: 'a little',
    explanation:
      'A little + niepoliczalne (time) – niewielka, ale pozytywna ilość. ',
  },
  {
    id: 19,
    area: 'Quantifiers – few / a few',
    prompt: 'I recently bought ______ plants for the office.',
    options: [ 'a few', 'few', 'a little' ],
    answer: 'a few',
    explanation:
      'A few + policzalne (plants) – kilka, pozywnie (nie jest to „za mało”). ',
  },
  {
    id: 20,
    area: 'Quantifiers – few',
    prompt: 'There are ______ things I enjoy more than going for an early morning walk.',
    options: [ 'few', 'a few', 'no' ],
    answer: 'few',
    explanation:
      'Few things I enjoy more… = niewiele (prawie nic nie jest lepsze). ',
  },
  {
    id: 21,
    area: 'Quantifiers – a good deal / a handful',
    prompt: 'I spend ______ time outdoors.',
    options: [ 'a good deal of', 'a handful of', 'no' ],
    answer: 'a good deal of',
    explanation:
      'A good deal of + niepoliczalne – duża ilość. A handful of = mała liczba. ',
  },
  {
    id: 22,
    area: 'Quantifiers – several / a good deal of',
    prompt: 'There are ______ ways you can improve your mental health.',
    options: [ 'several', 'no', 'a little' ],
    answer: 'several',
    explanation:
      'Several + policzalne – kilka (więcej niż a few, nadal niewielka liczba). ',
  },
  {
    id: 23,
    area: 'Quantifiers – majority / lack of',
    prompt: 'The ______ people in major cities use public transport.',
    options: [ 'majority of', 'handful of', 'little' ],
    answer: 'majority of',
    explanation:
      'The majority of = więcej niż połowa grupy. ',
  },
  {
    id: 24,
    area: 'Quantifiers – no / every',
    prompt: 'We are so busy that we have ______ time to just sit and relax.',
    options: [ 'no', 'every', 'a few' ],
    answer: 'no',
    explanation:
      'No + niepoliczalne (time) = w ogóle go nie ma. ',
  },
  {
    id: 25,
    area: 'Quantifiers – lack of / plenty of',
    prompt: 'There is a ______ affordable housing in the city.',
    options: [ 'lack of', 'plenty of', 'minority of' ],
    answer: 'lack of',
    explanation:
      'A lack of = brak lub niewystarczająca ilość czegoś. ',
  },
  {
    id: 26,
    area: 'Quantifiers – majority / minority',
    prompt: 'Those against the decision were in a ______.',
    options: [ 'minority', 'majority', 'handful' ],
    answer: 'minority',
    explanation:
      'In a minority = mniej niż połowa grupy. ',
  },
  {
    id: 27,
    area: 'Relative clauses – defining',
    prompt:
      'Fuji Rock uses chopsticks ______ are made from local wood.',
    options: [ 'which', 'where', 'when' ],
    answer: 'which',
    explanation:
      'Things → which/that; to zdanie jest definiujące (bez przecinków). ',
  },
  {
    id: 28,
    area: 'Relative clauses – where / which',
    prompt: 'That\'s the festival ______ Alt-J played years ago.',
    options: [ 'where', 'which', 'who' ],
    answer: 'where',
    explanation:
      'Mówimy o miejscu → where. Można też użyć which … in (The festival which they played in), ale w podręczniku jest where. ',
  },
  {
    id: 29,
    area: 'Relative clauses – whose',
    prompt: 'I met some people ______ tent collapsed in the night.',
    options: [ 'whose', 'who', 'which' ],
    answer: 'whose',
    explanation:
      'Whose wyraża przynależność (ich namiot). ',
  },
  {
    id: 30,
    area: 'Relative clauses – non-defining',
    prompt:
      'The festival, ______ was started by a group of volunteers, has run for more than twenty years.',
    options: [ 'which', 'that', 'where' ],
    answer: 'which',
    explanation:
      'W zdaniach niedefiniujących (z przecinkami) używamy who/which, ale nie that. ',
  },
  {
    id: 31,
    area: 'How to speculate – certainty',
    prompt:
      'You\'re 90–100% sure life on the Antarctic is tough. You say: ______ life on the Antarctic is tough.',
    options: [
      'I\'m fairly certain that',
      'There\'s no way that',
      'I doubt that',
    ],
    answer: 'I\'m fairly certain that',
    explanation:
      'Frazy typu I’m fairly certain / I’m fairly sure pokazują wysoki stopień pewności, ale nie 100%. ',
  },
  {
    id: 32,
    area: 'How to speculate – impossibility',
    prompt:
      'You think it\'s impossible that they actually enjoy living there. You say: ______ they can actually enjoy living there.',
    options: [
      'There\'s no way that',
      'I’d imagine that',
      'I reckon that',
    ],
    answer: 'There\'s no way that',
    explanation:
      'There\'s no way (that) … używamy, gdy uważamy coś za niemożliwe. ',
  },
];