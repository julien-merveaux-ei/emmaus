import { Routes, Route } from 'react-router'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import LieuDeVie from './pages/LieuDeVie.jsx'
import NousAider from './pages/NousAider.jsx'
import Ventes from './pages/Ventes.jsx'
import Solidarites from './pages/Solidarites.jsx'
import Ferme from './pages/Ferme.jsx'
import DonsAchats from './pages/DonsAchats.jsx'
import MentionsLegales from './pages/MentionsLegales.jsx'
import PlanDuSite from './pages/PlanDuSite.jsx'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="lieu-de-vie" element={<LieuDeVie />} />
        <Route path="nous-aider" element={<NousAider />} />
        <Route path="ventes" element={<Ventes />} />
        <Route path="solidarites" element={<Solidarites />} />
        <Route path="la-ferme" element={<Ferme />} />
        <Route path="dons-et-achats" element={<DonsAchats />} />
        <Route path="mentions-legales" element={<MentionsLegales />} />
        <Route path="plan-du-site" element={<PlanDuSite />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  )
}
