
import { Zap, Search, MousePointerClick, MessageCircle, CheckCircle2, ChevronRight, XCircle } from 'lucide-react';

const ComoFuncionaPage = () => {
  const steps = [
    {
      id: '01',
      title: 'Presença Direcionada',
      description: 'Geramos contatos orgânicos através do Google, focados exatamente em quem pesquisa pelos seus serviços na sua região em SP.',
      icon: <Search className="w-8 h-8 text-corporate-blueAccent" />
    },
    {
      id: '02',
      title: 'Clique e Redirecionamento',
      description: 'Ao encontrar sua empresa, o cliente em potencial é direcionado imediatamente e sem atritos para o seu WhatsApp.',
      icon: <MousePointerClick className="w-8 h-8 text-corporate-blueAccent" />
    },
    {
      id: '03',
      title: 'Lead Qualificado',
      description: 'O lead chega no seu WhatsApp pronto para tirar dúvidas e fechar negócio. Só depende do seu comercial!',
      icon: <MessageCircle className="w-8 h-8 text-corporate-blueAccent" />
    }
  ];

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="bg-corporate-dark text-white py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-corporate-blueAccent font-bold text-sm mb-6">
            <Zap className="w-4 h-4" />
            Atendimento Rápido = Mais Vendas
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">Um processo validado e <span className="text-corporate-blueAccent">focado em velocidade</span></h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            O poder do Google direcionado diretamente ao seu WhatsApp. Sabia que responder um lead nos primeiros minutos via WhatsApp converte até 3x mais do que enviar e-mails ou formulários antigos?
          </p>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 relative">
            <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-0.5 bg-gray-100 z-0"></div>
            {steps.map((step) => (
              <div key={step.id} className="relative z-10 bg-gray-50 p-8 rounded-3xl border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-gray-100 relative">
                  {step.icon}
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-corporate-dark text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {step.id}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-corporate-dark mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Antes x Depois */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 border-y border-gray-100">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-corporate-dark mb-4">A Diferença do Nosso Método</h2>
            <p className="text-gray-600">Esqueça os processos demorados que esfriam os clientes.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-3xl border border-red-100 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-red-50 text-red-600 px-4 py-1 rounded-bl-lg font-bold text-sm">
                Método Antigo
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-6">Como era antes</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-gray-600">
                  <XCircle className="w-6 h-6 text-red-500 shrink-0" />
                  <span>O cliente preenche um formulário gigante no site.</span>
                </li>
                <li className="flex items-start gap-3 text-gray-600">
                  <XCircle className="w-6 h-6 text-red-500 shrink-0" />
                  <span>Vai para uma planilha ou caixa de e-mail esquecida.</span>
                </li>
                <li className="flex items-start gap-3 text-gray-600">
                  <XCircle className="w-6 h-6 text-red-500 shrink-0" />
                  <span>Sua equipe liga 3 dias depois e o cliente já contratou outro.</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-corporate-blueAccent/30 shadow-[0_8px_30px_rgb(0,0,0,0.08)] relative overflow-hidden">
               <div className="absolute top-0 right-0 bg-corporate-blueAccent text-white px-4 py-1 rounded-bl-lg font-bold text-sm">
                Nosso Método
              </div>
              <h3 className="text-xl font-bold text-corporate-dark mb-6">Como é agora</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-gray-700">
                  <CheckCircle2 className="w-6 h-6 text-corporate-blueAccent shrink-0" />
                  <span>Cliente pesquisa e acha sua empresa no Google em 1 clique.</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <CheckCircle2 className="w-6 h-6 text-corporate-blueAccent shrink-0" />
                  <span>É redirecionado instantaneamente para o WhatsApp.</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <CheckCircle2 className="w-6 h-6 text-corporate-blueAccent shrink-0" />
                  <span>Sua equipe atende enquanto o cliente está "quente" e fecha na hora.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-corporate-dark mb-4">Perguntas Frequentes</h2>
          </div>
          <div className="space-y-6">
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-corporate-dark mb-2">Preciso ter site próprio para começar?</h3>
              <p className="text-gray-600">Não! Nós criamos páginas de alta conversão (landing pages) e direcionamos a conversão para o seu WhatsApp.</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-corporate-dark mb-2">Em quanto tempo os contatos começam a chegar?</h3>
              <p className="text-gray-600">O sistema é muito ágil. Assim que aprovamos os layouts e subimos a campanha no Google, os contatos costumam chegar nas primeiras 48 horas.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-corporate-blueAccent text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6">Pronto para acelerar suas vendas no WhatsApp?</h2>
          <p className="text-xl mb-10 text-white/90">Pessoas estão procurando pelo seu serviço neste exato momento. Vamos colocar você na frente delas.</p>
          <a 
            href="https://wa.me/5511944437690?text=Olá, gostaria de saber como funciona o serviço de vocês?" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-corporate-dark hover:bg-gray-900 text-white px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:-translate-y-1 shadow-xl"
          >
            Falar com a Equipe
            <ChevronRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </main>
  );
};

export default ComoFuncionaPage;
