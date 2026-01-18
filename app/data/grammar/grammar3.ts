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

  // ─────────────
  // 3E – INVERSION & EMPHATIC STRUCTURES (materiały od lektorki)
  // ─────────────
  {
    id: 17,
    area: 'Inversion – negative adverbials',
    prompt: 'Under no circumstances _____ you press the red button on the telephone.',
    options: [ 'should', 'you should' ],
    answer: 'should',
    explanation: 'Po wyrażeniach typu Under no circumstances stosujemy inwersję: modal + subject.',
  },
  {
    id: 18,
    area: 'Inversion – frequency adverbials',
    prompt: 'Seldom _____ he go out at the weekends.',
    options: [ 'does', 'do' ],
    answer: 'does',
    explanation: 'Po Seldom na początku zdania stosujemy inwersję z does/did (Present Simple).',
  },
  {
    id: 19,
    area: 'Inversion – only + time expression',
    prompt: 'Only after Monday _____ I be at home.',
    options: [ 'will', 'do' ],
    answer: 'will',
    explanation: 'Po Only + wyrażenie czasowe na początku zdania stosujemy inwersję: will + subject.',
  },
  {
    id: 20,
    area: 'Inversion – on no account',
    prompt: 'On no account _____ he find £50,000 to pay the ransom.',
    options: [ 'can', 'he can' ],
    answer: 'can',
    explanation: 'Po On no account stosujemy inwersję: can + subject (bez „he” przed czasownikiem).',
  },
  {
    id: 21,
    area: 'Emphatic questions – Why is/was it that',
    prompt: 'Why _____ it that you were late for work today?',
    options: [ 'was', 'did' ],
    answer: 'was',
    explanation: 'W pytaniu emfatycznym używamy konstrukcji: Why was it that…?',
  },
  {
    id: 22,
    area: 'Emphatic questions – Was it … that',
    prompt: 'Was it the front door _____ you locked?',
    options: [ 'that', 'who' ],
    answer: 'that',
    explanation: 'W pytaniach emfatycznych (cleft) używamy that dla rzeczy/elementów nieosobowych.',
  },
  {
    id: 23,
    area: 'Cleft sentences – It was … who',
    prompt: 'It was Mary _____ sent this card.',
    options: [ 'who', 'which' ],
    answer: 'who',
    explanation: 'Gdy podkreślamy osobę, używamy who (nie which).',
  },
  {
    id: 24,
    area: 'Cleft sentences – It was … that',
    prompt: 'It was last night _____ Mary came round.',
    options: [ 'that', 'what' ],
    answer: 'that',
    explanation: 'Po It was + okolicznik czasu/miejsca zwykle używamy that.',
  },
  {
    id: 25,
    area: 'Do/does/did for emphasis – reminders',
    prompt: 'Mum, you _____ promise to buy me a new pair of jeans.',
    options: [ 'did', 'do' ],
    answer: 'did',
    explanation: 'Dla podkreślenia w Past Simple używamy did + bezokolicznik.',
  },
  {
    id: 26,
    area: 'Do/does/did for emphasis – reporting',
    prompt: 'She _____ say that she might be late for dinner.',
    options: [ 'did', 'was' ],
    answer: 'did',
    explanation: 'Did + bare infinitive podkreśla prawdziwość informacji: She did say…',
  },
];