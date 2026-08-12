import { motion } from 'framer-motion';
import { Target, TrendingUp, Search } from 'lucide-react';

const SobreNosPage = () => {
  return (
    <div className="pt-24 pb-16 min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden bg-corporate-dark text-white">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[600px] bg-corporate-blueAccent/20 blur-[150px] rounded-full pointer-events-none opacity-40"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-extrabold mb-8 tracking-tight"
          >
            Sobre a Edleads<span className="text-corporate-blueAccent">.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 font-light max-w-3xl mx-auto leading-relaxed"
          >
            Focados no crescimento exponencial de negócios locais em São Paulo.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="prose prose-lg md:prose-xl text-gray-600 font-light leading-relaxed mx-auto"
          >
            <p className="mb-8">
              A <strong>Edleads</strong> nasceu em <strong>2023</strong> com uma missão clara e objetiva: transformar a realidade de negócios locais em São Paulo através do maior ecossistema de buscas do mundo, o <strong>Google</strong>.
            </p>
            <p className="mb-8">
              Entendemos que estar bem posicionado digitalmente não é mais um luxo, mas uma questão de sobrevivência e crescimento sustentável. Por isso, não somos apenas uma agência de marketing, somos uma <strong>aceleradora de vendas e parceira de crescimento exponencial</strong>.
            </p>
            <p>
              Nosso processo é desenhado para eliminar curiosos e trazer para o seu WhatsApp apenas pessoas reais, da sua região, que já estão com a intenção de compra. Nós conectamos a demanda exata ao seu serviço de excelência.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-24 bg-corporate-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6 tracking-tight text-corporate-dark">
              Nosso DNA<span className="text-corporate-blueAccent">.</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-10 rounded-3xl shadow-lg border border-gray-100 hover:-translate-y-2 transition-transform duration-300 text-center"
            >
              <div className="w-16 h-16 bg-blue-50 text-corporate-blueAccent rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-corporate-dark mb-4">Foco em São Paulo</h3>
              <p className="text-gray-600 font-light">Conhecemos o mercado local. Direcionamos nossas estratégias para impactar quem está perto de você.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-10 rounded-3xl shadow-lg border border-gray-100 hover:-translate-y-2 transition-transform duration-300 text-center"
            >
              <div className="w-16 h-16 bg-blue-50 text-corporate-blueAccent rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Search className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-corporate-dark mb-4">Especialistas em Google</h3>
              <p className="text-gray-600 font-light">Dominamos a plataforma onde os seus melhores clientes estão procurando ativamente pelo seu serviço.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white p-10 rounded-3xl shadow-lg border border-gray-100 hover:-translate-y-2 transition-transform duration-300 text-center"
            >
              <div className="w-16 h-16 bg-blue-50 text-corporate-blueAccent rounded-2xl flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-corporate-dark mb-4">Crescimento Exponencial</h3>
              <p className="text-gray-600 font-light">Desde 2023 ajudamos empresas a escalarem seus resultados com previsibilidade de caixa.</p>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default SobreNosPage;
