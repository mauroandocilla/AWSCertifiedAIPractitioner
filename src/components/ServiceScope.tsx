export default function ServiceScope() {
  return (
    <>
      {/* Scope */}
      <section className="scope" id="scope">
        <span className="eyebrow">Alcance oficial de servicios</span>
        <h2 style={{marginTop: '0.4rem', fontSize: '1.5rem'}}>Qué servicios entran (y cuáles no) en el examen</h2>
        <p className="scope-note">AWS aclara que ambas listas son "no exhaustivas y sujetas a cambio", pero marcan la intención clara: estudia a fondo los de la izquierda; los de la derecha puedes ignorarlos aunque los veas mencionados en la documentación de Bedrock/SageMaker.</p>

        <div className="scope-grid">
          <div className="scope-col in">
            <h3>En alcance</h3>

            <div className="cat"><div className="cat-name">Machine Learning</div><div className="chips">
              <span className="chip">Amazon Bedrock</span><span className="chip">Bedrock AgentCore</span><span className="chip">Amazon Comprehend</span><span className="chip">Amazon Lex</span><span className="chip">Amazon Nova</span><span className="chip">Amazon Personalize</span><span className="chip">Amazon Polly</span><span className="chip">Amazon Rekognition</span><span className="chip">SageMaker AI</span><span className="chip">SageMaker JumpStart</span><span className="chip">Amazon Textract</span><span className="chip">Amazon Transcribe</span><span className="chip">Amazon Translate</span><span className="chip">AWS Transform</span>
            </div></div>

            <div className="cat"><div className="cat-name">Developer Tools</div><div className="chips">
              <span className="chip">Kiro</span><span className="chip">Strands Agents</span>
            </div></div>

            <div className="cat"><div className="cat-name">Analytics</div><div className="chips">
              <span className="chip">AWS Data Exchange</span><span className="chip">Amazon EMR</span><span className="chip">AWS Glue</span><span className="chip">Glue DataBrew</span><span className="chip">AWS Lake Formation</span><span className="chip">Amazon OpenSearch Service</span><span className="chip">Amazon Quick</span><span className="chip">Amazon Redshift</span>
            </div></div>

            <div className="cat"><div className="cat-name">Database</div><div className="chips">
              <span className="chip">Aurora</span><span className="chip">DocumentDB</span><span className="chip">DynamoDB</span><span className="chip">ElastiCache</span><span className="chip">Neptune</span><span className="chip">RDS</span>
            </div></div>

            <div className="cat"><div className="cat-name">Security, Identity & Compliance</div><div className="chips">
              <span className="chip">AWS Artifact</span><span className="chip">IAM</span><span className="chip">Amazon Inspector</span><span className="chip">AWS KMS</span><span className="chip">Amazon Macie</span><span className="chip">Secrets Manager</span>
            </div></div>

            <div className="cat"><div className="cat-name">Management & Governance</div><div className="chips">
              <span className="chip">CloudTrail</span><span className="chip">CloudWatch</span><span className="chip">AWS Config</span><span className="chip">Trusted Advisor</span><span className="chip">Well-Architected Tool</span>
            </div></div>

            <div className="cat"><div className="cat-name">Compute / Containers</div><div className="chips">
              <span className="chip">EC2</span><span className="chip">Lambda</span><span className="chip">ECS</span><span className="chip">EKS</span>
            </div></div>

            <div className="cat"><div className="cat-name">Storage · Red · Financiero</div><div className="chips">
              <span className="chip">S3</span><span className="chip">S3 Glacier</span><span className="chip">CloudFront</span><span className="chip">VPC</span><span className="chip">AWS Budgets</span><span className="chip">Cost Explorer</span>
            </div></div>
          </div>

          <div className="scope-col out">
            <h3>Fuera de alcance (muestra)</h3>

            <div className="cat"><div className="cat-name">Machine Learning</div><div className="chips">
              <span className="chip">DeepComposer</span><span className="chip">HealthImaging</span><span className="chip">HealthOmics</span><span className="chip">Monitron</span><span className="chip">Panorama</span>
            </div></div>

            <div className="cat"><div className="cat-name">Security / Identity</div><div className="chips">
              <span className="chip">Cognito</span><span className="chip">GuardDuty</span><span className="chip">Security Hub</span><span className="chip">WAF</span><span className="chip">Shield</span><span className="chip">Detective</span><span className="chip">ACM</span><span className="chip">CloudHSM</span>
            </div></div>

            <div className="cat"><div className="cat-name">Redes / Migración</div><div className="chips">
              <span className="chip">Route 53</span><span className="chip">Direct Connect</span><span className="chip">Global Accelerator</span><span className="chip">DMS</span><span className="chip">Snow Family</span><span className="chip">Transfer Family</span>
            </div></div>

            <div className="cat"><div className="cat-name">Compute / Contenedores</div><div className="chips">
              <span className="chip">App Runner</span><span className="chip">Elastic Beanstalk</span><span className="chip">Lightsail</span><span className="chip">ROSA</span>
            </div></div>

            <div className="cat"><div className="cat-name">IoT (todo el catálogo)</div><div className="chips">
              <span className="chip">IoT Core</span><span className="chip">Greengrass</span><span className="chip">SiteWise</span><span className="chip">TwinMaker</span><span className="chip">FreeRTOS</span>
            </div></div>

            <div className="cat"><div className="cat-name">Frontend / End-user computing</div><div className="chips">
              <span className="chip">Amplify</span><span className="chip">AppSync</span><span className="chip">WorkSpaces</span><span className="chip">AppStream 2.0</span>
            </div></div>

            <div className="cat"><div className="cat-name">Media / Business apps</div><div className="chips">
              <span className="chip">Elemental MediaConvert</span><span className="chip">Chime</span><span className="chip">Pinpoint</span><span className="chip">WorkMail</span><span className="chip">SES</span>
            </div></div>

            <div className="cat"><div className="cat-name">Gestión y gobernanza</div><div className="chips">
              <span className="chip">Control Tower</span><span className="chip">Organizations</span><span className="chip">Managed Grafana</span><span className="chip">Systems Manager Incident Manager</span>
            </div></div>
          </div>
        </div>
        <p className="scope-note" style={{marginTop: '1.4rem'}}>Lista completa (18 categorías, ~90 servicios fuera de alcance) en la página oficial enlazada abajo — aquí solo va lo más propenso a aparecer como distractor en preguntas.</p>
      </section>
    </>
  );
}
