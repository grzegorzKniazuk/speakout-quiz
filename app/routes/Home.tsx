import React from "react";
import { Link } from "react-router-dom";
import { BookOpen, Brain } from "lucide-react";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 p-6">
      <div className="text-center max-w-md bg-white shadow-lg rounded-2xl p-8">
        <h1 className="text-3xl font-bold mb-6 text-slate-800">
          Speakout B2 – Unit 1
        </h1>
        <p className="text-slate-500 mb-8">
          Wybierz, co chcesz dziś poćwiczyć 👇
        </p>

        <div className="flex flex-col gap-4">
          <Link
            to="/vocabulary"
            className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl text-lg font-medium transition"
          >
            <BookOpen className="w-5 h-5" />
            Vocabulary Quiz
          </Link>

          <Link
            to="/grammar"
            className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-xl text-lg font-medium transition"
          >
            <Brain className="w-5 h-5" />
            Grammar Quiz
          </Link>
        </div>

        <p className="text-xs text-slate-400 mt-8">
          © 2025 Speakout Study Helper
        </p>
      </div>
    </div>
  );
};

export default Home;