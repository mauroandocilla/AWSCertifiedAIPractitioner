# Cómputo, inferencia, latencia y costo

_13 preguntas · Quiz v2 (TutorialsDojo) · AWS Certified AI Practitioner (AIF-C01)_

## Concepto clave

Elegir el tipo de endpoint de inferencia (real-time, serverless, batch, asíncrono) o el tipo de instancia de cómputo (Spot, Trainium) según el patrón de tráfico y el presupuesto, y qué factores mueven la latencia y el costo de un LLM.

## Truco para reconocerlas

Predicciones inmediatas y constantes -> Real-time Inference. Tráfico variable o esporádico -> Serverless Inference. Grandes volúmenes sin necesidad de respuesta inmediata -> Batch Transform. "Minimizar costo, tolera interrupciones" -> Spot Instance. Instancias Trn1 (Trainium) son para entrenamiento económico. El costo y la latencia de inferencia en LLMs casi siempre se miden en tokens procesados (entrada + salida), no en tiempo de cómputo.

## Palabras clave

`tráfico variable / constante` · `sin conexión / por lotes` · `tokens procesados`

## Preguntas

### 1. Una startup de tecnología está construyendo un sistema de atención al cliente usando Amazon Bedrock y un modelo de lenguaje grande (LLM) para producir inferencias. La startup utiliza Amazon S3 para almacenar datos y quiere optimizar costos mientras evalúa qué afecta los costos generales de sus aplicaciones de IA generativa. A medida que el sistema crece, el equipo ha observado que la velocidad de inferencia impacta directamente el throughput y la eficiencia con la que el sistema maneja las solicitudes de usuarios.

¿Qué afecta principalmente los costos de inferencia del sistema?

- ✅ **A.** Cantidad de tokens procesados
- · **B.** Tamaño de los datos de entrenamiento utilizados
- · **C.** Frecuencia de fine-tuning del modelo
- · **D.** Tamaño de batch del modelo

### 2. Una empresa minorista debe procesar varios terabytes de datos históricos de ventas para pronosticar tendencias estacionales. No se requiere acceso inmediato a las predicciones.

¿Cuál opción de inferencia de Amazon SageMaker se ajusta mejor a estos requisitos?

- · **A.** Elastic Inference
- · **B.** Serverless Inference
- ✅ **C.** Batch Transform Inference
- · **D.** Model Parallelism and Large Model Inference

### 3. Selecciona las opciones correctas de inferencia de Amazon SageMaker para cada caso. Cada opción de inferencia puede seleccionarse una o más veces. (Selecciona TRES.)

| Elemento | Respuesta correcta |
|---|---|
| Usar para cargas de trabajo de baja latencia con patrones de tráfico predecibles que necesitan características de latencia consistentes y disponibilidad continua. | **Real-time Inference** |
| Ideal para cargas de trabajo síncronas con patrones de tráfico variable que pueden tolerar variaciones de latencia. | **Serverless Inference** |
| Elige para procesar grandes conjuntos de datos sin conexión sin necesidad de un endpoint persistente. | **Batch Inference** |

### 4. Un practicante de IA evalúa las implicaciones de costos de usar Amazon Bedrock para realizar inferencias con un LLM. El practicante debe determinar el factor de costo principal para las operaciones de inferencia.

¿Cuál de los siguientes factores influye directamente en el costo de la inferencia al usar Amazon Bedrock?

- · **A.** Tamaño del batch utilizado durante el entrenamiento
- · **B.** Número de épocas de entrenamiento completadas
- · **C.** Complejidad de la arquitectura del modelo
- ✅ **D.** Número de tokens procesados durante la inferencia

### 5. Un especialista en IA utiliza Amazon Bedrock para tareas diarias de procesamiento de lenguaje natural (NLP), aprovechando few-shot prompting con 20 ejemplos en el prompt actual. El especialista quiere reducir los costos mensuales.

¿Cuál acción reducirá efectivamente los costos mensuales?

- · **A.** Disminuir el tamaño del lote para procesar prompts.
- ✅ **B.** Reducir la cantidad de tokens utilizados.
- · **C.** Usar Provisioned Throughput.
- · **D.** Agregar más ejemplos para aumentar el uso de tokens.

### 6. Una organización de salud ha creado un modelo de ML para clasificación de imágenes en imágenes médicas. La organización planea implementar el modelo en producción para integrarlo en su sistema existente. El modelo se ha entrenado eficientemente usando AWS Trainium para optimizar el desempeño.

La organización requiere una solución que genere predicciones sin necesidad de gestionar ninguna infraestructura subyacente.

¿Cuál es la solución que mejor cumple estos requisitos?

- ✅ **A.** Desplegar el modelo usando Amazon SageMaker Serverless Inference para obtener predicciones sin esfuerzo.
- · **B.** Desplegar AWS Batch para ejecutar el modelo y gestionar predicciones a escala.
- · **C.** Implementar el servicio Amazon SageMaker Training para desplegar el modelo.
- · **D.** Utilizar AWS Lambda combinado con Elastic Load Balancing para ejecutar y gestionar el modelo.

### 7. Una empresa financiera está optimizando su sistema de detección de fraude impulsado por un modelo de IA para reducir los retrasos en el procesamiento de transacciones. La empresa debe medir la eficiencia de runtime del sistema para analizar y aprobar transacciones.

¿Cuál es la métrica más adecuada para este propósito?

- · **A.** Duración del entrenamiento por epoch
- · **B.** Precisión del modelo
- · **C.** Tiempo de entrenamiento del modelo
- ✅ **D.** Tiempo promedio de respuesta

### 8. ¿Qué métrica evalúa la capacidad de respuesta de un modelo de machine learning en aplicaciones en tiempo real?

- · **A.** Puntuación de satisfacción del cliente (CSAT)
- · **B.** Utilización de memoria durante la inferencia
- ✅ **C.** Tiempo promedio de respuesta
- · **D.** Precisión del modelo

### 9. Un especialista en IA está desarrollando un modelo de IA entrenado e implementado en Amazon SageMaker. El especialista debe elegir una opción de inferencia de SageMaker que proporcione predicciones inmediatas y de baja latencia para un sistema de recomendaciones y respuestas en tiempo real a consultas de usuarios.

¿Cuál de las siguientes opciones es la más adecuada para los requisitos dados?

- ✅ **A.** Real-time inference
- · **B.** Model parallelism and large model inference
- · **C.** Asynchronous inference
- · **D.** Serverless inference

### 10. Una empresa de salud ha desarrollado un modelo de machine learning para analizar imágenes médicas y predecir posibles enfermedades. El objetivo es desplegar el modelo para analizar imágenes en tiempo real sin necesidad de gestionar servidores ni infraestructura.

¿Cuál es la solución que mejor cumple con este requisito?

- · **A.** Desplegar el modelo de ML usando funciones de AWS Lambda para predicciones en tiempo real.
- ✅ **B.** Usar un endpoint de Amazon SageMaker AI para desplegar el modelo.
- · **C.** Lanzar el modelo de ML dentro de un clúster de Kubernetes gestionado por Amazon EKS para servir predicciones en tiempo real.
- · **D.** Usar AWS Batch para ejecutar trabajos de inferencia en las imágenes médicas entrantes.

### 11. ¿Cuáles son los factores que pueden influir directamente en la latencia de la inferencia de un modelo de machine learning? (Selecciona DOS.)

- ✅ **A.** Longitud de la secuencia de datos de entrada
- · **B.** Tamaño del batch utilizado durante la inferencia
- ✅ **C.** Longitud de la secuencia de salida generada
- · **D.** Configuración del parámetro de inferencia
- · **E.** Complejidad de la arquitectura del modelo

### 12. ¿Cuál instancia de Amazon EC2 proporciona instancias de alto desempeño explícitamente optimizadas para entrenar modelos de machine learning, utilizando chips personalizados para deep learning rentable?

- ✅ **A.** Amazon EC2 Trn1 Instances
- · **B.** Amazon EC2 G5 Instances
- · **C.** Amazon EC2 P4 Instances
- · **D.** Amazon EC2 M6g Instances

### 13. Una empresa está entrenando un modelo de IA que procesa grandes volúmenes de datos en trabajos por lotes. La carga de trabajo es tolerante a fallos y puede soportar interrupciones. Para minimizar costos, la empresa quiere ejecutar estos trabajos durante horas de menor demanda cuando la capacidad de recursos en la nube es más baja.

¿Cuál es el modelo de precios de AWS más rentable para este escenario?

- · **A.** Savings Plan
- ✅ **B.** Spot Instance
- · **C.** On-Demand Instance
- · **D.** Reserved Capacity

---

[← Volver al índice](./README.md)
