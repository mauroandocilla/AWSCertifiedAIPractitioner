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
}

export interface QuizSet {
  setNumber: number;
  sourceFile: string;
  questionCount: number;
  questions: QuizQuestion[];
}
