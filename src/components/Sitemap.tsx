import { Link } from 'react-router-dom';

export default function Sitemap() {
  const routes = [
    { path: '/lp-video', name: 'Landing Page Principal' },
    { path: '/guia', name: 'Guia de Descarte' },
    { path: '/impacto', name: 'Termômetro de Impacto' },
    { path: '/sobre', name: 'Sobre o Projeto' },
    { path: '/agendar', name: 'Agendar Coleta' },
  ];

  return (
    <div className="min-h-screen bg-stone-50 p-8 font-sans">
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-sm border border-black/5 p-8">
        <h1 className="text-3xl font-medium tracking-tight text-emerald-900 mb-6 italic serif">
          Sitemap de Desenvolvimento
        </h1>
        <p className="text-stone-600 mb-8">
          Ambiente de Preview detectado. Use os links abaixo para navegar entre as seções da Landing Page.
        </p>
        <ul className="space-y-4">
          {routes.map((route) => (
            <li key={route.path}>
              <Link
                to={route.path}
                className="block p-4 rounded-xl bg-emerald-50 text-emerald-700 hover:bg-emerald-100 transition-colors border border-emerald-100 font-medium"
              >
                {route.name} <span className="text-emerald-400 text-sm ml-2 font-mono">{route.path}</span>
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-12 pt-8 border-t border-stone-100 text-xs text-stone-400 font-mono uppercase tracking-widest">
          E-Consciência • Internal Build
        </div>
      </div>
    </div>
  );
}
