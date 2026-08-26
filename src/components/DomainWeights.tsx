export default function DomainWeights() {
  return (
    <>
      <div className="weights">
        <h2 className="section-title eyebrow">Peso de cada dominio en la nota</h2>
        <div className="bar" role="img" aria-label="Domain 1: 20%, Domain 2: 24%, Domain 3: 28%, Domain 4: 14%, Domain 5: 14%">
          <div className="seg d1" style={{width: '20%'}}>20%</div>
          <div className="seg d2" style={{width: '24%'}}>24%</div>
          <div className="seg d3" style={{width: '28%'}}>28%</div>
          <div className="seg d4" style={{width: '14%'}}>14%</div>
          <div className="seg d5" style={{width: '14%'}}>14%</div>
        </div>
        <div className="legend">
          <div className="item"><span className="dot d1"></span>1 · Fundamentos de IA y ML</div>
          <div className="item"><span className="dot d2"></span>2 · Fundamentos de GenAI</div>
          <div className="item"><span className="dot d3"></span>3 · Aplicaciones de foundation models</div>
          <div className="item"><span className="dot d4"></span>4 · IA responsable</div>
          <div className="item"><span className="dot d5"></span>5 · Seguridad, cumplimiento y gobernanza</div>
        </div>
      </div>
    </>
  );
}
