import { motion } from 'motion/react';
import { ArrowLeft, MapPin, User, Phone, MessageSquare, Clock, ShieldCheck, Mail, Recycle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Contato() {
  const whatsappUrl = "https://wa.me/5519981735095?text=Olá!%20Gostaria%20de%20obter%20mais%20informações%20sobre%20o%20projeto%20E-Consciência.";

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 flex flex-col justify-between">
      <div>
        {/* Header */}
        <header className="bg-white border-b border-stone-200 py-6 px-4 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <Link to="/" className="flex items-center gap-2 text-emerald-900 hover:text-emerald-700 transition-colors font-medium">
              <ArrowLeft className="w-5 h-5" /> Voltar para Início
            </Link>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
                <Recycle className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold serif italic text-emerald-900">E-Consciência</span>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="max-w-6xl mx-auto px-4 py-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-widest mb-4 border border-emerald-200">
              Canais de Atendimento
            </span>
            <h1 className="text-4xl md:text-5xl font-light text-emerald-950 mb-6 serif italic">Fale Conosco</h1>
            <p className="text-stone-600 max-w-2xl mx-auto text-lg leading-relaxed">
              Entre em contato com a equipe do projeto E-Consciência e com a igreja para tirar dúvidas, agendar coletas ou estabelecer parcerias acadêmicas e ambientais.
            </p>
          </motion.div>

          {/* Grid Layout for Cards and Info */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
            
            {/* Visual & Context Card (Left side, takes 5 cols) */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="lg:col-span-5 bg-emerald-900 rounded-[40px] p-8 md:p-10 text-white flex flex-col justify-between relative overflow-hidden shadow-xl"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-800/20 rounded-full -mr-32 -mt-32 blur-3xl"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-light mb-6 serif italic text-emerald-300">Nossa Responsabilidade</h3>
                <p className="text-emerald-100/80 leading-relaxed text-sm md:text-base mb-8">
                  O projeto E-Consciência promove a educação socioambiental e a destinação ecologicamente correta de equipamentos eletrônicos em nossa região. Suas dúvidas ou solicitações são essenciais para gerarmos impacto sustentável real.
                </p>

                <div className="space-y-6">
                  <div className="flex items-center gap-4 text-emerald-200">
                    <ShieldCheck className="w-6 h-6 text-emerald-400 shrink-0" />
                    <span className="text-sm font-medium">Tratamento seguro e destruição de dados</span>
                  </div>
                  <div className="flex items-center gap-4 text-emerald-200">
                    <Clock className="w-6 h-6 text-emerald-400 shrink-0" />
                    <span className="text-sm font-medium">Retorno rápido e agendamento flexível</span>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-emerald-800/50">
                <p className="text-xs text-emerald-400 font-mono uppercase tracking-widest mb-1">Ponto Focal</p>
                <p className="text-sm font-semibold text-emerald-100">Amparo - SP e Região</p>
              </div>
            </motion.div>

            {/* Detailed Info (Right side, takes 7 cols) */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              
              {/* Card Address: Primeira Igreja Batista */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-[32px] p-8 border border-stone-200 shadow-sm flex flex-col md:flex-row gap-6 items-start"
              >
                <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 shrink-0">
                  <MapPin className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-1">Localização e Ponto de Referência</h4>
                  <p className="text-xl font-bold text-emerald-950 mb-3 serif italic">Primeira Igreja Batista</p>
                  <p className="text-stone-600 font-medium text-sm leading-relaxed mb-1">
                    <strong className="text-stone-800">Rua:</strong> Romeu Mezzacapa, 585
                  </p>
                  <p className="text-stone-600 font-medium text-sm leading-relaxed mb-1">
                    <strong className="text-stone-800">Bairro:</strong> Jardim Itália
                  </p>
                  <p className="text-stone-600 font-medium text-sm leading-relaxed">
                    <strong className="text-stone-800">CEP:</strong> 13.901-130 — Amparo / SP
                  </p>
                </div>
              </motion.div>

              {/* Card Responsável */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-white rounded-[32px] p-8 border border-stone-200 shadow-sm flex flex-col md:flex-row gap-6 items-start"
              >
                <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 shrink-0">
                  <User className="w-7 h-7" />
                </div>
                <div className="flex-1">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-1">Responsável pelo Projeto</h4>
                  <p className="text-xl font-bold text-emerald-950 mb-2 serif italic">João Marcos Cruz Ferreira</p>
                  <p className="text-stone-600 font-medium text-sm leading-relaxed">
                    Responsável pelo ponto de coleta, coordenação, triagem local e recebimento dos resíduos no ponto credenciado da Primeira Igreja Batista.
                  </p>
                </div>
              </motion.div>

              {/* Card Contato WhatsApp */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white rounded-[32px] p-8 border border-stone-200 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-6"
              >
                <div className="flex gap-6 items-start">
                  <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 shrink-0">
                    <Phone className="w-7 h-7" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-1">Contato Telefônico / WhatsApp</h4>
                    <p className="text-2xl font-mono font-bold text-emerald-950">19 98173-5095</p>
                  </div>
                </div>

                <a 
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-2xl transition-all shadow-md shadow-emerald-600/10 flex items-center gap-2 text-sm w-full md:w-auto justify-center"
                >
                  <MessageSquare className="w-5 h-5 animate-pulse" /> Chamar no WhatsApp
                </a>
              </motion.div>

            </div>
          </div>

          {/* Call to action card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="bg-stone-900 rounded-[40px] p-8 md:p-12 text-center text-white relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-15"></div>
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-light mb-4 serif italic">Pronto para retirar seu descarte eletrônico?</h2>
              <p className="text-stone-400 mb-8 text-sm md:text-base">
                Se você possui grandes quantidades de resíduos metálicos ou de informática, nossa equipe também realiza agendamentos para coletas direcionadas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/agendar" 
                  className="px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-bold rounded-2xl transition-all shadow-lg shadow-emerald-500/25"
                >
                  Agendar uma Coleta
                </Link>
                <Link 
                  to="/o-que-coletamos" 
                  className="px-8 py-4 bg-white/10 hover:bg-white/15 text-white font-bold rounded-2xl transition-all border border-white/20"
                >
                  O Que Coletamos?
                </Link>
              </div>
            </div>
          </motion.div>

        </main>
      </div>

      {/* Footer */}
      <footer className="py-12 bg-white border-t border-stone-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="text-emerald-900 font-medium serif italic text-2xl mb-4">E-Consciência</div>
          <p className="text-stone-400 text-xs font-mono uppercase tracking-widest">
            Uma consciência, um motivo, uma responsabilidade.
          </p>
        </div>
      </footer>
    </div>
  );
}
