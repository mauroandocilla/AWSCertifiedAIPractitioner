import QuickJumpBar from './QuickJumpBar.tsx';
import ExamFormat from './ExamFormat.tsx';

export default function ExamFormatPage() {
  return (
    <>
      <QuickJumpBar current="formato" />
      <ExamFormat />
    </>
  );
}
