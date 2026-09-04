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

**Por qué:** Reducir la temperature ayuda a asegurar que el modelo genere salidas similares para la misma entrada en diferentes sesiones.

**Por qué no las demás:**
- **A.** Aumentar el parámetro top-k permite que el modelo muestree de un conjunto más grande de tokens siguientes potenciales.
- **C.** Aumentar la temperature hace que las respuestas del modelo sean más aleatorias e impredecibles.
- **D.** Disminuir el parámetro top-p limitaría la diversidad de la selección de tokens del modelo.

### 2. Un científico de datos necesita que el modelo desglouse un problema complejo en tareas más pequeñas y las resuelva secuencialmente.

¿Cuál técnica de prompt engineering logra esto?

- ✅ **A.** Least-to-most prompting
- · **B.** Generated knowledge prompting
- · **C.** Directional-stimulus prompting
- · **D.** Complexity-based prompting

**Por qué:** En el contexto del escenario presentado, donde un científico de datos necesita que el modelo desglouse un problema complejo en tareas más pequeñas y las resuelva secuencialmente.

**Por qué no las demás:**
- **B.** Esta opción se enfoca principalmente en generar prompts que guíen al modelo para producir conocimiento o información específica.
- **C.** Simplemente utiliza señales o estímulos específicos para guiar las respuestas del modelo.
- **D.** Esta técnica típicamente implica seleccionar ejemplos basándose en su complejidad de razonamiento para mejorar el desempeño en tareas de razonamiento de múltiples pasos.

### 3. Una empresa ha observado que su foundation model (FM) está generando imágenes irrelevantes en respuesta a sus prompts de entrada.

La empresa busca refinar sus estrategias de prompting para reducir la ocurrencia de estos outputs no relacionados. Además, la empresa también está considerando usar Amazon Rekognition para análisis de imágenes.

¿Cuál solución ayudará a cumplir con estos requisitos?

- · **A.** Aplicar prompts de outpainting.
- ✅ **B.** Utilizar negative prompts.
- · **C.** Aplicar positive prompts.
- · **D.** Emplear mask prompts.

**Por qué:** Los negative prompts son una solución directa y efectiva para refinar el output de un modelo especificando qué no debe incluirse en las imágenes generadas.

**Por qué no las demás:**
- **A.** Es una técnica típicamente utilizada en generación de imágenes para expandir o extender una imagen existente más allá de sus bordes originales.
- **C.** Estos prompts simplemente se enfocan en especificar qué debe incluirse en la imagen generada.
- **D.** Se utiliza principalmente para guiar al modelo en la modificación de partes específicas de una imagen.

### 4. Una empresa está desarrollando un modelo de lenguaje para ayudar con diversas tareas de generación de texto. La empresa quiere utilizar diferentes técnicas de prompt engineering para optimizar el rendimiento del modelo en diferentes tipos de prompts.

Asociá cada técnica de prompt engineering con la descripción apropiada de su aplicación de las opciones proporcionadas. Cada técnica puede utilizarse una vez, más de una vez o no utilizarse en absoluto. (Seleccioná TRES)

| Elemento | Respuesta correcta | Por qué |
|---|---|---|
| Usá un prompt que incluya varios ejemplos de la tarea para guiar al modelo en la producción de respuestas precisas. | **Few-shot prompting** | Dar ejemplos en el prompt para guiar al modelo es la definición de few-shot prompting |
| Usá un prompt que divida una tarea compleja en pasos lógicos más pequeños para que el modelo siga. | **Chain-of-thought prompting** | Dividir el razonamiento en pasos intermedios es la definición de chain-of-thought prompting |
| Usá un prompt donde el modelo realice una tarea basándose únicamente en su conocimiento general, sin ejemplos proporcionados. | **Zero-shot prompting** | Resolver la tarea sin ejemplos, solo con el conocimiento previo del modelo, es zero-shot prompting |

_Distractor: Self-refine prompting no encaja con ninguna descripción: es cuando el modelo critica y revisa iterativamente su propia respuesta, no dar ejemplos ni dividir en pasos._

### 5. Una startup de tecnología minorista está usando un flujo de Retrieval Augmented Generation (RAG) con Amazon Bedrock y Stable Diffusion para generar visuales personalizados de productos a partir de prompts de texto. A pesar de su configuración, los visuales suelen verse genéricos y les faltan atributos de producto precisos.

La startup necesita que la IA genere imágenes más específicas y detalladas.

¿Cuál es la mejora que mejor logra esto?

- · **A.** Aplicar la técnica MASK_IMAGE_BLACK durante la generación de imágenes.
- · **B.** Aumentar la cantidad de training epochs para mejorar el desempeño del modelo.
- · **C.** Modificar la arquitectura del modelo para incluir más capas ocultas.
- ✅ **D.** Establecer un valor más alto de classifier-free guidance (CFG) para refinar los detalles de la imagen.

**Por qué:** Un valor de cfgscale más alto significa que el modelo se adherirá estrictamente a la descripción proporcionada, resultando en imágenes más detalladas y específicas.

**Por qué no las demás:**
- **A.** Esta técnica se utiliza generalmente para enmascarar ciertas áreas de una imagen o enfocarse en regiones específicas.
- **B.** Aumentar la cantidad de training epochs típicamente mejora el aprendizaje general y el desempeño del modelo.
- **C.** Esta opción aumenta la capacidad general del modelo para el aprendizaje.

### 6. Un equipo de investigación está realizando red teaming en un modelo de lenguaje grande (LLM) intentando eludir sus características de seguridad para activar acciones no previstas, como exponer información de identificación personal (PII).

¿Qué método de seguridad está empleando el equipo de investigación?

- · **A.** Fuzzing de la salida del modelo para activar comportamiento no previsto
- · **B.** Ataques de ingeniería social
- ✅ **C.** Jailbreak
- · **D.** Pruebas de validación de entrada

**Por qué:** En estos ataques, un atacante crea una entrada (frecuentemente llamada jailbreak) para engañar a una aplicación LLM y hacer que ejecute acciones no previstas, como divulgar información de identificación personal (PII).

**Por qué no las demás:**
- **A.** Fuzzing generalmente implica enviar entradas aleatorias o malformadas a un sistema para descubrir fallos o comportamientos inesperados.
- **B.** La ingeniería social se dirige a usuarios humanos manipulándolos para que revelen información confidencial o realicen acciones inseguras.
- **D.** Este método verifica principalmente si las entradas se ajustan a formatos y reglas esperadas.

### 7. Un desarrollador de IA está trabajando en un sistema de tutoría impulsado por IA que utiliza un modelo fundacional para ayudar a los estudiantes a comprender conceptos científicos complejos. El sistema tiene como objetivo proporcionar respuestas correctas y explicar los principios subyacentes de manera clara. El desarrollador está explorando técnicas para mejorar el desempeño del modelo.

¿Cuál técnica de prompt engineering mejorará MAYORMENTE la capacidad del modelo fundacional para proporcionar explicaciones paso a paso de conceptos científicos complejos?

- ✅ **A.** Chain-of-thought
- · **B.** Tree-of-thought
- · **C.** Directional-stimulus
- · **D.** Complexity-based

**Por qué:** La principal ventaja del prompting de Chain-of-thought radica en su capacidad para producir explicaciones detalladas y secuenciales.

**Por qué no las demás:**
- **B.** Es una técnica que implica organizar la información en una estructura jerárquica, como un árbol de decisiones.
- **C.** Implica guiar las respuestas del modelo basándose en señales o direcciones específicas.
- **D.** Esta técnica se enfoca en adaptar el enfoque del modelo según la complejidad de la tarea o problema.

### 8. Un especialista en IA está desarrollando un chatbot usando un FM (Foundational Model) para proporcionar soporte técnico sin intervención humana. Las respuestas del chatbot deben adherirse a las directrices de tono y estilo deseadas por la empresa y ser rentables. ¿Cuál es el enfoque que cumplirá MEJOR con estos requisitos?

- · **A.** Aumentar la cantidad de tokens
- · **B.** Disminuir el tamaño del batch
- · **C.** Aplicar RLHF
- ✅ **D.** Implementar técnicas de prompt engineering

**Por qué:** El prompt engineering es un enfoque altamente efectivo para adaptar las respuestas del chatbot para que se adhieran a las directrices deseadas de tono y estilo.

**Por qué no las demás:**
- **A.** Aumentar la cantidad de tokens puede no abordar directamente los requisitos de adherencia a las directrices de tono y estilo o rentabilidad.
- **B.** Disminuir el tamaño del batch se realiza típicamente para mejorar el desempeño del modelo durante el entrenamiento o fine-tuning.
- **C.** Puede lograr el mismo objetivo, pero es computacionalmente costoso y menos rentable que prompt engineering.

### 9. Un equipo está trabajando con un Large Language Model (LLM) para generar respuestas a consultas de soporte al cliente. Sin embargo, se observa que el modelo ocasionalmente proporciona respuestas que son factualmente incorrectas o sin sentido.

¿Qué problema está experimentando el modelo?

- · **A.** Model drift
- ✅ **B.** Hallucination
- · **C.** Underfitting
- · **D.** Data augmentation

**Por qué:** Bedrock Guardrails con Contextual Grounding Check está diseñado específicamente para detectar y filtrar este tipo de respuestas inventadas.

**Por qué no las demás:**
- **A.** Implica desempeño consistentemente pobre por un modelo demasiado simple, no respuestas inventadas.
- **C.** Es la degradación del modelo con el tiempo por cambios en los datos, no genera respuestas sin sentido.
- **D.** Crea nuevos ejemplos de entrenamiento; no tiene relación con generar respuestas incorrectas.

### 10. Una empresa tecnológica necesita que su LLM (Large Language Model) genere respuestas concisas en un idioma específico para un asistente virtual.

¿Cuál es la mejor manera de asegurar que el LLM produzca respuestas concisas en el idioma deseado?

- · **A.** Optar por un modelo con más parámetros.
- ✅ **B.** Modificar el prompt de instrucción.
- · **C.** Ajustar el parámetro frequency penalty.
- · **D.** Aumentar el parámetro top-p (nucleus sampling).

**Por qué:** En este escenario, modificar el prompt de instrucción se alinea con el principio de prompt engineering al permitir un control directo sobre el resultado del LLM.

**Por qué no las demás:**
- **A.** Los modelos más grandes con más parámetros típicamente tienen una mayor capacidad para entender y generar texto, pero no producen inherentemente respuestas más concisas.
- **C.** Aumentar el frequency penalty puede desalentar al modelo de repetir las mismas palabras o frases demasiado a menudo.
- **D.** Este parámetro solo afecta la diversidad del texto generado al considerar la probabilidad acumulativa de los tokens principales.

### 11. Un equipo de investigación está utilizando un modelo de lenguaje grande (LLM) para una aplicación de atención al cliente. Sin embargo, el modelo genera frecuentemente alucinaciones, proporcionando respuestas incorrectas o fabricadas.

¿Cuál de las siguientes acciones ayudaría a reducir las alucinaciones en la salida del modelo?

- · **A.** Usar técnicas de data augmentation para agregar datos de entrada más diversos durante el entrenamiento.
- · **B.** Realizar fine-tuning del modelo con datos específicos del dominio para mejorar la precisión.
- · **C.** Implementar Agents for Amazon Bedrock para supervisar y corregir las salidas de inferencia.
- ✅ **D.** Reducir el parámetro de temperatura de inferencia para producir salidas más enfocadas y determinísticas.

**Por qué:** Un valor de temperatura más bajo (por ejemplo, entre 0.2 y 0.5) genera respuestas más determinísticas, reduciendo la probabilidad de que el modelo produzca respuestas creativas pero inexactas.

**Por qué no las demás:**
- **A.** Data augmentation principalmente aumenta la diversidad de los datos de entrenamiento, lo que puede ayudar a la generalización.
- **B.** Aunque el fine-tuning puede mejorar la relevancia del dominio, no previene directamente las alucinaciones.
- **C.** Aunque los agentes generalmente pueden usarse para gestionar salidas, no abordan directamente el problema de las alucinaciones.

### 12. Una empresa utiliza Amazon Lex y Amazon Bedrock para desplegar un chatbot de atención al cliente que maneja consultas sensibles como acceso a cuentas y pagos. Para prevenir ataques de inyección de prompts, el equipo necesita una técnica de prompting segura que pueda detectar y mitigar entradas maliciosas.

¿Cuál técnica de prompting protege mejor al chatbot de la inyección de prompts mientras asegura respuestas precisas?

- · **A.** Zero-shot prompting
- · **B.** Prompt chaining
- · **C.** Maieutic prompting
- ✅ **D.** Adversarial prompting

**Por qué:** En servicios de AWS como Amazon Bedrock, adversarial prompting juega un papel importante en la evaluación y fortalecimiento de aplicaciones basadas en LLM, como chatbots de atención al cliente.

**Por qué no las demás:**
- **A.** Solo proporciona al modelo una descripción de la tarea sin ejemplos, confiando en su comprensión general.
- **B.** Solo se enfoca en dividir tareas en prompts encadenados más pequeños para mejorar el razonamiento y la estructura.
- **C.** Es una técnica avanzada de razonamiento utilizada principalmente para validar la coherencia interna o veracidad de la respuesta de un LLM al cuestionarlo recursivamente.

### 13. Un especialista en ML ha creado un foundation model para un chatbot de atención al cliente. Las respuestas del bot son precisas pero no se alinean con el formato de la empresa. El especialista quiere ajustar las respuestas para que coincidan con la marca de la empresa sin incurrir en costos elevados.

¿Cuál será el método que cumplirá estos requisitos de la manera más rentable?

- · **A.** Feature engineering
- · **B.** Data preprocessing
- · **C.** Hyperparameter tuning
- ✅ **D.** Prompt engineering

**Por qué:** Sin embargo, prompt engineering sigue siendo la solución más económica e inmediata para ajustar los resultados del modelo.

**Por qué no las demás:**
- **A.** Esta opción trata sobre crear nuevas características de entrada o modificar las existentes para mejorar el desempeño del modelo.
- **B.** Se utiliza principalmente para preparar datos sin procesar para el entrenamiento del modelo limpiándolos.
- **C.** Implica ajustar los parámetros que controlan el proceso de aprendizaje del modelo, como la tasa de aprendizaje.

---

[← Volver al índice](./README.md)
