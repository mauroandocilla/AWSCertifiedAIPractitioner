# AWS Certified AI Practitioner (AIF-C01) — Study Guide

SPA de guía de estudio para el examen AWS Certified AI Practitioner, desplegada en GitHub Pages.

## Stack

- **React 19** + **TypeScript 5.7**
- **Vite 6** — build y dev server
- **React Router 7** (`HashRouter`) — enrutamiento del lado del cliente compatible con GitHub Pages sin configuración de servidor
- CSS plano (`src/index.css`) con variables para tema claro/oscuro — sin framework de estilos

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
  App.tsx              # rutas
  main.tsx             # entry point
  index.css            # estilos globales + tokens de tema
  domainData.ts        # contenido de los 5 dominios (estructurado, no JSX)
  glossaryData.ts       # glosario completo (estructurado, no JSX)
  components/          # componentes de página y de UI
scripts/
  extract-content.mjs    # script usado una vez para generar domainData.ts/glossaryData.ts
docs/                   # material de referencia (no se despliega con la app)
```

Para más detalle sobre la arquitectura y las decisiones de diseño, ver [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md). Para el contenido de la certificación en sí (qué cubre, fuentes, qué se agregó y por qué), ver [`docs/CONTENIDO-AIF-C01.md`](docs/CONTENIDO-AIF-C01.md).
