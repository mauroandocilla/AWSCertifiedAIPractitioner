import { Link } from 'react-router-dom';

interface JourneyStage {
  action: string;
  behavior: string[];
  feelings: string[];
  /** 1-5, used to plot the mood line below -- purely illustrative, not a
   *  measured metric, so no legend/axis numbers are shown, just the words. */
  mood: number;
  moodLabel: string;
  quote: string;
  opportunity?: { label: string; to: string };
}

const STAGES: JourneyStage[] = [
  {
    action: 'Descubre el temario',
    behavior: ['Entra a Inicio', 'Ve los 5 dominios y cuánto pesa cada uno en el examen'],
    feelings: ['Curiosidad por saber qué hay que estudiar', 'Un poco de vértigo por la cantidad de contenido'],
    mood: 4,
    moodLabel: 'Curiosidad',
    quote: '"Che, esto se ve como mucho"',
    opportunity: { label: 'Mirá el desglose de pesos', to: '/' },
  },
  {
    action: 'Estudia dominio por dominio',
    behavior: ['Lee cada bullet (versión Técnico o Profesor)', 'Escucha el glosario hablado mientras hace otra cosa', 'Marca su avance a medida que va'],
    feelings: ['Se satura si lee mucho seguido', 'Alivio cada vez que marca algo como hecho'],
    mood: 2,
    moodLabel: 'Agobio',
    quote: '"¿Cuánto me falta todavía?"',
    opportunity: { label: 'Marcá tu avance en el Recorrido', to: '/recorrido' },
  },
  {
    action: 'Conecta lo que ya vio',
    behavior: ['Busca un término suelto que no recuerda bien (Ctrl+K)', 'Ve cómo se relaciona con otros en el mapa conceptual'],
    feelings: ['"Ah, por eso esto se relaciona con aquello"', 'Más confianza de la que tenía al empezar'],
    mood: 4,
    moodLabel: 'Empieza a cerrarle',
    quote: '"Ahora sí entiendo cómo se conecta todo"',
    opportunity: { label: 'Mirá cómo se conectan los términos', to: '/mapa-conceptual' },
  },
  {
    action: 'Practica con el quiz',
    behavior: ['Responde un set de práctica', 'Lee la explicación cuando se equivoca', 'Repite el set que le costó'],
    feelings: ['Nervios antes de ver el resultado', 'Frustración con lo que todavía no domina'],
    mood: 2,
    moodLabel: 'Se da cuenta de lo que le falta',
    quote: '"Otra vez me equivoqué con lo mismo"',
    opportunity: { label: 'Practicá con el quiz', to: '/quiz' },
  },
  {
    action: 'Simula el examen real',
    behavior: ['Rinde el modo examen: 65 preguntas, 90 minutos', 'Sin saber si acierta hasta terminar', 'Marca preguntas dudosas para revisar después'],
    feelings: ['Ansiedad por el tiempo', 'Se siente parecido al examen de verdad'],
    mood: 3,
    moodLabel: 'Ansiedad controlada',
    quote: '"No me puedo quedar sin tiempo"',
    opportunity: { label: 'Corré el modo examen', to: '/examen' },
  },
  {
    action: 'Rinde el examen real',
    behavior: ['Aplica lo que repasó', 'Reconoce preguntas parecidas a las que ya vio'],
    feelings: ['Alivio de haber llegado preparado', 'Orgullo, más allá del resultado exacto'],
    mood: 5,
    moodLabel: 'Alivio y orgullo',
    quote: '"Lo logré"',
  },
];

const CHART_WIDTH = 100;
const CHART_HEIGHT = 40;

function moodChartPoints(): { x: number; y: number }[] {
  return STAGES.map((s, i) => ({
    x: (i / (STAGES.length - 1)) * CHART_WIDTH,
    y: CHART_HEIGHT - ((s.mood - 1) / 4) * CHART_HEIGHT,
  }));
}

export default function JourneyMapPage() {
  const points = moodChartPoints();
  const path = points.map((p, i) => `${i === 0 ? 'M' : 'L'}${p.x},${p.y}`).join(' ');

  return (
    <section className="journey-map-page">
      <span className="eyebrow">De cero a rendir el examen</span>
      <h2 style={{ marginTop: '0.4rem', fontSize: '1.5rem' }}>Mapa de experiencia</h2>
      <p className="scope-note">Cómo se siente, paso a paso, prepararse para el AIF-C01 usando esta guía — y qué te ofrece la app en cada etapa.</p>

      <div className="jmap-persona">
        <span className="jmap-persona-avatar" aria-hidden="true">
          🎓
        </span>
        <div>
          <strong>Vos, preparándote para el AIF-C01</strong>
          <p>Objetivo: llegar al día del examen habiendo tocado los 5 dominios al menos una vez, sin sorpresas.</p>
        </div>
      </div>

      {/* One flat CSS grid (1 label column + 6 stage columns), not nested
          per-row grids -- that would let each row size its own columns off
          just that row's content, so stage 3's column could end up a
          different width in the "Qué hace" row than in the "Cómo se siente"
          row, breaking the whole point of a journey map (reading a column
          top-to-bottom as one coherent stage). */}
      <div className="jmap-grid">
        <div className="jmap-row-label">Qué hace</div>
        {STAGES.map((s, i) => (
          <div key={i} className="jmap-cell jmap-action">
            {s.action}
          </div>
        ))}

        <div className="jmap-row-label">Cómo lo hace</div>
        {STAGES.map((s, i) => (
          <ul key={i} className="jmap-cell jmap-list">
            {s.behavior.map((b, bi) => (
              <li key={bi}>{b}</li>
            ))}
          </ul>
        ))}

        <div className="jmap-row-label">Cómo se siente</div>
        {STAGES.map((s, i) => (
          <ul key={i} className="jmap-cell jmap-list">
            {s.feelings.map((f, fi) => (
              <li key={fi}>{f}</li>
            ))}
          </ul>
        ))}

        <div className="jmap-row-label">Ánimo</div>
        <div className="jmap-mood-chart-wrap">
          <svg className="jmap-mood-chart" viewBox={`0 0 ${CHART_WIDTH} ${CHART_HEIGHT}`} preserveAspectRatio="none">
            <path d={path} className="jmap-mood-line" vectorEffect="non-scaling-stroke" />
            {points.map((p, i) => (
              <circle key={i} cx={p.x} cy={p.y} r="2.4" className="jmap-mood-dot">
                <title>{STAGES[i].moodLabel}</title>
              </circle>
            ))}
          </svg>
        </div>

        <div className="jmap-row-label" aria-hidden="true" />
        {STAGES.map((s, i) => (
          <div key={i} className="jmap-cell jmap-mood-quote">
            {s.quote}
          </div>
        ))}

        <div className="jmap-row-label">Qué te ofrece la app</div>
        {STAGES.map((s, i) => (
          <div key={i} className="jmap-cell">
            {s.opportunity ? (
              <Link to={s.opportunity.to} className="jmap-opportunity">
                {s.opportunity.label}
              </Link>
            ) : (
              <span className="jmap-opportunity-none">—</span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
