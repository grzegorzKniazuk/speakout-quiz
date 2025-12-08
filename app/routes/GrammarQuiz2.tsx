import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { shuffleArray } from '~/utilities/shuffleArray';

type QuestionType = 'mc';

interface GrammarQuestion {
  id: number;
  area: string;
  type: QuestionType;
  prompt: string;
  options: string[];
  answer: string;
  explanation: string;
}

function shuffleQuestions(list: GrammarQuestion[]): GrammarQuestion[] {
  const shuffledOrder = shuffleArray(list);

  return shuffledOrder.map((q) => ({
    ...q,
    options: shuffleArray(q.options),
  }));
}

const questions: GrammarQuestion[] = [
  // --- FUTURE PROBABILITY (2A) ---
  {
    id: 1,
    area: 'Future probability – will / going to',
    type: 'mc',
    prompt: 'Look at those black clouds! It ______ soon.',
    options: ['is going to rain', 'will probably rain', 'might rains'],
    answer: 'is going to rain',
    explanation:
      'Używamy be going to, gdy mamy dowód w teraźniejszości (czarne chmury). ',
  },
  {
    id: 2,
    area: 'Future probability – will',
    type: 'mc',
    prompt: "I'm pretty sure Italy ______ tomorrow.",
    options: ['will win', 'is winning', 'is going to won'],
    answer: 'will win',
    explanation:
      'Will + bezokolicznik do przewidywań opartych na opinii, bez mocnego dowodu. ',
  },
  {
    id: 3,
    area: 'Future probability – adverbs',
    type: 'mc',
    prompt: 'We ______ come to the party – we’re not sure yet.',
    options: ['might', 'are certain to', 'are due to'],
    answer: 'might',
    explanation:
      'Might używamy, gdy coś jest możliwe, ale niepewne. ',
  },
  {
    id: 4,
    area: 'Future probability – adverbs position',
    type: 'mc',
    prompt: 'We ______ definitely be at the conference tomorrow.',
    options: ['will', 'definitely will', 'will definitely'],
    answer: 'will definitely',
    explanation:
      'Przysłówek zwykle stoi po will: will definitely, a przed czasownikiem głównym. ',
  },
  {
    id: 5,
    area: 'Be certain to / be likely to',
    type: 'mc',
    prompt: 'This ambitious study is ______ have a big impact.',
    options: ['certain to', 'likely', 'might to'],
    answer: 'certain to',
    explanation:
      'Be certain to + bezokolicznik, gdy jesteśmy pewni, że coś się wydarzy. ',
  },
  {
    id: 6,
    area: 'Be likely to / unlikely to',
    type: 'mc',
    prompt: 'Virtual reality is ______ affect my industry.',
    options: ['unlikely to', 'unlikely for', 'not likely affect'],
    answer: 'unlikely to',
    explanation:
      'Unlikely to + bezokolicznik używamy, gdy sądzimy, że coś raczej się nie wydarzy. ',
  },
  {
    id: 7,
    area: 'Be due to',
    type: 'mc',
    prompt: 'Researchers are ______ announce the findings tomorrow.',
    options: ['due to', 'due', 'going to'],
    answer: 'due to',
    explanation:
      'Be due to + bezokolicznik oznacza, że coś jest zaplanowane/harmonogram. ',
  },
  {
    id: 8,
    area: 'Will vs could / may not',
    type: 'mc',
    prompt: 'That tech company ______ invest in VR in the future – it’s not certain.',
    options: ['may not', 'could not', 'won’t to'],
    answer: 'may not',
    explanation:
      'Możemy użyć may not / might not dla niepewnej negatywnej przyszłości, ale nie *could not* w tym znaczeniu. ',
  },
  {
    id: 9,
    area: 'Likely / unlikely',
    type: 'mc',
    prompt: 'Some employees are ______ work beyond retirement age.',
    options: ['likely to', 'going to likely', 'certain'],
    answer: 'likely to',
    explanation:
      'Be likely to + bezokolicznik – coś prawdopodobnie się wydarzy. ',
  },
  {
    id: 10,
    area: 'Be due to',
    type: 'mc',
    prompt: 'The train ______ at 6 p.m., according to the timetable.',
    options: ['is due to depart', 'is likely depart', 'might to depart'],
    answer: 'is due to depart',
    explanation:
      'Be due to + bezokolicznik dla zaplanowanych, rozkładowych wydarzeń. ',
  },
  {
    id: 11,
    area: 'Might / could / may',
    type: 'mc',
    prompt: 'We ______ go to Japan next year, but we haven’t decided yet.',
    options: ['might', 'are certain to', 'are due to'],
    answer: 'might',
    explanation:
      'Might / may / could – gdy coś jest możliwe, ale niepewne. ',
  },
  {
    id: 12,
    area: 'Be likely / unlikely',
    type: 'mc',
    prompt: 'My team is ______ reach the next round – they’re playing really well.',
    options: ['likely to', 'might to', 'due to'],
    answer: 'likely to',
    explanation:
      'Be likely to – duże prawdopodobieństwo na podstawie obecnych informacji. ',
  },
  {
    id: 13,
    area: 'Be unlikely / not likely',
    type: 'mc',
    prompt: 'We are ______ go on holiday this year – we just can’t afford it.',
    options: ['unlikely to', 'certain to', 'might'],
    answer: 'unlikely to',
    explanation:
      'Unlikely to / not likely to – prawdopodobnie się nie wydarzy. ',
  },
  {
    id: 14,
    area: 'Future probability – certain to',
    type: 'mc',
    prompt: 'Prices are ______ rise in the next few years.',
    options: ['certain to', 'likely for', 'might to'],
    answer: 'certain to',
    explanation:
      'Be certain to – prawie 100% pewności co do przyszłości. ',
  },
  {
    id: 15,
    area: 'Future probability – might not',
    type: 'mc',
    prompt: "Jan ______ meet us tonight because she isn't feeling well.",
    options: ['might not', 'could not', 'won’t probably'],
    answer: 'might not',
    explanation:
      'Might not – możliwe, że nie, ale nie jest to pewne; *could not* tu nie pasuje. ',
  },
  {
    id: 16,
    area: 'Future probability – adverbs',
    type: 'mc',
    prompt: 'Machines ______ replace human workers for many years.',
    options: ['probably won’t', 'won’t probably', 'might not to'],
    answer: 'probably won’t',
    explanation:
      'Przysłówek zwykle stoi przed won’t: probably won’t, a nie *won’t probably*. ',
  },

  // --- QUANTIFIERS (2B) ---
  {
    id: 17,
    area: 'Quantifiers – little / a little',
    type: 'mc',
    prompt: 'It was cold, but there was very ______ snow.',
    options: ['little', 'a little', 'few'],
    answer: 'little',
    explanation:
      'Little + niepoliczalne = mało (i raczej za mało); a little = trochę, wystarczająco. ',
  },
  {
    id: 18,
    area: 'Quantifiers – a little',
    type: 'mc',
    prompt: 'Spending ______ time in a green space can improve your mood.',
    options: ['a little', 'few', 'no'],
    answer: 'a little',
    explanation:
      'A little + niepoliczalne (time) – niewielka, ale pozytywna ilość. ',
  },
  {
    id: 19,
    area: 'Quantifiers – few / a few',
    type: 'mc',
    prompt: 'I recently bought ______ plants for the office.',
    options: ['a few', 'few', 'a little'],
    answer: 'a few',
    explanation:
      'A few + policzalne (plants) – kilka, pozywnie (nie jest to „za mało”). ',
  },
  {
    id: 20,
    area: 'Quantifiers – few',
    type: 'mc',
    prompt: 'There are ______ things I enjoy more than going for an early morning walk.',
    options: ['few', 'a few', 'no'],
    answer: 'few',
    explanation:
      'Few things I enjoy more… = niewiele (prawie nic nie jest lepsze). ',
  },
  {
    id: 21,
    area: 'Quantifiers – a good deal / a handful',
    type: 'mc',
    prompt: 'I spend ______ time outdoors.',
    options: ['a good deal of', 'a handful of', 'no'],
    answer: 'a good deal of',
    explanation:
      'A good deal of + niepoliczalne – duża ilość. A handful of = mała liczba. ',
  },
  {
    id: 22,
    area: 'Quantifiers – several / a good deal of',
    type: 'mc',
    prompt: 'There are ______ ways you can improve your mental health.',
    options: ['several', 'no', 'a little'],
    answer: 'several',
    explanation:
      'Several + policzalne – kilka (więcej niż a few, nadal niewielka liczba). ',
  },
  {
    id: 23,
    area: 'Quantifiers – majority / lack of',
    type: 'mc',
    prompt: 'The ______ people in major cities use public transport.',
    options: ['majority of', 'handful of', 'little'],
    answer: 'majority of',
    explanation:
      'The majority of = więcej niż połowa grupy. ',
  },
  {
    id: 24,
    area: 'Quantifiers – no / every',
    type: 'mc',
    prompt: 'We are so busy that we have ______ time to just sit and relax.',
    options: ['no', 'every', 'a few'],
    answer: 'no',
    explanation:
      'No + niepoliczalne (time) = w ogóle go nie ma. ',
  },
  {
    id: 25,
    area: 'Quantifiers – lack of / plenty of',
    type: 'mc',
    prompt: 'There is a ______ affordable housing in the city.',
    options: ['lack of', 'plenty of', 'minority of'],
    answer: 'lack of',
    explanation:
      'A lack of = brak lub niewystarczająca ilość czegoś. ',
  },
  {
    id: 26,
    area: 'Quantifiers – majority / minority',
    type: 'mc',
    prompt: 'Those against the decision were in a ______.',
    options: ['minority', 'majority', 'handful'],
    answer: 'minority',
    explanation:
      'In a minority = mniej niż połowa grupy. ',
  },

  // --- RELATIVE CLAUSES (3A) ---
  {
    id: 27,
    area: 'Relative clauses – defining',
    type: 'mc',
    prompt:
      'Fuji Rock uses chopsticks ______ are made from local wood.',
    options: ['which', 'where', 'when'],
    answer: 'which',
    explanation:
      'Things → which/that; to zdanie jest definiujące (bez przecinków). ',
  },
  {
    id: 28,
    area: 'Relative clauses – where / which',
    type: 'mc',
    prompt: "That's the festival ______ Alt-J played years ago.",
    options: ['where', 'which', 'who'],
    answer: 'where',
    explanation:
      'Mówimy o miejscu → where. Można też użyć which … in (The festival which they played in), ale w podręczniku jest where. ',
  },
  {
    id: 29,
    area: 'Relative clauses – whose',
    type: 'mc',
    prompt: 'I met some people ______ tent collapsed in the night.',
    options: ['whose', 'who', 'which'],
    answer: 'whose',
    explanation:
      'Whose wyraża przynależność (ich namiot). ',
  },
  {
    id: 30,
    area: 'Relative clauses – non-defining',
    type: 'mc',
    prompt:
      'The festival, ______ was started by a group of volunteers, has run for more than twenty years.',
    options: ['which', 'that', 'where'],
    answer: 'which',
    explanation:
      'W zdaniach niedefiniujących (z przecinkami) używamy who/which, ale nie that. ',
  },

  // --- HOW TO SPECULATE (2C) ---
  {
    id: 31,
    area: 'How to speculate – certainty',
    type: 'mc',
    prompt:
      "You're 90–100% sure life on the Antarctic is tough. You say: ______ life on the Antarctic is tough.",
    options: [
      "I'm fairly certain that",
      "There's no way that",
      "I doubt that",
    ],
    answer: "I'm fairly certain that",
    explanation:
      'Frazy typu I’m fairly certain / I’m fairly sure pokazują wysoki stopień pewności, ale nie 100%. ',
  },
  {
    id: 32,
    area: 'How to speculate – impossibility',
    type: 'mc',
    prompt:
      "You think it's impossible that they actually enjoy living there. You say: ______ they can actually enjoy living there.",
    options: [
      "There's no way that",
      "I’d imagine that",
      "I reckon that",
    ],
    answer: "There's no way that",
    explanation:
      "There's no way (that) … używamy, gdy uważamy coś za niemożliwe. ",
  },
];

const normalise = (text: string): string => text.trim().toLowerCase();

const GrammarQuiz2: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selected, setSelected] = useState<string>('');
  const [showFeedback, setShowFeedback] = useState<boolean>(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [score, setScore] = useState<number>(0);
  const [finished, setFinished] = useState<boolean>(false);
  const [shuffledQuestions, setShuffledQuestions] = useState(() =>
    shuffleQuestions(questions),
  );

  const currentQuestion = shuffledQuestions[currentIndex];

  const handleCheck = () => {
    if (!selected) return;
    const correct = normalise(selected) === normalise(currentQuestion.answer);
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
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
        <h1 className="text-2xl md:text-3xl font-bold mb-2 text-slate-800">
          Speakout B2 – Unit 2 Grammar Quiz
        </h1>
        <p className="text-sm text-slate-500 mb-4">
          Future probability · Quantifiers · Relative clauses · Speculating
        </p>

        <div className="flex items-center justify-between mb-4 text-sm text-slate-600">
          <span>
            Question {currentIndex + 1} / {questions.length}
          </span>
          <span>Score: {score}</span>
        </div>

        {finished ? (
          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-2 text-slate-800">
              Quiz finished 🎉
            </h2>
            <p className="mb-4 text-slate-800">
              Your score:{' '}
              <span className="font-bold">
                {score} / {questions.length}
              </span>
            </p>
            <button
              onClick={handleRestart}
              className="px-4 py-2 rounded-xl border border-slate-300 text-slate-700 text-sm hover:bg-slate-50 transition"
            >
              Restart quiz
            </button>
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
                    normalise(opt) !== normalise(currentQuestion.answer)
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
                      ❌ Not quite. The correct answer is{' '}
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

export default GrammarQuiz2;