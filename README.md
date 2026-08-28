# AWS Certified AI Practitioner (AIF-C01) — Study Guide

SPA de guía de estudio, quiz de práctica bilingüe (ES/EN) y simulador de examen para el AWS Certified AI Practitioner, desplegada en GitHub Pages.

## Stack

- **React 19** + **TypeScript 5.7**
- **Vite 6** — build y dev server (con `import.meta.glob` para carga perezosa de los sets de preguntas por idioma)
- **React Router 7** (`HashRouter`) — enrutamiento del lado del cliente compatible con GitHub Pages sin configuración de servidor
- CSS plano (`src/index.css`) con variables para tema claro/oscuro — sin framework de estilos
- `@anthropic-ai/sdk`, `cheerio`, `zod` — solo como `devDependencies`, usados por los scripts one-off del pipeline de contenido del quiz (no se incluyen en el bundle de la app)

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
  glossaryData.ts            # glosario completo (estructurado, no JSX)
  components/               # componentes de página y de UI (dominio, glosario, quiz, examen)
  quiz/
    data/, data-es/           # 21 sets de preguntas de práctica, por idioma (JSON)
    meta.ts                   # índice de sets — autogenerado, no editar a mano
    examSampling.ts            # muestreo de las 65 preguntas del examen simulado, por peso de dominio
    loadSet.ts, loadAllQuestions.ts, useQuizLang.ts, isCorrectAnswer.ts, types.ts
  hooks/useIsMobile.ts
scripts/
  extract-content.mjs         # generó domainData.ts/glossaryData.ts una vez (guía) — no hace falta re-correrlo
  extract-quiz.mjs, translate-quiz.mjs,
  classify-quiz-scope.mjs, apply-quiz-scope-cleanup.mjs   # pipeline manual del contenido del quiz (ver docs/ARCHITECTURE.md)
docs/                       # material de referencia versionado (no se despliega con la app)
others/                    # material de terceros (gitignored) usado como fuente del quiz
```

Para más detalle sobre la arquitectura, el sistema de quiz/examen, y las decisiones de diseño, ver [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md). Para el contenido de la certificación en sí (qué cubre, fuentes, qué se agregó y por qué), ver [`docs/CONTENIDO-AIF-C01.md`](docs/CONTENIDO-AIF-C01.md).
