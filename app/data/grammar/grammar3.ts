import type { GrammarQuestion } from '~/models/grammar-question';

export const grammar3: GrammarQuestion[] = [
  // ─────────────
  // 3A – RELATIVE CLAUSES
  // ─────────────
  {
    id: 1,
    area: 'Relative clauses – defining',
    prompt: 'That’s the festival _____ attracts thousands of people every year.',
    options: [ 'which', 'who' ],
    answer: 'which',
    explanation: 'Which używamy do opisywania rzeczy; jest to defining relative clause (bez przecinków).',
  },
  {
    id: 2,
    area: 'Relative clauses – defining',
    prompt: 'She’s the singer _____ won the competition last year.',
    options: [ 'who', 'which' ],
    answer: 'who',
    explanation: 'Who stosujemy w odniesieniu do osób.',
  },
  {
    id: 3,
    area: 'Relative clauses – place',
    prompt: 'That’s the city _____ the festival takes place.',
    options: [ 'where', 'which' ],
    answer: 'where',
    explanation: 'Where używamy do opisywania miejsca.',
  },
  {
    id: 4,
    area: 'Relative clauses – non-defining',
    prompt: 'The concert, _____ was held outdoors, was unforgettable.',
    options: [ 'which', 'that' ],
    answer: 'which',
    explanation: 'W non-defining relative clauses nie używamy that – tylko who/which i przecinki.',
  },
  {
    id: 5,
    area: 'Relative clauses – omission',
    prompt: 'That’s the film _____ I told you about.',
    options: [ 'which', '—' ],
    answer: '—',
    explanation: 'Gdy zaimek względny jest dopełnieniem, możemy go pominąć.',
  },

  // ─────────────
  // 3B – CLEFT SENTENCES
  // ─────────────
  {
    id: 6,
    area: 'Cleft sentences – It + be',
    prompt: '_____ the ending that surprised me the most.',
    options: [ 'It was', 'What was' ],
    answer: 'It was',
    explanation: 'It + be + element + that służy do podkreślenia konkretnej informacji.',
  },
  {
    id: 7,
    area: 'Cleft sentences – What-clause',
    prompt: '_____ I enjoy most is live music.',
    options: [ 'What', 'That' ],
    answer: 'What',
    explanation: 'What-clause stosujemy, gdy podkreślamy całą ideę lub czynność.',
  },
  {
    id: 8,
    area: 'Cleft sentences – emphasis',
    prompt: 'It was the atmosphere _____ made the festival special.',
    options: [ 'that', 'what' ],
    answer: 'that',
    explanation: 'Po It was używamy that lub who, w zależności od podmiotu.',
  },
  {
    id: 9,
    area: 'Cleft sentences – verb agreement',
    prompt: 'What really matters _____ the audience.',
    options: [ 'is', 'are' ],
    answer: 'is',
    explanation: 'Po What używamy czasownika w liczbie pojedynczej.',
  },

  // ─────────────
  // 3C – VAGUE LANGUAGE
  // ─────────────
  {
    id: 10,
    area: 'Vague language – approximation',
    prompt: 'There were _____ twenty people at the concert.',
    options: [ 'about', 'exactly' ],
    answer: 'about',
    explanation: 'About używamy do przybliżonych liczb.',
  },
  {
    id: 11,
    area: 'Vague language – adjectives',
    prompt: 'She’s thirty-_____, I think.',
    options: [ 'ish', 'odd' ],
    answer: 'ish',
    explanation: '-ish dodajemy, by uczynić wiek lub cechę mniej precyzyjną.',
  },
  {
    id: 12,
    area: 'Vague language – lists',
    prompt: 'We bought snacks, drinks, _____ kind of thing.',
    options: [ 'that', 'that kind of' ],
    answer: 'that kind of',
    explanation: 'That kind of thing stosujemy, by nie wymieniać całej listy.',
  },
  {
    id: 13,
    area: 'Vague language – uncertainty',
    prompt: 'It’s _____ like a comedy, but darker.',
    options: [ 'kind of', 'exactly' ],
    answer: 'kind of',
    explanation: 'Kind of osłabia wypowiedź i czyni ją mniej kategoryczną.',
  },

  // ─────────────
  // 3D – DO / DID FOR EMPHASIS
  // ─────────────
  {
    id: 14,
    area: 'Do for emphasis – present',
    prompt: 'I _____ enjoy live performances, actually.',
    options: [ 'do', 'am' ],
    answer: 'do',
    explanation: 'Do używamy w zdaniach twierdzących, by coś podkreślić.',
  },
  {
    id: 15,
    area: 'Did for emphasis – past',
    prompt: 'I _____ like the show, despite the reviews.',
    options: [ 'did', 'was' ],
    answer: 'did',
    explanation: 'Did podkreśla prawdziwość wypowiedzi w czasie przeszłym.',
  },
  {
    id: 16,
    area: 'Do for contrast',
    prompt: 'I don’t like opera, but I _____ enjoy classical music.',
    options: [ 'do', 'am' ],
    answer: 'do',
    explanation: 'Do stosujemy, by zaznaczyć kontrast z poprzednią informacją.',
  },
];