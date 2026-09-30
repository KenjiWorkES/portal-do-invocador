# Contexto do Projeto — Portal do Invocador

**Data de Atualização:** 29 de Setembro de 2026  
**Status do Projeto:** Design e Implementação da Fase 1 Concluídos com Sucesso  
**Repositório Git:** Inicializado e versionado  

---

## 1. Visão Geral e Propósito

O **Portal do Invocador** é um site institucional fictício comemorativo e educativo dedicado a contar a história de 15 anos de *League of Legends* (de 2009 aos dias atuais).

### Objetivos Principais:
1. **Ambiente Pedagógico para Jovem Aprendiz:**
   - Servir como uma base de código real para que o jovem aprendiz vivencie a rotina prática de **manutenção de sites**.
   - Foco nos fundamentos da web: marcação semântica em **HTML5**, estilização modular e centralizada em **CSS3** (com variáveis/Design Tokens) e manipulação limpa do DOM com **Vanilla JavaScript**.
   - Zero dependências de build ou frameworks pesados (Node.js/npm), permitindo execução instantânea com qualquer servidor local simples ou abertura direta no navegador.
2. **Qualidade Visual de Alto Nível (Impeccable Design):**
   - Estética inspirada no universo oficial de Runeterra e na tecnologia **Hextech / Dark Fantasy**.
   - Paleta de cores nobres (Azul Abissal, Ouro Hextech e Acento Ciano Mágico) e tipografia clássica (*Cinzel* para títulos e *Inter* para corpo).
3. **Compatibilidade com Figma:**
   - Criação de tokens em formato oficial W3C/Tokens Studio e especificações detalhadas de frames e componentes para reprodução no Figma.

---

## 2. Metodologia e Processos Utilizados

1. **Superpowers (`brainstorming`):**
   - Classificação no caminho **Architectural** (novo projeto multi-página do zero).
   - Alinhamento de escopo e intenções pedagógicas com o usuário.
   - Decisão de arquitetura multi-página tradicional e expansão para 6 páginas independentes.
   - Elaboração e aprovação da especificação técnica e visual em:  
     `docs/superpowers/specs/2026-09-29-portal-do-invocador-design.md`.
2. **Impeccable (`impeccable`):**
   - Registro da verdade de produto em `PRODUCT.md`.
   - Aplicação dos princípios de craft floor: contraste acessível (WCAG AA), sombras com elevação direcional natural, cantos chanfrados (*chamfered corners*) e ausência de efeitos artificiais de IA (halos zero-offset).
   - Validação mecânica com o detector de design de interface do Impeccable.
   - Consolidação do design system em `DESIGN.md`.

---

## 3. Estrutura de Arquivos do Projeto

```
portal-do-invocador/
├── package.json                  # Scripts (dev, build, preview) e dependência do Vite
├── package-lock.json             # Trava de dependências npm
├── vite.config.js                # Configuração do Vite com suporte a Multi-Page App (Rollup inputs)
├── .gitignore                    # Exclusão de node_modules/ e dist/
│
├── PRODUCT.md                    # Especificação oficial do produto (Impeccable)
├── DESIGN.md                     # Tokens e regras do Design System Hextech (Impeccable)
├── CONTEXT.md                    # Este arquivo de contexto consolidado
│
├── index.html                    # 1. Início (Home: Hero Carousel, KPIs, História 2009 e Destaques)
├── timeline.html                 # 2. Linha do Tempo (Trilha histórica vertical de 2009 aos dias atuais)
├── regions.html                  # 3. Regiões (Catálogo das 10 principais regiões e conflitos épicos)
├── champions.html                # 4. Campeões (Catálogo dinâmico com 30 campeões, busca e filtros)
├── modes.html                    # 5. Modos de Jogo (Summoner's Rift, ARAM, Arena 2v2 e Twisted Treeline)
├── contact.html                  # 6. Suporte & Contato (Formulário validado e FAQ sanfona acessível)
│
├── public/                       # Arquivos estáticos servidos diretamente na raiz pelo Vite
│   └── data/
│       └── champions.json        # Banco de dados local com 30 campeões e dados completos
│
├── src/                          # Código-fonte processado pelo Vite
│   ├── css/
│   │   ├── theme.css             # Design tokens (cores, tipografia, reset e utilitários)
│   │   ├── components.css        # Estilos de navbar, footer, cards, banners, formulários e accordion
│   │   └── responsive.css        # Media queries para desktop (1440px), tablet (1024/860px) e mobile (560px)
│   └── js/
│       ├── nav.js                # Controle do menu responsivo e marcação de página ativa
│       ├── carousel.js           # Lógica de transição, autoplay e controles do Hero Carousel
│       ├── champions.js          # Fetch de /data/champions.json, render dinâmico, busca e filtros de classe
│       ├── faq.js                # Comportamento sanfona com acessibilidade aria-expanded
│       └── contact.js            # Validação de formulário em tempo real e toast de confirmação
│
├── figma/
│   ├── tokens.json               # Tokens de cor, tipografia e espaçamento para Tokens Studio / Figma Variables
│   ├── FIGMA_GUIDE.md            # Passo a passo para importar tokens e montar os frames no Figma
│   └── canvas-preview.html       # Visualizador interativo de tokens, componentes mestre e telas
│
└── docs/
    └── superpowers/
        ├── specs/                # Especificações arquiteturais
        └── plans/                # Planos de implementação
```

---

## 4. Resumo das 6 Páginas Desenvolvidas

| Arquivo | Título / Função | Principais Funcionalidades / Componentes |
| :--- | :--- | :--- |
| `index.html` | Início (Home) | Hero Carousel com 3 slides históricos, Faixa KPI (160+ campeões, 15+ anos), Split Section 50/50 com história da fundação da Riot Games em 2009, Grid de 3 pilares e citação épica. |
| `timeline.html` | Linha do Tempo | Trilha cronológica vertical alternada cobrindo 6 marcos: 2009 (Beta), 2011 (1º Mundial), 2014 (Rework de Summoner's Rift), 2018 (K/DA e músicas), 2021 (Arcane) e Presente. |
| `regions.html` | Regiões de Runeterra | Grid panorâmico das 10 regiões clássicas (Demacia, Noxus, Ionia, Freljord, Piltover, Zaun, Shurima, Ilhas das Sombras, Targon, Águas de Sentina) com lemas e campeões, além de seção sobre grandes guerras. |
| `champions.html` | Catálogo de Campeões | Catálogo interativo alimentado por `data/champions.json`. Inclui campo de busca por texto com resposta imediata, barra de pills para filtro por classe (*Assassinos, Lutadores, Magos, Atiradores, Suportes, Tanques*) e tratamento de estado vazio (*empty state*). |
| `modes.html` | Modos de Jogo | Apresentação dos modos permanentes (*Summoner's Rift* e *ARAM*), guia com ícones de objetivos neutros (Barão e Dragões) e memorial de modos rotativos (*Arena 2v2*, *URF* e o clássico *Twisted Treeline 3v3*). |
| `contact.html` | Contato & Suporte | Formulário com validação nativa e visual em JavaScript (verificação de tamanho mínimo de nome, regex de e-mail e mensagem), toast de feedback de envio e *FAQ Sanfona* com 6 itens expansíveis acessíveis via teclado. |

---

## 5. Design Tokens e Universo Visual (Hextech Dark Fantasy)

* **Paleta Principal:**
  * `color/abyss` (`#040911`): Fundo principal escuro profundo.
  * `color/surface` (`#0A1428`): Fundo de cartões, formulários e painéis.
  * `color/gold-primary` (`#C8AA6E`): Ouro Hextech característico.
  * `color/gold-light` (`#F0E6D2`): Ouro claro marfim para títulos e ênfase.
  * `color/gold-dark` (`#785A28`): Ouro envelhecido para divisores e bordas sutis.
  * `color/magic-cyan` (`#0AC8B9`): Azul mágico para foco, estados ativos e energia.
  * `color/text-secondary` (`#A09B8C`): Texto corrido de alta legibilidade.
* **Tipografia:**
  * Títulos: **Cinzel** (Google Fonts) — Proporções nobres e imponentes de caixa alta.
  * Corpo & Dados: **Inter** (Google Fonts) — Escaneabilidade ágil e legibilidade neutra.
* **Forma e Superfície:**
  * Bordas chanfradas (`clip-path: polygon(...)`) em cartões e botões.
  * Sombras com elevação direcional natural (`0 6px 16px rgba(0, 0, 0, 0.55)`), sem halos difusos.

---

## 6. Recursos para o Figma

1. **Tokens Studio / Figma Variables:** O arquivo `figma/tokens.json` pode ser importado diretamente no Figma usando o plugin *Tokens Studio for Figma* (via Settings > Load from File) ou cadastrado manualmente nas variáveis locais.
2. **Guia de Construção:** O arquivo `figma/FIGMA_GUIDE.md` descreve as regras de Auto Layout, alinhamentos, paddings e hierarquia dos componentes mestre e variantes.
3. **Canvas Preview:** O arquivo `figma/canvas-preview.html` pode ser aberto em qualquer navegador para inspecionar os tokens visuais, swatches de cores, escalas tipográficas e os frames desktop lado a lado.

---

## 7. Sugestões de Exercícios de Manutenção para o Jovem Aprendiz

Este projeto foi desenhado intencionalmente com pontos óbvios de manutenção didática:
1. **Adição de Conteúdo (JSON):** Adicionar o 31º campeão ao arquivo `data/champions.json` (ex: Hwei, Smolder ou Briar) e verificar se o card aparece automaticamente com imagem, classe e filtros funcionando.
2. **Ajuste de Estilos Centralizados:** Modificar a cor de destaque ou a fonte secundária em `css/theme.css` e observar o impacto consistente em todas as 6 páginas.
3. **Expansão de Funcionalidades:**
   - Adicionar uma nova pergunta ao FAQ em `contact.html`.
   - Adicionar um filtro de ordenação (ex: ordenar campeões por ano de lançamento ou ordem alfabética) em `js/champions.js`.
4. **Revisão de Responsividade:** Testar as páginas no modo responsivo do DevTools (F12) e criar pequenos ajustes de espaçamento para telas específicas em `css/responsive.css`.

---

## 8. Como Executar o Projeto

Com a integração do **Vite**, o projeto conta com servidor local com Hot Module Reloading (HMR) e pipeline de build otimizado:

1. **Instalar Dependências:**
   ```bash
   npm install
   ```
2. **Servidor de Desenvolvimento (com live reload instantâneo):**
   ```bash
   npm run dev
   ```
   Acesse a URL informada no terminal (geralmente `http://localhost:5173`).
3. **Build de Produção:**
   ```bash
   npm run build
   ```
   Gera a pasta `dist/` com todos os 6 HTMLs e assets minificados.
4. **Visualizar o Build de Produção (Preview):**
   ```bash
   npm run preview
   ```
