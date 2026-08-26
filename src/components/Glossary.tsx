export default function Glossary() {
  return (
    <>
      {/* Glossary */}
      <section className="glossary" id="glossary">
        <span className="eyebrow">Glosario a fondo, término por término</span>
        <h2 style={{marginTop: '0.4rem', fontSize: '1.5rem'}}>Explicaciones completas de cada bullet</h2>
        <p className="scope-note">Cada término está basado en páginas oficiales de AWS (docs.aws.amazon.com, aws.amazon.com/what-is, aws.amazon.com/compare) — ver fuentes al final de la página. Esta sección crece bullet por bullet a medida que la vamos armando.</p>

        <nav className="gloss-index" aria-label="Índice del glosario">
          <a href="#gloss-d1-t1-b1">D1 · 1.1 · B1 — términos básicos</a>
          <a href="#gloss-d1-t1-b2">D1 · 1.1 · B2 — IA vs ML vs GenAI vs DL vs agéntica</a>
          <a href="#gloss-d1-t1-b3">D1 · 1.1 · B3 — tipos de inferencia</a>
          <a href="#gloss-d1-t1-b4">D1 · 1.1 · B4 — tipos de datos</a>
          <a href="#gloss-d1-t1-b5">D1 · 1.1 · B5 — supervisado/no supervisado/refuerzo</a>
          <a href="#gloss-d1-t2-b1">D1 · 1.2 · B1 — dónde aporta valor la IA/ML</a>
          <a href="#gloss-d1-t2-b2">D1 · 1.2 · B2 — cuándo NO usar IA/ML</a>
          <a href="#gloss-d1-t2-b3">D1 · 1.2 · B3 — regresión, clasificación, clustering</a>
          <a href="#gloss-d1-t2-b4">D1 · 1.2 · B4 — ejemplos de aplicaciones reales</a>
          <a href="#gloss-d1-t2-b5">D1 · 1.2 · B5 — servicios de IA/ML de AWS</a>
          <a href="#gloss-d1-t2-b6">D1 · 1.2 · B6 — ML tradicional vs. FMs</a>
          <a href="#gloss-d1-t3-b1">D1 · 1.3 · B1 — componentes del pipeline</a>
          <a href="#gloss-d1-t3-b2">D1 · 1.3 · B2 — fuentes de los FMs</a>
          <a href="#gloss-d1-t3-b3">D1 · 1.3 · B3 — API administrada vs. auto-alojada</a>
          <a href="#gloss-d1-t3-b4">D1 · 1.3 · B4 — Bedrock, Q, Quick, Kiro, SageMaker</a>
          <a href="#gloss-d1-t3-b5">D1 · 1.3 · B5 — conceptos de MLOps</a>
          <a href="#gloss-d1-t3-b6">D1 · 1.3 · B6 — métricas de modelo y de negocio</a>
          <a href="#gloss-d2-t1-b1">D2 · 2.1 · B1 — tokens, chunking, embeddings, vectores...</a>
          <a href="#gloss-d2-t1-b2">D2 · 2.1 · B2 — casos de uso de GenAI</a>
          <a href="#gloss-d2-t1-b3">D2 · 2.1 · B3 — ciclo de vida de un FM</a>
          <a href="#gloss-d2-t1-b4">D2 · 2.1 · B4 — precios por token</a>
          <a href="#gloss-d2-t1-b5">D2 · 2.1 · B5 — ingeniería de contexto</a>
          <a href="#gloss-d2-t1-b6">D2 · 2.1 · B6 — conceptos de IA agéntica</a>
          <a href="#gloss-d2-t2-b1">D2 · 2.2 · B1 — ventajas de la GenAI</a>
          <a href="#gloss-d2-t2-b2">D2 · 2.2 · B2 — desventajas de la GenAI</a>
          <a href="#gloss-d2-t2-b3">D2 · 2.2 · B3 — factores para elegir un modelo</a>
          <a href="#gloss-d2-t2-b4">D2 · 2.2 · B4 — valor de negocio y métricas</a>
          <a href="#gloss-d2-t3-b1">D2 · 2.3 · B1 — servicios de AWS para GenAI</a>
          <a href="#gloss-d2-t3-b2">D2 · 2.3 · B2 — ventajas de usar GenAI de AWS</a>
          <a href="#gloss-d2-t3-b3">D2 · 2.3 · B3 — beneficios de infraestructura de AWS</a>
          <a href="#gloss-d2-t3-b4">D2 · 2.3 · B4 — contrapartidas de costo</a>
          <a href="#gloss-d3-t1-b1">D3 · 3.1 · B1 — criterios de selección de FMs</a>
          <a href="#gloss-d3-t1-b2">D3 · 3.1 · B2 — parámetros de inferencia</a>
          <a href="#gloss-d3-t1-b3">D3 · 3.1 · B3 — RAG y Bedrock Knowledge Bases</a>
          <a href="#gloss-d3-t1-b4">D3 · 3.1 · B4 — bases de datos vectoriales en AWS</a>
          <a href="#gloss-d3-t1-b5">D3 · 3.1 · B5 — costo de personalizar FMs</a>
          <a href="#gloss-d3-t1-b6">D3 · 3.1 · B6 — rol de los agentes de IA</a>
          <a href="#gloss-d3-t2-b1">D3 · 3.2 · B1 — elementos de la ingeniería de prompts</a>
          <a href="#gloss-d3-t2-b2">D3 · 3.2 · B2 — técnicas de prompting</a>
          <a href="#gloss-d3-t2-b3">D3 · 3.2 · B3 — beneficios y buenas prácticas</a>
          <a href="#gloss-d3-t2-b4">D3 · 3.2 · B4 — riesgos: exposure, poisoning, hijacking, jailbreaking</a>
          <a href="#gloss-d3-t2-b5">D3 · 3.2 · B5 — Bedrock Prompt Management</a>
          <a href="#gloss-d3-t3-b1">D3 · 3.3 · B1 — elementos del entrenamiento de un FM</a>
          <a href="#gloss-d3-t3-b2">D3 · 3.3 · B2 — métodos de fine-tuning</a>
          <a href="#gloss-d3-t3-b3">D3 · 3.3 · B3 — preparar datos para fine-tuning (+ RLHF)</a>
          <a href="#gloss-d3-t4-b1">D3 · 3.4 · B1 — enfoques de evaluación de FMs</a>
          <a href="#gloss-d3-t4-b2">D3 · 3.4 · B2 — métricas: ROUGE, BLEU, BERTScore, LLM-as-a-judge</a>
          <a href="#gloss-d3-t4-b3">D3 · 3.4 · B3 — FM vs. objetivos de negocio</a>
          <a href="#gloss-d3-t4-b4">D3 · 3.4 · B4 — evaluar apps con FMs (RAG, agentes, workflows)</a>
          <a href="#gloss-d3-t4-b5">D3 · 3.4 · B5 — métricas de alineación con el negocio</a>
          <a href="#gloss-d4-t1-b1">D4 · 4.1 · B1 — características de la IA responsable</a>
          <a href="#gloss-d4-t1-b2">D4 · 4.1 · B2 — Amazon Bedrock Guardrails</a>
          <a href="#gloss-d4-t1-b3">D4 · 4.1 · B3 — sostenibilidad al elegir un modelo</a>
          <a href="#gloss-d4-t1-b4">D4 · 4.1 · B4 — riesgos legales de la GenAI</a>
          <a href="#gloss-d4-t1-b5">D4 · 4.1 · B5 — características de los datasets</a>
          <a href="#gloss-d4-t1-b6">D4 · 4.1 · B6 — sesgo y varianza</a>
          <a href="#gloss-d4-t1-b7">D4 · 4.1 · B7 — herramientas para detectar sesgo (A2I)</a>
          <a href="#gloss-d4-t2-b1">D4 · 4.2 · B1 — modelos transparentes vs. opacos</a>
          <a href="#gloss-d4-t2-b2">D4 · 4.2 · B2 — Model Cards, Model Evaluations, open source</a>
          <a href="#gloss-d4-t2-b3">D4 · 4.2 · B3 — interpretabilidad vs. desempeño</a>
          <a href="#gloss-d4-t2-b4">D4 · 4.2 · B4 — diseño centrado en el humano</a>
          <a href="#gloss-d5-t1-b1">D5 · 5.1 · B1 — servicios de AWS para asegurar IA</a>
          <a href="#gloss-d5-t1-b2">D5 · 5.1 · B2 — linaje y catalogación de datos</a>
          <a href="#gloss-d5-t1-b3">D5 · 5.1 · B3 — ingeniería de datos segura</a>
          <a href="#gloss-d5-t1-b4">D5 · 5.1 · B4 — seguridad y privacidad para sistemas de IA</a>
          <a href="#gloss-d5-t1-b5">D5 · 5.1 · B5 — detección de alucinaciones y grounding</a>
          <a href="#gloss-d5-t2-b1">D5 · 5.2 · B1 — servicios de gobernanza y cumplimiento</a>
          <a href="#gloss-d5-t2-b2">D5 · 5.2 · B2 — estrategias de gobernanza de datos</a>
          <a href="#gloss-d5-t2-b3">D5 · 5.2 · B3 — protocolos de gobernanza</a>
        </nav>

        <div className="gloss-group" id="gloss-d1-t1-b1">
          <span className="gloss-group-head">Dominio 1 · Task 1.1 · Bullet 1</span>
          <p className="gloss-bullet-text">"Definir términos básicos de IA (IA, ML, deep learning, redes neuronales, visión por computadora, NLP, modelo, algoritmo, entrenamiento e inferencia, sesgo, equidad, ajuste/fit, LLM, GenAI, IA agéntica)."</p>

          <div className="term-card">
            <h4>Inteligencia Artificial (IA / AI)</h4>
            <p>AWS la define como una tecnología transformadora que permite a las máquinas realizar tareas de resolución de problemas parecidas a las humanas, usando grandes cantidades de datos para automatizar procesos y generar información útil. Es el término "paraguas": dentro de la IA caben muchas técnicas distintas (desde autos autónomos hasta asistentes virtuales), y no todo lo que es IA es necesariamente Machine Learning.</p>
            <div className="term-short"><b>En corto</b>Tecnología que hace que las máquinas resuelvan problemas de forma parecida a un humano. Es el paraguas que contiene a ML, deep learning y GenAI. No toda IA es ML.</div>
          </div>

          <div className="term-card">
            <h4>Machine Learning (ML / aprendizaje automático)</h4>
            <p>Es una rama dentro de la IA. AWS lo define como un tipo de IA que analiza datos sin que le des instrucciones explícitas paso a paso: en vez de programar reglas fijas, el sistema procesa grandes cantidades de datos históricos, encuentra patrones, y usa esos patrones para predecir relaciones en datos nuevos.</p>
            <div className="term-short"><b>En corto</b>Rama de la IA que aprende patrones de datos históricos sin reglas explícitas, para predecir sobre datos nuevos. Se basa en algoritmos y modelos matemáticos.</div>
          </div>

          <div className="term-card">
            <h4>Deep learning (aprendizaje profundo)</h4>
            <p>Es un subconjunto de ML que usa redes neuronales inspiradas, de forma simplificada, en el cerebro humano. AWS explica que su ventaja frente al ML tradicional es que puede procesar datos no estructurados (imágenes, audio, texto libre) sin que un humano tenga que definir manualmente qué características mirar, y que es la base de la IA generativa moderna.</p>
            <div className="term-short"><b>En corto</b>Subconjunto de ML que usa redes neuronales de varias capas. Procesa datos no estructurados (imagen, audio, texto) sin necesitar que un humano defina las características a mano. Es la base de la GenAI actual.</div>
          </div>

          <div className="term-card">
            <h4>Redes neuronales (neural networks)</h4>
            <p>Es la estructura que usa el deep learning. AWS describe tres capas: una capa de entrada (donde entra la información), una o varias capas ocultas (donde se hace el procesamiento) y una capa de salida (el resultado final). Las conexiones entre "nodos" tienen pesos numéricos que se ajustan solos: cuando una ruta lleva a una respuesta correcta, su peso sube; cuando lleva a una incorrecta, baja. Así el sistema aprende de sus errores.</p>
            <div className="term-short"><b>En corto</b>Estructura de capas (entrada, ocultas, salida) con nodos conectados por "pesos" que se ajustan solos según los aciertos o errores del sistema. Es el mecanismo detrás del deep learning.</div>
          </div>

          <div className="term-card">
            <h4>Visión por computadora (computer vision)</h4>
            <p>Campo de la IA que permite a una computadora extraer información útil de imágenes, video u otro input visual. AWS menciona usos como identificación de objetos, reconocimiento facial, OCR (leer texto en imágenes), clasificación y, hoy en día, también generación de imágenes nuevas combinando esto con IA generativa.</p>
            <div className="term-short"><b>En corto</b>Permite a una computadora "entender" imágenes o video: identificar objetos, leer texto, reconocer rostros o incluso generar imágenes nuevas.</div>
          </div>

          <div className="term-card">
            <h4>NLP (procesamiento de lenguaje natural)</h4>
            <p>Tecnología que permite a una computadora interpretar, manipular y comprender el lenguaje humano, hablado o escrito. AWS destaca que sirve para analizar grandes volúmenes de texto o voz y sacar de ahí intención, sentimiento o insights de negocio — por ejemplo, entender si un mensaje de un cliente es una queja o un elogio.</p>
            <div className="term-short"><b>En corto</b>Permite a una computadora interpretar y comprender lenguaje humano, escrito o hablado, para sacar intención, sentimiento o insights.</div>
          </div>

          <div className="term-card">
            <h4>Modelo</h4>
            <p>Según la documentación de Amazon SageMaker, un modelo es el "artefacto entrenado" resultado de aplicar un algoritmo sobre datos de ejemplo. Una vez entrenado, ese modelo es lo que integras en tu aplicación para generar predicciones (inferencias) sobre datos nuevos.</p>
            <div className="term-short"><b>En corto</b>El "artefacto" ya entrenado que hace las predicciones. Es el resultado de aplicar un algoritmo sobre datos de ejemplo.</div>
          </div>

          <div className="term-card">
            <h4>Algoritmo</h4>
            <p>Es el método matemático que se usa para entrenar el modelo. La documentación de Amazon Machine Learning lo describe como una función matemática ajustable: el algoritmo compara sus predicciones contra el resultado real usando una "función de pérdida", y aplica una técnica de optimización para ir corrigiendo esos ajustes hasta minimizar el error. En corto: el algoritmo es el método de aprendizaje; el modelo es el resultado ya entrenado de aplicarlo.</p>
            <div className="term-short"><b>En corto</b>El método matemático que aprende los pesos del modelo, ajustándolos con una función de pérdida y una técnica de optimización hasta minimizar el error.</div>
          </div>

          <div className="term-card">
            <h4>Entrenamiento (training)</h4>
            <p>Es el proceso de "enseñarle" a la computadora a predecir: le das un algoritmo, datos de ejemplo (por ejemplo, miles de imágenes ya etiquetadas) y recursos de cómputo, y el sistema ajusta sus parámetros internos hasta que sus predicciones sobre esos datos de ejemplo son suficientemente buenas. Al final de esta etapa se evalúa si la exactitud lograda es aceptable.</p>
            <div className="term-short"><b>En corto</b>El proceso de darle al algoritmo datos de ejemplo y recursos de cómputo para que ajuste sus parámetros hasta predecir bien sobre esos datos.</div>
          </div>

          <div className="term-card">
            <h4>Inferencia (inference)</h4>
            <p>Es usar el modelo ya entrenado para generar predicciones sobre datos nuevos que nunca vio, en producción — como dice AWS, "generar inferencias en tiempo real y a escala". La guía del examen menciona distintos tipos: por lotes (batch), en tiempo real, asíncrona o serverless, según qué tan rápido se necesita la respuesta.</p>
            <div className="term-short"><b>En corto</b>Usar el modelo ya entrenado para predecir sobre datos nuevos, en producción, ya sea en tiempo real, por lotes, asíncrona o serverless.</div>
          </div>

          <div className="term-card">
            <h4>Sesgo (bias)</h4>
            <p>Amazon SageMaker Clarify lo define como un desequilibrio en los datos de entrenamiento o en el comportamiento de predicción del modelo entre distintos grupos (por ejemplo, edad o nivel de ingresos). Puede venir de los datos, si un grupo está sub-representado, o del propio algoritmo. Ejemplo que da AWS: un modelo entrenado mayormente con datos de personas de mediana edad puede ser menos preciso al predecir sobre personas jóvenes o mayores.</p>
            <div className="term-short"><b>En corto</b>Desequilibrio en los datos o en las predicciones del modelo entre distintos grupos (edad, ingresos, etc.), que puede venir de los datos o del algoritmo mismo.</div>
          </div>

          <div className="term-card">
            <h4>Equidad (fairness)</h4>
            <p>Según el Well-Architected Framework de AWS (lente de IA generativa), fairness significa "considerar el impacto en los distintos grupos de interesados": verificar que las decisiones del sistema no estén influenciadas por factores discriminatorios no deseados. En la práctica implica auditar los resultados del modelo entre distintos segmentos de usuarios y documentar los criterios de decisión. El sesgo es el problema técnico que puede existir en los datos o el modelo; la equidad es el objetivo de que ese sesgo no se traduzca en trato injusto hacia un grupo.</p>
            <div className="term-short"><b>En corto</b>El objetivo de que las decisiones del modelo no perjudiquen injustamente a ningún grupo; se verifica auditando resultados por segmento y documentando criterios.</div>
          </div>

          <div className="term-card">
            <h4>Ajuste / fit (model fit)</h4>
            <p>Se refiere a qué tan bien el modelo se ajusta a los datos. La documentación de Amazon Machine Learning distingue dos problemas: underfitting, cuando el modelo es demasiado simple y le va mal incluso con los datos de entrenamiento porque no logra capturar la relación entre las variables; y overfitting, cuando el modelo memoriza los datos de entrenamiento y le va muy bien ahí, pero falla con datos nuevos porque no generalizó, solo memorizó.</p>
            <div className="term-short"><b>En corto</b>Qué tan bien el modelo se ajusta a los datos. Underfitting = demasiado simple, le va mal hasta en el entrenamiento. Overfitting = memorizó el entrenamiento, pero falla con datos nuevos.</div>
          </div>

          <div className="term-card">
            <h4>LLM (Large Language Model / modelo de lenguaje grande)</h4>
            <p>AWS lo define como un modelo de deep learning muy grande, preentrenado con enormes cantidades de datos de texto. Están construidos sobre la arquitectura "transformer", que puede procesar secuencias de texto completas en paralelo, no palabra por palabra, y usa "atención" para entender cómo se relacionan las palabras entre sí — esto es lo que le permite manejar modelos con cientos de miles de millones de parámetros.</p>
            <div className="term-short"><b>En corto</b>Modelo de deep learning enorme, preentrenado con muchísimo texto, basado en arquitectura transformer, capaz de entender relaciones entre palabras en paralelo.</div>
          </div>

          <div className="term-card">
            <h4>GenAI (IA generativa)</h4>
            <p>AWS la define como un tipo de IA capaz de crear contenido nuevo — conversaciones, historias, imágenes, video, música — en vez de solo clasificar o predecir sobre datos existentes. Puede aprender un dominio, por ejemplo el idioma inglés, y usar ese conocimiento para tareas nuevas, como escribir un poema con las palabras que aprendió.</p>
            <div className="term-short"><b>En corto</b>Tipo de IA que crea contenido nuevo (texto, imagen, audio, video) en vez de solo clasificar o predecir sobre datos existentes.</div>
          </div>

          <div className="term-card">
            <h4>IA agéntica (agentic AI)</h4>
            <p>AWS la define como un sistema de IA autónomo que puede actuar por sí solo para lograr objetivos predeterminados. La diferencia clave frente a la IA generativa "normal" es que esta última es reactiva, responde cuando le preguntas, mientras que un sistema agéntico es proactivo: monitorea su entorno, toma la iniciativa, se adapta a condiciones cambiantes y puede coordinarse con otros agentes o personas para completar flujos de trabajo completos, con supervisión humana mínima.</p>
            <div className="term-short"><b>En corto</b>Sistema de IA autónomo y proactivo que persigue objetivos por sí mismo, con mínima supervisión humana, a diferencia de la GenAI tradicional que solo responde cuando se le pide.</div>
          </div>

          <a className="back-to-top" href="#d1">↑ volver al Dominio 1</a>
        </div>

        <div className="gloss-group" id="gloss-d1-t1-b2">
          <span className="gloss-group-head">Dominio 1 · Task 1.1 · Bullet 2</span>
          <p className="gloss-bullet-text">"Describir las similitudes y diferencias entre IA, ML, GenAI, deep learning e IA agéntica."</p>
          <p className="scope-note" style={{marginTop: '0.6rem'}}><strong>Nota:</strong> este bullet es una sola idea, no una lista de términos — los 5 conceptos ya se definieron en el Bullet 1. Aquí se pide comparar cómo se relacionan entre sí.</p>

          <div className="term-card">
            <h4>Similitudes y diferencias entre IA, ML, deep learning, GenAI e IA agéntica</h4>

            <p>Para AWS, estos cinco conceptos no son alternativas paralelas: son niveles encajados uno dentro de otro, más una capa extra de autonomía que no encaja en esa misma cadena.</p>

            <div className="hierarchy-row">
              <span className="hchip ai">IA</span><span className="arrow">⊃</span>
              <span className="hchip ml">ML</span><span className="arrow">⊃</span>
              <span className="hchip dl">Deep Learning</span><span className="arrow">⊃</span>
              <span className="hchip genai">GenAI</span>
            </div>
            <p className="hierarchy-branch">IA agéntica se construye sobre GenAI / foundation models, pero le suma una capa de autonomía — no es "más chica" en la misma cadena.</p>

            <p><strong>IA vs. ML:</strong> la IA es el término paraguas — "distintas estrategias y técnicas para hacer a las máquinas más parecidas a los humanos" — e incluye desde sistemas basados en reglas fijas y algoritmos genéticos hasta el propio ML. El ML es la rama específica que, en vez de reglas escritas a mano, aprende patrones estadísticos de los datos para predecir sobre datos nuevos. Como resume AWS: "toda ML es IA, pero no toda IA es ML".</p>

            <p><strong>ML vs. deep learning:</strong> el deep learning es un subconjunto de ML que usa redes neuronales de varias capas. La diferencia práctica: el ML tradicional suele necesitar que un humano seleccione a mano las características de los datos (feature engineering) y rinde mejor con datos estructurados y tareas simples (detectar spam); el deep learning automatiza esa extracción y es superior con datos no estructurados (imágenes, audio, texto libre) y tareas complejas (imágenes médicas), a cambio de necesitar mucho más dato y cómputo.</p>

            <p><strong>Deep learning vs. GenAI:</strong> AWS describe la GenAI como basada en "deep generative learning", una evolución del deep learning enfocada en crear contenido nuevo en vez de solo reconocer patrones o clasificar. El deep learning/ML "clásico" es discriminativo (dice a qué categoría pertenece algo, o predice un número); la GenAI es generativa (produce texto, imagen, audio o video nuevos). También difieren en los datos: ML tradicional usa datos estructurados y etiquetados de un solo tipo; GenAI aprende de datos no estructurados o semi-estructurados, sin etiquetas explícitas, y suele ser multimodal.</p>

            <p><strong>GenAI vs. IA agéntica:</strong> la propia guía oficial del examen ubica los "conceptos fundamentales de IA agéntica" como un objetivo dentro del task statement de fundamentos de GenAI — es decir, AWS la presenta como una extensión de la GenAI, no como una rama aparte. La diferencia que marca AWS: la GenAI es reactiva (genera contenido cuando se lo pides, y normalmente un humano lo revisa antes de usarlo, por ejemplo un email); la IA agéntica es proactiva (persigue un objetivo por sí sola, encadena pasos y decisiones, se integra a fondo con otros sistemas como CRM o ERP, y ejecuta acciones reales con supervisión humana mínima). AWS aclara que no compiten entre sí, sino que se complementan.</p>

            <p><strong>Similitud transversal:</strong> las cinco viven bajo el paraguas de la IA y buscan que una máquina haga algo que normalmente requeriría inteligencia humana; las tres que "aprenden" de datos (ML, deep learning, GenAI) necesitan datos de calidad y cómputo suficiente, y mejoran mientras más datos procesan.</p>

            <div className="term-short"><b>En corto</b>Son niveles encajados, no alternativas: IA es el paraguas más grande, ML es la parte de la IA que aprende de datos en vez de seguir reglas fijas, deep learning es el ML que usa redes neuronales y datos no estructurados, y GenAI es el deep learning enfocado en crear contenido nuevo en vez de solo clasificar o predecir. La IA agéntica se construye sobre GenAI/foundation models, pero le suma autonomía para perseguir un objetivo y actuar sola, en vez de solo responder cuando se le pide.</div>
          </div>

          <a className="back-to-top" href="#d1">↑ volver al Dominio 1</a>
        </div>

        <div className="gloss-group" id="gloss-d1-t1-b3">
          <span className="gloss-group-head">Dominio 1 · Task 1.1 · Bullet 3</span>
          <p className="gloss-bullet-text">"Describir los distintos tipos de inferencia (por lotes, en tiempo real, asíncrona, serverless)."</p>
          <p className="scope-note" style={{marginTop: '0.6rem'}}><strong>Nota:</strong> es una LISTA de 4 tipos de inferencia — se explican por separado.</p>

          <div className="term-card">
            <h4>Inferencia por lotes (batch)</h4>
            <p>Según la documentación de Amazon SageMaker AI, la inferencia por lotes (Batch Transform) es para procesamiento offline, cuando ya tienes disponible una gran cantidad de datos de antemano y no necesitas un endpoint persistente. Puede manejar datasets grandes (del orden de gigabytes), aunque el procesamiento puede tardar días. También puede usarse para preprocesar datasets antes de entrenar un modelo.</p>
            <div className="term-short"><b>En corto</b>Procesa grandes volúmenes de datos que ya tienes disponibles, sin mantener un endpoint activo. Ideal cuando no necesitas la respuesta al instante.</div>
          </div>

          <div className="term-card">
            <h4>Inferencia en tiempo real (real-time)</h4>
            <p>Es un endpoint tipo API REST totalmente administrado y persistente, pensado para inferencias en línea con baja latencia o alto throughput sostenido. AWS especifica payloads de hasta 25 MB y tiempos de procesamiento de hasta 60 segundos (u 8 minutos en modo streaming).</p>
            <div className="term-short"><b>En corto</b>Un endpoint siempre activo que responde al instante — para cuando necesitas la predicción de inmediato y de forma constante.</div>
          </div>

          <div className="term-card">
            <h4>Inferencia asíncrona (asynchronous)</h4>
            <p>Está pensada para encolar solicitudes con payloads grandes y tiempos de procesamiento largos: AWS permite hasta 1 GB de payload y hasta una hora de procesamiento. Su ventaja es que el endpoint puede escalar a cero cuando no hay solicitudes pendientes, así que no pagas por capacidad ociosa mientras esperas.</p>
            <div className="term-short"><b>En corto</b>Encola la solicitud para procesarla cuando se pueda — ideal para payloads grandes o lentos, sin mantener el endpoint activo todo el tiempo.</div>
          </div>

          <div className="term-card">
            <h4>Inferencia serverless (serverless)</h4>
            <p>AWS administra toda la infraestructura por ti: no gestionas instancias ni políticas de escalado, y solo pagas por lo que usas, no por tiempo ocioso. Está pensada para tráfico intermitente o impredecible; admite payloads de hasta 4 MB y hasta 60 segundos de procesamiento.</p>
            <div className="term-short"><b>En corto</b>AWS maneja toda la infraestructura y solo pagas por uso real — ideal para tráfico impredecible o esporádico.</div>
          </div>

          <a className="back-to-top" href="#d1">↑ volver al Dominio 1</a>
        </div>

        <div className="gloss-group" id="gloss-d1-t1-b4">
          <span className="gloss-group-head">Dominio 1 · Task 1.1 · Bullet 4</span>
          <p className="gloss-bullet-text">"Describir los distintos tipos de datos en modelos de IA (etiquetados/sin etiquetar, tabulares, series de tiempo, imagen, texto, estructurados/no estructurados)."</p>
          <p className="scope-note" style={{marginTop: '0.6rem'}}><strong>Nota:</strong> es una LISTA de tipos de datos. Los pares con "/" (etiquetados/sin etiquetar, estructurados/no estructurados) son dicotomías — se explican juntas, como se hizo con "ajuste/fit" en el Bullet 1.</p>

          <div className="term-card">
            <h4>Datos etiquetados vs. sin etiquetar</h4>
            <p>Los datos etiquetados incluyen, junto a cada ejemplo, la respuesta correcta que el modelo debe aprender a predecir (por ejemplo, una foto marcada como "gato" o "perro"); se usan típicamente en aprendizaje supervisado. Los datos sin etiquetar no traen esa respuesta incluida, solo el dato crudo, y se usan en aprendizaje no supervisado o en el preentrenamiento de modelos de GenAI, que aprenden de grandes volúmenes de texto o imágenes sin que nadie haya etiquetado cada ejemplo.</p>
            <div className="term-short"><b>En corto</b>Etiquetados = cada ejemplo trae la respuesta correcta incluida (aprendizaje supervisado). Sin etiquetar = solo el dato crudo, sin respuesta (aprendizaje no supervisado o preentrenamiento de GenAI).</div>
          </div>

          <div className="term-card">
            <h4>Datos tabulares</h4>
            <p>Son datos organizados en filas y columnas, como una hoja de cálculo o una tabla de base de datos, donde cada columna es una variable (edad, precio, categoría) y cada fila un registro. Es el formato clásico del ML tradicional y de los datos estructurados.</p>
            <div className="term-short"><b>En corto</b>Datos organizados en filas y columnas, como una tabla — el formato típico del ML tradicional.</div>
          </div>

          <div className="term-card">
            <h4>Series de tiempo (time-series)</h4>
            <p>Son datos capturados en puntos sucesivos en el tiempo (la temperatura cada hora, el precio de una acción cada minuto), donde el orden cronológico importa porque un valor suele depender de los valores anteriores. Se usan sobre todo para pronósticos y detección de anomalías.</p>
            <div className="term-short"><b>En corto</b>Datos medidos en momentos sucesivos donde el orden importa — la base de los pronósticos (forecasting).</div>
          </div>

          <div className="term-card">
            <h4>Datos de imagen</h4>
            <p>Es información visual (fotos, cuadros de video, imágenes médicas) representada como matrices de píxeles. Los modelos de visión por computadora y muchos modelos de deep learning trabajan directamente con este tipo de dato, sin que un humano tenga que describir manualmente su contenido.</p>
            <div className="term-short"><b>En corto</b>Información visual representada como píxeles; la usan los modelos de visión por computadora y de deep learning.</div>
          </div>

          <div className="term-card">
            <h4>Datos de texto</h4>
            <p>Es lenguaje escrito en cualquier idioma (documentos, correos, transcripciones, publicaciones). Lo procesan los modelos de NLP y los LLMs, normalmente convirtiéndolo primero en tokens y luego en representaciones numéricas (embeddings) que el modelo pueda usar.</p>
            <div className="term-short"><b>En corto</b>Lenguaje escrito que procesan los modelos de NLP y LLMs, generalmente convertido primero en tokens.</div>
          </div>

          <div className="term-card">
            <h4>Datos estructurados vs. no estructurados</h4>
            <p>AWS define los datos estructurados como aquellos que "encajan perfectamente en tablas y usan tipos de datos discretos como números, texto corto y fechas" — se guardan en bases de datos relacionales y se analizan fácilmente con SQL (ejemplos de AWS: registros financieros, cifras de ventas, inventarios). Los datos no estructurados "no encajan en una tabla por su tamaño o naturaleza" — video, documentos largos, publicaciones de redes sociales — y requieren algoritmos más complejos y ML para analizarse. AWS también menciona una categoría intermedia, los datos semiestructurados (por ejemplo, un video con etiquetas de fecha, ubicación y tema asociadas).</p>
            <div className="term-short"><b>En corto</b>Estructurados = encajan en tablas con esquema fijo (fáciles de consultar con SQL). No estructurados = sin esquema fijo (audio, video, texto libre), necesitan ML para analizarse. Existe también una categoría intermedia: semiestructurados.</div>
          </div>

          <a className="back-to-top" href="#d1">↑ volver al Dominio 1</a>
        </div>

        <div className="gloss-group" id="gloss-d1-t1-b5">
          <span className="gloss-group-head">Dominio 1 · Task 1.1 · Bullet 5</span>
          <p className="gloss-bullet-text">"Describir los distintos tipos de aprendizaje de IA/ML (supervisado, no supervisado, aprendizaje por refuerzo)."</p>
          <p className="scope-note" style={{marginTop: '0.6rem'}}><strong>Nota:</strong> es una LISTA de 3 tipos de aprendizaje.</p>

          <div className="term-card">
            <h4>Aprendizaje supervisado</h4>
            <p>El modelo aprende a partir de datos etiquetados: se le muestran muchos ejemplos de entrada junto con la respuesta correcta, y ajusta sus parámetros para minimizar el error entre su predicción y esa respuesta real. Es el enfoque estándar para regresión y clasificación (predecir si un correo es spam, o el precio de una casa). <em>Nota de transparencia: no encontré una página "What is" dedicada de AWS solo para este término — esta definición refleja el consenso técnico estándar, consistente con cómo el resto de la documentación de AWS lo usa.</em></p>
            <div className="term-short"><b>En corto</b>El modelo aprende de datos ya etiquetados (con la respuesta correcta incluida) para predecir sobre datos nuevos. Es la base de clasificación y regresión.</div>
          </div>

          <div className="term-card">
            <h4>Aprendizaje no supervisado</h4>
            <p>El modelo trabaja con datos sin etiquetar y su tarea es encontrar estructura oculta por sí mismo — agrupar elementos parecidos (clustering) o reducir la dimensionalidad de los datos — sin que nadie le diga de antemano cuál es la respuesta correcta. Mismo comentario de fuente que en el supervisado: es consenso técnico estándar; AWS lo usa de forma consistente, por ejemplo al contrastarlo con reinforcement learning en su página oficial de RL.</p>
            <div className="term-short"><b>En corto</b>El modelo encuentra patrones o agrupaciones en datos sin etiquetar, sin que nadie le indique la respuesta correcta de antemano.</div>
          </div>

          <div className="term-card">
            <h4>Aprendizaje por refuerzo (reinforcement learning)</h4>
            <p>AWS lo define como una técnica de ML que entrena modelos para tomar decisiones que logren el resultado más óptimo, imitando el proceso de prueba y error que usan los humanos: las acciones que llevan a buenos resultados se refuerzan, y las que no, se descartan. A diferencia del supervisado, no parte de un dataset con pares entrada-salida predefinidos, sino que persigue un objetivo (maximizar una recompensa acumulada) y puede aceptar pérdidas a corto plazo para lograr mejores resultados a largo plazo. A diferencia del no supervisado (que solo busca patrones ocultos), el reinforcement learning valida y refina continuamente sus decisiones para maximizar una señal de recompensa.</p>
            <div className="term-short"><b>En corto</b>El modelo aprende por prueba y error, con una recompensa o castigo según sus decisiones, buscando maximizar el resultado acumulado — no parte de un dataset de respuestas correctas como el supervisado.</div>
          </div>

          <a className="back-to-top" href="#d1">↑ volver al Dominio 1</a>
        </div>

        <div className="gloss-group" id="gloss-d1-t2-b1">
          <span className="gloss-group-head">Dominio 1 · Task 1.2 · Bullet 1</span>
          <p className="gloss-bullet-text">"Reconocer aplicaciones donde IA/ML aportan valor (apoyar la toma de decisiones humanas, escalabilidad de soluciones, automatización)."</p>
          <p className="scope-note" style={{marginTop: '0.6rem'}}><strong>Nota:</strong> es una LISTA de 3 formas distintas en que la IA/ML aporta valor.</p>

          <div className="term-card">
            <h4>Apoyar la toma de decisiones humanas</h4>
            <p>El modelo no reemplaza a la persona: le da información, una predicción o una recomendación (por ejemplo, un score de riesgo crediticio o una alerta de posible fraude) para que decida con mejores datos y más rápido. AWS enmarca esto entre los usos de los foundation models al mencionar "sistemas de soporte a decisiones" como uno de los escenarios donde conviene usarlos.</p>
            <div className="term-short"><b>En corto</b>El modelo entrega una predicción o recomendación, pero la decisión final la sigue tomando una persona, con mejor información disponible.</div>
          </div>

          <div className="term-card">
            <h4>Escalabilidad de soluciones</h4>
            <p>La guía oficial de Amazon Machine Learning sobre cuándo usar ML da literalmente este ejemplo: un enfoque manual puede funcionar para clasificar 100 correos, pero se vuelve impráctico para millones. Ahí es donde el ML aporta valor, porque puede manejar ese volumen sin que el esfuerzo humano requerido crezca en la misma proporción.</p>
            <div className="term-short"><b>En corto</b>El ML permite manejar un volumen de trabajo (miles o millones de casos) que sería imposible de atender manualmente, sin que el costo crezca al mismo ritmo.</div>
          </div>

          <div className="term-card">
            <h4>Automatización</h4>
            <p>Cuando una tarea depende de demasiados factores que interactúan entre sí como para programarla como reglas fijas —el ejemplo que da la propia guía de AWS es la detección de spam, donde intervienen remitente, contenido, encabezados, etc.— el ML puede automatizarla aprendiendo el patrón directamente de los datos, en vez de que un humano intente codificar a mano cada regla y excepción.</p>
            <div className="term-short"><b>En corto</b>El ML automatiza tareas demasiado complejas para programarlas como reglas fijas, aprendiendo el patrón directamente de los datos.</div>
          </div>

          <a className="back-to-top" href="#d1">↑ volver al Dominio 1</a>
        </div>

        <div className="gloss-group" id="gloss-d1-t2-b2">
          <span className="gloss-group-head">Dominio 1 · Task 1.2 · Bullet 2</span>
          <p className="gloss-bullet-text">"Determinar cuándo una solución de IA/ML no es apropiada (análisis costo-beneficio, situaciones que requieren un resultado específico en vez de una predicción)."</p>
          <p className="scope-note" style={{marginTop: '0.6rem'}}><strong>Nota:</strong> es una LISTA de 2 criterios para decidir que NO conviene usar ML.</p>

          <div className="term-card">
            <h4>Análisis costo-beneficio</h4>
            <p>La guía oficial de Amazon Machine Learning es explícita: si el problema se puede resolver con reglas simples, cálculos o pasos predeterminados que se pueden programar sin que el sistema tenga que "aprender" de datos, no necesitas ML. Construir, entrenar y mantener un modelo tiene un costo (datos, cómputo, mantenimiento) que solo se justifica cuando es menor que el beneficio de automatizar o escalar la tarea; si una lógica IF/THEN resuelve el problema igual de bien y más barato, esa es la opción correcta.</p>
            <div className="term-short"><b>En corto</b>Si el problema se resuelve con reglas simples y el costo de construir y mantener un modelo no se justifica frente al beneficio, no uses ML.</div>
          </div>

          <div className="term-card">
            <h4>Situaciones que requieren un resultado específico en vez de una predicción</h4>
            <p>El ML produce predicciones: una estimación de cuál es la respuesta más probable, no una garantía exacta. En escenarios donde se necesita un resultado determinista y exacto siempre (un cálculo financiero regulado, o una regla de cumplimiento normativo sin margen de error), un sistema de reglas fijas es más apropiado que un modelo de ML, precisamente porque el ML puede equivocarse un porcentaje de las veces.</p>
            <div className="term-short"><b>En corto</b>Si necesitas siempre el mismo resultado exacto y verificable (no una estimación probable), un sistema de reglas fijas es más apropiado que un modelo de ML.</div>
          </div>

          <a className="back-to-top" href="#d1">↑ volver al Dominio 1</a>
        </div>

        <div className="gloss-group" id="gloss-d1-t2-b3">
          <span className="gloss-group-head">Dominio 1 · Task 1.2 · Bullet 3</span>
          <p className="gloss-bullet-text">"Seleccionar las técnicas de IA/ML apropiadas para casos de uso específicos (regresión, clasificación, clustering)."</p>
          <p className="scope-note" style={{marginTop: '0.6rem'}}><strong>Nota:</strong> es una LISTA de 3 técnicas. No encontré una página de glosario oficial de AWS dedicada a estos 3 términos — son consenso técnico estándar, consistente con cómo AWS categoriza "tipos de problema" en servicios como SageMaker Autopilot/Canvas (regresión, clasificación binaria, clasificación multiclase).</p>

          <div className="term-card">
            <h4>Regresión</h4>
            <p>Técnica de aprendizaje supervisado que predice un valor numérico continuo — el precio de una casa, la temperatura de mañana, cuántas unidades se venderán. La salida es un número, no una categoría.</p>
            <div className="term-short"><b>En corto</b>Predice un número (un valor continuo), como un precio o una cantidad — es aprendizaje supervisado.</div>
          </div>

          <div className="term-card">
            <h4>Clasificación</h4>
            <p>Técnica de aprendizaje supervisado que predice a qué categoría pertenece un ejemplo — si un correo es "spam" o "no spam", si una transacción es "fraudulenta" o "legítima". Puede ser binaria (2 clases) o multiclase (más de 2 clases).</p>
            <div className="term-short"><b>En corto</b>Predice una categoría o etiqueta (spam/no spam) en vez de un número — también es aprendizaje supervisado.</div>
          </div>

          <div className="term-card">
            <h4>Clustering (agrupamiento)</h4>
            <p>Técnica de aprendizaje no supervisado que agrupa ejemplos parecidos entre sí sin que existan etiquetas previas — el propio modelo descubre los grupos naturales en los datos, por ejemplo para segmentar clientes según su comportamiento de compra sin saber de antemano cuáles son los segmentos.</p>
            <div className="term-short"><b>En corto</b>Agrupa datos parecidos entre sí sin usar etiquetas previas — el modelo descubre los grupos por su cuenta. Es aprendizaje no supervisado.</div>
          </div>

          <a className="back-to-top" href="#d1">↑ volver al Dominio 1</a>
        </div>

        <div className="gloss-group" id="gloss-d1-t2-b4">
          <span className="gloss-group-head">Dominio 1 · Task 1.2 · Bullet 4</span>
          <p className="gloss-bullet-text">"Identificar ejemplos de aplicaciones reales de IA (visión por computadora, NLP, reconocimiento de voz, sistemas de recomendación, detección de fraude, pronósticos, bases de conocimiento, IA agéntica)."</p>
          <p className="scope-note" style={{marginTop: '0.6rem'}}><strong>Nota:</strong> es una LISTA de 8 aplicaciones. Visión por computadora, NLP e IA agéntica ya se definieron a fondo en el Bullet 1 — aquí van resumidas con su ejemplo de aplicación real; los 5 restantes son nuevos y van completos.</p>

          <div className="term-card">
            <h4>Visión por computadora <em>(ver Bullet 1)</em></h4>
            <p>Ya definida en el Bullet 1: permite a una computadora extraer información de imágenes o video. Como aplicación real: inspección de calidad en líneas de manufactura, diagnóstico asistido en imágenes médicas, o verificación de identidad por reconocimiento facial.</p>
            <div className="term-short"><b>En corto</b>Ver definición completa en el Bullet 1. Aquí, como ejemplo de aplicación real: inspección visual automática, imágenes médicas, verificación facial.</div>
          </div>

          <div className="term-card">
            <h4>NLP <em>(ver Bullet 1)</em></h4>
            <p>También definido en el Bullet 1: permite entender lenguaje humano. Como aplicación real: chatbots de servicio al cliente, análisis de sentimiento en redes sociales, o clasificación automática de tickets de soporte.</p>
            <div className="term-short"><b>En corto</b>Ver definición completa en el Bullet 1. Aquí, como ejemplo de aplicación real: chatbots, análisis de sentimiento, clasificación de tickets.</div>
          </div>

          <div className="term-card">
            <h4>Reconocimiento de voz (speech recognition)</h4>
            <p>Es convertir audio hablado en texto — lo opuesto a Amazon Polly, que convierte texto en voz. El servicio de AWS es Amazon Transcribe, un servicio de reconocimiento automático de voz que usa ML para convertir audio en texto, en tiempo real (streaming) o procesando archivos guardados en Amazon S3 (por lotes). Se usa, por ejemplo, para subtitular videos, transcribir llamadas de un call center, o dictado por voz.</p>
            <div className="term-short"><b>En corto</b>Convierte audio hablado en texto. En AWS, el servicio es Amazon Transcribe; se usa para subtítulos, transcripción de llamadas o dictado.</div>
          </div>

          <div className="term-card">
            <h4>Sistemas de recomendación</h4>
            <p>Son modelos que predicen qué productos, contenido o acciones le interesarían más a un usuario específico, basándose en su comportamiento pasado (o el de usuarios parecidos). El servicio de AWS es Amazon Personalize, un servicio de ML totalmente administrado que genera recomendaciones de artículos y segmentos de usuarios a partir de datos de interacción (clics, compras, vistas). Ejemplos que da AWS: "más elegidos para ti" en streaming, "comprados juntos frecuentemente" en ecommerce, o reordenar resultados de búsqueda según preferencias del usuario.</p>
            <div className="term-short"><b>En corto</b>Predice qué le interesaría a cada usuario según su comportamiento pasado. En AWS, el servicio es Amazon Personalize.</div>
          </div>

          <div className="term-card">
            <h4>Detección de fraude</h4>
            <p>Es usar ML (típicamente clasificación) para identificar transacciones o comportamientos sospechosos comparándolos contra patrones históricos de fraude. AWS tuvo un servicio dedicado, Amazon Fraud Detector, pero hay dos cosas importantes que aclarar: (1) AWS anunció que Fraud Detector ya no acepta clientes nuevos y remite a alternativas como Amazon SageMaker; y (2) Fraud Detector no aparece en la lista oficial de servicios "en alcance" del examen AIF-C01. Para el examen, "detección de fraude" es un caso de uso conceptual de la IA/ML, no un servicio puntual que debas memorizar.</p>
            <div className="term-short"><b>En corto</b>Usar ML (típicamente clasificación) para detectar transacciones o comportamientos sospechosos. Es un caso de uso conceptual para el examen — el servicio dedicado de AWS (Fraud Detector) ya no es un producto activo ni está en el alcance del examen.</div>
          </div>

          <div className="term-card">
            <h4>Pronósticos (forecasting)</h4>
            <p>Es predecir valores futuros a partir de datos históricos de series de tiempo (demanda de inventario, tráfico web, ventas del próximo trimestre). AWS tuvo un servicio dedicado a esto, Amazon Forecast, pero —igual que Fraud Detector— tampoco aparece en la lista de servicios en alcance del examen. <em>No encontré confirmación oficial reciente sobre el estado actual de Amazon Forecast como producto activo, así que lo señalo explícitamente en vez de asumir.</em> Para el examen, esto es un caso de uso conceptual de la IA/ML aplicado a series de tiempo.</p>
            <div className="term-short"><b>En corto</b>Predecir valores futuros a partir de datos históricos de series de tiempo (demanda, tráfico, ventas). Para el examen es un caso de uso conceptual, no un servicio puntual a memorizar.</div>
          </div>

          <div className="term-card">
            <h4>Bases de conocimiento (knowledge bases)</h4>
            <p>En el contexto de GenAI, una base de conocimiento conecta un modelo con tus propios documentos o datos para que responda preguntas basándose en esa información específica, en vez de solo lo que aprendió en su entrenamiento general — esto es la técnica de RAG (Retrieval Augmented Generation), que se cubre a fondo en el Dominio 3. El servicio de AWS es Amazon Bedrock Knowledge Bases. Como aplicación real: un chatbot de soporte que responde con la documentación interna real de la empresa, en vez de inventar la respuesta.</p>
            <div className="term-short"><b>En corto</b>Conecta un modelo de IA con tus propios documentos para que responda con esa información específica (técnica RAG). En AWS: Amazon Bedrock Knowledge Bases.</div>
          </div>

          <div className="term-card">
            <h4>IA agéntica <em>(ver Bullet 1)</em></h4>
            <p>Ya definida en el Bullet 1: un sistema de IA autónomo y proactivo. Como aplicación real: un agente que monitorea el inventario y genera automáticamente una orden de reabastecimiento cuando el stock baja de cierto nivel, sin que un humano tenga que iniciarlo.</p>
            <div className="term-short"><b>En corto</b>Ver definición completa en el Bullet 1. Aquí, como ejemplo de aplicación real: reabastecimiento automático de inventario sin intervención humana.</div>
          </div>

          <a className="back-to-top" href="#d1">↑ volver al Dominio 1</a>
        </div>

        <div className="gloss-group" id="gloss-d1-t2-b5">
          <span className="gloss-group-head">Dominio 1 · Task 1.2 · Bullet 5</span>
          <p className="gloss-bullet-text">"Explicar las capacidades de los servicios administrados de IA/ML de AWS (Amazon SageMaker AI, Amazon Transcribe, Amazon Translate, Amazon Comprehend, Amazon Lex, Amazon Polly)."</p>
          <p className="scope-note" style={{marginTop: '0.6rem'}}><strong>Nota:</strong> es una LISTA de 6 servicios de AWS.</p>

          <div className="term-card">
            <h4>Amazon SageMaker AI</h4>
            <p>Es el servicio de AWS para construir, entrenar y desplegar modelos de ML —incluyendo foundation models— para cualquier caso de uso, con infraestructura, herramientas y flujos de trabajo totalmente administrados. Cubre todo el ciclo de vida: entornos de desarrollo integrados, entrenamiento distribuido, infraestructura de inferencia optimizada en costo, y herramientas de gobernanza, observabilidad e IA responsable (detección de toxicidad, guardrails).</p>
            <div className="term-short"><b>En corto</b>La plataforma de AWS para construir, entrenar y desplegar modelos de ML y foundation models de principio a fin, con herramientas para todo el ciclo de vida.</div>
          </div>

          <div className="term-card">
            <h4>Amazon Transcribe</h4>
            <p>Es un servicio de reconocimiento automático de voz que usa ML para convertir audio en texto, ya sea como servicio independiente o para agregar voz-a-texto a cualquier aplicación. Permite mejorar la exactitud para casos específicos, filtrar contenido, analizar audio multicanal, identificar a cada hablante por separado, y transcribir en tiempo real o por lotes. Es elegible para HIPAA (información médica protegida).</p>
            <div className="term-short"><b>En corto</b>Convierte audio hablado en texto, en tiempo real o por lotes; permite identificar hablantes y es elegible para HIPAA.</div>
          </div>

          <div className="term-card">
            <h4>Amazon Translate</h4>
            <p>Es un servicio de traducción de texto que usa ML avanzado para traducción de alta calidad bajo demanda. Se usa para traducir documentos o contenido no estructurado, o para construir aplicaciones multilingües. Se integra con otros servicios de AWS: con Amazon Comprehend para extraer entidades/sentimiento del texto traducido, con Amazon Transcribe para subtítulos multilingües, o con Amazon Polly para narrar contenido traducido en voz.</p>
            <div className="term-short"><b>En corto</b>Traduce texto entre idiomas bajo demanda; se integra con Comprehend, Transcribe y Polly para flujos multilingües completos.</div>
          </div>

          <div className="term-card">
            <h4>Amazon Comprehend</h4>
            <p>Es un servicio de NLP que usa ML para descubrir información en datos de texto no estructurado —tickets de soporte, reseñas, correos, redes sociales. Permite extraer texto, identificar frases clave, detectar sentimiento, clasificar documentos, reconocer entidades (nombres, lugares, fechas) y redactar (ocultar) información de identificación personal.</p>
            <div className="term-short"><b>En corto</b>Analiza texto no estructurado para sacar sentimiento, frases clave, entidades y clasificación — y puede ocultar datos personales.</div>
          </div>

          <div className="term-card">
            <h4>Amazon Lex</h4>
            <p>Es un servicio totalmente administrado para construir interfaces de conversación con IA (chatbots, asistentes de voz) dentro de cualquier aplicación, usando la misma tecnología que Alexa. Permite crear interfaces de voz y texto con capacidades de IA generativa, desplegar sistemas de respuesta de voz interactiva (IVR), y funciona en múltiples canales (apps móviles, mensajería, teléfono).</p>
            <div className="term-short"><b>En corto</b>Sirve para construir chatbots y asistentes de voz conversacionales; usa la misma tecnología que Alexa.</div>
          </div>

          <div className="term-card">
            <h4>Amazon Polly</h4>
            <p>Es un servicio totalmente administrado que convierte texto en voz (text-to-speech), generando audio bajo demanda con deep learning. Ofrece decenas de voces naturales en más de 40 idiomas y variantes, personalizables con SSML y léxicos propios. El resultado es un archivo de audio (MP3 u OGG) integrable en sitios web, apps, dispositivos IoT o producciones multimedia.</p>
            <div className="term-short"><b>En corto</b>Convierte texto en voz (audio) de forma natural, en más de 40 idiomas — lo opuesto a Transcribe.</div>
          </div>

          <a className="back-to-top" href="#d1">↑ volver al Dominio 1</a>
        </div>

        <div className="gloss-group" id="gloss-d1-t2-b6">
          <span className="gloss-group-head">Dominio 1 · Task 1.2 · Bullet 6</span>
          <p className="gloss-bullet-text">"Identificar cuándo conviene usar modelos de ML tradicionales o foundation models (FMs) (por regulación, requisitos de explicabilidad, restricciones operativas)."</p>
          <p className="scope-note" style={{marginTop: '0.6rem'}}><strong>Nota:</strong> este bullet es UNA sola idea (una decisión), no una lista de términos independientes — regulación, explicabilidad y restricciones operativas son los tres factores que matizan esa única decisión.</p>

          <div className="term-card">
            <h4>Cuándo usar ML tradicional vs. foundation models</h4>
            <p>AWS marca la diferencia central así: los modelos de ML tradicionales "normalmente realizan tareas específicas, como analizar el sentimiento de un texto, clasificar imágenes o pronosticar tendencias", mientras que los FMs muestran "adaptabilidad" para "realizar una amplia gama de tareas dispares con un alto grado de exactitud" sin haber sido entrenados específicamente para cada una.</p>
            <p><strong>Por regulación:</strong> en industrias reguladas (salud, finanzas, sector público), un modelo tradicional entrenado para una tarea acotada, con datos y proceso de validación documentados, suele ser más fácil de auditar y justificar ante un regulador que un FM de propósito general entrenado con datos masivos y de origen diverso.</p>
            <p><strong>Por requisitos de explicabilidad:</strong> cuando necesitas poder explicar exactamente por qué el modelo llegó a una decisión (por ejemplo, por qué se rechazó un crédito), los modelos tradicionales más simples (regresión, árboles de decisión) suelen ser más interpretables que un FM, cuyo tamaño y complejidad —miles de millones de parámetros— lo hace mucho más difícil de explicar en detalle. Esto se conecta directamente con el Dominio 4 del examen (transparencia y explicabilidad).</p>
            <p><strong>Por restricciones operativas:</strong> la guía de decisión oficial de AWS lo resume como un espectro: los servicios de IA especializados y preentrenados (Comprehend, Transcribe, Rekognition) requieren poca experiencia en ML y despliegan rápido, pero con menos personalización; SageMaker AI da control total para entrenar un modelo propio (tradicional o FM) cuando necesitas más personalización o tienes datos de dominio específico grandes y etiquetados; y en el otro extremo, infraestructura especializada (AWS Trainium/Inferentia) se usa cuando hay restricciones extremas de costo/latencia en inferencia a gran escala. La recomendación general de AWS es empezar con el servicio preconstruido más simple que resuelva el problema, y subir en complejidad solo si el caso de negocio lo exige.</p>
            <div className="term-short"><b>En corto</b>No es "mejor vs. peor", sino de encaje: los FMs ganan en adaptabilidad y velocidad para tareas amplias y variadas; el ML tradicional gana en industrias reguladas, cuando necesitas explicar cada decisión, o cuando las restricciones operativas (costo, latencia, control de infraestructura) pesan más que la flexibilidad. AWS recomienda empezar con lo más simple que resuelva el problema.</div>
          </div>

          <a className="back-to-top" href="#d1">↑ volver al Dominio 1</a>
        </div>

        <div className="gloss-group" id="gloss-d1-t3-b1">
          <span className="gloss-group-head">Dominio 1 · Task 1.3 · Bullet 1</span>
          <p className="gloss-bullet-text">"Describir y diferenciar los componentes de un pipeline de IA/ML."</p>
          <p className="scope-note" style={{marginTop: '0.6rem'}}><strong>Nota:</strong> no trae lista entre paréntesis; lo trato como UNA idea única (entender el pipeline completo y qué distingue a cada etapa entre sí).</p>

          <div className="term-card">
            <h4>Componentes del pipeline de IA/ML</h4>
            <p>Un pipeline de ML es la secuencia de pasos que lleva un problema de negocio hasta un modelo funcionando en producción. La guía de decisión oficial de AWS para elegir un servicio de ML describe estas etapas: primero, <strong>definir el problema de negocio</strong> (entender exactamente qué se quiere resolver, antes de elegir cualquier servicio); luego, <strong>preparación y etiquetado de datos</strong> (limpiar y transformar los datos, y etiquetarlos si hace falta — en AWS, SageMaker Data Wrangler y SageMaker Ground Truth); después, <strong>desarrollo y entrenamiento del modelo</strong> (elegir el algoritmo y entrenarlo — SageMaker Autopilot para automatizarlo o SageMaker Studio para desarrollo manual); a continuación, <strong>despliegue e inferencia</strong> (poner el modelo a disposición de una aplicación, en tiempo real, por lotes o streaming); y por último, <strong>orquestación del flujo completo</strong> (en AWS, SageMaker Pipelines conecta y automatiza todos los pasos anteriores como un flujo de CI/CD para ML).</p>
            <p>Lo que diferencia a cada etapa es el tipo de trabajo y el rol involucrado: preparar datos es principalmente ingeniería de datos; entrenar y evaluar el modelo es trabajo de ciencia de datos; el despliegue es más cercano a ingeniería de software/MLOps; y el monitoreo posterior (ver Bullet 5 de este mismo task) es continuo, no un paso único al final.</p>
            <div className="term-short"><b>En corto</b>Un pipeline de IA/ML son los pasos desde el problema de negocio hasta el modelo en producción: definir el problema, preparar/etiquetar los datos, entrenar y evaluar el modelo, desplegarlo para inferencia, y orquestar/automatizar todo ese flujo (en AWS, con SageMaker Pipelines).</div>
          </div>

          <a className="back-to-top" href="#d1">↑ volver al Dominio 1</a>
        </div>

        <div className="gloss-group" id="gloss-d1-t3-b2">
          <span className="gloss-group-head">Dominio 1 · Task 1.3 · Bullet 2</span>
          <p className="gloss-bullet-text">"Describir las fuentes de los FMs (modelos preentrenados de código abierto, entrenamiento de modelos propios)."</p>
          <p className="scope-note" style={{marginTop: '0.6rem'}}><strong>Nota:</strong> es una LISTA de 2 fuentes de FMs.</p>

          <div className="term-card">
            <h4>Modelos preentrenados de código abierto</h4>
            <p>Son foundation models que alguien más ya entrenó (con enormes cantidades de datos y cómputo) y libera para que otros los usen directamente o los adapten. En AWS se accede a ellos sobre todo vía Amazon Bedrock (más de 100 FMs de proveedores como Anthropic, Meta, Mistral, Amazon Nova, entre otros) o Amazon SageMaker JumpStart (modelos preentrenados listos para desplegar o afinar). La ventaja: acceso rápido, sin el costo de entrenar desde cero, con la posibilidad de personalizarlos después vía fine-tuning, RAG o preentrenamiento continuo.</p>
            <div className="term-short"><b>En corto</b>Modelos ya entrenados por otros (AWS, Anthropic, Meta, etc.) que usas directamente o adaptas — en AWS, vía Amazon Bedrock o SageMaker JumpStart. Rápido y sin el costo de entrenar desde cero.</div>
          </div>

          <div className="term-card">
            <h4>Entrenamiento de modelos propios</h4>
            <p>Es construir y entrenar tu propio modelo desde cero, con tus propios datos e infraestructura de cómputo. La guía de decisión de AWS recomienda este camino (con Amazon SageMaker AI) cuando el caso de uso puede beneficiarse de entrenamiento extenso, fine-tuning y personalización profunda, y cuando tienes datasets grandes, etiquetados y específicos de tu dominio — a cambio de requerir mucho más tiempo, cómputo y experiencia en ML que usar un modelo preentrenado.</p>
            <div className="term-short"><b>En corto</b>Construir tu propio modelo desde cero con tus datos e infraestructura — en AWS, con SageMaker AI. Da control total, pero cuesta mucho más tiempo, cómputo y experiencia que usar uno preentrenado.</div>
          </div>

          <a className="back-to-top" href="#d1">↑ volver al Dominio 1</a>
        </div>

        <div className="gloss-group" id="gloss-d1-t3-b3">
          <span className="gloss-group-head">Dominio 1 · Task 1.3 · Bullet 3</span>
          <p className="gloss-bullet-text">"Describir métodos para poner un modelo en producción (servicio de API administrado, API auto-alojada)."</p>
          <p className="scope-note" style={{marginTop: '0.6rem'}}><strong>Nota:</strong> es una LISTA de 2 métodos de despliegue.</p>

          <div className="term-card">
            <h4>Servicio de API administrado (managed)</h4>
            <p>Es usar un modelo a través de una API que AWS opera y mantiene por ti — el ejemplo principal es Amazon Bedrock, que da acceso a foundation models mediante una API única e independiente del modelo, con la posibilidad de cambiar de modelo o subir de versión con cambios mínimos de código. La guía de decisión de AWS lo recomienda cuando quieres una solución "llave en mano" sin gestionar infraestructura, y cuando necesitas seguridad, privacidad e IA responsable ya incorporadas sin trabajo adicional.</p>
            <div className="term-short"><b>En corto</b>Usas el modelo a través de una API que AWS mantiene por ti (ej. Amazon Bedrock) — sin gestionar servidores ni infraestructura, pero con menos control sobre el hardware.</div>
          </div>

          <div className="term-card">
            <h4>API auto-alojada (self-hosted)</h4>
            <p>Es desplegar y operar tú mismo la infraestructura donde corre el modelo, típicamente con Amazon SageMaker AI (endpoints propios) o hardware especializado como AWS Trainium/Inferentia para cargas de inferencia de alto volumen y sensibles al costo. Da control total sobre el despliegue y permite optimizar el hardware para el caso específico, a cambio de que tú (o tu equipo) sean responsables de gestionar esa infraestructura.</p>
            <div className="term-short"><b>En corto</b>Tú despliegas y gestionas la infraestructura del modelo (ej. con SageMaker o hardware Trainium/Inferentia) — más control, pero más responsabilidad operativa.</div>
          </div>

          <a className="back-to-top" href="#d1">↑ volver al Dominio 1</a>
        </div>

        <div className="gloss-group" id="gloss-d1-t3-b4">
          <span className="gloss-group-head">Dominio 1 · Task 1.3 · Bullet 4</span>
          <p className="gloss-bullet-text">"Identificar los servicios y funciones de AWS relevantes en cada etapa del pipeline de IA/ML (Amazon Bedrock, Amazon Q, Amazon Quick, Kiro, SageMaker AI)."</p>
          <p className="scope-note" style={{marginTop: '0.6rem'}}><strong>Nota:</strong> es una LISTA de 5 servicios/herramientas de AWS.</p>

          <div className="term-card">
            <h4>Amazon Bedrock</h4>
            <p>Servicio totalmente administrado que da acceso seguro y de nivel empresarial a foundation models de las principales compañías de IA (Amazon Nova, Anthropic Claude, y otros), para construir y escalar aplicaciones de GenAI. Ofrece múltiples APIs, personalización de modelos (fine-tuning, preentrenamiento continuo, destilación), inferencia entre regiones y function calling. En el pipeline, cubre las etapas de selección de modelo, personalización y despliegue de aplicaciones de GenAI.</p>
            <div className="term-short"><b>En corto</b>Acceso administrado a foundation models de varios proveedores para construir apps de GenAI, con opciones de personalización y despliegue incluidas.</div>
          </div>

          <div className="term-card">
            <h4>Amazon Q</h4>
            <p>Es un asistente de IA generativa "construido a la medida" para distintos roles: para desarrolladores, ayuda a escribir, depurar, probar y desplegar código, y a modernizar aplicaciones; para usuarios de negocio, responde preguntas usando datos de la empresa, genera contenido y puede ejecutar acciones automatizadas; para analistas, arma dashboards y visualizaciones con lenguaje natural. AWS destaca que respeta los permisos e identidad de cada usuario: nadie accede, a través de Amazon Q, a datos que no podría ver de otra forma. En el pipeline, es más una herramienta de productividad alrededor del desarrollo y uso de soluciones de IA que una etapa formal del pipeline de entrenamiento.</p>
            <div className="term-short"><b>En corto</b>Asistente de IA generativa de AWS, especializado según el rol (desarrollo, negocio, análisis de datos), que respeta los permisos de cada usuario.</div>
          </div>

          <div className="term-card">
            <h4>Amazon Quick (Amazon Quick Suite)</h4>
            <p>Es la evolución de Amazon QuickSight hacia una suite de inteligencia de negocio potenciada por IA, anunciada en 2026. Incluye Quick Sight (dashboards y análisis tradicionales de BI), Quick Research (insights citados a partir de datos internos y públicos), Quick Flows (automatizaciones con lenguaje natural), Quick Automate (procesos de negocio de varios pasos) y Quick Index (una base de conocimiento compartida de los documentos y datos de la empresa) — todo accesible mediante una interfaz de chat en lenguaje natural (Quick chat). En el pipeline de IA/ML, se ubica del lado del "consumo": es donde el negocio usa los resultados, más que donde se entrena un modelo.</p>
            <div className="term-short"><b>En corto</b>Suite de AWS que combina BI tradicional (antes QuickSight) con IA generativa y agentes, para investigar datos, automatizar flujos y responder preguntas en lenguaje natural.</div>
          </div>

          <div className="term-card">
            <h4>Kiro</h4>
            <p>Es un entorno de desarrollo (IDE) agéntico de AWS, lanzado en 2025, enfocado en desarrollo "guiado por especificaciones" (spec-driven): en vez de solo generar código a partir de un prompt suelto ("vibe coding"), Kiro ayuda a planificar specs, tareas y arquitectura antes de escribir el código, usando agentes de IA a lo largo de todo el flujo. <em>Aviso de transparencia: al ser un producto muy reciente, la documentación oficial de AWS todavía es limitada comparada con servicios más maduros como SageMaker o Bedrock — esta descripción se basa en anuncios oficiales de AWS y cobertura técnica especializada, no en una página "what is" exhaustiva de docs.aws.amazon.com.</em></p>
            <div className="term-short"><b>En corto</b>IDE agéntico de AWS para desarrollo de software guiado por especificaciones, no solo por prompts sueltos. Documentación oficial aún limitada por ser un producto muy nuevo.</div>
          </div>

          <div className="term-card">
            <h4>SageMaker AI <em>(ver Task 1.2, Bullet 5)</em></h4>
            <p>Ya lo definimos como servicio central para construir, entrenar y desplegar modelos — en este bullet es la pieza que cubre las etapas de datos, entrenamiento, evaluación y despliegue del pipeline, a diferencia de Bedrock, Amazon Q o Amazon Quick, que se enfocan más en consumir/aplicar modelos ya existentes.</p>
            <div className="term-short"><b>En corto</b>Ver definición completa en Task 1.2, Bullet 5. Aquí, es la pieza del pipeline que cubre datos, entrenamiento, evaluación y despliegue de modelos propios.</div>
          </div>

          <a className="back-to-top" href="#d1">↑ volver al Dominio 1</a>
        </div>

        <div className="gloss-group" id="gloss-d1-t3-b5">
          <span className="gloss-group-head">Dominio 1 · Task 1.3 · Bullet 5</span>
          <p className="gloss-bullet-text">"Describir los conceptos fundamentales de MLOps (experimentación, procesos repetibles, sistemas escalables, gestión de deuda técnica, preparación para producción, monitoreo del modelo, reentrenamiento)."</p>
          <p className="scope-note" style={{marginTop: '0.6rem'}}><strong>Nota:</strong> es una LISTA de 7 conceptos de MLOps.</p>

          <div className="term-card">
            <h4>Experimentación</h4>
            <p>Es la fase donde los científicos de datos prueban distintos algoritmos, features y configuraciones antes de decidir cuál va a producción. AWS enmarca esto dentro de MLOps: cada versión de código de entrenamiento y especificación de modelo se revisa y versiona, para que los experimentos sean auditables y repetibles.</p>
            <div className="term-short"><b>En corto</b>Fase de prueba de distintos algoritmos y configuraciones antes de elegir el modelo final; en MLOps se versiona todo para poder repetir o auditar cada experimento.</div>
          </div>

          <div className="term-card">
            <h4>Procesos repetibles</h4>
            <p>Según AWS, versionar el código de entrenamiento y las especificaciones del modelo garantiza reproducibilidad: poder reproducir el mismo resultado (o revertir a una versión anterior) es uno de los principios centrales de MLOps.</p>
            <div className="term-short"><b>En corto</b>Poder repetir el mismo proceso de entrenamiento y obtener el mismo resultado (o revertir a una versión anterior) — clave para poder auditar y confiar en el modelo.</div>
          </div>

          <div className="term-card">
            <h4>Sistemas escalables</h4>
            <p>Se refiere a que la infraestructura de entrenamiento y de inferencia pueda crecer para manejar más datos, usuarios o solicitudes sin rediseñar todo desde cero. En AWS esto se logra automatizando cada etapa del pipeline (ingesta de datos, entrenamiento, despliegue) para que se activen automáticamente ante ciertos disparadores (nuevos datos, cambios en el código, eventos de monitoreo).</p>
            <div className="term-short"><b>En corto</b>La infraestructura de ML puede crecer para atender más datos o más tráfico sin tener que rediseñarse desde cero, apoyada en automatización.</div>
          </div>

          <div className="term-card">
            <h4>Gestión de deuda técnica</h4>
            <p>Es identificar y controlar los costos "ocultos" de mantener un sistema de ML en el tiempo — dependencias frágiles entre componentes, código de entrenamiento difícil de modificar, o pipelines mal documentados que hacen cada cambio más caro y riesgoso. <em>Nota de transparencia: no encontré una página oficial de AWS con una definición dedicada exactamente a este término; el concepto proviene del consenso estándar de ingeniería de ML (popularizado por el paper de Google "Hidden Technical Debt in Machine Learning Systems"), y encaja con la práctica de "gobernanza de modelos" que sí menciona la página oficial de AWS sobre MLOps.</em></p>
            <div className="term-short"><b>En corto</b>Los costos ocultos de mantener un sistema de ML mal documentado o mal versionado con el tiempo — cada cambio se vuelve más caro y riesgoso si no se gestiona.</div>
          </div>

          <div className="term-card">
            <h4>Preparación para producción</h4>
            <p>Es asegurarse de que un modelo no solo funcione bien en un notebook de prueba, sino que esté listo para operar de forma confiable en un entorno real: con pruebas de seguridad, revisión de sesgo, cumplimiento normativo, y la infraestructura de despliegue ya validada. AWS lo enmarca dentro de "gobernanza de modelos": colaboración entre científicos de datos, ingenieros y stakeholders, con mecanismos de revisión y verificación de cumplimiento antes de desplegar.</p>
            <div className="term-short"><b>En corto</b>Validar que el modelo (y todo lo que lo rodea: seguridad, sesgo, cumplimiento) esté realmente listo para operar en un entorno real, no solo en pruebas.</div>
          </div>

          <div className="term-card">
            <h4>Monitoreo del modelo</h4>
            <p>Una vez en producción, hay que seguir midiendo el desempeño del modelo y de los datos que recibe en tiempo real — esto es parte de lo que AWS llama "monitoreo continuo" dentro de MLOps, uno de los cuatro tipos de actividad "continua" (junto con integración, entrega y entrenamiento continuos).</p>
            <div className="term-short"><b>En corto</b>Medir continuamente cómo se desempeña el modelo ya en producción, para detectar caídas de exactitud o cambios en los datos de entrada.</div>
          </div>

          <div className="term-card">
            <h4>Reentrenamiento</h4>
            <p>Es volver a entrenar el modelo cuando su desempeño se degrada — por ejemplo, porque el comportamiento del mundo real cambió respecto a los datos originales de entrenamiento (esto se llama "drift"). AWS lo describe como "entrenamiento continuo" dentro de MLOps: reentrenar automáticamente el modelo cuando el monitoreo detecta que hace falta.</p>
            <div className="term-short"><b>En corto</b>Volver a entrenar el modelo cuando su desempeño baja porque los datos del mundo real cambiaron respecto al entrenamiento original.</div>
          </div>

          <a className="back-to-top" href="#d1">↑ volver al Dominio 1</a>
        </div>

        <div className="gloss-group" id="gloss-d1-t3-b6">
          <span className="gloss-group-head">Dominio 1 · Task 1.3 · Bullet 6</span>
          <p className="gloss-bullet-text">"Describir métricas de desempeño del modelo (accuracy, precisión, recall, F1) y métricas de negocio (costo por usuario, costos de desarrollo, feedback de clientes, ROI) para evaluar modelos de ML."</p>
          <p className="scope-note" style={{marginTop: '0.6rem'}}><strong>Nota:</strong> es una LISTA de 8 métricas (4 técnicas + 4 de negocio).</p>

          <div className="term-card">
            <h4>Accuracy (exactitud)</h4>
            <p>Según la documentación de Amazon SageMaker, es el porcentaje de predicciones correctas: la proporción entre el número de ítems predichos correctamente y el total de predicciones. Va de 0 a 1, donde 1 es exactitud perfecta.</p>
            <div className="term-short"><b>En corto</b>Porcentaje de predicciones correctas sobre el total. Ojo: puede ser engañosa si las clases están muy desbalanceadas.</div>
          </div>

          <div className="term-card">
            <h4>Precisión (precision)</h4>
            <p>Mide, de todas las veces que el modelo predijo una categoría X, en qué porcentaje acertó. Fórmula: Precisión = Verdaderos Positivos / (Verdaderos Positivos + Falsos Positivos). Es clave cuando el costo de un falso positivo es alto — el ejemplo que da AWS es un sistema de seguridad aérea que declara "seguro para volar" incorrectamente.</p>
            <div className="term-short"><b>En corto</b>De todo lo que el modelo marcó como positivo, qué porcentaje realmente lo era. Importa mucho cuando un falso positivo es costoso o peligroso.</div>
          </div>

          <div className="term-card">
            <h4>Recall (sensibilidad)</h4>
            <p>Mide qué porcentaje de todos los casos reales de una categoría el modelo logró identificar correctamente. Fórmula: Recall = Verdaderos Positivos / (Verdaderos Positivos + Falsos Negativos). AWS advierte que medir solo recall no es suficiente, porque predecir que todo es positivo daría un recall perfecto sin que el modelo sirva de nada.</p>
            <div className="term-short"><b>En corto</b>De todos los casos reales que existían, qué porcentaje detectó el modelo. Hay que mirarlo junto con precisión, no por separado.</div>
          </div>

          <div className="term-card">
            <h4>F1 score</h4>
            <p>Es la media armónica entre precisión y recall — una sola métrica balanceada que tiene en cuenta ambas a la vez y considera el balance entre clases. Fórmula: F1 = 2 × (precisión × recall) / (precisión + recall). Va de 0 (peor) a 1 (mejor desempeño posible).</p>
            <div className="term-short"><b>En corto</b>Combina precisión y recall en un solo número balanceado — útil cuando quieres un resumen único en vez de mirar las dos métricas por separado.</div>
          </div>

          <div className="term-card">
            <h4>Costo por usuario</h4>
            <p>Es cuánto cuesta, en promedio, atender a cada usuario con la solución de IA (cómputo de inferencia, almacenamiento, soporte) dividido entre el número de usuarios activos. Es una métrica de negocio, no técnica: dice si la solución es sostenible económicamente a medida que crece la base de usuarios, más allá de qué tan "exacto" sea el modelo. <em>Es un concepto de negocio estándar aplicado a IA, no una definición exclusiva de una página oficial de AWS.</em></p>
            <div className="term-short"><b>En corto</b>Cuánto cuesta atender a cada usuario con la solución de IA — mide si el negocio es sostenible al escalar, no la calidad técnica del modelo.</div>
          </div>

          <div className="term-card">
            <h4>Costos de desarrollo</h4>
            <p>Es la inversión total para construir la solución: datos (recolección, etiquetado, almacenamiento), cómputo de entrenamiento, tiempo del equipo de ciencia de datos/ingeniería, y herramientas o licencias. Se compara contra el valor que la solución genera para decidir si el proyecto se justifica (el "análisis costo-beneficio" del Task 1.2, Bullet 2).</p>
            <div className="term-short"><b>En corto</b>Todo lo que cuesta construir la solución de IA (datos, cómputo, equipo) — se compara contra el beneficio esperado para justificar el proyecto.</div>
          </div>

          <div className="term-card">
            <h4>Feedback de clientes</h4>
            <p>Es la retroalimentación directa de los usuarios reales sobre la solución — calificaciones, quejas, tickets de soporte, encuestas de satisfacción. Es una métrica de negocio porque un modelo puede tener buena accuracy técnica y aun así generar mala experiencia de usuario si sus errores caen en los casos que más le importan al cliente.</p>
            <div className="term-short"><b>En corto</b>Lo que opinan los usuarios reales de la solución — puede revelar problemas que las métricas técnicas (accuracy, F1) no capturan.</div>
          </div>

          <div className="term-card">
            <h4>ROI (retorno de inversión)</h4>
            <p>Mide cuánto valor económico genera la solución de IA en relación a lo que costó construirla y mantenerla (ahorro de horas de trabajo manual, aumento de ventas, reducción de fraude) dividido entre el costo total. Es, junto con el costo por usuario y los costos de desarrollo, una de las métricas que finalmente decide si un proyecto de IA se mantiene, se escala o se cancela — independientemente de qué tan buenas sean sus métricas técnicas.</p>
            <div className="term-short"><b>En corto</b>Cuánto valor económico genera la solución comparado con lo que costó — la métrica final que decide si el proyecto de IA se mantiene o se cancela.</div>
          </div>

          <a className="back-to-top" href="#d1">↑ volver al Dominio 1</a>
        </div>

        <div className="gloss-group" id="gloss-d2-t1-b1">
          <span className="gloss-group-head">Dominio 2 · Task 2.1 · Bullet 1</span>
          <p className="gloss-bullet-text">"Definir conceptos fundamentales de GenAI (tokens, chunking, embeddings, vectores, prompt engineering, LLMs basados en transformers, FMs, modelos multimodales, modelos de difusión)."</p>
          <p className="scope-note" style={{marginTop: '0.6rem'}}><strong>Nota:</strong> es una LISTA de 9 conceptos.</p>

          <div className="term-card">
            <h4>Tokens</h4>
            <p>Un token es la unidad mínima de texto que un LLM procesa — puede ser una palabra completa, parte de una palabra, o un signo de puntuación, según cómo el modelo divida el texto (tokenización). AWS cobra el uso de sus modelos en Amazon Bedrock precisamente en función de tokens de entrada y de salida: por ejemplo, Claude 3.5 Sonnet se cobra por millón de tokens de entrada y por millón de tokens de salida, cada uno a un precio distinto. <em>Nota de transparencia: no encontré una página "What is" dedicada de AWS que defina "token" de forma aislada; esta definición combina el consenso técnico estándar con cómo AWS efectivamente lo usa (y cobra por él) en Bedrock.</em></p>
            <div className="term-short"><b>En corto</b>La unidad mínima de texto que procesa un LLM (palabra, parte de palabra o símbolo). AWS cobra por los tokens de entrada y salida que consume cada llamada al modelo.</div>
          </div>

          <div className="term-card">
            <h4>Chunking</h4>
            <p>Es el proceso de dividir documentos o contenido en fragmentos ("chunks") manejables antes de convertirlos en embeddings, típicamente al ingerir datos en una base de conocimiento. Según AWS, Bedrock primero divide los documentos en chunks, los convierte en embeddings, y los guarda en un índice vectorial manteniendo el mapeo al documento original. Existe un balance importante: fragmentos pequeños son más precisos para la búsqueda semántica, pero generar respuestas necesita contexto suficientemente amplio — por eso existen estrategias como el "chunking jerárquico", que reemplaza fragmentos pequeños recuperados por sus fragmentos "padre" más completos cuando hace falta más contexto.</p>
            <div className="term-short"><b>En corto</b>Dividir documentos en fragmentos manejables antes de convertirlos en embeddings para una base de conocimiento. El balance clave: fragmentos pequeños = más precisión; fragmentos grandes = más contexto.</div>
          </div>

          <div className="term-card">
            <h4>Embeddings</h4>
            <p>Son representaciones numéricas (vectores) que capturan el significado y el contexto de un dato —texto, imagen, audio— de forma que se puedan comparar cuantitativamente. AWS lo resume así: "los embeddings codifican todo tipo de datos en vectores que capturan el significado y el contexto de un activo", lo que permite búsquedas por similitud (encontrar los puntos de datos "vecinos" en el espacio vectorial).</p>
            <div className="term-short"><b>En corto</b>Representación numérica de un dato (texto, imagen, audio) que captura su significado, permitiendo comparar qué tan parecidos son dos elementos.</div>
          </div>

          <div className="term-card">
            <h4>Vectores</h4>
            <p>Es la forma matemática en la que se representa un embedding: una lista ordenada de números (por ejemplo, 768 o 1536 dimensiones) que ubica ese dato como un punto en un espacio de alta dimensión. Los datos con significado parecido quedan ubicados cerca uno del otro en ese espacio. Se guardan en bases de datos vectoriales (como Amazon OpenSearch Service, la recomendada por AWS para Bedrock), que ofrecen búsqueda eficiente de "vecinos más cercanos" (k-NN) usando algoritmos como HNSW o IVF.</p>
            <div className="term-short"><b>En corto</b>La lista de números que representa un embedding, ubicándolo como un punto en un espacio de alta dimensión — datos parecidos quedan cerca entre sí. Se guardan en bases de datos vectoriales como Amazon OpenSearch Service.</div>
          </div>

          <div className="term-card">
            <h4>Prompt engineering</h4>
            <p>Es la práctica de diseñar y redactar las instrucciones (prompts) que se le dan a un FM para obtener la respuesta deseada. Este bullet solo pide definir el concepto; el Dominio 3 del examen (Task 3.2) lo cubre a fondo con técnicas específicas (chain-of-thought, few-shot, etc.), que desarrollaremos ahí en detalle.</p>
            <div className="term-short"><b>En corto</b>Diseñar y redactar las instrucciones que se le dan a un modelo para obtener la respuesta deseada. Se cubre a fondo más adelante, en el Dominio 3.</div>
          </div>

          <div className="term-card">
            <h4>LLMs basados en transformers</h4>
            <p>Ya definimos "LLM" en el Bullet 1 del Dominio 1; aquí el examen agrega el detalle arquitectónico: los LLMs modernos están construidos sobre la arquitectura transformer, que usa un mecanismo de "atención" (self-attention) para procesar una secuencia de texto completa en paralelo, en vez de palabra por palabra, entendiendo cómo se relacionan entre sí las palabras de una oración sin importar qué tan lejos estén una de otra. Ese procesamiento en paralelo es lo que permitió escalar los modelos a cientos de miles de millones de parámetros.</p>
            <div className="term-short"><b>En corto</b>LLM = modelo de deep learning enorme; "basado en transformers" es la arquitectura específica (con mecanismo de atención) que le permite procesar texto en paralelo y relacionar palabras distantes entre sí.</div>
          </div>

          <div className="term-card">
            <h4>FMs (foundation models)</h4>
            <p>AWS los define como "grandes redes neuronales de deep learning" entrenadas sobre conjuntos de datos masivos, que sirven como punto de partida para desarrollar modelos de ML más rápido y de forma más económica que construir uno desde cero. La diferencia clave frente al ML tradicional: mientras un modelo tradicional suele resolver una tarea específica (analizar sentimiento, clasificar imágenes), un FM tiene "adaptabilidad" para resolver una amplia variedad de tareas distintas con buena exactitud, sin haber sido entrenado específicamente para cada una.</p>
            <div className="term-short"><b>En corto</b>Redes neuronales de deep learning muy grandes, entrenadas con datos masivos, que sirven como base adaptable para muchas tareas distintas — a diferencia de un modelo de ML tradicional, entrenado para una sola tarea.</div>
          </div>

          <div className="term-card">
            <h4>Modelos multimodales</h4>
            <p>Son modelos capaces de procesar y/o generar más de un tipo de dato a la vez —texto, imagen, audio, video— en vez de especializarse en uno solo. AWS pone como ejemplo el modelo Titan Multimodal Embeddings G1, que traduce tanto texto como imágenes a un mismo espacio de embeddings que captura el significado semántico de ambos, permitiendo por ejemplo buscar imágenes usando una descripción en texto.</p>
            <div className="term-short"><b>En corto</b>Modelos que procesan o generan más de un tipo de dato a la vez (texto, imagen, audio, video), en vez de especializarse en uno solo.</div>
          </div>

          <div className="term-card">
            <h4>Modelos de difusión</h4>
            <p>Son un tipo de modelo generativo (usado sobre todo para generar imágenes) que aprende a crear contenido revirtiendo gradualmente un proceso de "ruido": durante el entrenamiento se le enseña a partir de una imagen con ruido añadido progresivamente hasta volverse ruido puro, y luego aprende el proceso inverso — partir de ruido puro e ir "limpiándolo" paso a paso hasta obtener una imagen coherente. AWS menciona modelos como Stable Diffusion XL y Titan Image Generator v2 como ejemplos orientados a tareas de visión dentro de Amazon Bedrock. <em>Nota: la página oficial de AWS revisada no explica el mecanismo técnico interno del proceso de difusión en detalle — esa parte es consenso técnico estándar del campo.</em></p>
            <div className="term-short"><b>En corto</b>Modelos generativos (usados sobre todo para imágenes) que aprenden a crear contenido revirtiendo un proceso de "ruido" paso a paso. Ejemplos en AWS Bedrock: Stable Diffusion XL, Titan Image Generator v2.</div>
          </div>

          <a className="back-to-top" href="#d2">↑ volver al Dominio 2</a>
        </div>

        <div className="gloss-group" id="gloss-d2-t1-b2">
          <span className="gloss-group-head">Dominio 2 · Task 2.1 · Bullet 2</span>
          <p className="gloss-bullet-text">"Identificar posibles casos de uso para modelos de GenAI (generación de imagen/video/audio, resumen, asistentes de IA, traducción, generación de código, agentes de servicio al cliente, búsqueda, motores de recomendación)."</p>
          <p className="scope-note" style={{marginTop: '0.6rem'}}><strong>Nota:</strong> es una LISTA de 8 casos de uso.</p>

          <div className="term-card">
            <h4>Generación de imagen/video/audio</h4>
            <p>Crear contenido visual o sonoro nuevo a partir de una descripción en texto u otro input — por ejemplo, una imagen de producto para marketing, un clip de video corto, o música de fondo. En AWS, se hace con modelos como Stable Diffusion XL o Titan Image Generator disponibles en Amazon Bedrock.</p>
            <div className="term-short"><b>En corto</b>Crear imágenes, videos o audio nuevos a partir de una descripción — en AWS, con modelos como Stable Diffusion XL o Titan Image Generator en Bedrock.</div>
          </div>

          <div className="term-card">
            <h4>Resumen</h4>
            <p>Condensar un documento, artículo o conversación larga en una versión más corta que conserve la información clave. Es una de las aplicaciones más comunes de los LLMs, y también una de las más sensibles a alucinaciones si no se controla con técnicas de grounding (Dominio 5) para evitar que el resumen invente datos que no estaban en el original.</p>
            <div className="term-short"><b>En corto</b>Condensar textos largos en versiones cortas que conserven lo esencial — muy sensible a alucinaciones si no se controla bien.</div>
          </div>

          <div className="term-card">
            <h4>Asistentes de IA</h4>
            <p>Sistemas conversacionales que ayudan a una persona a realizar tareas usando lenguaje natural — desde responder preguntas hasta ejecutar acciones. En AWS, el ejemplo directo es Amazon Q (ya visto en el Dominio 1), con versiones especializadas para desarrolladores, negocio y análisis de datos.</p>
            <div className="term-short"><b>En corto</b>Sistemas conversacionales que ayudan a realizar tareas en lenguaje natural — en AWS, el ejemplo es Amazon Q.</div>
          </div>

          <div className="term-card">
            <h4>Traducción</h4>
            <p>Convertir texto o voz de un idioma a otro. Ya vimos el servicio dedicado de AWS para esto, Amazon Translate, que usa ML avanzado (y cada vez más FMs) para traducción de alta calidad bajo demanda.</p>
            <div className="term-short"><b>En corto</b>Convertir texto o voz entre idiomas — en AWS, el servicio dedicado es Amazon Translate.</div>
          </div>

          <div className="term-card">
            <h4>Generación de código</h4>
            <p>Usar un FM para escribir, completar, depurar o explicar código a partir de instrucciones en lenguaje natural o del contexto de un proyecto existente. En AWS, es el corazón de Amazon Q Developer y de Kiro, el IDE agéntico de AWS que ya vimos en el Dominio 1.</p>
            <div className="term-short"><b>En corto</b>Escribir, completar o depurar código a partir de instrucciones en lenguaje natural — en AWS, Amazon Q Developer y Kiro.</div>
          </div>

          <div className="term-card">
            <h4>Agentes de servicio al cliente</h4>
            <p>Sistemas de GenAI (a veces agénticos) que atienden consultas de clientes en lenguaje natural, ya sea redactando respuestas para que un humano las revise o —si son agénticos— resolviendo la solicitud de punta a punta (por ejemplo, procesar una devolución). En AWS se construyen combinando Amazon Lex o Bedrock para la conversación con Bedrock AgentCore o Strands Agents para la parte agéntica.</p>
            <div className="term-short"><b>En corto</b>Sistemas de GenAI que atienden consultas de clientes en lenguaje natural, desde redactar respuestas hasta resolver la solicitud completa si son agénticos.</div>
          </div>

          <div className="term-card">
            <h4>Búsqueda</h4>
            <p>Usar embeddings y bases de datos vectoriales para buscar por significado (búsqueda semántica) en vez de solo por coincidencia exacta de palabras — por ejemplo, encontrar el documento correcto aunque la pregunta del usuario use palabras distintas a las del documento. Es la base técnica de RAG y de las bases de conocimiento que ya vimos en el Dominio 1.</p>
            <div className="term-short"><b>En corto</b>Buscar por significado (no solo por palabra exacta) usando embeddings y bases de datos vectoriales — la base técnica de RAG.</div>
          </div>

          <div className="term-card">
            <h4>Motores de recomendación <em>(ver Dominio 1)</em></h4>
            <p>Ya vimos este caso de uso en el Dominio 1 con Amazon Personalize; lo que agrega la GenAI es la posibilidad de generar explicaciones en lenguaje natural de por qué se recomienda algo, o combinar preferencias expresadas en texto libre (no solo clics e historial) para generar la recomendación.</p>
            <div className="term-short"><b>En corto</b>Ver definición completa en el Dominio 1 (Amazon Personalize). La GenAI le suma explicaciones en lenguaje natural o preferencias expresadas en texto libre.</div>
          </div>

          <a className="back-to-top" href="#d2">↑ volver al Dominio 2</a>
        </div>

        <div className="gloss-group" id="gloss-d2-t1-b3">
          <span className="gloss-group-head">Dominio 2 · Task 2.1 · Bullet 3</span>
          <p className="gloss-bullet-text">"Describir el ciclo de vida de un FM (selección de datos, selección del modelo, preentrenamiento, fine-tuning, evaluación, despliegue, retroalimentación)."</p>
          <p className="scope-note" style={{marginTop: '0.6rem'}}><strong>Nota:</strong> es UNA idea única — las etapas secuenciales de un mismo proceso, no términos independientes.</p>

          <div className="term-card">
            <h4>El ciclo de vida de un foundation model</h4>
            <p><strong>Selección de datos:</strong> reunir y curar el conjunto de datos masivo con el que se entrenará el modelo — su calidad y diversidad determinan directamente la calidad del modelo final. <strong>Selección del modelo:</strong> decidir la arquitectura (casi siempre transformer) y el tamaño del modelo según el balance deseado entre capacidad y costo. <strong>Preentrenamiento:</strong> la fase más costosa, donde el modelo aprende patrones generales del lenguaje o la modalidad de datos usando esos datos masivos, normalmente sin etiquetas explícitas. <strong>Fine-tuning:</strong> ajustar ese modelo preentrenado con un dataset más pequeño y específico (a menudo etiquetado) para especializarlo en una tarea o dominio concreto — es opcional y ocurre después de que el FM base ya existe.</p>
            <p><strong>Evaluación:</strong> medir el desempeño del modelo con benchmarks, evaluación humana, o servicios como Amazon Bedrock Model Evaluation (lo veremos a fondo en el Dominio 3), antes de confiar en él. <strong>Despliegue:</strong> poner el modelo a disposición de una aplicación real, vía una API administrada como Amazon Bedrock, o auto-alojado con Amazon SageMaker AI. <strong>Retroalimentación:</strong> recolectar señales de cómo se desempeña el modelo en producción (correcciones de usuarios, RLHF, métricas de negocio) que alimentan la siguiente ronda de fine-tuning o de preentrenamiento continuo, cerrando el ciclo en vez de terminar en el despliegue.</p>
            <div className="term-short"><b>En corto</b>El ciclo de vida de un FM va desde seleccionar los datos y el modelo base, pasando por preentrenamiento (aprendizaje general masivo) y fine-tuning opcional (especialización), hasta evaluación y despliegue — y la retroalimentación de esa etapa final vuelve a alimentar el ciclo, en vez de terminar ahí.</div>
          </div>

          <a className="back-to-top" href="#d2">↑ volver al Dominio 2</a>
        </div>

        <div className="gloss-group" id="gloss-d2-t1-b4">
          <span className="gloss-group-head">Dominio 2 · Task 2.1 · Bullet 4</span>
          <p className="gloss-bullet-text">"Describir el modelo de precios basado en tokens y su efecto en el costo y desempeño de la inferencia."</p>
          <p className="scope-note" style={{marginTop: '0.6rem'}}><strong>Nota:</strong> es UNA idea única sobre el precio por token y sus efectos.</p>

          <div className="term-card">
            <h4>El modelo de precios basado en tokens</h4>
            <p>En Amazon Bedrock, el modelo de precios estándar (on-demand) cobra por millón de tokens procesados, con un precio distinto para tokens de entrada y de salida — por ejemplo, Claude 3.5 Sonnet cuesta 6 USD por millón de tokens de entrada y 30 USD por millón de tokens de salida en el tier estándar. El costo de una sola llamada depende directamente de cuánto texto envías (el prompt, incluyendo cualquier documento adjunto) y cuánto texto genera el modelo como respuesta.</p>
            <p><strong>Efecto en el costo:</strong> un prompt más largo, o pedir respuestas más extensas, incrementa el costo de forma proporcional — prácticas como resumir el contexto antes de enviarlo, o limitar la longitud de la respuesta esperada, tienen un impacto económico directo, no solo de calidad. <strong>Efecto en el desempeño:</strong> más tokens de entrada también significan más latencia, porque el modelo debe "leer" y prestar atención a cada token del contexto antes de generar la respuesta. AWS ofrece tiers alternativos para ajustar ese balance: "Priority" cobra un recargo del 75% por menor latencia garantizada, mientras "Flex" y "Batch" ofrecen 50% de descuento a cambio de aceptar más latencia.</p>
            <p><strong>Alternativa:</strong> en vez de pagar por token (on-demand), Bedrock ofrece "provisioned throughput": pagar una tarifa fija por hora por capacidad reservada, con descuentos según el plazo de compromiso (un modelo Llama 2 de 13B cuesta 21.18 USD/hora con compromiso de 1 mes, contra 13.08 USD/hora con compromiso de 6 meses) — conviene con volumen alto y predecible, porque diluye el costo por token a cambio de comprometerse a pagar esa capacidad exista o no la uses por completo.</p>
            <div className="term-short"><b>En corto</b>Bedrock cobra por millón de tokens de entrada y de salida (a precios distintos), así que un prompt más largo o una respuesta más extensa cuestan más y tardan más. AWS ofrece tiers (Priority, Flex, Batch) para ajustar costo/latencia, y "provisioned throughput" (tarifa fija por capacidad reservada) para volumen alto y predecible.</div>
          </div>

          <a className="back-to-top" href="#d2">↑ volver al Dominio 2</a>
        </div>

        <div className="gloss-group" id="gloss-d2-t1-b5">
          <span className="gloss-group-head">Dominio 2 · Task 2.1 · Bullet 5</span>
          <p className="gloss-bullet-text">"Describir el rol de la ingeniería de contexto en aplicaciones basadas en FMs."</p>
          <p className="scope-note" style={{marginTop: '0.6rem'}}><strong>Nota:</strong> es UNA idea única. <em>No encontré una página oficial "What is Context Engineering" de AWS dedicada a este término — es relativamente nuevo en la industria (2025-2026) y la propia guía del examen lo introduce sin remitir a un glosario específico. Esta explicación refleja el consenso técnico estándar, usado de forma consistente en la industria.</em></p>

          <div className="term-card">
            <h4>El rol de la ingeniería de contexto</h4>
            <p>La ingeniería de contexto es la disciplina de diseñar y gestionar todo lo que un FM "ve" al momento de generar una respuesta —no solo la instrucción textual del usuario (eso es prompt engineering), sino también el historial de la conversación, documentos recuperados vía RAG, resultados de llamadas a herramientas, memoria de interacciones pasadas, y las instrucciones de sistema— de forma que el modelo tenga exactamente la información relevante que necesita, ni de más ni de menos, para responder bien.</p>
            <p>Su rol es especialmente crítico en aplicaciones agénticas: un agente que usa múltiples herramientas y mantiene memoria a lo largo de una tarea larga puede saturar fácilmente la ventana de contexto del modelo (el límite de tokens que puede procesar a la vez) con información irrelevante o desactualizada, lo que degrada la calidad de sus respuestas y aumenta el costo (más tokens de entrada = más costo, como vimos en el Bullet 4). Servicios como Amazon Bedrock AgentCore Memory existen precisamente para ayudar a gestionar qué información de memoria a corto y largo plazo se entrega al modelo en cada paso.</p>
            <div className="term-short"><b>En corto</b>Diseñar qué información completa (no solo la instrucción del usuario) recibe el modelo en cada llamada — historial, documentos recuperados, resultados de herramientas, memoria — para que responda bien sin saturar su ventana de contexto ni disparar el costo. Es especialmente crítica en aplicaciones agénticas.</div>
          </div>

          <a className="back-to-top" href="#d2">↑ volver al Dominio 2</a>
        </div>

        <div className="gloss-group" id="gloss-d2-t1-b6">
          <span className="gloss-group-head">Dominio 2 · Task 2.1 · Bullet 6</span>
          <p className="gloss-bullet-text">"Definir conceptos fundamentales de IA agéntica (patrones de sistemas multiagente, Model Context Protocol [MCP] y su rol conectando agentes con sistemas externos, patrones de comunicación entre agentes, gestión de memoria, uso de herramientas, orquestación de flujos de trabajo)."</p>
          <p className="scope-note" style={{marginTop: '0.6rem'}}><strong>Nota:</strong> es una LISTA de 6 conceptos de IA agéntica.</p>

          <div className="term-card">
            <h4>Patrones de sistemas multiagente</h4>
            <p>Son las distintas formas de organizar varios agentes de IA para que colaboren en una tarea, en vez de depender de un solo agente que lo haga todo. AWS, a través de su SDK open source Strands Agents, ofrece patrones nativos como Swarm (varios agentes trabajando en paralelo sobre partes del problema), Graph (agentes conectados en una estructura definida donde el resultado de uno alimenta a otro) y Workflow (una secuencia de pasos coordinada entre agentes).</p>
            <div className="term-short"><b>En corto</b>Formas de organizar varios agentes para colaborar en una tarea — en AWS (Strands Agents), los patrones nativos son Swarm, Graph y Workflow.</div>
          </div>

          <div className="term-card">
            <h4>Model Context Protocol (MCP) y su rol conectando agentes con sistemas externos</h4>
            <p>MCP es un estándar abierto (creado por Anthropic) para conectar aplicaciones de IA a sistemas externos: fuentes de datos (archivos locales, bases de datos), herramientas (buscadores, calculadoras) y flujos de trabajo (prompts especializados). La documentación oficial de MCP lo compara con un "puerto USB-C para aplicaciones de IA": así como USB-C estandariza cómo se conectan los dispositivos electrónicos, MCP estandariza cómo un agente se conecta a herramientas y datos externos, sin construir una integración a medida para cada sistema. AWS lo identifica como uno de los protocolos de comunicación entre agentes emergiendo como estándar (junto con Agent2Agent/A2A), y servicios como Amazon Bedrock AgentCore Gateway convierten APIs y funciones Lambda existentes en herramientas compatibles con MCP.</p>
            <div className="term-short"><b>En corto</b>Estándar abierto que conecta un agente de IA con herramientas y fuentes de datos externas de forma estandarizada — como un "USB-C para IA". En AWS, Bedrock AgentCore Gateway lo usa para exponer APIs existentes como herramientas MCP.</div>
          </div>

          <div className="term-card">
            <h4>Patrones de comunicación entre agentes</h4>
            <p>Son las formas en que distintos agentes se pasan información o coordinan su trabajo entre sí — por ejemplo, un agente "orquestador" que reparte subtareas a agentes "trabajadores" y luego combina sus resultados. Más allá de MCP (que conecta un agente con herramientas y datos), existen protocolos específicamente para que agentes se comuniquen entre sí, como Agent2Agent (A2A), mencionado por AWS como protocolo abierto emergente junto a MCP.</p>
            <div className="term-short"><b>En corto</b>Las formas en que distintos agentes se pasan información o coordinan tareas entre sí — protocolos como Agent2Agent (A2A) están emergiendo como estándar para esto, junto a MCP.</div>
          </div>

          <div className="term-card">
            <h4>Gestión de memoria</h4>
            <p>Es la capacidad de un agente de recordar información entre distintos pasos de una tarea (memoria de corto plazo, dentro de una misma conversación) o entre distintas sesiones (memoria de largo plazo, por ejemplo recordar preferencias de un usuario en interacciones futuras). En AWS, Amazon Bedrock AgentCore incluye un servicio dedicado, "Memory", específicamente para dar a los agentes memoria de corto y largo plazo consciente del contexto.</p>
            <div className="term-short"><b>En corto</b>Que un agente recuerde información entre pasos de una tarea (corto plazo) o entre sesiones distintas (largo plazo). En AWS, el servicio dedicado es Amazon Bedrock AgentCore Memory.</div>
          </div>

          <div className="term-card">
            <h4>Uso de herramientas</h4>
            <p>Es la capacidad de un agente de invocar funciones externas —buscar en internet, consultar una base de datos, ejecutar código, llamar a una API de negocio— en vez de limitarse a generar texto. En AWS, esto se habilita mediante function calling en Bedrock, el ecosistema de herramientas de Strands Agents, o AgentCore Gateway (que convierte APIs y funciones Lambda en herramientas invocables de forma estandarizada, normalmente vía MCP).</p>
            <div className="term-short"><b>En corto</b>Que un agente pueda invocar funciones externas (buscar, consultar datos, ejecutar código) en vez de solo generar texto. En AWS: function calling en Bedrock, o AgentCore Gateway para exponer APIs como herramientas.</div>
          </div>

          <div className="term-card">
            <h4>Orquestación de flujos de trabajo</h4>
            <p>Es coordinar la secuencia de pasos, decisiones y llamadas a agentes/herramientas que componen una tarea compleja de principio a fin — decidir qué pasa primero, qué pasa en paralelo, y qué hacer si un paso falla. En AWS, es uno de los patrones nativos de Strands Agents ("Workflow"), y a nivel de plataforma, Amazon Bedrock AgentCore Runtime ofrece el entorno de ejecución serverless donde esos flujos corren de forma segura y con arranques en frío rápidos.</p>
            <div className="term-short"><b>En corto</b>Coordinar la secuencia de pasos y decisiones de una tarea compleja de principio a fin. En AWS: el patrón "Workflow" de Strands Agents, ejecutado sobre Amazon Bedrock AgentCore Runtime.</div>
          </div>

          <a className="back-to-top" href="#d2">↑ volver al Dominio 2</a>
        </div>

        <div className="gloss-group" id="gloss-d2-t2-b1">
          <span className="gloss-group-head">Dominio 2 · Task 2.2 · Bullet 1</span>
          <p className="gloss-bullet-text">"Describir las ventajas de la GenAI (adaptabilidad, capacidad de respuesta, capacidades conversacionales, generación de contenido)."</p>
          <p className="scope-note" style={{marginTop: '0.6rem'}}><strong>Nota:</strong> es una LISTA de 4 ventajas de la GenAI.</p>

          <div className="term-card">
            <h4>Adaptabilidad</h4>
            <p>Un mismo foundation model puede aplicarse a una gran variedad de tareas y dominios distintos (resumir, traducir, programar, responder preguntas) sin tener que entrenar un modelo especializado para cada una. Además, un FM puede ajustarse a un caso de uso específico mediante prompt engineering o fine-tuning, sin rehacer el entrenamiento desde cero.</p>
            <div className="term-short"><b>En corto</b>Un mismo FM sirve para muchas tareas distintas y puede ajustarse a un caso de uso concreto sin reentrenarse desde cero.</div>
          </div>

          <div className="term-card">
            <h4>Capacidad de respuesta (responsiveness)</h4>
            <p>Se refiere a la velocidad con la que un modelo de GenAI genera una salida ante una entrada del usuario. Los FMs modernos pueden producir respuestas en tiempo casi real, lo que habilita experiencias interactivas como chatbots o asistentes conversacionales.</p>
            <div className="term-short"><b>En corto</b>La velocidad con la que un FM entrega su respuesta — suficientemente rápida en muchos casos para sostener una conversación en tiempo real.</div>
          </div>

          <div className="term-card">
            <h4>Capacidades conversacionales</h4>
            <p>Los FMs pueden mantener un intercambio de ida y vuelta con un usuario, entendiendo el contexto de mensajes previos dentro de la misma conversación (gracias a la ventana de contexto) y respondiendo de forma coherente con lenguaje natural, lo cual habilita chatbots y asistentes virtuales.</p>
            <div className="term-short"><b>En corto</b>Un FM puede sostener un diálogo de varios turnos, entendiendo el contexto de mensajes anteriores y respondiendo en lenguaje natural.</div>
          </div>

          <div className="term-card">
            <h4>Generación de contenido</h4>
            <p>Es la capacidad central de la GenAI: crear contenido nuevo y original (texto, imágenes, audio, video, código) a partir de una instrucción (prompt), en vez de solo clasificar o predecir sobre datos existentes como hacía el ML tradicional.</p>
            <div className="term-short"><b>En corto</b>La capacidad de crear contenido nuevo (texto, imagen, audio, video, código) a partir de un prompt — la diferencia central frente al ML tradicional.</div>
          </div>

          <a className="back-to-top" href="#d2">↑ volver al Dominio 2</a>
        </div>

        <div className="gloss-group" id="gloss-d2-t2-b2">
          <span className="gloss-group-head">Dominio 2 · Task 2.2 · Bullet 2</span>
          <p className="gloss-bullet-text">"Identificar las desventajas de las soluciones de GenAI (alucinaciones, interpretabilidad, imprecisión, no determinismo)."</p>
          <p className="scope-note" style={{marginTop: '0.6rem'}}><strong>Nota:</strong> es una LISTA de 4 desventajas de la GenAI.</p>

          <div className="term-card">
            <h4>Alucinaciones</h4>
            <p>Ocurren cuando un FM genera contenido que suena convincente y coherente pero es incorrecto, inventado o no está fundamentado en los datos reales — por ejemplo, citar una fuente que no existe. AWS lo reconoce explícitamente como un riesgo inherente de los LLMs, y propone técnicas de grounding (como RAG) y validación de salidas para mitigarlo.</p>
            <div className="term-short"><b>En corto</b>Cuando un FM genera información falsa o inventada mostrándola como si fuera correcta; se mitiga con grounding (p. ej. RAG) y validación de salidas.</div>
          </div>

          <div className="term-card">
            <h4>Interpretabilidad</h4>
            <p>Es la dificultad de explicar por qué un FM llegó a una salida específica. A diferencia de modelos de ML más simples (como árboles de decisión), los FMs son modelos de "caja negra" con miles de millones de parámetros, lo que dificulta auditar o justificar sus respuestas — un problema relevante en industrias reguladas.</p>
            <div className="term-short"><b>En corto</b>Los FMs son modelos de "caja negra": es difícil explicar por qué generaron una salida específica, lo cual complica su uso en contextos regulados.</div>
          </div>

          <div className="term-card">
            <h4>Imprecisión</h4>
            <p>Incluso sin llegar a "alucinar" del todo, un FM puede dar respuestas parcialmente incorrectas, desactualizadas o de baja calidad, especialmente en tareas que requieren precisión numérica, razonamiento exacto o conocimiento muy reciente o muy especializado que no estaba bien representado en sus datos de entrenamiento.</p>
            <div className="term-short"><b>En corto</b>Un FM puede dar respuestas parcialmente incorrectas o de baja calidad, sobre todo en tareas que exigen exactitud o conocimiento muy especializado/reciente.</div>
          </div>

          <div className="term-card">
            <h4>No determinismo</h4>
            <p>Ante el mismo prompt exacto, un FM puede generar respuestas distintas en distintas ejecuciones, porque su proceso de generación incluye muestreo probabilístico (controlado por parámetros como la "temperatura"). Esto contrasta con software tradicional, donde la misma entrada siempre produce la misma salida, y complica pruebas y reproducibilidad.</p>
            <div className="term-short"><b>En corto</b>El mismo prompt puede producir respuestas distintas en ejecuciones distintas, porque la generación es probabilística — a diferencia del software tradicional.</div>
          </div>

          <a className="back-to-top" href="#d2">↑ volver al Dominio 2</a>
        </div>

        <div className="gloss-group" id="gloss-d2-t2-b3">
          <span className="gloss-group-head">Dominio 2 · Task 2.2 · Bullet 3</span>
          <p className="gloss-bullet-text">"Identificar factores a considerar al elegir modelos de GenAI (tipo de modelo, requisitos de desempeño, capacidades, restricciones, cumplimiento normativo, costo, latencia, complejidad del modelo)."</p>
          <p className="scope-note" style={{marginTop: '0.6rem'}}><strong>Nota:</strong> es una LISTA de 8 factores de decisión.</p>

          <div className="term-card">
            <h4>Tipo de modelo</h4>
            <p>Si el caso de uso necesita un modelo de texto, de imagen, multimodal, de embeddings, etc. — el "tipo" determina de entrada qué familia de FMs es candidata.</p>
            <div className="term-short"><b>En corto</b>Qué clase de modelo hace falta (texto, imagen, multimodal, embeddings) según la tarea.</div>
          </div>

          <div className="term-card">
            <h4>Requisitos de desempeño (performance)</h4>
            <p>Qué tan bien necesita resolver la tarea el modelo en métricas relevantes (calidad de las respuestas, precisión, coherencia) para el caso de uso específico.</p>
            <div className="term-short"><b>En corto</b>Qué tan bien tiene que resolver la tarea concreta el modelo, medido con métricas de calidad relevantes.</div>
          </div>

          <div className="term-card">
            <h4>Capacidades</h4>
            <p>Las funciones concretas que ofrece el modelo: tamaño de la ventana de contexto, soporte multimodal, function calling/uso de herramientas, idiomas soportados, etc.</p>
            <div className="term-short"><b>En corto</b>Las funciones específicas que el modelo soporta: ventana de contexto, multimodalidad, function calling, idiomas.</div>
          </div>

          <div className="term-card">
            <h4>Restricciones</h4>
            <p>Limitaciones técnicas u operativas del modelo o del entorno donde se despliega — por ejemplo límites de tokens, disponibilidad regional, o restricciones de infraestructura del cliente.</p>
            <div className="term-short"><b>En corto</b>Limitaciones técnicas u operativas que acotan qué modelos son viables (tokens, región, infraestructura disponible).</div>
          </div>

          <div className="term-card">
            <h4>Cumplimiento normativo (compliance)</h4>
            <p>Si el modelo y el servicio que lo hospeda cumplen con las regulaciones aplicables a la industria o región (por ejemplo HIPAA en salud, GDPR en la UE), algo especialmente relevante al mover datos sensibles a un FM.</p>
            <div className="term-short"><b>En corto</b>Si el modelo y su infraestructura cumplen las regulaciones del sector o región donde se usará (HIPAA, GDPR, etc.).</div>
          </div>

          <div className="term-card">
            <h4>Costo</h4>
            <p>El precio de usar el modelo — en Bedrock, típicamente por millón de tokens de entrada/salida (on-demand) o mediante throughput aprovisionado — que varía mucho entre modelos según su tamaño y proveedor.</p>
            <div className="term-short"><b>En corto</b>Cuánto cuesta usar el modelo, normalmente por token en Bedrock; varía mucho según el tamaño y proveedor del modelo.</div>
          </div>

          <div className="term-card">
            <h4>Latencia</h4>
            <p>El tiempo que tarda el modelo en empezar a responder y en completar la respuesta — crítico en aplicaciones interactivas en tiempo real, donde modelos más grandes suelen ser más lentos.</p>
            <div className="term-short"><b>En corto</b>Cuánto tarda el modelo en responder; los modelos más grandes suelen ser más lentos, lo cual importa en apps en tiempo real.</div>
          </div>

          <div className="term-card">
            <h4>Complejidad del modelo</h4>
            <p>Modelos más grandes y complejos (más parámetros) suelen tener mejores capacidades de razonamiento pero cuestan más, son más lentos y requieren más recursos, frente a modelos más pequeños que son más rápidos y baratos pero con capacidades más limitadas — un trade-off central al elegir.</p>
            <div className="term-short"><b>En corto</b>Modelos más grandes/complejos razonan mejor pero cuestan más y son más lentos; modelos pequeños son más rápidos y baratos pero más limitados.</div>
          </div>

          <a className="back-to-top" href="#d2">↑ volver al Dominio 2</a>
        </div>

        <div className="gloss-group" id="gloss-d2-t2-b4">
          <span className="gloss-group-head">Dominio 2 · Task 2.2 · Bullet 4</span>
          <p className="gloss-bullet-text">"Determinar el valor de negocio y las métricas de las aplicaciones de GenAI (desempeño entre dominios, ROI, eficiencia, tasa de conversión, ingreso promedio por usuario, exactitud, valor de vida del cliente)."</p>
          <p className="scope-note" style={{marginTop: '0.6rem'}}><strong>Nota:</strong> es una LISTA de 7 métricas de negocio.</p>

          <div className="term-card">
            <h4>Desempeño entre dominios (cross-domain performance)</h4>
            <p>Mide qué tan bien se mantiene la calidad de un modelo cuando se aplica a distintos dominios o tipos de tarea, en vez de estar optimizado solo para un caso muy específico — relevante porque los FMs se promocionan justamente por ser generalistas.</p>
            <div className="term-short"><b>En corto</b>Qué tan consistente es la calidad de un modelo al aplicarlo a distintos dominios o tareas, no solo a uno especializado.</div>
          </div>

          <div className="term-card">
            <h4>ROI (Retorno de la Inversión)</h4>
            <p>Compara el beneficio económico obtenido de la solución de GenAI contra su costo total (desarrollo, tokens, infraestructura, mantenimiento) — la métrica de negocio más directa para justificar la inversión.</p>
            <div className="term-short"><b>En corto</b>El beneficio económico de la solución de GenAI comparado contra su costo total — la métrica clásica para justificar la inversión.</div>
          </div>

          <div className="term-card">
            <h4>Eficiencia</h4>
            <p>Cuánto tiempo, esfuerzo humano o costo operativo se ahorra al automatizar o asistir una tarea con GenAI, comparado con el proceso manual anterior — por ejemplo, tiempo reducido para redactar un documento o resolver un ticket de soporte.</p>
            <div className="term-short"><b>En corto</b>Cuánto tiempo, esfuerzo o costo operativo se ahorra al usar GenAI frente al proceso manual anterior.</div>
          </div>

          <div className="term-card">
            <h4>Tasa de conversión</h4>
            <p>El porcentaje de usuarios que completan una acción deseada (comprar, suscribirse, registrarse) después de interactuar con una funcionalidad de GenAI, como un asistente de compras o un chatbot de ventas.</p>
            <div className="term-short"><b>En corto</b>El porcentaje de usuarios que completan una acción deseada tras interactuar con la funcionalidad de GenAI.</div>
          </div>

          <div className="term-card">
            <h4>Ingreso promedio por usuario (ARPU)</h4>
            <p>El ingreso promedio generado por cada usuario de un producto; se usa para medir si una funcionalidad de GenAI (por ejemplo, una función premium con IA) incrementa el ingreso por usuario del negocio.</p>
            <div className="term-short"><b>En corto</b>El ingreso promedio que genera cada usuario; sirve para ver si una funcionalidad de GenAI aumenta ese ingreso.</div>
          </div>

          <div className="term-card">
            <h4>Exactitud (accuracy)</h4>
            <p>Qué tan seguido las salidas del modelo son correctas frente a lo esperado — en el contexto de negocio, se traduce en confianza del usuario final y menor necesidad de corrección humana.</p>
            <div className="term-short"><b>En corto</b>Qué tan seguido las respuestas del modelo son correctas — se traduce en confianza del usuario y menos corrección manual.</div>
          </div>

          <div className="term-card">
            <h4>Valor de vida del cliente (CLV)</h4>
            <p>El ingreso total que se espera obtener de un cliente durante toda su relación con el negocio; una buena experiencia asistida por GenAI (soporte más rápido, recomendaciones mejores) puede aumentar la retención y, con ella, el CLV.</p>
            <div className="term-short"><b>En corto</b>El ingreso total esperado de un cliente durante toda su relación con el negocio; mejor experiencia con GenAI puede aumentarlo vía retención.</div>
          </div>

          <a className="back-to-top" href="#d2">↑ volver al Dominio 2</a>
        </div>

        <div className="gloss-group" id="gloss-d2-t3-b1">
          <span className="gloss-group-head">Dominio 2 · Task 2.3 · Bullet 1</span>
          <p className="gloss-bullet-text">"Identificar los servicios y funciones de AWS para desarrollar aplicaciones de GenAI (Amazon Bedrock, SageMaker AI, SageMaker JumpStart, Amazon Quick, Kiro, Strands Agents, Amazon Bedrock AgentCore)."</p>
          <p className="scope-note" style={{marginTop: '0.6rem'}}><strong>Nota:</strong> es una LISTA de 7 servicios/funciones de AWS.</p>

          <div className="term-card">
            <h4>Amazon Bedrock</h4>
            <p>Servicio totalmente administrado que da acceso, a través de una sola API, a foundation models de múltiples proveedores (Anthropic, Meta, Mistral, Amazon Nova, entre otros) para construir aplicaciones de GenAI sin gestionar infraestructura, con capacidades como fine-tuning, RAG (Knowledge Bases), agentes y guardrails.</p>
            <div className="term-short"><b>En corto</b>API administrada de AWS para usar FMs de varios proveedores sin gestionar infraestructura; incluye RAG, agentes y guardrails.</div>
          </div>

          <div className="term-card">
            <h4>Amazon SageMaker AI</h4>
            <p>Servicio administrado para construir, entrenar y desplegar modelos de machine learning propios de punta a punta, incluyendo el entrenamiento y ajuste de foundation models cuando se necesita más control que el que ofrece Bedrock.</p>
            <div className="term-short"><b>En corto</b>Servicio de AWS para construir, entrenar y desplegar modelos de ML/FMs propios de punta a punta, con más control que Bedrock.</div>
          </div>

          <div className="term-card">
            <h4>SageMaker JumpStart</h4>
            <p>Un hub dentro de SageMaker AI con modelos preentrenados (incluyendo foundation models de código abierto) listos para desplegar con unos pocos clics o ajustar (fine-tune) con los datos propios, acelerando el arranque de un proyecto de ML/GenAI.</p>
            <div className="term-short"><b>En corto</b>Hub de SageMaker con modelos preentrenados listos para desplegar o ajustar rápidamente, sin partir de cero.</div>
          </div>

          <div className="term-card">
            <h4>Amazon Quick</h4>
            <p>Suite de aplicaciones de negocio con IA integrada (evolución de Amazon QuickSight hacia "Quick Suite" en 2026): incluye análisis de datos e inteligencia de negocio asistidos por GenAI, permitiendo hacer preguntas en lenguaje natural sobre los datos de la organización.</p>
            <div className="term-short"><b>En corto</b>Suite de BI/analítica de AWS con GenAI integrada (evolución de QuickSight) para consultar datos de negocio en lenguaje natural.</div>
          </div>

          <div className="term-card">
            <h4>Kiro</h4>
            <p>Un IDE agéntico de AWS, muy reciente, orientado a "spec-driven development": convierte una especificación en lenguaje natural en un plan de tareas y código, con agentes de IA colaborando en el flujo de desarrollo. Es un servicio nuevo con documentación oficial todavía limitada al momento de escribir esto.</p>
            <div className="term-short"><b>En corto</b>IDE agéntico de AWS para desarrollo "spec-driven" (de especificación a código con ayuda de agentes de IA); es un servicio muy nuevo.</div>
          </div>

          <div className="term-card">
            <h4>Strands Agents</h4>
            <p>Un SDK de código abierto de AWS para construir agentes de IA, usado internamente por varios equipos de Amazon (incluyendo Amazon Q Developer). Ofrece patrones nativos de multi-agente (Swarm, Graph, Workflow) y se integra con Amazon Bedrock AgentCore para desplegar y operar esos agentes en producción.</p>
            <div className="term-short"><b>En corto</b>SDK open source de AWS para construir agentes de IA, con patrones nativos como Swarm/Graph/Workflow; se integra con Bedrock AgentCore.</div>
          </div>

          <div className="term-card">
            <h4>Amazon Bedrock AgentCore</h4>
            <p>Un conjunto modular de servicios de infraestructura para desplegar y operar agentes de IA en producción de forma segura y a escala, sin importar con qué framework se construyeron (Strands Agents, LangGraph, CrewAI, etc.). Incluye piezas como Runtime (ejecución serverless), Memory (memoria de corto/largo plazo), Gateway (exponer APIs/Lambdas como herramientas MCP), Identity (autenticación de agentes), Code Interpreter, Browser (navegación web para agentes) y Observability, entre otras 13+ capacidades.</p>
            <div className="term-short"><b>En corto</b>Conjunto modular de servicios de AWS (Runtime, Memory, Gateway, Identity y más) para desplegar y operar agentes de IA en producción, sin importar el framework usado.</div>
          </div>

          <a className="back-to-top" href="#d2">↑ volver al Dominio 2</a>
        </div>

        <div className="gloss-group" id="gloss-d2-t3-b2">
          <span className="gloss-group-head">Dominio 2 · Task 2.3 · Bullet 2</span>
          <p className="gloss-bullet-text">"Describir las ventajas de usar servicios de GenAI de AWS para construir aplicaciones (accesibilidad, menor barrera de entrada, eficiencia, costo-efectividad, velocidad de salida al mercado)."</p>
          <p className="scope-note" style={{marginTop: '0.6rem'}}><strong>Nota:</strong> es una LISTA de 5 ventajas.</p>

          <div className="term-card">
            <h4>Accesibilidad</h4>
            <p>Los servicios de GenAI de AWS (como Bedrock) están disponibles a través de una API estándar y consola, sin requerir que el equipo posea infraestructura especializada de GPU propia para acceder a FMs de última generación.</p>
            <div className="term-short"><b>En corto</b>Se accede a FMs de última generación por API/consola, sin necesitar infraestructura de GPU propia.</div>
          </div>

          <div className="term-card">
            <h4>Menor barrera de entrada</h4>
            <p>No hace falta ser un experto en machine learning ni entrenar modelos desde cero para construir una aplicación de GenAI; servicios administrados como Bedrock o SageMaker JumpStart permiten a equipos con menos experiencia especializada empezar a construir rápidamente.</p>
            <div className="term-short"><b>En corto</b>No se necesita ser experto en ML ni entrenar modelos desde cero para empezar a construir con GenAI en AWS.</div>
          </div>

          <div className="term-card">
            <h4>Eficiencia</h4>
            <p>Al usar infraestructura y modelos ya administrados por AWS, los equipos dedican menos esfuerzo a operar servidores, actualizar modelos o gestionar el ciclo de vida de la infraestructura de ML, y más esfuerzo a construir la aplicación en sí.</p>
            <div className="term-short"><b>En corto</b>Menos esfuerzo operando infraestructura de ML/modelos y más esfuerzo enfocado en construir la aplicación.</div>
          </div>

          <div className="term-card">
            <h4>Costo-efectividad</h4>
            <p>El modelo de precios de pago por uso (por ejemplo, por token en Bedrock) evita inversión inicial en hardware especializado, y permite escalar el costo según el uso real de la aplicación en vez de pagar por capacidad fija subutilizada.</p>
            <div className="term-short"><b>En corto</b>Pago por uso (p. ej. por token) en vez de invertir en hardware propio, escalando el costo con el uso real.</div>
          </div>

          <div className="term-card">
            <h4>Velocidad de salida al mercado (time-to-market)</h4>
            <p>Al no tener que entrenar modelos desde cero ni construir infraestructura propia, los equipos pueden lanzar una funcionalidad de GenAI en producción en semanas en vez de meses o años.</p>
            <div className="term-short"><b>En corto</b>Se puede lanzar una funcionalidad de GenAI mucho más rápido al no tener que entrenar modelos ni construir infraestructura desde cero.</div>
          </div>

          <a className="back-to-top" href="#d2">↑ volver al Dominio 2</a>
        </div>

        <div className="gloss-group" id="gloss-d2-t3-b3">
          <span className="gloss-group-head">Dominio 2 · Task 2.3 · Bullet 3</span>
          <p className="gloss-bullet-text">"Describir los beneficios de la infraestructura de AWS para aplicaciones de GenAI (seguridad, cumplimiento normativo, responsabilidad, safety)."</p>
          <p className="scope-note" style={{marginTop: '0.6rem'}}><strong>Nota:</strong> es una LISTA de 4 beneficios.</p>

          <div className="term-card">
            <h4>Seguridad</h4>
            <p>AWS aplica su modelo de responsabilidad compartida y controles como cifrado en tránsito/reposo, IAM y AWS PrivateLink; además, AWS establece explícitamente que los datos de los clientes usados con Bedrock no se usan para entrenar los modelos base de los proveedores, y permanecen dentro de la región y cuenta del cliente.</p>
            <div className="term-short"><b>En corto</b>Cifrado, IAM, PrivateLink y la garantía de AWS de que los datos del cliente en Bedrock no se usan para entrenar los modelos base de los proveedores.</div>
          </div>

          <div className="term-card">
            <h4>Cumplimiento normativo (compliance)</h4>
            <p>Los servicios de GenAI de AWS operan bajo el mismo marco de certificaciones de cumplimiento que el resto de AWS (por ejemplo GDPR, HIPAA, SOC, FedRAMP High), lo cual facilita adoptar GenAI en industrias reguladas sin construir esos controles desde cero.</p>
            <div className="term-short"><b>En corto</b>Los servicios de GenAI de AWS heredan las certificaciones de cumplimiento de AWS (GDPR, HIPAA, SOC, FedRAMP High, etc.).</div>
          </div>

          <div className="term-card">
            <h4>Responsabilidad (Responsible AI)</h4>
            <p>AWS ofrece herramientas específicas para construir IA responsable, como Amazon Bedrock Guardrails (para filtrar contenido dañino o fuera de tema) y Amazon SageMaker Model Cards (para documentar el propósito, rendimiento y limitaciones de un modelo), ayudando a los equipos a gobernar el uso de sus modelos.</p>
            <div className="term-short"><b>En corto</b>Herramientas como Bedrock Guardrails y SageMaker Model Cards para construir y documentar IA de forma responsable.</div>
          </div>

          <div className="term-card">
            <h4>Safety</h4>
            <p>Se refiere a mecanismos técnicos que reducen el riesgo de salidas dañinas, como el filtrado de toxicidad, la detección y redacción de información de identificación personal (PII), y otros controles de contenido incorporados en Bedrock Guardrails.</p>
            <div className="term-short"><b>En corto</b>Controles técnicos como filtrado de toxicidad y redacción de PII que reducen el riesgo de salidas dañinas del modelo.</div>
          </div>

          <a className="back-to-top" href="#d2">↑ volver al Dominio 2</a>
        </div>

        <div className="gloss-group" id="gloss-d2-t3-b4">
          <span className="gloss-group-head">Dominio 2 · Task 2.3 · Bullet 4</span>
          <p className="gloss-bullet-text">"Describir las contrapartidas de costo de los servicios de GenAI de AWS (capacidad de respuesta, disponibilidad, redundancia, desempeño, cobertura regional, precios por token, throughput aprovisionado, modelos personalizados)."</p>
          <p className="scope-note" style={{marginTop: '0.6rem'}}><strong>Nota:</strong> es una LISTA de 8 factores de contrapartida costo-beneficio.</p>

          <div className="term-card">
            <h4>Capacidad de respuesta (responsiveness)</h4>
            <p>Opciones con menor latencia (por ejemplo, el nivel "Priority" en Bedrock, o el throughput aprovisionado) suelen costar más que las opciones estándar ("Standard") o por lotes ("Batch"), que son más económicas pero más lentas.</p>
            <div className="term-short"><b>En corto</b>Menor latencia (p. ej. nivel Priority en Bedrock) cuesta más que opciones estándar o por lotes, que son más lentas pero baratas.</div>
          </div>

          <div className="term-card">
            <h4>Disponibilidad</h4>
            <p>Garantizar que el servicio esté accesible el mayor tiempo posible (alto SLA) generalmente implica arquitecturas más robustas y, potencialmente, mayor costo que una configuración básica de una sola zona.</p>
            <div className="term-short"><b>En corto</b>Mayor disponibilidad garantizada normalmente implica una arquitectura más robusta y, con ello, mayor costo.</div>
          </div>

          <div className="term-card">
            <h4>Redundancia</h4>
            <p>Duplicar recursos (por ejemplo, desplegar en varias zonas de disponibilidad o regiones) mejora la resiliencia ante fallas, pero incrementa el costo al pagar por capacidad adicional que normalmente no se usa toda a la vez.</p>
            <div className="term-short"><b>En corto</b>Duplicar recursos en varias zonas/regiones mejora la resiliencia pero aumenta el costo por la capacidad adicional.</div>
          </div>

          <div className="term-card">
            <h4>Desempeño (performance)</h4>
            <p>Modelos y configuraciones con mejor desempeño (mayor calidad de respuesta, mayor velocidad) suelen tener un costo por token o por hora más alto que alternativas más simples o pequeñas.</p>
            <div className="term-short"><b>En corto</b>Mayor calidad/velocidad de un modelo o configuración normalmente implica un costo por token u hora más alto.</div>
          </div>

          <div className="term-card">
            <h4>Cobertura regional</h4>
            <p>No todos los FMs ni todas las funcionalidades de Bedrock están disponibles en todas las regiones de AWS; usar inferencia entre regiones (cross-region inference) para acceder a más capacidad o a un modelo específico puede tener implicaciones de costo y de residencia de datos.</p>
            <div className="term-short"><b>En corto</b>No todos los modelos/funciones están en todas las regiones; usar inferencia entre regiones puede afectar costo y residencia de datos.</div>
          </div>

          <div className="term-card">
            <h4>Precios por token</h4>
            <p>El modelo de precios on-demand de Bedrock cobra por millón de tokens de entrada y de salida, con tarifas distintas entre "Standard", "Priority", "Flex" y "Batch" — elegir el nivel correcto para cada carga de trabajo es una decisión directa de costo-beneficio.</p>
            <div className="term-short"><b>En corto</b>Bedrock cobra por millón de tokens de entrada/salida, con tarifas distintas según el nivel de servicio elegido (Standard/Priority/Flex/Batch).</div>
          </div>

          <div className="term-card">
            <h4>Throughput aprovisionado (Provisioned Throughput)</h4>
            <p>Alternativa al precio por token bajo demanda: se paga una tarifa fija por reservar capacidad de inferencia garantizada durante un periodo de tiempo, lo cual conviene para cargas de trabajo grandes y predecibles, pero puede salir más caro que on-demand si el uso real es bajo.</p>
            <div className="term-short"><b>En corto</b>Se paga una tarifa fija por capacidad garantizada, conveniente para cargas grandes y predecibles, pero puede costar más que on-demand con uso bajo.</div>
          </div>

          <div className="term-card">
            <h4>Modelos personalizados (custom models)</h4>
            <p>Ajustar (fine-tune) o entrenar continuamente un FM con datos propios (por ejemplo, Custom Model Import o Continued Pre-training en Bedrock) tiene un costo adicional de entrenamiento y de alojamiento del modelo personalizado, frente a usar un modelo base tal cual.</p>
            <div className="term-short"><b>En corto</b>Personalizar un FM con datos propios (fine-tuning) suma costo de entrenamiento y alojamiento frente a usar el modelo base sin modificar.</div>
          </div>

          <a className="back-to-top" href="#d2">↑ volver al Dominio 2</a>
        </div>

        <div className="gloss-group" id="gloss-d3-t1-b1">
          <span className="gloss-group-head">Dominio 3 · Task 3.1 · Bullet 1</span>
          <p className="gloss-bullet-text">"Identificar los criterios de selección para elegir FMs (costo, modalidad, latencia, soporte multilingüe, tamaño del modelo, complejidad, personalización, longitud de entrada/salida, prompt caching)."</p>
          <p className="scope-note" style={{marginTop: '0.6rem'}}><strong>Nota:</strong> es una LISTA de 9 criterios de selección.</p>

          <div className="term-card">
            <h4>Costo</h4>
            <p>Cuánto cuesta usar el modelo (típicamente por millón de tokens en Bedrock), incluyendo el nivel de servicio elegido (Standard/Priority/Flex/Batch) o el throughput aprovisionado — un factor central al comparar FMs candidatos.</p>
            <div className="term-short"><b>En corto</b>El precio de usar el modelo, normalmente por token; varía según el proveedor y el nivel de servicio elegido.</div>
          </div>

          <div className="term-card">
            <h4>Modalidad</h4>
            <p>El tipo de datos que el modelo puede recibir y/o generar: solo texto, texto e imagen, audio, video, o combinaciones (multimodal). El caso de uso determina qué modalidad se necesita.</p>
            <div className="term-short"><b>En corto</b>Qué tipos de datos maneja el modelo (texto, imagen, audio, video o combinaciones multimodales).</div>
          </div>

          <div className="term-card">
            <h4>Latencia</h4>
            <p>El tiempo que tarda el modelo en empezar a responder y en completar la respuesta; crítico en aplicaciones interactivas en tiempo real, donde modelos más grandes suelen ser más lentos.</p>
            <div className="term-short"><b>En corto</b>Cuánto tarda el modelo en responder — relevante sobre todo en aplicaciones interactivas en tiempo real.</div>
          </div>

          <div className="term-card">
            <h4>Soporte multilingüe</h4>
            <p>Si el modelo entiende y genera texto de forma confiable en los idiomas que necesita la aplicación; no todos los FMs tienen el mismo nivel de calidad en todos los idiomas.</p>
            <div className="term-short"><b>En corto</b>Qué tan bien entiende y genera el modelo texto en los idiomas que la aplicación necesita.</div>
          </div>

          <div className="term-card">
            <h4>Tamaño del modelo</h4>
            <p>La cantidad de parámetros del FM. Modelos más grandes suelen razonar mejor sobre tareas complejas, pero consumen más recursos, cuestan más y responden más lento que modelos pequeños.</p>
            <div className="term-short"><b>En corto</b>Cuántos parámetros tiene el modelo; más grande generalmente razona mejor pero cuesta más y es más lento.</div>
          </div>

          <div className="term-card">
            <h4>Complejidad</h4>
            <p>Qué tan sofisticado es el modelo en su arquitectura y capacidades de razonamiento — un modelo más complejo puede resolver tareas más difíciles pero también es más caro de operar y más difícil de interpretar.</p>
            <div className="term-short"><b>En corto</b>Qué tan sofisticado es el modelo; mayor complejidad suele significar mejor razonamiento pero mayor costo e interpretabilidad más difícil.</div>
          </div>

          <div className="term-card">
            <h4>Personalización</h4>
            <p>Qué tan fácil es adaptar el modelo al caso de uso propio: si soporta fine-tuning, continued pre-training, o solo se puede ajustar vía prompt engineering/RAG. Algunos FMs ofrecen más opciones de personalización que otros.</p>
            <div className="term-short"><b>En corto</b>Qué tan fácil es adaptar el modelo al caso propio (fine-tuning, pre-training continuo, o solo prompting/RAG).</div>
          </div>

          <div className="term-card">
            <h4>Longitud de entrada/salida</h4>
            <p>El tamaño de la ventana de contexto del modelo (cuánto texto de entrada puede procesar de una vez) y el límite de tokens que puede generar en una respuesta — determina si el modelo puede manejar documentos largos o conversaciones extensas.</p>
            <div className="term-short"><b>En corto</b>Cuánto texto puede recibir (ventana de contexto) y cuánto puede generar el modelo en una sola respuesta.</div>
          </div>

          <div className="term-card">
            <h4>Prompt caching</h4>
            <p>Una técnica que permite reutilizar (cachear) partes repetidas de un prompt entre llamadas al modelo — como instrucciones del sistema o documentos largos de contexto — para reducir la latencia y el costo cuando esa misma información se envía una y otra vez.</p>
            <div className="term-short"><b>En corto</b>Reutilizar partes repetidas de un prompt entre llamadas para reducir latencia y costo, en vez de reprocesarlas cada vez.</div>
          </div>

          <a className="back-to-top" href="#d3">↑ volver al Dominio 3</a>
        </div>

        <div className="gloss-group" id="gloss-d3-t1-b2">
          <span className="gloss-group-head">Dominio 3 · Task 3.1 · Bullet 2</span>
          <p className="gloss-bullet-text">"Describir el efecto de los parámetros de inferencia en las respuestas del modelo (temperatura, longitud de entrada/salida)."</p>
          <p className="scope-note" style={{marginTop: '0.6rem'}}><strong>Nota:</strong> es una LISTA de 2 parámetros de inferencia mencionados explícitamente (existen otros, como top-p/top-k, que se mencionan aquí como contexto adicional).</p>

          <div className="term-card">
            <h4>Temperatura</h4>
            <p>Controla qué tan aleatoria o "creativa" es la salida del modelo. Una temperatura baja (cercana a 0) hace que el modelo elija casi siempre la palabra más probable, dando respuestas más deterministas, repetibles y conservadoras — útil para tareas factuales o de clasificación. Una temperatura alta introduce más variedad y aleatoriedad, dando respuestas más creativas pero también más impredecibles y con mayor riesgo de imprecisión.</p>
            <div className="term-short"><b>En corto</b>Controla la aleatoriedad de la salida: baja = respuestas más predecibles y conservadoras; alta = respuestas más variadas y creativas, con más riesgo de imprecisión.</div>
          </div>

          <div className="term-card">
            <h4>Longitud de entrada/salida como parámetro de inferencia</h4>
            <p>Además de ser un criterio de selección del modelo, la longitud de entrada/salida también se configura en cada llamada de inferencia: limitar la longitud máxima de la respuesta (por ejemplo, con "max tokens") afecta cuán completas o truncadas son las respuestas, y una entrada muy larga puede diluir la atención del modelo sobre la parte más relevante del contexto.</p>
            <div className="term-short"><b>En corto</b>Configurar cuánto texto se envía y cuánto se permite generar en cada llamada afecta si la respuesta sale completa, truncada, o si el modelo "pierde el foco" con entradas muy largas.</div>
          </div>

          <a className="back-to-top" href="#d3">↑ volver al Dominio 3</a>
        </div>

        <div className="gloss-group" id="gloss-d3-t1-b3">
          <span className="gloss-group-head">Dominio 3 · Task 3.1 · Bullet 3</span>
          <p className="gloss-bullet-text">"Definir Retrieval Augmented Generation (RAG) y describir sus aplicaciones de negocio (Amazon Bedrock Knowledge Bases)."</p>
          <p className="scope-note" style={{marginTop: '0.6rem'}}><strong>Nota:</strong> es UNA sola idea (definir RAG + su aplicación de negocio vía Bedrock Knowledge Bases), no una lista de términos distintos.</p>

          <div className="term-card">
            <h4>Retrieval Augmented Generation (RAG)</h4>
            <p>Según AWS, RAG es una técnica para complementar (aumentar) un LLM con datos externos —como los documentos internos de una empresa— dándole al modelo el contexto que necesita para producir salidas precisas y útiles para casos de uso específicos. AWS la describe como "un enfoque pragmático y efectivo para usar LLMs en una empresa". El proceso tiene cuatro pasos: (1) ingesta — se crean embeddings de los documentos internos (limpieza, formato y chunking) y se guardan en una base de datos vectorial; (2) el usuario hace una pregunta en lenguaje natural; (3) recuperación (retrieval) — un orquestador hace una búsqueda por similitud en la base vectorial para encontrar el contexto relevante y lo agrega al prompt del usuario; (4) generación — el prompt aumentado se envía al LLM, que genera la respuesta usando ese contexto recuperado. Su principal aplicación de negocio es construir bases de conocimiento empresarial: responder preguntas citando documentos propios de la organización en vez de depender solo de lo que el modelo aprendió en su entrenamiento, mejorando la precisión y relevancia sin tener que reentrenar el modelo. En AWS, la forma administrada de implementar esto es <strong>Amazon Bedrock Knowledge Bases</strong>, que gestiona automáticamente la ingesta, el chunking, la creación de embeddings, el almacenamiento vectorial y la recuperación.</p>
            <div className="term-short"><b>En corto</b>RAG conecta un LLM a datos externos propios (vía búsqueda por similitud en una base vectorial) para que responda con información actualizada y específica de la organización, sin reentrenar el modelo. En AWS, Bedrock Knowledge Bases automatiza todo ese proceso.</div>
          </div>

          <a className="back-to-top" href="#d3">↑ volver al Dominio 3</a>
        </div>

        <div className="gloss-group" id="gloss-d3-t1-b4">
          <span className="gloss-group-head">Dominio 3 · Task 3.1 · Bullet 4</span>
          <p className="gloss-bullet-text">"Identificar los servicios de AWS que ayudan a almacenar embeddings en bases de datos vectoriales (Amazon OpenSearch Service, Amazon Aurora, Amazon Neptune, Amazon RDS para PostgreSQL)."</p>
          <p className="scope-note" style={{marginTop: '0.6rem'}}><strong>Nota:</strong> es una LISTA de 4 servicios de AWS.</p>

          <div className="term-card">
            <h4>Amazon OpenSearch Service</h4>
            <p>Servicio de búsqueda y analítica que incluye un motor de búsqueda vectorial (k-NN) capaz de indexar embeddings y hacer búsquedas por similitud a gran escala — una de las opciones más usadas como base de datos vectorial para RAG en AWS, y la integración por defecto de Bedrock Knowledge Bases.</p>
            <div className="term-short"><b>En corto</b>Motor de búsqueda de AWS con capacidad vectorial (k-NN) nativa; opción por defecto para RAG con Bedrock Knowledge Bases.</div>
          </div>

          <div className="term-card">
            <h4>Amazon Aurora</h4>
            <p>Base de datos relacional administrada, compatible con MySQL y PostgreSQL; a través de la extensión pgvector (en su edición compatible con PostgreSQL) puede almacenar e indexar embeddings, permitiendo búsquedas vectoriales dentro de una base de datos relacional ya existente.</p>
            <div className="term-short"><b>En corto</b>Base de datos relacional de AWS que, vía pgvector (edición PostgreSQL), también puede almacenar y buscar embeddings.</div>
          </div>

          <div className="term-card">
            <h4>Amazon Neptune</h4>
            <p>Base de datos de grafos administrada de AWS; ofrece capacidades de búsqueda vectorial (Neptune Analytics) que permiten combinar relaciones de grafo con búsqueda por similitud semántica, útil para RAG sobre datos altamente conectados/relacionales.</p>
            <div className="term-short"><b>En corto</b>Base de datos de grafos de AWS con capacidades de búsqueda vectorial, útil para RAG sobre datos muy relacionales entre sí.</div>
          </div>

          <div className="term-card">
            <h4>Amazon RDS para PostgreSQL</h4>
            <p>El servicio de base de datos relacional administrada de AWS para PostgreSQL, que —igual que Aurora— soporta la extensión pgvector para almacenar embeddings y hacer búsquedas por similitud directamente en la base de datos relacional.</p>
            <div className="term-short"><b>En corto</b>PostgreSQL administrado por AWS que, con la extensión pgvector, también funciona como base de datos vectorial.</div>
          </div>

          <a className="back-to-top" href="#d3">↑ volver al Dominio 3</a>
        </div>

        <div className="gloss-group" id="gloss-d3-t1-b5">
          <span className="gloss-group-head">Dominio 3 · Task 3.1 · Bullet 5</span>
          <p className="gloss-bullet-text">"Explicar las contrapartidas de costo de los distintos enfoques de personalización de FMs (preentrenamiento, fine-tuning, in-context learning, RAG, destilación de modelos)."</p>
          <p className="scope-note" style={{marginTop: '0.6rem'}}><strong>Nota:</strong> es una LISTA de 5 enfoques de personalización, cada uno con su propia contrapartida costo-beneficio. Según la guía AWS Well-Architected (Generative AI Lens), la recomendación es empezar por el enfoque menos costoso/complejo y solo avanzar a uno más intensivo si es necesario.</p>

          <div className="term-card">
            <h4>Preentrenamiento (pre-training)</h4>
            <p>Entrenar un modelo completamente desde cero con un dataset masivo. Es el enfoque más costoso y complejo de todos: requiere enormes cantidades de datos, cómputo (por ejemplo, SageMaker HyperPod con entrenamiento distribuido) y tiempo, y solo se justifica cuando ningún modelo preentrenado existente cubre la necesidad y la organización tiene datos propietarios masivos.</p>
            <div className="term-short"><b>En corto</b>Entrenar un modelo desde cero — el enfoque más caro y complejo; solo se justifica si ningún FM existente sirve y hay datos masivos propios.</div>
          </div>

          <div className="term-card">
            <h4>Fine-tuning (incluye continued pre-training)</h4>
            <p>Ajustar un FM ya preentrenado con un dataset propio, más pequeño y específico, para mejorar su desempeño en una tarea o dominio concreto. Cuesta mucho menos que preentrenar desde cero, pero más que RAG o prompt engineering; se justifica cuando se necesita que el modelo internalice un estilo, terminología o tarea específica de forma consistente, y se cuenta con datos etiquetados relevantes.</p>
            <div className="term-short"><b>En corto</b>Ajustar un FM ya entrenado con datos propios — más barato que preentrenar desde cero, pero más caro que RAG; útil para internalizar un estilo o dominio específico.</div>
          </div>

          <div className="term-card">
            <h4>In-context learning (prompt engineering)</h4>
            <p>Guiar el comportamiento del modelo únicamente a través del prompt (instrucciones, ejemplos de few-shot), sin modificar los pesos del modelo. Es el enfoque de menor costo y complejidad, y la guía de AWS recomienda empezar siempre por aquí antes de considerar RAG o fine-tuning.</p>
            <div className="term-short"><b>En corto</b>Guiar al modelo solo con el prompt (instrucciones, ejemplos), sin tocar sus pesos — el enfoque más barato y el punto de partida recomendado por AWS.</div>
          </div>

          <div className="term-card">
            <h4>RAG</h4>
            <p>Conectar el modelo a fuentes de datos externas en tiempo de consulta, sin modificar el modelo en sí. Cuesta más que el prompt engineering puro (hay que mantener una base de datos vectorial e infraestructura de recuperación) pero significativamente menos que fine-tuning o preentrenamiento, y tiene la ventaja de que el conocimiento se actualiza simplemente actualizando los documentos fuente, sin reentrenar nada.</p>
            <div className="term-short"><b>En corto</b>Conectar el modelo a datos externos en tiempo de consulta — cuesta más que solo prompting pero mucho menos que fine-tuning, y el conocimiento se actualiza sin reentrenar.</div>
          </div>

          <div className="term-card">
            <h4>Destilación de modelos (model distillation)</h4>
            <p>Entrenar un modelo "estudiante" más pequeño y económico para imitar el comportamiento de un modelo "maestro" más grande y capaz. El costo inicial de destilar es una inversión (se necesita generar datos de entrenamiento con el modelo maestro), pero el resultado es un modelo mucho más barato y rápido de operar en producción, a cambio de cierta pérdida de capacidad frente al modelo original.</p>
            <div className="term-short"><b>En corto</b>Entrenar un modelo pequeño para imitar a uno grande — inversión inicial a cambio de un modelo final mucho más barato y rápido de operar, con algo menos de capacidad.</div>
          </div>

          <a className="back-to-top" href="#d3">↑ volver al Dominio 3</a>
        </div>

        <div className="gloss-group" id="gloss-d3-t1-b6">
          <span className="gloss-group-head">Dominio 3 · Task 3.1 · Bullet 6</span>
          <p className="gloss-bullet-text">"Definir el rol de los agentes de IA y describir sus aplicaciones de negocio."</p>
          <p className="scope-note" style={{marginTop: '0.6rem'}}><strong>Nota:</strong> es UNA sola idea (el rol y las aplicaciones de negocio de los agentes de IA), aunque se apoya en varios ejemplos concretos.</p>

          <div className="term-card">
            <h4>Rol de los agentes de IA en tareas de varios pasos</h4>
            <p>Un agente de IA extiende lo que puede hacer un FM: en vez de solo responder texto, el agente puede razonar sobre un objetivo, dividirlo en subtareas, decidir qué herramientas o APIs invocar, ejecutar esas acciones, observar el resultado, y repetir el ciclo hasta completar tareas complejas de varios pasos sin intervención humana en cada paso. En AWS, esto se implementa con <strong>Amazon Bedrock Agents</strong> (orquestación administrada de agentes conectados a APIs y bases de conocimiento propias), con el paradigma más amplio de <strong>IA agéntica</strong> (sistemas de uno o varios agentes colaborando), y con protocolos como <strong>Model Context Protocol (MCP)</strong> que estandarizan cómo esos agentes se conectan con herramientas y sistemas externos. Entre las aplicaciones de negocio más comunes están: automatizar flujos de atención al cliente de principio a fin (no solo responder, sino ejecutar la solicitud), asistentes que investigan y resumen información de múltiples fuentes, agentes que ejecutan tareas operativas (reservar, agendar, actualizar registros) y sistemas multiagente que dividen un proyecto complejo entre agentes especializados.</p>
            <div className="term-short"><b>En corto</b>Un agente de IA no solo responde texto: razona, decide qué herramientas usar y ejecuta acciones de varios pasos hacia un objetivo. En AWS esto se habilita con Bedrock Agents, IA agéntica y protocolos como MCP; sus aplicaciones van desde atención al cliente automatizada hasta agentes que ejecutan tareas operativas completas.</div>
          </div>

          <a className="back-to-top" href="#d3">↑ volver al Dominio 3</a>
        </div>

        <div className="gloss-group" id="gloss-d3-t2-b1">
          <span className="gloss-group-head">Dominio 3 · Task 3.2 · Bullet 1</span>
          <p className="gloss-bullet-text">"Definir los conceptos y elementos de la ingeniería de prompts (contexto, instrucción, prompts negativos)."</p>
          <p className="scope-note" style={{marginTop: '0.6rem'}}><strong>Nota:</strong> es una LISTA de 3 elementos de un prompt.</p>

          <div className="term-card">
            <h4>Contexto</h4>
            <p>La información de fondo que se le da al modelo dentro del prompt para que entienda la situación, el rol que debe asumir, o los datos relevantes para responder — por ejemplo, incluir el historial de una conversación, un documento de referencia, o el rol ("eres un asistente de soporte técnico") que debe adoptar el modelo.</p>
            <div className="term-short"><b>En corto</b>La información de fondo incluida en el prompt para que el modelo entienda la situación antes de responder.</div>
          </div>

          <div className="term-card">
            <h4>Instrucción</h4>
            <p>La indicación explícita y directa de qué tarea debe realizar el modelo — por ejemplo "resume este texto en tres frases" o "traduce esto al español". Es el elemento que le dice al modelo qué acción tomar, distinto del contexto (que le da la información de fondo).</p>
            <div className="term-short"><b>En corto</b>La orden explícita dentro del prompt que le dice al modelo exactamente qué tarea realizar.</div>
          </div>

          <div className="term-card">
            <h4>Prompts negativos</h4>
            <p>Instrucciones dentro del prompt que le indican al modelo qué NO debe hacer o incluir en su respuesta — por ejemplo, "no menciones precios" o "no uses jerga técnica". Se usan para acotar y refinar la salida evitando comportamientos no deseados.</p>
            <div className="term-short"><b>En corto</b>Instrucciones que le dicen al modelo qué evitar o no incluir en su respuesta, para acotar la salida.</div>
          </div>

          <a className="back-to-top" href="#d3">↑ volver al Dominio 3</a>
        </div>

        <div className="gloss-group" id="gloss-d3-t2-b2">
          <span className="gloss-group-head">Dominio 3 · Task 3.2 · Bullet 2</span>
          <p className="gloss-bullet-text">"Definir técnicas de ingeniería de prompts (chain-of-thought, zero-shot, single-shot, few-shot, plantillas de prompts)."</p>
          <p className="scope-note" style={{marginTop: '0.6rem'}}><strong>Nota:</strong> es una LISTA de 5 técnicas.</p>

          <div className="term-card">
            <h4>Chain-of-thought (cadena de pensamiento)</h4>
            <p>Técnica en la que se le pide al modelo que explique su razonamiento paso a paso antes de dar la respuesta final (por ejemplo, agregando "piensa paso a paso" al prompt). Mejora notablemente el desempeño en tareas que requieren razonamiento lógico o matemático, porque obliga al modelo a descomponer el problema en pasos intermedios en vez de saltar directo a una respuesta.</p>
            <div className="term-short"><b>En corto</b>Pedirle al modelo que razone paso a paso antes de responder — mejora el desempeño en tareas lógicas o matemáticas.</div>
          </div>

          <div className="term-card">
            <h4>Zero-shot</h4>
            <p>Darle al modelo una instrucción sin ningún ejemplo de cómo debe responder, confiando en que su entrenamiento previo es suficiente para entender y resolver la tarea. Es la forma más simple de prompting, pero puede dar resultados menos consistentes en tareas muy específicas o poco comunes.</p>
            <div className="term-short"><b>En corto</b>Pedirle la tarea al modelo sin darle ningún ejemplo — la forma más simple de prompting.</div>
          </div>

          <div className="term-card">
            <h4>Single-shot (one-shot)</h4>
            <p>Incluir exactamente un ejemplo de la tarea (entrada y salida deseada) dentro del prompt antes de pedirle al modelo que resuelva el caso real, ayudándolo a entender el formato o estilo esperado.</p>
            <div className="term-short"><b>En corto</b>Darle al modelo un solo ejemplo de la tarea antes de pedirle que resuelva el caso real.</div>
          </div>

          <div className="term-card">
            <h4>Few-shot</h4>
            <p>Incluir varios ejemplos (normalmente entre 2 y 5, o más) de la tarea dentro del prompt, para que el modelo identifique el patrón, formato o estilo esperado con mayor precisión que con zero-shot o single-shot — especialmente útil en tareas donde el formato exacto de salida importa mucho.</p>
            <div className="term-short"><b>En corto</b>Darle al modelo varios ejemplos de la tarea para que reconozca mejor el patrón o formato esperado.</div>
          </div>

          <div className="term-card">
            <h4>Plantillas de prompts (prompt templates)</h4>
            <p>Estructuras de prompt reutilizables con espacios/variables que se rellenan según el caso (por ejemplo, "Resume el siguiente &#123;tipo_de_documento&#125; en &#123;n&#125; frases: &#123;texto&#125;"), permitiendo estandarizar y reutilizar prompts efectivos across distintos casos de uso sin reescribirlos cada vez. En AWS, Amazon Bedrock Prompt Management permite crear y guardar plantillas con variables de este tipo.</p>
            <div className="term-short"><b>En corto</b>Prompts reutilizables con variables que se rellenan según el caso, para estandarizar prompts efectivos — administrables en AWS con Bedrock Prompt Management.</div>
          </div>

          <a className="back-to-top" href="#d3">↑ volver al Dominio 3</a>
        </div>

        <div className="gloss-group" id="gloss-d3-t2-b3">
          <span className="gloss-group-head">Dominio 3 · Task 3.2 · Bullet 3</span>
          <p className="gloss-bullet-text">"Identificar y describir los beneficios y buenas prácticas de la ingeniería de prompts (mejora de la calidad de respuesta, experimentación, guardrails, descubrimiento, especificidad y concisión, uso de múltiples comentarios)."</p>
          <p className="scope-note" style={{marginTop: '0.6rem'}}><strong>Nota:</strong> es una LISTA de 6 beneficios/buenas prácticas.</p>

          <div className="term-card">
            <h4>Mejora de la calidad de respuesta</h4>
            <p>Un prompt bien diseñado (claro, con contexto suficiente y ejemplos cuando hace falta) es la forma más rápida y barata de obtener respuestas más precisas y útiles, sin necesidad de fine-tuning ni cambios al modelo.</p>
            <div className="term-short"><b>En corto</b>Un buen prompt mejora la calidad de la respuesta sin tener que modificar el modelo — la forma más rápida y barata de optimizar resultados.</div>
          </div>

          <div className="term-card">
            <h4>Experimentación</h4>
            <p>Probar distintas variantes de un mismo prompt (redacción, orden, ejemplos incluidos) y comparar resultados es una buena práctica central de la ingeniería de prompts; herramientas como Amazon Bedrock Prompt Management facilitan crear y comparar "variantes" de un prompt antes de elegir la mejor versión.</p>
            <div className="term-short"><b>En corto</b>Probar y comparar distintas variantes de un prompt para encontrar la que da mejores resultados.</div>
          </div>

          <div className="term-card">
            <h4>Guardrails</h4>
            <p>Controles —dentro del prompt o a nivel de plataforma (como Amazon Bedrock Guardrails)— que acotan el comportamiento del modelo para evitar salidas dañinas, fuera de tema o que violen políticas de la organización, funcionando como una capa de seguridad adicional sobre el prompt.</p>
            <div className="term-short"><b>En corto</b>Controles que acotan el comportamiento del modelo para evitar salidas dañinas o fuera de tema; en AWS, Bedrock Guardrails.</div>
          </div>

          <div className="term-card">
            <h4>Descubrimiento (discovery)</h4>
            <p>Usar el proceso de prompting de forma exploratoria para descubrir qué es capaz de hacer un modelo, cuáles son sus límites, y qué formulaciones de prompt funcionan mejor para un dominio o tarea nueva — antes de fijar un prompt de producción.</p>
            <div className="term-short"><b>En corto</b>Explorar con distintos prompts para descubrir las capacidades y límites reales del modelo antes de fijar un prompt final.</div>
          </div>

          <div className="term-card">
            <h4>Especificidad y concisión</h4>
            <p>Un prompt efectivo debe ser lo suficientemente específico para que el modelo entienda exactamente qué se espera (evitando ambigüedad), pero sin agregar información innecesaria que diluya la instrucción principal o consuma tokens de más.</p>
            <div className="term-short"><b>En corto</b>Ser claro y específico sobre lo que se pide, sin agregar texto innecesario que diluya la instrucción o gaste tokens de más.</div>
          </div>

          <div className="term-card">
            <h4>Uso de múltiples comentarios</h4>
            <p>Estructurar un prompt complejo en varias instrucciones o "comentarios" separados y bien delimitados (por ejemplo, usando etiquetas o secciones dentro del prompt) en vez de un solo bloque de texto denso, ayuda al modelo a distinguir claramente cada parte de la solicitud.</p>
            <div className="term-short"><b>En corto</b>Dividir un prompt complejo en secciones o instrucciones bien delimitadas, en vez de un solo bloque de texto, para que el modelo distinga cada parte.</div>
          </div>

          <a className="back-to-top" href="#d3">↑ volver al Dominio 3</a>
        </div>

        <div className="gloss-group" id="gloss-d3-t2-b4">
          <span className="gloss-group-head">Dominio 3 · Task 3.2 · Bullet 4</span>
          <p className="gloss-bullet-text">"Definir los riesgos y limitaciones potenciales de la ingeniería de prompts (exposición, envenenamiento/poisoning, secuestro/hijacking, jailbreaking)."</p>
          <p className="scope-note" style={{marginTop: '0.6rem'}}><strong>Nota:</strong> es una LISTA de 4 riesgos. <strong>Nota de transparencia:</strong> no encontré una única página oficial de docs.aws.amazon.com que defina estos cuatro términos de forma exacta y conjunta; las definiciones siguientes están alineadas con el contenido de cursos de AWS Skill Builder sobre ingeniería de prompts y con el consenso estándar de seguridad en IA.</p>

          <div className="term-card">
            <h4>Exposición (exposure)</h4>
            <p>El riesgo de que información sensible o confidencial se filtre a través del modelo durante el entrenamiento o la inferencia — por ejemplo, que el modelo revele sin querer datos privados de clientes (historial de compras, datos personales) que estuvieron presentes en sus datos de entrenamiento o en el contexto de un prompt compartido.</p>
            <div className="term-short"><b>En corto</b>El riesgo de que datos sensibles se filtren a través del modelo, ya sea desde su entrenamiento o desde el contexto de un prompt.</div>
          </div>

          <div className="term-card">
            <h4>Envenenamiento (poisoning)</h4>
            <p>La introducción intencional de datos maliciosos o sesgados en el conjunto de entrenamiento (o en las fuentes que alimentan un sistema de RAG) para corromper el comportamiento del modelo, haciendo que genere salidas dañinas, ofensivas o sesgadas que pueden parecer normales a simple vista.</p>
            <div className="term-short"><b>En corto</b>Introducir datos maliciosos o sesgados en el entrenamiento (o en las fuentes de un RAG) para corromper las salidas del modelo.</div>
          </div>

          <div className="term-card">
            <h4>Secuestro (hijacking)</h4>
            <p>La técnica de influir en las salidas de un modelo insertando instrucciones específicas dentro del prompt (o de contenido que el modelo procesa) para anular o sobrescribir las instrucciones originales del sistema — un atacante puede lograr que el modelo ignore sus reglas y genere desinformación o comprometa su integridad.</p>
            <div className="term-short"><b>En corto</b>Insertar instrucciones dentro de un prompt (o del contenido que procesa) para anular las instrucciones originales del sistema.</div>
          </div>

          <div className="term-card">
            <h4>Jailbreaking</h4>
            <p>El intento intencional de saltarse los guardrails de seguridad de un modelo — por ejemplo, mediante escenarios de rol ("actúa como si no tuvieras restricciones") u otras técnicas indirectas para lograr que el modelo produzca contenido restringido que normalmente estaría bloqueado.</p>
            <div className="term-short"><b>En corto</b>Intentar saltarse deliberadamente los guardrails de seguridad de un modelo, a menudo con técnicas indirectas como el rol-play.</div>
          </div>

          <a className="back-to-top" href="#d3">↑ volver al Dominio 3</a>
        </div>

        <div className="gloss-group" id="gloss-d3-t2-b5">
          <span className="gloss-group-head">Dominio 3 · Task 3.2 · Bullet 5</span>
          <p className="gloss-bullet-text">"Describir estrategias de versionado y gestión de prompts usando Amazon Bedrock Prompt Management."</p>
          <p className="scope-note" style={{marginTop: '0.6rem'}}><strong>Nota:</strong> es UNA sola idea (cómo versionar y gestionar prompts con este servicio específico de AWS).</p>

          <div className="term-card">
            <h4>Amazon Bedrock Prompt Management</h4>
            <p>Es una función de Amazon Bedrock que permite crear, editar y guardar prompts reutilizables de forma centralizada, en vez de tenerlos dispersos y duplicados en el código de cada aplicación. Permite incluir variables (placeholders) dentro de un prompt para adaptarlo a distintos casos sin recrearlo cada vez, elegir el modelo y los parámetros de inferencia con los que correrá, y crear múltiples "variantes" de un mismo prompt para probarlas con la herramienta Prompt Builder y comparar cuál da mejores resultados antes de elegir una versión. Cada cambio queda guardado como una nueva versión, lo que permite iterar con control y volver a una versión anterior si hace falta. Una vez lista, la aplicación puede usar el prompt directamente en una llamada de inferencia o como un nodo dentro de un Amazon Bedrock Flow, evitando duplicar y desincronizar la misma lógica de prompt entre distintas partes de un sistema.</p>
            <div className="term-short"><b>En corto</b>Servicio de Bedrock para crear, versionar y probar prompts reutilizables (con variables y variantes) de forma centralizada, en vez de tenerlos dispersos y duplicados en el código.</div>
          </div>

          <a className="back-to-top" href="#d3">↑ volver al Dominio 3</a>
        </div>

        <div className="gloss-group" id="gloss-d3-t3-b1">
          <span className="gloss-group-head">Dominio 3 · Task 3.3 · Bullet 1</span>
          <p className="gloss-bullet-text">"Describir los elementos clave del entrenamiento de un FM (preentrenamiento, fine-tuning, preentrenamiento continuo, destilación)."</p>
          <p className="scope-note" style={{marginTop: '0.6rem'}}><strong>Nota:</strong> es una LISTA de 4 elementos/etapas del entrenamiento.</p>

          <div className="term-card">
            <h4>Preentrenamiento (pre-training)</h4>
            <p>La etapa inicial donde el FM aprende patrones generales del lenguaje (o de otra modalidad) a partir de un conjunto de datos masivo y no etiquetado, sin un objetivo de tarea específica todavía — es la base de todo FM y la etapa más costosa en cómputo y datos.</p>
            <div className="term-short"><b>En corto</b>La etapa inicial donde el modelo aprende patrones generales a partir de datos masivos no etiquetados — la base de todo FM.</div>
          </div>

          <div className="term-card">
            <h4>Fine-tuning</h4>
            <p>Ajustar los pesos de un FM ya preentrenado usando un conjunto de datos más pequeño y específico (a menudo etiquetado), para especializarlo en una tarea o dominio concreto.</p>
            <div className="term-short"><b>En corto</b>Ajustar un FM ya entrenado con un dataset más pequeño y específico para especializarlo en una tarea o dominio.</div>
          </div>

          <div className="term-card">
            <h4>Preentrenamiento continuo (continuous/continued pre-training)</h4>
            <p>Seguir entrenando un FM ya preentrenado con datos adicionales (normalmente no etiquetados, de un dominio específico como el legal o el médico) para actualizar su conocimiento o especializarlo en el vocabulario y estilo de ese dominio, sin llegar a un fine-tuning orientado a una tarea específica.</p>
            <div className="term-short"><b>En corto</b>Seguir entrenando un FM con más datos (a menudo de un dominio específico) para actualizar o especializar su conocimiento general, sin apuntar a una tarea puntual.</div>
          </div>

          <div className="term-card">
            <h4>Destilación (distillation)</h4>
            <p>Entrenar un modelo "estudiante" más pequeño para replicar el comportamiento de un modelo "maestro" más grande, transfiriendo su conocimiento a una versión más compacta y económica de operar.</p>
            <div className="term-short"><b>En corto</b>Entrenar un modelo pequeño para imitar a uno grande, obteniendo un modelo más barato de operar con casi el mismo comportamiento.</div>
          </div>

          <a className="back-to-top" href="#d3">↑ volver al Dominio 3</a>
        </div>

        <div className="gloss-group" id="gloss-d3-t3-b2">
          <span className="gloss-group-head">Dominio 3 · Task 3.3 · Bullet 2</span>
          <p className="gloss-bullet-text">"Definir métodos de fine-tuning de un FM (instruction tuning, adaptación de modelos a dominios específicos, transfer learning, preentrenamiento continuo)."</p>
          <p className="scope-note" style={{marginTop: '0.6rem'}}><strong>Nota:</strong> es una LISTA de 4 métodos de fine-tuning.</p>

          <div className="term-card">
            <h4>Instruction tuning</h4>
            <p>Ajustar un FM usando ejemplos de pares instrucción-respuesta (por ejemplo, "resume este texto" → resumen correcto) para que el modelo aprenda a seguir instrucciones en lenguaje natural de forma más precisa y consistente, en vez de solo predecir la siguiente palabra más probable.</p>
            <div className="term-short"><b>En corto</b>Ajustar el modelo con ejemplos de instrucción-respuesta para que siga instrucciones en lenguaje natural de forma más precisa.</div>
          </div>

          <div className="term-card">
            <h4>Adaptación de modelos a dominios específicos (domain adaptation)</h4>
            <p>Ajustar un FM con datos de un dominio particular (legal, médico, financiero) para que aprenda su terminología, estilo y matices específicos, mejorando su desempeño en ese dominio frente a un modelo genérico.</p>
            <div className="term-short"><b>En corto</b>Ajustar el modelo con datos de un dominio específico (legal, médico, etc.) para que domine su terminología y estilo particular.</div>
          </div>

          <div className="term-card">
            <h4>Transfer learning</h4>
            <p>Aprovechar el conocimiento general ya aprendido por un modelo durante su preentrenamiento (patrones de lenguaje, relaciones semánticas) y "transferirlo" a una nueva tarea específica mediante fine-tuning, en vez de aprender esa tarea desde cero — es el principio general que hace posible el fine-tuning en sí.</p>
            <div className="term-short"><b>En corto</b>Reutilizar el conocimiento general que el modelo ya aprendió en su preentrenamiento para resolver una tarea nueva, en vez de aprenderla desde cero.</div>
          </div>

          <div className="term-card">
            <h4>Preentrenamiento continuo (como método de fine-tuning)</h4>
            <p>Aquí se lista de nuevo porque también es una vía para "personalizar" un FM: en vez de ajustar el modelo para una tarea puntual (como el instruction tuning), se sigue entrenando con más datos no etiquetados de un dominio para expandir y actualizar su conocimiento de fondo antes de, opcionalmente, aplicar un fine-tuning más específico encima.</p>
            <div className="term-short"><b>En corto</b>Mismo concepto que en el bullet anterior: seguir entrenando con datos adicionales de dominio para actualizar el conocimiento de fondo del modelo, como paso previo a un ajuste más específico.</div>
          </div>

          <a className="back-to-top" href="#d3">↑ volver al Dominio 3</a>
        </div>

        <div className="gloss-group" id="gloss-d3-t3-b3">
          <span className="gloss-group-head">Dominio 3 · Task 3.3 · Bullet 3</span>
          <p className="gloss-bullet-text">"Describir cómo preparar los datos para hacer fine-tuning a un FM (curaduría de datos, gobernanza, tamaño, etiquetado, representatividad, aprendizaje por refuerzo con retroalimentación humana [RLHF])."</p>
          <p className="scope-note" style={{marginTop: '0.6rem'}}><strong>Nota:</strong> es una LISTA de 6 consideraciones de preparación de datos.</p>

          <div className="term-card">
            <h4>Curaduría de datos (data curation)</h4>
            <p>El proceso de seleccionar, limpiar y organizar los datos más relevantes y de mayor calidad para el fine-tuning, eliminando duplicados, datos irrelevantes o de baja calidad que podrían degradar el resultado del ajuste.</p>
            <div className="term-short"><b>En corto</b>Seleccionar, limpiar y organizar los datos de mejor calidad y relevancia antes de usarlos para el fine-tuning.</div>
          </div>

          <div className="term-card">
            <h4>Gobernanza</h4>
            <p>Las políticas y controles sobre quién puede usar qué datos, de dónde provienen, y bajo qué permisos (privacidad, licencias, consentimiento) se pueden usar legalmente para entrenar o ajustar un modelo.</p>
            <div className="term-short"><b>En corto</b>Las políticas que definen qué datos se pueden usar legalmente para el fine-tuning, y bajo qué permisos y procedencia.</div>
          </div>

          <div className="term-card">
            <h4>Tamaño</h4>
            <p>Cuántos ejemplos de entrenamiento se necesitan: a diferencia del preentrenamiento (que requiere datasets masivos), el fine-tuning suele funcionar con conjuntos de datos mucho más pequeños, pero deben ser suficientes en cantidad para que el modelo generalice bien y no sobreajuste (overfitting) a unos pocos ejemplos.</p>
            <div className="term-short"><b>En corto</b>El fine-tuning necesita muchos menos datos que el preentrenamiento, pero suficientes para que el modelo generalice sin sobreajustarse.</div>
          </div>

          <div className="term-card">
            <h4>Etiquetado (labeling)</h4>
            <p>Asignar la respuesta correcta o la categoría esperada a cada ejemplo del dataset de fine-tuning (por ejemplo, pares de instrucción-respuesta correctos), un paso indispensable en el fine-tuning supervisado.</p>
            <div className="term-short"><b>En corto</b>Asignar la respuesta o categoría correcta a cada ejemplo de entrenamiento — indispensable en el fine-tuning supervisado.</div>
          </div>

          <div className="term-card">
            <h4>Representatividad</h4>
            <p>Que el dataset de fine-tuning refleje adecuadamente la diversidad de casos que el modelo encontrará en producción (distintos tipos de usuarios, formulaciones, casos límite), para evitar sesgos o un desempeño pobre en escenarios subrepresentados en los datos de ajuste.</p>
            <div className="term-short"><b>En corto</b>Que los datos de fine-tuning reflejen bien la diversidad de casos reales, para evitar sesgos o fallas en escenarios poco representados.</div>
          </div>

          <div className="term-card">
            <h4>Aprendizaje por refuerzo con retroalimentación humana (RLHF)</h4>
            <p>Una técnica de ajuste donde humanos evalúan y comparan distintas respuestas del modelo (indicando cuál prefieren), y esa retroalimentación se usa para entrenar un modelo de recompensa que guía, mediante aprendizaje por refuerzo, el ajuste fino del FM hacia respuestas más alineadas con las preferencias humanas (más útiles, seguras y naturales). Es la técnica detrás de gran parte del ajuste de comportamiento de los LLMs conversacionales modernos.</p>
            <div className="term-short"><b>En corto</b>Usar preferencias humanas sobre distintas respuestas del modelo para entrenar, vía aprendizaje por refuerzo, un modelo más alineado, útil y seguro.</div>
          </div>

          <a className="back-to-top" href="#d3">↑ volver al Dominio 3</a>
        </div>

        <div className="gloss-group" id="gloss-d3-t4-b1">
          <span className="gloss-group-head">Dominio 3 · Task 3.4 · Bullet 1</span>
          <p className="gloss-bullet-text">"Determinar enfoques para evaluar el desempeño de un FM (evaluación human-in-the-loop, datasets de referencia/benchmark, Amazon Bedrock Model Evaluation)."</p>
          <p className="scope-note" style={{marginTop: '0.6rem'}}><strong>Nota:</strong> es una LISTA de 3 enfoques de evaluación.</p>

          <div className="term-card">
            <h4>Evaluación human-in-the-loop</h4>
            <p>Personas revisan y califican las respuestas del modelo (por ejemplo, comparando dos respuestas y eligiendo la mejor, o calificando en una escala) para capturar matices de calidad —tono, utilidad, corrección— que las métricas automáticas no siempre detectan bien. Es más costosa y lenta que la evaluación automática, pero suele ser la más confiable para juzgar calidad subjetiva.</p>
            <div className="term-short"><b>En corto</b>Personas evalúan directamente las respuestas del modelo — más lenta y cara que la evaluación automática, pero mejor para juzgar calidad subjetiva.</div>
          </div>

          <div className="term-card">
            <h4>Datasets de referencia/benchmark</h4>
            <p>Conjuntos de datos estandarizados y públicos, con respuestas "correctas" conocidas, que se usan para medir el desempeño de un modelo en tareas específicas y comparar distintos modelos entre sí bajo las mismas condiciones.</p>
            <div className="term-short"><b>En corto</b>Conjuntos de datos estandarizados con respuestas conocidas, usados para medir y comparar el desempeño de distintos modelos de forma objetiva.</div>
          </div>

          <div className="term-card">
            <h4>Amazon Bedrock Model Evaluation</h4>
            <p>Función de Amazon Bedrock que permite evaluar y comparar FMs (propios o de terceros disponibles en Bedrock) usando métricas automáticas integradas, datasets propios o de referencia, o incorporando evaluación humana, todo desde la consola o la API de Bedrock, sin construir la infraestructura de evaluación desde cero.</p>
            <div className="term-short"><b>En corto</b>Función administrada de Bedrock para evaluar y comparar FMs con métricas automáticas, datasets propios o evaluación humana, sin infraestructura propia.</div>
          </div>

          <a className="back-to-top" href="#d3">↑ volver al Dominio 3</a>
        </div>

        <div className="gloss-group" id="gloss-d3-t4-b2">
          <span className="gloss-group-head">Dominio 3 · Task 3.4 · Bullet 2</span>
          <p className="gloss-bullet-text">"Identificar las métricas relevantes para evaluar el desempeño de un FM (ROUGE, BLEU, BERTScore, LLM-as-a-judge)."</p>
          <p className="scope-note" style={{marginTop: '0.6rem'}}><strong>Nota:</strong> es una LISTA de 4 métricas de evaluación.</p>

          <div className="term-card">
            <h4>ROUGE (Recall-Oriented Understudy for Gisting Evaluation)</h4>
            <p>Familia de métricas usada principalmente para evaluar resúmenes generados por un modelo, midiendo cuánto se solapan las palabras o secuencias de palabras (n-gramas) entre el resumen generado y uno o más resúmenes de referencia escritos por humanos. A mayor solapamiento, mayor puntaje ROUGE.</p>
            <div className="term-short"><b>En corto</b>Mide el solapamiento de palabras entre un resumen generado por el modelo y resúmenes de referencia — usada sobre todo para evaluar resúmenes.</div>
          </div>

          <div className="term-card">
            <h4>BLEU (Bilingual Evaluation Understudy)</h4>
            <p>Métrica originalmente creada para evaluar traducción automática, que mide qué tan similar es el texto generado por el modelo frente a una o más traducciones de referencia, comparando la coincidencia de n-gramas. Se usa también, más en general, para tareas de generación de texto donde existe una salida de referencia clara.</p>
            <div className="term-short"><b>En corto</b>Mide la similitud entre el texto generado y una traducción/salida de referencia, comparando n-gramas — originada en traducción automática.</div>
          </div>

          <div className="term-card">
            <h4>BERTScore</h4>
            <p>A diferencia de ROUGE y BLEU (que comparan palabras exactas), BERTScore usa embeddings de un modelo tipo BERT para comparar el significado semántico entre el texto generado y el de referencia, capturando similitud aunque se usen palabras distintas pero con el mismo sentido — más robusta ante paráfrasis que las métricas basadas en n-gramas.</p>
            <div className="term-short"><b>En corto</b>Compara el significado semántico (vía embeddings) entre el texto generado y el de referencia, no solo las palabras exactas — más robusta ante paráfrasis.</div>
          </div>

          <div className="term-card">
            <h4>LLM-as-a-judge</h4>
            <p>Usar otro LLM (generalmente uno más grande o especializado) como evaluador automático para calificar o comparar las respuestas de un modelo, siguiendo criterios definidos en un prompt de evaluación. Es más escalable y económico que la evaluación humana, y captura mejor la calidad semántica que métricas como ROUGE/BLEU, aunque hereda los posibles sesgos y limitaciones del LLM evaluador.</p>
            <div className="term-short"><b>En corto</b>Usar un LLM para calificar las respuestas de otro modelo — más escalable que la evaluación humana, pero hereda los sesgos del LLM evaluador.</div>
          </div>

          <a className="back-to-top" href="#d3">↑ volver al Dominio 3</a>
        </div>

        <div className="gloss-group" id="gloss-d3-t4-b3">
          <span className="gloss-group-head">Dominio 3 · Task 3.4 · Bullet 3</span>
          <p className="gloss-bullet-text">"Determinar si un FM cumple efectivamente con los objetivos de negocio (productividad, engagement de usuarios, task engineering)."</p>
          <p className="scope-note" style={{marginTop: '0.6rem'}}><strong>Nota:</strong> es UNA sola idea (evaluar el cumplimiento de objetivos de negocio de un FM), ilustrada con tres ejemplos de dimensiones a considerar. <strong>Nota de transparencia:</strong> el término "task engineering" en este contexto no tiene una definición oficial única y ampliamente documentada por AWS; aquí se interpreta, según el consenso del contenido de certificación, como el diseño y ajuste de cómo se estructura una tarea para que el FM la resuelva de forma más efectiva — algo relacionado pero distinto de prompt engineering.</p>

          <div className="term-card">
            <h4>Determinar si un FM cumple los objetivos de negocio</h4>
            <p>Más allá de las métricas técnicas de calidad (ROUGE, BLEU, accuracy), la pregunta de negocio es si el FM realmente mueve la aguja en los resultados que le importan a la organización. Esto se mide observando, entre otras dimensiones: <strong>productividad</strong> — si la aplicación de GenAI realmente reduce el tiempo o esfuerzo que antes tomaba una tarea (por ejemplo, tiempo para redactar un documento o resolver un ticket); <strong>engagement de usuarios</strong> — si las personas efectivamente usan la funcionalidad de GenAI de forma recurrente y la encuentran valiosa (frecuencia de uso, retención); y <strong>task engineering</strong> — si la forma en que se diseñó y estructuró la tarea que resuelve el FM (qué se le pide, cómo se descompone el problema, qué información recibe) está realmente optimizada para lograr el resultado de negocio esperado, más allá de si el modelo "responde bien" en abstracto. En conjunto, estas dimensiones ayudan a distinguir un FM que da respuestas técnicamente correctas de uno que efectivamente resuelve el problema de negocio para el que se implementó.</p>
            <div className="term-short"><b>En corto</b>No basta con que el FM responda bien: hay que medir si mejora la productividad real, si los usuarios lo adoptan y usan (engagement), y si la tarea que resuelve está bien diseñada (task engineering) para el objetivo de negocio.</div>
          </div>

          <a className="back-to-top" href="#d3">↑ volver al Dominio 3</a>
        </div>

        <div className="gloss-group" id="gloss-d3-t4-b4">
          <span className="gloss-group-head">Dominio 3 · Task 3.4 · Bullet 4</span>
          <p className="gloss-bullet-text">"Identificar enfoques para evaluar el desempeño de aplicaciones construidas con FMs (RAG, agentes, flujos de trabajo)."</p>
          <p className="scope-note" style={{marginTop: '0.6rem'}}><strong>Nota:</strong> es una LISTA de 3 tipos de aplicación, cada uno con su propio enfoque de evaluación.</p>

          <div className="term-card">
            <h4>Evaluación de aplicaciones RAG</h4>
            <p>Además de evaluar la calidad del texto generado (con métricas como las del bullet anterior), una aplicación RAG se evalúa en dos dimensiones adicionales: la calidad de la <strong>recuperación</strong> (¿el sistema encontró los documentos/fragmentos realmente relevantes en la base vectorial?) y el <strong>grounding</strong> (¿la respuesta final está realmente fundamentada en esos documentos recuperados, o el modelo "alucinó" a pesar de tener el contexto correcto?).</p>
            <div className="term-short"><b>En corto</b>Un RAG se evalúa no solo por la calidad del texto, sino por si recuperó los documentos correctos y si la respuesta se fundamenta realmente en ellos (grounding).</div>
          </div>

          <div className="term-card">
            <h4>Evaluación de agentes</h4>
            <p>Un agente se evalúa por si logró completar la tarea de principio a fin (tasa de éxito de la tarea), si eligió las herramientas correctas en el momento correcto, cuántos pasos/llamadas necesitó (eficiencia), y si se recuperó correctamente de errores o resultados inesperados durante su ejecución — no solo por la calidad de un texto final.</p>
            <div className="term-short"><b>En corto</b>Un agente se evalúa por si completó la tarea, si usó las herramientas correctas, cuántos pasos necesitó y si manejó bien los errores en el camino.</div>
          </div>

          <div className="term-card">
            <h4>Evaluación de flujos de trabajo (workflows)</h4>
            <p>Un flujo de trabajo compuesto por varios pasos o agentes se evalúa de extremo a extremo: si el resultado final del flujo completo cumple el objetivo, además de auditar cada paso individual para identificar en qué punto específico del flujo se degrada la calidad si algo falla.</p>
            <div className="term-short"><b>En corto</b>Un workflow se evalúa de extremo a extremo (el resultado final) y también paso a paso, para ubicar dónde se degrada la calidad si algo falla.</div>
          </div>

          <a className="back-to-top" href="#d3">↑ volver al Dominio 3</a>
        </div>

        <div className="gloss-group" id="gloss-d3-t4-b5">
          <span className="gloss-group-head">Dominio 3 · Task 3.4 · Bullet 5</span>
          <p className="gloss-bullet-text">"Identificar métricas de alineación con objetivos de negocio para aplicaciones de IA (tasa de finalización de tareas, satisfacción del usuario, costo por interacción)."</p>
          <p className="scope-note" style={{marginTop: '0.6rem'}}><strong>Nota:</strong> es una LISTA de 3 métricas de negocio.</p>

          <div className="term-card">
            <h4>Tasa de finalización de tareas</h4>
            <p>El porcentaje de veces que la aplicación de IA (un agente, un asistente) logra completar exitosamente la tarea para la que fue diseñada, sin necesitar intervención humana adicional o abandono del usuario a mitad de camino.</p>
            <div className="term-short"><b>En corto</b>El porcentaje de veces que la aplicación de IA completa exitosamente la tarea para la que fue diseñada.</div>
          </div>

          <div className="term-card">
            <h4>Satisfacción del usuario</h4>
            <p>Qué tan conformes están los usuarios con las respuestas o el comportamiento de la aplicación de IA, medida a través de encuestas, calificaciones directas (thumbs up/down) o señales indirectas como la tasa de re-preguntas o quejas.</p>
            <div className="term-short"><b>En corto</b>Qué tan conformes están los usuarios con la aplicación de IA, medido con encuestas, calificaciones directas o señales indirectas.</div>
          </div>

          <div className="term-card">
            <h4>Costo por interacción</h4>
            <p>El costo total (tokens consumidos, cómputo, herramientas invocadas) dividido entre el número de interacciones o tareas completadas, permitiendo comparar si el valor generado por la aplicación de IA justifica su costo operativo por uso.</p>
            <div className="term-short"><b>En corto</b>El costo total dividido entre el número de interacciones, para saber si el valor generado justifica el costo operativo de la aplicación.</div>
          </div>

          <a className="back-to-top" href="#d3">↑ volver al Dominio 3</a>
        </div>

        <div className="gloss-group" id="gloss-d4-t1-b1">
          <span className="gloss-group-head">Dominio 4 · Task 4.1 · Bullet 1</span>
          <p className="gloss-bullet-text">"Identificar las características de una IA responsable (sesgo, equidad, inclusividad, robustez, seguridad, veracidad)."</p>
          <p className="scope-note" style={{marginTop: '0.6rem'}}><strong>Nota:</strong> es una LISTA de 6 características.</p>

          <div className="term-card">
            <h4>Sesgo (bias)</h4>
            <p>Cuando un modelo produce resultados sistemáticamente desiguales o injustos hacia ciertos grupos, generalmente porque los datos de entrenamiento sobre- o sub-representan a esos grupos, o porque reflejan sesgos históricos presentes en el mundo real. Una IA responsable busca identificar y mitigar este sesgo.</p>
            <div className="term-short"><b>En corto</b>Resultados sistemáticamente desiguales hacia ciertos grupos, normalmente por datos de entrenamiento sesgados o no representativos.</div>
          </div>

          <div className="term-card">
            <h4>Equidad (fairness)</h4>
            <p>AWS la define como considerar el impacto que tiene un sistema de IA sobre distintos grupos de interesados (stakeholders) — por ejemplo, que un sistema de scoring hipotecario no discrimine por características protegidas como raza o género. Es el objetivo positivo frente al riesgo de sesgo.</p>
            <div className="term-short"><b>En corto</b>Que el sistema de IA trate de forma justa a los distintos grupos afectados, sin discriminar por características protegidas.</div>
          </div>

          <div className="term-card">
            <h4>Inclusividad</h4>
            <p>Que el diseño, los datos y la evaluación del sistema de IA consideren deliberadamente a la diversidad de personas que usarán o serán afectadas por él (distintos orígenes, capacidades, idiomas), en vez de optimizar solo para el usuario "promedio" o mayoritario.</p>
            <div className="term-short"><b>En corto</b>Diseñar, entrenar y evaluar el sistema pensando en la diversidad real de personas que lo usarán, no solo en el usuario mayoritario.</div>
          </div>

          <div className="term-card">
            <h4>Robustez</h4>
            <p>La capacidad del sistema de IA de mantener un desempeño confiable incluso ante entradas inesperadas, ruidosas, o ligeramente distintas a las que vio en entrenamiento — que no falle de forma frágil ante variaciones razonables del mundo real.</p>
            <div className="term-short"><b>En corto</b>Que el sistema siga funcionando de forma confiable incluso ante entradas inesperadas o distintas a las de su entrenamiento.</div>
          </div>

          <div className="term-card">
            <h4>Seguridad (safety)</h4>
            <p>AWS la define como reducir las salidas dañinas y el mal uso del sistema — por ejemplo, que un sistema de trading algorítmico tenga guardrails que impidan violaciones regulatorias. Incluye tanto evitar contenido dañino como evitar que el sistema sea usado con fines maliciosos.</p>
            <div className="term-short"><b>En corto</b>Reducir las salidas dañinas y el mal uso del sistema de IA, con controles (guardrails) que limiten comportamientos riesgosos.</div>
          </div>

          <div className="term-card">
            <h4>Veracidad</h4>
            <p>AWS la agrupa junto con la robustez como "veracity & robustness": que el sistema produzca salidas correctas y fundamentadas, incluso ante entradas inesperadas, minimizando alucinaciones y afirmaciones falsas presentadas con confianza.</p>
            <div className="term-short"><b>En corto</b>Que las salidas del sistema sean correctas y estén fundamentadas, minimizando alucinaciones y afirmaciones falsas.</div>
          </div>

          <a className="back-to-top" href="#d4">↑ volver al Dominio 4</a>
        </div>

        <div className="gloss-group" id="gloss-d4-t1-b2">
          <span className="gloss-group-head">Dominio 4 · Task 4.1 · Bullet 2</span>
          <p className="gloss-bullet-text">"Explicar cómo usar herramientas para identificar características de IA responsable (Amazon Bedrock Guardrails)."</p>
          <p className="scope-note" style={{marginTop: '0.6rem'}}><strong>Nota:</strong> es UNA sola idea (cómo esta herramienta específica ayuda a implementar las características de IA responsable).</p>

          <div className="term-card">
            <h4>Amazon Bedrock Guardrails</h4>
            <p>Es una función de Amazon Bedrock que ofrece salvaguardas configurables para construir aplicaciones de GenAI de forma más segura y responsable, detectando y filtrando contenido no deseado tanto en las entradas del usuario como en las respuestas del modelo. Sus capacidades incluyen: <strong>filtros de contenido</strong> (detecta y filtra categorías como odio, insultos, contenido sexual, violencia y mala conducta, con distintos niveles de severidad configurables); <strong>temas denegados</strong> (definir temas específicos que la aplicación no debe tratar, bloqueándolos tanto en preguntas como en respuestas); <strong>filtros de palabras</strong> (bloquear términos exactos, incluyendo perfilería o nombres de competidores); <strong>filtros de información sensible</strong> (detectar y redactar o bloquear PII como números de seguridad social, fechas de nacimiento o direcciones, con detección probabilística o patrones regex personalizados); <strong>verificaciones de fundamentación contextual</strong> (contextual grounding, que detecta alucinaciones comparando la respuesta contra el material fuente, ideal para aplicaciones RAG); y <strong>verificaciones de razonamiento automatizado</strong> (que validan las respuestas contra reglas lógicas definidas). Todo esto conecta directamente con varias características de IA responsable: seguridad y veracidad (vía filtros de contenido y grounding), y privacidad (vía filtros de PII).</p>
            <div className="term-short"><b>En corto</b>Bedrock Guardrails filtra contenido dañino, bloquea temas prohibidos, redacta PII y detecta alucinaciones (vía grounding), implementando de forma concreta la seguridad, veracidad y privacidad de la IA responsable.</div>
          </div>

          <a className="back-to-top" href="#d4">↑ volver al Dominio 4</a>
        </div>

        <div className="gloss-group" id="gloss-d4-t1-b3">
          <span className="gloss-group-head">Dominio 4 · Task 4.1 · Bullet 3</span>
          <p className="gloss-bullet-text">"Definir prácticas responsables para seleccionar un modelo (consideraciones ambientales, sostenibilidad)."</p>
          <p className="scope-note" style={{marginTop: '0.6rem'}}><strong>Nota:</strong> es una LISTA de 2 conceptos estrechamente relacionados (uno es la causa/ámbito, el otro el objetivo/práctica).</p>

          <div className="term-card">
            <h4>Consideraciones ambientales</h4>
            <p>El entrenamiento y la operación de FMs consumen cantidades significativas de energía y recursos de cómputo (GPUs, centros de datos, refrigeración), lo cual tiene una huella ambiental medible. Al elegir un modelo, una práctica responsable es tomar en cuenta ese costo ambiental —por ejemplo, prefiriendo un modelo más pequeño y eficiente si cumple igual de bien la tarea, en vez de usar automáticamente el modelo más grande disponible.</p>
            <div className="term-short"><b>En corto</b>Entrenar y correr FMs consume mucha energía; elegir el modelo más pequeño que resuelva bien la tarea reduce esa huella ambiental.</div>
          </div>

          <div className="term-card">
            <h4>Sostenibilidad</h4>
            <p>Es el objetivo más amplio de operar sistemas de IA de forma que minimicen su impacto ambiental a largo plazo. AWS lo trata como uno de los pilares de su Well-Architected Framework (el pilar de Sostenibilidad), que incluye prácticas como elegir regiones de AWS con energía más limpia, usar instancias y arquitecturas más eficientes en cómputo, y monitorear el consumo de recursos de las cargas de trabajo de ML/GenAI para optimizarlas continuamente.</p>
            <div className="term-short"><b>En corto</b>Operar la IA minimizando su impacto ambiental a largo plazo — uno de los pilares del AWS Well-Architected Framework, con prácticas como elegir regiones más limpias y arquitecturas eficientes.</div>
          </div>

          <a className="back-to-top" href="#d4">↑ volver al Dominio 4</a>
        </div>

        <div className="gloss-group" id="gloss-d4-t1-b4">
          <span className="gloss-group-head">Dominio 4 · Task 4.1 · Bullet 4</span>
          <p className="gloss-bullet-text">"Identificar los riesgos legales de trabajar con GenAI (reclamos por infracción de propiedad intelectual, resultados sesgados del modelo, pérdida de confianza del cliente, riesgo para el usuario final, alucinaciones)."</p>
          <p className="scope-note" style={{marginTop: '0.6rem'}}><strong>Nota:</strong> es una LISTA de 5 riesgos legales/de negocio.</p>

          <div className="term-card">
            <h4>Reclamos por infracción de propiedad intelectual</h4>
            <p>Riesgo de que el contenido generado por un FM reproduzca (parcial o totalmente) material protegido por derechos de autor presente en sus datos de entrenamiento, exponiendo a la organización que lo usa a reclamos legales de los titulares de esos derechos. También existe la pregunta inversa: quién es dueño de los derechos sobre el contenido generado por IA.</p>
            <div className="term-short"><b>En corto</b>Riesgo de que un FM reproduzca contenido protegido por derechos de autor, exponiendo a la organización a reclamos legales.</div>
          </div>

          <div className="term-card">
            <h4>Resultados sesgados del modelo</h4>
            <p>Si un modelo produce sistemáticamente resultados discriminatorios hacia ciertos grupos (por ejemplo, en decisiones de crédito o contratación asistidas por IA), la organización puede enfrentar responsabilidad legal bajo leyes de no discriminación, además del daño reputacional.</p>
            <div className="term-short"><b>En corto</b>Resultados discriminatorios del modelo pueden generar responsabilidad legal bajo leyes de no discriminación.</div>
          </div>

          <div className="term-card">
            <h4>Pérdida de confianza del cliente</h4>
            <p>Aunque no siempre es un riesgo "legal" en sentido estricto, un incidente de GenAI que sale mal (una respuesta ofensiva, una filtración de datos, una alucinación pública) puede erosionar la confianza del cliente en la marca, con consecuencias comerciales y, en algunos casos, regulatorias si involucra protección al consumidor.</p>
            <div className="term-short"><b>En corto</b>Un incidente público de GenAI puede erosionar la confianza del cliente en la marca, con consecuencias comerciales y a veces regulatorias.</div>
          </div>

          <div className="term-card">
            <h4>Riesgo para el usuario final</h4>
            <p>Si la salida de un FM influye en una decisión con consecuencias reales para una persona (un diagnóstico médico sugerido, un consejo financiero, una decisión legal) y esa salida es incorrecta, existe el riesgo de daño directo al usuario final y responsabilidad legal asociada para quien desplegó el sistema.</p>
            <div className="term-short"><b>En corto</b>Una salida incorrecta del FM que influye en una decisión real (médica, financiera, legal) puede causar daño directo al usuario y responsabilidad legal.</div>
          </div>

          <div className="term-card">
            <h4>Alucinaciones (como riesgo legal)</h4>
            <p>Más allá de ser una limitación técnica, una alucinación —el modelo inventando información falsa presentada con confianza— se convierte en riesgo legal cuando esa información falsa se usa para tomar decisiones de negocio, se comunica a clientes como si fuera un hecho verificado, o aparece en un documento con validez legal o regulatoria.</p>
            <div className="term-short"><b>En corto</b>Una alucinación deja de ser solo un problema técnico y se vuelve un riesgo legal cuando esa información falsa se usa en decisiones o comunicaciones con consecuencias reales.</div>
          </div>

          <a className="back-to-top" href="#d4">↑ volver al Dominio 4</a>
        </div>

        <div className="gloss-group" id="gloss-d4-t1-b5">
          <span className="gloss-group-head">Dominio 4 · Task 4.1 · Bullet 5</span>
          <p className="gloss-bullet-text">"Identificar las características de los conjuntos de datos (inclusividad, diversidad, fuentes de datos curadas, datasets balanceados)."</p>
          <p className="scope-note" style={{marginTop: '0.6rem'}}><strong>Nota:</strong> es una LISTA de 4 características deseables de un dataset.</p>

          <div className="term-card">
            <h4>Inclusividad</h4>
            <p>Que el dataset contenga ejemplos suficientes de todos los grupos de personas relevantes para el sistema, sin dejar fuera sistemáticamente a poblaciones minoritarias o menos representadas en los datos disponibles por defecto.</p>
            <div className="term-short"><b>En corto</b>Que el dataset incluya ejemplos suficientes de todos los grupos relevantes, sin excluir sistemáticamente a poblaciones minoritarias.</div>
          </div>

          <div className="term-card">
            <h4>Diversidad</h4>
            <p>Que el dataset cubra una variedad amplia de situaciones, contextos y variaciones dentro de la tarea (distintos estilos de escritura, condiciones de una imagen, formulaciones de una pregunta), para que el modelo generalice bien más allá de un patrón muy estrecho de ejemplos.</p>
            <div className="term-short"><b>En corto</b>Que el dataset cubra una variedad amplia de situaciones y contextos, no solo un patrón estrecho de ejemplos.</div>
          </div>

          <div className="term-card">
            <h4>Fuentes de datos curadas</h4>
            <p>Que los datos provengan de fuentes revisadas y de calidad conocida (en vez de una recolección indiscriminada de cualquier fuente disponible), reduciendo el riesgo de incorporar datos erróneos, de baja calidad o con sesgos no controlados.</p>
            <div className="term-short"><b>En corto</b>Usar datos de fuentes revisadas y de calidad conocida, en vez de una recolección indiscriminada sin control de calidad.</div>
          </div>

          <div className="term-card">
            <h4>Datasets balanceados</h4>
            <p>Que las distintas categorías o grupos representados en el dataset tengan una proporción razonable entre sí, evitando que una clase mayoritaria domine tan abrumadoramente que el modelo termine ignorando o desempeñándose mal con las clases minoritarias.</p>
            <div className="term-short"><b>En corto</b>Que las distintas categorías o grupos del dataset estén en proporciones razonables, sin que una clase mayoritaria domine el entrenamiento.</div>
          </div>

          <a className="back-to-top" href="#d4">↑ volver al Dominio 4</a>
        </div>

        <div className="gloss-group" id="gloss-d4-t1-b6">
          <span className="gloss-group-head">Dominio 4 · Task 4.1 · Bullet 6</span>
          <p className="gloss-bullet-text">"Describir los efectos del sesgo y la varianza (efectos sobre grupos demográficos, imprecisión, overfitting, underfitting)."</p>
          <p className="scope-note" style={{marginTop: '0.6rem'}}><strong>Nota:</strong> es una LISTA de 4 efectos relacionados con el clásico trade-off sesgo-varianza del machine learning.</p>

          <div className="term-card">
            <h4>Efectos sobre grupos demográficos</h4>
            <p>Cuando el sesgo (bias) de un modelo no es aleatorio sino sistemático hacia ciertos datos de entrenamiento, sus errores tienden a afectar de forma desproporcionada a grupos demográficos específicos —normalmente aquellos subrepresentados en los datos— generando desempeño desigual entre grupos.</p>
            <div className="term-short"><b>En corto</b>Un sesgo sistemático en los datos suele traducirse en errores desproporcionados sobre grupos demográficos específicos, normalmente los subrepresentados.</div>
          </div>

          <div className="term-card">
            <h4>Imprecisión</h4>
            <p>Tanto un sesgo alto como una varianza alta se traducen, en distintas formas, en predicciones que se alejan del valor real: el sesgo produce errores sistemáticos y consistentes, mientras que la varianza produce errores inconsistentes que cambian mucho según los datos de entrenamiento usados.</p>
            <div className="term-short"><b>En corto</b>Tanto el sesgo alto como la varianza alta producen imprecisión, aunque de formas distintas: errores consistentes (sesgo) vs. errores inconsistentes (varianza).</div>
          </div>

          <div className="term-card">
            <h4>Overfitting (sobreajuste)</h4>
            <p>Ocurre cuando un modelo tiene varianza alta: aprende tan específicamente los datos de entrenamiento (incluyendo su ruido y particularidades) que memoriza en vez de generalizar, y su desempeño se degrada notablemente con datos nuevos que no ha visto antes.</p>
            <div className="term-short"><b>En corto</b>Varianza alta: el modelo memoriza los datos de entrenamiento (incluyendo su ruido) y se desempeña mal con datos nuevos.</div>
          </div>

          <div className="term-card">
            <h4>Underfitting (subajuste)</h4>
            <p>Ocurre cuando un modelo tiene sesgo alto: es demasiado simple para capturar los patrones reales de los datos, y por eso se desempeña mal tanto en los datos de entrenamiento como en datos nuevos — no ha aprendido lo suficiente, ni siquiera del propio conjunto de entrenamiento.</p>
            <div className="term-short"><b>En corto</b>Sesgo alto: el modelo es demasiado simple para capturar los patrones reales, y se desempeña mal incluso en los datos de entrenamiento.</div>
          </div>

          <a className="back-to-top" href="#d4">↑ volver al Dominio 4</a>
        </div>

        <div className="gloss-group" id="gloss-d4-t1-b7">
          <span className="gloss-group-head">Dominio 4 · Task 4.1 · Bullet 7</span>
          <p className="gloss-bullet-text">"Describir herramientas para detectar y monitorear el sesgo, la confiabilidad y la veracidad (análisis de calidad de etiquetas, auditorías humanas, análisis de subgrupos, Amazon Augmented AI / A2I)."</p>
          <p className="scope-note" style={{marginTop: '0.6rem'}}><strong>Nota:</strong> es una LISTA de 4 herramientas/técnicas.</p>

          <div className="term-card">
            <h4>Análisis de calidad de etiquetas</h4>
            <p>Revisar sistemáticamente qué tan consistentes y correctas son las etiquetas asignadas a los datos de entrenamiento (por ejemplo, midiendo el acuerdo entre distintos etiquetadores humanos), ya que etiquetas de mala calidad o inconsistentes son una fuente directa de sesgo y de baja confiabilidad del modelo.</p>
            <div className="term-short"><b>En corto</b>Revisar qué tan consistentes y correctas son las etiquetas del dataset, ya que etiquetas de mala calidad generan sesgo y baja confiabilidad.</div>
          </div>

          <div className="term-card">
            <h4>Auditorías humanas</h4>
            <p>Revisiones periódicas realizadas por personas —no automatizadas— sobre las decisiones o salidas del modelo, buscando específicamente patrones de sesgo, errores sistemáticos o comportamientos no deseados que las métricas automáticas podrían no capturar.</p>
            <div className="term-short"><b>En corto</b>Revisiones periódicas hechas por personas sobre las salidas del modelo, buscando sesgos o errores que las métricas automáticas no detectan.</div>
          </div>

          <div className="term-card">
            <h4>Análisis de subgrupos</h4>
            <p>Medir el desempeño del modelo por separado para distintos subgrupos de la población (por edad, género, región, etc.) en vez de solo mirar una métrica de desempeño agregada/promedio, lo cual permite detectar si el modelo funciona mucho peor para algún subgrupo específico aunque su desempeño general parezca bueno.</p>
            <div className="term-short"><b>En corto</b>Medir el desempeño del modelo por separado en cada subgrupo demográfico, para detectar fallas que una métrica promedio escondería.</div>
          </div>

          <div className="term-card">
            <h4>Amazon Augmented AI (A2I)</h4>
            <p>Servicio administrado de AWS que permite incorporar revisión humana de las predicciones de machine learning sin construir un sistema de revisión desde cero. Ofrece flujos de trabajo prediseñados, soporte para múltiples revisores, capacidades de auditoría, e integración tanto con otros servicios de IA de AWS como con modelos propios o de terceros. Se usa, por ejemplo, para que humanos revisen predicciones de baja confianza, documentos sensibles (reclamos de seguros, solicitudes de crédito) antes de una decisión final, retroalimentando además el reentrenamiento del modelo con esas revisiones.</p>
            <div className="term-short"><b>En corto</b>Servicio de AWS para incorporar revisión humana de predicciones de ML con flujos de trabajo prediseñados, sin construir ese sistema de revisión desde cero.</div>
          </div>

          <a className="back-to-top" href="#d4">↑ volver al Dominio 4</a>
        </div>

        <div className="gloss-group" id="gloss-d4-t2-b1">
          <span className="gloss-group-head">Dominio 4 · Task 4.2 · Bullet 1</span>
          <p className="gloss-bullet-text">"Describir las diferencias entre modelos transparentes/explicables y modelos que no lo son."</p>
          <p className="scope-note" style={{marginTop: '0.6rem'}}><strong>Nota:</strong> es UNA sola idea (la diferencia entre estos dos tipos de modelo), presentada como una comparación.</p>

          <div className="term-card">
            <h4>Modelos transparentes/explicables vs. modelos "caja negra"</h4>
            <p>Un modelo transparente/explicable es aquel cuyo proceso de decisión se puede entender y comunicar: se puede señalar qué variables influyeron en una predicción y con qué peso, y —siguiendo la definición de AWS de "explainability"— alguien puede articular el razonamiento detrás de una recomendación (por ejemplo, un asesor de inversión explicando por qué sugiere cierta acción). Modelos más simples, como árboles de decisión o regresión lineal, tienden a ser inherentemente más explicables porque su lógica interna es directa de inspeccionar. En el otro extremo están los modelos de "caja negra" —como la mayoría de los FMs y redes neuronales profundas, con millones o miles de millones de parámetros— donde es extremadamente difícil trazar por qué el modelo llegó a una salida específica: se puede observar la entrada y la salida, pero el razonamiento intermedio no es directamente interpretable por un humano. Esta diferencia importa porque la explicabilidad afecta la confianza de usuarios y reguladores, la capacidad de auditar decisiones automatizadas, y el cumplimiento normativo en industrias donde se exige justificar una decisión (crédito, salud, seguros).</p>
            <div className="term-short"><b>En corto</b>Un modelo transparente permite explicar por qué llegó a una decisión (como un árbol de decisión); un modelo "caja negra" (como la mayoría de los FMs) no permite trazar ese razonamiento, lo cual afecta confianza, auditoría y cumplimiento normativo.</div>
          </div>

          <a className="back-to-top" href="#d4">↑ volver al Dominio 4</a>
        </div>

        <div className="gloss-group" id="gloss-d4-t2-b2">
          <span className="gloss-group-head">Dominio 4 · Task 4.2 · Bullet 2</span>
          <p className="gloss-bullet-text">"Describir herramientas para identificar modelos transparentes y explicables (Amazon SageMaker Model Cards, Amazon Bedrock Model Evaluations, modelos, datos y licenciamiento de código abierto)."</p>
          <p className="scope-note" style={{marginTop: '0.6rem'}}><strong>Nota:</strong> es una LISTA de 3 herramientas/enfoques.</p>

          <div className="term-card">
            <h4>Amazon SageMaker Model Cards</h4>
            <p>Herramienta de documentación que reúne en un solo lugar centralizado los detalles críticos de un modelo de ML, para facilitar su gobernanza y reporte: descripción general (algoritmo, creador, tipo de problema), usos previstos y no recomendados, una calificación de riesgo (unknown/low/medium/high), detalles de entrenamiento (datasets, hiperparámetros, métricas), resultados de evaluación, y consideraciones éticas. Cualquier edición (salvo el estado de aprobación) crea una nueva versión, manteniendo un registro inmutable y trazable de los cambios del modelo a lo largo de su ciclo de vida — clave para auditorías y cumplimiento.</p>
            <div className="term-short"><b>En corto</b>Documento centralizado e inmutable por versión que registra el propósito, entrenamiento, riesgo y evaluación de un modelo, facilitando su auditoría y gobernanza.</div>
          </div>

          <div className="term-card">
            <h4>Amazon Bedrock Model Evaluations</h4>
            <p>Al permitir evaluar y comparar el desempeño de distintos FMs con métricas automáticas, datasets propios o evaluación humana, esta función también aporta transparencia: documenta objetivamente cómo se comporta un modelo frente a ciertas tareas o criterios, en vez de depender solo de las afirmaciones del proveedor del modelo.</p>
            <div className="term-short"><b>En corto</b>Al evaluar objetivamente el desempeño de un FM con métricas y datos propios, aporta evidencia verificable sobre su comportamiento, más allá de lo que afirma el proveedor.</div>
          </div>

          <div className="term-card">
            <h4>Modelos, datos y licenciamiento de código abierto</h4>
            <p>Cuando un modelo es de código abierto (sus pesos y, a veces, su código de entrenamiento son públicos) y sus datos y licencia también son abiertos y documentados, terceros pueden inspeccionar, auditar y reproducir su comportamiento de forma independiente — un nivel de transparencia que normalmente no está disponible con FMs propietarios de "caja negra" ofrecidos solo como una API.</p>
            <div className="term-short"><b>En corto</b>Modelos y datos abiertos permiten que terceros inspeccionen y auditen el modelo de forma independiente, algo que un FM propietario cerrado no permite.</div>
          </div>

          <a className="back-to-top" href="#d4">↑ volver al Dominio 4</a>
        </div>

        <div className="gloss-group" id="gloss-d4-t2-b3">
          <span className="gloss-group-head">Dominio 4 · Task 4.2 · Bullet 3</span>
          <p className="gloss-bullet-text">"Identificar las contrapartidas entre la seguridad del modelo y su transparencia (interpretabilidad frente a desempeño)."</p>
          <p className="scope-note" style={{marginTop: '0.6rem'}}><strong>Nota:</strong> es UNA sola idea (un único trade-off central), con dos caras.</p>

          <div className="term-card">
            <h4>Interpretabilidad frente a desempeño</h4>
            <p>Existe una tensión frecuente en machine learning: los modelos más interpretables (regresión lineal, árboles de decisión poco profundos) suelen tener una capacidad limitada para capturar relaciones complejas en los datos, mientras que los modelos con mejor desempeño en tareas difíciles (redes neuronales profundas, FMs) logran esa capacidad justamente a costa de una arquitectura mucho más compleja e imposible de interpretar directamente. Esto crea una contrapartida real al elegir un modelo: para tareas donde la explicabilidad es un requisito legal o de negocio (por ejemplo, justificar el rechazo de un crédito), puede ser necesario aceptar un desempeño algo menor a cambio de un modelo interpretable, o bien usar un modelo de caja negra de alto desempeño junto con técnicas adicionales (como SageMaker Model Cards, o herramientas de interpretabilidad post-hoc) para aproximar una explicación, sabiendo que esa explicación es una aproximación y no el razonamiento interno real del modelo.</p>
            <div className="term-short"><b>En corto</b>Los modelos más fáciles de interpretar suelen rendir menos en tareas complejas, y los modelos de mejor desempeño (como los FMs) suelen ser los más difíciles de interpretar — hay que elegir conscientemente ese balance según el caso de uso.</div>
          </div>

          <a className="back-to-top" href="#d4">↑ volver al Dominio 4</a>
        </div>

        <div className="gloss-group" id="gloss-d4-t2-b4">
          <span className="gloss-group-head">Dominio 4 · Task 4.2 · Bullet 4</span>
          <p className="gloss-bullet-text">"Describir los principios del diseño centrado en el humano para una IA explicable (mecanismos de retroalimentación del usuario, transparencia en las decisiones de la IA)."</p>
          <p className="scope-note" style={{marginTop: '0.6rem'}}><strong>Nota:</strong> es una LISTA de 2 principios.</p>

          <div className="term-card">
            <h4>Mecanismos de retroalimentación del usuario</h4>
            <p>Diseñar el sistema de IA de forma que las personas que lo usan puedan señalar cuándo una salida es incorrecta, inapropiada o no útil (por ejemplo, con un botón de "esta respuesta no fue útil", o la posibilidad de corregir una clasificación), y que esa retroalimentación efectivamente se use para mejorar el sistema con el tiempo — un principio central del diseño centrado en el humano aplicado a la IA.</p>
            <div className="term-short"><b>En corto</b>Dar a los usuarios una forma clara de señalar cuándo una salida de IA está mal, y usar esa retroalimentación para mejorar el sistema.</div>
          </div>

          <div className="term-card">
            <h4>Transparencia en las decisiones de la IA</h4>
            <p>Comunicar abiertamente a las personas afectadas cuándo y cómo se está usando IA en una decisión que las involucra, qué datos informaron esa decisión, y qué mecanismos de control o apelación existen — alineado con la definición de AWS de "transparency" como habilitar una participación informada de los interesados. Esto incluye, por ejemplo, indicar claramente cuándo un usuario está interactuando con un chatbot de IA y no con una persona.</p>
            <div className="term-short"><b>En corto</b>Comunicar abiertamente cuándo y cómo se usa IA en una decisión, qué datos la informaron, y qué opciones de control o apelación tiene la persona afectada.</div>
          </div>

          <a className="back-to-top" href="#d4">↑ volver al Dominio 4</a>
        </div>

        <div className="gloss-group" id="gloss-d5-t1-b1">
          <span className="gloss-group-head">Dominio 5 · Task 5.1 · Bullet 1</span>
          <p className="gloss-bullet-text">"Identificar los servicios y funciones de AWS para asegurar sistemas de IA (roles, políticas y permisos de IAM; cifrado; Amazon Macie; AWS PrivateLink; modelo de responsabilidad compartida de AWS; Amazon Bedrock AgentCore Identity; Policy en AgentCore; Amazon Bedrock Guardrails)."</p>
          <p className="scope-note" style={{marginTop: '0.6rem'}}><strong>Nota:</strong> es una LISTA de 8 servicios/funciones/modelos de seguridad.</p>

          <div className="term-card">
            <h4>Roles, políticas y permisos de IAM</h4>
            <p>AWS Identity and Access Management controla quién (usuarios, servicios, agentes) puede hacer qué sobre qué recursos de IA/ML. Un <strong>rol</strong> es una identidad que un servicio o agente puede asumir temporalmente; una <strong>política</strong> es un documento JSON que define permisos permitidos o denegados; el principio de menor privilegio recomienda otorgar solo los permisos estrictamente necesarios, por ejemplo para que una aplicación pueda invocar un modelo de Bedrock pero no modificar la configuración de la cuenta.</p>
            <div className="term-short"><b>En corto</b>IAM controla quién puede hacer qué sobre los recursos de IA mediante roles (identidades temporales) y políticas (permisos definidos), aplicando el principio de menor privilegio.</div>
          </div>

          <div className="term-card">
            <h4>Cifrado</h4>
            <p>Proteger los datos y modelos tanto en reposo (almacenados, por ejemplo con AWS KMS) como en tránsito (mientras viajan por la red, con TLS), para que aunque alguien intercepte o acceda al almacenamiento sin autorización, no pueda leer la información sin la clave correspondiente.</p>
            <div className="term-short"><b>En corto</b>Proteger datos y modelos en reposo (KMS) y en tránsito (TLS) para que sean ilegibles sin la clave adecuada, incluso si son interceptados.</div>
          </div>

          <div className="term-card">
            <h4>Amazon Macie</h4>
            <p>Servicio administrado que usa machine learning y coincidencia de patrones para descubrir, monitorear y proteger datos sensibles (PII, información financiera, credenciales) almacenados en Amazon S3. Para sistemas de IA es clave porque permite detectar datos sensibles en los datasets de entrenamiento antes de que se usen para entrenar o hacer fine-tuning a un modelo, evitando exponer esa información.</p>
            <div className="term-short"><b>En corto</b>Servicio que usa ML para descubrir y proteger datos sensibles en S3 — útil para detectar PII en datasets antes de usarlos para entrenar un modelo.</div>
          </div>

          <div className="term-card">
            <h4>AWS PrivateLink</h4>
            <p>Permite conectar servicios de AWS (como Bedrock o SageMaker) desde una VPC privada sin que el tráfico salga a la internet pública, creando un endpoint privado dentro de la propia red. Esto reduce la superficie de ataque y ayuda a cumplir requisitos donde los datos sensibles no pueden transitar por redes públicas.</p>
            <div className="term-short"><b>En corto</b>Conecta servicios de AWS (como Bedrock) desde una red privada sin pasar por internet pública, reduciendo la superficie de ataque.</div>
          </div>

          <div className="term-card">
            <h4>Modelo de responsabilidad compartida de AWS</h4>
            <p>AWS es responsable de la seguridad "de" la nube (la infraestructura física, el hardware, la red global); el cliente es responsable de la seguridad "en" la nube (cómo configura IAM, cómo cifra sus datos, qué modelos de Bedrock usa y con qué guardrails, cómo protege sus propias aplicaciones de IA). Entender esta división es clave para no asumir que AWS resuelve automáticamente toda la seguridad del sistema de IA que uno construye sobre sus servicios.</p>
            <div className="term-short"><b>En corto</b>AWS asegura la infraestructura subyacente ("de" la nube); el cliente es responsable de cómo configura y usa esos servicios ("en" la nube), incluyendo sus sistemas de IA.</div>
          </div>

          <div className="term-card">
            <h4>Amazon Bedrock AgentCore Identity</h4>
            <p>Servicio dentro de Bedrock AgentCore para la gestión centralizada de identidades y credenciales de agentes de IA (identidades "no humanas"), soportando métodos de autenticación como AWS SigV4, flujos OAuth 2.0 y API keys. Permite que los agentes accedan de forma segura tanto a servicios de AWS como a herramientas externas, verificando explícitamente cada solicitud de acceso sin importar su origen.</p>
            <div className="term-short"><b>En corto</b>Gestión centralizada de identidades y credenciales para agentes de IA en AgentCore, con soporte para SigV4, OAuth 2.0 y API keys.</div>
          </div>

          <div className="term-card">
            <h4>Policy en AgentCore</h4>
            <p>Al igual que con cualquier otro servicio de AWS, los agentes desplegados en Bedrock AgentCore se rigen por políticas de IAM basadas en identidad, que definen explícitamente qué acciones puede realizar un agente (qué herramientas invocar, qué datos leer o escribir) — extendiendo el modelo estándar de permisos de IAM al contexto específico de agentes autónomos.</p>
            <div className="term-short"><b>En corto</b>Políticas de IAM aplicadas específicamente a los agentes de AgentCore, definiendo qué acciones y herramientas puede usar cada agente.</div>
          </div>

          <div className="term-card">
            <h4>Amazon Bedrock Guardrails (como control de seguridad)</h4>
            <p>Ya explicado en el Dominio 4 como herramienta de IA responsable, Guardrails también es, en esencia, un control de seguridad: filtra contenido dañino, bloquea temas prohibidos, redacta información sensible (PII) y detecta intentos de manipular al modelo — funcionando como una capa de defensa activa sobre las entradas y salidas del sistema de IA.</p>
            <div className="term-short"><b>En corto</b>Además de ser una herramienta de IA responsable, Guardrails funciona como control de seguridad activo: filtra contenido dañino, bloquea temas prohibidos y redacta PII.</div>
          </div>

          <a className="back-to-top" href="#d5">↑ volver al Dominio 5</a>
        </div>

        <div className="gloss-group" id="gloss-d5-t1-b2">
          <span className="gloss-group-head">Dominio 5 · Task 5.1 · Bullet 2</span>
          <p className="gloss-bullet-text">"Describir el concepto de citación de fuentes y documentación del origen de los datos (linaje de datos, catalogación de datos, Amazon SageMaker Model Cards)."</p>
          <p className="scope-note" style={{marginTop: '0.6rem'}}><strong>Nota:</strong> es una LISTA de 3 conceptos relacionados con la trazabilidad de los datos y modelos.</p>

          <div className="term-card">
            <h4>Linaje de datos (data lineage)</h4>
            <p>El registro de todo el recorrido que siguen los datos desde su origen hasta su uso final: de dónde vinieron, qué transformaciones sufrieron, y en qué modelos o análisis terminaron siendo usados. Esto permite, ante un problema (un dato incorrecto, un sesgo detectado), rastrear hacia atrás exactamente de dónde vino ese dato y qué se hizo con él. En AWS, servicios como Amazon DataZone ofrecen capacidades de linaje de datos.</p>
            <div className="term-short"><b>En corto</b>Registrar de dónde vienen los datos y qué transformaciones sufrieron, permitiendo rastrear un problema hasta su origen exacto.</div>
          </div>

          <div className="term-card">
            <h4>Catalogación de datos (data cataloging)</h4>
            <p>Mantener un inventario centralizado y buscable de qué datasets existen, dónde están almacenados, qué esquema tienen y qué significan sus campos — en AWS, esto lo ofrece el AWS Glue Data Catalog, que permite descubrir y documentar automáticamente los metadatos de los datos disponibles para usarlos, por ejemplo, en un pipeline de ML.</p>
            <div className="term-short"><b>En corto</b>Un inventario centralizado y buscable de qué datasets existen y qué contienen — en AWS, el AWS Glue Data Catalog.</div>
          </div>

          <div className="term-card">
            <h4>Amazon SageMaker Model Cards (para citación de fuentes)</h4>
            <p>Ya descrito en el Dominio 4 como herramienta de transparencia, Model Cards también cumple aquí un rol de citación de fuentes: documenta explícitamente qué datasets se usaron para entrenar un modelo, permitiendo a cualquiera que audite el modelo saber de dónde provino el conocimiento que codifica.</p>
            <div className="term-short"><b>En corto</b>Model Cards documenta explícitamente qué datasets entrenaron un modelo, funcionando como una forma de citar el origen de sus datos.</div>
          </div>

          <a className="back-to-top" href="#d5">↑ volver al Dominio 5</a>
        </div>

        <div className="gloss-group" id="gloss-d5-t1-b3">
          <span className="gloss-group-head">Dominio 5 · Task 5.1 · Bullet 3</span>
          <p className="gloss-bullet-text">"Describir las buenas prácticas de ingeniería de datos segura (evaluación de la calidad de los datos, tecnologías que mejoran la privacidad, control de acceso a los datos, integridad de los datos)."</p>
          <p className="scope-note" style={{marginTop: '0.6rem'}}><strong>Nota:</strong> es una LISTA de 4 buenas prácticas.</p>

          <div className="term-card">
            <h4>Evaluación de la calidad de los datos</h4>
            <p>Revisar sistemáticamente los datos antes de usarlos (buscando valores faltantes, duplicados, inconsistencias o errores) porque datos de mala calidad no solo afectan el desempeño del modelo, sino que pueden introducir vulnerabilidades de seguridad si, por ejemplo, contienen datos maliciosos o mal etiquetados sin detectar.</p>
            <div className="term-short"><b>En corto</b>Revisar sistemáticamente los datos (valores faltantes, duplicados, errores) antes de usarlos, evitando problemas de calidad y seguridad.</div>
          </div>

          <div className="term-card">
            <h4>Tecnologías que mejoran la privacidad (PETs)</h4>
            <p>Técnicas como la anonimización, la seudonimización, el cifrado homomórfico o el aprendizaje federado, que permiten trabajar con datos sensibles reduciendo el riesgo de exponer información identificable de personas — permitiendo, por ejemplo, entrenar modelos útiles sin necesitar acceso directo a los datos personales en texto plano.</p>
            <div className="term-short"><b>En corto</b>Técnicas como anonimización o cifrado homomórfico que permiten trabajar con datos sensibles reduciendo el riesgo de exponer información personal.</div>
          </div>

          <div className="term-card">
            <h4>Control de acceso a los datos</h4>
            <p>Definir explícitamente quién (personas, servicios, pipelines) puede leer, escribir o modificar cada conjunto de datos, usando mecanismos como políticas de IAM, permisos a nivel de bucket de S3, o controles de acceso más granulares (a nivel de fila o columna) en servicios como Lake Formation.</p>
            <div className="term-short"><b>En corto</b>Definir explícitamente quién puede leer, escribir o modificar cada dataset, usando permisos de IAM, S3 o herramientas como Lake Formation.</div>
          </div>

          <div className="term-card">
            <h4>Integridad de los datos</h4>
            <p>Garantizar que los datos no sean alterados de forma no autorizada o accidental entre su origen y su uso — mediante técnicas como checksums, versionado de datasets, y registros de auditoría que detecten cualquier modificación inesperada de los datos usados para entrenar o hacer inferencia con un modelo.</p>
            <div className="term-short"><b>En corto</b>Garantizar que los datos no se alteren de forma no autorizada, usando checksums, versionado y registros de auditoría.</div>
          </div>

          <a className="back-to-top" href="#d5">↑ volver al Dominio 5</a>
        </div>

        <div className="gloss-group" id="gloss-d5-t1-b4">
          <span className="gloss-group-head">Dominio 5 · Task 5.1 · Bullet 4</span>
          <p className="gloss-bullet-text">"Describir las consideraciones de seguridad y privacidad para sistemas de IA (seguridad de aplicaciones, detección de amenazas, gestión de vulnerabilidades, protección de infraestructura, inyección de prompts, cifrado en reposo y en tránsito, prevención de fuga de datos, filtrado y validación de salidas, requisitos de auditoría y registro de interacciones de IA, toxicidad)."</p>
          <p className="scope-note" style={{marginTop: '0.6rem'}}><strong>Nota:</strong> es una LISTA extensa de 10 consideraciones de seguridad y privacidad.</p>

          <div className="term-card">
            <h4>Seguridad de aplicaciones</h4>
            <p>Aplicar las mismas prácticas estándar de seguridad de software (validación de entradas, gestión segura de secretos, control de dependencias) a la capa de la aplicación que envuelve al modelo de IA, no solo al modelo en sí — un atacante puede explotar la aplicación alrededor del modelo, no solo el modelo.</p>
            <div className="term-short"><b>En corto</b>Aplicar prácticas estándar de seguridad de software a toda la aplicación que envuelve al modelo, no solo al modelo mismo.</div>
          </div>

          <div className="term-card">
            <h4>Detección de amenazas</h4>
            <p>Monitorear de forma continua el sistema de IA en busca de patrones de comportamiento anómalos o maliciosos (intentos de extracción de datos, patrones de uso inusuales) que puedan indicar un ataque en curso, usando herramientas de monitoreo y análisis de logs.</p>
            <div className="term-short"><b>En corto</b>Monitorear continuamente el sistema en busca de patrones anómalos que indiquen un ataque en curso.</div>
          </div>

          <div className="term-card">
            <h4>Gestión de vulnerabilidades</h4>
            <p>Identificar, priorizar y remediar de forma proactiva debilidades conocidas en el software, las dependencias o la configuración del sistema de IA (por ejemplo, con Amazon Inspector) antes de que puedan ser explotadas.</p>
            <div className="term-short"><b>En corto</b>Identificar y remediar proactivamente debilidades conocidas en el software o configuración del sistema, antes de que se exploten.</div>
          </div>

          <div className="term-card">
            <h4>Protección de infraestructura</h4>
            <p>Asegurar la capa de red y cómputo sobre la que corre el sistema de IA: configuración correcta de VPCs, grupos de seguridad, PrivateLink para evitar exposición innecesaria a internet, y separación de entornos de desarrollo/producción.</p>
            <div className="term-short"><b>En corto</b>Asegurar correctamente la red y el cómputo subyacentes (VPCs, grupos de seguridad, PrivateLink) donde corre el sistema de IA.</div>
          </div>

          <div className="term-card">
            <h4>Inyección de prompts (prompt injection)</h4>
            <p>Un ataque donde se inserta contenido malicioso —directamente en el prompt del usuario, o indirectamente en un documento que el modelo procesa (por ejemplo, vía RAG)— con la intención de que el modelo ignore sus instrucciones originales y ejecute las instrucciones del atacante. Es una de las amenazas de seguridad más específicas y discutidas de los sistemas basados en LLMs.</p>
            <div className="term-short"><b>En corto</b>Insertar instrucciones maliciosas en un prompt (o en un documento que el modelo procesa) para que ignore sus instrucciones originales.</div>
          </div>

          <div className="term-card">
            <h4>Cifrado en reposo y en tránsito</h4>
            <p>Como se mencionó en el bullet anterior sobre servicios de AWS: cifrar los datos almacenados (en reposo, con KMS) y los datos que viajan por la red (en tránsito, con TLS), aplicado aquí específicamente a los datos y comunicaciones de un sistema de IA (prompts, respuestas, embeddings, pesos del modelo).</p>
            <div className="term-short"><b>En corto</b>Cifrar los datos almacenados (KMS) y los que viajan por la red (TLS), incluyendo prompts, respuestas y embeddings del sistema de IA.</div>
          </div>

          <div className="term-card">
            <h4>Prevención de fuga de datos</h4>
            <p>Evitar que información sensible salga del sistema sin autorización — ya sea que un modelo revele sin querer datos de entrenamiento confidenciales en sus respuestas, o que un usuario extraiga información sensible mediante prompts diseñados específicamente para ese fin.</p>
            <div className="term-short"><b>En corto</b>Evitar que información sensible salga del sistema sin autorización, ya sea por diseño del modelo o por prompts diseñados para extraerla.</div>
          </div>

          <div className="term-card">
            <h4>Filtrado y validación de salidas</h4>
            <p>Revisar automáticamente (por ejemplo, con Bedrock Guardrails) la respuesta generada por el modelo antes de entregarla al usuario final, para bloquear o corregir contenido dañino, información sensible expuesta, o salidas que no cumplan con las políticas de la aplicación.</p>
            <div className="term-short"><b>En corto</b>Revisar automáticamente la salida del modelo antes de entregarla al usuario, bloqueando contenido dañino o información sensible.</div>
          </div>

          <div className="term-card">
            <h4>Requisitos de auditoría y registro de interacciones de IA</h4>
            <p>Mantener registros (logs) detallados de las interacciones con el sistema de IA —qué se preguntó, qué respondió el modelo, qué acciones tomó un agente— tanto para poder investigar incidentes después de que ocurren, como para cumplir con requisitos regulatorios que exigen trazabilidad de las decisiones automatizadas. En AWS, esto se apoya en servicios como AWS CloudTrail.</p>
            <div className="term-short"><b>En corto</b>Mantener logs detallados de las interacciones con el sistema de IA, tanto para investigar incidentes como para cumplir requisitos regulatorios.</div>
          </div>

          <div className="term-card">
            <h4>Toxicidad</h4>
            <p>El riesgo de que el modelo genere contenido ofensivo, de odio, sexual o violento; se mitiga con filtros de contenido específicos para toxicidad, como los que ofrece Amazon Bedrock Guardrails, aplicados tanto a las entradas del usuario como a las salidas del modelo.</p>
            <div className="term-short"><b>En corto</b>El riesgo de que el modelo genere contenido ofensivo o dañino; se mitiga con filtros de contenido específicos, como los de Bedrock Guardrails.</div>
          </div>

          <a className="back-to-top" href="#d5">↑ volver al Dominio 5</a>
        </div>

        <div className="gloss-group" id="gloss-d5-t1-b5">
          <span className="gloss-group-head">Dominio 5 · Task 5.1 · Bullet 5</span>
          <p className="gloss-bullet-text">"Describir métodos de detección de alucinaciones y técnicas de grounding para mejorar la precisión de las salidas (grounding con RAG, validación de salidas, puntuación de confianza)."</p>
          <p className="scope-note" style={{marginTop: '0.6rem'}}><strong>Nota:</strong> es una LISTA de 3 métodos/técnicas.</p>

          <div className="term-card">
            <h4>Grounding con RAG</h4>
            <p>Fundamentar (grounding) las respuestas del modelo en documentos reales recuperados de una base de conocimiento, en vez de depender únicamente de lo que el modelo "recuerda" de su entrenamiento — esto reduce significativamente las alucinaciones porque la respuesta se genera a partir de contexto verificable. Amazon Bedrock Guardrails incluye además una función específica de "contextual grounding check" que compara la respuesta generada contra el material fuente para detectar cuándo el modelo se desvió del contexto recuperado.</p>
            <div className="term-short"><b>En corto</b>Fundamentar las respuestas en documentos reales recuperados (RAG) en vez de solo la memoria del modelo, reduciendo alucinaciones — Bedrock Guardrails incluye una verificación específica de esto.</div>
          </div>

          <div className="term-card">
            <h4>Validación de salidas</h4>
            <p>Verificar de forma automática o semi-automática que la respuesta del modelo cumple ciertos criterios antes de aceptarla — por ejemplo, comprobar que un dato citado realmente aparece en el documento fuente, que un cálculo es correcto, o que el formato de salida es válido — actuando como una segunda capa de control después de la generación.</p>
            <div className="term-short"><b>En corto</b>Verificar automáticamente que la respuesta cumple ciertos criterios (datos correctos, formato válido) antes de aceptarla, como control posterior a la generación.</div>
          </div>

          <div className="term-card">
            <h4>Puntuación de confianza (confidence scoring)</h4>
            <p>Asignar un valor numérico que indica qué tan segura está la salida del sistema (por ejemplo, qué tan bien respaldado está un fragmento recuperado por RAG, o la probabilidad asociada a una predicción), permitiendo que la aplicación decida automáticamente cuándo mostrar la respuesta con confianza, cuándo advertir al usuario de baja certeza, o cuándo escalar a revisión humana.</p>
            <div className="term-short"><b>En corto</b>Un valor numérico que indica qué tan segura es una salida, permitiendo decidir cuándo confiar en ella, advertir al usuario, o escalar a revisión humana.</div>
          </div>

          <a className="back-to-top" href="#d5">↑ volver al Dominio 5</a>
        </div>

        <div className="gloss-group" id="gloss-d5-t2-b1">
          <span className="gloss-group-head">Dominio 5 · Task 5.2 · Bullet 1</span>
          <p className="gloss-bullet-text">"Identificar los servicios y funciones de AWS que ayudan con la gobernanza y el cumplimiento normativo (AWS Config, Amazon Inspector, AWS Audit Manager, AWS Artifact, AWS CloudTrail, AWS Trusted Advisor)."</p>
          <p className="scope-note" style={{marginTop: '0.6rem'}}><strong>Nota:</strong> es una LISTA de 6 servicios de AWS.</p>

          <div className="term-card">
            <h4>AWS Config</h4>
            <p>Servicio que registra y evalúa continuamente la configuración de los recursos de AWS, permitiendo verificar que cumplen con reglas definidas (por ejemplo, que ningún bucket de S3 con datos de entrenamiento sea público) y notificando cuando algo se desvía de la configuración esperada.</p>
            <div className="term-short"><b>En corto</b>Registra y evalúa continuamente la configuración de los recursos de AWS, alertando cuando algo se desvía de las reglas definidas.</div>
          </div>

          <div className="term-card">
            <h4>Amazon Inspector</h4>
            <p>Servicio de gestión de vulnerabilidades que escanea automáticamente cargas de trabajo (instancias EC2, contenedores, funciones Lambda) en busca de vulnerabilidades de software conocidas y exposición de red no intencionada, relevante para asegurar la infraestructura que soporta un sistema de IA.</p>
            <div className="term-short"><b>En corto</b>Escanea automáticamente la infraestructura en busca de vulnerabilidades de software conocidas y exposiciones de red no intencionadas.</div>
          </div>

          <div className="term-card">
            <h4>AWS Audit Manager</h4>
            <p>Automatiza la recolección continua de evidencia sobre cómo se están usando los recursos de AWS, para facilitar la preparación de auditorías frente a marcos regulatorios o de cumplimiento (como PCI DSS, HIPAA), reduciendo el trabajo manual de reunir esa evidencia.</p>
            <div className="term-short"><b>En corto</b>Automatiza la recolección de evidencia de cumplimiento normativo, facilitando la preparación de auditorías frente a marcos regulatorios.</div>
          </div>

          <div className="term-card">
            <h4>AWS Artifact</h4>
            <p>Portal de autoservicio para descargar los informes de cumplimiento y certificaciones de seguridad de AWS (SOC, PCI, ISO, entre otros), y para revisar y aceptar acuerdos relevantes de cumplimiento con AWS — útil para demostrar a auditores o reguladores en qué certificaciones se apoya la infraestructura subyacente.</p>
            <div className="term-short"><b>En corto</b>Portal para descargar los informes y certificaciones de cumplimiento de AWS (SOC, ISO, PCI), útiles para auditorías propias.</div>
          </div>

          <div className="term-card">
            <h4>AWS CloudTrail</h4>
            <p>Registra de forma continua todas las llamadas a la API realizadas en una cuenta de AWS —quién hizo qué, cuándo y desde dónde—, incluyendo las invocaciones a servicios de IA como Bedrock o SageMaker, proporcionando el registro de auditoría necesario para investigar incidentes o demostrar cumplimiento.</p>
            <div className="term-short"><b>En corto</b>Registra todas las llamadas a la API en la cuenta (quién hizo qué y cuándo), incluyendo el uso de servicios de IA — la base del registro de auditoría.</div>
          </div>

          <div className="term-card">
            <h4>AWS Trusted Advisor</h4>
            <p>Analiza la cuenta de AWS y da recomendaciones automatizadas en categorías como costo, desempeño, seguridad, tolerancia a fallos y cuotas de servicio, ayudando a detectar configuraciones subóptimas o riesgosas (incluyendo en los servicios que soportan cargas de trabajo de IA) antes de que se conviertan en un problema.</p>
            <div className="term-short"><b>En corto</b>Da recomendaciones automatizadas sobre costo, seguridad y desempeño de la cuenta, ayudando a detectar configuraciones riesgosas a tiempo.</div>
          </div>

          <a className="back-to-top" href="#d5">↑ volver al Dominio 5</a>
        </div>

        <div className="gloss-group" id="gloss-d5-t2-b2">
          <span className="gloss-group-head">Dominio 5 · Task 5.2 · Bullet 2</span>
          <p className="gloss-bullet-text">"Describir estrategias de gobernanza de datos (ciclos de vida de los datos, registro/logging, residencia de datos, monitoreo, observación, retención)."</p>
          <p className="scope-note" style={{marginTop: '0.6rem'}}><strong>Nota:</strong> es una LISTA de 6 estrategias/conceptos de gobernanza de datos.</p>

          <div className="term-card">
            <h4>Ciclos de vida de los datos</h4>
            <p>Gestionar explícitamente las distintas etapas por las que pasa un dato —creación/ingesta, uso activo, archivado, y eventual eliminación— definiendo políticas para cada etapa (por ejemplo, mover automáticamente datos poco usados a almacenamiento más barato, o eliminarlos después de cierto tiempo).</p>
            <div className="term-short"><b>En corto</b>Gestionar las etapas por las que pasa un dato (creación, uso, archivado, eliminación) con políticas definidas para cada una.</div>
          </div>

          <div className="term-card">
            <h4>Registro/logging</h4>
            <p>Mantener registros sistemáticos de cómo se accede, modifica y usa cada dataset, generando un rastro auditable de la actividad sobre los datos —similar en espíritu a lo que hace CloudTrail para las APIs, pero enfocado específicamente en el acceso y uso de los datos.</p>
            <div className="term-short"><b>En corto</b>Mantener un rastro auditable de cómo se accede, modifica y usa cada dataset a lo largo del tiempo.</div>
          </div>

          <div className="term-card">
            <h4>Residencia de datos (data residency)</h4>
            <p>Garantizar que ciertos datos permanezcan almacenados y se procesen únicamente dentro de una región geográfica o jurisdicción específica, algo frecuentemente exigido por regulaciones locales (por ejemplo, GDPR en la UE) — relevante al elegir en qué región de AWS desplegar un sistema de IA y sus datos.</p>
            <div className="term-short"><b>En corto</b>Garantizar que los datos se almacenen y procesen solo dentro de una región/jurisdicción específica, según lo exijan las regulaciones locales.</div>
          </div>

          <div className="term-card">
            <h4>Monitoreo</h4>
            <p>Vigilar de forma continua el estado, uso y calidad de los datos y del sistema de IA en producción (por ejemplo, con Amazon CloudWatch), detectando de forma proactiva anomalías, degradación del modelo (model drift) o accesos inusuales.</p>
            <div className="term-short"><b>En corto</b>Vigilar continuamente el estado y uso de los datos y del sistema en producción, detectando anomalías o degradación de forma proactiva.</div>
          </div>

          <div className="term-card">
            <h4>Observación (observability)</h4>
            <p>Ir un paso más allá del monitoreo básico: tener suficiente visibilidad interna del sistema (métricas, logs y trazas detalladas) como para poder diagnosticar por qué ocurrió un problema, no solo detectar que ocurrió — en AWS, servicios como Amazon Bedrock AgentCore Observability aportan esta visibilidad específicamente para agentes de IA.</p>
            <div className="term-short"><b>En corto</b>Tener suficiente visibilidad interna (métricas, logs, trazas) para diagnosticar por qué ocurrió un problema, no solo detectarlo.</div>
          </div>

          <div className="term-card">
            <h4>Retención</h4>
            <p>Definir políticas explícitas sobre cuánto tiempo se conservan los distintos tipos de datos (datos de entrenamiento, logs de interacciones, resultados de auditoría) antes de archivarlos o eliminarlos definitivamente, balanceando requisitos regulatorios de conservación mínima con principios de minimización de datos.</p>
            <div className="term-short"><b>En corto</b>Definir cuánto tiempo se conservan distintos tipos de datos antes de archivarlos o eliminarlos, balanceando regulación y minimización de datos.</div>
          </div>

          <a className="back-to-top" href="#d5">↑ volver al Dominio 5</a>
        </div>

        <div className="gloss-group" id="gloss-d5-t2-b3">
          <span className="gloss-group-head">Dominio 5 · Task 5.2 · Bullet 3</span>
          <p className="gloss-bullet-text">"Describir los procesos para seguir protocolos de gobernanza (políticas, periodicidad y estrategias de revisión, marcos de gobernanza como el Generative AI Security Scoping Matrix, estándares de transparencia, requisitos de capacitación del equipo)."</p>
          <p className="scope-note" style={{marginTop: '0.6rem'}}><strong>Nota:</strong> es una LISTA de 5 procesos/elementos de gobernanza.</p>

          <div className="term-card">
            <h4>Políticas</h4>
            <p>Documentos formales que definen las reglas y expectativas de la organización sobre cómo se debe desarrollar, desplegar y usar la IA (qué datos se pueden usar, qué modelos están aprobados, qué revisiones son obligatorias antes de producción), sirviendo como la base normativa de la gobernanza.</p>
            <div className="term-short"><b>En corto</b>Documentos formales que definen las reglas de la organización sobre cómo desarrollar, desplegar y usar la IA.</div>
          </div>

          <div className="term-card">
            <h4>Periodicidad y estrategias de revisión</h4>
            <p>Establecer con qué frecuencia y bajo qué criterios se revisan los sistemas de IA ya desplegados (por ejemplo, cada trimestre, o cuando se detecta una desviación significativa de desempeño), para asegurar que sigan cumpliendo los estándares de la organización a lo largo del tiempo y no solo en el momento del lanzamiento.</p>
            <div className="term-short"><b>En corto</b>Definir con qué frecuencia y bajo qué criterios se revisan los sistemas de IA ya en producción, no solo al lanzarlos.</div>
          </div>

          <div className="term-card">
            <h4>Marcos de gobernanza: Generative AI Security Scoping Matrix</h4>
            <p>Un marco de AWS que ayuda a las organizaciones a evaluar e implementar controles de seguridad a lo largo del ciclo de vida de la IA, según cuánta propiedad y control tienen sobre el modelo y los datos. Define cinco "scopes" —de menor a mayor control—: Scope 1 (usar un servicio de IA de consumo público de terceros, sin acceso ni modificación del modelo), Scope 2 (usar una aplicación de un proveedor con funciones de IA embebidas), Scope 3 (construir una aplicación propia usando un FM de terceros vía API), Scope 4 (ajustar/fine-tune un modelo de terceros con datos propios), y Scope 5 (entrenar un modelo propio desde cero con datos propios). El marco cruza estos scopes con cinco disciplinas de seguridad (gobernanza y cumplimiento, legal y privacidad, gestión de riesgos, implementación de controles, y resiliencia) para orientar qué prácticas de seguridad priorizar según el nivel de control real que se tiene sobre el sistema.</p>
            <div className="term-short"><b>En corto</b>Marco de AWS con 5 "scopes" (de usar una app de IA de terceros hasta entrenar un modelo propio desde cero) que ayuda a priorizar qué controles de seguridad aplicar según cuánto control real se tiene sobre el modelo y los datos.</div>
          </div>

          <div className="term-card">
            <h4>Estándares de transparencia</h4>
            <p>Definiciones internas de qué información sobre un sistema de IA debe comunicarse, a quién, y con qué nivel de detalle (a usuarios finales, a reguladores, a auditores internos) — por ejemplo, exigir que todo sistema de IA de cara al cliente cuente con una Model Card publicada o un aviso claro de que se está interactuando con IA.</p>
            <div className="term-short"><b>En corto</b>Definir qué información sobre un sistema de IA debe comunicarse, a quién y con qué nivel de detalle, de forma estandarizada en toda la organización.</div>
          </div>

          <div className="term-card">
            <h4>Requisitos de capacitación del equipo</h4>
            <p>Asegurar que las personas que desarrollan, despliegan y operan sistemas de IA reciban capacitación adecuada sobre las políticas de gobernanza, los riesgos específicos de la IA (sesgo, alucinaciones, seguridad) y las herramientas disponibles para mitigarlos — sin un equipo capacitado, ninguna política de gobernanza se aplica de forma consistente en la práctica.</p>
            <div className="term-short"><b>En corto</b>Capacitar a quienes desarrollan y operan sistemas de IA en las políticas de gobernanza y los riesgos específicos de la IA, para que las políticas se apliquen en la práctica.</div>
          </div>

          <a className="back-to-top" href="#d5">↑ volver al Dominio 5</a>
        </div>
      </section>
    </>
  );
}
