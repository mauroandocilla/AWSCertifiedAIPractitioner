# Métricas de evaluación de modelos

_12 preguntas · Quiz v2 (TutorialsDojo) · AWS Certified AI Practitioner (AIF-C01)_

## Concepto clave

Qué métrica usar según el tipo de tarea: ROUGE/BLEU/BERTScore para texto generado (resúmenes, traducciones, similitud semántica), F1/Accuracy/AUC/Confusion Matrix para clasificación, y MAE/MAPE para regresión y forecasting.

## Truco para reconocerlas

Traducción entre idiomas -> BLEU. Resumen de texto -> ROUGE (o ROUGE-N). Similitud semántica con una respuesta de referencia, no coincidencia exacta -> BERTScore. Clasificación binaria con probabilidades -> AUC. Clasificación multiclase, vista visual de aciertos/errores -> Confusion Matrix. Pronóstico numérico (ventas, ingresos) -> MAE/MAPE. "Balance entre precision y recall" -> F1 Score.

## Palabras clave

`resumen / traducción` · `clasificación binaria o multiclase` · `pronóstico numérico`

## Preguntas

### 1. Una empresa está probando un modelo para generar resúmenes de texto y necesita una métrica para evaluar qué tan bien los resúmenes coinciden con referencias creadas por humanos.

¿Cuál es la métrica más apropiada para esta evaluación?

- · **A.** F1 Score
- · **B.** Puntuación de satisfacción del cliente
- · **C.** BLEU (Bilingual Evaluation Understudy)
- ✅ **D.** Recall-Oriented Understudy for Gisting Evaluation (ROUGE)

**Por qué:** ROUGE es la métrica más apropiada para evaluar resúmenes de texto porque está específicamente diseñada para este propósito.

**Por qué no las demás:**
- **A.** Es simplemente una métrica general para evaluar modelos de clasificación, balanceando precisión y recall.
- **B.** Simplemente depende de retroalimentación subjetiva de humanos a través de encuestas y no puede servir como una métrica automatizada y repetible durante la prueba.
- **C.** Esta métrica se usa más comúnmente para evaluar traducción automática en lugar de resumen.

### 2. Un equipo de soporte al cliente en una empresa de tecnología desarrolló un modelo de lenguaje grande (LLM) para ayudar con preguntas frecuentes y solución de problemas. Después de hacer fine-tuning del modelo con datos recientes, el equipo usa Amazon Comprehend para diversas tareas de comprensión del lenguaje natural.

Para verificar si el fine-tuning ha mejorado la precisión del modelo, el equipo debe evaluar su desempeño usando conjuntos de datos de referencia.

¿Cuál métrica de evaluación sería más apropiada para medir la efectividad del modelo?

- · **A.** Area Under the ROC Curve
- · **B.** Precision
- ✅ **C.** F1 Score
- · **D.** Mean Squared Error

**Por qué:** Al considerar precision y recall, el F1 Score ofrece una evaluación más confiable y equilibrada de la efectividad del modelo que usar cualquiera de estas métricas por separado.

**Por qué no las demás:**
- **A.** Se utiliza principalmente para tareas de clasificación binaria y mide la capacidad del modelo para distinguir entre dos clases.
- **B.** Se enfoca solo en la proporción de predicciones verdaderas positivas respecto al número total de predicciones positivas.
- **D.** Se utiliza típicamente para tareas de regresión, donde el resultado es continuo y mide las diferencias al cuadrado entre valores predichos y reales.

### 3. Una empresa de comercio electrónico ha implementado un modelo de IA para categorizar productos basándose en imágenes cargadas por vendedores. La empresa debe determinar qué tan bien el modelo clasifica correctamente las categorías de productos.

¿Cuál es la métrica más apropiada para evaluar la efectividad del modelo de clasificación de imágenes?

- · **A.** Precision
- · **B.** Root mean squared error (RMSE)
- · **C.** Recall
- ✅ **D.** Accuracy

**Por qué:** SageMaker ofrece métricas integradas que ayudan a los usuarios a monitorear y optimizar fácilmente la accuracy de sus modelos.

**Por qué no las demás:**
- **A.** Es una métrica que mide la proporción de instancias positivas predichas correctamente.
- **B.** Esta métrica se utiliza típicamente para modelos de regresión, no para modelos de clasificación.
- **C.** Esta métrica solo mide la proporción de instancias positivas reales (verdaderos positivos) identificadas correctamente por el modelo.

### 4. Una empresa editorial utiliza un foundation model (FM) para generar resúmenes de texto a partir de documentos extensos. La empresa necesita evaluar la efectividad de los resúmenes.

¿Cuál métrica se puede usar para evaluar el desempeño del foundation model en la generación de resúmenes de texto?

- · **A.** Precision
- · **B.** Recall
- · **C.** Balanced classification accuracy
- ✅ **D.** Recall-Oriented Understudy for Gisting Evaluation-N (ROUGE-N)

**Por qué:** ROUGE-N se puede usar en Amazon SageMaker para evaluar modelos de generación de resúmenes de texto, especialmente aquellos que utilizan foundation models (FMs).

**Por qué no las demás:**
- **A.** Esta opción se utiliza típicamente en tareas de clasificación y recuperación de información para medir la precisión de los elementos relevantes recuperados o clasificados.
- **B.** Es una métrica utilizada en tareas de clasificación para medir la capacidad del modelo de identificar correctamente todas las instancias relevantes.
- **C.** Esta métrica se utiliza principalmente para evaluar el desempeño de modelos de clasificación, particularmente en situaciones donde las clases están desbalanceadas.

### 5. Una empresa tecnológica ha entrenado un modelo para clasificar productos en una línea de manufactura como defectuosos o no defectuosos. Para evaluar el desempeño del modelo en datos no vistos, el equipo necesita una solución que proporcione información sobre su precisión y capacidad para diferenciar entre las dos categorías.

¿Cuáles son las herramientas o métricas que deberían usarse?

- · **A.** F1 Score
- · **B.** Precision
- ✅ **C.** Confusion Matrix
- · **D.** MSE (Mean Squared Error)

**Por qué:** Muestra el desglose completo de aciertos y errores por clase, no solo un número agregado.

**Por qué no las demás:**
- **A.** Combina precision y recall en un solo número, sin desglosar el desempeño por clase.
- **B.** Solo mide qué tan precisas son las predicciones positivas, sin cubrir todas las clases.
- **D.** Es una métrica de regresión, no aplica a tareas de clasificación.

### 6. Una organización minorista está construyendo un modelo de aprendizaje automático para su chatbot de atención al cliente. Necesita evaluar qué tan cercanas son las respuestas del chatbot a las de expertos en la materia. La organización también quiere optimizar la velocidad de respuesta del chatbot.

¿Cuál es la métrica más apropiada para evaluar la similitud de las respuestas del chatbot con las respuestas de expertos?

- · **A.** Metric for Evaluation of Translation with Explicit Ordering (METEOR)
- · **B.** Mean squared error (MSE)
- ✅ **C.** BERTScore
- · **D.** ROUGE-N

**Por qué:** BERTScore es la métrica más apropiada porque mide directamente la similitud entre las respuestas del chatbot y las respuestas de expertos.

**Por qué no las demás:**
- **A.** Aunque también evalúa la similitud de texto, lo hace basándose en métricas de precisión y cobertura.
- **B.** Esta métrica se utiliza principalmente en tareas de regresión para medir la diferencia entre valores numéricos predichos y reales.
- **D.** Solo se enfoca en la superposición de n-gramas (secuencias de palabras) entre el texto generado y el texto de referencia.

### 7. Un especialista en IA está trabajando en un proyecto con Large Language Models (LLMs) para traducir texto del inglés al filipino. Para evaluar la calidad de las traducciones generadas por el modelo, el especialista debe elegir una métrica apropiada que compare traducciones generadas por máquinas con traducciones hechas por humanos.

¿Cuál de las siguientes métricas es la más adecuada?

- · **A.** Mean Absolute Percentage Error (MAPE)
- ✅ **B.** Bilingual Evaluation Understudy (BLEU)
- · **C.** Root Mean Squared Error (RMSE)
- · **D.** Recall-Oriented Understudy for Gisting Evaluation (ROUGE)

**Por qué:** BLEU está diseñado específicamente para medir la calidad de traducciones comparando n-gramas con una referencia.

**Por qué no las demás:**
- **A.** Mide error porcentual en pronósticos numéricos, no aplica a calidad de texto.
- **C.** Mide diferencias entre valores numéricos predichos y reales, no calidad de traducción.
- **D.** Está diseñada para evaluar resúmenes de texto, no traducciones.

### 8. Un ingeniero de ML debe pronosticar los ingresos mensuales de un servicio basado en suscripción.

¿Cuáles métricas de evaluación se deben usar para evaluar el rendimiento del modelo? (Selecciona DOS.)

- ✅ **A.** Error absoluto medio (MAE)
- · **B.** Puntuación F1
- · **C.** InferenceLatency
- · **D.** Precisión
- ✅ **E.** Error absoluto porcentual medio (MAPE)

**Por qué:** **A. Error absoluto medio (MAE)** -- MAE (Error Absoluto Medio) es la diferencia promedio entre los valores esperados y reales para todas las observaciones; **E. Error absoluto porcentual medio (MAPE)** -- Métricas como Error Absoluto Porcentual Medio (MAPE) y Error Absoluto Medio (MAE) son apropiadas para tareas de regresión y pronóstico.

**Por qué no las demás:**
- **B.** Esta es una métrica diseñada específicamente para problemas de clasificación, equilibrando precisión y exhaustividad.
- **C.** Solo mide el tiempo que tarda un modelo en generar predicciones y no evalúa la exactitud o calidad de las predicciones en sí.
- **D.** Esta métrica típicamente se usa para tareas de clasificación y no proporciona información significativa para evaluar predicciones de valores continuos como pronóstico de ingresos.

### 9. Una organización utiliza una aplicación de NLP con un modelo fundacional (FM). Un ML Engineer evalúa su desempeño utilizando el F1 score.

¿Qué mide específicamente el F1 score en este contexto?

- ✅ **A.** El F1 score mide la capacidad del modelo para equilibrar precision y recall.
- · **B.** El F1 score evalúa el consumo de energía durante el entrenamiento del modelo.
- · **C.** El F1 score evalúa la velocidad con la que el modelo genera respuestas.
- · **D.** El F1 score mide la rentabilidad de la inferencia del modelo durante el despliegue.

**Por qué:** Por ejemplo, en aplicaciones de NLP, es esencial detectar instancias positivas con precisión (recall) mientras se asegura que las predicciones sean exactas (precision).

**Por qué no las demás:**
- **B.** El F1 score es una métrica de desempeño relacionada con la precisión de las predicciones del modelo.
- **C.** La velocidad simplemente se refiere a qué tan rápido un modelo produce un resultado después de recibir entrada.
- **D.** La rentabilidad se refiere a la eficiencia y consumo de recursos al desplegar un modelo, no a su precisión de clasificación.

### 10. Una empresa financiera ha construido un modelo de clasificación binaria usando Amazon SageMaker AI para detectar transacciones fraudulentas. El modelo genera una probabilidad entre 0 y 1 para cada predicción. Dado que los casos de fraude son raros, el equipo necesita evaluar el desempeño del modelo teniendo en cuenta el desbalance de clases.

¿Cuál métrica mide mejor la capacidad del modelo para distinguir entre fraude y no-fraude en todos los umbrales?

- · **A.** F1-Score
- ✅ **B.** Area Under the ROC Curve (AUC) Score
- · **C.** Precision
- · **D.** Accuracy

**Por qué:** AUC evalúa el ranking del modelo en todos los umbrales, algo clave cuando la clase positiva (fraude) es rara.

**Por qué no las demás:**
- **A.** Refleja el desempeño solo en un umbral específico, sin dar una visión completa de discriminación.
- **C.** No tiene en cuenta el desempeño en todos los umbrales ni cuántos fraudes reales se perdieron.
- **D.** Con clases desbalanceadas puede ser engañosamente alta sin detectar bien los casos de fraude.

### 11. Un Ingeniero de Machine Learning está entrenando un modelo de clasificación multiclase para predecir géneros musicales. El especialista quiere evaluar el desempeño del modelo a través de una representación visual de diferentes métricas.

¿Cuál técnica de visualización debería usar el Ingeniero?

- · **A.** Matriz de correlación
- ✅ **B.** Matriz de confusión
- · **C.** Box plot
- · **D.** Curva Precision-Recall

**Por qué:** Da el desglose de aciertos y errores por clase, base de las métricas usadas en clasificación multiclase.

**Por qué no las demás:**
- **A.** Muestra relaciones lineales entre variables numéricas, no evalúa un clasificador.
- **C.** Es más apropiada para clasificación binaria y no da el desglose detallado por clase.
- **D.** Muestra distribución de datos numéricos (mediana, rango), no desempeño de clasificación.

### 12. Un proveedor de capacitación global ha desarrollado un sistema que aprovecha la IA generativa. Este sistema utiliza modelos de lenguaje grande (LLMs) para traducir manuales de capacitación del inglés a otros idiomas.

La organización planea evaluar la calidad de las traducciones comparando el resultado generado con documentos de referencia traducidos profesionalmente, utilizando un enfoque de comparación basado en N-gram para medir la superposición y la precisión.

¿Cuál es la estrategia de evaluación de modelos más adecuada para lograr estos objetivos?

- · **A.** F1 Score
- · **B.** Area Under the ROC Curve
- ✅ **C.** Bilingual Evaluation Understudy (BLEU)
- · **D.** BERTScore

**Por qué:** BLEU puede ser particularmente útil al evaluar traducciones generadas por servicios como Amazon Translate, que permite la traducción de idiomas en tiempo real a escala.

**Por qué no las demás:**
- **A.** Se utiliza principalmente en tareas de clasificación, donde equilibra precisión y recall para evaluar qué tan bien un modelo identifica instancias relevantes.
- **B.** Se utiliza típicamente en tareas de clasificación binaria para evaluar el equilibrio entre la tasa de verdaderos positivos y la tasa de falsos positivos.
- **D.** Simplemente utiliza embeddings contextuales de modelos BERT previamente entrenados para evaluar la similitud semántica.

---

[← Volver al índice](./README.md)
