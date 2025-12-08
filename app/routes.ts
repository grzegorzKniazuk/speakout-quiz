import { index, route, type RouteConfig } from '@react-router/dev/routes';

export default [
  index('routes/Home.tsx'), // <- ekran główny
  route('vocabulary/1', 'routes/VocabularyQuiz1.tsx'),
  route('grammar/1', 'routes/GrammarQuiz1.tsx'),
  route('vocabulary/2', 'routes/VocabularyQuiz2.tsx'),
  route('grammar/2', 'routes/GrammarQuiz2.tsx'),
] satisfies RouteConfig;