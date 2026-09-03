import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  MapPin, Navigation, Clock, Phone, ArrowLeft, CheckCircle2, 
  ExternalLink, Building2, Calendar, ShieldCheck, Recycle, 
  Truck, Info, ChevronRight, AlertCircle, Sparkles
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function MapaPontosColeta() {
  const [copiedAddress, setCopiedAddress] = useState(false);

  const localPEV = {
    nome: "Primeira Igreja Batista em Amparo (PIB Amparo)",
    tipo: "Ponto de Entrega Voluntária (PEV) Principal",
    rua: "Rua Romeu Mezzacapa, 585",
    bairro: "Jardim Itália",
    cidade: "Amparo - SP",
    cep: "13901-130",
    referencia: "Salão principal da igreja, salas comunitárias e garagem com gramado",
    responsavel: "Pastor João Marcos Cruz Ferreira",
    telefone: "(19) 98173-5095",
    horarios: [
      { dia: "Finais de Semana (Sábados e Domingos)", detalhe: "Antes e após os cultos principais (manhã e noite)" },
      { dia: "Dias Úteis (Segunda a Sexta)", detalhe: "Durante os encontros de jovens e atividades noturnas" },
    ],
    materiaisAceitos: [
      "Computadores e Notebooks",
      "Celulares, Tablets e Smartwatches",
      "Placas de circuito e Processadores",
      "Periféricos (Teclados, Mouses, Headsets)",
      "Baterias e Pilhas (em recipiente dedicado)",
      "Impressoras, Scanners e Nobreaks",
      "Fios, Cabos e Carregadores diversos"
    ],
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Rua+Romeu+Mezzacapa,+585,+Jardim+Itália,+Amparo+-+SP,+13901-130",
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.990264027734!2d-46.77259020000001!3d-22.4566412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c9197c35fa9ef9%3A0xe5a3cda1c3fa67df!2sR.%20Romeu%20Mezzacapa%2C%20585%20-%20Jardim%20Italia%2C%20Amparo%20-%20SP%2C%2013901-130!5e0!3m2!1spt-BR!2sbr!4v1716681000000!5m2!1spt-BR!2sbr"
  };

  const copyAddressToClipboard = () => {
    const fullAddr = `${localPEV.rua}, ${localPEV.bairro}, ${localPEV.cidade} - CEP ${localPEV.cep}`;
    navigator.clipboard.writeText(fullAddr);
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 3000);
  };

  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-800">
      
      {/* Header */}
      <header className="bg-white border-b border-stone-200 py-6 px-4 sticky top-0 z-50 shadow-xs">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 text-emerald-900 hover:text-emerald-700 transition-colors font-medium text-sm md:text-base">
            <ArrowLeft className="w-5 h-5" /> Voltar para Início
          </Link>
          <div className="flex items-center gap-3">
            <span className="hidden sm:inline-block px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-mono font-bold">
              PEV CREDENCIADO • AMPARO/SP
            </span>
            <span className="text-xl font-bold serif italic text-emerald-900">E-Consciência</span>
          </div>
        </div>
      </header>

      {/* Hero Header */}
      <main className="max-w-7xl mx-auto px-4 py-12">
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-widest mb-4 border border-emerald-200">
            <MapPin className="w-4 h-4 text-emerald-600" /> Ponto de Entrega Voluntária (PEV)
          </span>
          <h1 className="text-4xl md:text-5xl font-light text-emerald-950 mb-4 serif italic">
            Localização do Ponto de Coleta
          </h1>
          <p className="text-stone-600 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Localize nosso ponto de coleta voluntária na <strong>Primeira Igreja Batista em Amparo</strong>. Traga seus eletrônicos inutilizados e garanta o descarte correto e sustentável.
          </p>
        </motion.div>

        {/* Main Grid: Interactive Map + Location Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          
          {/* Map Column (7 cols) */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-7 bg-white rounded-3xl p-6 border border-stone-200 shadow-sm flex flex-col justify-between"
          >
            <div>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 pb-4 border-b border-stone-100">
                <div>
                  <h2 className="text-xl font-bold text-emerald-950 flex items-center gap-2">
                    <Building2 className="w-5 h-5 text-emerald-600" /> {localPEV.nome}
                  </h2>
                  <p className="text-xs text-stone-500 font-mono mt-0.5">PEV Oficial do Projeto de Extensão USF</p>
                </div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200 shrink-0">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                  Ponto Ativo
                </span>
              </div>

              {/* Map Container */}
              <div className="w-full h-[360px] md:h-[420px] rounded-2xl overflow-hidden border border-stone-200 shadow-inner relative bg-stone-100">
                <iframe
                  title="Localização Primeira Igreja Batista em Amparo"
                  src={localPEV.embedUrl}
                  className="w-full h-full border-0"
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                ></iframe>
              </div>
            </div>

            {/* Map Action Buttons */}
            <div className="mt-6 pt-4 border-t border-stone-100 flex flex-col sm:flex-row gap-3">
              <a 
                href={localPEV.googleMapsUrl}
                target="_blank" 
                rel="noopener noreferrer"
                className="flex-1 py-3 px-6 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm rounded-xl transition-all shadow-md shadow-emerald-600/20 flex items-center justify-center gap-2"
              >
                <Navigation className="w-4 h-4" /> Abrir no Google Maps <ExternalLink className="w-4 h-4" />
              </a>
              <button 
                onClick={copyAddressToClipboard}
                className="py-3 px-6 bg-stone-100 hover:bg-stone-200 text-stone-700 font-semibold text-sm rounded-xl transition-all border border-stone-300 flex items-center justify-center gap-2"
              >
                {copiedAddress ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Endereço Copiado!
                  </>
                ) : (
                  <>
                    <MapPin className="w-4 h-4 text-stone-500" /> Copiar Endereço
                  </>
                )}
              </button>
            </div>
          </motion.div>

          {/* Details Column (5 cols) */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Address & Reference Card */}
            <div className="bg-white rounded-3xl p-8 border border-stone-200 shadow-sm space-y-6">
              <h3 className="text-xl font-bold text-emerald-950 pb-3 border-b border-stone-100 serif italic">
                Informações do Território
              </h3>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-emerald-50 text-emerald-700 rounded-xl flex items-center justify-center shrink-0 border border-emerald-100 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-stone-400 font-mono uppercase tracking-wider block">Endereço Completo</span>
                    <strong className="text-stone-900 block font-medium mt-0.5">{localPEV.rua}</strong>
                    <span className="text-stone-600 block text-xs">{localPEV.bairro} — {localPEV.cidade}</span>
                    <span className="text-stone-400 text-xs font-mono block mt-0.5">CEP: {localPEV.cep}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-3 border-t border-stone-100">
                  <div className="w-9 h-9 bg-stone-100 text-stone-700 rounded-xl flex items-center justify-center shrink-0 mt-0.5">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-stone-400 font-mono uppercase tracking-wider block">Ponto de Referência</span>
                    <span className="text-stone-700 block text-xs leading-relaxed mt-0.5">{localPEV.referencia}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-3 border-t border-stone-100">
                  <div className="w-9 h-9 bg-stone-100 text-stone-700 rounded-xl flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-stone-400 font-mono uppercase tracking-wider block">Pessoa de Referência / Contato</span>
                    <strong className="text-stone-900 block font-medium text-xs mt-0.5">{localPEV.responsavel}</strong>
                    <a href={`tel:${localPEV.telefone.replace(/\D/g, '')}`} className="text-emerald-700 hover:text-emerald-900 font-mono font-bold text-xs block mt-0.5">
                      {localPEV.telefone}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Operating Hours Card */}
            <div className="bg-emerald-950 text-white rounded-3xl p-8 border border-emerald-900 shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-6 h-6 text-emerald-400 shrink-0" />
                <h3 className="text-lg font-bold text-white serif italic">Horários para Entrega Voluntária</h3>
              </div>
              <div className="space-y-4 text-xs">
                {localPEV.horarios.map((h, i) => (
                  <div key={i} className="bg-emerald-900/40 p-3.5 rounded-2xl border border-emerald-800/60">
                    <strong className="text-emerald-300 block font-mono text-[11px] mb-1">{h.dia}</strong>
                    <span className="text-stone-300 block leading-relaxed">{h.detalhe}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>

        {/* Accepted Items at PEV Section */}
        <section className="bg-white rounded-3xl p-8 md:p-12 border border-stone-200 shadow-sm mb-16">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-700 font-bold block mb-2">
              Triagem e Separação
            </span>
            <h2 className="text-3xl font-light text-emerald-950 serif italic">
              O que você pode entregar neste ponto de coleta?
            </h2>
            <p className="text-stone-600 text-sm mt-2">
              Os coletores instalados no salão da Primeira Igreja Batista em Amparo aceitam os seguintes itens para destinação técnica segura:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {localPEV.materiaisAceitos.map((item, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-stone-50 border border-stone-200/80 flex items-center gap-3">
                <div className="w-7 h-7 bg-emerald-100 text-emerald-700 rounded-lg flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <span className="text-stone-800 text-xs font-medium">{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 p-4 bg-amber-50 rounded-2xl border border-amber-200/80 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <p className="text-xs text-amber-900 leading-relaxed">
              <strong>Atenção:</strong> Pilhas e baterias possuem um recipiente dedicado com trava de segurança para evitar vazamentos químicos de lítio e chumbo no ambiente. Por favor, deposite-as na caixa apropriada indicada no PEV.
            </p>
          </div>
        </section>

        {/* Large Volume Pickup Callout */}
        <section className="bg-gradient-to-r from-emerald-900 to-stone-900 rounded-[36px] p-8 md:p-12 text-white shadow-xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-4">
              <span className="px-3 py-1 rounded-full bg-emerald-400/20 text-emerald-300 text-xs font-mono font-bold uppercase tracking-widest border border-emerald-400/30 inline-block">
                Possui Grande Volume de Resíduos?
              </span>
              <h3 className="text-2xl md:text-3xl font-light serif italic text-white">
                Coleta no local para empresas e grandes volumes
              </h3>
              <p className="text-stone-300 text-sm md:text-base leading-relaxed max-w-2xl">
                Se você tem muitos equipamentos, lotes de computadores de empresa ou sucatas pesadas e prefere agendar uma retirada direta, nossa equipe realiza a coleta agendada na sua região.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end">
              <Link 
                to="/agendar" 
                className="py-4 px-6 bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-bold text-sm rounded-xl transition-all shadow-lg shadow-emerald-500/20 text-center flex items-center justify-center gap-2"
              >
                <Truck className="w-4 h-4" /> Agendar Coleta Domiciliar
              </Link>
              <Link 
                to="/guia" 
                className="py-4 px-6 bg-white/10 hover:bg-white/20 text-white font-semibold text-sm rounded-xl border border-white/20 transition-all text-center flex items-center justify-center gap-2"
              >
                <Recycle className="w-4 h-4" /> Ver Guia de Descarte
              </Link>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="py-12 bg-white border-t border-stone-200 mt-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="text-emerald-900 font-medium serif italic text-2xl mb-2">E-Consciência</div>
          <p className="text-stone-400 text-xs font-mono uppercase tracking-widest">
            Primeira Igreja Batista em Amparo • USF NEXT 2026.1
          </p>
        </div>
      </footer>

    </div>
  );
}
