import { HashRouter, Routes, Route } from 'react-router-dom';
import Landing from './components/Landing.tsx';
import Layout from './components/Layout.tsx';
import DomainPage from './components/DomainPage.tsx';
import ServiceScopePage from './components/ServiceScopePage.tsx';
import GlossaryPage from './components/GlossaryPage.tsx';
import ConceptMapPage from './components/ConceptMapPage.tsx';
import StudyJourneyPage from './components/StudyJourneyPage.tsx';
import JourneyMapPage from './components/JourneyMapPage.tsx';
import ResourcesPage from './components/ResourcesPage.tsx';
import ExamFormatPage from './components/ExamFormatPage.tsx';
import QuizListPage from './components/QuizListPage.tsx';
import QuizSessionPage from './components/QuizSessionPage.tsx';
import QuizV2Page from './components/QuizV2Page.tsx';
import ExamPage from './components/ExamPage.tsx';
import Footer from './components/Footer.tsx';
import ThemeToggle from './components/ThemeToggle.tsx';
import DomainSearch from './components/DomainSearch.tsx';
import ScrollToTop from './components/ScrollToTop.tsx';
import NowPlayingButton from './components/NowPlayingButton.tsx';
import { GlossaryAudioProvider } from './components/GlossaryAudioProvider.tsx';

export default function App() {
  return (
    <HashRouter>
      {/* Wraps everything so GlossaryEntryContent (arbitrarily deep inside
          Routes) can reach the read-aloud session -- and so its own mini-
          player renders as a DOM sibling of .wrap, never nested inside a
          page's own layout. See GlossaryAudioProvider.tsx for why that
          nesting specifically matters on mobile. */}
      <GlossaryAudioProvider>
        <ScrollToTop />
        <DomainSearch />
        <NowPlayingButton />
        <ThemeToggle />
        <div className="wrap">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route element={<Layout />}>
              <Route path="/dominio/:n" element={<DomainPage />} />
              <Route path="/servicios" element={<ServiceScopePage />} />
              <Route path="/glosario" element={<GlossaryPage />} />
              <Route path="/mapa-conceptual" element={<ConceptMapPage />} />
              <Route path="/recorrido" element={<StudyJourneyPage />} />
              <Route path="/mapa-de-experiencia" element={<JourneyMapPage />} />
              <Route path="/como-estudiarlo" element={<ResourcesPage />} />
              <Route path="/formato-examen" element={<ExamFormatPage />} />
              <Route path="/quiz" element={<QuizListPage />} />
              <Route path="/quiz/:setNumber" element={<QuizSessionPage />} />
              <Route path="/quiz-v2" element={<QuizV2Page />} />
              <Route path="/examen" element={<ExamPage />} />
            </Route>
          </Routes>
          <Footer />
        </div>
      </GlossaryAudioProvider>
    </HashRouter>
  );
}
