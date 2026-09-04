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

### 2. Una firma de ciberseguridad está implementando un modelo de ML para analizar tráfico de red y detectar amenazas de seguridad. La firma debe proporcionar documentación detallada del entrenamiento del modelo y asegurar que sus predicciones sean completamente explicables para auditorías.

¿Cuál de las siguientes combinaciones de características de Amazon SageMaker cumplirá con estos requisitos? (Selecciona DOS.)

- ✅ **A.** SageMaker Model Cards
- · **B.** SageMaker Ground Truth Plus
- ✅ **C.** SageMaker Clarify
- · **D.** SageMaker smart sifting
- · **E.** SageMaker Autopilot

### 3. Un profesional de IA está desarrollando un modelo de machine learning para un laboratorio de investigación con el objetivo de identificar y categorizar especies raras de plantas a partir de imágenes de alta resolución. Debido a la complejidad de las especies y la necesidad de alta precisión, el profesional busca una solución que minimice el riesgo de anotaciones incorrectas mientras garantiza supervisión humana en el proceso de etiquetado.

¿Cuál es la solución que debería utilizar el profesional para garantizar alta precisión y minimizar el riesgo de anotaciones incorrectas?

- · **A.** Usar Amazon Comprehend para categorizar las especies de plantas basándose en metadatos de imágenes.
- · **B.** Usar Amazon Rekognition Custom Labels para entrenar el modelo de identificación de especies.
- ✅ **C.** Usar Amazon SageMaker Ground Truth Plus para validación con intervención humana.
- · **D.** Usar Amazon SageMaker Data Wrangler para preparar y analizar el dataset para machine learning.

### 4. Un Especialista en IA implementa modelos de IA para optimizar las operaciones de red de una empresa. Las métricas de entrenamiento incluyen Mean Squared Error y Root Mean Squared Error (RMSE). Para cumplir con los estándares de la industria, el especialista debe documentar los detalles de entrenamiento y desempeño de los modelos para propósitos de auditoría. Además, AWS Budgets se utiliza para rastrear costos y uso. ¿Qué solución de AWS puede ayudar a la empresa a cumplir con esta necesidad?

- · **A.** AWS Config
- · **B.** Amazon SageMaker Model Monitor
- · **C.** AWS CloudTrail
- ✅ **D.** Amazon SageMaker Model Cards

### 5. Una empresa de servicios financieros está construyendo un modelo de machine learning para detectar transacciones fraudulentas. El equipo de ciencia de datos está utilizando Amazon SageMaker Pipelines para automatizar sus flujos de trabajo de machine learning. Necesitan completar varias tareas para asegurar la precisión y eficiencia de su modelo.

Elige el paso de Amazon SageMaker Pipelines apropiado para cada tarea de la lista siguiente. Cada paso debe seleccionarse solo una vez. (Selecciona CUATRO.)

| Elemento | Respuesta correcta |
|---|---|
| Implementar el modelo entrenado en un entorno de alojamiento para inferencia. | **CreateModel** |
| Entrenar el modelo de machine learning usando los datos preparados. | **Training** |
| Evaluar el modelo entrenado para asegurar que cumple con los estándares de rendimiento requeridos. | **QualityCheck** |
| Preprocesar el conjunto de datos, incluyendo ingeniería de características, para hacerlo adecuado para el entrenamiento. | **Processing** |

### 6. ¿Cuál de las siguientes opciones proporciona soluciones preconfiguradas y modelos base, incluyendo modelos basados en BERT y modelos específicos de dominio listos para implementar, para acelerar proyectos de IA y machine learning?

- · **A.** PartyRock, un Amazon Bedrock Playground
- ✅ **B.** Amazon SageMaker JumpStart
- · **C.** Amazon SageMaker Studio
- · **D.** Amazon SageMaker Autopilot

### 7. Una empresa necesita etiquetar un conjunto grande de imágenes con alta precisión para entrenar un modelo de machine learning. La empresa requiere una solución que combine etiquetado humano con machine learning para garantizar la calidad de los datos. La empresa planea usar Amazon Augmented AI (A2I) para la revisión humana de etiquetas con baja confianza.

¿Cuál solución de AWS cumplirá mejor este requisito?

- · **A.** Amazon SageMaker Debugger
- · **B.** Amazon SageMaker Autopilot
- ✅ **C.** Amazon SageMaker Ground Truth
- · **D.** Amazon SageMaker Model Monitor

### 8. Un especialista en machine learning está desarrollando un modelo de ML para predecir la cancelación de clientes en un servicio basado en suscripción usando Amazon SageMaker. El especialista está preocupado por posibles sesgos en los datos de entrenamiento que podrían afectar el desempeño del modelo. Además, debe asegurar que las predicciones del modelo sean transparentes y explicables para los stakeholders.

¿Cuáles capacidades de Amazon SageMaker ayudan a cumplir estos requisitos?

- · **A.** Amazon SageMaker JumpStart
- · **B.** Amazon SageMaker Data Wrangler
- · **C.** Amazon SageMaker Ground Truth
- ✅ **D.** Amazon SageMaker Clarify

### 9. Una pequeña empresa de comercio electrónico quiere usar machine learning para mejorar su predicción de abandono de clientes. Sin embargo, la empresa no tiene un equipo de data science dedicado y busca una solución de bajo código o sin código para comenzar con machine learning.

Asigná los requisitos de la empresa a la característica de Amazon SageMaker más adecuada. (Seleccioná TRES.)

| Elemento | Respuesta correcta |
|---|---|
| Comenzá rápidamente con soluciones y modelos precompilados para acelerar el desarrollo | **Amazon SageMaker JumpStart** |
| Preparás y transformás datos para modelos de machine learning usando una interfaz intuitiva | **Amazon SageMaker Data Wrangler** |
| Construís modelos de ML sin código simplemente interactuando con datos y obteniendo predicciones | **Amazon SageMaker Canvas** |

### 10. Una empresa financiera utiliza un modelo de IA para identificar posibles incumplimientos de préstamos. Para asegurar que el modelo funcione correctamente en producción, debe establecer procesos para capturar datos en tiempo real, compararlos con el conjunto de entrenamiento, detectar problemas de rendimiento y generar alertas.

¿En cuál etapa del pipeline de desarrollo de modelos debe enfocarse la empresa?

- · **A.** Evaluación de Modelos
- · **B.** Entrenamiento de Modelos
- · **C.** Recopilación de Datos
- ✅ **D.** Monitoreo de Modelos

### 11. ¿Cuál es la ventaja clave de usar Amazon SageMaker Model Cards para documentar modelos de aprendizaje automático?

- · **A.** Almacenar modelos para acceso futuro en un repositorio centralizado.
- · **B.** Minimizar los recursos computacionales totales requeridos por el modelo.
- · **C.** Entregar un informe fácil de leer sobre las fortalezas y debilidades de un modelo.
- ✅ **D.** Asegurar información estandarizada sobre la función, desempeño y limitaciones de un modelo.

### 12. Una empresa de comercio electrónico usa Amazon SageMaker para construir un modelo de ML para segmentación de reseñas de clientes. Necesitan una característica para limpieza y preparación de datos eficiente con codificación mínima.

¿Qué característica de SageMaker deberían usar?

- · **A.** SageMaker Feature Store
- · **B.** SageMaker Debugger
- · **C.** SageMaker Autopilot
- ✅ **D.** SageMaker Data Wrangler

### 13. Una organización sin fines de lucro desea usar servicios de AWS para implementar modelos de inteligencia artificial y aprendizaje automático. La organización tiene la intención de reportar e implementar transparencia en los procesos de toma de decisiones de estos modelos y proporcionar claramente explicaciones del resultado de los modelos. Esto incluye usar Shapley values para la atribución de características y documentar el ajuste del modelo. ¿Cuál sería la solución de AWS que mejor cumpliría con estos requisitos?

- · **A.** Amazon Comprehend
- ✅ **B.** Amazon SageMaker Model Cards
- · **C.** Amazon Textract
- · **D.** Amazon SageMaker Model Registry

### 14. Un ingeniero de ML está construyendo large language models (LLMs) para una aplicación de chatbot. Durante el desarrollo, el ingeniero quiere asegurarse de que los LLMs no exhiban sesgos no intencionales.

¿Cuál de las siguientes opciones sería la más adecuada para este caso de uso?

- · **A.** Usar AWS AI Service Cards para visualizar límites de decisión e identificar posibles sesgos.
- · **B.** Fine-tunear el modelo usando datos etiquetados adicionales para mejorar la equidad.
- · **C.** Analizar datos de texto con Amazon Comprehend para identificar posibles sesgos.
- ✅ **D.** Usar Amazon SageMaker Clarify para evaluar y mitigar sesgos.

### 15. Un ingeniero de machine learning está trabajando en un proyecto de aprendizaje automático. El ingeniero ha entrenado varios modelos usando diferentes algoritmos e hiperparámetros, incluyendo variaciones en las configuraciones de learningRate y batchSize en distintas ejecuciones de entrenamiento. Estos modelos necesitan ser gestionados eficientemente para su despliegue en un entorno de producción.

¿Cuál es la solución que debe usarse para catalogar modelos, gestionar versiones de modelos y asociar metadatos con los modelos?

- · **A.** Amazon SageMaker Feature Store
- · **B.** Amazon Elastic Container Registry
- ✅ **C.** Amazon SageMaker Model Registry
- · **D.** AWS Glue

### 16. Una empresa de servicios financieros quiere pronosticar la rotación de clientes basándose en datos de transacciones. La empresa tiene experiencia limitada en machine learning y prefiere una herramienta amigable sin código para construir un modelo predictivo usando algoritmos de ML para pronóstico de churn.

¿Cuál sería la solución más adecuada para este caso de uso?

- · **A.** Importar los datos en Amazon SageMaker Data Wrangler y usar Amazon Personalize para construir y entrenar el modelo de predicción de churn.
- ✅ **B.** Usar Amazon SageMaker Canvas para construir y entrenar un modelo de predicción de churn usando los datos de transacciones.
- · **C.** Almacenar los datos en Amazon S3 y usar los algoritmos integrados de Amazon SageMaker AI para crear modelos de predicción de churn.
- · **D.** Usar Amazon SageMaker Ground Truth para etiquetar los datos y luego aplicar algoritmos integrados de SageMaker AI para entrenar un modelo de predicción de churn.

### 17. Un equipo está trabajando en un proyecto de machine learning. El equipo ha desarrollado un modelo para predecir si un email es spam o no, usando modelos basados en BERT para clasificación de emails. Antes de desplegar el modelo, el equipo quiere asegurar equidad y transparencia.

¿Cuál de estas opciones sería la más adecuada para este caso de uso?

- ✅ **A.** Amazon SageMaker Clarify
- · **B.** Amazon Personalize
- · **C.** Amazon Comprehend
- · **D.** Amazon SageMaker Ground Truth

### 18. Una empresa ha implementado un modelo de machine learning para detectar fraudes en su plataforma de comercio electrónico. El modelo ha estado funcionando en producción durante varios meses. La empresa quiere asegurar que continúe funcionando con precisión y confiabilidad.

¿Cuáles servicios o características de AWS debería usar la empresa para monitorear el rendimiento del modelo e incorporar revisión humana cuando sea necesario? (Selecciona DOS.)

- · **A.** Amazon SageMaker Ground Truth
- ✅ **B.** Amazon SageMaker Model Monitor
- · **C.** Amazon SageMaker Data Wrangler
- ✅ **D.** Amazon A2I (Amazon Augmented AI)
- · **E.** Amazon Bedrock

### 19. Un científico de datos utiliza Amazon SageMaker para un proyecto de machine learning que clasifica imágenes de especies de plantas. Los datasets necesitan almacenarse de forma segura, ser fácilmente accesibles para el entrenamiento y gestionarse de manera eficiente durante todo el proyecto. ¿Cuál de las siguientes opciones utilizaría el científico de datos para almacenar y gestionar el dataset en este proyecto de machine learning?

- · **A.** Amazon EFS
- · **B.** Amazon FSx
- · **C.** Amazon MemoryDB
- ✅ **D.** Amazon S3

### 20. Una empresa está desarrollando modelos de machine learning para tomar decisiones automatizadas basadas en grandes volúmenes de datos. Los modelos utilizan clasificación multiclase para categorizar resultados en múltiples categorías de decisión. La empresa necesita proporcionar transparencia sobre cómo los modelos realizan predicciones y ofrecer explicaciones claras sobre los resultados. Esto es esencial para entender los factores que influyen en las decisiones del modelo.

¿Cuál de las siguientes opciones cumplirá con los requisitos dados?

- · **A.** Amazon Comprehend
- ✅ **B.** Amazon SageMaker Model Cards
- · **C.** Amazon Polly
- · **D.** Amazon SageMaker Ground Truth

### 21. Una startup de salud y bienestar está desarrollando una aplicación móvil que proporciona recomendaciones personalizadas de fitness y nutrición a los usuarios. La app recopila datos sobre rutinas de ejercicio, preferencias dietéticas y objetivos de salud de los usuarios. Como parte de la preparación de los datos, el equipo aplica técnicas de feature engineering para transformar los inputs crudos de los usuarios en variables significativas que mejoren el rendimiento del modelo de machine learning (ML). La startup quiere aprovechar un servicio AWS completamente administrado para sugerir planes de entrenamiento personalizados, recetas de comidas y suplementos basados en perfiles individuales de usuarios sin gestionar ninguna infraestructura subyacente. ¿Cuál es el servicio de AWS que le permite a la startup construir, entrenar e implementar modelos de machine learning a escala?

- ✅ **A.** Amazon SageMaker AI
- · **B.** Amazon Polly
- · **C.** Amazon Q Developer
- · **D.** Amazon Bedrock

### 22. Un fabricante automotriz está utilizando Amazon SageMaker AI para detectar defectos en la línea de ensamblaje. Los ingenieros necesitan una interfaz sin código para entrenar modelos, herramientas para etiquetar miles de imágenes de defectos, y plantillas específicas de la industria para acelerar la implementación.

Selecciona las características correctas de SageMaker AI para cumplir con los requisitos en cada caso. Cada servicio debe seleccionarse una sola vez. (Selecciona TRES.)

| Elemento | Respuesta correcta |
|---|---|
| Entrenamiento de modelos sin código para detección de defectos | **SageMaker Canvas** |
| Etiquetado de imágenes para crear conjuntos de datos de alta calidad | **SageMaker Ground Truth** |
| Modelos de visión pregenerados para una implementación más rápida | **SageMaker JumpStart** |

### 23. Una empresa minorista utiliza modelos de machine learning para predecir las ventas trimestrales y optimizar la gestión de inventario usando agentes de IA a través de Amazon Bedrock AgentCore. En respuesta a solicitudes de los stakeholders, el equipo de data science debe presentar un informe integral que garantice transparencia y explique el razonamiento detrás de las decisiones de los modelos.

¿Qué debe presentar el equipo de data science para explicar claramente el proceso de recomendación del modelo?

- · **A.** Resultados de ajuste de hiperparámetros
- · **B.** Tablas de convergencia del modelo
- ✅ **C.** Partial dependence plots (PDPs)
- · **D.** Scripts de ingeniería de características

### 24. Un especialista en IA está desarrollando un sistema para detectar vehículos en imágenes de calles usando machine learning. El modelo utiliza una Support Vector Machine para identificar objetos de vehículos. El objetivo es crear etiquetas para un conjunto grande de imágenes de calles y utilizar Reinforcement Learning from Human Feedback (RLHF) para mejorar el modelo con el tiempo. ¿Cuál de las siguientes opciones sería la más adecuada para esta tarea?

- · **A.** Amazon Comprehend
- · **B.** Algoritmos integrados de Amazon SageMaker
- ✅ **C.** Amazon SageMaker Ground Truth
- · **D.** Amazon Rekognition Custom Labels

### 25. Una empresa quiere implementar un modelo de IA generativa usando Amazon SageMaker para mejorar su chatbot de soporte al cliente. El modelo necesita entrenarse con un conjunto grande de interacciones de clientes para proporcionar respuestas en tiempo real a las consultas de los clientes.

Selecciona y ordena los pasos correctos de la siguiente lista para completar la tarea. Cada paso debe seleccionarse una vez o no seleccionarse en absoluto. (Selecciona y ordena TRES.)

| Elemento | Respuesta correcta |
|---|---|
| 1. | **Carga el conjunto de datos en Amazon S3.** |
| 2. | **Crea un trabajo de entrenamiento en Amazon SageMaker.** |
| 3. | **Configura el trabajo de entrenamiento para usar el conjunto de datos de Amazon S3.** |

### 26. Un servicio de streaming de contenido quiere evaluar el comportamiento de usuarios y datos demográficos para entregar recomendaciones personalizadas. El servicio planea desplegar un modelo de machine learning personalizado en su entorno en vivo y monitorear su desempeño a lo largo del tiempo para detectar cambios en la precisión del modelo. La solución aplica estimación de densidad para detectar cambios estadísticos entre las distribuciones de datos de entrenamiento y datos en vivo.

¿Cuál es la característica de AWS más adecuada para cumplir con estos requisitos?

- · **A.** Amazon SageMaker Endpoint
- · **B.** Amazon SageMaker Clarify
- ✅ **C.** Amazon SageMaker Model Monitor
- · **D.** Amazon SageMaker Autopilot

### 27. ¿Cuál de las siguientes opciones puede realizar Amazon SageMaker Clarify? (Selecciona DOS.)

- · **A.** Realizar optimización automática de hiperparámetros para mejorar la precisión del modelo
- ✅ **B.** Identificar sesgos en los datos posteriores al entrenamiento durante o después del entrenamiento del modelo
- ✅ **C.** Detectar sesgos en los datos previos al entrenamiento
- · **D.** Generar datos sintéticos para mejorar el entrenamiento del modelo
- · **E.** Realizar aumento de datos para aumentar el tamaño del conjunto de datos de entrenamiento

---

[← Volver al índice](./README.md)
