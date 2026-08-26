import type { ComponentType } from 'react';
import { useParams } from 'react-router-dom';
import QuickJumpBar from './QuickJumpBar.tsx';
import Domain1 from './Domain1.tsx';
import Domain2 from './Domain2.tsx';
import Domain3 from './Domain3.tsx';
import Domain4 from './Domain4.tsx';
import Domain5 from './Domain5.tsx';

const DOMAIN_COMPONENTS: Record<string, ComponentType> = {
  '1': Domain1,
  '2': Domain2,
  '3': Domain3,
  '4': Domain4,
  '5': Domain5,
};

export default function DomainPage() {
  const { n } = useParams<{ n: string }>();
  const DomainComponent = (n && DOMAIN_COMPONENTS[n]) || null;

  if (!DomainComponent) {
    return (
      <>
        <QuickJumpBar current="" />
        <p>Dominio no encontrado.</p>
      </>
    );
  }

  return (
    <>
      <QuickJumpBar current={`d${n}`} />
      <DomainComponent />
    </>
  );
}
