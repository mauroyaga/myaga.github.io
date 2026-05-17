import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { FDSPage } from './pages/projetos/FDSPage'
import { AnalisePage } from './pages/projetos/AnalisePage'
import { DestiladorPage } from './pages/projetos/DestiladorPage'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    if ('scrollRestoration' in history) history.scrollRestoration = 'manual'
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
  }, [pathname])
  return null
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projetos/fds" element={<FDSPage />} />
        <Route path="/projetos/analise" element={<AnalisePage />} />
        <Route path="/projetos/destilador" element={<DestiladorPage />} />
      </Routes>
    </>
  )
}
