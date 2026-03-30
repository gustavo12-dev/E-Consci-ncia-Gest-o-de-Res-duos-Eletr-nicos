import { useState, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Recycle, Leaf, ShieldCheck, MapPin, Monitor, Cpu, Smartphone, Battery, Printer, Server, CheckCircle2, Phone, Facebook, Youtube, Linkedin, Instagram, ChevronDown, PlayCircle, X } from 'lucide-react';

export default function LandingPage() {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [showSuccessModal, setShowSuccessModal] = useState(false);

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
          <span>Contato</span>
        </div>
        <div className="flex gap-4 items-center">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors"><Facebook className="w-4 h-4" /></a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors"><Youtube className="w-4 h-4" /></a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors"><Linkedin className="w-4 h-4" /></a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors"><Instagram className="w-4 h-4" /></a>
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
            <Link to="/impacto" className="text-emerald-400 hover:text-emerald-300 transition-colors">Impacto</Link>
            <Link to="/guia" className="hover:text-emerald-400 transition-colors">Guia</Link>
            <Link to="/agendar" className="hover:text-emerald-400 transition-colors">Contato</Link>
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

      {/* Video Section - Inspired by the provided image */}
      <section className="py-32 bg-stone-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative group cursor-pointer"
            >
              <div className="relative rounded-[40px] overflow-hidden border-8 border-stone-800 shadow-2xl aspect-video bg-black">
                <iframe 
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/YYWIc-gVoI4?autoplay=1&mute=1&loop=1&playlist=YYWIc-gVoI4"
                  title="E-waste recycling video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-5xl font-bold mb-4 serif italic">E-Consciência</h2>
              <h3 className="text-2xl text-emerald-400 font-medium mb-8">Contribuindo com um planeta mais sustentável.</h3>
              <div className="space-y-6 text-stone-300 leading-relaxed">
                <p>
                  Atuamos no comércio e gerenciamento de resíduos eletroeletrônicos, de informática, sobras industriais, automação e sucatas diversas. Com sede em Bragança Paulista/SP, O Projeto surgiu de uma ideia de reaproveitar o lixo eletrônico gerado e acumulado por empresas.
                </p>
                <p>
                  Coletamos materiais como: Computador, Aparelho de telefonia, Teclado, Monitor, Mouse, Placa com Componente, Impressora, Nobreak,Celular, Cabos em Geral, entre outros.
                </p>
              </div>
              <Link to="/sobre-nos" className="mt-10 px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-lg inline-flex items-center gap-2 transition-all shadow-lg shadow-emerald-600/20">
                <Recycle className="w-5 h-5" /> Saiba mais
              </Link>
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                icon: <MapPin className="w-6 h-6" />, 
                title: "Pontos de Coleta (PEV)", 
                desc: "Instalação de coletores específicos para pequenos eletrônicos e pilhas." 
              },
              { 
                icon: <Leaf className="w-6 h-6" />, 
                title: "Educação Ambiental", 
                desc: "Oficinas de hardware aberto e arte tecnológica para conscientização." 
              },
              { 
                icon: <Recycle className="w-6 h-6" />, 
                title: "Logística Reversa", 
                desc: "Para garantir o destino final adequado fazemos mapeamento de locais que estão dispostos a seguir normas de descarte consciente." 
              },
              { 
                icon: <ShieldCheck className="w-6 h-6" />, 
                title: "Segurança de Dados", 
                desc: "Checklist de pré-descarte com tutoriais de limpeza de dados." 
              }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="p-8 bg-white rounded-3xl border border-stone-200 shadow-sm"
              >
                <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-medium text-emerald-900 mb-4">{feature.title}</h3>
                <p className="text-stone-500 leading-relaxed text-sm">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Thermometer */}
      <section className="py-32 bg-emerald-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
           <Recycle className="w-full h-full rotate-12" />
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-light mb-8 serif italic">Termômetro de Impacto</h2>
              <p className="text-emerald-100/70 mb-12 text-lg leading-relaxed">
                Acompanhe o quanto de metais pesados deixamos de descartar no solo em Bragança Paulista/SP durante nossa última pesquisa.
              </p>
              <div className="space-y-8">
                <div>
                  <div className="flex justify-between mb-2 text-sm font-mono uppercase tracking-widest text-emerald-400">
                    <span>Chumbo Evitado</span>
                    <span>25kg / 50kg</span>
                  </div>
                  <div className="h-2 bg-emerald-950 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: '50%' }}
                      className="h-full bg-emerald-400"
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2 text-sm font-mono uppercase tracking-widest text-emerald-400">
                    <span>Mercúrio Recuperado</span>
                    <span>12kg / 30kg</span>
                  </div>
                  <div className="h-2 bg-emerald-950 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: '40%' }}
                      className="h-full bg-emerald-400"
                    />
                  </div>
                </div>
              </div>
              <Link to="/impacto" className="mt-10 inline-flex items-center gap-2 text-emerald-400 font-bold hover:text-emerald-300 transition-colors">
                Ver Monitoramento Completo <ChevronDown className="w-4 h-4 -rotate-90" />
              </Link>
            </div>
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-12 border border-white/10">
              <div className="text-center">
                <div className="text-stone-400 text-xs uppercase tracking-[0.3em] mb-4">Total Coletado</div>
                <div className="text-7xl font-light serif italic mb-6">1.240kg</div>
                <div className="inline-flex items-center gap-2 text-emerald-400 bg-emerald-400/10 px-4 py-2 rounded-full text-sm">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
                  Atualizado Durante Nossa Última Pesquisa
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

          {/* Nossas Redes Sociais */}
          <div>
            <h3 className="text-emerald-400 text-2xl font-bold mb-8">Nossas Redes Sociais</h3>
            <div className="flex gap-3">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-[#08263d] flex items-center justify-center rounded hover:bg-emerald-500 hover:text-emerald-950 transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-[#08263d] flex items-center justify-center rounded hover:bg-emerald-500 hover:text-emerald-950 transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-[#08263d] flex items-center justify-center rounded hover:bg-emerald-500 hover:text-emerald-950 transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-[#08263d] flex items-center justify-center rounded hover:bg-emerald-500 hover:text-emerald-950 transition-all">
                <Youtube className="w-5 h-5" />
              </a>
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
