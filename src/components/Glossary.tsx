import { Link } from 'react-router-dom';
import { glossaryEntries } from '../glossaryData.ts';
import GlossaryEntryContent from './GlossaryEntryContent.tsx';
import ResumeListeningBanner from './ResumeListeningBanner.tsx';

export default function Glossary() {
  return (
    <>
      <section className="glossary" id="glossary">
        <span className="eyebrow">Glosario a fondo, término por término</span>
        <h2 style={{ marginTop: '0.4rem', fontSize: '1.5rem' }}>Explicaciones completas de cada bullet</h2>
        <p className="scope-note">Cada término está basado en páginas oficiales de AWS (docs.aws.amazon.com, aws.amazon.com/what-is, aws.amazon.com/compare) — ver fuentes al final de la página. Esta sección crece bullet por bullet a medida que la vamos armando.</p>

        <ResumeListeningBanner />

        <nav className="gloss-index" aria-label="Índice del glosario">
          {glossaryEntries.map((e) => (
            <Link key={e.id} to={`/glosario?t=${e.id}`}>{e.indexLabel}</Link>
          ))}
        </nav>

        {glossaryEntries.map((e) => (
          <GlossaryEntryContent key={e.id} id={e.id} />
        ))}
      </section>
    </>
  );
}
