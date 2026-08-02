
const TermosDeUsoPage = () => {
  return (
    <main className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
        <h1 className="text-3xl md:text-4xl font-extrabold text-corporate-dark mb-8">Termos de Uso</h1>
        
        <div className="space-y-6 text-gray-600 leading-relaxed">
          <p>
            Ao acessar e utilizar nosso site, você concorda em cumprir e estar vinculado aos seguintes termos e condições de uso, que em conjunto com nossa política de privacidade regem o relacionamento da Edleads com você em relação a este site.
          </p>

          <h2 className="text-xl font-bold text-corporate-dark mt-8 mb-4">1. Uso do Site</h2>
          <p>
            O conteúdo das páginas deste site é apenas para sua informação geral e uso. Ele está sujeito a alterações sem aviso prévio. O uso não autorizado deste site pode dar origem a um pedido de indenização e/ou ser uma ofensa criminal.
          </p>

          <h2 className="text-xl font-bold text-corporate-dark mt-8 mb-4">2. Propriedade Intelectual</h2>
          <p>
            Este site contém material que é de nossa propriedade ou licenciado para nós. Este material inclui, mas não está limitado a, design, layout, aparência e gráficos. A reprodução é proibida, exceto de acordo com o aviso de direitos autorais, que faz parte destes termos e condições.
          </p>

          <h2 className="text-xl font-bold text-corporate-dark mt-8 mb-4">3. Limitação de Responsabilidade</h2>
          <p>
            Em nenhum caso a Edleads será responsável por qualquer dano direto, indireto, incidental, especial ou consequente resultante do uso ou incapacidade de usar este site ou nossos serviços.
          </p>

          <h2 className="text-xl font-bold text-corporate-dark mt-8 mb-4">4. Vínculo e Contratação</h2>
          <p>
            O fornecimento de contatos (leads) através de campanhas está sujeito às variações do mercado e algoritmos de terceiros (Google). Não garantimos um número fixo exato de fechamentos, mas sim o esforço máximo em segmentação e qualificação, conforme definido nos planos contratados.
          </p>

          <p className="mt-12 text-sm text-gray-500 border-t border-gray-100 pt-8">
            Última atualização: {new Date().toLocaleDateString('pt-BR')}
          </p>
        </div>
      </div>
    </main>
  );
};

export default TermosDeUsoPage;
