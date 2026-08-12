
import { Target, MessageSquareShare, ArrowRight, Smartphone, Gauge } from 'lucide-react';

const ServicosPage = () => {
  const pillars = [
    {
      icon: <Target className="w-8 h-8 text-corporate-blueAccent" />,
      title: 'Tráfego do Google',
      description: 'Utilizamos keywords de fundo de funil para alcançar pessoas que já estão buscando ativamente pelo seu serviço.',
    },
    {
      icon: <Smartphone className="w-8 h-8 text-corporate-blueAccent" />,
      title: 'Captação',
      description: 'O usuário encontra suas informações de forma clara, atrativa e entra em contato com zero fricção.',
    },
    {
      icon: <MessageSquareShare className="w-8 h-8 text-corporate-blueAccent" />,
      title: 'Direcionamento',
      description: 'O lead é redirecionado ao seu WhatsApp em tempo real, já qualificado e pronto para fechar negócio.',
    }
  ];


  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="bg-gray-50 py-24 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-corporate-dark mb-6 tracking-tight">O fim das ligações <br className="hidden md:block"/><span className="text-corporate-blueAccent">frias e desqualificadas</span></h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nós conectamos quem tem o problema com quem tem a solução, usando os 3 pilares da conversão em alta velocidade.
          </p>
        </div>
      </section>

      {/* Pilares */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="grid md:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-3xl border border-gray-100 hover:shadow-lg transition-all">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                  {pillar.icon}
                </div>
                <h2 className="text-2xl font-bold text-corporate-dark mb-4">{pillar.title}</h2>
                <p className="text-lg text-gray-600">{pillar.description}</p>
              </div>
            ))}
          </div>

          {/* O que é fundo de funil */}
          <div className="bg-corporate-dark text-white p-8 md:p-12 rounded-3xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-corporate-blueAccent rounded-full blur-3xl opacity-20 -mr-20 -mt-20"></div>
            <h3 className="text-3xl font-bold mb-6 relative z-10">O segredo das "Keywords de Fundo de Funil"</h3>
            <p className="text-xl text-gray-300 mb-8 relative z-10 max-w-4xl leading-relaxed">
              Em vez de anunciar para pessoas que estão apenas curiosas (ex: <em>"como funciona o transporte executivo?"</em>), nós colocamos seu anúncio na frente de pessoas que já decidiram comprar e estão com o cartão na mão (ex: <strong>"contratar transporte executivo moema SP agora"</strong>). Isso muda todo o jogo das suas vendas.
            </p>
          </div>

          {/* Diferenciais Técnicos */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm flex items-start gap-6">
              <div className="bg-blue-50 p-4 rounded-full text-corporate-blueAccent shrink-0">
                <Smartphone className="w-8 h-8" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-corporate-dark mb-2">Design Mobile-First</h4>
                <p className="text-gray-600">Mais de 80% das buscas locais acontecem pelo celular. Nossas páginas são desenhadas especificamente para telas menores, garantindo botões de WhatsApp sempre ao alcance do polegar.</p>
              </div>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm flex items-start gap-6">
              <div className="bg-blue-50 p-4 rounded-full text-corporate-blueAccent shrink-0">
                <Gauge className="w-8 h-8" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-corporate-dark mb-2">Carregamento Ultrarrápido</h4>
                <p className="text-gray-600">Se a página demora mais de 3 segundos, o cliente sai. Nossa tecnologia de captação é leve e carrega quase instantaneamente, evitando perda de leads por lentidão.</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-corporate-blueAccent text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-extrabold mb-6">Quer aplicar esses 3 pilares na sua empresa?</h2>
          <p className="text-xl text-white/90 mb-10">Fale conosco e descubra o volume de buscas pelo seu serviço na sua região.</p>
          <a 
            href="https://wa.me/5511944437690?text=Olá, gostaria de saber como funciona o serviço de vocês?" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-corporate-dark hover:bg-gray-900 text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Falar no WhatsApp
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </main>
  );
};

export default ServicosPage;
