# Especificação de Design & Arquitetura — Portal do Invocador

**Data:** 29 de Setembro de 2026  
**Projeto:** Portal do Invocador (História e Universo de League of Legends)  
**Status:** Aprovado para Planejamento e Criação no Figma / Código  
**Objetivo Pedagógico:** Site institucional fictício para capacitação prática de um Jovem Aprendiz em manutenção, leitura de código e evolução de interfaces web.

---

## 1. Visão Geral e Objetivos do Produto

O **Portal do Invocador** é um site institucional imersivo dedicado a registrar a trajetória, evolução e mitologia de *League of Legends* desde seu lançamento em 2009 até a atualidade. 

### Principais Objetivos:
1. **Institucional e Histórico:** Servir como portal de referência comemorativo para fãs e novos jogadores explorarem as eras do jogo, suas regiões, campeões icônicos e modos de combate.
2. **Didático para o Jovem Aprendiz:** Prover uma base de código limpa, semântica e sem abstrações complexas de frameworks, permitindo ao aprendiz vivenciar tarefas reais de manutenção web:
   - Edição de estilos centralizados via variáveis CSS (Design Tokens);
   - Atualização de listas dinâmicas via arquivo `JSON`;
   - Manutenção de marcação HTML em páginas multi-página clássicas;
   - Correção e aprimoramento de pequenos scripts interativos em Vanilla JS;
   - Manutenção de acessibilidade e responsividade.
3. **Fidelidade Visual (Impeccable Design):** Utilizar a identidade visual *Hextech / Dark Fantasy* do universo de Runeterra, com especificações prontas para desenhar no Figma e implementar em código.

---

## 2. Arquitetura Técnica & Stack

* **Arquitetura:** Multi-Page Application (MPA) nativa com 6 páginas estáticas independentes.
* **Tecnologias:**
  * **HTML5 Semântico:** `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`.
  * **CSS3 Moderno:** Flexbox, CSS Grid, Media Queries e CSS Custom Properties (Design Tokens).
  * **Vanilla JavaScript (ES6+):** Manipulação direta do DOM, `fetch` de dados locais e escuta de eventos.
  * **Fontes:** Google Fonts (*Cinzel* para títulos e *Inter* para corpo e metadados).
  * **Imagens & Assets:** Links oficiais de alta definição da CDN oficial da Riot Games (*Data Dragon* / `ddragon.leagueoflegends.com`) para evitar peso excessivo no repositório.
* **Dependências de Build:** Nenhuma (zero build step). Executável diretamente em qualquer navegador ou servidor local leve.

---

## 3. Design System & Tokens Visuais (Figma Specification)

### 3.1. Grid & Breakpoints
* **Desktop Frame:** `1440px` (Largura máxima do conteúdo: `1200px` centralizado).
  * 12 colunas, margens laterais de `120px`, gutter (calha) de `24px`.
* **Tablet Frame:** `768px` (Largura do container: `720px`).
  * 8 colunas, margens de `24px`, gutter de `16px`.
* **Mobile Frame:** `375px` ou `390px` (Largura fluida `100%`).
  * 4 colunas, margens de `20px`, gutter de `16px`.

### 3.2. Paleta de Cores (Hextech Design Tokens)

| Token CSS / Variável | Código HEX | Finalidade de Uso |
| :--- | :--- | :--- |
| `--color-abyss` | `#040911` | Fundo principal da página (preto abissal azulado) |
| `--color-surface` | `#0A1428` | Superfície de cartões, painéis, modais e barra de navegação |
| `--color-surface-hover` | `#0F1D38` | Estado hover de cartões e itens interativos |
| `--color-gold-primary` | `#C8AA6E` | Ouro Hextech vibrante: bordas ativas, botões e títulos principais |
| `--color-gold-light` | `#F0E6D2` | Ouro claro marfim: títulos com alta ênfase e ícones ativos |
| `--color-gold-dark` | `#785A28` | Ouro metálico envelhecido: bordas secundárias e divisores sutis |
| `--color-magic-cyan` | `#0AC8B9` | Azul Hextech / Piltôver: badges luminosas, foco e indicadores ativos |
| `--color-text-primary` | `#F0E6D2` | Texto em alta legibilidade e títulos de destaque |
| `--color-text-secondary` | `#A09B8C` | Texto corrido, parágrafos e legendas descritivas |
| `--color-text-muted` | `#5B5A56` | Metadados, datas discretas e notas de rodapé |

### 3.3. Tipografia & Escala

* **Display & Cabeçalhos:** Fonte **Cinzel** (Google Fonts)
  * `Hero Display:` 56px / 700 / line-height: 110% / letter-spacing: +2px (Uppercase)
  * `Heading 1 (H1):` 40px / 600 / line-height: 120% / letter-spacing: +1.5px
  * `Heading 2 (H2):` 28px / 600 / line-height: 130% / letter-spacing: +1px
  * `Heading 3 (H3):` 20px / 500 / line-height: 140%
* **Corpo & Interface:** Fonte **Inter** (Google Fonts)
  * `Body Large:` 18px / 400 / line-height: 160%
  * `Body Default:` 15px / 400 / line-height: 150%
  * `Small / Badges:` 12px / 600 / letter-spacing: +1px (Uppercase)

### 3.4. Superfícies & Efeitos
* **Bordas Chanfradas:** Cantos com leve chanfro e borda linear gradiente de `--color-gold-primary` para `--color-gold-dark`.
* **Glow Hextech:** `box-shadow: 0px 0px 16px rgba(10, 200, 185, 0.25)` em elementos mágicos ativos.
* **Glow Dourado:** `box-shadow: 0px 0px 14px rgba(200, 170, 110, 0.35)` em botões e cartões selecionados.

---

## 4. Catálogo de Componentes Globais & Variantes

### 4.1. Header / Navbar
* Altura: `80px` fixa no Desktop.
* Fundo: Superfície `--color-surface` com 95% de opacidade e `backdrop-filter: blur(12px)`.
* Borda inferior: `1px` em `--color-gold-dark` com detalhe luminoso central.
* Logotipo: Brasão geométrico dourado + texto "PORTAL DO INVOCADOR" em Cinzel.
* Links de navegação:
  1. Início (`index.html`)
  2. Linha do Tempo (`timeline.html`)
  3. Regiões (`regions.html`)
  4. Campeões (`champions.html`)
  5. Modos de Jogo (`modes.html`)
  6. Suporte & Contato (`contact.html`)
* Indicador ativo: Traço luminoso dourado/ciano abaixo da página corrente.
* Mobile: Botão hamburguer e menu lateral deslizante (drawer).

### 4.2. Footer Institucional
* Layout em 3 colunas (`1200px`):
  * **Coluna 1 (Identidade):** Brasão do Portal, texto sobre o projeto e propósito pedagógico.
  * **Coluna 2 (Navegação):** Links rápidos para as 6 páginas institucionais.
  * **Coluna 3 (Recursos Externos):** Links oficiais da Riot Games, Universe e LoL Esports.
* Faixa inferior com copyright e disclaimer legal de projeto de fã não oficial.

### 4.3. Família de Cartões (`Hextech Card`)
* **Base:** Borda dourada chanfrada, fundo `--color-surface`, transição suave no hover (`scale: 1.02` e glow).
* **Variante 1: Champion Card (`270px × 380px`):** Imagem vertical da splash art oficial, gradiente escuro de leitura, badges de Classe e Região, Nome em Cinzel 22px, Alcunha e Ano de estreia.
* **Variante 2: Region Card (`370px × 260px`):** Banner paisagem da região, brasão nobre em círculo dourado, Nome em Cinzel 22px, lema e lista de ícones da região.
* **Variante 3: Game Mode Card (`580px × 240px` split):** Imagem do mapa à esquerda, badge de status (Permanente / Rotativo / Legado), formato (ex: 5v5, 2v2v2v2) e resumo das regras à direita.

### 4.4. Hero Carousel (Exclusivo da Home)
* Container de `560px` de altura com imagem panorâmica, gradiente de proteção lateral, badge de Era histórica, Título em Cinzel 44px, descrição e botão CTA.
* Controles: Setas hexagonais douradas nas laterais e barras de paginação na base.

### 4.5. Accordion FAQ Component (Exclusivo de Contato/Suporte)
* Lista de perguntas expansíveis:
  * Estado Fechado: Pergunta com texto em marfim e ícone chevron dourado.
  * Estado Aberto: Borda iluminada, resposta em Inter 15px e chevron rotacionado 180°.

### 4.6. Barra de Busca e Filtros
* Campo de busca com ícone de lupa dourada à esquerda.
* Grupo de pills para seleção rápida de classes (*Todos, Assassinos, Lutadores, Magos, Atiradores, Suportes, Tanques*).

### 4.7. Banners & Seções Narrativas
* **Hero Page Banner:** Banner padronizado no topo das 5 páginas internas (`340px` de altura).
* **Split Section 50/50:** Seção em zig-zag alternando texto institucional com imagem conceitual emoldurada.
* **KPI / Stats Strip:** Faixa com 4 métricas comemorativas em números gigantes dourados (`160+`, `15+`, `13`, `100M+`).
* **Vertical Timeline Track:** Linha dourada central com nós circulares luminosos e cards históricos alternados.

---

## 5. Estrutura Detalhada das 6 Páginas

### Página 1: Início (`index.html`)
1. **Header Hextech**
2. **Hero Carousel:** 3 slides históricos de alta voltagem visual.
3. **Faixa KPI / Métricas:** Estatísticas comemorativas do ecossistema.
4. **Split Section:** "O Nascimento de um Universo" (A fundação pela Riot Games em 2009).
5. **Grid de Destaques:** 3 cartões de entrada rápida para *Linha do Tempo*, *Regiões* e *Campeões*.
6. **Quote Banner:** Citação de Runeterra com divisores dourados.
7. **Footer Institucional**

### Página 2: Linha do Tempo (`timeline.html`)
1. **Header Hextech**
2. **Hero Page Banner:** "A Trajetória das Eras"
3. **Trilha da Linha do Tempo:** 6 marcos cronológicos chave:
   - *2009:* Lançamento do Beta Oficial e os 40 Campeões Originais.
   - *2011:* O 1º Campeonato Mundial (DreamHack Suécia) e o nascimento dos Esports.
   - *2014:* O Grande Rework do Summoner's Rift (renovação completa de arte e clareza).
   - *2018:* A Era Cultural e Musical (K/DA, paradas globais e novas mídias).
   - *2021:* O Fenômeno Arcane e a consagração narrativa global.
   - *Presente:* A Nova Era Competitiva e expansão contínua.
4. **CTA Banner:** Convidando o visitante a explorar o catálogo de heróis.
5. **Footer Institucional**

### Página 3: Regiões de Runeterra (`regions.html`)
1. **Header Hextech**
2. **Hero Page Banner:** "Territórios e Facções de Runeterra"
3. **Destaque do Mapa:** Visão ampla das terras conhecidas.
4. **Grid de 10 Regiões:**
   - Demacia, Noxus, Ionia, Freljord, Piltover, Zaun, Shurima, Ilhas das Sombras, Monte Targon, Águas de Sentina.
5. **Seção de Conflitos Épicos:** Lista explicativa com ícones das guerras determinantes do lore.
6. **Footer Institucional**

### Página 4: Catálogo de Campeões (`champions.html`)
1. **Header Hextech**
2. **Hero Page Banner:** "O Panteão dos Campeões"
3. **Barra de Busca e Filtros:** Busca por nome em tempo real e filtro por classes.
4. **Grid Dinâmico:** 30 campeões de diferentes épocas e regiões carregados via `champions.json`.
5. **Estado Vazio (Empty State):** Mensagem com brasão quando nenhum campeão coincide com os termos pesquisados.
6. **Footer Institucional**

### Página 5: Modos de Jogo (`modes.html`)
1. **Header Hextech**
2. **Hero Page Banner:** "Campos de Justiça & Arenas de Batalha"
3. **Grid Split de Modos Clássicos:** Summoner's Rift (5v5) e ARAM (Howling Abyss).
4. **Lista de Objetivos:** Explicação com ícones sobre Barão Na'Shor, Dragões e Torres.
5. **Seção de Modos Especiais & Legado:** Arena 2v2v2v2, URF e o memorial do Twisted Treeline (3v3).
6. **Footer Institucional**

### Página 6: Contato & Suporte (`contact.html`)
1. **Header Hextech**
2. **Hero Page Banner:** "Central do Invocador & Atendimento"
3. **Layout Dividido:**
   - *Esquerda:* Formulário de Contato e Sugestão com validação de campos (Nome, E-mail, Tipo de Assunto, Mensagem).
   - *Direita:* Cards com diretrizes de contribuição e informações institucionais.
4. **FAQ Sanfona (Accordion):** 6 perguntas e respostas fundamentais sobre o acervo e o projeto.
5. **Footer Institucional**

---

## 6. Modelo de Dados (`data/champions.json`)

O arquivo conterá 30 campeões selecionados para cobrir todas as classes, regiões e anos:

```json
[
  {
    "id": "ahri",
    "name": "Ahri",
    "title": "A Raposa de Nove Caudas",
    "role": "Mago",
    "region": "Ionia",
    "releaseYear": 2011,
    "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Ahri_0.jpg",
    "quote": "A compaixão humana é uma dádiva que nem todos merecem."
  },
  {
    "id": "garen",
    "name": "Garen",
    "title": "O Poder de Demacia",
    "role": "Lutador",
    "region": "Demacia",
    "releaseYear": 2010,
    "image": "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Garen_0.jpg",
    "quote": "Por Demacia! Pela justiça!"
  }
]
```

---

## 7. Estrutura de Arquivos do Projeto

```
portal-do-invocador/
├── index.html              # Início (Home com Hero Carousel e KPIs)
├── timeline.html           # Linha do Tempo (Marcos históricos 2009-Hoje)
├── regions.html            # Regiões de Runeterra (Grid de facções)
├── champions.html          # Catálogo de Campeões (Filtro e busca dinâmica)
├── modes.html              # Modos de Jogo (Permanentes e Legado)
├── contact.html            # Contato & Suporte (Formulário + FAQ sanfona)
├── css/
│   ├── theme.css           # Tokens, variáveis de cor, fontes e resets
│   ├── components.css      # Header, Footer, Cards, Botões, Banners, Accordion
│   └── responsive.css      # Ajustes de media queries e comportamento mobile
├── js/
│   ├── nav.js              # Menu mobile e indicador de página ativa
│   ├── carousel.js         # Lógica do carrossel da Home
│   ├── champions.js        # Fetch de champions.json, render e filtros
│   ├── faq.js              # Comportamento de sanfona (accordion) acessível
│   └── contact.js          # Validação e feedback visual do formulário
└── data/
    └── champions.json      # Base de dados com 30 campeões
```

---

## 8. Critérios de Sucesso e Verificação

1. **Fidelidade Visual:** Todas as páginas seguem a identidade Hextech (paleta abissal/dourada, tipografia Cinzel/Inter e detalhes chanfrados).
2. **Responsividade:** Navegação funcional e limpa do mobile (375px) ao desktop ultrawide (1440px+).
3. **Interatividade Fluida:**
   - Carrossel da Home alterna slides manual e automaticamente;
   - Busca e filtros da página de campeões filtram instantaneamente os 30 heróis sem recarregar a página;
   - FAQ sanfona abre/fecha com transição limpa e atributos acessíveis (`aria-expanded`).
4. **Didática do Código:** Estrutura clara, arquivos CSS bem comentados e separação de responsabilidades para servir de ambiente de treino para o Jovem Aprendiz.
