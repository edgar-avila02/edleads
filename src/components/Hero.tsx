import { motion } from 'framer-motion';
import { MessageCircle, MapPin, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-28 pb-20 overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        poster="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80"
      >
        <source src="https://assets.mixkit.co/videos/preview/mixkit-business-team-working-together-in-office-4048-large.mp4" type="video/mp4" />
      </video>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-corporate-darker/95 via-corporate-dark/80 to-transparent"></div>
      <div className="absolute inset-0 z-0 bg-black/40 sm:bg-transparent"></div> {/* Fallback dark overlay for mobile */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel-dark text-white font-semibold text-sm mb-8 border border-white/10">
                <MapPin className="w-4 h-4 text-corporate-blueAccent" />
                <span className="opacity-90">Tráfego para negócios locais em SP</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-[1.1] mb-6 tracking-tight">
                Receba <span className="text-blue-400">leads qualificados</span> da região de São Paulo direto no seu <span className="text-whatsapp">WhatsApp</span>
              </h1>
              
              <p className="text-lg sm:text-xl text-gray-300 mb-10 max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed">
                Dominamos o Google para colocar clientes prontos para comprar falando com a sua equipe comercial todos os dias. Sem intermediários, sem complicação.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-5 justify-center lg:justify-start">
                <a 
                  href="#precos"
                  className="w-full sm:w-auto inline-flex justify-center items-center gap-3 bg-whatsapp hover:bg-whatsapp-hover text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-[0_0_20px_rgba(37,211,102,0.3)] hover:shadow-[0_0_30px_rgba(37,211,102,0.5)] transform hover:-translate-y-1"
                >
                  <MessageCircle className="w-6 h-6" />
                  Quero receber leads no WhatsApp
                </a>
              </div>
              
              <div className="mt-8 flex items-center justify-center lg:justify-start gap-3 text-sm text-gray-400 font-medium">
                <Zap className="w-4 h-4 text-amber-400" />
                <span>Atendimento rápido | Foco em negócios locais de SP</span>
              </div>
            </motion.div>
          </div>

          {/* Floating Badge (Comrade Web Style) */}
          <div className="lg:col-span-5 hidden lg:flex justify-end items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="relative w-full max-w-sm"
            >
              <div className="glass-panel-dark rounded-2xl p-6 relative overflow-hidden group hover:border-white/20 transition-colors duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="flex items-start gap-5 relative z-10">
                  <div className="w-14 h-14 rounded-full bg-whatsapp/20 flex items-center justify-center flex-shrink-0 border border-whatsapp/30 shadow-[0_0_15px_rgba(37,211,102,0.2)]">
                    <MessageCircle className="w-7 h-7 text-whatsapp" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-2 h-2 rounded-full bg-whatsapp animate-pulse"></div>
                      <p className="text-xs font-bold text-whatsapp uppercase tracking-wider">Novo lead local</p>
                    </div>
                    <p className="text-white font-medium text-lg leading-snug">"Olá, gostaria de um orçamento!"</p>
                  </div>
                </div>
              </div>
              
              {/* Decorative Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-corporate-blueAccent to-whatsapp rounded-2xl blur-2xl opacity-20 transition-opacity duration-500 -z-10"></div>
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
