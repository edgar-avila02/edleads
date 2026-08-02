
import { Star, TrendingUp, Clock, MapPin, BadgeCheck, MessageCircle, ArrowRight } from 'lucide-react';

const DepoimentosPage = () => {
  const testimonials = [
    {
      name: "Marcos Silva",
      role: "Aluguel de Vans - Tatuapé, SP",
      content: "Recebo pedidos de cotação para viagens no fim de semana quase todos os dias. O investimento para aparecer no Google se pagou na primeira semana e a van não fica mais parada."
    },
    {
      name: "Roberto",
      role: "Fretamento e Vans - Guarulhos, SP",
      content: "O pessoal foca muito em quem está perto. Os clientes já chegam sabendo o que querem, só me perguntam os horários disponíveis e fecham a locação."
    },
    {
      name: "Carlos",
      role: "Transporte Executivo - Moema, SP",
      content: "O volume de mensagens no WhatsApp aumentou drasticamente. É impressionante como as pessoas que buscam no Google têm muito mais intenção de contratar."
    },
    {
      name: "Andressa",
      role: "Logística e Fretes Rápidos - Zona Sul, SP",
      content: "Aumentamos em 40% o número de cotações para entregas. O melhor é que o cliente já cai no WhatsApp do setor comercial focado na nossa região."
    }
  ];

  const metrics = [
    { icon: <TrendingUp className="w-6 h-6" />, value: "+40%", label: "Aumento Médio em Cotações" },
    { icon: <Clock className="w-6 h-6" />, value: "Segundos", label: "Tempo Médio de Resposta" },
    { icon: <MapPin className="w-6 h-6" />, value: "100%", label: "Focados na Grande SP" }
  ];

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="bg-corporate-dark text-white py-24 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-corporate-blueAccent rounded-full blur-[100px] opacity-20 -mr-40 -mt-40"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-corporate-blueAccent rounded-full blur-[100px] opacity-10 -ml-40 -mb-40"></div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">Resultados reais no <span className="text-corporate-blueAccent">segmento de transporte</span></h1>
          <p className="text-xl text-gray-300 mb-12">
            Veja o que dizem os nossos clientes que já estão lotando a agenda de fretamentos, viagens e entregas com o nosso método.
          </p>
          
          {/* Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
            {metrics.map((metric, idx) => (
              <div key={idx} className="flex flex-col items-center p-8 bg-white/5 rounded-3xl backdrop-blur-md border border-white/10 hover:bg-white/10 transition-colors">
                <div className="w-14 h-14 bg-corporate-blueAccent/20 rounded-2xl flex items-center justify-center text-corporate-blueAccent mb-4 border border-corporate-blueAccent/30">
                  {metric.icon}
                </div>
                <h3 className="text-3xl font-extrabold mb-2">{metric.value}</h3>
                <p className="text-sm text-gray-400 font-medium uppercase tracking-wider">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative">
                <div className="absolute top-8 right-8 text-gray-200">
                  <MessageCircle className="w-12 h-12 opacity-50" />
                </div>
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 text-lg mb-8 leading-relaxed italic relative z-10">"{item.content}"</p>
                <div className="border-t border-gray-50 pt-6">
                  <h4 className="font-bold text-corporate-dark flex items-center gap-1 mb-1">
                    {item.name}
                    <BadgeCheck className="w-4 h-4 text-corporate-blueAccent" />
                  </h4>
                  <p className="text-sm font-medium text-gray-500">{item.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-200 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-extrabold text-corporate-dark mb-6">A próxima história de sucesso será a sua!</h2>
          <p className="text-xl text-gray-600 mb-10">Feche novos contratos, lote sua agenda e volte aqui no futuro para deixar o seu depoimento 5 estrelas.</p>
          <a 
            href="https://wa.me/5511944437690?text=Olá, gostaria de saber como funciona o serviço de vocês?" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-corporate-blueAccent hover:bg-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Quero receber orçamentos
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </main>
  );
};

export default DepoimentosPage;
