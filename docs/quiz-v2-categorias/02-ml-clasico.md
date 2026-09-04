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

**Por qué:** Los sistemas de detección de anomalías están específicamente diseñados para identificar comportamientos inusuales en la red.

**Por qué no las demás:**
- **A.** Esta solución se utiliza principalmente para verificar identidades individuales basadas en características físicas, no para detectar amenazas basadas en red o direcciones IP sospechosas.
- **B.** Este enfoque típicamente se enfoca en interpretar texto para emociones u opiniones y no se aplica a la detección de comportamiento inusual de direcciones.
- **C.** Esta opción se enfoca solo en pronosticar actividades futuras del negocio, como tendencias y preferencias de clientes.

### 2. ¿Cuál es el enfoque de machine learning que se utiliza para clasificar y organizar datos sin etiquetar identificando patrones ocultos sin necesidad de categorías o etiquetas predefinidas? Este enfoque incluye técnicas como Principal Component Analysis (PCA) y Random Cut Forest (RCF) para descubrir estructuras y anomalías en conjuntos de datos sin etiquetar.

- · **A.** Reinforcement Learning
- · **B.** Transfer Learning
- ✅ **C.** Unsupervised Learning
- · **D.** Few-shot Learning

**Por qué:** Amazon SageMaker admite unsupervised learning para diversas tareas, como clustering, detección de anomalías y aprendizaje de reglas de asociación.

**Por qué no las demás:**
- **A.** Se enfoca principalmente en el aprendizaje a través de las interacciones de un agente con un entorno.
- **B.** Este tipo de aprendizaje utiliza un modelo preentrenado de una tarea o dominio y lo aplica a una tarea diferente pero relacionada.
- **D.** Implica entrenar modelos con una cantidad muy limitada de datos etiquetados, a menudo solo unos pocos ejemplos.

### 3. Una empresa logística quiere pronosticar tiempos de entrega basándose en condiciones de tráfico, datos meteorológicos e información de rutas. La empresa también planea usar estos conocimientos para futuras predicciones de desempeño en entregas. Se está evaluando un conjunto de algoritmos de ML para identificar uno que produzca resultados interpretables con un desglose claro de cómo cada factor influye en el tiempo de entrega predicho a través de un proceso de toma de decisiones jerárquico.

¿Cuál algoritmo de machine learning (ML) satisface las necesidades de la empresa?

- · **A.** Support Vector Machine (SVM)
- ✅ **B.** Decision Trees
- · **C.** K-Nearest Neighbors (KNN)
- · **D.** Logistic Regression

**Por qué:** Además de ser interpretables, los Decision Trees pueden manejar tanto datos categóricos como numéricos, lo que los hace flexibles para diversas tareas predictivas.

**Por qué no las demás:**
- **A.** Esta opción se enfoca únicamente en crear un límite de decisión que maximice el margen entre clases (o predicciones en regresión) sin mostrar cómo.
- **C.** Es un algoritmo no paramétrico que realiza predicciones basadas en la similitud entre instancias.
- **D.** Aunque puede mostrar coeficientes de características, solo proporciona una relación lineal entre características y el objetivo.

### 4. Una empresa está desarrollando una aplicación educativa que presenta a los usuarios problemas matemáticos de operaciones aritméticas básicas, como "Calcula la suma de los siguientes números: 7, 14 y 21."

¿Cuál es el enfoque que ofrece la solución más eficiente mientras minimiza la complejidad?

- · **A.** Entrenar un modelo de aprendizaje supervisado con un conjunto de datos de problemas aritméticos y sus soluciones.
- · **B.** Aplicar un modelo de regresión lineal para predecir soluciones de problemas aritméticos.
- ✅ **C.** Escribir código que use reglas predefinidas para calcular soluciones basadas en principios aritméticos.
- · **D.** Construir una red neuronal para aprender operaciones aritméticas a partir de un gran conjunto de datos.

**Por qué:** Usar reglas predefinidas para operaciones aritméticas es el enfoque más eficiente y directo porque calcula directamente el resultado basándose en principios aritméticos.

**Por qué no las demás:**
- **A.** Implica usar un modelo de aprendizaje supervisado, que requiere un conjunto de datos etiquetado de problemas aritméticos y sus soluciones correspondientes.
- **B.** La regresión lineal es una técnica de machine learning típicamente utilizada para predecir valores numéricos continuos basados en características de entrada.
- **D.** Construir una red neuronal es un enfoque complejo e intensivo en recursos que no es necesario para resolver problemas aritméticos básicos.

### 5. Una empresa de logística necesita predecir la cantidad de envíos en las próximas semanas usando datos históricos de envíos. La empresa planea usar el algoritmo de pronóstico DeepAR de Amazon SageMaker AI para esta tarea.

¿Cuál es el tipo de dato más apropiado para hacer estas predicciones?

- ✅ **A.** Datos de series temporales
- · **B.** Datos de documentos
- · **C.** Datos de texto
- · **D.** Datos transaccionales

**Por qué:** Los datos de series temporales comprenden observaciones recopiladas a intervalos de tiempo regulares (por ejemplo, conteos diarios de envíos).

**Por qué no las demás:**
- **B.** Se refiere a contenido no estructurado como archivos PDF, Word o imágenes escaneadas.
- **C.** Se usan principalmente en tareas de procesamiento de lenguaje natural (NLP) como análisis de sentimientos o traducción de idiomas.
- **D.** Típicamente se refiere a registros individuales de eventos (como compras o envíos), frecuentemente almacenados en bases de datos relacionales.

### 6. Una empresa financiera ha recopilado 2 años de datos diarios de transacciones almacenados en un bucket de Amazon S3. Para mejorar la gestión de liquidez, la planificación financiera y la asignación de recursos, planea desarrollar un modelo de machine learning para pronosticar volúmenes de transacciones para los próximos 90 días.

¿Qué tipo de algoritmo debe usar la empresa?

- ✅ **A.** Algoritmo de forecasting
- · **B.** Algoritmo Linear Learner
- · **C.** Algoritmo de clustering
- · **D.** Algoritmo Object2Vec

**Por qué:** Los algoritmos de forecasting modelan estacionalidad, tendencias y patrones temporales para predecir valores futuros.

**Por qué no las demás:**
- **B.** Busca una relación lineal entre variables, pero no captura bien las dependencias temporales de una serie.
- **C.** Ubica objetos similares en un espacio vectorial (para recomendaciones), no predice series temporales.
- **D.** Agrupa puntos de datos similares, no predice valores futuros.

### 7. Una empresa utiliza un modelo de IA para etiquetar automáticamente los emails de clientes como Queja, Consulta o Comentario. El modelo se entrena con miles de emails pre-etiquetados para aprender patrones.

¿Qué tipo de NLP se utiliza cuando una IA aprende de datos etiquetados para clasificar texto nuevo?

- · **A.** NLP no supervisado
- ✅ **B.** NLP supervisado
- · **C.** Natural language generation (NLG)
- · **D.** Natural language understanding (NLU)

**Por qué:** El NLP supervisado es ampliamente compatible con plataformas y servicios modernos de machine learning.

**Por qué no las demás:**
- **A.** Se ocupa de analizar texto sin datos etiquetados.
- **C.** Se utiliza principalmente para crear salida de texto a partir de datos estructurados o prompts, como escribir un resumen o generar una respuesta.
- **D.** Es un concepto amplio que típicamente se refiere a la capacidad de un modelo de comprender significado, contexto e intención del lenguaje humano.

### 8. Un servicio de streaming quiere analizar datos de usuarios para mejorar sus recomendaciones de contenido. El equipo de ciencia de datos necesita agrupar usuarios con hábitos de visualización similares, identificar patrones comunes en los tipos de shows que se ven juntos, y estimar cómo se distribuyen las preferencias de los usuarios entre diferentes géneros.

Vinculá cada enfoque de aprendizaje no supervisado que el equipo de ciencia de datos debe considerar con su objetivo correcto. (Seleccioná TRES.)

| Elemento | Respuesta correcta | Por qué |
|---|---|---|
| Estimar cómo se distribuyen las preferencias de los usuarios entre diferentes géneros. | **Probability density** | Probability density estima cómo se distribuyen los valores de una variable |
| Identificar patrones comunes en los tipos de shows que se ven juntos. | **Association rule learning** | Association rule learning descubre qué elementos suelen aparecer juntos |
| Agrupar usuarios con hábitos de visualización similares. | **Clustering** | Clustering agrupa puntos de datos similares sin categorías predefinidas |

_Distractor: Dimensionality reduction solo reduce la cantidad de variables de un dataset, no agrupa usuarios, encuentra asociaciones ni estima distribuciones._

### 9. Una institución financiera utiliza regresión logística para evaluar solicitudes de crédito y predecir la probabilidad de incumplimiento. El modelo analiza datos históricos de clientes e identifica patrones sin necesidad de escribir reglas manualmente.

¿Qué término se refiere a una rama de la IA que permite que los sistemas aprendan y hagan predicciones basadas en datos sin estar explícitamente estructurados?

- · **A.** Predictive analytics
- · **B.** Natural Language Processing (NLP)
- ✅ **C.** Machine Learning
- · **D.** Object-oriented programming

**Por qué:** La imagen anterior muestra el ciclo de vida de Machine Learning.

**Por qué no las demás:**
- **A.** Solo implica el uso de técnicas estadísticas para pronosticar resultados basados en datos históricos.
- **B.** Esta opción es una rama específica de la IA enfocada en las interacciones entre computadoras y lenguajes humanos.
- **D.** Simplemente se refiere a un paradigma de programación enfocado en usar objetos y clases para estructurar el desarrollo de software.

### 10. Un proveedor de salud está construyendo una plataforma de análisis de salud poblacional para analizar datos demográficos de pacientes y patrones de adherencia a tratamientos. El objetivo es identificar grupos de pacientes distintos para optimizar programas de alcance, como dirigirse a grupos de alto riesgo para aplicar vacunas contra la gripe o personalizar campañas de manejo de diabetes.

¿Qué algoritmo de aprendizaje automático debe utilizar el proveedor de salud para segmentar automáticamente a los pacientes en función de estos factores clínicos y socioeconómicos?

- · **A.** Principal Component Analysis (PCA)
- · **B.** K-Nearest Neighbors (KNN)
- · **C.** Random Cut Forest (RCF)
- ✅ **D.** K-Means Clustering

**Por qué:** En el sector sanitario, K-Means Clustering puede ser una herramienta efectiva para la segmentación de pacientes.

**Por qué no las demás:**
- **A.** Es solo una técnica de reducción de dimensionalidad, no un método de clustering.
- **B.** Se utiliza típicamente para tareas de aprendizaje supervisado, como clasificación o regresión.
- **C.** Está diseñada principalmente para detección de anomalías, que tiene como objetivo identificar puntos de datos raros o inusuales en un conjunto de datos.

### 11. Un experto financiero está creando un modelo para predecir el valor futuro de un portafolio en función del desempeño histórico, la asignación de activos y las tendencias del mercado. El modelo de predicción ayudará en la toma de decisiones de inversión y en la optimización de la estrategia de asignación de portafolio.

¿Cuál técnica de machine learning debería considerarse para cumplir este objetivo?

- · **A.** Probability density
- · **B.** Anomaly detection
- ✅ **C.** Linear regression
- · **D.** Dimensionality reduction

**Por qué:** Linear regression se refiere a modelos de aprendizaje supervisado que utilizan una o más entradas para predecir un valor en una escala continua.

**Por qué no las demás:**
- **A.** Esta opción se utiliza generalmente para estimar la probabilidad de que una variable aleatoria caiga dentro de un rango particular de valores.
- **B.** Se utiliza solo para identificar valores atípicos o patrones inusuales en los datos.
- **D.** Se utiliza principalmente para reducir el número de características en un conjunto de datos mientras se retiene la mayor cantidad de información posible.

### 12. Una empresa de comercio electrónico quiere implementar una aplicación de aprendizaje automático para analizar reseñas de productos y determinar si cada reseña es favorable o desfavorable.

¿Qué tipo de modelo de aprendizaje automático es el más apropiado para esta aplicación?

- · **A.** Modelo de clasificación multiclase
- · **B.** Modelo de text embedding
- · **C.** Modelo de clustering
- ✅ **D.** Modelo de clasificación binaria

**Por qué:** El proceso de clasificación binaria típicamente implica entrenar el modelo con un conjunto de datos etiquetado, donde cada punto de datos está asociado con una de las dos clases.

**Por qué no las demás:**
- **A.** Esta opción solo aplica cuando hay más de dos categorías para predecir.
- **B.** Solo se utiliza para convertir datos de texto en vectores numéricos que pueden ser procesados por modelos de aprendizaje automático.
- **C.** Este modelo se utiliza para agrupar puntos de datos similares según sus características sin etiquetas predefinidas.

### 13. Una empresa de comercio electrónico está desarrollando un modelo con Amazon SageMaker para pronosticar la probabilidad de que un producto sea devuelto después de su compra. La empresa posee un conjunto de datos etiquetado que contiene categorías de productos, precios, reseñas de clientes y estado de devolución almacenado en un bucket de Amazon S3.

¿Cuál es el enfoque de aprendizaje automático más apropiado para esta tarea?

- ✅ **A.** Aprendizaje supervisado
- · **B.** Transfer learning
- · **C.** Aprendizaje no supervisado
- · **D.** Few-shot learning

**Por qué:** Amazon SageMaker proporciona un sólido soporte para tareas de aprendizaje supervisado.

**Por qué no las demás:**
- **B.** Se utiliza generalmente cuando tienes un modelo preentrenado que puede ajustarse a una tarea específica.
- **C.** Este método se utiliza solo para analizar y agrupar datos sin salidas etiquetadas.
- **D.** Este método de aprendizaje automático se utiliza solo cuando los datos disponibles para el entrenamiento son limitados.

### 14. Una empresa de servicios financieros está desarrollando un sistema para optimizar sus estrategias de trading bursátil. El sistema interactúa con el entorno del mercado de valores, realizando operaciones y aprendiendo de los resultados. Recibe recompensas por operaciones rentables y penalizaciones por pérdidas, con el objetivo de maximizar los retornos generales.

¿Cuál de los siguientes enfoques de aprendizaje automático (ML) se utiliza en este escenario?

- · **A.** Transfer learning
- · **B.** Self-supervised learning
- ✅ **C.** Reinforcement learning
- · **D.** Supervised learning

**Por qué:** Esto la convierte en una plataforma ideal para organizaciones que aprovechan reinforcement learning para optimizar procesos complejos de toma de decisiones.

**Por qué no las demás:**
- **A.** Este enfoque implica utilizar un modelo preentrenado en una tarea nueva pero relacionada.
- **B.** Este enfoque implica que el modelo genere sus propias etiquetas a partir de los datos de entrada.
- **D.** Supervised learning implica entrenar un modelo en un conjunto de datos etiquetados, donde la salida correcta se proporciona para cada entrada durante el entrenamiento.

### 15. Un especialista en IA debe predecir el tipo de concha marina basándose en atributos como el tamaño, forma, textura, patrón de color y la presencia de surcos o espinas.

¿Cuál es el algoritmo más adecuado para esta tarea de clasificación?

- ✅ **A.** K-Nearest Neighbors (k-NN)
- · **B.** Factorization Machines
- · **C.** K-Means
- · **D.** Object Detection – MXNet

**Por qué:** K-NN está pensado para clasificación sobre datos estructurados numéricos y categóricos, sin necesidad de infraestructura compleja.

**Por qué no las demás:**
- **B.** Detecta y localiza objetos en imágenes, no clasifica datos estructurados sin imágenes.
- **C.** Agrupa datos sin etiquetas (clustering), no predice una clase específica.
- **D.** Está pensado para datos dispersos de alta dimensión (recomendaciones), no para clasificación simple con pocos atributos.

---

[← Volver al índice](./README.md)
