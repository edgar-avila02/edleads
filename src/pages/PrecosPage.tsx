
import { Check, Info, ShieldCheck, ArrowRight, Star } from 'lucide-react';

const PrecosPage = () => {
  const plans = [
    {
      name: "Plano Mensal Fixo",
      description: "Ideal para empresas que querem escalar de forma previsível.",
      price: "R$ 1.600",
      period: "/ mês",
      popular: true,
      tag: "Mais Vantajoso",
      features: [
        "Volume de leads sem limite de custo adicional",
        "Previsibilidade financeira total",
        "Melhor custo-benefício no longo prazo",
        "Suporte prioritário"
      ],
      buttonText: "Contratar plano mensal",
      buttonLink: "https://wa.me/5511944437690?text=Olá, gostaria de saber como funciona o serviço de vocês?"
    },
    {
      name: "Plano por Contato",
      description: "Ideal para quem quer testar o serviço e começar aos poucos.",
      price: "R$ 30",
      period: "/ lead recebido",
      popular: false,
      tag: "Mais Flexível",
      features: [
        "Pague apenas pelos contatos recebidos",
        "Sem mensalidade fixa",
        "Flexibilidade total de investimento",
        "Suporte em horário comercial"
      ],
      buttonText: "Começar por lead recebido",
      buttonLink: "https://wa.me/5511944437690?text=Olá, gostaria de saber como funciona o serviço de vocês?"
    }
  ];

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="bg-corporate-dark py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
            Escolha o modelo ideal para o <span className="text-corporate-blueAccent">seu negócio</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Transparência total para você começar a receber leads ainda hoje. Sem pegadinhas.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 relative">
        <div className="max-w-7xl mx-auto">
          {/* Trust Badge */}
          <div className="flex justify-center mb-12 -mt-32 relative z-20">
            <div className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-lg border border-gray-100 text-corporate-dark font-bold text-sm">
              <ShieldCheck className="w-5 h-5 text-whatsapp" />
              Sem taxas escondidas. Cancele ou altere seu plano quando quiser.
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto relative z-10">
            {plans.map((plan, idx) => (
              <div key={idx} className={`bg-white rounded-3xl p-8 border-2 ${plan.popular ? 'border-corporate-blueAccent shadow-[0_8px_30px_rgb(0,0,0,0.12)] relative transform md:-translate-y-4' : 'border-gray-100 shadow-md mt-4'}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-corporate-blueAccent text-white px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider flex items-center gap-1 shadow-lg">
                    <Star className="w-4 h-4 fill-white" /> Recomendado
                  </div>
                )}
                
                <div className="mb-2 inline-block px-3 py-1 bg-gray-100 rounded-lg text-xs font-bold text-gray-600 uppercase tracking-wider">
                  {plan.tag}
                </div>
                
                <h3 className="text-3xl font-extrabold text-corporate-dark mb-3 mt-4">{plan.name}</h3>
                <p className="text-gray-500 text-sm mb-8 h-10">{plan.description}</p>
                
                <div className="mb-8 pb-8 border-b border-gray-100">
                  <span className="text-5xl font-extrabold text-corporate-dark">{plan.price}</span>
                  <span className="text-gray-500 font-medium ml-2">{plan.period}</span>
                </div>
                
                <ul className="space-y-4 mb-10">
                  {plan.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-corporate-blueAccent" />
                      </div>
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <a 
                  href={plan.buttonLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full flex items-center justify-center gap-2 py-4 rounded-xl font-bold transition-all ${
                    plan.popular 
                      ? 'bg-corporate-blueAccent hover:bg-blue-600 text-white shadow-lg hover:shadow-xl hover:-translate-y-1' 
                      : 'bg-white hover:bg-gray-50 text-corporate-dark border-2 border-gray-200 hover:border-gray-300'
                  }`}
                >
                  {plan.buttonText}
                  {plan.popular && <ArrowRight className="w-5 h-5" />}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-corporate-dark mb-4">Dúvidas sobre os Planos</h2>
            <p className="text-gray-600">Esclareça os detalhes comerciais antes de fechar negócio.</p>
          </div>
          
          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
              <h4 className="font-bold text-lg text-corporate-dark mb-2 flex items-center gap-2">
                <Info className="w-5 h-5 text-corporate-blueAccent" /> 
                Como é feita a contagem dos leads no plano por contato?
              </h4>
              <p className="text-gray-600">Nós instalamos um rastreador no botão do seu WhatsApp que contabiliza exatamente quantas pessoas clicaram e iniciaram uma conversa com a sua empresa vindo dos nossos anúncios.</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
              <h4 className="font-bold text-lg text-corporate-dark mb-2 flex items-center gap-2">
                <Info className="w-5 h-5 text-corporate-blueAccent" /> 
                Existe fidelidade ou multa?
              </h4>
              <p className="text-gray-600">Não trabalhamos com contratos de fidelidade que prendem o cliente. Confiamos no nosso resultado. Caso queira cancelar, pedimos apenas um aviso prévio de 30 dias para desligar as campanhas corretamente.</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
              <h4 className="font-bold text-lg text-corporate-dark mb-2 flex items-center gap-2">
                <Info className="w-5 h-5 text-corporate-blueAccent" /> 
                Quais formas de pagamento são aceitas?
              </h4>
              <p className="text-gray-600">O Plano Mensal Fixo é cobrado via boleto, PIX ou cartão de crédito no início do ciclo. O Plano por Contato é apurado ao final de cada quinzena e faturado via PIX ou boleto.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PrecosPage;
