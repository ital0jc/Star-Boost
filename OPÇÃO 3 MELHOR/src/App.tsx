import React, { useState } from 'react';
import { Star, Phone, Mail, MapPin, CheckCircle, Trophy, Users, ThumbsUp, Menu, X, BarChart, Shield, Clock, Target } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Header/Nav */}
      <header className="bg-purple-700 text-white sticky top-0 z-50">
        <nav className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Star className="w-8 h-8" />
              <span className="text-2xl font-bold">ReputaçãoPro</span>
            </div>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <a href="#como-funciona" className="nav-link hover:text-purple-200 transition-colors">Como Funciona</a>
              <a href="#beneficios" className="nav-link hover:text-purple-200 transition-colors">Benefícios</a>
              <a href="#planos" className="nav-link hover:text-purple-200 transition-colors">Planos</a>
              <a href="#depoimentos" className="nav-link hover:text-purple-200 transition-colors">Depoimentos</a>
              <a href="#contato" className="nav-link hover:text-purple-200 transition-colors">Contato</a>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4">
              <div className="flex flex-col space-y-4">
                <a href="#como-funciona" className="nav-link hover:text-purple-200 transition-colors" onClick={() => setIsMenuOpen(false)}>Como Funciona</a>
                <a href="#beneficios" className="nav-link hover:text-purple-200 transition-colors" onClick={() => setIsMenuOpen(false)}>Benefícios</a>
                <a href="#planos" className="nav-link hover:text-purple-200 transition-colors" onClick={() => setIsMenuOpen(false)}>Planos</a>
                <a href="#depoimentos" className="nav-link hover:text-purple-200 transition-colors" onClick={() => setIsMenuOpen(false)}>Depoimentos</a>
                <a href="#contato" className="nav-link hover:text-purple-200 transition-colors" onClick={() => setIsMenuOpen(false)}>Contato</a>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section className="bg-purple-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Transforme a Reputação do Seu Negócio
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Aumente suas avaliações positivas e atraia mais clientes
          </p>
          <a 
            href="#planos" 
            className="inline-block bg-white text-purple-800 px-8 py-4 rounded-full font-bold text-lg hover:bg-purple-100 transition-colors"
          >
            Conheça Nossos Planos
          </a>
        </div>
      </section>

      {/* Como Funciona */}
      <section id="como-funciona" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Como Funciona</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">1. Análise Inicial</h3>
              <p className="text-gray-600">Avaliamos sua presença online atual e identificamos áreas de melhoria</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">2. Estratégia</h3>
              <p className="text-gray-600">Desenvolvemos um plano personalizado para melhorar sua reputação</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">3. Implementação</h3>
              <p className="text-gray-600">Executamos as ações necessárias e monitoramos os resultados</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">4. Acompanhamento</h3>
              <p className="text-gray-600">Mantemos sua reputação positiva com monitoramento constante</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="beneficios" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Benefícios do Nosso Serviço</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <Trophy className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Melhore sua Reputação</h3>
              <p className="text-gray-600">Transforme avaliações negativas em oportunidades de crescimento e fortaleça sua marca online</p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  Monitoramento 24/7
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  Resposta rápida
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  Gestão proativa
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <Users className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Mais Clientes</h3>
              <p className="text-gray-600">Atraia novos clientes com uma reputação online sólida e avaliações positivas</p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  Aumento de visibilidade
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  Maior confiança
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  Melhor conversão
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <ThumbsUp className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Gestão de Reviews</h3>
              <p className="text-gray-600">Monitoramento e resposta profissional às avaliações em todas as plataformas</p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  Respostas personalizadas
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  Análise de sentimento
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  Relatórios detalhados
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Planos */}
      <section id="planos" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Nossos Planos</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="border rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold mb-4">Básico</h3>
              <p className="text-3xl font-bold mb-4">R$ 297/mês</p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  Monitoramento de 2 plataformas
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  Resposta a 30 avaliações/mês
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  Relatório mensal
                </li>
              </ul>
              <button className="w-full mt-8 bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors">
                Começar Agora
              </button>
            </div>
            <div className="border rounded-lg p-8 shadow-lg bg-purple-600 text-white transform scale-105">
              <div className="absolute top-0 right-0 -translate-y-1/2 bg-yellow-400 text-purple-900 px-4 py-1 rounded-full font-semibold">
                Mais Popular
              </div>
              <h3 className="text-xl font-bold mb-4">Profissional</h3>
              <p className="text-3xl font-bold mb-4">R$ 497/mês</p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-white mr-2" />
                  Monitoramento de 5 plataformas
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-white mr-2" />
                  Resposta a 100 avaliações/mês
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-white mr-2" />
                  Relatório semanal
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-white mr-2" />
                  Prioridade no suporte
                </li>
              </ul>
              <button className="w-full mt-8 bg-white text-purple-600 py-3 rounded-lg hover:bg-purple-50 transition-colors">
                Começar Agora
              </button>
            </div>
            <div className="border rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold mb-4">Enterprise</h3>
              <p className="text-3xl font-bold mb-4">R$ 997/mês</p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  Monitoramento ilimitado
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  Respostas ilimitadas
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  Suporte 24/7
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  Gestor de conta dedicado
                </li>
              </ul>
              <button className="w-full mt-8 bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors">
                Começar Agora
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section id="depoimentos" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">O Que Nossos Clientes Dizem</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex text-yellow-400 mb-4">
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
              </div>
              <p className="mb-4">"Nossa reputação online mudou completamente em apenas 3 meses. Excelente serviço!"</p>
              <div className="flex items-center">
                <img 
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop" 
                  alt="Maria Silva" 
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <p className="font-semibold">Maria Silva</p>
                  <p className="text-gray-600">Restaurante Sabor & Arte</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex text-yellow-400 mb-4">
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
              </div>
              <p className="mb-4">"O suporte é incrível e os resultados superaram nossas expectativas!"</p>
              <div className="flex items-center">
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop" 
                  alt="João Santos" 
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <p className="font-semibold">João Santos</p>
                  <p className="text-gray-600">Clínica Bem Estar</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex text-yellow-400 mb-4">
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
              </div>
              <p className="mb-4">"Aumentamos nosso faturamento em 40% após melhorar nossa reputação online."</p>
              <div className="flex items-center">
                <img 
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop" 
                  alt="Ana Costa" 
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <p className="font-semibold">Ana Costa</p>
                  <p className="text-gray-600">Hotel Estrela</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Entre em Contato</h2>
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-purple-100 p-3 rounded-full">
                    <Phone className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Telefone</h3>
                    <p className="text-gray-600">(11) 99999-9999</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-purple-100 p-3 rounded-full">
                    <Mail className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-gray-600">contato@reputacaopro.com.br</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-purple-100 p-3 rounded-full">
                    <MapPin className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Endereço</h3>
                    <p className="text-gray-600">Av. Paulista, 1000 - São Paulo, SP</p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold mb-4">Horário de Atendimento</h3>
                <div className="space-y-2 text-gray-600">
                  <p>Segunda a Sexta: 9h às 18h</p>
                  <p>Sábado: 9h às 13h</p>
                  <p>Domingo: Fechado</p>
                </div>
                <div className="mt-6">
                  <h3 className="font-semibold mb-2">Atendimento Emergencial</h3>
                  <p className="text-gray-600">Disponível 24/7 para clientes Enterprise</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Star className="w-6 h-6" />
                <span className="text-xl font-bold">ReputaçãoPro</span>
              </div>
              <p className="text-gray-400">
                Transformando a reputação online do seu negócio
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
              <ul className="space-y-2">
                <li><a href="#como-funciona" className="text-gray-400 hover:text-white transition-colors">Como Funciona</a></li>
                <li><a href="#beneficios" className="text-gray-400 hover:text-white transition-colors">Benefícios</a></li>
                <li><a href="#planos" className="text-gray-400 hover:text-white transition-colors">Planos</a></li>
                <li><a href="#depoimentos" className="text-gray-400 hover:text-white transition-colors">Depoimentos</a></li>
                <li><a href="#contato" className="text-gray-400 hover:text-white transition-colors">Contato</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Plataformas</h3>
              <ul className="space-y-2">
                <li className="text-gray-400">Google Business</li>
                <li className="text-gray-400">Facebook</li>
                <li className="text-gray-400">Instagram</li>
                <li className="text-gray-400">TripAdvisor</li>
                <li className="text-gray-400">Reclame Aqui</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Horário de Atendimento</h3>
              <p className="text-gray-400">Segunda a Sexta: 9h às 18h</p>
              <p className="text-gray-400">Sábado: 9h às 13h</p>
              <div className="mt-4">
                <p className="text-gray-400">Suporte Enterprise:</p>
                <p className="text-gray-400">24 horas, 7 dias por semana</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ReputaçãoPro. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;