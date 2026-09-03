import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Recycle, Leaf, MapPin, Cpu, Smartphone, CheckCircle2, ArrowLeft, 
  Users, Target, Globe, Award, BookOpen, Calendar, ShieldAlert,
  Coins, Database, Layers, ExternalLink, HelpCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function SobreProjeto() {
  const [activeTab, setActiveTab] = useState<'geral' | 'equipe' | 'cronograma' | 'ecotwin'>('geral');
  const [selectedStep, setSelectedStep] = useState<number>(0);

  const teamMembers = [
    { name: "Renan Passos Torres", ra: "202511015", role: "Líder da Equipe e TI" },
    { name: "Gustavo Rodrigo da Silva Melo", ra: "202535677", role: "Desenvolvedor e Execução" },
    { name: "Nathalia Lima Rodrigues", ra: "202528731", role: "Comunicação e Logística" },
    { name: "João Victor Ferreira Araújo", ra: "202511976", role: "Relações com a Comunidade" },
    { name: "Ricardo Henrique", ra: "202517940", role: "Qualidade e Pesagem" },
    { name: "Cesar Augusto Squizzato", ra: "202513554", role: "Infraestrutura de TI" },
    { name: "João Pedro Lange Duarte", ra: "202518853", role: "Voluntário e Divulgação" },
    { name: "Lucas Marinho Crivellente", ra: "202508522", role: "Ação de Educação" },
    { name: "Guilherme Augusto Dorigan", ra: "202525812", role: "Triagem Técnica" },
    { name: "Matheus Barboza Oliveira", ra: "202121457", role: "Logística Reversa" }
  ];

  const cronogramaSteps = [
    {
      etapa: 1,
      titulo: "Alinhamento e Validação",
      acao: "Reunião presencial com a liderança da Primeira Igreja Batista em Amparo para apresentar o plano final de intervenção e validar o local de instalação do PEV.",
      físico: "Escritório da igreja PIB Amparo",
      materiais: "Documentação de intervenção, folders e tablet para anotação.",
      humanos: "Renan, Lucas e Guilherme.",
      financeiro: "Nenhum recurso financeiro necessário.",
      tempo: "1 dia (1 hora de duração)"
    },
    {
      etapa: 2,
      titulo: "Estruturação Logística e Visual",
      acao: "Instalação física de coletores/caixas apropriadas em pontos estratégicos da igreja e fixação de banners informativos com QR Codes para acesso ao site do projeto.",
      físico: "Área externa ou salão da igreja",
      materiais: "Caixas coletoras ecológicas, sinalização visual de e-lixo e banners técnicos.",
      humanos: "Renan, Lucas, Guilherme, Nathalia, João, João Lange e voluntários locais.",
      financeiro: "Custo de impressão física de banners e customização do coletor.",
      tempo: "2 dias (1 hora de duração)"
    },
    {
      etapa: 3,
      titulo: "Educação Coletiva e Mobilização",
      acao: "Realização de palestras educativas com recursos audiovisuais focadas na destreza do descarte correto de e-lixo e impactos de contaminação.",
      físico: "Salão de cultos ou salas de aula da igreja",
      materiais: "Projetor digital, computador, panfletos de conscientização.",
      humanos: "Integrantes do projeto acadêmico e voluntários da igreja.",
      financeiro: "Nenhum custo (infraestrutura cedida pela PIB).",
      tempo: "4 encontros divididos de 1 hora"
    },
    {
      etapa: 4,
      titulo: "Monitoramento e Gestão de Dados",
      acao: "Pesagem e catalogação contínua dos materiais recebidos (tipo, peso e contagem de resíduos) para inserção manual no sistema virtual.",
      físico: "Ponto de Coleta fixado na igreja",
      materiais: "Balança digital calibrada e notebook com acesso ao sistema.",
      humanos: "Renan, Gustavo, Ricardo, Matheus e Cesar com área de TI local.",
      financeiro: "Sem custos adicionais.",
      tempo: "Execução contínua durante toda a extensão"
    },
    {
      etapa: 5,
      titulo: "Efetivação de Logística Reversa",
      acao: "Entrada em contato e agendamento para carregamento e envio dos resíduos de REEE acumulados a cooperativas e indústrias homologadas.",
      físico: "Ponto de coleta física e transporte logístico",
      materiais: "Embalagens de transporte seguro contra impacto, veículos de frete.",
      humanos: "Renan, Lucas, Guilherme e membros dedicados da PIB.",
      financeiro: "Custo de deslocamento (quando necessário).",
      tempo: "Realizado uma vez por semana ao longo da ação"
    }
  ];

  return (
    <div className="min-h-screen bg-stone-900 text-stone-100 selection:bg-emerald-500 selection:text-stone-950 font-sans">
      
      {/* Header */}
      <header className="bg-stone-950 border-b border-white/10 py-6 px-4 sticky top-0 z-50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors font-medium">
            <ArrowLeft className="w-5 h-5" /> Voltar para Início
          </Link>
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2.5 py-1 rounded">
              USF NEXT 2026.1
            </span>
            <span className="text-xl font-bold serif italic text-white hidden sm:inline">E-Consciência</span>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 py-16">
        
        {/* Academic Page Hero */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-4 border border-emerald-500/20 font-mono">
            Universidade São Francisco • Extensão Universitária
          </span>
          <h1 className="text-4xl md:text-6xl font-light text-white mb-6 serif italic">Memorial Acadêmico do Projeto</h1>
          <p className="text-stone-400 max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
            Consulte a documentação acadêmica oficial de nossa <strong>Prática Formativa Extensionista (NEXT/PFE 2026.1)</strong> da USF. Descubra a metodologia estruturada para conter o lixo eletrônico na Primeira Igreja Batista em Amparo/SP.
          </p>
        </motion.div>

        {/* Tab Selection Navigation */}
        <div className="flex overflow-x-auto gap-2 pb-3 mb-12 border-b border-white/15 scrollbar-thin">
          {[
            { id: 'geral', label: 'Ementa do Projeto', icon: <BookOpen className="w-4 h-4" /> },
            { id: 'equipe', label: 'Equipe & USF (10 Integrantes)', icon: <Users className="w-4 h-4" /> },
            { id: 'cronograma', label: 'Metodologia & Cronograma', icon: <Calendar className="w-4 h-4" /> },
            { id: 'ecotwin', label: 'ECO-TWIN 14001 (Gêmeos Digitais)', icon: <Cpu className="w-4 h-4" /> }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-bold font-mono tracking-wider transition-all whitespace-nowrap border shrink-0 ${activeTab === tab.id ? 'bg-emerald-500 text-stone-950 border-emerald-400 shadow-lg shadow-emerald-500/20' : 'bg-stone-950/50 text-stone-400 border-white/5 hover:border-white/10 hover:text-white'}`}
            >
              {tab.icon} {tab.label}
            </button>
          ))}
        </div>

        {/* Content Render Area */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="min-h-[400px]"
          >
            {activeTab === 'geral' && (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                
                {/* Left side parameters */}
                <div className="lg:col-span-2 space-y-8">
                  <div className="bg-stone-950 p-8 rounded-[32px] border border-white/5">
                    <h3 className="text-2xl font-bold text-white mb-6 serif italic">Objetivo Geral do Diagnóstico</h3>
                    <p className="text-stone-300 leading-relaxed mb-6 text-sm md:text-base">
                      Criar um sistema de descarte de lixo eletrônico por meio de um trabalho integrado de conscientização comunitária na Primeira Igreja Batista em Amparo (bairro Jardim Itália). Utilizando metodologias focadas na ODS 12 (Consumo e Produção Responsáveis) e ODS 11 (Cidades Sustentáveis), a intervenção visa mitigar o descarte incorreto que compromete as águas e solos da região de Amparo/SP.
                    </p>
                    <div className="p-5 bg-stone-900 rounded-2xl border border-white/5 font-serif italic text-stone-400 text-sm">
                      "Acreditamos que conscientizar a população e incentivar a reciclagem do lixo eletrônico contribui diretamente para a preservação do meio ambiente. Para alcançar esse objetivo, criamos um ecossistema de reciclagem acessível direto na comunidade."
                    </div>
                  </div>

                  <div className="bg-stone-950 p-8 rounded-[32px] border border-white/5">
                    <h3 className="text-xl font-bold text-white mb-6">Objetivos Específicos do Planejamento</h3>
                    <div className="space-y-4">
                      {[
                        { num: "01", title: "Desenvolver Sistema de Monitoramento", desc: "Registrar e catalogar informações como tipo de material, quantidade doada e pesagem estimada para mensuração pública." },
                        { num: "02", title: "Promover Educação Ambiental", desc: "Palestras, panfletagens e folders para fomento da responsabilidade compartilhada e preservação de lençóis freáticos." },
                        { num: "03", title: "Garantir a Logística Reversa", desc: "Encaminhar materiais a indústrias e cooperativas credenciadas de reciclagem técnica rápida de metais nobres." },
                        { num: "04", title: "Implantar Pontos de Coleta (PEVs)", desc: "Fixar recipientes próprios na Primeira Igreja Batista de Amparo para coleta contínua e segura." }
                      ].map((item, idx) => (
                        <div key={idx} className="flex gap-4 items-start pb-4 border-b border-white/5 last:border-b-0 last:pb-0">
                          <span className="text-emerald-400 font-mono font-bold text-sm bg-emerald-500/10 w-9 h-9 flex items-center justify-center rounded-lg border border-emerald-500/20 shrink-0">
                            {item.num}
                          </span>
                          <div>
                            <h4 className="text-white font-bold text-sm">{item.title}</h4>
                            <p className="text-xs text-stone-400 leading-relaxed mt-1">{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right side parameters sheet */}
                <div className="space-y-6">
                  <div className="bg-stone-950 p-6 rounded-[24px] border border-white/5">
                    <h4 className="text-xs uppercase tracking-widest font-mono text-stone-500 mb-4 font-bold border-b border-white/5 pb-2">Diagnóstico Base</h4>
                    <ul className="space-y-3.5 text-xs">
                      <li>
                        <span className="text-stone-500 block uppercase font-mono text-[10px]">Território Concedente</span>
                        <span className="text-stone-200 font-bold block mt-0.5">Primeira Igreja Batista em Amparo</span>
                      </li>
                      <li>
                        <span className="text-stone-500 block uppercase font-mono text-[10px]">Localidade Realizada</span>
                        <span className="text-stone-300 block mt-0.5">Rua Romeu Mezzacapa, 585 — Jardim Itália, Amparo/SP</span>
                      </li>
                      <li>
                        <span className="text-stone-500 block uppercase font-mono text-[10px]">Supervisor e Pastor Líder</span>
                        <span className="text-stone-300 block mt-0.5">Pastor João Marcos Cruz Ferreira</span>
                      </li>
                      <li>
                        <span className="text-stone-500 block uppercase font-mono text-[10px]">Professora Responsável</span>
                        <span className="text-stone-300 block mt-0.5">Profª. Mª. Candida Maria Costa Baptista</span>
                      </li>
                      <li>
                        <span className="text-stone-500 block uppercase font-mono text-[10px]">Curso Desenvolvedor</span>
                        <span className="text-stone-300 block mt-0.5">Engenharia de Computação e Engenharia Elétrica</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-emerald-950/30 p-6 rounded-[24px] border border-emerald-500/10">
                    <h4 className="text-sm font-bold text-emerald-400 mb-3 flex items-center gap-1">
                      <Target className="w-4 h-4" /> Objetivos ONU ODS
                    </h4>
                    <p className="text-xs text-emerald-200/80 leading-relaxed mb-4">
                      O projeto atua como o motor tecnológico regional para atingir metas de:
                    </p>
                    <div className="space-y-2">
                      <div className="p-3 bg-stone-950/40 rounded-xl border border-emerald-500/10 text-[11px] text-stone-300 leading-normal">
                        <strong>ODS 11: Cidades e Comunidades Sustentáveis.</strong> Destinação técnica de resíduos perigosos e contenção de aterros despreparados.
                      </div>
                      <div className="p-3 bg-stone-950/40 rounded-xl border border-emerald-500/10 text-[11px] text-stone-300 leading-normal">
                        <strong>ODS 12: Consumo e Produção Responsáveis.</strong> Logística reversa para a manufatura reversa e mineração urbana.
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            )}

            {activeTab === 'equipe' && (
              <div>
                <div className="bg-stone-950 p-8 rounded-[40px] border border-white/5 mb-8">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-white/10 pb-6 mb-8">
                    <div>
                      <h3 className="text-2xl font-bold text-white serif italic">Lista Oficial de Discentes</h3>
                      <p className="text-xs text-stone-500 font-mono mt-1">Matrículas ativas homologadas no sistema central NEXT da USF</p>
                    </div>
                    <div className="text-right">
                      <span className="text-xs block font-mono text-stone-400">Professor orientador:</span>
                      <span className="text-sm text-emerald-400 font-bold block">Profª. Candida Maria Costa Baptista</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {teamMembers.map((member, i) => (
                      <div key={i} className="p-5 bg-stone-900 rounded-2xl border border-white/5 hover:border-emerald-500/20 transition-all flex items-start gap-4">
                        <div className="w-10 h-10 bg-emerald-500/10 text-emerald-400 rounded-xl flex items-center justify-center font-mono font-bold shrink-0 text-sm">
                          {(i + 1).toString().padStart(2, '0')}
                        </div>
                        <div>
                          <h4 className="text-white font-bold leading-tight font-sans text-sm">{member.name}</h4>
                          <span className="text-[10px] text-stone-500 font-mono tracking-wider block mt-1 uppercase">{member.role}</span>
                          <span className="text-xs font-mono text-emerald-400 block mt-0.5">RA: {member.ra}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-stone-950 p-6 rounded-3xl border border-white/5 flex flex-col sm:flex-row gap-6 items-center text-center sm:text-left justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-stone-900 border border-white/5 flex items-center justify-center shrink-0">
                      <ShieldAlert className="w-6 h-6 text-emerald-400" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">Fale com os coordenadores Acadêmicos</h4>
                      <p className="text-xs text-stone-500 mt-0.5">Dúvidas sobre o processo e envio de certificados da extensão</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <a href="mailto:rpassostorres@gmail.com" className="px-5 py-2.5 rounded-xl bg-stone-900 text-xs text-stone-300 font-mono font-bold hover:bg-stone-850 hover:text-emerald-400 border border-white/5 transition-all">
                      rpassostorres@gmail.com
                    </a>
                    <a href="mailto:rodrigogustavo.outlook.128@gmail.com" className="px-5 py-2.5 rounded-xl bg-stone-900 text-xs text-stone-300 font-mono font-bold hover:bg-stone-850 hover:text-emerald-400 border border-white/5 transition-all">
                      E-mail Leader
                    </a>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'cronograma' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                
                {/* Visual side steps navigator */}
                <div className="lg:col-span-5 space-y-3">
                  <h3 className="text-lg font-bold text-white mb-6 border-b border-white/5 pb-2">Etapas do Programa</h3>
                  {cronogramaSteps.map((step, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedStep(idx)}
                      className={`w-full p-4 rounded-2xl text-left border transition-all flex gap-4 items-center ${selectedStep === idx ? 'bg-gradient-to-r from-emerald-950/50 to-stone-900 border-emerald-500 shadow-md' : 'bg-stone-950/40 border-white/5 hover:border-white/10 hover:bg-stone-900/30'}`}
                    >
                      <span className={`w-8 h-8 rounded-full font-mono font-bold text-xs flex items-center justify-center border shrink-0 ${selectedStep === idx ? 'bg-emerald-500 text-stone-950 border-emerald-400' : 'bg-stone-900 text-stone-400 border-white/5'}`}>
                        {step.etapa}
                      </span>
                      <div className="truncate">
                        <h4 className={`text-xs font-mono font-semibold ${selectedStep === idx ? 'text-emerald-400' : 'text-stone-300'}`}>Etapa {step.etapa}</h4>
                        <p className="text-xs text-stone-400 truncate mt-0.5">{step.titulo}</p>
                      </div>
                    </button>
                  ))}
                </div>

                {/* Content Details Display Card */}
                <div className="lg:col-span-7 bg-stone-950 rounded-[32px] p-8 border border-white/5 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-center mb-6 pb-4 border-b border-white/10">
                      <div>
                        <span className="text-xs uppercase font-mono text-emerald-400 font-bold block">Prática Extensionista — 5W2H</span>
                        <h3 className="text-2xl font-bold text-white serif italic mt-1">
                          Etapa {cronogramaSteps[selectedStep].etapa}: {cronogramaSteps[selectedStep].titulo}
                        </h3>
                      </div>
                      <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-mono text-xs font-bold leading-none shrink-0">
                        PFE 2026.1
                      </span>
                    </div>

                    <p className="text-stone-300 text-sm leading-relaxed mb-8">
                      {cronogramaSteps[selectedStep].acao}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs mb-8">
                      <div className="p-4 bg-stone-900 rounded-xl border border-white/5">
                        <span className="text-stone-500 uppercase tracking-wider font-mono text-[10px] block mb-1">Onde será feito (Where)</span>
                        <span className="text-stone-200 font-medium">{cronogramaSteps[selectedStep].físico}</span>
                      </div>
                      <div className="p-4 bg-stone-900 rounded-xl border border-white/5">
                        <span className="text-stone-500 uppercase tracking-wider font-mono text-[10px] block mb-1">Recursos Físicos (What)</span>
                        <span className="text-stone-200 font-medium">{cronogramaSteps[selectedStep].materiais}</span>
                      </div>
                      <div className="p-4 bg-stone-900 rounded-xl border border-white/5">
                        <span className="text-stone-500 uppercase tracking-wider font-mono text-[10px] block mb-1">Responsáveis (Who)</span>
                        <span className="text-stone-200 font-medium">{cronogramaSteps[selectedStep].humanos}</span>
                      </div>
                      <div className="p-4 bg-stone-900 rounded-xl border border-white/5">
                        <span className="text-stone-500 uppercase tracking-wider font-mono text-[10px] block mb-1">Impacto Financeiro (How Much)</span>
                        <span className="text-stone-200 font-medium">{cronogramaSteps[selectedStep].financeiro}</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-emerald-900/15 border border-emerald-500/10 rounded-2xl flex justify-between items-center text-xs">
                    <span className="text-stone-400 font-mono uppercase tracking-wider text-[10px]">Tempo Estimado (When)</span>
                    <span className="font-bold text-emerald-400">{cronogramaSteps[selectedStep].tempo}</span>
                  </div>
                </div>

              </div>
            )}

            {activeTab === 'ecotwin' && (
              <div className="space-y-8">
                
                {/* Concept Banner */}
                <div className="p-8 rounded-[40px] bg-gradient-to-r from-[#0d344b] to-stone-950 border border-teal-500/25 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
                  
                  <div className="max-w-2xl relative z-10">
                    <span className="px-3 py-1 font-mono uppercase tracking-widest text-[10px] font-bold text-teal-400 bg-teal-400/10 border border-teal-400/20 rounded-full mb-4 inline-block">
                      ECO-TWIN 14001: Gestão Preditiva circular e Blockchain
                    </span>
                    <h3 className="text-3xl font-light text-white mb-4 serif italic leading-tight">Gêmeos Digitais, Tokenização e Governança ODS 12</h3>
                    <p className="text-stone-300 text-sm leading-relaxed mb-6">
                      Mais do que reciclar o e-lixo, nossa proposta técnica incorpora a diretriz estratégica de Gêmeos Digitais. Cada componente nobre doado (unidades de processamento, memórias e placas de hardware funcional) recebe um identificador lógico virtual e atua como um <i>Digital Twin</i> para mitigar as pegadas ambientais através de reuso e manufatura reversa ativa.
                    </p>
                    <div className="flex gap-4 flex-wrap">
                      <span className="px-3 py-1.5 bg-stone-950/80 rounded-lg text-xs font-mono border border-white/5 text-stone-400">
                        ISO 14001:2015 Compliant
                      </span>
                      <span className="px-3 py-1.5 bg-stone-950/80 rounded-lg text-xs font-mono border border-white/5 text-stone-400">
                        MTR & CDF Digital
                      </span>
                    </div>
                  </div>
                </div>

                {/* Architecture Pillars */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                    {
                      icon: <Database className="w-8 h-8 text-teal-400" />,
                      title: "Monitoramento de Degradação",
                      desc: "Algoritmos inteligentes que avaliam a saúde e potencial de obsolescência dos componentes (ciclos de bateria, fadiga térmica, horas de trabalho)."
                    },
                    {
                      icon: <Layers className="w-8 h-8 text-[#dd9a26]" />,
                      title: "Tokenização de Ativos Nobres",
                      desc: "Diferente da reciclagem agressiva comum, componentes úteis são mapeados e certificados digitalmente como tokens ecológicos de economia circular."
                    },
                    {
                      icon: <Coins className="w-8 h-8 text-emerald-400" />,
                      title: "Simbiose Industrial",
                      desc: "Aproxima o descarte voluntário de pcb à reinserção técnica na indústria metalúrgica para a mineração urbana, reduzindo extração virgem."
                    }
                  ].map((pilar, i) => (
                    <div key={i} className="p-6 bg-stone-950 rounded-3xl border border-white/5 hover:border-teal-500/20 transition-all">
                      <div className="w-12 h-12 rounded-2xl bg-stone-900 flex items-center justify-center mb-6">
                        {pilar.icon}
                      </div>
                      <h4 className="text-lg font-bold text-white mb-3">{pilar.title}</h4>
                      <p className="text-xs text-stone-400 leading-relaxed">
                        {pilar.desc}
                      </p>
                    </div>
                  ))}
                </div>

                {/* ISO conformities section */}
                <div className="bg-stone-950 rounded-3xl p-8 border border-white/5">
                  <h4 className="text-base font-bold text-white mb-6 font-mono tracking-wider">Mapeamento nos Requisitos ISO 14001:2015</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs leading-relaxed">
                    <div className="p-5 bg-stone-900 rounded-xl border border-white/5">
                      <strong className="text-teal-400 block mb-2 font-mono">Cláusula 6.1.2</strong>
                      <strong>Aspectos Ambientais:</strong> Inclusão da perspectiva completa de ciclo de vida do REEE, desde a aquisição, guarda, triagem até a manufatura reversa final.
                    </div>
                    <div className="p-5 bg-stone-900 rounded-xl border border-white/5">
                      <strong className="text-teal-400 block mb-2 font-mono">Cláusula 8.1</strong>
                      <strong>Controle Operacional:</strong> Digitalização total do fluxo de resíduos e automatização, eliminando falhas humanas graves e vazamentos tróficos.
                    </div>
                    <div className="p-5 bg-stone-900 rounded-xl border border-white/5">
                      <strong className="text-teal-400 block mb-2 font-mono">Cláusula 9.1</strong>
                      <strong>Avaliação de Desempenho:</strong> Dashboards inteligentes alimentados ao vivo com KPIs em tempo real de metais pesados neutralizados do solo.
                    </div>
                  </div>
                </div>

              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Informational Backlog card */}
        <section className="mt-20 p-8 bg-stone-950 rounded-[40px] border border-white/5 text-center">
          <h3 className="text-xl font-bold text-white mb-3 serif italic">Fundamento e Integridade dos Dados</h3>
          <p className="text-xs text-stone-500 max-w-2xl mx-auto leading-relaxed uppercase tracking-wider font-mono">
            Este projeto e seus dados de simulação acadêmica baseiam-se na visita técnica realizada em Amparo/SP e contato com o Pastor João Marcos com os alunos de Computação da USF no dia 23 de março de 2026.
          </p>
        </section>

      </main>

      {/* Footer */}
      <footer className="py-12 bg-stone-950 border-t border-white/10 text-center text-xs text-stone-500 font-mono tracking-widest uppercase">
        E-Consciência • USF NEXT 2026.1 • Amparo/SP
      </footer>

    </div>
  );
}
