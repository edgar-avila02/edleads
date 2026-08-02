import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const transportTestimonials = [
  {
    name: "Marcos Silva",
    business: "Aluguel de Vans - Tatuapé, SP",
    text: "Recebo pedidos de cotação para viagens no fim de semana quase todos os dias. O investimento para aparecer no Google se pagou na primeira semana e a van não fica mais parada.",
    rating: 5
  },
  {
    name: "Roberto",
    business: "Fretamento e Vans - Guarulhos, SP",
    text: "O pessoal foca muito em quem está perto. Os clientes já chegam sabendo o que querem, só me perguntam os horários disponíveis e fecham a locação.",
    rating: 5
  },
  {
    name: "Carlos",
    business: "Transporte Executivo - Moema, SP",
    text: "O volume de mensagens no WhatsApp aumentou drasticamente. É impressionante como as pessoas que buscam no Google têm muito mais intenção de contratar.",
    rating: 5
  },
  {
    name: "Andressa",
    business: "Logística e Fretes Rápidos - Zona Sul, SP",
    text: "Aumentamos em 40% o número de cotações para entregas. O melhor é que o cliente já cai no WhatsApp do setor comercial focado na nossa região.",
    rating: 5
  }
];

const TestimonialCard = ({ testimonial }: { testimonial: any }) => (
  <div className="bg-white p-10 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 flex flex-col h-full group hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-500 relative overflow-hidden">
    {/* Subtle gradient corner */}
    <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-corporate-blueAccent/20 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

    <div className="flex gap-1.5 mb-6 relative z-10">
      {[...Array(testimonial.rating)].map((_, i) => (
        <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400 drop-shadow-sm" />
      ))}
    </div>
    <p className="text-gray-600 font-light text-lg italic mb-8 flex-grow leading-relaxed relative z-10">"{testimonial.text}"</p>
    <div className="mt-auto relative z-10">
        <h4 className="font-bold text-corporate-dark text-lg">{testimonial.name}</h4>
      <p className="text-sm text-gray-500 font-medium">{testimonial.business}</p>
    </div>
  </div>
);

const Testimonials = () => {
  return (
    <section id="depoimentos" className="py-32 bg-white overflow-hidden relative">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-corporate-light/50 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-corporate-dark mb-6 tracking-tight">
              Resultados reais no segmento de serviços de transporte<span className="text-corporate-blueAccent">.</span>
            </h2>
            <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto">
              Veja o que dizem os nossos clientes que já estão lotando a agenda.
            </p>
          </motion.div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10 max-w-5xl mx-auto">
          {transportTestimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <TestimonialCard testimonial={t} />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
