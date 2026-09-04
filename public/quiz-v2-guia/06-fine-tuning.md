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

**Por qué:** El fine-tuning ajusta el modelo con datos propios para que responda mejor en el caso de uso específico.

**Por qué no las demás:**
- **A.** No simplifica la arquitectura del modelo; la complejidad se mantiene igual.
- **C.** No reduce el tamaño del modelo, solo ajusta sus parámetros.
- **D.** Puede ser más rápido que entrenar desde cero, pero ese no es su objetivo principal.

### 2. Un instituto de investigación está utilizando un foundation model (FM) para análisis de datos en tiempo real y necesita una estrategia de entrenamiento que actualice regularmente el modelo con nuevos datos para mantener su relevancia y precisión.

¿Cuál de las siguientes opciones cumplirá con los requisitos?

- · **A.** Fine-tuning
- · **B.** Transfer learning
- ✅ **C.** Continuous pre-training
- · **D.** Static training

**Por qué:** El Continuous pre-training no implica modificaciones arquitectónicas ni fine-tuning para tareas específicas.

**Por qué no las demás:**
- **A.** Típicamente implica ajustar un modelo pre-entrenado utilizando un conjunto de datos específico para mejorar el desempeño en una tarea particular.
- **B.** Se enfoca en adaptar un modelo pre-entrenado a una nueva tarea o dominio utilizando un conjunto de datos más pequeño y específico para esa.
- **D.** Implica principalmente entrenar el modelo una sola vez con un conjunto de datos fijo sin actualizaciones.

### 3. Un profesional de IA realiza fine-tuning de un FM (Foundation Model) para lograr mayor precisión y cumplir un cierto nivel de aceptación. El profesional está considerando varios ajustes al proceso de entrenamiento, incluyendo la sintonización del parámetro de regularización.

¿Cuál será el enfoque MÁS efectivo para lograr este objetivo?

- · **A.** Disminuir el epochCount
- · **B.** Reducir el tamaño del modelo
- ✅ **C.** Aumentar el epochCount
- · **D.** Aumentar el learningRateWarmupSteps

**Por qué:** El hiperparámetro epochCount define la cantidad de veces que el modelo pasará por todo el conjunto de datos de entrenamiento durante el proceso de entrenamiento.

**Por qué no las demás:**
- **A.** Esto típicamente limita la exposición del modelo a los datos de entrenamiento, llevando a underfitting y baja precisión.
- **B.** Reducir el tamaño del modelo simplemente disminuiría la capacidad del modelo para aprender patrones complejos, potencialmente reduciendo su precisión.
- **D.** Estabiliza el entrenamiento, pero no mejora la precisión tan directamente como más epochs.

### 4. Una agencia de viajes necesita hacer fine-tuning de un foundation model (FM) para ayudar a los clientes proporcionando consejos detallados de planificación de viajes, manejando conversaciones multi-turn sobre preferencias de viaje y haciendo recomendaciones personalizadas. La agencia requiere que el modelo aplique razonamiento de Chain-of-thought para resolver consultas complejas de clientes.

¿Cuál método satisfará estos requisitos?

- · **A.** Domain adaptation fine-tuning
- · **B.** Few-shot learning
- · **C.** Zero-shot learning
- ✅ **D.** Instruction-based fine-tuning

**Por qué:** Instruction-based fine-tuning es particularmente valioso cuando necesitas personalizar un foundation model para que se ajuste a las necesidades específicas de tu aplicación.

**Por qué no las demás:**
- **A.** Este enfoque utiliza un modelo previamente entrenado para mejorar su desempeño solo en un dominio específico.
- **B.** Está diseñada principalmente para entrenar un modelo con datos limitados.
- **C.** Este enfoque permite que un modelo realice una tarea sin haber sido entrenado explícitamente en esa tarea.

### 5. ¿Cuál hiperparámetro define la cantidad de veces que el modelo pasará por todo el dataset de entrenamiento?

- ✅ **A.** epochCount
- · **B.** batchSize
- · **C.** learningRateWarmupSteps
- · **D.** learningRate

**Por qué:** Define cuántas veces el modelo recorre todo el dataset de entrenamiento durante el proceso.

**Por qué no las demás:**
- **B.** Define cuántos ejemplos se procesan por iteración, no cuántas pasadas completas se hacen sobre el dataset.
- **C.** Controla los pasos en que la tasa de aprendizaje sube gradualmente al inicio, no las pasadas por el dataset.
- **D.** Controla cuánto se ajustan los pesos ante cada error, no la frecuencia con que se recorre el dataset.

### 6. Una organización está desarrollando un asistente conversacional de IA usando un modelo de lenguaje grande. La organización quiere incorporar retroalimentación humana para mejorar las respuestas del modelo y asegurar que sean apropiadas y útiles.

¿Cuáles son los pasos que forman parte del enfoque RLHF (Reinforcement Learning from Human Feedback)? (Selecciona DOS.)

- · **A.** Fine-tuning supervisado del modelo de regresión
- ✅ **B.** Fine-tuning supervisado del modelo de lenguaje
- ✅ **C.** Crear un reward model
- · **D.** Pre-entrenamiento no supervisado del modelo de lenguaje
- · **E.** Evaluar el desempeño del modelo usando perplexity score

**Por qué:** **B. Fine-tuning supervisado del modelo de lenguaje** -- Otro paso clave en el enfoque RLHF es hacer fine-tuning del modelo de lenguaje usando el reward model y técnicas de reinforcement learning; **C. Crear un reward model** -- Uno de los pasos clave en el enfoque RLHF es crear un reward model.

**Por qué no las demás:**
- **A.** Reinforcement Learning from Human Feedback (RLHF) es una técnica utilizada para entrenar modelos de lenguaje grandes, no modelos de regresión.
- **D.** RLHF es una técnica utilizada para hacer fine-tuning de un modelo de lenguaje ya pre-entrenado usando retroalimentación humana.
- **E.** Perplexity es una métrica utilizada para evaluar el desempeño de los modelos de lenguaje, pero no es parte del enfoque RLHF.

### 7. Un proyecto implica generar descripciones de productos para un sitio de e-commerce utilizando un conjunto de datos de descripciones de productos existentes del sitio. El objetivo es producir modelos específicos del dominio adaptados al catálogo del sitio.

¿Cuál es el enfoque de fine-tuning más apropiado para adaptar un modelo de lenguaje preentrenado para generar descripciones de productos similares a las del conjunto de datos?

- · **A.** Transfer learning
- · **B.** Unsupervised pre-training
- · **C.** Instruction-based fine-tuning
- ✅ **D.** Domain adaptation fine-tuning

**Por qué:** Domain adaptation fine-tuning es apropiado para adaptar un modelo de lenguaje preentrenado a tipos específicos de datos de texto, como descripciones de productos de un sitio de e-commerce.

**Por qué no las demás:**
- **A.** Típicamente se refiere a aplicar un modelo preentrenado a una tarea diferente pero relacionada, pero no implica específicamente fine-tuning con datos específicos del dominio.
- **B.** Implica entrenar un modelo en un conjunto de datos grande y general sin etiquetas específicas ni tareas definidas.
- **C.** Está diseñada principalmente para mejorar el desempeño de un modelo en tareas específicas proporcionando ejemplos etiquetados en forma de pares prompt-respuesta.

### 8. Una empresa quiere adaptar sus modelos de IA preentrenados a terminología y requisitos específicos de la industria entrenando los modelos en conjuntos de datos etiquetados.

¿Cuál es el enfoque que debería usar?

- · **A.** Ajuste de hiperparámetros
- · **B.** Cuantización de modelos
- · **C.** Transfer Learning
- ✅ **D.** Fine-tuning

**Por qué:** Es la técnica específica de transfer learning que reentrena el modelo con datos etiquetados propios para adaptarlo a terminología de una industria.

**Por qué no las demás:**
- **A.** Optimiza parámetros de entrenamiento (tasa de aprendizaje, batch size), no adapta el modelo a un dominio.
- **B.** Reduce la precisión de los parámetros para eficiencia, no reentrena el modelo con datos del dominio.
- **C.** Es el concepto general de reutilizar un modelo preentrenado; fine-tuning es el método específico para adaptarlo.

---

[← Volver al índice](./README.md)
