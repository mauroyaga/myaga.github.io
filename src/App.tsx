import { Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { FDSPage } from './pages/projetos/FDSPage'
import { AnalisePage } from './pages/projetos/AnalisePage'
import { DestiladorPage } from './pages/projetos/DestiladorPage'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/projetos/fds" element={<FDSPage />} />
      <Route path="/projetos/analise" element={<AnalisePage />} />
      <Route path="/projetos/destilador" element={<DestiladorPage />} />
    </Routes>
  )
}
