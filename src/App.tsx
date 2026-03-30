import { BrowserRouter, HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Sitemap from './components/Sitemap';
import LandingPage from './components/LandingPage';
import GuiaDescarte from './components/GuiaDescarte';
import TermometroImpacto from './components/TermometroImpacto';
import SobreProjeto from './components/SobreProjeto';
import AgendarColeta from './components/AgendarColeta';
import SobreNos from './components/SobreNos';
import Servicos from './components/Servicos';
import OQueColetamos from './components/OQueColetamos';
import TermosUso from './components/TermosUso';
import PoliticaPrivacidade from './components/PoliticaPrivacidade';
import ScrollToTop from './components/ScrollToTop';

/**
 * Detecção de Ambiente
 * Retorna true se o hostname ou href conter qualquer uma das strings indicadoras de proxy.
 */
function checkPreviewEnvironment(): boolean {
  const indicators = [
    'googleusercontent',
    'webcontainer',
    'shim',
    '.goog',
    'scf.usercontent',
    'stackblitz',
    'codesandbox'
  ];
  const currentUrl = window.location.href;
  return indicators.some(indicator => currentUrl.includes(indicator));
}

export default function App() {
  const isPreview = checkPreviewEnvironment();
  const Router = isPreview ? HashRouter : BrowserRouter;

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* Redirecionamento Inteligente na Rota Raiz */}
        <Route 
          path="/" 
          element={<Navigate to={isPreview ? "/sitemap" : "/lp-video"} replace />} 
        />
        
        {/* Rotas da Aplicação */}
        <Route path="/sitemap" element={<Sitemap />} />
        <Route path="/lp-video" element={<LandingPage />} />
        
        {/* Rotas listadas no sitemap */}
        <Route path="/guia" element={<GuiaDescarte />} />
        <Route path="/impacto" element={<TermometroImpacto />} />
        <Route path="/sobre" element={<SobreProjeto />} />
        <Route path="/agendar" element={<AgendarColeta />} />
        <Route path="/sobre-nos" element={<SobreNos />} />
        <Route path="/servicos" element={<Servicos />} />
        <Route path="/o-que-coletamos" element={<OQueColetamos />} />
        <Route path="/termos" element={<TermosUso />} />
        <Route path="/privacidade" element={<PoliticaPrivacidade />} />
        
        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}
