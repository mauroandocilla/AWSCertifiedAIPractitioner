import Header from './components/Header.tsx';
import DomainWeights from './components/DomainWeights.tsx';
import TopNav from './components/TopNav.tsx';
import IntroNote from './components/IntroNote.tsx';
import Domain1 from './components/Domain1.tsx';
import Domain2 from './components/Domain2.tsx';
import Domain3 from './components/Domain3.tsx';
import Domain4 from './components/Domain4.tsx';
import Domain5 from './components/Domain5.tsx';
import Glossary from './components/Glossary.tsx';
import ServiceScope from './components/ServiceScope.tsx';
import Resources from './components/Resources.tsx';
import Footer from './components/Footer.tsx';

export default function App() {
  return (
    <div className="wrap">
      <Header />
      <DomainWeights />
      <TopNav />
      <IntroNote />
      <Domain1 />
      <Domain2 />
      <Domain3 />
      <Domain4 />
      <Domain5 />
      <Glossary />
      <ServiceScope />
      <Resources />
      <Footer />
    </div>
  );
}
