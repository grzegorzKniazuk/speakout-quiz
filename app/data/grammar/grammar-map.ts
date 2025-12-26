import type { GrammarQuestion } from '~/models/grammar-question';
import { grammar1 } from '~/data/grammar/grammar1';
import { grammar2 } from '~/data/grammar/grammar2';

export const grammarMap: Record<string, GrammarQuestion[]> = {
  '1': grammar1,
  '2': grammar2,
};

export function getGrammarByUnitId(unitId: string | undefined) {
  if (unitId) {
    return grammarMap[unitId as keyof typeof grammarMap] || [];
  } else {
    return [];
  }
}