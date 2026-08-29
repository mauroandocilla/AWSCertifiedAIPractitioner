import { domains } from './domainData.ts';
import { glossaryEntries } from './glossaryData.ts';

export interface DomainSearchEntry {
  domainNumber: number;
  domainName: string;
  subsectionTitle: string;
  bulletText: string;
  glossId: string;
  /** null = this entry represents the bullet's own official text (shown in
   *  the sidebar "menu"). A number = a specific term-card within that
   *  bullet's explanation, at that index. */
  cardIndex: number | null;
  /** The term-card's own <h4> title, only set when cardIndex isn't null. */
  cardTitle: string | null;
  /** What Fuse actually searches: the bullet text itself, or the card's
   *  stripped body text. */
  matchText: string;
}

function stripHtml(html: string): string {
  return html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
}

// Walks matching <div>/</div> pairs (not just the nearest "</div>") because
// each term-card has its own nested <div class="term-short">...</div> --
// a naive non-greedy regex would stop there instead of at the card's real end.
function extractTermCards(html: string): { title: string; body: string }[] {
  const cards: { title: string; body: string }[] = [];
  const marker = '<div class="term-card">';
  let searchFrom = 0;
  while (true) {
    const start = html.indexOf(marker, searchFrom);
    if (start === -1) break;
    let depth = 1;
    const divTagRe = /<\/?div\b[^>]*>/g;
    divTagRe.lastIndex = start + marker.length;
    let end = html.length;
    let m: RegExpExecArray | null;
    while ((m = divTagRe.exec(html))) {
      if (m[0].startsWith('</div')) {
        depth--;
        if (depth === 0) {
          end = m.index;
          break;
        }
      } else {
        depth++;
      }
    }
    const inner = html.slice(start + marker.length, end);
    const titleMatch = inner.match(/<h4[^>]*>([\s\S]*?)<\/h4>/);
    cards.push({ title: titleMatch ? stripHtml(titleMatch[1]) : '', body: stripHtml(inner) });
    searchFrom = end;
  }
  return cards;
}

const glossaryHtmlById = new Map(glossaryEntries.map((g) => [g.id, g.html]));

// Flattened once at module load -- domainData.ts/glossaryData.ts are static
// content, no need to rebuild this per search or per render. Each bullet
// produces one "menu-level" entry (its own official text) plus one entry per
// term-card in its explanation, so a search result can point at the exact
// card that matched instead of just the bullet it belongs to.
export const domainSearchIndex: DomainSearchEntry[] = domains.flatMap((d) =>
  d.subsections.flatMap((ss) =>
    ss.bullets.flatMap((b) => {
      const base = { domainNumber: d.number, domainName: d.name, subsectionTitle: ss.title, bulletText: b.text, glossId: b.glossId };
      const bulletEntry: DomainSearchEntry = { ...base, cardIndex: null, cardTitle: null, matchText: b.text };
      const cardEntries: DomainSearchEntry[] = extractTermCards(glossaryHtmlById.get(b.glossId) ?? '').map((card, i) => ({
        ...base,
        cardIndex: i,
        cardTitle: card.title,
        matchText: card.body,
      }));
      return [bulletEntry, ...cardEntries];
    }),
  ),
);
