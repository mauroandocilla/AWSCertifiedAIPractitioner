export interface QuizOption {
  text: string;
  correct: boolean;
}

export interface QuizQuestion {
  id: string;
  number: number;
  text: string;
  options: QuizOption[];
  multiSelect: boolean;
  explanationHtml: string;
  /** AIF-C01 domain (1-5) this question tests, if tagged. See scripts/classify-quiz-scope.mjs tag-domains. */
  domain?: number;
  /** Glossary term-card ids (`${glossId}#${cardIndex}`, see src/conceptGraph.ts) this question tests. See scripts/tag-quiz-concepts.mjs. */
  relatedConcepts?: string[];
}

export interface QuizSet {
  setNumber: number;
  sourceFile: string;
  questionCount: number;
  questions: QuizQuestion[];
}
