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

**Por qué:** Tokenization divide una oración en unidades individuales de palabras o frases, el primer paso antes de vectorizar el texto.

**Por qué no las demás:**
- **A.** El análisis de sentimiento es una tarea de NLP posterior que determina el tono emocional de un texto (por ejemplo, positivo, negativo, neutral).
- **B.** Esto se refiere a Part-of-Speech (POS) tagging, que asigna categorías gramaticales (como sustantivo, verbo, adjetivo) a las palabras.
- **C.** La compresión es principalmente una técnica de almacenamiento o transmisión de datos, no un concepto de NLP.

### 2. Un equipo de investigadores está desarrollando un sistema de IA para asistir a los médicos en el diagnóstico de condiciones médicas. El sistema necesita analizar tanto reportes de texto de pacientes como imágenes médicas (como radiografías y resonancias magnéticas).

¿Cuál sería la arquitectura de modelo más adecuada para los requisitos dados?

- ✅ **A.** Modelo multimodal
- · **B.** Modelo de difusión
- · **C.** Modelo de ensemble
- · **D.** Modelo de lenguaje grande

**Por qué:** Combina texto e imágenes (radiografías, resonancias) en un solo modelo, algo que ningún modelo de una sola modalidad puede hacer.

**Por qué no las demás:**
- **B.** Los modelos de difusión generan imágenes, pero no analizan texto ni combinan modalidades.
- **C.** Combinar varios modelos mejora precisión, pero no integra nativamente texto e imágenes.
- **D.** Un LLM entiende y genera lenguaje, pero no puede procesar ni analizar imágenes médicas.

### 3. Una empresa de tecnología está trabajando en múltiples proyectos de vanguardia que requieren diversos modelos de machine learning para resolver desafíos distintos. Estos proyectos abarcan áreas como procesamiento de lenguaje natural, predicción del comportamiento de clientes y creación de contenido para marketing. El equipo debe decidir qué tipo de modelo de machine learning se adapta mejor a cada proyecto específico.

Para cada uno de los siguientes casos de uso, elige el tipo de modelo de machine learning más apropiado de la lista proporcionada. Algunos tipos de modelos pueden utilizarse más de una vez. (Selecciona CUATRO.)

| Elemento | Respuesta correcta | Por qué |
|---|---|---|
| Traducir patentes del inglés al francés, incluyendo imágenes incrustadas como diagramas técnicos. | **Modelo de Generative AI** | Traducir y generar contenido combinando texto e imágenes es tarea de creación, propia de GenAI |
| Predecir cancelaciones de suscripción de clientes para un proveedor de telefonía basándose en datos históricos de uso. | **Modelo de ML tradicional** | Es una predicción sobre datos históricos etiquetados, el caso clásico de ML tradicional |
| Crear diseños visuales innovadores a partir de briefings publicitarios basados en texto. | **Modelo de Generative AI** | Generar contenido visual nuevo a partir de texto es una tarea creativa, propia de GenAI |
| Identificar el sentimiento detrás de comentarios de clientes y publicaciones en redes sociales. | **Modelo de ML tradicional** | Es una clasificación sobre datos existentes, tarea típica de ML tradicional (NLP clásico) |

### 4. Una empresa minorista necesita un sistema de IA que escanee automáticamente imágenes de productos para detectar defectos, como rayaduras o abolladuras, antes de publicar los productos en línea.

¿Cuál de los siguientes tipos de aplicaciones de IA se ajustaría mejor a esta necesidad?

- · **A.** Segmentación de imágenes
- ✅ **B.** Computer vision
- · **C.** Reconocimiento óptico de caracteres (OCR)
- · **D.** Procesamiento de imágenes

**Por qué:** Interpreta información visual de forma inteligente, incluyendo detección de anomalías como rayaduras o abolladuras.

**Por qué no las demás:**
- **A.** Extrae texto de imágenes (etiquetas, números de serie), no detecta defectos físicos.
- **C.** Divide una imagen en segmentos, pero no detecta ni evalúa defectos por sí sola.
- **D.** Ajusta atributos como brillo o contraste, no incluye detección inteligente de defectos.

### 5. ¿Cuál es el modelo de machine learning conocido por producir datos artificiales al aprender de ejemplos existentes?

- · **A.** Recurrent neural network (RNN)
- ✅ **B.** Generative adversarial network (GAN)
- · **C.** Reinforcement learning
- · **D.** Convolutional neural networks (CNN)

**Por qué:** Las Generative adversarial networks (GANs) tienen aplicaciones en diversos campos, como generación de imágenes, síntesis de videos, aumento de datos y más.

**Por qué no las demás:**
- **A.** Se utiliza principalmente para tareas que involucran datos secuenciales o series temporales, como reconocimiento de voz, modelado de lenguaje y pronóstico de series temporales.
- **C.** Se enfoca en la toma de decisiones en entornos donde un agente realiza acciones para maximizar recompensas acumuladas.
- **D.** Está especializada únicamente en procesar datos estructurados en forma de cuadrícula, como imágenes.

### 6. Un equipo de ingeniería en la nube está utilizando modelos de lenguaje extenso (LLM) para mejorar su flujo de trabajo de desarrollo. El equipo quiere que la IA convierta comentarios de código en lenguaje natural como "Agregar manejo de errores para subidas a Amazon S3" en funciones Python completas.

¿Cuál es la evaluación de modelo en Amazon Bedrock que permite esta creación automática de código a partir de descripciones en texto plano?

- · **A.** Guardrails for Amazon Bedrock
- · **B.** Preguntas y respuestas
- ✅ **C.** Generación de texto general
- · **D.** Clasificación de texto

**Por qué:** Al usar evaluaciones de generación de texto general, las organizaciones pueden comparar diferentes modelos base y elegir el que mejor se ajuste a sus necesidades.

**Por qué no las demás:**
- **A.** Está diseñado solo para ayudar a controlar y restringir la salida de modelos base para garantizar seguridad, privacidad y cumplimiento normativo.
- **B.** Se utiliza principalmente para probar la capacidad del modelo de responder con precisión a preguntas basadas en hechos o conocimiento.
- **D.** Simplemente implica asignar etiquetas o categorías al texto.

### 7. Un especialista en IA está probando un chatbot que utiliza un modelo de embedding para proporcionar recomendaciones. El chatbot recupera sugerencias de restaurantes comparando consultas de usuarios con embeddings almacenados en Amazon Aurora for PostgreSQL con la extensión pgvector, que permite búsquedas de similitud rápidas. El especialista escribe "good Japanese restaurants" en el chatbot.

¿Qué generaría el modelo de embedding?

- · **A.** Una matriz de 1s y 0s indicando qué tan relevante es la solicitud para el contexto.
- ✅ **B.** Una representación numérica de la frase.
- · **C.** Un resumen de las preferencias del usuario basado en la entrada.
- · **D.** Una puntuación de sentimiento indicando qué tan relevante es la solicitud para el contexto.

**Por qué:** Un embedding es justamente eso: un vector numérico que captura el significado semántico de la frase.

**Por qué no las demás:**
- **A.** Los embeddings son vectores densos y continuos, no matrices binarias de 1s y 0s.
- **C.** Un embedding no resume preferencias, solo representa el texto numéricamente.
- **D.** Los embeddings no evalúan sentimiento, solo capturan significado semántico.

### 8. Una gran empresa de comercio electrónico está usando Amazon Bedrock para desarrollar un chatbot impulsado por un modelo de lenguaje grande (LLM) para atención al cliente. El equipo de desarrollo está evaluando los límites para integrar datos de consultas de clientes en un único prompt utilizado por el modelo. Si los datos exceden esos límites, el equipo podría necesitar implementar prompt chaining. ¿Qué factor debe considerar la empresa?

- · **A.** Temperatura
- ✅ **B.** Context window
- · **C.** Arquitectura del modelo
- · **D.** Latencia de respuesta

**Por qué:** Cuanto más amplio sea el context window, más información podrá utilizar el modelo para generar respuestas.

**Por qué no las demás:**
- **A.** Solo afecta la variabilidad o creatividad de las respuestas del modelo al ajustar la probabilidad de diferentes resultados.
- **C.** Aunque la arquitectura del modelo puede influir en el rendimiento, la eficiencia y la capacidad del modelo para procesar ciertos tipos de datos.
- **D.** Simplemente se refiere al retraso entre que el modelo recibe un prompt y entrega una respuesta.

### 9. Un especialista en IA tiene la tarea de desarrollar un modelo de IA que genere consultas SQL a partir de descripciones en lenguaje natural. El especialista necesita un modelo que entienda el contexto y produzca texto coherente y similar al humano. El modelo debe aprovechar mecanismos de self-attention para permitir una comprensión contextual más profunda al mapear la intención del usuario a consultas de base de datos estructuradas. La empresa planea integrar el modelo con una Bedrock Knowledge Base de Amazon. ¿Cuál de los siguientes modelos de IA sería más adecuado para esta tarea?

- · **A.** Red neuronal convolucional
- · **B.** Red neuronal recurrente
- · **C.** K-Nearest Neighbors
- ✅ **D.** Generative Pre-trained Transformers (GPT)

**Por qué:** La arquitectura Transformer es la que sustenta a los LLM modernos, capaz de generar texto coherente y contextual como consultas SQL.

**Por qué no las demás:**
- **A.** Está diseñada para datos tipo imagen, no para comprender o generar lenguaje.
- **B.** Procesa datos secuenciales, pero tiene dificultad para capturar contexto a largo plazo frente a un Transformer.
- **C.** Clasifica o predice por similitud entre puntos de datos, no comprende ni genera lenguaje.

### 10. Una empresa de comercio electrónico está diseñando un chatbot para ayudar a los clientes con consultas sobre productos, actualizaciones de estado de pedidos y solución de problemas.

¿Cuál es la capacidad de IA más relevante para asegurar que el chatbot proporcione respuestas en tiempo real a las consultas de los clientes?

- · **A.** Eficiencia de datos
- · **B.** Adaptabilidad
- ✅ **C.** Responsividad
- · **D.** Simplicidad

**Por qué:** En un contexto de comercio electrónico, los clientes esperan asistencia rápida, lo que hace que la responsividad sea crítica.

**Por qué no las demás:**
- **A.** Solo se enfoca en cómo la IA utiliza efectivamente los datos para aprender o hacer predicciones.
- **B.** Habla de aprender y ajustar respuestas con el tiempo, no de la velocidad de respuesta.
- **D.** Esta solo se refiere a la capacidad del chatbot de simplificar tareas complejas automatizando la creación de contenido.

### 11. Un especialista en IA desea construir un modelo de lenguaje basado en transformer que comprenda el contexto de las oraciones y prediga palabras faltantes. El modelo debe manejar respuesta a preguntas y clasificación de texto. ¿Qué tipo de modelo es más adecuado para esta tarea?

- ✅ **A.** Modelos basados en Bidirectional Encoder Representations from Transformers (BERT)
- · **B.** Modelo de filtrado colaborativo
- · **C.** Modelos de ML prescriptivo
- · **D.** Modelos de análisis de sentimiento

**Por qué:** Al igual que Word2Vec, BERT puede generar embeddings de palabras basados en los datos con los que fue entrenado.

**Por qué no las demás:**
- **B.** Estos se usan en sistemas de recomendación para predecir preferencias de usuarios basadas en comportamiento pasado.
- **C.** Estos modelos están diseñados para recomendar acciones basadas en predicciones y típicamente se usan en procesos de toma de decisiones.
- **D.** Estos están diseñados principalmente para determinar el sentimiento o emoción en el texto (por ejemplo, positivo, negativo, neutral).

### 12. Una empresa de tecnología en salud está desarrollando un asistente virtual con búsqueda conversacional para consultas médicas. Utilizará un modelo de IA generativa junto con el algoritmo Word2Vec para generar representaciones vectoriales de términos y preguntas médicas, y luego devolverá respuestas relevantes a través de un servicio que puede almacenar y consultar embeddings como vectores de forma eficiente para recuperación rápida.

¿Cuál servicio de AWS es el más adecuado para esta funcionalidad?

- · **A.** Amazon RDS
- ✅ **B.** Amazon OpenSearch Service
- · **C.** Amazon Redshift
- · **D.** Amazon Aurora PostgreSQL

**Por qué:** Ofrece búsqueda vectorial nativa de baja latencia sobre grandes volúmenes de embeddings, ideal para recuperación en tiempo real.

**Por qué no las demás:**
- **A.** No soporta nativamente pgvector, por lo que carece de búsqueda de similitud vectorial.
- **C.** Es un almacén de datos para analítica a gran escala, sin soporte nativo para embeddings vectoriales.
- **D.** Puede guardar embeddings con pgvector, pero está pensado para cargas transaccionales, no búsqueda semántica a gran escala.

### 13. Una empresa está desarrollando una aplicación para resumir documentos usando un modelo de lenguaje grande (LLM). Utilizarán embeddings para ayudar al modelo a entender y procesar la información de manera más efectiva.

¿Por qué los embeddings son importantes para el LLM a la hora de generar resúmenes precisos?

- · **A.** Comprimen todo el documento en un único archivo de texto.
- ✅ **B.** Convierten contenido textual en vectores numéricos que representan significado semántico.
- · **C.** Aseguran que las palabras de salida estén en sus formas base o raíz.
- · **D.** Dividen el texto en unidades más pequeñas, como palabras o subpalabras, para ayudar en la traducción.

**Por qué:** Esto permite recuperación más rápida y comparación de vectores similares basada en su significado semántico.

**Por qué no las demás:**
- **A.** Los embeddings no comprimen texto en un único archivo.
- **C.** Esta opción describe stemming o lemmatización, que son pasos de preprocesamiento para reducir palabras a sus formas base.
- **D.** Esta opción describe tokenización, no embeddings.

### 14. Una empresa tiene un sistema de recomendación que genera embeddings a partir de datos de interacción de clientes para entender relaciones de productos y preferencias de usuarios. El objetivo es mejorar el sistema con capacidades de búsqueda semántica para recuperar recomendaciones de productos contextualmente similares de forma más eficiente.

¿Cuáles servicios de AWS son los más adecuados para implementar búsqueda vectorial y optimizar el sistema de recomendación? (Selecciona TRES.)

- ✅ **A.** Amazon DocumentDB (con compatibilidad MongoDB)
- · **B.** Amazon S3
- · **C.** Amazon QuickSight
- ✅ **D.** Amazon Neptune ML
- · **E.** Amazon Redshift
- ✅ **F.** Amazon OpenSearch Service

**Por qué:** **A. Amazon DocumentDB** -- soporta búsqueda vectorial nativa, indexando y buscando millones de vectores con respuesta en milisegundos; **D. Amazon Neptune ML** -- usa Graph Neural Networks (GNNs) para hacer predicciones rápidas y precisas sobre datos de grafos; **F. Amazon OpenSearch Service** -- soporta búsqueda k-NN sobre vectores, ideal para recuperación semántica.

**Por qué no las demás:**
- **B.** Este servicio es principalmente un servicio de almacenamiento de objetos diseñado para almacenar y recuperar grandes cantidades de datos.
- **C.** Este servicio es simplemente un servicio de inteligencia empresarial y visualización para crear dashboards e informes.
- **E.** Es principalmente un servicio de almacén de datos diseñado para ejecutar consultas complejas en conjuntos de datos grandes.

### 15. Una empresa de tecnología está integrando diversos modelos de IA generativa para mejorar sus productos y servicios.

Selecciona el tipo correcto de modelo de IA generativa para cumplir con cada requisito. Cada modelo puede seleccionarse una o más veces. (Selecciona CUATRO.)

| Elemento | Respuesta correcta | Por qué |
|---|---|---|
| La empresa necesita un modelo que pueda generar documentación técnica detallada y contextualmente precisa basándose en datos de entrada limitados | **Large language model** | Un LLM está especializado en generar texto coherente a partir de instrucciones |
| El equipo de diseño quiere crear imágenes fotorrealistas a partir de conceptos abstractos descritos en texto, garantizando alta fidelidad y detalle | **Stable Diffusion model** | Stable Diffusion está diseñado específicamente para generar imágenes fotorrealistas desde texto |
| La empresa requiere un modelo que pueda analizar y generar simultáneamente contenido que involucre texto, imágenes y audio para un asistente virtual inmersivo | **Large multi-modal language model** | Un modelo multimodal es el único que integra y genera varias modalidades a la vez (texto, imagen, audio) |
| La empresa necesita un modelo robusto y adaptable que pueda ser fine-tuned para una amplia gama de tareas, incluyendo comprensión del lenguaje natural, reconocimiento de imágenes y análisis predictivo | **Foundation model** | Un foundation model es la base genérica pre-entrenada pensada para adaptarse (fine-tuning) a muchas tareas distintas |

### 16. Una empresa de retail planea implementar un sistema de recomendaciones para su plataforma de e-commerce usando un modelo base (FM). El sistema debe procesar consultas sobre descripciones de productos e imágenes para proporcionar recomendaciones precisas basadas en entradas visuales y textuales.

¿Qué tipo de modelo base (FM) se adapta mejor a este sistema de recomendaciones?

- · **A.** Modelo de embedding de imágenes
- · **B.** Modelo de procesamiento de lenguaje natural (NLP)
- ✅ **C.** Modelo de embedding multimodal
- · **D.** Modelo de embedding de texto

**Por qué:** Combina texto e imágenes en un mismo embedding, necesario para relacionar descripciones de producto con sus fotos.

**Por qué no las demás:**
- **A.** Solo procesa imágenes, no puede incorporar las descripciones de texto de los productos.
- **B.** Solo entiende texto, no puede procesar los datos de imagen.
- **D.** Solo convierte texto a vectores, no soporta entradas visuales.

### 17. Un ingeniero de aprendizaje automático está evaluando el desempeño de un sistema de modelo generativo utilizado para atención al cliente. El ingeniero necesita identificar métricas de desempeño clave y optimizar el modelo para mejorar la precisión y eficiencia de las respuestas.

¿Cuál métrica de negocio evaluaría mejor el desempeño del modelo?

- · **A.** Tasa de conversión
- · **B.** Reseñas de Clientes AWS
- · **C.** Tiempo promedio de respuesta
- ✅ **D.** Satisfacción del cliente

**Por qué:** Una alta satisfacción del cliente indica que el sistema está proporcionando respuestas valiosas y precisas, lo cual es esencial para mantener la confianza y lealtad del cliente.

**Por qué no las demás:**
- **A.** Se enfoca principalmente en el porcentaje de usuarios que compraron productos de la empresa en lugar de la calidad del soporte que reciben.
- **B.** Esta métrica solo proporciona retroalimentación sobre AWS como plataforma, no sobre el desempeño específico del sistema de modelo generativo.
- **C.** Aunque es una métrica de eficiencia importante, no mide la precisión ni la calidad de las respuestas, que es lo que impulsa la satisfacción del cliente.

### 18. Una empresa minorista quiere mejorar su compromiso con los clientes proporcionando recomendaciones personalizadas a los compradores en línea. Decide aprovechar la IA generativa para lograr este objetivo.

¿Cuáles características de un sistema de IA generativa son relevantes para crear recomendaciones personalizadas de productos? (Selecciona TRES.)

- · **A.** Simplicidad
- · **B.** Adaptabilidad
- ✅ **C.** Escalabilidad
- ✅ **D.** Personalización
- · **E.** Capacidad de respuesta
- ✅ **F.** Eficiencia de datos

**Por qué:** **C. Escalabilidad** -- permite atender a millones de usuarios con recomendaciones sin degradar el desempeño; **D. Personalización** -- la IA generativa analiza historial y comportamiento de cada usuario para generar sugerencias a medida; **F. Eficiencia de datos** -- algunos modelos generativos aprenden bien incluso con datos limitados por usuario, algo común en perfiles nuevos.

**Por qué no las demás:**
- **A.** La simplicidad del modelo no es lo que determina la calidad de una recomendación personalizada.
- **B.** Da versatilidad entre distintos escenarios, pero no aborda la personalización en sí.
- **E.** Importa para chatbots en tiempo real, pero las recomendaciones no requieren respuesta inmediata.

### 19. Una startup de tecnología financiera está desarrollando una herramienta innovadora para predecir tendencias del mercado de valores. La herramienta analiza grandes volúmenes de datos históricos de acciones para pronosticar movimientos futuros de precios. ¿Cuál de las siguientes afirmaciones describe con precisión las redes neuronales en esta aplicación financiera?

- · **A.** Las redes neuronales actúan como modelos de regresión lineal, correlacionando puntos de datos de acciones con comportamientos futuros del mercado.
- · **B.** Las redes neuronales funcionan como algoritmos de optimización, utilizando datos históricos de acciones para ajustar estrategias de inversión y mejorar las predicciones de tendencias del mercado.
- · **C.** Las redes neuronales funcionan como sistemas de bases de datos, organizando datos de acciones para facilitar su recuperación y análisis basados en patrones del mercado.
- ✅ **D.** Las redes neuronales se utilizan como modelos de deep learning que simulan las capacidades de reconocimiento de patrones del cerebro humano, aprendiendo de datos financieros históricos para anticipar futuras tendencias del mercado de valores.

**Por qué:** Predicciones financieras evaluando datos históricos de instrumentos financieros.

**Por qué no las demás:**
- **A.** Las redes neuronales son capaces de realizar tareas mucho más complejas que la regresión lineal.
- **B.** Las redes neuronales no son algoritmos de optimización.
- **C.** Las redes neuronales no organizan ni gestionan datos como lo hacen los sistemas de bases de datos.

### 20. Un ingeniero de ML busca un servicio de base de datos relacional que admita almacenamiento y consulta eficiente de datos vectoriales, específicamente embeddings de modelos de machine learning. El ingeniero ejecuta consultas K-Nearest Neighbors (KNN) sobre los embeddings.

¿Cuál de los siguientes servicios de AWS sería el más adecuado para este caso de uso?

- ✅ **A.** Amazon RDS for PostgreSQL
- · **B.** Amazon RDS for MySQL
- · **C.** Amazon DocumentDB
- · **D.** Amazon DynamoDB

**Por qué:** Con pgvector en Amazon RDS, puedes configurar, administrar y expandir fácilmente bases de datos para tus aplicaciones de machine learning (ML).

**Por qué no las demás:**
- **B.** No tiene soporte integrado para operaciones de datos vectoriales, como la extensión pgvector disponible en PostgreSQL.
- **C.** Aunque admite búsqueda vectorial, es una base de datos de documentos sin las características relacionales pedidas.
- **D.** Es un servicio de base de datos NoSQL diseñado típicamente para modelos de datos de clave-valor y documentos.

### 21. Un especialista en IA está desarrollando un proyecto para analizar imágenes de cámaras de seguridad de una tienda retail. El objetivo es categorizar automáticamente los artículos en los estantes para ayudar con la gestión de inventario, utilizando modelos como Single Shot Multibox Detector (SSD). Para mejorar el desempeño del modelo con datos específicos de la tienda sin entrenar desde cero, el equipo aprovecha transfer learning adaptando un modelo de visión pre-entrenado para reconocer con mayor precisión productos retail.

¿Cuál de las siguientes opciones es la técnica más apropiada para esta tarea?

- · **A.** Semantic Segmentation
- · **B.** Inpainting
- · **C.** Text Classification
- ✅ **D.** Object detection

**Por qué:** Object detection es la técnica más adecuada para el escenario dado porque implica identificar y localizar objetos dentro de una imagen.

**Por qué no las demás:**
- **A.** Semantic segmentation etiqueta cada píxel en una imagen con una etiqueta de clase de un conjunto predefinido de clases.
- **B.** Típicamente se usa para rellenar secciones faltantes de una imagen.
- **C.** Categoriza principalmente datos de texto en categorías predefinidas.

### 22. Un especialista en IA ha implementado un modelo de deep learning para detección de objetos en un endpoint de Amazon SageMaker. El especialista carga una nueva imagen al endpoint para identificar objetos.

¿Cuál de los siguientes procesos se describe en este escenario?

- · **A.** Model Deployment
- ✅ **B.** Inference
- · **C.** Data Augmentation
- · **D.** Hyperparameter Tuning

**Por qué:** Inference es el proceso de usar un modelo entrenado para hacer predicciones o identificar objetos en datos nuevos.

**Por qué no las demás:**
- **A.** Model Deployment se refiere principalmente a poner un modelo entrenado disponible en un entorno de producción.
- **C.** Data augmentation implica crear nuevos ejemplos de entrenamiento aplicando transformaciones como rotaciones, inversiones o cambios de color a datos existentes.
- **D.** Hyperparameter tuning es el proceso de optimizar los hiperparámetros de un modelo para mejorar su desempeño.

### 23. Una empresa utiliza un modelo de IA generativa para automatizar la creación de contenido en sus publicaciones de redes sociales. El modelo ha sido entrenado con diversos temas, incluyendo tecnología, moda y viajes. Recientemente, la empresa decidió expandir su negocio hacia la industria del fitness.

¿Cuál es la capacidad de la IA generativa que será crucial para que el modelo ajuste su salida y genere contenido relevante relacionado con fitness?

- · **A.** Escalabilidad
- ✅ **B.** Adaptabilidad
- · **C.** Creatividad y exploración
- · **D.** Capacidad de respuesta

**Por qué:** Permite ajustar el contenido generado a un dominio nuevo (fitness) sin cambiar de modelo.

**Por qué no las demás:**
- **A.** Se refiere a soportar más carga o demanda, no a ajustar el contenido a un nuevo dominio.
- **C.** Implica generar ideas novedosas, no adaptar la salida a una industria específica.
- **D.** Se relaciona con responder en tiempo real, no con adaptarse a un nuevo contexto.

### 24. Un especialista en IA está estudiando las capacidades de los modelos fundacionales (FMs) para mejorar las soluciones impulsadas por IA de la empresa. Estos modelos potentes pueden ajustarse mediante fine-tuning para varias tareas en función de un pre-entrenamiento extenso en conjuntos de datos grandes. Los especialistas necesitan entender las diferentes capacidades de los modelos fundacionales y cómo pueden aplicarse.

Selecciona las tareas correctas que los FMs pueden realizar para ayudar a la empresa a mejorar su solución impulsada por IA. (Selecciona TRES.)

**Respuestas correctas:**

- **Comprensión visual** -- identifica objetos, escenas y otros elementos dentro de imágenes.
- **Procesamiento de lenguaje** -- responde preguntas en lenguaje natural y puede escribir textos a partir de un prompt.
- **Conversión de voz a texto** -- está diseñada para transcripción y generación de subtítulos en distintos idiomas.

**Por qué no las demás:** Hugging Face es solo una plataforma para compartir modelos, no una capacidad del modelo; el resto de las opciones son aplicaciones puntuales de un foundation model, no capacidades generales.

### 25. Una empresa de retail quiere mejorar su sistema de recomendación de productos utilizando machine learning. Para lograr recomendaciones más precisas, la empresa planea usar vector embeddings de características de productos y preferencias de usuarios. El sistema también debe soportar consultas en tiempo real para encontrar los productos más relevantes rápidamente.

¿Cuál servicio de AWS cumpliría mejor estas necesidades? (Selecciona DOS.)

- · **A.** Amazon DynamoDB
- ✅ **B.** Amazon DocumentDB (with MongoDB compatibility)
- · **C.** Amazon ElastiCache
- ✅ **D.** Amazon OpenSearch Service
- · **E.** AWS Lake Formation

**Por qué:** **B. Amazon DocumentDB (with MongoDB compatibility)** -- Amazon DocumentDB (with MongoDB compatibility) y Amazon OpenSearch Service trabajan juntos para proporcionar una solución completa para crear un sólido sistema de recomendación de productos en; **D. Amazon OpenSearch Service** -- Al mismo tiempo, Amazon OpenSearch Service ofrece las herramientas necesarias para consultas de datos rápidas, escalables y precisas.

**Por qué no las demás:**
- **A.** Aunque este servicio es adecuado para modelos de datos de clave-valor y documentos, carece de soporte nativo para búsquedas eficientes de similitud de vectores.
- **C.** Esta opción es un servicio de almacenamiento en caché administrado que proporciona Redis y Memcached con almacenamiento de datos en memoria.
- **E.** Es un servicio diseñado para simplificar el proceso de construcción de data lakes seguros.

### 26. Un especialista en IA está trabajando con un modelo de deep learning en Amazon SageMaker. El modelo, que incluye una capa softmax, es demasiado grande para caber en la memoria de una única GPU, y el conjunto de datos de entrenamiento también es bastante extenso. El especialista debe elegir una opción incorporada de SageMaker para optimizar el proceso de entrenamiento y gestionar el modelo y el conjunto de datos de gran tamaño.

¿Qué opciones incorporadas de SageMaker debe usar el especialista para manejar el entrenamiento de modelos de gran tamaño?

- · **A.** Incremental Training
- ✅ **B.** Model Parallelism
- · **C.** Managed Spot Training
- · **D.** Pipe Mode

**Por qué:** La característica Model Parallelism de Amazon SageMaker incluye técnicas de optimización automatizadas para minimizar la sobrecarga de comunicación entre GPUs.

**Por qué no las demás:**
- **A.** Solo permite que un modelo se entrene más a fondo con datos adicionales, aprovechando los pesos previamente aprendidos.
- **C.** Reduce el costo usando capacidad Spot sobrante, pero no resuelve que el modelo no quepa en una GPU.
- **D.** Esta opción optimiza el pipeline de datos de entrada transmitiendo datos directamente desde Amazon S3 a las instancias de entrenamiento.

### 27. Un equipo de científicos de datos utiliza Amazon SageMaker para clasificar comentarios de clientes por sentimiento.

¿Qué debería usar el equipo para convertir los datos textuales en representaciones numéricas para su modelo de NLP?

- · **A.** One-Hot Encoding
- · **B.** Tokenization
- · **C.** Feature Scaling
- ✅ **D.** Embeddings

**Por qué:** Los embeddings son la técnica diseñada específicamente para capturar el significado semántico y las relaciones entre palabras.

**Por qué no las demás:**
- **A.** Divide texto en tokens, pero no captura significado semántico por sí sola.
- **B.** Convierte categorías a números, no está pensado para capturar relaciones semánticas de texto.
- **C.** Normaliza valores numéricos a una escala común, no aplica a la información semántica de texto.

---

[← Volver al índice](./README.md)
