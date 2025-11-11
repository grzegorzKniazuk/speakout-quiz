import { index, route, type RouteConfig } from '@react-router/dev/routes';

export default [
  index('routes/Home.tsx'), // <- ekran główny
  route('/vocabulary', 'routes/VocabularyQuiz.tsx'),
  route('/grammar', 'routes/GrammarQuiz.tsx'),
] satisfies RouteConfig;