import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: "Como os leads chegam até o meu WhatsApp?",
    answer: "Quando um cliente pesquisa pelo seu serviço em São Paulo, ele encontra o seu contato, clica, e é direcionado automaticamente para uma conversa no seu número de WhatsApp."
  },
  {
    question: "Como vocês garantem que os leads são da região de São Paulo?",
    answer: "Utilizamos a segmentação avançada de geolocalização do Google. Focamos nossa estratégia só no estado de São Paulo para que você apareça apenas para pessoas que partem do próprio estado."
  },
  {
    question: "Qual a diferença entre o plano mensal e por contato?",
    answer: "No plano mensal, você paga um valor fixo de serviço e não há limite de leads (o que vier é seu, sem custo extra nosso). No plano por contato, você não paga mensalidade, mas sim um valor fixo para cada lead qualificado que entrar no seu WhatsApp."
  },
  {
    question: "Preciso ter site próprio para começar?",
    answer: "Não! Nós criamos páginas de alta conversão (landing pages) e direcionamos a conversão para o seu WhatsApp."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-32 bg-white relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-corporate-dark mb-6 tracking-tight">
              Perguntas frequentes<span className="text-corporate-blueAccent">.</span>
            </h2>
            <p className="text-xl text-gray-600 font-light">
              Tire suas dúvidas e veja como é simples começar a receber leads.
            </p>
          </motion.div>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border border-gray-200 rounded-2xl overflow-hidden bg-white hover:border-corporate-blueAccent/50 transition-all duration-300 hover:shadow-md"
            >
              <button
                className="w-full px-8 py-6 flex items-center justify-between text-left focus:outline-none bg-white"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-bold text-corporate-dark text-lg pr-8">{faq.question}</span>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${openIndex === index ? 'bg-blue-50 text-corporate-blueAccent' : 'bg-gray-50 text-gray-400 hover:bg-gray-100'}`}>
                  <ChevronDown 
                    className={`w-5 h-5 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                  />
                </div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-8 pb-6 text-gray-600 leading-relaxed font-light text-lg">
                      <div className="pt-4 border-t border-gray-100">
                        {faq.answer}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
