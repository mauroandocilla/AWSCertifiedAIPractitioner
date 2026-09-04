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

### 2. Una empresa está desarrollando un modelo para generar recomendaciones basadas en texto. La empresa notó que los datos de entrenamiento contienen ejemplos sesgados y desbalanceados, lo que no está equilibrado y afecta la calidad de las recomendaciones.

¿Qué enfoque mejorará los datos de entrenamiento para abordar este problema?

- ✅ **A.** Data augmentation
- · **B.** Retrieval Augmented Generation (RAG)
- · **C.** Ensemble learning
- · **D.** Federated Learning

### 3. Un equipo revisa las leyes de privacidad de datos y confirma directrices éticas para datos de pacientes. Durante esta revisión, el equipo considera si federated learning podría permitir un entrenamiento de modelos conforme. ¿Cuál es la fase del ciclo de vida de ML que corresponde?

- · **A.** Feature engineering
- · **B.** Model development
- · **C.** Data preprocessing
- ✅ **D.** Business goal identification

### 4. Una empresa está construyendo un modelo de machine learning para predecir la rotación de clientes. Aunque el modelo muestra un buen desempeño con los datos de entrenamiento, tiene dificultades para estimar la rotación de manera efectiva en datos nuevos que no ha visto antes.

¿Cuál de los siguientes enfoques ayudaría a mejorar el desempeño del modelo?

- ✅ **A.** Aumentar el coeficiente de regularización para reducir la complejidad del modelo.
- · **B.** Usar una arquitectura de modelo más simple para evitar overfitting.
- · **C.** Cambiar la función de pérdida por una que se ajuste mejor a los datos.
- · **D.** Disminuir el coeficiente de regularización para permitir que el modelo capture más complejidad.

### 5. Un proveedor de salud ha acumulado gigabytes de registros médicos, notas clínicas e historial de pacientes en diversos formatos. El proveedor debe procesar y organizar estos datos en un formato estructurado para habilitar análisis adicionales para tareas de machine learning (ML) como predicción de enfermedades y recomendaciones de tratamiento personalizado.

¿Cuál es el MEJOR servicio para cumplir con estos requisitos?

- ✅ **A.** AWS Glue
- · **B.** Amazon Kinesis Data Streams
- · **C.** Amazon Polly
- · **D.** Amazon Kendra

### 6. Una empresa de retail vende productos electrónicos en línea y enfrenta problemas de gestión de inventario. Quieren implementar un modelo de predicción de demanda para resolver esto.

¿Cuál es la etapa más crítica en la implementación del modelo para abordar situaciones de falta de stock y exceso de inventario?

- ✅ **A.** Recopilación de datos
- · **B.** Evaluación empresarial
- · **C.** Feature engineering
- · **D.** Entrenamiento del modelo

### 7. Un equipo de ciencia de datos está desarrollando un modelo de ML para predecir la deserción de clientes. Como parte del análisis inicial de datos, el equipo visualizó las distribuciones de features, calculó estadísticas descriptivas y analizó matrices de correlación de features usando notebooks de Amazon SageMaker Studio para las tareas de análisis de datos.

¿En qué etapa del pipeline de aprendizaje automático se encuentra el equipo?

- ✅ **A.** Exploratory Data Analysis (EDA)
- · **B.** Feature Engineering
- · **C.** Model Training
- · **D.** Model Evaluation

### 8. Un científico de datos está trabajando en un modelo de machine learning usando Amazon SageMaker. El modelo tiene un desempeño pobre en los conjuntos de datos de entrenamiento y validación, mostrando un alto bias. ¿Cuál es la causa más probable de este problema?

- · **A.** Overfitting
- ✅ **B.** Underfitting
- · **C.** Mala calidad de datos
- · **D.** Preprocesamiento de datos insuficiente

### 9. Un científico de datos está evaluando un modelo de machine learning y nota que funciona bien con los datos de entrenamiento pero mal con los datos de prueba.

¿Qué combinación de sesgo y varianza probablemente está causando este problema?

- · **A.** Sesgo bajo y varianza baja.
- · **B.** Sesgo aumentado y menos varianza.
- ✅ **C.** Sesgo bajo pero variabilidad más alta.
- · **D.** Sesgo aumentado y variabilidad aumentada

---

[← Volver al índice](./README.md)
