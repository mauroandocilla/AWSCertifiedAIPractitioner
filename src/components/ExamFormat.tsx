export default function ExamFormat() {
  return (
    <>
      <section className="scope" id="examformat">
        <span className="eyebrow">Antes de entrar al temario</span>
        <h2 style={{marginTop: '0.4rem', fontSize: '1.5rem'}}>Perfil del candidato y formato del examen</h2>
        <p className="scope-note">Esto no es contenido para "estudiar" como los dominios — es cómo está armado el examen y a quién apunta. Saberlo de antemano evita sorpresas el día del examen y te ayuda a decidir en qué invertir el tiempo de estudio.</p>

        <h3 style={{marginTop: '1.8rem', fontSize: '1.05rem'}}>Perfil del candidato</h3>
        <p className="scope-note">AWS lo diseña para alguien con hasta 6 meses de exposición a IA/ML en AWS. El candidato <em>usa</em> soluciones de IA/ML, pero no necesariamente las construye desde cero.</p>
        <p className="scope-note" style={{marginTop: '0.6rem'}}><strong>Conocimiento de AWS recomendado:</strong></p>
        <ul style={{margin: '0.5rem 0 0', paddingLeft: '1.15rem', color: 'var(--ink-soft)', fontSize: '0.92rem', lineHeight: 1.7}}>
          <li>Familiaridad con servicios core de AWS (Amazon EC2, Amazon S3, AWS Lambda, Amazon Bedrock, Amazon SageMaker AI) y sus casos de uso.</li>
          <li>Familiaridad con el modelo de responsabilidad compartida de AWS para seguridad y cumplimiento.</li>
          <li>Familiaridad con AWS IAM para asegurar y controlar el acceso a recursos.</li>
          <li>Familiaridad con los modelos de precios de los servicios de AWS.</li>
        </ul>

        <h3 style={{marginTop: '1.8rem', fontSize: '1.05rem'}}>Lo que NO se espera que sepas hacer</h3>
        <p className="scope-note">Distinto a los "servicios fuera de alcance": esto son tareas de trabajo que el examen no evalúa, aunque estén relacionadas con IA/ML.</p>
        <ul style={{margin: '0.5rem 0 0', paddingLeft: '1.15rem', color: 'var(--ink-soft)', fontSize: '0.92rem', lineHeight: 1.7}}>
          <li>Programar o codear modelos o algoritmos de IA/ML.</li>
          <li>Implementar ingeniería de datos o de features.</li>
          <li>Hacer hyperparameter tuning u optimización de modelos.</li>
          <li>Construir o desplegar pipelines o infraestructura de IA/ML.</li>
          <li>Hacer análisis matemático o estadístico de modelos de IA/ML.</li>
          <li>Implementar protocolos de seguridad o cumplimiento para sistemas de IA/ML.</li>
          <li>Desarrollar marcos y políticas de gobernanza para soluciones de IA/ML.</li>
        </ul>

        <h3 style={{marginTop: '1.8rem', fontSize: '1.05rem'}}>Tipos de pregunta</h3>
        <p className="scope-note">El examen usa una o más de estas 4 formas — vale la pena reconocerlas antes de llegar, sobre todo "ordenar" y "emparejar", que son menos comunes en otros exámenes.</p>

        <div className="term-card">
          <h4>Opción múltiple (multiple choice)</h4>
          <p>Una respuesta correcta y tres incorrectas (distractores). El formato clásico.</p>
        </div>
        <div className="term-card">
          <h4>Respuesta múltiple (multiple response)</h4>
          <p>Dos o más respuestas correctas entre cinco o más opciones. Hay que marcar <strong>todas</strong> las correctas para que cuente — no hay crédito parcial.</p>
        </div>
        <div className="term-card">
          <h4>Ordenar (ordering)</h4>
          <p>Una lista de 3 a 5 respuestas para completar una tarea. Hay que elegir las correctas <strong>y</strong> ponerlas en el orden correcto.</p>
        </div>
        <div className="term-card">
          <h4>Emparejar (matching)</h4>
          <p>Una lista de respuestas para emparejar con una lista de 3 a 7 conceptos. Hay que acertar todos los pares para que cuente.</p>
        </div>

        <h3 style={{marginTop: '1.8rem', fontSize: '1.05rem'}}>Contenido no puntuado</h3>
        <p className="scope-note">De las 65 preguntas, 15 no puntúan (son experimentales, AWS las usa para evaluarlas a futuro) — pero <strong>no te dicen cuáles son</strong>. No hay forma de identificarlas durante el examen, así que hay que tratar cada pregunta como si contara.</p>

        <h3 style={{marginTop: '1.8rem', fontSize: '1.05rem'}}>Resultado y estrategia de puntaje</h3>
        <p className="scope-note">El puntaje se reporta en una escala de 100 a 1000; para aprobar necesitás 700. Es un modelo de puntaje <strong>compensatorio</strong>: no necesitás aprobar cada dominio por separado, solo el puntaje total del examen.</p>
        <div className="term-short" style={{marginTop: '0.8rem'}}>
          <b>En corto</b>Las preguntas sin responder cuentan como incorrectas y no hay penalidad por adivinar — nunca dejes una pregunta en blanco. Y como el puntaje es compensatorio, si te queda poco tiempo de estudio, priorizá los dominios que más pesan: Dominio 3 (28%) y Dominio 2 (24%) suman más de la mitad del examen entre los dos.
        </div>
      </section>
    </>
  );
}
