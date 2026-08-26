import { HashRouter, Routes, Route } from 'react-router-dom';
import Landing from './components/Landing.tsx';
import DomainPage from './components/DomainPage.tsx';
import ServiceScopePage from './components/ServiceScopePage.tsx';
import GlossaryPage from './components/GlossaryPage.tsx';
import ResourcesPage from './components/ResourcesPage.tsx';
import Footer from './components/Footer.tsx';
import ThemeToggle from './components/ThemeToggle.tsx';

export default function App() {
  return (
    <HashRouter>
      <ThemeToggle />
      <div className="wrap">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/dominio/:n" element={<DomainPage />} />
          <Route path="/servicios" element={<ServiceScopePage />} />
          <Route path="/glosario" element={<GlossaryPage />} />
          <Route path="/como-estudiarlo" element={<ResourcesPage />} />
        </Routes>
        <Footer />
      </div>
    </HashRouter>
  );
}
