import { Navbar } from '../components/layout/Navbar'

export function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero — fundo escuro para testar a navbar transparente */}
        <section className="h-screen bg-[#0f0f0f] flex items-center justify-center">
          <p className="text-zinc-500 text-sm">Hero — em construção</p>
        </section>

        {/* Seção clara — para testar o scroll da navbar */}
        <section id="sobre" className="min-h-screen bg-[#f8f7f4] flex items-center justify-center">
          <p className="text-zinc-400 text-sm">Sobre — em construção</p>
        </section>
      </main>
    </>
  )
}
