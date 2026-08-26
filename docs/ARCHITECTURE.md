# Arquitectura del proyecto

Este documento explica cómo está armada la aplicación y por qué se tomaron ciertas decisiones — para más detalle operativo (comandos, convenciones para futuras ediciones) ver también `CLAUDE.md` en la raíz.

## De página estática a SPA

El proyecto empezó como un único archivo `index.html` autocontenido con toda la guía en una sola página larga (se conserva una copia en `legacy/original-guide.html` como referencia). Se migró a una app React + Vite + TypeScript, primero conservando el mismo layout de una sola página, y después rediseñando la navegación en varias iteraciones hasta llegar al esquema actual: una landing con tarjetas + rutas por sección + páginas de detalle con menú lateral.

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

Todas las rutas salvo `/` renderizan `QuickJumpBar` (barra superior fija, con accesos a todo el sitio y que resalta la sección activa).

## Contenido como datos, no como JSX

`src/domainData.ts` y `src/glossaryData.ts` contienen **todo** el contenido de la guía como datos estructurados (arrays/objetos), no como texto embebido en componentes. Los componentes son plantillas genéricas que leen de ahí — por ejemplo, `DomainDetail.tsx` es un único componente que sirve para los 5 dominios, no hay `Domain1.tsx`...`Domain5.tsx`.

Estos dos archivos se generaron una única vez con `scripts/extract-content.mjs`, un script que parseaba el HTML original (`legacy/original-guide.html`) para extraer el contenido sin reescribirlo a mano (evitando perder o alterar texto). Ese script ya cumplió su función — **no hace falta volver a correrlo**; cualquier corrección o agregado de contenido se hace editando `domainData.ts`/`glossaryData.ts` directamente.

### Convención para contenido no oficial

Todo el contenido fue auditado bullet por bullet contra la guía oficial de AWS (docs.aws.amazon.com/aws-certification). Cualquier término o servicio que la app menciona pero que **no** forma parte del texto oficial citado de un objetivo se marca así:

```html
<h4>Nombre <em>(extra, no está en el bullet oficial)</em></h4>
<p><em>Fuente: ...</em> [resto de la explicación]</p>
```

Esto evita que contenido agregado (útil, pero no confirmado por AWS como parte del examen) se confunda con el texto oficial citado entre comillas. Ver `docs/CONTENIDO-AIF-C01.md` para el detalle de qué se agregó y de dónde salió.

## Layout de las páginas de dominio (sidebar + panel)

`DomainDetail.tsx` implementa un layout maestro-detalle:

- **Sidebar izquierdo**: lista todos los bullets del dominio, agrupados por subsección (1.1, 1.2, ...). Es `position: sticky` (no `fixed`) — a propósito: así se mantiene fijo mientras el panel derecho scrollea, pero al llegar al final de su fila (donde arranca el footer) se libera solo y sube con el resto de la página, dejando el footer visible sin superposición. Este comportamiento fue iterado varias veces (probando `sticky` simple, luego `fixed`, y volviendo a `sticky` con el cálculo correcto) — no cambiarlo a `fixed` sin resolver de nuevo el problema de superposición con el footer que motivó volver a `sticky`.
- **Panel derecho**: muestra la explicación del bullet seleccionado (vía `GlossaryEntryContent`, el mismo renderer que usa `/glosario`), reflejado en un query param `?b=<glossId>` en la misma ruta — sin navegar a `/glosario`.

`/glosario` reutiliza `GlossaryEntryContent` para no duplicar el markup de cada entrada, y soporta un deep-link `?t=<glossId>` que hace scroll y resalta una entrada puntual — así es como los bullets de un dominio enlazan a su explicación sin salir de contexto en otras partes de la app.

## Tema claro/oscuro

`src/index.css` define tokens de color en `:root` (claro) y los sobreescribe bajo `@media (prefers-color-scheme: dark)` y `:root[data-theme="dark"]`. `ThemeToggle.tsx` (montado una sola vez en `App.tsx`, fijo arriba a la derecha en toda la app) cambia el atributo `data-theme` en `<html>` y persiste la elección en `localStorage`. `index.html` tiene un script inline que corre antes de que React monte, para aplicar el tema guardado y evitar un parpadeo del tema incorrecto al cargar.

## Despliegue

GitHub Pages vía GitHub Actions (`.github/workflows/deploy.yml`), no el build legacy por rama — el repositorio necesita tener `build_type: workflow` configurado en su configuración de Pages (esto vive en GitHub, no en el repo; se configura una vez con la API o desde Settings → Pages).
