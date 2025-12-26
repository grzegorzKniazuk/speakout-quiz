import type { Quiz } from '~/models/quiz';
import { quiz1 } from '~/data/quiz/quiz1';
import { quiz2 } from '~/data/quiz/quiz2';
import { quiz8 } from '~/data/quiz/quiz8';
import { quiz7 } from '~/data/quiz/quiz7';
import { quiz6 } from '~/data/quiz/quiz6';
import { quiz5 } from '~/data/quiz/quiz5';
import { quiz4 } from '~/data/quiz/quiz4';
import { quiz3 } from '~/data/quiz/quiz3';

export const quizMap: Map<string, Quiz> = new Map<string, Quiz>([
  [ '1', quiz1 ],
  [ '2', quiz2 ],
  [ '3', quiz3 ],
  [ '4', quiz4 ],
  [ '5', quiz5 ],
  [ '6', quiz6 ],
  [ '7', quiz7 ],
  [ '8', quiz8 ],
]);

export const quizList = Array.from(quizMap.values());

export function getQuizByUnitId(unitId: string | undefined) {
  if (unitId && quizMap.has(unitId)) {
    return quizMap.get(unitId);
  } else {
    return null;
  }
}