import { Link } from 'react-router-dom';
export default function Domain4() {
  return (
    <>
      <section className="domain" id="d4" data-domain="4">
        <div className="domain-head">
          <div><span className="kicker">Dominio 4</span><h2>Lineamientos para una IA responsable</h2><p className="domain-orig">Guidelines for Responsible AI</p></div>
          <span className="weight-badge">14%</span>
        </div>

        <div className="task">
          <h3><span className="tcode">4.1</span> Explicar el desarrollo de sistemas de IA responsables</h3>
          <ul>
            <li>Identificar las características de una IA responsable (sesgo, equidad, inclusividad, robustez, seguridad, veracidad). <Link className="gloss-link" to="/glosario?t=gloss-d4-t1-b1">→ explicación término por término</Link></li>
            <li>Explicar cómo usar herramientas para identificar características de IA responsable (Amazon Bedrock Guardrails). <Link className="gloss-link" to="/glosario?t=gloss-d4-t1-b2">→ explicación término por término</Link></li>
            <li>Definir prácticas responsables para seleccionar un modelo (consideraciones ambientales, sostenibilidad). <Link className="gloss-link" to="/glosario?t=gloss-d4-t1-b3">→ explicación término por término</Link></li>
            <li>Identificar los riesgos legales de trabajar con GenAI (reclamos por infracción de propiedad intelectual, resultados sesgados del modelo, pérdida de confianza del cliente, riesgo para el usuario final, alucinaciones). <Link className="gloss-link" to="/glosario?t=gloss-d4-t1-b4">→ explicación término por término</Link></li>
            <li>Identificar las características de los conjuntos de datos (inclusividad, diversidad, fuentes de datos curadas, datasets balanceados). <Link className="gloss-link" to="/glosario?t=gloss-d4-t1-b5">→ explicación término por término</Link></li>
            <li>Describir los efectos del sesgo y la varianza (efectos sobre grupos demográficos, imprecisión, overfitting, underfitting). <Link className="gloss-link" to="/glosario?t=gloss-d4-t1-b6">→ explicación término por término</Link></li>
            <li>Describir herramientas para detectar y monitorear el sesgo, la confiabilidad y la veracidad (análisis de calidad de etiquetas, auditorías humanas, análisis de subgrupos, Amazon Augmented AI / A2I). <Link className="gloss-link" to="/glosario?t=gloss-d4-t1-b7">→ explicación término por término</Link></li>
          </ul>
        </div>

        <div className="task">
          <h3><span className="tcode">4.2</span> Reconocer la importancia de los modelos transparentes y explicables</h3>
          <ul>
            <li>Describir las diferencias entre modelos transparentes/explicables y modelos que no lo son. <Link className="gloss-link" to="/glosario?t=gloss-d4-t2-b1">→ explicación término por término</Link></li>
            <li>Describir herramientas para identificar modelos transparentes y explicables (Amazon SageMaker Model Cards, Amazon Bedrock Model Evaluations, modelos, datos y licenciamiento de código abierto). <Link className="gloss-link" to="/glosario?t=gloss-d4-t2-b2">→ explicación término por término</Link></li>
            <li>Identificar las contrapartidas entre la seguridad del modelo y su transparencia (interpretabilidad frente a desempeño). <Link className="gloss-link" to="/glosario?t=gloss-d4-t2-b3">→ explicación término por término</Link></li>
            <li>Describir los principios del diseño centrado en el humano para una IA explicable (mecanismos de retroalimentación del usuario, transparencia en las decisiones de la IA). <Link className="gloss-link" to="/glosario?t=gloss-d4-t2-b4">→ explicación término por término</Link></li>
          </ul>
        </div>
      </section>
    </>
  );
}
