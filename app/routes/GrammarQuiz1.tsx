import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { shuffleArray } from '~/utilities/shuffleArray';

type QuestionType = 'mc';

interface GrammarQuestion {
  id: number;
  area: string; // np. "Present perfect" / "Infinitive vs -ing"
  type: QuestionType;
  prompt: string;
  options: string[];
  answer: string;
  explanation: string; // krótkie wyjaśnienie
}

function shuffleQuestions(list: GrammarQuestion[]): GrammarQuestion[] {
  const shuffledOrder = shuffleArray(list);

  return shuffledOrder.map((q) => ({
    ...q,
    options: shuffleArray(q.options),
  }));
}

const questions: GrammarQuestion[] = [
  // -------- PRESENT PERFECT SIMPLE vs CONTINUOUS – Z TEKSTU I GB --------
  {
    id: 1,
    area: 'Present perfect: result vs activity',
    type: 'mc',
    prompt: 'We _____ people all morning and we still have five more to see.',
    options: [ 'have interviewed', 'have been interviewing' ],
    answer: 'have been interviewing',
    explanation:
      'Mówimy o TRWAJĄCEJ czynności (all morning, jeszcze się nie skończyła), więc używamy present perfect continuous.',
  },
  {
    id: 2,
    area: 'Present perfect: result vs activity',
    type: 'mc',
    prompt: 'We _____ some really interesting replies.',
    options: [ 'have had', 'have been having' ],
    answer: 'have had',
    explanation:
      'Tutaj liczy się WYNIK (mamy już odpowiedzi), więc używamy present perfect simple.',
  },
  {
    id: 3,
    area: 'Present perfect: how many?',
    type: 'mc',
    prompt: 'We _____ more than 100 applicants for the job.',
    options: [ 'have interviewed', 'have been interviewing' ],
    answer: 'have interviewed',
    explanation:
      'Pytanie dotyczy liczby (how many), więc używamy present perfect simple.',
  },
  {
    id: 4,
    area: 'Present perfect: how long?',
    type: 'mc',
    prompt: 'We _____ for over forty minutes now!',
    options: [ 'have waited', 'have been waiting' ],
    answer: 'have been waiting',
    explanation:
      '„For over forty minutes” podkreśla czas trwania → present perfect continuous.',
  },
  {
    id: 5,
    area: 'Present perfect: finished vs unfinished',
    type: 'mc',
    prompt: 'I _____ that hard work always pays off.',
    options: [ 'have learnt', 'have been learning' ],
    answer: 'have learnt',
    explanation:
      'To gotowy wniosek/lekcja (rezultat), więc używamy present perfect simple.',
  },
  {
    id: 6,
    area: 'Present perfect: unfinished',
    type: 'mc',
    prompt: 'I _____ Mandarin – it’s really hard!',
    options: [ 'have learnt', 'have been learning' ],
    answer: 'have been learning',
    explanation:
      'Nauka wciąż trwa i nie jest zakończona → present perfect continuous.',
  },
  {
    id: 7,
    area: 'Present perfect: experiences',
    type: 'mc',
    prompt: 'I _____ that film about twenty-five times.',
    options: [ 'have seen', 'have been seeing' ],
    answer: 'have seen',
    explanation:
      'Mówimy o liczbie doświadczeń (ile razy) → present perfect simple.',
  },
  {
    id: 8,
    area: 'Present perfect: state verbs',
    type: 'mc',
    prompt: 'We _____ them for about ten years.',
    options: [ 'have known', 'have been knowing' ],
    answer: 'have known',
    explanation:
      'Czasownik ‘know’ to czasownik statyczny – używamy present perfect simple, nie continuous.',
  },
  {
    id: 9,
    area: 'Present perfect: state verbs',
    type: 'mc',
    prompt: 'How long _____ this car?',
    options: [ 'have you owned', 'have you been owning' ],
    answer: 'have you owned',
    explanation:
      '‘Own’ to czasownik statyczny – tylko present perfect simple: have owned.',
  },
  {
    id: 10,
    area: 'Present perfect: for / since',
    type: 'mc',
    prompt: 'She _____ here since 2018.',
    options: [ 'has worked', 'has been working' ],
    answer: 'has been working',
    explanation:
      'Od 2018 do teraz – podkreślamy ciągłość (how long), więc naturalny jest present perfect continuous.',
  },
  {
    id: 11,
    area: 'Present perfect: for / since',
    type: 'mc',
    prompt: 'He _____ on that report all morning!',
    options: [ 'has worked', 'has been working' ],
    answer: 'has been working',
    explanation:
      '„All morning” – czas trwania i czynność w toku → present perfect continuous.',
  },
  {
    id: 12,
    area: 'Present perfect: always / never',
    type: 'mc',
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
    type: 'mc',
    prompt: 'I went to the library _____ for my exam.',
    options: [ 'to study', 'studying' ],
    answer: 'to study',
    explanation:
      '‘To + infinitive’ używamy, żeby wyrazić cel: go somewhere to do something.',
  },
  {
    id: 14,
    area: 'Infinitive after \'be\'',
    type: 'mc',
    prompt: 'The purpose of this article is _____ how memory works.',
    options: [ 'to show', 'showing' ],
    answer: 'to show',
    explanation:
      'Po ‘be’ (is, was, etc.) często używamy to + infinitive: the purpose is to show.',
  },
  {
    id: 15,
    area: 'So as (not) to',
    type: 'mc',
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
    type: 'mc',
    prompt: 'She prepared for her exam by _____ every day with a friend.',
    options: [ 'revising', 'to revise' ],
    answer: 'revising',
    explanation:
      'Po przyimkach (by, in, on, without, etc.) stosujemy formę -ing.',
  },
  {
    id: 17,
    area: '-ing after preposition',
    type: 'mc',
    prompt: 'I passed my exams by _____ really hard.',
    options: [ 'working', 'to work' ],
    answer: 'working',
    explanation:
      'Znowu: po ‘by’ → tylko -ing: by working.',
  },
  {
    id: 18,
    area: 'Infinitive vs -ing: try',
    type: 'mc',
    prompt: 'If your computer freezes, try _____ it off and on again.',
    options: [ 'switching', 'to switch' ],
    answer: 'switching',
    explanation:
      'Try doing = spróbuj jako eksperyment/rozwiązanie (zobaczymy, czy zadziała).',
  },
  {
    id: 19,
    area: 'Infinitive vs -ing: remember',
    type: 'mc',
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
    type: 'mc',
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
    type: 'mc',
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
    type: 'mc',
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
    type: 'mc',
    prompt: 'I stopped _____ my mother on the way home.',
    options: [ 'to call', 'calling' ],
    answer: 'to call',
    explanation:
      'Stop to do = zatrzymałem się, ŻEBY coś zrobić (zmiana aktywności).',
  },
  {
    id: 24,
    area: 'Infinitive vs -ing: stop',
    type: 'mc',
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
    type: 'mc',
    prompt:
      'I _____ more water, but I still get headaches.',
    options: [ 'tried drinking', 'tried to drink' ],
    answer: 'tried drinking',
    explanation:
      'Try doing = eksperyment, próbowałem jako sposobu na problem.',
  },

  // -------- WHILE / WHEREAS / WHILST --------
  {
    id: 26,
    area: 'While / whereas / whilst (contrast)',
    type: 'mc',
    prompt:
      '_____ Marta is very sociable and outgoing, her sister is quiet and shy.',
    options: [ 'While', 'Whilst', 'Whereas' ],
    answer: 'While',
    explanation:
      'Tu łączymy dwie przeciwstawne cechy – while/whilst/whereas są możliwe; wybraliśmy ‘While’ jako najczęstsze w mowie.',
  },
  {
    id: 27,
    area: 'While vs whereas (time vs contrast)',
    type: 'mc',
    prompt:
      'Tim made supper _____ I went upstairs for a shower.',
    options: [ 'while', 'whereas' ],
    answer: 'while',
    explanation:
      'Tu chodzi o DWIE czynności w tym samym czasie (time), więc używamy while, nie whereas (kontrast).',
  },

  // -------- EXPRESSING PREFERENCES (1C GRAMMAR BANK) --------
  {
    id: 28,
    area: 'Would rather / would prefer',
    type: 'mc',
    prompt: 'I’d _____ have rice than pasta.',
    options: [ 'rather', 'prefer to' ],
    answer: 'rather',
    explanation:
      '‘Would rather’ + bezokolicznik bez ‘to’: I’d rather have.',
  },
  {
    id: 29,
    area: 'Would rather / would prefer',
    type: 'mc',
    prompt: 'We’d _____ to travel on Tuesday.',
    options: [ 'prefer', 'rather' ],
    answer: 'prefer',
    explanation:
      '‘Would prefer’ + to + infinitive: we’d prefer to travel.',
  },
  {
    id: 30,
    area: 'Given the choice',
    type: 'mc',
    prompt:
      '_____ , I’d go to Malawi for my holiday.',
    options: [ 'Given the choice', 'If I’d rather' ],
    answer: 'Given the choice',
    explanation:
      'Zgodnie z Grammar Bank: używamy frazy ‘Given the choice, I’d …’ do mówienia o hipotetycznych preferencjach.',
  },
  {
    id: 31,
    area: 'Likes / dislikes',
    type: 'mc',
    prompt:
      'I can’t _____ modern shopping centres – they’re so crowded.',
    options: [ 'stand', 'rather' ],
    answer: 'stand',
    explanation:
      'Can’t stand + noun / -ing = bardzo czegoś nie lubić.',
  },

  // -------- DODATKOWE: PAMIĘĆ I INF. Z TEKSTU --------
  {
    id: 32,
    area: 'Infinitive: so as not to',
    type: 'mc',
    prompt:
      'People use memory palaces so as not _____ important information.',
    options: [ 'to forget', 'forgetting' ],
    answer: 'to forget',
    explanation:
      'Po ‘so as not to’ zawsze mamy to + infinitive.',
  },
];

const normalise = (text: string): string => text.trim().toLowerCase();

const GrammarQuiz1: React.FC = () => {
  const [ currentIndex, setCurrentIndex ] = useState<number>(0);
  const [ selected, setSelected ] = useState<string>('');
  const [ showFeedback, setShowFeedback ] = useState<boolean>(false);
  const [ isCorrect, setIsCorrect ] = useState<boolean | null>(null);
  const [ score, setScore ] = useState<number>(0);
  const [ finished, setFinished ] = useState<boolean>(false);
  const [ shuffledQuestions, setShuffledQuestions ] = useState(() => shuffleQuestions(questions));

  const currentQuestion = shuffledQuestions[currentIndex];

  const handleCheck = () => {
    if (!selected) return;
    const correct =
      normalise(selected) === normalise(currentQuestion.answer);
    setIsCorrect(correct);
    setShowFeedback(true);
    if (correct) {
      setScore((s) => s + 1);
    }
  };

  const handleNext = () => {
    if (currentIndex + 1 === questions.length) {
      setFinished(true);
    } else {
      setCurrentIndex((i) => i + 1);
      setSelected('');
      setShowFeedback(false);
      setIsCorrect(null);
    }
  };

  const handleRestart = () => {
    setShuffledQuestions(shuffleArray(questions));
    setCurrentIndex(0);
    setSelected('');
    setShowFeedback(false);
    setIsCorrect(null);
    setScore(0);
    setFinished(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 p-4">
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-2xl p-6 md:p-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900 mb-4 transition"
        >
          <ArrowLeft className="w-4 h-4"/> Back to Home
        </Link>
        <h1 className="text-2xl md:text-3xl font-bold mb-2 text-slate-800">
          B2 – Unit 1 Grammar Quiz
        </h1>
        <p className="text-sm text-slate-500 mb-4">
          Present perfect · Infinitive vs -ing · While / whereas · Preferences
        </p>

        <div className="flex items-center justify-between mb-4 text-sm text-slate-600">
          <span>
            Question {currentIndex + 1} / {questions.length}
          </span>
          <span>Score: {score}</span>
        </div>

        {finished ? (
          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-2 text-slate-800">Quiz finished 🎉</h2>
            <p className="mb-4 text-slate-800">Your score: <span className="font-bold">{score} / {questions.length}</span></p>
            <button onClick={handleRestart} className="px-4 py-2 rounded-xl border border-slate-300 text-slate-700 text-sm hover:bg-slate-50 transition">Restart quiz</button>
          </div>
        ) : (
          <>
            <div className="mb-2 text-xs uppercase tracking-wide text-slate-400">
              {currentQuestion.area}
            </div>
            <div className="mb-4">
              <p className="text-lg font-medium text-slate-800">
                {currentQuestion.prompt}
              </p>
            </div>

            <div className="space-y-2 mb-4">
              {currentQuestion.options.map((opt) => (
                <button
                  key={opt}
                  type="button"
                  onClick={() => {
                    if (!showFeedback) setSelected(opt);
                  }}
                  className={`w-full text-left px-4 py-2 rounded-xl border transition text-slate-800
                    ${
                    selected === opt && !showFeedback
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-slate-200 bg-white hover:bg-slate-50'
                  }
                    ${
                    showFeedback &&
                    normalise(opt) === normalise(currentQuestion.answer)
                      ? 'border-emerald-500 bg-emerald-50'
                      : ''
                  }
                    ${
                    showFeedback &&
                    selected === opt &&
                    normalise(opt) !==
                    normalise(currentQuestion.answer)
                      ? 'border-rose-500 bg-rose-50'
                      : ''
                  }
                  `}
                >
                  {opt}
                </button>
              ))}
            </div>

            {showFeedback && (
              <div
                className={`mb-4 text-sm px-4 py-3 rounded-xl border ${
                  isCorrect
                    ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                    : 'bg-rose-50 text-rose-700 border-rose-200'
                }`}
              >
                {isCorrect ? (
                  <div>
                    <p className="font-semibold">✅ Correct!</p>
                    <p className="mt-1 text-sm">
                      (Regułka): {currentQuestion.explanation}
                    </p>
                  </div>
                ) : (
                  <div>
                    <p className="font-semibold text-sm">
                      ❌ Not quite. The correct answer is
                      <strong>{currentQuestion.answer}</strong>.
                    </p>
                    <p className="mt-1 text-sm">
                      Dlaczego: {currentQuestion.explanation}
                    </p>
                  </div>
                )}
              </div>
            )}

            <div className="flex gap-3">
              {!showFeedback ? (
                <button
                  type="button"
                  onClick={handleCheck}
                  disabled={!selected}
                  className="px-4 py-2 rounded-xl bg-blue-600 text-white text-sm font-medium disabled:bg-blue-200"
                >
                  Check answer
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleNext}
                  className="px-4 py-2 rounded-xl bg-slate-800 text-white text-sm font-medium"
                >
                  Next question
                </button>
              )}

              <button
                type="button"
                onClick={handleRestart}
                className="px-4 py-2 rounded-xl border border-slate-300 text-slate-700 text-sm hover:bg-slate-50 transition"
              >
                Restart
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default GrammarQuiz1;