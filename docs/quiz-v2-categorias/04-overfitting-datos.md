# Overfitting, underfitting y calidad/preparación de datos

_9 preguntas · Quiz v2 (TutorialsDojo) · AWS Certified AI Practitioner (AIF-C01)_

## Concepto clave

Sesgo (bias) vs. varianza, sobreajuste vs. subajuste, y las etapas iniciales del ciclo de vida de un proyecto de ML (recolección de datos, EDA, limpieza, aumento de datos) que determinan la calidad de todo lo que sigue.

## Truco para reconocerlas

"Funciona bien en entrenamiento pero mal en prueba/producción" es overfitting / alta varianza -> la corrección típica es subir el coeficiente de regularización. "Funciona mal en ambos conjuntos" es underfitting / alto sesgo -> hace falta un modelo más complejo. Si la pregunta describe la primera etapa de un proyecto de ML, antes de elegir un algoritmo, la respuesta suele ser "recolección de datos" o "EDA", no una herramienta específica de SageMaker.

## Palabras clave

`bien en entrenamiento, mal en prueba` · `alto sesgo / alta varianza` · `primera etapa del proyecto`

## Preguntas

### 1. Una empresa de comercio electrónico global almacena miles de millones de eventos de comportamiento y transaccionales en Amazon S3 para entrenar modelos de detección de fraude. El equipo de ciencia de datos necesita:

¿Cuál servicio de AWS mejor soporta ingeniería de características a gran escala y distribuida usando herramientas de código abierto?

- · **A.** Amazon MemoryDB
- · **B.** AWS Glue DataBrew
- ✅ **C.** Amazon EMR
- · **D.** Amazon Redshift

**Por qué:** Se integra sin problemas con Amazon S3 para almacenar datos de entrada y salida, y soporta procesamiento iterativo.

**Por qué no las demás:**
- **A.** Es principalmente una base de datos en memoria compatible con Redis, diseñada para acceso a datos con latencia ultra baja.
- **B.** Es una herramienta de preparación de datos visual y low-code que típicamente usan los analistas de datos para limpieza e transformación interactiva de datos.
- **D.** Es un almacén de datos completamente administrado que está optimizado principalmente para análisis y reportes basados en SQL.

### 2. Una empresa está desarrollando un modelo para generar recomendaciones basadas en texto. La empresa notó que los datos de entrenamiento contienen ejemplos sesgados y desbalanceados, lo que no está equilibrado y afecta la calidad de las recomendaciones.

¿Qué enfoque mejorará los datos de entrenamiento para abordar este problema?

- ✅ **A.** Data augmentation
- · **B.** Retrieval Augmented Generation (RAG)
- · **C.** Ensemble learning
- · **D.** Federated Learning

**Por qué:** Para datos desbalanceados, data augmentation es la estrategia más efectiva, ya que introduce más variabilidad en el conjunto de datos de entrenamiento, ayudando a mitigar los efectos del desbalance de datos.

**Por qué no las demás:**
- **B.** RAG típicamente se enfoca en combinar técnicas de recuperación y generación para producir respuestas y no corrige directamente el desbalance de datos.
- **C.** Este aprendizaje combina múltiples modelos para mejorar el desempeño general y la robustez.
- **D.** Este enfoque está diseñado principalmente para permitir entrenamiento descentralizado que preserve la privacidad.

### 3. Un equipo revisa las leyes de privacidad de datos y confirma directrices éticas para datos de pacientes. Durante esta revisión, el equipo considera si federated learning podría permitir un entrenamiento de modelos conforme. ¿Cuál es la fase del ciclo de vida de ML que corresponde?

- · **A.** Feature engineering
- · **B.** Model development
- · **C.** Data preprocessing
- ✅ **D.** Business goal identification

**Por qué:** Esta fase establece la dirección estratégica del proyecto de ML, incluyendo la revisión de requisitos regulatorios, estándares éticos y políticas de gobernanza de datos antes de que comience cualquier trabajo técnico.

**Por qué no las demás:**
- **A.** Se enfoca en crear o seleccionar variables de entrada para el entrenamiento del modelo.
- **B.** Típicamente se refiere a entrenar, ajustar y validar modelos.
- **C.** Se enfoca principalmente en limpiar y transformar datos para modelado.

### 4. Una empresa está construyendo un modelo de machine learning para predecir la rotación de clientes. Aunque el modelo muestra un buen desempeño con los datos de entrenamiento, tiene dificultades para estimar la rotación de manera efectiva en datos nuevos que no ha visto antes.

¿Cuál de los siguientes enfoques ayudaría a mejorar el desempeño del modelo?

- ✅ **A.** Aumentar el coeficiente de regularización para reducir la complejidad del modelo.
- · **B.** Usar una arquitectura de modelo más simple para evitar overfitting.
- · **C.** Cambiar la función de pérdida por una que se ajuste mejor a los datos.
- · **D.** Disminuir el coeficiente de regularización para permitir que el modelo capture más complejidad.

**Por qué:** Aumentar el coeficiente de regularización dentro de Amazon SageMaker AI puede ayudar a abordar este desafío haciendo el modelo más simple.

**Por qué no las demás:**
- **B.** Simplificar la arquitectura del modelo puede ayudar a prevenir el overfitting, pero también puede reducir la capacidad del modelo para aprender de los datos.
- **C.** La función de pérdida impacta principalmente en cómo el modelo se optimiza durante el entrenamiento, pero no aborda directamente el overfitting.
- **D.** Reducir el parámetro de regularización disminuye la penalización sobre la complejidad del modelo, lo que puede llevar a overfitting.

### 5. Un proveedor de salud ha acumulado gigabytes de registros médicos, notas clínicas e historial de pacientes en diversos formatos. El proveedor debe procesar y organizar estos datos en un formato estructurado para habilitar análisis adicionales para tareas de machine learning (ML) como predicción de enfermedades y recomendaciones de tratamiento personalizado.

¿Cuál es el MEJOR servicio para cumplir con estos requisitos?

- ✅ **A.** AWS Glue
- · **B.** Amazon Kinesis Data Streams
- · **C.** Amazon Polly
- · **D.** Amazon Kendra

**Por qué:** AWS Glue proporciona integración con diversos servicios de AWS y es ideal para convertir datos de salud sin procesar en un formato estructurado que se pueda utilizar para tareas de machine learning.

**Por qué no las demás:**
- **B.** Está diseñada simplemente para la ingesta y el procesamiento de datos en tiempo real.
- **C.** Es simplemente un servicio que convierte texto en voz con sonido natural.
- **D.** Es simplemente un servicio de búsqueda inteligente diseñado para ayudar a los usuarios a encontrar información en diversas fuentes de datos.

### 6. Una empresa de retail vende productos electrónicos en línea y enfrenta problemas de gestión de inventario. Quieren implementar un modelo de predicción de demanda para resolver esto.

¿Cuál es la etapa más crítica en la implementación del modelo para abordar situaciones de falta de stock y exceso de inventario?

- ✅ **A.** Recopilación de datos
- · **B.** Evaluación empresarial
- · **C.** Feature engineering
- · **D.** Entrenamiento del modelo

**Por qué:** La recopilación de datos es crucial para construir cualquier modelo de predicción de demanda.

**Por qué no las demás:**
- **B.** Es importante para medir el impacto comercial, pero ocurre después de tener el modelo, no antes.
- **C.** Mejora el desempeño creando características relevantes, pero depende de tener buenos datos primero.
- **D.** Es esencial para desarrollar el modelo, pero su calidad depende de los datos recopilados antes.

### 7. Un equipo de ciencia de datos está desarrollando un modelo de ML para predecir la deserción de clientes. Como parte del análisis inicial de datos, el equipo visualizó las distribuciones de features, calculó estadísticas descriptivas y analizó matrices de correlación de features usando notebooks de Amazon SageMaker Studio para las tareas de análisis de datos.

¿En qué etapa del pipeline de aprendizaje automático se encuentra el equipo?

- ✅ **A.** Exploratory Data Analysis (EDA)
- · **B.** Feature Engineering
- · **C.** Model Training
- · **D.** Model Evaluation

**Por qué:** Es la primera fase del proyecto, donde se exploran y entienden los datos antes de transformarlos o entrenar cualquier modelo.

**Por qué no las demás:**
- **B.** Transforma o crea features, pero eso ocurre después de explorar los datos.
- **C.** Entrena el modelo con los datos ya preparados, un paso posterior a EDA y feature engineering.
- **D.** Evalúa un modelo ya entrenado, el último paso del flujo, no el primero.

### 8. Un científico de datos está trabajando en un modelo de machine learning usando Amazon SageMaker. El modelo tiene un desempeño pobre en los conjuntos de datos de entrenamiento y validación, mostrando un alto bias. ¿Cuál es la causa más probable de este problema?

- · **A.** Overfitting
- ✅ **B.** Underfitting
- · **C.** Mala calidad de datos
- · **D.** Preprocesamiento de datos insuficiente

**Por qué:** Obtienes modelos con underfitting si no han sido entrenados durante el tiempo apropiado en una gran cantidad de puntos de datos.

**Por qué no las demás:**
- **A.** El overfitting típicamente llevaría a una alta varianza, no a un alto bias.
- **C.** Aunque puede afectar el desempeño general, no indica específicamente un alto bias.
- **D.** Aunque puede causar un desempeño pobre, no conduce directamente a un alto bias.

### 9. Un científico de datos está evaluando un modelo de machine learning y nota que funciona bien con los datos de entrenamiento pero mal con los datos de prueba.

¿Qué combinación de sesgo y varianza probablemente está causando este problema?

- · **A.** Sesgo bajo y varianza baja.
- · **B.** Sesgo aumentado y menos varianza.
- ✅ **C.** Sesgo bajo pero variabilidad más alta.
- · **D.** Sesgo aumentado y variabilidad aumentada

**Por qué:** Esta combinación de sesgo bajo y varianza alta sugiere que el modelo es demasiado sensible a las características particulares de los datos de entrenamiento.

**Por qué no las demás:**
- **A.** Una varianza baja no necesariamente indica overfitting.
- **B.** Esta combinación simplemente sugiere underfitting, donde el modelo no logra captar la complejidad de los datos.
- **D.** Esta combinación solo representa underfitting (debido al sesgo alto) y overfitting (debido a la varianza alta), lo que genera un rendimiento general deficiente.

---

[← Volver al índice](./README.md)
