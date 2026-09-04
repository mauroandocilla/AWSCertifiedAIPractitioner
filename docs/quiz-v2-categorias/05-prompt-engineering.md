# Prompt engineering y comportamiento del LLM

_13 preguntas · Quiz v2 (TutorialsDojo) · AWS Certified AI Practitioner (AIF-C01)_

## Concepto clave

Técnicas de prompting (zero-shot, few-shot, chain-of-thought, least-to-most, negative prompts) y cómo se corrigen con el prompt o los parámetros de inferencia problemas de comportamiento como alucinaciones, jailbreak e inyección de prompts.

## Truco para reconocerlas

Sin ejemplos en el prompt = zero-shot. Con ejemplos = few-shot. Dividir la tarea en pasos = chain-of-thought o least-to-most prompting. "Respuestas inventadas pero dichas con seguridad" es hallucination, y se combate bajando la temperature o agregando contexto real (RAG), nunca reentrenando el modelo desde cero. "Intentar evadir las reglas de seguridad del modelo" es jailbreak / adversarial prompting / prompt injection.

## Palabras clave

`sin ejemplos / con ejemplos` · `alucinación` · `evadir reglas de seguridad`

## Preguntas

### 1. Una empresa de retail quiere integrar análisis de sentimiento en su sistema de feedback de clientes usando un modelo de lenguaje grande (LLM) en Amazon Bedrock. La empresa busca analizar el tono emocional de las reseñas de clientes almacenadas en Amazon S3 y generar respuestas consistentes para prompts idénticos. Para optimizar el análisis y mejorar los resultados, la empresa ajustará parámetros de inferencia específicos del LLM.

¿Qué modificación en el parámetro de inferencia debe hacer la empresa para asegurar que el LLM genere respuestas uniformes para prompts idénticos?

- · **A.** Aumentar el parámetro Top-K
- ✅ **B.** Reducir el valor de temperature
- · **C.** Aumentar el valor de temperature
- · **D.** Disminuir el parámetro Top-P

### 2. Un científico de datos necesita que el modelo desglouse un problema complejo en tareas más pequeñas y las resuelva secuencialmente.

¿Cuál técnica de prompt engineering logra esto?

- ✅ **A.** Least-to-most prompting
- · **B.** Generated knowledge prompting
- · **C.** Directional-stimulus prompting
- · **D.** Complexity-based prompting

### 3. Una empresa ha observado que su foundation model (FM) está generando imágenes irrelevantes en respuesta a sus prompts de entrada.

La empresa busca refinar sus estrategias de prompting para reducir la ocurrencia de estos outputs no relacionados. Además, la empresa también está considerando usar Amazon Rekognition para análisis de imágenes.

¿Cuál solución ayudará a cumplir con estos requisitos?

- · **A.** Aplicar prompts de outpainting.
- ✅ **B.** Utilizar negative prompts.
- · **C.** Aplicar positive prompts.
- · **D.** Emplear mask prompts.

### 4. Una empresa está desarrollando un modelo de lenguaje para ayudar con diversas tareas de generación de texto. La empresa quiere utilizar diferentes técnicas de prompt engineering para optimizar el rendimiento del modelo en diferentes tipos de prompts.

Asociá cada técnica de prompt engineering con la descripción apropiada de su aplicación de las opciones proporcionadas. Cada técnica puede utilizarse una vez, más de una vez o no utilizarse en absoluto. (Seleccioná TRES)

| Elemento | Respuesta correcta |
|---|---|
| Usá un prompt que incluya varios ejemplos de la tarea para guiar al modelo en la producción de respuestas precisas. | **Few-shot prompting** |
| Usá un prompt que divida una tarea compleja en pasos lógicos más pequeños para que el modelo siga. | **Chain-of-thought prompting** |
| Usá un prompt donde el modelo realice una tarea basándose únicamente en su conocimiento general, sin ejemplos proporcionados. | **Zero-shot prompting** |

### 5. Una startup de tecnología minorista está usando un flujo de Retrieval Augmented Generation (RAG) con Amazon Bedrock y Stable Diffusion para generar visuales personalizados de productos a partir de prompts de texto. A pesar de su configuración, los visuales suelen verse genéricos y les faltan atributos de producto precisos.

La startup necesita que la IA genere imágenes más específicas y detalladas.

¿Cuál es la mejora que mejor logra esto?

- · **A.** Aplicar la técnica MASK_IMAGE_BLACK durante la generación de imágenes.
- · **B.** Aumentar la cantidad de training epochs para mejorar el desempeño del modelo.
- · **C.** Modificar la arquitectura del modelo para incluir más capas ocultas.
- ✅ **D.** Establecer un valor más alto de classifier-free guidance (CFG) para refinar los detalles de la imagen.

### 6. Un equipo de investigación está realizando red teaming en un modelo de lenguaje grande (LLM) intentando eludir sus características de seguridad para activar acciones no previstas, como exponer información de identificación personal (PII).

¿Qué método de seguridad está empleando el equipo de investigación?

- · **A.** Fuzzing de la salida del modelo para activar comportamiento no previsto
- · **B.** Ataques de ingeniería social
- ✅ **C.** Jailbreak
- · **D.** Pruebas de validación de entrada

### 7. Un desarrollador de IA está trabajando en un sistema de tutoría impulsado por IA que utiliza un modelo fundacional para ayudar a los estudiantes a comprender conceptos científicos complejos. El sistema tiene como objetivo proporcionar respuestas correctas y explicar los principios subyacentes de manera clara. El desarrollador está explorando técnicas para mejorar el desempeño del modelo.

¿Cuál técnica de prompt engineering mejorará MAYORMENTE la capacidad del modelo fundacional para proporcionar explicaciones paso a paso de conceptos científicos complejos?

- ✅ **A.** Chain-of-thought
- · **B.** Tree-of-thought
- · **C.** Directional-stimulus
- · **D.** Complexity-based

### 8. Un especialista en IA está desarrollando un chatbot usando un FM (Foundational Model) para proporcionar soporte técnico sin intervención humana. Las respuestas del chatbot deben adherirse a las directrices de tono y estilo deseadas por la empresa y ser rentables. ¿Cuál es el enfoque que cumplirá MEJOR con estos requisitos?

- · **A.** Aumentar la cantidad de tokens
- · **B.** Disminuir el tamaño del batch
- · **C.** Aplicar RLHF
- ✅ **D.** Implementar técnicas de prompt engineering

### 9. Un equipo está trabajando con un Large Language Model (LLM) para generar respuestas a consultas de soporte al cliente. Sin embargo, se observa que el modelo ocasionalmente proporciona respuestas que son factualmente incorrectas o sin sentido.

¿Qué problema está experimentando el modelo?

- · **A.** Model drift
- ✅ **B.** Hallucination
- · **C.** Underfitting
- · **D.** Data augmentation

### 10. Una empresa tecnológica necesita que su LLM (Large Language Model) genere respuestas concisas en un idioma específico para un asistente virtual.

¿Cuál es la mejor manera de asegurar que el LLM produzca respuestas concisas en el idioma deseado?

- · **A.** Optar por un modelo con más parámetros.
- ✅ **B.** Modificar el prompt de instrucción.
- · **C.** Ajustar el parámetro frequency penalty.
- · **D.** Aumentar el parámetro top-p (nucleus sampling).

### 11. Un equipo de investigación está utilizando un modelo de lenguaje grande (LLM) para una aplicación de atención al cliente. Sin embargo, el modelo genera frecuentemente alucinaciones, proporcionando respuestas incorrectas o fabricadas.

¿Cuál de las siguientes acciones ayudaría a reducir las alucinaciones en la salida del modelo?

- · **A.** Usar técnicas de data augmentation para agregar datos de entrada más diversos durante el entrenamiento.
- · **B.** Realizar fine-tuning del modelo con datos específicos del dominio para mejorar la precisión.
- · **C.** Implementar Agents for Amazon Bedrock para supervisar y corregir las salidas de inferencia.
- ✅ **D.** Reducir el parámetro de temperatura de inferencia para producir salidas más enfocadas y determinísticas.

### 12. Una empresa utiliza Amazon Lex y Amazon Bedrock para desplegar un chatbot de atención al cliente que maneja consultas sensibles como acceso a cuentas y pagos. Para prevenir ataques de inyección de prompts, el equipo necesita una técnica de prompting segura que pueda detectar y mitigar entradas maliciosas.

¿Cuál técnica de prompting protege mejor al chatbot de la inyección de prompts mientras asegura respuestas precisas?

- · **A.** Zero-shot prompting
- · **B.** Prompt chaining
- · **C.** Maieutic prompting
- ✅ **D.** Adversarial prompting

### 13. Un especialista en ML ha creado un foundation model para un chatbot de atención al cliente. Las respuestas del bot son precisas pero no se alinean con el formato de la empresa. El especialista quiere ajustar las respuestas para que coincidan con la marca de la empresa sin incurrir en costos elevados.

¿Cuál será el método que cumplirá estos requisitos de la manera más rentable?

- · **A.** Feature engineering
- · **B.** Data preprocessing
- · **C.** Hyperparameter tuning
- ✅ **D.** Prompt engineering

---

[← Volver al índice](./README.md)
