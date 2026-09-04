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

### 2. Una organización de salud necesita una solución de IA generativa para convertir voz en texto y resumir consultas con pacientes mientras maneja terminología médica y cumple con regulaciones de privacidad. La solución debe basarse en modelos específicos del dominio entrenados con datos clínicos.

¿Cuál servicio de AWS debería usar la organización?

- · **A.** Amazon Comprehend Medical
- · **B.** Amazon Polly
- · **C.** Amazon Transcribe
- ✅ **D.** AWS HealthScribe

### 3. Un servicio de streaming de música busca mejorar su motor de búsqueda integrando un motor de recomendaciones que sugiera canciones basadas en el historial de escucha y las preferencias de los usuarios. El modelo subyacente requiere un ajuste cuidadoso de hiperparámetros para entregar sugerencias precisas.

¿Cuál de los siguientes servicios de AWS es el más apropiado para cumplir con los requisitos dados?

- · **A.** Amazon Lex
- · **B.** Amazon Comprehend
- · **C.** Amazon Kendra
- ✅ **D.** Amazon Personalize

### 4. Una empresa de servicios financieros recibe muchos contratos y acuerdos de préstamo en formato PDF. La empresa quiere extraer detalles críticos, como nombres de clientes, montos de préstamos y términos de contrato, y convertirlos en formato de texto plano para procesamiento posterior. A medida que crece el volumen de documentos, la empresa necesita una solución automatizada.

¿Qué servicio de AWS extraerá eficientemente la información requerida de estos archivos?

- · **A.** Amazon Transcribe
- · **B.** Amazon Rekognition
- · **C.** Amazon Comprehend
- ✅ **D.** Amazon Textract

### 5. Una compañía de seguros recibe muchos formularios de reclamos en papel de los asegurados. Estos formularios contienen información manuscrita e impresa sobre accidentes, tratamientos médicos y daños a la propiedad. La compañía desea automatizar la extracción de datos relevantes de estos documentos escaneados para agilizar su flujo de trabajo de procesamiento de reclamos.

¿Cuál servicio de AWS recomendarías para lograr este objetivo?

- · **A.** Amazon Polly
- ✅ **B.** Amazon Textract
- · **C.** Amazon Rekognition
- · **D.** Amazon Comprehend

### 6. Un hotel de cinco estrellas ha acumulado un volumen significativo de reseñas y formularios de retroalimentación de clientes. El hotel tiene la intención de recopilar estas reseñas para mejorar sus servicios e identificar problemas o preocupaciones recurrentes planteados por sus huéspedes. También están interesados en analizar la retroalimentación para introducir nuevas comodidades, aunque su enfoque principal sigue siendo mejorar los servicios actuales y abordar las quejas frecuentes.

¿Qué servicio de AWS debería utilizar el hotel para analizar efectivamente la retroalimentación de los clientes y mejorar sus servicios?

- · **A.** Amazon QuickSight
- · **B.** Amazon Bedrock
- · **C.** Amazon Kendra
- ✅ **D.** Amazon Comprehend

### 7. Un analista de negocios necesita una herramienta para hacer preguntas en lenguaje natural y generar gráficos rápidamente con el fin de visualizar datos de ventas de la empresa.

¿Cuál es la opción más adecuada para este caso de uso?

- · **A.** Amazon Q in AWS Glue
- · **B.** Amazon Q Developer in AWS Chatbot
- ✅ **C.** Amazon Q in Amazon QuickSight
- · **D.** Amazon Q in Amazon Redshift

### 8. Una empresa está construyendo una solución de atención al cliente interactiva que necesita convertir respuestas basadas en texto en voz natural y permitir que los usuarios interactúen mediante voz. El componente de generación de voz aprovecha la inferencia de modelos grandes para producir audio realista con baja latencia.

¿Cuál es el servicio de AWS que la empresa debería usar para implementar la funcionalidad de conversión de texto a voz?

- · **A.** Amazon SageMaker AI
- ✅ **B.** Amazon Polly
- · **C.** Amazon Lex
- · **D.** Amazon Transcribe

### 9. Una empresa de medios quiere implementar un sistema automatizado para detectar y filtrar contenido explícito en imágenes y videos cargados por usuarios. El sistema debe tener una sobrecarga operativa mínima y aprovechar al máximo los servicios administrados de AWS. Los modelos personalizados corren el riesgo de Training Data Poisoning, una amenaza que se evita con servicios administrados.

¿Cuál sería la solución más adecuada para este requisito?

- · **A.** Usar Amazon Transcribe para transcribir audio de videos y filtrar contenido explícito según las transcripciones.
- ✅ **B.** Usar la función Content Moderation de Amazon Rekognition.
- · **C.** Usar Amazon SageMaker Canvas para crear un modelo de moderación de contenido.
- · **D.** Usar funciones AWS Lambda con notificaciones de eventos de Amazon S3 para procesar y filtrar contenido explícito.

### 10. Una organización de salud planea construir un sistema potenciado con machine learning capaz de acceder a datos estructurados de pacientes, extraer información clave y producir resúmenes concisos.

¿Cuál es la solución más adecuada para este sistema?

- · **A.** Entrenar un modelo personalizado en Amazon SageMaker AI para resumir datos de pacientes basándose en categorías predefinidas y terminología médica.
- ✅ **B.** Aprovechar Amazon Comprehend Medical para identificar entidades médicas clave y relaciones. Implementar lógica basada en reglas para organizar y formatear la información extraída en resúmenes.
- · **C.** Visualizar los datos extraídos en Amazon QuickSight y crear dashboards de resumen que proporcionen información sobre los datos de pacientes.
- · **D.** Extraer texto de documentos escaneados usando Amazon Textract, luego construir un sistema para identificar palabras clave importantes y generar resúmenes concisos basados en estos datos.

### 11. Una empresa de servicios financieros necesita analizar comentarios de clientes provenientes de respuestas de encuestas para comprender el sentimiento general. Como parte de su estrategia de experiencia del cliente, la empresa realiza un seguimiento de la Satisfacción del Cliente (CSAT) para medir los niveles de satisfacción y necesita una forma automatizada de procesar grandes volúmenes de datos de texto a escala. La solución debe realizar análisis de sentimiento para detectar automáticamente tonos positivos, negativos o neutros en los datos de texto, y debe ser lo suficientemente flexible para admitir tanto el procesamiento de NLP basado en reglas como la interpretación impulsada por IA generativa de respuestas de encuestas abiertas.

¿Cuáles son los servicios de AWS más adecuados para esta solución? (Selecciona DOS.)

- ✅ **A.** Amazon Bedrock
- · **B.** Amazon Translate
- ✅ **C.** Amazon Comprehend
- · **D.** Amazon Polly
- · **E.** Amazon Textract

### 12. Una empresa quiere construir un pipeline de análisis usando AWS Glue Studio. El equipo ha usado AWS Glue DataBrew para preparación visual de datos, pero necesita una forma con bajo código para construir el pipeline de ML.

¿Cuál de las siguientes opciones cumple con el requisito establecido?

- · **A.** Amazon Comprehend
- ✅ **B.** Amazon Q Developer
- · **C.** Amazon Bedrock
- · **D.** Amazon Lex

### 13. Una empresa está desarrollando una aplicación móvil que asiste a usuarios con discapacidad visual. La app debe poder convertir texto impreso de imágenes en lenguaje hablado. Los usuarios pueden tomar fotos de documentos, notas manuscritas o etiquetas de productos, y la aplicación leerá el contenido en voz alta. La aplicación necesita ser precisa, confiable y eficiente.

¿Qué servicios de AWS recomendarías para implementar esta funcionalidad? (Selecciona DOS.)

- ✅ **A.** Amazon Polly
- ✅ **B.** Amazon Textract
- · **C.** Amazon Comprehend
- · **D.** Amazon Rekognition
- · **E.** Amazon Lex

### 14. Un bufete de abogados tiene una gran colección de documentos legales escaneados y expedientes de casos en formato PDF. Necesitan un sistema que automatice la extracción de texto, identifique elementos clave como tablas y formularios, y analice contenido de imágenes para minimizar la intervención manual.

¿Cuáles servicios de AWS cumplirán de manera más eficiente con las necesidades del bufete CON LA MENOR cantidad de gestión operativa? (Selecciona DOS.)

- · **A.** Amazon Comprehend
- ✅ **B.** Amazon Textract
- · **C.** Amazon Kendra
- · **D.** Amazon Personalize
- ✅ **E.** Amazon Rekognition

### 15. Una empresa minorista está lanzando un chatbot de atención al cliente con capacidades de procesamiento del lenguaje natural (NLP), basado en modelos BERT, para manejar consultas de productos, seguimiento de pedidos y devoluciones en múltiples canales, incluyendo texto y voz. La solución también debe ofrecer información sobre el comportamiento de los clientes para mejorar las ofertas de servicio.

¿Cuál servicio de AWS proporciona la solución más adecuada para este requisito?

- · **A.** Amazon Q
- · **B.** Amazon SageMaker
- ✅ **C.** Amazon Lex
- · **D.** Amazon Comprehend

### 16. Una empresa de seguros de salud extrae manualmente información sensible de formularios de reclamos y documentos adjuntos. Este proceso manual ha causado retrasos significativos para los clientes que buscan beneficios de atención médica. Para mejorar la atención al cliente y reducir el trabajo manual, la empresa desea automatizar el proceso de extracción para acelerar el manejo y procesamiento de reclamos.

¿Cuál servicio de AWS ayudará a cumplir los objetivos de la empresa?

- · **A.** Amazon Personalize
- · **B.** Amazon Comprehend
- · **C.** Amazon Lex
- ✅ **D.** Amazon Textract

### 17. Una empresa ha diseñado un asistente de IA que proporciona respuestas visuales a las consultas de los usuarios. La empresa busca implementar una solución para evitar que el chatbot devuelva imágenes dañinas o inapropiadas.

¿Cuál es el enfoque que logrará este objetivo?

- ✅ **A.** Usar APIs de moderación de contenido para filtrado de imágenes.
- · **B.** Realizar validación del modelo para asegurar que cumple con estándares de desempeño y produce resultados confiables.
- · **C.** Implementar detección automática de idioma para evitar consultas ofensivas.
- · **D.** Hacer fine-tuning del algoritmo de generación de respuestas del chatbot.

### 18. Un equipo de desarrollo está construyendo una plataforma de redes sociales que permite a los usuarios subir imágenes. Quieren asegurarse de que el contenido inapropiado sea filtrado.

¿Cuál API de Amazon Rekognition puede detectar contenido no seguro en una imagen en formato JPEG o PNG especificada?

- · **A.** DetectLabels
- · **B.** DetectFaces
- · **C.** DetectText
- ✅ **D.** DetectModerationLabels

### 19. Una empresa de tecnología planea usar un modelo de machine learning (ML) para detectar lenguaje inapropiado en comentarios de redes sociales, filtrarlo y banear a los usuarios infractores para mantener un ambiente seguro en su comunidad. La empresa prefiere entrenar el modelo sin datos etiquetados.

¿Qué enfoque debe usar la empresa para detectar lenguaje inapropiado y marcar contenido dañino?

- · **A.** Usar la moderación de contenido de Amazon Rekognition.
- ✅ **B.** Usar la detección de toxicidad de Amazon Comprehend.
- · **C.** Usar la moderación de contenido de Amazon Augmented AI (A2I).
- · **D.** Usar la detección de toxicidad de Amazon Transcribe.

### 20. Una empresa de comercio electrónico necesita analizar reseñas de clientes para determinar el sentimiento general (positivo, negativo, neutral o mixto) y extraer frases clave y entidades del texto. La solución debe basarse en modelos BERT y aprendizaje Zero-shot para clasificar con precisión el sentimiento y las entidades.

¿Cuál de los siguientes servicios de AWS es apropiado utilizar?

- · **A.** Amazon Polly
- · **B.** Amazon Textract
- · **C.** Amazon Lex
- ✅ **D.** Amazon Comprehend

### 21. Una empresa quiere mejorar la productividad de sus desarrolladores usando IA generativa mediante la automatización de la generación de código. El equipo está considerando Amazon Q Developer para asistir en estas tareas. La solución aprovecha el few-shot learning para generar sugerencias de código contextualmente relevantes a partir de un pequeño número de ejemplos de código existentes.

¿Cuál característica de Q Developer sería la que mejor apoyaría el objetivo de la empresa?

- · **A.** Asistir con la automatización de revisiones de código e identificar posibles errores en tiempo real.
- ✅ **B.** Generar snippets de código, gestionar el seguimiento de referencias y monitorear el cumplimiento de licencias de código abierto.
- · **C.** Activar control de voz para programar y permitir búsqueda en lenguaje natural.
- · **D.** Automatizar la asignación de tareas y el seguimiento del progreso mediante modelos de machine learning.

### 22. Una empresa manufacturera necesita generar descripciones de productos para una nueva línea de dispositivos para el hogar inteligente en varios idiomas (inglés, filipino, francés y alemán). La empresa quiere automatizar el proceso de traducción de estas descripciones de productos para su tienda en línea para ahorrar tiempo y garantizar consistencia en todas las versiones de idiomas de los listados de productos. Para mantener la precisión en todos los idiomas, la solución debe capturar las relaciones contextuales entre palabras en lugar de traducir palabra por palabra.

¿Qué servicio de AWS se debe utilizar para automatizar este proceso?

- · **A.** Amazon Lex
- ✅ **B.** Amazon Translate
- · **C.** Amazon Transcribe
- · **D.** Amazon Comprehend

### 23. Una empresa de comercio electrónico recibe cientos de facturas de proveedores todos los días. El equipo de finanzas dedica una cantidad significativa de tiempo a extraer manualmente información relevante de estas facturas, como números de factura, detalles de línea de pedido y montos totales. El objetivo es optimizar este proceso utilizando herramientas impulsadas por IA.

¿Cuál de las siguientes opciones cumplirá con los requisitos?

- · **A.** Detección de fraude
- · **B.** Computer vision
- ✅ **C.** Intelligent Document Processing (IDP)
- · **D.** Natural Language Processing

### 24. ¿Cuál es el servicio de AWS que debería utilizar la empresa para analizar y extraer información clave de grabaciones de audio de reuniones con fines de documentación, aprovechando la tecnología de reconocimiento de voz?

- · **A.** Amazon Translate
- ✅ **B.** Amazon Transcribe
- · **C.** Amazon Comprehend
- · **D.** Amazon Lex

### 25. Una empresa de retail quiere un chatbot para ayudar a los clientes con recomendaciones de productos e inquietudes sobre pedidos. El chatbot debe utilizar el catálogo de productos e historial de pedidos almacenados en Amazon S3. La empresa necesita un servicio completamente gestionado que maneje la comprensión del lenguaje natural con modelos basados en BERT, selección de modelos y flujo de conversación con configuración y mantenimiento mínimos.

¿Cuál es el servicio de AWS MÁS adecuado para este caso de uso?

- · **A.** Amazon Q Business
- · **B.** Amazon Kendra
- · **C.** Amazon Transcribe
- ✅ **D.** Amazon Lex

### 26. Un despacho legal necesita un potente motor de búsqueda para encontrar fácilmente información relevante en una vasta colección de documentos legales no estructurados utilizando consultas en lenguaje natural. La solución aprovecha modelos basados en BERT para interpretar la intención de la consulta y entregar resultados precisos y contextuales.

¿Cuál de las siguientes opciones cumplirá con estos requisitos?

- · **A.** Amazon Personalize
- · **B.** Amazon Q
- ✅ **C.** Amazon Kendra
- · **D.** Amazon Comprehend

---

[← Volver al índice](./README.md)
