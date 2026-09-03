import { motion } from 'motion/react';
import { ArrowLeft, Leaf, Recycle, Compass, BookOpen, AlertCircle, CheckCircle2, ChevronRight, HelpCircle, BarChart2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function EducacaoAmbiental() {
  const materials = [
    {
      title: "Monitores e Telas",
      danger: "Alto (Chumbo, Mercúrio e Fósforo)",
      disposal: "Nunca quebre a tela para evitar vazamentos químicos. Entregue o componente inteiro no ponto de descarte credenciado.",
      curiosity: "Cerca de 40% de um monitor antigo é composto por vidro reutilizável e outros 15% por plásticos de alta resistência.",
      tagColor: "bg-red-500/10 text-red-400 border-red-500/20"
    },
    {
      title: "Pilhas e Baterias",
      danger: "Crítico (Cádmio, Níquel e Lítio)",
      disposal: "Armazene em recipiente seco de plástico e traga-os aos coletores antes que ocorra oxidação ou vazamento do eletrólito.",
      curiosity: "Uma única bateria de celular comum descartada incorretamente pode poluir mais de 20.000 litros de água pura.",
      tagColor: "bg-amber-500/10 text-amber-400 border-amber-500/20"
    },
    {
      title: "Placas de Circuito (Hardware)",
      danger: "Médio (Metais pesados no processo de soldagem)",
      disposal: "Mantenha a placa em recipiente arejado. Não exponha a altas temperaturas ou umidade antes do descarte.",
      curiosity: "Uma tonelada de computadores antigos contém mais ouro puro do que 17 toneladas de minério de ouro extraído de jazidas.",
      tagColor: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20"
    },
    {
      title: "Gabinetes e Estruturas Metálicas",
      danger: "Baixo (Aço e Plástico rígido)",
      disposal: "Podem ser empilhados de forma compactada. Facilita a reciclagem direta de metais industriais e plásticos ABS.",
      curiosity: "O aço reciclado poupa 74% de energia em comparação com a produção primária a partir de minério extraído.",
      tagColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
    }
  ];

  return (
    <div className="min-h-screen bg-stone-900 text-stone-100 flex flex-col justify-between">
      <div>
        {/* Header */}
        <header className="bg-stone-950 border-b border-white/10 py-6 px-4 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <Link to="/" className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors font-medium">
              <ArrowLeft className="w-5 h-5" /> Voltar para Início
            </Link>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
                <Leaf className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold serif italic text-white">E-Consciência</span>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <main className="max-w-7xl mx-auto px-4 py-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-4 border border-emerald-500/20">
              <BookOpen className="w-4 h-4" /> Escola Virtual e Orientação
            </span>
            <h1 className="text-4xl md:text-6xl font-light text-white mb-6 serif italic">Educação Ambiental</h1>
            <p className="text-stone-400 max-w-2xl mx-auto text-lg leading-relaxed">
              O descarte incorreto gera impactos severos que se perpetuam no ecossistema local. Conheça as boas práticas e guias corretos para manusear e entregar seus eletrônicos com responsabilidade.
            </p>
          </motion.div>

          {/* Infographics Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            
            {/* Impact Cards */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-stone-950 p-8 rounded-[40px] border border-white/5 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-red-500/10 text-red-400 rounded-2xl flex items-center justify-center">
                    <AlertCircle className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-medium text-white serif italic">O Perigo Oculto do E-Lixo</h3>
                </div>
                <p className="text-stone-400 leading-relaxed text-sm md:text-base mb-8">
                  Equipamentos eletrônicos contêm elementos perigosos da tabela periódica (como Mercúrio, Chumbo, Berílio e Cádmio). Sob chuva ou sol nos aterros comuns, as carcaças trincam e essas substâncias lixiviam no solo, correndo direto para águas subterrâneas (lençóis freáticos), de onde chegam às torneiras das famílias.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3 text-stone-300">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-1 shrink-0" />
                    <p className="text-sm">Vazamentos contaminam a cadeia trófica de peixes, plantas e plantações.</p>
                  </div>
                  <div className="flex items-start gap-3 text-stone-300">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-1 shrink-0" />
                    <p className="text-sm">A inalação de fumos de soldas caseiras de placas provoca danos pulmonares irreversíveis.</p>
                  </div>
                </div>
              </div>
              <div className="mt-10 p-6 bg-stone-900 rounded-2xl border border-white/5 flex gap-4">
                <HelpCircle className="w-6 h-6 text-emerald-400 shrink-0" />
                <p className="text-xs text-stone-400 leading-relaxed">
                  <strong>Você sabia?</strong> Quase 82% dos resíduos eletrônicos globais são descartados em lixeiras domésticas gerais sem nenhum tratamento, desperdiçando bilhões de dólares em matéria-prima reutilizável.
                </p>
              </div>
            </motion.div>

            {/* Practical Guide */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-gradient-to-br from-emerald-950/40 to-stone-950 p-8 rounded-[40px] border border-emerald-500/10 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-emerald-500/10 text-emerald-400 rounded-2xl flex items-center justify-center">
                    <Compass className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-medium text-white serif italic">Regra de Ouro do Descarte</h3>
                </div>
                <h4 className="text-emerald-400 font-bold text-sm uppercase tracking-wider mb-4">Passo a Passo Padrão para Resíduos Domésticos</h4>
                
                <div className="space-y-6">
                  {[
                    { step: "1", title: "Separação Física", desc: "Separe cabos e fios velhos de mouses, impressoras e celulares. Traga tudo embalado adequadamente." },
                    { step: "2", title: "Remoção de Alimentos e Umidade", desc: "Nunca insira resíduos eletrônicos que contenham restos de alimentos, gorduras ou água em coletores de descarte." },
                    { step: "3", title: "Guarda Segura", desc: "Mantenha o lixo eletrônico longe das crianças e animais domésticos enquanto não o trouxer para a Primeira Igreja Batista Jardim Itália." }
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-4 items-start">
                      <div className="w-8 h-8 rounded-full bg-emerald-500/10 text-emerald-400 font-mono font-bold text-sm flex items-center justify-center shrink-0 border border-emerald-500/20">
                        {item.step}
                      </div>
                      <div>
                        <h5 className="font-semibold text-white mb-1 text-sm">{item.title}</h5>
                        <p className="text-xs text-stone-400 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-8">
                <Link 
                  to="/contato" 
                  className="w-full py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-2xl transition-all shadow-lg shadow-emerald-600/10 flex items-center justify-center gap-2 text-sm"
                >
                  Ver Horários de Entrega na Igreja <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>

          </div>

          {/* Interactive Material Grid */}
          <h2 className="text-3xl font-light mb-12 serif italic text-center text-white">Como Descartar Cada Tipo de Material</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {materials.map((mat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="bg-stone-950 p-8 rounded-3xl border border-white/5 flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold text-white font-sans">{mat.title}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${mat.tagColor}`}>
                      Risco: {mat.danger}
                    </span>
                  </div>
                  
                  <div className="space-y-4 text-sm mb-6">
                    <div>
                      <span className="text-xs font-bold text-emerald-400 block uppercase mb-1">Como Descartar Correto:</span>
                      <p className="text-stone-300 leading-relaxed">{mat.disposal}</p>
                    </div>
                    <div>
                      <span className="text-xs font-bold text-stone-400 block uppercase mb-1">Impacto & Curiosidade:</span>
                      <p className="text-stone-400 leading-relaxed italic">"{mat.curiosity}"</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Conclusion CTA */}
          <section className="bg-stone-950 p-8 md:p-12 rounded-[40px] border border-white/5 text-center relative overflow-hidden">
            <div className="relative z-10 max-w-3xl mx-auto">
              <Recycle className="w-12 h-12 text-emerald-400 mx-auto mb-6 shrink-0 animate-spin" style={{ animationDuration: '8s' }} />
              <h2 className="text-2xl md:text-3xl font-light mb-4 serif italic">Educação e Ação Juntas</h2>
              <p className="text-stone-400 mb-8 max-w-xl mx-auto text-sm leading-relaxed">
                Tornar-se educado sobre o descarte é o primeiro passo para a mudança socioambiental. Faça sua parte compartilhando esse conhecimento com amigos e vizinhos de Amparo e região.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/agendar" 
                  className="px-8 py-3.5 bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-bold rounded-xl transition-all shadow-lg shadow-emerald-500/10"
                >
                  Agendar Coleta Familiar
                </Link>
                <Link 
                  to="/contato" 
                  className="px-8 py-3.5 bg-white/5 hover:bg-white/10 text-white font-bold rounded-xl transition-all border border-white/10"
                >
                  Localização da Igreja
                </Link>
              </div>
            </div>
          </section>

        </main>
      </div>

      {/* Footer */}
      <footer className="py-12 bg-stone-950 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="text-emerald-400 font-medium serif italic text-2xl mb-4">E-Consciência</div>
          <p className="text-stone-600 text-xs font-mono uppercase tracking-widest">
            Uma consciência, um motivo, uma responsabilidade — 2026
          </p>
        </div>
      </footer>
    </div>
  );
}
