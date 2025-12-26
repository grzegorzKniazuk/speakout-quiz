import { shuffleArray } from '~/utilities/shuffleArray';
import type { Question } from '~/models/question';

export function shuffleQuestions<T extends Question>(list: T[]): T[] {
  // 1. Tasujemy kolejność pytań
  const shuffledOrder = shuffleArray(list);

  // 2. Dla każdego pytania tasujemy też options
  return shuffledOrder.map((question): T => {
    return {
      ...question,
      options: shuffleArray(question.options),
    }
  });
}