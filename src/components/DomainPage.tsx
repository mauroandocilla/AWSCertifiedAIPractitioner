import { useParams } from 'react-router-dom';
import QuickJumpBar from './QuickJumpBar.tsx';
import DomainDetail from './DomainDetail.tsx';
import { domainByNumber } from '../domainData.ts';

export default function DomainPage() {
  const { n } = useParams<{ n: string }>();
  const number = Number(n);
  const domain = domainByNumber[number];

  if (!domain) {
    return (
      <>
        <QuickJumpBar current="" />
        <p>Dominio no encontrado.</p>
      </>
    );
  }

  return (
    <>
      <QuickJumpBar current={`d${number}`} />
      <DomainDetail number={number} />
    </>
  );
}
