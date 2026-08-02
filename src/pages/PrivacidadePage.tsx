
const PrivacidadePage = () => {
  return (
    <main className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
        <h1 className="text-3xl md:text-4xl font-extrabold text-corporate-dark mb-4">Política de Privacidade</h1>
        <p className="text-xl text-gray-500 mb-10 leading-relaxed font-light">
          A privacidade e a transparência são pilares fundamentais para a Edleads. Esta política documenta como lidamos com as informações dos visitantes e a nossa dinâmica de redirecionamento direto de contatos.
        </p>
        
        <div className="space-y-8 text-gray-600 leading-relaxed">
          
          <div>
            <h2 className="text-2xl font-bold text-corporate-dark mb-4">1. Coleta e Redirecionamento Direto de Dados (Sem Armazenamento)</h2>
            <p className="mb-4">
              Diferente dos modelos tradicionais, <strong>a Edleads não armazena nem mantém banco de dados com os dados pessoais dos leads</strong> gerados através da plataforma.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Ao preencher formulários de contato ou clicar nos botões de interação do site, suas informações (como nome, telefone e detalhes da solicitação) são enviadas e redirecionadas <strong>em tempo real diretamente para o WhatsApp do nosso parceiro prestador de serviço</strong> responsável pelo atendimento na sua região.</li>
              <li>Garantimos total transparência: atuamos como a ponte de conexão direta entre você e o prestador de serviço final, sem retenção oculta de informações.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-corporate-dark mb-4">2. Uso das Informações</h2>
            <p className="mb-4">As informações fornecidas no momento do contato são utilizadas exclusivamente para:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Conectar você diretamente ao prestador de serviço capaz de atender sua solicitação via WhatsApp.</li>
              <li>Personalizar sua experiência de navegação e garantir que o atendimento ocorra sem atritos na sua região.</li>
              <li>Otimizar as campanhas de pesquisa do Google para direcionar usuários a soluções relevantes.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-corporate-dark mb-4">3. Proteção, Segurança e Não Compartilhamento</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Como não retemos base de dados de leads, eliminamos o risco de vazamento de listas de contatos no nosso ambiente.</li>
              <li>Nós <strong>não vendemos, alugamos ou trocamos</strong> suas informações pessoais com terceiros para fins de spam.</li>
              <li>Os dados trafegam exclusivamente entre o usuário e o prestador de serviço parceiro selecionado para a sua demanda.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-corporate-dark mb-4">4. Cookies e Tecnologias de Navegação</h2>
            <p>
              Utilizamos cookies e tags de navegação exclusivamente para análises de tráfego e melhoria de desempenho (como ferramentas de análise do Google). Isso nos permite registrar preferências de visitantes, personalizar conteúdos e entender a eficiência das campanhas de tráfego, sem coletar dados sensíveis de identificação pessoal sem o seu consentimento.
            </p>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold text-corporate-dark mb-4">5. Conformidade com a LGPD</h2>
            <p>
              Em conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018), respeitamos todos os direitos dos titulares de dados. Como nossa atuação é pautada no redirecionamento em tempo real sem armazenamento permanente de leads, qualquer solicitação sobre o tratamento do atendimento pós-redirecionamento pode ser sanada diretamente conosco ou com o parceiro atendedor através dos nossos canais oficiais.
            </p>
          </div>

          <p className="mt-12 text-sm text-gray-500 border-t border-gray-100 pt-8">
            Última atualização: {new Date().toLocaleDateString('pt-BR')}
          </p>
        </div>
      </div>
    </main>
  );
};

export default PrivacidadePage;
