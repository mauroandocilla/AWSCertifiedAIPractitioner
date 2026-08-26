import QuickJumpBar from './QuickJumpBar.tsx';
import ServiceScope from './ServiceScope.tsx';

export default function ServiceScopePage() {
  return (
    <>
      <QuickJumpBar current="servicios" />
      <ServiceScope />
    </>
  );
}
