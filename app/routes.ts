import { index, route, type RouteConfig } from '@react-router/dev/routes';

export default [
  index('routes/Home.tsx'),
  route('vocabulary/:unitId', 'routes/VocabularyQuiz.tsx'),
  route('grammar/:unitId', 'routes/GrammarQuiz.tsx'),
] satisfies RouteConfig;