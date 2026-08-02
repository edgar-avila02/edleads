
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ComoFuncionaPage from './pages/ComoFuncionaPage';
import ServicosPage from './pages/ServicosPage';
import DepoimentosPage from './pages/DepoimentosPage';
import PrecosPage from './pages/PrecosPage';
import TermosDeUsoPage from './pages/TermosDeUsoPage';
import PrivacidadePage from './pages/PrivacidadePage';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen font-sans text-corporate-dark bg-white">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/como-funciona" element={<ComoFuncionaPage />} />
          <Route path="/servicos" element={<ServicosPage />} />
          <Route path="/depoimentos" element={<DepoimentosPage />} />
          <Route path="/precos" element={<PrecosPage />} />
          <Route path="/termos" element={<TermosDeUsoPage />} />
          <Route path="/politica-de-privacidade" element={<PrivacidadePage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
