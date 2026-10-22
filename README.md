# Portal do Invocador

Site institucional comemorativo e educativo dedicado aos **15 anos de história de League of Legends** (de 2009 aos dias atuais), desenvolvido com foco nos fundamentos da web e estética inspirada no universo **Hextech / Dark Fantasy** de Runeterra.

---

## Tecnologias Utilizadas

- **HTML5 Semântico:** Arquitetura Multi-Page Application (MPA) com 6 páginas independentes e acessíveis.
- **CSS3 Modular & Design Tokens:** Estilização customizada com variáveis CSS (Custom Properties), layout responsivo (Grid/Flexbox) e estética Hextech.
- **JavaScript (Vanilla ES6+):** Manipulação de DOM sem frameworks externos, consumo assíncrono de dados (`fetch`), filtros dinâmicos, carrossel interativo, validação de formulários e FAQ acessível (`aria-expanded`).
- **Vite 6:** Servidor de desenvolvimento com Hot Module Replacement (HMR) e empacotador para build de produção Multi-Page.
- **Figma & Design Tokens (W3C):** Especificação de tokens (`tokens.json` e `theme.json`) compatível com Tokens Studio e Figma Variables.

---

## Como Iniciar o Ambiente de Desenvolvimento

### Pré-requisitos

- [Node.js](https://nodejs.org/) (versão 18 ou superior recomendada)
- Gerenciador de pacotes `npm` (incluído com o Node.js)

### Passo a Passo

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/KenjiWorkES/portal-do-invocador.git
   cd portal-do-invocador
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```
   O servidor abrirá automaticamente no navegador (por padrão em `http://localhost:5173/src/pages/index.html`). Qualquer acesso à raiz `/` é redirecionado automaticamente para `/src/pages/index.html`.

### Outros Scripts Disponíveis

- **Gerar build de produção:**
  ```bash
  npm run build
  ```
  Compila e minifica as páginas e assets na pasta `dist/`.

- **Visualizar build de produção localmente:**
  ```bash
  npm run preview
  ```

---

## Estrutura de Pastas

```text
portal-do-invocador/
├── public/                       # Arquivos estáticos servidos diretamente na raiz
│   └── data/
│       └── champions.json        # Base de dados JSON com catálogo de campeões
│
├── src/                          # Código-fonte principal da aplicação
│   ├── css/
│   │   ├── components.css        # Variáveis de tema (tokens), reset e estilos de componentes
│   │   └── responsive.css        # Media queries para Desktop, Tablet e Mobile
│   ├── js/
│   │   ├── carousel.js           # Lógica de transição, autoplay e controles do Hero Carousel
│   │   ├── champions.js          # Fetch de champions.json, busca por texto e filtro por classe
│   │   ├── contact.js            # Validação de formulário em tempo real e feedback (toast)
│   │   ├── faq.js                # Comportamento de acordeão acessível no FAQ
│   │   └── nav.js                # Controle do menu mobile e estado ativo da navegação
│   └── pages/
│       ├── index.html            # 1. Início (Home: Hero Carousel, KPIs e história de 2009)
│       ├── timeline.html         # 2. Linha do Tempo (Marcos históricos de 2009 ao presente)
│       ├── regions.html          # 3. Regiões de Runeterra (Catálogo das 10 regiões e conflitos)
│       ├── champions.html        # 4. Campeões (Catálogo dinâmico com busca e filtros)
│       ├── modes.html            # 5. Modos de Jogo (Summoner's Rift, ARAM, Arena 2v2, etc.)
│       └── contact.html          # 6. Suporte & Contato (Formulário validado e FAQ)
│
├── figma/                        # Recursos e especificações de Design System
│   ├── FIGMA_GUIDE.md            # Guia de importação de tokens e construção no Figma
│   ├── canvas-preview.html       # Visualizador interativo de tokens e componentes
│   ├── theme.json                # Definições de tema visual
│   └── tokens.json               # Design Tokens no padrão W3C / Tokens Studio
│
├── docs/                         # Documentação técnica, especificações e planos
│   └── superpowers/
│       ├── plans/                # Planos de implementação
│       └── specs/                # Especificações arquiteturais e de design
│
├── CONTEXT.md                    # Contexto geral e objetivos pedagógicos do projeto
├── DESIGN.md                     # Documentação do Design System Hextech
├── PRODUCT.md                    # Especificação de produto
├── vite.config.js                # Configuração Multi-Page Application (MPA) do Vite
└── package.json                  # Dependências e scripts npm
```

---

## Ambientes e Fluxo de Branches (Vercel)

| Ambiente | Branch | URL (Vercel) | Finalidade |
| :--- | :--- | :--- | :--- |
| **Produção** | `main` | [https://portal-do-invocador.vercel.app/](https://portal-do-invocador.vercel.app/) | Código principal e estável em produção |
| **Pré-Deploy (Staging)** | `staging` | [https://staging-portal-do-invocador.vercel.app/](https://staging-portal-do-invocador.vercel.app/) | Homologação e validação pré-release |
| **Desenvolvimento** | `develop` | [https://develop-portal-do-invocador.vercel.app/](https://develop-portal-do-invocador.vercel.app/) | Integração contínua de novas funcionalidades |

---

## Design & Protótipo (Figma)

- **Arquivo no Figma:** [Portal do Invocador — Design System & Telas](https://www.figma.com/design/tflksBAGmcZSgKw2lCCvc1/Portal-do-Invocador?node-id=2-2126&t=P6S6nilkxfllTv2l-0)


