// Splits a glossaryData.ts entry's raw HTML into its bullet-text paragraph
// plus its individual term-cards, each as { titleHtml, bodyHtml } -- shared
// between domainSearch.ts (which strips these to plain text for indexing)
// and GlossaryEntryContent.tsx (which renders them as real elements instead
// of one big dangerouslySetInnerHTML blob, so each card can carry its own
// read-aloud button).

export interface GlossaryCard {
  titleHtml: string;
  bodyHtml: string;
}

// Walks matching <div>/</div> pairs (not just the nearest "</div>") because
// each term-card has its own nested <div class="term-short">...</div> -- a
// naive non-greedy regex would stop there instead of at the card's real end.
export function parseGlossaryCards(html: string): GlossaryCard[] {
  const cards: GlossaryCard[] = [];
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
    const titleHtml = titleMatch ? titleMatch[1] : '';
    const bodyHtml = titleMatch ? inner.slice(titleMatch.index! + titleMatch[0].length) : inner;
    cards.push({ titleHtml, bodyHtml });
    searchFrom = end;
  }
  return cards;
}

export function extractBulletTextHtml(html: string): string {
  const m = html.match(/<p class="gloss-bullet-text">([\s\S]*?)<\/p>/);
  return m ? m[1] : '';
}

export function stripHtml(html: string): string {
  return html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
}
