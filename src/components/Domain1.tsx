export default function Domain1() {
  return (
    <>
      <section className="domain" id="d1" data-domain="1">
        <div className="domain-head">
          <div><span className="kicker">Dominio 1</span><h2>Fundamentos de IA y ML</h2><p className="domain-orig">Fundamentals of AI and ML</p></div>
          <span className="weight-badge">20%</span>
        </div>

        <div className="task">
          <h3><span className="tcode">1.1</span> Explicar conceptos y terminología básica de IA</h3>
          <ul>
            <li>Definir términos básicos de IA (IA, ML, deep learning, redes neuronales, visión por computadora, NLP, modelo, algoritmo, entrenamiento e inferencia, sesgo, equidad, ajuste/fit, LLM, GenAI, IA agéntica). <a className="gloss-link" href="#gloss-d1-t1-b1">→ explicación término por término</a></li>
            <li>Describir las similitudes y diferencias entre IA, ML, GenAI, deep learning e IA agéntica. <a className="gloss-link" href="#gloss-d1-t1-b2">→ explicación término por término</a></li>
            <li>Describir los distintos tipos de inferencia (por lotes, en tiempo real, asíncrona, serverless). <a className="gloss-link" href="#gloss-d1-t1-b3">→ explicación término por término</a></li>
            <li>Describir los distintos tipos de datos en modelos de IA (etiquetados/sin etiquetar, tabulares, series de tiempo, imagen, texto, estructurados/no estructurados). <a className="gloss-link" href="#gloss-d1-t1-b4">→ explicación término por término</a></li>
            <li>Describir los distintos tipos de aprendizaje de IA/ML (supervisado, no supervisado, aprendizaje por refuerzo). <a className="gloss-link" href="#gloss-d1-t1-b5">→ explicación término por término</a></li>
          </ul>
        </div>

        <div className="task">
          <h3><span className="tcode">1.2</span> Identificar casos de uso prácticos para IA</h3>
          <ul>
            <li>Reconocer aplicaciones donde IA/ML aportan valor (apoyar la toma de decisiones humanas, escalabilidad de soluciones, automatización). <a className="gloss-link" href="#gloss-d1-t2-b1">→ explicación término por término</a></li>
            <li>Determinar cuándo una solución de IA/ML no es apropiada (análisis costo-beneficio, situaciones que requieren un resultado específico en vez de una predicción). <a className="gloss-link" href="#gloss-d1-t2-b2">→ explicación término por término</a></li>
            <li>Seleccionar las técnicas de IA/ML apropiadas para casos de uso específicos (regresión, clasificación, clustering). <a className="gloss-link" href="#gloss-d1-t2-b3">→ explicación término por término</a></li>
            <li>Identificar ejemplos de aplicaciones reales de IA (visión por computadora, NLP, reconocimiento de voz, sistemas de recomendación, detección de fraude, pronósticos, bases de conocimiento, IA agéntica). <a className="gloss-link" href="#gloss-d1-t2-b4">→ explicación término por término</a></li>
            <li>Explicar las capacidades de los servicios administrados de IA/ML de AWS (Amazon SageMaker AI, Amazon Transcribe, Amazon Translate, Amazon Comprehend, Amazon Lex, Amazon Polly). <a className="gloss-link" href="#gloss-d1-t2-b5">→ explicación término por término</a></li>
            <li>Identificar cuándo conviene usar modelos de ML tradicionales o foundation models (FMs) (por regulación, requisitos de explicabilidad, restricciones operativas). <a className="gloss-link" href="#gloss-d1-t2-b6">→ explicación término por término</a></li>
          </ul>
        </div>

        <div className="task">
          <h3><span className="tcode">1.3</span> Describir el ciclo de vida de desarrollo de IA/ML</h3>
          <ul>
            <li>Describir y diferenciar los componentes de un pipeline de IA/ML. <a className="gloss-link" href="#gloss-d1-t3-b1">→ explicación término por término</a></li>
            <li>Describir las fuentes de los FMs (modelos preentrenados de código abierto, entrenamiento de modelos propios). <a className="gloss-link" href="#gloss-d1-t3-b2">→ explicación término por término</a></li>
            <li>Describir métodos para poner un modelo en producción (servicio de API administrado, API auto-alojada). <a className="gloss-link" href="#gloss-d1-t3-b3">→ explicación término por término</a></li>
            <li>Identificar los servicios y funciones de AWS relevantes en cada etapa del pipeline de IA/ML (Amazon Bedrock, Amazon Q, Amazon Quick, Kiro, SageMaker AI). <a className="gloss-link" href="#gloss-d1-t3-b4">→ explicación término por término</a></li>
            <li>Describir los conceptos fundamentales de MLOps (experimentación, procesos repetibles, sistemas escalables, gestión de deuda técnica, preparación para producción, monitoreo del modelo, reentrenamiento). <a className="gloss-link" href="#gloss-d1-t3-b5">→ explicación término por término</a></li>
            <li>Describir métricas de desempeño del modelo (accuracy, precisión, recall, F1) y métricas de negocio (costo por usuario, costos de desarrollo, feedback de clientes, ROI) para evaluar modelos de ML. <a className="gloss-link" href="#gloss-d1-t3-b6">→ explicación término por término</a></li>
          </ul>
        </div>
      </section>
    </>
  );
}
