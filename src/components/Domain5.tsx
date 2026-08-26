export default function Domain5() {
  return (
    <>
      <section className="domain" id="d5" data-domain="5">
        <div className="domain-head">
          <div><span className="kicker">Dominio 5</span><h2>Seguridad, cumplimiento y gobernanza para soluciones de IA</h2><p className="domain-orig">Security, Compliance, and Governance for AI Solutions</p></div>
          <span className="weight-badge">14%</span>
        </div>

        <div className="task">
          <h3><span className="tcode">5.1</span> Explicar métodos para asegurar sistemas de IA</h3>
          <ul>
            <li>Identificar los servicios y funciones de AWS para asegurar sistemas de IA (roles, políticas y permisos de IAM; cifrado; Amazon Macie; AWS PrivateLink; modelo de responsabilidad compartida de AWS; Amazon Bedrock AgentCore Identity; Policy en AgentCore; Amazon Bedrock Guardrails). <a className="gloss-link" href="#gloss-d5-t1-b1">→ explicación término por término</a></li>
            <li>Describir el concepto de citación de fuentes y documentación del origen de los datos (linaje de datos, catalogación de datos, Amazon SageMaker Model Cards). <a className="gloss-link" href="#gloss-d5-t1-b2">→ explicación término por término</a></li>
            <li>Describir las buenas prácticas de ingeniería de datos segura (evaluación de la calidad de los datos, tecnologías que mejoran la privacidad, control de acceso a los datos, integridad de los datos). <a className="gloss-link" href="#gloss-d5-t1-b3">→ explicación término por término</a></li>
            <li>Describir las consideraciones de seguridad y privacidad para sistemas de IA (seguridad de aplicaciones, detección de amenazas, gestión de vulnerabilidades, protección de infraestructura, inyección de prompts, cifrado en reposo y en tránsito, prevención de fuga de datos, filtrado y validación de salidas, requisitos de auditoría y registro de interacciones de IA, toxicidad). <a className="gloss-link" href="#gloss-d5-t1-b4">→ explicación término por término</a></li>
            <li>Describir métodos de detección de alucinaciones y técnicas de grounding para mejorar la precisión de las salidas (grounding con RAG, validación de salidas, puntuación de confianza). <a className="gloss-link" href="#gloss-d5-t1-b5">→ explicación término por término</a></li>
          </ul>
        </div>

        <div className="task">
          <h3><span className="tcode">5.2</span> Reconocer regulaciones de gobernanza y cumplimiento para sistemas de IA</h3>
          <ul>
            <li>Identificar los servicios y funciones de AWS que ayudan con la gobernanza y el cumplimiento normativo (AWS Config, Amazon Inspector, AWS Audit Manager, AWS Artifact, AWS CloudTrail, AWS Trusted Advisor). <a className="gloss-link" href="#gloss-d5-t2-b1">→ explicación término por término</a></li>
            <li>Describir estrategias de gobernanza de datos (ciclos de vida de los datos, registro/logging, residencia de datos, monitoreo, observación, retención). <a className="gloss-link" href="#gloss-d5-t2-b2">→ explicación término por término</a></li>
            <li>Describir los procesos para seguir protocolos de gobernanza (políticas, periodicidad y estrategias de revisión, marcos de gobernanza como el Generative AI Security Scoping Matrix, estándares de transparencia, requisitos de capacitación del equipo). <a className="gloss-link" href="#gloss-d5-t2-b3">→ explicación término por término</a></li>
          </ul>
        </div>
      </section>
    </>
  );
}
