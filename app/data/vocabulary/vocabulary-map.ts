import type { VocabularyQuestion } from '~/models/vocabulary-question';
import { vocabulary1 } from '~/data/vocabulary/vocabulary1';
import { vocabulary2 } from '~/data/vocabulary/vocabulary2';
import { vocabulary3 } from '~/data/vocabulary/vocabulary3';
import { vocabulary4 } from '~/data/vocabulary/vocabulary4';
import { vocabulary5 } from '~/data/vocabulary/vocabulary5';
import { vocabulary8 } from '~/data/vocabulary/vocabulary8';
import { vocabulary7 } from '~/data/vocabulary/vocabulary7';
import { vocabulary6 } from '~/data/vocabulary/vocabulary6';

export const vocabularyMap: Record<string, VocabularyQuestion[]> = {
  '1': vocabulary1,
  '2': vocabulary2,
  '3': vocabulary3,
  '4': vocabulary4,
  '5': vocabulary5,
  '6': vocabulary6,
  '7': vocabulary7,
  '8': vocabulary8,
};

export function getVocabularyByUnitId(unitId: string | undefined) {
  if (unitId) {
    return vocabularyMap[unitId as keyof typeof vocabularyMap] || [];
  } else {
    return [];
  }
}