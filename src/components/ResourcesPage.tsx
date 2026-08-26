import QuickJumpBar from './QuickJumpBar.tsx';
import Resources from './Resources.tsx';

export default function ResourcesPage() {
  return (
    <>
      <QuickJumpBar current="estudiar" />
      <Resources />
    </>
  );
}
