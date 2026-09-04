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

### 2. Un equipo de soporte al cliente en una empresa de tecnología desarrolló un modelo de lenguaje grande (LLM) para ayudar con preguntas frecuentes y solución de problemas. Después de hacer fine-tuning del modelo con datos recientes, el equipo usa Amazon Comprehend para diversas tareas de comprensión del lenguaje natural.

Para verificar si el fine-tuning ha mejorado la precisión del modelo, el equipo debe evaluar su desempeño usando conjuntos de datos de referencia.

¿Cuál métrica de evaluación sería más apropiada para medir la efectividad del modelo?

- · **A.** Area Under the ROC Curve
- · **B.** Precision
- ✅ **C.** F1 Score
- · **D.** Mean Squared Error

### 3. Una empresa de comercio electrónico ha implementado un modelo de IA para categorizar productos basándose en imágenes cargadas por vendedores. La empresa debe determinar qué tan bien el modelo clasifica correctamente las categorías de productos.

¿Cuál es la métrica más apropiada para evaluar la efectividad del modelo de clasificación de imágenes?

- · **A.** Precision
- · **B.** Root mean squared error (RMSE)
- · **C.** Recall
- ✅ **D.** Accuracy

### 4. Una empresa editorial utiliza un foundation model (FM) para generar resúmenes de texto a partir de documentos extensos. La empresa necesita evaluar la efectividad de los resúmenes.

¿Cuál métrica se puede usar para evaluar el desempeño del foundation model en la generación de resúmenes de texto?

- · **A.** Precision
- · **B.** Recall
- · **C.** Balanced classification accuracy
- ✅ **D.** Recall-Oriented Understudy for Gisting Evaluation-N (ROUGE-N)

### 5. Una empresa tecnológica ha entrenado un modelo para clasificar productos en una línea de manufactura como defectuosos o no defectuosos. Para evaluar el desempeño del modelo en datos no vistos, el equipo necesita una solución que proporcione información sobre su precisión y capacidad para diferenciar entre las dos categorías.

¿Cuáles son las herramientas o métricas que deberían usarse?

- · **A.** F1 Score
- · **B.** Precision
- ✅ **C.** Confusion Matrix
- · **D.** MSE (Mean Squared Error)

### 6. Una organización minorista está construyendo un modelo de aprendizaje automático para su chatbot de atención al cliente. Necesita evaluar qué tan cercanas son las respuestas del chatbot a las de expertos en la materia. La organización también quiere optimizar la velocidad de respuesta del chatbot.

¿Cuál es la métrica más apropiada para evaluar la similitud de las respuestas del chatbot con las respuestas de expertos?

- · **A.** Metric for Evaluation of Translation with Explicit Ordering (METEOR)
- · **B.** Mean squared error (MSE)
- ✅ **C.** BERTScore
- · **D.** ROUGE-N

### 7. Un especialista en IA está trabajando en un proyecto con Large Language Models (LLMs) para traducir texto del inglés al filipino. Para evaluar la calidad de las traducciones generadas por el modelo, el especialista debe elegir una métrica apropiada que compare traducciones generadas por máquinas con traducciones hechas por humanos.

¿Cuál de las siguientes métricas es la más adecuada?

- · **A.** Mean Absolute Percentage Error (MAPE)
- ✅ **B.** Bilingual Evaluation Understudy (BLEU)
- · **C.** Root Mean Squared Error (RMSE)
- · **D.** Recall-Oriented Understudy for Gisting Evaluation (ROUGE)

### 8. Un ingeniero de ML debe pronosticar los ingresos mensuales de un servicio basado en suscripción.

¿Cuáles métricas de evaluación se deben usar para evaluar el rendimiento del modelo? (Selecciona DOS.)

- ✅ **A.** Error absoluto medio (MAE)
- · **B.** Puntuación F1
- · **C.** InferenceLatency
- · **D.** Precisión
- ✅ **E.** Error absoluto porcentual medio (MAPE)

### 9. Una organización utiliza una aplicación de NLP con un modelo fundacional (FM). Un ML Engineer evalúa su desempeño utilizando el F1 score.

¿Qué mide específicamente el F1 score en este contexto?

- ✅ **A.** El F1 score mide la capacidad del modelo para equilibrar precision y recall.
- · **B.** El F1 score evalúa el consumo de energía durante el entrenamiento del modelo.
- · **C.** El F1 score evalúa la velocidad con la que el modelo genera respuestas.
- · **D.** El F1 score mide la rentabilidad de la inferencia del modelo durante el despliegue.

### 10. Una empresa financiera ha construido un modelo de clasificación binaria usando Amazon SageMaker AI para detectar transacciones fraudulentas. El modelo genera una probabilidad entre 0 y 1 para cada predicción. Dado que los casos de fraude son raros, el equipo necesita evaluar el desempeño del modelo teniendo en cuenta el desbalance de clases.

¿Cuál métrica mide mejor la capacidad del modelo para distinguir entre fraude y no-fraude en todos los umbrales?

- · **A.** F1-Score
- ✅ **B.** Area Under the ROC Curve (AUC) Score
- · **C.** Precision
- · **D.** Accuracy

### 11. Un Ingeniero de Machine Learning está entrenando un modelo de clasificación multiclase para predecir géneros musicales. El especialista quiere evaluar el desempeño del modelo a través de una representación visual de diferentes métricas.

¿Cuál técnica de visualización debería usar el Ingeniero?

- · **A.** Matriz de correlación
- ✅ **B.** Matriz de confusión
- · **C.** Box plot
- · **D.** Curva Precision-Recall

### 12. Un proveedor de capacitación global ha desarrollado un sistema que aprovecha la IA generativa. Este sistema utiliza modelos de lenguaje grande (LLMs) para traducir manuales de capacitación del inglés a otros idiomas.

La organización planea evaluar la calidad de las traducciones comparando el resultado generado con documentos de referencia traducidos profesionalmente, utilizando un enfoque de comparación basado en N-gram para medir la superposición y la precisión.

¿Cuál es la estrategia de evaluación de modelos más adecuada para lograr estos objetivos?

- · **A.** F1 Score
- · **B.** Area Under the ROC Curve
- ✅ **C.** Bilingual Evaluation Understudy (BLEU)
- · **D.** BERTScore

---

[← Volver al índice](./README.md)
