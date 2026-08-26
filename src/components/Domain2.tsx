export default function Domain2() {
  return (
    <>
      <section className="domain" id="d2" data-domain="2">
        <div className="domain-head">
          <div><span className="kicker">Dominio 2</span><h2>Fundamentos de la IA generativa</h2><p className="domain-orig">Fundamentals of GenAI</p></div>
          <span className="weight-badge">24%</span>
        </div>

        <div className="task">
          <h3><span className="tcode">2.1</span> Explicar los conceptos básicos de la IA generativa</h3>
          <ul>
            <li>Definir conceptos fundamentales de GenAI (tokens, chunking, embeddings, vectores, prompt engineering, LLMs basados en transformers, FMs, modelos multimodales, modelos de difusión). <a className="gloss-link" href="#gloss-d2-t1-b1">→ explicación término por término</a></li>
            <li>Identificar posibles casos de uso para modelos de GenAI (generación de imagen/video/audio, resumen, asistentes de IA, traducción, generación de código, agentes de servicio al cliente, búsqueda, motores de recomendación). <a className="gloss-link" href="#gloss-d2-t1-b2">→ explicación término por término</a></li>
            <li>Describir el ciclo de vida de un FM (selección de datos, selección del modelo, preentrenamiento, fine-tuning, evaluación, despliegue, retroalimentación). <a className="gloss-link" href="#gloss-d2-t1-b3">→ explicación término por término</a></li>
            <li>Describir el modelo de precios basado en tokens y su efecto en el costo y desempeño de la inferencia. <a className="gloss-link" href="#gloss-d2-t1-b4">→ explicación término por término</a></li>
            <li>Describir el rol de la ingeniería de contexto en aplicaciones basadas en FMs. <a className="gloss-link" href="#gloss-d2-t1-b5">→ explicación término por término</a></li>
            <li>Definir conceptos fundamentales de IA agéntica (patrones de sistemas multiagente, Model Context Protocol [MCP] y su rol conectando agentes con sistemas externos, patrones de comunicación entre agentes, gestión de memoria, uso de herramientas, orquestación de flujos de trabajo). <a className="gloss-link" href="#gloss-d2-t1-b6">→ explicación término por término</a></li>
          </ul>
        </div>

        <div className="task">
          <h3><span className="tcode">2.2</span> Comprender las capacidades y limitaciones de la GenAI para resolver problemas de negocio</h3>
          <ul>
            <li>Describir las ventajas de la GenAI (adaptabilidad, capacidad de respuesta, capacidades conversacionales, generación de contenido). <a className="gloss-link" href="#gloss-d2-t2-b1">→ explicación término por término</a></li>
            <li>Identificar las desventajas de las soluciones de GenAI (alucinaciones, interpretabilidad, imprecisión, no determinismo). <a className="gloss-link" href="#gloss-d2-t2-b2">→ explicación término por término</a></li>
            <li>Identificar factores a considerar al elegir modelos de GenAI (tipo de modelo, requisitos de desempeño, capacidades, restricciones, cumplimiento normativo, costo, latencia, complejidad del modelo). <a className="gloss-link" href="#gloss-d2-t2-b3">→ explicación término por término</a></li>
            <li>Determinar el valor de negocio y las métricas de las aplicaciones de GenAI (desempeño entre dominios, ROI, eficiencia, tasa de conversión, ingreso promedio por usuario, exactitud, valor de vida del cliente). <a className="gloss-link" href="#gloss-d2-t2-b4">→ explicación término por término</a></li>
          </ul>
        </div>

        <div className="task">
          <h3><span className="tcode">2.3</span> Describir la infraestructura y tecnologías de AWS para construir aplicaciones de GenAI</h3>
          <ul>
            <li>Identificar los servicios y funciones de AWS para desarrollar aplicaciones de GenAI (Amazon Bedrock, SageMaker AI, SageMaker JumpStart, Amazon Quick, Kiro, Strands Agents, Amazon Bedrock AgentCore). <a className="gloss-link" href="#gloss-d2-t3-b1">→ explicación término por término</a></li>
            <li>Describir las ventajas de usar servicios de GenAI de AWS para construir aplicaciones (accesibilidad, menor barrera de entrada, eficiencia, costo-efectividad, velocidad de salida al mercado). <a className="gloss-link" href="#gloss-d2-t3-b2">→ explicación término por término</a></li>
            <li>Describir los beneficios de la infraestructura de AWS para aplicaciones de GenAI (seguridad, cumplimiento normativo, responsabilidad, safety). <a className="gloss-link" href="#gloss-d2-t3-b3">→ explicación término por término</a></li>
            <li>Describir las contrapartidas de costo de los servicios de GenAI de AWS (capacidad de respuesta, disponibilidad, redundancia, desempeño, cobertura regional, precios por token, throughput aprovisionado, modelos personalizados). <a className="gloss-link" href="#gloss-d2-t3-b4">→ explicación término por término</a></li>
          </ul>
        </div>
      </section>
    </>
  );
}
