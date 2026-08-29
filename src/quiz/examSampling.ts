import { domains } from '../domainData.ts';

interface DomainTagged {
  id: string;
  domain?: number | null;
}

function shuffle<T>(arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

/** Official AIF-C01 domain weights, e.g. {1: 20, 2: 24, 3: 28, 4: 14, 5: 14}. */
export function domainWeights(): Record<number, number> {
  const weights: Record<number, number> = {};
  for (const d of domains) weights[d.number] = Number(d.weight.replace('%', ''));
  return weights;
}

/**
 * Picks `total` questions from `pool`, distributed to match the official domain
 * weights when enough questions are tagged with a domain (see
 * scripts/classify-quiz-scope.mjs tag-domains). Falls back to plain random
 * sampling if fewer than half the pool is tagged yet.
 */
export function sampleExamQuestions<T extends DomainTagged>(pool: T[], total: number): T[] {
  const weights = domainWeights();
  const byDomain: Record<number, T[]> = {};
  let taggedCount = 0;
  for (const q of pool) {
    if (q.domain != null && weights[q.domain] != null) {
      (byDomain[q.domain] ??= []).push(q);
      taggedCount++;
    }
  }
  const coverage = pool.length === 0 ? 0 : taggedCount / pool.length;

  if (coverage < 0.5) {
    return shuffle(pool).slice(0, total);
  }

  const domainNums = Object.keys(weights).map(Number);
  const weightSum = domainNums.reduce((s, d) => s + weights[d], 0);
  let remaining = total;
  const quotas: Record<number, number> = {};
  domainNums.forEach((d, i) => {
    if (i === domainNums.length - 1) {
      quotas[d] = remaining;
    } else {
      const q = Math.round((total * weights[d]) / weightSum);
      quotas[d] = q;
      remaining -= q;
    }
  });

  const selected: T[] = [];
  for (const d of domainNums) {
    const avail = shuffle(byDomain[d] ?? []);
    selected.push(...avail.slice(0, quotas[d]));
  }
  if (selected.length < total) {
    const usedIds = new Set(selected.map((q) => q.id));
    const rest = shuffle(pool.filter((q) => !usedIds.has(q.id)));
    selected.push(...rest.slice(0, total - selected.length));
  }
  return shuffle(selected).slice(0, total);
}
