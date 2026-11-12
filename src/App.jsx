import { Route, Routes } from 'react-router-dom'
import ScrollManager from './components/ScrollManager.jsx'
import SiteFooter from './components/SiteFooter.jsx'
import { useReveal } from './hooks/useReveal.js'
import Home from './pages/Home.jsx'
import NotFound from './pages/NotFound.jsx'
import Project from './pages/Project.jsx'

export default function App() {
  useReveal()

  return (
    <div id="top">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <ScrollManager />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:slug" element={<Project />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <SiteFooter />
    </div>
  )
}
