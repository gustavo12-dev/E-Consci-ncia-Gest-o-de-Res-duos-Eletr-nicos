import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Recycle, Leaf, ArrowLeft, Thermometer, Droplets, Wind, Zap, PlusCircle, CheckCircle, Smartphone, Cpu, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function TermometroImpacto() {
  // Real-time state
  const [totalColetado, setTotalColetado] = useState(1243.6);
  const [chumbo, setChumbo] = useState(26.2);
  const [mercurio, setMercurio] = useState(12.4);
  const [ouro, setOuro] = useState(154.2);
  const [cobre, setCobre] = useState(452.8);

  const [activeTab, setActiveTab] = useState<'geral' | 'metais'>('geral');
  const [justAdded, setJustAdded] = useState<string | null>(null);

  // Auto-derived eco metrics
  const aguaPreservada = totalColetado * 362.9; // liters per kg
  const carbonSaved = totalColetado * 10.08; // kg CO2 saved per kg recycled
  const energySaved = totalColetado * 0.068; // MWh saved per kg

  // Simulate feeding data
  const handleAddWeight = (type: 'general' | 'chumbo' | 'mercurio' | 'ouro' | 'cobre', amount: number) => {
    setTotalColetado(prev => +(prev + amount).toFixed(1));
    
    if (type === 'chumbo') {
      setChumbo(prev => +(prev + amount).toFixed(1));
      setJustAdded(`+${amount}kg de Chumbo registrado no painel!`);
    } else if (type === 'mercurio') {
      setMercurio(prev => +(prev + amount).toFixed(1));
      setJustAdded(`+${amount}kg de Mercúrio registrado no painel!`);
    } else if (type === 'ouro') {
      setOuro(prev => +(prev + amount).toFixed(1));
      setJustAdded(`+${amount}g de Ouro registrado no painel!`);
    } else if (type === 'cobre') {
      setCobre(prev => +(prev + amount).toFixed(1));
      setJustAdded(`+${amount}kg de Cobre registrado no painel!`);
    } else {
      setJustAdded(`+${amount}kg de resíduos gerais recebidos de Amparo!`);
    }
  };

  useEffect(() => {
    if (justAdded) {
      const timer = setTimeout(() => setJustAdded(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [justAdded]);

  // Months values for Area Chart
  const monthlyDataHeight = [20, 35, 45, 62, 85, 110, 140];
  const monthlyLabels = ["Nov", "Dez", "Jan", "Fev", "Mar", "Abr", "Maio"];

  return (
    <div className="min-h-screen bg-stone-900 text-white selection:bg-emerald-500 selection:text-emerald-950 font-sans">
      {/* Header */}
      <header className="bg-stone-950 border-b border-white/10 py-6 px-4 sticky top-0 z-50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors font-medium">
            <ArrowLeft className="w-5 h-5" /> Voltar para Início
          </Link>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
              <Recycle className="w-5 h-5 text-stone-950" />
            </div>
            <span className="text-xl font-bold serif italic text-white">E-Consciência</span>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-6 border border-emerald-500/30 font-mono">
            <Thermometer className="w-4 h-4" /> Monitoramento Interativo do Painel
          </div>
          <h1 className="text-4xl md:text-6xl font-light mb-8 serif italic text-white">Painel de Impacto</h1>
          <p className="text-stone-400 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Nessa página você confere os gráficos detalhados de monitoramento ambiental do projeto. Adicione novos lotes no painel interativo abaixo para simular os lançamentos reais enviando dados às agências reguladoras!
          </p>
        </motion.div>

        {/* Simulating Form */}
        <section className="bg-gradient-to-r from-emerald-950 to-stone-950 rounded-[32px] p-8 border border-emerald-500/20 mb-16">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8 border-b border-white/5 pb-6">
            <div>
              <span className="text-xs uppercase tracking-widest font-mono text-emerald-400 font-bold block mb-1">Área de Supervisão</span>
              <h3 className="text-2xl font-bold text-white font-sans">Simulador de Entradas do Painel</h3>
            </div>
            
            <AnimatePresence mode="wait">
              {justAdded ? (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="bg-emerald-400/20 border border-emerald-400/30 text-emerald-300 px-4 py-2 rounded-xl text-xs flex items-center gap-2"
                >
                  <CheckCircle className="w-4 h-4 text-emerald-400 animate-bounce" /> {justAdded}
                </motion.div>
              ) : (
                <div className="text-stone-500 text-xs font-mono">Clique nos controladores para emular a recepção de materiais.</div>
              )}
            </AnimatePresence>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            <button 
              onClick={() => handleAddWeight('general', 10.0)}
              className="p-4 bg-stone-900 hover:bg-stone-850 rounded-2xl border border-white/5 hover:border-emerald-500/25 transition-all text-left group"
            >
              <div className="text-stone-400 text-xs font-mono mb-2">GERAL</div>
              <div className="font-semibold text-sm group-hover:text-emerald-400 transition-colors flex items-center gap-1">
                <PlusCircle className="w-4 h-4" /> +10.0 kg
              </div>
              <p className="text-[10px] text-stone-500 mt-1">Materiais diversos</p>
            </button>
            <button 
              onClick={() => handleAddWeight('chumbo', 2.5)}
              className="p-4 bg-stone-900 hover:bg-stone-850 rounded-2xl border border-white/5 hover:border-emerald-500/25 transition-all text-left group"
            >
              <div className="text-stone-400 text-xs font-mono mb-2">CHUMBO</div>
              <div className="font-semibold text-sm group-hover:text-emerald-400 transition-colors flex items-center gap-1">
                <PlusCircle className="w-4 h-4" /> +2.5 kg
              </div>
              <p className="text-[10px] text-stone-500 mt-1">Monitores, fiação</p>
            </button>
            <button 
              onClick={() => handleAddWeight('mercurio', 1.0)}
              className="p-4 bg-stone-900 hover:bg-stone-850 rounded-2xl border border-white/5 hover:border-emerald-500/25 transition-all text-left group"
            >
              <div className="text-stone-400 text-xs font-mono mb-2">MERCÚRIO</div>
              <div className="font-semibold text-sm group-hover:text-emerald-400 transition-colors flex items-center gap-1">
                <PlusCircle className="w-4 h-4" /> +1.0 kg
              </div>
              <p className="text-[10px] text-stone-500 mt-1">Lâmpadas, baterias</p>
            </button>
            <button 
              onClick={() => handleAddWeight('cobre', 15.0)}
              className="p-4 bg-stone-900 hover:bg-stone-850 rounded-2xl border border-white/5 hover:border-emerald-500/25 transition-all text-left group"
            >
              <div className="text-stone-400 text-xs font-mono mb-2">COBRE</div>
              <div className="font-semibold text-sm group-hover:text-emerald-400 transition-colors flex items-center gap-1">
                <PlusCircle className="w-4 h-4" /> +15.0 kg
              </div>
              <p className="text-[10px] text-stone-500 mt-1">Cabos e transformadores</p>
            </button>
            <button 
              onClick={() => handleAddWeight('ouro', 5.0)}
              className="p-4 bg-stone-900 hover:bg-stone-850 rounded-2xl border border-white/5 hover:border-emerald-500/25 transition-all col-span-2 sm:col-span-1 text-left group"
            >
              <div className="text-stone-400 text-xs font-mono mb-2">OURO</div>
              <div className="font-semibold text-sm group-hover:text-amber-400 transition-colors flex items-center gap-1">
                <PlusCircle className="w-4 h-4" /> +5.0 g
              </div>
              <p className="text-[10px] text-stone-500 mt-1">Processadores (g)</p>
            </button>
          </div>
        </section>

        {/* Dashboard Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          
          {/* Main big display */}
          <div className="lg:col-span-2 bg-stone-950 rounded-[40px] p-8 border border-white/5 flex flex-col justify-between">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h3 className="text-xl font-bold text-white">Curva de Descarte Acumulado</h3>
                <p className="text-xs text-stone-500 font-mono">Representação gráfica do peso coletado em Kg</p>
              </div>
              <div className="flex bg-stone-900 p-1 rounded-xl border border-white/5 text-xs font-mono">
                <button 
                  onClick={() => setActiveTab('geral')} 
                  className={`px-4 py-2 rounded-lg transition-all ${activeTab === 'geral' ? 'bg-emerald-500 text-stone-950 font-bold' : 'text-stone-400'}`}
                >
                  Mensal
                </button>
                <button 
                  onClick={() => setActiveTab('metais')} 
                  className={`px-4 py-2 rounded-lg transition-all ${activeTab === 'metais' ? 'bg-emerald-500 text-stone-950 font-bold' : 'text-stone-400'}`}
                >
                  Metais
                </button>
              </div>
            </div>

            {/* Simulated Animated Chart using SVGs */}
            <div className="h-64 flex items-end justify-between relative px-2 mb-6">
              {activeTab === 'geral' ? (
                <>
                  {/* Grid Lines */}
                  <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-20">
                    <div className="w-full border-t border-dashed border-white"></div>
                    <div className="w-full border-t border-dashed border-white"></div>
                    <div className="w-full border-t border-dashed border-white"></div>
                  </div>

                  {/* Monthly bars drawing */}
                  {monthlyDataHeight.map((val, idx) => {
                    // Make the last month responsive to total volume
                    const heightValue = idx === 6 ? Math.min(180, (totalColetado / 1243.6) * 140) : val;
                    return (
                      <div key={idx} className="flex flex-col items-center flex-1 group z-10">
                        <div className="text-[10px] font-mono font-bold text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity mb-2">
                          {(heightValue * 8.8).toFixed(1)}k
                        </div>
                        <motion.div 
                          initial={{ height: 0 }}
                          animate={{ height: heightValue }}
                          transition={{ type: "spring", stiffness: 60 }}
                          className="w-8 sm:w-12 bg-gradient-to-t from-emerald-950 to-emerald-400 rounded-lg group-hover:from-emerald-500 group-hover:to-teal-300 transition-colors shadow-lg"
                        />
                        <span className="text-xs text-stone-500 font-mono mt-3">{monthlyLabels[idx]}</span>
                      </div>
                    );
                  })}
                </>
              ) : (
                <>
                  {/* Metais heavy bars */}
                  {[
                    { label: "Chumbo (kg)", val: chumbo, target: 50, color: "from-red-950 to-red-400", hex: "#f87171" },
                    { label: "Mercúrio (kg)", val: mercurio, target: 30, color: "from-blue-950 to-blue-400", hex: "#60a5fa" },
                    { label: "Ouro (g)", val: ouro / 10, target: 50, color: "from-amber-950 to-amber-400", hex: "#fbbf24" }, // scaled
                    { label: "Cobre (kg/10)", val: cobre / 10, target: 100, color: "from-emerald-950 to-emerald-400", hex: "#34d399" } // scaled
                  ].map((item, idx) => (
                    <div key={idx} className="flex flex-col items-center flex-1 group z-10">
                      <div className="text-[10px] font-mono font-bold text-white opacity-0 group-hover:opacity-100 transition-opacity mb-2">
                        {idx === 2 ? `${ouro}g` : idx === 3 ? `${cobre}kg` : `${item.val}kg`}
                      </div>
                      <motion.div 
                        initial={{ height: 0 }}
                        animate={{ height: Math.min(180, (item.val / item.target) * 140) }}
                        transition={{ duration: 0.8 }}
                        className={`w-12 sm:w-16 bg-gradient-to-t ${item.color} rounded-t-xl group-hover:opacity-90 shadow-md`}
                      />
                      <span className="text-xs text-stone-400 font-medium mt-3 text-center leading-none">{item.label}</span>
                    </div>
                  ))}
                </>
              )}
            </div>

            <p className="text-xs text-stone-600 leading-relaxed max-w-lg mt-4 font-mono">
              * Gráficos gerados com base na telemetria atualizada automaticamente. Passe o mouse sobre as barras para ver detalhamentos aproximados em tempo real de cada material.
            </p>
          </div>

          {/* Right vertical thermometer graphic */}
          <div className="bg-stone-950 rounded-[40px] p-8 border border-white/5 flex flex-col justify-between items-center text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full -mr-16 -mt-16 blur-2xl"></div>
            
            <div className="w-full">
              <span className="text-[10px] uppercase tracking-[0.3em] text-stone-500 font-mono font-bold block mb-2">Termômetro PIB Amparo</span>
              <h3 className="text-lg font-bold text-white serif italic mb-6">Nível de Prevenção</h3>
            </div>

            {/* Custom interactive nested SVG Thermometer drawing */}
            <div className="relative flex items-center justify-center my-6 h-64 w-32">
              <div className="absolute top-0 w-8 h-48 bg-stone-900 rounded-full border border-white/10 flex items-end p-0.5 overflow-hidden shadow-inner">
                {/* Mercury level floating block */}
                <motion.div 
                  animate={{ height: `${Math.min(100, (totalColetado / 1800) * 100)}%` }}
                  transition={{ type: "spring", stiffness: 40 }}
                  className="w-full bg-gradient-to-t from-emerald-600 to-emerald-400 rounded-full shadow-[0_0_20px_rgba(52,211,153,0.6)]"
                />
              </div>
              {/* Thermometer bulb bulb */}
              <div className="absolute bottom-6 w-16 h-16 bg-stone-900 rounded-full border border-white/10 flex items-center justify-center shadow-lg">
                <div className="w-11 h-11 bg-gradient-to-br from-emerald-500 to-teal-400 rounded-full animate-pulse shadow-[0_0_15px_rgba(52,211,153,0.4)]"></div>
              </div>
            </div>

            <div>
              <div className="text-stone-400 text-[10px] uppercase tracking-widest font-mono mb-1">Massa Total Acumulada</div>
              <div className="text-4xl font-mono text-emerald-400 font-bold tracking-tight">
                {totalColetado.toLocaleString('pt-BR', { minimumFractionDigits: 1, maximumFractionDigits: 1 })} <span className="text-sm font-sans text-stone-500">kg</span>
              </div>
            </div>
          </div>

        </div>

        {/* Metal statistics cards */}
        <section className="mb-20">
          <h2 className="text-2xl font-light mb-8 serif italic text-emerald-400">Detalhamento dos Metais Neutralizados</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: "Chumbo Evitado", current: chumbo, target: 50, unit: "kg", color: "bg-red-400 text-red-400", desc: "Altamente tóxico, causa cansaço neurológico severo se acumulado." },
              { label: "Mercúrio Seguro", current: mercurio, target: 30, unit: "kg", color: "bg-blue-400 text-blue-400", desc: "Isolado de telas apagadas e lâmpadas de descarga velhas." },
              { label: "Ouro Recuperado", current: ouro, target: 500, unit: "g", color: "bg-amber-400 text-amber-400", desc: "Mineração urbana de circuitos integrados descartados." },
              { label: "Cobre Reciclado", current: cobre, target: 1000, unit: "kg", color: "bg-orange-400 text-orange-400", desc: "Total de fios de cobre e transformadores reaproveitados." }
            ].map((stat, i) => (
              <div key={i} className="bg-stone-950 p-6 rounded-3xl border border-white/5 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-sm font-bold text-stone-300 font-sans">{stat.label}</h4>
                    <span className="text-xs font-mono font-bold text-emerald-400">{stat.current} {stat.unit}</span>
                  </div>
                  <p className="text-xs text-stone-500 leading-relaxed mb-4">{stat.desc}</p>
                </div>
                
                <div>
                  <div className="h-2 bg-stone-900 rounded-full overflow-hidden border border-white/5 mb-1">
                    <motion.div 
                      animate={{ width: `${(stat.current / stat.target) * 100}%` }}
                      transition={{ duration: 0.8 }}
                      className={`h-full ${stat.color.split(' ')[0]}`}
                    />
                  </div>
                  <div className="text-[10px] text-stone-600 text-right font-mono">Meta: {stat.target}{stat.unit}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Environmental Benefits */}
        <section className="py-20 border-t border-white/10">
          <h2 className="text-3xl font-light mb-12 serif italic text-center">Simulações de Poupança Ecológica</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                icon: <Droplets className="w-8 h-8" />, 
                title: "Água Potável Preservada", 
                value: `${Math.round(aguaPreservada).toLocaleString('pt-BR')}L`, 
                desc: "Volume de lençóis que deixou de ser envenenado por infiltração de chorume eletrônico." 
              },
              { 
                icon: <Wind className="w-8 h-8" />, 
                title: "Redução de Carbono CO2", 
                value: `${(carbonSaved / 1000).toFixed(2)}t`, 
                desc: "Gases de estufa evitados ao descartar de maneira limpa ou encaminhar para refino urbano." 
              },
              { 
                icon: <Zap className="w-8 h-8" />, 
                title: "Energia Elétrica Poupada", 
                value: `${Math.round(energySaved * 1000)} kWh`, 
                desc: "Poupado ao reaproveitar ligas de cobre e silício prontas em vez de explorar minas virgens." 
              }
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

        {/* Security / Engagement Guidelines */}
        <section className="bg-stone-950 border border-white/10 rounded-[40px] p-10 flex flex-col md:flex-row gap-8 items-center text-left max-w-5xl mx-auto">
          <div className="w-16 h-16 rounded-full bg-emerald-500/15 flex items-center justify-center text-emerald-400 shrink-0">
            <ShieldCheck className="w-8 h-8" />
          </div>
          <div>
            <h4 className="text-lg font-bold text-white mb-2">Segurança e Origem dos Resultados</h4>
            <p className="text-sm text-stone-400 leading-relaxed">
              Todos os pesos imputados são confirmados e auditados, emitindo notas fiscais e laudos de descontaminação junto aos parceiros autorizados de reciclagem. Participe e ajude a bater nossas metas locais!
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 bg-stone-950 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="text-white font-medium serif italic text-2xl mb-4">E-Consciência</div>
          <p className="text-stone-600 text-xs font-mono uppercase tracking-widest">
            Monitoramento de Impacto Ambiental • PIB Amparo • 2026
          </p>
        </div>
      </footer>
    </div>
  );
}
