// Versión "modo profesor" del glosario — prosa reescrita para lectura en voz alta.
// Generado a partir de src/glossaryData.ts (ver others/spoken-glossary-brief.md).
export interface GlossarySpokenEntry {
  id: string;
  html: string;
}

export const glossarySpokenEntries: GlossarySpokenEntry[] = [
  {
    id: "gloss-d1-t1-b1",
    html: `<p class="gloss-bullet-text">"Definir términos básicos de IA (IA, ML, deep learning, redes neuronales, visión por computadora, NLP, modelo, algoritmo, entrenamiento e inferencia, sesgo, equidad, ajuste/fit, LLM, GenAI, IA agéntica)."</p>

          <div class="term-card">
            <h4>Inteligencia Artificial (IA / AI)</h4>
            <p>AWS define la inteligencia artificial como una tecnología transformadora: permite que las máquinas resuelvan problemas de forma parecida a como lo haría un humano, usando grandes cantidades de datos para automatizar procesos y generar información útil. Es el término paraguas de todo este campo — adentro caben muchas técnicas distintas, desde autos autónomos hasta asistentes virtuales — y es importante tener claro que no todo lo que es inteligencia artificial es necesariamente Machine Learning.</p>
            <div class="term-short"><b>En corto</b>Es la tecnología que hace que las máquinas resuelvan problemas de forma parecida a un humano. Es el paraguas que contiene al Machine Learning, al deep learning y a la GenAI — pero ojo, no toda inteligencia artificial es Machine Learning.</div>
          </div>

          <div class="term-card">
            <h4>Machine Learning (ML / aprendizaje automático)</h4>
            <p>El Machine Learning es una rama dentro de la inteligencia artificial. AWS lo define como un tipo de IA que analiza datos sin que le des instrucciones explícitas, paso a paso: en vez de programarle reglas fijas, el sistema procesa grandes cantidades de datos históricos, encuentra patrones ahí, y usa esos patrones para predecir relaciones en datos nuevos.</p>
            <div class="term-short"><b>En corto</b>Es la rama de la IA que aprende patrones de datos históricos sin reglas explícitas, para después predecir sobre datos nuevos. Se basa en algoritmos y modelos matemáticos.</div>
          </div>

          <div class="term-card">
            <h4>Deep learning (aprendizaje profundo)</h4>
            <p>El deep learning, o aprendizaje profundo, es un subconjunto del Machine Learning que usa redes neuronales inspiradas, de forma simplificada, en el cerebro humano. AWS explica que su ventaja frente al ML tradicional es que puede procesar datos no estructurados, como imágenes, audio o texto libre, sin que un humano tenga que definir a mano qué características mirar. Y además, es la base de la IA generativa moderna.</p>
            <div class="term-short"><b>En corto</b>Es el subconjunto de ML que usa redes neuronales de varias capas. Procesa datos no estructurados, como imagen, audio o texto, sin necesitar que un humano defina las características a mano. Es la base de la GenAI actual.</div>
          </div>

          <div class="term-card">
            <h4>Redes neuronales (neural networks)</h4>
            <p>Las redes neuronales son la estructura que usa el deep learning. AWS describe tres capas: una capa de entrada, que es por donde entra la información; una o varias capas ocultas, donde se hace el procesamiento; y una capa de salida, que es el resultado final. Las conexiones entre los nodos tienen pesos numéricos que se ajustan solos: cuando una ruta lleva a una respuesta correcta, su peso sube, y cuando lleva a una incorrecta, baja. Así es como el sistema aprende de sus propios errores.</p>
            <div class="term-short"><b>En corto</b>Es la estructura de capas — entrada, ocultas y salida — con nodos conectados por pesos que se ajustan solos según los aciertos o errores del sistema. Es el mecanismo detrás del deep learning.</div>
          </div>

          <div class="term-card">
            <h4>Visión por computadora (computer vision)</h4>
            <p>La visión por computadora es el campo de la inteligencia artificial que permite a una computadora extraer información útil de imágenes, de video, o de cualquier otro tipo de entrada visual. AWS menciona usos como identificar objetos, reconocer rostros, hacer OCR — es decir, leer texto dentro de una imagen —, clasificar contenido, y hoy en día, combinada con la IA generativa, hasta generar imágenes completamente nuevas.</p>
            <div class="term-short"><b>En corto</b>Permite a una computadora entender imágenes o video: identificar objetos, leer texto, reconocer rostros o incluso generar imágenes nuevas.</div>
          </div>

          <div class="term-card">
            <h4>NLP (procesamiento de lenguaje natural)</h4>
            <p>El NLP, o procesamiento de lenguaje natural, es la tecnología que permite a una computadora interpretar, manipular y comprender el lenguaje humano, ya sea hablado o escrito. AWS destaca que sirve para analizar grandes volúmenes de texto o de voz y sacar de ahí la intención, el sentimiento, o información útil para el negocio — por ejemplo, entender si un mensaje de un cliente es una queja o un elogio.</p>
            <div class="term-short"><b>En corto</b>Permite a una computadora interpretar y comprender lenguaje humano, escrito o hablado, para sacar de ahí intención, sentimiento o información útil.</div>
          </div>

          <div class="term-card">
            <h4>Modelo</h4>
            <p>Según la documentación de Amazon SageMaker, un modelo es el artefacto ya entrenado que resulta de aplicar un algoritmo sobre datos de ejemplo. Una vez que ese modelo está entrenado, es lo que integrás en tu aplicación para generar predicciones — es decir, inferencias — sobre datos nuevos.</p>
            <div class="term-short"><b>En corto</b>Es el artefacto ya entrenado que hace las predicciones. Es el resultado de aplicar un algoritmo sobre datos de ejemplo.</div>
          </div>

          <div class="term-card">
            <h4>Algoritmo</h4>
            <p>El algoritmo es el método matemático que se usa para entrenar el modelo. La documentación de Amazon Machine Learning lo describe como una función matemática ajustable: el algoritmo compara sus predicciones contra el resultado real usando lo que se llama una función de pérdida, y aplica una técnica de optimización para ir corrigiendo esos ajustes hasta minimizar el error. Dicho de forma simple, el algoritmo es el método de aprendizaje, y el modelo es el resultado ya entrenado de aplicar ese método.</p>
            <div class="term-short"><b>En corto</b>Es el método matemático que aprende los pesos del modelo, ajustándolos con una función de pérdida y una técnica de optimización hasta minimizar el error.</div>
          </div>

          <div class="term-card">
            <h4>Entrenamiento (training)</h4>
            <p>El entrenamiento es el proceso de enseñarle a la computadora a predecir. Le das un algoritmo, datos de ejemplo — por ejemplo, miles de imágenes ya etiquetadas — y recursos de cómputo, y el sistema va ajustando sus parámetros internos hasta que sus predicciones sobre esos datos de ejemplo son suficientemente buenas. Al final de esta etapa se evalúa si la exactitud que se logró es aceptable.</p>
            <div class="term-short"><b>En corto</b>Es el proceso de darle al algoritmo datos de ejemplo y recursos de cómputo para que ajuste sus parámetros hasta predecir bien sobre esos datos.</div>
          </div>

          <div class="term-card">
            <h4>Inferencia (inference)</h4>
            <p>La inferencia es usar el modelo ya entrenado para generar predicciones sobre datos nuevos que nunca vio, ya en producción — como dice AWS, generar inferencias en tiempo real y a escala. La guía del examen menciona distintos tipos de inferencia: por lotes, en tiempo real, asíncrona o serverless, según qué tan rápido se necesite la respuesta.</p>
            <div class="term-short"><b>En corto</b>Es usar el modelo ya entrenado para predecir sobre datos nuevos, en producción, ya sea en tiempo real, por lotes, de forma asíncrona o serverless.</div>
          </div>

          <div class="term-card">
            <h4>Sesgo (bias)</h4>
            <p>Amazon SageMaker Clarify define el sesgo como un desequilibrio en los datos de entrenamiento, o en el comportamiento de predicción del modelo, entre distintos grupos — por ejemplo, entre distintas edades o distintos niveles de ingresos. Puede venir de los datos, si un grupo está sub-representado, o puede venir del propio algoritmo. El ejemplo que da AWS es claro: un modelo entrenado mayormente con datos de personas de mediana edad puede terminar siendo menos preciso al predecir sobre personas jóvenes o mayores.</p>
            <div class="term-short"><b>En corto</b>Es un desequilibrio en los datos o en las predicciones del modelo entre distintos grupos, como edad o ingresos, que puede venir de los datos o del algoritmo mismo.</div>
          </div>

          <div class="term-card">
            <h4>Equidad (fairness)</h4>
            <p>Según el Well-Architected Framework de AWS, en su lente de IA generativa, la equidad significa considerar el impacto en los distintos grupos de interesados: verificar que las decisiones del sistema no estén influenciadas por factores discriminatorios que no queremos que estén ahí. En la práctica, esto implica auditar los resultados del modelo entre distintos segmentos de usuarios y documentar los criterios con los que se toman las decisiones. Para diferenciarlo del sesgo: el sesgo es el problema técnico que puede existir en los datos o en el modelo; la equidad es el objetivo de que ese sesgo no termine traduciéndose en un trato injusto hacia algún grupo.</p>
            <div class="term-short"><b>En corto</b>Es el objetivo de que las decisiones del modelo no perjudiquen injustamente a ningún grupo. Se verifica auditando resultados por segmento y documentando los criterios usados.</div>
          </div>

          <div class="term-card">
            <h4>Ajuste / fit (model fit)</h4>
            <p>El ajuste, o fit, se refiere a qué tan bien el modelo se ajusta a los datos. La documentación de Amazon Machine Learning distingue dos problemas opuestos. Por un lado, el underfitting: el modelo es demasiado simple y le va mal incluso con los datos de entrenamiento, porque no logra capturar la relación entre las variables. Por otro lado, el overfitting: el modelo memoriza los datos de entrenamiento, le va muy bien ahí, pero falla con datos nuevos, porque en realidad no generalizó, solo memorizó.</p>
            <div class="term-short"><b>En corto</b>Es qué tan bien el modelo se ajusta a los datos. Underfitting es cuando es demasiado simple y le va mal hasta en el entrenamiento. Overfitting es cuando memorizó el entrenamiento, pero falla con datos nuevos.</div>
          </div>

          <div class="term-card">
            <h4>LLM (Large Language Model / modelo de lenguaje grande)</h4>
            <p>Un LLM, o modelo de lenguaje grande, AWS lo define como un modelo de deep learning muy grande, preentrenado con enormes cantidades de datos de texto. Están construidos sobre la arquitectura transformer, que puede procesar secuencias de texto completas en paralelo, en vez de palabra por palabra, y usa un mecanismo de atención para entender cómo se relacionan las palabras entre sí. Esto es justamente lo que le permite manejar modelos con cientos de miles de millones de parámetros.</p>
            <div class="term-short"><b>En corto</b>Es un modelo de deep learning enorme, preentrenado con muchísimo texto, basado en la arquitectura transformer, capaz de entender cómo se relacionan las palabras entre sí en paralelo.</div>
          </div>

          <div class="term-card">
            <h4>GenAI (IA generativa)</h4>
            <p>La GenAI, o inteligencia artificial generativa, AWS la define como un tipo de IA capaz de crear contenido nuevo — conversaciones, historias, imágenes, video, música — en vez de limitarse a clasificar o predecir sobre datos que ya existen. Puede aprender un dominio completo, por ejemplo el idioma inglés, y usar ese conocimiento para tareas nuevas, como escribir un poema con las palabras que aprendió.</p>
            <div class="term-short"><b>En corto</b>Es el tipo de IA que crea contenido nuevo — texto, imagen, audio o video — en vez de solo clasificar o predecir sobre datos que ya existen.</div>
          </div>

          <div class="term-card">
            <h4>IA agéntica (agentic AI)</h4>
            <p>La IA agéntica, AWS la define como un sistema de inteligencia artificial autónomo que puede actuar por sí solo para lograr objetivos predeterminados. La diferencia clave frente a la GenAI normal es esta: la GenAI es reactiva, responde cuando se le pregunta algo, mientras que un sistema agéntico es proactivo — monitorea su entorno, toma la iniciativa, se adapta a condiciones que van cambiando, y puede coordinarse con otros agentes o con personas para completar flujos de trabajo enteros, con muy poca supervisión humana.</p>
            <div class="term-short"><b>En corto</b>Es un sistema de IA autónomo y proactivo que persigue objetivos por sí mismo, con mínima supervisión humana — a diferencia de la GenAI tradicional, que solo responde cuando se le pide algo.</div>
          </div>`,
  },
  {
    id: "gloss-d1-t1-b2",
    html: `<p class="gloss-bullet-text">"Describir las similitudes y diferencias entre IA, ML, GenAI, deep learning e IA agéntica."</p>

          <div class="term-card">
            <h4>Similitudes y diferencias entre IA, ML, deep learning, GenAI e IA agéntica</h4>

            <p>Para AWS, estos cinco conceptos no son alternativas que compiten entre sí — son niveles que están uno dentro del otro, como muñecas rusas, más una capa extra de autonomía que no encaja en esa misma cadena.</p>

            <p>Empecemos por esa cadena: la Inteligencia Artificial incluye al Machine Learning, que a su vez incluye al Deep Learning, que a su vez incluye a la GenAI. Cada uno es más específico que el anterior. La IA agéntica, en cambio, se construye sobre la GenAI y los foundation models, pero le suma una capa de autonomía — no es que sea "más chica" dentro de esa misma cadena, es otra cosa.</p>

            <p>Ahora comparemos IA y ML. La IA es el término paraguas: son distintas estrategias y técnicas para hacer que las máquinas se comporten de forma parecida a un humano. Ahí entra desde sistemas basados en reglas fijas y algoritmos genéticos, hasta el propio ML. El ML es la rama específica que, en vez de reglas escritas a mano, aprende patrones estadísticos de los datos para predecir sobre datos nuevos. Como resume AWS: toda ML es IA, pero no toda IA es ML.</p>

            <p>Sigamos con ML frente a deep learning. El deep learning es un subconjunto del ML que usa redes neuronales de varias capas. La diferencia práctica es esta: el ML tradicional suele necesitar que un humano seleccione a mano las características de los datos, lo que se llama feature engineering, y rinde mejor con datos estructurados y tareas simples, como detectar spam. El deep learning, en cambio, automatiza esa extracción de características y es superior con datos no estructurados — imágenes, audio, texto libre — y con tareas complejas, como analizar imágenes médicas, a cambio de necesitar muchísimo más dato y cómputo.</p>

            <p>Pasemos a deep learning frente a GenAI. AWS describe la GenAI como basada en lo que llama deep generative learning, una evolución del deep learning enfocada en crear contenido nuevo en vez de solo reconocer patrones o clasificar. El deep learning y el ML clásicos son discriminativos: dicen a qué categoría pertenece algo, o predicen un número. La GenAI es generativa: produce texto, imagen, audio o video nuevos. También difieren en los datos: el ML tradicional usa datos estructurados y etiquetados de un solo tipo, mientras que la GenAI aprende de datos no estructurados o semiestructurados, sin etiquetas explícitas, y suele trabajar con varios tipos de dato a la vez, es decir, de forma multimodal.</p>

            <p>Por último, comparemos GenAI e IA agéntica. La propia guía oficial del examen ubica los conceptos fundamentales de IA agéntica como un objetivo dentro del mismo bloque de fundamentos de GenAI — es decir, AWS la presenta como una extensión de la GenAI, no como una rama aparte. La diferencia que marca AWS es esta: la GenAI es reactiva, genera contenido cuando se le pide, y normalmente un humano lo revisa antes de usarlo, por ejemplo un email; la IA agéntica es proactiva, persigue un objetivo por sí sola, encadena pasos y decisiones, se integra a fondo con otros sistemas como un CRM o un ERP, y ejecuta acciones reales con muy poca supervisión humana. Y AWS aclara algo importante: no compiten entre sí, se complementan.</p>

            <p>Como idea transversal, las cinco viven bajo el paraguas de la inteligencia artificial y buscan que una máquina haga algo que normalmente requeriría inteligencia humana. Y las tres que aprenden de datos — el ML, el deep learning y la GenAI — necesitan datos de calidad y cómputo suficiente, y mejoran mientras más datos procesan.</p>

            <div class="term-short"><b>En corto</b>Son niveles encajados, no alternativas: la IA es el paraguas más grande, el ML es la parte de la IA que aprende de datos en vez de seguir reglas fijas, el deep learning es el ML que usa redes neuronales y datos no estructurados, y la GenAI es el deep learning enfocado en crear contenido nuevo en vez de solo clasificar o predecir. La IA agéntica se construye sobre la GenAI y los foundation models, pero le suma autonomía para perseguir un objetivo y actuar sola, en vez de solo responder cuando se le pide.</div>
          </div>`,
  },
  {
    id: "gloss-d1-t1-b3",
    html: `<p class="gloss-bullet-text">"Describir los distintos tipos de inferencia (por lotes, en tiempo real, asíncrona, serverless)."</p>

          <div class="term-card">
            <h4>Inferencia por lotes (batch)</h4>
            <p>Según la documentación de Amazon SageMaker AI, la inferencia por lotes, o Batch Transform, es para procesamiento offline: la usas cuando ya tienes disponible una gran cantidad de datos de antemano y no necesitas mantener un endpoint persistente. Puede manejar datasets grandes, del orden de gigabytes, aunque el procesamiento puede tardar varios días. También se puede usar para preprocesar datasets antes de entrenar un modelo.</p>
            <div class="term-short"><b>En corto</b>Procesa grandes volúmenes de datos que ya tienes disponibles, sin mantener un endpoint activo. Es ideal cuando no necesitas la respuesta al instante.</div>
          </div>

          <div class="term-card">
            <h4>Inferencia en tiempo real (real-time)</h4>
            <p>La inferencia en tiempo real es un endpoint tipo API REST, totalmente administrado y persistente, pensado para inferencias en línea con baja latencia o con un throughput alto y sostenido. AWS especifica payloads de hasta 25 megabytes, y tiempos de procesamiento de hasta 60 segundos, o hasta 8 minutos si se usa en modo streaming.</p>
            <div class="term-short"><b>En corto</b>Es un endpoint siempre activo que responde al instante, para cuando necesitas la predicción de inmediato y de forma constante.</div>
          </div>

          <div class="term-card">
            <h4>Inferencia asíncrona (asynchronous)</h4>
            <p>La inferencia asíncrona está pensada para encolar solicitudes con payloads grandes y tiempos de procesamiento largos: AWS permite hasta 1 gigabyte de payload y hasta una hora de procesamiento. Su ventaja es que el endpoint puede escalar a cero cuando no hay solicitudes pendientes, así que no pagas por capacidad ociosa mientras esperas.</p>
            <div class="term-short"><b>En corto</b>Encola la solicitud para procesarla cuando se pueda. Es ideal para payloads grandes o lentos, sin mantener el endpoint activo todo el tiempo.</div>
          </div>

          <div class="term-card">
            <h4>Inferencia serverless (serverless)</h4>
            <p>En la inferencia serverless, AWS administra toda la infraestructura por ti: no gestionas instancias ni políticas de escalado, y solo pagas por lo que realmente usas, no por el tiempo ocioso. Está pensada para tráfico intermitente o impredecible, y admite payloads de hasta 4 megabytes y hasta 60 segundos de procesamiento.</p>
            <div class="term-short"><b>En corto</b>AWS maneja toda la infraestructura y solo pagas por uso real. Es ideal para tráfico impredecible o esporádico.</div>
          </div>`,
  },
  {
    id: "gloss-d1-t1-b4",
    html: `<p class="gloss-bullet-text">"Describir los distintos tipos de datos en modelos de IA (etiquetados/sin etiquetar, tabulares, series de tiempo, imagen, texto, estructurados/no estructurados)."</p>

          <div class="term-card">
            <h4>Datos etiquetados vs. sin etiquetar</h4>
            <p>Los datos etiquetados incluyen, junto a cada ejemplo, la respuesta correcta que el modelo tiene que aprender a predecir — por ejemplo, una foto marcada como gato o como perro. Se usan típicamente en el aprendizaje supervisado. Los datos sin etiquetar, en cambio, no traen esa respuesta incluida, solo el dato crudo, y se usan en aprendizaje no supervisado o en el preentrenamiento de modelos de GenAI, que aprenden de grandes volúmenes de texto o de imágenes sin que nadie haya etiquetado cada ejemplo.</p>
            <div class="term-short"><b>En corto</b>Etiquetados significa que cada ejemplo trae la respuesta correcta incluida, y se usan en aprendizaje supervisado. Sin etiquetar significa que solo hay dato crudo, sin respuesta, y se usan en aprendizaje no supervisado o en el preentrenamiento de GenAI.</div>
          </div>

          <div class="term-card">
            <h4>Datos tabulares</h4>
            <p>Los datos tabulares son datos organizados en filas y columnas, como una hoja de cálculo o una tabla de base de datos, donde cada columna es una variable — por ejemplo edad, precio o categoría — y cada fila es un registro. Es el formato clásico del ML tradicional y de los datos estructurados.</p>
            <div class="term-short"><b>En corto</b>Son datos organizados en filas y columnas, como una tabla — el formato típico del ML tradicional.</div>
          </div>

          <div class="term-card">
            <h4>Series de tiempo (time-series)</h4>
            <p>Las series de tiempo son datos capturados en puntos sucesivos en el tiempo — la temperatura cada hora, el precio de una acción cada minuto — donde el orden cronológico importa, porque un valor suele depender de los valores anteriores. Se usan sobre todo para hacer pronósticos y para detectar anomalías.</p>
            <div class="term-short"><b>En corto</b>Son datos medidos en momentos sucesivos donde el orden importa — la base de los pronósticos, o forecasting.</div>
          </div>

          <div class="term-card">
            <h4>Datos de imagen</h4>
            <p>Los datos de imagen son información visual — fotos, cuadros de video, imágenes médicas — representada como matrices de píxeles. Los modelos de visión por computadora, y muchos modelos de deep learning, trabajan directamente con este tipo de dato, sin que un humano tenga que describir manualmente qué hay en la imagen.</p>
            <div class="term-short"><b>En corto</b>Es información visual representada como píxeles, que usan los modelos de visión por computadora y de deep learning.</div>
          </div>

          <div class="term-card">
            <h4>Datos de texto</h4>
            <p>Los datos de texto son lenguaje escrito en cualquier idioma — documentos, correos, transcripciones, publicaciones. Los procesan los modelos de NLP y los LLMs, que normalmente lo convierten primero en tokens, y después en representaciones numéricas, los embeddings, que el modelo sí puede usar.</p>
            <div class="term-short"><b>En corto</b>Es lenguaje escrito que procesan los modelos de NLP y los LLMs, generalmente convertido primero en tokens.</div>
          </div>

          <div class="term-card">
            <h4>Datos estructurados vs. no estructurados</h4>
            <p>AWS define los datos estructurados como aquellos que encajan perfectamente en tablas y usan tipos de datos discretos, como números, texto corto y fechas. Se guardan en bases de datos relacionales y se analizan fácilmente con SQL — por ejemplo, registros financieros, cifras de ventas o inventarios. Los datos no estructurados, en cambio, no encajan en una tabla por su tamaño o por su naturaleza, como el video, los documentos largos o las publicaciones de redes sociales, y requieren algoritmos más complejos y ML para analizarse. AWS menciona además una categoría intermedia: los datos semiestructurados, como sería un video que trae etiquetas asociadas de fecha, ubicación y tema.</p>
            <div class="term-short"><b>En corto</b>Estructurados significa que encajan en tablas con esquema fijo, fáciles de consultar con SQL. No estructurados significa que no tienen un esquema fijo, como audio, video o texto libre, y necesitan ML para analizarse. Y existe también una categoría intermedia: los datos semiestructurados.</div>
          </div>`,
  },
  {
    id: "gloss-d1-t1-b5",
    html: `<p class="gloss-bullet-text">"Describir los distintos tipos de aprendizaje de IA/ML (supervisado, no supervisado, aprendizaje por refuerzo)."</p>

          <div class="term-card">
            <h4>Aprendizaje supervisado</h4>
            <p>En el aprendizaje supervisado, el modelo aprende a partir de datos etiquetados: se le muestran muchos ejemplos de entrada junto con la respuesta correcta, y va ajustando sus parámetros para minimizar el error entre su predicción y esa respuesta real. Es el enfoque estándar para regresión y para clasificación — por ejemplo, predecir si un correo es spam, o predecir el precio de una casa. Vale aclarar algo: no encontramos una página oficial de AWS dedicada solamente a este término; esta definición refleja el consenso técnico estándar, consistente con cómo el resto de la documentación de AWS lo usa.</p>
            <div class="term-short"><b>En corto</b>El modelo aprende de datos ya etiquetados, con la respuesta correcta incluida, para predecir sobre datos nuevos. Es la base de la clasificación y la regresión.</div>
          </div>

          <div class="term-card">
            <h4>Aprendizaje no supervisado</h4>
            <p>En el aprendizaje no supervisado, el modelo trabaja con datos sin etiquetar, y su tarea es encontrar estructura oculta por sí mismo: agrupar elementos parecidos, lo que se llama clustering, o reducir la dimensionalidad de los datos, sin que nadie le diga de antemano cuál es la respuesta correcta. Vale la misma aclaración que en el caso anterior: es consenso técnico estándar, y AWS lo usa de forma consistente, por ejemplo al contrastarlo con el aprendizaje por refuerzo en su página oficial sobre ese tema.</p>
            <div class="term-short"><b>En corto</b>El modelo encuentra patrones o agrupaciones en datos sin etiquetar, sin que nadie le indique de antemano cuál es la respuesta correcta.</div>
          </div>

          <div class="term-card">
            <h4>Aprendizaje por refuerzo (reinforcement learning)</h4>
            <p>El aprendizaje por refuerzo, AWS lo define como una técnica de ML que entrena modelos para tomar decisiones que logren el resultado más óptimo, imitando el proceso de prueba y error que usamos los humanos: las acciones que llevan a buenos resultados se refuerzan, y las que no, se descartan. A diferencia del aprendizaje supervisado, acá no se parte de un dataset con pares de entrada y salida ya definidos, sino que el modelo persigue un objetivo — maximizar una recompensa acumulada — y puede aceptar pérdidas a corto plazo para lograr mejores resultados a largo plazo. Y a diferencia del aprendizaje no supervisado, que solo busca patrones ocultos, el aprendizaje por refuerzo valida y refina continuamente sus decisiones para maximizar esa señal de recompensa.</p>
            <div class="term-short"><b>En corto</b>El modelo aprende por prueba y error, con una recompensa o un castigo según sus decisiones, buscando maximizar el resultado acumulado — no parte de un dataset de respuestas correctas como el supervisado.</div>
          </div>`,
  },
  {
    id: "gloss-d1-t2-b1",
    html: `<p class="gloss-bullet-text">"Reconocer aplicaciones donde IA/ML aportan valor (apoyar la toma de decisiones humanas, escalabilidad de soluciones, automatización)."</p>

          <div class="term-card">
            <h4>Apoyar la toma de decisiones humanas</h4>
            <p>Acá el modelo no reemplaza a la persona: le da información, una predicción o una recomendación — por ejemplo, un score de riesgo crediticio, o una alerta de posible fraude — para que la persona decida con mejores datos y más rápido. AWS enmarca esto entre los usos de los foundation models, al mencionar los sistemas de soporte a decisiones como uno de los escenarios donde conviene usarlos.</p>
            <div class="term-short"><b>En corto</b>El modelo entrega una predicción o una recomendación, pero la decisión final la sigue tomando una persona, con mejor información disponible.</div>
          </div>

          <div class="term-card">
            <h4>Escalabilidad de soluciones</h4>
            <p>La guía oficial de Amazon Machine Learning sobre cuándo usar ML da este ejemplo: un enfoque manual puede funcionar para clasificar 100 correos, pero se vuelve impráctico cuando son millones. Y ahí es exactamente donde el ML aporta valor, porque puede manejar ese volumen sin que el esfuerzo humano requerido crezca en la misma proporción.</p>
            <div class="term-short"><b>En corto</b>El ML permite manejar un volumen de trabajo — miles o millones de casos — que sería imposible de atender manualmente, sin que el costo crezca al mismo ritmo.</div>
          </div>

          <div class="term-card">
            <h4>Automatización</h4>
            <p>Cuando una tarea depende de demasiados factores que interactúan entre sí como para programarla con reglas fijas — el ejemplo que da la propia guía de AWS es la detección de spam, donde intervienen el remitente, el contenido, los encabezados y más — el ML puede automatizarla aprendiendo el patrón directamente de los datos, en vez de que un humano intente codificar a mano cada regla y cada excepción.</p>
            <div class="term-short"><b>En corto</b>El ML automatiza tareas demasiado complejas para programarlas como reglas fijas, aprendiendo el patrón directamente de los datos.</div>
          </div>`,
  },
  {
    id: "gloss-d1-t2-b2",
    html: `<p class="gloss-bullet-text">"Determinar cuándo una solución de IA/ML no es apropiada (análisis costo-beneficio, situaciones que requieren un resultado específico en vez de una predicción)."</p>

          <div class="term-card">
            <h4>Análisis costo-beneficio</h4>
            <p>La guía oficial de Amazon Machine Learning es explícita en esto: si el problema se puede resolver con reglas simples, con cálculos o con pasos predeterminados que se pueden programar sin que el sistema tenga que aprender de datos, entonces no necesitas ML. Construir, entrenar y mantener un modelo tiene un costo — datos, cómputo, mantenimiento — que solo se justifica cuando es menor que el beneficio de automatizar o escalar la tarea. Si un simple bloque de tipo "si pasa esto, entonces haz aquello" resuelve el problema igual de bien y más barato, esa es la opción correcta.</p>
            <div class="term-short"><b>En corto</b>Si el problema se resuelve con reglas simples y el costo de construir y mantener un modelo no se justifica frente al beneficio, no uses ML.</div>
          </div>

          <div class="term-card">
            <h4>Situaciones que requieren un resultado específico en vez de una predicción</h4>
            <p>El ML produce predicciones: una estimación de cuál es la respuesta más probable, no una garantía exacta. En escenarios donde necesitas siempre un resultado determinista y exacto — un cálculo financiero regulado, o una regla de cumplimiento normativo sin margen de error — un sistema de reglas fijas es más apropiado que un modelo de ML, precisamente porque el ML puede equivocarse un porcentaje de las veces.</p>
            <div class="term-short"><b>En corto</b>Si necesitas siempre el mismo resultado exacto y verificable, y no una estimación probable, un sistema de reglas fijas es más apropiado que un modelo de ML.</div>
          </div>`,
  },
  {
    id: "gloss-d1-t2-b3",
    html: `<p class="gloss-bullet-text">"Seleccionar las técnicas de IA/ML apropiadas para casos de uso específicos (regresión, clasificación, clustering)."</p>

          <div class="term-card">
            <h4>Regresión</h4>
            <p>La regresión es una técnica de aprendizaje supervisado que predice un valor numérico continuo — el precio de una casa, la temperatura de mañana, cuántas unidades se van a vender. La salida siempre es un número, no una categoría.</p>
            <div class="term-short"><b>En corto</b>Predice un número, un valor continuo, como un precio o una cantidad. Es aprendizaje supervisado.</div>
          </div>

          <div class="term-card">
            <h4>Clasificación</h4>
            <p>La clasificación es una técnica de aprendizaje supervisado que predice a qué categoría pertenece un ejemplo — si un correo es spam o no es spam, si una transacción es fraudulenta o es legítima. Puede ser binaria, con dos clases, o multiclase, con más de dos clases.</p>
            <div class="term-short"><b>En corto</b>Predice una categoría o una etiqueta, como spam o no spam, en vez de un número. También es aprendizaje supervisado.</div>
          </div>

          <div class="term-card">
            <h4>Clustering (agrupamiento)</h4>
            <p>El clustering, o agrupamiento, es una técnica de aprendizaje no supervisado que agrupa ejemplos parecidos entre sí, sin que existan etiquetas previas. El propio modelo descubre los grupos naturales en los datos — por ejemplo, para segmentar clientes según su comportamiento de compra, sin saber de antemano cuáles son esos segmentos.</p>
            <div class="term-short"><b>En corto</b>Agrupa datos parecidos entre sí sin usar etiquetas previas — el modelo descubre los grupos por su cuenta. Es aprendizaje no supervisado.</div>
          </div>`,
  },
  {
    id: "gloss-d1-t2-b4",
    html: `<p class="gloss-bullet-text">"Identificar ejemplos de aplicaciones reales de IA (visión por computadora, NLP, reconocimiento de voz, sistemas de recomendación, detección de fraude, pronósticos, bases de conocimiento, IA agéntica)."</p>

          <div class="term-card">
            <h4>Visión por computadora <em>(ver Bullet 1)</em></h4>
            <p>Ya la definimos en el bullet anterior: la visión por computadora permite a una computadora extraer información de imágenes o de video. Como aplicación real, pensemos en la inspección de calidad en líneas de manufactura, el diagnóstico asistido sobre imágenes médicas, o la verificación de identidad por reconocimiento facial.</p>
            <div class="term-short"><b>En corto</b>Ya vimos la definición completa antes. Acá, como ejemplo de aplicación real: inspección visual automática, imágenes médicas y verificación facial.</div>
          </div>

          <div class="term-card">
            <h4>NLP <em>(ver Bullet 1)</em></h4>
            <p>También lo definimos antes: el NLP permite entender el lenguaje humano. Como aplicación real, pensemos en chatbots de servicio al cliente, análisis de sentimiento en redes sociales, o clasificación automática de tickets de soporte.</p>
            <div class="term-short"><b>En corto</b>Ya vimos la definición completa antes. Acá, como ejemplo de aplicación real: chatbots, análisis de sentimiento y clasificación de tickets.</div>
          </div>

          <div class="term-card">
            <h4>Reconocimiento de voz (speech recognition)</h4>
            <p>El reconocimiento de voz es convertir audio hablado en texto — es lo opuesto a Amazon Polly, que convierte texto en voz. El servicio de AWS para esto es Amazon Transcribe: un servicio de reconocimiento automático de voz que usa ML para convertir audio en texto, ya sea en tiempo real, por streaming, o procesando archivos guardados en Amazon S3, por lotes. Se usa, por ejemplo, para subtitular videos, para transcribir llamadas de un call center, o para dictado por voz.</p>
            <div class="term-short"><b>En corto</b>Convierte audio hablado en texto. En AWS, el servicio es Amazon Transcribe, y se usa para subtítulos, transcripción de llamadas o dictado.</div>
          </div>

          <div class="term-card">
            <h4>Sistemas de recomendación</h4>
            <p>Los sistemas de recomendación son modelos que predicen qué productos, qué contenido o qué acciones le interesarían más a un usuario específico, basándose en su comportamiento pasado, o en el de usuarios parecidos. El servicio de AWS para esto es Amazon Personalize: un servicio de ML totalmente administrado que genera recomendaciones de artículos y segmentos de usuarios a partir de datos de interacción, como clics, compras o vistas. Los ejemplos que da AWS son cosas como "más elegidos para ti" en una plataforma de streaming, "comprados juntos frecuentemente" en un ecommerce, o reordenar los resultados de búsqueda según las preferencias del usuario.</p>
            <div class="term-short"><b>En corto</b>Predice qué le interesaría a cada usuario según su comportamiento pasado. En AWS, el servicio es Amazon Personalize.</div>
          </div>

          <div class="term-card">
            <h4>Detección de fraude</h4>
            <p>La detección de fraude es usar ML, típicamente clasificación, para identificar transacciones o comportamientos sospechosos, comparándolos contra patrones históricos de fraude. AWS tuvo un servicio dedicado a esto, Amazon Fraud Detector, pero hay dos cosas importantes que aclarar acá. Primero, AWS anunció que Fraud Detector ya no acepta clientes nuevos, y remite a alternativas como Amazon SageMaker. Y segundo, Fraud Detector no aparece en la lista oficial de servicios que están en el alcance del examen AIF-C01. Entonces, para el examen, la detección de fraude es un caso de uso conceptual de la IA y el ML, no un servicio puntual que tengas que memorizar.</p>
            <div class="term-short"><b>En corto</b>Es usar ML, típicamente clasificación, para detectar transacciones o comportamientos sospechosos. Para el examen es un caso de uso conceptual — el servicio dedicado de AWS, Fraud Detector, ya no es un producto activo ni está en el alcance del examen.</div>
          </div>

          <div class="term-card">
            <h4>Pronósticos (forecasting)</h4>
            <p>Los pronósticos, o forecasting, son predecir valores futuros a partir de datos históricos de series de tiempo — la demanda de inventario, el tráfico web, las ventas del próximo trimestre. AWS tuvo un servicio dedicado a esto, Amazon Forecast, pero, igual que pasa con Fraud Detector, tampoco aparece en la lista de servicios en el alcance del examen. Y acá vale una aclaración de transparencia: no encontramos confirmación oficial reciente sobre el estado actual de Amazon Forecast como producto activo, así que lo señalamos explícitamente en vez de asumir algo. Para el examen, esto es un caso de uso conceptual de la IA y el ML aplicado a series de tiempo.</p>
            <div class="term-short"><b>En corto</b>Predecir valores futuros a partir de datos históricos de series de tiempo, como la demanda, el tráfico o las ventas. Para el examen es un caso de uso conceptual, no un servicio puntual a memorizar.</div>
          </div>

          <div class="term-card">
            <h4>Bases de conocimiento (knowledge bases)</h4>
            <p>En el contexto de la GenAI, una base de conocimiento conecta un modelo con tus propios documentos o datos, para que responda preguntas basándose en esa información específica, en vez de basarse solo en lo que aprendió durante su entrenamiento general. Esto es la técnica de RAG, o generación aumentada por recuperación, que vamos a cubrir a fondo en el Dominio 3. El servicio de AWS para esto es Amazon Bedrock Knowledge Bases. Como aplicación real, pensemos en un chatbot de soporte que responde con la documentación interna real de la empresa, en vez de inventarse la respuesta.</p>
            <div class="term-short"><b>En corto</b>Conecta un modelo de IA con tus propios documentos para que responda con esa información específica — es la técnica RAG. En AWS, el servicio es Amazon Bedrock Knowledge Bases.</div>
          </div>

          <div class="term-card">
            <h4>IA agéntica <em>(ver Bullet 1)</em></h4>
            <p>Ya la definimos en el bullet anterior: un sistema de IA autónomo y proactivo. Como aplicación real, pensemos en un agente que monitorea el inventario y genera automáticamente una orden de reabastecimiento cuando el stock baja de cierto nivel, sin que un humano tenga que iniciar ese proceso.</p>
            <div class="term-short"><b>En corto</b>Ya vimos la definición completa antes. Acá, como ejemplo de aplicación real: reabastecimiento automático de inventario, sin intervención humana.</div>
          </div>`,
  },
  {
    id: "gloss-d1-t2-b5",
    html: `<p class="gloss-bullet-text">"Explicar las capacidades de los servicios administrados de IA/ML de AWS (Amazon SageMaker AI, Amazon Transcribe, Amazon Translate, Amazon Comprehend, Amazon Lex, Amazon Polly)."</p>

          <div class="term-card">
            <h4>Amazon SageMaker AI</h4>
            <p>Amazon SageMaker AI es el servicio de AWS para construir, entrenar y desplegar modelos de ML, incluyendo foundation models, para prácticamente cualquier caso de uso, con infraestructura, herramientas y flujos de trabajo totalmente administrados. Cubre todo el ciclo de vida: entornos de desarrollo integrados, entrenamiento distribuido, infraestructura de inferencia optimizada en costo, y herramientas de gobernanza, observabilidad e IA responsable, como detección de toxicidad y guardrails.</p>
            <div class="term-short"><b>En corto</b>Es la plataforma de AWS para construir, entrenar y desplegar modelos de ML y foundation models de principio a fin, con herramientas para todo el ciclo de vida.</div>
          </div>

          <div class="term-card">
            <h4>Amazon Transcribe</h4>
            <p>Amazon Transcribe es un servicio de reconocimiento automático de voz que usa ML para convertir audio en texto, ya sea como servicio independiente o para agregarle voz a texto a cualquier aplicación. Permite mejorar la exactitud para casos específicos, filtrar contenido, analizar audio con varios canales, identificar a cada hablante por separado, y transcribir tanto en tiempo real como por lotes. Y es elegible para HIPAA, es decir, apto para manejar información médica protegida.</p>
            <div class="term-short"><b>En corto</b>Convierte audio hablado en texto, en tiempo real o por lotes. Permite identificar hablantes y es elegible para HIPAA.</div>
          </div>

          <div class="term-card">
            <h4>Amazon Translate</h4>
            <p>Amazon Translate es un servicio de traducción de texto que usa ML avanzado para dar traducciones de alta calidad bajo demanda. Se usa para traducir documentos o contenido no estructurado, o para construir aplicaciones multilingües. Y se integra con otros servicios de AWS: con Amazon Comprehend, para extraer entidades o sentimiento del texto ya traducido; con Amazon Transcribe, para generar subtítulos multilingües; o con Amazon Polly, para narrar en voz el contenido traducido.</p>
            <div class="term-short"><b>En corto</b>Traduce texto entre idiomas bajo demanda. Se integra con Comprehend, Transcribe y Polly para armar flujos multilingües completos.</div>
          </div>

          <div class="term-card">
            <h4>Amazon Comprehend</h4>
            <p>Amazon Comprehend es un servicio de NLP que usa ML para descubrir información en datos de texto no estructurado — tickets de soporte, reseñas, correos, redes sociales. Permite extraer texto, identificar frases clave, detectar sentimiento, clasificar documentos, reconocer entidades como nombres, lugares o fechas, y también redactar, es decir, ocultar, información de identificación personal.</p>
            <div class="term-short"><b>En corto</b>Analiza texto no estructurado para sacar sentimiento, frases clave, entidades y clasificación — y puede ocultar datos personales.</div>
          </div>

          <div class="term-card">
            <h4>Amazon Lex</h4>
            <p>Amazon Lex es un servicio totalmente administrado para construir interfaces de conversación con IA — chatbots, asistentes de voz — dentro de cualquier aplicación, usando la misma tecnología que usa Alexa. Permite crear interfaces de voz y de texto con capacidades de IA generativa, desplegar sistemas de respuesta de voz interactiva, y funciona en múltiples canales: apps móviles, mensajería, teléfono.</p>
            <div class="term-short"><b>En corto</b>Sirve para construir chatbots y asistentes de voz conversacionales. Usa la misma tecnología que Alexa.</div>
          </div>

          <div class="term-card">
            <h4>Amazon Polly</h4>
            <p>Amazon Polly es un servicio totalmente administrado que convierte texto en voz, generando audio bajo demanda con deep learning. Ofrece decenas de voces naturales en más de 40 idiomas y variantes, que se pueden personalizar con SSML y con léxicos propios. El resultado es un archivo de audio, en formato MP3 u OGG, que se puede integrar en sitios web, aplicaciones, dispositivos IoT o producciones multimedia.</p>
            <div class="term-short"><b>En corto</b>Convierte texto en voz de forma natural, en más de 40 idiomas — es lo opuesto a Transcribe.</div>
          </div>`,
  },
  {
    id: "gloss-d1-t2-b6",
    html: `<p class="gloss-bullet-text">"Identificar cuándo conviene usar modelos de ML tradicionales o foundation models (FMs) (por regulación, requisitos de explicabilidad, restricciones operativas)."</p>

          <div class="term-card">
            <h4>Cuándo usar ML tradicional vs. foundation models</h4>
            <p>AWS marca la diferencia central de esta manera: los modelos de ML tradicionales normalmente realizan tareas específicas, como analizar el sentimiento de un texto, clasificar imágenes o pronosticar tendencias, mientras que los foundation models muestran adaptabilidad — pueden realizar una amplia gama de tareas distintas entre sí, con un alto grado de exactitud, sin haber sido entrenados específicamente para cada una de ellas.</p>
            <p>Empecemos por la regulación. En industrias reguladas, como salud, finanzas o el sector público, un modelo tradicional entrenado para una tarea acotada, con sus datos y su proceso de validación bien documentados, suele ser más fácil de auditar y de justificar ante un regulador que un foundation model de propósito general, entrenado con datos masivos y de origen diverso.</p>
            <p>Sigamos con la explicabilidad. Cuando necesitas poder explicar exactamente por qué el modelo llegó a una decisión — por ejemplo, por qué se rechazó un crédito — los modelos tradicionales más simples, como la regresión o los árboles de decisión, suelen ser más interpretables que un foundation model, cuyo tamaño y complejidad, con miles de millones de parámetros, lo hace mucho más difícil de explicar en detalle. Esto se conecta directamente con el Dominio 4 del examen, el de transparencia y explicabilidad.</p>
            <p>Y por último, las restricciones operativas. La guía de decisión oficial de AWS lo resume como un espectro. En un extremo están los servicios de IA especializados y preentrenados, como Comprehend, Transcribe o Rekognition, que requieren poca experiencia en ML y se despliegan rápido, aunque con menos personalización. En el medio está SageMaker AI, que da control total para entrenar un modelo propio, tradicional o foundation model, cuando necesitas más personalización o tienes datos de tu dominio específico, grandes y etiquetados. Y en el otro extremo está la infraestructura especializada, como AWS Trainium e Inferentia, que se usa cuando hay restricciones extremas de costo o de latencia en inferencia a gran escala. La recomendación general de AWS es empezar con el servicio preconstruido más simple que resuelva el problema, y subir en complejidad solo si el caso de negocio realmente lo exige.</p>
            <div class="term-short"><b>En corto</b>No es una cuestión de mejor contra peor, sino de encaje: los foundation models ganan en adaptabilidad y velocidad para tareas amplias y variadas; el ML tradicional gana en industrias reguladas, cuando necesitas explicar cada decisión, o cuando las restricciones operativas — costo, latencia, control de infraestructura — pesan más que la flexibilidad. AWS recomienda empezar con lo más simple que resuelva el problema.</div>
          </div>`,
  },
  {
    id: "gloss-d1-t3-b1",
    html: `<p class="gloss-bullet-text">"Describir y diferenciar los componentes de un pipeline de IA/ML."</p>

          <div class="term-card">
            <h4>Componentes del pipeline de IA/ML</h4>
            <p>Un pipeline de ML es la secuencia de pasos que lleva un problema de negocio hasta un modelo funcionando en producción. La guía de decisión oficial de AWS para elegir un servicio de ML describe estas etapas. Primero, definir el problema de negocio: entender exactamente qué se quiere resolver, antes de elegir cualquier servicio. Luego, la preparación y el etiquetado de datos: limpiar y transformar los datos, y etiquetarlos si hace falta — en AWS, esto se hace con SageMaker Data Wrangler y SageMaker Ground Truth. Después, el desarrollo y entrenamiento del modelo: elegir el algoritmo y entrenarlo, ya sea con SageMaker Autopilot, para automatizarlo, o con SageMaker Studio, para desarrollo manual. A continuación, el despliegue y la inferencia: poner el modelo a disposición de una aplicación, en tiempo real, por lotes o por streaming. Y por último, la orquestación del flujo completo: en AWS, SageMaker Pipelines conecta y automatiza todos los pasos anteriores, como un flujo de integración y entrega continuas, pero para ML.</p>
            <p>Lo que diferencia a cada etapa es el tipo de trabajo y el rol involucrado. Preparar los datos es principalmente ingeniería de datos. Entrenar y evaluar el modelo es trabajo de ciencia de datos. El despliegue está más cerca de la ingeniería de software y de MLOps. Y el monitoreo posterior, que vamos a ver en el siguiente bullet, es continuo — no es un paso único al final.</p>
            <div class="term-short"><b>En corto</b>Un pipeline de IA y ML son los pasos desde el problema de negocio hasta el modelo en producción: definir el problema, preparar y etiquetar los datos, entrenar y evaluar el modelo, desplegarlo para inferencia, y orquestar y automatizar todo ese flujo — en AWS, con SageMaker Pipelines.</div>
          </div>`,
  },
  {
    id: "gloss-d1-t3-b2",
    html: `<p class="gloss-bullet-text">"Describir las fuentes de los FMs (modelos preentrenados de código abierto, entrenamiento de modelos propios)."</p>

          <div class="term-card">
            <h4>Modelos preentrenados de código abierto</h4>
            <p>Los modelos preentrenados de código abierto son foundation models que alguien más ya entrenó, con enormes cantidades de datos y de cómputo, y que libera para que otros los usen directamente o los adapten. En AWS, se accede a ellos sobre todo a través de Amazon Bedrock, que ofrece más de 100 foundation models de proveedores como Anthropic, Meta, Mistral o Amazon Nova, entre otros, o a través de Amazon SageMaker JumpStart, que ofrece modelos preentrenados listos para desplegar o para afinar. La ventaja es un acceso rápido, sin el costo de entrenar desde cero, con la posibilidad de personalizarlos después mediante fine-tuning, RAG, o preentrenamiento continuo.</p>
            <div class="term-short"><b>En corto</b>Son modelos ya entrenados por otros — AWS, Anthropic, Meta, y demás — que usas directamente o adaptas, en AWS vía Amazon Bedrock o SageMaker JumpStart. Es rápido y sin el costo de entrenar desde cero.</div>
          </div>

          <div class="term-card">
            <h4>Entrenamiento de modelos propios</h4>
            <p>Esta opción es construir y entrenar tu propio modelo desde cero, con tus propios datos y tu propia infraestructura de cómputo. La guía de decisión de AWS recomienda este camino, con Amazon SageMaker AI, cuando el caso de uso puede beneficiarse de un entrenamiento extenso, de fine-tuning y de una personalización profunda, y cuando tienes datasets grandes, etiquetados y específicos de tu dominio. A cambio, esto requiere mucho más tiempo, más cómputo y más experiencia en ML que usar un modelo ya preentrenado.</p>
            <div class="term-short"><b>En corto</b>Es construir tu propio modelo desde cero, con tus datos e infraestructura — en AWS, con SageMaker AI. Da control total, pero cuesta mucho más tiempo, cómputo y experiencia que usar uno preentrenado.</div>
          </div>`,
  },
  {
    id: "gloss-d1-t3-b3",
    html: `<p class="gloss-bullet-text">"Describir métodos para poner un modelo en producción (servicio de API administrado, API auto-alojada)."</p>

          <div class="term-card">
            <h4>Servicio de API administrado (managed)</h4>
            <p>Un servicio de API administrado es usar un modelo a través de una API que AWS opera y mantiene por ti. El ejemplo principal es Amazon Bedrock, que da acceso a foundation models mediante una única API, independiente del modelo específico que uses, con la posibilidad de cambiar de modelo o de subir de versión con cambios mínimos de código. La guía de decisión de AWS lo recomienda cuando quieres una solución llave en mano, sin tener que gestionar infraestructura, y cuando necesitas seguridad, privacidad e IA responsable ya incorporadas, sin trabajo adicional de tu parte.</p>
            <div class="term-short"><b>En corto</b>Usas el modelo a través de una API que AWS mantiene por ti, por ejemplo Amazon Bedrock, sin gestionar servidores ni infraestructura, aunque con menos control sobre el hardware.</div>
          </div>

          <div class="term-card">
            <h4>API auto-alojada (self-hosted)</h4>
            <p>Una API auto-alojada es desplegar y operar tú mismo la infraestructura donde corre el modelo, típicamente con endpoints propios de Amazon SageMaker AI, o con hardware especializado como AWS Trainium e Inferentia, para cargas de inferencia de alto volumen y sensibles al costo. Esto da control total sobre el despliegue y permite optimizar el hardware para el caso específico, a cambio de que tú, o tu equipo, sean responsables de gestionar esa infraestructura.</p>
            <div class="term-short"><b>En corto</b>Tú despliegas y gestionas la infraestructura del modelo, por ejemplo con SageMaker o con hardware Trainium e Inferentia — más control, pero más responsabilidad operativa.</div>
          </div>

          <div class="term-card">
            <h4>Modos de inferencia dentro de una API auto-alojada</h4>
            <p>Dentro de la opción auto-alojada, por ejemplo con Amazon SageMaker AI, el modo de inferencia se elige según el patrón de tráfico. El modo tiempo real es para predicciones de baja latencia con tráfico sostenido — un endpoint siempre activo, con auto-escalado. El modo por lotes es para procesar grandes volúmenes de datos de forma asíncrona, sin necesitar una respuesta inmediata. El modo asíncrono es para solicitudes con payloads grandes o tiempos de procesamiento largos, donde tampoco se necesita una respuesta instantánea. Y el modo serverless es para tráfico intermitente o impredecible, donde no tiene sentido pagar por un endpoint siempre encendido, y AWS escala la capacidad automáticamente según la demanda.</p>
            <div class="term-short"><b>En corto</b>Al auto-alojar un modelo, eliges cómo servirlo según el tráfico: tiempo real, siempre activo y de baja latencia; por lotes, para grandes volúmenes de forma asíncrona; asíncrono, para payloads grandes; o serverless, para tráfico intermitente sin infraestructura fija.</div>
          </div>`,
  },
  {
    id: "gloss-d1-t3-b4",
    html: `<p class="gloss-bullet-text">"Identificar los servicios y funciones de AWS relevantes en cada etapa del pipeline de IA/ML (Amazon Bedrock, Amazon Quick, Kiro, SageMaker AI)."</p>

          <div class="term-card">
            <h4>Amazon Bedrock</h4>
            <p>Amazon Bedrock es un servicio totalmente administrado que da acceso seguro y de nivel empresarial a foundation models de las principales compañías de IA, como Amazon Nova o Anthropic Claude, entre otros, para construir y escalar aplicaciones de GenAI. Ofrece múltiples APIs, personalización de modelos mediante fine-tuning, preentrenamiento continuo o destilación, inferencia entre distintas regiones, y function calling. Dentro del pipeline, cubre las etapas de selección de modelo, personalización, y despliegue de aplicaciones de GenAI.</p>
            <div class="term-short"><b>En corto</b>Da acceso administrado a foundation models de varios proveedores para construir aplicaciones de GenAI, con opciones de personalización y despliegue incluidas.</div>
          </div>

          <div class="term-card">
            <h4>Amazon Q <em>(extra, no está en el bullet oficial)</em></h4>
            <p>Antes que nada, una aclaración: el bullet oficial de AWS no menciona a Amazon Q. Lo agregamos acá como referencia porque es un servicio real y relevante de IA generativa dentro de AWS, pero no es parte confirmada de este objetivo puntual del examen. Dicho esto, Amazon Q es un asistente de IA generativa construido a la medida de distintos roles. Para los desarrolladores, ayuda a escribir, depurar, probar y desplegar código, y a modernizar aplicaciones existentes. Para los usuarios de negocio, responde preguntas usando los datos de la empresa, genera contenido, y puede ejecutar acciones automatizadas. Y para los analistas, arma dashboards y visualizaciones a partir de lenguaje natural. AWS destaca algo importante: respeta los permisos y la identidad de cada usuario, así que nadie accede, a través de Amazon Q, a datos que no podría ver de otra forma. Dentro del pipeline, es más una herramienta de productividad alrededor del desarrollo y el uso de soluciones de IA, que una etapa formal del pipeline de entrenamiento.</p>
            <div class="term-short"><b>En corto</b>Es el asistente de IA generativa de AWS, especializado según el rol — desarrollo, negocio, análisis de datos — que respeta los permisos de cada usuario. No forma parte del bullet oficial.</div>
          </div>

          <div class="term-card">
            <h4>Amazon Quick (Amazon Quick Suite)</h4>
            <p>Amazon Quick, o Amazon Quick Suite, es la evolución de Amazon QuickSight hacia una suite de inteligencia de negocio potenciada por IA, anunciada en 2026. Incluye Quick Sight, para dashboards y análisis tradicionales de BI; Quick Research, para generar insights citados a partir de datos internos y públicos; Quick Flows, para automatizaciones con lenguaje natural; Quick Automate, para procesos de negocio de varios pasos; y Quick Index, que es una base de conocimiento compartida de los documentos y datos de la empresa. Todo esto es accesible mediante una interfaz de chat en lenguaje natural, llamada Quick chat. Dentro del pipeline de IA y ML, se ubica del lado del consumo: es donde el negocio usa los resultados, más que donde se entrena un modelo.</p>
            <div class="term-short"><b>En corto</b>Es la suite de AWS que combina BI tradicional, antes QuickSight, con IA generativa y agentes, para investigar datos, automatizar flujos y responder preguntas en lenguaje natural.</div>
          </div>

          <div class="term-card">
            <h4>Kiro</h4>
            <p>Kiro es un entorno de desarrollo, o IDE, agéntico de AWS, lanzado en 2025, enfocado en un desarrollo guiado por especificaciones. En vez de solo generar código a partir de un prompt suelto, lo que se conoce como vibe coding, Kiro ayuda a planificar especificaciones, tareas y arquitectura antes de escribir el código, usando agentes de IA a lo largo de todo el flujo. Vale una aclaración de transparencia: al ser un producto muy reciente, la documentación oficial de AWS todavía es limitada, comparada con servicios más maduros como SageMaker o Bedrock. Esta descripción se basa en anuncios oficiales de AWS y en cobertura técnica especializada, no en una página exhaustiva de la documentación oficial.</p>
            <div class="term-short"><b>En corto</b>Es el IDE agéntico de AWS para desarrollo de software guiado por especificaciones, no solo por prompts sueltos. Su documentación oficial todavía es limitada por ser un producto muy nuevo.</div>
          </div>

          <div class="term-card">
            <h4>SageMaker AI <em>(ver Task 1.2, Bullet 5)</em></h4>
            <p>A SageMaker AI ya lo definimos como el servicio central para construir, entrenar y desplegar modelos. En este bullet, es la pieza que cubre las etapas de datos, entrenamiento, evaluación y despliegue del pipeline, a diferencia de Bedrock, Amazon Q o Amazon Quick, que se enfocan más en consumir o aplicar modelos que ya existen.</p>
            <div class="term-short"><b>En corto</b>Ya vimos la definición completa antes. Acá, es la pieza del pipeline que cubre datos, entrenamiento, evaluación y despliegue de modelos propios.</div>
          </div>`,
  },
  {
    id: "gloss-d1-t3-b5",
    html: `<p class="gloss-bullet-text">"Describir los conceptos fundamentales de MLOps (experimentación, procesos repetibles, sistemas escalables, gestión de deuda técnica, preparación para producción, monitoreo del modelo, reentrenamiento)."</p>

          <div class="term-card">
            <h4>Experimentación</h4>
            <p>La experimentación es la fase donde los científicos de datos prueban distintos algoritmos, features y configuraciones, antes de decidir cuál de todas va a producción. AWS enmarca esto dentro de MLOps: cada versión del código de entrenamiento y de la especificación del modelo se revisa y se versiona, para que los experimentos sean auditables y repetibles.</p>
            <div class="term-short"><b>En corto</b>Es la fase de prueba de distintos algoritmos y configuraciones antes de elegir el modelo final. En MLOps se versiona todo para poder repetir o auditar cada experimento.</div>
          </div>

          <div class="term-card">
            <h4>Procesos repetibles</h4>
            <p>Según AWS, versionar el código de entrenamiento y las especificaciones del modelo garantiza reproducibilidad: poder reproducir el mismo resultado, o revertir a una versión anterior, es uno de los principios centrales de MLOps.</p>
            <div class="term-short"><b>En corto</b>Es poder repetir el mismo proceso de entrenamiento y obtener el mismo resultado, o revertir a una versión anterior — clave para poder auditar y confiar en el modelo.</div>
          </div>

          <div class="term-card">
            <h4>Sistemas escalables</h4>
            <p>Los sistemas escalables se refieren a que la infraestructura de entrenamiento y de inferencia pueda crecer para manejar más datos, más usuarios o más solicitudes, sin tener que rediseñar todo desde cero. En AWS, esto se logra automatizando cada etapa del pipeline — la ingesta de datos, el entrenamiento, el despliegue — para que se activen automáticamente ante ciertos disparadores, como datos nuevos, cambios en el código, o eventos de monitoreo.</p>
            <div class="term-short"><b>En corto</b>La infraestructura de ML puede crecer para atender más datos o más tráfico sin tener que rediseñarse desde cero, apoyada en automatización.</div>
          </div>

          <div class="term-card">
            <h4>Gestión de deuda técnica</h4>
            <p>La gestión de deuda técnica es identificar y controlar los costos ocultos de mantener un sistema de ML a lo largo del tiempo: dependencias frágiles entre componentes, código de entrenamiento difícil de modificar, o pipelines mal documentados, que hacen que cada cambio sea más caro y más riesgoso. Vale una aclaración de transparencia: no encontramos una página oficial de AWS con una definición dedicada exactamente a este término. El concepto viene del consenso estándar de la ingeniería de ML, popularizado por un paper de Google llamado "Hidden Technical Debt in Machine Learning Systems", y encaja con la práctica de gobernanza de modelos que sí menciona la página oficial de AWS sobre MLOps.</p>
            <div class="term-short"><b>En corto</b>Son los costos ocultos de mantener un sistema de ML mal documentado o mal versionado con el tiempo — cada cambio se vuelve más caro y más riesgoso si no se gestiona.</div>
          </div>

          <div class="term-card">
            <h4>Preparación para producción</h4>
            <p>La preparación para producción es asegurarse de que un modelo no solo funcione bien en un notebook de prueba, sino que esté realmente listo para operar de forma confiable en un entorno real: con pruebas de seguridad, revisión de sesgo, cumplimiento normativo, y la infraestructura de despliegue ya validada. AWS lo enmarca dentro de la gobernanza de modelos: la colaboración entre científicos de datos, ingenieros y otros interesados, con mecanismos de revisión y de verificación de cumplimiento antes de desplegar.</p>
            <div class="term-short"><b>En corto</b>Es validar que el modelo, y todo lo que lo rodea — seguridad, sesgo, cumplimiento — esté realmente listo para operar en un entorno real, no solo en pruebas.</div>
          </div>

          <div class="term-card">
            <h4>Monitoreo del modelo</h4>
            <p>Una vez que el modelo está en producción, hay que seguir midiendo su desempeño, y también el de los datos que recibe, en tiempo real. Esto es parte de lo que AWS llama monitoreo continuo dentro de MLOps, uno de los cuatro tipos de actividad continua, junto con la integración, la entrega y el entrenamiento continuos.</p>
            <div class="term-short"><b>En corto</b>Es medir continuamente cómo se desempeña el modelo ya en producción, para detectar caídas de exactitud o cambios en los datos de entrada.</div>
          </div>

          <div class="term-card">
            <h4>Reentrenamiento</h4>
            <p>El reentrenamiento es volver a entrenar el modelo cuando su desempeño se degrada, por ejemplo, porque el comportamiento del mundo real cambió respecto a los datos originales de entrenamiento — a esto se lo llama drift. AWS lo describe como entrenamiento continuo dentro de MLOps: reentrenar automáticamente el modelo cuando el monitoreo detecta que hace falta.</p>
            <div class="term-short"><b>En corto</b>Es volver a entrenar el modelo cuando su desempeño baja porque los datos del mundo real cambiaron respecto al entrenamiento original.</div>
          </div>

          <div class="term-card">
            <h4>Hiperparámetros de entrenamiento (epoch, batch size, learning rate)</h4>
            <p>Los hiperparámetros de entrenamiento son los parámetros que controlan cómo transcurre el entrenamiento en sí, y se ajustan antes de lanzar cada experimento. El epoch es una pasada completa por todo el dataset de entrenamiento — más epochs suelen mejorar el aprendizaje, pero demasiadas pueden llevar a overfitting. El batch size es la cantidad de ejemplos que el modelo procesa antes de actualizar sus parámetros: lotes chicos actualizan más seguido, así que convergen rápido pero con más ruido, mientras que lotes grandes son más estables, aunque piden más cómputo y más memoria. Y el learning rate controla qué tan grandes son esos ajustes: uno alto entrena rápido, pero puede saltarse la mejor solución; uno bajo converge más lento, pero con más precisión.</p>
            <div class="term-short"><b>En corto</b>El epoch es una vuelta completa a los datos de entrenamiento. El batch size es cuántos ejemplos se procesan antes de cada ajuste. Y el learning rate es qué tan grandes son esos ajustes. Los tres se afinan durante la fase de experimentación.</div>
          </div>

          <div class="term-card">
            <h4>Data drift vs. concept drift</h4>
            <p>El data drift y el concept drift son las dos formas en que el mundo real se desalinea del modelo entrenado, y son la razón técnica detrás del reentrenamiento. El data drift ocurre cuando los datos de entrada cambian, por ejemplo, aparece un nuevo grupo demográfico de usuarios, pero la relación entre entrada y salida sigue siendo válida. El concept drift, en cambio, ocurre cuando esa relación misma cambia. El ejemplo clásico es un modelo de detección de fraude que deja de funcionar bien porque aparecieron patrones de fraude nuevos, que no existían en los datos de entrenamiento originales.</p>
            <div class="term-short"><b>En corto</b>En el data drift, cambian los datos de entrada, pero la relación entre entrada y salida sigue siendo la misma. En el concept drift, la relación misma cambia, por ejemplo con patrones de fraude nuevos. Ambos son señales de que hace falta reentrenar.</div>
          </div>`,
  },
  {
    id: "gloss-d1-t3-b6",
    html: `<p class="gloss-bullet-text">"Describir métricas de desempeño del modelo (accuracy, precisión, recall, F1) y métricas de negocio (costo por usuario, costos de desarrollo, feedback de clientes, ROI) para evaluar modelos de ML."</p>

          <div class="term-card">
            <h4>Accuracy (exactitud)</h4>
            <p>El accuracy, o exactitud, según la documentación de Amazon SageMaker, es el porcentaje de predicciones correctas: la proporción entre el número de ítems predichos correctamente y el total de predicciones. Va de 0 a 1, donde 1 es exactitud perfecta.</p>
            <div class="term-short"><b>En corto</b>Es el porcentaje de predicciones correctas sobre el total. Ojo, puede ser engañosa si las clases están muy desbalanceadas.</div>
          </div>

          <div class="term-card">
            <h4>Precisión (precision)</h4>
            <p>La precisión mide, de todas las veces que el modelo predijo una categoría determinada, en qué porcentaje acertó realmente. La fórmula es: los verdaderos positivos, divididos entre la suma de los verdaderos positivos y los falsos positivos. Es una métrica clave cuando el costo de un falso positivo es alto — el ejemplo que da AWS es un sistema de seguridad aérea que declara, por error, que algo es seguro para volar cuando no lo es.</p>
            <div class="term-short"><b>En corto</b>De todo lo que el modelo marcó como positivo, mide qué porcentaje realmente lo era. Importa mucho cuando un falso positivo sale caro o es peligroso.</div>
          </div>

          <div class="term-card">
            <h4>Recall (sensibilidad)</h4>
            <p>El recall, o sensibilidad, mide qué porcentaje de todos los casos reales de una categoría el modelo logró identificar correctamente. La fórmula es: los verdaderos positivos, divididos entre la suma de los verdaderos positivos y los falsos negativos. Y AWS advierte algo importante: medir solo el recall no alcanza, porque si el modelo predijera que todo es positivo, tendría un recall perfecto sin servir absolutamente para nada.</p>
            <div class="term-short"><b>En corto</b>De todos los casos reales que existían, mide qué porcentaje detectó el modelo. Hay que mirarlo junto con la precisión, no por separado.</div>
          </div>

          <div class="term-card">
            <h4>F1 score</h4>
            <p>El F1 score es la media armónica entre la precisión y el recall: una sola métrica balanceada que tiene en cuenta ambas a la vez, y considera el balance entre clases. La fórmula es 2 veces el producto de precisión por recall, dividido entre la suma de precisión más recall. Va de 0, el peor caso, a 1, el mejor desempeño posible.</p>
            <div class="term-short"><b>En corto</b>Combina la precisión y el recall en un solo número balanceado — útil cuando quieres un resumen único en vez de mirar las dos métricas por separado.</div>
          </div>

          <div class="term-card">
            <h4>MSE y RMSE (error cuadrático medio)</h4>
            <p>El MSE y el RMSE son métricas para modelos de regresión, es decir, para predecir un número y no una categoría — no encajan con el accuracy, la precisión, el recall o el F1, que son para clasificación. El MSE, o error cuadrático medio, calcula el promedio del error al cuadrado entre lo predicho y el valor real, penalizando más los errores grandes; un MSE más bajo indica mejor desempeño. El RMSE es la raíz cuadrada del MSE, lo que lo devuelve a la misma unidad que la variable que se está prediciendo — por ejemplo, dólares, si se predicen precios — y eso lo hace más fácil de interpretar.</p>
            <div class="term-short"><b>En corto</b>Son métricas para regresión, es decir, para predecir un número. El MSE promedia el error al cuadrado, y el RMSE es su raíz cuadrada, en la misma unidad que lo predicho. En ambas, más bajo es mejor.</div>
          </div>

          <div class="term-card">
            <h4>Curva ROC y AUC</h4>
            <p>La curva ROC grafica la tasa de verdaderos positivos, es decir el recall, contra la tasa de falsos positivos, a distintos umbrales de decisión de un clasificador binario, mostrando el equilibrio entre sensibilidad y especificidad según dónde se ponga el corte. El AUC, o área bajo la curva, resume esa curva entera en un solo número: cuanto más cerca de 1, mejor distingue el modelo entre las dos clases, sin importar qué umbral se elija.</p>
            <div class="term-short"><b>En corto</b>La curva ROC muestra el equilibrio entre detectar positivos y generar falsos positivos según el umbral elegido. El AUC la resume en un número — más cerca de 1 es mejor.</div>
          </div>

          <div class="term-card">
            <h4>Costo por usuario</h4>
            <p>El costo por usuario es cuánto cuesta, en promedio, atender a cada usuario con la solución de IA — cómputo de inferencia, almacenamiento, soporte — dividido entre el número de usuarios activos. Es una métrica de negocio, no técnica: dice si la solución es sostenible económicamente a medida que crece la base de usuarios, más allá de qué tan exacto sea el modelo. Es un concepto de negocio estándar aplicado a la IA, no una definición exclusiva de una página oficial de AWS.</p>
            <div class="term-short"><b>En corto</b>Es cuánto cuesta atender a cada usuario con la solución de IA. Mide si el negocio es sostenible al escalar, no la calidad técnica del modelo.</div>
          </div>

          <div class="term-card">
            <h4>Costos de desarrollo</h4>
            <p>Los costos de desarrollo son la inversión total para construir la solución: los datos, es decir su recolección, etiquetado y almacenamiento; el cómputo de entrenamiento; el tiempo del equipo de ciencia de datos y de ingeniería; y las herramientas o licencias. Esto se compara contra el valor que la solución genera, para decidir si el proyecto se justifica — el mismo análisis costo-beneficio que vimos antes.</p>
            <div class="term-short"><b>En corto</b>Es todo lo que cuesta construir la solución de IA: datos, cómputo, equipo. Se compara contra el beneficio esperado para justificar el proyecto.</div>
          </div>

          <div class="term-card">
            <h4>Feedback de clientes</h4>
            <p>El feedback de clientes es la retroalimentación directa de los usuarios reales sobre la solución: calificaciones, quejas, tickets de soporte, encuestas de satisfacción. Es una métrica de negocio, porque un modelo puede tener un accuracy técnico muy bueno y aun así generar una mala experiencia de usuario, si sus errores caen justo en los casos que más le importan al cliente.</p>
            <div class="term-short"><b>En corto</b>Es lo que opinan los usuarios reales de la solución — puede revelar problemas que las métricas técnicas, como el accuracy o el F1, no capturan.</div>
          </div>

          <div class="term-card">
            <h4>ROI (retorno de inversión)</h4>
            <p>El ROI, o retorno de inversión, mide cuánto valor económico genera la solución de IA en relación a lo que costó construirla y mantenerla — ahorro de horas de trabajo manual, aumento de ventas, reducción de fraude — dividido entre el costo total. Es, junto con el costo por usuario y los costos de desarrollo, una de las métricas que finalmente decide si un proyecto de IA se mantiene, se escala o se cancela, más allá de qué tan buenas sean sus métricas técnicas.</p>
            <div class="term-short"><b>En corto</b>Es cuánto valor económico genera la solución comparado con lo que costó — la métrica final que decide si el proyecto de IA se mantiene o se cancela.</div>
          </div>`,
  },
  {
    id: "gloss-d2-t1-b1",
    html: `<p class="gloss-bullet-text">"Definir conceptos fundamentales de GenAI (tokens, chunking, embeddings, vectores, prompt engineering, LLMs basados en transformers, FMs, modelos multimodales, modelos de difusión)."</p>

          <div class="term-card">
            <h4>Tokens</h4>
            <p>Un token es la unidad mínima de texto que procesa un LLM — puede ser una palabra completa, parte de una palabra, o un signo de puntuación, según cómo el modelo divida el texto, lo que se llama tokenización. AWS cobra el uso de sus modelos en Amazon Bedrock precisamente en función de tokens de entrada y de salida: por ejemplo, Claude 3.5 Sonnet se cobra por millón de tokens de entrada, y por millón de tokens de salida, cada uno a un precio distinto. Vale una aclaración de transparencia: no encontramos una página oficial de AWS que defina token de forma aislada; esta definición combina el consenso técnico estándar con cómo AWS efectivamente lo usa, y cobra por él, en Bedrock.</p>
            <div class="term-short"><b>En corto</b>Es la unidad mínima de texto que procesa un LLM, ya sea una palabra, parte de una palabra o un símbolo. AWS cobra por los tokens de entrada y salida que consume cada llamada al modelo.</div>
          </div>

          <div class="term-card">
            <h4>Chunking</h4>
            <p>El chunking es el proceso de dividir documentos o contenido en fragmentos manejables, antes de convertirlos en embeddings, típicamente al ingerir datos en una base de conocimiento. Según AWS, Bedrock primero divide los documentos en fragmentos, los convierte en embeddings, y los guarda en un índice vectorial, manteniendo el mapeo hacia el documento original. Acá hay un balance importante: los fragmentos pequeños son más precisos para la búsqueda semántica, pero generar respuestas necesita un contexto suficientemente amplio. Por eso existen estrategias como el chunking jerárquico, que reemplaza los fragmentos pequeños recuperados por sus fragmentos padre, más completos, cuando hace falta más contexto.</p>
            <div class="term-short"><b>En corto</b>Es dividir documentos en fragmentos manejables antes de convertirlos en embeddings para una base de conocimiento. El balance clave es este: fragmentos pequeños dan más precisión, y fragmentos grandes dan más contexto.</div>
          </div>

          <div class="term-card">
            <h4>Embeddings</h4>
            <p>Los embeddings son representaciones numéricas, vectores, que capturan el significado y el contexto de un dato — texto, imagen, audio — de forma que se puedan comparar entre sí de manera cuantitativa. AWS lo resume así: los embeddings codifican todo tipo de datos en vectores que capturan el significado y el contexto de ese dato, lo que permite hacer búsquedas por similitud, es decir, encontrar los puntos de datos vecinos dentro de ese espacio vectorial.</p>
            <div class="term-short"><b>En corto</b>Es la representación numérica de un dato — texto, imagen o audio — que captura su significado, y permite comparar qué tan parecidos son dos elementos entre sí.</div>
          </div>

          <div class="term-card">
            <h4>Vectores</h4>
            <p>Un vector es la forma matemática en la que se representa un embedding: una lista ordenada de números, por ejemplo con 768 o 1536 dimensiones, que ubica ese dato como un punto dentro de un espacio de alta dimensión. Los datos con un significado parecido quedan ubicados cerca uno del otro en ese espacio. Se guardan en bases de datos vectoriales, como Amazon OpenSearch Service, que es la que recomienda AWS para usar con Bedrock, y que ofrecen búsqueda eficiente de vecinos más cercanos, usando algoritmos como HNSW o IVF.</p>
            <div class="term-short"><b>En corto</b>Es la lista de números que representa un embedding, ubicándolo como un punto en un espacio de alta dimensión — los datos parecidos quedan cerca entre sí. Se guardan en bases de datos vectoriales, como Amazon OpenSearch Service.</div>
          </div>

          <div class="term-card">
            <h4>Prompt engineering</h4>
            <p>El prompt engineering es la práctica de diseñar y redactar las instrucciones, o prompts, que se le dan a un foundation model para obtener la respuesta deseada. Acá solo hace falta definir el concepto; el Dominio 3 del examen lo cubre a fondo, con técnicas específicas como chain-of-thought o few-shot, que vamos a desarrollar ahí en detalle.</p>
            <div class="term-short"><b>En corto</b>Es diseñar y redactar las instrucciones que se le dan a un modelo para obtener la respuesta deseada. Lo vamos a ver a fondo más adelante, en el Dominio 3.</div>
          </div>

          <div class="term-card">
            <h4>LLMs basados en transformers</h4>
            <p>A LLM ya lo definimos en el Dominio 1; acá el examen agrega un detalle arquitectónico. Los LLMs modernos están construidos sobre la arquitectura transformer, que usa un mecanismo de atención, o self-attention, para procesar una secuencia de texto completa en paralelo, en vez de palabra por palabra, entendiendo cómo se relacionan entre sí las palabras de una oración, sin importar qué tan lejos estén una de otra. Ese procesamiento en paralelo es justamente lo que permitió escalar los modelos a cientos de miles de millones de parámetros.</p>
            <div class="term-short"><b>En corto</b>Un LLM es un modelo de deep learning enorme. Basado en transformers se refiere a la arquitectura específica, con mecanismo de atención, que le permite procesar texto en paralelo y relacionar palabras distantes entre sí.</div>
          </div>

          <div class="term-card">
            <h4>FMs (foundation models)</h4>
            <p>Los foundation models, AWS los define como grandes redes neuronales de deep learning, entrenadas sobre conjuntos de datos masivos, que sirven como punto de partida para desarrollar modelos de ML más rápido y de forma más económica que construir uno desde cero. La diferencia clave frente al ML tradicional es esta: mientras un modelo tradicional suele resolver una tarea específica, como analizar sentimiento o clasificar imágenes, un foundation model tiene adaptabilidad para resolver una amplia variedad de tareas distintas con buena exactitud, sin haber sido entrenado específicamente para cada una de ellas.</p>
            <div class="term-short"><b>En corto</b>Son redes neuronales de deep learning muy grandes, entrenadas con datos masivos, que sirven como base adaptable para muchas tareas distintas — a diferencia de un modelo de ML tradicional, entrenado para una sola tarea.</div>
          </div>

          <div class="term-card">
            <h4>Modelos multimodales</h4>
            <p>Los modelos multimodales son modelos capaces de procesar o generar más de un tipo de dato a la vez — texto, imagen, audio, video — en vez de especializarse en uno solo. AWS pone como ejemplo el modelo Titan Multimodal Embeddings G1, que traduce tanto texto como imágenes a un mismo espacio de embeddings, que captura el significado semántico de ambos, permitiendo por ejemplo buscar imágenes usando una descripción en texto.</p>
            <div class="term-short"><b>En corto</b>Son modelos que procesan o generan más de un tipo de dato a la vez — texto, imagen, audio o video — en vez de especializarse en uno solo.</div>
          </div>

          <div class="term-card">
            <h4>Modelos de difusión</h4>
            <p>Los modelos de difusión son un tipo de modelo generativo, usado sobre todo para generar imágenes, que aprende a crear contenido revirtiendo gradualmente un proceso de ruido. Durante el entrenamiento, se le enseña a partir de una imagen a la que se le va agregando ruido progresivamente, hasta volverse ruido puro, y luego el modelo aprende el proceso inverso: partir de ruido puro e ir limpiándolo paso a paso, hasta obtener una imagen coherente. AWS menciona modelos como Stable Diffusion XL y Titan Image Generator versión 2, como ejemplos orientados a tareas de visión dentro de Amazon Bedrock. Vale aclarar que la documentación oficial de AWS revisada no explica el mecanismo técnico interno del proceso de difusión en detalle — esa parte es consenso técnico estándar del campo.</p>
            <div class="term-short"><b>En corto</b>Son modelos generativos, usados sobre todo para imágenes, que aprenden a crear contenido revirtiendo un proceso de ruido paso a paso. Ejemplos en AWS Bedrock: Stable Diffusion XL y Titan Image Generator versión 2.</div>
          </div>`,
  },
  {
    id: "gloss-d2-t1-b2",
    html: `<p class="gloss-bullet-text">"Identificar posibles casos de uso para modelos de GenAI (generación de imagen/video/audio, resumen, asistentes de IA, traducción, generación de código, agentes de servicio al cliente, búsqueda, motores de recomendación)."</p>

          <div class="term-card">
            <h4>Generación de imagen/video/audio</h4>
            <p>La generación de imagen, video o audio es crear contenido visual o sonoro nuevo a partir de una descripción en texto, o de otro tipo de entrada — por ejemplo, una imagen de producto para marketing, un clip de video corto, o música de fondo. En AWS, esto se hace con modelos como Stable Diffusion XL o Titan Image Generator, disponibles en Amazon Bedrock.</p>
            <div class="term-short"><b>En corto</b>Es crear imágenes, videos o audio nuevos a partir de una descripción — en AWS, con modelos como Stable Diffusion XL o Titan Image Generator en Bedrock.</div>
          </div>

          <div class="term-card">
            <h4>Resumen</h4>
            <p>El resumen es condensar un documento, un artículo o una conversación larga en una versión más corta que conserve la información clave. Es una de las aplicaciones más comunes de los LLMs, y también una de las más sensibles a alucinaciones, si no se controla con técnicas de grounding, que vamos a ver en el Dominio 5, para evitar que el resumen invente datos que no estaban en el original.</p>
            <div class="term-short"><b>En corto</b>Es condensar textos largos en versiones cortas que conserven lo esencial — es muy sensible a alucinaciones si no se controla bien.</div>
          </div>

          <div class="term-card">
            <h4>Asistentes de IA</h4>
            <p>Los asistentes de IA son sistemas conversacionales que ayudan a una persona a realizar tareas usando lenguaje natural, desde responder preguntas hasta ejecutar acciones. En AWS, el ejemplo directo es Amazon Q, que ya vimos en el Dominio 1, con versiones especializadas para desarrolladores, para negocio y para análisis de datos.</p>
            <div class="term-short"><b>En corto</b>Son sistemas conversacionales que ayudan a realizar tareas en lenguaje natural — en AWS, el ejemplo es Amazon Q.</div>
          </div>

          <div class="term-card">
            <h4>Traducción</h4>
            <p>La traducción es convertir texto o voz de un idioma a otro. Ya vimos el servicio dedicado de AWS para esto, Amazon Translate, que usa ML avanzado, y cada vez más foundation models, para dar traducciones de alta calidad bajo demanda.</p>
            <div class="term-short"><b>En corto</b>Es convertir texto o voz entre idiomas — en AWS, el servicio dedicado es Amazon Translate.</div>
          </div>

          <div class="term-card">
            <h4>Generación de código</h4>
            <p>La generación de código es usar un foundation model para escribir, completar, depurar o explicar código, a partir de instrucciones en lenguaje natural o del contexto de un proyecto existente. En AWS, es el corazón de Amazon Q Developer, y también de Kiro, el IDE agéntico de AWS que ya vimos en el Dominio 1.</p>
            <div class="term-short"><b>En corto</b>Es escribir, completar o depurar código a partir de instrucciones en lenguaje natural — en AWS, Amazon Q Developer y Kiro.</div>
          </div>

          <div class="term-card">
            <h4>Agentes de servicio al cliente</h4>
            <p>Los agentes de servicio al cliente son sistemas de GenAI, a veces agénticos, que atienden consultas de clientes en lenguaje natural, ya sea redactando respuestas para que un humano las revise, o, si son agénticos, resolviendo la solicitud de punta a punta, por ejemplo procesar una devolución. En AWS, se construyen combinando Amazon Lex o Bedrock para la conversación, con Bedrock AgentCore o Strands Agents para la parte agéntica.</p>
            <div class="term-short"><b>En corto</b>Son sistemas de GenAI que atienden consultas de clientes en lenguaje natural, desde redactar respuestas hasta resolver la solicitud completa si son agénticos.</div>
          </div>

          <div class="term-card">
            <h4>Búsqueda</h4>
            <p>La búsqueda, en este contexto, es usar embeddings y bases de datos vectoriales para buscar por significado, lo que se llama búsqueda semántica, en vez de buscar solo por coincidencia exacta de palabras — por ejemplo, encontrar el documento correcto aunque la pregunta del usuario use palabras distintas a las del documento. Es la base técnica de RAG y de las bases de conocimiento que ya vimos en el Dominio 1.</p>
            <div class="term-short"><b>En corto</b>Es buscar por significado, no solo por palabra exacta, usando embeddings y bases de datos vectoriales — la base técnica de RAG.</div>
          </div>

          <div class="term-card">
            <h4>Motores de recomendación <em>(ver Dominio 1)</em></h4>
            <p>Ya vimos este caso de uso en el Dominio 1, con Amazon Personalize. Lo que le agrega la GenAI es la posibilidad de generar explicaciones en lenguaje natural de por qué se recomienda algo, o combinar preferencias expresadas en texto libre, no solo clics e historial, para generar la recomendación.</p>
            <div class="term-short"><b>En corto</b>Ya vimos la definición completa en el Dominio 1, con Amazon Personalize. La GenAI le suma explicaciones en lenguaje natural o preferencias expresadas en texto libre.</div>
          </div>`,
  },
  {
    id: "gloss-d2-t1-b3",
    html: `<p class="gloss-bullet-text">"Describir el ciclo de vida de un FM (selección de datos, selección del modelo, preentrenamiento, fine-tuning, evaluación, despliegue, retroalimentación)."</p>

          <div class="term-card">
            <h4>El ciclo de vida de un foundation model</h4>
            <p>Empecemos por la selección de datos: reunir y curar el conjunto de datos masivo con el que se va a entrenar el modelo. Su calidad y su diversidad determinan directamente la calidad del modelo final. Después viene la selección del modelo: decidir la arquitectura, que casi siempre es transformer, y el tamaño del modelo, según el balance deseado entre capacidad y costo. Luego, el preentrenamiento: la fase más costosa de todas, donde el modelo aprende patrones generales del lenguaje, o de la modalidad de datos que sea, usando esos datos masivos, normalmente sin etiquetas explícitas. Y después, el fine-tuning: ajustar ese modelo ya preentrenado con un dataset más pequeño y específico, a menudo etiquetado, para especializarlo en una tarea o un dominio concreto. Esta etapa es opcional, y ocurre después de que el foundation model base ya existe.</p>
            <p>Sigamos con la evaluación: medir el desempeño del modelo con benchmarks, con evaluación humana, o con servicios como Amazon Bedrock Model Evaluation, que vamos a ver a fondo en el Dominio 3, antes de confiar en él. Después, el despliegue: poner el modelo a disposición de una aplicación real, ya sea vía una API administrada como Amazon Bedrock, o auto-alojado con Amazon SageMaker AI. Y por último, la retroalimentación: recolectar señales de cómo se desempeña el modelo en producción — correcciones de usuarios, RLHF, métricas de negocio — que alimentan la siguiente ronda de fine-tuning o de preentrenamiento continuo. Y esto es clave: la retroalimentación cierra el ciclo, en vez de que todo termine en el despliegue.</p>
            <div class="term-short"><b>En corto</b>El ciclo de vida de un FM va desde seleccionar los datos y el modelo base, pasando por el preentrenamiento, que es el aprendizaje general masivo, y el fine-tuning opcional, que es la especialización, hasta la evaluación y el despliegue — y la retroalimentación de esa etapa final vuelve a alimentar el ciclo, en vez de terminar ahí.</div>
          </div>`,
  },
  {
    id: "gloss-d2-t1-b4",
    html: `<p class="gloss-bullet-text">"Describir el modelo de precios basado en tokens y su efecto en el costo y desempeño de la inferencia."</p>

          <div class="term-card">
            <h4>El modelo de precios basado en tokens</h4>
            <p>En Amazon Bedrock, el modelo de precios estándar, el que se llama on-demand, cobra por millón de tokens procesados, con un precio distinto para los tokens de entrada y los de salida. Por ejemplo, Claude 3.5 Sonnet cuesta 6 dólares por millón de tokens de entrada, y 30 dólares por millón de tokens de salida, en el nivel estándar. El costo de una sola llamada depende directamente de cuánto texto envías — el prompt, incluyendo cualquier documento adjunto — y de cuánto texto genera el modelo como respuesta.</p>
            <p>Veamos primero el efecto en el costo: un prompt más largo, o pedir respuestas más extensas, incrementa el costo de forma proporcional. Por eso prácticas como resumir el contexto antes de enviarlo, o limitar la longitud de la respuesta esperada, tienen un impacto económico directo, no solo un impacto en la calidad. Y ahora el efecto en el desempeño: más tokens de entrada también significan más latencia, porque el modelo tiene que leer y prestar atención a cada token del contexto antes de generar la respuesta. AWS ofrece niveles alternativos para ajustar ese balance: el nivel Priority cobra un recargo del 75% a cambio de menor latencia garantizada, mientras que Flex y Batch ofrecen un 50% de descuento, a cambio de aceptar más latencia.</p>
            <p>Y como alternativa, en vez de pagar por token bajo demanda, Bedrock ofrece lo que se llama provisioned throughput, o throughput aprovisionado: pagar una tarifa fija por hora por capacidad reservada, con descuentos según el plazo de compromiso. Por ejemplo, un modelo Llama 2 de 13 mil millones de parámetros cuesta 21 dólares con 18 centavos por hora con un compromiso de un mes, contra 13 dólares con 8 centavos por hora con un compromiso de seis meses. Esto conviene cuando el volumen es alto y predecible, porque diluye el costo por token, a cambio de comprometerte a pagar por esa capacidad, la uses por completo o no.</p>
            <div class="term-short"><b>En corto</b>Bedrock cobra por millón de tokens de entrada y de salida, a precios distintos, así que un prompt más largo o una respuesta más extensa cuestan más y tardan más. AWS ofrece niveles — Priority, Flex, Batch — para ajustar costo y latencia, y el throughput aprovisionado, una tarifa fija por capacidad reservada, para volumen alto y predecible.</div>
          </div>`,
  },
  {
    id: "gloss-d2-t1-b5",
    html: `<p class="gloss-bullet-text">"Describir el rol de la ingeniería de contexto en aplicaciones basadas en FMs."</p>

          <div class="term-card">
            <h4>El rol de la ingeniería de contexto</h4>
            <p>La ingeniería de contexto es la disciplina de diseñar y gestionar todo lo que un foundation model ve al momento de generar una respuesta. Y esto es más que solo la instrucción textual del usuario, que es lo que cubre el prompt engineering — también incluye el historial de la conversación, los documentos recuperados vía RAG, los resultados de llamadas a herramientas, la memoria de interacciones pasadas, y las instrucciones de sistema. La idea es que el modelo tenga exactamente la información relevante que necesita, ni de más ni de menos, para responder bien.</p>
            <p>Su rol es especialmente crítico en aplicaciones agénticas: un agente que usa múltiples herramientas y mantiene memoria a lo largo de una tarea larga puede saturar fácilmente la ventana de contexto del modelo, que es el límite de tokens que puede procesar a la vez, con información irrelevante o desactualizada. Y eso degrada la calidad de sus respuestas, y además aumenta el costo, porque más tokens de entrada significan más costo, como vimos en el bullet anterior. Servicios como Amazon Bedrock AgentCore Memory existen precisamente para ayudar a gestionar qué información de memoria, de corto y de largo plazo, se le entrega al modelo en cada paso.</p>
            <div class="term-short"><b>En corto</b>Es diseñar qué información completa recibe el modelo en cada llamada — no solo la instrucción del usuario, sino también el historial, los documentos recuperados, los resultados de herramientas y la memoria — para que responda bien sin saturar su ventana de contexto ni disparar el costo. Es especialmente crítica en aplicaciones agénticas.</div>
          </div>`,
  },
  {
    id: "gloss-d2-t1-b6",
    html: `<p class="gloss-bullet-text">"Definir conceptos fundamentales de IA agéntica (patrones de sistemas multiagente, Model Context Protocol [MCP] y su rol conectando agentes con sistemas externos, patrones de comunicación entre agentes, gestión de memoria, uso de herramientas, orquestación de flujos de trabajo)."</p>

          <div class="term-card">
            <h4>Patrones de sistemas multiagente</h4>
            <p>Los patrones de sistemas multiagente son las distintas formas de organizar varios agentes de IA para que colaboren en una tarea, en vez de depender de un solo agente que lo haga todo. AWS, a través de su SDK de código abierto Strands Agents, ofrece patrones nativos como Swarm, donde varios agentes trabajan en paralelo sobre distintas partes del problema; Graph, donde los agentes están conectados en una estructura definida, y el resultado de uno alimenta a otro; y Workflow, que es una secuencia de pasos coordinada entre agentes.</p>
            <div class="term-short"><b>En corto</b>Son las formas de organizar varios agentes para que colaboren en una tarea. En AWS, con Strands Agents, los patrones nativos son Swarm, Graph y Workflow.</div>
          </div>

          <div class="term-card">
            <h4>Model Context Protocol (MCP) y su rol conectando agentes con sistemas externos</h4>
            <p>El MCP, o Model Context Protocol, es un estándar abierto, creado por Anthropic, para conectar aplicaciones de IA a sistemas externos: fuentes de datos, como archivos locales o bases de datos; herramientas, como buscadores o calculadoras; y flujos de trabajo, como prompts especializados. La documentación oficial del MCP lo compara con un puerto USB-C para aplicaciones de IA: así como el USB-C estandariza cómo se conectan los dispositivos electrónicos, el MCP estandariza cómo un agente se conecta a herramientas y datos externos, sin tener que construir una integración a medida para cada sistema. AWS lo identifica como uno de los protocolos de comunicación entre agentes que están emergiendo como estándar, junto con Agent2Agent, o A2A, y servicios como Amazon Bedrock AgentCore Gateway convierten APIs y funciones Lambda existentes en herramientas compatibles con MCP.</p>
            <div class="term-short"><b>En corto</b>Es un estándar abierto que conecta un agente de IA con herramientas y fuentes de datos externas de forma estandarizada — como un USB-C para IA. En AWS, Bedrock AgentCore Gateway lo usa para exponer APIs existentes como herramientas MCP.</div>
          </div>

          <div class="term-card">
            <h4>Patrones de comunicación entre agentes</h4>
            <p>Los patrones de comunicación entre agentes son las formas en que distintos agentes se pasan información o coordinan su trabajo entre sí — por ejemplo, un agente orquestador que reparte subtareas a agentes trabajadores, y después combina sus resultados. Más allá del MCP, que conecta un agente con herramientas y datos, existen protocolos pensados específicamente para que los agentes se comuniquen entre sí, como Agent2Agent, o A2A, que AWS menciona como protocolo abierto emergente, junto al MCP.</p>
            <div class="term-short"><b>En corto</b>Son las formas en que distintos agentes se pasan información o coordinan tareas entre sí. Protocolos como Agent2Agent, o A2A, están emergiendo como estándar para esto, junto al MCP.</div>
          </div>

          <div class="term-card">
            <h4>Gestión de memoria</h4>
            <p>La gestión de memoria es la capacidad de un agente de recordar información entre distintos pasos de una tarea, lo que sería memoria de corto plazo, dentro de una misma conversación, o entre distintas sesiones, lo que sería memoria de largo plazo — por ejemplo, recordar las preferencias de un usuario en interacciones futuras. En AWS, Amazon Bedrock AgentCore incluye un servicio dedicado, llamado Memory, específicamente para dar a los agentes memoria de corto y de largo plazo, consciente del contexto.</p>
            <div class="term-short"><b>En corto</b>Es que un agente recuerde información entre pasos de una tarea, en el corto plazo, o entre sesiones distintas, en el largo plazo. En AWS, el servicio dedicado es Amazon Bedrock AgentCore Memory.</div>
          </div>

          <div class="term-card">
            <h4>Uso de herramientas</h4>
            <p>El uso de herramientas es la capacidad de un agente de invocar funciones externas — buscar en internet, consultar una base de datos, ejecutar código, llamar a una API de negocio — en vez de limitarse a generar texto. En AWS, esto se habilita mediante function calling en Bedrock, el ecosistema de herramientas de Strands Agents, o AgentCore Gateway, que convierte APIs y funciones Lambda en herramientas invocables de forma estandarizada, normalmente a través de MCP.</p>
            <div class="term-short"><b>En corto</b>Es que un agente pueda invocar funciones externas — buscar, consultar datos, ejecutar código — en vez de solo generar texto. En AWS: function calling en Bedrock, o AgentCore Gateway para exponer APIs como herramientas.</div>
          </div>

          <div class="term-card">
            <h4>Orquestación de flujos de trabajo</h4>
            <p>La orquestación de flujos de trabajo es coordinar la secuencia de pasos, decisiones y llamadas a agentes o herramientas que componen una tarea compleja de principio a fin — decidir qué pasa primero, qué pasa en paralelo, y qué hacer si un paso falla. En AWS, es uno de los patrones nativos de Strands Agents, llamado Workflow, y a nivel de plataforma, Amazon Bedrock AgentCore Runtime ofrece el entorno de ejecución serverless donde esos flujos corren de forma segura y con arranques en frío rápidos.</p>
            <div class="term-short"><b>En corto</b>Es coordinar la secuencia de pasos y decisiones de una tarea compleja de principio a fin. En AWS: el patrón Workflow de Strands Agents, ejecutado sobre Amazon Bedrock AgentCore Runtime.</div>
          </div>`,
  },
  {
    id: "gloss-d2-t2-b1",
    html: `<p class="gloss-bullet-text">"Describir las ventajas de la GenAI (adaptabilidad, capacidad de respuesta, capacidades conversacionales, generación de contenido)."</p>

          <div class="term-card">
            <h4>Adaptabilidad</h4>
            <p>La adaptabilidad es que un mismo foundation model puede aplicarse a una gran variedad de tareas y dominios distintos — resumir, traducir, programar, responder preguntas — sin tener que entrenar un modelo especializado para cada una. Además, un foundation model puede ajustarse a un caso de uso específico mediante prompt engineering o fine-tuning, sin rehacer el entrenamiento completo desde cero.</p>
            <div class="term-short"><b>En corto</b>Es que un mismo foundation model sirve para muchas tareas distintas, y puede ajustarse a un caso de uso concreto sin reentrenarse desde cero.</div>
          </div>

          <div class="term-card">
            <h4>Capacidad de respuesta (responsiveness)</h4>
            <p>La capacidad de respuesta se refiere a la velocidad con la que un modelo de GenAI genera una salida ante una entrada del usuario. Los foundation models modernos pueden producir respuestas en tiempo casi real, lo que habilita experiencias interactivas como chatbots o asistentes conversacionales.</p>
            <div class="term-short"><b>En corto</b>Es la velocidad con la que un foundation model entrega su respuesta — suficientemente rápida, en muchos casos, para sostener una conversación en tiempo real.</div>
          </div>

          <div class="term-card">
            <h4>Capacidades conversacionales</h4>
            <p>Las capacidades conversacionales son que los foundation models pueden mantener un intercambio de ida y vuelta con un usuario, entendiendo el contexto de los mensajes previos dentro de la misma conversación, gracias a la ventana de contexto, y respondiendo de forma coherente en lenguaje natural. Esto es lo que habilita chatbots y asistentes virtuales.</p>
            <div class="term-short"><b>En corto</b>Un foundation model puede sostener un diálogo de varios turnos, entendiendo el contexto de mensajes anteriores y respondiendo en lenguaje natural.</div>
          </div>

          <div class="term-card">
            <h4>Generación de contenido</h4>
            <p>La generación de contenido es la capacidad central de la GenAI: crear contenido nuevo y original — texto, imágenes, audio, video, código — a partir de una instrucción, o prompt, en vez de solo clasificar o predecir sobre datos que ya existen, como hacía el ML tradicional.</p>
            <div class="term-short"><b>En corto</b>Es la capacidad de crear contenido nuevo — texto, imagen, audio, video o código — a partir de un prompt. Es la diferencia central frente al ML tradicional.</div>
          </div>`,
  },
  {
    id: "gloss-d2-t2-b2",
    html: `<p class="gloss-bullet-text">"Identificar las desventajas de las soluciones de GenAI (alucinaciones, interpretabilidad, imprecisión, no determinismo)."</p>

          <div class="term-card">
            <h4>Alucinaciones</h4>
            <p>Las alucinaciones ocurren cuando un foundation model genera contenido que suena convincente y coherente, pero que en realidad es incorrecto, inventado, o no está fundamentado en datos reales — por ejemplo, citar una fuente que no existe. AWS lo reconoce explícitamente como un riesgo inherente de los LLMs, y propone técnicas de grounding, como RAG, y validación de salidas para mitigarlo.</p>
            <div class="term-short"><b>En corto</b>Es cuando un foundation model genera información falsa o inventada, mostrándola como si fuera correcta. Se mitiga con grounding, por ejemplo con RAG, y con validación de salidas.</div>
          </div>

          <div class="term-card">
            <h4>Interpretabilidad</h4>
            <p>La interpretabilidad, acá, es la dificultad de explicar por qué un foundation model llegó a una salida específica. A diferencia de modelos de ML más simples, como los árboles de decisión, los foundation models son modelos de caja negra, con miles de millones de parámetros, lo que dificulta auditar o justificar sus respuestas — un problema especialmente relevante en industrias reguladas.</p>
            <div class="term-short"><b>En corto</b>Los foundation models son modelos de caja negra: es difícil explicar por qué generaron una salida específica, lo cual complica su uso en contextos regulados.</div>
          </div>

          <div class="term-card">
            <h4>Imprecisión</h4>
            <p>La imprecisión es que, incluso sin llegar a alucinar del todo, un foundation model puede dar respuestas parcialmente incorrectas, desactualizadas o de baja calidad — especialmente en tareas que requieren precisión numérica, razonamiento exacto, o conocimiento muy reciente o muy especializado que no estaba bien representado en sus datos de entrenamiento.</p>
            <div class="term-short"><b>En corto</b>Un foundation model puede dar respuestas parcialmente incorrectas o de baja calidad, sobre todo en tareas que exigen exactitud o conocimiento muy especializado o muy reciente.</div>
          </div>

          <div class="term-card">
            <h4>No determinismo</h4>
            <p>El no determinismo es que, ante el mismo prompt exacto, un foundation model puede generar respuestas distintas en distintas ejecuciones, porque su proceso de generación incluye muestreo probabilístico, controlado por parámetros como la temperatura. Esto contrasta con el software tradicional, donde la misma entrada siempre produce la misma salida, y complica las pruebas y la reproducibilidad.</p>
            <div class="term-short"><b>En corto</b>El mismo prompt puede producir respuestas distintas en ejecuciones distintas, porque la generación es probabilística — a diferencia del software tradicional.</div>
          </div>`,
  },
  {
    id: "gloss-d2-t2-b3",
    html: `<p class="gloss-bullet-text">"Identificar factores a considerar al elegir modelos de GenAI (tipo de modelo, requisitos de desempeño, capacidades, restricciones, cumplimiento normativo, costo, latencia, complejidad del modelo)."</p>

          <div class="term-card">
            <h4>Tipo de modelo</h4>
            <p>El tipo de modelo es si el caso de uso necesita un modelo de texto, de imagen, multimodal, de embeddings, y así sucesivamente. Este factor determina, desde el principio, qué familia de foundation models es candidata.</p>
            <div class="term-short"><b>En corto</b>Es qué clase de modelo hace falta — texto, imagen, multimodal, embeddings — según la tarea.</div>
          </div>

          <div class="term-card">
            <h4>Requisitos de desempeño (performance)</h4>
            <p>Los requisitos de desempeño son qué tan bien necesita resolver la tarea el modelo, en métricas relevantes como la calidad de las respuestas, la precisión, o la coherencia, para ese caso de uso específico.</p>
            <div class="term-short"><b>En corto</b>Es qué tan bien tiene que resolver la tarea concreta el modelo, medido con métricas de calidad relevantes.</div>
          </div>

          <div class="term-card">
            <h4>Capacidades</h4>
            <p>Las capacidades son las funciones concretas que ofrece el modelo: el tamaño de la ventana de contexto, el soporte multimodal, el function calling o uso de herramientas, los idiomas soportados, y así.</p>
            <div class="term-short"><b>En corto</b>Son las funciones específicas que el modelo soporta: ventana de contexto, multimodalidad, function calling, idiomas.</div>
          </div>

          <div class="term-card">
            <h4>Restricciones</h4>
            <p>Las restricciones son limitaciones técnicas u operativas del modelo, o del entorno donde se despliega — por ejemplo, límites de tokens, disponibilidad regional, o restricciones de infraestructura del cliente.</p>
            <div class="term-short"><b>En corto</b>Son limitaciones técnicas u operativas que acotan qué modelos son viables: tokens, región, infraestructura disponible.</div>
          </div>

          <div class="term-card">
            <h4>Cumplimiento normativo (compliance)</h4>
            <p>El cumplimiento normativo, o compliance, es si el modelo y el servicio que lo hospeda cumplen con las regulaciones aplicables a la industria o a la región — por ejemplo, HIPAA en salud, o GDPR en la Unión Europea. Esto es especialmente relevante cuando se mueven datos sensibles hacia un foundation model.</p>
            <div class="term-short"><b>En corto</b>Es si el modelo y su infraestructura cumplen las regulaciones del sector o región donde se usará, como HIPAA o GDPR.</div>
          </div>

          <div class="term-card">
            <h4>Costo</h4>
            <p>El costo es el precio de usar el modelo — en Bedrock, típicamente por millón de tokens de entrada y de salida, bajo demanda, o mediante throughput aprovisionado — y varía mucho entre modelos, según su tamaño y su proveedor.</p>
            <div class="term-short"><b>En corto</b>Es cuánto cuesta usar el modelo, normalmente por token en Bedrock. Varía mucho según el tamaño y el proveedor del modelo.</div>
          </div>

          <div class="term-card">
            <h4>Latencia</h4>
            <p>La latencia es el tiempo que tarda el modelo en empezar a responder, y en completar la respuesta entera. Es un factor crítico en aplicaciones interactivas en tiempo real, donde los modelos más grandes suelen ser más lentos.</p>
            <div class="term-short"><b>En corto</b>Es cuánto tarda el modelo en responder. Los modelos más grandes suelen ser más lentos, lo cual importa en aplicaciones en tiempo real.</div>
          </div>

          <div class="term-card">
            <h4>Complejidad del modelo</h4>
            <p>La complejidad del modelo es este trade-off: los modelos más grandes y más complejos, con más parámetros, suelen tener mejores capacidades de razonamiento, pero cuestan más, son más lentos, y requieren más recursos. Los modelos más pequeños, en cambio, son más rápidos y más baratos, pero con capacidades más limitadas. Este balance es central a la hora de elegir.</p>
            <div class="term-short"><b>En corto</b>Los modelos más grandes o complejos razonan mejor, pero cuestan más y son más lentos. Los modelos pequeños son más rápidos y baratos, pero más limitados.</div>
          </div>`,
  },
  {
    id: "gloss-d2-t2-b4",
    html: `<p class="gloss-bullet-text">"Determinar el valor de negocio y las métricas de las aplicaciones de GenAI (desempeño entre dominios, ROI, eficiencia, tasa de conversión, ingreso promedio por usuario, exactitud, valor de vida del cliente)."</p>

          <div class="term-card">
            <h4>Desempeño entre dominios (cross-domain performance)</h4>
            <p>El desempeño entre dominios mide qué tan bien se mantiene la calidad de un modelo cuando se aplica a distintos dominios o tipos de tarea, en vez de estar optimizado solo para un caso muy específico. Esto es relevante justamente porque los foundation models se promocionan por ser generalistas.</p>
            <div class="term-short"><b>En corto</b>Mide qué tan consistente es la calidad de un modelo al aplicarlo a distintos dominios o tareas, no solo a uno especializado.</div>
          </div>

          <div class="term-card">
            <h4>ROI (Retorno de la Inversión)</h4>
            <p>El ROI, o retorno de la inversión, compara el beneficio económico obtenido de la solución de GenAI contra su costo total — desarrollo, tokens, infraestructura, mantenimiento. Es la métrica de negocio más directa para justificar la inversión.</p>
            <div class="term-short"><b>En corto</b>Es el beneficio económico de la solución de GenAI comparado contra su costo total — la métrica clásica para justificar la inversión.</div>
          </div>

          <div class="term-card">
            <h4>Eficiencia</h4>
            <p>La eficiencia mide cuánto tiempo, esfuerzo humano o costo operativo se ahorra al automatizar o asistir una tarea con GenAI, comparado con el proceso manual anterior — por ejemplo, el tiempo que se reduce para redactar un documento o resolver un ticket de soporte.</p>
            <div class="term-short"><b>En corto</b>Es cuánto tiempo, esfuerzo o costo operativo se ahorra al usar GenAI frente al proceso manual anterior.</div>
          </div>

          <div class="term-card">
            <h4>Tasa de conversión</h4>
            <p>La tasa de conversión es el porcentaje de usuarios que completan una acción deseada — comprar, suscribirse, registrarse — después de interactuar con una funcionalidad de GenAI, como un asistente de compras o un chatbot de ventas.</p>
            <div class="term-short"><b>En corto</b>Es el porcentaje de usuarios que completan una acción deseada tras interactuar con la funcionalidad de GenAI.</div>
          </div>

          <div class="term-card">
            <h4>Ingreso promedio por usuario (ARPU)</h4>
            <p>El ingreso promedio por usuario, o ARPU, es el ingreso promedio que genera cada usuario de un producto. Se usa para medir si una funcionalidad de GenAI, por ejemplo una función premium con IA, incrementa el ingreso por usuario del negocio.</p>
            <div class="term-short"><b>En corto</b>Es el ingreso promedio que genera cada usuario. Sirve para ver si una funcionalidad de GenAI aumenta ese ingreso.</div>
          </div>

          <div class="term-card">
            <h4>Exactitud (accuracy)</h4>
            <p>La exactitud, o accuracy, en este contexto, es qué tan seguido las salidas del modelo son correctas frente a lo esperado. En el contexto de negocio, esto se traduce en confianza del usuario final y en menos necesidad de corrección humana.</p>
            <div class="term-short"><b>En corto</b>Es qué tan seguido las respuestas del modelo son correctas — se traduce en confianza del usuario y menos corrección manual.</div>
          </div>

          <div class="term-card">
            <h4>Valor de vida del cliente (CLV)</h4>
            <p>El valor de vida del cliente, o CLV, es el ingreso total que se espera obtener de un cliente durante toda su relación con el negocio. Una buena experiencia asistida por GenAI, como un soporte más rápido o mejores recomendaciones, puede aumentar la retención, y con ella, el CLV.</p>
            <div class="term-short"><b>En corto</b>Es el ingreso total esperado de un cliente durante toda su relación con el negocio. Una mejor experiencia con GenAI puede aumentarlo vía retención.</div>
          </div>`,
  },
  {
    id: "gloss-d2-t3-b1",
    html: `<p class="gloss-bullet-text">"Identificar los servicios y funciones de AWS para desarrollar aplicaciones de GenAI (Amazon Bedrock, SageMaker AI, SageMaker JumpStart, Amazon Quick, Kiro, Strands Agents, Amazon Bedrock AgentCore)."</p>

          <div class="term-card">
            <h4>Amazon Bedrock</h4>
            <p>Amazon Bedrock es un servicio totalmente administrado que da acceso, a través de una sola API, a foundation models de múltiples proveedores — Anthropic, Meta, Mistral, Amazon Nova, entre otros — para construir aplicaciones de GenAI sin gestionar infraestructura, con capacidades como fine-tuning, RAG a través de Knowledge Bases, agentes y guardrails.</p>
            <div class="term-short"><b>En corto</b>Es la API administrada de AWS para usar foundation models de varios proveedores sin gestionar infraestructura. Incluye RAG, agentes y guardrails.</div>
          </div>

          <div class="term-card">
            <h4>Amazon SageMaker AI</h4>
            <p>Amazon SageMaker AI es un servicio administrado para construir, entrenar y desplegar modelos de machine learning propios de punta a punta, incluyendo el entrenamiento y el ajuste de foundation models, cuando necesitas más control que el que ofrece Bedrock.</p>
            <div class="term-short"><b>En corto</b>Es el servicio de AWS para construir, entrenar y desplegar modelos de ML y foundation models propios de punta a punta, con más control que Bedrock.</div>
          </div>

          <div class="term-card">
            <h4>SageMaker JumpStart</h4>
            <p>SageMaker JumpStart es un hub dentro de SageMaker AI, con modelos preentrenados, incluyendo foundation models de código abierto, listos para desplegar con unos pocos clics, o para ajustar con tus propios datos. Esto acelera el arranque de un proyecto de ML o de GenAI.</p>
            <div class="term-short"><b>En corto</b>Es el hub de SageMaker con modelos preentrenados listos para desplegar o ajustar rápidamente, sin partir de cero.</div>
          </div>

          <div class="term-card">
            <h4>Amazon Quick</h4>
            <p>Amazon Quick es una suite de aplicaciones de negocio con IA integrada, la evolución de Amazon QuickSight hacia Quick Suite en 2026. Incluye análisis de datos e inteligencia de negocio asistidos por GenAI, permitiendo hacer preguntas en lenguaje natural sobre los datos de la organización.</p>
            <div class="term-short"><b>En corto</b>Es la suite de BI y analítica de AWS con GenAI integrada, evolución de QuickSight, para consultar datos de negocio en lenguaje natural.</div>
          </div>

          <div class="term-card">
            <h4>Kiro</h4>
            <p>Kiro es un IDE agéntico de AWS, muy reciente, orientado a lo que se llama spec-driven development: convierte una especificación en lenguaje natural en un plan de tareas y en código, con agentes de IA colaborando a lo largo de todo el flujo de desarrollo. Es un servicio nuevo, y su documentación oficial todavía es limitada al momento de escribir esto.</p>
            <div class="term-short"><b>En corto</b>Es el IDE agéntico de AWS para desarrollo guiado por especificaciones, de especificación a código con ayuda de agentes de IA. Es un servicio muy nuevo.</div>
          </div>

          <div class="term-card">
            <h4>Strands Agents</h4>
            <p>Strands Agents es un SDK de código abierto de AWS para construir agentes de IA, usado internamente por varios equipos de Amazon, incluyendo Amazon Q Developer. Ofrece patrones nativos de multiagente — Swarm, Graph, Workflow — y se integra con Amazon Bedrock AgentCore para desplegar y operar esos agentes en producción.</p>
            <div class="term-short"><b>En corto</b>Es el SDK de código abierto de AWS para construir agentes de IA, con patrones nativos como Swarm, Graph y Workflow. Se integra con Bedrock AgentCore.</div>
          </div>

          <div class="term-card">
            <h4>Amazon Bedrock AgentCore</h4>
            <p>Amazon Bedrock AgentCore es un conjunto modular de servicios de infraestructura para desplegar y operar agentes de IA en producción, de forma segura y a escala, sin importar con qué framework se construyeron — Strands Agents, LangGraph, CrewAI, y demás. Incluye piezas como Runtime, para ejecución serverless; Memory, para memoria de corto y largo plazo; Gateway, para exponer APIs y funciones Lambda como herramientas MCP; Identity, para autenticación de agentes; Code Interpreter; Browser, para navegación web de los agentes; y Observability, entre otras más de 13 capacidades.</p>
            <div class="term-short"><b>En corto</b>Es el conjunto modular de servicios de AWS — Runtime, Memory, Gateway, Identity y más — para desplegar y operar agentes de IA en producción, sin importar el framework usado.</div>
          </div>`,
  },
  {
    id: "gloss-d2-t3-b2",
    html: `<p class="gloss-bullet-text">"Describir las ventajas de usar servicios de GenAI de AWS para construir aplicaciones (accesibilidad, menor barrera de entrada, eficiencia, costo-efectividad, velocidad de salida al mercado)."</p>

          <div class="term-card">
            <h4>Accesibilidad</h4>
            <p>La accesibilidad es que los servicios de GenAI de AWS, como Bedrock, están disponibles a través de una API estándar y de una consola, sin requerir que el equipo tenga su propia infraestructura especializada de GPU para acceder a foundation models de última generación.</p>
            <div class="term-short"><b>En corto</b>Se accede a foundation models de última generación por API o consola, sin necesitar infraestructura de GPU propia.</div>
          </div>

          <div class="term-card">
            <h4>Menor barrera de entrada</h4>
            <p>La menor barrera de entrada es que no hace falta ser un experto en machine learning ni entrenar modelos desde cero para construir una aplicación de GenAI. Servicios administrados como Bedrock o SageMaker JumpStart permiten que equipos con menos experiencia especializada empiecen a construir rápidamente.</p>
            <div class="term-short"><b>En corto</b>No se necesita ser experto en ML ni entrenar modelos desde cero para empezar a construir con GenAI en AWS.</div>
          </div>

          <div class="term-card">
            <h4>Eficiencia</h4>
            <p>La eficiencia, acá, es que al usar infraestructura y modelos ya administrados por AWS, los equipos dedican menos esfuerzo a operar servidores, actualizar modelos, o gestionar el ciclo de vida de la infraestructura de ML, y más esfuerzo a construir la aplicación en sí.</p>
            <div class="term-short"><b>En corto</b>Es menos esfuerzo operando infraestructura de ML o modelos, y más esfuerzo enfocado en construir la aplicación.</div>
          </div>

          <div class="term-card">
            <h4>Costo-efectividad</h4>
            <p>La costo-efectividad es que el modelo de precios de pago por uso, por ejemplo por token en Bedrock, evita la inversión inicial en hardware especializado, y permite escalar el costo según el uso real de la aplicación, en vez de pagar por una capacidad fija subutilizada.</p>
            <div class="term-short"><b>En corto</b>Es pago por uso, por ejemplo por token, en vez de invertir en hardware propio — el costo escala con el uso real.</div>
          </div>

          <div class="term-card">
            <h4>Velocidad de salida al mercado (time-to-market)</h4>
            <p>La velocidad de salida al mercado es que, al no tener que entrenar modelos desde cero ni construir infraestructura propia, los equipos pueden lanzar una funcionalidad de GenAI en producción en semanas, en vez de meses o años.</p>
            <div class="term-short"><b>En corto</b>Se puede lanzar una funcionalidad de GenAI mucho más rápido, al no tener que entrenar modelos ni construir infraestructura desde cero.</div>
          </div>`,
  },
  {
    id: "gloss-d2-t3-b3",
    html: `<p class="gloss-bullet-text">"Describir los beneficios de la infraestructura de AWS para aplicaciones de GenAI (seguridad, cumplimiento normativo, responsabilidad, safety)."</p>

          <div class="term-card">
            <h4>Seguridad</h4>
            <p>En seguridad, AWS aplica su modelo de responsabilidad compartida, y controles como cifrado en tránsito y en reposo, IAM, y AWS PrivateLink. Además, AWS establece explícitamente que los datos de los clientes usados con Bedrock no se usan para entrenar los modelos base de los proveedores, y permanecen dentro de la región y de la cuenta del cliente.</p>
            <div class="term-short"><b>En corto</b>Incluye cifrado, IAM, PrivateLink, y la garantía de AWS de que los datos del cliente en Bedrock no se usan para entrenar los modelos base de los proveedores.</div>
          </div>

          <div class="term-card">
            <h4>Cumplimiento normativo (compliance)</h4>
            <p>En cumplimiento normativo, los servicios de GenAI de AWS operan bajo el mismo marco de certificaciones que el resto de AWS — por ejemplo GDPR, HIPAA, SOC, o FedRAMP High. Esto facilita adoptar GenAI en industrias reguladas, sin tener que construir esos controles desde cero.</p>
            <div class="term-short"><b>En corto</b>Los servicios de GenAI de AWS heredan las certificaciones de cumplimiento de AWS, como GDPR, HIPAA, SOC o FedRAMP High.</div>
          </div>

          <div class="term-card">
            <h4>Responsabilidad (Responsible AI)</h4>
            <p>En responsabilidad, AWS ofrece herramientas específicas para construir IA responsable, como Amazon Bedrock Guardrails, para filtrar contenido dañino o fuera de tema, y Amazon SageMaker Model Cards, para documentar el propósito, el rendimiento y las limitaciones de un modelo. Esto ayuda a los equipos a gobernar el uso de sus modelos.</p>
            <div class="term-short"><b>En corto</b>Incluye herramientas como Bedrock Guardrails y SageMaker Model Cards, para construir y documentar IA de forma responsable.</div>
          </div>

          <div class="term-card">
            <h4>Safety</h4>
            <p>El safety se refiere a mecanismos técnicos que reducen el riesgo de salidas dañinas, como el filtrado de toxicidad, la detección y ocultamiento de información de identificación personal, y otros controles de contenido incorporados en Bedrock Guardrails.</p>
            <div class="term-short"><b>En corto</b>Son controles técnicos, como el filtrado de toxicidad y el ocultamiento de datos personales, que reducen el riesgo de salidas dañinas del modelo.</div>
          </div>`,
  },
  {
    id: "gloss-d2-t3-b4",
    html: `<p class="gloss-bullet-text">"Describir las contrapartidas de costo de los servicios de GenAI de AWS (capacidad de respuesta, disponibilidad, redundancia, desempeño, cobertura regional, precios por token, throughput aprovisionado, modelos personalizados)."</p>

          <div class="term-card">
            <h4>Capacidad de respuesta (responsiveness)</h4>
            <p>En capacidad de respuesta, las opciones con menor latencia, por ejemplo el nivel Priority en Bedrock, o el throughput aprovisionado, suelen costar más que las opciones estándar, o las opciones por lotes, que son más económicas pero más lentas.</p>
            <div class="term-short"><b>En corto</b>Menor latencia, por ejemplo con el nivel Priority en Bedrock, cuesta más que las opciones estándar o por lotes, que son más lentas pero baratas.</div>
          </div>

          <div class="term-card">
            <h4>Disponibilidad</h4>
            <p>En disponibilidad, garantizar que el servicio esté accesible el mayor tiempo posible, es decir un SLA alto, generalmente implica arquitecturas más robustas, y potencialmente, un costo mayor que una configuración básica de una sola zona.</p>
            <div class="term-short"><b>En corto</b>Mayor disponibilidad garantizada normalmente implica una arquitectura más robusta, y con ello, mayor costo.</div>
          </div>

          <div class="term-card">
            <h4>Redundancia</h4>
            <p>En redundancia, duplicar recursos, por ejemplo desplegar en varias zonas de disponibilidad o regiones, mejora la resiliencia ante fallas, pero incrementa el costo, porque se paga por capacidad adicional que normalmente no se usa toda a la vez.</p>
            <div class="term-short"><b>En corto</b>Duplicar recursos en varias zonas o regiones mejora la resiliencia, pero aumenta el costo por la capacidad adicional.</div>
          </div>

          <div class="term-card">
            <h4>Desempeño (performance)</h4>
            <p>En desempeño, los modelos y configuraciones con mejor desempeño, mayor calidad de respuesta, mayor velocidad, suelen tener un costo por token o por hora más alto que las alternativas más simples o más pequeñas.</p>
            <div class="term-short"><b>En corto</b>Mayor calidad o velocidad de un modelo normalmente implica un costo por token o por hora más alto.</div>
          </div>

          <div class="term-card">
            <h4>Cobertura regional</h4>
            <p>En cobertura regional, no todos los foundation models ni todas las funcionalidades de Bedrock están disponibles en todas las regiones de AWS. Usar inferencia entre regiones, para acceder a más capacidad o a un modelo específico, puede tener implicaciones de costo y de residencia de los datos.</p>
            <div class="term-short"><b>En corto</b>No todos los modelos o funciones están en todas las regiones. Usar inferencia entre regiones puede afectar el costo y la residencia de los datos.</div>
          </div>

          <div class="term-card">
            <h4>Precios por token</h4>
            <p>Los precios por token, en el modelo bajo demanda de Bedrock, se cobran por millón de tokens de entrada y de salida, con tarifas distintas entre los niveles Standard, Priority, Flex y Batch. Elegir el nivel correcto para cada carga de trabajo es una decisión directa de costo-beneficio.</p>
            <div class="term-short"><b>En corto</b>Bedrock cobra por millón de tokens de entrada y salida, con tarifas distintas según el nivel de servicio elegido: Standard, Priority, Flex o Batch.</div>
          </div>

          <div class="term-card">
            <h4>Throughput aprovisionado (Provisioned Throughput)</h4>
            <p>El throughput aprovisionado es la alternativa al precio por token bajo demanda: se paga una tarifa fija por reservar capacidad de inferencia garantizada durante un periodo de tiempo. Esto conviene para cargas de trabajo grandes y predecibles, pero puede salir más caro que la opción bajo demanda si el uso real termina siendo bajo.</p>
            <div class="term-short"><b>En corto</b>Se paga una tarifa fija por capacidad garantizada. Conviene para cargas grandes y predecibles, pero puede costar más que la opción bajo demanda si el uso es bajo.</div>
          </div>

          <div class="term-card">
            <h4>Modelos personalizados (custom models)</h4>
            <p>Los modelos personalizados implican que ajustar, con fine-tuning, o entrenar continuamente un foundation model con datos propios — por ejemplo, con Custom Model Import o Continued Pre-training en Bedrock — tiene un costo adicional de entrenamiento y de alojamiento del modelo personalizado, frente a usar un modelo base tal cual.</p>
            <div class="term-short"><b>En corto</b>Personalizar un foundation model con datos propios, mediante fine-tuning, suma costo de entrenamiento y alojamiento, frente a usar el modelo base sin modificar.</div>
          </div>`,
  },
  {
    id: "gloss-d3-t1-b1",
    html: `<p class="gloss-bullet-text">"Identificar los criterios de selección para elegir FMs (costo, modalidad, latencia, soporte multilingüe, tamaño del modelo, complejidad, personalización, longitud de entrada/salida, prompt caching)."</p>

          <div class="term-card">
            <h4>Costo</h4>
            <p>El costo es cuánto cuesta usar el modelo, típicamente por millón de tokens en Bedrock, incluyendo el nivel de servicio elegido — Standard, Priority, Flex o Batch — o el throughput aprovisionado. Es un factor central al comparar foundation models candidatos.</p>
            <div class="term-short"><b>En corto</b>Es el precio de usar el modelo, normalmente por token. Varía según el proveedor y el nivel de servicio elegido.</div>
          </div>

          <div class="term-card">
            <h4>Modalidad</h4>
            <p>La modalidad es el tipo de datos que el modelo puede recibir o generar: solo texto, texto e imagen, audio, video, o combinaciones, es decir multimodal. El caso de uso es lo que determina qué modalidad se necesita.</p>
            <div class="term-short"><b>En corto</b>Es qué tipos de datos maneja el modelo: texto, imagen, audio, video o combinaciones multimodales.</div>
          </div>

          <div class="term-card">
            <h4>Latencia</h4>
            <p>La latencia es el tiempo que tarda el modelo en empezar a responder, y en completar la respuesta entera. Es un factor crítico en aplicaciones interactivas en tiempo real, donde los modelos más grandes suelen ser más lentos.</p>
            <div class="term-short"><b>En corto</b>Es cuánto tarda el modelo en responder — relevante sobre todo en aplicaciones interactivas en tiempo real.</div>
          </div>

          <div class="term-card">
            <h4>Soporte multilingüe</h4>
            <p>El soporte multilingüe es si el modelo entiende y genera texto de forma confiable en los idiomas que necesita la aplicación. No todos los foundation models tienen el mismo nivel de calidad en todos los idiomas.</p>
            <div class="term-short"><b>En corto</b>Es qué tan bien entiende y genera el modelo texto en los idiomas que la aplicación necesita.</div>
          </div>

          <div class="term-card">
            <h4>Tamaño del modelo</h4>
            <p>El tamaño del modelo es la cantidad de parámetros del foundation model. Los modelos más grandes suelen razonar mejor sobre tareas complejas, pero consumen más recursos, cuestan más, y responden más lento que los modelos pequeños.</p>
            <div class="term-short"><b>En corto</b>Es cuántos parámetros tiene el modelo. Más grande generalmente razona mejor, pero cuesta más y es más lento.</div>
          </div>

          <div class="term-card">
            <h4>Complejidad</h4>
            <p>La complejidad es qué tan sofisticado es el modelo en su arquitectura y en sus capacidades de razonamiento. Un modelo más complejo puede resolver tareas más difíciles, pero también es más caro de operar y más difícil de interpretar.</p>
            <div class="term-short"><b>En corto</b>Es qué tan sofisticado es el modelo. Mayor complejidad suele significar mejor razonamiento, pero mayor costo y una interpretabilidad más difícil.</div>
          </div>

          <div class="term-card">
            <h4>Personalización</h4>
            <p>La personalización es qué tan fácil es adaptar el modelo al caso de uso propio: si soporta fine-tuning, preentrenamiento continuo, o si solo se puede ajustar vía prompt engineering o RAG. Algunos foundation models ofrecen más opciones de personalización que otros.</p>
            <div class="term-short"><b>En corto</b>Es qué tan fácil es adaptar el modelo al caso propio: fine-tuning, preentrenamiento continuo, o solo prompting y RAG.</div>
          </div>

          <div class="term-card">
            <h4>Longitud de entrada/salida</h4>
            <p>La longitud de entrada y salida es el tamaño de la ventana de contexto del modelo, es decir cuánto texto de entrada puede procesar de una vez, y el límite de tokens que puede generar en una respuesta. Esto determina si el modelo puede manejar documentos largos o conversaciones extensas.</p>
            <div class="term-short"><b>En corto</b>Es cuánto texto puede recibir, la ventana de contexto, y cuánto puede generar el modelo en una sola respuesta.</div>
          </div>

          <div class="term-card">
            <h4>Prompt caching</h4>
            <p>El prompt caching es una técnica que permite reutilizar, o cachear, partes repetidas de un prompt entre llamadas al modelo — como instrucciones del sistema o documentos largos de contexto — para reducir la latencia y el costo, cuando esa misma información se envía una y otra vez.</p>
            <div class="term-short"><b>En corto</b>Es reutilizar partes repetidas de un prompt entre llamadas, para reducir latencia y costo, en vez de reprocesarlas cada vez.</div>
          </div>`,
  },
  {
    id: "gloss-d3-t1-b2",
    html: `<p class="gloss-bullet-text">"Describir el efecto de los parámetros de inferencia en las respuestas del modelo (temperatura, longitud de entrada/salida)."</p>

          <div class="term-card">
            <h4>Temperatura</h4>
            <p>La temperatura controla qué tan aleatoria o creativa es la salida del modelo. Una temperatura baja, cercana a 0, hace que el modelo elija casi siempre la palabra más probable, dando respuestas más deterministas, repetibles y conservadoras — útil para tareas factuales o de clasificación. Una temperatura alta, en cambio, introduce más variedad y aleatoriedad, dando respuestas más creativas, pero también más impredecibles, y con mayor riesgo de imprecisión.</p>
            <div class="term-short"><b>En corto</b>Controla la aleatoriedad de la salida: baja da respuestas más predecibles y conservadoras; alta da respuestas más variadas y creativas, con más riesgo de imprecisión.</div>
          </div>

          <div class="term-card">
            <h4>Top-K y Top-P</h4>
            <p>Top-K y Top-P son dos formas alternativas, y a veces complementarias, a la temperatura, para controlar qué tan variada es la salida, limitando de qué conjunto de palabras candidatas puede elegir el modelo en cada paso. Top-K fija un número exacto de palabras candidatas: el modelo solo puede elegir entre las K más probables, sin importar cuánta probabilidad acumulen entre todas. Top-P, también llamado nucleus sampling, en cambio fija un umbral de probabilidad acumulada: el modelo arma un conjunto de candidatas, de tamaño variable, hasta juntar esa probabilidad, lo que lo hace más adaptable que Top-K — en un contexto muy predecible, el conjunto se achica solo; en uno más abierto, se agranda solo. En la práctica, Top-P y la temperatura se usan más que Top-K para ajustar la creatividad de un modelo.</p>
            <div class="term-short"><b>En corto</b>Top-K limita a un número fijo de palabras candidatas. Top-P limita por probabilidad acumulada, y el tamaño del conjunto varía solo. Top-P es más adaptable y se usa más en la práctica que Top-K.</div>
          </div>

          <div class="term-card">
            <h4>Longitud de entrada/salida como parámetro de inferencia</h4>
            <p>Además de ser un criterio de selección del modelo, la longitud de entrada y salida también se configura en cada llamada de inferencia: limitar la longitud máxima de la respuesta, por ejemplo con un parámetro de máximo de tokens, afecta cuán completas o truncadas salen las respuestas. Y una entrada muy larga puede diluir la atención del modelo sobre la parte más relevante del contexto.</p>
            <div class="term-short"><b>En corto</b>Configurar cuánto texto se envía y cuánto se permite generar en cada llamada afecta si la respuesta sale completa o truncada, o si el modelo pierde el foco con entradas muy largas.</div>
          </div>`,
  },
  {
    id: "gloss-d3-t1-b3",
    html: `<p class="gloss-bullet-text">"Definir Retrieval Augmented Generation (RAG) y describir sus aplicaciones de negocio (Amazon Bedrock Knowledge Bases)."</p>

          <div class="term-card">
            <h4>Retrieval Augmented Generation (RAG)</h4>
            <p>Según AWS, RAG, o generación aumentada por recuperación, es una técnica para complementar, o aumentar, un LLM con datos externos — como los documentos internos de una empresa — dándole al modelo el contexto que necesita para producir salidas precisas y útiles para casos de uso específicos. AWS la describe como un enfoque pragmático y efectivo para usar LLMs dentro de una empresa.</p>
            <p>El proceso tiene cuatro pasos. Primero, la ingesta: se crean embeddings de los documentos internos, con su limpieza, formato y chunking, y se guardan en una base de datos vectorial. Segundo, el usuario hace una pregunta en lenguaje natural. Tercero, la recuperación: un orquestador hace una búsqueda por similitud en la base vectorial, para encontrar el contexto relevante, y lo agrega al prompt del usuario. Y cuarto, la generación: el prompt ya aumentado se envía al LLM, que genera la respuesta usando ese contexto recuperado.</p>
            <p>Su principal aplicación de negocio es construir bases de conocimiento empresarial: responder preguntas citando documentos propios de la organización, en vez de depender solo de lo que el modelo aprendió en su entrenamiento, mejorando la precisión y la relevancia sin tener que reentrenar el modelo. En AWS, la forma administrada de implementar esto es Amazon Bedrock Knowledge Bases, que gestiona automáticamente la ingesta, el chunking, la creación de embeddings, el almacenamiento vectorial y la recuperación.</p>
            <div class="term-short"><b>En corto</b>RAG conecta un LLM a datos externos propios, vía búsqueda por similitud en una base vectorial, para que responda con información actualizada y específica de la organización, sin reentrenar el modelo. En AWS, Bedrock Knowledge Bases automatiza todo ese proceso.</div>
          </div>`,
  },
  {
    id: "gloss-d3-t1-b4",
    html: `<p class="gloss-bullet-text">"Identificar los servicios de AWS que ayudan a almacenar embeddings en bases de datos vectoriales (Amazon OpenSearch Service, Amazon Aurora, Amazon Neptune, Amazon RDS para PostgreSQL)."</p>

          <div class="term-card">
            <h4>Amazon OpenSearch Service</h4>
            <p>Amazon OpenSearch Service es un servicio de búsqueda y analítica que incluye un motor de búsqueda vectorial, k-NN, capaz de indexar embeddings y hacer búsquedas por similitud a gran escala. Es una de las opciones más usadas como base de datos vectorial para RAG en AWS, y la integración por defecto de Bedrock Knowledge Bases.</p>
            <div class="term-short"><b>En corto</b>Es el motor de búsqueda de AWS con capacidad vectorial, k-NN, nativa. Es la opción por defecto para RAG con Bedrock Knowledge Bases.</div>
          </div>

          <div class="term-card">
            <h4>Amazon Aurora</h4>
            <p>Amazon Aurora es una base de datos relacional administrada, compatible con MySQL y PostgreSQL. A través de la extensión pgvector, en su edición compatible con PostgreSQL, puede almacenar e indexar embeddings, permitiendo hacer búsquedas vectoriales dentro de una base de datos relacional que ya existía.</p>
            <div class="term-short"><b>En corto</b>Es la base de datos relacional de AWS que, vía pgvector en su edición PostgreSQL, también puede almacenar y buscar embeddings.</div>
          </div>

          <div class="term-card">
            <h4>Amazon Neptune</h4>
            <p>Amazon Neptune es una base de datos de grafos administrada de AWS. Ofrece capacidades de búsqueda vectorial, con Neptune Analytics, que permiten combinar relaciones de grafo con búsqueda por similitud semántica — útil para RAG sobre datos altamente conectados o relacionales entre sí.</p>
            <div class="term-short"><b>En corto</b>Es la base de datos de grafos de AWS con capacidades de búsqueda vectorial, útil para RAG sobre datos muy relacionales entre sí.</div>
          </div>

          <div class="term-card">
            <h4>Amazon RDS para PostgreSQL</h4>
            <p>Amazon RDS para PostgreSQL es el servicio de base de datos relacional administrada de AWS para PostgreSQL, que, igual que Aurora, soporta la extensión pgvector para almacenar embeddings y hacer búsquedas por similitud directamente en la base de datos relacional.</p>
            <div class="term-short"><b>En corto</b>Es PostgreSQL administrado por AWS que, con la extensión pgvector, también funciona como base de datos vectorial.</div>
          </div>`,
  },
  {
    id: "gloss-d3-t1-b5",
    html: `<p class="gloss-bullet-text">"Explicar las contrapartidas de costo de los distintos enfoques de personalización de FMs (preentrenamiento, fine-tuning, in-context learning, RAG, destilación de modelos)."</p>

          <div class="term-card">
            <h4>Preentrenamiento (pre-training)</h4>
            <p>El preentrenamiento es entrenar un modelo completamente desde cero con un dataset masivo. Es el enfoque más costoso y más complejo de todos: requiere enormes cantidades de datos, de cómputo — por ejemplo, SageMaker HyperPod con entrenamiento distribuido — y de tiempo. Solo se justifica cuando ningún modelo preentrenado existente cubre la necesidad, y la organización tiene datos propietarios masivos.</p>
            <div class="term-short"><b>En corto</b>Es entrenar un modelo desde cero — el enfoque más caro y complejo. Solo se justifica si ningún foundation model existente sirve y hay datos masivos propios.</div>
          </div>

          <div class="term-card">
            <h4>Fine-tuning (incluye continued pre-training)</h4>
            <p>El fine-tuning es ajustar un foundation model ya preentrenado con un dataset propio, más pequeño y específico, para mejorar su desempeño en una tarea o dominio concreto. Cuesta mucho menos que preentrenar desde cero, pero más que RAG o que prompt engineering. Se justifica cuando necesitas que el modelo internalice un estilo, una terminología o una tarea específica de forma consistente, y cuentas con datos etiquetados relevantes.</p>
            <div class="term-short"><b>En corto</b>Es ajustar un foundation model ya entrenado con datos propios — más barato que preentrenar desde cero, pero más caro que RAG; útil para internalizar un estilo o dominio específico.</div>
          </div>

          <div class="term-card">
            <h4>In-context learning (prompt engineering)</h4>
            <p>El in-context learning, o prompt engineering, es guiar el comportamiento del modelo únicamente a través del prompt — instrucciones, ejemplos de few-shot — sin modificar los pesos del modelo. Es el enfoque de menor costo y complejidad, y la guía de AWS recomienda empezar siempre por acá, antes de considerar RAG o fine-tuning.</p>
            <div class="term-short"><b>En corto</b>Es guiar al modelo solo con el prompt, con instrucciones o ejemplos, sin tocar sus pesos — el enfoque más barato y el punto de partida recomendado por AWS.</div>
          </div>

          <div class="term-card">
            <h4>RAG</h4>
            <p>RAG es conectar el modelo a fuentes de datos externas en tiempo de consulta, sin modificar el modelo en sí. Cuesta más que el prompt engineering puro, porque hay que mantener una base de datos vectorial y la infraestructura de recuperación, pero significativamente menos que el fine-tuning o el preentrenamiento. Y tiene una ventaja grande: el conocimiento se actualiza simplemente actualizando los documentos fuente, sin reentrenar nada.</p>
            <div class="term-short"><b>En corto</b>Es conectar el modelo a datos externos en tiempo de consulta — cuesta más que solo prompting pero mucho menos que fine-tuning, y el conocimiento se actualiza sin reentrenar.</div>
          </div>

          <div class="term-card">
            <h4>Destilación de modelos (model distillation)</h4>
            <p>La destilación de modelos es entrenar un modelo estudiante, más pequeño y económico, para imitar el comportamiento de un modelo maestro, más grande y más capaz. El costo inicial de destilar es una inversión, porque hace falta generar datos de entrenamiento con el modelo maestro, pero el resultado es un modelo mucho más barato y más rápido de operar en producción, a cambio de cierta pérdida de capacidad frente al modelo original.</p>
            <div class="term-short"><b>En corto</b>Es entrenar un modelo pequeño para imitar a uno grande — una inversión inicial a cambio de un modelo final mucho más barato y rápido de operar, con algo menos de capacidad.</div>
          </div>`,
  },
  {
    id: "gloss-d3-t1-b6",
    html: `<p class="gloss-bullet-text">"Definir el rol de los agentes de IA y describir sus aplicaciones de negocio."</p>

          <div class="term-card">
            <h4>Rol de los agentes de IA en tareas de varios pasos</h4>
            <p>Un agente de IA extiende lo que puede hacer un foundation model: en vez de solo responder texto, el agente puede razonar sobre un objetivo, dividirlo en subtareas, decidir qué herramientas o APIs invocar, ejecutar esas acciones, observar el resultado, y repetir el ciclo hasta completar tareas complejas de varios pasos, sin intervención humana en cada paso.</p>
            <p>En AWS, esto se implementa con Amazon Bedrock Agents, que es orquestación administrada de agentes conectados a APIs y bases de conocimiento propias; con el paradigma más amplio de IA agéntica, que son sistemas de uno o varios agentes colaborando; y con protocolos como el Model Context Protocol, o MCP, que estandarizan cómo esos agentes se conectan con herramientas y sistemas externos.</p>
            <p>Entre las aplicaciones de negocio más comunes están automatizar flujos de atención al cliente de principio a fin, no solo respondiendo, sino ejecutando la solicitud completa; asistentes que investigan y resumen información de múltiples fuentes; agentes que ejecutan tareas operativas, como reservar, agendar o actualizar registros; y sistemas multiagente que dividen un proyecto complejo entre agentes especializados.</p>
            <div class="term-short"><b>En corto</b>Un agente de IA no solo responde texto: razona, decide qué herramientas usar y ejecuta acciones de varios pasos hacia un objetivo. En AWS esto se habilita con Bedrock Agents, IA agéntica y protocolos como MCP. Sus aplicaciones van desde atención al cliente automatizada hasta agentes que ejecutan tareas operativas completas.</div>
          </div>`,
  },
  {
    id: "gloss-d3-t2-b1",
    html: `<p class="gloss-bullet-text">"Definir los conceptos y elementos de la ingeniería de prompts (contexto, instrucción, prompts negativos)."</p>

          <div class="term-card">
            <h4>Contexto</h4>
            <p>El contexto es la información de fondo que se le da al modelo dentro del prompt, para que entienda la situación, el rol que debe asumir, o los datos relevantes para responder — por ejemplo, incluir el historial de una conversación, un documento de referencia, o el rol que debe adoptar el modelo, como decirle eres un asistente de soporte técnico.</p>
            <div class="term-short"><b>En corto</b>Es la información de fondo incluida en el prompt para que el modelo entienda la situación antes de responder.</div>
          </div>

          <div class="term-card">
            <h4>Instrucción</h4>
            <p>La instrucción es la indicación explícita y directa de qué tarea debe realizar el modelo — por ejemplo, resume este texto en tres frases, o traduce esto al español. Es el elemento que le dice al modelo qué acción tomar, distinto del contexto, que es el que le da la información de fondo.</p>
            <div class="term-short"><b>En corto</b>Es la orden explícita dentro del prompt que le dice al modelo exactamente qué tarea realizar.</div>
          </div>

          <div class="term-card">
            <h4>Prompts negativos</h4>
            <p>Los prompts negativos son instrucciones dentro del prompt que le indican al modelo qué no debe hacer o no debe incluir en su respuesta — por ejemplo, no menciones precios, o no uses jerga técnica. Se usan para acotar y refinar la salida, evitando comportamientos no deseados.</p>
            <div class="term-short"><b>En corto</b>Son instrucciones que le dicen al modelo qué evitar o no incluir en su respuesta, para acotar la salida.</div>
          </div>`,
  },
  {
    id: "gloss-d3-t2-b2",
    html: `<p class="gloss-bullet-text">"Definir técnicas de ingeniería de prompts (chain-of-thought, zero-shot, single-shot, few-shot, plantillas de prompts)."</p>

          <div class="term-card">
            <h4>Chain-of-thought (cadena de pensamiento)</h4>
            <p>El chain-of-thought, o cadena de pensamiento, es una técnica en la que se le pide al modelo que explique su razonamiento paso a paso, antes de dar la respuesta final — por ejemplo, agregando piensa paso a paso al prompt. Mejora notablemente el desempeño en tareas que requieren razonamiento lógico o matemático, porque obliga al modelo a descomponer el problema en pasos intermedios, en vez de saltar directo a una respuesta.</p>
            <div class="term-short"><b>En corto</b>Es pedirle al modelo que razone paso a paso antes de responder — mejora el desempeño en tareas lógicas o matemáticas.</div>
          </div>

          <div class="term-card">
            <h4>Zero-shot</h4>
            <p>El zero-shot es darle al modelo una instrucción sin ningún ejemplo de cómo debe responder, confiando en que su entrenamiento previo alcanza para entender y resolver la tarea. Es la forma más simple de prompting, pero puede dar resultados menos consistentes en tareas muy específicas o poco comunes.</p>
            <div class="term-short"><b>En corto</b>Es pedirle la tarea al modelo sin darle ningún ejemplo — la forma más simple de prompting.</div>
          </div>

          <div class="term-card">
            <h4>Single-shot (one-shot)</h4>
            <p>El single-shot, u one-shot, es incluir exactamente un ejemplo de la tarea, con entrada y salida deseada, dentro del prompt, antes de pedirle al modelo que resuelva el caso real. Esto lo ayuda a entender el formato o el estilo esperado.</p>
            <div class="term-short"><b>En corto</b>Es darle al modelo un solo ejemplo de la tarea antes de pedirle que resuelva el caso real.</div>
          </div>

          <div class="term-card">
            <h4>Few-shot</h4>
            <p>El few-shot es incluir varios ejemplos, normalmente entre 2 y 5, o más, de la tarea dentro del prompt, para que el modelo identifique el patrón, el formato o el estilo esperado con mayor precisión que con zero-shot o single-shot. Es especialmente útil en tareas donde el formato exacto de la salida importa mucho.</p>
            <div class="term-short"><b>En corto</b>Es darle al modelo varios ejemplos de la tarea para que reconozca mejor el patrón o formato esperado.</div>
          </div>

          <div class="term-card">
            <h4>Plantillas de prompts (prompt templates)</h4>
            <p>Las plantillas de prompts son estructuras de prompt reutilizables, con espacios o variables que se rellenan según el caso — por ejemplo, resume el siguiente tipo de documento en cierta cantidad de frases, con el texto correspondiente. Esto permite estandarizar y reutilizar prompts efectivos en distintos casos de uso, sin reescribirlos cada vez. En AWS, Amazon Bedrock Prompt Management permite crear y guardar plantillas con variables de este tipo.</p>
            <div class="term-short"><b>En corto</b>Son prompts reutilizables con variables que se rellenan según el caso, para estandarizar prompts efectivos — administrables en AWS con Bedrock Prompt Management.</div>
          </div>`,
  },
  {
    id: "gloss-d3-t2-b3",
    html: `<p class="gloss-bullet-text">"Identificar y describir los beneficios y buenas prácticas de la ingeniería de prompts (mejora de la calidad de respuesta, experimentación, guardrails, descubrimiento, especificidad y concisión, uso de múltiples comentarios)."</p>

          <div class="term-card">
            <h4>Mejora de la calidad de respuesta</h4>
            <p>Un prompt bien diseñado — claro, con contexto suficiente y ejemplos cuando hace falta — es la forma más rápida y más barata de obtener respuestas más precisas y útiles, sin necesidad de fine-tuning ni cambios al modelo.</p>
            <div class="term-short"><b>En corto</b>Un buen prompt mejora la calidad de la respuesta sin tener que modificar el modelo — la forma más rápida y barata de optimizar resultados.</div>
          </div>

          <div class="term-card">
            <h4>Experimentación</h4>
            <p>Probar distintas variantes de un mismo prompt — la redacción, el orden, los ejemplos incluidos — y comparar los resultados es una buena práctica central de la ingeniería de prompts. Herramientas como Amazon Bedrock Prompt Management facilitan crear y comparar variantes de un prompt antes de elegir la mejor versión.</p>
            <div class="term-short"><b>En corto</b>Es probar y comparar distintas variantes de un prompt para encontrar la que da mejores resultados.</div>
          </div>

          <div class="term-card">
            <h4>Guardrails</h4>
            <p>Los guardrails son controles, ya sea dentro del prompt o a nivel de plataforma, como Amazon Bedrock Guardrails, que acotan el comportamiento del modelo para evitar salidas dañinas, fuera de tema, o que violen políticas de la organización, funcionando como una capa de seguridad adicional sobre el prompt.</p>
            <div class="term-short"><b>En corto</b>Son controles que acotan el comportamiento del modelo para evitar salidas dañinas o fuera de tema. En AWS: Bedrock Guardrails.</div>
          </div>

          <div class="term-card">
            <h4>Descubrimiento (discovery)</h4>
            <p>El descubrimiento es usar el proceso de prompting de forma exploratoria, para descubrir qué es capaz de hacer un modelo, cuáles son sus límites, y qué formulaciones de prompt funcionan mejor para un dominio o una tarea nueva, antes de fijar un prompt de producción.</p>
            <div class="term-short"><b>En corto</b>Es explorar con distintos prompts para descubrir las capacidades y los límites reales del modelo antes de fijar un prompt final.</div>
          </div>

          <div class="term-card">
            <h4>Especificidad y concisión</h4>
            <p>Un prompt efectivo debe ser lo suficientemente específico para que el modelo entienda exactamente qué se espera, evitando la ambigüedad, pero sin agregar información innecesaria que diluya la instrucción principal o consuma tokens de más.</p>
            <div class="term-short"><b>En corto</b>Es ser claro y específico sobre lo que se pide, sin agregar texto innecesario que diluya la instrucción o gaste tokens de más.</div>
          </div>

          <div class="term-card">
            <h4>Uso de múltiples comentarios</h4>
            <p>El uso de múltiples comentarios es estructurar un prompt complejo en varias instrucciones o secciones separadas y bien delimitadas — por ejemplo, usando etiquetas dentro del prompt — en vez de un solo bloque de texto denso. Esto ayuda al modelo a distinguir claramente cada parte de la solicitud.</p>
            <div class="term-short"><b>En corto</b>Es dividir un prompt complejo en secciones o instrucciones bien delimitadas, en vez de un solo bloque de texto, para que el modelo distinga cada parte.</div>
          </div>`,
  },
  {
    id: "gloss-d3-t2-b4",
    html: `<p class="gloss-bullet-text">"Definir los riesgos y limitaciones potenciales de la ingeniería de prompts (exposición, envenenamiento/poisoning, secuestro/hijacking, jailbreaking)."</p>

          <div class="term-card">
            <h4>Exposición (exposure)</h4>
            <p>La exposición es el riesgo de que información sensible o confidencial se filtre a través del modelo, ya sea durante el entrenamiento o durante la inferencia — por ejemplo, que el modelo revele sin querer datos privados de clientes, como historial de compras o datos personales, que estuvieron presentes en sus datos de entrenamiento o en el contexto de un prompt compartido.</p>
            <div class="term-short"><b>En corto</b>Es el riesgo de que datos sensibles se filtren a través del modelo, ya sea desde su entrenamiento o desde el contexto de un prompt.</div>
          </div>

          <div class="term-card">
            <h4>Envenenamiento (poisoning)</h4>
            <p>El envenenamiento, o poisoning, es la introducción intencional de datos maliciosos o sesgados en el conjunto de entrenamiento, o en las fuentes que alimentan un sistema de RAG, para corromper el comportamiento del modelo, haciendo que genere salidas dañinas, ofensivas o sesgadas, que además pueden parecer normales a simple vista.</p>
            <div class="term-short"><b>En corto</b>Es introducir datos maliciosos o sesgados en el entrenamiento, o en las fuentes de un RAG, para corromper las salidas del modelo.</div>
          </div>

          <div class="term-card">
            <h4>Secuestro (hijacking)</h4>
            <p>El secuestro, o hijacking, es la técnica de influir en las salidas de un modelo insertando instrucciones específicas dentro del prompt, o dentro de contenido que el modelo procesa, para anular o sobrescribir las instrucciones originales del sistema. Con esto, un atacante puede lograr que el modelo ignore sus reglas y genere desinformación, o comprometa su integridad.</p>
            <div class="term-short"><b>En corto</b>Es insertar instrucciones dentro de un prompt, o del contenido que procesa, para anular las instrucciones originales del sistema.</div>
          </div>

          <div class="term-card">
            <h4>Jailbreaking</h4>
            <p>El jailbreaking es el intento intencional de saltarse los guardrails de seguridad de un modelo — por ejemplo, mediante escenarios de rol, como pedirle que actúe como si no tuviera restricciones, u otras técnicas indirectas, para lograr que el modelo produzca contenido restringido que normalmente estaría bloqueado.</p>
            <div class="term-short"><b>En corto</b>Es intentar saltarse deliberadamente los guardrails de seguridad de un modelo, a menudo con técnicas indirectas como el rol-play.</div>
          </div>`,
  },
  {
    id: "gloss-d3-t2-b5",
    html: `<p class="gloss-bullet-text">"Describir estrategias de versionado y gestión de prompts usando Amazon Bedrock Prompt Management."</p>

          <div class="term-card">
            <h4>Amazon Bedrock Prompt Management</h4>
            <p>Amazon Bedrock Prompt Management es una función de Amazon Bedrock que permite crear, editar y guardar prompts reutilizables de forma centralizada, en vez de tenerlos dispersos y duplicados en el código de cada aplicación. Permite incluir variables dentro de un prompt, para adaptarlo a distintos casos sin recrearlo cada vez; elegir el modelo y los parámetros de inferencia con los que va a correr; y crear múltiples variantes de un mismo prompt, para probarlas con la herramienta Prompt Builder y comparar cuál da mejores resultados antes de elegir una versión. Cada cambio queda guardado como una nueva versión, lo que permite iterar con control y volver a una versión anterior si hace falta. Y una vez que el prompt está listo, la aplicación puede usarlo directamente en una llamada de inferencia, o como un nodo dentro de un Amazon Bedrock Flow, evitando duplicar y desincronizar la misma lógica de prompt entre distintas partes de un sistema.</p>
            <div class="term-short"><b>En corto</b>Es el servicio de Bedrock para crear, versionar y probar prompts reutilizables, con variables y variantes, de forma centralizada, en vez de tenerlos dispersos y duplicados en el código.</div>
          </div>`,
  },
  {
    id: "gloss-d3-t3-b1",
    html: `<p class="gloss-bullet-text">"Describir los elementos clave del entrenamiento de un FM (preentrenamiento, fine-tuning, preentrenamiento continuo, destilación)."</p>

          <div class="term-card">
            <h4>Preentrenamiento (pre-training)</h4>
            <p>El preentrenamiento es la etapa inicial donde el foundation model aprende patrones generales del lenguaje, o de otra modalidad, a partir de un conjunto de datos masivo y no etiquetado, sin un objetivo de tarea específica todavía. Es la base de todo foundation model, y la etapa más costosa en cómputo y en datos.</p>
            <div class="term-short"><b>En corto</b>Es la etapa inicial donde el modelo aprende patrones generales a partir de datos masivos no etiquetados — la base de todo FM.</div>
          </div>

          <div class="term-card">
            <h4>Fine-tuning</h4>
            <p>El fine-tuning es ajustar los pesos de un foundation model ya preentrenado, usando un conjunto de datos más pequeño y específico, a menudo etiquetado, para especializarlo en una tarea o un dominio concreto.</p>
            <div class="term-short"><b>En corto</b>Es ajustar un FM ya entrenado con un dataset más pequeño y específico, para especializarlo en una tarea o dominio.</div>
          </div>

          <div class="term-card">
            <h4>Preentrenamiento continuo (continuous/continued pre-training)</h4>
            <p>El preentrenamiento continuo es seguir entrenando un foundation model ya preentrenado, con datos adicionales, normalmente no etiquetados, de un dominio específico, como el legal o el médico, para actualizar su conocimiento o especializarlo en el vocabulario y estilo de ese dominio, sin llegar todavía a un fine-tuning orientado a una tarea específica.</p>
            <div class="term-short"><b>En corto</b>Es seguir entrenando un FM con más datos, a menudo de un dominio específico, para actualizar o especializar su conocimiento general, sin apuntar a una tarea puntual.</div>
          </div>

          <div class="term-card">
            <h4>Destilación (distillation)</h4>
            <p>La destilación es entrenar un modelo estudiante más pequeño, para replicar el comportamiento de un modelo maestro más grande, transfiriendo su conocimiento a una versión más compacta y más económica de operar.</p>
            <div class="term-short"><b>En corto</b>Es entrenar un modelo pequeño para imitar a uno grande, obteniendo un modelo más barato de operar con casi el mismo comportamiento.</div>
          </div>`,
  },
  {
    id: "gloss-d3-t3-b2",
    html: `<p class="gloss-bullet-text">"Definir métodos de fine-tuning de un FM (instruction tuning, adaptación de modelos a dominios específicos, transfer learning, preentrenamiento continuo)."</p>

          <div class="term-card">
            <h4>Instruction tuning</h4>
            <p>El instruction tuning es ajustar un foundation model usando ejemplos de pares instrucción-respuesta — por ejemplo, resume este texto, seguido del resumen correcto — para que el modelo aprenda a seguir instrucciones en lenguaje natural de forma más precisa y consistente, en vez de solo predecir la siguiente palabra más probable.</p>
            <div class="term-short"><b>En corto</b>Es ajustar el modelo con ejemplos de instrucción-respuesta, para que siga instrucciones en lenguaje natural de forma más precisa.</div>
          </div>

          <div class="term-card">
            <h4>Adaptación de modelos a dominios específicos (domain adaptation)</h4>
            <p>La adaptación de modelos a dominios específicos es ajustar un foundation model con datos de un dominio particular, como el legal, el médico o el financiero, para que aprenda su terminología, su estilo y sus matices específicos, mejorando su desempeño en ese dominio frente a un modelo genérico.</p>
            <div class="term-short"><b>En corto</b>Es ajustar el modelo con datos de un dominio específico, como legal o médico, para que domine su terminología y estilo particular.</div>
          </div>

          <div class="term-card">
            <h4>Transfer learning</h4>
            <p>El transfer learning es aprovechar el conocimiento general que un modelo ya aprendió durante su preentrenamiento — patrones de lenguaje, relaciones semánticas — y transferirlo a una nueva tarea específica mediante fine-tuning, en vez de aprender esa tarea desde cero. Es, en realidad, el principio general que hace posible el fine-tuning en sí.</p>
            <div class="term-short"><b>En corto</b>Es reutilizar el conocimiento general que el modelo ya aprendió en su preentrenamiento para resolver una tarea nueva, en vez de aprenderla desde cero.</div>
          </div>

          <div class="term-card">
            <h4>Preentrenamiento continuo (como método de fine-tuning)</h4>
            <p>Este aparece de nuevo acá porque también es una vía para personalizar un foundation model: en vez de ajustar el modelo para una tarea puntual, como el instruction tuning, se sigue entrenando con más datos no etiquetados de un dominio, para expandir y actualizar su conocimiento de fondo, antes de, opcionalmente, aplicar un fine-tuning más específico encima.</p>
            <div class="term-short"><b>En corto</b>Es el mismo concepto que antes: seguir entrenando con datos adicionales de dominio para actualizar el conocimiento de fondo del modelo, como paso previo a un ajuste más específico.</div>
          </div>

          <div class="term-card">
            <h4>Catastrophic forgetting <em>(extra, no está en el bullet oficial)</em></h4>
            <p>Antes de definirlo, una aclaración de fuente: esto no es contenido oficial de AWS, viene de unas notas de estudio de Taulli sobre el examen AIF-C01, y lo agregamos porque es un riesgo real y frecuentemente mencionado del fine-tuning. Dicho esto, el catastrophic forgetting es el riesgo de que, al ajustar un modelo muy intensamente para una sola tarea específica, el modelo termine olvidando parte de sus capacidades generales previas — el ajuste sobrescribe conocimiento útil que el modelo tenía desde su preentrenamiento. Es una de las razones por las que técnicas como el fine-tuning basado en instrucciones buscan un balance, en vez de sobreajustar el modelo a un único caso de uso.</p>
            <div class="term-short"><b>En corto</b>Es el riesgo de que un fine-tuning muy intensivo en una sola tarea haga que el modelo pierda capacidades generales que tenía antes del ajuste. No forma parte del bullet oficial.</div>
          </div>`,
  },
  {
    id: "gloss-d3-t3-b3",
    html: `<p class="gloss-bullet-text">"Describir cómo preparar los datos para hacer fine-tuning a un FM (curaduría de datos, gobernanza, tamaño, etiquetado, representatividad, aprendizaje por refuerzo con retroalimentación humana [RLHF])."</p>

          <div class="term-card">
            <h4>Curaduría de datos (data curation)</h4>
            <p>La curaduría de datos es el proceso de seleccionar, limpiar y organizar los datos más relevantes y de mayor calidad para el fine-tuning, eliminando duplicados, datos irrelevantes, o datos de baja calidad que podrían degradar el resultado del ajuste.</p>
            <div class="term-short"><b>En corto</b>Es seleccionar, limpiar y organizar los datos de mejor calidad y relevancia antes de usarlos para el fine-tuning.</div>
          </div>

          <div class="term-card">
            <h4>Gobernanza</h4>
            <p>La gobernanza son las políticas y controles sobre quién puede usar qué datos, de dónde provienen, y bajo qué permisos — privacidad, licencias, consentimiento — se pueden usar legalmente para entrenar o ajustar un modelo.</p>
            <div class="term-short"><b>En corto</b>Son las políticas que definen qué datos se pueden usar legalmente para el fine-tuning, y bajo qué permisos y procedencia.</div>
          </div>

          <div class="term-card">
            <h4>Tamaño</h4>
            <p>El tamaño es cuántos ejemplos de entrenamiento se necesitan. A diferencia del preentrenamiento, que requiere datasets masivos, el fine-tuning suele funcionar con conjuntos de datos mucho más pequeños, pero tienen que ser suficientes en cantidad para que el modelo generalice bien, y no sobreajuste, es decir, no haga overfitting, sobre unos pocos ejemplos.</p>
            <div class="term-short"><b>En corto</b>El fine-tuning necesita muchos menos datos que el preentrenamiento, pero suficientes para que el modelo generalice sin sobreajustarse.</div>
          </div>

          <div class="term-card">
            <h4>Etiquetado (labeling)</h4>
            <p>El etiquetado es asignar la respuesta correcta o la categoría esperada a cada ejemplo del dataset de fine-tuning — por ejemplo, pares de instrucción-respuesta correctos. Es un paso indispensable en el fine-tuning supervisado.</p>
            <div class="term-short"><b>En corto</b>Es asignar la respuesta o categoría correcta a cada ejemplo de entrenamiento — indispensable en el fine-tuning supervisado.</div>
          </div>

          <div class="term-card">
            <h4>Representatividad</h4>
            <p>La representatividad es que el dataset de fine-tuning refleje adecuadamente la diversidad de casos que el modelo va a encontrar en producción — distintos tipos de usuarios, formulaciones, casos límite — para evitar sesgos o un desempeño pobre en escenarios que estén subrepresentados en los datos de ajuste.</p>
            <div class="term-short"><b>En corto</b>Es que los datos de fine-tuning reflejen bien la diversidad de casos reales, para evitar sesgos o fallas en escenarios poco representados.</div>
          </div>

          <div class="term-card">
            <h4>Aprendizaje por refuerzo con retroalimentación humana (RLHF)</h4>
            <p>El RLHF, o aprendizaje por refuerzo con retroalimentación humana, es una técnica de ajuste donde personas evalúan y comparan distintas respuestas del modelo, indicando cuál prefieren, y esa retroalimentación se usa para entrenar un modelo de recompensa. Ese modelo de recompensa guía, mediante aprendizaje por refuerzo, el ajuste fino del foundation model, hacia respuestas más alineadas con las preferencias humanas: más útiles, más seguras y más naturales. Es la técnica detrás de gran parte del ajuste de comportamiento de los LLMs conversacionales modernos.</p>
            <div class="term-short"><b>En corto</b>Es usar preferencias humanas sobre distintas respuestas del modelo para entrenar, vía aprendizaje por refuerzo, un modelo más alineado, útil y seguro.</div>
          </div>`,
  },
  {
    id: "gloss-d3-t4-b1",
    html: `<p class="gloss-bullet-text">"Determinar enfoques para evaluar el desempeño de un FM (evaluación human-in-the-loop, datasets de referencia/benchmark, Amazon Bedrock Model Evaluation)."</p>

          <div class="term-card">
            <h4>Evaluación human-in-the-loop</h4>
            <p>En la evaluación human-in-the-loop, personas revisan y califican las respuestas del modelo — por ejemplo, comparando dos respuestas y eligiendo la mejor, o calificando en una escala — para capturar matices de calidad, como el tono, la utilidad o la corrección, que las métricas automáticas no siempre detectan bien. Es más costosa y más lenta que la evaluación automática, pero suele ser la más confiable para juzgar calidad subjetiva.</p>
            <div class="term-short"><b>En corto</b>Personas evalúan directamente las respuestas del modelo — más lenta y cara que la evaluación automática, pero mejor para juzgar calidad subjetiva.</div>
          </div>

          <div class="term-card">
            <h4>Datasets de referencia/benchmark</h4>
            <p>Los datasets de referencia, o benchmarks, son conjuntos de datos estandarizados y públicos, con respuestas correctas ya conocidas, que se usan para medir el desempeño de un modelo en tareas específicas, y comparar distintos modelos entre sí bajo las mismas condiciones.</p>
            <div class="term-short"><b>En corto</b>Son conjuntos de datos estandarizados con respuestas conocidas, usados para medir y comparar el desempeño de distintos modelos de forma objetiva.</div>
          </div>

          <div class="term-card">
            <h4>Amazon Bedrock Model Evaluation</h4>
            <p>Amazon Bedrock Model Evaluation es una función de Amazon Bedrock que permite evaluar y comparar foundation models, ya sean propios o de terceros disponibles en Bedrock, usando métricas automáticas integradas, datasets propios o de referencia, o incorporando evaluación humana — todo desde la consola o la API de Bedrock, sin tener que construir la infraestructura de evaluación desde cero.</p>
            <div class="term-short"><b>En corto</b>Es la función administrada de Bedrock para evaluar y comparar FMs con métricas automáticas, datasets propios o evaluación humana, sin infraestructura propia.</div>
          </div>`,
  },
  {
    id: "gloss-d3-t4-b2",
    html: `<p class="gloss-bullet-text">"Identificar las métricas relevantes para evaluar el desempeño de un FM (ROUGE, BLEU, BERTScore, LLM-as-a-judge)."</p>

          <div class="term-card">
            <h4>ROUGE (Recall-Oriented Understudy for Gisting Evaluation)</h4>
            <p>ROUGE es una familia de métricas usada principalmente para evaluar resúmenes generados por un modelo, midiendo cuánto se solapan las palabras o secuencias de palabras, los n-gramas, entre el resumen generado y uno o más resúmenes de referencia escritos por humanos. A mayor solapamiento, mayor puntaje de ROUGE.</p>
            <div class="term-short"><b>En corto</b>Mide el solapamiento de palabras entre un resumen generado por el modelo y resúmenes de referencia — se usa sobre todo para evaluar resúmenes.</div>
          </div>

          <div class="term-card">
            <h4>BLEU (Bilingual Evaluation Understudy)</h4>
            <p>BLEU es una métrica originalmente creada para evaluar traducción automática, que mide qué tan similar es el texto generado por el modelo frente a una o más traducciones de referencia, comparando la coincidencia de n-gramas. También se usa, de forma más general, en tareas de generación de texto donde existe una salida de referencia clara.</p>
            <div class="term-short"><b>En corto</b>Mide la similitud entre el texto generado y una traducción o salida de referencia, comparando n-gramas — se originó en traducción automática.</div>
          </div>

          <div class="term-card">
            <h4>BERTScore</h4>
            <p>A diferencia de ROUGE y BLEU, que comparan palabras exactas, BERTScore usa embeddings de un modelo tipo BERT, para comparar el significado semántico entre el texto generado y el de referencia, capturando similitud aunque se usen palabras distintas pero con el mismo sentido. Es más robusta ante paráfrasis que las métricas basadas en n-gramas.</p>
            <div class="term-short"><b>En corto</b>Compara el significado semántico, vía embeddings, entre el texto generado y el de referencia, no solo las palabras exactas — es más robusta ante paráfrasis.</div>
          </div>

          <div class="term-card">
            <h4>LLM-as-a-judge</h4>
            <p>LLM-as-a-judge es usar otro LLM, generalmente uno más grande o especializado, como evaluador automático, para calificar o comparar las respuestas de un modelo, siguiendo criterios definidos en un prompt de evaluación. Es más escalable y más económico que la evaluación humana, y captura mejor la calidad semántica que métricas como ROUGE o BLEU, aunque hereda los posibles sesgos y limitaciones del LLM evaluador.</p>
            <div class="term-short"><b>En corto</b>Es usar un LLM para calificar las respuestas de otro modelo — más escalable que la evaluación humana, pero hereda los sesgos del LLM evaluador.</div>
          </div>

          <div class="term-card">
            <h4>GLUE, SuperGLUE y SQuAD <em>(extra, no está en el bullet oficial)</em></h4>
            <p>Antes que nada, una aclaración de fuente: esto no es contenido oficial de AWS, viene de un cheat sheet de SkillCertPro, y lo agregamos porque son benchmarks reales y vigentes de la industria. GLUE, o General Language Understanding Evaluation, y SuperGLUE son colecciones estándar de tareas — clasificación, inferencia de lenguaje natural, respuesta de preguntas, entre otras — usadas para comparar qué tan bien un modelo de lenguaje entiende y razona sobre texto en general, no en una sola tarea puntual. SQuAD, o Stanford Question Answering Dataset, en cambio, es un benchmark específico de respuesta de preguntas: mide qué tan bien un modelo puede extraer o generar la respuesta correcta a una pregunta, a partir de un párrafo de contexto dado.</p>
            <div class="term-short"><b>En corto</b>GLUE y SuperGLUE miden comprensión de lenguaje en general con un conjunto de tareas. SQuAD mide específicamente qué tan bien un modelo responde preguntas a partir de un texto de contexto. No forman parte del bullet oficial.</div>
          </div>

          <div class="term-card">
            <h4>HELM, MMLU y BIG-bench <em>(extra, no está en el bullet oficial)</em></h4>
            <p>De nuevo, una aclaración de fuente: esto tampoco es contenido oficial de AWS, viene de unas notas de estudio de Taulli sobre el examen AIF-C01, y lo agregamos porque son benchmarks reales y vigentes de la industria. HELM, o Holistic Evaluation of Language Models, evalúa un modelo de forma amplia, en muchas dimensiones y tareas distintas a la vez, en vez de un solo aspecto puntual. MMLU, o Massive Multitask Language Understanding, mide el conocimiento de un modelo a lo largo de decenas de materias y dominios distintos — historia, matemática, derecho, medicina, y más — como un examen de conocimiento general. Y BIG-bench evalúa a los modelos en tareas difíciles o creativas, diseñadas específicamente para no estar cubiertas por los benchmarks estándar.</p>
            <div class="term-short"><b>En corto</b>HELM evalúa de forma amplia en muchas dimensiones a la vez. MMLU mide conocimiento general a través de muchas materias. BIG-bench evalúa tareas difíciles o creativas fuera de los benchmarks estándar. No forman parte del bullet oficial.</div>
          </div>`,
  },
  {
    id: "gloss-d3-t4-b3",
    html: `<p class="gloss-bullet-text">"Determinar si un FM cumple efectivamente con los objetivos de negocio (productividad, engagement de usuarios, task engineering)."</p>

          <div class="term-card">
            <h4>Determinar si un FM cumple los objetivos de negocio</h4>
            <p>Más allá de las métricas técnicas de calidad, como ROUGE, BLEU o accuracy, la pregunta de negocio es si el foundation model realmente mueve la aguja en los resultados que le importan a la organización. Esto se mide observando, entre otras dimensiones, las siguientes.</p>
            <p>La productividad: si la aplicación de GenAI realmente reduce el tiempo o el esfuerzo que antes tomaba una tarea, por ejemplo el tiempo para redactar un documento o resolver un ticket. El engagement de usuarios: si las personas efectivamente usan la funcionalidad de GenAI de forma recurrente y la encuentran valiosa, medido en frecuencia de uso y retención. Y el task engineering: si la forma en que se diseñó y estructuró la tarea que resuelve el foundation model — qué se le pide, cómo se descompone el problema, qué información recibe — está realmente optimizada para lograr el resultado de negocio esperado, más allá de si el modelo responde bien en abstracto.</p>
            <p>En conjunto, estas dimensiones ayudan a distinguir un foundation model que da respuestas técnicamente correctas, de uno que efectivamente resuelve el problema de negocio para el que se implementó.</p>
            <div class="term-short"><b>En corto</b>No basta con que el FM responda bien: hay que medir si mejora la productividad real, si los usuarios lo adoptan y usan, es decir el engagement, y si la tarea que resuelve está bien diseñada, es decir el task engineering, para el objetivo de negocio.</div>
          </div>`,
  },
  {
    id: "gloss-d3-t4-b4",
    html: `<p class="gloss-bullet-text">"Identificar enfoques para evaluar el desempeño de aplicaciones construidas con FMs (RAG, agentes, flujos de trabajo)."</p>

          <div class="term-card">
            <h4>Evaluación de aplicaciones RAG</h4>
            <p>Además de evaluar la calidad del texto generado, con métricas como las que vimos en el bullet anterior, una aplicación RAG se evalúa en dos dimensiones adicionales. La primera es la calidad de la recuperación: ¿el sistema encontró los documentos o fragmentos realmente relevantes en la base vectorial? Y la segunda es el grounding: ¿la respuesta final está realmente fundamentada en esos documentos recuperados, o el modelo alucinó a pesar de tener el contexto correcto?</p>
            <div class="term-short"><b>En corto</b>Un RAG se evalúa no solo por la calidad del texto, sino por si recuperó los documentos correctos y si la respuesta se fundamenta realmente en ellos, es decir, por el grounding.</div>
          </div>

          <div class="term-card">
            <h4>Evaluación de agentes</h4>
            <p>Un agente se evalúa por si logró completar la tarea de principio a fin, es decir, por su tasa de éxito; por si eligió las herramientas correctas en el momento correcto; por cuántos pasos o llamadas necesitó, lo que sería su eficiencia; y por si se recuperó correctamente de errores o resultados inesperados durante su ejecución — no solo por la calidad de un texto final.</p>
            <div class="term-short"><b>En corto</b>Un agente se evalúa por si completó la tarea, si usó las herramientas correctas, cuántos pasos necesitó y si manejó bien los errores en el camino.</div>
          </div>

          <div class="term-card">
            <h4>Evaluación de flujos de trabajo (workflows)</h4>
            <p>Un flujo de trabajo compuesto por varios pasos o agentes se evalúa de extremo a extremo: si el resultado final del flujo completo cumple el objetivo. Además, se audita cada paso individual, para identificar en qué punto específico del flujo se degrada la calidad si algo falla.</p>
            <div class="term-short"><b>En corto</b>Un workflow se evalúa de extremo a extremo, por el resultado final, y también paso a paso, para ubicar dónde se degrada la calidad si algo falla.</div>
          </div>`,
  },
  {
    id: "gloss-d3-t4-b5",
    html: `<p class="gloss-bullet-text">"Identificar métricas de alineación con objetivos de negocio para aplicaciones de IA (tasa de finalización de tareas, satisfacción del usuario, costo por interacción)."</p>

          <div class="term-card">
            <h4>Tasa de finalización de tareas</h4>
            <p>La tasa de finalización de tareas es el porcentaje de veces que la aplicación de IA, un agente o un asistente, logra completar exitosamente la tarea para la que fue diseñada, sin necesitar intervención humana adicional, ni que el usuario abandone a mitad de camino.</p>
            <div class="term-short"><b>En corto</b>Es el porcentaje de veces que la aplicación de IA completa exitosamente la tarea para la que fue diseñada.</div>
          </div>

          <div class="term-card">
            <h4>Satisfacción del usuario</h4>
            <p>La satisfacción del usuario es qué tan conformes están los usuarios con las respuestas o el comportamiento de la aplicación de IA, medida a través de encuestas, de calificaciones directas, como pulgar arriba o pulgar abajo, o de señales indirectas, como la tasa de re-preguntas o de quejas.</p>
            <div class="term-short"><b>En corto</b>Es qué tan conformes están los usuarios con la aplicación de IA, medido con encuestas, calificaciones directas o señales indirectas.</div>
          </div>

          <div class="term-card">
            <h4>Costo por interacción</h4>
            <p>El costo por interacción es el costo total — tokens consumidos, cómputo, herramientas invocadas — dividido entre el número de interacciones o tareas completadas. Esto permite comparar si el valor generado por la aplicación de IA justifica su costo operativo por uso.</p>
            <div class="term-short"><b>En corto</b>Es el costo total dividido entre el número de interacciones, para saber si el valor generado justifica el costo operativo de la aplicación.</div>
          </div>`,
  },
  {
    id: "gloss-d4-t1-b1",
    html: `<p class="gloss-bullet-text">"Identificar las características de una IA responsable (sesgo, equidad, inclusividad, robustez, seguridad, veracidad)."</p>

          <div class="term-card">
            <h4>Sesgo (bias)</h4>
            <p>El sesgo es cuando un modelo produce resultados sistemáticamente desiguales o injustos hacia ciertos grupos, generalmente porque los datos de entrenamiento sobre-representan o sub-representan a esos grupos, o porque reflejan sesgos históricos presentes en el mundo real. Una IA responsable busca identificar y mitigar ese sesgo.</p>
            <div class="term-short"><b>En corto</b>Son resultados sistemáticamente desiguales hacia ciertos grupos, normalmente por datos de entrenamiento sesgados o no representativos.</div>
          </div>

          <div class="term-card">
            <h4>Equidad (fairness)</h4>
            <p>La equidad, AWS la define como considerar el impacto que tiene un sistema de IA sobre distintos grupos de interesados — por ejemplo, que un sistema de scoring hipotecario no discrimine por características protegidas, como raza o género. Es el objetivo positivo frente al riesgo del sesgo.</p>
            <div class="term-short"><b>En corto</b>Es que el sistema de IA trate de forma justa a los distintos grupos afectados, sin discriminar por características protegidas.</div>
          </div>

          <div class="term-card">
            <h4>Inclusividad</h4>
            <p>La inclusividad es que el diseño, los datos y la evaluación del sistema de IA consideren deliberadamente la diversidad de personas que lo van a usar o que serán afectadas por él — distintos orígenes, capacidades, idiomas — en vez de optimizar solo para el usuario promedio o mayoritario.</p>
            <div class="term-short"><b>En corto</b>Es diseñar, entrenar y evaluar el sistema pensando en la diversidad real de personas que lo usarán, no solo en el usuario mayoritario.</div>
          </div>

          <div class="term-card">
            <h4>Robustez</h4>
            <p>La robustez es la capacidad del sistema de IA de mantener un desempeño confiable incluso ante entradas inesperadas, ruidosas, o ligeramente distintas a las que vio en entrenamiento — que no falle de forma frágil ante variaciones razonables del mundo real.</p>
            <div class="term-short"><b>En corto</b>Es que el sistema siga funcionando de forma confiable incluso ante entradas inesperadas o distintas a las de su entrenamiento.</div>
          </div>

          <div class="term-card">
            <h4>Seguridad (safety)</h4>
            <p>La seguridad, o safety, AWS la define como reducir las salidas dañinas y el mal uso del sistema — por ejemplo, que un sistema de trading algorítmico tenga guardrails que impidan violaciones regulatorias. Incluye tanto evitar contenido dañino como evitar que el sistema sea usado con fines maliciosos.</p>
            <div class="term-short"><b>En corto</b>Es reducir las salidas dañinas y el mal uso del sistema de IA, con controles, o guardrails, que limiten comportamientos riesgosos.</div>
          </div>

          <div class="term-card">
            <h4>Veracidad</h4>
            <p>La veracidad, AWS la agrupa junto con la robustez, como veracity and robustness: que el sistema produzca salidas correctas y fundamentadas, incluso ante entradas inesperadas, minimizando alucinaciones y afirmaciones falsas presentadas con confianza.</p>
            <div class="term-short"><b>En corto</b>Es que las salidas del sistema sean correctas y estén fundamentadas, minimizando alucinaciones y afirmaciones falsas.</div>
          </div>`,
  },
  {
    id: "gloss-d4-t1-b2",
    html: `<p class="gloss-bullet-text">"Explicar cómo usar herramientas para identificar características de IA responsable (Amazon Bedrock Guardrails)."</p>

          <div class="term-card">
            <h4>Amazon Bedrock Guardrails</h4>
            <p>Amazon Bedrock Guardrails es una función de Amazon Bedrock que ofrece salvaguardas configurables para construir aplicaciones de GenAI de forma más segura y responsable, detectando y filtrando contenido no deseado, tanto en las entradas del usuario como en las respuestas del modelo.</p>
            <p>Sus capacidades incluyen varias cosas. Los filtros de contenido, que detectan y filtran categorías como odio, insultos, contenido sexual, violencia y mala conducta, con distintos niveles de severidad configurables. Los temas denegados, que permiten definir temas específicos que la aplicación no debe tratar, bloqueándolos tanto en preguntas como en respuestas. Los filtros de palabras, para bloquear términos exactos, incluyendo groserías o nombres de competidores. Los filtros de información sensible, que detectan y redactan o bloquean datos de identificación personal, como números de seguridad social, fechas de nacimiento o direcciones, con detección probabilística o con patrones de expresiones regulares personalizados. Las verificaciones de fundamentación contextual, o contextual grounding, que detectan alucinaciones comparando la respuesta contra el material fuente, ideal para aplicaciones RAG. Y las verificaciones de razonamiento automatizado, que validan las respuestas contra reglas lógicas definidas.</p>
            <p>Todo esto conecta directamente con varias características de la IA responsable: la seguridad y la veracidad, a través de los filtros de contenido y el grounding, y la privacidad, a través de los filtros de información sensible.</p>
            <div class="term-short"><b>En corto</b>Bedrock Guardrails filtra contenido dañino, bloquea temas prohibidos, redacta información personal y detecta alucinaciones mediante grounding, implementando de forma concreta la seguridad, la veracidad y la privacidad de la IA responsable.</div>
          </div>`,
  },
  {
    id: "gloss-d4-t1-b3",
    html: `<p class="gloss-bullet-text">"Definir prácticas responsables para seleccionar un modelo (consideraciones ambientales, sostenibilidad)."</p>

          <div class="term-card">
            <h4>Consideraciones ambientales</h4>
            <p>Las consideraciones ambientales parten de esto: entrenar y operar foundation models consume cantidades significativas de energía y de recursos de cómputo — GPUs, centros de datos, refrigeración — y eso tiene una huella ambiental medible. Al elegir un modelo, una práctica responsable es tomar en cuenta ese costo ambiental, por ejemplo, prefiriendo un modelo más pequeño y eficiente si cumple igual de bien la tarea, en vez de usar automáticamente el modelo más grande disponible.</p>
            <div class="term-short"><b>En corto</b>Entrenar y correr foundation models consume mucha energía. Elegir el modelo más pequeño que resuelva bien la tarea reduce esa huella ambiental.</div>
          </div>

          <div class="term-card">
            <h4>Sostenibilidad</h4>
            <p>La sostenibilidad es el objetivo más amplio de operar sistemas de IA de forma que minimicen su impacto ambiental a largo plazo. AWS lo trata como uno de los pilares de su Well-Architected Framework, el pilar de Sostenibilidad, que incluye prácticas como elegir regiones de AWS con energía más limpia, usar instancias y arquitecturas más eficientes en cómputo, y monitorear el consumo de recursos de las cargas de trabajo de ML y GenAI para optimizarlas continuamente.</p>
            <div class="term-short"><b>En corto</b>Es operar la IA minimizando su impacto ambiental a largo plazo. Es uno de los pilares del AWS Well-Architected Framework, con prácticas como elegir regiones más limpias y arquitecturas eficientes.</div>
          </div>`,
  },
  {
    id: "gloss-d4-t1-b4",
    html: `<p class="gloss-bullet-text">"Identificar los riesgos legales de trabajar con GenAI (reclamos por infracción de propiedad intelectual, resultados sesgados del modelo, pérdida de confianza del cliente, riesgo para el usuario final, alucinaciones)."</p>

          <div class="term-card">
            <h4>Reclamos por infracción de propiedad intelectual</h4>
            <p>Este riesgo es que el contenido generado por un foundation model reproduzca, parcial o totalmente, material protegido por derechos de autor presente en sus datos de entrenamiento, exponiendo a la organización que lo usa a reclamos legales de los titulares de esos derechos. También existe la pregunta inversa: quién es dueño de los derechos sobre el contenido que genera la IA.</p>
            <div class="term-short"><b>En corto</b>Es el riesgo de que un foundation model reproduzca contenido protegido por derechos de autor, exponiendo a la organización a reclamos legales.</div>
          </div>

          <div class="term-card">
            <h4>Resultados sesgados del modelo</h4>
            <p>Si un modelo produce sistemáticamente resultados discriminatorios hacia ciertos grupos — por ejemplo, en decisiones de crédito o de contratación asistidas por IA — la organización puede enfrentar responsabilidad legal bajo leyes de no discriminación, además del daño reputacional.</p>
            <div class="term-short"><b>En corto</b>Resultados discriminatorios del modelo pueden generar responsabilidad legal bajo leyes de no discriminación.</div>
          </div>

          <div class="term-card">
            <h4>Pérdida de confianza del cliente</h4>
            <p>Aunque no siempre es un riesgo legal en sentido estricto, un incidente de GenAI que sale mal — una respuesta ofensiva, una filtración de datos, una alucinación pública — puede erosionar la confianza del cliente en la marca, con consecuencias comerciales, y en algunos casos, regulatorias, si involucra protección al consumidor.</p>
            <div class="term-short"><b>En corto</b>Un incidente público de GenAI puede erosionar la confianza del cliente en la marca, con consecuencias comerciales y a veces regulatorias.</div>
          </div>

          <div class="term-card">
            <h4>Riesgo para el usuario final</h4>
            <p>Si la salida de un foundation model influye en una decisión con consecuencias reales para una persona — un diagnóstico médico sugerido, un consejo financiero, una decisión legal — y esa salida resulta incorrecta, existe el riesgo de daño directo al usuario final, y de responsabilidad legal asociada para quien desplegó el sistema.</p>
            <div class="term-short"><b>En corto</b>Una salida incorrecta del FM que influye en una decisión real, médica, financiera o legal, puede causar daño directo al usuario y responsabilidad legal.</div>
          </div>

          <div class="term-card">
            <h4>Alucinaciones (como riesgo legal)</h4>
            <p>Más allá de ser una limitación técnica, una alucinación, es decir, el modelo inventando información falsa y presentándola con confianza, se convierte en un riesgo legal cuando esa información falsa se usa para tomar decisiones de negocio, se comunica a clientes como si fuera un hecho verificado, o aparece en un documento con validez legal o regulatoria.</p>
            <div class="term-short"><b>En corto</b>Una alucinación deja de ser solo un problema técnico y se vuelve un riesgo legal cuando esa información falsa se usa en decisiones o comunicaciones con consecuencias reales.</div>
          </div>`,
  },
  {
    id: "gloss-d4-t1-b5",
    html: `<p class="gloss-bullet-text">"Identificar las características de los conjuntos de datos (inclusividad, diversidad, fuentes de datos curadas, datasets balanceados)."</p>

          <div class="term-card">
            <h4>Inclusividad</h4>
            <p>La inclusividad, acá, es que el dataset contenga ejemplos suficientes de todos los grupos de personas relevantes para el sistema, sin dejar fuera sistemáticamente a poblaciones minoritarias o menos representadas en los datos disponibles por defecto.</p>
            <div class="term-short"><b>En corto</b>Es que el dataset incluya ejemplos suficientes de todos los grupos relevantes, sin excluir sistemáticamente a poblaciones minoritarias.</div>
          </div>

          <div class="term-card">
            <h4>Diversidad</h4>
            <p>La diversidad es que el dataset cubra una variedad amplia de situaciones, contextos y variaciones dentro de la tarea — distintos estilos de escritura, condiciones de una imagen, formulaciones de una pregunta — para que el modelo generalice bien más allá de un patrón muy estrecho de ejemplos.</p>
            <div class="term-short"><b>En corto</b>Es que el dataset cubra una variedad amplia de situaciones y contextos, no solo un patrón estrecho de ejemplos.</div>
          </div>

          <div class="term-card">
            <h4>Fuentes de datos curadas</h4>
            <p>Las fuentes de datos curadas significan que los datos provienen de fuentes revisadas y de calidad conocida, en vez de una recolección indiscriminada de cualquier fuente disponible, reduciendo el riesgo de incorporar datos erróneos, de baja calidad, o con sesgos no controlados.</p>
            <div class="term-short"><b>En corto</b>Es usar datos de fuentes revisadas y de calidad conocida, en vez de una recolección indiscriminada sin control de calidad.</div>
          </div>

          <div class="term-card">
            <h4>Datasets balanceados</h4>
            <p>Los datasets balanceados son aquellos donde las distintas categorías o grupos representados tienen una proporción razonable entre sí, evitando que una clase mayoritaria domine tan abrumadoramente que el modelo termine ignorando, o desempeñándose mal, con las clases minoritarias.</p>
            <div class="term-short"><b>En corto</b>Es que las distintas categorías o grupos del dataset estén en proporciones razonables, sin que una clase mayoritaria domine el entrenamiento.</div>
          </div>`,
  },
  {
    id: "gloss-d4-t1-b6",
    html: `<p class="gloss-bullet-text">"Describir los efectos del sesgo y la varianza (efectos sobre grupos demográficos, imprecisión, overfitting, underfitting)."</p>

          <div class="term-card">
            <h4>Efectos sobre grupos demográficos</h4>
            <p>Cuando el sesgo de un modelo no es aleatorio, sino sistemático hacia ciertos datos de entrenamiento, sus errores tienden a afectar de forma desproporcionada a grupos demográficos específicos, normalmente los que están subrepresentados en los datos, generando un desempeño desigual entre grupos.</p>
            <div class="term-short"><b>En corto</b>Un sesgo sistemático en los datos suele traducirse en errores desproporcionados sobre grupos demográficos específicos, normalmente los subrepresentados.</div>
          </div>

          <div class="term-card">
            <h4>Imprecisión</h4>
            <p>Tanto un sesgo alto como una varianza alta se traducen, de distintas formas, en predicciones que se alejan del valor real. El sesgo produce errores sistemáticos y consistentes, mientras que la varianza produce errores inconsistentes, que cambian mucho según los datos de entrenamiento usados.</p>
            <div class="term-short"><b>En corto</b>Tanto el sesgo alto como la varianza alta producen imprecisión, aunque de formas distintas: errores consistentes en el caso del sesgo, e inconsistentes en el caso de la varianza.</div>
          </div>

          <div class="term-card">
            <h4>Overfitting (sobreajuste)</h4>
            <p>El overfitting, o sobreajuste, ocurre cuando un modelo tiene varianza alta: aprende tan específicamente los datos de entrenamiento, incluyendo su ruido y sus particularidades, que termina memorizando en vez de generalizar, y su desempeño se degrada notablemente con datos nuevos que no ha visto antes.</p>
            <div class="term-short"><b>En corto</b>Es varianza alta: el modelo memoriza los datos de entrenamiento, incluyendo su ruido, y se desempeña mal con datos nuevos.</div>
          </div>

          <div class="term-card">
            <h4>Underfitting (subajuste)</h4>
            <p>El underfitting, o subajuste, ocurre cuando un modelo tiene sesgo alto: es demasiado simple para capturar los patrones reales de los datos, y por eso se desempeña mal tanto en los datos de entrenamiento como en datos nuevos — no aprendió lo suficiente, ni siquiera del propio conjunto de entrenamiento.</p>
            <div class="term-short"><b>En corto</b>Es sesgo alto: el modelo es demasiado simple para capturar los patrones reales, y se desempeña mal incluso en los datos de entrenamiento.</div>
          </div>`,
  },
  {
    id: "gloss-d4-t1-b7",
    html: `<p class="gloss-bullet-text">"Describir herramientas para detectar y monitorear el sesgo, la confiabilidad y la veracidad (análisis de calidad de etiquetas, auditorías humanas, análisis de subgrupos)."</p>

          <div class="term-card">
            <h4>Análisis de calidad de etiquetas</h4>
            <p>El análisis de calidad de etiquetas es revisar sistemáticamente qué tan consistentes y correctas son las etiquetas asignadas a los datos de entrenamiento — por ejemplo, midiendo el acuerdo entre distintos etiquetadores humanos — ya que etiquetas de mala calidad o inconsistentes son una fuente directa de sesgo y de baja confiabilidad del modelo.</p>
            <div class="term-short"><b>En corto</b>Es revisar qué tan consistentes y correctas son las etiquetas del dataset, ya que etiquetas de mala calidad generan sesgo y baja confiabilidad.</div>
          </div>

          <div class="term-card">
            <h4>Auditorías humanas</h4>
            <p>Las auditorías humanas son revisiones periódicas realizadas por personas, no automatizadas, sobre las decisiones o salidas del modelo, buscando específicamente patrones de sesgo, errores sistemáticos, o comportamientos no deseados que las métricas automáticas podrían no capturar.</p>
            <div class="term-short"><b>En corto</b>Son revisiones periódicas hechas por personas sobre las salidas del modelo, buscando sesgos o errores que las métricas automáticas no detectan.</div>
          </div>

          <div class="term-card">
            <h4>Análisis de subgrupos</h4>
            <p>El análisis de subgrupos es medir el desempeño del modelo por separado para distintos subgrupos de la población — por edad, género, región, y así — en vez de solo mirar una métrica de desempeño agregada o promedio. Esto permite detectar si el modelo funciona mucho peor para algún subgrupo específico, aunque su desempeño general parezca bueno.</p>
            <div class="term-short"><b>En corto</b>Es medir el desempeño del modelo por separado en cada subgrupo demográfico, para detectar fallas que una métrica promedio escondería.</div>
          </div>

          <div class="term-card">
            <h4>Amazon Augmented AI (A2I) <em>(extra, no está en el bullet oficial)</em></h4>
            <p>Antes de nada, un aviso: el bullet oficial de AWS no menciona a A2I. Lo agregamos como referencia porque es un servicio real y relevante para la revisión humana de modelos, pero no es parte confirmada de este objetivo puntual. Dicho esto, Amazon Augmented AI, o A2I, es un servicio administrado de AWS que permite incorporar revisión humana de las predicciones de machine learning, sin construir un sistema de revisión desde cero. Ofrece flujos de trabajo prediseñados, soporte para múltiples revisores, capacidades de auditoría, e integración tanto con otros servicios de IA de AWS como con modelos propios o de terceros. Se usa, por ejemplo, para que personas revisen predicciones de baja confianza, o documentos sensibles, como reclamos de seguros o solicitudes de crédito, antes de una decisión final, retroalimentando además el reentrenamiento del modelo con esas revisiones.</p>
            <div class="term-short"><b>En corto</b>Es el servicio de AWS para incorporar revisión humana de predicciones de ML, con flujos de trabajo prediseñados, sin construir ese sistema de revisión desde cero. No forma parte del bullet oficial.</div>
          </div>

          <div class="term-card">
            <h4>Amazon SageMaker Model Monitor <em>(extra, no está en el bullet oficial)</em></h4>
            <p>Una aclaración de fuente antes de definirlo: esto no es contenido oficial de AWS, viene de un cheat sheet de SkillCertPro, y lo agregamos porque es un servicio real de AWS relevante para este objetivo. Amazon SageMaker Model Monitor es un servicio administrado de SageMaker que monitorea continuamente los modelos ya desplegados en producción, detectando automáticamente drift: desviaciones en la calidad de los datos de entrada, en el desempeño del modelo, o en el sesgo, respecto a una línea base definida al momento del entrenamiento. Genera alertas cuando detecta una desviación significativa, para poder reentrenar o corregir el modelo antes de que el problema afecte a los usuarios.</p>
            <div class="term-short"><b>En corto</b>Monitorea modelos en producción y alerta automáticamente cuando detecta desviaciones, o drift, en los datos, el desempeño o el sesgo, respecto a la línea base del entrenamiento. No forma parte del bullet oficial.</div>
          </div>`,
  },
  {
    id: "gloss-d4-t2-b1",
    html: `<p class="gloss-bullet-text">"Describir las diferencias entre modelos transparentes/explicables y modelos que no lo son."</p>

          <div class="term-card">
            <h4>Modelos transparentes/explicables vs. modelos "caja negra"</h4>
            <p>Un modelo transparente, o explicable, es aquel cuyo proceso de decisión se puede entender y comunicar: se puede señalar qué variables influyeron en una predicción, y con qué peso, y, siguiendo la definición de AWS de explainability, alguien puede articular el razonamiento detrás de una recomendación — por ejemplo, un asesor de inversión explicando por qué sugiere cierta acción. Los modelos más simples, como los árboles de decisión o la regresión lineal, tienden a ser inherentemente más explicables, porque su lógica interna es directa de inspeccionar.</p>
            <p>En el otro extremo están los modelos de caja negra, como la mayoría de los foundation models y las redes neuronales profundas, con millones o miles de millones de parámetros, donde es extremadamente difícil trazar por qué el modelo llegó a una salida específica: se puede observar la entrada y la salida, pero el razonamiento intermedio no es directamente interpretable por un humano.</p>
            <p>Esta diferencia importa porque la explicabilidad afecta la confianza de usuarios y reguladores, la capacidad de auditar decisiones automatizadas, y el cumplimiento normativo en industrias donde se exige justificar una decisión, como crédito, salud o seguros.</p>
            <div class="term-short"><b>En corto</b>Un modelo transparente permite explicar por qué llegó a una decisión, como un árbol de decisión. Un modelo de caja negra, como la mayoría de los FMs, no permite trazar ese razonamiento, lo cual afecta la confianza, la auditoría y el cumplimiento normativo.</div>
          </div>`,
  },
  {
    id: "gloss-d4-t2-b2",
    html: `<p class="gloss-bullet-text">"Describir herramientas para identificar modelos transparentes y explicables (Amazon SageMaker Model Cards, Amazon Bedrock Model Evaluations, modelos, datos y licenciamiento de código abierto)."</p>

          <div class="term-card">
            <h4>Amazon SageMaker Model Cards</h4>
            <p>Amazon SageMaker Model Cards es una herramienta de documentación que reúne en un solo lugar centralizado los detalles críticos de un modelo de ML, para facilitar su gobernanza y reporte: una descripción general, con el algoritmo, el creador y el tipo de problema; los usos previstos y los no recomendados; una calificación de riesgo, que puede ser desconocido, bajo, medio o alto; los detalles de entrenamiento, como los datasets, los hiperparámetros y las métricas; los resultados de evaluación; y las consideraciones éticas. Cualquier edición, salvo el estado de aprobación, crea una nueva versión, manteniendo un registro inmutable y trazable de los cambios del modelo a lo largo de su ciclo de vida — algo clave para auditorías y cumplimiento.</p>
            <div class="term-short"><b>En corto</b>Es un documento centralizado e inmutable por versión, que registra el propósito, el entrenamiento, el riesgo y la evaluación de un modelo, facilitando su auditoría y gobernanza.</div>
          </div>

          <div class="term-card">
            <h4>Amazon Bedrock Model Evaluations</h4>
            <p>Amazon Bedrock Model Evaluations, al permitir evaluar y comparar el desempeño de distintos foundation models con métricas automáticas, datasets propios o evaluación humana, también aporta transparencia: documenta objetivamente cómo se comporta un modelo frente a ciertas tareas o criterios, en vez de depender solo de las afirmaciones del proveedor del modelo.</p>
            <div class="term-short"><b>En corto</b>Al evaluar objetivamente el desempeño de un FM con métricas y datos propios, aporta evidencia verificable sobre su comportamiento, más allá de lo que afirma el proveedor.</div>
          </div>

          <div class="term-card">
            <h4>Modelos, datos y licenciamiento de código abierto</h4>
            <p>Cuando un modelo es de código abierto, es decir, sus pesos y, a veces, su código de entrenamiento son públicos, y sus datos y su licencia también son abiertos y están documentados, terceros pueden inspeccionar, auditar y reproducir su comportamiento de forma independiente. Es un nivel de transparencia que normalmente no está disponible con foundation models propietarios, de caja negra, ofrecidos solo como una API.</p>
            <div class="term-short"><b>En corto</b>Modelos y datos abiertos permiten que terceros inspeccionen y auditen el modelo de forma independiente, algo que un FM propietario cerrado no permite.</div>
          </div>

          <div class="term-card">
            <h4>SHAP y LIME <em>(extra, no está en el bullet oficial)</em></h4>
            <p>Antes de definirlos, una aclaración de fuente: esto no es contenido oficial de AWS, viene de un cheat sheet de SkillCertPro, y lo agregamos porque son técnicas reales y muy usadas de interpretabilidad. SHAP y LIME son técnicas de interpretabilidad post-hoc: se aplican a un modelo ya entrenado, incluyendo modelos de caja negra, para aproximar qué tan importante fue cada variable de entrada en una predicción puntual. SHAP se basa en teoría de juegos, para repartir de forma consistente la contribución de cada variable. LIME, en cambio, entrena un modelo simple e interpretable alrededor de una predicción específica, para aproximar el comportamiento local del modelo complejo en ese punto. Ninguna de las dos revela el razonamiento interno real del modelo, sino una aproximación.</p>
            <div class="term-short"><b>En corto</b>Son técnicas para aproximar qué variables influyeron más en una predicción de un modelo de caja negra, sin necesidad de que el modelo sea interpretable por diseño. No forman parte del bullet oficial.</div>
          </div>`,
  },
  {
    id: "gloss-d4-t2-b3",
    html: `<p class="gloss-bullet-text">"Identificar las contrapartidas entre la seguridad del modelo y su transparencia (interpretabilidad frente a desempeño)."</p>

          <div class="term-card">
            <h4>Interpretabilidad frente a desempeño</h4>
            <p>Existe una tensión frecuente en machine learning: los modelos más interpretables, como la regresión lineal o los árboles de decisión poco profundos, suelen tener una capacidad limitada para capturar relaciones complejas en los datos. Mientras tanto, los modelos con mejor desempeño en tareas difíciles, como las redes neuronales profundas o los foundation models, logran esa capacidad justamente a costa de una arquitectura mucho más compleja, e imposible de interpretar directamente.</p>
            <p>Esto crea una contrapartida real al elegir un modelo. Para tareas donde la explicabilidad es un requisito legal o de negocio, por ejemplo, justificar el rechazo de un crédito, puede ser necesario aceptar un desempeño algo menor a cambio de un modelo interpretable. O, alternativamente, se puede usar un modelo de caja negra de alto desempeño, junto con técnicas adicionales, como SageMaker Model Cards o herramientas de interpretabilidad post-hoc, para aproximar una explicación, sabiendo que esa explicación es una aproximación, y no el razonamiento interno real del modelo.</p>
            <div class="term-short"><b>En corto</b>Los modelos más fáciles de interpretar suelen rendir menos en tareas complejas, y los modelos de mejor desempeño, como los FMs, suelen ser los más difíciles de interpretar. Hay que elegir conscientemente ese balance según el caso de uso.</div>
          </div>`,
  },
  {
    id: "gloss-d4-t2-b4",
    html: `<p class="gloss-bullet-text">"Describir los principios del diseño centrado en el humano para una IA explicable (mecanismos de retroalimentación del usuario, transparencia en las decisiones de la IA)."</p>

          <div class="term-card">
            <h4>Mecanismos de retroalimentación del usuario</h4>
            <p>Los mecanismos de retroalimentación del usuario consisten en diseñar el sistema de IA de forma que las personas que lo usan puedan señalar cuándo una salida es incorrecta, inapropiada o no útil — por ejemplo, con un botón de esta respuesta no fue útil, o la posibilidad de corregir una clasificación — y que esa retroalimentación efectivamente se use para mejorar el sistema con el tiempo. Es un principio central del diseño centrado en el humano, aplicado a la IA.</p>
            <div class="term-short"><b>En corto</b>Es dar a los usuarios una forma clara de señalar cuándo una salida de IA está mal, y usar esa retroalimentación para mejorar el sistema.</div>
          </div>

          <div class="term-card">
            <h4>Transparencia en las decisiones de la IA</h4>
            <p>La transparencia en las decisiones de la IA es comunicar abiertamente a las personas afectadas cuándo y cómo se está usando IA en una decisión que las involucra, qué datos informaron esa decisión, y qué mecanismos de control o apelación existen. Esto está alineado con la definición de AWS de transparency, como habilitar una participación informada de los interesados. Incluye, por ejemplo, indicar claramente cuándo un usuario está interactuando con un chatbot de IA y no con una persona.</p>
            <div class="term-short"><b>En corto</b>Es comunicar abiertamente cuándo y cómo se usa IA en una decisión, qué datos la informaron, y qué opciones de control o apelación tiene la persona afectada.</div>
          </div>`,
  },
  {
    id: "gloss-d5-t1-b1",
    html: `<p class="gloss-bullet-text">"Identificar los servicios y funciones de AWS para asegurar sistemas de IA (roles, políticas y permisos de IAM; cifrado; Amazon Macie; AWS PrivateLink; modelo de responsabilidad compartida de AWS; Amazon Bedrock AgentCore Identity; Policy en AgentCore; Amazon Bedrock Guardrails)."</p>

          <div class="term-card">
            <h4>Roles, políticas y permisos de IAM</h4>
            <p>AWS Identity and Access Management, o IAM, controla quién — usuarios, servicios, agentes — puede hacer qué sobre qué recursos de IA o de ML. Un rol es una identidad que un servicio o un agente puede asumir temporalmente. Una política es un documento en formato JSON que define qué permisos están permitidos o denegados. Y el principio de menor privilegio recomienda otorgar solo los permisos estrictamente necesarios — por ejemplo, que una aplicación pueda invocar un modelo de Bedrock, pero no modificar la configuración de la cuenta.</p>
            <div class="term-short"><b>En corto</b>IAM controla quién puede hacer qué sobre los recursos de IA, mediante roles, que son identidades temporales, y políticas, que son permisos definidos, aplicando el principio de menor privilegio.</div>
          </div>

          <div class="term-card">
            <h4>Cifrado</h4>
            <p>El cifrado es proteger los datos y los modelos, tanto en reposo, es decir almacenados, por ejemplo con AWS KMS, como en tránsito, mientras viajan por la red, con TLS. Así, aunque alguien intercepte o acceda al almacenamiento sin autorización, no puede leer la información sin la clave correspondiente.</p>
            <div class="term-short"><b>En corto</b>Es proteger datos y modelos en reposo, con KMS, y en tránsito, con TLS, para que sean ilegibles sin la clave adecuada, incluso si son interceptados.</div>
          </div>

          <div class="term-card">
            <h4>Amazon Macie</h4>
            <p>Amazon Macie es un servicio administrado que usa machine learning y coincidencia de patrones para descubrir, monitorear y proteger datos sensibles — información de identificación personal, información financiera, credenciales — almacenados en Amazon S3. Para sistemas de IA es clave, porque permite detectar datos sensibles en los datasets de entrenamiento, antes de que se usen para entrenar o hacer fine-tuning a un modelo, evitando exponer esa información.</p>
            <div class="term-short"><b>En corto</b>Es un servicio que usa ML para descubrir y proteger datos sensibles en S3 — útil para detectar información personal en datasets antes de usarlos para entrenar un modelo.</div>
          </div>

          <div class="term-card">
            <h4>AWS PrivateLink</h4>
            <p>AWS PrivateLink permite conectar servicios de AWS, como Bedrock o SageMaker, desde una VPC privada, sin que el tráfico salga a la internet pública, creando un endpoint privado dentro de la propia red. Esto reduce la superficie de ataque, y ayuda a cumplir requisitos donde los datos sensibles no pueden transitar por redes públicas.</p>
            <div class="term-short"><b>En corto</b>Conecta servicios de AWS, como Bedrock, desde una red privada sin pasar por internet pública, reduciendo la superficie de ataque.</div>
          </div>

          <div class="term-card">
            <h4>Modelo de responsabilidad compartida de AWS</h4>
            <p>El modelo de responsabilidad compartida de AWS dice esto: AWS es responsable de la seguridad de la nube, es decir, la infraestructura física, el hardware, la red global. El cliente, en cambio, es responsable de la seguridad en la nube: cómo configura IAM, cómo cifra sus datos, qué modelos de Bedrock usa y con qué guardrails, cómo protege sus propias aplicaciones de IA. Entender esta división es clave para no asumir que AWS resuelve automáticamente toda la seguridad del sistema de IA que uno construye sobre sus servicios.</p>
            <div class="term-short"><b>En corto</b>AWS asegura la infraestructura subyacente, la seguridad de la nube. El cliente es responsable de cómo configura y usa esos servicios, la seguridad en la nube, incluyendo sus sistemas de IA.</div>
          </div>

          <div class="term-card">
            <h4>Amazon Bedrock AgentCore Identity</h4>
            <p>Amazon Bedrock AgentCore Identity es un servicio dentro de Bedrock AgentCore para la gestión centralizada de identidades y credenciales de agentes de IA, es decir, identidades no humanas, soportando métodos de autenticación como AWS SigV4, flujos de OAuth 2.0 y API keys. Permite que los agentes accedan de forma segura tanto a servicios de AWS como a herramientas externas, verificando explícitamente cada solicitud de acceso, sin importar su origen.</p>
            <div class="term-short"><b>En corto</b>Es la gestión centralizada de identidades y credenciales para agentes de IA en AgentCore, con soporte para SigV4, OAuth 2.0 y API keys.</div>
          </div>

          <div class="term-card">
            <h4>Policy en AgentCore</h4>
            <p>Al igual que con cualquier otro servicio de AWS, los agentes desplegados en Bedrock AgentCore se rigen por políticas de IAM basadas en identidad, que definen explícitamente qué acciones puede realizar un agente — qué herramientas invocar, qué datos leer o escribir. Esto extiende el modelo estándar de permisos de IAM al contexto específico de los agentes autónomos.</p>
            <div class="term-short"><b>En corto</b>Son las políticas de IAM aplicadas específicamente a los agentes de AgentCore, definiendo qué acciones y herramientas puede usar cada agente.</div>
          </div>

          <div class="term-card">
            <h4>Amazon Bedrock Guardrails (como control de seguridad)</h4>
            <p>A Guardrails ya lo explicamos en el Dominio 4 como herramienta de IA responsable, pero también es, en esencia, un control de seguridad: filtra contenido dañino, bloquea temas prohibidos, redacta información sensible, y detecta intentos de manipular al modelo, funcionando como una capa de defensa activa sobre las entradas y salidas del sistema de IA.</p>
            <div class="term-short"><b>En corto</b>Además de ser una herramienta de IA responsable, Guardrails funciona como control de seguridad activo: filtra contenido dañino, bloquea temas prohibidos y redacta información personal.</div>
          </div>

          <div class="term-card">
            <h4>S3 Block Public Access y AWS IAM Identity Center <em>(extra, no está en el bullet oficial)</em></h4>
            <p>Antes de nada, una aclaración de fuente: esto no es contenido oficial de AWS, viene de unas notas de estudio de Taulli sobre el examen AIF-C01, y lo agregamos porque son controles reales y relevantes para asegurar los datos y el acceso de un sistema de IA. S3 Block Public Access es una configuración a nivel de bucket o de cuenta que impide que los datos guardados en Amazon S3, típicamente los datos de entrenamiento o los artefactos de un modelo, queden expuestos públicamente por error, incluso si alguien configura mal una política o un permiso individual. Actúa como una capa de seguridad que anula esos permisos más permisivos. AWS IAM Identity Center, por su parte, centraliza la gestión de identidades para dar acceso a múltiples cuentas de AWS desde un solo lugar, con la posibilidad de integrarse con un directorio corporativo existente, como Active Directory — relevante cuando un equipo de IA o ML necesita acceso controlado a varias cuentas o proyectos.</p>
            <div class="term-short"><b>En corto</b>S3 Block Public Access evita que los datos de un bucket S3, por ejemplo datos de entrenamiento, queden expuestos por error, aunque alguien configure mal un permiso. IAM Identity Center centraliza el acceso de usuarios a varias cuentas de AWS desde un solo lugar. Ninguno forma parte del bullet oficial.</div>
          </div>`,
  },
  {
    id: "gloss-d5-t1-b2",
    html: `<p class="gloss-bullet-text">"Describir el concepto de citación de fuentes y documentación del origen de los datos (linaje de datos, catalogación de datos, Amazon SageMaker Model Cards)."</p>

          <div class="term-card">
            <h4>Linaje de datos (data lineage)</h4>
            <p>El linaje de datos es el registro de todo el recorrido que siguen los datos desde su origen hasta su uso final: de dónde vinieron, qué transformaciones sufrieron, y en qué modelos o análisis terminaron siendo usados. Esto permite, ante un problema, como un dato incorrecto o un sesgo detectado, rastrear hacia atrás exactamente de dónde vino ese dato y qué se hizo con él. En AWS, servicios como Amazon DataZone ofrecen capacidades de linaje de datos.</p>
            <div class="term-short"><b>En corto</b>Es registrar de dónde vienen los datos y qué transformaciones sufrieron, permitiendo rastrear un problema hasta su origen exacto.</div>
          </div>

          <div class="term-card">
            <h4>Catalogación de datos (data cataloging)</h4>
            <p>La catalogación de datos es mantener un inventario centralizado y buscable de qué datasets existen, dónde están almacenados, qué esquema tienen, y qué significan sus campos. En AWS, esto lo ofrece el AWS Glue Data Catalog, que permite descubrir y documentar automáticamente los metadatos de los datos disponibles para usarlos, por ejemplo, en un pipeline de ML.</p>
            <div class="term-short"><b>En corto</b>Es un inventario centralizado y buscable de qué datasets existen y qué contienen — en AWS, el AWS Glue Data Catalog.</div>
          </div>

          <div class="term-card">
            <h4>Amazon SageMaker Model Cards (para citación de fuentes)</h4>
            <p>A Model Cards ya lo describimos en el Dominio 4 como herramienta de transparencia, pero acá también cumple un rol de citación de fuentes: documenta explícitamente qué datasets se usaron para entrenar un modelo, permitiendo que cualquiera que audite el modelo sepa de dónde provino el conocimiento que codifica.</p>
            <div class="term-short"><b>En corto</b>Model Cards documenta explícitamente qué datasets entrenaron un modelo, funcionando como una forma de citar el origen de sus datos.</div>
          </div>`,
  },
  {
    id: "gloss-d5-t1-b3",
    html: `<p class="gloss-bullet-text">"Describir las buenas prácticas de ingeniería de datos segura (evaluación de la calidad de los datos, tecnologías que mejoran la privacidad, control de acceso a los datos, integridad de los datos)."</p>

          <div class="term-card">
            <h4>Evaluación de la calidad de los datos</h4>
            <p>La evaluación de la calidad de los datos es revisar sistemáticamente los datos antes de usarlos, buscando valores faltantes, duplicados, inconsistencias o errores, porque datos de mala calidad no solo afectan el desempeño del modelo, sino que pueden introducir vulnerabilidades de seguridad si, por ejemplo, contienen datos maliciosos o mal etiquetados sin detectar.</p>
            <div class="term-short"><b>En corto</b>Es revisar sistemáticamente los datos, buscando valores faltantes, duplicados o errores, antes de usarlos, evitando problemas de calidad y de seguridad.</div>
          </div>

          <div class="term-card">
            <h4>Tecnologías que mejoran la privacidad (PETs)</h4>
            <p>Las tecnologías que mejoran la privacidad, o PETs, son técnicas como la anonimización, la seudonimización, el cifrado homomórfico, o el aprendizaje federado, que permiten trabajar con datos sensibles reduciendo el riesgo de exponer información identificable de personas — permitiendo, por ejemplo, entrenar modelos útiles sin necesitar acceso directo a los datos personales en texto plano.</p>
            <div class="term-short"><b>En corto</b>Son técnicas, como la anonimización o el cifrado homomórfico, que permiten trabajar con datos sensibles reduciendo el riesgo de exponer información personal.</div>
          </div>

          <div class="term-card">
            <h4>Control de acceso a los datos</h4>
            <p>El control de acceso a los datos es definir explícitamente quién, ya sean personas, servicios o pipelines, puede leer, escribir o modificar cada conjunto de datos, usando mecanismos como políticas de IAM, permisos a nivel de bucket de S3, o controles de acceso más granulares, a nivel de fila o columna, en servicios como Lake Formation.</p>
            <div class="term-short"><b>En corto</b>Es definir explícitamente quién puede leer, escribir o modificar cada dataset, usando permisos de IAM, S3 o herramientas como Lake Formation.</div>
          </div>

          <div class="term-card">
            <h4>Integridad de los datos</h4>
            <p>La integridad de los datos es garantizar que no sean alterados de forma no autorizada o accidental entre su origen y su uso, mediante técnicas como checksums, versionado de datasets, y registros de auditoría que detecten cualquier modificación inesperada de los datos usados para entrenar o hacer inferencia con un modelo.</p>
            <div class="term-short"><b>En corto</b>Es garantizar que los datos no se alteren de forma no autorizada, usando checksums, versionado y registros de auditoría.</div>
          </div>`,
  },
  {
    id: "gloss-d5-t1-b4",
    html: `<p class="gloss-bullet-text">"Describir las consideraciones de seguridad y privacidad para sistemas de IA (seguridad de aplicaciones, detección de amenazas, gestión de vulnerabilidades, protección de infraestructura, inyección de prompts, cifrado en reposo y en tránsito, prevención de fuga de datos, filtrado y validación de salidas, requisitos de auditoría y registro de interacciones de IA, toxicidad)."</p>

          <div class="term-card">
            <h4>Seguridad de aplicaciones</h4>
            <p>La seguridad de aplicaciones es aplicar las mismas prácticas estándar de seguridad de software — validación de entradas, gestión segura de secretos, control de dependencias — a la capa de la aplicación que envuelve al modelo de IA, no solo al modelo en sí. Un atacante puede explotar la aplicación alrededor del modelo, no solo el modelo.</p>
            <div class="term-short"><b>En corto</b>Es aplicar prácticas estándar de seguridad de software a toda la aplicación que envuelve al modelo, no solo al modelo mismo.</div>
          </div>

          <div class="term-card">
            <h4>Detección de amenazas</h4>
            <p>La detección de amenazas es monitorear de forma continua el sistema de IA en busca de patrones de comportamiento anómalos o maliciosos — intentos de extracción de datos, patrones de uso inusuales — que puedan indicar un ataque en curso, usando herramientas de monitoreo y análisis de logs.</p>
            <div class="term-short"><b>En corto</b>Es monitorear continuamente el sistema en busca de patrones anómalos que indiquen un ataque en curso.</div>
          </div>

          <div class="term-card">
            <h4>Gestión de vulnerabilidades</h4>
            <p>La gestión de vulnerabilidades es identificar, priorizar y remediar de forma proactiva debilidades conocidas en el software, en las dependencias, o en la configuración del sistema de IA, por ejemplo con Amazon Inspector, antes de que puedan ser explotadas.</p>
            <div class="term-short"><b>En corto</b>Es identificar y remediar proactivamente debilidades conocidas en el software o configuración del sistema, antes de que se exploten.</div>
          </div>

          <div class="term-card">
            <h4>Protección de infraestructura</h4>
            <p>La protección de infraestructura es asegurar la capa de red y de cómputo sobre la que corre el sistema de IA: la configuración correcta de VPCs, de grupos de seguridad, de PrivateLink para evitar exposición innecesaria a internet, y la separación de entornos de desarrollo y de producción.</p>
            <div class="term-short"><b>En corto</b>Es asegurar correctamente la red y el cómputo subyacentes — VPCs, grupos de seguridad, PrivateLink — donde corre el sistema de IA.</div>
          </div>

          <div class="term-card">
            <h4>Inyección de prompts (prompt injection)</h4>
            <p>La inyección de prompts, o prompt injection, es un ataque donde se inserta contenido malicioso, ya sea directamente en el prompt del usuario, o indirectamente en un documento que el modelo procesa, por ejemplo vía RAG, con la intención de que el modelo ignore sus instrucciones originales y ejecute las instrucciones del atacante. Es una de las amenazas de seguridad más específicas y más discutidas de los sistemas basados en LLMs.</p>
            <div class="term-short"><b>En corto</b>Es insertar instrucciones maliciosas en un prompt, o en un documento que el modelo procesa, para que ignore sus instrucciones originales.</div>
          </div>

          <div class="term-card">
            <h4>Cifrado en reposo y en tránsito</h4>
            <p>Como ya vimos en el bullet anterior sobre servicios de AWS: cifrar los datos almacenados, en reposo, con KMS, y los datos que viajan por la red, en tránsito, con TLS. Acá esto se aplica específicamente a los datos y comunicaciones de un sistema de IA: prompts, respuestas, embeddings, pesos del modelo.</p>
            <div class="term-short"><b>En corto</b>Es cifrar los datos almacenados, con KMS, y los que viajan por la red, con TLS, incluyendo prompts, respuestas y embeddings del sistema de IA.</div>
          </div>

          <div class="term-card">
            <h4>Prevención de fuga de datos</h4>
            <p>La prevención de fuga de datos es evitar que información sensible salga del sistema sin autorización — ya sea que un modelo revele sin querer datos de entrenamiento confidenciales en sus respuestas, o que un usuario extraiga información sensible mediante prompts diseñados específicamente para ese fin.</p>
            <div class="term-short"><b>En corto</b>Es evitar que información sensible salga del sistema sin autorización, ya sea por diseño del modelo o por prompts diseñados para extraerla.</div>
          </div>

          <div class="term-card">
            <h4>Filtrado y validación de salidas</h4>
            <p>El filtrado y la validación de salidas es revisar automáticamente, por ejemplo con Bedrock Guardrails, la respuesta generada por el modelo antes de entregarla al usuario final, para bloquear o corregir contenido dañino, información sensible expuesta, o salidas que no cumplan con las políticas de la aplicación.</p>
            <div class="term-short"><b>En corto</b>Es revisar automáticamente la salida del modelo antes de entregarla al usuario, bloqueando contenido dañino o información sensible.</div>
          </div>

          <div class="term-card">
            <h4>Requisitos de auditoría y registro de interacciones de IA</h4>
            <p>Los requisitos de auditoría y registro de interacciones de IA implican mantener registros, o logs, detallados de las interacciones con el sistema — qué se preguntó, qué respondió el modelo, qué acciones tomó un agente — tanto para poder investigar incidentes después de que ocurren, como para cumplir con requisitos regulatorios que exigen trazabilidad de las decisiones automatizadas. En AWS, esto se apoya en servicios como AWS CloudTrail.</p>
            <div class="term-short"><b>En corto</b>Es mantener logs detallados de las interacciones con el sistema de IA, tanto para investigar incidentes como para cumplir requisitos regulatorios.</div>
          </div>

          <div class="term-card">
            <h4>Toxicidad</h4>
            <p>La toxicidad es el riesgo de que el modelo genere contenido ofensivo, de odio, sexual o violento. Se mitiga con filtros de contenido específicos para toxicidad, como los que ofrece Amazon Bedrock Guardrails, aplicados tanto a las entradas del usuario como a las salidas del modelo.</p>
            <div class="term-short"><b>En corto</b>Es el riesgo de que el modelo genere contenido ofensivo o dañino. Se mitiga con filtros de contenido específicos, como los de Bedrock Guardrails.</div>
          </div>`,
  },
  {
    id: "gloss-d5-t1-b5",
    html: `<p class="gloss-bullet-text">"Describir métodos de detección de alucinaciones y técnicas de grounding para mejorar la precisión de las salidas (grounding con RAG, validación de salidas, puntuación de confianza)."</p>

          <div class="term-card">
            <h4>Grounding con RAG</h4>
            <p>El grounding con RAG es fundamentar las respuestas del modelo en documentos reales recuperados de una base de conocimiento, en vez de depender únicamente de lo que el modelo recuerda de su entrenamiento. Esto reduce significativamente las alucinaciones, porque la respuesta se genera a partir de contexto verificable. Amazon Bedrock Guardrails incluye además una función específica, llamada contextual grounding check, que compara la respuesta generada contra el material fuente, para detectar cuándo el modelo se desvió del contexto recuperado.</p>
            <div class="term-short"><b>En corto</b>Es fundamentar las respuestas en documentos reales recuperados, con RAG, en vez de solo la memoria del modelo, reduciendo alucinaciones. Bedrock Guardrails incluye una verificación específica de esto.</div>
          </div>

          <div class="term-card">
            <h4>Validación de salidas</h4>
            <p>La validación de salidas es verificar de forma automática o semi-automática que la respuesta del modelo cumple ciertos criterios antes de aceptarla — por ejemplo, comprobar que un dato citado realmente aparece en el documento fuente, que un cálculo es correcto, o que el formato de salida es válido. Funciona como una segunda capa de control después de la generación.</p>
            <div class="term-short"><b>En corto</b>Es verificar automáticamente que la respuesta cumple ciertos criterios, como datos correctos o formato válido, antes de aceptarla, como control posterior a la generación.</div>
          </div>

          <div class="term-card">
            <h4>Puntuación de confianza (confidence scoring)</h4>
            <p>La puntuación de confianza, o confidence scoring, es asignar un valor numérico que indica qué tan segura está la salida del sistema — por ejemplo, qué tan bien respaldado está un fragmento recuperado por RAG, o la probabilidad asociada a una predicción. Esto permite que la aplicación decida automáticamente cuándo mostrar la respuesta con confianza, cuándo advertir al usuario de baja certeza, o cuándo escalar a revisión humana.</p>
            <div class="term-short"><b>En corto</b>Es un valor numérico que indica qué tan segura es una salida, permitiendo decidir cuándo confiar en ella, advertir al usuario, o escalar a revisión humana.</div>
          </div>`,
  },
  {
    id: "gloss-d5-t2-b1",
    html: `<p class="gloss-bullet-text">"Identificar los servicios y funciones de AWS que ayudan con la gobernanza y el cumplimiento normativo (AWS Config, Amazon Inspector, AWS Artifact, AWS CloudTrail, AWS Trusted Advisor)."</p>

          <div class="term-card">
            <h4>AWS Config</h4>
            <p>AWS Config es un servicio que registra y evalúa continuamente la configuración de los recursos de AWS, permitiendo verificar que cumplen con reglas definidas — por ejemplo, que ningún bucket de S3 con datos de entrenamiento sea público — y notificando cuando algo se desvía de la configuración esperada.</p>
            <div class="term-short"><b>En corto</b>Registra y evalúa continuamente la configuración de los recursos de AWS, alertando cuando algo se desvía de las reglas definidas.</div>
          </div>

          <div class="term-card">
            <h4>Amazon Inspector</h4>
            <p>Amazon Inspector es un servicio de gestión de vulnerabilidades que escanea automáticamente cargas de trabajo — instancias EC2, contenedores, funciones Lambda — en busca de vulnerabilidades de software conocidas y de exposición de red no intencionada. Es relevante para asegurar la infraestructura que soporta un sistema de IA.</p>
            <div class="term-short"><b>En corto</b>Escanea automáticamente la infraestructura en busca de vulnerabilidades de software conocidas y exposiciones de red no intencionadas.</div>
          </div>

          <div class="term-card">
            <h4>AWS Audit Manager <em>(extra, no está en el bullet oficial ni en la lista oficial de servicios en alcance)</em></h4>
            <p>Antes de nada, un aviso: el bullet oficial de AWS no menciona a AWS Audit Manager, y tampoco aparece en la lista oficial de servicios en el alcance del examen. Lo agregamos como referencia porque es un servicio real de gobernanza, pero no des por hecho que el examen lo cubre. Dicho esto, AWS Audit Manager automatiza la recolección continua de evidencia sobre cómo se están usando los recursos de AWS, para facilitar la preparación de auditorías frente a marcos regulatorios o de cumplimiento, como PCI DSS o HIPAA, reduciendo el trabajo manual de reunir esa evidencia.</p>
            <div class="term-short"><b>En corto</b>Automatiza la recolección de evidencia de cumplimiento normativo. No forma parte del bullet oficial ni de la lista oficial de servicios en alcance del examen.</div>
          </div>

          <div class="term-card">
            <h4>AWS Artifact</h4>
            <p>AWS Artifact es un portal de autoservicio para descargar los informes de cumplimiento y las certificaciones de seguridad de AWS — SOC, PCI, ISO, entre otros — y para revisar y aceptar acuerdos relevantes de cumplimiento con AWS. Es útil para demostrar a auditores o reguladores en qué certificaciones se apoya la infraestructura subyacente.</p>
            <div class="term-short"><b>En corto</b>Es el portal para descargar los informes y certificaciones de cumplimiento de AWS, como SOC, ISO o PCI, útiles para auditorías propias.</div>
          </div>

          <div class="term-card">
            <h4>AWS CloudTrail</h4>
            <p>AWS CloudTrail registra de forma continua todas las llamadas a la API realizadas en una cuenta de AWS — quién hizo qué, cuándo y desde dónde — incluyendo las invocaciones a servicios de IA como Bedrock o SageMaker, proporcionando el registro de auditoría necesario para investigar incidentes o demostrar cumplimiento.</p>
            <div class="term-short"><b>En corto</b>Registra todas las llamadas a la API en la cuenta, quién hizo qué y cuándo, incluyendo el uso de servicios de IA — la base del registro de auditoría.</div>
          </div>

          <div class="term-card">
            <h4>AWS Trusted Advisor</h4>
            <p>AWS Trusted Advisor analiza la cuenta de AWS y da recomendaciones automatizadas en categorías como costo, desempeño, seguridad, tolerancia a fallos y cuotas de servicio, ayudando a detectar configuraciones subóptimas o riesgosas, incluyendo en los servicios que soportan cargas de trabajo de IA, antes de que se conviertan en un problema.</p>
            <div class="term-short"><b>En corto</b>Da recomendaciones automatizadas sobre costo, seguridad y desempeño de la cuenta, ayudando a detectar configuraciones riesgosas a tiempo.</div>
          </div>`,
  },
  {
    id: "gloss-d5-t2-b2",
    html: `<p class="gloss-bullet-text">"Describir estrategias de gobernanza de datos (ciclos de vida de los datos, registro/logging, residencia de datos, monitoreo, observación, retención)."</p>

          <div class="term-card">
            <h4>Ciclos de vida de los datos</h4>
            <p>Los ciclos de vida de los datos consisten en gestionar explícitamente las distintas etapas por las que pasa un dato — su creación o ingesta, su uso activo, su archivado, y su eventual eliminación — definiendo políticas para cada etapa. Por ejemplo, mover automáticamente datos poco usados a almacenamiento más barato, o eliminarlos después de cierto tiempo.</p>
            <div class="term-short"><b>En corto</b>Es gestionar las etapas por las que pasa un dato — creación, uso, archivado, eliminación — con políticas definidas para cada una.</div>
          </div>

          <div class="term-card">
            <h4>Registro/logging</h4>
            <p>El registro, o logging, es mantener registros sistemáticos de cómo se accede, se modifica y se usa cada dataset, generando un rastro auditable de la actividad sobre los datos — algo similar en espíritu a lo que hace CloudTrail para las APIs, pero enfocado específicamente en el acceso y uso de los datos.</p>
            <div class="term-short"><b>En corto</b>Es mantener un rastro auditable de cómo se accede, modifica y usa cada dataset a lo largo del tiempo.</div>
          </div>

          <div class="term-card">
            <h4>Residencia de datos (data residency)</h4>
            <p>La residencia de datos es garantizar que ciertos datos permanezcan almacenados y se procesen únicamente dentro de una región geográfica o jurisdicción específica, algo frecuentemente exigido por regulaciones locales, como GDPR en la Unión Europea. Es relevante al elegir en qué región de AWS desplegar un sistema de IA y sus datos.</p>
            <div class="term-short"><b>En corto</b>Es garantizar que los datos se almacenen y procesen solo dentro de una región o jurisdicción específica, según lo exijan las regulaciones locales.</div>
          </div>

          <div class="term-card">
            <h4>Monitoreo</h4>
            <p>El monitoreo es vigilar de forma continua el estado, el uso y la calidad de los datos y del sistema de IA en producción, por ejemplo con Amazon CloudWatch, detectando de forma proactiva anomalías, degradación del modelo, es decir model drift, o accesos inusuales.</p>
            <div class="term-short"><b>En corto</b>Es vigilar continuamente el estado y uso de los datos y del sistema en producción, detectando anomalías o degradación de forma proactiva.</div>
          </div>

          <div class="term-card">
            <h4>Observación (observability)</h4>
            <p>La observación, u observability, es ir un paso más allá del monitoreo básico: tener suficiente visibilidad interna del sistema, con métricas, logs y trazas detalladas, como para poder diagnosticar por qué ocurrió un problema, no solo detectar que ocurrió. En AWS, servicios como Amazon Bedrock AgentCore Observability aportan esta visibilidad específicamente para agentes de IA.</p>
            <div class="term-short"><b>En corto</b>Es tener suficiente visibilidad interna, con métricas, logs y trazas, para diagnosticar por qué ocurrió un problema, no solo detectarlo.</div>
          </div>

          <div class="term-card">
            <h4>Retención</h4>
            <p>La retención es definir políticas explícitas sobre cuánto tiempo se conservan los distintos tipos de datos — datos de entrenamiento, logs de interacciones, resultados de auditoría — antes de archivarlos o eliminarlos definitivamente, balanceando los requisitos regulatorios de conservación mínima con los principios de minimización de datos.</p>
            <div class="term-short"><b>En corto</b>Es definir cuánto tiempo se conservan distintos tipos de datos antes de archivarlos o eliminarlos, balanceando regulación y minimización de datos.</div>
          </div>`,
  },
  {
    id: "gloss-d5-t2-b3",
    html: `<p class="gloss-bullet-text">"Describir los procesos para seguir protocolos de gobernanza (políticas, periodicidad y estrategias de revisión, marcos de gobernanza como el Generative AI Security Scoping Matrix, estándares de transparencia, requisitos de capacitación del equipo)."</p>

          <div class="term-card">
            <h4>Políticas</h4>
            <p>Las políticas son documentos formales que definen las reglas y expectativas de la organización sobre cómo se debe desarrollar, desplegar y usar la IA — qué datos se pueden usar, qué modelos están aprobados, qué revisiones son obligatorias antes de producción. Sirven como la base normativa de la gobernanza.</p>
            <div class="term-short"><b>En corto</b>Son documentos formales que definen las reglas de la organización sobre cómo desarrollar, desplegar y usar la IA.</div>
          </div>

          <div class="term-card">
            <h4>Periodicidad y estrategias de revisión</h4>
            <p>La periodicidad y las estrategias de revisión consisten en establecer con qué frecuencia y bajo qué criterios se revisan los sistemas de IA ya desplegados — por ejemplo, cada trimestre, o cuando se detecta una desviación significativa de desempeño — para asegurar que sigan cumpliendo los estándares de la organización a lo largo del tiempo, y no solo en el momento del lanzamiento.</p>
            <div class="term-short"><b>En corto</b>Es definir con qué frecuencia y bajo qué criterios se revisan los sistemas de IA ya en producción, no solo al lanzarlos.</div>
          </div>

          <div class="term-card">
            <h4>Marcos de gobernanza: Generative AI Security Scoping Matrix</h4>
            <p>El Generative AI Security Scoping Matrix es un marco de AWS que ayuda a las organizaciones a evaluar e implementar controles de seguridad a lo largo del ciclo de vida de la IA, según cuánta propiedad y control tienen sobre el modelo y los datos. Define cinco scopes, de menor a mayor control. Scope 1 es usar un servicio de IA de consumo público de terceros, sin acceso ni modificación del modelo. Scope 2 es usar una aplicación de un proveedor con funciones de IA ya embebidas. Scope 3 es construir una aplicación propia usando un foundation model de terceros vía API. Scope 4 es ajustar, con fine-tuning, un modelo de terceros con datos propios. Y Scope 5 es entrenar un modelo propio desde cero, con datos propios.</p>
            <p>El marco cruza estos scopes con cinco disciplinas de seguridad — gobernanza y cumplimiento, legal y privacidad, gestión de riesgos, implementación de controles, y resiliencia — para orientar qué prácticas de seguridad priorizar, según el nivel de control real que se tiene sobre el sistema.</p>
            <div class="term-short"><b>En corto</b>Es un marco de AWS con 5 scopes — de usar una aplicación de IA de terceros hasta entrenar un modelo propio desde cero — que ayuda a priorizar qué controles de seguridad aplicar según cuánto control real se tiene sobre el modelo y los datos.</div>
          </div>

          <div class="term-card">
            <h4>Estándares de transparencia</h4>
            <p>Los estándares de transparencia son definiciones internas de qué información sobre un sistema de IA debe comunicarse, a quién, y con qué nivel de detalle — a usuarios finales, a reguladores, a auditores internos. Por ejemplo, exigir que todo sistema de IA de cara al cliente cuente con una Model Card publicada, o con un aviso claro de que se está interactuando con IA.</p>
            <div class="term-short"><b>En corto</b>Es definir qué información sobre un sistema de IA debe comunicarse, a quién y con qué nivel de detalle, de forma estandarizada en toda la organización.</div>
          </div>

          <div class="term-card">
            <h4>Requisitos de capacitación del equipo</h4>
            <p>Los requisitos de capacitación del equipo son asegurar que las personas que desarrollan, despliegan y operan sistemas de IA reciban capacitación adecuada sobre las políticas de gobernanza, los riesgos específicos de la IA — sesgo, alucinaciones, seguridad — y las herramientas disponibles para mitigarlos. Sin un equipo capacitado, ninguna política de gobernanza se aplica de forma consistente en la práctica.</p>
            <div class="term-short"><b>En corto</b>Es capacitar a quienes desarrollan y operan sistemas de IA en las políticas de gobernanza y los riesgos específicos de la IA, para que las políticas se apliquen en la práctica.</div>
          </div>`,
  },
];

export const glossarySpokenById: Record<string, GlossarySpokenEntry> = Object.fromEntries(
  glossarySpokenEntries.map((e) => [e.id, e]),
);
