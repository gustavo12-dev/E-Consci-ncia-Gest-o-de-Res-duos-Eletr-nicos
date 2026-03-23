import { motion } from 'motion/react';
import { Recycle, Leaf, ShieldCheck, MapPin, Monitor, Cpu, Smartphone, Battery, Printer, Server, CheckCircle2, Phone, Facebook, Youtube, Linkedin, Instagram, ChevronDown, PlayCircle, ArrowLeft, Users, Target, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function SobreProjeto() {
  return (
    <div className="min-h-screen bg-white text-stone-900">
      {/* Header */}
      <header className="bg-white border-b border-stone-100 py-6 px-4 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 text-emerald-900 hover:text-emerald-700 transition-colors font-medium">
            <ArrowLeft className="w-5 h-5" /> Voltar para Início
          </Link>
          <div className="text-xl font-bold serif italic text-emerald-900">E-Consciência</div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-20">
        {/* Hero Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-widest mb-8 border border-emerald-100">
              <Recycle className="w-4 h-4" /> Nossa Missão
            </div>
            <h1 className="text-5xl md:text-7xl font-light mb-8 serif italic text-emerald-950">Uma consciência, um motivo, uma responsabilidade.</h1>
            <p className="text-stone-600 text-lg leading-relaxed mb-10 max-w-xl">
              O projeto E-Consciência nasceu da necessidade urgente de transformar a forma como lidamos com o lixo eletrônico em nossa sociedade, começando pela base: a educação.
            </p>
            <div className="flex gap-12">
              <div>
                <div className="text-4xl font-light text-emerald-900 mb-1 serif">2024</div>
                <div className="text-stone-400 text-xs uppercase tracking-widest font-semibold">Fundação</div>
              </div>
              <div>
                <div className="text-4xl font-light text-emerald-900 mb-1 serif">15+</div>
                <div className="text-stone-400 text-xs uppercase tracking-widest font-semibold">Escolas Parceiras</div>
              </div>
              <div>
                <div className="text-4xl font-light text-emerald-900 mb-1 serif">5t+</div>
                <div className="text-stone-400 text-xs uppercase tracking-widest font-semibold">Coletadas</div>
              </div>
            </div>
          </motion.div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=1000" 
              alt="Team working on recycling" 
              className="rounded-[60px] shadow-2xl"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-10 -right-10 bg-emerald-900 p-10 rounded-[40px] text-white shadow-2xl max-w-xs">
              <div className="text-3xl font-bold mb-4 serif italic">Impacto Real</div>
              <p className="text-emerald-100/70 text-sm leading-relaxed">
                Não apenas coletamos, mas educamos para que o descarte consciente se torne um hábito natural.
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-32 bg-stone-50 rounded-[60px] px-12 mb-32">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-light text-emerald-950 mb-6 serif italic">Nossos Pilares</h2>
            <p className="text-stone-500 max-w-2xl mx-auto">
              Trabalhamos em três frentes principais para garantir a eficácia do nosso ecossistema de gestão.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { 
                icon: <Users className="w-10 h-10" />, 
                title: "Educação", 
                desc: "Capacitamos alunos e professores através de oficinas práticas de hardware e conscientização ambiental." 
              },
              { 
                icon: <Target className="w-10 h-10" />, 
                title: "Gestão", 
                desc: "Implementamos logística reversa eficiente, garantindo que cada componente chegue ao seu destino correto." 
              },
              { 
                icon: <Globe className="w-10 h-10" />, 
                title: "Sustentabilidade", 
                desc: "Fomentamos a economia circular, transformando o que seria lixo em matéria-prima para novos ciclos." 
              }
            ].map((pilar, i) => (
              <div key={i} className="text-center p-8 bg-white rounded-[40px] border border-stone-100 shadow-sm hover:shadow-md transition-all">
                <div className="w-20 h-20 bg-emerald-50 rounded-3xl flex items-center justify-center text-emerald-600 mb-8 mx-auto">
                  {pilar.icon}
                </div>
                <h3 className="text-2xl font-medium text-emerald-900 mb-4">{pilar.title}</h3>
                <p className="text-stone-500 leading-relaxed text-sm">
                  {pilar.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* History / Timeline */}
        <section className="max-w-4xl mx-auto mb-32">
          <h2 className="text-4xl font-light text-emerald-950 mb-16 serif italic text-center">Nossa Jornada</h2>
          <div className="space-y-20 relative before:absolute before:left-[19px] before:top-0 before:bottom-0 before:w-px before:bg-stone-200">
            {[
              { year: "2024", title: "O Início", desc: "O projeto surge como uma iniciativa acadêmica focada na problemática do lixo eletrônico em escolas de São Paulo." },
              { year: "2025", title: "Expansão", desc: "Parceria com as primeiras 5 escolas e implementação do Termômetro de Impacto para monitoramento em tempo real." },
              { year: "2026", title: "Ecossistema Completo", desc: "Lançamento da plataforma digital e expansão para mais de 15 escolas, com certificação oficial do IBAMA." }
            ].map((item, i) => (
              <div key={i} className="relative pl-16">
                <div className="absolute left-0 top-0 w-10 h-10 bg-white border-2 border-emerald-500 rounded-full flex items-center justify-center z-10">
                  <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                </div>
                <div className="text-emerald-500 font-mono text-sm font-bold mb-2">{item.year}</div>
                <h3 className="text-2xl font-medium text-emerald-900 mb-4">{item.title}</h3>
                <p className="text-stone-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Team / Partners */}
        <section className="text-center">
          <h2 className="text-4xl font-light text-emerald-950 mb-16 serif italic">Parceiros Estratégicos</h2>
          <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all">
             <div className="text-2xl font-bold text-stone-400">IBAMA</div>
             <div className="text-2xl font-bold text-stone-400">UNESCO</div>
             <div className="text-2xl font-bold text-stone-400">GREENPEACE</div>
             <div className="text-2xl font-bold text-stone-400">WWF</div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 bg-stone-50 border-t border-stone-200">
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
