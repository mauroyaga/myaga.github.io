import { Navbar } from '../components/layout/Navbar'
import { Hero } from '../components/sections/Hero'
import { Sobre } from '../components/sections/Sobre'
import { Metodo } from '../components/sections/Metodo'
import { Projetos } from '../components/sections/Projetos'
import { Competencias } from '../components/sections/Competencias'

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

        <section id="contato" className="min-h-screen bg-[#0f0f0f] flex items-center justify-center">
          <p className="text-zinc-600 text-sm">Contato — em construção</p>
        </section>
      </main>
    </>
  )
}
