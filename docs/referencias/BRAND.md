# BRAND.md — Identidade de Marca: Ecossistema Alquimista

## Conceito

O Alquimista carrega a ideia de transformação: usar experiência profissional, análise e
mapeamento de problemas cotidianos de empresa para criar soluções digitais que melhoram a
experiência do usuário e facilitam processos. A inteligência artificial está presente tanto
no desenvolvimento quanto nas próprias soluções.

O nome vem da alquimia — a arte de transformar matéria bruta em algo polido e refinado.
O problema é a matéria bruta; a solução é o produto acabado.

**Tagline:** Analisar. Projetar. Transformar. Com inteligência aplicada.

---

## Posicionamento

**Origem:** Desenvolvido inicialmente para a indústria química de pequeno porte (setor de tintas).
**Escopo:** Posicionamento amplo — qualquer empresa com processos complexos que se beneficiam
de automação e inteligência artificial. A origem nicho não deve limitar as possibilidades.
**Diferencial:** Experiência profissional codificada em solução — não é tecnologia genérica,
é vivência transformada em produto.

---

## Tom e Personalidade

**Técnico e preciso** + **Acessível e humano**

- Demonstra domínio sem ser frio ou distante
- Comunica com clareza, sem jargão desnecessário
- Age como parceiro que entende o problema antes de propor a solução
- Não é corporativo; é artesanal com rigor

---

## Ecossistema de Produtos

| Produto | Descrição | Status |
|---|---|---|
| **Alquimista** | Sistema de gestão para laboratório químico | Ativo |
| **Destilador** | Plataforma de dados e analytics | Ativo |
| *(sem nome definido)* | Sistema de IA para suporte ao desenvolvimento de fórmulas de tinta | Planejado |

---

## Identidade Visual

### Logo

Hexágono *pointy-top* (vértice apontado para cima e para baixo) construído com proporção áurea.
Características:
- Prolongamentos saindo de cada vértice (traços que extrapolam as arestas)
- Juntas circulares em cada vértice: círculo sólido externo + círculo interno da cor do fundo
- Sem preenchimento — apenas stroke e elementos nos vértices
- Stroke uniforme, traço limpo

Arquivos de referência: `logo_alquimista.svg`, `logo_alquimista_ia.svg`

### Paleta de Cores

| Token | Valor | Uso |
|---|---|---|
| **Brand Blue** | `#60a5fa` | Cor principal da marca e do logo |
| **Accent Indigo** | `#6366f1` | Acento de UI — botões, estados ativos, foco |
| **Background Deep** | `#09090b` | Fundo mais escuro |
| **Background Base** | `#0f0f0f` | Fundo padrão de produto |
| **Background Card** | `#131316` / `#141414` | Cards e superfícies elevadas |
| **Text Primary** | `#f4f4f5` | Texto principal |
| **Text Secondary** | `#71717a` | Texto secundário |
| **Text Muted** | `#52525b` | Texto desabilitado / suporte |
| **Semantic Positive** | `#34d399` | Variações positivas, entradas |
| **Semantic Negative** | `#fb7185` | Variações negativas, saídas |
| **Status Estoque** | `#fbbf24` | Alertas de estoque |

> O Brand Blue (`#60a5fa`) é a cor da identidade — está no logo e nos momentos de destaque
> da marca. O Accent Indigo (`#6366f1`) é cor de interface — botões, foco, estado ativo.
> Os dois coexistem mas têm papéis distintos.

### Tipografia

**Fonte:** Geist Variable (variável, sem serifa, anti-aliased)

Aplicação do nome da marca:
- Nome principal: `uppercase` · `font-black` · `tracking-[0.25em]`
- Sub-produto: `uppercase` · `font-semibold` · `tracking-[0.4em]` · opacidade reduzida

### Elementos Decorativos

- **Favo de hexágonos:** padrão SVG (`hexagon_honeycomb_destilador.svg`) em 7% de opacidade,
  posicionado à direita das telas como textura de fundo
- **Glow azul:** `drop-shadow` em `rgba(96, 165, 250, 0.45)` em momentos de destaque do logo
- **Screensaver:** rotação suave (22s linear) + pulsação de escala (4s ease-in-out) do logo,
  sobre gradiente radial `#1a0000 → #080808 → #000`

### Stack Tecnológico de Referência

React + TypeScript + Tailwind CSS + Vite + lucide-react

---

## Convenções de Nomenclatura

- Nome da marca sempre em maiúsculas quando usado como logotipo: **ALQUIMISTA**
- Sub-produtos: **Alquimista [Nome]** — ex: Alquimista Destilador
- Hierarquia visual: nome da marca maior e em destaque + sub-produto menor e esmaecido abaixo
