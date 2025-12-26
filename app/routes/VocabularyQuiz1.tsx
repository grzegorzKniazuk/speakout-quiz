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
  // 1. Tasujemy kolejność pytań
  const shuffledOrder = shuffleArray(list);

  // 2. Dla każdego pytania tasujemy też options
  return shuffledOrder.map((q) => ({
    ...q,
    options: shuffleArray(q.options),
  }));
}

const questions: VocabularyQuestion[] = [
  // --- PERSONALITY ADJECTIVES (MAIN TEXT) ---
  {
    id: 1,
    unit: '1A – personality',
    type: 'mc',
    prompt: 'If someone loves going out and being with lots of people, they are …',
    options: [ 'rebellious', 'outgoing', 'stubborn', 'curious' ],
    answer: 'outgoing',
  },
  {
    id: 2,
    unit: '1A – personality',
    type: 'mc',
    prompt: 'If someone doesn’t follow the rules and likes breaking them, they are …',
    options: [ 'rebellious', 'ambitious', 'cheerful', 'romantic' ],
    answer: 'rebellious',
  },
  {
    id: 3,
    unit: '1A – personality',
    type: 'mc',
    prompt: 'If you have big plans and want to achieve a lot, you are …',
    options: [ 'ambitious', 'relaxed', 'fun-loving', 'stubborn' ],
    answer: 'ambitious',
  },
  {
    id: 4,
    unit: '1A – personality',
    type: 'mc',
    prompt: 'If you enjoy going out and having a good time, you are …',
    options: [ 'fun-loving', 'argumentative', 'rebellious', 'curious' ],
    answer: 'fun-loving',
  },
  {
    id: 5,
    unit: '1A – personality',
    type: 'mc',
    prompt: 'If you’re not afraid of taking risks and trying new things, you are …',
    options: [ 'adventurous', 'stubborn', 'cheerful', 'romantic' ],
    answer: 'adventurous',
  },
  {
    id: 6,
    unit: '1A – personality',
    type: 'mc',
    prompt: 'People who often disagree with other people are …',
    options: [ 'argumentative', 'cheerful', 'relaxed', 'outgoing' ],
    answer: 'argumentative',
  },
  {
    id: 7,
    unit: '1A – personality',
    type: 'mc',
    prompt: 'If you refuse to change your mind about something, you are …',
    options: [ 'stubborn', 'curious', 'fun-loving', 'sociable' ],
    answer: 'stubborn',
  },
  {
    id: 8,
    unit: '1A – personality',
    type: 'mc',
    prompt: 'When you are interested in learning about new things, you are …',
    options: [ 'curious', 'rebellious', 'ambitious', 'romantic' ],
    answer: 'curious',
  },
  {
    id: 9,
    unit: '1A – personality',
    type: 'mc',
    prompt: 'If you smile a lot and feel happy most of the time, you are …',
    options: [ 'cheerful', 'stubborn', 'argumentative', 'relaxed' ],
    answer: 'cheerful',
  },
  {
    id: 10,
    unit: '1A – personality',
    type: 'mc',
    prompt: 'If you enjoy love stories and strong emotions, you are …',
    options: [ 'romantic', 'rebellious', 'adventurous', 'curious' ],
    answer: 'romantic',
  },
  {
    id: 11,
    unit: '1A – personality',
    type: 'mc',
    prompt: 'If you are calm and not easily worried, you are …',
    options: [ 'relaxed', 'ambitious', 'argumentative', 'outgoing' ],
    answer: 'relaxed',
  },
  {
    id: 12,
    unit: '1A – personality',
    type: 'mc',
    prompt: 'People who enjoy being with others and talking a lot are …',
    options: [ 'sociable', 'stubborn', 'rebellious', 'romantic' ],
    answer: 'sociable',
  },

  // --- VOCABULARY BANK 1A – SUFFIX ADJECTIVES ---
  {
    id: 13,
    unit: 'VB 1A – suffixes',
    type: 'mc',
    prompt: 'Someone who has a lot of knowledge and practice in a job is …',
    options: [ 'experienced', 'talented', 'artistic', 'practical' ],
    answer: 'experienced',
  },
  {
    id: 14,
    unit: 'VB 1A – suffixes',
    type: 'mc',
    prompt: 'If you always expect good things to happen, you are …',
    options: [ 'optimistic', 'pessimistic', 'hopeful', 'emotional' ],
    answer: 'optimistic',
  },
  {
    id: 15,
    unit: 'VB 1A – suffixes',
    type: 'mc',
    prompt: 'If you always expect bad things to happen, you are …',
    options: [ 'pessimistic', 'optimistic', 'generous', 'thoughtful' ],
    answer: 'pessimistic',
  },
  {
    id: 16,
    unit: 'VB 1A – suffixes',
    type: 'mc',
    prompt: 'If you see things in a sensible and practical way, you are …',
    options: [ 'realistic', 'romantic', 'musical', 'adventurous' ],
    answer: 'realistic',
  },
  {
    id: 17,
    unit: 'VB 1A – suffixes',
    type: 'mc',
    prompt: 'Someone who shares what they have with others is …',
    options: [ 'generous', 'reliable', 'talented', 'artistic' ],
    answer: 'generous',
  },
  {
    id: 18,
    unit: 'VB 1A – suffixes',
    type: 'mc',
    prompt: 'If people can trust you to do what you say, you are …',
    options: [ 'reliable', 'hopeful', 'social', 'ambitious' ],
    answer: 'reliable',
  },
  {
    id: 19,
    unit: 'VB 1A – suffixes',
    type: 'mc',
    prompt: 'Someone who always thinks about other people and their feelings is …',
    options: [ 'thoughtful', 'emotional', 'ambitious', 'helpful' ],
    answer: 'thoughtful',
  },
  {
    id: 20,
    unit: 'VB 1A – suffixes',
    type: 'mc',
    prompt: 'If you often show strong feelings, especially in films or music, you are …',
    options: [ 'emotional', 'musical', 'practical', 'realistic' ],
    answer: 'emotional',
  },
  {
    id: 21,
    unit: 'VB 1A – suffixes',
    type: 'mc',
    prompt: 'If you like helping people and making things easier for them, you are …',
    options: [ 'helpful', 'hopeful', 'likeable', 'generous' ],
    answer: 'helpful',
  },
  {
    id: 22,
    unit: 'VB 1A – suffixes',
    type: 'mc',
    prompt: 'If you always believe that good things can happen in the future, you are …',
    options: [ 'hopeful', 'optimistic', 'practical', 'thoughtful' ],
    answer: 'hopeful',
  },
  {
    id: 23,
    unit: 'VB 1A – suffixes',
    type: 'mc',
    prompt: 'If someone is easy to enjoy spending time with, they are very …',
    options: [ 'likeable', 'ambitious', 'realistic', 'musical' ],
    answer: 'likeable',
  },
  {
    id: 24,
    unit: 'VB 1A – suffixes',
    type: 'mc',
    prompt: 'If you have a natural ability for something, you are …',
    options: [ 'talented', 'experienced', 'relaxed', 'practical' ],
    answer: 'talented',
  },
  {
    id: 25,
    unit: 'VB 1A – suffixes',
    type: 'mc',
    prompt: 'If something is useful and works well in real life, it is …',
    options: [ 'practical', 'romantic', 'emotional', 'artistic' ],
    answer: 'practical',
  },
  {
    id: 26,
    unit: 'VB 1A – suffixes',
    type: 'mc',
    prompt: 'If someone loves playing instruments or singing, they are …',
    options: [ 'musical', 'artistic', 'cheerful', 'optimistic' ],
    answer: 'musical',
  },
  {
    id: 27,
    unit: 'VB 1A – suffixes',
    type: 'mc',
    prompt: 'If someone is good at drawing, painting or creating art, they are …',
    options: [ 'artistic', 'musical', 'practical', 'reliable' ],
    answer: 'artistic',
  },
  {
    id: 28,
    unit: 'VB 1A – suffixes',
    type: 'mc',
    prompt: 'Someone who loves new experiences and taking risks is …',
    options: [ 'adventurous', 'pessimistic', 'social', 'emotional' ],
    answer: 'adventurous',
  },
  {
    id: 29,
    unit: 'VB 1A – suffixes',
    type: 'mc',
    prompt: 'Someone who is determined to be successful is …',
    options: [ 'ambitious', 'optimistic', 'thoughtful', 'generous' ],
    answer: 'ambitious',
  },

  // --- MEMORY COLLOCATIONS (1B MAIN) ---
  {
    id: 30,
    unit: '1B – memory collocations',
    type: 'mc',
    prompt: 'Memories from when you were very young are your …',
    options: [
      'childhood memories',
      'short-term memory',
      'perfect recall',
      'emotional memory',
    ],
    answer: 'childhood memories',
  },
  {
    id: 31,
    unit: '1B – memory collocations',
    type: 'mc',
    prompt: 'If you can remember things for an extended period, you have good …',
    options: [
      'long-term memory',
      'short-term memory',
      'visual memory',
      'childhood memories',
    ],
    answer: 'long-term memory',
  },
  {
    id: 32,
    unit: '1B – memory collocations',
    type: 'mc',
    prompt:
      'If you can remember things exactly as they are, without mistakes, you have …',
    options: [
      'perfect recall',
      'childhood memories',
      'a bad memory',
      'short-term memory',
    ],
    answer: 'perfect recall',
  },
  {
    id: 33,
    unit: '1B – memory collocations',
    type: 'mc',
    prompt:
      'If something makes you think of something from the past, it ________.',
    options: [
      'brings back memories',
      'learns by heart',
      'forgets everything',
      'goes in one ear and out the other',
    ],
    answer: 'brings back memories',
  },
  {
    id: 34,
    unit: '1B – memory collocations',
    type: 'mc',
    prompt: 'If you generally remember things well, you …',
    options: [
      'have a good memory',
      'have childhood memories',
      'bring back memories',
      'lose your memory',
    ],
    answer: 'have a good memory',
  },
  {
    id: 35,
    unit: '1B – memory collocations',
    type: 'mc',
    prompt:
      'When you memorise something so that you can repeat it without looking, you …',
    options: [
      'learn it by heart',
      'bring it back',
      'lose it',
      'take notes of it',
    ],
    answer: 'learn it by heart',
  },
  {
    id: 36,
    unit: '1B – memory collocations',
    type: 'mc',
    prompt:
      'If you remember every small part and moment of something, you remember …',
    options: [
      'every detail',
      'only the main facts',
      'almost nothing',
      'just the date',
    ],
    answer: 'every detail',
  },
  {
    id: 37,
    unit: '1B – memory collocations',
    type: 'mc',
    prompt:
      'If you can remember things you have just heard or seen, you have good …',
    options: [
      'short-term memory',
      'long-term memory',
      'childhood memories',
      'perfect recall only for dates',
    ],
    answer: 'short-term memory',
  },

  // --- MEMORY IDIOMS (VB 1B) ---
  {
    id: 38,
    unit: 'VB 1B – idioms',
    type: 'mc',
    prompt:
      'If information ‘goes in one ear and out the other’, it means you …',
    options: [
      'forget it immediately',
      'remember every detail',
      'learn it by heart',
      'write it down',
    ],
    answer: 'forget it immediately',
  },
  {
    id: 39,
    unit: 'VB 1B – idioms',
    type: 'mc',
    prompt: 'I forgot to call you – it completely ______ my mind.',
    options: [
      'slipped',
      'refreshed',
      'played tricks on',
      'rang a bell in',
    ],
    answer: 'slipped',
  },
  {
    id: 40,
    unit: 'VB 1B – idioms',
    type: 'mc',
    prompt: 'I’ll need to look at my notes again to ______ my memory.',
    options: [
      'refresh',
      'slip',
      'ring a bell with',
      'play tricks on',
    ],
    answer: 'refresh',
  },
  {
    id: 41,
    unit: 'VB 1B – idioms',
    type: 'mc',
    prompt: 'I know the answer – it’s on the ______ of my tongue.',
    options: [ 'tip', 'edge', 'end', 'top' ],
    answer: 'tip',
  },
  {
    id: 42,
    unit: 'VB 1B – idioms',
    type: 'mc',
    prompt: 'That name really ______ a bell.',
    options: [ 'rings', 'plays', 'slips', 'refreshes' ],
    answer: 'rings',
  },
  {
    id: 43,
    unit: 'VB 1B – idioms',
    type: 'mc',
    prompt: 'My memory is ______ tricks on me lately.',
    options: [ 'playing', 'ringing', 'slipping', 'refreshing' ],
    answer: 'playing',
  },

  // --- EMOTIONS & FEELINGS (1C) ---
  {
    id: 44,
    unit: '1C – emotions & feelings',
    type: 'mc',
    prompt: 'If you love something and care a lot about it, you are … it.',
    options: [
      'passionate about',
      'fed up of',
      'terrified of',
      'not keen on',
    ],
    answer: 'passionate about',
  },
  {
    id: 45,
    unit: '1C – emotions & feelings',
    type: 'mc',
    prompt: 'If you like something, especially for a long time, you are … it.',
    options: [ 'fond of', 'nervous about', 'fed up of', 'thrilled by' ],
    answer: 'fond of',
  },
  {
    id: 46,
    unit: '1C – emotions & feelings',
    type: 'mc',
    prompt: 'If you feel worried about doing something, you are … it.',
    options: [ 'nervous about', 'really into', 'terrified of', 'keen on' ],
    answer: 'nervous about',
  },
  {
    id: 47,
    unit: '1C – emotions & feelings',
    type: 'mc',
    prompt: 'If something frightens you a lot, you are … it.',
    options: [ 'terrified of', 'fond of', 'passionate about', 'keen on' ],
    answer: 'terrified of',
  },
  {
    id: 48,
    unit: '1C – emotions & feelings',
    type: 'mc',
    prompt: 'If you find the idea of something very exciting, you are … it.',
    options: [ 'thrilled by', 'fed up of', 'not keen on', 'terrified of' ],
    answer: 'thrilled by',
  },
  {
    id: 49,
    unit: '1C – emotions & feelings',
    type: 'mc',
    prompt: 'If you really like something a lot, you’re … it.',
    options: [ 'really into', 'nervous about', 'fed up of', 'not keen on' ],
    answer: 'really into',
  },
  {
    id: 50,
    unit: '1C – emotions & feelings',
    type: 'mc',
    prompt: 'If you don’t like something very much, you’re not … it.',
    options: [ 'keen on', 'terrified of', 'passionate about', 'fond of' ],
    answer: 'keen on',
  },
  {
    id: 51,
    unit: '1C – emotions & feelings',
    type: 'mc',
    prompt:
      'If you don’t want to do something any more because you’ve had too much of it, you’re … it.',
    options: [ 'fed up of', 'really into', 'passionate about', 'fond of' ],
    answer: 'fed up of',
  },
];

const normalise = (text: string): string => text.trim().toLowerCase();

const VocabularyQuiz1: React.FC = () => {
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
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900 mb-4 transition">
          <ArrowLeft className="w-4 h-4"/>Back to Home
        </Link>
        <h1 className="text-2xl md:text-3xl font-bold mb-2 text-slate-800">B2 – Unit 1 Vocabulary Quiz</h1>
        <p className="text-sm text-slate-500 mb-4">Personality · Suffix adjectives · Memory · Idioms · Emotions & feelings</p>

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
            <div className="mb-2 text-xs uppercase tracking-wide text-slate-400">
              {currentQuestion.unit}
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
                className={`mb-4 text-sm px-4 py-2 rounded-xl ${
                  isCorrect
                    ? 'bg-emerald-50 text-emerald-700'
                    : 'bg-rose-50 text-rose-700'
                }`}
              >
                {isCorrect ? (
                  <span>✅ Correct!</span>
                ) : (
                  <span>
                    ❌ Not quite. The correct answer is
                    <strong>{currentQuestion.answer}</strong>.
                  </span>
                )}
              </div>
            )}

            <div className="flex gap-3">
              {!showFeedback ? (
                <button type="button" onClick={handleCheck} disabled={!selected} className="px-4 py-2 rounded-xl bg-blue-600 text-white text-sm font-medium disabled:bg-blue-200">Check answer</button>
              ) : (
                <button type="button" onClick={handleNext} className="px-4 py-2 rounded-xl bg-slate-800 text-white text-sm font-medium">Next question</button>
              )}

              <button type="button" onClick={handleRestart} className="px-4 py-2 rounded-xl border border-slate-300 text-slate-700 text-sm hover:bg-slate-50 transition">Restart</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default VocabularyQuiz1;