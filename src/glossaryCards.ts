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

// Splits a card's bodyHtml (everything after </h4>: the <p> + the
// <div class="term-short">) into the paragraph and the short-summary text on
// their own -- used only to build paced read-aloud segments; display still
// renders bodyHtml as one piece, unaffected by this.
export function splitCardBody(bodyHtml: string): { paragraphHtml: string; shortHtml: string | null } {
  const m = bodyHtml.match(/<div class="term-short">\s*<b>[^<]*<\/b>([\s\S]*?)<\/div>/);
  if (!m) return { paragraphHtml: bodyHtml, shortHtml: null };
  return { paragraphHtml: bodyHtml.slice(0, m.index), shortHtml: m[1] };
}

export function extractBulletTextHtml(html: string): string {
  const m = html.match(/<p class="gloss-bullet-text">([\s\S]*?)<\/p>/);
  return m ? m[1] : '';
}

export function stripHtml(html: string): string {
  return html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
}

export type ReadAloudSegmentKind = 'bullet' | 'title' | 'paragraph' | 'short-label' | 'short-text';

export interface ReadAloudSegmentSpec {
  /** Stable, filename-safe id -- also what scripts/generate-domain-audio.mjs
   *  names each pre-rendered audio file after, so the browser-voice queue
   *  built here and the audio files generated there always line up. */
  id: string;
  text: string;
  /** null = the bullet's own official text; else which term-card index. */
  cardIndex: number | null;
  kind: ReadAloudSegmentKind;
}

// The one place that decides what gets read aloud and in what pieces --
// shared between GlossaryEntryContent.tsx (live browser-voice playback) and
// scripts/generate-domain-audio.mjs (pre-rendering real audio files via
// Azure), so both are always in sync on segment boundaries and ids. Pure
// content, no pacing here -- each consumer decides its own pause lengths
// (or, for pre-rendered audio, silence baked into the files/gaps instead).
export function buildReadAloudSegments(glossId: string, html: string): ReadAloudSegmentSpec[] {
  const items: ReadAloudSegmentSpec[] = [];
  const bulletText = stripHtml(extractBulletTextHtml(html));
  if (bulletText) items.push({ id: `${glossId}--bullet`, text: bulletText, cardIndex: null, kind: 'bullet' });
  parseGlossaryCards(html).forEach((card, i) => {
    const title = stripHtml(card.titleHtml);
    const { paragraphHtml, shortHtml } = splitCardBody(card.bodyHtml);
    const paragraph = stripHtml(paragraphHtml);
    const shortText = shortHtml ? stripHtml(shortHtml) : null;
    if (title) items.push({ id: `${glossId}--c${i}-title`, text: title, cardIndex: i, kind: 'title' });
    if (paragraph) items.push({ id: `${glossId}--c${i}-body`, text: paragraph, cardIndex: i, kind: 'paragraph' });
    if (shortText) {
      items.push({ id: `${glossId}--c${i}-shortlabel`, text: 'En corto.', cardIndex: i, kind: 'short-label' });
      items.push({ id: `${glossId}--c${i}-short`, text: shortText, cardIndex: i, kind: 'short-text' });
    }
  });
  return items;
}
