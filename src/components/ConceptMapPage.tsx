import ConceptMap from './ConceptMap.tsx';

const RELATION_LEGEND = [
  { key: 'requiere', label: 'Requiere' },
  { key: 'ejemplo-de', label: 'Ejemplo de' },
  { key: 'se-usa-con', label: 'Se usa con' },
  { key: 'contrasta-con', label: 'Contrasta con' },
];

export default function ConceptMapPage() {
  return (
    <section className="concept-map-page">
      <span className="eyebrow">Glosario a fondo, término por término</span>
      <h2 style={{ marginTop: '0.4rem', fontSize: '1.5rem' }}>Mapa conceptual</h2>
      <p className="scope-note">
        Cómo se conectan los términos del glosario entre sí. Arrastrá para mover el mapa, usá la rueda del mouse (o pellizcá en el celular) para hacer zoom, y tocá un término para ver su
        explicación completa.
      </p>

      <div className="concept-legend">
        {[1, 2, 3, 4, 5].map((d) => (
          <span key={d} className="concept-legend-item">
            <span className={`concept-legend-dot d${d}`} /> Dominio {d}
          </span>
        ))}
        <span className="concept-legend-sep" aria-hidden="true" />
        {RELATION_LEGEND.map((r) => (
          <span key={r.key} className="concept-legend-item">
            {r.label}
          </span>
        ))}
      </div>

      <ConceptMap />
    </section>
  );
}
