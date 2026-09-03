import { motion } from 'motion/react';
import { Monitor, Cpu, Smartphone, Battery, Printer, Server, Info, AlertTriangle, CheckCircle2, ArrowLeft, Recycle, Leaf, ShieldCheck, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function OQueColetamos() {
  const categories = [
    {
      icon: <Monitor className="w-10 h-10" />,
      title: "Monitores e Telas",
      items: ["Monitores CRT", "Telas LCD/LED", "Televisores", "Notebooks"],
      warning: "Contém mercúrio e chumbo. Não quebre a tela.",
      color: "bg-blue-50 text-blue-600 border-blue-100"
    },
    {
      icon: <Cpu className="w-10 h-10" />,
      title: "Informática e Placas",
      items: ["CPUs", "Placas-mãe", "Memórias", "Processadores"],
      warning: "Rico em metais preciosos. Mantenha as placas intactas.",
      color: "bg-emerald-50 text-emerald-600 border-emerald-100"
    },
    {
      icon: <Smartphone className="w-10 h-10" />,
      title: "Dispositivos Móveis",
      items: ["Celulares", "Tablets", "Smartwatches", "GPS"],
      warning: "Remova o cartão SIM e reset de fábrica antes de descartar.",
      color: "bg-purple-50 text-purple-600 border-purple-100"
    },
    {
      icon: <Battery className="w-10 h-10" />,
      title: "Pilhas e Baterias",
      items: ["Baterias de Lítio", "Pilhas Alcalinas", "Baterias de Chumbo"],
      warning: "Altamente tóxico. Descarte apenas em coletores específicos (PEV).",
      color: "bg-amber-50 text-amber-600 border-amber-100"
    },
    {
      icon: <Printer className="w-10 h-10" />,
      title: "Periféricos",
      items: ["Impressoras", "Scanners", "Teclados", "Mouses"],
      warning: "Remova cartuchos de tinta ou toners separadamente.",
      color: "bg-stone-50 text-stone-600 border-stone-100"
    },
    {
      icon: <Server className="w-10 h-10" />,
      title: "Equipamentos de Rede",
      items: ["Roteadores", "Modems", "Servidores", "Switches"],
      warning: "Limpeza de dados corporativos é recomendada.",
      color: "bg-indigo-50 text-indigo-600 border-indigo-100"
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
          <h1 className="text-5xl md:text-6xl font-light text-emerald-950 mb-6 serif italic">O Que Coletamos?</h1>
          <p className="text-stone-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Saiba quais resíduos eletrônicos podem ser descartados em nosso ecossistema e como prepará-los corretamente.
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {categories.map((cat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-[40px] p-10 border border-stone-100 shadow-sm hover:shadow-xl transition-all"
            >
              <div className={`w-20 h-20 ${cat.color} rounded-3xl flex items-center justify-center mb-8 border`}>
                {cat.icon}
              </div>
              <h3 className="text-3xl font-medium text-emerald-900 mb-6">{cat.title}</h3>
              <ul className="space-y-3 mb-8">
                {cat.items.map((item, j) => (
                  <li key={j} className="flex items-center gap-3 text-stone-600 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500" /> {item}
                  </li>
                ))}
              </ul>
              <div className="p-6 bg-amber-50 rounded-2xl border border-amber-100 flex gap-4">
                <AlertTriangle className="w-6 h-6 text-amber-600 shrink-0" />
                <p className="text-sm text-amber-800 leading-relaxed font-medium">
                  {cat.warning}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* What NOT to collect */}
        <section className="bg-stone-900 rounded-[60px] p-16 text-white mb-32 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-light mb-8 serif italic">O que NÃO coletamos?</h2>
              <p className="text-stone-400 mb-10 leading-relaxed text-lg">
                Para garantir a segurança de todos e a eficiência do processo, alguns itens não podem ser descartados em nossos pontos de coleta.
              </p>
              <ul className="space-y-4">
                {[
                  "Lâmpadas de qualquer tipo",
                  "Eletrodomésticos de grande porte (Geladeiras, Fogões)",
                  "Resíduos químicos ou industriais",
                  "Lixo hospitalar ou biológico",
                  "Cartuchos e Toners soltos (sem o equipamento)"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-stone-300">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white/5 backdrop-blur-xl p-10 rounded-[40px] border border-white/10">
              <h4 className="text-2xl font-medium mb-6 text-emerald-400">Dúvidas sobre um item?</h4>
              <p className="text-stone-400 mb-8 text-sm leading-relaxed">
                Se você tem um equipamento que não está listado ou tem dúvidas sobre o descarte, entre em contato com nossa equipe técnica.
              </p>
              <button className="w-full py-5 bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-bold rounded-2xl transition-all shadow-xl shadow-emerald-500/20">
                Consultar Equipe Técnica
              </button>
            </div>
          </div>
        </section>

        {/* Preparation Steps */}
        <section className="mb-32">
          <h2 className="text-4xl font-light text-emerald-950 mb-16 serif italic text-center">Como preparar seus resíduos?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                step: "01",
                title: "Limpeza de Dados",
                desc: "Remova todas as contas e realize o reset de fábrica em celulares, tablets e computadores para proteger sua privacidade."
              },
              {
                step: "02",
                title: "Remoção de Baterias",
                desc: "Se o equipamento permitir, remova baterias e pilhas. Elas devem ser entregues em coletores específicos para pilhas."
              },
              {
                step: "03",
                title: "Acondicionamento",
                desc: "Coloque itens pequenos em caixas e enrole os cabos. Isso evita danos e facilita a triagem na cooperativa."
              }
            ].map((step, i) => (
              <div key={i} className="relative p-10 bg-white rounded-[40px] border border-stone-100 shadow-sm">
                <div className="text-6xl font-bold text-emerald-500/10 absolute top-6 right-10 serif">{step.step}</div>
                <h4 className="text-2xl font-medium text-emerald-900 mb-4">{step.title}</h4>
                <p className="text-stone-500 leading-relaxed text-sm">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 bg-white border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="text-emerald-900 font-medium serif italic text-2xl mb-4">E-Consciência</div>
          <p className="text-stone-400 text-xs font-mono uppercase tracking-widest">
            Gestão Consciente de Resíduos Eletrônicos
          </p>
        </div>
      </footer>
    </div>
  );
}
