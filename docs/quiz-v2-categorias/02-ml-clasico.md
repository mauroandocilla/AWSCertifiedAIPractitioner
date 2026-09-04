# Aprendizaje supervisado, no supervisado y algoritmos clásicos

_15 preguntas · Quiz v2 (TutorialsDojo) · AWS Certified AI Practitioner (AIF-C01)_

## Concepto clave

Distinción supervisado (datos etiquetados) vs. no supervisado (sin etiquetas: clustering, reglas de asociación) vs. refuerzo (recompensa por acción), y qué algoritmo clásico (regresión, árboles de decisión, KNN, K-Means) resuelve cada tipo de problema.

## Truco para reconocerlas

"Datos etiquetados" o "predecir una categoría/valor ya conocido" apunta a supervisado. "Agrupar sin categorías predefinidas" apunta a no supervisado/clustering. "El sistema interactúa con un entorno y aprende de recompensas" es reinforcement learning. Si la pregunta compara "reglas fijas programadas" contra "aprender patrones de datos", la respuesta casi siempre es que el enfoque de reglas fijas NO es machine learning.

## Palabras clave

`datos etiquetados` · `sin etiquetas` · `agrupar / clustering`

## Preguntas

### 1. Una institución financiera está mejorando sus medidas de ciberseguridad mediante soluciones de IA. La solución debe detectar automáticamente direcciones IP sospechosas analizando patrones de comportamiento inusual en el tráfico de red para prevenir posibles amenazas o ataques, aprovechando una red neuronal de aprendizaje profundo para analizar los datos.

¿Cuál sería la solución basada en IA que mejor aborda este requisito?

- · **A.** Implementar un sistema biométrico para autenticación de usuarios.
- · **B.** Usar un modelo de procesamiento de lenguaje natural (NLP) para análisis de sentimientos en texto.
- · **C.** Configurar un sistema predictivo para pronóstico de comportamiento de clientes.
- ✅ **D.** Implementar un sistema de detección de anomalías para identificar patrones inusuales.

### 2. ¿Cuál es el enfoque de machine learning que se utiliza para clasificar y organizar datos sin etiquetar identificando patrones ocultos sin necesidad de categorías o etiquetas predefinidas? Este enfoque incluye técnicas como Principal Component Analysis (PCA) y Random Cut Forest (RCF) para descubrir estructuras y anomalías en conjuntos de datos sin etiquetar.

- · **A.** Reinforcement Learning
- · **B.** Transfer Learning
- ✅ **C.** Unsupervised Learning
- · **D.** Few-shot Learning

### 3. Una empresa logística quiere pronosticar tiempos de entrega basándose en condiciones de tráfico, datos meteorológicos e información de rutas. La empresa también planea usar estos conocimientos para futuras predicciones de desempeño en entregas. Se está evaluando un conjunto de algoritmos de ML para identificar uno que produzca resultados interpretables con un desglose claro de cómo cada factor influye en el tiempo de entrega predicho a través de un proceso de toma de decisiones jerárquico.

¿Cuál algoritmo de machine learning (ML) satisface las necesidades de la empresa?

- · **A.** Support Vector Machine (SVM)
- ✅ **B.** Decision Trees
- · **C.** K-Nearest Neighbors (KNN)
- · **D.** Logistic Regression

### 4. Una empresa está desarrollando una aplicación educativa que presenta a los usuarios problemas matemáticos de operaciones aritméticas básicas, como "Calcula la suma de los siguientes números: 7, 14 y 21."

¿Cuál es el enfoque que ofrece la solución más eficiente mientras minimiza la complejidad?

- · **A.** Entrenar un modelo de aprendizaje supervisado con un conjunto de datos de problemas aritméticos y sus soluciones.
- · **B.** Aplicar un modelo de regresión lineal para predecir soluciones de problemas aritméticos.
- ✅ **C.** Escribir código que use reglas predefinidas para calcular soluciones basadas en principios aritméticos.
- · **D.** Construir una red neuronal para aprender operaciones aritméticas a partir de un gran conjunto de datos.

### 5. Una empresa de logística necesita predecir la cantidad de envíos en las próximas semanas usando datos históricos de envíos. La empresa planea usar el algoritmo de pronóstico DeepAR de Amazon SageMaker AI para esta tarea.

¿Cuál es el tipo de dato más apropiado para hacer estas predicciones?

- ✅ **A.** Datos de series temporales
- · **B.** Datos de documentos
- · **C.** Datos de texto
- · **D.** Datos transaccionales

### 6. Una empresa financiera ha recopilado 2 años de datos diarios de transacciones almacenados en un bucket de Amazon S3. Para mejorar la gestión de liquidez, la planificación financiera y la asignación de recursos, planea desarrollar un modelo de machine learning para pronosticar volúmenes de transacciones para los próximos 90 días.

¿Qué tipo de algoritmo debe usar la empresa?

- ✅ **A.** Algoritmo de forecasting
- · **B.** Algoritmo Linear Learner
- · **C.** Algoritmo de clustering
- · **D.** Algoritmo Object2Vec

### 7. Una empresa utiliza un modelo de IA para etiquetar automáticamente los emails de clientes como Queja, Consulta o Comentario. El modelo se entrena con miles de emails pre-etiquetados para aprender patrones.

¿Qué tipo de NLP se utiliza cuando una IA aprende de datos etiquetados para clasificar texto nuevo?

- · **A.** NLP no supervisado
- ✅ **B.** NLP supervisado
- · **C.** Natural language generation (NLG)
- · **D.** Natural language understanding (NLU)

### 8. Un servicio de streaming quiere analizar datos de usuarios para mejorar sus recomendaciones de contenido. El equipo de ciencia de datos necesita agrupar usuarios con hábitos de visualización similares, identificar patrones comunes en los tipos de shows que se ven juntos, y estimar cómo se distribuyen las preferencias de los usuarios entre diferentes géneros.

Vinculá cada enfoque de aprendizaje no supervisado que el equipo de ciencia de datos debe considerar con su objetivo correcto. (Seleccioná TRES.)

| Elemento | Respuesta correcta |
|---|---|
| Estimar cómo se distribuyen las preferencias de los usuarios entre diferentes géneros. | **Probability density** |
| Identificar patrones comunes en los tipos de shows que se ven juntos. | **Association rule learning** |
| Agrupar usuarios con hábitos de visualización similares. | **Clustering** |

### 9. Una institución financiera utiliza regresión logística para evaluar solicitudes de crédito y predecir la probabilidad de incumplimiento. El modelo analiza datos históricos de clientes e identifica patrones sin necesidad de escribir reglas manualmente.

¿Qué término se refiere a una rama de la IA que permite que los sistemas aprendan y hagan predicciones basadas en datos sin estar explícitamente estructurados?

- · **A.** Predictive analytics
- · **B.** Natural Language Processing (NLP)
- ✅ **C.** Machine Learning
- · **D.** Object-oriented programming

### 10. Un proveedor de salud está construyendo una plataforma de análisis de salud poblacional para analizar datos demográficos de pacientes y patrones de adherencia a tratamientos. El objetivo es identificar grupos de pacientes distintos para optimizar programas de alcance, como dirigirse a grupos de alto riesgo para aplicar vacunas contra la gripe o personalizar campañas de manejo de diabetes.

¿Qué algoritmo de aprendizaje automático debe utilizar el proveedor de salud para segmentar automáticamente a los pacientes en función de estos factores clínicos y socioeconómicos?

- · **A.** Principal Component Analysis (PCA)
- · **B.** K-Nearest Neighbors (KNN)
- · **C.** Random Cut Forest (RCF)
- ✅ **D.** K-Means Clustering

### 11. Un experto financiero está creando un modelo para predecir el valor futuro de un portafolio en función del desempeño histórico, la asignación de activos y las tendencias del mercado. El modelo de predicción ayudará en la toma de decisiones de inversión y en la optimización de la estrategia de asignación de portafolio.

¿Cuál técnica de machine learning debería considerarse para cumplir este objetivo?

- · **A.** Probability density
- · **B.** Anomaly detection
- ✅ **C.** Linear regression
- · **D.** Dimensionality reduction

### 12. Una empresa de comercio electrónico quiere implementar una aplicación de aprendizaje automático para analizar reseñas de productos y determinar si cada reseña es favorable o desfavorable.

¿Qué tipo de modelo de aprendizaje automático es el más apropiado para esta aplicación?

- · **A.** Modelo de clasificación multiclase
- · **B.** Modelo de text embedding
- · **C.** Modelo de clustering
- ✅ **D.** Modelo de clasificación binaria

### 13. Una empresa de comercio electrónico está desarrollando un modelo con Amazon SageMaker para pronosticar la probabilidad de que un producto sea devuelto después de su compra. La empresa posee un conjunto de datos etiquetado que contiene categorías de productos, precios, reseñas de clientes y estado de devolución almacenado en un bucket de Amazon S3.

¿Cuál es el enfoque de aprendizaje automático más apropiado para esta tarea?

- ✅ **A.** Aprendizaje supervisado
- · **B.** Transfer learning
- · **C.** Aprendizaje no supervisado
- · **D.** Few-shot learning

### 14. Una empresa de servicios financieros está desarrollando un sistema para optimizar sus estrategias de trading bursátil. El sistema interactúa con el entorno del mercado de valores, realizando operaciones y aprendiendo de los resultados. Recibe recompensas por operaciones rentables y penalizaciones por pérdidas, con el objetivo de maximizar los retornos generales.

¿Cuál de los siguientes enfoques de aprendizaje automático (ML) se utiliza en este escenario?

- · **A.** Transfer learning
- · **B.** Self-supervised learning
- ✅ **C.** Reinforcement learning
- · **D.** Supervised learning

### 15. Un especialista en IA debe predecir el tipo de concha marina basándose en atributos como el tamaño, forma, textura, patrón de color y la presencia de surcos o espinas.

¿Cuál es el algoritmo más adecuado para esta tarea de clasificación?

- ✅ **A.** K-Nearest Neighbors (k-NN)
- · **B.** Factorization Machines
- · **C.** K-Means
- · **D.** Object Detection – MXNet

---

[← Volver al índice](./README.md)
