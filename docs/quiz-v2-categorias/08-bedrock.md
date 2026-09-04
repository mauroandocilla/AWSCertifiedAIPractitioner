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

### 2. Un equipo de ciencia de datos necesita una interfaz amigable para experimentar rápidamente con modelos base de Amazon Bedrock en un entorno que no es de producción.

¿Qué debería usarse?

- · **A.** Endpoints de Amazon SageMaker
- ✅ **B.** PartyRock, un Bedrock Playground
- · **C.** Amazon EC2 serie Trn
- · **D.** Amazon SageMaker Studio

### 3. Una empresa de retail ha aumentado un foundation model usando Amazon Bedrock para responder consultas de clientes sobre sus productos y promociones. La empresa utiliza una Knowledge Base en Bedrock para mejorar las respuestas del modelo con información relevante, y usa Amazon CloudWatch Logs para registrar las invocaciones del modelo.

Ahora la empresa desea extender el desempeño del modelo en un nuevo lote de consultas actualizando la información disponible para el modelo.

¿Qué debe hacer la empresa para habilitar a Bedrock el acceso al nuevo conjunto de datos?

- · **A.** Subir el conjunto de datos a Amazon DynamoDB y otorgar acceso completo a la tabla a Bedrock.
- · **B.** Copiar el conjunto de datos a una instancia de Amazon EC2 y configurar la Knowledge Base para leerlo a través de SSH.
- · **C.** Almacenar el conjunto de datos en Amazon Elastic File System (Amazon EFS) y vincularlo al modelo de Bedrock.
- ✅ **D.** Subir el conjunto de datos al bucket de Amazon S3 correspondiente y resincronizar la Knowledge Base.

### 4. Un servicio de streaming usa Amazon Bedrock para ejecutar un modelo de detección que marca contenido inapropiado en comentarios de usuarios. El servicio necesita una solución para filtrar contenido inapropiado y cumplir con sus políticas de moderación, además de alertar si ocurren violaciones de política.

¿Cuál es el enfoque MÁS apropiado para cumplir con los requisitos?

- · **A.** Usar Amazon SageMaker Clarify para detectar sesgos en la salida del modelo y marcar contenido inapropiado.
- · **B.** Configurar Amazon SNS para enviar notificaciones cuando el modelo detecte contenido inapropiado.
- · **C.** Usar la clasificación personalizada de Amazon Comprehend para detectar y filtrar contenido inapropiado. Configurar alarmas de Amazon CloudWatch para violaciones de política.
- ✅ **D.** Implementar filtrado de contenido usando Bedrock Guardrails de Amazon Bedrock. Configurar alarmas de Amazon CloudWatch para activar notificaciones cuando haya violaciones de política.

### 5. Una startup tecnológica está realizando fine-tuning en un large language model (LLM) de Amazon Bedrock para crear un modelo personalizado para una aplicación de atención al cliente. Como parte del proceso, el equipo aplica técnicas de fine-tuning del modelo usando datos etiquetados de soporte al cliente para adaptar el modelo base a su dominio específico. El modelo se desplegará en producción para manejar un flujo constante de solicitudes de usuarios, con datos almacenados en Amazon S3 para monitoreo.

¿Cuál solución de AWS ofrece el enfoque más rentable para estos requisitos?

- ✅ **A.** Configurar el modelo con Provisioned Throughput en Bedrock.
- · **B.** Desplegar el modelo usando Amazon EC2 con Elastic Load Balancing.
- · **C.** Aprovechar On-Demand Throughput para el modelo en Bedrock.
- · **D.** Usar Amazon SageMaker AI para alojar el modelo y escalarlo con un grupo de Auto Scaling de Amazon.

### 6. Una empresa desea personalizar un modelo base usando Amazon Bedrock.

Selecciona y ordena los requisitos previos para personalizar un modelo base. Cada paso debe seleccionarse una sola vez. (Selecciona y ordena TRES.)

| Elemento | Respuesta correcta |
|---|---|
| Paso 1: | **Prepara el conjunto de datos de entrenamiento** |
| Paso 2: | **Crea un trabajo de fine-tuning o pre-training** |
| Paso 3: | **Compra Provisioned Throughput** |

### 7. Una startup está desarrollando una nueva aplicación impulsada por IA usando Amazon Bedrock. Debido a patrones de uso impredecibles, quieren minimizar los costos iniciales y pagar solo por los recursos que consumen.

¿Cuál es el modelo de precios MÁS adecuado en Amazon Bedrock para satisfacer las necesidades de la empresa?

- ✅ **A.** On-Demand
- · **B.** Provisioned Throughput
- · **C.** Batch
- · **D.** Model evaluation

### 8. Una empresa desarrolla una aplicación de IA generativa usando Amazon Bedrock, aprovechando Amazon Comprehend para analizar el sentimiento de la entrada del usuario. Quiere implementar Bedrock Guardrails para filtrar contenido dañino o inapropiado tanto de la entrada del usuario como de las respuestas generadas por el modelo.

¿Cuáles son los tipos de contenido que pueden ser detectados y filtrados por las guardrails? (Selecciona DOS.)

- · **A.** Apuestas
- · **B.** Desinformación
- · **C.** Discriminación
- ✅ **D.** Violencia
- ✅ **E.** Odio

### 9. Una empresa está utilizando un modelo de IA generativa para crear un asistente virtual. De vez en cuando, los outputs del modelo pueden contener contenido inapropiado o inseguro.

Identifica los Bedrock Guardrails de Amazon correctos para cada paso de mitigación. Cada política de filtro debe usarse una sola vez. (Selecciona CUATRO.)

| Elemento | Respuesta correcta |
|---|---|
| Filtra prompts o respuestas del modelo que contengan contenido ofensivo como violencia, insultos o ataques de prompt. | **Content Filters** |
| Evita discutir temas relacionados con asesoramiento de inversión ilegal o asesoramiento legal. | **Denied Topics** |
| Identifica y filtra el uso de términos particulares dañinos. | **Word filters** |
| Identifica y elimina datos en las respuestas del modelo que no están respaldados por el material fuente proporcionado. | **Contextual grounding check** |

### 10. Una empresa está planeando construir un chatbot para analizar reseñas de clientes usando large language models (LLMs). La empresa está evaluando varios LLMs para encontrar el que mejor prediga si una reseña es positiva, negativa o neutral, utilizando métricas de fairness para garantizar predicciones imparciales.

La empresa también desea asegurar que la solución elimine información sensible antes del procesamiento para prevenir prompt leaking y protegerse contra la exposición inadvertida de datos sensibles de clientes. Este paso es crucial para prevenir consecuencias no deseadas y cumplir con las regulaciones de privacidad.

¿Cuál de las siguientes opciones cumplirá con los requisitos? (Selecciona DOS.)

- ✅ **A.** Amazon Bedrock Guardrails
- · **B.** Amazon SageMaker AI Ground Truth
- ✅ **C.** Amazon Bedrock Model Evaluation
- · **D.** Amazon Lex
- · **E.** Amazon Comprehend

### 11. Una empresa de comercio electrónico tiene un equipo de atención al cliente que ayuda a los compradores proporcionando recomendaciones de productos personalizadas basadas en la ubicación de cada comprador e historial de navegación. La empresa quiere automatizar este proceso utilizando foundation models (FMs). Para garantizar recomendaciones precisas, la solución debe integrarse con knowledge bases que almacenan información de inventario y catálogo según la ubicación.

¿Cuál es el servicio de AWS más adecuado para esta tarea?

- · **A.** Amazon Rekognition
- ✅ **B.** Amazon Bedrock
- · **C.** Amazon Transcribe
- · **D.** Amazon Lex

### 12. Un investigador de IA utiliza un modelo fundacional de Amazon Bedrock para generar resúmenes de sesiones de chat de soporte técnico. El investigador también utiliza una Bedrock Knowledge Base para mejorar la calidad y el contexto de los resúmenes. Se necesita un mecanismo para guardar registros detallados de invocaciones, permitiendo monitorear tanto los datos de entrada como los de salida del modelo.

¿Cuál método cumplirá con este requisito?

- ✅ **A.** Configurar el logging de invocaciones de modelo dentro de Bedrock.
- · **B.** Implementar AWS Audit Manager para almacenar y rastrear registros de invocaciones de modelo.
- · **C.** Usar AWS CloudTrail para buscar actividades de API relacionadas con invocaciones de modelo.
- · **D.** Usar el logging de invocaciones de modelo en AWS Lambda.

### 13. Una agencia de marketing está pilotando una herramienta de IA generativa para crear emails personalizados y publicaciones en redes sociales. El uso es ocasional y varía según la campaña. La agencia quiere una solución completamente gestionada que se escale con demanda impredecible y ofrezca precios de pago por uso sin compromisos iniciales.

¿Cuál es la opción de compra de Amazon Bedrock que mejor se ajusta a estos requisitos?

- · **A.** Marketplace models
- ✅ **B.** On-Demand Throughput
- · **C.** Provisioned Throughput
- · **D.** Custom Model Import

### 14. Una empresa está desarrollando una aplicación de machine learning con Amazon Bedrock. Necesita un throughput consistente y una capacidad fija para garantizar un rendimiento confiable y eficiencia de costos.

¿Qué modelo de precios debería elegir la empresa?

- · **A.** Latency optimized
- ✅ **B.** Provisioned Throughput
- · **C.** Batch
- · **D.** Model customization

### 15. Una empresa financiera utiliza Amazon Bedrock para implementar un chatbot basado en IA generativa que proporciona asesoramiento financiero personalizado y responde consultas relacionadas. Como parte de su marco de gobernanza descrito en la Matriz de Evaluación de Seguridad de IA Generativa de AWS, la empresa necesita una solución para controlar y evaluar el contenido generado por el chatbot a fin de garantizar precisión, idoneidad y cumplimiento de estándares regulatorios.

¿Cuál herramienta de AWS ayudará a garantizar que el asesoramiento del chatbot cumpla con los estándares de precisión y cumplimiento regulatorio?

- · **A.** Bedrock Agents
- · **B.** Amazon Lex
- · **C.** Amazon Comprehend
- ✅ **D.** Guardrails for Bedrock

### 16. Un equipo de atención al cliente ayuda a las personas que llaman ofreciendo detalles de productos y sugerencias personalizadas según la ubicación geográfica del cliente. La empresa está explorando el uso de foundation models (FMs) para simplificar y automatizar este flujo de trabajo. La empresa utiliza few-shot learning para adaptar rápidamente el modelo a nuevos catálogos regionales con datos de ejemplo mínimos.

¿Cuál servicio de AWS sería la solución más apropiada para este caso de uso?

- · **A.** Amazon Polly
- ✅ **B.** Amazon Bedrock
- · **C.** Amazon Macie
- · **D.** Amazon SageMaker AI

### 17. Un banco minorista grande está creando un asistente virtual impulsado por IA para reportar y disputar transacciones fraudulentas. El asistente debe recuperar detalles de cuentas y transacciones, enviar reclamos de fraude a través de APIs internas seguras, y guiar a los clientes con explicaciones claras en lenguaje natural. Debe aplicar estrictamente políticas de privacidad de datos, garantizar que no se exponga información sensible, y mantener un control sólido sobre el comportamiento del modelo y el acceso a datos.

¿Cuál es la solución de AWS que mejor respalda este caso de uso al combinar grandes modelos de lenguaje (LLMs) con integración segura de backend?

- · **A.** Amazon Q
- ✅ **B.** Agents for Amazon Bedrock
- · **C.** Amazon Comprehend
- · **D.** Amazon Polly

---

[← Volver al índice](./README.md)
