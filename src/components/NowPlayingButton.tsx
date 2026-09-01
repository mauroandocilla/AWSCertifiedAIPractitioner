import { Headphones } from 'lucide-react';
import { useGlossaryAudio } from './GlossaryAudioProvider.tsx';

// Mounted once in App.tsx, alongside ThemeToggle/DomainSearch -- present on
// every page regardless of what's playing, so "where am I / what am I
// listening to" is always one tap away instead of only visible on Landing
// and /glosario (where the resume banner lives) or only while something is
// actively loaded (the floating mini-player). Opens the full-screen
// "Now Playing" view -- see GlossaryAudioProvider.tsx.
export default function NowPlayingButton() {
  const { status, resumeState, setNowPlayingOpen } = useGlossaryAudio();
  const hasSomethingToShow = status !== 'idle' || resumeState !== null;

  return (
    <button
      type="button"
      className="now-playing-trigger"
      onClick={() => setNowPlayingOpen(true)}
      aria-label="Dónde estás escuchando"
      title="Dónde estás escuchando"
    >
      <Headphones size={17} strokeWidth={2} />
      {hasSomethingToShow && <span className="now-playing-dot" aria-hidden="true" />}
    </button>
  );
}
