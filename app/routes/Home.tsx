import { Link } from 'react-router-dom';
import { BookOpen, Brain } from 'lucide-react';
import { quizList } from '~/data/quiz/quiz-map';

export default function Home() {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-100 to-slate-200 p-6">
      <header className="mb-8 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-800">Angielski B2</h1>
        <p className="mt-2 text-slate-500">Wybierz unit i typ quizu</p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        {
          quizList.map((quiz) => (
            <div key={quiz.id} className="bg-white shadow-lg rounded-2xl p-6 flex flex-col gap-5">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-slate-800">B2 – Unit {quiz.id}</h2>
                <p className="mt-1 text-slate-500 font-medium">{quiz.title}</p>
              </div>

              <div className="text-left space-y-3">
                <div>
                  <p className="text-xs uppercase tracking-wide text-slate-400 mb-1">Vocabulary</p>
                  <p className="text-sm text-slate-600">{quiz.vocabularyDescription}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide text-slate-400 mb-1">Grammar</p>
                  <p className="text-sm text-slate-600">{quiz.grammarDescription}</p>
                </div>
              </div>

              <div className="flex flex-col gap-3 mt-auto">
                <Link to={`/vocabulary/${quiz.id}`} className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl text-lg font-medium transition">
                  <BookOpen className="w-5 h-5"/>
                  Vocabulary Quiz
                </Link>
                <Link to={`/grammar/${quiz.id}`} className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-xl text-lg font-medium transition">
                  <Brain className="w-5 h-5"/>
                  Grammar Quiz
                </Link>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
}