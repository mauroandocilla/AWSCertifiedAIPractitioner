# IA responsable, ética y sesgo

_15 preguntas · Quiz v2 (TutorialsDojo) · AWS Certified AI Practitioner (AIF-C01)_

## Concepto clave

Los principios de IA responsable de AWS (equidad, transparencia, explicabilidad, privacidad, seguridad, robustez, gobernanza) y cómo se manifiestan los problemas de sesgo, junto con otros riesgos de la IA generativa: toxicidad, alucinación y propiedad intelectual.

## Truco para reconocerlas

Cada principio tiene casi una palabra clave uno a uno: "por qué el modelo tomó esa decisión" -> Explicabilidad. "compartir abiertamente cómo funciona el sistema" -> Transparencia. "resultados justos entre distintos grupos" -> Equidad. "no debe causar daño ni efectos no deseados" -> Seguridad. "revisión humana antes de publicar una respuesta" -> Human-in-the-loop.

## Palabras clave

`por qué decidió eso` · `justo entre grupos` · `revisión humana`

## Preguntas

### 1. Una empresa de salud está desarrollando un sistema de IA para asistir a médicos en diagnósticos médicos basados en datos de pacientes. El sistema debe cumplir con las regulaciones HIPAA y seguir principios de IA responsable para prevenir sesgos y garantizar la privacidad de datos.

¿Cuáles acciones debe tomar la empresa para alinearse con los principios de IA responsable mientras desarrolla el sistema de diagnóstico? (Selecciona DOS.)

- · **A.** Excluir pacientes con condiciones raras para mejorar la precisión del modelo
- ✅ **B.** Realizar auditorías regulares
- ✅ **C.** Ofuscar información sensible del paciente antes del entrenamiento del modelo
- · **D.** Usar modelos pre-entrenados de terceros sin modificación
- · **E.** Usar registros médicos históricos sin preprocesamiento

### 2. Una institución de investigación ha implementado una solución de IA generativa dentro de su sistema. El equipo de cumplimiento normativo debe garantizar que la solución cumpla con los estándares necesarios para proteger la confidencialidad, integridad y disponibilidad de los datos a los que accede la IA. Esto es particularmente importante ya que la institución maneja datos sensibles de investigación federal.

¿Qué estándares garantizarán que la solución cumpla con los requisitos regulatorios del gobierno estadounidense?

- · **A.** Federal Risk and Authorization Management Program (FedRAMP)
- ✅ **B.** National Institute of Standards and Technology (NIST)
- · **C.** Payment Card Industry Data Security Standard (PCI-DSS)
- · **D.** Health Insurance Portability and Accountability Act (HIPAA)

### 3. Un especialista en IA está desarrollando un modelo de IA para un sistema de aprobación de préstamos y desea asegurar su equidad y precisión. Sin embargo, las pruebas revelaron problemas con el desempeño del modelo y su proceso de toma de decisiones.

¿Cuáles son las dimensiones centrales de la IA responsable que coinciden con las siguientes descripciones relacionadas con el desarrollo del modelo de machine learning? Cada concepto de IA debe ser elegido solo una vez. (Selecciona CUATRO.)

| Elemento | Respuesta correcta |
|---|---|
| Garantizar que el proceso de toma de decisiones del modelo sea transparente y comprensible. | **Transparencia** |
| Garantizar que el modelo no produzca efectos negativos nocivos o no deseados. | **Seguridad** |
| Proporcionar razones claras y comprensibles para cada decisión tomada por el modelo. | **Explicabilidad** |
| Garantizar que los resultados del modelo sean justos y equitativos para todos los solicitantes. | **Equidad** |

### 4. Una empresa está integrando diferentes tecnologías de IA generativa para mejorar sus operaciones internas e interacciones con clientes. La empresa debe emparejar cada aplicación de IA con el principio de IA responsable apropiado para asegurar una integración ética y alineación con prácticas de IA responsable.

Selecciona el principio de IA responsable que mejor coincida con cada descripción de prácticas de aplicación de IA. (Selecciona TRES.)

| Elemento | Respuesta correcta |
|---|---|
| La aplicación asegura que las respuestas de atención al cliente sean imparciales y justas, evitando cualquier forma de discriminación o prejuicio. | **Fairness** |
| La empresa comparte abiertamente información sobre el funcionamiento general del sistema de IA, las fuentes de datos y el proceso de desarrollo utilizado para generar recomendaciones de diseño de nuevos productos. | **Transparency** |
| La aplicación está diseñada para prevenir el acceso no autorizado a información sensible mientras genera recomendaciones personalizadas para clientes. | **Privacy and security** |

### 5. Una organización financiera está planeando integrar servicios de inteligencia artificial generativa (IA generativa) en su flujo de trabajo para mejorar el soporte al cliente con capacidades de procesamiento de lenguaje natural. La empresa está interesada en garantizar que sus modelos de IA sean transparentes, justos y responsables. Buscan recursos para entender las implicaciones éticas y el uso responsable de los servicios de IA.

¿Cuál sería el servicio de AWS más apropiado para esta tarea?

- · **A.** AWS Marketplace
- · **B.** Amazon Polly
- · **C.** Amazon Comprehend
- ✅ **D.** AWS AI Service Cards

### 6. Una plataforma de reclutamiento desarrolló un sistema de evaluación de candidatos basado en IA. La plataforma entrenó el modelo usando un dataset grande, pero el dataset estaba sesgado y carecía de representación de diversos grupos demográficos.

¿Qué aspecto de la IA responsable enfatiza este escenario?

- ✅ **A.** Equidad
- · **B.** Controlabilidad
- · **C.** Transparencia
- · **D.** Veracidad y Robustez

### 7. Una organización planea implementar un sistema de inteligencia artificial (IA) para evaluar y recomendar individuos elegibles para participar en diversas iniciativas de salud pública y programas de asistencia social. El sistema analiza datos de múltiples fuentes, incluyendo datos censales, registros de empleo e información financiera. La organización necesita agilizar el proceso de solicitud y garantizar que los individuos elegibles reciban el apoyo que necesitan.

¿Cuál es la dimensión central del AI responsable que la organización debe priorizar para asegurar que el modelo de machine learning se alinee con principios éticos y proporcione claridad sobre cómo se toman las decisiones?

- · **A.** Privacidad y Seguridad
- · **B.** Equidad
- ✅ **C.** Transparencia
- · **D.** Seguridad

### 8. Una organización planea aprovechar la IA generativa para crear contenido de marketing personalizado para sus campañas.

¿Cuál es la capacidad fundamental de IA esencial para garantizar el uso efectivo y responsable de la IA generativa?

- · **A.** Perspectiva de Negocio
- · **B.** Perspectiva de Seguridad
- · **C.** Perspectiva de Personas
- ✅ **D.** Perspectiva de Gobernanza

### 9. Una empresa está desarrollando un LLM (Large Language Model) para procesar documentos confidenciales de clientes. La empresa debe garantizar un desarrollo e implementación responsables para evitar riesgos potenciales.

¿Qué acciones debe tomar la empresa para asegurar un despliegue responsable de IA del LLM? (Selecciona DOS.)

- · **A.** Ajustar los hiperparámetros del modelo.
- · **B.** Aplicar técnicas de prompt engineering.
- · **C.** Optimizar el rendimiento del LLM aprovechando aceleradores de hardware avanzados.
- ✅ **D.** Implementar verificaciones de métricas de equidad durante la evaluación del modelo.
- ✅ **E.** Abordar el sesgo mejorando la diversidad del conjunto de datos de entrenamiento.

### 10. Una empresa que utiliza IA generativa en una industria regulada desea revisar los resultados para detectar sesgos y contenido tóxico antes de su lanzamiento.

¿Qué técnica se debe utilizar durante la fase de post-procesamiento del ciclo de vida del machine learning?

- ✅ **A.** Human-in-the-loop
- · **B.** Data preprocessing
- · **C.** Fairness constraints
- · **D.** Adversarial training

### 11. Un creador de contenido utiliza IA generativa para producir material de marketing que se parece mucho a textos existentes sin atribución adecuada.

¿Qué desafíos de la IA generativa destaca esta situación?

- · **A.** Disrupción de la naturaleza del trabajo
- · **B.** Alucinaciones
- ✅ **C.** Propiedad Intelectual
- · **D.** Toxicidad

### 12. Una empresa utiliza un modelo de machine learning para recomendar promociones de empleados. El modelo favorece a empleados de ciertos departamentos u orígenes porque los datos de entrenamiento provienen principalmente de esos grupos.

¿Qué tipo de sesgo podría afectar la imparcialidad de las recomendaciones de la herramienta?

- · **A.** Sesgo implícito
- · **B.** Sesgo de automatización
- ✅ **C.** Sesgo de muestreo
- · **D.** Sesgo de reporte

### 13. Una empresa de tecnología está explorando el uso de modelos de IA generativa, como modelos de lenguaje grande (LLMs), para diversas aplicaciones. Sin embargo, la empresa está comprometida a garantizar que estos modelos se desplieguen de acuerdo con los principios de IA responsable.

¿Cuáles de los siguientes son desafíos significativos de la IA generativa que la empresa debe considerar? (Selecciona TRES)

- · **A.** Explicabilidad y transparencia
- ✅ **B.** Propiedad intelectual
- ✅ **C.** Toxicidad
- · **D.** Privacidad y seguridad
- · **E.** Recursos computacionales
- ✅ **F.** Alucinaciones

### 14. Una empresa está considerando implementar modelos de IA generativa para mejorar su sistema de soporte al cliente. Sin embargo, el equipo técnico tiene preocupaciones sobre las posibles desventajas y limitaciones de usar estos modelos en producción. Necesitan identificar los desafíos específicos que pueden surgir al trabajar con IA generativa.

¿Cuáles son algunos desafíos o inconvenientes comunes asociados con el uso de modelos de IA generativa? (Selecciona DOS.)

- ✅ **A.** Hallucination
- ✅ **B.** Knowledge Cutoff
- · **C.** Personalization
- · **D.** Fraud detection
- · **E.** Low Recall

### 15. Una organización planea implementar un sistema de inteligencia artificial (IA) para evaluar y recomendar individuos elegibles para participar en diversas iniciativas de salud pública y programas de bienestar social. El sistema analiza datos de múltiples fuentes, incluyendo datos censales, registros de empleo e información financiera. La organización necesita simplificar el proceso de solicitud y asegurar que los individuos elegibles reciban el apoyo que necesitan.

Se han planteado preocupaciones sobre la calidad de los datos y la confiabilidad del modelo. Para abordar esto, ¿cuáles DOS dimensiones centrales de IA responsable debería enfatizar la organización? (Selecciona DOS)

- ✅ **A.** Veracity y Robustness
- ✅ **B.** Explainability
- · **C.** Privacy y Security
- · **D.** Safety
- · **E.** Controllability

---

[← Volver al índice](./README.md)
