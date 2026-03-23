import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Calendar, Clock, Package, ArrowLeft, CheckCircle2, Send } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AgendarColeta() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-stone-50 flex items-center justify-center p-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full bg-white rounded-[40px] p-12 text-center shadow-xl border border-stone-100"
        >
          <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mx-auto mb-8">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <h2 className="text-3xl font-bold text-emerald-950 mb-4 serif italic">Solicitação Recebida!</h2>
          <p className="text-stone-500 mb-10 leading-relaxed">
            Nossa equipe entrará em contato em até 24 horas para confirmar o horário da coleta e os detalhes logísticos.
          </p>
          <Link to="/" className="inline-block w-full py-4 bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-bold rounded-2xl transition-all shadow-lg shadow-emerald-500/20">
            Voltar para o Início
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Header */}
      <header className="bg-white border-b border-stone-200 py-6 px-4 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 text-emerald-900 hover:text-emerald-700 transition-colors font-medium">
            <ArrowLeft className="w-5 h-5" /> Voltar
          </Link>
          <div className="text-xl font-bold serif italic text-emerald-900">E-Consciência</div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h1 className="text-4xl md:text-5xl font-light text-emerald-950 mb-8 serif italic">Agende sua Coleta Gratuita</h1>
            <p className="text-stone-600 mb-12 text-lg leading-relaxed">
              Preencha o formulário abaixo para solicitar a retirada de resíduos eletrônicos em sua residência, empresa ou escola.
            </p>

            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600 shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-medium text-emerald-900 mb-1">Telefone / WhatsApp</h4>
                  <p className="text-stone-500 text-sm">(11) 98765-4321</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600 shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-medium text-emerald-900 mb-1">E-mail</h4>
                  <p className="text-stone-500 text-sm">contato@e-consciencia.com.br</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600 shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-medium text-emerald-900 mb-1">Área de Atendimento</h4>
                  <p className="text-stone-500 text-sm">São Paulo Capital e Grande ABC</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-10 rounded-[40px] border border-stone-200 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-stone-400 ml-1">Nome Completo</label>
                  <input 
                    required
                    type="text" 
                    placeholder="Seu nome"
                    className="w-full px-5 py-4 bg-stone-50 border border-stone-200 rounded-2xl focus:outline-none focus:border-emerald-500 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-stone-400 ml-1">WhatsApp</label>
                  <input 
                    required
                    type="tel" 
                    placeholder="(00) 00000-0000"
                    className="w-full px-5 py-4 bg-stone-50 border border-stone-200 rounded-2xl focus:outline-none focus:border-emerald-500 transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-stone-400 ml-1">Endereço de Coleta</label>
                <div className="relative">
                  <MapPin className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-300" />
                  <input 
                    required
                    type="text" 
                    placeholder="Rua, número, bairro"
                    className="w-full pl-14 pr-5 py-4 bg-stone-50 border border-stone-200 rounded-2xl focus:outline-none focus:border-emerald-500 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-stone-400 ml-1">Data Preferencial</label>
                  <div className="relative">
                    <Calendar className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-300" />
                    <input 
                      required
                      type="date" 
                      className="w-full pl-14 pr-5 py-4 bg-stone-50 border border-stone-200 rounded-2xl focus:outline-none focus:border-emerald-500 transition-colors"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-stone-400 ml-1">Período</label>
                  <div className="relative">
                    <Clock className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-300" />
                    <select className="w-full pl-14 pr-5 py-4 bg-stone-50 border border-stone-200 rounded-2xl focus:outline-none focus:border-emerald-500 transition-colors appearance-none">
                      <option>Manhã (08h - 12h)</option>
                      <option>Tarde (13h - 18h)</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-stone-400 ml-1">O que será coletado?</label>
                <div className="relative">
                  <Package className="absolute left-5 top-5 w-5 h-5 text-stone-300" />
                  <textarea 
                    required
                    rows={4}
                    placeholder="Ex: 2 monitores, 1 CPU, cabos diversos..."
                    className="w-full pl-14 pr-5 py-4 bg-stone-50 border border-stone-200 rounded-2xl focus:outline-none focus:border-emerald-500 transition-colors resize-none"
                  ></textarea>
                </div>
              </div>

              <button 
                type="submit"
                className="w-full py-5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-2xl transition-all shadow-lg shadow-emerald-600/20 flex items-center justify-center gap-3"
              >
                <Send className="w-5 h-5" /> Enviar Solicitação
              </button>
              <p className="text-[10px] text-center text-stone-400 uppercase tracking-widest">
                Ao enviar, você concorda com nossa política de privacidade.
              </p>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
