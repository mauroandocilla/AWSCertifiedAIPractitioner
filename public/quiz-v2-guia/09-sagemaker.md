# Ecosistema de herramientas de SageMaker

_27 preguntas · Quiz v2 (TutorialsDojo) · AWS Certified AI Practitioner (AIF-C01)_

## Concepto clave

Qué herramienta dentro de SageMaker resuelve cada tarea: Canvas (sin código), JumpStart (modelos preconfigurados), Data Wrangler (limpieza de datos), Ground Truth (etiquetado), Clarify (sesgo/explicabilidad), Model Monitor (monitoreo en producción), Model Registry (versionado) y Model Cards (documentación).

## Truco para reconocerlas

Sin equipo de ciencia de datos / interfaz visual -> Canvas. Modelos ya entrenados listos para usar -> JumpStart. Preparar o limpiar datos -> Data Wrangler. Etiquetar datos con intervención humana -> Ground Truth. Detectar o explicar sesgo -> Clarify. Vigilar un modelo ya desplegado en producción -> Model Monitor. Documentar el modelo para una auditoría -> Model Cards.

## Palabras clave

`sin código` · `preconfigurado / JumpStart` · `sesgo / explicabilidad`

## Preguntas

### 1. Una organización de salud está desarrollando múltiples modelos de machine learning en Amazon SageMaker. Los equipos involucrados necesitan una solución centralizada para almacenar y reutilizar features de modelos en diferentes proyectos para mejorar la colaboración y la consistencia.

¿Qué feature de SageMaker deberían usar los equipos?

- · **A.** Amazon SageMaker Model Monitor
- · **B.** Amazon SageMaker Clarify
- ✅ **C.** Amazon SageMaker Feature Store
- · **D.** Amazon SageMaker Autopilot

**Por qué:** Amazon SageMaker Feature Store es la solución correcta porque proporciona un repositorio central para almacenar, administrar y compartir features de machine learning en diferentes proyectos y equipos.

**Por qué no las demás:**
- **A.** Está diseñada simplemente para rastrear y monitorear el desempeño de modelos en producción, buscando específicamente data drift.
- **B.** Se utiliza principalmente para detectar sesgos en datos y modelos y para proporcionar explainability en modelos de ML.
- **D.** Esta feature solo automatiza el proceso de construcción de modelos de machine learning, incluyendo feature engineering, selección de modelos y ajuste de hiperparámetros.

### 2. Una firma de ciberseguridad está implementando un modelo de ML para analizar tráfico de red y detectar amenazas de seguridad. La firma debe proporcionar documentación detallada del entrenamiento del modelo y asegurar que sus predicciones sean completamente explicables para auditorías.

¿Cuál de las siguientes combinaciones de características de Amazon SageMaker cumplirá con estos requisitos? (Selecciona DOS.)

- ✅ **A.** SageMaker Model Cards
- · **B.** SageMaker Ground Truth Plus
- ✅ **C.** SageMaker Clarify
- · **D.** SageMaker smart sifting
- · **E.** SageMaker Autopilot

**Por qué:** **A. SageMaker Model Cards** -- Amazon SageMaker Model Cards proporciona un marco estructurado para documentar detalles esenciales sobre tus modelos de machine learning en cada etapa de su desarrollo; **C. SageMaker Clarify** -- Amazon SageMaker Clarify está diseñado para ayudar a los profesionales de machine learning a abordar la equidad, sesgo y explicabilidad en sus modelos.

**Por qué no las demás:**
- **B.** Se utiliza únicamente para crear conjuntos de datos etiquetados de alta calidad mediante anotación humana para entrenar modelos de machine learning.
- **D.** Esta opción simplemente filtra datos de baja calidad o irrelevantes de un conjunto de datos de entrenamiento enfocándose en muestras más informativas.
- **E.** Esta característica automatiza principalmente el proceso de entrenamiento y ajuste de modelos de machine learning, facilitando la implementación rápida de modelos.

### 3. Un profesional de IA está desarrollando un modelo de machine learning para un laboratorio de investigación con el objetivo de identificar y categorizar especies raras de plantas a partir de imágenes de alta resolución. Debido a la complejidad de las especies y la necesidad de alta precisión, el profesional busca una solución que minimice el riesgo de anotaciones incorrectas mientras garantiza supervisión humana en el proceso de etiquetado.

¿Cuál es la solución que debería utilizar el profesional para garantizar alta precisión y minimizar el riesgo de anotaciones incorrectas?

- · **A.** Usar Amazon Comprehend para categorizar las especies de plantas basándose en metadatos de imágenes.
- · **B.** Usar Amazon Rekognition Custom Labels para entrenar el modelo de identificación de especies.
- ✅ **C.** Usar Amazon SageMaker Ground Truth Plus para validación con intervención humana.
- · **D.** Usar Amazon SageMaker Data Wrangler para preparar y analizar el dataset para machine learning.

**Por qué:** Amazon SageMaker Ground Truth Plus admite múltiples tipos de datos, incluyendo imágenes, texto y video, lo que lo hace flexible para diversos casos de uso.

**Por qué no las demás:**
- **A.** Esta opción es un servicio de procesamiento de lenguaje natural (NLP) diseñado para extraer información únicamente de datos de texto, como análisis de sentimiento.
- **B.** Entrena modelos de reconocimiento de imágenes, pero no incluye la validación humana (HITL) que pide el caso.
- **D.** Está diseñado principalmente para preparación de datos y visualización para flujos de trabajo de ML.

### 4. Un Especialista en IA implementa modelos de IA para optimizar las operaciones de red de una empresa. Las métricas de entrenamiento incluyen Mean Squared Error y Root Mean Squared Error (RMSE). Para cumplir con los estándares de la industria, el especialista debe documentar los detalles de entrenamiento y desempeño de los modelos para propósitos de auditoría. Además, AWS Budgets se utiliza para rastrear costos y uso. ¿Qué solución de AWS puede ayudar a la empresa a cumplir con esta necesidad?

- · **A.** AWS Config
- · **B.** Amazon SageMaker Model Monitor
- · **C.** AWS CloudTrail
- ✅ **D.** Amazon SageMaker Model Cards

**Por qué:** Además de capturar detalles específicos del modelo, Amazon SageMaker Model Cards respaldan la colaboración y auditoría al permitir que los interesados accedan fácilmente y revisen la documentación del modelo.

**Por qué no las demás:**
- **A.** Es solo un servicio que te ayuda a evaluar, auditar y revisar las configuraciones de tus recursos de AWS.
- **B.** Funciona principalmente en detectar y alertar sobre desviaciones en la calidad de modelos de aprendizaje automático en entornos de producción.
- **C.** Se utiliza principalmente para registrar y monitorear la actividad de API en tu cuenta de AWS.

### 5. Una empresa de servicios financieros está construyendo un modelo de machine learning para detectar transacciones fraudulentas. El equipo de ciencia de datos está utilizando Amazon SageMaker Pipelines para automatizar sus flujos de trabajo de machine learning. Necesitan completar varias tareas para asegurar la precisión y eficiencia de su modelo.

Elige el paso de Amazon SageMaker Pipelines apropiado para cada tarea de la lista siguiente. Cada paso debe seleccionarse solo una vez. (Selecciona CUATRO.)

| Elemento | Respuesta correcta | Por qué |
|---|---|---|
| Implementar el modelo entrenado en un entorno de alojamiento para inferencia. | **CreateModel** | CreateModel empaqueta los artefactos ya entrenados en un modelo listo para desplegar |
| Entrenar el modelo de machine learning usando los datos preparados. | **Training** | Training es el paso que entrena el modelo y genera sus artefactos |
| Evaluar el modelo entrenado para asegurar que cumple con los estándares de rendimiento requeridos. | **QualityCheck** | QualityCheck valida que el modelo entrenado cumpla los estándares antes de desplegarlo |
| Preprocesar el conjunto de datos, incluyendo ingeniería de características, para hacerlo adecuado para el entrenamiento. | **Processing** | Processing transforma los datos crudos en un formato apto para entrenamiento |

### 6. ¿Cuál de las siguientes opciones proporciona soluciones preconfiguradas y modelos base, incluyendo modelos basados en BERT y modelos específicos de dominio listos para implementar, para acelerar proyectos de IA y machine learning?

- · **A.** PartyRock, un Amazon Bedrock Playground
- ✅ **B.** Amazon SageMaker JumpStart
- · **C.** Amazon SageMaker Studio
- · **D.** Amazon SageMaker Autopilot

**Por qué:** Con Amazon SageMaker JumpStart, puedes utilizar las soluciones preconfiguradas y los modelos base para acelerar proyectos de IA y machine learning.

**Por qué no las demás:**
- **A.** PartyRock es un playground interactivo para crear aplicaciones de IA generativa impulsado por Amazon Bedrock.
- **C.** Si bien Amazon SageMaker Studio es un entorno de desarrollo integrado (IDE) completo para machine learning.
- **D.** Automatiza principalmente el proceso de construcción, entrenamiento y ajuste de modelos de machine learning.

### 7. Una empresa necesita etiquetar un conjunto grande de imágenes con alta precisión para entrenar un modelo de machine learning. La empresa requiere una solución que combine etiquetado humano con machine learning para garantizar la calidad de los datos. La empresa planea usar Amazon Augmented AI (A2I) para la revisión humana de etiquetas con baja confianza.

¿Cuál solución de AWS cumplirá mejor este requisito?

- · **A.** Amazon SageMaker Debugger
- · **B.** Amazon SageMaker Autopilot
- ✅ **C.** Amazon SageMaker Ground Truth
- · **D.** Amazon SageMaker Model Monitor

**Por qué:** Al aprovechar el aprendizaje activo, Ground Truth puede etiquetar datos automáticamente con alta confianza mientras sigue involucrando a humanos en casos complejos, garantizando la precisión y calidad del conjunto de datos.

**Por qué no las demás:**
- **A.** SageMaker Debugger es solo una herramienta para monitoreo y depuración de modelos de machine learning durante el entrenamiento.
- **B.** SageMaker Autopilot es simplemente una solución de machine learning automatizado que puede entrenar e implementar modelos.
- **D.** Se utiliza principalmente para monitorear el rendimiento del modelo en producción.

### 8. Un especialista en machine learning está desarrollando un modelo de ML para predecir la cancelación de clientes en un servicio basado en suscripción usando Amazon SageMaker. El especialista está preocupado por posibles sesgos en los datos de entrenamiento que podrían afectar el desempeño del modelo. Además, debe asegurar que las predicciones del modelo sean transparentes y explicables para los stakeholders.

¿Cuáles capacidades de Amazon SageMaker ayudan a cumplir estos requisitos?

- · **A.** Amazon SageMaker JumpStart
- · **B.** Amazon SageMaker Data Wrangler
- · **C.** Amazon SageMaker Ground Truth
- ✅ **D.** Amazon SageMaker Clarify

**Por qué:** Además de la detección de sesgos, Amazon SageMaker Clarify mejora la transparencia del modelo al proporcionar explicaciones detalladas de las predicciones de ML.

**Por qué no las demás:**
- **A.** Este servicio simplemente ofrece soluciones de ML preconstruidas y flujos de trabajo para casos de uso comunes.
- **B.** Su propósito principal es simplificar el proceso de preparación de datos e ingeniería de características para machine learning.
- **C.** Esta capacidad se enfoca en crear datasets etiquetados de alta calidad a través de anotación humana y etiquetado automatizado de datos.

### 9. Una pequeña empresa de comercio electrónico quiere usar machine learning para mejorar su predicción de abandono de clientes. Sin embargo, la empresa no tiene un equipo de data science dedicado y busca una solución de bajo código o sin código para comenzar con machine learning.

Asigná los requisitos de la empresa a la característica de Amazon SageMaker más adecuada. (Seleccioná TRES.)

| Elemento | Respuesta correcta | Por qué |
|---|---|---|
| Comenzá rápidamente con soluciones y modelos precompilados para acelerar el desarrollo | **Amazon SageMaker JumpStart** | JumpStart ofrece modelos y soluciones ya construidos para arrancar rápido |
| Preparás y transformás datos para modelos de machine learning usando una interfaz intuitiva | **Amazon SageMaker Data Wrangler** | Data Wrangler ofrece una interfaz visual para limpiar y transformar datos sin código |
| Construís modelos de ML sin código simplemente interactuando con datos y obteniendo predicciones | **Amazon SageMaker Canvas** | Canvas permite construir modelos e interactuar con datos sin escribir código |

_Distractor: Clarify solo detecta sesgo y explica predicciones; Model Monitor solo vigila modelos ya en producción; Studio Lab es un entorno gratuito de notebooks para aprender, no una solución de producción sin código._

### 10. Una empresa financiera utiliza un modelo de IA para identificar posibles incumplimientos de préstamos. Para asegurar que el modelo funcione correctamente en producción, debe establecer procesos para capturar datos en tiempo real, compararlos con el conjunto de entrenamiento, detectar problemas de rendimiento y generar alertas.

¿En cuál etapa del pipeline de desarrollo de modelos debe enfocarse la empresa?

- · **A.** Evaluación de Modelos
- · **B.** Entrenamiento de Modelos
- · **C.** Recopilación de Datos
- ✅ **D.** Monitoreo de Modelos

**Por qué:** El monitoreo de modelos es una etapa crucial en el ciclo de vida de machine learning operations.

**Por qué no las demás:**
- **A.** La evaluación de modelos típicamente ocurre durante la fase de desarrollo para evaluar el rendimiento del modelo usando datos de prueba.
- **B.** Esta es la fase donde el modelo se desarrolla y se ajusta usando datos históricos.
- **C.** La recopilación de datos se enfoca solo en reunir los datos necesarios para el entrenamiento del modelo.

### 11. ¿Cuál es la ventaja clave de usar Amazon SageMaker Model Cards para documentar modelos de aprendizaje automático?

- · **A.** Almacenar modelos para acceso futuro en un repositorio centralizado.
- · **B.** Minimizar los recursos computacionales totales requeridos por el modelo.
- · **C.** Entregar un informe fácil de leer sobre las fortalezas y debilidades de un modelo.
- ✅ **D.** Asegurar información estandarizada sobre la función, desempeño y limitaciones de un modelo.

**Por qué:** Esta documentación estructurada puede ayudar a reducir sesgos.

**Por qué no las demás:**
- **A.** Model Cards no están diseñadas para almacenar o archivar modelos.
- **B.** SageMaker Model Cards se enfoca principalmente en documentación y transparencia, no en optimizar recursos computacionales.
- **C.** Model Cards simplemente no se enfoca en proporcionar un informe simplificado o fácil de leer.

### 12. Una empresa de comercio electrónico usa Amazon SageMaker para construir un modelo de ML para segmentación de reseñas de clientes. Necesitan una característica para limpieza y preparación de datos eficiente con codificación mínima.

¿Qué característica de SageMaker deberían usar?

- · **A.** SageMaker Feature Store
- · **B.** SageMaker Debugger
- · **C.** SageMaker Autopilot
- ✅ **D.** SageMaker Data Wrangler

**Por qué:** Una de las características clave de SageMaker Data Wrangler es su capacidad para automatizar tareas complejas de transformación de datos, como manejar valores faltantes, normalizar datos y crear nuevas características.

**Por qué no las demás:**
- **A.** Esta opción es principalmente un repositorio centralizado para almacenar y gestionar características utilizadas en modelos de aprendizaje automático.
- **B.** Esta característica está diseñada para monitorear y perfilar trabajos de entrenamiento de modelos, capturando métricas e información de depuración durante el entrenamiento.
- **C.** Esta característica ayuda a automatizar todo el flujo de trabajo de aprendizaje automático.

### 13. Una organización sin fines de lucro desea usar servicios de AWS para implementar modelos de inteligencia artificial y aprendizaje automático. La organización tiene la intención de reportar e implementar transparencia en los procesos de toma de decisiones de estos modelos y proporcionar claramente explicaciones del resultado de los modelos. Esto incluye usar Shapley values para la atribución de características y documentar el ajuste del modelo. ¿Cuál sería la solución de AWS que mejor cumpliría con estos requisitos?

- · **A.** Amazon Comprehend
- ✅ **B.** Amazon SageMaker Model Cards
- · **C.** Amazon Textract
- · **D.** Amazon SageMaker Model Registry

**Por qué:** Información de transparencia y gobernanza Amazon SageMaker Model Cards ayuda a explicar las decisiones del modelo, respalda prácticas de IA responsable y permite reportes transparentes.

**Por qué no las demás:**
- **A.** Comprehend es un servicio de NLP (procesamiento de lenguaje natural) que solo descubre información en texto, como sentimiento, frases clave y entidades.
- **C.** Textract es simplemente un servicio de IA que permite extraer texto y datos de documentos escaneados (similar a PDFs y formularios).
- **D.** Gestiona versiones del modelo, pero no ofrece explicabilidad ni documentación de gobernanza.

### 14. Un ingeniero de ML está construyendo large language models (LLMs) para una aplicación de chatbot. Durante el desarrollo, el ingeniero quiere asegurarse de que los LLMs no exhiban sesgos no intencionales.

¿Cuál de las siguientes opciones sería la más adecuada para este caso de uso?

- · **A.** Usar AWS AI Service Cards para visualizar límites de decisión e identificar posibles sesgos.
- · **B.** Fine-tunear el modelo usando datos etiquetados adicionales para mejorar la equidad.
- · **C.** Analizar datos de texto con Amazon Comprehend para identificar posibles sesgos.
- ✅ **D.** Usar Amazon SageMaker Clarify para evaluar y mitigar sesgos.

**Por qué:** Amazon SageMaker Clarify puede ayudar a identificar sesgos que puedan surgir durante el entrenamiento o cuando el modelo esté desplegado.

**Por qué no las demás:**
- **A.** Documenta cómo funciona el modelo, pero no evalúa el sesgo directamente.
- **B.** El fine-tuning puede mejorar el desempeño del modelo, pero no aborda directamente la detección de sesgos.
- **C.** Se enfoca principalmente en tareas como análisis de sentimiento, reconocimiento de entidades y modelado de temas.

### 15. Un ingeniero de machine learning está trabajando en un proyecto de aprendizaje automático. El ingeniero ha entrenado varios modelos usando diferentes algoritmos e hiperparámetros, incluyendo variaciones en las configuraciones de learningRate y batchSize en distintas ejecuciones de entrenamiento. Estos modelos necesitan ser gestionados eficientemente para su despliegue en un entorno de producción.

¿Cuál es la solución que debe usarse para catalogar modelos, gestionar versiones de modelos y asociar metadatos con los modelos?

- · **A.** Amazon SageMaker Feature Store
- · **B.** Amazon Elastic Container Registry
- ✅ **C.** Amazon SageMaker Model Registry
- · **D.** AWS Glue

**Por qué:** Amazon SageMaker Model Registry proporciona las siguientes capacidades.

**Por qué no las demás:**
- **A.** Almacena y gestiona datos de features utilizados para entrenamiento e inferencia, no artefactos de modelos o metadatos de versión.
- **B.** ECR es un servicio que almacena y gestiona imágenes de contenedores Docker.
- **D.** Se utiliza principalmente para preparación y transformación de datos.

### 16. Una empresa de servicios financieros quiere pronosticar la rotación de clientes basándose en datos de transacciones. La empresa tiene experiencia limitada en machine learning y prefiere una herramienta amigable sin código para construir un modelo predictivo usando algoritmos de ML para pronóstico de churn.

¿Cuál sería la solución más adecuada para este caso de uso?

- · **A.** Importar los datos en Amazon SageMaker Data Wrangler y usar Amazon Personalize para construir y entrenar el modelo de predicción de churn.
- ✅ **B.** Usar Amazon SageMaker Canvas para construir y entrenar un modelo de predicción de churn usando los datos de transacciones.
- · **C.** Almacenar los datos en Amazon S3 y usar los algoritmos integrados de Amazon SageMaker AI para crear modelos de predicción de churn.
- · **D.** Usar Amazon SageMaker Ground Truth para etiquetar los datos y luego aplicar algoritmos integrados de SageMaker AI para entrenar un modelo de predicción de churn.

**Por qué:** Con SageMaker Canvas, los usuarios pueden preparar sus datos, seleccionar características relevantes y crear modelos precisos sin esfuerzo.

**Por qué no las demás:**
- **A.** Amazon SageMaker Data Wrangler es una herramienta de preparación de datos que típicamente te ayuda a importar, transformar y analizar datos para machine learning.
- **C.** Amazon S3 (Simple Storage Service) es principalmente un servicio de almacenamiento para guardar datos de transacciones.
- **D.** Amazon SageMaker Ground Truth es un servicio para crear conjuntos de datos de entrenamiento de alta calidad usando anotadores humanos o flujos de trabajo.

### 17. Un equipo está trabajando en un proyecto de machine learning. El equipo ha desarrollado un modelo para predecir si un email es spam o no, usando modelos basados en BERT para clasificación de emails. Antes de desplegar el modelo, el equipo quiere asegurar equidad y transparencia.

¿Cuál de estas opciones sería la más adecuada para este caso de uso?

- ✅ **A.** Amazon SageMaker Clarify
- · **B.** Amazon Personalize
- · **C.** Amazon Comprehend
- · **D.** Amazon SageMaker Ground Truth

**Por qué:** SageMaker Clarify ofrece herramientas para detectar y abordar sesgos en modelos de machine learning.

**Por qué no las demás:**
- **B.** Personalize está diseñado únicamente para construir sistemas de recomendación, no específicamente para equidad o transparencia en modelos de predicción de spam en emails.
- **C.** Este servicio de procesamiento del lenguaje natural (NLP) es principalmente útil para tareas de análisis de sentimiento, reconocimiento de entidades y modelado de temas.
- **D.** Aunque Ground Truth es esencial para crear datos de entrenamiento etiquetados de alta calidad, no aborda directamente la equidad o transparencia.

### 18. Una empresa ha implementado un modelo de machine learning para detectar fraudes en su plataforma de comercio electrónico. El modelo ha estado funcionando en producción durante varios meses. La empresa quiere asegurar que continúe funcionando con precisión y confiabilidad.

¿Cuáles servicios o características de AWS debería usar la empresa para monitorear el rendimiento del modelo e incorporar revisión humana cuando sea necesario? (Selecciona DOS.)

- · **A.** Amazon SageMaker Ground Truth
- ✅ **B.** Amazon SageMaker Model Monitor
- · **C.** Amazon SageMaker Data Wrangler
- ✅ **D.** Amazon A2I (Amazon Augmented AI)
- · **E.** Amazon Bedrock

**Por qué:** **B. Amazon SageMaker Model Monitor** -- Al usar Amazon SageMaker Model Monitor y Amazon Augmented AI en conjunto, la empresa puede monitorear integralmente el rendimiento del modelo de machine learning implementado; **D. Amazon A2I (Amazon Augmented AI)** -- Amazon Augmented AI (Amazon A2I) es un servicio que facilita la construcción de flujos de trabajo de revisión humana para predicciones de machine learning.

**Por qué no las demás:**
- **A.** Este servicio solo proporciona capacidades de etiquetado de datos, que son útiles durante la fase de entrenamiento del modelo.
- **C.** Es una característica dentro de Amazon SageMaker que ayuda con tareas de preparación de datos e ingeniería de características.
- **E.** Es principalmente un servicio que ofrece modelos de base líderes (FMs) y un conjunto de capacidades para construir y escalar rápidamente aplicaciones de inteligencia.

### 19. Un científico de datos utiliza Amazon SageMaker para un proyecto de machine learning que clasifica imágenes de especies de plantas. Los datasets necesitan almacenarse de forma segura, ser fácilmente accesibles para el entrenamiento y gestionarse de manera eficiente durante todo el proyecto. ¿Cuál de las siguientes opciones utilizaría el científico de datos para almacenar y gestionar el dataset en este proyecto de machine learning?

- · **A.** Amazon EFS
- · **B.** Amazon FSx
- · **C.** Amazon MemoryDB
- ✅ **D.** Amazon S3

**Por qué:** S3 es almacenamiento de objetos duradero y escalable, con integración nativa para entrenar modelos en SageMaker.

**Por qué no las demás:**
- **A.** Ofrece un sistema de archivos compartido, no es la opción principal para datasets de ML en SageMaker.
- **B.** Da almacenamiento de archivos de alto rendimiento, pero S3 está más optimizado para este caso de uso.
- **C.** Es una base de datos en memoria para sesiones en tiempo real, no almacenamiento duradero para datasets grandes.

### 20. Una empresa está desarrollando modelos de machine learning para tomar decisiones automatizadas basadas en grandes volúmenes de datos. Los modelos utilizan clasificación multiclase para categorizar resultados en múltiples categorías de decisión. La empresa necesita proporcionar transparencia sobre cómo los modelos realizan predicciones y ofrecer explicaciones claras sobre los resultados. Esto es esencial para entender los factores que influyen en las decisiones del modelo.

¿Cuál de las siguientes opciones cumplirá con los requisitos dados?

- · **A.** Amazon Comprehend
- ✅ **B.** Amazon SageMaker Model Cards
- · **C.** Amazon Polly
- · **D.** Amazon SageMaker Ground Truth

**Por qué:** Las model cards son cruciales para modelos registrados de machine learning, ofreciendo un método estandarizado para documentar y comunicar metadatos esenciales.

**Por qué no las demás:**
- **A.** Es un servicio de procesamiento de lenguaje natural que extrae información de texto, como análisis de sentimiento y reconocimiento de entidades.
- **C.** Es únicamente un servicio de síntesis de voz que convierte contenido escrito en audio hablado.
- **D.** Se utiliza principalmente para crear y administrar conjuntos de datos etiquetados para entrenar modelos de machine learning.

### 21. Una startup de salud y bienestar está desarrollando una aplicación móvil que proporciona recomendaciones personalizadas de fitness y nutrición a los usuarios. La app recopila datos sobre rutinas de ejercicio, preferencias dietéticas y objetivos de salud de los usuarios. Como parte de la preparación de los datos, el equipo aplica técnicas de feature engineering para transformar los inputs crudos de los usuarios en variables significativas que mejoren el rendimiento del modelo de machine learning (ML). La startup quiere aprovechar un servicio AWS completamente administrado para sugerir planes de entrenamiento personalizados, recetas de comidas y suplementos basados en perfiles individuales de usuarios sin gestionar ninguna infraestructura subyacente. ¿Cuál es el servicio de AWS que le permite a la startup construir, entrenar e implementar modelos de machine learning a escala?

- ✅ **A.** Amazon SageMaker AI
- · **B.** Amazon Polly
- · **C.** Amazon Q Developer
- · **D.** Amazon Bedrock

**Por qué:** SageMaker AI cubre todo el flujo de ML (etiquetado, entrenamiento, ajuste y despliegue) para construir un modelo de recomendación propio y económico.

**Por qué no las demás:**
- **B.** Está pensado para texto a voz, no para construir modelos de recomendación.
- **C.** Es un asistente de código, no una plataforma para entrenar modelos de ML.
- **D.** Sirve para personalizar foundation models (LLMs), no para un sistema de recomendación simple basado en datos propios.

### 22. Un fabricante automotriz está utilizando Amazon SageMaker AI para detectar defectos en la línea de ensamblaje. Los ingenieros necesitan una interfaz sin código para entrenar modelos, herramientas para etiquetar miles de imágenes de defectos, y plantillas específicas de la industria para acelerar la implementación.

Selecciona las características correctas de SageMaker AI para cumplir con los requisitos en cada caso. Cada servicio debe seleccionarse una sola vez. (Selecciona TRES.)

| Elemento | Respuesta correcta | Por qué |
|---|---|---|
| Entrenamiento de modelos sin código para detección de defectos | **SageMaker Canvas** | Canvas permite a los ingenieros entrenar modelos visualmente sin escribir código |
| Etiquetado de imágenes para crear conjuntos de datos de alta calidad | **SageMaker Ground Truth** | Ground Truth gestiona el etiquetado de imágenes a escala con revisión humana |
| Modelos de visión pregenerados para una implementación más rápida | **SageMaker JumpStart** | JumpStart da acceso a modelos de visión ya entrenados para desplegar rápido |

_Distractor: HyperPod es para entrenamiento distribuido a gran escala, Clarify detecta sesgo, y Neo optimiza modelos ya entrenados para edge -- ninguno cubre entrenamiento visual, etiquetado o modelos pregenerados._

### 23. Una empresa minorista utiliza modelos de machine learning para predecir las ventas trimestrales y optimizar la gestión de inventario usando agentes de IA a través de Amazon Bedrock AgentCore. En respuesta a solicitudes de los stakeholders, el equipo de data science debe presentar un informe integral que garantice transparencia y explique el razonamiento detrás de las decisiones de los modelos.

¿Qué debe presentar el equipo de data science para explicar claramente el proceso de recomendación del modelo?

- · **A.** Resultados de ajuste de hiperparámetros
- · **B.** Tablas de convergencia del modelo
- ✅ **C.** Partial dependence plots (PDPs)
- · **D.** Scripts de ingeniería de características

**Por qué:** Amazon SageMaker Clarify genera partial dependence plots (PDPs) para mostrar el efecto marginal de las características en el resultado predicho por un modelo de machine learning.

**Por qué no las demás:**
- **A.** Se enfoca principalmente en la optimización del modelo en lugar de explicar el proceso de toma de decisiones a los stakeholders.
- **B.** Solo proporcionan información sobre el progreso del entrenamiento del modelo pero no ofrecen información sobre el razonamiento detrás de las predicciones del modelo.
- **D.** Solo implican pasos de preprocesamiento de datos y transformaciones aplicadas a los datos sin procesar.

### 24. Un especialista en IA está desarrollando un sistema para detectar vehículos en imágenes de calles usando machine learning. El modelo utiliza una Support Vector Machine para identificar objetos de vehículos. El objetivo es crear etiquetas para un conjunto grande de imágenes de calles y utilizar Reinforcement Learning from Human Feedback (RLHF) para mejorar el modelo con el tiempo. ¿Cuál de las siguientes opciones sería la más adecuada para esta tarea?

- · **A.** Amazon Comprehend
- · **B.** Algoritmos integrados de Amazon SageMaker
- ✅ **C.** Amazon SageMaker Ground Truth
- · **D.** Amazon Rekognition Custom Labels

**Por qué:** Puedes usar Ground Truth para etiquetar imágenes.

**Por qué no las demás:**
- **A.** Solo se utiliza para tareas de procesamiento de lenguaje natural (NLP), no para etiquetado de imágenes.
- **B.** Los algoritmos integrados de SageMaker son para entrenar modelos, no para etiquetar datos.
- **D.** Aunque Amazon Rekognition Custom Labels puede detectar objetos en imágenes, no está diseñado para Reinforcement Learning ni integración de retroalimentación humana.

### 25. Una empresa quiere implementar un modelo de IA generativa usando Amazon SageMaker para mejorar su chatbot de soporte al cliente. El modelo necesita entrenarse con un conjunto grande de interacciones de clientes para proporcionar respuestas en tiempo real a las consultas de los clientes.

Selecciona y ordena los pasos correctos de la siguiente lista para completar la tarea. Cada paso debe seleccionarse una vez o no seleccionarse en absoluto. (Selecciona y ordena TRES.)

| Elemento | Respuesta correcta | Por qué |
|---|---|---|
| 1. | **Carga el conjunto de datos en Amazon S3.** | Lo primero es tener los datos disponibles en Amazon S3 para poder usarlos |
| 2. | **Crea un trabajo de entrenamiento en Amazon SageMaker.** | Con los datos ya en S3, el siguiente paso es crear el trabajo de entrenamiento en SageMaker |
| 3. | **Configura el trabajo de entrenamiento para usar el conjunto de datos de Amazon S3.** | Por último hay que apuntar el trabajo de entrenamiento al dataset ya almacenado en S3 |

_Distractor: Implementar el modelo en un endpoint es un paso posterior, que solo ocurre después de que el modelo ya fue entrenado._

### 26. Un servicio de streaming de contenido quiere evaluar el comportamiento de usuarios y datos demográficos para entregar recomendaciones personalizadas. El servicio planea desplegar un modelo de machine learning personalizado en su entorno en vivo y monitorear su desempeño a lo largo del tiempo para detectar cambios en la precisión del modelo. La solución aplica estimación de densidad para detectar cambios estadísticos entre las distribuciones de datos de entrenamiento y datos en vivo.

¿Cuál es la característica de AWS más adecuada para cumplir con estos requisitos?

- · **A.** Amazon SageMaker Endpoint
- · **B.** Amazon SageMaker Clarify
- ✅ **C.** Amazon SageMaker Model Monitor
- · **D.** Amazon SageMaker Autopilot

**Por qué:** Monitorea continuamente el modelo en producción y alerta sobre desviaciones o drift en la calidad.

**Por qué no las demás:**
- **A.** Permite mejorar equidad y explicabilidad detectando sesgo, pero no monitorea el desempeño en producción.
- **B.** Sirve inferencia en tiempo real, pero no monitorea desempeño ni detecta drift.
- **D.** Automatiza la construcción de modelos, no el monitoreo de modelos ya desplegados.

### 27. ¿Cuál de las siguientes opciones puede realizar Amazon SageMaker Clarify? (Selecciona DOS.)

- · **A.** Realizar optimización automática de hiperparámetros para mejorar la precisión del modelo
- ✅ **B.** Identificar sesgos en los datos posteriores al entrenamiento durante o después del entrenamiento del modelo
- ✅ **C.** Detectar sesgos en los datos previos al entrenamiento
- · **D.** Generar datos sintéticos para mejorar el entrenamiento del modelo
- · **E.** Realizar aumento de datos para aumentar el tamaño del conjunto de datos de entrenamiento

**Por qué:** **B. Identificar sesgos en los datos posteriores al entrenamiento durante o después del entrenamiento del modelo** -- – Detectar y explicar sesgos en las predicciones del modelo: SageMaker Clarify detecta sesgos durante la preparación de datos; **C. Detectar sesgos en los datos previos al entrenamiento** -- – Identificar sesgos en datos previos al entrenamiento: Evalúa los datos de entrenamiento para detectar posibles sesgos antes de entrenar el modelo.

**Por qué no las demás:**
- **A.** Esto normalmente lo maneja Amazon SageMaker Automatic Model Tuning, no Clarify.
- **D.** SageMaker Clarify no genera datos sintéticos para el entrenamiento del modelo.
- **E.** Amazon SageMaker Clarify no realiza aumento de datos ni aumenta el tamaño de los conjuntos de datos de entrenamiento.

---

[← Volver al índice](./README.md)
