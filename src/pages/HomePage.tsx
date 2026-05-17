import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Navbar } from '../components/layout/Navbar'
import { Hero } from '../components/sections/Hero'
import { Sobre } from '../components/sections/Sobre'
import { Metodo } from '../components/sections/Metodo'
import { Projetos } from '../components/sections/Projetos'
import { Competencias } from '../components/sections/Competencias'
import { Contato } from '../components/sections/Contato'
import { Footer } from '../components/layout/Footer'

export function HomePage() {
  const location = useLocation()

  useEffect(() => {
    const target = (location.state as { scrollTo?: string } | null)?.scrollTo
    if (!target) return
    const attempt = () => {
      const el = document.getElementById(target)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
    const t = setTimeout(attempt, 100)
    return () => clearTimeout(t)
  }, [location.state])

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Sobre />
        <Metodo />
        <Projetos />
        <Competencias />
        <Contato />
      </main>
      <Footer />
    </>
  )
}
