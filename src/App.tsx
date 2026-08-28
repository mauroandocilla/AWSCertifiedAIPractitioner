import { HashRouter, Routes, Route } from 'react-router-dom';
import Landing from './components/Landing.tsx';
import Layout from './components/Layout.tsx';
import DomainPage from './components/DomainPage.tsx';
import ServiceScopePage from './components/ServiceScopePage.tsx';
import GlossaryPage from './components/GlossaryPage.tsx';
import ResourcesPage from './components/ResourcesPage.tsx';
import ExamFormatPage from './components/ExamFormatPage.tsx';
import QuizListPage from './components/QuizListPage.tsx';
import QuizSessionPage from './components/QuizSessionPage.tsx';
import Footer from './components/Footer.tsx';
import ThemeToggle from './components/ThemeToggle.tsx';
import ScrollToTop from './components/ScrollToTop.tsx';

export default function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <ThemeToggle />
      <div className="wrap">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route element={<Layout />}>
            <Route path="/dominio/:n" element={<DomainPage />} />
            <Route path="/servicios" element={<ServiceScopePage />} />
            <Route path="/glosario" element={<GlossaryPage />} />
            <Route path="/como-estudiarlo" element={<ResourcesPage />} />
            <Route path="/formato-examen" element={<ExamFormatPage />} />
            <Route path="/quiz" element={<QuizListPage />} />
            <Route path="/quiz/:setNumber" element={<QuizSessionPage />} />
          </Route>
        </Routes>
        <Footer />
      </div>
    </HashRouter>
  );
}
