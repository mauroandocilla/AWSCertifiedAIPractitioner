// One-off extraction script: parses the existing hand-written Glossary.tsx and
// Domain1..5.tsx into structured data files (src/glossaryData.ts, src/domainData.ts)
// without altering any prose. Run with: node scripts/extract-content.mjs
import fs from 'node:fs';

const root = new URL('..', import.meta.url).pathname;
const glossarySrc = fs.readFileSync(root + 'src/components/Glossary.tsx', 'utf8');

// ---- helpers -------------------------------------------------------------

function convertStyleObj(objBody) {
  // objBody like: marginTop: '0.4rem', fontSize: '1.5rem'
  const parts = objBody.split(',').map((s) => s.trim()).filter(Boolean);
  const decls = parts.map((p) => {
    const [k, v] = p.split(':').map((x) => x.trim());
    const kebab = k.replace(/[A-Z]/g, (m) => '-' + m.toLowerCase());
    const val = v.replace(/^['"]|['"]$/g, '');
    return `${kebab}:${val}`;
  });
  return decls.join(';');
}

function jsxToHtml(block) {
  let html = block;
  // style={{...}} -> style="..."
  html = html.replace(/style=\{\{([^}]*)\}\}/g, (_, body) => `style="${convertStyleObj(body)}"`);
  // className= -> class=
  html = html.replace(/className=/g, 'class=');
  return html.trim();
}

// depth-aware extraction of <div class="X" ...>...</div> blocks by a given marker attr
function extractDivBlocks(src, openMarkerRegex) {
  const blocks = [];
  let m;
  const re = new RegExp(openMarkerRegex, 'g');
  while ((m = re.exec(src))) {
    const start = m.index;
    const openTagEnd = src.indexOf('>', start) + 1;
    let depth = 1;
    let i = openTagEnd;
    const tagRe = /<div\b[^>]*>|<\/div>/g;
    tagRe.lastIndex = openTagEnd;
    let tm;
    let closeIdx = -1;
    while ((tm = tagRe.exec(src))) {
      if (tm[0].startsWith('</div>')) {
        depth--;
        if (depth === 0) { closeIdx = tm.index; break; }
      } else {
        depth++;
      }
    }
    if (closeIdx === -1) throw new Error('Unbalanced div starting at ' + start);
    blocks.push({ fullMatch: m[0], inner: src.slice(openTagEnd, closeIdx), start, end: closeIdx + 6 });
    re.lastIndex = closeIdx + 6;
  }
  return blocks;
}

// ---- glossary --------------------------------------------------------------

const glossBlocks = extractDivBlocks(glossarySrc, /<div className="gloss-group" id="(gloss-d\d+-t\d+-b\d+)">/);
console.log(`glossary gloss-group blocks found: ${glossBlocks.length}`);

// index nav labels, e.g. <a href="#gloss-d1-t1-b1">D1 · 1.1 · B1 — términos básicos</a>
const navMatch = glossarySrc.match(/<nav className="gloss-index"[^>]*>([\s\S]*?)<\/nav>/);
if (!navMatch) throw new Error('gloss-index nav block not found');
const indexLabels = new Map(
  [...navMatch[1].matchAll(/<a href="#(gloss-d\d+-t\d+-b\d+)">([^<]+)<\/a>/g)].map((m) => [m[1], m[2]])
);
console.log(`gloss-index labels found: ${indexLabels.size}`);

const glossEntries = glossBlocks.map((b) => {
  const idMatch = b.fullMatch.match(/id="([^"]+)"/);
  const id = idMatch[1];
  const dm = id.match(/gloss-d(\d+)-t(\d+)-b(\d+)/);
  const domain = Number(dm[1]);
  const task = Number(dm[2]);
  const bulletNum = Number(dm[3]);
  // strip trailing back-to-top link (points to old in-page #dN anchors, no longer valid)
  let inner = b.inner.replace(/\s*<a className="back-to-top"[^>]*>[^<]*<\/a>\s*$/,'').trim();
  const termCardCount = (inner.match(/className="term-card"/g) || []).length;
  const html = jsxToHtml(inner);
  const indexLabel = indexLabels.get(id);
  if (!indexLabel) throw new Error(`No gloss-index label found for ${id}`);
  return { id, domain, task, bulletNum, indexLabel, termCardCount, html };
});

if (indexLabels.size !== glossEntries.length) {
  throw new Error(`index label count (${indexLabels.size}) != entry count (${glossEntries.length})`);
}

const totalTermCards = glossEntries.reduce((s, e) => s + e.termCardCount, 0);
console.log(`term-card count (parsed sum): ${totalTermCards}`);

// ---- domains ---------------------------------------------------------------

const domainWeights = { 1: '20%', 2: '24%', 3: '28%', 4: '14%', 5: '14%' };
const domains = [];
for (let n = 1; n <= 5; n++) {
  const src = fs.readFileSync(root + `src/components/Domain${n}.tsx`, 'utf8');
  const head = src.match(/<span className="kicker">([^<]+)<\/span><h2>([^<]+)<\/h2><p className="domain-orig">([^<]+)<\/p>/);
  const kicker = head[1];
  const name = head[2];
  const nameOrig = head[3];
  const weight = src.match(/<span className="weight-badge">([^<]+)<\/span>/)[1];

  const taskBlocks = [...src.matchAll(/<h3><span className="tcode">([\d.]+)<\/span> ([^<]+)<\/h3>\s*<ul>([\s\S]*?)<\/ul>/g)];
  const subsections = taskBlocks.map((tb) => {
    const [, tcode, title, ulBody] = tb;
    const bullets = [...ulBody.matchAll(/<li>([\s\S]*?) <Link className="gloss-link" to="\/glosario\?t=([^"]+)">→ explicaci[oó]n t[eé]rmino por t[eé]rmino<\/Link><\/li>/g)]
      .map((bm) => ({ text: bm[1].trim(), glossId: bm[2] }));
    return { id: tcode, title, bullets };
  });
  const bulletCount = subsections.reduce((s, ss) => s + ss.bullets.length, 0);
  const liCount = (src.match(/<li>/g) || []).length;
  if (bulletCount !== liCount) throw new Error(`Domain ${n}: parsed ${bulletCount} bullets but file has ${liCount} <li> — mismatch`);
  console.log(`Domain ${n}: ${subsections.length} subsections, ${bulletCount} bullets (grep <li>: ${liCount}) OK`);

  domains.push({ number: n, kicker, name, nameOrig, weight: domainWeights[n], subsections });
}

const totalDomainBullets = domains.reduce((s, d) => s + d.subsections.reduce((s2, ss) => s2 + ss.bullets.length, 0), 0);
console.log(`total domain bullets parsed: ${totalDomainBullets}`);
if (totalDomainBullets !== glossEntries.length) {
  throw new Error(`Mismatch: ${totalDomainBullets} domain bullets vs ${glossEntries.length} glossary entries`);
}

// cross-check every domain bullet's glossId resolves to a real glossary entry
const glossIds = new Set(glossEntries.map((e) => e.id));
let missing = 0;
for (const d of domains) {
  for (const ss of d.subsections) {
    for (const b of ss.bullets) {
      if (!glossIds.has(b.glossId)) { console.error(`MISSING glossary entry for ${b.glossId}`); missing++; }
    }
  }
}
if (missing > 0) throw new Error(`${missing} domain bullets point to missing glossary entries`);
console.log('All domain bullet -> glossary id references resolve. OK.');

// ---- write output files -----------------------------------------------------

const glossaryDataTs = `// AUTO-GENERATED by scripts/extract-content.mjs — do not hand-edit; re-run the script instead.
export interface GlossaryEntry {
  id: string;
  domain: number;
  task: number;
  bulletNum: number;
  indexLabel: string;
  html: string;
}

export const glossaryEntries: GlossaryEntry[] = ${JSON.stringify(glossEntries.map(({ id, domain, task, bulletNum, indexLabel, html }) => ({ id, domain, task, bulletNum, indexLabel, html })), null, 2)};

export const glossaryById: Record<string, GlossaryEntry> = Object.fromEntries(glossaryEntries.map((e) => [e.id, e]));
`;

const domainDataTs = `// AUTO-GENERATED by scripts/extract-content.mjs — do not hand-edit; re-run the script instead.
export interface DomainBullet { text: string; glossId: string; }
export interface DomainSubsection { id: string; title: string; bullets: DomainBullet[]; }
export interface DomainData { number: number; kicker: string; name: string; nameOrig: string; weight: string; subsections: DomainSubsection[]; }

export const domains: DomainData[] = ${JSON.stringify(domains, null, 2)};

export const domainByNumber: Record<number, DomainData> = Object.fromEntries(domains.map((d) => [d.number, d]));
`;

fs.writeFileSync(root + 'src/glossaryData.ts', glossaryDataTs);
fs.writeFileSync(root + 'src/domainData.ts', domainDataTs);
console.log('Wrote src/glossaryData.ts and src/domainData.ts');
