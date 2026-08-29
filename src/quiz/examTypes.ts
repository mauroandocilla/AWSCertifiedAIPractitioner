// Minimal shape ExamPage.tsx actually renders/scores -- both exam sources
// (the original SkillCertPro quiz, choice-only, and Quiz v2/TutorialsDojo,
// which also has matching-type questions) get mapped down to this so the
// exam UI doesn't need to know which one it's running.
interface ExamQuestionBase {
  id: string;
  domain?: number | null;
  text: string;
  explanationHtml: string;
}

export interface ExamChoiceQuestion extends ExamQuestionBase {
  kind: 'choice';
  options: { text: string; correct: boolean }[];
  multiSelect: boolean;
}

export interface ExamMatchingQuestion extends ExamQuestionBase {
  kind: 'matching';
  optionPool: string[];
  prompts: { text: string; correctIndex: number }[];
}

export type ExamQuestion = ExamChoiceQuestion | ExamMatchingQuestion;
