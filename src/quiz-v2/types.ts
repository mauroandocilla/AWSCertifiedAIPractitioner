export interface QuizV2OptionChoice {
  text: string;
  correct: boolean;
}

interface QuizV2QuestionBase {
  id: string;
  text: string;
  explanationHtml: string;
  domain?: number | null;
  /** Glossary term-card ids (`${glossId}#${cardIndex}`, see src/conceptGraph.ts) this question tests. See scripts/tag-quiz-v2-concepts.mjs. */
  relatedConcepts?: string[];
}

export interface QuizV2SingleQuestion extends QuizV2QuestionBase {
  type: 'single';
  options: QuizV2OptionChoice[];
}

export interface QuizV2MultipleQuestion extends QuizV2QuestionBase {
  type: 'multiple';
  options: QuizV2OptionChoice[];
}

export interface QuizV2MatchingPrompt {
  text: string;
  correctIndex: number;
}

export interface QuizV2MatchingQuestion extends QuizV2QuestionBase {
  type: 'matching';
  optionPool: string[];
  prompts: QuizV2MatchingPrompt[];
}

export type QuizV2Question = QuizV2SingleQuestion | QuizV2MultipleQuestion | QuizV2MatchingQuestion;

// Raw shape stored in questions.json: text/options/explanationHtml/optionPool
// are { en, es } pairs (see scripts/translate-quiz-v2.mjs) so the two
// languages can never drift out of sync into separate files. resolveLang.ts
// projects a QuizV2QuestionDataItem down to a single-language QuizV2Question.
export interface Localized {
  en: string;
  es: string;
}

export interface QuizV2OptionChoiceData {
  text: Localized;
  correct: boolean;
}

interface QuizV2QuestionDataBase {
  id: string;
  text: Localized;
  explanationHtml: Localized;
  domain?: number | null;
  /** Glossary term-card ids (`${glossId}#${cardIndex}`, see src/conceptGraph.ts) this question tests. See scripts/tag-quiz-v2-concepts.mjs. */
  relatedConcepts?: string[];
}

export interface QuizV2SingleQuestionData extends QuizV2QuestionDataBase {
  type: 'single';
  options: QuizV2OptionChoiceData[];
}

export interface QuizV2MultipleQuestionData extends QuizV2QuestionDataBase {
  type: 'multiple';
  options: QuizV2OptionChoiceData[];
}

export interface QuizV2MatchingPromptData {
  text: Localized;
  correctIndex: number;
}

export interface QuizV2MatchingQuestionData extends QuizV2QuestionDataBase {
  type: 'matching';
  optionPool: Localized[];
  prompts: QuizV2MatchingPromptData[];
}

export type QuizV2QuestionData = QuizV2SingleQuestionData | QuizV2MultipleQuestionData | QuizV2MatchingQuestionData;
