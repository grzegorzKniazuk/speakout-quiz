import { Link } from 'react-router-dom';
import { BookOpen, Brain } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col sm:flex-row gap-6 items-center justify-center bg-linear-to-br from-slate-100 to-slate-200 p-6">
      <div className="text-center w-sm bg-white shadow-lg rounded-2xl p-8">
        <h1 className="text-3xl font-bold mb-6 text-slate-800">B2 – Unit 1</h1>
        <p className="text-slate-500 mb-8">Memory personality</p>
        <div className="flex flex-col gap-4">
          <Link to="/vocabulary/1" className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl text-lg font-medium transition">
            <BookOpen className="w-5 h-5"/>
            Vocabulary Quiz
          </Link>
          <Link to="/grammar/1" className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-xl text-lg font-medium transition">
            <Brain className="w-5 h-5"/>
            Grammar Quiz
          </Link>
        </div>
      </div>
      <div className="text-center w-sm bg-white shadow-lg rounded-2xl p-8">
        <h1 className="text-3xl font-bold mb-6 text-slate-800">B2 – Unit 2</h1>
        <p className="text-slate-500 mb-8">VR, natura, przyszłość, spekulacje</p>
        <div className="flex flex-col gap-4">
          <Link to="/vocabulary/2" className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl text-lg font-medium transition">
            <BookOpen className="w-5 h-5"/>
            Vocabulary Quiz
          </Link>
          <Link to="/grammar/2" className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-xl text-lg font-medium transition">
            <Brain className="w-5 h-5"/>
            Grammar Quiz
          </Link>
        </div>
      </div>
    </div>
  );
};