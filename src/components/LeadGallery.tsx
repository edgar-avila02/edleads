import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

import img1 from '../../Solicitação dos leads/1.png';
import img2 from '../../Solicitação dos leads/2.png';
import img3 from '../../Solicitação dos leads/3.png';
import img4 from '../../Solicitação dos leads/4.png';
import img5 from '../../Solicitação dos leads/5.png';
import img6 from '../../Solicitação dos leads/6.png';

const LeadGallery = () => {
  // Array com os 6 prints reais
  const leads = [img1, img2, img3, img4, img5, img6];

  return (
    <section className="py-24 bg-corporate-light relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Cabecalho da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-corporate-blueAccent/10 text-corporate-blueAccent font-bold text-sm mb-6 border border-corporate-blueAccent/20">
              <MessageCircle className="w-4 h-4" />
              Resultados Comprovados
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight text-corporate-dark">
              Leads reais chegando todos os dias<span className="text-corporate-blueAccent">.</span>
            </h2>
            <p className="text-xl text-gray-600 font-light">
              Veja o padrão das mensagens que nossos parceiros recebem diretamente no WhatsApp. Pessoas qualificadas buscando pelo serviço!
            </p>
          </motion.div>
        </div>

        {/* Galeria Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {leads.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-3xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-gray-100 bg-white"
            >
              {/* Overlay de hover sutil */}
              <div className="absolute inset-0 bg-corporate-dark/0 group-hover:bg-corporate-dark/5 transition-colors duration-300 z-10 rounded-3xl"></div>
              
              <img 
                src={src} 
                alt={`Exemplo real de lead recebido no WhatsApp - Print ${index + 1}`}
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500 rounded-3xl"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default LeadGallery;
