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

**Por qué:** **B. Realizar auditorías regulares** -- Las auditorías regulares y el monitoreo continuo del sistema de IA son vitales para verificar su desempeño; **C. Ofuscar información sensible del paciente antes del entrenamiento del modelo** -- Garantizar la privacidad de datos es una piedra angular de la IA responsable, particularmente en salud donde la información del paciente es extremadamente sensible.

**Por qué no las demás:**
- **A.** Excluir pacientes con condiciones raras de los datos de entrenamiento solo puede introducir sesgos significativos y potencialmente llevar a diagnósticos inexactos para estos pacientes.
- **D.** Usar modelos pre-entrenados de terceros sin entender su funcionamiento interno.
- **E.** Usar registros médicos históricos sin preprocesamiento o anonimización de información sensible del paciente típicamente violaría las regulaciones HIPAA y los principios de IA responsable.

### 2. Una institución de investigación ha implementado una solución de IA generativa dentro de su sistema. El equipo de cumplimiento normativo debe garantizar que la solución cumpla con los estándares necesarios para proteger la confidencialidad, integridad y disponibilidad de los datos a los que accede la IA. Esto es particularmente importante ya que la institución maneja datos sensibles de investigación federal.

¿Qué estándares garantizarán que la solución cumpla con los requisitos regulatorios del gobierno estadounidense?

- · **A.** Federal Risk and Authorization Management Program (FedRAMP)
- ✅ **B.** National Institute of Standards and Technology (NIST)
- · **C.** Payment Card Industry Data Security Standard (PCI-DSS)
- · **D.** Health Insurance Portability and Accountability Act (HIPAA)

**Por qué:** La Publicación Especial NIST 1800-26 proporciona principios aplicables para aumentar la seguridad y privacidad de los sistemas de información.

**Por qué no las demás:**
- **A.** Se enfoca simplemente en servicios en la nube para agencias federales.
- **C.** Se enfoca principalmente en asegurar transacciones de tarjetas de crédito y proteger datos de titulares de tarjetas.
- **D.** Solo aborda la protección de información de salud y privacidad de pacientes en entornos de atención médica.

### 3. Un especialista en IA está desarrollando un modelo de IA para un sistema de aprobación de préstamos y desea asegurar su equidad y precisión. Sin embargo, las pruebas revelaron problemas con el desempeño del modelo y su proceso de toma de decisiones.

¿Cuáles son las dimensiones centrales de la IA responsable que coinciden con las siguientes descripciones relacionadas con el desarrollo del modelo de machine learning? Cada concepto de IA debe ser elegido solo una vez. (Selecciona CUATRO.)

| Elemento | Respuesta correcta | Por qué |
|---|---|---|
| Garantizar que el proceso de toma de decisiones del modelo sea transparente y comprensible. | **Transparencia** | Documentar y hacer visible cómo funciona el modelo es la definición de transparencia |
| Garantizar que el modelo no produzca efectos negativos nocivos o no deseados. | **Seguridad** | Evitar daño o efectos no deseados es la definición de seguridad |
| Proporcionar razones claras y comprensibles para cada decisión tomada por el modelo. | **Explicabilidad** | Justificar cada decisión individual del modelo es explicabilidad, distinto de la transparencia general del sistema |
| Garantizar que los resultados del modelo sean justos y equitativos para todos los solicitantes. | **Equidad** | Tratar a todos los solicitantes de forma imparcial es la definición de equidad |

### 4. Una empresa está integrando diferentes tecnologías de IA generativa para mejorar sus operaciones internas e interacciones con clientes. La empresa debe emparejar cada aplicación de IA con el principio de IA responsable apropiado para asegurar una integración ética y alineación con prácticas de IA responsable.

Selecciona el principio de IA responsable que mejor coincida con cada descripción de prácticas de aplicación de IA. (Selecciona TRES.)

| Elemento | Respuesta correcta | Por qué |
|---|---|---|
| La aplicación asegura que las respuestas de atención al cliente sean imparciales y justas, evitando cualquier forma de discriminación o prejuicio. | **Fairness** | Evitar discriminación y sesgo en las respuestas es la definición de fairness |
| La empresa comparte abiertamente información sobre el funcionamiento general del sistema de IA, las fuentes de datos y el proceso de desarrollo utilizado para generar recomendaciones de diseño de nuevos productos. | **Transparency** | Compartir abiertamente cómo funciona el sistema y sus datos es transparency |
| La aplicación está diseñada para prevenir el acceso no autorizado a información sensible mientras genera recomendaciones personalizadas para clientes. | **Privacy and security** | Prevenir accesos no autorizados a información sensible es privacy and security |

_Distractor: Safety (previene daño general), Controllability (control sobre las operaciones) y Explainability (explicar decisiones puntuales) no coinciden con ninguno de los tres escenarios descritos._

### 5. Una organización financiera está planeando integrar servicios de inteligencia artificial generativa (IA generativa) en su flujo de trabajo para mejorar el soporte al cliente con capacidades de procesamiento de lenguaje natural. La empresa está interesada en garantizar que sus modelos de IA sean transparentes, justos y responsables. Buscan recursos para entender las implicaciones éticas y el uso responsable de los servicios de IA.

¿Cuál sería el servicio de AWS más apropiado para esta tarea?

- · **A.** AWS Marketplace
- · **B.** Amazon Polly
- · **C.** Amazon Comprehend
- ✅ **D.** AWS AI Service Cards

**Por qué:** AWS AI Service Cards proporciona información importante sobre consideraciones éticas, transparencia e uso previsto de los servicios de IA de AWS.

**Por qué no las demás:**
- **A.** Es solo una tienda en línea donde los clientes pueden encontrar, comprar e iniciar inmediatamente servicios y software que se ejecutan en AWS.
- **B.** Es solo un servicio que convierte texto en voz natural, y no se enfoca en ética de la IA.
- **C.** Es simplemente un servicio de procesamiento de lenguaje natural (NLP) que utiliza machine learning para encontrar información y relaciones en texto.

### 6. Una plataforma de reclutamiento desarrolló un sistema de evaluación de candidatos basado en IA. La plataforma entrenó el modelo usando un dataset grande, pero el dataset estaba sesgado y carecía de representación de diversos grupos demográficos.

¿Qué aspecto de la IA responsable enfatiza este escenario?

- ✅ **A.** Equidad
- · **B.** Controlabilidad
- · **C.** Transparencia
- · **D.** Veracidad y Robustez

**Por qué:** Lograr equidad requiere prestar atención cuidadosa a los datos utilizados para el entrenamiento, asegurando que sean diversos, representativos y que no refuercen sesgos históricos.

**Por qué no las demás:**
- **B.** Se refiere principalmente a la capacidad de guiar, restringir o influir en el comportamiento y los resultados de un sistema de IA.
- **C.** Implica hacer que los modelos de IA y sus procesos de toma de decisiones sean comprensibles para los usuarios e interesados.
- **D.** Se refiere simplemente a la capacidad de un sistema de IA para manejar un amplio rango de inputs y funcionar de manera confiable.

### 7. Una organización planea implementar un sistema de inteligencia artificial (IA) para evaluar y recomendar individuos elegibles para participar en diversas iniciativas de salud pública y programas de asistencia social. El sistema analiza datos de múltiples fuentes, incluyendo datos censales, registros de empleo e información financiera. La organización necesita agilizar el proceso de solicitud y garantizar que los individuos elegibles reciban el apoyo que necesitan.

¿Cuál es la dimensión central del AI responsable que la organización debe priorizar para asegurar que el modelo de machine learning se alinee con principios éticos y proporcione claridad sobre cómo se toman las decisiones?

- · **A.** Privacidad y Seguridad
- · **B.** Equidad
- ✅ **C.** Transparencia
- · **D.** Seguridad

**Por qué:** Hace visibles y comprensibles la lógica y el proceso de decisión del sistema para reguladores y usuarios, que es justo lo que exige justificar elegibilidad en un programa social.

**Por qué no las demás:**
- **A.** Se enfoca en proteger datos y confidencialidad, no en explicar cómo se toman las decisiones.
- **B.** Garantiza trato imparcial entre grupos, pero no aborda que el proceso de decisión sea comprensible.
- **D.** Busca que el sistema no cause daño, no que su funcionamiento sea comprensible.

### 8. Una organización planea aprovechar la IA generativa para crear contenido de marketing personalizado para sus campañas.

¿Cuál es la capacidad fundamental de IA esencial para garantizar el uso efectivo y responsable de la IA generativa?

- · **A.** Perspectiva de Negocio
- · **B.** Perspectiva de Seguridad
- · **C.** Perspectiva de Personas
- ✅ **D.** Perspectiva de Gobernanza

**Por qué:** La capacidad fundamental requerida para garantizar el uso efectivo y responsable de la IA generativa es la Perspectiva de Gobernanza.

**Por qué no las demás:**
- **A.** Cubre objetivos comerciales y casos de uso, pero no define las políticas que rigen el uso responsable.
- **B.** La seguridad protege los sistemas de IA, pero no cubre por sí sola la gobernanza responsable.
- **C.** Importa para entender el impacto humano, pero no aporta el marco de políticas necesario.

### 9. Una empresa está desarrollando un LLM (Large Language Model) para procesar documentos confidenciales de clientes. La empresa debe garantizar un desarrollo e implementación responsables para evitar riesgos potenciales.

¿Qué acciones debe tomar la empresa para asegurar un despliegue responsable de IA del LLM? (Selecciona DOS.)

- · **A.** Ajustar los hiperparámetros del modelo.
- · **B.** Aplicar técnicas de prompt engineering.
- · **C.** Optimizar el rendimiento del LLM aprovechando aceleradores de hardware avanzados.
- ✅ **D.** Implementar verificaciones de métricas de equidad durante la evaluación del modelo.
- ✅ **E.** Abordar el sesgo mejorando la diversidad del conjunto de datos de entrenamiento.

**Por qué:** **D. Implementar verificaciones de métricas de equidad durante la evaluación del modelo** -- Implementar verificaciones de equidad durante la evaluación permite identificar y mitigar sesgos antes de desplegar el LLM en entornos de producción; **E. Abordar el sesgo mejorando la diversidad del conjunto de datos de entrenamiento** -- Al mejorar la diversidad del conjunto de datos de entrenamiento, el LLM se expone a una gama más amplia de perspectivas.

**Por qué no las demás:**
- **A.** Puede mejorar la precisión, pero no garantiza equidad ni un despliegue responsable.
- **B.** Mejora la calidad de las salidas del LLM, pero no mitiga sesgo ni riesgos de despliegue.
- **C.** Mejora la eficiencia de cómputo, pero no aborda el sesgo ni el riesgo con datos confidenciales.

### 10. Una empresa que utiliza IA generativa en una industria regulada desea revisar los resultados para detectar sesgos y contenido tóxico antes de su lanzamiento.

¿Qué técnica se debe utilizar durante la fase de post-procesamiento del ciclo de vida del machine learning?

- ✅ **A.** Human-in-the-loop
- · **B.** Data preprocessing
- · **C.** Fairness constraints
- · **D.** Adversarial training

**Por qué:** Si bien se pueden emplear varias técnicas para lograr esto, Human-in-the-loop (HITL) destaca como un método directo y efectivo.

**Por qué no las demás:**
- **B.** Solo ocurre antes de que se entrene el modelo, no durante la fase de post-procesamiento.
- **C.** Se aplican durante el proceso de entrenamiento del modelo para guiarlo hacia la generación de resultados más equitativos aplicando ciertos criterios de imparcialidad.
- **D.** Es una técnica utilizada durante la fase de entrenamiento para hacer que el modelo sea más resistente a entradas adversariales o manipulaciones de datos.

### 11. Un creador de contenido utiliza IA generativa para producir material de marketing que se parece mucho a textos existentes sin atribución adecuada.

¿Qué desafíos de la IA generativa destaca esta situación?

- · **A.** Disrupción de la naturaleza del trabajo
- · **B.** Alucinaciones
- ✅ **C.** Propiedad Intelectual
- · **D.** Toxicidad

**Por qué:** Propiedad Intelectual es un desafío que surge cuando los modelos de IA generativa producen contenido que imita o reproduce elementos de sus datos de entrenamiento.

**Por qué no las demás:**
- **A.** Típicamente se refiere a cómo la IA generativa puede cambiar roles laborales o automatizar tareas, no a cuestiones de propiedad y atribución.
- **B.** Se refiere principalmente al fenómeno donde los modelos de IA generativa producen resultados sin sentido, inconsistentes o factualmente incorrectos.
- **D.** Típicamente se refiere al potencial de los sistemas de IA para generar o amplificar contenido dañino, ofensivo o abusivo.

### 12. Una empresa utiliza un modelo de machine learning para recomendar promociones de empleados. El modelo favorece a empleados de ciertos departamentos u orígenes porque los datos de entrenamiento provienen principalmente de esos grupos.

¿Qué tipo de sesgo podría afectar la imparcialidad de las recomendaciones de la herramienta?

- · **A.** Sesgo implícito
- · **B.** Sesgo de automatización
- ✅ **C.** Sesgo de muestreo
- · **D.** Sesgo de reporte

**Por qué:** Abordar el sesgo de muestreo requiere asegurar que el conjunto de datos de entrenamiento sea diverso y representativo de toda la población.

**Por qué no las demás:**
- **A.** Se refiere a actitudes o estereotipos inconscientes que afectan la toma de decisiones humanas.
- **B.** Este tipo de sesgo simplemente se refiere a la tendencia de las personas a depender excesivamente de sistemas automatizados y confiar en sus decisiones.
- **D.** Solo ocurre cuando ciertos puntos de datos o resultados se reportan o enfatizan selectivamente mientras otros se omiten.

### 13. Una empresa de tecnología está explorando el uso de modelos de IA generativa, como modelos de lenguaje grande (LLMs), para diversas aplicaciones. Sin embargo, la empresa está comprometida a garantizar que estos modelos se desplieguen de acuerdo con los principios de IA responsable.

¿Cuáles de los siguientes son desafíos significativos de la IA generativa que la empresa debe considerar? (Selecciona TRES)

- · **A.** Explicabilidad y transparencia
- ✅ **B.** Propiedad intelectual
- ✅ **C.** Toxicidad
- · **D.** Privacidad y seguridad
- · **E.** Recursos computacionales
- ✅ **F.** Alucinaciones

**Por qué:** **B. Propiedad intelectual** -- el contenido generado puede imitar o reproducir material protegido por derechos de autor de los datos de entrenamiento; **C. Toxicidad** -- definir y detectar contenido ofensivo es subjetivo y varía según contexto y cultura, complicando su mitigación; **F. Alucinaciones** -- los LLM generan texto por patrones, no por verificación de hechos, y pueden inventar información convincente pero falsa.

**Por qué no las demás:**
- **A.** Es relevante para entender decisiones de IA, pero no es un riesgo específico de la IA generativa.
- **D.** Es una preocupación aplicable a cualquier sistema de IA, no algo único de la IA generativa.
- **E.** Es un aspecto operativo de ejecutar modelos, no un riesgo ético o legal propio de la IA generativa.

### 14. Una empresa está considerando implementar modelos de IA generativa para mejorar su sistema de soporte al cliente. Sin embargo, el equipo técnico tiene preocupaciones sobre las posibles desventajas y limitaciones de usar estos modelos en producción. Necesitan identificar los desafíos específicos que pueden surgir al trabajar con IA generativa.

¿Cuáles son algunos desafíos o inconvenientes comunes asociados con el uso de modelos de IA generativa? (Selecciona DOS.)

- ✅ **A.** Hallucination
- ✅ **B.** Knowledge Cutoff
- · **C.** Personalization
- · **D.** Fraud detection
- · **E.** Low Recall

**Por qué:** **A. Hallucination** -- Hallucination es una preocupación significativa al usar modelos de IA generativa; **B. Knowledge Cutoff** -- Otra limitación de la IA generativa es el Knowledge Cutoff.

**Por qué no las demás:**
- **C.** Solo se refiere a adaptar contenido o experiencias según las preferencias o comportamientos individuales.
- **D.** Está típicamente asociada con modelos de clasificación o detección de anomalías, no con IA generativa.
- **E.** Es solo una métrica de desempeño usualmente asociada con modelos de clasificación, donde el modelo no logra identificar instancias relevantes.

### 15. Una organización planea implementar un sistema de inteligencia artificial (IA) para evaluar y recomendar individuos elegibles para participar en diversas iniciativas de salud pública y programas de bienestar social. El sistema analiza datos de múltiples fuentes, incluyendo datos censales, registros de empleo e información financiera. La organización necesita simplificar el proceso de solicitud y asegurar que los individuos elegibles reciban el apoyo que necesitan.

Se han planteado preocupaciones sobre la calidad de los datos y la confiabilidad del modelo. Para abordar esto, ¿cuáles DOS dimensiones centrales de IA responsable debería enfatizar la organización? (Selecciona DOS)

- ✅ **A.** Veracity y Robustness
- ✅ **B.** Explainability
- · **C.** Privacy y Security
- · **D.** Safety
- · **E.** Controllability

**Por qué:** **A. Veracity y Robustness** -- Veracity y Robustness: Asegurar que los sistemas de IA funcionan de manera confiable y consistente y son resilientes ante posibles fallos o ataques adversariales; **B. Explainability** -- Explainability: Proporcionar explicaciones claras e interpretabilidad de cómo los sistemas de IA toman decisiones, permitiendo rendición de cuentas y confianza.

**Por qué no las demás:**
- **C.** Protege los datos contra accesos no autorizados, no la calidad o integridad de esos datos.
- **D.** Safety solo se enfoca en asegurar que el sistema de IA no cause daño o consecuencias no intencionadas.
- **E.** Controllability gobierna el comportamiento del sistema dentro de límites definidos, no la calidad de los datos.

---

[← Volver al índice](./README.md)
