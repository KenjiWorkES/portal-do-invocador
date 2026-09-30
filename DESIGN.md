---
name: Portal do Invocador
description: Design System Hextech Dark Fantasy para o portal institucional comemorativo e educativo de League of Legends
colors:
  abyss: "#040911"
  surface: "#0A1428"
  surface-hover: "#0F1D38"
  surface-card: "#091428"
  gold-primary: "#C8AA6E"
  gold-light: "#F0E6D2"
  gold-dark: "#785A28"
  magic-cyan: "#0AC8B9"
  text-primary: "#F0E6D2"
  text-secondary: "#A09B8C"
  text-muted: "#9A958A"
  success: "#2DEB90"
  danger: "#E84057"
typography:
  display:
    fontFamily: "Cinzel, Georgia, serif"
    fontSize: "56px"
    fontWeight: 700
    lineHeight: "110%"
    letterSpacing: "0.05em"
  h1:
    fontFamily: "Cinzel, Georgia, serif"
    fontSize: "40px"
    fontWeight: 600
    lineHeight: "120%"
  h2:
    fontFamily: "Cinzel, Georgia, serif"
    fontSize: "28px"
    fontWeight: 600
    lineHeight: "130%"
  h3:
    fontFamily: "Cinzel, Georgia, serif"
    fontSize: "20px"
    fontWeight: 500
    lineHeight: "140%"
  body:
    fontFamily: "Inter, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: "155%"
rounded:
  sm: "2px"
  md: "4px"
  pill: "999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  2xl: "48px"
  3xl: "64px"
  4xl: "80px"
components:
  button-primary:
    backgroundColor: "{colors.gold-primary}"
    textColor: "{colors.abyss}"
    rounded: "{rounded.sm}"
    padding: "12px 24px"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.gold-light}"
    rounded: "{rounded.sm}"
    padding: "12px 24px"
---

# Design System — Portal do Invocador

## Overview
O Portal do Invocador utiliza o universo estético **Hextech / Runeterra Dark Fantasy**, combinando a imponência dos metais nobres de Piltover e Shurima com a profundidade mística e abissal das lendas de Runeterra. O sistema foi construído sem dependências de frameworks, garantindo semântica nativa, acessibilidade WCAG AA e clareza didática para manutenção por jovens desenvolvedores.

## Colors
* **Fundo Abissal (`#040911`):** Tom quase preto com matiz azulada de alta profundidade, simulando a atmosfera mística de Runeterra.
* **Superfície de Cartões (`#0A1428`):** Azul ardósia profundo para painéis, cartões e barra de navegação.
* **Ouro Hextech (`#C8AA6E` / `#F0E6D2` / `#785A28`):** O elemento metálico característico. Usado em bordas chanfradas, botões de ação e títulos monumentais.
* **Azul Mágico Hextech (`#0AC8B9`):** Acento pontual para indicar estados ativos, links correntes e tags especiais.

## Typography
* **Títulos e Brasões:** Fonte **Cinzel** (Google Fonts). Transmite nobreza, antiguidade e prestígio institucional com proporções de caixa alta lapidares.
* **Corpo e Dados:** Fonte **Inter** (Google Fonts). Garante legibilidade técnica e escaneabilidade ágil em parágrafos longos, formulários e metadados de campeões.

## Layout
* **Grid Desktop:** Base de 1440px com container centralizado de 1200px (12 colunas, margens de 120px e gutter de 24px).
* **Grid Tablet & Mobile:** Transição fluida para 8 e 4 colunas com navegação drawer lateral expansível.

## Elevation & Depth
* Elevação em camadas escuras com sombras direcionais (`0 6px 16px rgba(0, 0, 0, 0.55)`).
* Ausência de halos difusos ou borrões sem direção (zero-offset glow), priorizando bordas nítidas de 1px a 2px que reproduzem o acabamento chanfrado da forja de Runeterra.

## Shapes
* Cantos chanfrados (*chamfered corners*) com recortes angulares (`clip-path: polygon(...)`) em cartões, botões e controles, reforçando a assinatura arquitetônica Hextech.

## Components
1. **Header / Navbar:** Sticky com 80px de altura, superfície semitransparente com blur, brasão dourado e indicador de página ativa.
2. **Hero Carousel:** 3 slides panorâmicos com vinhetas escuras laterais e controles manuais/automáticos com pausa ao hover.
3. **Hextech Card:** Componente base modular com 3 variantes:
   - `Champion Card`: Retrato vertical com splash art oficial, gradiente de leitura e badges de classe e região.
   - `Region Card`: Banner paisagem com brasão e lema da região.
   - `GameMode Card`: Layout split horizontal com mapa e especificações de regras.
4. **Accordion FAQ:** Sanfona acessível com controle via `aria-expanded` e animação fluida por `grid-template-rows`.
5. **Formulário de Contato:** Validação semântica em tempo real e feedback por toast de confirmação.

## Do's and Don'ts
* **DO:** Use sempre o gradiente dourado e bordas chanfradas para criar profundidade em cartões e botões.
* **DO:** Mantenha o texto secundário com contraste superior a 4.5:1 em relação ao fundo escuro.
* **DON'T:** Não use sombras de neon coloridas com zero offset (halos difusos).
* **DON'T:** Não utilize gradientes lineares como preenchimento de texto (`background-clip: text`), priorizando solidez tipográfica e legibilidade.
