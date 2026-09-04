# Fine-tuning y personalización de modelos

_8 preguntas · Quiz v2 (TutorialsDojo) · AWS Certified AI Practitioner (AIF-C01)_

## Concepto clave

Cuándo y cómo personalizar un foundation model con datos propios: fine-tuning por instrucciones, adaptación de dominio, pre-entrenamiento continuo, RLHF (reward model), y el hiperparámetro epochCount del entrenamiento.

## Truco para reconocerlas

Si la pregunta menciona "entrenar con datos propios etiquetados" para adaptar terminología o estilo específico de una industria, es fine-tuning -- a diferencia de RAG, que no reentrena el modelo, solo le agrega contexto recuperado en el momento. "epochCount" es cuántas veces el modelo recorre el dataset completo de entrenamiento.

## Palabras clave

`datos etiquetados propios` · `adaptar terminología` · `reentrenar el modelo`

## Preguntas

### 1. ¿Cuál de los siguientes es un beneficio principal del fine-tuning de un modelo de fundación pre-entrenado?

- · **A.** Reduce la complejidad del modelo.
- ✅ **B.** Mejora el desempeño para casos de uso específicos.
- · **C.** Disminuye significativamente el tamaño del modelo.
- · **D.** Reduce el tiempo necesario para el entrenamiento.

### 2. Un instituto de investigación está utilizando un foundation model (FM) para análisis de datos en tiempo real y necesita una estrategia de entrenamiento que actualice regularmente el modelo con nuevos datos para mantener su relevancia y precisión.

¿Cuál de las siguientes opciones cumplirá con los requisitos?

- · **A.** Fine-tuning
- · **B.** Transfer learning
- ✅ **C.** Continuous pre-training
- · **D.** Static training

### 3. Un profesional de IA realiza fine-tuning de un FM (Foundation Model) para lograr mayor precisión y cumplir un cierto nivel de aceptación. El profesional está considerando varios ajustes al proceso de entrenamiento, incluyendo la sintonización del parámetro de regularización.

¿Cuál será el enfoque MÁS efectivo para lograr este objetivo?

- · **A.** Disminuir el epochCount
- · **B.** Reducir el tamaño del modelo
- ✅ **C.** Aumentar el epochCount
- · **D.** Aumentar el learningRateWarmupSteps

### 4. Una agencia de viajes necesita hacer fine-tuning de un foundation model (FM) para ayudar a los clientes proporcionando consejos detallados de planificación de viajes, manejando conversaciones multi-turn sobre preferencias de viaje y haciendo recomendaciones personalizadas. La agencia requiere que el modelo aplique razonamiento de Chain-of-thought para resolver consultas complejas de clientes.

¿Cuál método satisfará estos requisitos?

- · **A.** Domain adaptation fine-tuning
- · **B.** Few-shot learning
- · **C.** Zero-shot learning
- ✅ **D.** Instruction-based fine-tuning

### 5. ¿Cuál hiperparámetro define la cantidad de veces que el modelo pasará por todo el dataset de entrenamiento?

- ✅ **A.** epochCount
- · **B.** batchSize
- · **C.** learningRateWarmupSteps
- · **D.** learningRate

### 6. Una organización está desarrollando un asistente conversacional de IA usando un modelo de lenguaje grande. La organización quiere incorporar retroalimentación humana para mejorar las respuestas del modelo y asegurar que sean apropiadas y útiles.

¿Cuáles son los pasos que forman parte del enfoque RLHF (Reinforcement Learning from Human Feedback)? (Selecciona DOS.)

- · **A.** Fine-tuning supervisado del modelo de regresión
- ✅ **B.** Fine-tuning supervisado del modelo de lenguaje
- ✅ **C.** Crear un reward model
- · **D.** Pre-entrenamiento no supervisado del modelo de lenguaje
- · **E.** Evaluar el desempeño del modelo usando perplexity score

### 7. Un proyecto implica generar descripciones de productos para un sitio de e-commerce utilizando un conjunto de datos de descripciones de productos existentes del sitio. El objetivo es producir modelos específicos del dominio adaptados al catálogo del sitio.

¿Cuál es el enfoque de fine-tuning más apropiado para adaptar un modelo de lenguaje preentrenado para generar descripciones de productos similares a las del conjunto de datos?

- · **A.** Transfer learning
- · **B.** Unsupervised pre-training
- · **C.** Instruction-based fine-tuning
- ✅ **D.** Domain adaptation fine-tuning

### 8. Una empresa quiere adaptar sus modelos de IA preentrenados a terminología y requisitos específicos de la industria entrenando los modelos en conjuntos de datos etiquetados.

¿Cuál es el enfoque que debería usar?

- · **A.** Ajuste de hiperparámetros
- · **B.** Cuantización de modelos
- · **C.** Transfer Learning
- ✅ **D.** Fine-tuning

---

[← Volver al índice](./README.md)
