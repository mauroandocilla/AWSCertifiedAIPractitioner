import { domains } from './domainData.ts';
import { glossaryEntries } from './glossaryData.ts';
import { parseGlossaryCards, stripHtml } from './glossaryCards.ts';

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
      const cardEntries: DomainSearchEntry[] = parseGlossaryCards(glossaryHtmlById.get(b.glossId) ?? '').map((card, i) => ({
        ...base,
        cardIndex: i,
        cardTitle: stripHtml(card.titleHtml),
        matchText: stripHtml(card.bodyHtml),
      }));
      return [bulletEntry, ...cardEntries];
    }),
  ),
);
