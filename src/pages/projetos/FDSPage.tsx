import { motion } from 'framer-motion'
import { ArrowLeft, Check, FileText, Zap, Database, ShieldCheck, ChevronRight, Printer } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Navbar } from '../../components/layout/Navbar'
import { Footer } from '../../components/layout/Footer'

export function FDSPage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#0f0f0f]">
        <HeroFDS />
        <ProblemaFDS />
        <FluxoFDS />
        <MockupsFDS />
        <DestaquesFDS />
        <EcossistemaFDS />
      </main>
      <Footer />
    </>
  )
}

// ─── HERO ────────────────────────────────────────────────────────────────────
function HeroFDS() {
  return (
    <section className="relative bg-[#0f0f0f] pt-32 pb-24 overflow-hidden">
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#34d399]/5 blur-3xl" />

      <div className="relative z-10 max-w-[1280px] mx-auto px-5 md:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-300 transition-colors mb-10"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar ao portfólio
          </Link>
        </motion.div>

        <div className="max-w-[760px]">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="mb-6"
          >
            <span className="px-3 py-1 rounded-full text-[11px] font-semibold tracking-[0.15em] uppercase border border-[#34d399]/30 text-[#34d399] bg-[#34d399]/10">
              Módulo · Ecossistema Alquimista
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl text-zinc-100 leading-tight mb-6"
          >
            FDS Digital
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg text-zinc-400 leading-relaxed mb-8 max-w-[620px]"
          >
            Gestão de Fichas de Dados de Segurança com fluxo guiado e inteligência artificial — em conformidade com NBR 14725:2023 e GHS Revisão 8.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap gap-2"
          >
            {['NBR 14725:2023', 'GHS Revisão 8', 'IA com RAG', 'Validação automática', 'Exportação PDF'].map(tag => (
              <span
                key={tag}
                className="px-3 py-1 rounded-md bg-white/5 border border-white/8 text-[12px] font-medium text-zinc-400"
              >
                {tag}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// ─── PROBLEMA ────────────────────────────────────────────────────────────────
function ProblemaFDS() {
  const dores = [
    'NBR 14725:2023 exige 16 seções obrigatórias com precisão técnica',
    'Classificação GHS envolve frases H/P e pictogramas específicos por produto',
    'Versionamento manual sem rastreabilidade gera risco de não-conformidade',
    'IAs genéricas inventam dados — perigoso em documentos de segurança química',
  ]

  const secoes = [
    { nome: '1. Identificação', ok: true },
    { nome: '2. Perigos GHS', ok: true },
    { nome: '3. Composição', status: 'desatualizado' },
    { nome: '4. Primeiros socorros', status: 'desatualizado' },
    { nome: '5. Combate a incêndio', status: 'em branco' },
    { nome: '6. Derramamento', status: 'em branco' },
  ]

  return (
    <section className="bg-[#131318] py-24 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-5 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-[11px] font-semibold tracking-[0.2em] uppercase text-[#34d399] mb-4">
              O problema
            </span>
            <h2 className="font-display text-3xl md:text-4xl text-zinc-100 leading-tight mb-6">
              Manter FDS em conformidade é técnico, repetitivo e crítico.
            </h2>
            <p className="text-zinc-400 leading-relaxed mb-8">
              A Ficha de Dados de Segurança é documento legal obrigatório para qualquer produto químico. Mantê-la atualizada e em conformidade exige conhecimento técnico e atenção constante — sem margem para erro.
            </p>
            <ul className="space-y-3">
              {dores.map((dor, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-zinc-400">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#fb7185] flex-shrink-0" />
                  {dor}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-2xl bg-[#1c1c22] border border-white/8 p-6"
          >
            <p className="text-[11px] text-zinc-600 uppercase tracking-widest mb-5">Processo manual — antes</p>
            <div className="space-y-2">
              {secoes.map((s, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/5">
                  <div className={`w-5 h-5 rounded flex items-center justify-center flex-shrink-0 ${
                    s.ok ? 'bg-[#34d399]/15' : s.status === 'desatualizado' ? 'bg-[#fbbf24]/10' : 'bg-[#fb7185]/10'
                  }`}>
                    {s.ok
                      ? <Check className="w-3 h-3 text-[#34d399]" />
                      : <span className="text-[9px] font-bold text-zinc-600">—</span>
                    }
                  </div>
                  <span className="text-xs text-zinc-500 flex-1">{s.nome}</span>
                  {s.status && (
                    <span className={`text-[10px] ${s.status === 'desatualizado' ? 'text-[#fbbf24]/60' : 'text-[#fb7185]/60'}`}>
                      {s.status}
                    </span>
                  )}
                </div>
              ))}
            </div>
            <p className="text-xs text-zinc-700 mt-4 italic">...mais 10 seções obrigatórias pela NBR 14725:2023</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// ─── FLUXO ────────────────────────────────────────────────────────────────────
function FluxoFDS() {
  const etapas = [
    {
      num: '01',
      titulo: 'Identificar o produto',
      desc: 'Nome, código, versão, dados do fabricante e componentes com número CAS e percentuais.',
      cor: '#34d399',
    },
    {
      num: '02',
      titulo: 'Classificar os perigos',
      desc: 'Seção 2 estruturada: palavra-sinal GHS, pictogramas, frases H e P em português BR.',
      cor: '#60a5fa',
    },
    {
      num: '03',
      titulo: 'Gerar com IA + RAG',
      desc: 'Seções 3 a 16 geradas com base nos dados reais do produto e normas indexadas na base.',
      cor: '#a78bfa',
    },
    {
      num: '04',
      titulo: 'Validar e finalizar',
      desc: 'IA valida coerência entre seções. Sistema verifica conformidade NBR antes de publicar.',
      cor: '#fbbf24',
    },
  ]

  return (
    <section className="bg-[#0f0f0f] py-24">
      <div className="max-w-[1280px] mx-auto px-5 md:px-8 lg:px-12">
        <div className="text-center mb-16">
          <span className="inline-block text-[11px] font-semibold tracking-[0.2em] uppercase text-[#34d399] mb-4">
            Como funciona
          </span>
          <h2 className="font-display text-3xl md:text-4xl text-zinc-100">
            Do produto ao documento — em quatro etapas.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {etapas.map((etapa, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative rounded-2xl bg-[#131316] border border-white/8 p-6"
            >
              <div className="text-3xl font-black mb-4 opacity-20" style={{ color: etapa.cor }}>
                {etapa.num}
              </div>
              <div className="w-2 h-2 rounded-full mb-4" style={{ backgroundColor: etapa.cor }} />
              <h3 className="font-semibold text-zinc-100 mb-2">{etapa.titulo}</h3>
              <p className="text-sm text-zinc-500 leading-relaxed">{etapa.desc}</p>
              {i < etapas.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 -translate-y-1/2 z-10">
                  <ChevronRight className="w-5 h-5 text-zinc-700" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── MOCKUPS ─────────────────────────────────────────────────────────────────
function MockupsFDS() {
  return (
    <section className="bg-[#131318] py-24">
      <div className="max-w-[1280px] mx-auto px-5 md:px-8 lg:px-12">
        <div className="text-center mb-16">
          <span className="inline-block text-[11px] font-semibold tracking-[0.2em] uppercase text-[#34d399] mb-4">
            A interface
          </span>
          <h2 className="font-display text-3xl md:text-4xl text-zinc-100">
            Projetada para quem entende o processo.
          </h2>
        </div>
        <div className="space-y-6">
          <MockupLista />
          <MockupEditor />
        </div>
      </div>
    </section>
  )
}

function MockupLista() {
  const rows = [
    { nome: 'Tinta Acrílica Premium', codigo: 'TAP-2024', versao: 'v2.1', status: 'finalizada' },
    { nome: 'Solvente Diluente X15', codigo: 'SDX-001', versao: 'v1.0', status: 'finalizada' },
    { nome: 'Verniz Poliuretano UV', codigo: 'VPU-003', versao: 'v1.3', status: 'rascunho' },
    { nome: 'Primer Epóxi Industrial', codigo: 'PEI-007', versao: 'v0.2', status: 'rascunho' },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="rounded-2xl bg-[#0f0f0f] border border-white/8 overflow-hidden"
    >
      <div className="flex items-center justify-between px-5 py-4 border-b border-white/8">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#34d399]" />
          <span className="text-sm font-medium text-zinc-300">Fichas de Dados de Segurança</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-7 px-3 rounded-md bg-white/5 border border-white/8 flex items-center">
            <span className="text-[11px] text-zinc-500">Buscar...</span>
          </div>
          <div className="h-7 px-3 rounded-md bg-[#34d399]/15 border border-[#34d399]/30 flex items-center">
            <span className="text-[11px] text-[#34d399] font-medium">+ Nova FDS</span>
          </div>
        </div>
      </div>

      <div className="hidden md:grid grid-cols-12 px-5 py-2 border-b border-white/5">
        {['Produto', 'Código', 'Versão', 'Status', 'Ações'].map((h, i) => (
          <span key={h} className={`text-[10px] text-zinc-600 uppercase tracking-wider ${
            i === 0 ? 'col-span-5' : i === 4 ? 'col-span-1' : 'col-span-2'
          }`}>{h}</span>
        ))}
      </div>

      {rows.map((row, i) => (
        <div key={i} className="flex md:grid md:grid-cols-12 flex-wrap gap-2 md:gap-0 px-5 py-3 border-b border-white/5 hover:bg-white/[0.02] transition-colors">
          <div className="md:col-span-5 flex items-center gap-2 w-full md:w-auto">
            <FileText className="w-3.5 h-3.5 text-zinc-600 flex-shrink-0" />
            <span className="text-sm text-zinc-300">{row.nome}</span>
          </div>
          <span className="md:col-span-2 text-sm text-zinc-500 md:self-center">{row.codigo}</span>
          <span className="md:col-span-2 text-sm text-zinc-500 md:self-center">{row.versao}</span>
          <div className="md:col-span-2 md:self-center">
            <span className={`px-2 py-0.5 rounded-full text-[10px] font-semibold ${
              row.status === 'finalizada'
                ? 'bg-[#34d399]/15 text-[#34d399]'
                : 'bg-[#fbbf24]/10 text-[#fbbf24]'
            }`}>
              {row.status === 'finalizada' ? '✓ Finalizada' : '● Rascunho'}
            </span>
          </div>
          <div className="md:col-span-1 flex items-center gap-1">
            <div className="w-6 h-6 rounded bg-white/5 flex items-center justify-center">
              <Printer className="w-3 h-3 text-zinc-600" />
            </div>
          </div>
        </div>
      ))}
    </motion.div>
  )
}

function MockupEditor() {
  const secoes = [
    { num: 1, nome: 'Identificação do produto', origem: 'manual', ok: true },
    { num: 2, nome: 'Identificação de perigos', origem: 'manual', ok: true },
    { num: 3, nome: 'Composição e informações', origem: 'ia', ok: true },
    { num: 4, nome: 'Primeiros socorros', origem: 'ia', ok: true },
    { num: 5, nome: 'Combate a incêndio', origem: 'ia', ok: true },
    { num: 6, nome: 'Derramamento e vazamento', origem: 'pendente', ok: false },
    { num: 7, nome: 'Manuseio e armazenamento', origem: 'pendente', ok: false },
    { num: 8, nome: 'Controles de exposição', origem: 'pendente', ok: false },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="rounded-2xl bg-[#0f0f0f] border border-white/8 overflow-hidden"
    >
      {/* Toolbar */}
      <div className="flex flex-wrap gap-3 items-center justify-between px-5 py-3 border-b border-white/8 bg-[#0a0a0a]">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#34d399]" />
          <span className="text-sm text-zinc-400">
            Editor — <span className="text-zinc-300">Tinta Acrílica Premium</span>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2">
            <div className="w-20 h-1.5 rounded-full bg-white/5">
              <div className="w-[55%] h-full rounded-full bg-[#34d399]" />
            </div>
            <span className="text-[11px] text-zinc-600">55%</span>
          </div>
          <div className="h-6 px-3 rounded-md bg-[#34d399]/15 border border-[#34d399]/30 flex items-center gap-1.5">
            <Zap className="w-3 h-3 text-[#34d399]" />
            <span className="text-[11px] text-[#34d399] font-medium">Gerar com IA</span>
          </div>
          <div className="h-6 px-3 rounded-md bg-white/5 border border-white/8 flex items-center">
            <span className="text-[11px] text-zinc-400">Salvar</span>
          </div>
        </div>
      </div>

      {/* Split */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Seções accordion */}
        <div className="border-b md:border-b-0 md:border-r border-white/8 p-4 space-y-1">
          {secoes.map((s) => (
            <div
              key={s.num}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg ${
                s.num === 2 ? 'bg-white/5 border border-white/10' : 'hover:bg-white/[0.03]'
              }`}
            >
              <span className="text-[10px] text-zinc-700 w-4 flex-shrink-0">{s.num}</span>
              <span className={`text-xs flex-1 ${s.ok ? 'text-zinc-300' : 'text-zinc-600'}`}>
                {s.nome}
              </span>
              <span className={`text-[10px] px-1.5 py-0.5 rounded font-medium flex-shrink-0 ${
                s.origem === 'manual' ? 'bg-[#34d399]/10 text-[#34d399]' :
                s.origem === 'ia' ? 'bg-[#6366f1]/10 text-[#6366f1]' :
                'bg-white/5 text-zinc-600'
              }`}>
                {s.origem}
              </span>
            </div>
          ))}
          <div className="px-3 py-2 text-[11px] text-zinc-700 italic">...seções 9–16</div>
        </div>

        {/* Preview seção 2 */}
        <div className="p-5">
          <p className="text-[10px] text-zinc-600 uppercase tracking-widest mb-4">
            Seção 2 — Identificação de Perigos
          </p>

          <div className="mb-5">
            <p className="text-[10px] text-zinc-600 mb-1.5">Palavra-sinal</p>
            <span className="px-3 py-1 rounded-md bg-[#fb7185]/15 border border-[#fb7185]/30 text-[#fb7185] text-xs font-bold">
              PERIGO
            </span>
          </div>

          <div className="mb-5">
            <p className="text-[10px] text-zinc-600 mb-2">Pictogramas GHS selecionados</p>
            <div className="flex gap-3">
              {['01', '02', '07', '09'].map((code) => (
                <div
                  key={code}
                  className="w-10 h-10 border-2 border-[#fbbf24]/40 rotate-45 flex items-center justify-center rounded-sm flex-shrink-0"
                >
                  <span className="text-[7px] text-[#fbbf24] -rotate-45 font-bold">{code}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[10px] text-zinc-600 mb-2">Frases H — indicações de perigo</p>
            <div className="space-y-1.5">
              {[
                'H225 — Líquido e vapores muito inflamáveis',
                'H302 — Nocivo por ingestão',
                'H315 — Provoca irritação cutânea',
              ].map((h, i) => (
                <div key={i} className="text-[11px] text-zinc-400 flex items-start gap-1.5">
                  <span className="text-[#fbbf24] mt-0.5 flex-shrink-0">·</span>
                  {h}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

// ─── DESTAQUES ────────────────────────────────────────────────────────────────
function DestaquesFDS() {
  const destaques = [
    {
      icone: <Database className="w-5 h-5" />,
      titulo: 'RAG com base normativa',
      desc: 'IA indexa normas (NBR 14725, NR-7, CONAMA) e FDS anteriores como referência — gera com contexto real, não com dados inventados.',
      cor: '#60a5fa',
    },
    {
      icone: <ShieldCheck className="w-5 h-5" />,
      titulo: 'Validação NBR 14725',
      desc: 'Frontend e backend validam todas as seções obrigatórias antes de finalizar. FDS incompleta não é publicada.',
      cor: '#34d399',
    },
    {
      icone: <Zap className="w-5 h-5" />,
      titulo: 'Coerência por IA',
      desc: 'Após a geração, IA valida contradições entre seções — produto inflamável não pode ter seção de combate a incêndio vazia.',
      cor: '#a78bfa',
    },
    {
      icone: <Printer className="w-5 h-5" />,
      titulo: 'Saída configurável',
      desc: 'Template visual personalizável: cores, margens, fontes, logo e pictogramas GHS oficiais. PDF pronto para uso regulatório.',
      cor: '#fbbf24',
    },
  ]

  return (
    <section className="bg-[#0f0f0f] py-24">
      <div className="max-w-[1280px] mx-auto px-5 md:px-8 lg:px-12">
        <div className="text-center mb-16">
          <span className="inline-block text-[11px] font-semibold tracking-[0.2em] uppercase text-[#34d399] mb-4">
            Diferenciais
          </span>
          <h2 className="font-display text-3xl md:text-4xl text-zinc-100">
            IA que entende o domínio, não apenas o texto.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {destaques.map((d, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl bg-[#131316] border border-white/8 p-6"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                style={{ backgroundColor: `${d.cor}18`, color: d.cor }}
              >
                {d.icone}
              </div>
              <h3 className="font-semibold text-zinc-100 mb-2">{d.titulo}</h3>
              <p className="text-sm text-zinc-500 leading-relaxed">{d.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── ECOSSISTEMA ─────────────────────────────────────────────────────────────
function EcossistemaFDS() {
  return (
    <section className="bg-[#131318] py-24">
      <div className="max-w-[1280px] mx-auto px-5 md:px-8 lg:px-12">
        <div className="max-w-[600px] mx-auto text-center">
          <span className="inline-block text-[11px] font-semibold tracking-[0.2em] uppercase text-[#6366f1] mb-4">
            Ecossistema Alquimista
          </span>
          <h2 className="font-display text-3xl md:text-4xl text-zinc-100 leading-tight mb-6">
            Um módulo de um sistema maior.
          </h2>
          <p className="text-zinc-400 leading-relaxed mb-8">
            O FDS Digital integra o ecossistema Alquimista — plataforma modular para a indústria química. Dados de análise laboratorial alimentam a Seção 9 automaticamente. O mesmo produto que tem FDS tem histórico de resultados e rastreabilidade completa.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#6366f1] text-white text-sm font-medium hover:bg-[#4f46e5] transition-all hover:scale-[1.02]"
          >
            <ArrowLeft className="w-4 h-4" />
            Ver outros projetos
          </Link>
        </div>
      </div>
    </section>
  )
}
