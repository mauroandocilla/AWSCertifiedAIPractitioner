# AWS Certified AI Practitioner (AIF-C01) — Study Guide

SPA de guía de estudio, quiz de práctica bilingüe (ES/EN) (dos sistemas: el original y "quiz v2"), simulador de examen, glosario con lectura en voz alta, mapa conceptual, recorrido de estudio y mapa de experiencia, para el AWS Certified AI Practitioner, desplegada en GitHub Pages.

## Stack

- **React 19** + **TypeScript 5.7**
- **Vite 6** — build y dev server (con `import.meta.glob` para carga perezosa de los sets de preguntas por idioma)
- **React Router 7** (`HashRouter`) — enrutamiento del lado del cliente compatible con GitHub Pages sin configuración de servidor
- **fuse.js** — búsqueda difusa (`Ctrl+K`) sobre el contenido de dominios/glosario
- **lucide-react** — íconos, importados directo en cada componente (ver `docs/ARCHITECTURE.md`)
- **d3-force** + **d3-zoom** + **d3-selection** — simulación de fuerzas y pan/zoom del mapa conceptual (`/mapa-conceptual`); el renderizado es SVG a mano, no una librería de gráficos todo-en-uno
- CSS plano (`src/index.css`) con variables para tema claro/oscuro — sin framework de estilos
- `@anthropic-ai/sdk`, `cheerio`, `zod` — solo como `devDependencies`, usados por los scripts one-off de los pipelines de contenido del quiz (original y v2) (no se incluyen en el bundle de la app)
- `@aws-sdk/client-s3` — también solo como `devDependency`, usado por `scripts/upload-domain-audio.mjs` para subir el audio pre-generado del glosario a Cloudflare R2 (API compatible con S3)

## Requisitos

- Node.js 20+ (desarrollado con Node 24)

## Desarrollo

```bash
npm install
npm run dev
```

El servidor de desarrollo sirve la app en `http://localhost:5173/AWSCertifiedAIPractitioner/` (respeta el `base` configurado en `vite.config.ts`, igual que en producción).

## Build

```bash
npm run build     # typecheck (tsc -b) + build de producción → dist/
npm run preview    # sirve el build de dist/ localmente
```

## Despliegue

El sitio se publica en GitHub Pages mediante GitHub Actions (`.github/workflows/deploy.yml`), que compila y despliega automáticamente en cada push a `main`. El repositorio debe tener configurado el origen de Pages como "GitHub Actions" (no el build legacy por rama).

URL en producción: https://mauroandocilla.github.io/AWSCertifiedAIPractitioner/

## Estructura del proyecto

```
src/
  App.tsx                  # rutas (Landing + Layout compartido con QuickJumpBar/Outlet)
  main.tsx                 # entry point
  index.css                # estilos globales + tokens de tema + layout mobile
  domainData.ts             # contenido de los 5 dominios (estructurado, no JSX)
  glossaryData.ts            # glosario completo, versión "Técnico" (estructurado, no JSX)
  glossaryDataSpoken.ts       # glosario versión "Profesor", reescrito para lectura en voz alta
  glossaryCards.ts            # parser HTML compartido: term-cards + segmentos de lectura en voz alta
  domainSearch.ts             # índice plano para la búsqueda global (Ctrl+K, fuse.js)
  conceptGraph.ts             # conexiones curadas a mano entre términos del glosario (mapa conceptual)
  audioBase.ts               # URL del bucket R2 donde vive el audio pre-generado del glosario
  components/               # componentes de página y de UI (dominio, glosario, búsqueda, quiz, examen)
    GlossaryAudioProvider.tsx   # sesión global de audio (motor + mini-reproductor + resumen + Now Playing)
    ConceptMap.tsx, ConceptMapPage.tsx      # /mapa-conceptual
    StudyJourneyPage.tsx                    # /recorrido
    JourneyMapPage.tsx                      # /mapa-de-experiencia
  hooks/
    useReadAloud.ts, useAudioReadAloud.ts, useAudioAvailable.ts   # motores de lectura en voz alta
    useIsMobile.ts, useBodyScrollLock.ts
  quiz/
    data/, data-es/           # 21 sets de preguntas de práctica (quiz original), por idioma (JSON)
    meta.ts                   # índice de sets — autogenerado, no editar a mano
    examSampling.ts            # muestreo de las 65 preguntas del examen simulado, por peso de dominio
    loadSet.ts, loadAllQuestions.ts, useQuizLang.ts, isCorrectAnswer.ts, types.ts
  quiz-v2/
    data/questions.json         # quiz v2: un solo archivo bilingüe { en, es } por campo, incluye tipo "matching"
    types.ts, loadQuestions.ts, loadExamPool.ts, resolveLang.ts, withBasePath.ts
scripts/
  extract-content.mjs         # generó domainData.ts/glossaryData.ts una vez (guía) — no hace falta re-correrlo
  extract-quiz.mjs, translate-quiz.mjs,
  classify-quiz-scope.mjs, apply-quiz-scope-cleanup.mjs   # pipeline manual del quiz original (ver docs/ARCHITECTURE.md)
  build-quiz-other.mjs, export-quiz-v2.mjs, translate-quiz-v2.mjs,
  export-quiz-v2-for-matecat.mjs, build-quiz-v2-glossary-tmx.mjs,
  fix-quiz-v2-service-names(-manual).mjs, tag-quiz-v2-domains.mjs   # pipeline manual del quiz v2 (ver docs/ARCHITECTURE.md)
  generate-domain-audio.mjs, check-audio-truncation.mjs,
  upload-domain-audio.mjs                                # pipeline manual del audio del glosario, vía Azure TTS + Cloudflare R2 (ver docs/ARCHITECTURE.md)
docs/                       # material de referencia versionado (no se despliega con la app)
others/                    # material de terceros y de staging (gitignored): fuente de los quizzes, brief del glosario hablado, audio pre-generado
```

Para más detalle sobre la arquitectura, el sistema de quiz/examen, y las decisiones de diseño, ver [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md). Para el contenido de la certificación en sí (qué cubre, fuentes, qué se agregó y por qué), ver [`docs/CONTENIDO-AIF-C01.md`](docs/CONTENIDO-AIF-C01.md).
