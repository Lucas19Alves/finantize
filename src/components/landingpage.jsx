import React from 'react';

const LandingPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* seção hero */}
      <section className="py-20 bg-gradient-to-b from-green-400 to-green-500 text-center text-white">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Gerencie suas finanças de forma fácil e eficiente totalmente grátis!</h1>
          <p className="text-lg mb-8">No Finantize, você pode controlar suas despesas, economizar dinheiro e atingir seus objetivos financeiros com facilidade e sem pagar nada.</p>
          <a href="#" className="bg-white text-green-700 hover:bg-green-200 py-3 px-6 rounded-full font-semibold text-lg">Comece agora</a>
        </div>
      </section>

      {/* seção recursos */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Recursos Principais</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4">Controle de Despesas</h3>
              <p>Registre todas as suas despesas e receitas em um só lugar para ter uma visão clara de suas finanças.</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4">Metas Financeiras</h3>
              <p>Crie metas de economia e receba notificações para acompanhar seu progresso e alcançar seus objetivos.</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4">Orçamento Personalizado</h3>
              <p>Crie orçamentos personalizados para diferentes categorias de despesas e mantenha-se dentro de suas metas financeiras.</p>
            </div>
          </div>
        </div>
      </section>

      {/* seção carrosel */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Conheça o Finantize em ação</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img src="/image1.jpg" alt="Image 1" className="w-full h-auto" />
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img src="/image2.jpg" alt="Image 2" className="w-full h-auto" />
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img src="/image3.jpg" alt="Image 3" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* seção clientes */}
      <section className="py-20 bg-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">O que nossos clientes dizem</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <p className="text-lg mb-4">"<b>Finan<span className='text-green-500'>tize</span></b> mudou minha vida financeira. Agora posso controlar meus gastos e economizar dinheiro de forma eficaz."</p>
              <p className="font-semibold">- João Silva</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <p className="text-lg mb-4">"Eu amo a simplicidade e eficiência do <b>Finan<span className='text-green-500'>tize</span></b>. É a melhor ferramenta de gerenciamento financeiro que já usei."</p>
              <p className="font-semibold">- Maria Souza</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <p className="text-lg mb-4">"Com o <b>Finan<span className='text-green-500'>tize</span></b>, finalmente consegui economizar para minha viagem dos sonhos. Recomendo a todos!"</p>
              <p className="font-semibold">- Pedro Santos</p>
            </div>
          </div>
        </div>
      </section>

      {/* seção botão de ação */}
      <section className="py-16 bg-gradient-to-r from-green-400 to-green-500 text-center text-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Comece a transformar sua vida financeira hoje mesmo</h2>
          <p className="text-lg mb-8">Junte-se a milhares de usuários satisfeitos e comece a usar a <b>Finantize</b> hoje mesmo para alcançar seus objetivos financeiros.</p>
          <a href="#" className="bg-white text-green-700 hover:bg-green-200 py-3 px-6 rounded-full font-semibold text-lg">Experimente Grátis</a>
        </div>
      </section>
      </div>
  );
};

export default LandingPage;