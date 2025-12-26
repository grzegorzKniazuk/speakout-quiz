import { useState } from 'react';
import { shuffleQuestions } from '~/utilities/shuffleQuestions';
import { useParams } from 'react-router';
import { getQuizByUnitId } from '~/data/quiz/quiz-map';
import { getGrammarByUnitId } from '~/data/grammar/grammar-map';
import { normalize } from '~/utilities/normalize';
import { shuffleArray } from '~/utilities/shuffleArray';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function GrammarQuiz() {
  const { unitId } = useParams();
  const quiz = getQuizByUnitId(unitId);
  const questions = getGrammarByUnitId(unitId);

  const [ currentIndex, setCurrentIndex ] = useState<number>(0);
  const [ selected, setSelected ] = useState<string>('');
  const [ showFeedback, setShowFeedback ] = useState<boolean>(false);
  const [ isCorrect, setIsCorrect ] = useState<boolean | null>(null);
  const [ score, setScore ] = useState<number>(0);
  const [ finished, setFinished ] = useState<boolean>(false);
  const [ shuffledQuestions, setShuffledQuestions ] = useState(() => shuffleQuestions(questions));

  const currentQuestion = shuffledQuestions[currentIndex];

  const handleCheck = () => {
    if (selected) {
      const correct = normalize(selected) === normalize(currentQuestion.answer);

      setIsCorrect(correct);
      setShowFeedback(true);

      if (correct) {
        setScore((s) => s + 1);
      }
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

  const handleSelect = (option: string) => {
    if (!showFeedback) {
      setSelected(option);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 p-4">
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-2xl p-6 md:p-8">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900 mb-4 transition">
          <ArrowLeft className="w-4 h-4"/>Back to Home
        </Link>

        <h1 className="text-2xl md:text-3xl font-bold mb-2 text-slate-800">B2 – Unit {unitId} Grammar Quiz</h1>
        <p className="text-sm text-slate-500 mb-4">{quiz?.grammarTitle}</p>

        <div className="flex items-center justify-between mb-4 text-sm text-slate-600">
          <span>Question {currentIndex + 1} / {questions.length}</span>
          <span>Score: {score}</span>
        </div>
        {
          finished ? (
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
                {
                  currentQuestion.options.map((option: string) => (
                    <button key={option}
                            type="button"
                            onClick={() => handleSelect(option)}
                            className={`w-full text-left px-4 py-2 rounded-xl border transition text-slate-800
                            ${selected === option && !showFeedback ? 'border-blue-500 bg-blue-50' : 'border-slate-200 bg-white hover:bg-slate-50'}
                            ${showFeedback && normalize(option) === normalize(currentQuestion.answer) ? 'border-emerald-500 bg-emerald-50' : ''}
                            ${showFeedback && selected === option && normalize(option) !== normalize(currentQuestion.answer) ? 'border-rose-500 bg-rose-50' : ''}`}>
                      {option}
                    </button>
                  ))
                }
              </div>
              {
                showFeedback && (
                  <div className={`mb-4 text-sm px-4 py-3 rounded-xl border ${isCorrect ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : 'bg-rose-50 text-rose-700 border-rose-200'}`}>
                    {
                      isCorrect ? (
                        <div>
                          <p className="font-semibold">✅ Correct!</p>
                          <p className="mt-1 text-sm">(Regułka): {currentQuestion.explanation}</p>
                        </div>
                      ) : (
                        <div>
                          <p className="font-semibold text-sm">❌ Not quite. The correct answer is <strong>{currentQuestion.answer}</strong>.</p>
                          <p className="mt-1 text-sm">Dlaczego: {currentQuestion.explanation}</p>
                        </div>
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
          )
        }
      </div>
    </div>
  );
}