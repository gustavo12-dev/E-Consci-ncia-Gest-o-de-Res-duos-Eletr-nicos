import { motion } from 'motion/react';
import { Monitor, Cpu, Smartphone, Battery, Printer, Server, Info, AlertTriangle, CheckCircle2, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function GuiaDescarte() {
  const categories = [
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "Monitores e Telas",
      items: ["Monitores CRT", "Telas LCD/LED", "Televisores", "Notebooks"],
      warning: "Contém mercúrio e chumbo. Não quebre a tela.",
      color: "bg-blue-50 text-blue-600 border-blue-100"
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "Informática e Placas",
      items: ["CPUs", "Placas-mãe", "Memórias", "Processadores"],
      warning: "Rico em metais preciosos. Mantenha as placas intactas.",
      color: "bg-emerald-50 text-emerald-600 border-emerald-100"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Dispositivos Móveis",
      items: ["Celulares", "Tablets", "Smartwatches", "GPS"],
      warning: "Remova o cartão SIM e reset de fábrica antes de descartar.",
      color: "bg-purple-50 text-purple-600 border-purple-100"
    },
    {
      icon: <Battery className="w-8 h-8" />,
      title: "Pilhas e Baterias",
      items: ["Baterias de Lítio", "Pilhas Alcalinas", "Baterias de Chumbo"],
      warning: "Altamente tóxico. Descarte apenas em coletores específicos (PEV).",
      color: "bg-amber-50 text-amber-600 border-amber-100"
    },
    {
      icon: <Printer className="w-8 h-8" />,
      title: "Periféricos",
      items: ["Impressoras", "Scanners", "Teclados", "Mouses"],
      warning: "Remova cartuchos de tinta ou toners separadamente.",
      color: "bg-stone-50 text-stone-600 border-stone-100"
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "Equipamentos de Rede",
      items: ["Roteadores", "Modems", "Servidores", "Switches"],
      warning: "Limpeza de dados corporativos é recomendada.",
      color: "bg-indigo-50 text-indigo-600 border-indigo-100"
    }
  ];

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Header */}
      <header className="bg-white border-b border-stone-200 py-6 px-4 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 text-emerald-900 hover:text-emerald-700 transition-colors font-medium">
            <ArrowLeft className="w-5 h-5" /> Voltar para Início
          </Link>
          <div className="text-xl font-bold serif italic text-emerald-900">E-Consciência</div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-light text-emerald-950 mb-6 serif italic">Guia de Descarte Consciente</h1>
          <p className="text-stone-600 max-w-2xl mx-auto text-lg">
            Aprenda a identificar e separar corretamente seus resíduos eletrônicos para garantir um destino sustentável.
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {categories.map((cat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-3xl p-8 border border-stone-200 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className={`w-16 h-16 ${cat.color} rounded-2xl flex items-center justify-center mb-6 border`}>
                {cat.icon}
              </div>
              <h3 className="text-2xl font-medium text-emerald-900 mb-4">{cat.title}</h3>
              <ul className="space-y-2 mb-6">
                {cat.items.map((item, j) => (
                  <li key={j} className="flex items-center gap-2 text-stone-600 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" /> {item}
                  </li>
                ))}
              </ul>
              <div className="p-4 bg-amber-50 rounded-xl border border-amber-100 flex gap-3">
                <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0" />
                <p className="text-xs text-amber-800 leading-relaxed font-medium">
                  {cat.warning}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Step by Step Preparation */}
        <section className="bg-emerald-900 rounded-[40px] p-12 text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-400/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
          <div className="relative z-10">
            <h2 className="text-3xl font-light mb-12 serif italic">Como preparar seu equipamento?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="space-y-4">
                <div className="w-10 h-10 bg-emerald-400 text-emerald-950 rounded-full flex items-center justify-center font-bold">1</div>
                <h4 className="text-xl font-medium">Limpeza de Dados</h4>
                <p className="text-emerald-100/70 text-sm leading-relaxed">
                  Realize o backup de seus arquivos e execute um "factory reset" ou formatação segura em celulares e computadores.
                </p>
              </div>
              <div className="space-y-4">
                <div className="w-10 h-10 bg-emerald-400 text-emerald-950 rounded-full flex items-center justify-center font-bold">2</div>
                <h4 className="text-xl font-medium">Remoção de Baterias</h4>
                <p className="text-emerald-100/70 text-sm leading-relaxed">
                  Se possível, remova baterias e pilhas. Elas devem ser descartadas separadamente em coletores de pilhas.
                </p>
              </div>
              <div className="space-y-4">
                <div className="w-10 h-10 bg-emerald-400 text-emerald-950 rounded-full flex items-center justify-center font-bold">3</div>
                <h4 className="text-xl font-medium">Organização</h4>
                <p className="text-emerald-100/70 text-sm leading-relaxed">
                  Enrole cabos e agrupe itens pequenos em caixas para facilitar o transporte e a triagem na cooperativa.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ/Info Section */}
        <section className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold uppercase tracking-widest mb-6">
              <Info className="w-4 h-4" /> Curiosidade
            </div>
            <h2 className="text-3xl font-light text-emerald-950 mb-6 serif italic">Por que não jogar no lixo comum?</h2>
            <div className="space-y-4 text-stone-600 leading-relaxed">
              <p>
                O lixo eletrônico contém substâncias tóxicas como mercúrio, chumbo, cádmio e berílio. Quando descartados incorretamente, esses metais pesados contaminam o solo e os lençóis freáticos, entrando na cadeia alimentar.
              </p>
              <p>
                Além disso, a reciclagem permite a recuperação de metais preciosos como ouro, prata e cobre, reduzindo a necessidade de mineração predatória.
              </p>
            </div>
          </div>
          <div className="bg-white p-8 rounded-3xl border border-stone-200 shadow-sm">
            <h4 className="text-xl font-medium text-emerald-900 mb-6">Onde encontrar um PEV?</h4>
            <p className="text-stone-500 text-sm mb-8">
              PEV (Ponto de Entrega Voluntária) são coletores instalados em escolas, supermercados e prédios públicos parceiros do projeto E-Consciência.
            </p>
            <button className="w-full py-4 bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-bold rounded-xl transition-all shadow-lg shadow-emerald-500/20">
              Ver Mapa de Pontos de Coleta
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 bg-white border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="text-emerald-900 font-medium serif italic text-2xl mb-4">E-Consciência</div>
          <p className="text-stone-400 text-xs font-mono uppercase tracking-widest">
            Educação Ambiental e Gestão de Resíduos
          </p>
        </div>
      </footer>
    </div>
  );
}
