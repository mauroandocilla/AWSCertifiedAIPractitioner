import { glossaryById } from '../glossaryData.ts';

export default function GlossaryEntryContent({ id }: { id: string }) {
  const entry = glossaryById[id];
  if (!entry) return <p>Entrada de glosario no encontrada ({id}).</p>;
  return <div className="gloss-group" id={entry.id} dangerouslySetInnerHTML={{ __html: entry.html }} />;
}
