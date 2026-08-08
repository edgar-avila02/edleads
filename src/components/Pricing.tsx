import { motion } from 'framer-motion';
import { CheckCircle2, MessageCircle } from 'lucide-react';

const Pricing = () => {
  return (
    <section id="precos" className="py-32 bg-corporate-light relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-corporate-dark mb-6 tracking-tight">
              Escolha o modelo ideal para o seu negócio<span className="text-corporate-blueAccent">.</span>
            </h2>
            <p className="text-xl text-gray-600 font-light">
              Transparência total para você começar a receber leads hoje.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto items-center">
          
          {/* Card 1: Plano Mensal Fixo */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl p-10 lg:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-shadow duration-500"
          >
            <h3 className="text-2xl font-bold text-corporate-dark mb-2">Plano mensal fixo</h3>
            <div className="flex items-baseline gap-2 mb-8 border-b border-gray-100 pb-8">
              <span className="text-4xl lg:text-5xl font-extrabold text-corporate-dark tracking-tight">Sob consulta</span>
            </div>
            
            <ul className="space-y-5 mb-10">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-corporate-blueAccent flex-shrink-0" />
                <span className="text-gray-600">Volume de leads sem limite de custo adicional</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-corporate-blueAccent flex-shrink-0" />
                <span className="text-gray-600">Previsibilidade financeira total</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-corporate-blueAccent flex-shrink-0" />
                <span className="text-gray-600">Ideal para empresas que querem escalar</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-corporate-blueAccent flex-shrink-0" />
                <span className="text-gray-600">Melhor custo-benefício no longo prazo</span>
              </li>
            </ul>
            
            <a 
              href="https://wa.me/5511944437690?text=Olá, gostaria de saber como funciona o serviço de vocês?"
              className="block w-full py-4 px-6 rounded-full font-bold text-center border-2 border-corporate-dark text-corporate-dark hover:bg-corporate-dark hover:text-white transition-all duration-300"
            >
              Contratar plano mensal
            </a>
          </motion.div>

          {/* Card 2: Plano por Contato (Destaque) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-panel-dark rounded-3xl p-10 lg:p-12 shadow-2xl relative transform md:-translate-y-4 border border-corporate-blueAccent/30 group hover:border-corporate-blueAccent transition-colors duration-500"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-corporate-blueAccent to-whatsapp rounded-t-3xl"></div>
            
            <div className="absolute top-0 right-8 transform -translate-y-1/2">
              <span className="bg-gradient-to-r from-corporate-blueAccent to-blue-400 text-white text-xs font-bold tracking-widest uppercase py-2 px-6 rounded-full shadow-lg">
                Mais flexível
              </span>
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-2 mt-4">Plano por contato</h3>
            <div className="flex items-baseline gap-2 mb-8 border-b border-white/10 pb-8">
              <span className="text-4xl lg:text-5xl font-extrabold text-white tracking-tight">Sob consulta</span>
            </div>
            
            <ul className="space-y-5 mb-10">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-whatsapp flex-shrink-0" />
                <span className="text-gray-300">Pague apenas pelos contatos recebidos</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-whatsapp flex-shrink-0" />
                <span className="text-gray-300">Sem mensalidade fixa</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-whatsapp flex-shrink-0" />
                <span className="text-gray-300">Ideal para quem quer testar o serviço</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-whatsapp flex-shrink-0" />
                <span className="text-gray-300">Flexibilidade total</span>
              </li>
            </ul>
            
            <a 
              href="https://wa.me/5511944437690?text=Olá, gostaria de saber como funciona o serviço de vocês?"
              className="block w-full py-4 px-6 rounded-full font-bold text-center bg-whatsapp hover:bg-whatsapp-hover text-white transition-all duration-300 shadow-[0_4px_20px_rgba(37,211,102,0.3)] hover:shadow-[0_6px_25px_rgba(37,211,102,0.4)]"
            >
              Começar por lead recebido
            </a>
          </motion.div>
        </div>

        {/* CTA Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 max-w-4xl mx-auto bg-gradient-to-r from-corporate-dark to-corporate-darker rounded-3xl p-10 flex flex-col md:flex-row items-center justify-between gap-8 border border-white/5 shadow-2xl relative overflow-hidden group"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-corporate-blueAccent/20 to-transparent blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          
          <div className="relative z-10">
            <h4 className="text-2xl font-bold text-white mb-2">Dúvidas sobre qual escolher?</h4>
            <p className="text-gray-400 font-light text-lg">Fale com nosso consultor no WhatsApp agora e receba uma recomendação personalizada.</p>
          </div>
          <a 
            href="https://wa.me/5511944437690?text=Olá, gostaria de saber como funciona o serviço de vocês?"
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-10 flex-shrink-0 inline-flex items-center gap-2 bg-white text-corporate-dark px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-colors shadow-lg transform hover:-translate-y-1"
          >
            <MessageCircle className="w-5 h-5 text-whatsapp" />
            Falar com consultor
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Pricing;
