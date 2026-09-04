# Servicios de IA de AWS por caso de uso

_26 preguntas · Quiz v2 (TutorialsDojo) · AWS Certified AI Practitioner (AIF-C01)_

## Concepto clave

Qué servicio administrado de AWS resuelve cada tarea de IA puntual: Textract (extraer texto de documentos), Comprehend (NLP/sentimiento), Rekognition (imagen/video), Polly (texto a voz), Transcribe (voz a texto), Translate, Personalize (recomendaciones), Lex (chatbots), Kendra (búsqueda empresarial).

## Truco para reconocerlas

Cada pregunta describe un caso de uso concreto y pide "el servicio más adecuado con el mínimo esfuerzo de administración". La trampa es que varios servicios podrían "funcionar" pero solo uno es el propósito específico del servicio -- por ejemplo, extraer texto de un PDF es Textract, no Comprehend; medir el sentimiento de un texto es Comprehend, no Textract.

## Palabras clave

`extraer texto de documentos` · `voz <-> texto` · `recomendaciones / búsqueda`

## Preguntas

### 1. Una startup de medios quiere mejorar el engagement de los usuarios recomendando artículos personalizados a cada lector, y el equipo planea ejecutar pruebas A/B para comparar diferentes estrategias de recomendación.

¿Cuál es el servicio de AWS más adecuado para implementar esta solución con el mínimo esfuerzo de administración?

- · **A.** Amazon Fraud Detector
- ✅ **B.** Amazon Personalize
- · **C.** Amazon Comprehend
- · **D.** Amazon Q

**Por qué:** Esto hace que Amazon Personalize sea la opción perfecta para una startup de medios que desea entregar contenido personalizado sin esfuerzo.

**Por qué no las demás:**
- **A.** Esta opción se enfoca únicamente en detectar actividades fraudulentas como fraude en pagos en línea y secuestro de cuentas.
- **C.** Este servicio se utiliza principalmente para tareas de procesamiento del lenguaje natural como análisis de sentimientos, reconocimiento de entidades y modelado de tópicos.
- **D.** Es solo un servicio de inteligencia empresarial que permite visualización y análisis de datos, no para generar recomendaciones de contenido personalizado para usuarios.

### 2. Una organización de salud necesita una solución de IA generativa para convertir voz en texto y resumir consultas con pacientes mientras maneja terminología médica y cumple con regulaciones de privacidad. La solución debe basarse en modelos específicos del dominio entrenados con datos clínicos.

¿Cuál servicio de AWS debería usar la organización?

- · **A.** Amazon Comprehend Medical
- · **B.** Amazon Polly
- · **C.** Amazon Transcribe
- ✅ **D.** AWS HealthScribe

**Por qué:** Los flujos de trabajo de AWS HealthScribe incluyen tanto trabajos de transcripción como capacidades de streaming.

**Por qué no las demás:**
- **A.** Este servicio es un servicio de procesamiento de lenguaje natural elegible para HIPAA que simplemente extrae datos de salud de texto clínico no estructurado.
- **B.** Esta opción es un servicio de texto a voz que convierte principalmente texto en voz de sonido natural.
- **C.** Es un servicio general de voz a texto sin modelos de lenguaje médico especializados ni cumplimiento sanitario integrado.

### 3. Un servicio de streaming de música busca mejorar su motor de búsqueda integrando un motor de recomendaciones que sugiera canciones basadas en el historial de escucha y las preferencias de los usuarios. El modelo subyacente requiere un ajuste cuidadoso de hiperparámetros para entregar sugerencias precisas.

¿Cuál de los siguientes servicios de AWS es el más apropiado para cumplir con los requisitos dados?

- · **A.** Amazon Lex
- · **B.** Amazon Comprehend
- · **C.** Amazon Kendra
- ✅ **D.** Amazon Personalize

**Por qué:** Amazon Personalize procesará y analizará tus datos en segundo plano.

**Por qué no las demás:**
- **A.** Es un servicio para crear interfaces conversacionales y chatbots mediante voz y texto.
- **B.** Es un servicio de procesamiento del lenguaje natural (NLP) que se utiliza típicamente para extraer información de texto, como sentimiento, entidades y frases clave.
- **C.** Es un servicio de búsqueda inteligente optimizado principalmente para búsquedas de documentos empresariales.

### 4. Una empresa de servicios financieros recibe muchos contratos y acuerdos de préstamo en formato PDF. La empresa quiere extraer detalles críticos, como nombres de clientes, montos de préstamos y términos de contrato, y convertirlos en formato de texto plano para procesamiento posterior. A medida que crece el volumen de documentos, la empresa necesita una solución automatizada.

¿Qué servicio de AWS extraerá eficientemente la información requerida de estos archivos?

- · **A.** Amazon Transcribe
- · **B.** Amazon Rekognition
- · **C.** Amazon Comprehend
- ✅ **D.** Amazon Textract

**Por qué:** Reconoce tablas, campos de formulario y extrae datos estructurados directamente de documentos como PDFs.

**Por qué no las demás:**
- **A.** Convierte voz a texto, no extrae datos de documentos.
- **B.** Analiza imágenes y video, no extrae texto ni datos estructurados de documentos.
- **C.** Analiza texto que ya fue extraído; no puede extraer texto directamente de un PDF.

### 5. Una compañía de seguros recibe muchos formularios de reclamos en papel de los asegurados. Estos formularios contienen información manuscrita e impresa sobre accidentes, tratamientos médicos y daños a la propiedad. La compañía desea automatizar la extracción de datos relevantes de estos documentos escaneados para agilizar su flujo de trabajo de procesamiento de reclamos.

¿Cuál servicio de AWS recomendarías para lograr este objetivo?

- · **A.** Amazon Polly
- ✅ **B.** Amazon Textract
- · **C.** Amazon Rekognition
- · **D.** Amazon Comprehend

**Por qué:** Textract extrae texto y datos estructurados directamente de documentos escaneados.

**Por qué no las demás:**
- **A.** Convierte texto a voz, justo lo opuesto a extraer texto de un documento.
- **C.** Analiza imágenes y video (rostros, objetos), no extrae texto de documentos.
- **D.** Analiza texto ya existente (sentimiento, entidades), pero no extrae texto desde una imagen escaneada.

### 6. Un hotel de cinco estrellas ha acumulado un volumen significativo de reseñas y formularios de retroalimentación de clientes. El hotel tiene la intención de recopilar estas reseñas para mejorar sus servicios e identificar problemas o preocupaciones recurrentes planteados por sus huéspedes. También están interesados en analizar la retroalimentación para introducir nuevas comodidades, aunque su enfoque principal sigue siendo mejorar los servicios actuales y abordar las quejas frecuentes.

¿Qué servicio de AWS debería utilizar el hotel para analizar efectivamente la retroalimentación de los clientes y mejorar sus servicios?

- · **A.** Amazon QuickSight
- · **B.** Amazon Bedrock
- · **C.** Amazon Kendra
- ✅ **D.** Amazon Comprehend

**Por qué:** Amazon Comprehend sería la mejor opción para analizar reseñas de clientes y formularios de retroalimentación para extraer información, identificar problemas comunes y comprender el sentimiento.

**Por qué no las demás:**
- **A.** Este servicio se utiliza principalmente para crear paneles visuales a partir de datos estructurados y carece de las capacidades de procesamiento del lenguaje natural.
- **B.** Este servicio simplemente pone modelos base disponibles a través de una API.
- **C.** Es solo un servicio de búsqueda inteligente impulsado por machine learning.

### 7. Un analista de negocios necesita una herramienta para hacer preguntas en lenguaje natural y generar gráficos rápidamente con el fin de visualizar datos de ventas de la empresa.

¿Cuál es la opción más adecuada para este caso de uso?

- · **A.** Amazon Q in AWS Glue
- · **B.** Amazon Q Developer in AWS Chatbot
- ✅ **C.** Amazon Q in Amazon QuickSight
- · **D.** Amazon Q in Amazon Redshift

**Por qué:** Permite consultas en lenguaje natural y genera visualizaciones directamente sobre los datos de QuickSight.

**Por qué no las demás:**
- **A.** Prepara y transforma datos (ETL), no ofrece consultas en lenguaje natural ni visualización.
- **B.** Se integra con Slack para notificaciones y comandos, no genera análisis ni visualizaciones.
- **D.** Está orientado a consultas complejas sobre datos, no a interacción en lenguaje natural con visualización.

### 8. Una empresa está construyendo una solución de atención al cliente interactiva que necesita convertir respuestas basadas en texto en voz natural y permitir que los usuarios interactúen mediante voz. El componente de generación de voz aprovecha la inferencia de modelos grandes para producir audio realista con baja latencia.

¿Cuál es el servicio de AWS que la empresa debería usar para implementar la funcionalidad de conversión de texto a voz?

- · **A.** Amazon SageMaker AI
- ✅ **B.** Amazon Polly
- · **C.** Amazon Lex
- · **D.** Amazon Transcribe

**Por qué:** En el escenario dado, donde una empresa está desarrollando una solución de atención al cliente interactiva que requiere convertir respuestas basadas en texto en voz natural y habilitar interacciones por voz.

**Por qué no las demás:**
- **A.** Este es un servicio de aprendizaje automático diseñado principalmente para construir, entrenar e implementar modelos a escala.
- **C.** Aunque se utiliza típicamente para construir interfaces conversacionales y chatbots habilitados por voz, no se especializa en convertir texto a voz.
- **D.** Este servicio es un servicio de conversión de voz a texto, lo que significa que convierte el lenguaje hablado en texto escrito.

### 9. Una empresa de medios quiere implementar un sistema automatizado para detectar y filtrar contenido explícito en imágenes y videos cargados por usuarios. El sistema debe tener una sobrecarga operativa mínima y aprovechar al máximo los servicios administrados de AWS. Los modelos personalizados corren el riesgo de Training Data Poisoning, una amenaza que se evita con servicios administrados.

¿Cuál sería la solución más adecuada para este requisito?

- · **A.** Usar Amazon Transcribe para transcribir audio de videos y filtrar contenido explícito según las transcripciones.
- ✅ **B.** Usar la función Content Moderation de Amazon Rekognition.
- · **C.** Usar Amazon SageMaker Canvas para crear un modelo de moderación de contenido.
- · **D.** Usar funciones AWS Lambda con notificaciones de eventos de Amazon S3 para procesar y filtrar contenido explícito.

**Por qué:** Amazon Rekognition ofrece una función Content Moderation que puede detectar contenido explícito o sugestivo en imágenes y videos.

**Por qué no las demás:**
- **A.** Si bien Amazon Transcribe puede transcribir audio de videos.
- **C.** Amazon SageMaker Canvas es un servicio típicamente utilizado para crear modelos de machine learning sin necesidad de codificar.
- **D.** Si bien es posible construir una solución personalizada usando funciones AWS Lambda activadas por notificaciones de eventos de Amazon S3.

### 10. Una organización de salud planea construir un sistema potenciado con machine learning capaz de acceder a datos estructurados de pacientes, extraer información clave y producir resúmenes concisos.

¿Cuál es la solución más adecuada para este sistema?

- · **A.** Entrenar un modelo personalizado en Amazon SageMaker AI para resumir datos de pacientes basándose en categorías predefinidas y terminología médica.
- ✅ **B.** Aprovechar Amazon Comprehend Medical para identificar entidades médicas clave y relaciones. Implementar lógica basada en reglas para organizar y formatear la información extraída en resúmenes.
- · **C.** Visualizar los datos extraídos en Amazon QuickSight y crear dashboards de resumen que proporcionen información sobre los datos de pacientes.
- · **D.** Extraer texto de documentos escaneados usando Amazon Textract, luego construir un sistema para identificar palabras clave importantes y generar resúmenes concisos basados en estos datos.

**Por qué:** Implementar lógica basada en reglas para organizar y formatear la información extraída en resúmenes.

**Por qué no las demás:**
- **A.** Aunque Amazon SageMaker AI es un servicio poderoso para construir, entrenar e implementar modelos de machine learning.
- **C.** Es un servicio de inteligencia empresarial que se destaca principalmente en visualizar datos a través de dashboards.
- **D.** Este servicio es un servicio de OCR (reconocimiento óptico de caracteres) que simplemente convierte documentos escaneados en texto legible por máquina.

### 11. Una empresa de servicios financieros necesita analizar comentarios de clientes provenientes de respuestas de encuestas para comprender el sentimiento general. Como parte de su estrategia de experiencia del cliente, la empresa realiza un seguimiento de la Satisfacción del Cliente (CSAT) para medir los niveles de satisfacción y necesita una forma automatizada de procesar grandes volúmenes de datos de texto a escala. La solución debe realizar análisis de sentimiento para detectar automáticamente tonos positivos, negativos o neutros en los datos de texto, y debe ser lo suficientemente flexible para admitir tanto el procesamiento de NLP basado en reglas como la interpretación impulsada por IA generativa de respuestas de encuestas abiertas.

¿Cuáles son los servicios de AWS más adecuados para esta solución? (Selecciona DOS.)

- ✅ **A.** Amazon Bedrock
- · **B.** Amazon Translate
- ✅ **C.** Amazon Comprehend
- · **D.** Amazon Polly
- · **E.** Amazon Textract

**Por qué:** **A. Amazon Bedrock** -- Los más adecuados para analizar comentarios de clientes y detectar automáticamente el sentimiento en datos de texto son Amazon Comprehend y Amazon Bedrock; **C. Amazon Comprehend** -- Amazon Comprehend es un servicio de procesamiento de lenguaje natural (NLP) que utiliza aprendizaje automático para identificar sentimiento (positivo, negativo, neutro) en texto.

**Por qué no las demás:**
- **B.** Esta opción está diseñada típicamente para traducir texto entre diferentes idiomas en tiempo real.
- **D.** Este servicio es simplemente un servicio de conversión de texto a voz que convierte contenido escrito en palabra hablada.
- **E.** Está diseñado principalmente para extraer automáticamente texto y datos de documentos y imágenes escaneados, como archivos PDF o imágenes que contienen formularios y tablas.

### 12. Una empresa quiere construir un pipeline de análisis usando AWS Glue Studio. El equipo ha usado AWS Glue DataBrew para preparación visual de datos, pero necesita una forma con bajo código para construir el pipeline de ML.

¿Cuál de las siguientes opciones cumple con el requisito establecido?

- · **A.** Amazon Comprehend
- ✅ **B.** Amazon Q Developer
- · **C.** Amazon Bedrock
- · **D.** Amazon Lex

**Por qué:** Proporciona asistencia basada en IA para desarrolladores que trabajan con servicios de AWS, incluido AWS Glue Studio.

**Por qué no las demás:**
- **A.** Comprehend es un servicio de procesamiento de lenguaje natural (NLP) típicamente usado para extraer información de texto.
- **C.** Bedrock es un servicio para construir y escalar aplicaciones de IA generativa usando foundation models.
- **D.** Lex está diseñado principalmente para construir interfaces conversacionales usando voz y texto, como chatbots.

### 13. Una empresa está desarrollando una aplicación móvil que asiste a usuarios con discapacidad visual. La app debe poder convertir texto impreso de imágenes en lenguaje hablado. Los usuarios pueden tomar fotos de documentos, notas manuscritas o etiquetas de productos, y la aplicación leerá el contenido en voz alta. La aplicación necesita ser precisa, confiable y eficiente.

¿Qué servicios de AWS recomendarías para implementar esta funcionalidad? (Selecciona DOS.)

- ✅ **A.** Amazon Polly
- ✅ **B.** Amazon Textract
- · **C.** Amazon Comprehend
- · **D.** Amazon Rekognition
- · **E.** Amazon Lex

**Por qué:** **A. Amazon Polly** -- Amazon Polly es un servicio de síntesis de voz que convierte texto en habla natural; **B. Amazon Textract** -- Cuando un usuario toma una foto de un documento, nota manuscrita o etiqueta de producto.

**Por qué no las demás:**
- **C.** Es un servicio de procesamiento de lenguaje natural (NLP) que analiza texto para detectar sentimiento, entidades y frases clave.
- **D.** Se enfoca únicamente en análisis de imágenes y videos, incluida la detección de rostros y objetos.
- **E.** Es un servicio principalmente para crear interfaces conversacionales (chatbots) utilizando comprensión del lenguaje natural (NLU).

### 14. Un bufete de abogados tiene una gran colección de documentos legales escaneados y expedientes de casos en formato PDF. Necesitan un sistema que automatice la extracción de texto, identifique elementos clave como tablas y formularios, y analice contenido de imágenes para minimizar la intervención manual.

¿Cuáles servicios de AWS cumplirán de manera más eficiente con las necesidades del bufete CON LA MENOR cantidad de gestión operativa? (Selecciona DOS.)

- · **A.** Amazon Comprehend
- ✅ **B.** Amazon Textract
- · **C.** Amazon Kendra
- · **D.** Amazon Personalize
- ✅ **E.** Amazon Rekognition

**Por qué:** **B. Amazon Textract** -- Al combinar Amazon Textract y Amazon Rekognition; **E. Amazon Rekognition** -- Amazon Rekognition es un servicio de ML para análisis de imágenes y video que utiliza algoritmos de deep learning para identificar objetos, personas, texto.

**Por qué no las demás:**
- **A.** Esta opción es un servicio de Procesamiento del Lenguaje Natural (NLP) que se enfoca principalmente en analizar y extraer información del texto.
- **C.** Esta opción es un servicio de búsqueda inteligente diseñado para habilitar capacidades de búsqueda semántica en grandes repositorios de texto.
- **D.** Es un servicio que te permite construir sistemas de recomendaciones personalizadas.

### 15. Una empresa minorista está lanzando un chatbot de atención al cliente con capacidades de procesamiento del lenguaje natural (NLP), basado en modelos BERT, para manejar consultas de productos, seguimiento de pedidos y devoluciones en múltiples canales, incluyendo texto y voz. La solución también debe ofrecer información sobre el comportamiento de los clientes para mejorar las ofertas de servicio.

¿Cuál servicio de AWS proporciona la solución más adecuada para este requisito?

- · **A.** Amazon Q
- · **B.** Amazon SageMaker
- ✅ **C.** Amazon Lex
- · **D.** Amazon Comprehend

**Por qué:** Amazon Lex también incluye soporte integrado para monitoreo y registro de interacciones.

**Por qué no las demás:**
- **A.** Responde consultas sobre fuentes de datos estructurados (FAQs, bases de datos), no gestiona chatbots multicanal con voz.
- **B.** Permite entrenar e implementar modelos de ML, pero no incluye interfaz conversacional lista para usar.
- **D.** Esta opción es un servicio de procesamiento del lenguaje natural (NLP) que utiliza aprendizaje automático para encontrar información y relaciones en el texto.

### 16. Una empresa de seguros de salud extrae manualmente información sensible de formularios de reclamos y documentos adjuntos. Este proceso manual ha causado retrasos significativos para los clientes que buscan beneficios de atención médica. Para mejorar la atención al cliente y reducir el trabajo manual, la empresa desea automatizar el proceso de extracción para acelerar el manejo y procesamiento de reclamos.

¿Cuál servicio de AWS ayudará a cumplir los objetivos de la empresa?

- · **A.** Amazon Personalize
- · **B.** Amazon Comprehend
- · **C.** Amazon Lex
- ✅ **D.** Amazon Textract

**Por qué:** Al automatizar el proceso de extracción, Amazon Textract reduce significativamente la necesidad de entrada de datos manual, acelerando así los flujos de trabajo y minimizando el potencial de error humano.

**Por qué no las demás:**
- **A.** Es un servicio que solo proporciona recomendaciones personalizadas y experiencias de usuario analizando el comportamiento y preferencias del usuario.
- **B.** Este servicio se utiliza principalmente para tareas de procesamiento de lenguaje natural (NLP) como análisis de sentimiento, reconocimiento de entidades y detección de idioma.
- **C.** Esta opción es para crear interfaces conversacionales usando voz y texto.

### 17. Una empresa ha diseñado un asistente de IA que proporciona respuestas visuales a las consultas de los usuarios. La empresa busca implementar una solución para evitar que el chatbot devuelva imágenes dañinas o inapropiadas.

¿Cuál es el enfoque que logrará este objetivo?

- ✅ **A.** Usar APIs de moderación de contenido para filtrado de imágenes.
- · **B.** Realizar validación del modelo para asegurar que cumple con estándares de desempeño y produce resultados confiables.
- · **C.** Implementar detección automática de idioma para evitar consultas ofensivas.
- · **D.** Hacer fine-tuning del algoritmo de generación de respuestas del chatbot.

**Por qué:** Al implementar esta API de moderación, la empresa puede alcanzar con confianza su objetivo de prevenir que imágenes inapropiadas se muestren en el asistente de IA.

**Por qué no las demás:**
- **B.** La validación del modelo se enfoca únicamente en evaluar la precisión, desempeño y confiabilidad del modelo, no en prevenir contenido dañino.
- **C.** Este enfoque simplemente ayuda a identificar el idioma de las consultas del usuario.
- **D.** Hacer fine-tuning del algoritmo de generación de respuestas típicamente impacta el output basado en texto en lugar de las imágenes visuales.

### 18. Un equipo de desarrollo está construyendo una plataforma de redes sociales que permite a los usuarios subir imágenes. Quieren asegurarse de que el contenido inapropiado sea filtrado.

¿Cuál API de Amazon Rekognition puede detectar contenido no seguro en una imagen en formato JPEG o PNG especificada?

- · **A.** DetectLabels
- · **B.** DetectFaces
- · **C.** DetectText
- ✅ **D.** DetectModerationLabels

**Por qué:** DetectModerationLabels marca o bloquea automáticamente contenido que viola las normas, con etiquetas de moderación y puntuaciones de confianza.

**Por qué no las demás:**
- **A.** Esta API identifica etiquetas generales y objetos en una imagen, pero no se enfoca específicamente en moderación o contenido no seguro.
- **B.** Esta API detecta principalmente rostros en una imagen.
- **C.** Esta API solo se enfoca en extraer texto de imágenes, no en identificar contenido no seguro.

### 19. Una empresa de tecnología planea usar un modelo de machine learning (ML) para detectar lenguaje inapropiado en comentarios de redes sociales, filtrarlo y banear a los usuarios infractores para mantener un ambiente seguro en su comunidad. La empresa prefiere entrenar el modelo sin datos etiquetados.

¿Qué enfoque debe usar la empresa para detectar lenguaje inapropiado y marcar contenido dañino?

- · **A.** Usar la moderación de contenido de Amazon Rekognition.
- ✅ **B.** Usar la detección de toxicidad de Amazon Comprehend.
- · **C.** Usar la moderación de contenido de Amazon Augmented AI (A2I).
- · **D.** Usar la detección de toxicidad de Amazon Transcribe.

**Por qué:** Existe la opción de entrenar modelos únicos para clasificación y reconocimiento de entidades, o usar los modelos pre-entrenados que ofrece Amazon Comprehend.

**Por qué no las demás:**
- **A.** Reconoce texto dentro de imágenes/video, pero no analiza texto escrito como comentarios.
- **C.** Inserta revisión humana en flujos de ML; no detecta toxicidad automáticamente por sí sola.
- **D.** Detecta toxicidad en audio hablado (llamadas, mensajes de voz), no en texto escrito.

### 20. Una empresa de comercio electrónico necesita analizar reseñas de clientes para determinar el sentimiento general (positivo, negativo, neutral o mixto) y extraer frases clave y entidades del texto. La solución debe basarse en modelos BERT y aprendizaje Zero-shot para clasificar con precisión el sentimiento y las entidades.

¿Cuál de los siguientes servicios de AWS es apropiado utilizar?

- · **A.** Amazon Polly
- · **B.** Amazon Textract
- · **C.** Amazon Lex
- ✅ **D.** Amazon Comprehend

**Por qué:** Analiza texto para detectar sentimiento, entidades y frases clave, justo el tipo de NLP que pide el escenario.

**Por qué no las demás:**
- **A.** Convierte texto a voz, no analiza sentimiento ni extrae entidades.
- **B.** Extrae texto de documentos escaneados, no hace análisis de sentimiento.
- **C.** Construye chatbots conversacionales, no está pensado para análisis de sentimiento o entidades.

### 21. Una empresa quiere mejorar la productividad de sus desarrolladores usando IA generativa mediante la automatización de la generación de código. El equipo está considerando Amazon Q Developer para asistir en estas tareas. La solución aprovecha el few-shot learning para generar sugerencias de código contextualmente relevantes a partir de un pequeño número de ejemplos de código existentes.

¿Cuál característica de Q Developer sería la que mejor apoyaría el objetivo de la empresa?

- · **A.** Asistir con la automatización de revisiones de código e identificar posibles errores en tiempo real.
- ✅ **B.** Generar snippets de código, gestionar el seguimiento de referencias y monitorear el cumplimiento de licencias de código abierto.
- · **C.** Activar control de voz para programar y permitir búsqueda en lenguaje natural.
- · **D.** Automatizar la asignación de tareas y el seguimiento del progreso mediante modelos de machine learning.

**Por qué:** Al usar IA para crear snippets de código, hacer seguimiento de referencias y garantizar el cumplimiento de estándares de código abierto.

**Por qué no las demás:**
- **A.** Esta característica se enfoca principalmente en mantener la calidad del código, lo que puede ayudar a reducir deuda técnica.
- **C.** Amazon Q Developer simplemente no ofrece actualmente funcionalidad de codificación activada por voz ni búsqueda en lenguaje natural.
- **D.** Esta característica está más relacionada con herramientas de gestión de proyectos o servicios de operaciones empresariales basados en ML.

### 22. Una empresa manufacturera necesita generar descripciones de productos para una nueva línea de dispositivos para el hogar inteligente en varios idiomas (inglés, filipino, francés y alemán). La empresa quiere automatizar el proceso de traducción de estas descripciones de productos para su tienda en línea para ahorrar tiempo y garantizar consistencia en todas las versiones de idiomas de los listados de productos. Para mantener la precisión en todos los idiomas, la solución debe capturar las relaciones contextuales entre palabras en lugar de traducir palabra por palabra.

¿Qué servicio de AWS se debe utilizar para automatizar este proceso?

- · **A.** Amazon Lex
- ✅ **B.** Amazon Translate
- · **C.** Amazon Transcribe
- · **D.** Amazon Comprehend

**Por qué:** Una de las características clave de Amazon Translate es la traducción por lotes, que permite traducir grandes volúmenes de texto almacenados en Amazon S3.

**Por qué no las demás:**
- **A.** Es principalmente un servicio para construir interfaces conversacionales y chatbots que comprendan lenguaje natural.
- **C.** Es un servicio de conversión de voz a texto que solo convierte entrada de audio en texto escrito.
- **D.** Es un servicio de procesamiento de lenguaje natural (NLP) que simplemente analiza texto para obtener información como sentimiento, entidades y frases clave.

### 23. Una empresa de comercio electrónico recibe cientos de facturas de proveedores todos los días. El equipo de finanzas dedica una cantidad significativa de tiempo a extraer manualmente información relevante de estas facturas, como números de factura, detalles de línea de pedido y montos totales. El objetivo es optimizar este proceso utilizando herramientas impulsadas por IA.

¿Cuál de las siguientes opciones cumplirá con los requisitos?

- · **A.** Detección de fraude
- · **B.** Computer vision
- ✅ **C.** Intelligent Document Processing (IDP)
- · **D.** Natural Language Processing

**Por qué:** Intelligent Document Processing (IDP) automatiza el proceso de ingreso manual de datos desde documentos en papel o imágenes de documentos para integrarlos con otros procesos empresariales digitales.

**Por qué no las demás:**
- **A.** Solo se enfoca en identificar actividades o patrones fraudulentos, no en document processing.
- **B.** Se enfoca principalmente en entender e interpretar información visual de imágenes o videos.
- **D.** Aunque es esencial para entender y procesar lenguaje humano, no aborda directamente los requisitos de extracción de datos estructurados de facturas.

### 24. ¿Cuál es el servicio de AWS que debería utilizar la empresa para analizar y extraer información clave de grabaciones de audio de reuniones con fines de documentación, aprovechando la tecnología de reconocimiento de voz?

- · **A.** Amazon Translate
- ✅ **B.** Amazon Transcribe
- · **C.** Amazon Comprehend
- · **D.** Amazon Lex

**Por qué:** Amazon Transcribe ofrece una solución eficiente y escalable para empresas que necesitan automatizar la conversión de audio a texto y extraer información de él.

**Por qué no las demás:**
- **A.** Es un servicio diseñado únicamente para traducir automáticamente texto entre diferentes idiomas.
- **C.** Este servicio de procesamiento del lenguaje natural (NLP) analiza texto para extraer información como sentimiento, frases clave o detección del idioma.
- **D.** Se utiliza principalmente para crear interfaces conversacionales, como chatbots y asistentes de voz.

### 25. Una empresa de retail quiere un chatbot para ayudar a los clientes con recomendaciones de productos e inquietudes sobre pedidos. El chatbot debe utilizar el catálogo de productos e historial de pedidos almacenados en Amazon S3. La empresa necesita un servicio completamente gestionado que maneje la comprensión del lenguaje natural con modelos basados en BERT, selección de modelos y flujo de conversación con configuración y mantenimiento mínimos.

¿Cuál es el servicio de AWS MÁS adecuado para este caso de uso?

- · **A.** Amazon Q Business
- · **B.** Amazon Kendra
- · **C.** Amazon Transcribe
- ✅ **D.** Amazon Lex

**Por qué:** Al usar Amazon Lex, la empresa de retail puede enfocarse en diseñar y construir la experiencia conversacional para sus clientes.

**Por qué no las demás:**
- **A.** Es un asistente impulsado por inteligencia artificial generativa diseñado principalmente para empresas, para responder preguntas, proporcionar resúmenes.
- **B.** Se enfoca principalmente en búsqueda inteligente y no es la mejor opción para construir un sistema de IA conversacional como un chatbot.
- **C.** Es solo un servicio de reconocimiento automático de voz y no proporciona las capacidades requeridas para construir un sistema de IA conversacional que pueda.

### 26. Un despacho legal necesita un potente motor de búsqueda para encontrar fácilmente información relevante en una vasta colección de documentos legales no estructurados utilizando consultas en lenguaje natural. La solución aprovecha modelos basados en BERT para interpretar la intención de la consulta y entregar resultados precisos y contextuales.

¿Cuál de las siguientes opciones cumplirá con estos requisitos?

- · **A.** Amazon Personalize
- · **B.** Amazon Q
- ✅ **C.** Amazon Kendra
- · **D.** Amazon Comprehend

**Por qué:** Amazon Kendra extrae contenido de estos documentos para hacerlos buscables.

**Por qué no las demás:**
- **A.** Amazon Personalize es un servicio de aprendizaje automático para construir sistemas de recomendación, como sugerir productos o contenido a usuarios basándose en su comportamiento.
- **B.** Es un asistente impulsado por IA enfocado en mejorar la productividad, responder preguntas y generar código o documentación.
- **D.** Amazon Comprehend es un servicio de procesamiento de lenguaje natural (NLP) que típicamente puede extraer entidades, detectar sentimientos y clasificar texto.

---

[← Volver al índice](./README.md)
