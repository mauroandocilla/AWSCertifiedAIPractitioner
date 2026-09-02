import { Outlet, useLocation, useParams } from 'react-router-dom';
import QuickJumpBar from './QuickJumpBar.tsx';
import { StickyListenProvider } from './StickyListen.tsx';

function currentFromPath(pathname: string, domainNumber?: string): string {
  if (pathname.startsWith('/dominio/')) return domainNumber ? `d${domainNumber}` : '';
  if (pathname === '/servicios') return 'servicios';
  if (pathname === '/glosario') return 'glosario';
  if (pathname === '/mapa-conceptual') return 'mapa';
  if (pathname === '/recorrido') return 'recorrido';
  if (pathname === '/mapa-de-experiencia') return 'experiencia';
  if (pathname === '/como-estudiarlo') return 'estudiar';
  if (pathname === '/formato-examen') return 'formato';
  if (pathname === '/examen') return 'examen';
  if (pathname.startsWith('/quiz-v2')) return 'quiz-v2';
  if (pathname.startsWith('/quiz')) return 'quiz';
  return '';
}

// Mounted once for every route below it (see App.tsx) — QuickJumpBar lives here
// instead of inside each page, so it never unmounts/remounts while navigating
// between them (e.g. D1 -> D2, or list -> quiz question).
export default function Layout() {
  const location = useLocation();
  const { n } = useParams<{ n: string }>();
  const current = currentFromPath(location.pathname, n);

  return (
    <StickyListenProvider>
      <QuickJumpBar current={current} />
      <Outlet />
    </StickyListenProvider>
  );
}
