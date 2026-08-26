import { Link } from 'react-router-dom';
export default function Domain3() {
  return (
    <>
      <section className="domain" id="d3" data-domain="3">
        <div className="domain-head">
          <div><span className="kicker">Dominio 3 · el que más pesa</span><h2>Aplicaciones de foundation models</h2><p className="domain-orig">Applications of Foundation Models</p></div>
          <span className="weight-badge">28%</span>
        </div>

        <div className="task">
          <h3><span className="tcode">3.1</span> Describir consideraciones de diseño para aplicaciones que usan FMs</h3>
          <ul>
            <li>Identificar los criterios de selección para elegir FMs (costo, modalidad, latencia, soporte multilingüe, tamaño del modelo, complejidad, personalización, longitud de entrada/salida, prompt caching). <Link className="gloss-link" to="/glosario?t=gloss-d3-t1-b1">→ explicación término por término</Link></li>
            <li>Describir el efecto de los parámetros de inferencia en las respuestas del modelo (temperatura, longitud de entrada/salida). <Link className="gloss-link" to="/glosario?t=gloss-d3-t1-b2">→ explicación término por término</Link></li>
            <li>Definir Retrieval Augmented Generation (RAG) y describir sus aplicaciones de negocio (Amazon Bedrock Knowledge Bases). <Link className="gloss-link" to="/glosario?t=gloss-d3-t1-b3">→ explicación término por término</Link></li>
            <li>Identificar los servicios de AWS que ayudan a almacenar embeddings en bases de datos vectoriales (Amazon OpenSearch Service, Amazon Aurora, Amazon Neptune, Amazon RDS para PostgreSQL). <Link className="gloss-link" to="/glosario?t=gloss-d3-t1-b4">→ explicación término por término</Link></li>
            <li>Explicar las contrapartidas de costo de los distintos enfoques de personalización de FMs (preentrenamiento, fine-tuning, in-context learning, RAG, destilación de modelos). <Link className="gloss-link" to="/glosario?t=gloss-d3-t1-b5">→ explicación término por término</Link></li>
            <li>Definir el rol de los agentes de IA y describir sus aplicaciones de negocio. <Link className="gloss-link" to="/glosario?t=gloss-d3-t1-b6">→ explicación término por término</Link></li>
          </ul>
        </div>

        <div className="task">
          <h3><span className="tcode">3.2</span> Elegir técnicas efectivas de ingeniería de prompts</h3>
          <ul>
            <li>Definir los conceptos y elementos de la ingeniería de prompts (contexto, instrucción, prompts negativos). <Link className="gloss-link" to="/glosario?t=gloss-d3-t2-b1">→ explicación término por término</Link></li>
            <li>Definir técnicas de ingeniería de prompts (chain-of-thought, zero-shot, single-shot, few-shot, plantillas de prompts). <Link className="gloss-link" to="/glosario?t=gloss-d3-t2-b2">→ explicación término por término</Link></li>
            <li>Identificar y describir los beneficios y buenas prácticas de la ingeniería de prompts (mejora de la calidad de respuesta, experimentación, guardrails, descubrimiento, especificidad y concisión, uso de múltiples comentarios). <Link className="gloss-link" to="/glosario?t=gloss-d3-t2-b3">→ explicación término por término</Link></li>
            <li>Definir los riesgos y limitaciones potenciales de la ingeniería de prompts (exposición, envenenamiento/poisoning, secuestro/hijacking, jailbreaking). <Link className="gloss-link" to="/glosario?t=gloss-d3-t2-b4">→ explicación término por término</Link></li>
            <li>Describir estrategias de versionado y gestión de prompts usando Amazon Bedrock Prompt Management. <Link className="gloss-link" to="/glosario?t=gloss-d3-t2-b5">→ explicación término por término</Link></li>
          </ul>
        </div>

        <div className="task">
          <h3><span className="tcode">3.3</span> Describir el proceso de entrenamiento y fine-tuning de FMs</h3>
          <ul>
            <li>Describir los elementos clave del entrenamiento de un FM (preentrenamiento, fine-tuning, preentrenamiento continuo, destilación). <Link className="gloss-link" to="/glosario?t=gloss-d3-t3-b1">→ explicación término por término</Link></li>
            <li>Definir métodos de fine-tuning de un FM (instruction tuning, adaptación de modelos a dominios específicos, transfer learning, preentrenamiento continuo). <Link className="gloss-link" to="/glosario?t=gloss-d3-t3-b2">→ explicación término por término</Link></li>
            <li>Describir cómo preparar los datos para hacer fine-tuning a un FM (curaduría de datos, gobernanza, tamaño, etiquetado, representatividad, aprendizaje por refuerzo con retroalimentación humana [RLHF]). <Link className="gloss-link" to="/glosario?t=gloss-d3-t3-b3">→ explicación término por término</Link></li>
          </ul>
        </div>

        <div className="task">
          <h3><span className="tcode">3.4</span> Describir métodos para evaluar el desempeño de los FMs</h3>
          <ul>
            <li>Determinar enfoques para evaluar el desempeño de un FM (evaluación human-in-the-loop, datasets de referencia/benchmark, Amazon Bedrock Model Evaluation). <Link className="gloss-link" to="/glosario?t=gloss-d3-t4-b1">→ explicación término por término</Link></li>
            <li>Identificar las métricas relevantes para evaluar el desempeño de un FM (ROUGE, BLEU, BERTScore, LLM-as-a-judge). <Link className="gloss-link" to="/glosario?t=gloss-d3-t4-b2">→ explicación término por término</Link></li>
            <li>Determinar si un FM cumple efectivamente con los objetivos de negocio (productividad, engagement de usuarios, task engineering). <Link className="gloss-link" to="/glosario?t=gloss-d3-t4-b3">→ explicación término por término</Link></li>
            <li>Identificar enfoques para evaluar el desempeño de aplicaciones construidas con FMs (RAG, agentes, flujos de trabajo). <Link className="gloss-link" to="/glosario?t=gloss-d3-t4-b4">→ explicación término por término</Link></li>
            <li>Identificar métricas de alineación con objetivos de negocio para aplicaciones de IA (tasa de finalización de tareas, satisfacción del usuario, costo por interacción). <Link className="gloss-link" to="/glosario?t=gloss-d3-t4-b5">→ explicación término por término</Link></li>
          </ul>
        </div>
      </section>
    </>
  );
}
