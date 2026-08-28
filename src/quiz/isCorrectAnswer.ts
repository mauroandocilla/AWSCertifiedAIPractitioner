import type { QuizQuestion } from './types.ts';

export function isCorrectAnswer(selected: number[], options: QuizQuestion['options']): boolean {
  const correctIdx = options.map((o, i) => (o.correct ? i : -1)).filter((i) => i >= 0);
  const selectedSet = new Set(selected);
  return correctIdx.length === selected.length && correctIdx.every((i) => selectedSet.has(i));
}
