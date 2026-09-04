# Fundamentos de IA generativa: modelos, arquitecturas y embeddings

_27 preguntas · Quiz v2 (TutorialsDojo) · AWS Certified AI Practitioner (AIF-C01)_

## Concepto clave

Terminología base de GenAI: qué es un foundation model, los distintos tipos de modelo (LLM, difusión, multimodal, GAN, BERT/GPT), redes neuronales/transformers, y qué es un embedding. Preguntas de definición pura, sin caso de uso complejo de por medio.

## Truco para reconocerlas

Si la pregunta pide directamente "qué es X" o pide emparejar un tipo de modelo con su descripción sin mencionar un servicio de AWS específico, es esta categoría. Los distractores suelen mezclar "modelo de ML tradicional" con "modelo generativo": la clave es si la salida es contenido nuevo (texto/imagen/audio) o una predicción/clasificación sobre datos existentes. Cuando preguntan qué base de datos de AWS almacena o consulta embeddings, las opciones típicas son OpenSearch Service, Aurora/RDS PostgreSQL (pgvector), DocumentDB y Neptune ML -- todas son válidas, elegí la que ya usa la empresa en el escenario.

## Palabras clave

`foundation model` · `representación numérica` · `tipo de modelo`

## Preguntas

### 1. Un científico de datos está preparando datos de texto para un modelo de NLP.

¿Qué rol juega el tokenization en el procesamiento del lenguaje natural (NLP)?

- · **A.** Identifica el sentimiento del texto.
- · **B.** Categoriza palabras en partes del discurso.
- · **C.** Comprime archivos de texto para reducir el tamaño de almacenamiento.
- ✅ **D.** Divide una oración en unidades individuales de palabras o frases.

### 2. Un equipo de investigadores está desarrollando un sistema de IA para asistir a los médicos en el diagnóstico de condiciones médicas. El sistema necesita analizar tanto reportes de texto de pacientes como imágenes médicas (como radiografías y resonancias magnéticas).

¿Cuál sería la arquitectura de modelo más adecuada para los requisitos dados?

- ✅ **A.** Modelo multimodal
- · **B.** Modelo de difusión
- · **C.** Modelo de ensemble
- · **D.** Modelo de lenguaje grande

### 3. Una empresa de tecnología está trabajando en múltiples proyectos de vanguardia que requieren diversos modelos de machine learning para resolver desafíos distintos. Estos proyectos abarcan áreas como procesamiento de lenguaje natural, predicción del comportamiento de clientes y creación de contenido para marketing. El equipo debe decidir qué tipo de modelo de machine learning se adapta mejor a cada proyecto específico.

Para cada uno de los siguientes casos de uso, elige el tipo de modelo de machine learning más apropiado de la lista proporcionada. Algunos tipos de modelos pueden utilizarse más de una vez. (Selecciona CUATRO.)

| Elemento | Respuesta correcta |
|---|---|
| Traducir patentes del inglés al francés, incluyendo imágenes incrustadas como diagramas técnicos. | **Modelo de Generative AI** |
| Predecir cancelaciones de suscripción de clientes para un proveedor de telefonía basándose en datos históricos de uso. | **Modelo de ML tradicional** |
| Crear diseños visuales innovadores a partir de briefings publicitarios basados en texto. | **Modelo de Generative AI** |
| Identificar el sentimiento detrás de comentarios de clientes y publicaciones en redes sociales. | **Modelo de ML tradicional** |

### 4. Una empresa minorista necesita un sistema de IA que escanee automáticamente imágenes de productos para detectar defectos, como rayaduras o abolladuras, antes de publicar los productos en línea.

¿Cuál de los siguientes tipos de aplicaciones de IA se ajustaría mejor a esta necesidad?

- · **A.** Segmentación de imágenes
- ✅ **B.** Computer vision
- · **C.** Reconocimiento óptico de caracteres (OCR)
- · **D.** Procesamiento de imágenes

### 5. ¿Cuál es el modelo de machine learning conocido por producir datos artificiales al aprender de ejemplos existentes?

- · **A.** Recurrent neural network (RNN)
- ✅ **B.** Generative adversarial network (GAN)
- · **C.** Reinforcement learning
- · **D.** Convolutional neural networks (CNN)

### 6. Un equipo de ingeniería en la nube está utilizando modelos de lenguaje extenso (LLM) para mejorar su flujo de trabajo de desarrollo. El equipo quiere que la IA convierta comentarios de código en lenguaje natural como "Agregar manejo de errores para subidas a Amazon S3" en funciones Python completas.

¿Cuál es la evaluación de modelo en Amazon Bedrock que permite esta creación automática de código a partir de descripciones en texto plano?

- · **A.** Guardrails for Amazon Bedrock
- · **B.** Preguntas y respuestas
- ✅ **C.** Generación de texto general
- · **D.** Clasificación de texto

### 7. Un especialista en IA está probando un chatbot que utiliza un modelo de embedding para proporcionar recomendaciones. El chatbot recupera sugerencias de restaurantes comparando consultas de usuarios con embeddings almacenados en Amazon Aurora for PostgreSQL con la extensión pgvector, que permite búsquedas de similitud rápidas. El especialista escribe "good Japanese restaurants" en el chatbot.

¿Qué generaría el modelo de embedding?

- · **A.** Una matriz de 1s y 0s indicando qué tan relevante es la solicitud para el contexto.
- ✅ **B.** Una representación numérica de la frase.
- · **C.** Un resumen de las preferencias del usuario basado en la entrada.
- · **D.** Una puntuación de sentimiento indicando qué tan relevante es la solicitud para el contexto.

### 8. Una gran empresa de comercio electrónico está usando Amazon Bedrock para desarrollar un chatbot impulsado por un modelo de lenguaje grande (LLM) para atención al cliente. El equipo de desarrollo está evaluando los límites para integrar datos de consultas de clientes en un único prompt utilizado por el modelo. Si los datos exceden esos límites, el equipo podría necesitar implementar prompt chaining. ¿Qué factor debe considerar la empresa?

- · **A.** Temperatura
- ✅ **B.** Context window
- · **C.** Arquitectura del modelo
- · **D.** Latencia de respuesta

### 9. Un especialista en IA tiene la tarea de desarrollar un modelo de IA que genere consultas SQL a partir de descripciones en lenguaje natural. El especialista necesita un modelo que entienda el contexto y produzca texto coherente y similar al humano. El modelo debe aprovechar mecanismos de self-attention para permitir una comprensión contextual más profunda al mapear la intención del usuario a consultas de base de datos estructuradas. La empresa planea integrar el modelo con una Bedrock Knowledge Base de Amazon. ¿Cuál de los siguientes modelos de IA sería más adecuado para esta tarea?

- · **A.** Red neuronal convolucional
- · **B.** Red neuronal recurrente
- · **C.** K-Nearest Neighbors
- ✅ **D.** Generative Pre-trained Transformers (GPT)

### 10. Una empresa de comercio electrónico está diseñando un chatbot para ayudar a los clientes con consultas sobre productos, actualizaciones de estado de pedidos y solución de problemas.

¿Cuál es la capacidad de IA más relevante para asegurar que el chatbot proporcione respuestas en tiempo real a las consultas de los clientes?

- · **A.** Eficiencia de datos
- · **B.** Adaptabilidad
- ✅ **C.** Responsividad
- · **D.** Simplicidad

### 11. Un especialista en IA desea construir un modelo de lenguaje basado en transformer que comprenda el contexto de las oraciones y prediga palabras faltantes. El modelo debe manejar respuesta a preguntas y clasificación de texto. ¿Qué tipo de modelo es más adecuado para esta tarea?

- ✅ **A.** Modelos basados en Bidirectional Encoder Representations from Transformers (BERT)
- · **B.** Modelo de filtrado colaborativo
- · **C.** Modelos de ML prescriptivo
- · **D.** Modelos de análisis de sentimiento

### 12. Una empresa de tecnología en salud está desarrollando un asistente virtual con búsqueda conversacional para consultas médicas. Utilizará un modelo de IA generativa junto con el algoritmo Word2Vec para generar representaciones vectoriales de términos y preguntas médicas, y luego devolverá respuestas relevantes a través de un servicio que puede almacenar y consultar embeddings como vectores de forma eficiente para recuperación rápida.

¿Cuál servicio de AWS es el más adecuado para esta funcionalidad?

- · **A.** Amazon RDS
- ✅ **B.** Amazon OpenSearch Service
- · **C.** Amazon Redshift
- · **D.** Amazon Aurora PostgreSQL

### 13. Una empresa está desarrollando una aplicación para resumir documentos usando un modelo de lenguaje grande (LLM). Utilizarán embeddings para ayudar al modelo a entender y procesar la información de manera más efectiva.

¿Por qué los embeddings son importantes para el LLM a la hora de generar resúmenes precisos?

- · **A.** Comprimen todo el documento en un único archivo de texto.
- ✅ **B.** Convierten contenido textual en vectores numéricos que representan significado semántico.
- · **C.** Aseguran que las palabras de salida estén en sus formas base o raíz.
- · **D.** Dividen el texto en unidades más pequeñas, como palabras o subpalabras, para ayudar en la traducción.

### 14. Una empresa tiene un sistema de recomendación que genera embeddings a partir de datos de interacción de clientes para entender relaciones de productos y preferencias de usuarios. El objetivo es mejorar el sistema con capacidades de búsqueda semántica para recuperar recomendaciones de productos contextualmente similares de forma más eficiente.

¿Cuáles servicios de AWS son los más adecuados para implementar búsqueda vectorial y optimizar el sistema de recomendación? (Selecciona TRES.)

- ✅ **A.** Amazon DocumentDB (con compatibilidad MongoDB)
- · **B.** Amazon S3
- · **C.** Amazon QuickSight
- ✅ **D.** Amazon Neptune ML
- · **E.** Amazon Redshift
- ✅ **F.** Amazon OpenSearch Service

### 15. Una empresa de tecnología está integrando diversos modelos de IA generativa para mejorar sus productos y servicios.

Selecciona el tipo correcto de modelo de IA generativa para cumplir con cada requisito. Cada modelo puede seleccionarse una o más veces. (Selecciona CUATRO.)

| Elemento | Respuesta correcta |
|---|---|
| La empresa necesita un modelo que pueda generar documentación técnica detallada y contextualmente precisa basándose en datos de entrada limitados | **Large language model** |
| El equipo de diseño quiere crear imágenes fotorrealistas a partir de conceptos abstractos descritos en texto, garantizando alta fidelidad y detalle | **Stable Diffusion model** |
| La empresa requiere un modelo que pueda analizar y generar simultáneamente contenido que involucre texto, imágenes y audio para un asistente virtual inmersivo | **Large multi-modal language model** |
| La empresa necesita un modelo robusto y adaptable que pueda ser fine-tuned para una amplia gama de tareas, incluyendo comprensión del lenguaje natural, reconocimiento de imágenes y análisis predictivo | **Foundation model** |

### 16. Una empresa de retail planea implementar un sistema de recomendaciones para su plataforma de e-commerce usando un modelo base (FM). El sistema debe procesar consultas sobre descripciones de productos e imágenes para proporcionar recomendaciones precisas basadas en entradas visuales y textuales.

¿Qué tipo de modelo base (FM) se adapta mejor a este sistema de recomendaciones?

- · **A.** Modelo de embedding de imágenes
- · **B.** Modelo de procesamiento de lenguaje natural (NLP)
- ✅ **C.** Modelo de embedding multimodal
- · **D.** Modelo de embedding de texto

### 17. Un ingeniero de aprendizaje automático está evaluando el desempeño de un sistema de modelo generativo utilizado para atención al cliente. El ingeniero necesita identificar métricas de desempeño clave y optimizar el modelo para mejorar la precisión y eficiencia de las respuestas.

¿Cuál métrica de negocio evaluaría mejor el desempeño del modelo?

- · **A.** Tasa de conversión
- · **B.** Reseñas de Clientes AWS
- · **C.** Tiempo promedio de respuesta
- ✅ **D.** Satisfacción del cliente

### 18. Una empresa minorista quiere mejorar su compromiso con los clientes proporcionando recomendaciones personalizadas a los compradores en línea. Decide aprovechar la IA generativa para lograr este objetivo.

¿Cuáles características de un sistema de IA generativa son relevantes para crear recomendaciones personalizadas de productos? (Selecciona TRES.)

- · **A.** Simplicidad
- · **B.** Adaptabilidad
- ✅ **C.** Escalabilidad
- ✅ **D.** Personalización
- · **E.** Capacidad de respuesta
- ✅ **F.** Eficiencia de datos

### 19. Una startup de tecnología financiera está desarrollando una herramienta innovadora para predecir tendencias del mercado de valores. La herramienta analiza grandes volúmenes de datos históricos de acciones para pronosticar movimientos futuros de precios. ¿Cuál de las siguientes afirmaciones describe con precisión las redes neuronales en esta aplicación financiera?

- · **A.** Las redes neuronales actúan como modelos de regresión lineal, correlacionando puntos de datos de acciones con comportamientos futuros del mercado.
- · **B.** Las redes neuronales funcionan como algoritmos de optimización, utilizando datos históricos de acciones para ajustar estrategias de inversión y mejorar las predicciones de tendencias del mercado.
- · **C.** Las redes neuronales funcionan como sistemas de bases de datos, organizando datos de acciones para facilitar su recuperación y análisis basados en patrones del mercado.
- ✅ **D.** Las redes neuronales se utilizan como modelos de deep learning que simulan las capacidades de reconocimiento de patrones del cerebro humano, aprendiendo de datos financieros históricos para anticipar futuras tendencias del mercado de valores.

### 20. Un ingeniero de ML busca un servicio de base de datos relacional que admita almacenamiento y consulta eficiente de datos vectoriales, específicamente embeddings de modelos de machine learning. El ingeniero ejecuta consultas K-Nearest Neighbors (KNN) sobre los embeddings.

¿Cuál de los siguientes servicios de AWS sería el más adecuado para este caso de uso?

- ✅ **A.** Amazon RDS for PostgreSQL
- · **B.** Amazon RDS for MySQL
- · **C.** Amazon DocumentDB
- · **D.** Amazon DynamoDB

### 21. Un especialista en IA está desarrollando un proyecto para analizar imágenes de cámaras de seguridad de una tienda retail. El objetivo es categorizar automáticamente los artículos en los estantes para ayudar con la gestión de inventario, utilizando modelos como Single Shot Multibox Detector (SSD). Para mejorar el desempeño del modelo con datos específicos de la tienda sin entrenar desde cero, el equipo aprovecha transfer learning adaptando un modelo de visión pre-entrenado para reconocer con mayor precisión productos retail.

¿Cuál de las siguientes opciones es la técnica más apropiada para esta tarea?

- · **A.** Semantic Segmentation
- · **B.** Inpainting
- · **C.** Text Classification
- ✅ **D.** Object detection

### 22. Un especialista en IA ha implementado un modelo de deep learning para detección de objetos en un endpoint de Amazon SageMaker. El especialista carga una nueva imagen al endpoint para identificar objetos.

¿Cuál de los siguientes procesos se describe en este escenario?

- · **A.** Model Deployment
- ✅ **B.** Inference
- · **C.** Data Augmentation
- · **D.** Hyperparameter Tuning

### 23. Una empresa utiliza un modelo de IA generativa para automatizar la creación de contenido en sus publicaciones de redes sociales. El modelo ha sido entrenado con diversos temas, incluyendo tecnología, moda y viajes. Recientemente, la empresa decidió expandir su negocio hacia la industria del fitness.

¿Cuál es la capacidad de la IA generativa que será crucial para que el modelo ajuste su salida y genere contenido relevante relacionado con fitness?

- · **A.** Escalabilidad
- ✅ **B.** Adaptabilidad
- · **C.** Creatividad y exploración
- · **D.** Capacidad de respuesta

### 24. Un especialista en IA está estudiando las capacidades de los modelos fundacionales (FMs) para mejorar las soluciones impulsadas por IA de la empresa. Estos modelos potentes pueden ajustarse mediante fine-tuning para varias tareas en función de un pre-entrenamiento extenso en conjuntos de datos grandes. Los especialistas necesitan entender las diferentes capacidades de los modelos fundacionales y cómo pueden aplicarse.

Selecciona las tareas correctas que los FMs pueden realizar para ayudar a la empresa a mejorar su solución impulsada por IA. (Selecciona TRES.)

| Elemento | Respuesta correcta |
|---|---|

### 25. Una empresa de retail quiere mejorar su sistema de recomendación de productos utilizando machine learning. Para lograr recomendaciones más precisas, la empresa planea usar vector embeddings de características de productos y preferencias de usuarios. El sistema también debe soportar consultas en tiempo real para encontrar los productos más relevantes rápidamente.

¿Cuál servicio de AWS cumpliría mejor estas necesidades? (Selecciona DOS.)

- · **A.** Amazon DynamoDB
- ✅ **B.** Amazon DocumentDB (with MongoDB compatibility)
- · **C.** Amazon ElastiCache
- ✅ **D.** Amazon OpenSearch Service
- · **E.** AWS Lake Formation

### 26. Un especialista en IA está trabajando con un modelo de deep learning en Amazon SageMaker. El modelo, que incluye una capa softmax, es demasiado grande para caber en la memoria de una única GPU, y el conjunto de datos de entrenamiento también es bastante extenso. El especialista debe elegir una opción incorporada de SageMaker para optimizar el proceso de entrenamiento y gestionar el modelo y el conjunto de datos de gran tamaño.

¿Qué opciones incorporadas de SageMaker debe usar el especialista para manejar el entrenamiento de modelos de gran tamaño?

- · **A.** Incremental Training
- ✅ **B.** Model Parallelism
- · **C.** Managed Spot Training
- · **D.** Pipe Mode

### 27. Un equipo de científicos de datos utiliza Amazon SageMaker para clasificar comentarios de clientes por sentimiento.

¿Qué debería usar el equipo para convertir los datos textuales en representaciones numéricas para su modelo de NLP?

- · **A.** One-Hot Encoding
- · **B.** Tokenization
- · **C.** Feature Scaling
- ✅ **D.** Embeddings

---

[← Volver al índice](./README.md)
