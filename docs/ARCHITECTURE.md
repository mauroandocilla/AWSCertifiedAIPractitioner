# Arquitectura del proyecto

Este documento explica cómo está armada la aplicación y por qué se tomaron ciertas decisiones — para más detalle operativo (comandos, convenciones para futuras ediciones) ver también `CLAUDE.md` en la raíz.

## De página estática a SPA con quiz y examen simulado

El proyecto empezó como un único archivo `index.html` autocontenido con toda la guía en una sola página larga (se conserva una copia en `legacy/original-guide.html` como referencia). Se migró a una app React + Vite + TypeScript, primero conservando el mismo layout de una sola página, y después rediseñando la navegación en varias iteraciones hasta llegar al esquema actual: una landing con tarjetas + rutas por sección + páginas de detalle con menú lateral. Más adelante se sumó un quiz de práctica (21 sets, bilingüe ES/EN) y un modo de examen simulado (65 preguntas, cronometrado), además de una reescritura completa del layout para mobile.

## Ruteo

Usa `HashRouter` (no `BrowserRouter`). La razón: GitHub Pages es hosting estático puro, sin posibilidad de configurar reglas de rewrite en el servidor. Con `BrowserRouter`, refrescar la página en una ruta como `/dominio/3` devolvería un 404 real de GitHub Pages. `HashRouter` evita el problema por completo porque la ruta vive después del `#`, que el navegador nunca envía al servidor.

`vite.config.ts` define `base: '/AWSCertifiedAIPractitioner/'` porque el sitio se sirve en un subpath (GitHub Pages de tipo "project site", no "user site").

### Mapa de rutas

| Ruta | Componente | Contenido |
|---|---|---|
| `/` | `Landing` | Dashboard: header, barra de pesos por dominio, tarjetas hacia todo lo demás |
| `/dominio/:n` | `DomainPage` → `DomainDetail` | Un dominio (1-5): menú lateral + panel de explicación |
| `/servicios` | `ServiceScopePage` → `ServiceScope` | Servicios de AWS en/fuera de alcance |
| `/glosario` | `GlossaryPage` → `Glossary` | Los ~70 términos completos, navegables |
| `/como-estudiarlo` | `ResourcesPage` → `Resources` | Fuentes oficiales y enlaces |
| `/formato-examen` | `ExamFormatPage` → `ExamFormat` | Perfil del candidato, tipos de pregunta, estrategia de puntaje |
| `/quiz` | `QuizListPage` | Lista de los 21 sets de práctica |
| `/quiz/:setNumber` | `QuizSessionPage` | Un set de preguntas, con feedback inmediato por pregunta |
| `/examen` | `ExamPage` | Simulación cronometrada del examen real (ver más abajo) |

Todas las rutas salvo `/` comparten una única `<Route element={<Layout />}>` (`src/components/Layout.tsx` = `QuickJumpBar` + `<Outlet/>`). `QuickJumpBar` deriva cuál pill resaltar a partir de la URL actual (no recibe `current` por prop) — esto es deliberado: antes cada página montaba su propio `QuickJumpBar`, así que React lo desmontaba y remontaba en cada navegación, perdiendo el scroll horizontal de la fila de pills. Con el layout compartido, `QuickJumpBar` se monta una sola vez para toda la sesión de navegación. `ThemeToggle` y `ScrollToTop` siguen el mismo patrón: montados una vez en `App.tsx`, fuera de `Routes`.

## Contenido de dominios/glosario: datos, no JSX

`src/domainData.ts` y `src/glossaryData.ts` contienen **todo** el contenido de la guía (dominios/glosario) como datos estructurados, no como texto embebido en componentes. `DomainDetail.tsx` es un único componente que sirve para los 5 dominios, no hay `Domain1.tsx`...`Domain5.tsx`.

Estos dos archivos se generaron una única vez con `scripts/extract-content.mjs`, un script que parseaba el HTML original (`legacy/original-guide.html`) para extraer el contenido sin reescribirlo a mano. Ese script ya cumplió su función — **no hace falta volver a correrlo**; cualquier corrección o agregado de contenido se hace editando `domainData.ts`/`glossaryData.ts` directamente.

### Convención para contenido no oficial

Todo el contenido de dominios/glosario fue auditado bullet por bullet contra la guía oficial de AWS. Cualquier término o servicio que la app menciona pero que **no** forma parte del texto oficial citado de un objetivo se marca así:

```html
<h4>Nombre <em>(extra, no está en el bullet oficial)</em></h4>
<p><em>Fuente: ...</em> [resto de la explicación]</p>
```

Ver `docs/CONTENIDO-AIF-C01.md` para el detalle de qué se agregó y de dónde salió.

## Layout maestro-detalle (dominios y sesiones de quiz)

`DomainDetail.tsx` y `QuizSessionPage.tsx` comparten el mismo patrón de layout:

- **Sidebar izquierdo**: lista de bullets/preguntas. En desktop es `position: sticky` (`top: 92px`, `max-height: calc(100vh - 92px)`) — se mantiene fijo mientras el panel derecho scrollea, pero se libera solo al llegar al final de su fila (donde arranca el footer), evitando superposición. No cambiar a `fixed` sin resolver de nuevo ese problema.
- **Panel derecho**: contenido del ítem seleccionado — en dominios, la explicación vía `GlossaryEntryContent` (query param `?b=<glossId>`); en el quiz, la pregunta activa.

`/glosario` reutiliza `GlossaryEntryContent`, con un deep-link `?t=<glossId>` que hace scroll y resalta una entrada puntual.

### Versión mobile (`max-width: 720px`)

En vez de comprimir sidebar + panel en la misma fila flex, en mobile se monta **un solo panel a la vez** (`mobileDetailActive`), intercambiado con un remount por `key` y una animación CSS de slide (`enter-forward`/`enter-back`). El sidebar pasa a `position: static` a todo el ancho (pierde el sticky/max-height de desktop). Hay un `.mobile-panel-header` sticky (botón volver + breadcrumb) y los encabezados de subsección (`.ds-subtitle`) también quedan sticky, ambos a `top: 50px` (debajo de la barra superior fija).

Detalle no obvio: los contenedores del split usan `overflow-x: clip`, **no** `overflow-x: hidden` — `hidden` fuerza implícitamente `overflow-y: auto` según la spec de CSS, lo cual rompe `position: sticky` en los descendientes. Está comentado inline en el CSS; no "simplificarlo" de vuelta a `hidden`.

## Sistema de quiz

Contenido en `src/quiz/data/set-N.json` (inglés) y `src/quiz/data-es/set-N.json` (español) — 21 sets, numerados 1-5 y 9-24 (los sets 6-8 se descartaron por contenido fuera de tema). `src/quiz/meta.ts` es un índice autogenerado (`{setNumber, questionCount}`) — no editar a mano, lo regenera el pipeline. `loadSet.ts` usa `import.meta.glob` por carpeta de idioma, así abrir `/quiz/:n` solo descarga el JSON de ese set (carga perezosa). `useQuizLang.ts` es un toggle ES/EN persistido en `localStorage` (`quiz-lang`), leído por todas las páginas de quiz/examen. `QuizSessionPage.tsx` guarda el progreso de cada set (respuestas/revelado) en `localStorage` bajo `quiz-progress-{setNumber}`.

`types.ts` define `QuizQuestion`: opciones, `multiSelect`, `explanationHtml` (HTML crudo, renderizado con `dangerouslySetInnerHTML` — confiable porque es contenido propio generado por el pipeline, no input de usuario), y un `domain` opcional (1-5) usado por el muestreo del examen.

## Examen simulado (`/examen`)

`ExamPage.tsx` tiene tres fases (`setup → active → results`, estado local del componente). 65 preguntas, cronómetro de 90 minutos que termina el examen solo al llegar a cero, y — a diferencia del quiz de práctica — **sin feedback por pregunta durante el examen**, solo la opción de marcarla para revisar y una grilla de navegación. `examSampling.ts` arma esas 65 preguntas a partir de todo el pool (`loadAllQuestions.ts`, que concatena todos los sets), muestreando proporcionalmente al peso real de cada dominio (leído de `domainData.ts`) según el `domain` etiquetado de cada pregunta; si menos de la mitad del pool todavía no tiene esa etiqueta, cae a un shuffle simple. La pantalla de resultados muestra puntaje + revisión completa con explicaciones, con una aclaración explícita de que es una aproximación, no la escala real compensatoria de AWS (100-1000).

## Pipeline de contenido del quiz (manual, fuera de Claude Code)

El contenido del quiz se arma con una cadena de scripts en `scripts/`, ninguno colgado de `package.json` — se corren a mano con `node scripts/<nombre>.mjs`:

1. **`extract-quiz.mjs`** — parsea el HTML fuente en `others/quiz/` (contenido de terceros, en `.gitignore`, no se sube al repo) → `src/quiz/data/set-N.json` + regenera `meta.ts`.
2. **`translate-quiz.mjs`** — traduce EN → `data-es/` vía la API de batch de Anthropic.
3. **`classify-quiz-scope.mjs`** (subcomandos `test|submit|status|collect|recheck|recheck-collect|tag-domains|tag-domains-collect`) — clasifica el alcance y etiqueta el dominio de cada pregunta usando `domainData.ts`/`ServiceScope.tsx` como contexto, también vía la API de batch. Escribe el campo `domain` de cada pregunta (del que depende `examSampling.ts`) y un reporte en `others/quiz-scope-report.json`.
4. **`apply-quiz-scope-cleanup.mjs`** — aplica ese reporte: descarta sets/preguntas fuera de tema, regenera `meta.ts`.

Necesitan `ANTHROPIC_API_KEY` y tienen costo real en esa cuenta. **Correrlos solo cuando el usuario lo pida explícitamente — nunca de forma proactiva desde una sesión de Claude Code**; volver a correr los pasos de batch puede pisar etiquetas de dominio ya curadas a mano.

## Tema claro/oscuro

`src/index.css` define tokens de color en `:root` (claro) y los sobreescribe bajo `@media (prefers-color-scheme: dark)` y `:root[data-theme="dark"]`. `ThemeToggle.tsx` (montado una sola vez, fijo arriba a la derecha en toda la app) cambia el atributo `data-theme` en `<html>` y persiste la elección en `localStorage` (`'theme'`). `index.html` tiene un script inline que corre antes de que React monte, para aplicar el tema guardado y evitar un parpadeo del tema incorrecto al cargar.

## Despliegue

GitHub Pages vía GitHub Actions (`.github/workflows/deploy.yml`), no el build legacy por rama — el repositorio necesita tener `build_type: workflow` configurado en su configuración de Pages (esto vive en GitHub, no en el repo; se configura una vez con la API o desde Settings → Pages).
