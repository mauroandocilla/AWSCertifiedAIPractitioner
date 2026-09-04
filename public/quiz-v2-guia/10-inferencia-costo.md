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

**Por qué:** Al enfocarse en la cantidad de tokens procesados, las empresas pueden controlar mejor los costos de inferencia en sistemas de IA generativa que usan Amazon Bedrock.

**Por qué no las demás:**
- **B.** El tamaño de los datos de entrenamiento afecta principalmente la fase de entrenamiento del modelo y la calidad general.
- **C.** El fine-tuning típicamente afecta los costos de entrenamiento en lugar de los costos de inferencia.
- **D.** El tamaño de batch impacta principalmente la eficiencia del entrenamiento, específicamente al determinar cuántos ejemplos se procesan simultáneamente durante el entrenamiento.

### 2. Una empresa minorista debe procesar varios terabytes de datos históricos de ventas para pronosticar tendencias estacionales. No se requiere acceso inmediato a las predicciones.

¿Cuál opción de inferencia de Amazon SageMaker se ajusta mejor a estos requisitos?

- · **A.** Elastic Inference
- · **B.** Serverless Inference
- ✅ **C.** Batch Transform Inference
- · **D.** Model Parallelism and Large Model Inference

**Por qué:** Batch Transform Inference es una opción ideal para este caso de uso, ya que permite procesar grandes conjuntos de datos de forma asincrónica y rentable.

**Por qué no las demás:**
- **A.** Acelera con GPU cargas de inferencia en tiempo real, pero no está pensada para lotes de datos históricos.
- **B.** Sirve para tráfico intermitente en tiempo real, no para procesar grandes volúmenes por lotes.
- **D.** Está diseñada principalmente para entrenar e inferencia en modelos muy grandes que no caben en la memoria de una sola GPU.

### 3. Selecciona las opciones correctas de inferencia de Amazon SageMaker para cada caso. Cada opción de inferencia puede seleccionarse una o más veces. (Selecciona TRES.)

| Elemento | Respuesta correcta | Por qué |
|---|---|---|
| Usar para cargas de trabajo de baja latencia con patrones de tráfico predecibles que necesitan características de latencia consistentes y disponibilidad continua. | **Real-time Inference** | Real-time Inference mantiene un endpoint siempre activo para latencia baja y constante |
| Ideal para cargas de trabajo síncronas con patrones de tráfico variable que pueden tolerar variaciones de latencia. | **Serverless Inference** | Serverless Inference escala automáticamente y tolera variabilidad de tráfico y latencia |
| Elige para procesar grandes conjuntos de datos sin conexión sin necesidad de un endpoint persistente. | **Batch Inference** | Batch Inference procesa grandes volúmenes sin necesitar un endpoint activo permanentemente |

_Distractor: Asynchronous Inference no encaja: se usa cuando la latencia es poco crítica y ayuda a bajar costos escalando a cero, no cuando se necesita un patrón síncrono o continuo._

### 4. Un practicante de IA evalúa las implicaciones de costos de usar Amazon Bedrock para realizar inferencias con un LLM. El practicante debe determinar el factor de costo principal para las operaciones de inferencia.

¿Cuál de los siguientes factores influye directamente en el costo de la inferencia al usar Amazon Bedrock?

- · **A.** Tamaño del batch utilizado durante el entrenamiento
- · **B.** Número de épocas de entrenamiento completadas
- · **C.** Complejidad de la arquitectura del modelo
- ✅ **D.** Número de tokens procesados durante la inferencia

**Por qué:** El pricing de Bedrock se basa en la cantidad de tokens procesados: más tokens significan más cómputo y más costo.

**Por qué no las demás:**
- **A.** Es un parámetro de entrenamiento; no influye en el costo de inferencia.
- **B.** Solo afecta el proceso de entrenamiento, no la inferencia.
- **C.** Influye en el desempeño, pero no impulsa el costo tan directamente como el volumen de tokens.

### 5. Un especialista en IA utiliza Amazon Bedrock para tareas diarias de procesamiento de lenguaje natural (NLP), aprovechando few-shot prompting con 20 ejemplos en el prompt actual. El especialista quiere reducir los costos mensuales.

¿Cuál acción reducirá efectivamente los costos mensuales?

- · **A.** Disminuir el tamaño del lote para procesar prompts.
- ✅ **B.** Reducir la cantidad de tokens utilizados.
- · **C.** Usar Provisioned Throughput.
- · **D.** Agregar más ejemplos para aumentar el uso de tokens.

**Por qué:** Reducir la cantidad de tokens utilizados en los prompts y respuestas puede ayudar a bajar costos ya que impacta directamente la facturación, que frecuentemente escala con el uso de tokens.

**Por qué no las demás:**
- **A.** Esto podría no llevar a ahorros significativos y podría aumentar costos por prompt si resulta en más solicitudes.
- **C.** Esto podría resultar en costos más altos debido a niveles de rendimiento garantizados.
- **D.** Aumentar la cantidad de ejemplos directamente incrementa la cantidad de tokens, resultando en costos más altos en lugar de reducirlos.

### 6. Una organización de salud ha creado un modelo de ML para clasificación de imágenes en imágenes médicas. La organización planea implementar el modelo en producción para integrarlo en su sistema existente. El modelo se ha entrenado eficientemente usando AWS Trainium para optimizar el desempeño.

La organización requiere una solución que genere predicciones sin necesidad de gestionar ninguna infraestructura subyacente.

¿Cuál es la solución que mejor cumple estos requisitos?

- ✅ **A.** Desplegar el modelo usando Amazon SageMaker Serverless Inference para obtener predicciones sin esfuerzo.
- · **B.** Desplegar AWS Batch para ejecutar el modelo y gestionar predicciones a escala.
- · **C.** Implementar el servicio Amazon SageMaker Training para desplegar el modelo.
- · **D.** Utilizar AWS Lambda combinado con Elastic Load Balancing para ejecutar y gestionar el modelo.

**Por qué:** Serverless Inference proporciona una solución eficiente y rentable.

**Por qué no las demás:**
- **B.** Esta opción está diseñada típicamente para trabajos de procesamiento por lotes.
- **C.** Está diseñado simplemente para entrenar modelos, no para desplegarlos en inference en tiempo real.
- **D.** Está diseñada principalmente para tareas de corta duración y no está optimizada para inference de modelos de machine learning a escala.

### 7. Una empresa financiera está optimizando su sistema de detección de fraude impulsado por un modelo de IA para reducir los retrasos en el procesamiento de transacciones. La empresa debe medir la eficiencia de runtime del sistema para analizar y aprobar transacciones.

¿Cuál es la métrica más adecuada para este propósito?

- · **A.** Duración del entrenamiento por epoch
- · **B.** Precisión del modelo
- · **C.** Tiempo de entrenamiento del modelo
- ✅ **D.** Tiempo promedio de respuesta

**Por qué:** El tiempo de respuesta se puede medir y monitorear activamente, lo que permite a las organizaciones hacer ajustes basados en datos para mejorar la eficiencia del sistema.

**Por qué no las demás:**
- **A.** Mide principalmente el tiempo necesario para completar un ciclo de entrenamiento (epoch) durante el proceso de desarrollo del modelo.
- **B.** La precisión mide qué tan bien el modelo de IA realiza predicciones, asegurando una detección correcta de fraude.
- **C.** Esta métrica solo se refiere al tiempo necesario para entrenar el modelo de IA, que ocurre durante la fase de desarrollo.

### 8. ¿Qué métrica evalúa la capacidad de respuesta de un modelo de machine learning en aplicaciones en tiempo real?

- · **A.** Puntuación de satisfacción del cliente (CSAT)
- · **B.** Utilización de memoria durante la inferencia
- ✅ **C.** Tiempo promedio de respuesta
- · **D.** Precisión del modelo

**Por qué:** El tiempo promedio de respuesta es la respuesta correcta, ya que mide la velocidad a la que un modelo de IA puede procesar una solicitud y devolver un resultado durante la implementación.

**Por qué no las demás:**
- **A.** Solo mide la satisfacción del usuario después de interactuar con un servicio o producto.
- **B.** Simplemente registra cuánta memoria utiliza un modelo al hacer predicciones.
- **D.** Típicamente evalúa qué tan bien el modelo realiza predicciones en comparación con los resultados reales, no qué tan rápido produce las predicciones.

### 9. Un especialista en IA está desarrollando un modelo de IA entrenado e implementado en Amazon SageMaker. El especialista debe elegir una opción de inferencia de SageMaker que proporcione predicciones inmediatas y de baja latencia para un sistema de recomendaciones y respuestas en tiempo real a consultas de usuarios.

¿Cuál de las siguientes opciones es la más adecuada para los requisitos dados?

- ✅ **A.** Real-time inference
- · **B.** Model parallelism and large model inference
- · **C.** Asynchronous inference
- · **D.** Serverless inference

**Por qué:** Real-time inference entrega predicciones de baja latencia de forma inmediata, sin colas ni tiempos de escalado.

**Por qué no las demás:**
- **B.** Resuelve modelos que no caben en una GPU, pero no aborda la necesidad de baja latencia en tiempo real.
- **C.** Encola solicitudes para procesarlas después, lo opuesto a una respuesta inmediata.
- **D.** Escala automáticamente ante tráfico impredecible, pero puede añadir latencia al escalar recursos.

### 10. Una empresa de salud ha desarrollado un modelo de machine learning para analizar imágenes médicas y predecir posibles enfermedades. El objetivo es desplegar el modelo para analizar imágenes en tiempo real sin necesidad de gestionar servidores ni infraestructura.

¿Cuál es la solución que mejor cumple con este requisito?

- · **A.** Desplegar el modelo de ML usando funciones de AWS Lambda para predicciones en tiempo real.
- ✅ **B.** Usar un endpoint de Amazon SageMaker AI para desplegar el modelo.
- · **C.** Lanzar el modelo de ML dentro de un clúster de Kubernetes gestionado por Amazon EKS para servir predicciones en tiempo real.
- · **D.** Usar AWS Batch para ejecutar trabajos de inferencia en las imágenes médicas entrantes.

**Por qué:** Un endpoint de SageMaker AI gestiona servidores e infraestructura de forma transparente, con auto-escalado y baja latencia.

**Por qué no las demás:**
- **A.** Lambda tiene límites de tiempo de ejecución y memoria que no soportan bien inferencia continua de alto rendimiento.
- **C.** Es viable, pero exige aprovisionar y administrar el clúster de EKS tú mismo.
- **D.** AWS Batch procesa por lotes de forma asíncrona, no sirve para inferencia en tiempo real.

### 11. ¿Cuáles son los factores que pueden influir directamente en la latencia de la inferencia de un modelo de machine learning? (Selecciona DOS.)

- ✅ **A.** Longitud de la secuencia de datos de entrada
- · **B.** Tamaño del batch utilizado durante la inferencia
- ✅ **C.** Longitud de la secuencia de salida generada
- · **D.** Configuración del parámetro de inferencia
- · **E.** Complejidad de la arquitectura del modelo

**Por qué:** **A. Longitud de la secuencia de datos de entrada** -- La latencia de inferencia puede verse significativamente afectada por la longitud de los datos de entrada y por la longitud de la salida que se debe; **C. Longitud de la secuencia de salida generada** -- Además, si la salida necesita ser detallada o extensa, tarda más tiempo en que el modelo genere esa respuesta.

**Por qué no las demás:**
- **B.** El tamaño del batch es simplemente más relevante para cuántas entradas se procesan en conjunto.
- **D.** Parámetros de inferencia como Top K, Top P y temperature solo influyen en el estilo y la diversidad de las respuestas del modelo.
- **E.** Aunque una arquitectura de modelo más compleja puede aumentar el tiempo de entrenamiento, no impacta directamente en la latencia de inferencia.

### 12. ¿Cuál instancia de Amazon EC2 proporciona instancias de alto desempeño explícitamente optimizadas para entrenar modelos de machine learning, utilizando chips personalizados para deep learning rentable?

- ✅ **A.** Amazon EC2 Trn1 Instances
- · **B.** Amazon EC2 G5 Instances
- · **C.** Amazon EC2 P4 Instances
- · **D.** Amazon EC2 M6g Instances

**Por qué:** Las instancias Trn1 están disponibles en múltiples tamaños para adaptarse a diversos workloads de entrenamiento e integración con Amazon SageMaker para simplificar el desarrollo e implementación de ML.

**Por qué no las demás:**
- **B.** Está diseñada para aplicaciones que requieren muchos gráficos como renderizado de video, videojuegos y tareas de AI inference.
- **C.** Usa GPUs NVIDIA A100 de alto desempeño, pero más caras que el chip Trainium de las Trn1.
- **D.** Son simplemente instancias de propósito general que utilizan procesadores AWS Graviton2.

### 13. Una empresa está entrenando un modelo de IA que procesa grandes volúmenes de datos en trabajos por lotes. La carga de trabajo es tolerante a fallos y puede soportar interrupciones. Para minimizar costos, la empresa quiere ejecutar estos trabajos durante horas de menor demanda cuando la capacidad de recursos en la nube es más baja.

¿Cuál es el modelo de precios de AWS más rentable para este escenario?

- · **A.** Savings Plan
- ✅ **B.** Spot Instance
- · **C.** On-Demand Instance
- · **D.** Reserved Capacity

**Por qué:** Para empresas que entrenan modelos de IA que no requieren disponibilidad continua, Spot Instances son el modelo de precios más rentable, ofreciendo un equilibrio entre flexibilidad, escalabilidad y ahorros.

**Por qué no las demás:**
- **A.** Este modelo de precios ofrece ahorros en una variedad de servicios de cómputo pero funciona bien solo cuando el uso de cómputo es consistente.
- **C.** Si bien ofrece máxima flexibilidad, simplemente pagas por el cómputo conforme lo usas sin compromiso a largo plazo.
- **D.** Generalmente se usa para cargas de trabajo predecibles a largo plazo que requieren recursos de cómputo continuo.

---

[← Volver al índice](./README.md)
