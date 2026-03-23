import { motion } from 'motion/react';
import { Recycle, Leaf, ShieldCheck, MapPin, Monitor, Cpu, Smartphone, Battery, Printer, Server, CheckCircle2, Phone, Facebook, Youtube, Linkedin, Instagram, ChevronDown, PlayCircle, ArrowLeft, Thermometer, Droplets, Wind, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function TermometroImpacto() {
  const stats = [
    { label: "Chumbo Evitado", current: 25, target: 50, unit: "kg", color: "bg-emerald-400", desc: "O chumbo pode causar danos neurológicos graves se descartado no solo." },
    { label: "Mercúrio Recuperado", current: 12, target: 30, unit: "kg", color: "bg-blue-400", desc: "O mercúrio é altamente tóxico e contamina lençóis freáticos." },
    { label: "Ouro Recuperado", current: 150, target: 500, unit: "g", color: "bg-amber-400", desc: "A mineração urbana reduz a necessidade de mineração predatória." },
    { label: "Cobre Reciclado", current: 450, target: 1000, unit: "kg", color: "bg-orange-400", desc: "O cobre é essencial para a infraestrutura elétrica e 100% reciclável." }
  ];

  return (
    <div className="min-h-screen bg-stone-900 text-white">
      {/* Header */}
      <header className="bg-stone-900 border-b border-white/10 py-6 px-4 sticky top-0 z-50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors font-medium">
            <ArrowLeft className="w-5 h-5" /> Voltar para Início
          </Link>
          <div className="text-xl font-bold serif italic text-white">E-Consciência</div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-6 border border-emerald-500/30">
            <Thermometer className="w-4 h-4" /> Monitoramento em Tempo Real
          </div>
          <h1 className="text-5xl md:text-7xl font-light mb-8 serif italic">Termômetro de Impacto</h1>
          <p className="text-emerald-100/60 max-w-2xl mx-auto text-lg leading-relaxed">
            Acompanhe o impacto positivo gerado pela nossa rede de escolas e parceiros. Cada grama de metal recuperado é uma vitória para o meio ambiente.
          </p>
        </motion.div>

        {/* Main Stats Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className="space-y-12">
            {stats.map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="flex justify-between items-end mb-4">
                  <div>
                    <h3 className="text-xl font-medium text-white mb-1">{stat.label}</h3>
                    <p className="text-stone-500 text-xs max-w-xs leading-relaxed">{stat.desc}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-mono text-emerald-400 font-bold">{stat.current}{stat.unit}</span>
                    <span className="text-stone-500 text-sm ml-2">/ {stat.target}{stat.unit}</span>
                  </div>
                </div>
                <div className="h-3 bg-white/5 rounded-full overflow-hidden border border-white/10">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${(stat.current / stat.target) * 100}%` }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className={`h-full ${stat.color} shadow-[0_0_20px_rgba(0,0,0,0.3)]`}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          <div className="bg-white/5 backdrop-blur-xl rounded-[40px] p-12 border border-white/10 flex flex-col justify-center items-center text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
            <div className="relative z-10">
              <div className="text-stone-400 text-xs uppercase tracking-[0.4em] mb-6">Total de Resíduos Coletados</div>
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-8xl md:text-9xl font-light serif italic mb-8 text-emerald-400"
              >
                1.240<span className="text-4xl ml-2">kg</span>
              </motion.div>
              <div className="inline-flex items-center gap-3 text-emerald-400 bg-emerald-400/10 px-6 py-3 rounded-full text-sm font-medium border border-emerald-400/20">
                <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
                Atualizado em 23 Mar 2026
              </div>
            </div>
          </div>
        </div>

        {/* Environmental Benefits */}
        <section className="py-20 border-t border-white/10">
          <h2 className="text-3xl font-light mb-12 serif italic text-center">Benefícios Ambientais Indiretos</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Droplets className="w-8 h-8" />, title: "Água Preservada", value: "450.000L", desc: "Volume de água que deixou de ser contaminado por metais pesados." },
              { icon: <Wind className="w-8 h-8" />, title: "Emissões de CO2", value: "12.5t", desc: "Redução na pegada de carbono ao evitar a mineração de novos metais." },
              { icon: <Zap className="w-8 h-8" />, title: "Energia Economizada", value: "85MWh", desc: "Energia poupada ao reciclar materiais em vez de produzi-los do zero." }
            ].map((benefit, i) => (
              <div key={i} className="p-8 bg-white/5 rounded-3xl border border-white/5 hover:border-emerald-500/30 transition-all group">
                <div className="w-14 h-14 bg-emerald-500/10 rounded-2xl flex items-center justify-center text-emerald-400 mb-6 group-hover:scale-110 transition-transform">
                  {benefit.icon}
                </div>
                <div className="text-3xl font-bold mb-2 font-mono text-white">{benefit.value}</div>
                <h4 className="text-lg font-medium text-emerald-400 mb-4">{benefit.title}</h4>
                <p className="text-stone-500 text-sm leading-relaxed">
                  {benefit.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="mt-20 bg-emerald-500 rounded-[40px] p-12 text-emerald-950 text-center relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-4xl font-bold mb-6 serif italic">Sua escola pode ser a próxima!</h2>
            <p className="text-emerald-900/80 max-w-xl mx-auto mb-10 text-lg">
              Torne-se um parceiro do projeto E-Consciência e ajude a monitorar o impacto ambiental da sua comunidade.
            </p>
            <button className="px-10 py-5 bg-emerald-950 text-white font-bold rounded-2xl hover:bg-emerald-900 transition-all shadow-xl shadow-emerald-950/20">
              Cadastrar Minha Escola
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 bg-stone-950 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="text-white font-medium serif italic text-2xl mb-4">E-Consciência</div>
          <p className="text-stone-600 text-xs font-mono uppercase tracking-widest">
            Monitoramento de Impacto Ambiental • 2026
          </p>
        </div>
      </footer>
    </div>
  );
}
