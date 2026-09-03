import { motion } from 'motion/react';
import { Shield, Scale, FileText, ArrowLeft, Recycle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function TermosUso() {
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
              <Scale className="w-6 h-6 text-emerald-600" />
            </div>
            <h1 className="text-4xl font-bold serif italic text-emerald-950">Termos de Uso</h1>
          </div>

          <p className="text-stone-500 mb-12 font-mono text-sm">Última atualização: 23 de Março de 2026</p>

          <div className="space-y-12 prose prose-stone max-w-none">
            <section>
              <h2 className="text-2xl font-bold text-emerald-900 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-emerald-50 rounded-full flex items-center justify-center text-sm">01</span>
                Aceitação dos Termos
              </h2>
              <p className="text-stone-600 leading-relaxed">
                Ao acessar e utilizar o site e os serviços da E-Consciência, você concorda em cumprir e estar vinculado aos seguintes Termos de Uso. Se você não concordar com qualquer parte destes termos, não deverá utilizar nossos serviços ou acessar nosso site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-emerald-900 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-emerald-50 rounded-full flex items-center justify-center text-sm">02</span>
                Descrição dos Serviços
              </h2>
              <p className="text-stone-600 leading-relaxed">
                A E-Consciência atua na gestão de resíduos eletroeletrônicos (REEE), oferecendo serviços de coleta, triagem, descaracterização e destinação final ambientalmente adequada, em conformidade com a Política Nacional de Resíduos Sólidos (Lei nº 12.305/2010).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-emerald-900 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-emerald-50 rounded-full flex items-center justify-center text-sm">03</span>
                Responsabilidade do Usuário
              </h2>
              <p className="text-stone-600 leading-relaxed mb-4">
                O usuário é responsável por:
              </p>
              <ul className="list-disc pl-6 text-stone-600 space-y-2">
                <li>Garantir que os equipamentos entregues para coleta não contenham materiais proibidos (conforme nossa lista de "O que não coletamos").</li>
                <li>Realizar o backup e a exclusão de dados pessoais de dispositivos de armazenamento antes da entrega.</li>
                <li>Fornecer informações precisas no formulário de agendamento de coleta.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-emerald-900 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-emerald-50 rounded-full flex items-center justify-center text-sm">04</span>
                Propriedade Intelectual
              </h2>
              <p className="text-stone-600 leading-relaxed">
                Todo o conteúdo deste site, incluindo textos, gráficos, logotipos, ícones e imagens, é de propriedade exclusiva da E-Consciência ou de seus licenciadores e está protegido pelas leis de direitos autorais brasileiras e internacionais.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-emerald-900 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-emerald-50 rounded-full flex items-center justify-center text-sm">05</span>
                Limitação de Responsabilidade
              </h2>
              <p className="text-stone-600 leading-relaxed">
                A E-Consciência não se responsabiliza por quaisquer danos indiretos, incidentais ou consequentes resultantes do uso ou da incapacidade de usar os serviços, incluindo a perda de dados contidos em dispositivos entregues para reciclagem que não foram previamente apagados pelo usuário.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-emerald-900 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-emerald-50 rounded-full flex items-center justify-center text-sm">06</span>
                Modificações dos Termos
              </h2>
              <p className="text-stone-600 leading-relaxed">
                Reservamo-nos o direito de modificar estes termos a qualquer momento. Alterações entrarão em vigor imediatamente após sua publicação no site. O uso continuado do site após tais alterações constitui sua aceitação dos novos Termos de Uso.
              </p>
            </section>
          </div>

          <div className="mt-20 pt-12 border-t border-stone-100 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-3">
              <Shield className="w-10 h-10 text-emerald-500 opacity-20" />
              <div>
                <p className="text-xs font-bold text-stone-400 uppercase tracking-widest">Documento Jurídico</p>
                <p className="text-sm text-stone-500 italic">E-Consciência & Sucata Digital</p>
              </div>
            </div>
            <button 
              onClick={() => window.print()}
              className="px-6 py-3 bg-stone-100 hover:bg-stone-200 text-stone-600 rounded-xl font-bold text-sm transition-all flex items-center gap-2"
            >
              <FileText className="w-4 h-4" /> Imprimir Termos
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
