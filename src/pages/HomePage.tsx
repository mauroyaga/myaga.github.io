import { Navbar } from '../components/layout/Navbar'
import { Hero } from '../components/sections/Hero'
import { Sobre } from '../components/sections/Sobre'
import { Metodo } from '../components/sections/Metodo'
import { Projetos } from '../components/sections/Projetos'
import { Competencias } from '../components/sections/Competencias'
import { Contato } from '../components/sections/Contato'
import { Footer } from '../components/layout/Footer'

export function HomePage() {
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
