import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowLeft, Upload, FileSpreadsheet,
  ChevronLeft, ChevronRight, TrendingUp,
  MessageSquare, History, Zap, Sparkles,
  LayoutDashboard, Check, LineChart, X,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { Navbar } from '../../components/layout/Navbar'
import { Footer } from '../../components/layout/Footer'

export function DestiladorPage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#0f0f0f]">
        <HeroDestilador />
        <NarrativaDestilador />
        <TourDestilador />
        <DestaqueDestilador />
        <EcossistemaDestilador />
      </main>
      <Footer />
    </>
  )
}

// ─── HERO ────────────────────────────────────────────────────────────────────
function HeroDestilador() {
  return (
    <section className="relative bg-[#0f0f0f] pt-32 pb-24 overflow-hidden">
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#a78bfa]/5 blur-3xl" />
      <img src="/hexagon_honeycomb.svg" aria-hidden draggable={false} className="pointer-events-none select-none absolute right-0 top-1/2 -translate-y-1/2 h-[110%] w-auto opacity-[0.07]" />
      <div className="relative z-10 max-w-[1280px] mx-auto px-5 md:px-8 lg:px-12">
        <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }}>
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-300 transition-colors mb-10">
            <ArrowLeft className="w-4 h-4" />
            Voltar ao portfólio
          </Link>
        </motion.div>
        <div className="max-w-[760px]">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.1 }} className="mb-6">
            <span className="px-3 py-1 rounded-full text-[11px] font-semibold tracking-[0.15em] uppercase border border-[#a78bfa]/30 text-[#a78bfa] bg-[#a78bfa]/10">
              Módulo · Ecossistema Alquimista
            </span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="font-display text-4xl md:text-5xl lg:text-6xl text-zinc-100 leading-tight mb-6">
            Destilador
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} className="text-lg text-zinc-400 leading-relaxed mb-8 max-w-[620px]">
            Transforma qualquer relatório exportado do ERP em dashboards interativos e inteligência conversacional, sem conexão direta ao banco, sem planilhas manuais.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }} className="flex flex-wrap gap-2">
            {['Importação', 'Dashboards', 'IA Conversacional', 'Multi-ERP', 'Histórico'].map(tag => (
              <span key={tag} className="px-3 py-1 rounded-md bg-white/5 border border-white/8 text-[12px] font-medium text-zinc-400">{tag}</span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// ─── NARRATIVA ───────────────────────────────────────────────────────────────
function NarrativaDestilador() {
  const dores = [
    'Relatórios do ERP chegam como planilhas brutas: colunas com códigos internos, datas inconsistentes, sem visualização nenhuma',
    'Qualquer análise exige horas de PROCV, tabelas dinâmicas e copiar/colar entre arquivos diferentes',
    'Cada mês gera um arquivo novo: sem consolidação histórica, comparar períodos vira trabalho manual',
    'Perguntas simples como "quanto vendemos para X em abril?" exigem abrir arquivo, filtrar, somar e conferir',
  ]

  return (
    <section className="bg-[#131318] py-24 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-5 md:px-8 lg:px-12">

        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="max-w-[760px] mx-auto text-center mb-20"
        >
          <span className="inline-block text-[11px] font-semibold tracking-[0.2em] uppercase text-[#a78bfa] mb-4">O contexto</span>
          <h2 className="font-display text-3xl md:text-4xl text-zinc-100 leading-tight mb-6">
            O ERP guarda os dados. Mas não entrega a resposta.
          </h2>
          <p className="text-zinc-400 leading-relaxed mb-4">
            Todo ERP exporta relatórios. Vendas, compras, estoque, caixa, produção: os dados estão lá. O problema é que chegam como planilhas planas, cheias de códigos internos, colunas sem nome claro e formatos inconsistentes entre versões.
          </p>
          <p className="text-zinc-400 leading-relaxed">
            Para transformar isso em decisão, alguém precisa dedicar tempo a limpeza, formatação e construção de tabelas dinâmicas. <span className="text-zinc-200 font-medium">O mesmo processo, todo mês, para cada relatório diferente.</span>
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-[11px] font-semibold tracking-[0.2em] uppercase text-[#a78bfa] mb-4">O problema</span>
            <h2 className="font-display text-3xl md:text-4xl text-zinc-100 leading-tight mb-6">
              Dado bruto não é inteligência.
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
            className="relative rounded-2xl border border-white/8 overflow-visible"
            style={{ filter: 'brightness(0.75)' }}
          >
            <div className="rounded-2xl overflow-hidden">
              <PlanilhaERP />
            </div>
            <X className="absolute -top-4 -right-4 w-10 h-10 text-red-500" strokeWidth={4} />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// ─── PLANILHA ERP MOCKUP ─────────────────────────────────────────────────────
function PlanilhaERP() {
  const cols = ['DATA_MOV', 'NOM_CLI', 'COD_CLI', 'DES_PRO', 'QTD', 'VAL_UNI', 'VAL_TOT', 'COND_PGT']
  const rows = [
    ['01/05/2025', 'DIST CENTRAL LTDA', '3423', 'TINTA ACRILICA PREMIUM 18L', '24', '87.50', '2100.00', '30/60/90'],
    ['2025-05-03', 'DIST CENTRAL', '3423', 'Tin. Acril. Prem. 18L', '12', '87,5', '1050', 'A VISTA'],
    ['05/05/2025', 'TINTAS BRASIL COM', '8871', 'SOLVENTE DILUENTE X15 5L', '36', '22.80', '820.80', '28 DD'],
    ['2025-05-06', 'Tintas Brasil', '8871', 'SOLV X15 5L', '', '22,80', '0', '28'],
    ['08/05/2025', 'QUIMICOS DO SUL', '1102', 'VERNIZ PU UV 3.6L', '8', '134.00', '1072.00', '30/60'],
    ['10/05/2025', 'DIST CENTRAL LTDA', '3423', 'PRIMER EPOXI INDL 18L', '18', '112.00', '2016,00', '30/60/90'],
    ['12/05/2025', 'DIST NORTE SA', '5519', '', '30', '87.50', '2625.00', '30 DD'],
    ['2025-05-15', 'QUIMICOS DO SUL', '1102', 'TINTA ACRILICA PREMIUM 18L', '15', '87,50', '1312.50', '30/60'],
    ['15/05/2025', 'REVENDAS ALPHA', '2201', 'ESMALTE SINT. BRANCO 3.6L', '48', '45.00', '2160.00', '30 DD'],
    ['2025-05-16', 'Revendas Alpha', '2201', 'ESMALTE SINTETICO BR 3,6L', '12', '45,00', '540', '30'],
    ['19/05/2025', 'CONSTRULAR MATERIAIS', '6634', 'MASSA CORRIDA PVA 25KG', '60', '38.90', '2334.00', '28/56'],
    ['19/05/2025', 'CONSTRULAR MAT', '6634', 'Massa Corrida PVA', '20', '38.90', '778,00', '28/56'],
    ['20/05/2025', 'DIST CENTRAL LTDA', '3423', 'TINTA ACRILICA PREMIUM 18L', '36', '87.50', '3150.00', '30/60/90'],
    ['2025-05-21', 'TINTAS BRASIL', '8871', 'VERNIZ PU UV 3.6L', '10', '134,00', '1340.00', '28 DD'],
    ['22/05/2025', 'QUIMICOS DO SUL', '1102', 'SOLVENTE DILUENTE X15 5L', '24', '22.80', '547.20', '30/60'],
    ['22/05/2025', 'QUIMICOS SUL', '1102', 'SOLV. X-15 5L', '12', '22.80', '273,60', '30/60'],
    ['23/05/2025', 'REVENDAS ALPHA', '2201', 'PRIMER EPOXI INDL 18L', '9', '112.00', '1008.00', '30 DD'],
    ['2025-05-24', 'DIST NORTE SA', '5519', 'TINTA ACRILICA PREMIUM 18L', '18', '87,50', '1575.00', '30 DD'],
    ['26/05/2025', 'CONSTRULAR MATERIAIS', '6634', 'ESMALTE SINT. BRANCO 3.6L', '36', '45.00', '1620.00', '28/56'],
    ['26/05/2025', 'CONSTRULAR', '6634', 'esmalte branco 3.6', '12', '45,00', '540,00', '28/56'],
    ['27/05/2025', 'DIST CENTRAL LTDA', '3423', '', '48', '87.50', '4200.00', '30/60/90'],
    ['2025-05-28', 'TINTAS BRASIL COM', '8871', 'MASSA CORRIDA PVA 25KG', '', '38.90', '0', '28 DD'],
    ['29/05/2025', 'QUIMICOS DO SUL', '1102', 'VERNIZ PU UV 3.6L', '6', '134.00', '804.00', '30/60'],
    ['29/05/2025', 'REVENDAS ALPHA', '2201', 'TINTA ACRILICA PREM 18L', '24', '87,50', '2100,00', '30 DD'],
    ['30/05/2025', 'DIST NORTE SA', '5519', 'PRIMER EPÓXI INDL 18L', '15', '112.00', '1680.00', '30 DD'],
    ['2025-05-30', 'DIST NORTE', '5519', 'Primer Epoxi 18L', '5', '112,00', '560.00', '30'],
    ['31/05/2025', 'CONSTRULAR MATERIAIS', '6634', 'SOLVENTE DILUENTE X15 5L', '72', '22.80', '1641.60', '28/56'],
    ['31/05/2025', 'CONSTRULAR MAT.', '6634', 'SOLV X15', '24', '22,80', '547,20', '28/56'],
  ]

  const cellClass = (r: number, c: number): string => {
    if (c === 3 && rows[r][3] === '') return 'bg-red-200/60 text-red-800'
    if (c === 4 && rows[r][4] === '') return 'bg-red-200/60 text-red-800'
    if (c === 0 && rows[r][0].startsWith('2025-')) return 'bg-amber-100/80 text-amber-800'
    if (c === 5 && rows[r][5].includes(',')) return 'bg-amber-100/80 text-amber-800'
    if (c === 6 && rows[r][6] === '0') return 'bg-red-200/60 text-red-800'
    if (c === 6 && rows[r][6].includes(',')) return 'bg-amber-100/80 text-amber-800'
    if (c === 7 && rows[r][7] === '28' || c === 7 && rows[r][7] === '30') return 'bg-amber-100/80 text-amber-800'
    return ''
  }

  return (
    <div className="bg-white text-[#1e293b] text-[11px] font-mono select-none flex flex-col" style={{ maxHeight: '480px' }}>
      <div className="bg-[#217346] px-3 py-1.5 flex items-center gap-2 flex-shrink-0">
        <div className="flex gap-1">
          <div className="w-2.5 h-2.5 rounded-full bg-white/30" />
          <div className="w-2.5 h-2.5 rounded-full bg-white/30" />
          <div className="w-2.5 h-2.5 rounded-full bg-white/30" />
        </div>
        <span className="text-[10px] text-white/80 font-sans">RELATORIO_VENDAS_MAIO_2025_v2_FINAL.xlsx</span>
      </div>

      <div className="bg-[#f3f4f6] border-b border-gray-300 px-3 py-1 flex items-center gap-4 flex-shrink-0">
        {['Arquivo', 'Página Inicial', 'Dados', 'Exibir'].map(m => (
          <span key={m} className="text-[10px] font-sans text-gray-500">{m}</span>
        ))}
      </div>

      <div className="bg-white border-b border-gray-200 px-3 py-1 flex items-center gap-2 flex-shrink-0">
        <span className="text-[10px] text-gray-400 font-sans w-6">D4</span>
        <div className="w-px h-3 bg-gray-300" />
        <span className="text-[10px] text-gray-500 font-sans">Tin. Acril. Prem. 18L</span>
      </div>

      <div className="overflow-auto flex-1">
        <table className="border-collapse w-full">
          <thead className="sticky top-0 z-10">
            <tr className="bg-[#f3f4f6]">
              <th className="border border-gray-300 w-6 text-[9px] text-gray-400 font-normal px-1" />
              {cols.map((_, i) => (
                <th key={i} className="border border-gray-300 text-[9px] text-gray-400 font-normal px-2 py-0.5">
                  {String.fromCharCode(65 + i)}
                </th>
              ))}
              <th className="border border-gray-300 text-[9px] text-gray-400 font-normal px-2 py-0.5 opacity-40">I</th>
            </tr>
            <tr className="bg-[#e2e8f0]">
              <td className="border border-gray-300 text-[9px] text-gray-400 text-center px-1">1</td>
              {cols.map(col => (
                <td key={col} className="border border-gray-300 font-sans font-semibold text-[10px] text-gray-700 px-2 py-1 whitespace-nowrap">
                  {col}
                </td>
              ))}
              <td className="border border-gray-300 px-2 text-gray-300 text-[9px]">…</td>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, r) => (
              <tr key={r} className={r % 2 === 0 ? 'bg-white' : 'bg-[#f9fafb]'}>
                <td className="border border-gray-200 text-[9px] text-gray-400 text-center px-1 bg-[#f3f4f6]">{r + 2}</td>
                {row.map((cell, c) => (
                  <td
                    key={c}
                    className={`border border-gray-200 px-2 py-1 whitespace-nowrap font-sans text-[10px] ${cellClass(r, c) || 'text-gray-700'}`}
                  >
                    {cell || <span className="text-gray-300">—</span>}
                  </td>
                ))}
                <td className="border border-gray-200 px-2 text-gray-200 text-[9px]">…</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="bg-[#f3f4f6] border-t border-gray-300 px-3 py-1 flex items-center justify-between flex-shrink-0">
        <div className="flex gap-0">
          {['Mai', 'Abr', 'Mar', 'Fev'].map(m => (
            <span key={m} className={`text-[9px] font-sans px-2 py-0.5 border border-gray-300 ${m === 'Mai' ? 'bg-white text-[#217346] font-medium' : 'bg-[#e2e8f0] text-gray-400'}`}>{m}</span>
          ))}
        </div>
        <span className="text-[9px] font-sans text-gray-400">1.247 linhas</span>
      </div>
    </div>
  )
}

// ─── TOUR ────────────────────────────────────────────────────────────────────
const TABS = [
  { num: '01', label: 'Importação' },
  { num: '02', label: 'Mapeamento' },
  { num: '03', label: 'Dashboard' },
  { num: '04', label: 'Chat com IA' },
  { num: '05', label: 'Histórico' },
]

const TAB_INFO = [
  {
    titulo: 'Qualquer arquivo, qualquer ERP',
    desc: 'Upload de CSV, XLSX, TXT ou PDF exportado de qualquer ERP, sem configuração prévia. O Destilador identifica o arquivo, lê os metadados e pede apenas o nome do relatório, o grupo e o cliente para contextualizar os dados.',
  },
  {
    titulo: 'Mapeamento automático de colunas',
    desc: 'O sistema analisa os headers do arquivo e detecta automaticamente quais colunas representam data, valor, quantidade, produto e cliente. O analista revisa, confirma ou corrige qualquer campo antes da importação ser concluída.',
  },
  {
    titulo: 'Dashboard por categoria, pronto para uso',
    desc: 'Após a importação, os KPIs e gráficos são gerados automaticamente. Pedidos, receita, ticket médio e crescimento calculados sem configuração. O filtro de período atualiza tudo em tempo real com os dados disponíveis.',
  },
  {
    titulo: 'Perguntas em linguagem natural sobre os dados',
    desc: 'A IA Alquimista tem acesso ao contexto dos relatórios importados e responde perguntas sobre clientes, produtos, períodos e comparações em linguagem natural, sem exigir nenhuma fórmula ou filtro manual.',
  },
  {
    titulo: 'Histórico consolidado por grupo',
    desc: 'Cada arquivo importado fica registrado com nome, grupo, número de registros e data. Compare períodos, rastreie importações antigas e volte a qualquer relatório anterior sem abrir planilha nenhuma.',
  },
]

function TourDestilador() {
  const [tab, setTab] = useState(0)

  return (
    <section className="relative bg-[#0f0f0f] py-24 overflow-hidden">
      <img src="/hexagon_honeycomb.svg" aria-hidden draggable={false} className="pointer-events-none select-none absolute left-0 top-1/2 -translate-y-1/2 h-[110%] w-auto opacity-[0.07]" />
      <div className="relative z-10 max-w-[1280px] mx-auto px-5 md:px-8 lg:px-12">
        <div className="text-center mb-12">
          <span className="inline-block text-[11px] font-semibold tracking-[0.2em] uppercase text-[#a78bfa] mb-4">Tour pela interface</span>
          <h2 className="font-display text-3xl md:text-4xl text-zinc-100">Conheça o sistema por dentro.</h2>
        </div>

        <div className="hidden md:flex items-center justify-center gap-2 mb-8">
          {TABS.map((t, i) => (
            <button
              key={i}
              onClick={() => setTab(i)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm transition-all ${
                tab === i
                  ? 'bg-[#a78bfa]/15 border border-[#a78bfa]/30 text-[#a78bfa]'
                  : 'text-zinc-500 hover:text-zinc-300 border border-transparent'
              }`}
            >
              <span className="text-[11px] font-bold opacity-60">{t.num}</span>
              {t.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={tab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-[#a78bfa] text-sm font-semibold mb-2">{TABS[tab].num} — {TABS[tab].label}</p>
                <h3 className="font-display text-2xl md:text-3xl text-zinc-100 leading-snug mb-4">{TAB_INFO[tab].titulo}</h3>
                <p className="text-zinc-400 leading-relaxed text-sm">{TAB_INFO[tab].desc}</p>
              </motion.div>
            </AnimatePresence>

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
                    className={`rounded-full transition-all ${tab === i ? 'w-4 h-1.5 bg-[#a78bfa]' : 'w-1.5 h-1.5 bg-white/20'}`}
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
                {tab === 0 && <MockupImportacao />}
                {tab === 1 && <MockupMapeamento />}
                {tab === 2 && <MockupDashboard />}
                {tab === 3 && <MockupChatIA />}
                {tab === 4 && <MockupHistorico />}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}

// ── Mockup 1: Importação ──────────────────────────────────────────────────────
function MockupImportacao() {
  return (
    <div>
      <div className="flex items-center justify-between px-5 py-3 border-b border-white/8 bg-zinc-950">
        <div className="flex items-center gap-2">
          <Upload className="w-4 h-4 text-violet-400" />
          <span className="text-sm font-medium text-zinc-200">Importar relatório</span>
        </div>
      </div>

      <div className="p-5 space-y-4">
        <div className="rounded-xl border-2 border-dashed border-violet-500/30 bg-violet-500/5 p-5 flex flex-col items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-violet-500/15 flex items-center justify-center">
            <FileSpreadsheet className="w-5 h-5 text-violet-400" />
          </div>
          <div className="text-center w-full min-w-0">
            <p className="text-sm font-medium text-zinc-200 truncate px-2">RELATORIO_VENDAS_MAIO_2025_v2_FINAL.xlsx</p>
            <p className="text-[11px] text-zinc-500 mt-0.5">248 KB · detectado 1.247 registros</p>
          </div>
          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/15 text-emerald-400 flex items-center gap-1">
            <Check className="w-3 h-3" /> arquivo válido
          </span>
        </div>

        <div className="space-y-3">
          <div>
            <p className="text-[10px] text-zinc-600 mb-1">Nome do relatório <span className="text-violet-400">*</span></p>
            <div className="px-3 py-2 rounded-lg bg-zinc-800 border border-zinc-700 text-xs text-zinc-200">Vendas Maio 2025</div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <p className="text-[10px] text-zinc-600 mb-1">Grupo <span className="text-violet-400">*</span></p>
              <div className="px-3 py-2 rounded-lg bg-zinc-800 border border-indigo-500/40 text-xs text-zinc-200 flex items-center justify-between">
                Vendas
                <span className="text-[9px] text-indigo-400">▾</span>
              </div>
            </div>
            <div>
              <p className="text-[10px] text-zinc-600 mb-1">Cliente <span className="text-zinc-700">(opcional)</span></p>
              <div className="px-3 py-2 rounded-lg bg-zinc-800 border border-zinc-700 text-xs text-zinc-200">Distribuidora Central</div>
            </div>
          </div>
        </div>

        <button className="w-full py-2.5 rounded-xl bg-indigo-600 text-sm text-white font-medium flex items-center justify-center gap-2">
          <Zap className="w-4 h-4" />
          Analisar arquivo
        </button>

        <p className="text-[10px] text-zinc-700 text-center">Aceita CSV, XLSX, TXT e PDF de qualquer ERP</p>
      </div>
    </div>
  )
}

// ── Mockup 2: Mapeamento ──────────────────────────────────────────────────────
function MockupMapeamento() {
  const colunas = [
    { nome: 'DATA_MOV', tipo: 'data', status: 'auto', ok: true },
    { nome: 'NOM_CLI', tipo: 'cliente', status: 'auto', ok: true },
    { nome: 'COD_CLI', tipo: 'ignorar', status: 'manual', ok: false },
    { nome: 'DES_PRO', tipo: 'produto', status: 'auto', ok: true },
    { nome: 'QTD', tipo: 'quantidade', status: 'auto', ok: true },
    { nome: 'VAL_UNI', tipo: 'valor unit.', status: 'auto', ok: true },
    { nome: 'VAL_TOT', tipo: 'valor total', status: 'auto', ok: true },
    { nome: 'COND_PGT', tipo: 'ignorar', status: 'manual', ok: false },
  ]

  return (
    <div>
      <div className="flex items-center justify-between px-5 py-3 border-b border-white/8 bg-zinc-950">
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
          <span className="text-sm font-medium text-zinc-200">Confirmar mapeamento</span>
        </div>
        <span className="text-[11px] text-zinc-600">8 colunas detectadas</span>
      </div>

      <div className="px-5 py-3 bg-indigo-500/5 border-b border-indigo-500/15 flex items-center gap-2">
        <Zap className="w-3.5 h-3.5 text-indigo-400 flex-shrink-0" />
        <p className="text-[11px] text-zinc-400">Destilador identificou os campos automaticamente — revise e confirme antes de importar.</p>
      </div>

      <div className="divide-y divide-white/5">
        <div className="hidden sm:grid grid-cols-12 px-5 py-2 bg-zinc-950/60">
          {[['col-span-4', 'Coluna do arquivo'], ['col-span-4', 'Tipo detectado'], ['col-span-2', 'Origem'], ['col-span-2', '']].map(([cls, h]) => (
            <span key={h} className={`${cls} text-[10px] text-zinc-600 uppercase tracking-wider`}>{h}</span>
          ))}
        </div>
        {colunas.map((col, i) => (
          <div key={i} className="px-5 py-2.5 hover:bg-white/[0.02] transition-colors">
            <div className="hidden sm:grid grid-cols-12 items-center">
              <span className="col-span-4 text-xs text-zinc-300 font-mono">{col.nome}</span>
              <div className="col-span-4">
                <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-medium ${
                  col.tipo === 'ignorar' ? 'bg-zinc-800 text-zinc-500' : 'bg-indigo-500/15 text-indigo-300'
                }`}>
                  {col.tipo}
                </span>
              </div>
              <span className="col-span-2 text-[11px] text-zinc-600">{col.status}</span>
              <div className="col-span-2">
                {col.ok
                  ? <Check className="w-3.5 h-3.5 text-emerald-400" />
                  : <span className="text-[10px] text-zinc-600 italic">editar</span>
                }
              </div>
            </div>
            <div className="sm:hidden flex items-center justify-between gap-3">
              <span className="text-xs text-zinc-300 font-mono">{col.nome}</span>
              <span className={`px-2 py-0.5 rounded-full text-[10px] font-medium flex-shrink-0 ${
                col.tipo === 'ignorar' ? 'bg-zinc-800 text-zinc-500' : 'bg-indigo-500/15 text-indigo-300'
              }`}>{col.tipo}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="px-5 py-4 border-t border-white/8 flex items-center justify-between gap-3">
        <span className="text-[11px] text-zinc-600">1.247 registros · grupo Vendas</span>
        <button className="px-4 py-2 rounded-lg bg-indigo-600 text-xs text-white font-medium">
          Confirmar importação
        </button>
      </div>
    </div>
  )
}

// ── Mockup 3: Dashboard ───────────────────────────────────────────────────────
function MockupDashboard() {
  const topClientes = [
    { nome: 'Distribuidora Central', valor: 24564, pct: 100 },
    { nome: 'Tintas Brasil Com.', valor: 18920, pct: 77 },
    { nome: 'Químicos do Sul', valor: 14380, pct: 58 },
    { nome: 'Distribuidora Norte SA', valor: 9870, pct: 40 },
    { nome: 'Colors & Cia', valor: 7210, pct: 29 },
  ]

  return (
    <div>
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/8 bg-zinc-950">
        <div className="flex items-center gap-2">
          <LayoutDashboard className="w-4 h-4 text-indigo-400" />
          <span className="text-xs text-zinc-300 font-medium">Vendas · Maio 2025</span>
        </div>
        <div className="flex items-center gap-1">
          {['Hoje', '7 dias', 'Maio 2025', '30 dias'].map((p, i) => (
            <span key={p} className={`text-[10px] px-2 py-0.5 rounded ${i === 2 ? 'bg-indigo-500/15 text-indigo-400' : 'text-zinc-600'}`}>{p}</span>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 border-b border-white/8">
        {[
          { label: 'Pedidos', valor: '1.247', cor: 'text-indigo-400', bg: 'bg-indigo-500/5' },
          { label: 'Receita', valor: 'R$89.430', cor: 'text-emerald-400', bg: 'bg-emerald-500/5' },
          { label: 'Ticket médio', valor: 'R$71,72', cor: 'text-sky-400', bg: 'bg-sky-500/5' },
          { label: 'Crescimento', valor: '+12,3%', cor: 'text-emerald-400', bg: 'bg-emerald-500/5' },
        ].map((k, i) => (
          <div key={k.label} className={`${k.bg} px-4 py-3 border-r border-white/5 last:border-0 ${i >= 2 ? 'border-t border-white/5 sm:border-t-0' : ''}`}>
            <p className="text-[10px] text-zinc-600 uppercase tracking-wider mb-0.5">{k.label}</p>
            <p className={`text-lg font-semibold tabular-nums ${k.cor}`}>{k.valor}</p>
          </div>
        ))}
      </div>

      <div className="p-4">
        <div className="flex items-center gap-2 mb-4">
          <TrendingUp className="w-3.5 h-3.5 text-indigo-400" />
          <p className="text-[11px] text-zinc-500 uppercase tracking-wider">Top clientes por receita</p>
        </div>
        <div className="space-y-2.5">
          {topClientes.map((c, i) => (
            <div key={i} className="flex items-center gap-3">
              <span className="text-[11px] text-zinc-500 w-4 text-right flex-shrink-0">{i + 1}</span>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[11px] text-zinc-300 truncate">{c.nome}</span>
                  <span className="text-[11px] text-zinc-500 flex-shrink-0 ml-2">R${c.valor.toLocaleString('pt-BR')}</span>
                </div>
                <div className="h-1.5 rounded-full bg-zinc-800 overflow-hidden">
                  <div className="h-full rounded-full bg-indigo-500/60" style={{ width: `${c.pct}%` }} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ── Mockup 4: Chat com IA ─────────────────────────────────────────────────────
function MockupChatIA() {
  const logoFilter = 'hue-rotate(-90deg) brightness(1.5) drop-shadow(0 0 6px rgba(74,222,128,0.7))'
  const glowShadow = '0 0 0 1px rgba(74,222,128,0.3), 0 0 16px rgba(74,222,128,0.3), 0 4px 16px rgba(0,0,0,0.6)'

  return (
    <div className="relative bg-zinc-950 min-h-[420px]">
      <div className="p-4 opacity-25 pointer-events-none select-none">
        <div className="flex items-center gap-2 mb-3">
          <LayoutDashboard className="w-4 h-4 text-indigo-400" />
          <span className="text-xs text-zinc-400">Vendas · Maio 2025 · 1.247 registros</span>
        </div>
        <div className="space-y-2">
          {[['Pedidos', '1.247'], ['Receita', 'R$ 89.430'], ['Ticket médio', 'R$ 71,72'], ['Crescimento', '+12,3%']].map(([l, v]) => (
            <div key={l} className="flex items-center gap-3 px-3 py-2 rounded-lg bg-white/5">
              <span className="text-[11px] text-zinc-600 w-24">{l}</span>
              <span className="text-xs text-zinc-400">{v}</span>
            </div>
          ))}
        </div>
      </div>

      <div
        className="absolute bottom-14 right-3 w-[260px] sm:w-[300px] rounded-2xl border border-zinc-700/60 bg-zinc-900/95 backdrop-blur-xl shadow-2xl flex flex-col overflow-hidden"
        style={{ maxHeight: '340px' }}
      >
        <div className="flex items-center gap-2 px-4 py-2.5 border-b border-zinc-700/60 bg-zinc-800/70 flex-shrink-0">
          <img src="/logo_alquimista_ia.svg" alt="IA" className="h-5 w-auto" style={{ filter: logoFilter }} />
          <span className="text-xs font-bold tracking-[0.15em] text-zinc-100">ALQUIMISTA</span>
          <span className="ml-auto text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/15 text-emerald-400 font-semibold">IA</span>
        </div>

        <div className="flex-1 overflow-y-auto p-3 space-y-3">
          <div className="flex gap-2">
            <div className="w-5 h-5 rounded-full bg-zinc-800 flex items-center justify-center flex-shrink-0 mt-0.5">
              <img src="/logo_alquimista_ia.svg" alt="" className="h-3.5 w-auto" style={{ filter: logoFilter }} />
            </div>
            <div className="rounded-xl rounded-tl-none bg-zinc-800 px-3 py-2 text-[11px] text-zinc-300 leading-relaxed max-w-[200px]">
              Olá! Tenho acesso aos relatórios importados. Pode perguntar sobre vendas, clientes, produtos ou períodos.
            </div>
          </div>

          <div className="flex justify-end">
            <div className="rounded-xl rounded-tr-none bg-indigo-600/25 border border-indigo-500/20 px-3 py-2 text-[11px] text-indigo-100 leading-relaxed max-w-[200px]">
              Qual produto mais vendido para Distribuidora Central em maio?
            </div>
          </div>

          <div className="flex gap-2">
            <div className="w-5 h-5 rounded-full bg-zinc-800 flex items-center justify-center flex-shrink-0 mt-0.5">
              <img src="/logo_alquimista_ia.svg" alt="" className="h-3.5 w-auto" style={{ filter: logoFilter }} />
            </div>
            <div className="rounded-xl rounded-tl-none bg-zinc-800 px-3 py-2 text-[11px] text-zinc-300 leading-relaxed max-w-[210px] space-y-1.5">
              <p>Com base em <span className="text-zinc-100 font-medium">Vendas Maio 2025</span>:</p>
              <p><span className="text-emerald-300 font-medium">Tinta Acrílica Premium</span> — 342 un. · R$ 24.564</p>
              <p className="text-zinc-500">27,4% do volume deste cliente no período.</p>
            </div>
          </div>
        </div>

        <div className="px-3 py-2.5 border-t border-zinc-700/60 bg-zinc-800/50 flex-shrink-0">
          <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-zinc-700/50 border border-zinc-600/40">
            <span className="text-[11px] text-zinc-600 flex-1">Pergunte sobre seus dados…</span>
            <div className="w-5 h-5 rounded-lg bg-emerald-500/20 flex items-center justify-center">
              <Sparkles className="w-3 h-3 text-emerald-400" />
            </div>
          </div>
        </div>
      </div>

      <button
        className="absolute bottom-3 right-3 w-10 h-10 rounded-full bg-zinc-950 flex items-center justify-center"
        style={{ boxShadow: glowShadow }}
      >
        <img src="/logo_alquimista_ia.svg" alt="IA" className="h-9 w-auto" style={{ filter: logoFilter }} />
      </button>
    </div>
  )
}

// ── Mockup 5: Histórico ───────────────────────────────────────────────────────
function MockupHistorico() {
  const relatorios = [
    { nome: 'Vendas Maio 2025', grupo: 'Vendas', cor: 'indigo', registros: '1.247', data: '17/05', cliente: 'Distribuidora Central' },
    { nome: 'Compras Abril 2025', grupo: 'Compras', cor: 'amber', registros: '892', data: '02/05', cliente: '—' },
    { nome: 'Estoque Abril 2025', grupo: 'Estoque', cor: 'sky', registros: '3.421', data: '30/04', cliente: '—' },
    { nome: 'Vendas Abril 2025', grupo: 'Vendas', cor: 'indigo', registros: '1.103', data: '01/05', cliente: 'Distribuidora Central' },
    { nome: 'Caixa Março 2025', grupo: 'Caixa', cor: 'emerald', registros: '156', data: '02/04', cliente: '—' },
  ]

  const grupoCor: Record<string, string> = {
    indigo: 'bg-indigo-500/15 text-indigo-400',
    amber: 'bg-amber-500/10 text-amber-400',
    sky: 'bg-sky-500/15 text-sky-400',
    emerald: 'bg-emerald-500/15 text-emerald-400',
  }

  return (
    <div>
      <div className="flex items-center justify-between px-5 py-3 border-b border-white/8 bg-zinc-950">
        <div className="flex items-center gap-2">
          <History className="w-4 h-4 text-violet-400" />
          <span className="text-sm font-medium text-zinc-200">Relatórios importados</span>
        </div>
        <div className="hidden sm:flex h-7 px-3 rounded-md bg-white/5 border border-white/8 items-center gap-1.5">
          <span className="text-[11px] text-zinc-500">Todos os grupos</span>
          <span className="text-[11px] text-zinc-600">▾</span>
        </div>
      </div>

      <div className="hidden sm:grid grid-cols-12 px-5 py-2 border-b border-white/5 bg-zinc-950/60">
        {[['col-span-4', 'Relatório'], ['col-span-2', 'Grupo'], ['col-span-2', 'Registros'], ['col-span-2', 'Data'], ['col-span-2', 'Cliente']].map(([cls, h]) => (
          <span key={h} className={`${cls} text-[10px] text-zinc-600 uppercase tracking-wider`}>{h}</span>
        ))}
      </div>

      {relatorios.map((r, i) => (
        <div key={i} className="px-5 py-3.5 border-b border-white/5 hover:bg-white/[0.02] transition-colors">
          <div className="sm:hidden flex items-start justify-between gap-3">
            <div>
              <p className="text-sm text-zinc-200">{r.nome}</p>
              <p className="text-[11px] text-zinc-600 mt-0.5">{r.registros} reg. · {r.data}</p>
            </div>
            <span className={`px-2 py-0.5 rounded-full text-[10px] font-semibold flex-shrink-0 ${grupoCor[r.cor]}`}>
              {r.grupo}
            </span>
          </div>
          <div className="hidden sm:grid grid-cols-12 items-center">
            <div className="col-span-4 flex items-center gap-2">
              <FileSpreadsheet className="w-3.5 h-3.5 text-zinc-600 flex-shrink-0" />
              <span className="text-sm text-zinc-200 truncate">{r.nome}</span>
            </div>
            <div className="col-span-2">
              <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-semibold ${grupoCor[r.cor]}`}>
                {r.grupo}
              </span>
            </div>
            <span className="col-span-2 text-xs text-zinc-500 tabular-nums">{r.registros}</span>
            <span className="col-span-2 text-xs text-zinc-500">{r.data}</span>
            <span className="col-span-2 text-xs text-zinc-600 truncate">{r.cliente}</span>
          </div>
        </div>
      ))}
    </div>
  )
}

// ─── DESTAQUES ────────────────────────────────────────────────────────────────
function DestaqueDestilador() {
  const destaques = [
    {
      icone: <Upload className="w-5 h-5" />,
      titulo: 'Importação universal',
      desc: 'CSV, XLSX, TXT ou PDF de qualquer ERP, sem integração, sem configuração, sem precisar de acesso ao banco de dados.',
      cor: '#a78bfa',
    },
    {
      icone: <LayoutDashboard className="w-5 h-5" />,
      titulo: 'Dashboards automáticos',
      desc: 'KPIs calculados e gráficos gerados logo após a confirmação do mapeamento. Nenhuma fórmula, nenhuma tabela dinâmica para montar.',
      cor: '#6366f1',
    },
    {
      icone: <MessageSquare className="w-5 h-5" />,
      titulo: 'IA conversacional',
      desc: 'Perguntas em linguagem natural sobre os dados importados: clientes, produtos, períodos, comparações. Sem filtro manual, sem PROCV.',
      cor: '#34d399',
    },
    {
      icone: <LineChart className="w-5 h-5" />,
      titulo: 'Histórico consolidado',
      desc: 'Cada importação fica registrada. Compare períodos, rastreie tendências e volte a qualquer relatório anterior sem abrir planilha nenhuma.',
      cor: '#fbbf24',
    },
  ]

  return (
    <section className="bg-[#131318] py-24">
      <div className="max-w-[1280px] mx-auto px-5 md:px-8 lg:px-12">
        <div className="text-center mb-16">
          <span className="inline-block text-[11px] font-semibold tracking-[0.2em] uppercase text-[#a78bfa] mb-4">Diferenciais</span>
          <h2 className="font-display text-3xl md:text-4xl text-zinc-100">O que torna o sistema útil.</h2>
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
function EcossistemaDestilador() {
  return (
    <section className="relative bg-[#0f0f0f] py-24 overflow-hidden">
      <img src="/hexagon_honeycomb.svg" aria-hidden draggable={false} className="pointer-events-none select-none absolute right-0 top-1/2 -translate-y-1/2 h-[110%] w-auto opacity-[0.07]" />
      <div className="relative z-10 max-w-[1280px] mx-auto px-5 md:px-8 lg:px-12">
        <div className="max-w-[600px] mx-auto text-center">
          <span className="inline-block text-[11px] font-semibold tracking-[0.2em] uppercase text-[#6366f1] mb-4">Ecossistema Alquimista</span>
          <h2 className="font-display text-3xl md:text-4xl text-zinc-100 leading-tight mb-6">
            Um módulo de um sistema maior.
          </h2>
          <p className="text-zinc-400 leading-relaxed mb-8">
            O Destilador é um módulo do ecossistema Alquimista, construído para a indústria química. O mesmo produto que passa por controle de qualidade no Análise Lab e tem sua FDS gerida no FDS Digital aparece aqui nos relatórios comerciais. Da produção à análise, os dados estão conectados.
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
