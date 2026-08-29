export function isMatchingCorrect(selected: number[], prompts: { correctIndex: number }[]): boolean {
  return prompts.every((p, i) => selected[i] === p.correctIndex);
}
