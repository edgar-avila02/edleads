import { motion } from 'framer-motion';
import { Search, MousePointerClick, MessageCircle } from 'lucide-react';

const features = [
  {
    icon: <Search className="w-8 h-8 text-corporate-blueAccent" />,
    title: "Tráfego do Google",
    description: "Utilizamos keywords de fundo de funil para alcançar pessoas que já estão buscando ativamente pelo seu serviço."
  },
  {
    icon: <MousePointerClick className="w-8 h-8 text-corporate-blueAccent" />,
    title: "Captação",
    description: "O usuário encontra suas informações de forma clara, atrativa e entra em contato com zero fricção."
  },
  {
    icon: <MessageCircle className="w-8 h-8 text-whatsapp" />,
    title: "Direcionamento",
    description: "O lead é redirecionado ao seu WhatsApp em tempo real, já qualificado e pronto para fechar negócio."
  }
];

const Services = () => {
  return (
    <section id="servicos" className="py-32 bg-white text-corporate-dark relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-corporate-blueAccent/5 blur-[120px] rounded-full pointer-events-none opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
              Serviço
            </h2>
            <p className="text-xl text-gray-600 font-light">
              Nosso fluxo focado 100% na geração de contatos reais e imediatos.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-white border border-gray-100 rounded-3xl p-10 group hover:-translate-y-2 transition-all duration-500 text-center flex flex-col items-center shadow-lg hover:shadow-[0_20px_40px_rgba(37,99,235,0.08)] hover:border-corporate-blueAccent/30"
            >
              <div className="w-20 h-20 bg-corporate-light rounded-2xl flex items-center justify-center mb-8 border border-gray-200 group-hover:scale-110 transition-transform duration-500">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed font-light text-lg">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
