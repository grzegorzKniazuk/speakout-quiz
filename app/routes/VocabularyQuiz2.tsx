import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { shuffleArray } from '~/utilities/shuffleArray';

type QuestionType = 'mc';

interface VocabularyQuestion {
  id: number;
  unit: string;
  type: QuestionType;
  prompt: string;
  options: string[];
  answer: string;
}

function shuffleQuestions(list: VocabularyQuestion[]): VocabularyQuestion[] {
  const shuffledOrder = shuffleArray(list);

  return shuffledOrder.map((q) => ({
    ...q,
    options: shuffleArray(q.options),
  }));
}

const questions: VocabularyQuestion[] = [
  // --- WORD FAMILIES – SCIENCE & TECHNOLOGY (2A) ---
  {
    id: 1,
    unit: '2A – word families',
    type: 'mc',
    prompt: 'A person who studies and tests ideas in science and technology is a …',
    options: [ 'scientist', 'research', 'prediction', 'virtual' ],
    answer: 'scientist',
  },
  {
    id: 2,
    unit: '2A – word families',
    type: 'mc',
    prompt: 'Information that scientists get from experiments are their …',
    options: [ 'findings', 'predictions', 'devices', 'memories' ],
    answer: 'findings',
  },
  {
    id: 3,
    unit: '2A – word families',
    type: 'mc',
    prompt: 'If you think what will happen in the future, you … it.',
    options: [ 'predict', 'analyse', 'research', 'recycle' ],
    answer: 'predict',
  },
  {
    id: 4,
    unit: '2A – word families',
    type: 'mc',
    prompt: 'When something only exists in a computer-generated world, it is …',
    options: [ 'virtual', 'remote', 'renewable', 'natural' ],
    answer: 'virtual',
  },
  {
    id: 5,
    unit: '2A – word families',
    type: 'mc',
    prompt: 'If you work from home and connect to your office computer, you work …',
    options: [ 'remotely', 'virtually', 'scientifically', 'sustainably' ],
    answer: 'remotely',
  },
  {
    id: 6,
    unit: '2A – word families',
    type: 'mc',
    prompt: 'If you study something carefully to understand it better, you … it.',
    options: [ 'analyse', 'predict', 'film', 'commute' ],
    answer: 'analyse',
  },
  {
    id: 7,
    unit: '2A – word families',
    type: 'mc',
    prompt: 'The general area of work that includes computers, phones and apps is the …',
    options: [ 'tech industry', 'woodland', 'open space', 'tourist office' ],
    answer: 'tech industry',
  },
  {
    id: 8,
    unit: '2A – word families',
    type: 'mc',
    prompt: 'When a device uses computers and can make some decisions itself, it is …',
    options: [ 'smart', 'tedious', 'ordinary', 'sustainable' ],
    answer: 'smart',
  },

  // --- NATURE & THE ENVIRONMENT (2B + VB 3A) ---
  {
    id: 9,
    unit: '2B – nature',
    type: 'mc',
    prompt: 'The area of land where the sea meets the land is the …',
    options: [ 'coastline', 'river bank', 'woodland', 'track' ],
    answer: 'coastline',
  },
  {
    id: 10,
    unit: '2B – nature',
    type: 'mc',
    prompt: 'A beach where there are no other people is …',
    options: [ 'deserted', 'renewable', 'mighty', 'virtual' ],
    answer: 'deserted',
  },
  {
    id: 11,
    unit: '2B – nature',
    type: 'mc',
    prompt: 'The land along the side of a river is called the …',
    options: [ 'river bank', 'track', 'open space', 'coastline' ],
    answer: 'river bank',
  },
  {
    id: 12,
    unit: '2B – nature',
    type: 'mc',
    prompt: 'A rough path or small road you can walk along is a …',
    options: [ 'track', 'woodland', 'sunlight', 'resource' ],
    answer: 'track',
  },
  {
    id: 13,
    unit: '2B – nature',
    type: 'mc',
    prompt: 'An area with a lot of trees is …',
    options: [ 'woodland', 'open space', 'coastline', 'recycling' ],
    answer: 'woodland',
  },
  {
    id: 14,
    unit: '2B – nature',
    type: 'mc',
    prompt: 'A wide area without many buildings is an …',
    options: [ 'open space', 'river bank', 'virtual reality', 'device' ],
    answer: 'open space',
  },
  {
    id: 15,
    unit: '2B – nature',
    type: 'mc',
    prompt: 'The natural view of mountains, fields, etc. that you can see is the …',
    options: [ 'scenery', 'resource', 'footprint', 'prediction' ],
    answer: 'scenery',
  },
  {
    id: 16,
    unit: '2B – nature',
    type: 'mc',
    prompt: 'Light from the sun is called …',
    options: [ 'sunlight', 'solar power', 'recycling', 'emissions' ],
    answer: 'sunlight',
  },

  // --- THE ENVIRONMENT (VB 3A) ---
  {
    id: 17,
    unit: '3A – the environment',
    type: 'mc',
    prompt: 'Gases released into the air that cause global warming are …',
    options: [ 'carbon emissions', 'solar power', 'resources', 'recycling' ],
    answer: 'carbon emissions',
  },
  {
    id: 18,
    unit: '3A – the environment',
    type: 'mc',
    prompt: 'The total amount of CO₂ that a person or company produces is their …',
    options: [ 'carbon footprint', 'open space', 'track', 'prediction' ],
    answer: 'carbon footprint',
  },
  {
    id: 19,
    unit: '3A – the environment',
    type: 'mc',
    prompt: 'Energy from the sun that we use to make electricity is …',
    options: [ 'solar power', 'sunlight', 'virtual reality', 'remote work' ],
    answer: 'solar power',
  },
  {
    id: 20,
    unit: '3A – the environment',
    type: 'mc',
    prompt: 'If something can replace itself naturally, it is …',
    options: [ 'renewable', 'deserted', 'ordinary', 'virtual' ],
    answer: 'renewable',
  },
  {
    id: 21,
    unit: '3A – the environment',
    type: 'mc',
    prompt: 'Things like wood, water or minerals that a country has are its …',
    options: [ '(natural) resources', 'findings', 'coastlines', 'devices' ],
    answer: '(natural) resources',
  },
  {
    id: 22,
    unit: '3A – the environment',
    type: 'mc',
    prompt: 'Treating paper, glass and plastic so that they can be used again is …',
    options: [ 'recycling', 'predicting', 'training', 'analysing' ],
    answer: 'recycling',
  },
  {
    id: 23,
    unit: '3A – the environment',
    type: 'mc',
    prompt: 'An activity that can continue without damaging the environment is …',
    options: [ 'sustainable', 'precious', 'mighty', 'remote' ],
    answer: 'sustainable',
  },
  {
    id: 24,
    unit: '3A – the environment',
    type: 'mc',
    prompt: 'An event where volunteers collect rubbish from a beach or park is a …',
    options: [ 'clean-up', 'prediction', 'experiment', 'tour' ],
    answer: 'clean-up',
  },

  // --- LIFESTYLE ADJECTIVES (2C – Amazing lives) ---
  {
    id: 25,
    unit: '2C – lifestyle adjectives',
    type: 'mc',
    prompt: 'If life makes you very tired because there is so much to do, it is …',
    options: [ 'exhausting', 'ordinary', 'modest', 'virtual' ],
    answer: 'exhausting',
  },
  {
    id: 26,
    unit: '2C – lifestyle adjectives',
    type: 'mc',
    prompt: 'If something is boring because it is always the same, it is …',
    options: [ 'tedious', 'rewarding', 'unique', 'sustainable' ],
    answer: 'tedious',
  },
  {
    id: 27,
    unit: '2C – lifestyle adjectives',
    type: 'mc',
    prompt: 'If a job gives you a lot of personal satisfaction, it is …',
    options: [ 'rewarding', 'harsh', 'deserted', 'ordinary' ],
    answer: 'rewarding',
  },
  {
    id: 28,
    unit: '2C – lifestyle adjectives',
    type: 'mc',
    prompt: 'If your life is very typical and like everyone else’s, it is …',
    options: [ 'ordinary', 'unique', 'mighty', 'virtual' ],
    answer: 'ordinary',
  },
  {
    id: 29,
    unit: '2C – lifestyle adjectives',
    type: 'mc',
    prompt: 'If nobody else really lives like you, your lifestyle is …',
    options: [ 'unique', 'modest', 'sustainable', 'renewable' ],
    answer: 'unique',
  },
  {
    id: 30,
    unit: '2C – lifestyle adjectives',
    type: 'mc',
    prompt: 'If you live simply and do not spend much money on yourself, you have a … lifestyle.',
    options: [ 'modest', 'virtual', 'precious', 'astonishing' ],
    answer: 'modest',
  },
  {
    id: 31,
    unit: '2C – lifestyle adjectives',
    type: 'mc',
    prompt: 'If conditions are very difficult and the weather is very cold, they are …',
    options: [ 'harsh', 'ordinary', 'magnificent', 'renewable' ],
    answer: 'harsh',
  },

  // --- EXTREME ADJECTIVES (2D – The time traveller) ---
  {
    id: 32,
    unit: '2D – extreme adjectives',
    type: 'mc',
    prompt: 'If something is very surprising or amazing, it is …',
    options: [ 'astonishing', 'tedious', 'modest', 'remote' ],
    answer: 'astonishing',
  },
  {
    id: 33,
    unit: '2D – extreme adjectives',
    type: 'mc',
    prompt: 'If something is extremely good or great, it is …',
    options: [ 'incredible', 'deserted', 'ordinary', 'renewable' ],
    answer: 'incredible',
  },
  {
    id: 34,
    unit: '2D – extreme adjectives',
    type: 'mc',
    prompt: 'If something is very valuable and important, it is …',
    options: [ 'precious', 'mighty', 'sustainable', 'virtual' ],
    answer: 'precious',
  },
  {
    id: 35,
    unit: '2D – extreme adjectives',
    type: 'mc',
    prompt: 'If something or someone is very large and powerful, they are …',
    options: [ 'mighty', 'modest', 'unique', 'remote' ],
    answer: 'mighty',
  },
  {
    id: 36,
    unit: '2D – extreme adjectives',
    type: 'mc',
    prompt: 'If something is the best of all, it is the …',
    options: [ 'finest', 'harshest', 'smartest', 'latest' ],
    answer: 'finest',
  },
  {
    id: 37,
    unit: '2D – extreme adjectives',
    type: 'mc',
    prompt: 'If something is extremely impressive and beautiful, it is …',
    options: [ 'magnificent', 'tedious', 'deserted', 'open' ],
    answer: 'magnificent',
  },
];

const normalise = (text: string): string => text.trim().toLowerCase();

const VocabularyQuiz2: React.FC = () => {
  const [ currentIndex, setCurrentIndex ] = useState<number>(0);
  const [ selected, setSelected ] = useState<string>('');
  const [ showFeedback, setShowFeedback ] = useState<boolean>(false);
  const [ isCorrect, setIsCorrect ] = useState<boolean | null>(null);
  const [ score, setScore ] = useState<number>(0);
  const [ finished, setFinished ] = useState<boolean>(false);
  const [ shuffledQuestions, setShuffledQuestions ] = useState(() =>
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
    setShuffledQuestions(shuffleQuestions(questions));
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
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900 mb-4 transition">
          <ArrowLeft className="w-4 h-4"/>Back to Home
        </Link>
        <h1 className="text-2xl md:text-3xl font-bold mb-2 text-slate-800">B2 – Unit 2 Vocabulary Quiz</h1>
        <p className="text-sm text-slate-500 mb-4">Word families · Nature &amp; environment · Lifestyle adjectives · Extreme adjectives</p>

        <div className="flex items-center justify-between mb-4 text-sm text-slate-600">
          <span>Question {currentIndex + 1} / {questions.length}</span>
          <span>Score: {score}</span>
        </div>

        {finished ? (
          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-2 text-slate-800">Quiz finished 🎉</h2>
            <p className="mb-4 text-slate-800">
              Your score:
              <span className="font-bold">{score} / {questions.length}</span>
            </p>
            <button onClick={handleRestart} className="px-4 py-2 rounded-xl border border-slate-300 text-slate-700 text-sm hover:bg-slate-50 transition">Restart quiz</button>
          </div>
        ) : (
          <>
            <div className="mb-2 text-xs uppercase tracking-wide text-slate-400">{currentQuestion.unit}</div>
            <div className="mb-4">
              <p className="text-lg font-medium text-slate-800">{currentQuestion.prompt}</p>
            </div>

            <div className="space-y-2 mb-4">
              {
                currentQuestion.options.map((opt) => (
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
                ))
              }
            </div>

            {
              showFeedback && (
                <div className={`mb-4 text-sm px-4 py-2 rounded-xl ${isCorrect ? 'bg-emerald-50 text-emerald-700' : 'bg-rose-50 text-rose-700'}`}>
                  {
                    isCorrect ? (
                      <span>✅ Correct!</span>
                    ) : (
                      <span>❌ Not quite. The correct answer is <strong>{currentQuestion.answer}</strong>.</span>
                    )
                  }
                </div>
              )
            }

            <div className="flex gap-3">
              {
                !showFeedback ? (
                  <button type="button" onClick={handleCheck} disabled={!selected} className="px-4 py-2 rounded-xl bg-blue-600 text-white text-sm font-medium disabled:bg-blue-200">Check answer</button>
                ) : (
                  <button type="button" onClick={handleNext} className="px-4 py-2 rounded-xl bg-slate-800 text-white text-sm font-medium">Next question</button>
                )
              }
              <button type="button" onClick={handleRestart} className="px-4 py-2 rounded-xl border border-slate-300 text-slate-700 text-sm hover:bg-slate-50 transition">Restart</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default VocabularyQuiz2;