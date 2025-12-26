import type { Quiz } from '~/models/quiz';
import { quiz1 } from '~/data/quiz/quiz1';
import { quiz2 } from '~/data/quiz/quiz2';

export const quizMap: Record<string, Quiz> = {
  '1': quiz1,
  '2': quiz2,
}

export function getQuizByUnitId(unitId: string | undefined) {
  if (unitId) {
    return quizMap[unitId];
  } else {
    return null;
  }
}