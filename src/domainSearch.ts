import { domains } from './domainData.ts';

export interface DomainSearchEntry {
  domainNumber: number;
  domainName: string;
  subsectionTitle: string;
  text: string;
  glossId: string;
}

// Flattened once at module load -- domainData.ts is static content, no need
// to rebuild this per search or per render.
export const domainSearchIndex: DomainSearchEntry[] = domains.flatMap((d) =>
  d.subsections.flatMap((ss) =>
    ss.bullets.map((b) => ({
      domainNumber: d.number,
      domainName: d.name,
      subsectionTitle: ss.title,
      text: b.text,
      glossId: b.glossId,
    })),
  ),
);
