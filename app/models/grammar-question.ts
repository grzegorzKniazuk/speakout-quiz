import type { Question } from '~/models/question';

export interface GrammarQuestion extends Question {
  explanation: string;
}