import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-corporate-darker border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Info */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-corporate-dark rounded-xl flex items-center justify-center border border-white/10 shadow-lg">
                <span className="text-white font-extrabold text-xl tracking-tight">Ed</span>
              </div>
              <span className="font-extrabold text-2xl text-white tracking-tight">Edleads<span className="text-corporate-blueAccent">.</span></span>
            </div>
            <p className="text-gray-400 max-w-sm font-light leading-relaxed">
              Especialistas em gerar vendas para negócios locais em São Paulo via Google. Sem complicações, direto no seu WhatsApp.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-6 tracking-wider text-sm uppercase">Links rápidos</h4>
            <ul className="space-y-4">
              <li><Link to="/como-funciona" className="text-gray-400 hover:text-corporate-blueAccent transition-colors font-light">Como funciona</Link></li>
              <li><Link to="/servicos" className="text-gray-400 hover:text-corporate-blueAccent transition-colors font-light">Serviços</Link></li>
              <li><Link to="/depoimentos" className="text-gray-400 hover:text-corporate-blueAccent transition-colors font-light">Depoimentos</Link></li>
              <li><Link to="/precos" className="text-gray-400 hover:text-corporate-blueAccent transition-colors font-light">Preços</Link></li>
              <li><Link to="/termos" className="text-gray-400 hover:text-corporate-blueAccent transition-colors font-light">Termos de uso</Link></li>
              <li><Link to="/politica-de-privacidade" className="text-gray-400 hover:text-corporate-blueAccent transition-colors font-light">Política de privacidade</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white mb-6 tracking-wider text-sm uppercase">Contato</h4>
            <ul className="space-y-5">
              <li className="text-gray-400">
                <span className="block text-sm text-gray-500 mb-1 font-medium">WhatsApp oficial</span>
                <a href="https://wa.me/5511944437690?text=Olá, gostaria de saber como funciona o serviço de vocês?" className="font-bold text-white hover:text-whatsapp transition-colors text-lg">
                  (11) 94443-7690
                </a>
              </li>
              <li className="text-gray-400">
                <span className="block text-sm text-gray-500 mb-1 font-medium">E-mail de suporte</span>
                <a href="mailto:contato@edleads.com.br" className="font-semibold text-white hover:text-corporate-blueAccent transition-colors">
                  contato@edleads.com.br
                </a>
              </li>
              <li className="text-gray-400 mt-6 pt-6 border-t border-white/5">
                <span className="block text-sm text-gray-500 mb-1 font-medium">Região de atendimento</span>
                <span className="font-medium text-gray-300">São Paulo - SP</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm font-light">
            © 2026 Edleads. Todos os direitos reservados.
          </p>
          <div className="flex gap-4">
            <span className="text-xs text-gray-600 uppercase tracking-widest font-semibold">Desenvolvido com foco em alta conversão.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
