import { motion } from 'framer-motion';
import { Search, MousePointerClick, MessageCircle } from 'lucide-react';

const steps = [
  {
    icon: <Search className="w-8 h-8 text-corporate-blueAccent" />,
    title: "1. Presença direcionada",
    description: "Geramos contatos orgânicos através do Google, focados exatamente em quem pesquisa pelos seus serviços na sua região em SP."
  },
  {
    icon: <MousePointerClick className="w-8 h-8 text-corporate-blueAccent" />,
    title: "2. Clique e redirecionamento",
    description: "Ao encontrar sua empresa, o cliente em potencial é direcionado imediatamente e sem atritos para o seu WhatsApp."
  },
  {
    icon: <MessageCircle className="w-8 h-8 text-whatsapp" />,
    title: "3. Lead qualificado",
    description: "O lead chega no seu WhatsApp pronto para tirar dúvidas e fechar negócio. Só depende do seu comercial!"
  }
];

const HowItWorks = () => {
  return (
    <section id="como-funciona" className="py-32 bg-corporate-light relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-corporate-border to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-corporate-dark mb-6 tracking-tight">
              Como funciona o nosso serviço
            </h2>
            <p className="text-xl text-gray-600 font-light">
              Um processo validado e focado em velocidade. O poder do Google direcionado diretamente ao seu WhatsApp.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 relative">
          {/* Connector line for desktop */}
          <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-transparent via-gray-300 to-transparent -z-10"></div>

          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white p-10 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-500 relative group"
            >
              <div className="w-20 h-20 rounded-2xl bg-gray-50 flex items-center justify-center mb-8 border border-gray-100 group-hover:scale-110 group-hover:bg-blue-50 transition-all duration-500 shadow-sm mx-auto md:mx-0">
                {step.icon}
              </div>
              <h3 className="text-2xl font-bold text-corporate-dark mb-4 text-center md:text-left">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed font-light text-lg text-center md:text-left">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
