import { motion } from 'framer-motion';
import { BadgeCheck, DollarSign, Handshake, ShieldCheck } from 'lucide-react';

const highlights = [
  {
    icon: DollarSign,
    title: 'Custo por anúncio?',
    description: 'Zero! não cobramos valor do anuncio.',
    accent: 'text-green-500',
    bg: 'bg-green-500/10',
    border: 'border-green-500/20',
  },
  {
    icon: Handshake,
    title: 'O que você paga?',
    description: 'Apenas o valor do serviço prestado.',
    accent: 'text-corporate-blueAccent',
    bg: 'bg-corporate-blueAccent/10',
    border: 'border-corporate-blueAccent/20',
  },
  {
    icon: ShieldCheck,
    title: 'Sem surpresas',
    description: 'Valor fixo ou por contato recebidos, sem taxas escondidas e sem custos extras de plataforma.',
    accent: 'text-amber-500',
    bg: 'bg-amber-500/10',
    border: 'border-amber-500/20',
  },
];

const AdCostHighlight = () => {
  return (
    <section className="relative py-20 overflow-hidden bg-corporate-dark">
      {/* Background decorativo */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-corporate-blueAccent/5 rounded-full blur-3xl" />
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-green-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Badge + Título */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 text-green-400 font-bold text-sm mb-6 border border-green-500/20">
            <BadgeCheck className="w-4 h-4" />
            Diferencial Exclusivo
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight text-white">
            Zero custo de <span className="text-green-400">anúncios</span>
          </h2>
          <p className="text-xl text-gray-400 font-light leading-relaxed">
            Diferente de outras agências, nós <strong className="text-white font-semibold">não repassamos o custo dos anúncios</strong> para você.
            Você paga apenas pela nossa mão de obra simples, transparente e sem surpresas.
          </p>
        </motion.div>

        {/* Cards de destaque */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`relative group rounded-2xl p-8 border ${item.border} bg-white/[0.03] backdrop-blur-sm hover:bg-white/[0.06] transition-all duration-300`}
            >
              <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl ${item.bg} mb-5`}>
                <item.icon className={`w-7 h-7 ${item.accent}`} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-gray-400 leading-relaxed">{item.description}</p>
              
              {/* Brilho sutil no hover */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* Banner de destaque principal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative rounded-3xl overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 via-corporate-blueAccent/20 to-green-600/20" />
          <div className="relative border border-green-500/20 rounded-3xl p-8 md:p-12 text-center backdrop-blur-sm">
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <DollarSign className="w-10 h-10 text-green-400" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-[2px] bg-red-500 rotate-45 rounded-full" />
                  </div>
                </div>
                <div className="text-left">
                  <p className="text-sm text-gray-400 font-medium">Custo do anúncio</p>
                  <p className="text-2xl font-extrabold text-red-400 line-through">R$ 0,00</p>
                </div>
              </div>

              <div className="hidden md:block w-px h-16 bg-gray-700" />

              <div className="flex items-center gap-4">
                <Handshake className="w-10 h-10 text-corporate-blueAccent" />
                <div className="text-left">
                  <p className="text-sm text-gray-400 font-medium">Você paga apenas</p>
                  <p className="text-2xl font-extrabold text-white">Mão de obra</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AdCostHighlight;
