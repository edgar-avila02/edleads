
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import { lazy, Suspense } from 'react';

const ComoFuncionaPage = lazy(() => import('./pages/ComoFuncionaPage'));
const ServicosPage = lazy(() => import('./pages/ServicosPage'));
const DepoimentosPage = lazy(() => import('./pages/DepoimentosPage'));
const PrecosPage = lazy(() => import('./pages/PrecosPage'));
const TermosDeUsoPage = lazy(() => import('./pages/TermosDeUsoPage'));
const PrivacidadePage = lazy(() => import('./pages/PrivacidadePage'));

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen font-sans text-corporate-dark bg-white">
        <Header />
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-corporate-blueAccent">Carregando...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/como-funciona" element={<ComoFuncionaPage />} />
            <Route path="/servicos" element={<ServicosPage />} />
            <Route path="/depoimentos" element={<DepoimentosPage />} />
            <Route path="/precos" element={<PrecosPage />} />
            <Route path="/termos" element={<TermosDeUsoPage />} />
            <Route path="/politica-de-privacidade" element={<PrivacidadePage />} />
          </Routes>
        </Suspense>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
