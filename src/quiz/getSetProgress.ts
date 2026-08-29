// Same localStorage key shape QuizSessionPage.tsx writes on every answer/reveal
// (`quiz-progress-{setNumber}` -> { answers, revealed }). Reading it here lets
// other views (the sidebar, the set list) show per-set progress without needing
// to load each set's question JSON.
export function getSetAnsweredCount(setNumber: number): number {
  try {
    const raw = localStorage.getItem(`quiz-progress-${setNumber}`);
    if (!raw) return 0;
    const parsed = JSON.parse(raw);
    return Object.keys(parsed.revealed ?? {}).length;
  } catch {
    return 0;
  }
}
