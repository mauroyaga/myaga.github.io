# WORKFLOW.md — Processo de Desenvolvimento Assistido

> Define como o desenvolvimento do portfólio acontece — stack, ferramentas,
> ritmo de trabalho e responsabilidades em cada etapa.

---

## Stack Tecnológico

| Tecnologia | Versão | Papel |
|---|---|---|
| React | 18+ | UI e componentização |
| TypeScript | 5+ | Tipagem estática |
| Tailwind CSS | 3+ | Estilização utility-first |
| Vite | 5+ | Build e dev server |
| React Router | 6+ | Roteamento client-side (SPA) |
| Framer Motion | latest | Micro-animações e transições |
| Geist Variable | via @fontsource-variable/geist | Fonte do ecossistema |
| DM Serif Display | via @fontsource/dm-serif-display | Fonte de display |
| lucide-react | latest | Ícones |

**Sem backend.** O site é 100% estático — sem API, sem servidor, sem banco de dados.

---

## Contato — Canais Diretos

Sem formulário. A seção de contato usa apenas links diretos:

| Canal | Implementação |
|---|---|
| WhatsApp | `https://wa.me/{numero}` com mensagem pré-definida |
| E-mail | `mailto:trefliptech@gmail.com` |
| GitHub | Link para o perfil |
| LinkedIn | Link para o perfil |

---

## Deploy — GitHub Pages

**Hospedagem:** GitHub Pages (repositório do projeto).

**Configurações necessárias:**
- `vite.config.ts`: `base` configurado com o nome do repositório
- React Router: usar `HashRouter` para compatibilidade com GitHub Pages
  (evita 404 em rotas diretas como `/projetos/fds`)
- Build: `vite build` → pasta `dist` → GitHub Actions faz o deploy automático

**GitHub Actions:** workflow de CI/CD que faz build e publica em `gh-pages`
a cada push na branch `main`.

---

## Ritmo de Desenvolvimento

**Abordagem:** Seção por seção — uma seção construída, revisada e aprovada antes
de avançar para a próxima.

**Fluxo de cada sessão:**

```
1. Claude implementa a seção
2. Dev server rodando — visualização no navegador
3. Mauro revisa (visual + conteúdo + responsivo)
4. Ajustes até aprovação
5. Avança para a próxima seção
```

**Ordem de implementação sugerida:**

| Etapa | Entregável |
|---|---|
| 0 | Setup do projeto (Vite + React + TS + Tailwind + Router + fontes) |
| 1 | Componentes base (cores, tipografia, tokens CSS) |
| 2 | Navegação (sticky, responsiva, hambúrguer no mobile) |
| 3 | Hero (100vh, proporção áurea, ilustração, CTA) |
| 4 | Sobre (narrativa, ilustração) |
| 5 | Método / Alquimista (fundo escuro, logo animado, tagline) |
| 6 | Projetos (grid de cards, estados, link para detalhe) |
| 7 | Competências (duas colunas, lista com marcador) |
| 8 | Contato (links diretos, ilustração, footer) |
| 9 | Páginas de detalhe de projeto (template reutilizável × 3) |
| 10 | Responsivo (revisão geral mobile + tablet) |
| 11 | Animações (micro-animações + momento expressivo) |
| 12 | Deploy (GitHub Actions + GitHub Pages) |

---

## Ilustrações

**Quando gerar:** antes ou durante a implementação de cada seção que usa ilustração.

**Como gerar:** Claude (via ferramenta de imagem) ou Midjourney com prompts
baseados no DESIGN.md.

**Prompt base para cada ilustração:**
```
Flat illustration, Alegria style, [contexto da cena],
inclusive personas (diverse gender, ethnicity, body type),
color palette: #60a5fa, #6366f1, #34d399, #fbbf24, #fb7185,
warm accent details in #e07a5f, #ffb997, #f9c74f,
light zinc background #e4e4e7, clean and minimal,
no text, no shadows, vector style
```

**Seções com ilustração:**
| Seção | Persona / Contexto |
|---|---|
| Hero | Profissional em laboratório ou análise de dados |
| Sobre | Bancada + tela — jornada química → tecnologia |
| Contato | Duas personas em conversa, tom leve |
| Cards de projeto | Persona contextualizada por projeto |

---

## Arquivos de Referência

Todos em `docs/referencias/`. Consultados durante todo o desenvolvimento:

| Arquivo | Uso |
|---|---|
| `BRAND.md` | Identidade do ecossistema Alquimista |
| `DESIGN.md` | Paleta, tipografia, ilustrações, animações |
| `CONTENT.md` | Textos, tom de voz, narrativa de cada seção |
| `LAYOUT.md` | Estrutura, proporções, grid, breakpoints |
| `WORKFLOW.md` | Este arquivo — processo e stack |

---

## Convenções de Código

Seguem o padrão do ecossistema Alquimista:

- **Named exports** em todos os componentes (`export function Hero()`)
- **Interface Props** local ao arquivo — nunca `HeroProps` em arquivo separado
- **Sem comentários** exceto quando o porquê não é óbvio
- **Tailwind classes** sempre — sem CSS inline exceto para valores dinâmicos
- **Sem `any`** — `unknown` + narrowing quando o tipo não é conhecido
- Ordem no arquivo: imports externos → imports internos → tipos → constantes → componente

---

## Estrutura de Pastas

```
src/
├── components/
│   ├── layout/         # Navbar, Footer, Layout wrapper
│   ├── sections/       # Hero, Sobre, Metodo, Projetos, Competencias, Contato
│   ├── ui/             # Button, Card, Badge, Tag (componentes reutilizáveis)
│   └── illustrations/  # SVGs e componentes de ilustração
├── pages/
│   ├── HomePage.tsx
│   └── projetos/
│       ├── FDSPage.tsx
│       ├── AnalisePage.tsx
│       └── DestiladorPage.tsx
├── assets/
│   └── illustrations/  # Arquivos de imagem das ilustrações
├── styles/
│   └── index.css       # Tokens CSS, imports de fonte, base styles
└── App.tsx
```
