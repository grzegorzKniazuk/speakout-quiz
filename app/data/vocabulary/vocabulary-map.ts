import { vocabulary1 } from '~/data/vocabulary/vocabulary1';
import { vocabulary2 } from '~/data/vocabulary/vocabulary2';

export const vocabularyMap: Record<string, VocabularyQuestion[]> = {
  '1': vocabulary1,
  '2': vocabulary2,
};

export function getVocabularyByUnitId(unitId: string | undefined) {
  if (unitId) {
    return vocabularyMap[unitId as keyof typeof vocabularyMap] || [];
  } else {
    return [];
  }
}