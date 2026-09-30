# Guia de Construção do Projeto no Figma — Portal do Invocador

Este guia fornece as instruções exatas para você ou seu jovem aprendiz montarem o arquivo completo no **Figma**, utilizando os tokens e componentes definidos para o **Portal do Invocador**.

---

## 1. Importando os Tokens de Design no Figma

O arquivo `figma/tokens.json` contém todas as variáveis de cores, tipografia, espaçamento e sombras no padrão oficial da W3C / Tokens Studio.

### Opção A: Usando o Plugin *Tokens Studio for Figma* (Recomendado)
1. No Figma, abra um novo arquivo chamado **Portal do Invocador - Design System**.
2. Abra o plugin **Tokens Studio for Figma** (disponível na comunidade do Figma).
3. Clique em **Settings / Tools > Load from File** e selecione o arquivo `figma/tokens.json`.
4. Clique em **Apply to Document** para que o plugin gere automaticamente todas as *Color Styles*, *Text Styles* e *Variables* no seu arquivo do Figma.

### Opção B: Criação Manual de *Figma Variables* (Nativo)
Se preferir criar nativamente na aba de Variáveis locais do Figma:
- **Cores Principais:**
  - `color/abyss`: `#040911`
  - `color/surface`: `#0A1428`
  - `color/surface-hover`: `#0F1D38`
  - `color/gold-primary`: `#C8AA6E`
  - `color/gold-light`: `#F0E6D2`
  - `color/gold-dark`: `#785A28`
  - `color/magic-cyan`: `#0AC8B9`
  - `color/text-primary`: `#F0E6D2`
  - `color/text-secondary`: `#A09B8C`
  - `color/text-muted`: `#5B5A56`

---

## 2. Configuração dos Frames Principais (Artboards)

Crie **6 Frames Desktop** lado a lado no seu canvas do Figma:
* **Dimensões:** Largura `1440px`, altura dinâmica (`min-height: 1024px`).
* **Layout Grid:**
  * Colunas: 12
  * Largura do Container: `1200px` (centralizado)
  * Margens Laterais: `120px`
  * Gutter (espaçamento entre colunas): `24px`
* **Preenchimento do Frame:** `#040911` (Abyss Dark).

---

## 3. Especificação dos Componentes Mestre (Master Components)

Crie uma página no Figma chamada `❖ Components`:

### 1. `Header / Navbar`
* **Auto Layout:** Horizontal, largura `1440px`, altura fixa `80px`, padding `0 120px`, alinhamento `Space Between`, verticalmente centralizado.
* **Fundo:** `#0A1428` com `95%` de opacidade e efeito *Background Blur: 16px*.
* **Borda:** Traço inferior de `1px` em `#785A28`.
* **Conteúdo:**
  * Esquerda: Logo com ícone geométrico em SVG dourado + Texto *"PORTAL DO INVOCADOR"* (Cinzel Bold 18px `#F0E6D2`).
  * Centro/Direita: Auto Layout Horizontal (gap `32px`) com os 6 links: *Início*, *Linha do Tempo*, *Regiões*, *Campeões*, *Modos de Jogo*, *Suporte*.
  * Variantes de Link: `Default` (`#A09B8C`), `Hover` (`#F0E6D2`), `Active` (`#C8AA6E` com marcador ciano `#0AC8B9` abaixo).

### 2. `Footer / Institutional`
* **Auto Layout:** Vertical, largura `1440px`, padding `64px 120px 32px 120px`, gap `48px`.
* **Fundo:** `#040911`, borda superior `1px` em `#785A28`.
* **Bloco Superior:** Auto Layout Horizontal distribuído em 3 colunas (gap `48px`):
  * Coluna 1 (`360px`): Brasão + Descrição institucional do projeto.
  * Coluna 2 (`360px`): Links do mapa do site em lista vertical (gap `12px`).
  * Coluna 3 (`360px`): Links da comunidade Riot Games, Universe e LoL Esports.
* **Bloco Inferior:** Linha de `1px` em `#785A28` + Texto de aviso legal e copyright (Inter 13px `#5B5A56`).

### 3. `Card / Base (Hextech Card)` com Variantes
* **Auto Layout:** Vertical, cantos com chanfro ou raio de `4px`, borda de `1px` em gradiente dourado (`#785A28` para `#C8AA6E`), fundo `#0A1428`, sombra *Drop Shadow* `0 8px 24px rgba(0,0,0,0.6)`.
* **Propriedade `Variant`:**
  * **`Champion` (`270px × 380px`):** Imagem vertical (aspect 3:4), gradiente linear escuro de baixo para cima, tags de Classe e Região, Nome (Cinzel 22px Semi-Bold) e Alcunha.
  * **`Region` (`370px × 260px`):** Imagem paisagem, brasão dourado em círculo, Nome (Cinzel 22px) e lema em itálico.
  * **`GameMode` (`580px × 240px` split horizontal):** Imagem do mapa à esquerda (40%), badge de status (Permanente / Rotativo / Legado), formato e regras à direita (60%).

### 4. `Hero Carousel` (Home)
* **Frame:** Largura `1200px`, altura `540px`, cantos chanfrados com borda dourada.
* **Camadas:** Imagem de fundo panorâmica, gradiente escuro na lateral esquerda, título monumental (Cinzel 44px), parágrafo e botão CTA Hextech.
* **Controles:** Setas hexagonais nas laterais e traços de paginação na base.

### 5. `Accordion FAQ` (Suporte)
* **Frame:** Largura `800px`, padding `20px 24px`, fundo `#0A1428`, borda `#785A28`.
* **Variantes:** `Collapsed` (com ícone chevron apontando para baixo) e `Expanded` (com divisor dourado, resposta em Inter 15px `#A09B8C` e chevron rotacionado 180°).

---

## 4. Estrutura das 6 Telas no Figma

1. **`01_Home`:** Navbar + Hero Carousel + Faixa KPI (4 métricas) + Split Section 50/50 (História de 2009) + Grid de Destaques (3 cards) + Quote Banner + Footer.
2. **`02_Linha_do_Tempo`:** Navbar + Hero Page Banner + Trilha Vertical de Linha do Tempo (6 marcos históricos alternados) + CTA Banner + Footer.
3. **`03_Regioes`:** Navbar + Hero Page Banner + Destaque do Mapa de Runeterra + Grid 3×3 de Regiões (10 territórios) + Seção de Guerras Históricas + Footer.
4. **`04_Campeoes`:** Navbar + Hero Page Banner + Barra de Busca e Filtros de Classe + Grid 4 colunas (30 campeões com splash arts oficiais) + Footer.
5. **`05_Modos_de_Jogo`:** Navbar + Hero Page Banner + Grid Split de Modos Clássicos + Lista com Ícones de Objetivos + Seção Modos Especiais & Legado + Footer.
6. **`06_Contato_Suporte`:** Navbar + Hero Page Banner + Seção Dividida (Formulário à esquerda e Info à direita) + Accordion FAQ (6 itens) + Footer.

---

## 5. Visualizador Interativo: `figma/canvas-preview.html`

Para inspecionar visualmente todos os componentes, paletas e wireframes exatamente como ficariam dispostos em um canvas do Figma, basta abrir o arquivo local:
`portal-do-invocador/figma/canvas-preview.html` no seu navegador!
