# Seguridad y gobernanza de datos e infraestructura

_24 preguntas · Quiz v2 (TutorialsDojo) · AWS Certified AI Practitioner (AIF-C01)_

## Concepto clave

Controles de seguridad para cargas de trabajo de IA en AWS: IAM (permisos), KMS (cifrado), VPC/PrivateLink (tráfico privado), CloudTrail (auditoría de llamadas a la API), Macie (detección de datos sensibles), y los reportes de cumplimiento (AWS Artifact, Audit Manager, Config).

## Truco para reconocerlas

"Quién puede acceder a qué recurso" -> IAM. "Cifrar los datos" -> KMS. "El tráfico no debe salir de la red de AWS" -> VPC Gateway Endpoint / PrivateLink. "Auditar qué llamadas a la API se hicieron" -> CloudTrail. "Detectar PII automáticamente en un bucket de S3" -> Macie. "Reportes oficiales de cumplimiento normativo" -> AWS Artifact.

## Palabras clave

`no debe salir de la red` · `auditar llamadas a la API` · `datos sensibles / PII`

## Preguntas

### 1. Una empresa construyó un servicio de traducción de IA usando múltiples APIs de idiomas, cada una requiriendo claves únicas que deben rotarse trimestralmente. La empresa necesita una forma segura de almacenar, rotar y acceder a estas claves en tiempo de ejecución sin exponerlas en el código. La solución debe integrarse con AWS Lambda.

¿Cuál servicio de AWS ofrece almacenamiento seguro, rotación automática y acceso programático para estas claves de API?

- ✅ **A.** AWS Secrets Manager
- · **B.** Amazon Polly
- · **C.** AWS Artifact
- · **D.** AWS Key Management Service (AWS KMS)

### 2. Una empresa de biotecnología utiliza modelos de machine learning (ML) en AWS para analizar datos genómicos sensibles. Como la empresa opera en múltiples jurisdicciones, debe garantizar el cumplimiento de las leyes locales de rendición de cuentas algorítmica que regulan el uso de ML en datos biológicos personales. Antes de continuar con su investigación, el equipo de auditoría de la empresa debe obtener acceso bajo demanda a la documentación oficial de seguridad y cumplimiento de AWS para verificar la adherencia de AWS a los estándares de seguridad de datos e industria regulatorios. ¿Cuál servicio de AWS puede proporcionar esta información?

- · **A.** AWS Config
- ✅ **B.** AWS Artifact
- · **C.** Amazon Inspector
- · **D.** AWS Trusted Advisor

### 3. Un equipo de ciencia de datos está trabajando en un proyecto de visión por computadora que implica entrenar un modelo de deep learning usando un conjunto grande de imágenes etiquetadas.

¿Cuáles de las siguientes prácticas recomendadas debería seguir el equipo para garantizar la seguridad e integridad de sus datos de entrenamiento? (Selecciona DOS.)

- · **A.** Realizar un análisis exploratorio de datos para identificar y eliminar valores atípicos y anomalías.
- ✅ **B.** Implementar controles de acceso basados en roles para restringir el acceso a datos solo a personal autorizado.
- · **C.** Aprovechar el versionado y las pistas de auditoría para rastrear cambios en el conjunto de datos.
- · **D.** Realizar normalización de datos para estandarizar los formatos e dimensiones de las imágenes.
- ✅ **E.** Usar técnicas de hash criptográfico para verificar la autenticidad de los datos.

### 4. Una empresa ha desplegado una aplicación de IA generativa usando Amazon SageMaker. Debe registrar y auditar todas las actividades de API para cumplimiento normativo y seguridad, incluyendo interacciones con Amazon S3 y DynamoDB.

¿Cuál es el servicio de AWS que la empresa debe usar para lograr esto?

- ✅ **A.** AWS CloudTrail
- · **B.** AWS Audit Manager
- · **C.** AWS Config
- · **D.** Amazon CloudWatch Logs

### 5. Un especialista en IA está construyendo una aplicación de servicio al cliente usando un modelo fine-tuned de Amazon SageMaker JumpStart. El especialista debe asegurar que la aplicación cumpla con múltiples marcos regulatorios, incluyendo el Payment Card Industry Decision Support System (PCI DSS) y el Reglamento General de Protección de Datos (GDPR), para garantizar la seguridad y privacidad de los datos de los clientes.

¿Cuáles capacidades debería priorizar la institución para cumplir con estos requisitos? (Selecciona DOS.)

- · **A.** Interpretabilidad mejorada del modelo
- · **B.** Optimización de costos
- ✅ **C.** Detección de amenazas
- · **D.** Análisis avanzado para monitoreo de modelos
- ✅ **E.** Protección de datos

### 6. Una empresa está implementando un foundation model (FM) y planea hacer fine-tuning del mismo asegurando que todos los datos permanezcan dentro de la región de AWS donde residen. Durante el desarrollo, el equipo también debe abordar los riesgos asociados con prompts ambiguos, que podrían revelar involuntariamente información sensible o producir resultados impredecibles. La solución debe aplicar controles sólidos de privacidad de datos, evitar cualquier exposición a internet durante el fine-tuning y minimizar los costos operacionales.

¿Cuál de las siguientes opciones cumple mejor con los requisitos minimizando costos? (Selecciona DOS.)

- · **A.** Usar un servicio de hosting de modelos de terceros a través de API Gateway.
- · **B.** Usar AWS Outposts para ejecutar el fine-tuning del modelo en las instalaciones.
- ✅ **C.** Usar la API de Amazon Bedrock para hacer fine-tuning del modelo.
- · **D.** Usar un NAT Gateway para habilitar el acceso de fine-tuning en una subred privada.
- ✅ **E.** Configurar un Amazon VPC con AWS PrivateLink.

### 7. Un ingeniero de seguridad en la nube debe asegurar las cargas de trabajo de machine learning (ML) en un entorno de AWS. El ingeniero necesita garantizar que solo aplicaciones y servicios específicos puedan acceder a los recursos de Amazon SageMaker y Amazon RDS. Estas aplicaciones requieren acceso controlado y limitado a estos servicios para mantener la seguridad y minimizar el riesgo de acceso no autorizado. ¿Cuál es la solución de AWS que el ingeniero puede usar para otorgar y gestionar estos permisos de manera efectiva?

- · **A.** AWS Security Token Service (STS)
- · **B.** AWS Secrets Manager
- ✅ **C.** AWS Identity and Access Management (IAM)
- · **D.** Amazon S3 managed keys (SSE-S3)

### 8. Un equipo de ciencia de datos está trabajando en un proyecto de visión por computadora que implica entrenar un modelo de deep learning usando un conjunto grande de imágenes etiquetadas.

¿Cuál de las siguientes mejores prácticas debería seguir el equipo para garantizar la seguridad e integridad de sus datos de entrenamiento? (Selecciona DOS.)

- ✅ **A.** Usar técnicas de hash criptográfico para verificar la autenticidad de los datos.
- ✅ **B.** Implementar controles de acceso basados en roles para restringir el acceso a los datos solo al personal autorizado.
- · **C.** Realizar normalización de datos para estandarizar los formatos e dimensiones de las imágenes.
- · **D.** Aprovechar el versionado y los registros de auditoría para rastrear cambios en el conjunto de datos.
- · **E.** Realizar análisis exploratorio de datos para identificar y eliminar valores atípicos y anomalías.

### 9. Una startup de IA utiliza modelos de IA generativa para crear contenido personalizado. La empresa desarrolla e implementa estos modelos usando Amazon SageMaker, Amazon Bedrock y Amazon Q Business. Siguiendo la AWS Generative AI Security Scoping Matrix para fortalecer la gobernanza y el cumplimiento normativo, el equipo quiere auditar la actividad de API de AWS Service relacionada con cargas de trabajo de IA generativa debido a preocupaciones recientes sobre acceso no autorizado a datos de entrenamiento sensibles y parámetros del modelo.

¿Cuál de los siguientes servicios puede ayudar a la startup a auditar la actividad de API de AWS Service relacionada con cargas de trabajo de IA generativa?

- · **A.** Amazon EKS
- · **B.** AWS Config
- ✅ **C.** AWS CloudTrail
- · **D.** AWS Trusted Advisor

### 10. Una empresa de IA accede a datasets de terceros sobre ciberseguridad y cumplimiento normativo de proveedores de software independientes (ISVs) para mejorar los auditorías de sus modelos de IA. Estos incluyen reportes de cumplimiento, métricas de riesgo e información sobre amenazas. Para gestionar, hacer seguimiento de versiones y tener estos datasets ingeridos fácilmente accesibles en sus flujos de trabajo de auditoría de ML, la empresa utiliza Amazon SageMaker Feature Store como repositorio centralizado para almacenar y registrar estas features a lo largo del tiempo. La empresa desea recibir notificaciones cuando se publiquen nuevas versiones de los datasets.

¿Qué servicio de AWS se puede utilizar para habilitar esta configuración?

- · **A.** Amazon Augmented AI (Amazon A2I)
- ✅ **B.** AWS Data Exchange
- · **C.** AWS Config
- · **D.** AWS Artifact

### 11. Una empresa está desarrollando una aplicación de IA generativa a través de modelos personalizados en Amazon Bedrock y gestionando metadatos para el proceso de entrenamiento con Amazon DynamoDB. Como parte de los trabajos de personalización de modelos, la empresa sigue las recomendaciones de AWS Well-Architected Tool para mejorar la seguridad y busca asegurar que los artefactos del modelo estén protegidos con una clave de cifrado administrada por la empresa. ¿Cuál de las siguientes opciones cumpliría estas condiciones?

- · **A.** Amazon S3 Managed Keys (SSE-S3)
- · **B.** AWS Secrets Manager
- ✅ **C.** AWS Key Management Service (KMS)
- · **D.** AWS CloudTrail

### 12. Una startup de biotecnología tiene una aplicación de ML en AWS que analiza datos de pacientes en tiempo real para pronosticar tendencias del mercado en la demanda de medicamentos. Como la aplicación maneja Información de Salud Protegida (PHI), la empresa debe evaluar los requisitos de cumplimiento según las regulaciones HIPAA y FDA mientras asegura un desarrollo seguro.

¿Cuáles servicios de AWS pueden ayudar a la startup a monitorear continuamente el cumplimiento mientras se mantienen las mejores prácticas de seguridad? (Selecciona DOS.)

- · **A.** Amazon Comprehend Medical
- ✅ **B.** AWS Audit Manager
- ✅ **C.** AWS Config
- · **D.** Amazon Macie
- · **E.** AWS Trusted Advisor

### 13. Una institución financiera aloja sus cargas de trabajo de IA generativa en AWS. Los reguladores solicitan reportes oficiales de cumplimiento de AWS que confirmen la adherencia de la plataforma en la nube a los requisitos de protección de datos. ¿Cuál es el servicio de AWS que mejor aborda esta necesidad?

- · **A.** AWS Audit Manager
- · **B.** Amazon Macie
- · **C.** AWS Key Management Service (KMS)
- ✅ **D.** AWS Artifact

### 14. Una empresa de tecnología está implementando un nuevo modelo de IA generativa para interacciones con clientes y necesita asegurar la seguridad del sistema contra diversas vulnerabilidades.

El equipo de seguridad de ML tiene la tarea de identificar las vulnerabilidades de seguridad más críticas que podrían afectar el desempeño e integridad del modelo de IA.

¿Cuáles son las vulnerabilidades que la empresa debería priorizar? (Selecciona TRES.)

- ✅ **A.** Prompt Injection
- · **B.** Excessive agency
- ✅ **C.** Training data poisoning
- ✅ **D.** Model denial of service
- · **E.** Model theft
- · **F.** Overreliance on AI capabilities

### 15. Una empresa está desarrollando una nueva aplicación impulsada por IA que debe cumplir con varios estándares industriales y regulaciones. Para garantizar el cumplimiento, necesitan acceder y revisar la documentación de cumplimiento normativo y los acuerdos de AWS.

¿Cuál de las siguientes opciones debería utilizarse para obtener estos documentos?

- · **A.** AWS Config
- · **B.** AWS Audit Manager
- · **C.** AWS CloudTrail
- ✅ **D.** AWS Artifact

### 16. Una empresa fintech está desarrollando un sistema basado en IA para detectar actividades fraudulentas. La empresa debe implementar medidas de seguridad para garantizar la integridad de los datos, proteger la privacidad de los usuarios y cumplir con la normativa. El objetivo es alinear las estrategias de seguridad con las capacidades de seguridad fundamentales relevantes.

Asociá cada capacidad de seguridad fundamental con su estrategia relevante para asegurar el sistema de detección de fraude basado en IA. Cada capacidad debe seleccionarse una sola vez. (Seleccioná TRES.)

| Elemento | Respuesta correcta |
|---|---|
| Garantiza que se mantenga la visibilidad, el acceso seguro y el control sobre los datos utilizados para el desarrollo e implementación de IA. | **Protección de datos** |
| Implementá herramientas de monitoreo en tiempo real y detección de anomalías para identificar y responder a posibles incidentes de seguridad en cargas de trabajo de IA. | **Detección de amenazas** |
| Garantiza que las vulnerabilidades se identifiquen y se aborden a lo largo del ciclo de vida del desarrollo de software para cargas de trabajo de IA. | **Seguridad de aplicaciones** |

### 17. Una organización de salud está en proceso de migrar su sistema de gestión de pacientes a AWS. Como parte de sus esfuerzos de cumplimiento normativo y debida diligencia, debe asegurar que todos los servicios y soluciones de AWS que planea utilizar cumplan con diversas regulaciones sanitarias, como HIPAA y HITRUST. La organización también trabaja con proveedores independientes de software (ISVs) que necesitan verificar el cumplimiento con los servicios de AWS que tienen intención de integrar. La organización debe obtener documentación de seguridad y cumplimiento de AWS para cumplir con estos requisitos regulatorios y demostrar cumplimiento a los auditores.

¿Cuál servicio de AWS puede utilizar esta organización para acceder a los reportes de seguridad y cumplimiento necesarios?

- · **A.** Amazon Macie
- ✅ **B.** AWS Artifact
- · **C.** AWS CloudTrail
- · **D.** AWS Security Hub

### 18. Un equipo de ciencia de datos está entrenando modelos de machine learning con instancias de notebook de Amazon SageMaker. Los datasets se encuentran en Amazon S3. El equipo debe garantizar que el tráfico de datos permanezca completamente dentro de la red de AWS debido a requisitos de seguridad y cumplimiento normativo.

¿Cuál es la solución que proporciona la arquitectura más efectiva y rentable para este requisito?

- ✅ **A.** Lanzar instancias de notebook de SageMaker en una VPC que incluya un Gateway Endpoint para S3.
- · **B.** Usar AWS PrivateLink para conectar instancias de notebook de SageMaker a S3 de forma segura.
- · **C.** Archivar los datasets en S3 Glacier Deep Archive para optimizar la recuperación de datos en instancias de notebook de SageMaker.
- · **D.** Establecer VPC peering entre la VPC de las instancias de notebook de SageMaker y una VPC que aloje S3 para facilitar el acceso a los datos.

### 19. Asociá el servicio o característica de AWS que corresponda con cada requisito relacionado a construir y asegurar una aplicación de IA generativa usando Amazon Bedrock. Cada opción se puede usar una vez, más de una vez, o no usarse. (Selecciona TRES)

| Elemento | Respuesta correcta |
|---|---|
| Implementar control de acceso basado en roles para los recursos de tu aplicación de IA. | **AWS Identity and Access Management (IAM)** |
| Definir políticas para evitar la generación de contenido explícito u ofensivo. | **Amazon Bedrock Content Guardrails** |
| Encriptar los datos utilizados para entrenamiento e inferencia en tus modelos de IA | **AWS Key Management Service (KMS)** |

### 20. Una empresa de servicios financieros almacena formularios de retroalimentación de clientes en Amazon S3. Estos formularios se envían a través de un portal web alojado en Amazon API Gateway y frecuentemente contienen datos sensibles como números de seguro social y detalles de tarjetas de crédito. El objetivo es detectar automáticamente y alertar sobre la presencia de datos sensibles en los formularios cargados con el mínimo esfuerzo de desarrollo.

¿Cuál de las siguientes opciones cumplirá con los requisitos establecidos?

- ✅ **A.** Usar Amazon Macie para monitorear el bucket de S3 en busca de datos sensibles y entregar alertas cuando se detecten.
- · **B.** Usar AWS Glue para crear un trabajo ETL personalizado que detecte y oculte datos sensibles en los formularios cargados antes de almacenarlos en S3.
- · **C.** Usar Amazon Comprehend para analizar el texto en busca de datos sensibles y activar alertas a través de una función AWS Lambda.
- · **D.** Implementar un small language model (SLM) en un endpoint de Amazon SageMaker AI para analizar los formularios cargados en busca de datos sensibles y generar alertas.

### 21. Una institución financiera debe asegurar que los datos transferidos desde Amazon S3 a una instancia de Amazon SageMaker para entrenar modelos de machine learning no salgan de la red de AWS, cumpliendo con requisitos de conformidad estrictos. La institución requiere un endpoint de S3 dedicado para enrutar todo el tráfico de datos de entrenamiento de forma privada dentro de la red de AWS.

¿Cuál solución de AWS cumplirá este requisito de la forma más efectiva?

- · **A.** Amazon CloudFront Distribution
- · **B.** S3 Access Point
- ✅ **C.** Amazon VPC Gateway Endpoint
- · **D.** S3 Transfer Acceleration

### 22. Una empresa confía fuertemente en modelos de machine learning para hacer recomendaciones personalizadas y detectar fraudes. La empresa almacena datos sensibles en buckets de Amazon S3 y necesita una solución que automáticamente descubra, clasifique y proteja estos datos sensibles. La empresa está preocupada por el robo de modelos a partir de datos de entrenamiento expuestos.

¿Cuál de las siguientes opciones es la MÁS adecuada para este caso de uso?

- · **A.** Amazon Kinesis
- ✅ **B.** Amazon Macie
- · **C.** AWS Config
- · **D.** Amazon Inspector

### 23. Una empresa está usando Amazon Bedrock para machine learning y AWS Lambda para flujos de trabajo impulsados por eventos. La empresa debe registrar todas las solicitudes a la API de Bedrock e invocaciones de Lambda, asegurando que los registros se mantengan de forma segura durante 3 años con costos de almacenamiento mínimos.

¿Cuál de las siguientes opciones cumplirá con los requisitos dados? (Selecciona DOS.)

- ✅ **A.** Amazon S3 Intelligent-Tiering
- ✅ **B.** AWS CloudTrail
- · **C.** Amazon CloudWatch
- · **D.** Amazon S3 Glacier Deep Archive
- · **E.** AWS Config

### 24. Una organización de salud está desarrollando una aplicación de diagnóstico impulsada por IA aprovechando Amazon Bedrock. La aplicación se implementa dentro de una VPC que debe cumplir con regulaciones estrictas de privacidad de datos. Estas regulaciones prohíben cualquier conectividad a internet hacia o desde la VPC.

¿Qué servicio o característica de AWS satisfará estos objetivos?

- ✅ **A.** AWS PrivateLink
- · **B.** Internet gateway
- · **C.** AWS Direct Connect
- · **D.** Amazon S3 VPC Endpoint

---

[← Volver al índice](./README.md)
