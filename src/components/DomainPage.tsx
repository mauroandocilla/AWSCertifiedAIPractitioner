import { useParams } from 'react-router-dom';
import DomainDetail from './DomainDetail.tsx';
import { domainByNumber } from '../domainData.ts';

export default function DomainPage() {
  const { n } = useParams<{ n: string }>();
  const number = Number(n);
  const domain = domainByNumber[number];

  if (!domain) return <p>Dominio no encontrado.</p>;

  return <DomainDetail number={number} />;
}
