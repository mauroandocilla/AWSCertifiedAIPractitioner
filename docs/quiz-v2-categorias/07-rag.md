# RAG y actualización de conocimiento

_3 preguntas · Quiz v2 (TutorialsDojo) · AWS Certified AI Practitioner (AIF-C01)_

## Concepto clave

Cuándo usar Retrieval Augmented Generation en vez de fine-tuning: la información cambia con el tiempo, se necesita bajo costo y sin reentrenar, y las respuestas deben basarse en una fuente de datos propia y verificable.

## Truco para reconocerlas

Palabras como "evoluciona / cambia con el tiempo", "sin reentrenar", "bajo costo" o "información actualizada / en tiempo real" casi siempre apuntan a RAG, incluso si la pregunta también menciona prompt engineering como parte de la solución final.

## Palabras clave

`evoluciona / cambia con el tiempo` · `sin reentrenar` · `bajo costo`

## Preguntas

### 1. Una empresa de automatización del hogar quiere mejorar su chatbot de atención al cliente, potenciado por un modelo de lenguaje grande (LLM), integrando información de su documentación de productos y base de conocimiento.

¿Qué técnica debería emplear la empresa para lograr este objetivo con un mínimo esfuerzo de desarrollo?

- · **A.** Fine-tuning
- · **B.** Active Learning
- ✅ **C.** RAG (Retrieval Augmented Generation)
- · **D.** Knowledge Graph Integration

**Por qué:** Retrieval Augmented Generation (RAG) mejora las respuestas del LLM haciendo referencia a fuentes de datos externas como la base de conocimiento de una empresa.

**Por qué no las demás:**
- **A.** Puede funcionar, pero exige reentrenar el modelo con datos del producto: más lento y más esfuerzo que RAG.
- **B.** Active Learning es una técnica útil para mejorar de forma iterativa el rendimiento de modelos de machine learning, incluyendo sistemas de IA conversacional.
- **D.** Integrar grafos de conocimiento con LLMs puede ser un enfoque poderoso, pero requiere principalmente un esfuerzo significativo en la construcción del grafo de conocimiento.

### 2. Un equipo de soporte en un negocio de comercio electrónico global busca desplegar un chatbot impulsado por un Modelo de Lenguaje Grande (LLM) para entregar respuestas reales, relevantes y en tiempo real a las preguntas de los clientes.

El chatbot aprovechará documentos de políticas internas, indexados por Amazon Kendra, como base de conocimiento para garantizar que las respuestas sean precisas y se alineen con las directrices.

¿Cuál enfoque logrará estos objetivos de la manera más rentable?

- · **A.** Usar Amazon Lex para construir interfaces conversacionales e integrar el chatbot con los datos de políticas.
- ✅ **B.** Emplear Retrieval-Augmented Generation (RAG) para recuperar información relevante dinámicamente para respuestas en contexto.
- · **C.** Reentrenar el LLM usando los documentos de políticas para ajustar su comprensión.
- · **D.** Activar la función de sugerencia de consultas de Amazon Kendra para ayudar a refinar los resultados de búsqueda del chatbot.

**Por qué:** Esta integración garantiza que la información recuperada por RAG sea tanto relevante como precisa, proporcionando respuestas confiables a consultas de usuarios.

**Por qué no las demás:**
- **A.** Amazon Lex se utiliza principalmente para construir interfaces conversacionales, como chatbots.
- **C.** Reentrenarlo con datos específicos, como documentos de políticas, requeriría recursos computacionales significativos y tiempo.
- **D.** La función de sugerencia de consultas de Kendra simplemente se usa para sugerir posibles términos de búsqueda basados en la entrada del usuario.

### 3. Una empresa ha implementado una solución basada en IA para responder consultas dinámicas relacionadas con sus productos y servicios. Estas consultas evolucionan con el tiempo, y la solución debe adaptarse rápidamente a nueva información. La empresa requiere un sistema eficiente y escalable que proporcione respuestas precisas en tiempo real, minimizando costos operativos.

¿Cuál de las siguientes opciones satisface mejor los requisitos especificados?

- · **A.** Implementar un sistema de procesamiento por lotes que actualice el modelo periódicamente con nuevos datos.
- · **B.** Almacenar datos de contexto en una knowledge base y actualizarla periódicamente a medida que nueva información esté disponible.
- · **C.** Reentrenar continuamente el modelo de IA con nuevos datos para garantizar que el modelo siga siendo relevante y preciso.
- ✅ **D.** Recuperar datos relevantes usando Retrieval Augmented Generation (RAG) y aplicar técnicas de prompt engineering.

**Por qué:** RAG recupera información actualizada en el momento de la consulta sin necesidad de reentrenar el modelo.

**Por qué no las demás:**
- **A.** Las actualizaciones por lotes introducen retraso y no dan la agilidad de una respuesta en tiempo real.
- **B.** Mantener la knowledge base al día no basta sin recuperación dinámica integrada al modelo generativo.
- **C.** Reentrenar continuamente es costoso, lento y no escala para consultas en tiempo real.

---

[← Volver al índice](./README.md)
