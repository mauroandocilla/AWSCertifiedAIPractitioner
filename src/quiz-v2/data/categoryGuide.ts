export interface CategoryGuideEntry {
  id: string;
  title: string;
  summary: string;
  pattern: string;
  keywords: string[];
  questionIds: string[];
}

// Hand-curated category map over quiz-v2's 209-question bank (see
// src/quiz-v2/data/questions.json) -- built by reading every question and
// grouping by what AWS AIF-C01 concept it actually tests, so someone
// studying can recognize the pattern instead of memorizing 209 questions
// individually. Edit this file directly if a question is miscategorized or
// a new one needs slotting in -- there's no regeneration script.
export const categoryGuide: CategoryGuideEntry[] = [
  {
    id: 'fund-genai',
    title: 'Fundamentos de IA generativa: modelos, arquitecturas y embeddings',
    summary: 'Terminología base de GenAI: qué es un foundation model, los distintos tipos de modelo (LLM, difusión, multimodal, GAN, BERT/GPT), redes neuronales/transformers, y qué es un embedding. Preguntas de definición pura, sin caso de uso complejo de por medio.',
    pattern: 'Si la pregunta pide directamente "qué es X" o pide emparejar un tipo de modelo con su descripción sin mencionar un servicio de AWS específico, es esta categoría. Los distractores suelen mezclar "modelo de ML tradicional" con "modelo generativo": la clave es si la salida es contenido nuevo (texto/imagen/audio) o una predicción/clasificación sobre datos existentes. Cuando preguntan qué base de datos de AWS almacena o consulta embeddings, las opciones típicas son OpenSearch Service, Aurora/RDS PostgreSQL (pgvector), DocumentDB y Neptune ML -- todas son válidas, elegí la que ya usa la empresa en el escenario.',
    keywords: ['foundation model', 'representación numérica', 'tipo de modelo'],
    questionIds: ['15340', '14333', '14501', '15310', '14463', '15330', '14375', '14475', '14508', '14346', '14494', '15312', '14374', '14368', '14351', '14465', '14513', '14358', '14520', '14482', '14498', '14499', '14360', '14514', '14454', '14359', '14436'],
  },
  {
    id: 'ml-clasico',
    title: 'Aprendizaje supervisado, no supervisado y algoritmos clásicos',
    summary: 'Distinción supervisado (datos etiquetados) vs. no supervisado (sin etiquetas: clustering, reglas de asociación) vs. refuerzo (recompensa por acción), y qué algoritmo clásico (regresión, árboles de decisión, KNN, K-Means) resuelve cada tipo de problema.',
    pattern: '"Datos etiquetados" o "predecir una categoría/valor ya conocido" apunta a supervisado. "Agrupar sin categorías predefinidas" apunta a no supervisado/clustering. "El sistema interactúa con un entorno y aprende de recompensas" es reinforcement learning. Si la pregunta compara "reglas fijas programadas" contra "aprender patrones de datos", la respuesta casi siempre es que el enfoque de reglas fijas NO es machine learning.',
    keywords: ['datos etiquetados', 'sin etiquetas', 'agrupar / clustering'],
    questionIds: ['14485', '14510', '14460', '14447', '15329', '14388', '15332', '14425', '14427', '15290', '14344', '14456', '14391', '14258', '15323'],
  },
  {
    id: 'metricas',
    title: 'Métricas de evaluación de modelos',
    summary: 'Qué métrica usar según el tipo de tarea: ROUGE/BLEU/BERTScore para texto generado (resúmenes, traducciones, similitud semántica), F1/Accuracy/AUC/Confusion Matrix para clasificación, y MAE/MAPE para regresión y forecasting.',
    pattern: 'Traducción entre idiomas -> BLEU. Resumen de texto -> ROUGE (o ROUGE-N). Similitud semántica con una respuesta de referencia, no coincidencia exacta -> BERTScore. Clasificación binaria con probabilidades -> AUC. Clasificación multiclase, vista visual de aciertos/errores -> Confusion Matrix. Pronóstico numérico (ventas, ingresos) -> MAE/MAPE. "Balance entre precision y recall" -> F1 Score.',
    keywords: ['resumen / traducción', 'clasificación binaria o multiclase', 'pronóstico numérico'],
    questionIds: ['14412', '15295', '14458', '14457', '14439', '14502', '14496', '14418', '15303', '15308', '14519', '15335'],
  },
  {
    id: 'overfitting-datos',
    title: 'Overfitting, underfitting y calidad/preparación de datos',
    summary: 'Sesgo (bias) vs. varianza, sobreajuste vs. subajuste, y las etapas iniciales del ciclo de vida de un proyecto de ML (recolección de datos, EDA, limpieza, aumento de datos) que determinan la calidad de todo lo que sigue.',
    pattern: '"Funciona bien en entrenamiento pero mal en prueba/producción" es overfitting / alta varianza -> la corrección típica es subir el coeficiente de regularización. "Funciona mal en ambos conjuntos" es underfitting / alto sesgo -> hace falta un modelo más complejo. Si la pregunta describe la primera etapa de un proyecto de ML, antes de elegir un algoritmo, la respuesta suele ser "recolección de datos" o "EDA", no una herramienta específica de SageMaker.',
    keywords: ['bien en entrenamiento, mal en prueba', 'alto sesgo / alta varianza', 'primera etapa del proyecto'],
    questionIds: ['15318', '14435', '15315', '15331', '14474', '14430', '14442', '14450', '14428'],
  },
  {
    id: 'prompt-engineering',
    title: 'Prompt engineering y comportamiento del LLM',
    summary: 'Técnicas de prompting (zero-shot, few-shot, chain-of-thought, least-to-most, negative prompts) y cómo se corrigen con el prompt o los parámetros de inferencia problemas de comportamiento como alucinaciones, jailbreak e inyección de prompts.',
    pattern: 'Sin ejemplos en el prompt = zero-shot. Con ejemplos = few-shot. Dividir la tarea en pasos = chain-of-thought o least-to-most prompting. "Respuestas inventadas pero dichas con seguridad" es hallucination, y se combate bajando la temperature o agregando contexto real (RAG), nunca reentrenando el modelo desde cero. "Intentar evadir las reglas de seguridad del modelo" es jailbreak / adversarial prompting / prompt injection.',
    keywords: ['sin ejemplos / con ejemplos', 'alucinación', 'evadir reglas de seguridad'],
    questionIds: ['15298', '15327', '15311', '14515', '15316', '15333', '14455', '14446', '14493', '14517', '15297', '15299', '14509'],
  },
  {
    id: 'fine-tuning',
    title: 'Fine-tuning y personalización de modelos',
    summary: 'Cuándo y cómo personalizar un foundation model con datos propios: fine-tuning por instrucciones, adaptación de dominio, pre-entrenamiento continuo, RLHF (reward model), y el hiperparámetro epochCount del entrenamiento.',
    pattern: 'Si la pregunta menciona "entrenar con datos propios etiquetados" para adaptar terminología o estilo específico de una industria, es fine-tuning -- a diferencia de RAG, que no reentrena el modelo, solo le agrega contexto recuperado en el momento. "epochCount" es cuántas veces el modelo recorre el dataset completo de entrenamiento.',
    keywords: ['datos etiquetados propios', 'adaptar terminología', 'reentrenar el modelo'],
    questionIds: ['14497', '15300', '14443', '14392', '14441', '14452', '14503', '15345'],
  },
  {
    id: 'rag',
    title: 'RAG y actualización de conocimiento',
    summary: 'Cuándo usar Retrieval Augmented Generation en vez de fine-tuning: la información cambia con el tiempo, se necesita bajo costo y sin reentrenar, y las respuestas deben basarse en una fuente de datos propia y verificable.',
    pattern: 'Palabras como "evoluciona / cambia con el tiempo", "sin reentrenar", "bajo costo" o "información actualizada / en tiempo real" casi siempre apuntan a RAG, incluso si la pregunta también menciona prompt engineering como parte de la solución final.',
    keywords: ['evoluciona / cambia con el tiempo', 'sin reentrenar', 'bajo costo'],
    questionIds: ['14453', '15291', '15292'],
  },
  {
    id: 'bedrock',
    title: 'Amazon Bedrock: uso, throughput, Agents y Guardrails',
    summary: 'El flujo de trabajo específico de Bedrock: elegir un foundation model, usar el Playground/PartyRock para experimentar, los modos de throughput (On-Demand vs. Provisioned), Agents for Bedrock para ejecutar acciones, y los distintos tipos de Guardrails (content filters, denied topics, word filters, contextual grounding check).',
    pattern: 'Uso esporádico o impredecible -> On-Demand. Uso constante que necesita capacidad garantizada -> Provisioned Throughput. "El modelo ejecuta acciones o recupera datos por sí mismo" -> Agents for Bedrock. Cuando la pregunta lista varios tipos de filtro dentro de Guardrails, están pidiendo distinguir el tipo específico, no solo reconocer que "hay que usar Guardrails".',
    keywords: ['Bedrock', 'On-Demand vs. Provisioned', 'Guardrails'],
    questionIds: ['14419', '15325', '15026', '14470', '15339', '14373', '14461', '15341', '15326', '14345', '15307', '14489', '15343', '15306', '14459', '15221', '15294'],
  },
  {
    id: 'sagemaker',
    title: 'Ecosistema de herramientas de SageMaker',
    summary: 'Qué herramienta dentro de SageMaker resuelve cada tarea: Canvas (sin código), JumpStart (modelos preconfigurados), Data Wrangler (limpieza de datos), Ground Truth (etiquetado), Clarify (sesgo/explicabilidad), Model Monitor (monitoreo en producción), Model Registry (versionado) y Model Cards (documentación).',
    pattern: 'Sin equipo de ciencia de datos / interfaz visual -> Canvas. Modelos ya entrenados listos para usar -> JumpStart. Preparar o limpiar datos -> Data Wrangler. Etiquetar datos con intervención humana -> Ground Truth. Detectar o explicar sesgo -> Clarify. Vigilar un modelo ya desplegado en producción -> Model Monitor. Documentar el modelo para una auditoría -> Model Cards.',
    keywords: ['sin código', 'preconfigurado / JumpStart', 'sesgo / explicabilidad'],
    questionIds: ['14479', '14390', '14511', '14393', '14429', '14492', '14394', '14271', '14411', '14401', '15321', '14389', '15145', '14467', '14410', '14437', '14409', '14301', '14491', '15289', '14273', '15342', '14486', '14500', '14349', '15210', '14516'],
  },
  {
    id: 'inferencia-costo',
    title: 'Cómputo, inferencia, latencia y costo',
    summary: 'Elegir el tipo de endpoint de inferencia (real-time, serverless, batch, asíncrono) o el tipo de instancia de cómputo (Spot, Trainium) según el patrón de tráfico y el presupuesto, y qué factores mueven la latencia y el costo de un LLM.',
    pattern: 'Predicciones inmediatas y constantes -> Real-time Inference. Tráfico variable o esporádico -> Serverless Inference. Grandes volúmenes sin necesidad de respuesta inmediata -> Batch Transform. "Minimizar costo, tolera interrupciones" -> Spot Instance. Instancias Trn1 (Trainium) son para entrenamiento económico. El costo y la latencia de inferencia en LLMs casi siempre se miden en tokens procesados (entrada + salida), no en tiempo de cómputo.',
    keywords: ['tráfico variable / constante', 'sin conexión / por lotes', 'tokens procesados'],
    questionIds: ['15317', '14438', '14395', '14440', '14444', '14487', '14464', '14481', '14506', '15320', '14478', '14507', '15293'],
  },
  {
    id: 'servicios-ia-caso-uso',
    title: 'Servicios de IA de AWS por caso de uso',
    summary: 'Qué servicio administrado de AWS resuelve cada tarea de IA puntual: Textract (extraer texto de documentos), Comprehend (NLP/sentimiento), Rekognition (imagen/video), Polly (texto a voz), Transcribe (voz a texto), Translate, Personalize (recomendaciones), Lex (chatbots), Kendra (búsqueda empresarial).',
    pattern: 'Cada pregunta describe un caso de uso concreto y pide "el servicio más adecuado con el mínimo esfuerzo de administración". La trampa es que varios servicios podrían "funcionar" pero solo uno es el propósito específico del servicio -- por ejemplo, extraer texto de un PDF es Textract, no Comprehend; medir el sentimiento de un texto es Comprehend, no Textract.',
    keywords: ['extraer texto de documentos', 'voz <-> texto', 'recomendaciones / búsqueda'],
    questionIds: ['14512', '15336', '15301', '14476', '14372', '14318', '14495', '15305', '14504', '15338', '14480', '15322', '14404', '14413', '14473', '14340', '14488', '14431', '15167', '14505', '14490', '15168', '14311', '14466', '14448', '15302'],
  },
  {
    id: 'seguridad-gobernanza',
    title: 'Seguridad y gobernanza de datos e infraestructura',
    summary: 'Controles de seguridad para cargas de trabajo de IA en AWS: IAM (permisos), KMS (cifrado), VPC/PrivateLink (tráfico privado), CloudTrail (auditoría de llamadas a la API), Macie (detección de datos sensibles), y los reportes de cumplimiento (AWS Artifact, Audit Manager, Config).',
    pattern: '"Quién puede acceder a qué recurso" -> IAM. "Cifrar los datos" -> KMS. "El tráfico no debe salir de la red de AWS" -> VPC Gateway Endpoint / PrivateLink. "Auditar qué llamadas a la API se hicieron" -> CloudTrail. "Detectar PII automáticamente en un bucket de S3" -> Macie. "Reportes oficiales de cumplimiento normativo" -> AWS Artifact.',
    keywords: ['no debe salir de la red', 'auditar llamadas a la API', 'datos sensibles / PII'],
    questionIds: ['15319', '14471', '14518', '14484', '14469', '15344', '14426', '14302', '14407', '15334', '15324', '15288', '15337', '14387', '14483', '14369', '14317', '15027', '14371', '15296', '14451', '14432', '15304', '14477'],
  },
  {
    id: 'ia-responsable',
    title: 'IA responsable, ética y sesgo',
    summary: 'Los principios de IA responsable de AWS (equidad, transparencia, explicabilidad, privacidad, seguridad, robustez, gobernanza) y cómo se manifiestan los problemas de sesgo, junto con otros riesgos de la IA generativa: toxicidad, alucinación y propiedad intelectual.',
    pattern: 'Cada principio tiene casi una palabra clave uno a uno: "por qué el modelo tomó esa decisión" -> Explicabilidad. "compartir abiertamente cómo funciona el sistema" -> Transparencia. "resultados justos entre distintos grupos" -> Equidad. "no debe causar daño ni efectos no deseados" -> Seguridad. "revisión humana antes de publicar una respuesta" -> Human-in-the-loop.',
    keywords: ['por qué decidió eso', 'justo entre grupos', 'revisión humana'],
    questionIds: ['14434', '14337', '14472', '14350', '14348', '15237', '14357', '14449', '14445', '15309', '14468', '14462', '14386', '14417', '14370'],
  },
];
