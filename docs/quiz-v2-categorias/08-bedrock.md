# Amazon Bedrock: uso, throughput, Agents y Guardrails

_17 preguntas · Quiz v2 (TutorialsDojo) · AWS Certified AI Practitioner (AIF-C01)_

## Concepto clave

El flujo de trabajo específico de Bedrock: elegir un foundation model, usar el Playground/PartyRock para experimentar, los modos de throughput (On-Demand vs. Provisioned), Agents for Bedrock para ejecutar acciones, y los distintos tipos de Guardrails (content filters, denied topics, word filters, contextual grounding check).

## Truco para reconocerlas

Uso esporádico o impredecible -> On-Demand. Uso constante que necesita capacidad garantizada -> Provisioned Throughput. "El modelo ejecuta acciones o recupera datos por sí mismo" -> Agents for Bedrock. Cuando la pregunta lista varios tipos de filtro dentro de Guardrails, están pidiendo distinguir el tipo específico, no solo reconocer que "hay que usar Guardrails".

## Palabras clave

`Bedrock` · `On-Demand vs. Provisioned` · `Guardrails`

## Preguntas

### 1. Un equipo de marketing planea utilizar Amazon Bedrock para generar contenido personalizado de correos electrónicos para diferentes segmentos de clientes.

¿Qué debe hacer el equipo PRIMERO para comenzar con Amazon Bedrock?

- · **A.** Elegir el límite de tokens de entrada para la generación de contenido.
- · **B.** Configurar las credenciales de API para acceder.
- ✅ **C.** Seleccionar un foundation model (FM) adecuado.
- · **D.** Configurar el formato de salida del contenido generado.

**Por qué:** Todo lo demás (tokens, credenciales, formato de salida) depende de qué modelo se eligió primero, ya que cada FM tiene capacidades distintas.

**Por qué no las demás:**
- **A.** Es un paso posterior: primero hay que elegir el modelo que se ajuste al caso de uso.
- **B.** Es necesario para usar Bedrock, pero no es el primer paso del flujo de trabajo.
- **D.** Solo tiene sentido una vez que el foundation model ya genera el contenido deseado.

### 2. Un equipo de ciencia de datos necesita una interfaz amigable para experimentar rápidamente con modelos base de Amazon Bedrock en un entorno que no es de producción.

¿Qué debería usarse?

- · **A.** Endpoints de Amazon SageMaker
- ✅ **B.** PartyRock, un Bedrock Playground
- · **C.** Amazon EC2 serie Trn
- · **D.** Amazon SageMaker Studio

**Por qué:** En el escenario dado, donde un equipo de ciencia de datos está explorando modelos base de Amazon Bedrock en un entorno que no es de producción para probar diferentes modelos de procesamiento.

**Por qué no las demás:**
- **A.** Simplemente se usa para implementar modelos de machine learning en entornos de producción donde pueden servir predicciones en tiempo real.
- **C.** Está diseñada para entrenamiento de machine learning a escala, particularmente para modelos de deep learning, y proporciona potente aceleración de hardware.
- **D.** Si bien SageMaker Studio es un entorno de desarrollo integrado (IDE) completo y exhaustivo para construir, entrenar e implementar modelos de machine learning.

### 3. Una empresa de retail ha aumentado un foundation model usando Amazon Bedrock para responder consultas de clientes sobre sus productos y promociones. La empresa utiliza una Knowledge Base en Bedrock para mejorar las respuestas del modelo con información relevante, y usa Amazon CloudWatch Logs para registrar las invocaciones del modelo.

Ahora la empresa desea extender el desempeño del modelo en un nuevo lote de consultas actualizando la información disponible para el modelo.

¿Qué debe hacer la empresa para habilitar a Bedrock el acceso al nuevo conjunto de datos?

- · **A.** Subir el conjunto de datos a Amazon DynamoDB y otorgar acceso completo a la tabla a Bedrock.
- · **B.** Copiar el conjunto de datos a una instancia de Amazon EC2 y configurar la Knowledge Base para leerlo a través de SSH.
- · **C.** Almacenar el conjunto de datos en Amazon Elastic File System (Amazon EFS) y vincularlo al modelo de Bedrock.
- ✅ **D.** Subir el conjunto de datos al bucket de Amazon S3 correspondiente y resincronizar la Knowledge Base.

**Por qué:** Se debe subir el nuevo conjunto de datos al bucket de Amazon S3 asociado cuando se utiliza Amazon Bedrock con una Knowledge Base.

**Por qué no las demás:**
- **A.** DynamoDB es una base de datos NoSQL que no se utiliza típicamente como backend para una Knowledge Base en Amazon Bedrock.
- **B.** Amazon Bedrock no ingiere ni accede directamente a datos de una instancia de EC2 a través de SSH para actualizar la Knowledge Base.
- **C.** Amazon EFS no se utiliza típicamente con Amazon Bedrock para la ingesta de datos o almacenamiento de Knowledge Base.

### 4. Un servicio de streaming usa Amazon Bedrock para ejecutar un modelo de detección que marca contenido inapropiado en comentarios de usuarios. El servicio necesita una solución para filtrar contenido inapropiado y cumplir con sus políticas de moderación, además de alertar si ocurren violaciones de política.

¿Cuál es el enfoque MÁS apropiado para cumplir con los requisitos?

- · **A.** Usar Amazon SageMaker Clarify para detectar sesgos en la salida del modelo y marcar contenido inapropiado.
- · **B.** Configurar Amazon SNS para enviar notificaciones cuando el modelo detecte contenido inapropiado.
- · **C.** Usar la clasificación personalizada de Amazon Comprehend para detectar y filtrar contenido inapropiado. Configurar alarmas de Amazon CloudWatch para violaciones de política.
- ✅ **D.** Implementar filtrado de contenido usando Bedrock Guardrails de Amazon Bedrock. Configurar alarmas de Amazon CloudWatch para activar notificaciones cuando haya violaciones de política.

**Por qué:** Bedrock Guardrails filtra el contenido directamente en el modelo, y CloudWatch permite alertar en tiempo real cuando hay violaciones de política.

**Por qué no las demás:**
- **A.** Clarify detecta sesgo en el modelo, no está pensado para moderar contenido inapropiado.
- **B.** SNS solo distribuye notificaciones; no detecta ni filtra contenido por sí solo.
- **C.** Comprehend puede clasificar texto, pero requiere mucha más personalización que Guardrails para igualar esa función.

### 5. Una startup tecnológica está realizando fine-tuning en un large language model (LLM) de Amazon Bedrock para crear un modelo personalizado para una aplicación de atención al cliente. Como parte del proceso, el equipo aplica técnicas de fine-tuning del modelo usando datos etiquetados de soporte al cliente para adaptar el modelo base a su dominio específico. El modelo se desplegará en producción para manejar un flujo constante de solicitudes de usuarios, con datos almacenados en Amazon S3 para monitoreo.

¿Cuál solución de AWS ofrece el enfoque más rentable para estos requisitos?

- ✅ **A.** Configurar el modelo con Provisioned Throughput en Bedrock.
- · **B.** Desplegar el modelo usando Amazon EC2 con Elastic Load Balancing.
- · **C.** Aprovechar On-Demand Throughput para el modelo en Bedrock.
- · **D.** Usar Amazon SageMaker AI para alojar el modelo y escalarlo con un grupo de Auto Scaling de Amazon.

**Por qué:** Al seleccionar Provisioned Throughput, las organizaciones pueden lograr un rendimiento predecible y una gestión de costos eficiente.

**Por qué no las demás:**
- **B.** Las instancias EC2 con Elastic Load Balancing se enfocan principalmente en distribuir tráfico y escalar recursos de computación manualmente.
- **C.** On-Demand Throughput típicamente es más rentable para cargas de trabajo con tráfico variable o impredecible, pero en este escenario.
- **D.** SageMaker simplemente no está diseñado para manejar modelos de IA con throughput garantizado de la manera que lo hace Amazon Bedrock.

### 6. Una empresa desea personalizar un modelo base usando Amazon Bedrock.

Selecciona y ordena los requisitos previos para personalizar un modelo base. Cada paso debe seleccionarse una sola vez. (Selecciona y ordena TRES.)

| Elemento | Respuesta correcta | Por qué |
|---|---|---|
| Paso 1: | **Prepara el conjunto de datos de entrenamiento** | Antes de personalizar cualquier modelo hace falta tener listo el dataset de entrenamiento |
| Paso 2: | **Crea un trabajo de fine-tuning o pre-training** | Con los datos ya preparados, el siguiente paso es lanzar el trabajo de fine-tuning o pre-training |
| Paso 3: | **Compra Provisioned Throughput** | Una vez creado el modelo personalizado, hay que comprar Provisioned Throughput para poder usarlo en inferencia |

_Distractor: Establecer el máximo de tokens y configurar KMS son pasos posteriores u opcionales, y evaluar los resultados del entrenamiento no es un requisito obligatorio del flujo de personalización._

### 7. Una startup está desarrollando una nueva aplicación impulsada por IA usando Amazon Bedrock. Debido a patrones de uso impredecibles, quieren minimizar los costos iniciales y pagar solo por los recursos que consumen.

¿Cuál es el modelo de precios MÁS adecuado en Amazon Bedrock para satisfacer las necesidades de la empresa?

- ✅ **A.** On-Demand
- · **B.** Provisioned Throughput
- · **C.** Batch
- · **D.** Model evaluation

**Por qué:** On-Demand permite que los clientes paguen solo por los recursos informáticos que utilizan.

**Por qué no las demás:**
- **B.** Este modelo de precios está diseñado para cargas de trabajo de inferencia grandes y consistentes donde se requiere rendimiento garantizado.
- **C.** Este modelo de precios está diseñado solo para realizar un gran número de predicciones al mismo tiempo.
- **D.** Este modelo está diseñado principalmente para probar y evaluar el rendimiento de modelos de machine learning.

### 8. Una empresa desarrolla una aplicación de IA generativa usando Amazon Bedrock, aprovechando Amazon Comprehend para analizar el sentimiento de la entrada del usuario. Quiere implementar Bedrock Guardrails para filtrar contenido dañino o inapropiado tanto de la entrada del usuario como de las respuestas generadas por el modelo.

¿Cuáles son los tipos de contenido que pueden ser detectados y filtrados por las guardrails? (Selecciona DOS.)

- · **A.** Apuestas
- · **B.** Desinformación
- · **C.** Discriminación
- ✅ **D.** Violencia
- ✅ **E.** Odio

**Por qué:** **D. Violencia** -- violencia es una de las categorías explícitas que filtran los content filters de Guardrails; **E. Odio** -- odio es una de las categorías explícitas que filtran los content filters de Guardrails.

**Por qué no las demás:**
- **A.** No es una de las categorías de contenido dañino que cubren los content filters de Guardrails.
- **B.** No está entre las categorías específicas que filtran los content filters de Guardrails.
- **C.** No es una de las categorías explícitas que Guardrails filtra por content filters.

### 9. Una empresa está utilizando un modelo de IA generativa para crear un asistente virtual. De vez en cuando, los outputs del modelo pueden contener contenido inapropiado o inseguro.

Identifica los Bedrock Guardrails de Amazon correctos para cada paso de mitigación. Cada política de filtro debe usarse una sola vez. (Selecciona CUATRO.)

| Elemento | Respuesta correcta | Por qué |
|---|---|---|
| Filtra prompts o respuestas del modelo que contengan contenido ofensivo como violencia, insultos o ataques de prompt. | **Content Filters** | Content Filters bloquea contenido dañino por categorías predefinidas como violencia o insultos |
| Evita discutir temas relacionados con asesoramiento de inversión ilegal o asesoramiento legal. | **Denied Topics** | Denied Topics bloquea temas específicos definidos de antemano como no deseados |
| Identifica y filtra el uso de términos particulares dañinos. | **Word filters** | Word filters bloquea palabras o frases exactas consideradas ofensivas |
| Identifica y elimina datos en las respuestas del modelo que no están respaldados por el material fuente proporcionado. | **Contextual grounding check** | Contextual grounding check detecta cuando la respuesta no está fundamentada en la fuente y la filtra |

### 10. Una empresa está planeando construir un chatbot para analizar reseñas de clientes usando large language models (LLMs). La empresa está evaluando varios LLMs para encontrar el que mejor prediga si una reseña es positiva, negativa o neutral, utilizando métricas de fairness para garantizar predicciones imparciales.

La empresa también desea asegurar que la solución elimine información sensible antes del procesamiento para prevenir prompt leaking y protegerse contra la exposición inadvertida de datos sensibles de clientes. Este paso es crucial para prevenir consecuencias no deseadas y cumplir con las regulaciones de privacidad.

¿Cuál de las siguientes opciones cumplirá con los requisitos? (Selecciona DOS.)

- ✅ **A.** Amazon Bedrock Guardrails
- · **B.** Amazon SageMaker AI Ground Truth
- ✅ **C.** Amazon Bedrock Model Evaluation
- · **D.** Amazon Lex
- · **E.** Amazon Comprehend

**Por qué:** **A. Amazon Bedrock Guardrails** -- Guardrails filtra contenido dañino y enmascara información sensible (PII) en las respuestas del modelo; **C. Amazon Bedrock Model Evaluation** -- Model Evaluation permite comparar el desempeño y sesgo de distintos foundation models antes de elegir uno.

**Por qué no las demás:**
- **B.** Ground Truth etiqueta datos con revisión humana, no evalúa modelos ni filtra información sensible.
- **D.** Lex gestiona interfaces conversacionales, no analiza sentimiento ni protege datos sensibles.
- **E.** Comprehend extrae información de texto, pero no evalúa foundation models ni elimina datos sensibles automáticamente.

### 11. Una empresa de comercio electrónico tiene un equipo de atención al cliente que ayuda a los compradores proporcionando recomendaciones de productos personalizadas basadas en la ubicación de cada comprador e historial de navegación. La empresa quiere automatizar este proceso utilizando foundation models (FMs). Para garantizar recomendaciones precisas, la solución debe integrarse con knowledge bases que almacenan información de inventario y catálogo según la ubicación.

¿Cuál es el servicio de AWS más adecuado para esta tarea?

- · **A.** Amazon Rekognition
- ✅ **B.** Amazon Bedrock
- · **C.** Amazon Transcribe
- · **D.** Amazon Lex

**Por qué:** Para casos de uso como automatizar sugerencias personalizadas de productos basadas en la ubicación del cliente, Amazon Bedrock es una solución ideal.

**Por qué no las demás:**
- **A.** Se enfoca principalmente en análisis de imágenes y videos, como reconocimiento facial, detección de objetos y reconocimiento de actividades.
- **C.** Está diseñada para reconocimiento automático de voz (ASR), convirtiendo audio en texto.
- **D.** Solo se utiliza para habilitar la creación de interfaces conversacionales, como chatbots y asistentes de voz.

### 12. Un investigador de IA utiliza un modelo fundacional de Amazon Bedrock para generar resúmenes de sesiones de chat de soporte técnico. El investigador también utiliza una Bedrock Knowledge Base para mejorar la calidad y el contexto de los resúmenes. Se necesita un mecanismo para guardar registros detallados de invocaciones, permitiendo monitorear tanto los datos de entrada como los de salida del modelo.

¿Cuál método cumplirá con este requisito?

- ✅ **A.** Configurar el logging de invocaciones de modelo dentro de Bedrock.
- · **B.** Implementar AWS Audit Manager para almacenar y rastrear registros de invocaciones de modelo.
- · **C.** Usar AWS CloudTrail para buscar actividades de API relacionadas con invocaciones de modelo.
- · **D.** Usar el logging de invocaciones de modelo en AWS Lambda.

**Por qué:** Sin embargo, el logging de invocaciones sigue siendo el método principal para capturar información detallada sobre las interacciones con el modelo, incluyendo datos de entrada y salida.

**Por qué no las demás:**
- **B.** Está diseñado típicamente para automatizar auditorías con el fin de simplificar los informes de cumplimiento.
- **C.** Aunque CloudTrail puede rastrear el historial de llamadas a API, no proporciona registros detallados de datos de entrada y salida para invocaciones de modelo.
- **D.** Esta opción es irrelevante ya que las invocaciones de modelo en Amazon Bedrock no simplemente utilizan AWS Lambda para logging; Bedrock tiene sus propios.

### 13. Una agencia de marketing está pilotando una herramienta de IA generativa para crear emails personalizados y publicaciones en redes sociales. El uso es ocasional y varía según la campaña. La agencia quiere una solución completamente gestionada que se escale con demanda impredecible y ofrezca precios de pago por uso sin compromisos iniciales.

¿Cuál es la opción de compra de Amazon Bedrock que mejor se ajusta a estos requisitos?

- · **A.** Marketplace models
- ✅ **B.** On-Demand Throughput
- · **C.** Provisioned Throughput
- · **D.** Custom Model Import

**Por qué:** Es pago por uso, escala automáticamente y no requiere compromiso de capacidad, ideal para uso bajo y variable.

**Por qué no las demás:**
- **A.** Implica más configuración manual y costos variables frente a la simplicidad nativa de On-Demand.
- **C.** Reserva capacidad dedicada; solo conviene con uso constante y alto, no bajo y fluctuante.
- **D.** Sirve para alojar modelos propios altamente especializados, agregando complejidad innecesaria aquí.

### 14. Una empresa está desarrollando una aplicación de machine learning con Amazon Bedrock. Necesita un throughput consistente y una capacidad fija para garantizar un rendimiento confiable y eficiencia de costos.

¿Qué modelo de precios debería elegir la empresa?

- · **A.** Latency optimized
- ✅ **B.** Provisioned Throughput
- · **C.** Batch
- · **D.** Model customization

**Por qué:** Para esta empresa, Provisioned Throughput es la mejor opción porque proporciona un servicio confiable e ininterrumpido con capacidad consistente.

**Por qué no las demás:**
- **A.** Se enfoca en reducir los tiempos de respuesta para modelos específicos, como Amazon Nova Pro y Claude 3.5 Haiku.
- **C.** Está diseñada típicamente para procesar grandes volúmenes de solicitudes en bloque, proporcionando predicciones en un único archivo de salida.
- **D.** Se enfoca principalmente en personalizar modelos y cobra según los tokens de entrenamiento y el almacenamiento del modelo.

### 15. Una empresa financiera utiliza Amazon Bedrock para implementar un chatbot basado en IA generativa que proporciona asesoramiento financiero personalizado y responde consultas relacionadas. Como parte de su marco de gobernanza descrito en la Matriz de Evaluación de Seguridad de IA Generativa de AWS, la empresa necesita una solución para controlar y evaluar el contenido generado por el chatbot a fin de garantizar precisión, idoneidad y cumplimiento de estándares regulatorios.

¿Cuál herramienta de AWS ayudará a garantizar que el asesoramiento del chatbot cumpla con los estándares de precisión y cumplimiento regulatorio?

- · **A.** Bedrock Agents
- · **B.** Amazon Lex
- · **C.** Amazon Comprehend
- ✅ **D.** Guardrails for Bedrock

**Por qué:** Además, Guardrails for Amazon Bedrock proporciona una forma de implementar reglas de moderación de contenido personalizables y garantizar que el comportamiento del modelo de IA sea predecible y confiable.

**Por qué no las demás:**
- **A.** Orquesta agentes autónomos, pero no impone reglas de precisión o cumplimiento sobre lo que genera el modelo.
- **B.** Este servicio simplemente crea interfaces conversacionales, como chatbots, que pueden interactuar con usuarios mediante texto y voz.
- **C.** Es un servicio de procesamiento de lenguaje natural (NLP) que permite principalmente análisis de texto, incluyendo análisis de sentimiento.

### 16. Un equipo de atención al cliente ayuda a las personas que llaman ofreciendo detalles de productos y sugerencias personalizadas según la ubicación geográfica del cliente. La empresa está explorando el uso de foundation models (FMs) para simplificar y automatizar este flujo de trabajo. La empresa utiliza few-shot learning para adaptar rápidamente el modelo a nuevos catálogos regionales con datos de ejemplo mínimos.

¿Cuál servicio de AWS sería la solución más apropiada para este caso de uso?

- · **A.** Amazon Polly
- ✅ **B.** Amazon Bedrock
- · **C.** Amazon Macie
- · **D.** Amazon SageMaker AI

**Por qué:** Esta flexibilidad hace que Amazon Bedrock sea una opción sólida para empresas que buscan mejorar la productividad, optimizar la experiencia del cliente y automatizar procesos complejos mediante IA.

**Por qué no las demás:**
- **A.** Amazon Polly es un servicio de síntesis de voz que convierte texto en voz natural.
- **C.** Amazon Macie es principalmente un servicio de seguridad de datos que utiliza machine learning para descubrir y clasificar datos sensibles en AWS.
- **D.** Amazon SageMaker es un servicio integral de machine learning para crear, entrenar e implementar modelos personalizados.

### 17. Un banco minorista grande está creando un asistente virtual impulsado por IA para reportar y disputar transacciones fraudulentas. El asistente debe recuperar detalles de cuentas y transacciones, enviar reclamos de fraude a través de APIs internas seguras, y guiar a los clientes con explicaciones claras en lenguaje natural. Debe aplicar estrictamente políticas de privacidad de datos, garantizar que no se exponga información sensible, y mantener un control sólido sobre el comportamiento del modelo y el acceso a datos.

¿Cuál es la solución de AWS que mejor respalda este caso de uso al combinar grandes modelos de lenguaje (LLMs) con integración segura de backend?

- · **A.** Amazon Q
- ✅ **B.** Agents for Amazon Bedrock
- · **C.** Amazon Comprehend
- · **D.** Amazon Polly

**Por qué:** Dado que Agents for Amazon Bedrock se construye dentro del servicio gestionado Amazon Bedrock, se benefician de la escalabilidad, seguridad y cumplimiento del ecosistema de AWS.

**Por qué no las demás:**
- **A.** Este servicio es un asistente de IA generativa diseñado principalmente para ayudar a usuarios empresariales y desarrolladores a interactuar con datos, aplicaciones y documentación.
- **C.** Es un servicio de procesamiento de lenguaje natural (NLP) que se utiliza principalmente para extraer información como sentimiento.
- **D.** Es un servicio de síntesis de voz (text-to-speech) que se utiliza solo para convertir texto escrito en voz realista.

---

[← Volver al índice](./README.md)
