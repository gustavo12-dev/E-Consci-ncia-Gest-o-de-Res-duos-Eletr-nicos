import { motion } from 'motion/react';
import { ShieldCheck, Lock, Eye, ArrowLeft, Recycle, FileText, Globe, UserCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PoliticaPrivacidade() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-900">
      {/* Header */}
      <header className="bg-white border-b border-stone-100 py-6 px-4 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center">
              <Recycle className="w-6 h-6 text-emerald-950" />
            </div>
            <span className="text-2xl font-bold serif italic">E-Consciência</span>
          </Link>
          <Link to="/" className="text-stone-500 hover:text-emerald-600 flex items-center gap-2 transition-colors text-sm font-medium">
            <ArrowLeft className="w-4 h-4" /> Voltar ao Início
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-[40px] p-8 md:p-16 shadow-xl shadow-stone-200/50 border border-stone-100"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center">
              <ShieldCheck className="w-6 h-6 text-emerald-600" />
            </div>
            <h1 className="text-4xl font-bold serif italic text-emerald-950">Política de Privacidade</h1>
          </div>

          <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-6 mb-12 flex items-start gap-4">
            <Globe className="w-6 h-6 text-emerald-600 mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-emerald-900 font-bold mb-1">Conformidade LGPD</h3>
              <p className="text-emerald-800/80 text-sm leading-relaxed">
                Esta política foi elaborada em total conformidade com a Lei Geral de Proteção de Dados Pessoais (Lei nº 13.709/2018 - LGPD), garantindo a transparência e a segurança no tratamento dos seus dados.
              </p>
            </div>
          </div>

          <p className="text-stone-500 mb-12 font-mono text-sm">Última atualização: 23 de Março de 2026</p>

          <div className="space-y-12 prose prose-stone max-w-none">
            <section>
              <h2 className="text-2xl font-bold text-emerald-900 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-emerald-50 rounded-full flex items-center justify-center text-sm">01</span>
                Coleta de Dados
              </h2>
              <p className="text-stone-600 leading-relaxed mb-4">
                Coletamos informações que você nos fornece diretamente ao:
              </p>
              <ul className="list-disc pl-6 text-stone-600 space-y-2">
                <li>Preencher o formulário de agendamento de coleta (nome, endereço, telefone, email).</li>
                <li>Assinar nossa newsletter (email).</li>
                <li>Entrar em contato via canais de suporte.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-emerald-900 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-emerald-50 rounded-full flex items-center justify-center text-sm">02</span>
                Finalidade do Tratamento
              </h2>
              <p className="text-stone-600 leading-relaxed mb-4">
                Seus dados são utilizados exclusivamente para:
              </p>
              <ul className="list-disc pl-6 text-stone-600 space-y-2">
                <li>Agendar e realizar a coleta de resíduos eletrônicos.</li>
                <li>Emitir o Certificado de Descarte Ambientalmente Adequado.</li>
                <li>Enviar comunicações sobre o status da sua solicitação.</li>
                <li>Enviar novidades e conteúdos educativos (apenas com seu consentimento).</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-emerald-900 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-emerald-50 rounded-full flex items-center justify-center text-sm">03</span>
                Segurança de Dados em Dispositivos
              </h2>
              <div className="bg-stone-50 border border-stone-100 p-6 rounded-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <Lock className="w-5 h-5 text-emerald-600" />
                  <h3 className="font-bold text-emerald-950">Compromisso de Descaracterização</h3>
                </div>
                <p className="text-stone-600 text-sm leading-relaxed">
                  A E-Consciência garante que todos os dispositivos de armazenamento recebidos passam por um processo rigoroso de destruição física ou descaracterização lógica, impossibilitando a recuperação de dados sensíveis, em conformidade com as melhores práticas de segurança da informação.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-emerald-900 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-emerald-50 rounded-full flex items-center justify-center text-sm">04</span>
                Seus Direitos (Art. 18 da LGPD)
              </h2>
              <p className="text-stone-600 leading-relaxed mb-4">
                Como titular dos dados, você tem o direito de:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Confirmação da existência de tratamento",
                  "Acesso aos dados",
                  "Correção de dados incompletos ou inexatos",
                  "Anonimização ou bloqueio de dados",
                  "Portabilidade dos dados",
                  "Eliminação dos dados pessoais",
                  "Informação sobre compartilhamento",
                  "Revogação do consentimento"
                ].map((direito, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm text-stone-600">
                    <UserCheck className="w-4 h-4 text-emerald-500" />
                    {direito}
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-emerald-900 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-emerald-50 rounded-full flex items-center justify-center text-sm">05</span>
                Compartilhamento com Terceiros
              </h2>
              <p className="text-stone-600 leading-relaxed">
                Não vendemos ou alugamos seus dados pessoais. O compartilhamento ocorre apenas com parceiros logísticos essenciais para a realização da coleta ou quando exigido por lei por órgãos ambientais fiscalizadores.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-emerald-900 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-emerald-50 rounded-full flex items-center justify-center text-sm">06</span>
                Contato do Encarregado (DPO)
              </h2>
              <p className="text-stone-600 leading-relaxed">
                Para exercer seus direitos ou tirar dúvidas sobre como tratamos seus dados, entre em contato com nosso Encarregado de Proteção de Dados pelo email: <span className="font-bold text-emerald-600">privacidade@e-consciencia.com.br</span>
              </p>
            </section>
          </div>

          <div className="mt-20 pt-12 border-t border-stone-100 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-3">
              <Eye className="w-10 h-10 text-emerald-500 opacity-20" />
              <div>
                <p className="text-xs font-bold text-stone-400 uppercase tracking-widest">Privacidade & Transparência</p>
                <p className="text-sm text-stone-500 italic">E-Consciência & Sucata Digital</p>
              </div>
            </div>
            <button 
              onClick={() => window.print()}
              className="px-6 py-3 bg-stone-100 hover:bg-stone-200 text-stone-600 rounded-xl font-bold text-sm transition-all flex items-center gap-2"
            >
              <FileText className="w-4 h-4" /> Baixar PDF
            </button>
          </div>
        </motion.div>
      </main>

      <footer className="py-12 bg-white border-t border-stone-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-stone-400 text-xs font-mono uppercase tracking-widest">
            © 2026 E-Consciência - Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
