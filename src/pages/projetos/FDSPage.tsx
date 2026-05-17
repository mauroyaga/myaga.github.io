import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowLeft, Check, FileText, Zap, Database, ShieldCheck,
  Printer, ChevronRight, ChevronLeft, Loader2,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { Navbar } from '../../components/layout/Navbar'
import { Footer } from '../../components/layout/Footer'

export function FDSPage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#0f0f0f]">
        <HeroFDS />
        <NarrativaFDS />
        <TourFDS />
        <ComoIAFunciona />
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
        <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }}>
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-300 transition-colors mb-10">
            <ArrowLeft className="w-4 h-4" />
            Voltar ao portfólio
          </Link>
        </motion.div>
        <div className="max-w-[760px]">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.1 }} className="mb-6">
            <span className="px-3 py-1 rounded-full text-[11px] font-semibold tracking-[0.15em] uppercase border border-[#34d399]/30 text-[#34d399] bg-[#34d399]/10">
              Módulo · Ecossistema Alquimista
            </span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="font-display text-4xl md:text-5xl lg:text-6xl text-zinc-100 leading-tight mb-6">
            FDS Digital
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} className="text-lg text-zinc-400 leading-relaxed mb-8 max-w-[620px]">
            Gestão de Fichas de Dados de Segurança com fluxo guiado e inteligência artificial — em conformidade com NBR 14725:2023 e GHS Revisão 8.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }} className="flex flex-wrap gap-2">
            {['NBR 14725:2023', 'GHS Revisão 8', 'IA com RAG', 'Validação automática', 'Exportação PDF'].map(tag => (
              <span key={tag} className="px-3 py-1 rounded-md bg-white/5 border border-white/8 text-[12px] font-medium text-zinc-400">{tag}</span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// ─── NARRATIVA ───────────────────────────────────────────────────────────────
function NarrativaFDS() {
  const secoes16 = [
    { n: 1, nome: 'Identificação do produto', ok: true },
    { n: 2, nome: 'Identificação de perigos', ok: true },
    { n: 3, nome: 'Composição e informações', status: 'desatualizado' },
    { n: 4, nome: 'Primeiros socorros', status: 'desatualizado' },
    { n: 5, nome: 'Combate a incêndio', status: 'em branco' },
    { n: 6, nome: 'Derramamento e vazamento', status: 'em branco' },
    { n: 7, nome: 'Manuseio e armazenamento', status: 'em branco' },
    { n: 8, nome: 'Controles de exposição', status: 'em branco' },
  ]

  const dores = [
    'NBR 14725:2023 exige 16 seções obrigatórias com precisão técnica e linguagem normativa',
    'Classificação GHS envolve pictogramas, frases H e P específicos para cada produto',
    'Versionamento manual sem rastreabilidade gera risco real de não-conformidade em auditorias',
    'IAs genéricas inventam dados toxicológicos — perigoso em documentos de segurança',
  ]

  return (
    <section className="bg-[#131318] py-24 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-5 md:px-8 lg:px-12">

        {/* O que é uma FDS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="max-w-[760px] mx-auto text-center mb-20"
        >
          <span className="inline-block text-[11px] font-semibold tracking-[0.2em] uppercase text-[#34d399] mb-4">O contexto</span>
          <h2 className="font-display text-3xl md:text-4xl text-zinc-100 leading-tight mb-6">
            O que é uma FDS e por que ela importa.
          </h2>
          <p className="text-zinc-400 leading-relaxed mb-4">
            A Ficha de Dados de Segurança — antiga FISPQ — é um documento legal obrigatório para qualquer produto químico comercializado no Brasil. Ela define como o produto deve ser manuseado, armazenado, transportado e descartado. É a base de treinamentos de segurança, laudos de acidente e auditorias regulatórias.
          </p>
          <p className="text-zinc-400 leading-relaxed">
            Em 2023, a norma foi atualizada: a <span className="text-zinc-200 font-medium">ABNT NBR 14725:2023</span> substituiu a versão anterior e passou a ser obrigatória a partir de julho de 2025, alinhada ao GHS Revisão 8 da ONU. Empresas que não se adequaram precisam refazer todos os documentos.
          </p>
        </motion.div>

        {/* Por que é difícil */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-[11px] font-semibold tracking-[0.2em] uppercase text-[#34d399] mb-4">O problema</span>
            <h2 className="font-display text-3xl md:text-4xl text-zinc-100 leading-tight mb-6">
              Manter em conformidade é técnico, repetitivo e crítico.
            </h2>
            <ul className="space-y-4">
              {dores.map((dor, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-zinc-400">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#fb7185] flex-shrink-0" />
                  {dor}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-2xl bg-[#1c1c22] border border-white/8 p-6"
          >
            <p className="text-[11px] text-zinc-600 uppercase tracking-widest mb-4">FDS sem sistema — situação comum</p>
            <div className="space-y-2">
              {secoes16.map((s) => (
                <div key={s.n} className="flex items-center gap-3 p-2.5 rounded-lg bg-white/5 border border-white/5">
                  <span className="text-[10px] text-zinc-700 w-4 flex-shrink-0">{s.n}</span>
                  <div className={`w-4 h-4 rounded flex items-center justify-center flex-shrink-0 ${
                    s.ok ? 'bg-[#34d399]/15' : s.status === 'desatualizado' ? 'bg-[#fbbf24]/10' : 'bg-[#fb7185]/10'
                  }`}>
                    {s.ok
                      ? <Check className="w-2.5 h-2.5 text-[#34d399]" />
                      : <span className="text-[8px] text-zinc-600">—</span>
                    }
                  </div>
                  <span className="text-xs text-zinc-500 flex-1 min-w-0 truncate">{s.nome}</span>
                  {s.status && (
                    <span className={`text-[10px] flex-shrink-0 ${
                      s.status === 'desatualizado' ? 'text-[#fbbf24]/60' : 'text-[#fb7185]/60'
                    }`}>{s.status}</span>
                  )}
                </div>
              ))}
              <p className="text-xs text-zinc-700 mt-3 italic pl-1">...mais 8 seções obrigatórias</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// ─── TOUR ────────────────────────────────────────────────────────────────────
const TABS = [
  { num: '01', label: 'Lista de FDS' },
  { num: '02', label: 'Identificação' },
  { num: '03', label: 'Perigos GHS' },
  { num: '04', label: 'Geração com IA' },
  { num: '05', label: 'Preview e PDF' },
]

const TAB_INFO = [
  {
    titulo: 'Todos os produtos em um lugar',
    desc: 'Tabela paginada com busca por nome ou código. Cada FDS tem status de preenchimento — Rascunho enquanto em edição, Finalizada após validação completa. Uma FDS finalizada não pode ser regredida, garantindo rastreabilidade.',
  },
  {
    titulo: 'Produto, empresa e fórmula',
    desc: 'Dados da empresa vêm de configurações globais — não precisam ser redigitados. Os componentes têm número CAS, percentuais mínimo e máximo, e suporte a ingrediente sigiloso: o sistema mantém a classificação GHS mas oculta identidade do componente, conforme permite a norma.',
  },
  {
    titulo: 'Classificação estruturada, não texto livre',
    desc: 'A Seção 2 é preenchida de forma estruturada — pictogramas clicáveis, palavra-sinal, frases H e P selecionáveis. Isso garante que a classificação seja consistente e validável, sem erros de digitação ou inconsistências de nomenclatura.',
  },
  {
    titulo: 'IA gera com base no produto real',
    desc: 'As seções 4 a 16 são geradas por IA que acessa a base de normas e FDS indexadas. O sistema gera seção a seção ou tudo de uma vez, indicando quando um dado precisa ser confirmado pelo responsável técnico — sem inventar informações.',
  },
  {
    titulo: 'Documento pronto para uso regulatório',
    desc: 'O preview em tempo real simula o PDF final conforme NBR 14725:2023. Template configurável — cores, margens, logo, fontes. Ao finalizar, o documento é bloqueado para edição e fica disponível para impressão ou exportação.',
  },
]

function TourFDS() {
  const [tab, setTab] = useState(0)

  return (
    <section className="bg-[#0f0f0f] py-24 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-5 md:px-8 lg:px-12">
        <div className="text-center mb-12">
          <span className="inline-block text-[11px] font-semibold tracking-[0.2em] uppercase text-[#34d399] mb-4">Tour pela interface</span>
          <h2 className="font-display text-3xl md:text-4xl text-zinc-100">Conheça o sistema por dentro.</h2>
        </div>

        {/* Tab nav — desktop */}
        <div className="hidden md:flex items-center justify-center gap-2 mb-8">
          {TABS.map((t, i) => (
            <button
              key={i}
              onClick={() => setTab(i)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm transition-all ${
                tab === i
                  ? 'bg-[#34d399]/15 border border-[#34d399]/30 text-[#34d399]'
                  : 'text-zinc-500 hover:text-zinc-300 border border-transparent'
              }`}
            >
              <span className="text-[11px] font-bold opacity-60">{t.num}</span>
              {t.label}
            </button>
          ))}
        </div>

        {/* Conteúdo */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          {/* Descrição */}
          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={tab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-[#34d399] text-sm font-semibold mb-2">{TABS[tab].num} — {TABS[tab].label}</p>
                <h3 className="font-display text-2xl md:text-3xl text-zinc-100 leading-snug mb-4">{TAB_INFO[tab].titulo}</h3>
                <p className="text-zinc-400 leading-relaxed text-sm">{TAB_INFO[tab].desc}</p>
              </motion.div>
            </AnimatePresence>

            {/* Nav mobile + dots */}
            <div className="flex items-center gap-4 mt-8">
              <button
                onClick={() => setTab(t => Math.max(0, t - 1))}
                disabled={tab === 0}
                className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center text-zinc-400 disabled:opacity-30 hover:border-white/20 transition-all"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <div className="flex gap-1.5">
                {TABS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setTab(i)}
                    className={`rounded-full transition-all ${tab === i ? 'w-4 h-1.5 bg-[#34d399]' : 'w-1.5 h-1.5 bg-white/20'}`}
                  />
                ))}
              </div>
              <button
                onClick={() => setTab(t => Math.min(TABS.length - 1, t + 1))}
                disabled={tab === TABS.length - 1}
                className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center text-zinc-400 disabled:opacity-30 hover:border-white/20 transition-all"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Mockup */}
          <div className="lg:col-span-3">
            <AnimatePresence mode="wait">
              <motion.div
                key={tab}
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -16 }}
                transition={{ duration: 0.35 }}
                className="rounded-2xl border border-white/8 overflow-hidden bg-[#09090b]"
              >
                {tab === 0 && <MockupLista />}
                {tab === 1 && <MockupIdentificacao />}
                {tab === 2 && <MockupGHS />}
                {tab === 3 && <MockupGeracaoIA />}
                {tab === 4 && <MockupPreview />}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}

// ── Mockup 1: Lista ──────────────────────────────────────────────────────────
function MockupLista() {
  const rows = [
    { nome: 'Tinta Acrílica Premium', codigo: 'TAP-2024', status: 'finalizada' },
    { nome: 'Solvente Diluente X15', codigo: 'SDX-001', status: 'finalizada' },
    { nome: 'Verniz Poliuretano UV', codigo: 'VPU-003', status: 'rascunho' },
    { nome: 'Primer Epóxi Industrial', codigo: 'PEI-007', status: 'rascunho' },
  ]
  return (
    <div>
      <div className="flex items-center justify-between px-5 py-3 border-b border-white/8 bg-zinc-950">
        <div className="flex items-center gap-2">
          <FileText className="w-4 h-4 text-orange-500" />
          <span className="text-sm font-medium text-zinc-200">FDS</span>
          <span className="text-xs text-zinc-600">/ Fichas de Dados de Segurança</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-7 px-3 rounded-md bg-white/5 border border-white/8 flex items-center gap-1.5">
            <span className="text-[11px] text-zinc-500">Buscar por nome, código…</span>
          </div>
          <div className="h-7 px-3 rounded-md bg-orange-600 flex items-center">
            <span className="text-[11px] text-white font-medium">+ Nova FDS</span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-12 px-5 py-2 border-b border-white/5 bg-zinc-950/60">
        {[['col-span-5', 'Nome do produto'], ['col-span-3', 'Código'], ['col-span-3', 'Status'], ['col-span-1', '']].map(([cls, h]) => (
          <span key={h} className={`${cls} text-[10px] text-zinc-600 uppercase tracking-wider`}>{h}</span>
        ))}
      </div>
      {rows.map((r, i) => (
        <div key={i} className="grid grid-cols-12 px-5 py-3.5 border-b border-white/5 hover:bg-white/[0.02] transition-colors items-center">
          <div className="col-span-5 flex items-center gap-2">
            <FileText className="w-3.5 h-3.5 text-zinc-600 flex-shrink-0" />
            <span className="text-sm text-zinc-200">{r.nome}</span>
          </div>
          <span className="col-span-3 text-sm text-zinc-500">{r.codigo}</span>
          <div className="col-span-3">
            <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-semibold ${
              r.status === 'finalizada' ? 'bg-emerald-500/15 text-emerald-400' : 'bg-amber-500/10 text-amber-400'
            }`}>
              {r.status === 'finalizada' ? '✓ Finalizada' : '● Rascunho'}
            </span>
          </div>
          <div className="col-span-1 flex gap-1">
            <div className="w-6 h-6 rounded bg-white/5 flex items-center justify-center">
              <Printer className="w-3 h-3 text-zinc-600" />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

// ── Mockup 2: Identificação ──────────────────────────────────────────────────
function MockupIdentificacao() {
  return (
    <div className="p-5 space-y-4">
      {/* Cabeçalho produto */}
      <div className="rounded-xl border border-white/8 bg-zinc-900 p-4">
        <p className="text-[11px] text-zinc-600 uppercase tracking-wider mb-3">Identificação do produto</p>
        <div className="grid grid-cols-3 gap-3 mb-3">
          {[['Nome comercial', 'Tinta Acrílica Premium'], ['Código', 'TAP-2024'], ['Versão', '2.1']].map(([label, val]) => (
            <div key={label}>
              <p className="text-[10px] text-zinc-600 mb-1">{label}</p>
              <div className="px-2.5 py-1.5 rounded-md bg-zinc-800 border border-zinc-700 text-xs text-zinc-200">{val}</div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-3">
          {[['Data de emissão', '2025-01-15'], ['Tipo / categoria', 'Tinta imobiliária']].map(([label, val]) => (
            <div key={label}>
              <p className="text-[10px] text-zinc-600 mb-1">{label}</p>
              <div className="px-2.5 py-1.5 rounded-md bg-zinc-800 border border-zinc-700 text-xs text-zinc-200">{val}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Componentes */}
      <div className="rounded-xl border border-white/8 bg-zinc-900 p-4">
        <div className="flex items-center justify-between mb-3">
          <p className="text-[11px] text-zinc-600 uppercase tracking-wider">Seção 3 — Componentes</p>
          <span className="text-[11px] text-orange-500 font-medium cursor-pointer">+ Adicionar</span>
        </div>
        <div className="grid grid-cols-12 mb-2">
          {[['col-span-4', 'Componente'], ['col-span-3', 'CAS'], ['col-span-2', 'Mín%'], ['col-span-2', 'Máx%'], ['col-span-1', 'Sig.']].map(([cls, h]) => (
            <span key={h} className={`${cls} text-[10px] text-zinc-600`}>{h}</span>
          ))}
        </div>
        {[
          ['Resina acrílica', '000-00-1', '35', '45', false],
          ['Dióxido de titânio', '000-00-2', '20', '30', false],
          ['Componente X', '—', '5', '10', true],
        ].map(([nome, cas, min, max, sig], i) => (
          <div key={i} className="grid grid-cols-12 py-2 border-t border-white/5 items-center">
            <span className="col-span-4 text-xs text-zinc-300">{String(nome)}</span>
            <span className="col-span-3 text-xs text-zinc-500 font-mono">{String(cas)}</span>
            <span className="col-span-2 text-xs text-zinc-400">{String(min)}</span>
            <span className="col-span-2 text-xs text-zinc-400">{String(max)}</span>
            <div className="col-span-1">
              {sig && <span className="text-[9px] px-1 py-0.5 rounded bg-orange-500/10 text-orange-400">Sig</span>}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ── Mockup 3: GHS ────────────────────────────────────────────────────────────
function MockupGHS() {
  const selecionados = [true, true, false, false, false, false, true, false, true]
  const codigos = ['01', '02', '03', '04', '05', '06', '07', '08', '09']

  return (
    <div className="p-5 space-y-5">
      {/* Palavra sinal */}
      <div className="rounded-xl border border-white/8 bg-zinc-900 p-4">
        <p className="text-[11px] text-zinc-600 uppercase tracking-wider mb-3">Palavra de advertência</p>
        <div className="flex gap-2">
          {['Perigo', 'Aviso', 'Não aplicável'].map((w, i) => (
            <button key={w} className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${
              i === 0 ? 'bg-orange-600 border-orange-500 text-white' : 'bg-zinc-800 border-zinc-700 text-zinc-500'
            }`}>{w}</button>
          ))}
        </div>
      </div>

      {/* Pictogramas */}
      <div className="rounded-xl border border-white/8 bg-zinc-900 p-4">
        <p className="text-[11px] text-zinc-600 uppercase tracking-wider mb-3">Pictogramas GHS</p>
        <div className="grid grid-cols-9 gap-2">
          {codigos.map((code, i) => (
            <div
              key={code}
              className={`aspect-square flex items-center justify-center rounded border-2 rotate-45 ${
                selecionados[i]
                  ? 'border-orange-500 bg-orange-500/15'
                  : 'border-zinc-700 bg-zinc-800'
              }`}
            >
              <span className={`text-[7px] font-bold -rotate-45 ${selecionados[i] ? 'text-orange-400' : 'text-zinc-600'}`}>{code}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Frases H */}
      <div className="rounded-xl border border-white/8 bg-zinc-900 p-4">
        <p className="text-[11px] text-zinc-600 uppercase tracking-wider mb-3">Frases H — Indicações de perigo</p>
        <div className="space-y-2">
          {[
            ['H225', 'Líquido e vapores muito inflamáveis'],
            ['H302', 'Nocivo por ingestão'],
            ['H315', 'Provoca irritação cutânea'],
            ['H318', 'Provoca lesões oculares graves'],
          ].map(([code, desc]) => (
            <div key={code} className="flex items-start gap-2">
              <div className="w-3 h-3 mt-0.5 rounded border-2 border-orange-500 bg-orange-500/20 flex-shrink-0" />
              <span className="text-xs text-zinc-400"><span className="text-zinc-300 font-mono">{code}</span> — {desc}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ── Mockup 4: Geração com IA ─────────────────────────────────────────────────
function MockupGeracaoIA() {
  const secoes = [
    { n: 4, nome: 'Primeiros socorros', origem: 'ia' },
    { n: 5, nome: 'Combate a incêndio', origem: 'ia' },
    { n: 6, nome: 'Derramamento e vazamento', origem: 'gerando' },
    { n: 7, nome: 'Manuseio e armazenamento', origem: 'pendente' },
    { n: 8, nome: 'Controles de exposição', origem: 'pendente' },
    { n: 9, nome: 'Propriedades físico-químicas', origem: 'pendente' },
  ]

  return (
    <div>
      {/* Toolbar */}
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/8 bg-zinc-950">
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
          <span className="text-xs text-zinc-400">Tinta Acrílica Premium <span className="text-zinc-600 ml-1">● Rascunho</span></span>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <div className="w-16 h-1 rounded-full bg-zinc-800">
              <div className="w-[55%] h-full rounded-full bg-orange-500" />
            </div>
            <span className="text-[10px] text-zinc-600 font-mono">9/16</span>
          </div>
          <div className="h-6 px-2.5 rounded-md bg-orange-600/20 border border-orange-500/30 flex items-center gap-1">
            <Zap className="w-3 h-3 text-orange-400" />
            <span className="text-[11px] text-orange-400 font-medium">Gerar tudo</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2">
        {/* Accordion */}
        <div className="border-r border-white/8 p-3 space-y-1">
          {secoes.map((s) => (
            <div key={s.n} className={`flex items-center gap-2 px-3 py-2.5 rounded-lg ${s.origem === 'gerando' ? 'bg-orange-500/5 border border-orange-500/20' : 'hover:bg-white/[0.02]'}`}>
              <span className="text-[10px] text-zinc-700 w-4 flex-shrink-0">{s.n}</span>
              <span className={`text-xs flex-1 ${s.origem === 'pendente' ? 'text-zinc-600' : 'text-zinc-300'}`}>{s.nome}</span>
              {s.origem === 'ia' && (
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-orange-500/15 text-orange-400 font-medium flex-shrink-0">ia</span>
              )}
              {s.origem === 'gerando' && (
                <Loader2 className="w-3 h-3 text-orange-400 animate-spin flex-shrink-0" />
              )}
              {s.origem === 'pendente' && (
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-600 flex-shrink-0">pendente</span>
              )}
            </div>
          ))}
        </div>

        {/* Preview geração */}
        <div className="p-4">
          <div className="flex items-center gap-2 mb-3">
            <Loader2 className="w-3.5 h-3.5 text-orange-400 animate-spin" />
            <p className="text-[11px] text-orange-400">Gerando Seção 6…</p>
          </div>
          <div className="rounded-lg bg-zinc-900 border border-white/5 p-3 space-y-2">
            <p className="text-[11px] text-zinc-500 uppercase tracking-widest">Seção 6 — Derramamento</p>
            <div className="space-y-1.5">
              <div className="h-2.5 rounded bg-zinc-800 w-full" />
              <div className="h-2.5 rounded bg-zinc-800 w-4/5" />
              <div className="h-2.5 rounded bg-zinc-800 w-full" />
              <div className="h-2.5 rounded bg-zinc-800 w-3/5" />
            </div>
            <div className="flex items-center gap-1.5 mt-2 pt-2 border-t border-white/5">
              <div className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
              <span className="text-[10px] text-zinc-600">escrevendo com base na RAG…</span>
            </div>
          </div>

          <div className="mt-4 rounded-lg bg-zinc-900 border border-white/5 p-3">
            <p className="text-[11px] text-zinc-500 uppercase tracking-widest mb-2">Seção 5 — Concluída</p>
            <div className="space-y-1.5">
              <div className="h-2.5 rounded bg-zinc-700 w-full" />
              <div className="h-2.5 rounded bg-zinc-700 w-5/6" />
              <div className="h-2.5 rounded bg-zinc-700 w-full" />
            </div>
            <div className="flex items-center gap-1.5 mt-2">
              <Check className="w-3 h-3 text-emerald-400" />
              <span className="text-[10px] text-emerald-500">Gerada por IA</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// ── Mockup 5: Preview PDF ─────────────────────────────────────────────────────
function MockupPreview() {
  return (
    <div>
      {/* Toolbar preview */}
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/8 bg-zinc-950">
        <div className="flex items-center gap-2">
          <span className="text-xs text-zinc-500">Preview — documento finalizado</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-6 px-2.5 rounded-md bg-white/5 border border-white/8 flex items-center gap-1">
            <Printer className="w-3 h-3 text-zinc-400" />
            <span className="text-[11px] text-zinc-400">Imprimir</span>
          </div>
          <div className="h-6 px-2.5 rounded-md bg-orange-600 flex items-center gap-1">
            <span className="text-[11px] text-white font-medium">Baixar PDF</span>
          </div>
        </div>
      </div>

      {/* Documento branco */}
      <div className="p-4 bg-zinc-900/50">
        <div className="bg-white rounded-lg overflow-hidden shadow-2xl text-[#1e293b]">
          {/* Header FDS */}
          <div className="bg-[#1e293b] px-4 py-2 flex items-center justify-between">
            <span className="text-[9px] font-bold tracking-[0.2em] text-white uppercase">Ficha de Dados de Segurança</span>
            <span className="text-[8px] text-zinc-400">FDS-00047 · v2.1</span>
          </div>

          <div className="px-4 pt-3 pb-2 border-b border-zinc-200 flex items-start justify-between">
            <div>
              <p className="text-[11px] font-bold text-zinc-900">Tinta Acrílica Premium</p>
              <p className="text-[9px] text-zinc-500 mt-0.5">Código: TAP-2024 · Emissão: 15/01/2025 · Revisão: 15/01/2026</p>
            </div>
            <div className="w-12 h-7 rounded bg-zinc-100 border border-zinc-200 flex items-center justify-center">
              <span className="text-[8px] text-zinc-400">LOGO</span>
            </div>
          </div>

          <div className="px-4 py-1.5 bg-zinc-50 border-b border-zinc-200">
            <p className="text-[8px] text-zinc-400">Elaborado conforme <span className="font-semibold text-zinc-500">ABNT NBR 14725:2023</span> e GHS Revisão 8</p>
          </div>

          {/* Seção 1 */}
          <div className="px-4 py-2 border-b border-zinc-100">
            <div className="text-[8px] font-bold bg-zinc-100 px-2 py-0.5 rounded mb-2 text-zinc-700 uppercase tracking-wider">1. Identificação</div>
            <div className="grid grid-cols-2 gap-x-4 gap-y-1">
              {[['Fabricante', '█████████████'], ['CNPJ', '██.███.███/0001-██'], ['Endereço', '██████████████, Maringá-PR'], ['Emergência', '0800 ███-XXXX']].map(([k, v]) => (
                <div key={k} className="flex gap-1.5">
                  <span className="text-[8px] text-zinc-400 min-w-[52px]">{k}:</span>
                  <span className="text-[8px] text-zinc-700">{v}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Seção 2 - pictogramas */}
          <div className="px-4 py-2">
            <div className="text-[8px] font-bold bg-zinc-100 px-2 py-0.5 rounded mb-2 text-zinc-700 uppercase tracking-wider">2. Identificação de Perigos</div>
            <div className="flex items-center gap-3">
              <div className="flex gap-2">
                {['01', '02', '07'].map(code => (
                  <div key={code} className="w-6 h-6 border-2 border-zinc-800 rotate-45 flex items-center justify-center rounded-sm">
                    <span className="text-[6px] -rotate-45 font-bold text-zinc-700">{code}</span>
                  </div>
                ))}
              </div>
              <div>
                <span className="text-[8px] font-black text-red-700 uppercase">PERIGO</span>
                <p className="text-[7px] text-zinc-500">H225 · H302 · H315 · H318</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── COMO A IA FUNCIONA ───────────────────────────────────────────────────────
function ComoIAFunciona() {
  const etapas = [
    {
      icone: <Database className="w-5 h-5" />,
      titulo: 'Base indexada',
      desc: 'Normas (NBR 14725, NR-7, CONAMA) e FDS anteriores são indexadas como base de conhecimento, disponíveis para consulta a cada geração.',
      cor: '#60a5fa',
    },
    {
      icone: <ChevronRight className="w-5 h-5 text-zinc-700" />,
      titulo: '',
      desc: '',
      cor: '',
      arrow: true,
    },
    {
      icone: <Zap className="w-5 h-5" />,
      titulo: 'RAG recupera contexto',
      desc: 'Para cada seção, o sistema busca os trechos mais relevantes da base — norma aplicável, produto similar, classificação de risco.',
      cor: '#a78bfa',
    },
    {
      icone: <ChevronRight className="w-5 h-5 text-zinc-700" />,
      titulo: '',
      desc: '',
      cor: '',
      arrow: true,
    },
    {
      icone: <ShieldCheck className="w-5 h-5" />,
      titulo: 'IA gera com precisão',
      desc: 'A resposta é gerada com o contexto real do produto e da norma. Quando não há dado suficiente, o sistema registra "A determinar" — sem inventar.',
      cor: '#34d399',
    },
  ]

  return (
    <section className="bg-[#131318] py-24">
      <div className="max-w-[1280px] mx-auto px-5 md:px-8 lg:px-12">
        <div className="text-center mb-16">
          <span className="inline-block text-[11px] font-semibold tracking-[0.2em] uppercase text-[#34d399] mb-4">Inteligência aplicada</span>
          <h2 className="font-display text-3xl md:text-4xl text-zinc-100 mb-4">
            IA que entende o domínio, não apenas o texto.
          </h2>
          <p className="text-zinc-500 max-w-[520px] mx-auto text-sm leading-relaxed">
            A diferença entre uma IA genérica e uma IA útil em documentos técnicos está no contexto. O FDS Digital usa RAG — geração aumentada por recuperação — para garantir que cada resposta tenha base real.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 max-w-[900px] mx-auto">
          {etapas.map((e, i) =>
            e.arrow ? (
              <div key={i} className="hidden md:block flex-shrink-0">{e.icone}</div>
            ) : (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i / 2) * 0.15 }}
                className="flex-1 rounded-2xl bg-[#1c1c22] border border-white/8 p-6"
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: `${e.cor}18`, color: e.cor }}>
                  {e.icone}
                </div>
                <h3 className="font-semibold text-zinc-100 mb-2">{e.titulo}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed">{e.desc}</p>
              </motion.div>
            )
          )}
        </div>
      </div>
    </section>
  )
}

// ─── DESTAQUES ────────────────────────────────────────────────────────────────
function DestaquesFDS() {
  const destaques = [
    {
      icone: <Database className="w-5 h-5" />,
      titulo: 'RAG com base normativa',
      desc: 'IA indexa normas e FDS anteriores como referência — gera com contexto real, não com dados inventados.',
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
      desc: 'Após a geração, IA valida contradições entre seções — produto inflamável não pode ter seção de incêndio vazia.',
      cor: '#a78bfa',
    },
    {
      icone: <Printer className="w-5 h-5" />,
      titulo: 'Saída configurável',
      desc: 'Template visual personalizável: cores, margens, logo e pictogramas GHS oficiais. PDF pronto para uso regulatório.',
      cor: '#fbbf24',
    },
  ]

  return (
    <section className="bg-[#0f0f0f] py-24">
      <div className="max-w-[1280px] mx-auto px-5 md:px-8 lg:px-12">
        <div className="text-center mb-16">
          <span className="inline-block text-[11px] font-semibold tracking-[0.2em] uppercase text-[#34d399] mb-4">Diferenciais</span>
          <h2 className="font-display text-3xl md:text-4xl text-zinc-100">O que torna o sistema confiável.</h2>
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
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: `${d.cor}18`, color: d.cor }}>
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
          <span className="inline-block text-[11px] font-semibold tracking-[0.2em] uppercase text-[#6366f1] mb-4">Ecossistema Alquimista</span>
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
