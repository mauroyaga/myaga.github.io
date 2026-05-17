import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowLeft, BarChart3, FileText,
  ChevronLeft, ChevronRight, Check, TrendingUp,
  FlaskConical, Clock, History, Zap, Bell, Sparkles, X,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { Navbar } from '../../components/layout/Navbar'
import { Footer } from '../../components/layout/Footer'

export function AnalisePage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#0f0f0f]">
        <HeroAnalise />
        <NarrativaAnalise />
        <TourAnalise />
        <DestaqueAnalise />
        <EcossistemaAnalise />
      </main>
      <Footer />
    </>
  )
}

// ─── HERO ────────────────────────────────────────────────────────────────────
function HeroAnalise() {
  return (
    <section className="relative bg-[#0f0f0f] pt-32 pb-24 overflow-hidden">
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#60a5fa]/5 blur-3xl" />
      <div className="relative z-10 max-w-[1280px] mx-auto px-5 md:px-8 lg:px-12">
        <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }}>
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-300 transition-colors mb-10">
            <ArrowLeft className="w-4 h-4" />
            Voltar ao portfólio
          </Link>
        </motion.div>
        <div className="max-w-[760px]">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.1 }} className="mb-6">
            <span className="px-3 py-1 rounded-full text-[11px] font-semibold tracking-[0.15em] uppercase border border-[#60a5fa]/30 text-[#60a5fa] bg-[#60a5fa]/10">
              Módulo · Ecossistema Alquimista
            </span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="font-display text-4xl md:text-5xl lg:text-6xl text-zinc-100 leading-tight mb-6">
            Análise Lab
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} className="text-lg text-zinc-400 leading-relaxed mb-8 max-w-[620px]">
            Centraliza resultados de controle de qualidade em tempo real — fim das planilhas isoladas, início da rastreabilidade completa por lote.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }} className="flex flex-wrap gap-2">
            {['Pesagem', 'Viscosidade', 'Peso Específico', 'Aprovação', 'Histórico'].map(tag => (
              <span key={tag} className="px-3 py-1 rounded-md bg-white/5 border border-white/8 text-[12px] font-medium text-zinc-400">{tag}</span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// ─── NARRATIVA ───────────────────────────────────────────────────────────────
function NarrativaAnalise() {
  const dores = [
    'Resultados registrados em papel ou planilhas isoladas — sem busca, sem histórico comparativo entre lotes',
    'Cálculos de desvio feitos manualmente criam margem de erro em análises críticas de qualidade',
    'Sem rastreabilidade: quem aprovou, quando, com qual nota — não fica registrado de forma confiável',
    'Histórico de um produto exige garimpar arquivos físicos ou planilhas espalhadas entre analistas',
  ]

  const camposVazios = [
    { label: 'Pesagem total (kg)', valor: '', placeholder: 'não registrado' },
    { label: 'Líquido conferência', valor: '', placeholder: 'calcular manualmente' },
    { label: 'Desvio (%)', valor: '', placeholder: '—' },
    { label: 'Viscosidade (s)', valor: '', placeholder: 'não registrado' },
    { label: 'Resultado', valor: '', placeholder: 'sem critério definido' },
    { label: 'Aprovado por', valor: '', placeholder: 'sem registro' },
  ]

  return (
    <section className="bg-[#131318] py-24 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-5 md:px-8 lg:px-12">

        {/* O que é CQ em tintas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="max-w-[760px] mx-auto text-center mb-20"
        >
          <span className="inline-block text-[11px] font-semibold tracking-[0.2em] uppercase text-[#60a5fa] mb-4">O contexto</span>
          <h2 className="font-display text-3xl md:text-4xl text-zinc-100 leading-tight mb-6">
            Cada lote precisa ser aprovado antes de sair.
          </h2>
          <p className="text-zinc-400 leading-relaxed mb-4">
            No chão de fábrica de tintas, cada ordem de fabricação passa por análise de controle de qualidade antes de ser liberada. O analista mede pesagem total, viscosidade (copo Ford), peso específico real e compara com as especificações do produto.
          </p>
          <p className="text-zinc-400 leading-relaxed">
            Desvios dentro da faixa geram aprovação. Desvios críticos geram reprovação ou quarentena — e o lote não sai até ser resolvido. <span className="text-zinc-200 font-medium">Esse processo acontece dezenas de vezes por dia</span>, para cada produto diferente fabricado.
          </p>
        </motion.div>

        {/* Por que escala mal */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-[11px] font-semibold tracking-[0.2em] uppercase text-[#60a5fa] mb-4">O problema</span>
            <h2 className="font-display text-3xl md:text-4xl text-zinc-100 leading-tight mb-6">
              Em papel e planilha, o histórico não existe.
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
            <p className="text-[11px] text-zinc-600 uppercase tracking-widest mb-4">Análise sem sistema — situação comum</p>
            <div className="space-y-2">
              {camposVazios.map((c, i) => (
                <div key={i} className="flex items-center gap-3 p-2.5 rounded-lg bg-white/5 border border-white/5">
                  <span className="text-xs text-zinc-500 flex-1 min-w-0 truncate">{c.label}</span>
                  <span className="text-[11px] text-zinc-700 italic flex-shrink-0">{c.placeholder}</span>
                </div>
              ))}
              <p className="text-xs text-zinc-700 mt-3 italic pl-1">resultado: folha de papel no arquivo físico</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// ─── TOUR ────────────────────────────────────────────────────────────────────
const TABS = [
  { num: '01', label: 'Lista de análises' },
  { num: '02', label: 'O.F. e Pesagem' },
  { num: '03', label: 'Análise e Resultado' },
  { num: '04', label: 'Alertas automáticos' },
  { num: '05', label: 'Chat com IA' },
  { num: '06', label: 'Dashboard' },
]

const TAB_INFO = [
  {
    titulo: 'KPIs e lotes em um lugar',
    desc: 'A listagem exibe os indicadores do período no topo — total de análises, desvios de PE e taxa de aprovação. A tabela abaixo tem busca por O.F., produto ou código. Cada lote mostra resultado imediato: Aprovado, Reprovado ou Quarentena.',
  },
  {
    titulo: 'O.F., lote e pesagem com cálculos automáticos',
    desc: 'Os dados da Ordem de Fabricação identificam o produto univocamente. Na pesagem, o sistema calcula automaticamente o líquido de conferência (pesagem total − tara) e o desvio percentual em relação ao anotado — sem margem de erro manual.',
  },
  {
    titulo: 'Viscosidade, PE e resultado final',
    desc: 'Viscosidade medida em copo Ford (número do copo + segundos de escoamento), temperatura da análise e peso específico real. O sistema compara PE real com o teórico. A nota e o resultado (Aprovado / Reprovado / Quarentena) ficam registrados com data e hora de liberação automáticas.',
  },
  {
    titulo: 'Alertas que disparam sozinhos',
    desc: 'Configure alertas por produto, cliente, código ou número de O.F. — o sistema monitora o formulário em tempo real e exibe o aviso assim que o critério é identificado. Não tem como esquecer: o alerta aparece antes de qualquer dado ser salvo.',
  },
  {
    titulo: 'Chat com IA especializada',
    desc: 'IA com documentação técnica própria como referência — manuais de análise, tabelas de PE por produto e normas internas. Tire dúvidas sobre comportamento físico-químico, interpretação de resultados ou procedimentos sem sair do sistema.',
  },
  {
    titulo: 'Dashboard: qualidade em tempo real',
    desc: 'Visão geral por período — KPIs de total, desvios de PE, aprovação e completagem. O scatter PE Real × PE Teórico revela dispersão de processo em cada lote. Filtros por tipo (produto acabado / MP interna) e período (hoje, 7 dias, 30 dias).',
  },
]

function TourAnalise() {
  const [tab, setTab] = useState(0)

  return (
    <section className="bg-[#0f0f0f] py-24 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-5 md:px-8 lg:px-12">
        <div className="text-center mb-12">
          <span className="inline-block text-[11px] font-semibold tracking-[0.2em] uppercase text-[#60a5fa] mb-4">Tour pela interface</span>
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
                  ? 'bg-[#60a5fa]/15 border border-[#60a5fa]/30 text-[#60a5fa]'
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
                <p className="text-[#60a5fa] text-sm font-semibold mb-2">{TABS[tab].num} — {TABS[tab].label}</p>
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
                    className={`rounded-full transition-all ${tab === i ? 'w-4 h-1.5 bg-[#60a5fa]' : 'w-1.5 h-1.5 bg-white/20'}`}
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
                {tab === 0 && <MockupListaAnalise />}
                {tab === 1 && <MockupFormOF />}
                {tab === 2 && <MockupFormAnalise />}
                {tab === 3 && <MockupAlertas />}
                {tab === 4 && <MockupChatIA />}
                {tab === 5 && <MockupDashboard />}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}

// ── Mockup 1: Lista ──────────────────────────────────────────────────────────
function MockupListaAnalise() {
  const rows = [
    { of: '1234-56789', produto: 'Tinta Acrílica Premium', codigo: 'TAP-2024', data: '17/05', analista: 'M. Yaga', resultado: 'aprovado', nota: 98 },
    { of: '1234-56788', produto: 'Solvente Diluente X15', codigo: 'SDX-001', data: '17/05', analista: 'M. Yaga', resultado: 'aprovado', nota: 97 },
    { of: '1234-56785', produto: 'Verniz Poliuretano UV', codigo: 'VPU-003', data: '16/05', analista: 'M. Yaga', resultado: 'quarentena', nota: 95 },
    { of: '1234-56782', produto: 'Primer Epóxi Industrial', codigo: 'PEI-007', data: '15/05', analista: 'M. Yaga', resultado: 'reprovado', nota: 91 },
  ]

  const badgeClasses: Record<string, string> = {
    aprovado: 'bg-emerald-500/15 text-emerald-400',
    reprovado: 'bg-red-500/15 text-red-400',
    quarentena: 'bg-amber-500/10 text-amber-400',
  }
  const badgeLabel: Record<string, string> = {
    aprovado: '✓ Aprovado',
    reprovado: '✕ Reprovado',
    quarentena: '● Quarentena',
  }

  return (
    <div>
      <div className="flex items-center justify-between px-5 py-3 border-b border-white/8 bg-zinc-950">
        <div className="flex items-center gap-2 min-w-0">
          <FlaskConical className="w-4 h-4 text-sky-400 flex-shrink-0" />
          <span className="text-sm font-medium text-zinc-200 flex-shrink-0">Análises</span>
          <span className="text-xs text-zinc-600 hidden sm:inline truncate">/ Controle de Qualidade</span>
        </div>
        <div className="flex items-center gap-2 flex-shrink-0">
          <div className="hidden sm:flex h-7 px-3 rounded-md bg-white/5 border border-white/8 items-center gap-1.5">
            <span className="text-[11px] text-zinc-500">Buscar O.F., produto…</span>
          </div>
          <div className="h-7 px-3 rounded-md bg-sky-600 flex items-center">
            <span className="text-[11px] text-white font-medium">+ Nova análise</span>
          </div>
        </div>
      </div>

      {/* KPI cards */}
      <div className="grid grid-cols-3 gap-0 border-b border-white/8">
        {[
          { label: 'Total (mês)', valor: '247', cor: 'text-sky-400', bg: 'bg-sky-500/5' },
          { label: 'Desvios PE', valor: '12', cor: 'text-amber-400', bg: 'bg-amber-500/5' },
          { label: 'Aprovação', valor: '78,3%', cor: 'text-emerald-400', bg: 'bg-emerald-500/5' },
        ].map((k) => (
          <div key={k.label} className={`${k.bg} px-4 py-3 border-r border-white/5 last:border-0`}>
            <p className="text-[10px] text-zinc-600 uppercase tracking-wider mb-1">{k.label}</p>
            <p className={`text-lg font-semibold tabular-nums ${k.cor}`}>{k.valor}</p>
          </div>
        ))}
      </div>

      {/* Header tabela */}
      <div className="hidden sm:grid grid-cols-12 px-5 py-2 border-b border-white/5 bg-zinc-950/60">
        {[['col-span-2', 'O.F.'], ['col-span-4', 'Produto'], ['col-span-2', 'Data'], ['col-span-3', 'Resultado'], ['col-span-1', 'Nota']].map(([cls, h]) => (
          <span key={h} className={`${cls} text-[10px] text-zinc-600 uppercase tracking-wider`}>{h}</span>
        ))}
      </div>

      {rows.map((r, i) => (
        <div key={i} className="px-5 py-3.5 border-b border-white/5 hover:bg-white/[0.02] transition-colors">
          {/* Mobile layout */}
          <div className="flex items-start justify-between gap-3 sm:hidden">
            <div>
              <p className="text-sm text-zinc-200">{r.produto}</p>
              <p className="text-[11px] text-zinc-600 mt-0.5">{r.of} · {r.data}</p>
            </div>
            <span className={`px-2 py-0.5 rounded-full text-[10px] font-semibold flex-shrink-0 ${badgeClasses[r.resultado]}`}>
              {badgeLabel[r.resultado]}
            </span>
          </div>

          {/* Desktop layout */}
          <div className="hidden sm:grid grid-cols-12 items-center">
            <span className="col-span-2 text-xs text-zinc-500 font-mono">{r.of}</span>
            <div className="col-span-4 flex items-center gap-2">
              <FlaskConical className="w-3.5 h-3.5 text-zinc-600 flex-shrink-0" />
              <span className="text-sm text-zinc-200 truncate">{r.produto}</span>
            </div>
            <span className="col-span-2 text-xs text-zinc-500">{r.data}</span>
            <div className="col-span-3">
              <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-semibold ${badgeClasses[r.resultado]}`}>
                {badgeLabel[r.resultado]}
              </span>
            </div>
            <span className={`col-span-1 text-sm font-semibold ${r.nota >= 97 ? 'text-emerald-400' : r.nota >= 95 ? 'text-amber-400' : 'text-red-400'}`}>
              {r.nota}
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}

// ── Mockup 2: O.F. e Pesagem ─────────────────────────────────────────────────
function MockupFormOF() {
  return (
    <div className="p-5 space-y-4">
      {/* Card O.F. */}
      <div className="rounded-xl border border-sky-900/40 bg-sky-400/5 p-4">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-5 h-5 rounded bg-sky-400/10 flex items-center justify-center">
            <FileText className="w-3 h-3 text-sky-400" />
          </div>
          <p className="text-[11px] text-sky-400 uppercase tracking-wider font-semibold">Dados da O.F.</p>
        </div>
        <div className="grid grid-cols-2 gap-3 mb-3">
          {[['Nº O.F.', '1234-56789'], ['Lote', '250517-A']].map(([label, val]) => (
            <div key={label}>
              <p className="text-[10px] text-zinc-600 mb-1">{label} <span className="text-sky-400">*</span></p>
              <div className="px-2.5 py-1.5 rounded-md bg-zinc-800 border border-zinc-700 text-xs text-zinc-200">{val}</div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-3">
          {[['Produto', 'Tinta Acrílica Premium'], ['Analista', 'M. Yaga']].map(([label, val]) => (
            <div key={label}>
              <p className="text-[10px] text-zinc-600 mb-1">{label}</p>
              <div className="px-2.5 py-1.5 rounded-md bg-zinc-800 border border-zinc-700 text-xs text-zinc-200">{val}</div>
            </div>
          ))}
        </div>
        <div className="mt-3">
          <p className="text-[10px] text-zinc-600 mb-1">Tipo de análise</p>
          <div className="px-2.5 py-1.5 rounded-md bg-zinc-800 border border-zinc-700 text-xs text-zinc-200">Produto Acabado</div>
        </div>
      </div>

      {/* Card Pesagem */}
      <div className="rounded-xl border border-violet-900/40 bg-violet-400/5 p-4">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-5 h-5 rounded bg-violet-400/10 flex items-center justify-center">
            <BarChart3 className="w-3 h-3 text-violet-400" />
          </div>
          <p className="text-[11px] text-violet-400 uppercase tracking-wider font-semibold">Pesagem</p>
        </div>
        <div className="grid grid-cols-3 gap-3 mb-3">
          {[['Pesagem total (kg)', '1.250,40'], ['Tara do tacho (kg)', '320,00'], ['Pesagem anotada', '930,00']].map(([label, val]) => (
            <div key={label}>
              <p className="text-[10px] text-zinc-600 mb-1">{label}</p>
              <div className="px-2.5 py-1.5 rounded-md bg-zinc-800 border border-zinc-700 text-xs text-zinc-200">{val}</div>
            </div>
          ))}
        </div>
        {/* Calculados */}
        <div className="grid grid-cols-3 gap-3 pt-3 border-t border-white/5">
          {[
            ['Líquido conf. (kg)', '930,40', false],
            ['Desvio (kg)', '+0,40', false],
            ['Desvio (%)', '+0,04%', true],
          ].map(([label, val, isOk]) => (
            <div key={label as string}>
              <p className="text-[10px] text-zinc-600 mb-1">{label as string}</p>
              <div className="px-2.5 py-1.5 rounded-md bg-zinc-900 border border-zinc-800 text-xs text-zinc-500 flex items-center justify-between">
                <span>{val as string}</span>
                {isOk && <span className="text-[9px] px-1.5 py-0.5 rounded bg-emerald-500/15 text-emerald-400">ok</span>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ── Mockup 3: Análise e Resultado ─────────────────────────────────────────────
function MockupFormAnalise() {
  return (
    <div className="p-5 space-y-4">
      {/* Card Análise */}
      <div className="rounded-xl border border-white/8 bg-zinc-900 p-4">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-5 h-5 rounded bg-white/5 flex items-center justify-center">
            <FlaskConical className="w-3 h-3 text-zinc-400" />
          </div>
          <p className="text-[11px] text-zinc-400 uppercase tracking-wider font-semibold">Análise</p>
        </div>
        <div className="grid grid-cols-2 gap-3 mb-3">
          {[['Copo Ford (nº)', '4'], ['Tempo (segundos)', '128'], ['Temperatura (°C)', '25,0'], ['PE real (g/cm³)', '1,412']].map(([label, val]) => (
            <div key={label}>
              <p className="text-[10px] text-zinc-600 mb-1">{label}</p>
              <div className="px-2.5 py-1.5 rounded-md bg-zinc-800 border border-zinc-700 text-xs text-zinc-200">{val}</div>
            </div>
          ))}
        </div>
        {/* PE comparação */}
        <div className="flex items-center gap-3 pt-3 border-t border-white/5">
          <div className="flex-1">
            <p className="text-[10px] text-zinc-600 mb-1">PE teórico</p>
            <div className="px-2.5 py-1.5 rounded-md bg-zinc-900 border border-zinc-800 text-xs text-zinc-500">1,408</div>
          </div>
          <div className="flex-1">
            <p className="text-[10px] text-zinc-600 mb-1">Variação PE</p>
            <div className="px-2.5 py-1.5 rounded-md bg-zinc-900 border border-zinc-800 text-xs text-emerald-400 flex items-center gap-1.5">
              <Check className="w-3 h-3" /> +0,004
            </div>
          </div>
        </div>
      </div>

      {/* Card Resultado */}
      <div className="rounded-xl border border-emerald-900/40 bg-emerald-500/5 p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded bg-emerald-500/10 flex items-center justify-center">
              <Check className="w-3 h-3 text-emerald-400" />
            </div>
            <p className="text-[11px] text-emerald-400 uppercase tracking-wider font-semibold">Liberação</p>
          </div>
          <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-emerald-500/15 text-emerald-400">✓ Aprovado</span>
        </div>
        <div className="grid grid-cols-3 gap-3">
          <div>
            <p className="text-[10px] text-zinc-600 mb-1">Nota</p>
            <div className="px-2.5 py-1.5 rounded-md bg-zinc-800 border border-zinc-700 text-xs font-semibold text-emerald-400">98 / 100</div>
          </div>
          <div>
            <p className="text-[10px] text-zinc-600 mb-1">Data liberação</p>
            <div className="px-2.5 py-1.5 rounded-md bg-zinc-900 border border-zinc-800 text-xs text-zinc-500 flex items-center gap-1">
              <Clock className="w-2.5 h-2.5" /> 17/05/2025
            </div>
          </div>
          <div>
            <p className="text-[10px] text-zinc-600 mb-1">Hora</p>
            <div className="px-2.5 py-1.5 rounded-md bg-zinc-900 border border-zinc-800 text-xs text-zinc-500">14:32</div>
          </div>
        </div>
        <p className="text-[10px] text-zinc-700 mt-3">Data e hora preenchidas automaticamente ao marcar como concluída</p>
      </div>
    </div>
  )
}

// ── Mockup 4: Alertas ────────────────────────────────────────────────────────
function MockupAlertas() {
  const alertasAtivos = [
    { criterio: 'produto', valor: 'Tinta Acrílica Premium', msg: 'Produto crítico — verificar viscosidade com especificação revisada v2.1', hora: '14:28' },
    { criterio: 'cliente', valor: 'Distribuidora Central', msg: 'Cliente com exigência de PE mínimo 1,410 — confirmar antes de liberar', hora: '14:28' },
  ]
  const alertasConfig = [
    { criterio: 'produto', valor: 'Tinta Acrílica Premium', msg: 'Produto crítico — verificar viscosidade com especificação revisada v2.1' },
    { criterio: 'cliente', valor: 'Distribuidora Central', msg: 'Cliente com exigência de PE mínimo 1,410' },
    { criterio: 'codigo', valor: 'TAP-2024 v2', msg: 'Nova versão — comparar PE com lotes anteriores' },
  ]

  return (
    <div>
      {/* Toolbar */}
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/8 bg-zinc-950">
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
          <span className="text-xs text-zinc-400">Tinta Acrílica Premium <span className="text-zinc-600 ml-1">● Rascunho</span></span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="text-[10px] text-amber-400 font-semibold">2 alertas</span>
          <div className="w-5 h-5 rounded-full bg-amber-500/20 border border-amber-500/40 flex items-center justify-center">
            <Bell className="w-3 h-3 text-amber-400" />
          </div>
        </div>
      </div>

      {/* Modal de alerta flutuante */}
      <div className="p-4 space-y-3">
        <p className="text-[10px] text-zinc-600 uppercase tracking-widest mb-1">Alertas disparados agora</p>
        {alertasAtivos.map((a, i) => (
          <div key={i} className="rounded-xl border border-amber-500/25 bg-amber-500/5 p-3">
            <div className="flex items-start justify-between gap-2">
              <div className="flex items-start gap-2.5">
                <div className="w-6 h-6 rounded-lg bg-amber-500/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Bell className="w-3.5 h-3.5 text-amber-400" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-amber-500/15 text-amber-400 font-semibold uppercase">{a.criterio}</span>
                    <span className="text-[10px] text-zinc-500">{a.valor}</span>
                  </div>
                  <p className="text-xs text-zinc-300 leading-snug">{a.msg}</p>
                </div>
              </div>
              <button className="flex-shrink-0">
                <X className="w-3.5 h-3.5 text-zinc-600 hover:text-zinc-400" />
              </button>
            </div>
          </div>
        ))}

        {/* Alertas configurados */}
        <div className="mt-4 pt-3 border-t border-white/5">
          <p className="text-[10px] text-zinc-600 uppercase tracking-widest mb-2">Alertas configurados</p>
          <div className="space-y-1.5">
            {alertasConfig.map((c, i) => (
              <div key={i} className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/[0.02] border border-white/5">
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-500 font-semibold uppercase flex-shrink-0">{c.criterio}</span>
                <span className="text-xs text-zinc-500 flex-shrink-0 font-mono">{c.valor}</span>
                <span className="text-[11px] text-zinc-600 flex-1 min-w-0 truncate">{c.msg}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// ── Mockup 5: Chat com IA ─────────────────────────────────────────────────────
function MockupChatIA() {
  const logoFilter = 'hue-rotate(-90deg) brightness(1.5) drop-shadow(0 0 6px rgba(74,222,128,0.7))'
  const glowShadow = '0 0 0 1px rgba(74,222,128,0.3), 0 0 16px rgba(74,222,128,0.3), 0 4px 16px rgba(0,0,0,0.6)'

  return (
    <div className="relative bg-zinc-950 min-h-[420px]">
      {/* Fundo — tela do sistema (análise aberta) */}
      <div className="p-4 opacity-30 pointer-events-none select-none">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          <span className="text-xs text-zinc-400">Tinta Acrílica Premium · Lote 250517-A</span>
        </div>
        <div className="space-y-2">
          {[['Nº O.F.', '1234-56789'], ['Lote', '250517-A'], ['PE real', '1,412'], ['Viscosidade', '128s']].map(([l, v]) => (
            <div key={l} className="flex items-center gap-3 px-3 py-2 rounded-lg bg-white/5">
              <span className="text-[11px] text-zinc-600 w-24">{l}</span>
              <span className="text-xs text-zinc-400">{v}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Janela do chat */}
      <div
        className="absolute bottom-14 right-3 w-[260px] sm:w-[300px] rounded-2xl border border-zinc-700/60 bg-zinc-900/95 backdrop-blur-xl shadow-2xl flex flex-col overflow-hidden"
        style={{ maxHeight: '340px' }}
      >
        {/* Header */}
        <div className="flex items-center gap-2 px-4 py-2.5 border-b border-zinc-700/60 bg-zinc-800/70 flex-shrink-0">
          <img
            src="/logo_alquimista_ia.svg"
            alt="IA"
            className="h-5 w-auto"
            style={{ filter: logoFilter }}
          />
          <span className="text-xs font-bold tracking-[0.15em] text-zinc-100">ALQUIMISTA</span>
          <span className="ml-auto text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/15 text-emerald-400 font-semibold">IA</span>
        </div>

        {/* Mensagens */}
        <div className="flex-1 overflow-y-auto p-3 space-y-3">
          {/* Mensagem inicial da IA */}
          <div className="flex gap-2">
            <div className="w-5 h-5 rounded-full bg-zinc-800 flex items-center justify-center flex-shrink-0 mt-0.5">
              <img src="/logo_alquimista_ia.svg" alt="" className="h-3.5 w-auto" style={{ filter: logoFilter }} />
            </div>
            <div className="rounded-xl rounded-tl-none bg-zinc-800 px-3 py-2 text-[11px] text-zinc-300 leading-relaxed max-w-[200px]">
              Olá! Posso ajudar com dúvidas técnicas sobre análises, normas ou comportamento físico-químico dos produtos.
            </div>
          </div>

          {/* Pergunta do usuário */}
          <div className="flex justify-end">
            <div className="rounded-xl rounded-tr-none bg-sky-600/25 border border-sky-500/20 px-3 py-2 text-[11px] text-sky-100 leading-relaxed max-w-[200px]">
              Como a temperatura afeta o PE medido? Analisei a 28°C hoje.
            </div>
          </div>

          {/* Resposta da IA */}
          <div className="flex gap-2">
            <div className="w-5 h-5 rounded-full bg-zinc-800 flex items-center justify-center flex-shrink-0 mt-0.5">
              <img src="/logo_alquimista_ia.svg" alt="" className="h-3.5 w-auto" style={{ filter: logoFilter }} />
            </div>
            <div className="rounded-xl rounded-tl-none bg-zinc-800 px-3 py-2 text-[11px] text-zinc-300 leading-relaxed max-w-[210px] space-y-1.5">
              <p>Conforme o manual interno, o PE de tintas acrílicas varia <span className="text-emerald-300 font-medium">≈ −0,002 g/cm³ por °C</span> acima de 25°C.</p>
              <p>A 28°C, corrija: <span className="text-zinc-100 font-mono">PE₂₅ ≈ 1,412 + 0,006 = <span className="text-emerald-300">1,418</span></span></p>
              <p className="text-zinc-500">Ref.: Manual de Análise v3.2, seção 4.1.</p>
            </div>
          </div>
        </div>

        {/* Input */}
        <div className="px-3 py-2.5 border-t border-zinc-700/60 bg-zinc-800/50 flex-shrink-0">
          <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-zinc-700/50 border border-zinc-600/40">
            <span className="text-[11px] text-zinc-600 flex-1">Pergunte sobre análises…</span>
            <div className="w-5 h-5 rounded-lg bg-emerald-500/20 flex items-center justify-center">
              <Sparkles className="w-3 h-3 text-emerald-400" />
            </div>
          </div>
        </div>
      </div>

      {/* Botão flutuante da IA */}
      <button
        className="absolute bottom-3 right-3 w-10 h-10 rounded-full bg-zinc-950 flex items-center justify-center"
        style={{ boxShadow: glowShadow }}
      >
        <img
          src="/logo_alquimista_ia.svg"
          alt="IA"
          className="h-9 w-auto"
          style={{ filter: logoFilter }}
        />
      </button>
    </div>
  )
}

// ── Mockup 6: Histórico ───────────────────────────────────────────────────────
function MockupDashboard() {
  // Scatter: PE Real × PE Teórico (10 pontos fictícios)
  const scatter = [
    { teo: 1.408, real: 1.412 }, { teo: 1.408, real: 1.406 },
    { teo: 1.420, real: 1.418 }, { teo: 1.420, real: 1.425 },
    { teo: 1.395, real: 1.393 }, { teo: 1.395, real: 1.402 },
    { teo: 1.412, real: 1.410 }, { teo: 1.412, real: 1.415 },
    { teo: 1.400, real: 1.398 }, { teo: 1.430, real: 1.435 },
  ]
  const peMin = 1.388, peMax = 1.440
  const W = 200, H = 80
  const toX = (v: number) => ((v - peMin) / (peMax - peMin)) * W
  const toY = (v: number) => H - ((v - peMin) / (peMax - peMin)) * H
  // linha de referência (PE real = PE teórico)
  const refPoints = `${toX(peMin)},${toY(peMin)} ${toX(peMax)},${toY(peMax)}`

  // Barras por dia (últimos 7 dias)
  const barras = [12, 18, 9, 22, 15, 20, 14]
  const dias = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom']
  const maxBar = Math.max(...barras)

  return (
    <div>
      {/* Toolbar */}
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/8 bg-zinc-950">
        <div className="flex items-center gap-2">
          <BarChart3 className="w-4 h-4 text-sky-400" />
          <span className="text-xs text-zinc-300 font-medium">Visão Geral</span>
        </div>
        <div className="flex items-center gap-1">
          {['Hoje', '7 dias', '30 dias'].map((p, i) => (
            <span key={p} className={`text-[10px] px-2 py-0.5 rounded ${i === 1 ? 'bg-sky-500/15 text-sky-400' : 'text-zinc-600'}`}>{p}</span>
          ))}
        </div>
      </div>

      {/* KPI cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 border-b border-white/8">
        {[
          { label: 'Total análises', valor: '247', cor: 'text-sky-400', bg: 'bg-sky-500/5' },
          { label: 'Desvios PE', valor: '12', cor: 'text-amber-400', bg: 'bg-amber-500/5' },
          { label: 'Aprov. nota 100', valor: '78,3%', cor: 'text-emerald-400', bg: 'bg-emerald-500/5' },
          { label: 'Completagem', valor: '23,1%', cor: 'text-violet-400', bg: 'bg-violet-500/5' },
        ].map((k, i) => (
          <div key={k.label} className={`${k.bg} px-4 py-3 border-r border-white/5 last:border-0 ${i >= 2 ? 'border-t border-white/5 sm:border-t-0' : ''}`}>
            <p className="text-[10px] text-zinc-600 uppercase tracking-wider mb-0.5">{k.label}</p>
            <p className={`text-xl font-semibold tabular-nums ${k.cor}`}>{k.valor}</p>
          </div>
        ))}
      </div>

      {/* Gráficos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-0">
        {/* Barras por dia */}
        <div className="p-4 border-r border-white/5">
          <div className="flex items-center gap-2 mb-3">
            <BarChart3 className="w-3.5 h-3.5 text-sky-400" />
            <p className="text-[11px] text-zinc-500 uppercase tracking-wider">Análises por dia</p>
          </div>
          <div className="flex items-end gap-1.5 h-14">
            {barras.map((v, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-1">
                <div
                  className="w-full rounded-sm bg-sky-500/30"
                  style={{ height: `${(v / maxBar) * 48}px` }}
                />
                <span className="text-[8px] text-zinc-700">{dias[i]}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Scatter PE */}
        <div className="p-4">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="w-3.5 h-3.5 text-violet-400" />
            <p className="text-[11px] text-zinc-500 uppercase tracking-wider">PE Real × PE Teórico</p>
          </div>
          <svg viewBox={`-4 -4 ${W + 8} ${H + 8}`} className="w-full h-20">
            {/* Linha de referência */}
            <polyline points={refPoints} stroke="#3f3f46" strokeWidth="1" strokeDasharray="3 3" fill="none" />
            {/* Pontos */}
            {scatter.map((p, i) => {
              const dx = Math.abs(p.real - p.teo)
              const color = dx < 0.005 ? '#34d399' : dx < 0.012 ? '#fbbf24' : '#fb7185'
              return <circle key={i} cx={toX(p.teo)} cy={toY(p.real)} r="3.5" fill={color} fillOpacity="0.8" />
            })}
          </svg>
          <div className="flex items-center gap-3 mt-1">
            {[['#34d399', 'dentro'], ['#fbbf24', 'atenção'], ['#fb7185', 'NC']].map(([c, l]) => (
              <div key={l} className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full" style={{ background: c }} />
                <span className="text-[9px] text-zinc-600">{l}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── DESTAQUES ────────────────────────────────────────────────────────────────
function DestaqueAnalise() {
  const destaques = [
    {
      icone: <Zap className="w-5 h-5" />,
      titulo: 'Cálculos automáticos',
      desc: 'Líquido de conferência, desvio percentual e variação de PE calculados em tempo real — sem margem de erro manual.',
      cor: '#60a5fa',
    },
    {
      icone: <History className="w-5 h-5" />,
      titulo: 'Rastreabilidade total',
      desc: 'Quem aprovou, quando, com qual nota — imutável após concluída. Histórico completo por produto acessível a qualquer momento.',
      cor: '#34d399',
    },
    {
      icone: <Bell className="w-5 h-5" />,
      titulo: 'Alertas configuráveis',
      desc: 'Configure alertas por produto, cliente ou código — o sistema monitora o formulário em tempo real e exibe o aviso assim que o critério é identificado, antes de qualquer dado ser salvo.',
      cor: '#a78bfa',
    },
    {
      icone: <Sparkles className="w-5 h-5" />,
      titulo: 'Chat com IA especializada',
      desc: 'IA com documentação técnica própria como referência — manuais internos, tabelas de PE e normas. Responde sobre comportamento físico-químico, correções de temperatura e procedimentos sem sair do sistema.',
      cor: '#fbbf24',
    },
  ]

  return (
    <section className="bg-[#131318] py-24">
      <div className="max-w-[1280px] mx-auto px-5 md:px-8 lg:px-12">
        <div className="text-center mb-16">
          <span className="inline-block text-[11px] font-semibold tracking-[0.2em] uppercase text-[#60a5fa] mb-4">Diferenciais</span>
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
              className="rounded-2xl bg-[#1c1c22] border border-white/8 p-6"
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
function EcossistemaAnalise() {
  return (
    <section className="bg-[#0f0f0f] py-24">
      <div className="max-w-[1280px] mx-auto px-5 md:px-8 lg:px-12">
        <div className="max-w-[600px] mx-auto text-center">
          <span className="inline-block text-[11px] font-semibold tracking-[0.2em] uppercase text-[#6366f1] mb-4">Ecossistema Alquimista</span>
          <h2 className="font-display text-3xl md:text-4xl text-zinc-100 leading-tight mb-6">
            Um módulo de um sistema maior.
          </h2>
          <p className="text-zinc-400 leading-relaxed mb-8">
            O Análise Lab é um módulo do ecossistema Alquimista — plataforma construída para a indústria química. O mesmo produto que tem histórico de análises e rastreabilidade de lotes faz parte de um sistema maior, que conecta laboratório, processos e documentação técnica.
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
