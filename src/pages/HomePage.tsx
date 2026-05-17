import { Navbar } from '../components/layout/Navbar'
import { Hero } from '../components/sections/Hero'

export function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />

        <section id="sobre" className="min-h-screen bg-[#f8f7f4] flex items-center justify-center">
          <p className="text-zinc-400 text-sm">Sobre — em construção</p>
        </section>

        <section id="projetos" className="min-h-screen bg-[#f1f5f9] flex items-center justify-center">
          <p className="text-zinc-400 text-sm">Projetos — em construção</p>
        </section>

        <section id="competencias" className="min-h-screen bg-[#f8f7f4] flex items-center justify-center">
          <p className="text-zinc-400 text-sm">Competências — em construção</p>
        </section>

        <section id="contato" className="min-h-screen bg-[#0f0f0f] flex items-center justify-center">
          <p className="text-zinc-600 text-sm">Contato — em construção</p>
        </section>
      </main>
    </>
  )
}
