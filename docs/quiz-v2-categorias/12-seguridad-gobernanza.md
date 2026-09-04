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

**Por qué:** Secrets Manager también proporciona integración integrada con AWS Identity and Access Management (IAM) para control de acceso granular y auditoría a través de AWS CloudTrail.

**Por qué no las demás:**
- **B.** Es un servicio que solo convierte texto en voz realista usando deep learning.
- **C.** Se utiliza principalmente para recuperar reportes de cumplimiento y documentos de auditoría relacionados con servicios de AWS.
- **D.** Típicamente se utiliza para crear y administrar claves criptográficas para encriptación de datos.

### 2. Una empresa de biotecnología utiliza modelos de machine learning (ML) en AWS para analizar datos genómicos sensibles. Como la empresa opera en múltiples jurisdicciones, debe garantizar el cumplimiento de las leyes locales de rendición de cuentas algorítmica que regulan el uso de ML en datos biológicos personales. Antes de continuar con su investigación, el equipo de auditoría de la empresa debe obtener acceso bajo demanda a la documentación oficial de seguridad y cumplimiento de AWS para verificar la adherencia de AWS a los estándares de seguridad de datos e industria regulatorios. ¿Cuál servicio de AWS puede proporcionar esta información?

- · **A.** AWS Config
- ✅ **B.** AWS Artifact
- · **C.** Amazon Inspector
- · **D.** AWS Trusted Advisor

**Por qué:** Las organizaciones pueden descargar estos reportes de cumplimiento y acuerdos utilizando AWS Artifact para satisfacer auditorías internas y revisiones regulatorias.

**Por qué no las demás:**
- **A.** Este servicio se utiliza únicamente para evaluar, auditar y revisar las configuraciones de tus recursos de AWS en lugar de proporcionar reportes de cumplimiento.
- **C.** Esta opción es un servicio de evaluación de seguridad que ayuda a analizar el estado de seguridad de instancias EC2 identificando posibles vulnerabilidades.
- **D.** Está diseñada principalmente para proporcionar orientación sobre mejores prácticas en tiempo real para ayudarte a optimizar tu entorno de AWS.

### 3. Un equipo de ciencia de datos está trabajando en un proyecto de visión por computadora que implica entrenar un modelo de deep learning usando un conjunto grande de imágenes etiquetadas.

¿Cuáles de las siguientes prácticas recomendadas debería seguir el equipo para garantizar la seguridad e integridad de sus datos de entrenamiento? (Selecciona DOS.)

- · **A.** Realizar un análisis exploratorio de datos para identificar y eliminar valores atípicos y anomalías.
- ✅ **B.** Implementar controles de acceso basados en roles para restringir el acceso a datos solo a personal autorizado.
- · **C.** Aprovechar el versionado y las pistas de auditoría para rastrear cambios en el conjunto de datos.
- · **D.** Realizar normalización de datos para estandarizar los formatos e dimensiones de las imágenes.
- ✅ **E.** Usar técnicas de hash criptográfico para verificar la autenticidad de los datos.

**Por qué:** **B. Implementar controles de acceso basados en roles para restringir el acceso a datos solo a personal autorizado** -- restringe el acceso a los datos de entrenamiento solo a personal autorizado; **E. Usar técnicas de hash criptográfico para verificar la autenticidad de los datos** -- un hash (SHA-256, MD5) permite detectar si los datos fueron alterados sin autorización.

**Por qué no las demás:**
- **A.** El análisis exploratorio de datos (EDA) es una técnica valiosa para entender las características de los datos e identificar posibles problemas.
- **C.** Deja un registro de cambios, pero no previene accesos ni modificaciones no autorizadas.
- **D.** Mejora la consistencia de los datos para el entrenamiento, pero no aporta seguridad ni integridad.

### 4. Una empresa ha desplegado una aplicación de IA generativa usando Amazon SageMaker. Debe registrar y auditar todas las actividades de API para cumplimiento normativo y seguridad, incluyendo interacciones con Amazon S3 y DynamoDB.

¿Cuál es el servicio de AWS que la empresa debe usar para lograr esto?

- ✅ **A.** AWS CloudTrail
- · **B.** AWS Audit Manager
- · **C.** AWS Config
- · **D.** Amazon CloudWatch Logs

**Por qué:** AWS CloudTrail está diseñado específicamente para registrar y monitorear las llamadas a API realizadas dentro de tu cuenta de AWS.

**Por qué no las demás:**
- **B.** Este servicio solo te ayuda a auditar continuamente tu uso de AWS para simplificar la manera en que evalúas el riesgo y el cumplimiento.
- **C.** AWS Config se utiliza principalmente para evaluar, auditar y examinar las configuraciones de tus recursos de AWS.
- **D.** Este servicio se utiliza para monitorear, almacenar y acceder a archivos de registro de varios servicios de AWS y aplicaciones.

### 5. Un especialista en IA está construyendo una aplicación de servicio al cliente usando un modelo fine-tuned de Amazon SageMaker JumpStart. El especialista debe asegurar que la aplicación cumpla con múltiples marcos regulatorios, incluyendo el Payment Card Industry Decision Support System (PCI DSS) y el Reglamento General de Protección de Datos (GDPR), para garantizar la seguridad y privacidad de los datos de los clientes.

¿Cuáles capacidades debería priorizar la institución para cumplir con estos requisitos? (Selecciona DOS.)

- · **A.** Interpretabilidad mejorada del modelo
- · **B.** Optimización de costos
- ✅ **C.** Detección de amenazas
- · **D.** Análisis avanzado para monitoreo de modelos
- ✅ **E.** Protección de datos

**Por qué:** **C. Detección de amenazas** -- identificar amenazas de seguridad es un requisito explícito de marcos como PCI DSS y GDPR; **E. Protección de datos** -- cifrado (KMS) y control de acceso granular (IAM) son justo lo que exige la protección de datos bajo GDPR.

**Por qué no las demás:**
- **A.** Ayuda con transparencia del modelo, pero no cubre los mandatos de seguridad y protección de datos de PCI DSS/GDPR.
- **B.** Optimizar costos no tiene relación con el cumplimiento de requisitos regulatorios.
- **D.** Detecta drift o sesgo del modelo, pero no cubre riesgos de seguridad ni privacidad de datos.

### 6. Una empresa está implementando un foundation model (FM) y planea hacer fine-tuning del mismo asegurando que todos los datos permanezcan dentro de la región de AWS donde residen. Durante el desarrollo, el equipo también debe abordar los riesgos asociados con prompts ambiguos, que podrían revelar involuntariamente información sensible o producir resultados impredecibles. La solución debe aplicar controles sólidos de privacidad de datos, evitar cualquier exposición a internet durante el fine-tuning y minimizar los costos operacionales.

¿Cuál de las siguientes opciones cumple mejor con los requisitos minimizando costos? (Selecciona DOS.)

- · **A.** Usar un servicio de hosting de modelos de terceros a través de API Gateway.
- · **B.** Usar AWS Outposts para ejecutar el fine-tuning del modelo en las instalaciones.
- ✅ **C.** Usar la API de Amazon Bedrock para hacer fine-tuning del modelo.
- · **D.** Usar un NAT Gateway para habilitar el acceso de fine-tuning en una subred privada.
- ✅ **E.** Configurar un Amazon VPC con AWS PrivateLink.

**Por qué:** **C. Usar la API de Amazon Bedrock para hacer fine-tuning del modelo** -- Con la experiencia serverless de Amazon Bedrock, puedes empezar rápidamente; **E. Configurar un Amazon VPC con AWS PrivateLink** -- Amazon Virtual Private Cloud (Amazon VPC) te permite lanzar recursos de AWS dentro de una red virtual lógicamente aislada que defines.

**Por qué no las demás:**
- **A.** Enruta datos a través de internet pública y servicios externos.
- **B.** Aunque mantiene los datos seguros y locales, introduce costos significativos de infraestructura y operacionales.
- **D.** Un NAT Gateway principalmente permite tráfico de salida a internet desde subredes privadas, lo que contradice el requisito de evitar exposición a internet.

### 7. Un ingeniero de seguridad en la nube debe asegurar las cargas de trabajo de machine learning (ML) en un entorno de AWS. El ingeniero necesita garantizar que solo aplicaciones y servicios específicos puedan acceder a los recursos de Amazon SageMaker y Amazon RDS. Estas aplicaciones requieren acceso controlado y limitado a estos servicios para mantener la seguridad y minimizar el riesgo de acceso no autorizado. ¿Cuál es la solución de AWS que el ingeniero puede usar para otorgar y gestionar estos permisos de manera efectiva?

- · **A.** AWS Security Token Service (STS)
- · **B.** AWS Secrets Manager
- ✅ **C.** AWS Identity and Access Management (IAM)
- · **D.** Amazon S3 managed keys (SSE-S3)

**Por qué:** AWS Identity and Access Management (IAM) permite a los administradores definir y aplicar permisos para los servicios y recursos de AWS.

**Por qué no las demás:**
- **A.** Simplemente proporciona credenciales temporales para acceder a servicios de AWS.
- **B.** Se utiliza principalmente para almacenar y gestionar el acceso a información sensible como credenciales de bases de datos y claves de API.
- **D.** Solo cifra objetos de S3 en reposo utilizando claves administradas por AWS, no otorga ni gestiona el acceso a servicios.

### 8. Un equipo de ciencia de datos está trabajando en un proyecto de visión por computadora que implica entrenar un modelo de deep learning usando un conjunto grande de imágenes etiquetadas.

¿Cuál de las siguientes mejores prácticas debería seguir el equipo para garantizar la seguridad e integridad de sus datos de entrenamiento? (Selecciona DOS.)

- ✅ **A.** Usar técnicas de hash criptográfico para verificar la autenticidad de los datos.
- ✅ **B.** Implementar controles de acceso basados en roles para restringir el acceso a los datos solo al personal autorizado.
- · **C.** Realizar normalización de datos para estandarizar los formatos e dimensiones de las imágenes.
- · **D.** Aprovechar el versionado y los registros de auditoría para rastrear cambios en el conjunto de datos.
- · **E.** Realizar análisis exploratorio de datos para identificar y eliminar valores atípicos y anomalías.

**Por qué:** **A. Usar técnicas de hash criptográfico para verificar la autenticidad de los datos** -- Complementando los controles de acceso, las técnicas de hash criptográfico como SHA-256 o MD5 proporcionan una forma de verificar la autenticidad e integridad de los datos; **B. Implementar controles de acceso basados en roles para restringir el acceso a los datos solo al personal autorizado** -- Los controles de acceso basados en roles restringen el acceso a los datos solo al personal autorizado.

**Por qué no las demás:**
- **C.** Mejora la consistencia de los datos para el entrenamiento, pero no aporta seguridad ni integridad.
- **D.** Deja un registro de cambios, pero no previene accesos ni modificaciones no autorizadas.
- **E.** El análisis exploratorio de datos (EDA) es una técnica valiosa para entender las características de los datos e identificar problemas potenciales.

### 9. Una startup de IA utiliza modelos de IA generativa para crear contenido personalizado. La empresa desarrolla e implementa estos modelos usando Amazon SageMaker, Amazon Bedrock y Amazon Q Business. Siguiendo la AWS Generative AI Security Scoping Matrix para fortalecer la gobernanza y el cumplimiento normativo, el equipo quiere auditar la actividad de API de AWS Service relacionada con cargas de trabajo de IA generativa debido a preocupaciones recientes sobre acceso no autorizado a datos de entrenamiento sensibles y parámetros del modelo.

¿Cuál de los siguientes servicios puede ayudar a la startup a auditar la actividad de API de AWS Service relacionada con cargas de trabajo de IA generativa?

- · **A.** Amazon EKS
- · **B.** AWS Config
- ✅ **C.** AWS CloudTrail
- · **D.** AWS Trusted Advisor

**Por qué:** Al habilitar CloudTrail, la startup puede monitorear y auditar la actividad de API relacionada con sus cargas de trabajo de IA.

**Por qué no las demás:**
- **A.** Es un servicio administrado para ejecutar aplicaciones containerizadas con Kubernetes.
- **B.** AWS Config proporciona una vista detallada de los recursos de AWS y sus configuraciones.
- **D.** Solo proporciona recomendaciones para ayudar a optimizar recursos de AWS en términos de costo, rendimiento, seguridad, tolerancia a fallos y cuotas de servicio.

### 10. Una empresa de IA accede a datasets de terceros sobre ciberseguridad y cumplimiento normativo de proveedores de software independientes (ISVs) para mejorar los auditorías de sus modelos de IA. Estos incluyen reportes de cumplimiento, métricas de riesgo e información sobre amenazas. Para gestionar, hacer seguimiento de versiones y tener estos datasets ingeridos fácilmente accesibles en sus flujos de trabajo de auditoría de ML, la empresa utiliza Amazon SageMaker Feature Store como repositorio centralizado para almacenar y registrar estas features a lo largo del tiempo. La empresa desea recibir notificaciones cuando se publiquen nuevas versiones de los datasets.

¿Qué servicio de AWS se puede utilizar para habilitar esta configuración?

- · **A.** Amazon Augmented AI (Amazon A2I)
- ✅ **B.** AWS Data Exchange
- · **C.** AWS Config
- · **D.** AWS Artifact

**Por qué:** A través de AWS Data Exchange, las organizaciones pueden incorporar sin problemas datasets externos en sus flujos de procesamiento de datos sin requerir esfuerzos de integración complejos.

**Por qué no las demás:**
- **A.** Se utiliza principalmente para gestionar flujos de trabajo de revisión humana para predicciones de ML.
- **C.** Se enfoca principalmente en el seguimiento y monitoreo del cumplimiento de configuración de recursos de AWS.
- **D.** Solo proporciona acceso a reportes de cumplimiento de AWS y documentación de seguridad relacionada con servicios de AWS.

### 11. Una empresa está desarrollando una aplicación de IA generativa a través de modelos personalizados en Amazon Bedrock y gestionando metadatos para el proceso de entrenamiento con Amazon DynamoDB. Como parte de los trabajos de personalización de modelos, la empresa sigue las recomendaciones de AWS Well-Architected Tool para mejorar la seguridad y busca asegurar que los artefactos del modelo estén protegidos con una clave de cifrado administrada por la empresa. ¿Cuál de las siguientes opciones cumpliría estas condiciones?

- · **A.** Amazon S3 Managed Keys (SSE-S3)
- · **B.** AWS Secrets Manager
- ✅ **C.** AWS Key Management Service (KMS)
- · **D.** AWS CloudTrail

**Por qué:** KMS se integra con AWS Identity and Access Management (IAM) para control de acceso granular y proporciona capacidades de logging a través de AWS CloudTrail.

**Por qué no las demás:**
- **A.** Proporciona cifrado con claves administradas por AWS, que no permiten a los clientes administrar o controlar las claves de cifrado.
- **B.** Está diseñada principalmente para almacenar, administrar y rotar de manera segura información sensible como claves de API.
- **D.** Se utiliza típicamente para logging y auditoría de llamadas a API en servicios de AWS para proporcionar visibilidad en la actividad de la cuenta.

### 12. Una startup de biotecnología tiene una aplicación de ML en AWS que analiza datos de pacientes en tiempo real para pronosticar tendencias del mercado en la demanda de medicamentos. Como la aplicación maneja Información de Salud Protegida (PHI), la empresa debe evaluar los requisitos de cumplimiento según las regulaciones HIPAA y FDA mientras asegura un desarrollo seguro.

¿Cuáles servicios de AWS pueden ayudar a la startup a monitorear continuamente el cumplimiento mientras se mantienen las mejores prácticas de seguridad? (Selecciona DOS.)

- · **A.** Amazon Comprehend Medical
- ✅ **B.** AWS Audit Manager
- ✅ **C.** AWS Config
- · **D.** Amazon Macie
- · **E.** AWS Trusted Advisor

**Por qué:** **B. AWS Audit Manager** -- AWS Audit Manager se enfoca en los aspectos de documentación y reporte del cumplimiento, proporcionando evidencia estructurada para auditorías; **C. AWS Config** -- AWS Config enfatiza el cumplimiento operativo monitoreando estados de recursos y detectando desviación de configuración.

**Por qué no las demás:**
- **A.** Está diseñado principalmente para procesamiento de lenguaje natural (NLP) de textos médicos.
- **D.** Es un servicio de clasificación de datos que identifica dónde se almacena información sensible como PHI.
- **E.** Solo proporciona recomendaciones genéricas de mejores prácticas.

### 13. Una institución financiera aloja sus cargas de trabajo de IA generativa en AWS. Los reguladores solicitan reportes oficiales de cumplimiento de AWS que confirmen la adherencia de la plataforma en la nube a los requisitos de protección de datos. ¿Cuál es el servicio de AWS que mejor aborda esta necesidad?

- · **A.** AWS Audit Manager
- · **B.** Amazon Macie
- · **C.** AWS Key Management Service (KMS)
- ✅ **D.** AWS Artifact

**Por qué:** A través de AWS Artifact, los clientes pueden acceder a documentos como reportes SOC, certificaciones ISO y atestaciones PCI DSS.

**Por qué no las demás:**
- **A.** Está diseñado para automatizar la recopilación de evidencia de auditoría dentro del entorno AWS de un cliente y asignar controles a marcos de cumplimiento.
- **B.** Es principalmente un servicio de seguridad de datos que descubre y clasifica datos sensibles en Amazon S3.
- **C.** Se enfoca únicamente en crear y gestionar claves de encriptación utilizadas para proteger datos.

### 14. Una empresa de tecnología está implementando un nuevo modelo de IA generativa para interacciones con clientes y necesita asegurar la seguridad del sistema contra diversas vulnerabilidades.

El equipo de seguridad de ML tiene la tarea de identificar las vulnerabilidades de seguridad más críticas que podrían afectar el desempeño e integridad del modelo de IA.

¿Cuáles son las vulnerabilidades que la empresa debería priorizar? (Selecciona TRES.)

- ✅ **A.** Prompt Injection
- · **B.** Excessive agency
- ✅ **C.** Training data poisoning
- ✅ **D.** Model denial of service
- · **E.** Model theft
- · **F.** Overreliance on AI capabilities

**Por qué:** **A. Prompt Injection** -- Prompt Injection implica manipular los prompts de entrada del modelo de IA para lograr que produzca resultados inesperados o dañinos; **C. Training data poisoning** -- Training data poisoning implica que atacantes manipulen los datos de entrenamiento para corromper el proceso de aprendizaje del modelo de IA; **D. Model denial of service** -- Model denial of service implica sobrecargar el sistema de IA con solicitudes excesivas o maliciosas para agotar sus recursos computacionales.

**Por qué no las demás:**
- **B.** Se refiere principalmente a la idea de que la IA podría excederse o se le otorgue demasiada autoridad.
- **E.** No impacta inmediatamente el desempeño, comportamiento o disponibilidad del modelo.
- **F.** Si bien la dependencia excesiva podría conducir a problemas de toma de decisiones o eficiencia operativa.

### 15. Una empresa está desarrollando una nueva aplicación impulsada por IA que debe cumplir con varios estándares industriales y regulaciones. Para garantizar el cumplimiento, necesitan acceder y revisar la documentación de cumplimiento normativo y los acuerdos de AWS.

¿Cuál de las siguientes opciones debería utilizarse para obtener estos documentos?

- · **A.** AWS Config
- · **B.** AWS Audit Manager
- · **C.** AWS CloudTrail
- ✅ **D.** AWS Artifact

**Por qué:** Los Proveedores Independientes de Software (ISVs) que desarrollan sobre AWS pueden aprovechar AWS Artifact para acceder a reportes de seguridad y cumplimiento normativo de sus aplicaciones.

**Por qué no las demás:**
- **A.** Este servicio te permite evaluar, auditar y revisar las configuraciones de tus recursos de AWS.
- **B.** Ayuda a auditar continuamente tu uso de AWS, pero no da acceso a los documentos de cumplimiento en sí.
- **C.** Típicamente permite gobernanza, cumplimiento normativo, y auditoría operativa y de riesgos de tu cuenta de AWS.

### 16. Una empresa fintech está desarrollando un sistema basado en IA para detectar actividades fraudulentas. La empresa debe implementar medidas de seguridad para garantizar la integridad de los datos, proteger la privacidad de los usuarios y cumplir con la normativa. El objetivo es alinear las estrategias de seguridad con las capacidades de seguridad fundamentales relevantes.

Asociá cada capacidad de seguridad fundamental con su estrategia relevante para asegurar el sistema de detección de fraude basado en IA. Cada capacidad debe seleccionarse una sola vez. (Seleccioná TRES.)

| Elemento | Respuesta correcta | Por qué |
|---|---|---|
| Garantiza que se mantenga la visibilidad, el acceso seguro y el control sobre los datos utilizados para el desarrollo e implementación de IA. | **Protección de datos** | Protección de datos cubre visibilidad, acceso seguro y control sobre los datos usados en IA |
| Implementá herramientas de monitoreo en tiempo real y detección de anomalías para identificar y responder a posibles incidentes de seguridad en cargas de trabajo de IA. | **Detección de amenazas** | Detección de amenazas identifica y responde a incidentes de seguridad en tiempo real |
| Garantiza que las vulnerabilidades se identifiquen y se aborden a lo largo del ciclo de vida del desarrollo de software para cargas de trabajo de IA. | **Seguridad de aplicaciones** | Seguridad de aplicaciones cubre identificar y corregir vulnerabilidades durante todo el ciclo de desarrollo |

_Distractor: Protección de infraestructura se enfoca en asegurar los sistemas y servicios que ejecutan las cargas de trabajo de IA, no el ciclo de vida del software ni el monitoreo de datos._

### 17. Una organización de salud está en proceso de migrar su sistema de gestión de pacientes a AWS. Como parte de sus esfuerzos de cumplimiento normativo y debida diligencia, debe asegurar que todos los servicios y soluciones de AWS que planea utilizar cumplan con diversas regulaciones sanitarias, como HIPAA y HITRUST. La organización también trabaja con proveedores independientes de software (ISVs) que necesitan verificar el cumplimiento con los servicios de AWS que tienen intención de integrar. La organización debe obtener documentación de seguridad y cumplimiento de AWS para cumplir con estos requisitos regulatorios y demostrar cumplimiento a los auditores.

¿Cuál servicio de AWS puede utilizar esta organización para acceder a los reportes de seguridad y cumplimiento necesarios?

- · **A.** Amazon Macie
- ✅ **B.** AWS Artifact
- · **C.** AWS CloudTrail
- · **D.** AWS Security Hub

**Por qué:** Además, AWS Artifact proporciona a los clientes una forma sencilla de descargar y revisar documentos de cumplimiento en cualquier momento, simplificando el proceso de cumplimiento y auditoría.

**Por qué no las demás:**
- **A.** Descubre y protege datos sensibles (PII) en S3, no entrega documentación de cumplimiento.
- **C.** Registra llamadas a la API para auditoría, pero no da acceso a documentos de cumplimiento.
- **D.** Da visibilidad de alertas de seguridad y estado de cumplimiento, no los documentos formales en sí.

### 18. Un equipo de ciencia de datos está entrenando modelos de machine learning con instancias de notebook de Amazon SageMaker. Los datasets se encuentran en Amazon S3. El equipo debe garantizar que el tráfico de datos permanezca completamente dentro de la red de AWS debido a requisitos de seguridad y cumplimiento normativo.

¿Cuál es la solución que proporciona la arquitectura más efectiva y rentable para este requisito?

- ✅ **A.** Lanzar instancias de notebook de SageMaker en una VPC que incluya un Gateway Endpoint para S3.
- · **B.** Usar AWS PrivateLink para conectar instancias de notebook de SageMaker a S3 de forma segura.
- · **C.** Archivar los datasets en S3 Glacier Deep Archive para optimizar la recuperación de datos en instancias de notebook de SageMaker.
- · **D.** Establecer VPC peering entre la VPC de las instancias de notebook de SageMaker y una VPC que aloje S3 para facilitar el acceso a los datos.

**Por qué:** Cuando lanzas instancias de notebook de SageMaker dentro de una VPC y configuras un Gateway VPC Endpoint privado para S3.

**Por qué no las demás:**
- **B.** AWS PrivateLink proporciona conectividad privada entre VPCs y servicios respaldados por Interfaces de Red Elásticas (ENIs).
- **C.** S3 Glacier Deep Archive se utiliza simplemente para almacenamiento en frío a largo plazo.
- **D.** Amazon S3 es un servicio global que no está vinculado a ninguna Virtual Private Cloud (VPC) específica.

### 19. Asociá el servicio o característica de AWS que corresponda con cada requisito relacionado a construir y asegurar una aplicación de IA generativa usando Amazon Bedrock. Cada opción se puede usar una vez, más de una vez, o no usarse. (Selecciona TRES)

| Elemento | Respuesta correcta | Por qué |
|---|---|---|
| Implementar control de acceso basado en roles para los recursos de tu aplicación de IA. | **AWS Identity and Access Management (IAM)** | IAM es el servicio de AWS para definir permisos y control de acceso basado en roles |
| Definir políticas para evitar la generación de contenido explícito u ofensivo. | **Amazon Bedrock Content Guardrails** | Bedrock Content Guardrails está diseñado específicamente para bloquear contenido explícito u ofensivo |
| Encriptar los datos utilizados para entrenamiento e inferencia en tus modelos de IA | **AWS Key Management Service (KMS)** | KMS es el servicio de AWS para gestionar el cifrado de datos |

_Distractor: CloudTrail registra y audita llamadas a la API, pero no administra permisos, cifrado ni políticas de contenido._

### 20. Una empresa de servicios financieros almacena formularios de retroalimentación de clientes en Amazon S3. Estos formularios se envían a través de un portal web alojado en Amazon API Gateway y frecuentemente contienen datos sensibles como números de seguro social y detalles de tarjetas de crédito. El objetivo es detectar automáticamente y alertar sobre la presencia de datos sensibles en los formularios cargados con el mínimo esfuerzo de desarrollo.

¿Cuál de las siguientes opciones cumplirá con los requisitos establecidos?

- ✅ **A.** Usar Amazon Macie para monitorear el bucket de S3 en busca de datos sensibles y entregar alertas cuando se detecten.
- · **B.** Usar AWS Glue para crear un trabajo ETL personalizado que detecte y oculte datos sensibles en los formularios cargados antes de almacenarlos en S3.
- · **C.** Usar Amazon Comprehend para analizar el texto en busca de datos sensibles y activar alertas a través de una función AWS Lambda.
- · **D.** Implementar un small language model (SLM) en un endpoint de Amazon SageMaker AI para analizar los formularios cargados en busca de datos sensibles y generar alertas.

**Por qué:** Macie automatiza el descubrimiento e informe de datos sensibles, ayudándote a entender mejor los datos que tu organización almacena en Amazon S3.

**Por qué no las demás:**
- **B.** AWS Glue puede típicamente detectar y ocultar datos sensibles usando su transformación Detect PII, pero requiere construir y mantener trabajos ETL.
- **C.** Amazon Comprehend se utiliza principalmente para tareas de procesamiento de lenguaje natural como análisis de sentimientos y reconocimiento de entidades.
- **D.** Entrenar, implementar y mantener Small Language Models (SLMs) para detección de PII requiere un esfuerzo de desarrollo y operativo significativo.

### 21. Una institución financiera debe asegurar que los datos transferidos desde Amazon S3 a una instancia de Amazon SageMaker para entrenar modelos de machine learning no salgan de la red de AWS, cumpliendo con requisitos de conformidad estrictos. La institución requiere un endpoint de S3 dedicado para enrutar todo el tráfico de datos de entrenamiento de forma privada dentro de la red de AWS.

¿Cuál solución de AWS cumplirá este requisito de la forma más efectiva?

- · **A.** Amazon CloudFront Distribution
- · **B.** S3 Access Point
- ✅ **C.** Amazon VPC Gateway Endpoint
- · **D.** S3 Transfer Acceleration

**Por qué:** El Gateway Endpoint hace que el tráfico entre S3 y SageMaker permanezca dentro de la red de AWS, sin salir a internet.

**Por qué no las demás:**
- **A.** CloudFront distribuye contenido vía ubicaciones edge, que puede atravesar internet pública.
- **B.** Da acceso controlado y personalizado a los buckets, pero no garantiza que el tráfico se quede dentro de AWS.
- **D.** Acelera transferencias por rutas optimizadas, que pueden pasar por internet pública.

### 22. Una empresa confía fuertemente en modelos de machine learning para hacer recomendaciones personalizadas y detectar fraudes. La empresa almacena datos sensibles en buckets de Amazon S3 y necesita una solución que automáticamente descubra, clasifique y proteja estos datos sensibles. La empresa está preocupada por el robo de modelos a partir de datos de entrenamiento expuestos.

¿Cuál de las siguientes opciones es la MÁS adecuada para este caso de uso?

- · **A.** Amazon Kinesis
- ✅ **B.** Amazon Macie
- · **C.** AWS Config
- · **D.** Amazon Inspector

**Por qué:** En el escenario dado, donde la protección de datos sensibles es crucial, Amazon Macie proporciona las características necesarias para cumplimiento normativo, privacidad de datos y mitigación de riesgos.

**Por qué no las demás:**
- **A.** Se utiliza principalmente para ingerir, procesar y analizar grandes volúmenes de datos en tiempo real (por ejemplo, logs, clickstreams, datos de sensores).
- **C.** Solo registra configuraciones de recursos (por ejemplo, políticas de buckets, encriptación, acceso público), no el contenido de los objetos.
- **D.** Solo evalúa la postura de seguridad de instancias EC2, funciones Lambda e imágenes ECR.

### 23. Una empresa está usando Amazon Bedrock para machine learning y AWS Lambda para flujos de trabajo impulsados por eventos. La empresa debe registrar todas las solicitudes a la API de Bedrock e invocaciones de Lambda, asegurando que los registros se mantengan de forma segura durante 3 años con costos de almacenamiento mínimos.

¿Cuál de las siguientes opciones cumplirá con los requisitos dados? (Selecciona DOS.)

- ✅ **A.** Amazon S3 Intelligent-Tiering
- ✅ **B.** AWS CloudTrail
- · **C.** Amazon CloudWatch
- · **D.** Amazon S3 Glacier Deep Archive
- · **E.** AWS Config

**Por qué:** **A. Amazon S3 Intelligent-Tiering** -- mueve automáticamente los datos al nivel de acceso más rentable sin afectar el rendimiento, ideal para logs de acceso poco predecible; **B. AWS CloudTrail** -- registra el historial de llamadas a la API, incluyendo invocaciones de Bedrock y Lambda.

**Por qué no las demás:**
- **C.** No captura eventos a nivel de API desde Amazon Bedrock.
- **D.** Es el más barato, pero la recuperación toma horas o días, poco práctico para logs que se pueden necesitar consultar.
- **E.** Principalmente rastrea cambios en la configuración de recursos, como actualizaciones de grupos de seguridad o cambios en políticas de IAM.

### 24. Una organización de salud está desarrollando una aplicación de diagnóstico impulsada por IA aprovechando Amazon Bedrock. La aplicación se implementa dentro de una VPC que debe cumplir con regulaciones estrictas de privacidad de datos. Estas regulaciones prohíben cualquier conectividad a internet hacia o desde la VPC.

¿Qué servicio o característica de AWS satisfará estos objetivos?

- ✅ **A.** AWS PrivateLink
- · **B.** Internet gateway
- · **C.** AWS Direct Connect
- · **D.** Amazon S3 VPC Endpoint

**Por qué:** AWS PrivateLink proporciona un método seguro para conectar tu VPC a Amazon Bedrock, permitiendo que la aplicación impulsada por IA se comunique con otros servicios de AWS sin ninguna exposición a internet.

**Por qué no las demás:**
- **B.** Principalmente habilita la conectividad a internet.
- **C.** Este servicio solo proporciona una conexión de red dedicada desde las instalaciones locales hacia AWS.
- **D.** Simplemente permite conectividad privada a Amazon S3 y no cubre la necesidad de conectarse a otros servicios de AWS como Amazon Bedrock.

---

[← Volver al índice](./README.md)
