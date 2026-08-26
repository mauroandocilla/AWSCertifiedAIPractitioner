# Contenido de la certificación AIF-C01

Este documento resume qué cubre el examen AWS Certified AI Practitioner (AIF-C01) según lo que muestra la app, de dónde sale ese contenido, y qué partes fueron agregadas por fuera del texto oficial de AWS (y por qué).

## Fuente y verificación

El contenido de dominios/task statements/objetivos fue extraído íntegro de la guía oficial de AWS:
`https://docs.aws.amazon.com/aws-certification/latest/ai-practitioner-01/`

Se auditó objetivo por objetivo (los ~69 bullets de los 14 task statements) contra las páginas oficiales de cada dominio, y las listas de servicios en/fuera de alcance contra `aif-01-in-scope-services.html` / `aif-01-out-of-scope-services.html`. La auditoría confirmó cobertura completa de los objetivos oficiales y de la lista de servicios en alcance (100%).

## Estructura del examen

- **5 dominios de contenido**, **14 task statements** (1.1–5.2)
- Pesos: Dominio 1 — Fundamentos de IA y ML (20%) · Dominio 2 — Fundamentos de GenAI (24%) · Dominio 3 — Aplicaciones de foundation models (28%) · Dominio 4 — IA responsable (14%) · Dominio 5 — Seguridad, cumplimiento y gobernanza (14%)
- 65 preguntas totales (50 puntúan + 15 no puntúan, sin identificar cuáles), puntaje 100–1000, mínimo 700 para aprobar, modelo de puntaje **compensatorio** (no hace falta aprobar cada dominio por separado)
- 4 tipos de pregunta: opción múltiple, respuesta múltiple, ordenar, emparejar

Ver la página "Formato del examen" (`/formato-examen`) en la app para el detalle completo, incluyendo el perfil del candidato y las tareas explícitamente fuera de su alcance (no confundir con los *servicios* fuera de alcance).

## Contenido agregado que no es texto oficial de AWS

Seis términos/servicios aparecen en la app marcados como `(extra, no está en el bullet oficial)` porque no forman parte del texto oficial citado de ningún objetivo, aunque son reales y relevantes:

| Término | Ubicación | Origen | Nota |
|---|---|---|---|
| Amazon Q | Dominio 1, Task 1.3, bullet 4 | Agregado inicial nuestro | Servicio real de AWS, mencionado como ejemplo adicional |
| Amazon Augmented AI (A2I) | Dominio 4, Task 4.1, bullet 7 | Agregado inicial nuestro | Herramienta real de revisión humana de ML |
| AWS Audit Manager | Dominio 5, Task 5.2, bullet 1 | Agregado inicial nuestro | **Tampoco está en la lista oficial de servicios en alcance** — no dar por hecho que el examen lo cubre |
| SHAP y LIME | Dominio 4, Task 4.2, bullet 2 | Cheat sheet de SkillCertPro (`docs/AWS-AI-Practitioner-Master-Cheat-Sheet.md`) | Técnicas reales de interpretabilidad post-hoc |
| GLUE, SuperGLUE y SQuAD | Dominio 3, Task 3.4, bullet 2 | Cheat sheet de SkillCertPro | Benchmarks estándar de evaluación de modelos de lenguaje |
| Amazon SageMaker Model Monitor | Dominio 4, Task 4.1, bullet 7 | Cheat sheet de SkillCertPro | Servicio real de AWS para detectar drift en modelos en producción |

El cheat sheet de SkillCertPro (`docs/AWS-AI-Practitioner-Master-Cheat-Sheet.md`, no versionado en git por ser material de un tercero) también se usó como fuente de contraste para descartar contenido desactualizado — por ejemplo, mencionaba "PartyRock" (producto ya discontinuado) y a Amazon DocumentDB como base de datos vectorial (no está en la lista oficial vigente), ninguno de los cuales se incorporó a la app.

## Mantenimiento

Si AWS actualiza la guía del examen, el proceso para incorporar cambios es:
1. Volver a traer el contenido de `docs.aws.amazon.com/aws-certification/latest/ai-practitioner-01/` (páginas de introducción + cada dominio + servicios en/fuera de alcance).
2. Comparar contra `src/domainData.ts` y `src/glossaryData.ts`.
3. Editar esos archivos directamente (no hay que volver a correr `scripts/extract-content.mjs` — ver `docs/ARCHITECTURE.md`).
4. Actualizar la fecha de verificación que se muestra en el header de la app (`src/components/Header.tsx`).
