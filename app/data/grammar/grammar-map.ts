import type { GrammarQuestion } from '~/models/grammar-question';
import { grammar1 } from '~/data/grammar/grammar1';
import { grammar2 } from '~/data/grammar/grammar2';
import { grammar3 } from '~/data/grammar/grammar3';
import { grammar4 } from '~/data/grammar/grammar4';
import { grammar5 } from '~/data/grammar/grammar5';
import { grammar6 } from '~/data/grammar/grammar6';
import { grammar7 } from '~/data/grammar/grammar7';
import { grammar8 } from '~/data/grammar/grammar8';

export const grammarMap: Record<string, GrammarQuestion[]> = {
  '1': grammar1,
  '2': grammar2,
  '3': grammar3,
  '4': grammar4,
  '5': grammar5,
  '6': grammar6,
  '7': grammar7,
  '8': grammar8,
};

export function getGrammarByUnitId(unitId: string | undefined) {
  if (unitId) {
    return grammarMap[unitId as keyof typeof grammarMap] || [];
  } else {
    return [];
  }
}