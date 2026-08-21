import { MessageCircle, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Logo Edleads.jpeg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-[#0D131D]/95 backdrop-blur-xl border-b border-white/10 shadow-lg transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center gap-3 group cursor-pointer">
            <img 
              src={logo} 
              alt="Edleads" 
              className="h-[35px] sm:h-[40px] md:h-[45px] lg:h-[50px] w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <span className="font-extrabold text-2xl text-white tracking-tight hidden sm:block">Edleads</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-10">
            <Link to="/servicos" className="text-gray-300 hover:text-white font-semibold text-sm uppercase tracking-wider transition-colors relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-corporate-blueAccent after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">Serviço</Link>
            <Link to="/depoimentos" className="text-gray-300 hover:text-white font-semibold text-sm uppercase tracking-wider transition-colors relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-corporate-blueAccent after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">Depoimentos</Link>
            <Link to="/precos" className="text-gray-300 hover:text-white font-semibold text-sm uppercase tracking-wider transition-colors relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-corporate-blueAccent after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">Preços</Link>
            <Link to="/sobre-nos" className="text-gray-300 hover:text-white font-semibold text-sm uppercase tracking-wider transition-colors relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-corporate-blueAccent after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">Sobre nós</Link>
          </nav>

          {/* CTA and Actions */}
          <div className="hidden md:flex items-center gap-5">
            <a 
              href="https://wa.me/5511944437690?text=Olá, gostaria de saber como funciona o serviço de vocês?" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-corporate-blueAccent hover:bg-blue-600 text-white px-7 py-3 rounded-full font-bold text-sm transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] transform hover:-translate-y-0.5 border border-corporate-blueAccent/50"
            >
              <MessageCircle className="w-5 h-5 text-white" />
              Falar no WhatsApp
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white focus:outline-none p-2"
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
            <Link to="/servicos" onClick={() => setIsMenuOpen(false)} className="block px-4 py-3 rounded-xl text-base font-bold text-gray-800 hover:text-corporate-blueAccent hover:bg-blue-50/50 transition-colors">Serviço</Link>
            <Link to="/depoimentos" onClick={() => setIsMenuOpen(false)} className="block px-4 py-3 rounded-xl text-base font-bold text-gray-800 hover:text-corporate-blueAccent hover:bg-blue-50/50 transition-colors">Depoimentos</Link>
            <Link to="/precos" onClick={() => setIsMenuOpen(false)} className="block px-4 py-3 rounded-xl text-base font-bold text-gray-800 hover:text-corporate-blueAccent hover:bg-blue-50/50 transition-colors">Preços</Link>
            <Link to="/sobre-nos" onClick={() => setIsMenuOpen(false)} className="block px-4 py-3 rounded-xl text-base font-bold text-gray-800 hover:text-corporate-blueAccent hover:bg-blue-50/50 transition-colors">Sobre nós</Link>

            <a 
              href="https://wa.me/5511944437690?text=Olá, gostaria de saber como funciona o serviço de vocês?"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 flex items-center justify-center gap-2 bg-corporate-blueAccent hover:bg-blue-600 text-white px-4 py-4 rounded-xl font-bold shadow-[0_0_20px_rgba(37,99,235,0.4)] border border-corporate-blueAccent/50 transition-all"
            >
              <MessageCircle className="w-6 h-6 text-white" />
              Falar no WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
