import { MessageCircle, Menu, X, Contrast } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isInverted, setIsInverted] = useState(false);

  const toggleInvertColors = () => {
    document.documentElement.classList.toggle('invert-colors');
    setIsInverted(!isInverted);
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-white/20 shadow-[0_4px_30px_rgba(0,0,0,0.05)] transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center gap-3 group cursor-pointer">
            <div className="w-10 h-10 bg-corporate-dark rounded-xl flex items-center justify-center shadow-md group-hover:bg-corporate-blueAccent transition-colors duration-300">
              <span className="text-white font-extrabold text-xl tracking-tight">Ed</span>
            </div>
            <span className="font-extrabold text-2xl text-corporate-dark tracking-tight hidden sm:block">Edleads<span className="text-corporate-blueAccent">.</span></span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-10">
            <Link to="/como-funciona" className="text-gray-600 hover:text-corporate-dark font-semibold text-sm uppercase tracking-wider transition-colors relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-corporate-blueAccent after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">Como funciona</Link>
            <Link to="/servicos" className="text-gray-600 hover:text-corporate-dark font-semibold text-sm uppercase tracking-wider transition-colors relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-corporate-blueAccent after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">Serviços</Link>
            <Link to="/depoimentos" className="text-gray-600 hover:text-corporate-dark font-semibold text-sm uppercase tracking-wider transition-colors relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-corporate-blueAccent after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">Depoimentos</Link>
            <Link to="/precos" className="text-gray-600 hover:text-corporate-dark font-semibold text-sm uppercase tracking-wider transition-colors relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-corporate-blueAccent after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">Preços</Link>
          </nav>

          {/* CTA and Actions */}
          <div className="hidden md:flex items-center gap-5">
            <button
              onClick={toggleInvertColors}
              className="p-2.5 text-gray-400 hover:text-corporate-dark hover:bg-gray-100 rounded-full transition-all duration-300"
              title="Inverter cores"
            >
              <Contrast className="w-5 h-5" />
            </button>
            <a 
              href="https://wa.me/5511944437690?text=Olá, gostaria de saber como funciona o serviço de vocês?" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-corporate-dark hover:bg-corporate-darker text-white px-7 py-3 rounded-full font-bold text-sm transition-all shadow-[0_4px_14px_0_rgba(15,23,42,0.39)] hover:shadow-[0_6px_20px_rgba(15,23,42,0.23)] transform hover:-translate-y-0.5"
            >
              <MessageCircle className="w-4 h-4 text-whatsapp" />
              Falar no WhatsApp
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-corporate-dark focus:outline-none p-2"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-3xl border-t border-gray-100 absolute w-full shadow-2xl">
          <div className="px-4 pt-4 pb-6 space-y-2">
            <Link to="/como-funciona" onClick={() => setIsMenuOpen(false)} className="block px-4 py-3 rounded-xl text-base font-bold text-gray-800 hover:text-corporate-blueAccent hover:bg-blue-50/50 transition-colors">Como funciona</Link>
            <Link to="/servicos" onClick={() => setIsMenuOpen(false)} className="block px-4 py-3 rounded-xl text-base font-bold text-gray-800 hover:text-corporate-blueAccent hover:bg-blue-50/50 transition-colors">Serviços</Link>
            <Link to="/depoimentos" onClick={() => setIsMenuOpen(false)} className="block px-4 py-3 rounded-xl text-base font-bold text-gray-800 hover:text-corporate-blueAccent hover:bg-blue-50/50 transition-colors">Depoimentos</Link>
            <Link to="/precos" onClick={() => setIsMenuOpen(false)} className="block px-4 py-3 rounded-xl text-base font-bold text-gray-800 hover:text-corporate-blueAccent hover:bg-blue-50/50 transition-colors">Preços</Link>
            
            <button
              onClick={toggleInvertColors}
              className="flex items-center gap-3 w-full px-4 py-3 mt-2 rounded-xl text-base font-bold text-gray-800 hover:text-corporate-blueAccent hover:bg-blue-50/50 text-left transition-colors"
            >
              <Contrast className="w-5 h-5" />
              {isInverted ? 'Cores normais' : 'Inverter cores'}
            </button>

            <a 
              href="https://wa.me/5511944437690?text=Olá, gostaria de saber como funciona o serviço de vocês?"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 flex items-center justify-center gap-2 bg-corporate-dark text-white px-4 py-4 rounded-xl font-bold shadow-lg"
            >
              <MessageCircle className="w-5 h-5 text-whatsapp" />
              Falar no WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
