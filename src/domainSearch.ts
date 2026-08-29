import { domains } from './domainData.ts';
import { glossaryEntries } from './glossaryData.ts';

export interface DomainSearchEntry {
  domainNumber: number;
  domainName: string;
  subsectionTitle: string;
  text: string;
  glossId: string;
  detail: string;
}

function stripHtml(html: string): string {
  return html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
}

const glossaryHtmlById = new Map(glossaryEntries.map((g) => [g.id, g.html]));

// Flattened once at module load -- domainData.ts/glossaryData.ts are static
// content, no need to rebuild this per search or per render. `detail` pulls
// in each bullet's full explanation (term cards, "en corto" summaries, etc.)
// -- searching only the terse official bullet `text` misses everything that
// only appears in that explanatory prose.
export const domainSearchIndex: DomainSearchEntry[] = domains.flatMap((d) =>
  d.subsections.flatMap((ss) =>
    ss.bullets.map((b) => ({
      domainNumber: d.number,
      domainName: d.name,
      subsectionTitle: ss.title,
      text: b.text,
      glossId: b.glossId,
      detail: stripHtml(glossaryHtmlById.get(b.glossId) ?? ''),
    })),
  ),
);
