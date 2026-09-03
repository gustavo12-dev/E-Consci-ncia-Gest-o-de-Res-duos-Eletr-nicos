import { motion } from 'motion/react';
import { Recycle, Leaf, ShieldCheck, MapPin, Monitor, Cpu, Smartphone, Battery, Printer, Server, CheckCircle2, Phone, Facebook, Youtube, Linkedin, Instagram, ChevronDown, PlayCircle, ArrowLeft, Truck, GraduationCap, BarChart3, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Servicos() {
  const services = [
    {
      icon: <Truck className="w-10 h-10" />,
      title: "Coleta Logística Reversa",
      desc: "Realizamos a coleta programada de resíduos eletrônicos em escolas, empresas e condomínios, garantindo o transporte seguro e adequado.",
      features: ["Agendamento Online", "Transporte Especializado", "Rastreabilidade Total"]
    },
    {
      icon: <GraduationCap className="w-10 h-10" />,
      title: "Educação e Oficinas",
      desc: "Promovemos oficinas de hardware e conscientização ambiental para alunos e professores, transformando o descarte em aprendizado.",
      features: ["Oficinas de Hardware", "Palestras Educativas", "Material Didático Próprio"]
    },
    {
      icon: <BarChart3 className="w-10 h-10" />,
      title: "Monitoramento de Impacto",
      desc: "Oferecemos um painel de controle em tempo real para que parceiros acompanhem a quantidade de resíduos coletados e o impacto ambiental positivo.",
      features: ["Relatórios de Sustentabilidade", "Métricas em Tempo Real", "Certificados de Destinação"]
    },
    {
      icon: <Settings className="w-10 h-10" />,
      title: "Triagem e Descaracterização",
      desc: "Processamos os equipamentos coletados, separando componentes para reciclagem e garantindo a destruição segura de dados sensíveis.",
      features: ["Destruição de Dados", "Separação de Metais", "Destinação Final Homologada"]
    }
  ];

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900">
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
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-6xl font-light text-emerald-950 mb-6 serif italic">Nossos Serviços</h1>
          <p className="text-stone-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Oferecemos soluções completas para a gestão de resíduos eletrônicos, unindo tecnologia, logística e educação ambiental.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
          {services.map((service, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-[40px] p-10 border border-stone-100 shadow-sm hover:shadow-xl transition-all group"
            >
              <div className="w-20 h-20 bg-emerald-50 rounded-3xl flex items-center justify-center text-emerald-600 mb-8 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-3xl font-medium text-emerald-900 mb-4">{service.title}</h3>
              <p className="text-stone-500 leading-relaxed mb-8">
                {service.desc}
              </p>
              <ul className="space-y-3">
                {service.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-3 text-stone-700 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500" /> {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <section className="bg-emerald-900 rounded-[60px] p-16 text-white text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-light mb-8 serif italic">Pronto para transformar sua instituição?</h2>
            <p className="text-emerald-100/70 max-w-2xl mx-auto mb-12 text-lg">
              Junte-se ao ecossistema E-Consciência e comece a gerir seus resíduos eletrônicos de forma inteligente e sustentável.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/agendar" className="px-10 py-5 bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-bold rounded-2xl transition-all shadow-xl shadow-emerald-500/20">
                Agendar Coleta Agora
              </Link>
              <button className="px-10 py-5 bg-white/10 hover:bg-white/20 text-white font-bold rounded-2xl transition-all backdrop-blur-md border border-white/20">
                Falar com Consultor
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 bg-white border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="text-emerald-900 font-medium serif italic text-2xl mb-4">E-Consciência</div>
          <p className="text-stone-400 text-xs font-mono uppercase tracking-widest">
            Soluções Inteligentes para Resíduos Eletrônicos
          </p>
        </div>
      </footer>
    </div>
  );
}
