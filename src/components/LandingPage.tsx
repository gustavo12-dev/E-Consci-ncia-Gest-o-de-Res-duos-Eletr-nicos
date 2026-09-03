import { useState, FormEvent, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Recycle, Leaf, ShieldCheck, MapPin, Monitor, Cpu, Smartphone, Battery, Printer, Server, CheckCircle2, Phone, Facebook, Youtube, Linkedin, Instagram, ChevronDown, PlayCircle, X, Thermometer, Radio } from 'lucide-react';

export default function LandingPage() {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  // Simulated live feed of e-waste data from panel
  const [totalColetado, setTotalColetado] = useState(1243.6);
  const [leadEvitado, setLeadEvitado] = useState(26.2);
  const [mercuryRecuperado, setMercuryRecuperado] = useState(12.4);
  const [liveLog, setLiveLog] = useState<string[]>([
    "Painel Principal: Canal de telemetria ativo e aguardando lotes...",
    "Lote de 18 mouses e 5 teclados recebido e triado na PIB Amparo",
    "Monitor antigo CRT processado pela equipe E-Consciência"
  ]);

  useEffect(() => {
    const logs = [
      "Lote registrado: +3.2kg doados na igreja Primeira Igreja Batista",
      "Lote adicionado: +1.8kg de cabos espiralados de cobre",
      "Lote verificado: +5.0kg de placas mãe obsoletas separadas",
      "Lote registrado: +0.6kg de chumbo evitado no ecossistema",
      "Lote registrado: +0.3kg de mercúrio puro isolado hermeticamente",
      "Triagem na igreja: Cabos coaxiais limpos adicionados (+2.1kg)"
    ];

    const interval = setInterval(() => {
      const randomLog = logs[Math.floor(Math.random() * logs.length)];
      const incVal = +(Math.random() * 2 + 0.8).toFixed(1);
      
      setTotalColetado(prev => +(prev + incVal).toFixed(1));
      
      if (randomLog.includes("chumbo")) {
        setLeadEvitado(p => +(p + 0.3).toFixed(1));
      } else if (randomLog.includes("mercúrio")) {
        setMercuryRecuperado(p => +(p + 0.2).toFixed(1));
      }

      setLiveLog(prev => {
        const entry = `${randomLog}`;
        return [entry, ...prev.slice(0, 3)];
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleNewsletterSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (newsletterEmail && newsletterEmail.includes('@')) {
      setShowSuccessModal(true);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Success Modal */}
      <AnimatePresence>
        {showSuccessModal && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white rounded-[32px] p-8 md:p-12 max-w-lg w-full shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-2 bg-emerald-500"></div>
              <button 
                onClick={() => setShowSuccessModal(false)}
                className="absolute top-6 right-6 text-stone-400 hover:text-stone-900 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="text-center">
                <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-8">
                  <CheckCircle2 className="w-10 h-10 text-emerald-600" />
                </div>
                <h2 className="text-3xl font-bold text-emerald-950 mb-4 serif italic">Inscrição Realizada!</h2>
                <p className="text-stone-600 mb-8 leading-relaxed">
                  As informações foram cadastradas com sucesso em nossa base de dados. Agora você receberá todas as nossas novidades diretamente em:
                </p>
                <div className="bg-stone-50 border border-stone-100 p-4 rounded-2xl mb-8">
                  <span className="text-emerald-700 font-bold text-lg break-all">{newsletterEmail}</span>
                </div>
                <button 
                  onClick={() => {
                    setShowSuccessModal(false);
                    setNewsletterEmail('');
                  }}
                  className="w-full py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl transition-all shadow-lg shadow-emerald-600/20"
                >
                  Entendido
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Top Bar */}
      <div className="bg-emerald-950 text-white py-2 px-4 flex justify-between items-center text-xs font-medium border-b border-white/10">
        <div className="flex gap-4">
          <Link to="/contato" className="hover:text-emerald-400 transition-colors">Contato</Link>
        </div>
        <div className="text-emerald-400/80 font-mono text-[10px] hidden sm:block">
          Ponto Credenciado: Primeira Igreja Batista Jardim Itália
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-stone-900 text-white py-4 px-4 sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center">
              <Recycle className="w-6 h-6 text-emerald-950" />
            </div>
            <div>
              <div className="text-2xl font-bold serif italic leading-none">E-Consciência</div>
              <div className="text-[10px] uppercase tracking-widest text-emerald-500 font-semibold">Uma consciência, um motivo, uma responsabilidade</div>
            </div>
          </Link>

          <nav className="hidden lg:flex gap-8 items-center text-sm font-semibold uppercase tracking-wider">
            <Link to="/sobre-nos" className="hover:text-emerald-400 transition-colors">Sobre Nós</Link>
            <Link to="/servicos" className="hover:text-emerald-400 transition-colors">Serviços</Link>
            <Link to="/o-que-coletamos" className="hover:text-emerald-400 transition-colors">O que coletamos</Link>
            <Link to="/impacto" className="hover:text-emerald-400 transition-colors">Impacto</Link>
            <Link to="/guia" className="hover:text-emerald-400 transition-colors">Guia</Link>
            <Link to="/contato" className="hover:text-emerald-400 transition-colors">Contato</Link>
          </nav>

          <Link to="/agendar" className="bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-3 rounded-lg font-bold text-sm flex items-center gap-2 transition-all shadow-lg shadow-emerald-600/20">
            <Phone className="w-4 h-4" /> AGENDE SUA COLETA
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-emerald-950">
        <div className="absolute inset-0 opacity-40">
          <img 
            src="https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&q=80&w=2000" 
            alt="E-waste recycling facility" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/50 to-emerald-950"></div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4 max-w-4xl"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-sm font-mono mb-6 backdrop-blur-sm">
            COLETA GRATUITA DE RESÍDUOS
          </span>
          <h1 className="text-6xl md:text-8xl font-light text-white mb-8 tracking-tight serif italic">
            E-Consciência & Sucata Digital
          </h1>
          <p className="text-xl text-emerald-100/80 mb-10 max-w-2xl mx-auto leading-relaxed">
            Gestão profissional de resíduos eletrônicos. Coletamos e reciclamos o seu descarte com responsabilidade ambiental.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/agendar" className="px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-semibold rounded-full transition-all shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2">
              <Phone className="w-5 h-5" /> Agendar Coleta
            </Link>
            <Link to="/guia" className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-full backdrop-blur-md border border-white/20 transition-all flex items-center justify-center">
              O Que Coletamos?
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Presentation & Impact Section */}
      <section className="py-24 bg-stone-900 text-white overflow-hidden relative border-t border-b border-stone-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-mono font-bold uppercase tracking-widest">
                <Leaf className="w-4 h-4 text-emerald-400" /> Projeto E-Consciência
              </div>
              <h2 className="text-4xl md:text-5xl font-light text-white serif italic">E-Consciência</h2>
              <h3 className="text-2xl text-emerald-400 font-medium">Contribuindo com um planeta mais sustentável.</h3>
              <div className="space-y-4 text-stone-300 leading-relaxed text-base">
                <p>
                  Atuamos no comércio e gerenciamento de resíduos eletroeletrônicos, de informática, sobras industriais, automação e sucatas diversas. Conectados diretamente com Amparo/SP, o Projeto surgiu de uma ideia de reaproveitar o lixo eletrônico gerado e acumulado por empresas e cidadãos.
                </p>
                <p>
                  Coletamos materiais como: Computador, Aparelho de telefonia, Teclado, Monitor, Mouse, Placa com Componente, Impressora, Nobreak, Celular, Cabos em Geral, entre outros.
                </p>
              </div>
              <div className="pt-4 flex flex-wrap gap-4">
                <Link to="/sobre-nos" className="px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl inline-flex items-center gap-2 transition-all shadow-lg shadow-emerald-600/20 text-sm">
                  <Recycle className="w-5 h-5" /> Saiba mais sobre nós
                </Link>
                <Link to="/mapa" className="px-8 py-4 bg-stone-800 hover:bg-stone-700 text-stone-200 font-semibold rounded-xl inline-flex items-center gap-2 border border-white/10 transition-all text-sm">
                  <MapPin className="w-5 h-5 text-emerald-400" /> Ver Ponto de Coleta (PEV)
                </Link>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              <div className="p-6 bg-stone-950/80 rounded-3xl border border-white/10 space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <Recycle className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-white font-sans">Economia Circular</h4>
                <p className="text-stone-400 text-xs leading-relaxed">
                  Transformamos resíduos tecnológicos em novas oportunidades por meio da desmontagem técnica e reaproveitamento de componentes nobres.
                </p>
              </div>

              <div className="p-6 bg-stone-950/80 rounded-3xl border border-white/10 space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-white font-sans">Proteção Ambiental</h4>
                <p className="text-stone-400 text-xs leading-relaxed">
                  Evitamos que metais pesados (chumbo, mercúrio e cádmio) contaminem o solo e os lençóis freáticos de Amparo e região.
                </p>
              </div>

              <div className="p-6 bg-stone-950/80 rounded-3xl border border-white/10 space-y-3 sm:col-span-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white font-sans">Ponto de Entrega Voluntária (PEV)</h4>
                    <p className="text-stone-400 text-xs mt-0.5">
                      Instalado na Primeira Igreja Batista em Amparo (Rua Romeu Mezzacapa, 585 - Jardim Itália).
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-white border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="text-5xl font-light text-emerald-900 mb-2 serif">+50%</div>
              <div className="text-stone-500 uppercase tracking-widest text-xs font-semibold">DOS ELETRÔNICOS SÃO RECICLÁVEIS</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-light text-emerald-900 mb-2 serif">70%</div>
              <div className="text-stone-500 uppercase tracking-widest text-xs font-semibold">DAS PESSOAS NÃO TÊM CONHECIMENTO DE ONDE DESCARTAR OS ELETRÔNICOS</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-light text-emerald-900 mb-2 serif">20%</div>
              <div className="text-stone-500 uppercase tracking-widest text-xs font-semibold">Recuperação de Metais</div>
            </div>
          </div>
        </div>
      </section>

      {/* What we collect - Inspired by Sucata Digital */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-light text-emerald-950 mb-6 serif italic">O Que Coletamos?</h2>
            <p className="text-stone-500 max-w-2xl mx-auto">
              Aceitamos uma ampla gama de resíduos eletrônicos para reciclagem e reaproveitamento.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { icon: <Monitor className="w-8 h-8" />, label: "Monitores" },
              { icon: <Cpu className="w-8 h-8" />, label: "CPUs / Placas" },
              { icon: <Smartphone className="w-8 h-8" />, label: "Celulares" },
              { icon: <Battery className="w-8 h-8" />, label: "Baterias" },
              { icon: <Printer className="w-8 h-8" />, label: "Impressoras" },
              { icon: <Server className="w-8 h-8" />, label: "Servidores" },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center p-6 bg-stone-50 rounded-2xl border border-stone-100 hover:border-emerald-200 transition-all group">
                <div className="text-stone-400 group-hover:text-emerald-500 transition-colors mb-4">
                  {item.icon}
                </div>
                <span className="text-sm font-medium text-stone-600">{item.label}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/guia" className="text-emerald-600 font-bold hover:text-emerald-500 transition-colors flex items-center justify-center gap-2">
              Ver Guia Completo de Descarte <ChevronDown className="w-4 h-4 -rotate-90" />
            </Link>
          </div>
        </div>
      </section>

      {/* How it works - Step by Step */}
      <section className="py-32 bg-stone-50 border-y border-stone-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-light text-emerald-950 mb-12 serif italic">Como funciona a coleta?</h2>
              <div className="space-y-12">
                {[
                  { step: "01", title: "Agendamento", desc: "Entre em contato via WhatsApp ou telefone para agendar sua coleta gratuita." },
                  { step: "02", title: "Coleta e Transporte", desc: "Nossa equipe retira os resíduos no local combinado." },
                  { step: "03", title: "Triagem e Reciclagem", desc: "Os materiais são separados e destinados para reciclagem ou reuso." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-6">
                    <span className="text-2xl font-mono text-emerald-500/30 font-bold">{item.step}</span>
                    <div>
                      <h3 className="text-xl font-medium text-emerald-900 mb-2">{item.title}</h3>
                      <p className="text-stone-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1591336373307-5ed77d3f72e8?auto=format&fit=crop&q=80&w=1000" 
                alt="Recycling process" 
                className="rounded-3xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-10 -left-10 bg-emerald-500 p-8 rounded-3xl text-emerald-950 shadow-xl">
                <CheckCircle2 className="w-12 h-12 mb-4" />
                <div className="text-2xl font-bold serif italic">100% Ecológico</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features - The Ecosystem */}
      <section className="py-32 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-20">
            <h2 className="text-4xl md:text-5xl font-light text-emerald-950 mb-6 serif italic">
              O Ecossistema de Gestão
            </h2>
            <p className="text-stone-600 max-w-xl">
              Nossa proposta vai além de uma campanha: criamos uma estrutura contínua de coleta, monitoramento e educação.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                icon: <MapPin className="w-6 h-6 animate-bounce" />, 
                title: "Igreja e Localização", 
                desc: "Nosso principal ponto físico credenciado para entrega voluntária de eletrônicos. Clique para ver o endereço, mapa de acesso e contatos da igreja da nossa comunidade.",
                link: "/mapa",
                highlight: true
              },
              { 
                icon: <Leaf className="w-6 h-6" />, 
                title: "Educação Ambiental", 
                desc: "Confira nosso guia virtual exclusivo com o passo a passo completo sobre como fazer o bom descarte correto dos materiais eletrônicos.",
                link: "/educacao-ambiental"
              },
              { 
                icon: <Recycle className="w-6 h-6" />, 
                title: "Logística Reversa", 
                desc: "Para garantir o destino final adequado aos resíduos coletados facilitamos a triangulação com cooperativas e indústrias homologadas.",
                link: "/servicos"
              }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className={`relative overflow-hidden group cursor-pointer p-8 bg-white rounded-[32px] border shadow-sm transition-all flex flex-col justify-between ${feature.highlight ? 'border-emerald-500 shadow-emerald-500/5 ring-1 ring-emerald-500/20' : 'border-stone-200 hover:border-emerald-500/40'}`}
              >
                {feature.highlight && (
                  <span className="absolute top-4 right-4 flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                  </span>
                )}
                <div>
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 transition-all group-hover:scale-110 ${feature.highlight ? 'bg-emerald-500 text-white' : 'bg-emerald-50 text-emerald-600'}`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-emerald-950 mb-4">{feature.title}</h3>
                  <p className="text-stone-500 leading-relaxed text-sm mb-6">
                    {feature.desc}
                  </p>
                </div>
                <Link to={feature.link} className={`inline-flex items-center gap-1 text-sm font-semibold transition-all ${feature.highlight ? 'text-emerald-600 group-hover:gap-2' : 'text-stone-400 group-hover:text-emerald-500 group-hover:gap-2'}`}>
                  Ver mais detalhes <ChevronDown className="w-4 h-4 -rotate-90" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Thermometer */}
      <section className="py-32 bg-[#092c42] text-white overflow-hidden relative border-t border-[#133e5c]">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none">
           <Recycle className="w-full h-full rotate-12" />
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-mono uppercase tracking-widest mb-6 border border-emerald-500/30">
                <Radio className="w-4 h-4 animate-pulse" /> Telemetria de Impacto (Painel Principal)
              </div>
              <h2 className="text-4xl md:text-5xl font-light mb-8 serif italic">Termômetro de Impacto</h2>
              <p className="text-stone-300 mb-12 text-lg leading-relaxed">
                Acompanhe o quanto de metais pesados deixamos de descartar no solo em Amparo e região, alimentado por dados computados ao vivo de nosso ecossistema.
              </p>
              <div className="space-y-8">
                <div>
                  <div className="flex justify-between mb-2 text-sm font-mono uppercase tracking-widest text-emerald-400">
                    <span>Chumbo Evitado</span>
                    <span className="font-bold">{leadEvitado.toFixed(1)}kg / 50.0kg</span>
                  </div>
                  <div className="h-3 bg-slate-950 rounded-full overflow-hidden border border-slate-800">
                    <motion.div 
                      animate={{ width: `${(leadEvitado / 50) * 100}%` }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 shadow-[0_0_10px_rgba(16,185,129,0.5)]"
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2 text-sm font-mono uppercase tracking-widest text-emerald-400">
                    <span>Mercúrio Recuperado</span>
                    <span className="font-bold">{mercuryRecuperado.toFixed(1)}kg / 30.0kg</span>
                  </div>
                  <div className="h-3 bg-slate-950 rounded-full overflow-hidden border border-slate-800">
                    <motion.div 
                      animate={{ width: `${(mercuryRecuperado / 30) * 100}%` }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-blue-500 to-emerald-400 shadow-[0_0_10px_rgba(59,130,246,0.5)]"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-10">
                <Link to="/impacto" className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-8 py-4 rounded-2xl transition-all shadow-lg shadow-emerald-600/30">
                  Ver Monitoramento Completo <ChevronDown className="w-4 h-4 -rotate-90" />
                </Link>
              </div>
            </div>
            <div className="bg-slate-950/80 backdrop-blur-xl rounded-[40px] p-10 border border-white/10 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/10 rounded-full -mr-24 -mt-24 blur-3xl"></div>
              <div className="text-center mb-8 relative z-10">
                <div className="text-stone-400 text-xs uppercase tracking-[0.3em] mb-4">Total Coletado</div>
                <div className="text-7xl font-mono text-emerald-400 font-extrabold tracking-tight mb-4 flex items-center justify-center gap-1">
                  <motion.span
                    key={totalColetado}
                    initial={{ scale: 1.1, opacity: 0.8 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="tabular-nums"
                  >
                    {totalColetado.toLocaleString('pt-BR', { minimumFractionDigits: 1, maximumFractionDigits: 1 })}
                  </motion.span>
                  <span className="text-2xl font-light text-stone-500 uppercase ml-1">kg</span>
                </div>
                <div className="inline-flex items-center gap-2 text-emerald-400 bg-emerald-400/15 px-4 py-2 rounded-full text-xs font-semibold leading-none border border-emerald-400/20">
                  <span className="w-2.5 h-2.5 bg-emerald-400 rounded-full animate-ping"></span>
                  Conexão ao vivo estabelecida
                </div>
              </div>

               {/* Live telemetry console */}
              <div className="bg-black/60 rounded-2xl p-6 border border-white/5 font-mono text-xs text-stone-300">
                <div className="flex justify-between items-center text-stone-500 pb-3 border-b border-white/5 mb-4 font-mono uppercase tracking-wider">
                  <span>Satélite / Painel Principal</span>
                  <span className="text-emerald-500 animate-pulse">● Canal de telemetria ativo</span>
                </div>
                <div className="space-y-2.5 h-36 overflow-y-hidden">
                  <AnimatePresence initial={false}>
                    {liveLog.map((log, idx) => (
                      <motion.div
                        key={log + idx}
                        initial={{ opacity: 0, x: -10, y: -10 }}
                        animate={{ opacity: 1, x: 0, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className={`${idx === 0 ? 'text-emerald-400 font-bold border-l-2 border-emerald-500 pl-2' : 'text-stone-400 pl-2'} truncate`}
                      >
                        {log}
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a3150] text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Links Úteis */}
          <div>
            <h3 className="text-emerald-400 text-2xl font-bold mb-8">Links Úteis</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/" className="flex items-center gap-2 hover:text-emerald-400 transition-colors">
                  <span className="text-emerald-400">—</span> Home
                </Link>
              </li>
              <li>
                <Link to="/sobre-nos" className="flex items-center gap-2 hover:text-emerald-400 transition-colors">
                  <span className="text-emerald-400">—</span> Sobre Nós
                </Link>
              </li>
              <li>
                <Link to="/servicos" className="flex items-center gap-2 hover:text-emerald-400 transition-colors">
                  <span className="text-emerald-400">—</span> Serviços
                </Link>
              </li>
              <li>
                <Link to="/o-que-coletamos" className="flex items-center gap-2 hover:text-emerald-400 transition-colors">
                  <span className="text-emerald-400">—</span> O que coletamos?
                </Link>
              </li>
            </ul>
          </div>

          {/* Receba nossas novidades */}
          <div>
            <h3 className="text-emerald-400 text-2xl font-bold mb-8">Receba nossas novidades</h3>
            <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email" 
                value={newsletterEmail}
                onChange={(e) => {
                  const value = e.target.value;
                  if (!/[0-9]/.test(value)) {
                    setNewsletterEmail(value);
                  }
                }}
                className="bg-transparent border-b border-white/30 py-2 px-1 flex-1 focus:outline-none focus:border-emerald-400 transition-colors"
                required
              />
              <button 
                type="submit"
                className="bg-[#0078b9] hover:bg-[#00669d] text-white px-6 py-2 rounded font-medium transition-colors"
              >
                Assinar
              </button>
            </form>
          </div>

          {/* Sede e Ponto de Coleta (Localização Maps) */}
          <div>
            <h3 className="text-emerald-400 text-2xl font-bold mb-4">Sede e Coleta</h3>
            <div className="text-stone-300 text-sm leading-relaxed mb-4">
              <p className="font-bold text-white mb-1">Primeira Igreja Batista — Amparo/SP</p>
              <p>Rua: Romeu Mezzacapa, 585 — Jardim Itália</p>
              <p className="text-stone-400 text-xs">CEP: 13.901-130</p>
            </div>
            <div className="w-full h-36 rounded-2xl overflow-hidden border border-white/10 shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.990264027734!2d-46.77259020000001!3d-22.4566412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c9197c35fa9ef9%3A0xe5a3cda1c3fa67df!2sR.%20Romeu%20Mezzacapa%2C%20585%20-%20Jardim%20Italia%2C%20Amparo%20-%20SP%2C%2013901-130!5e0!3m2!1spt-BR!2sbr!4v1716681000000!5m2!1spt-BR!2sbr"
                className="w-full h-full border-0"
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-stone-400 font-mono">
          <div>© 2026 E-Consciência - Gestão de Resíduos Eletrônicos</div>
          <div className="flex gap-4">
            <Link to="/privacidade" className="hover:text-white transition-colors">Privacidade</Link>
            <Link to="/termos" className="hover:text-white transition-colors">Termos</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
