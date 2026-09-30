# Especificação de Design: Migração para Vite e Reestruturação do Projeto

**Data:** 30 de Setembro de 2026  
**Status:** Validado e Pronto para Planejamento  
**Projeto:** Portal do Invocador  
**Objetivo:** Integrar o Vite como ferramenta de build e servidor de desenvolvimento, mantendo a proposta pedagógica de Vanilla JavaScript (Multi-Page Application), e reorganizar o projeto na estrutura padrão `src/` e `public/`.

---

## 1. Contexto e Motivação

O **Portal do Invocador** foi construído como um portal estático multi-página composto por 6 páginas HTML, CSS modular e Vanilla JavaScript, com dados de campeões em JSON.
Para melhorar a experiência de desenvolvimento (DX) com Hot Module Reloading / Live Reload rápido, minificação e empacotamento otimizado de produção, estamos introduzindo o **Vite** e reestruturando a base de código sem alterar o design visual, o conteúdo ou o caráter pedagógico do site.

---

## 2. Decisões Arquiteturais

1. **Arquitetura Multi-Página (MPA) com Vite:**
   - As 6 páginas HTML principais permanecem na raiz (`index.html`, `timeline.html`, `regions.html`, `champions.html`, `modes.html`, `contact.html`).
   - Isso garante URLs limpas e navegação direta sem rotas intermediárias.
2. **Separação entre Código-Fonte e Assets Estáticos:**
   - `src/css/`: Contém `theme.css`, `components.css`, `responsive.css`.
   - `src/js/`: Contém `nav.js`, `carousel.js`, `champions.js`, `faq.js`, `contact.js`.
   - `public/data/`: Contém `champions.json`. O Vite serve arquivos de `public/` diretamente na raiz em tempo de execução e os copia intactos para a pasta de distribuição `dist/`.
3. **Módulos ES6 (ESM):**
   - As tags `<script>` nos arquivos HTML utilizam o atributo `type="module"` e apontam para os caminhos absolutos baseados na raiz do projeto (ex: `/src/js/nav.js`).
4. **Links de Estilos nos HTMLs:**
   - As tags `<link rel="stylesheet">` apontam para os caminhos do Vite em `src/` (ex: `/src/css/theme.css`).
5. **Configuração de Build Multi-Página (`vite.config.js`):**
   - Configuração explícita do Rollup com `rollupOptions.input` para empacotar todas as 6 páginas durante a execução de `vite build`.

---

## 3. Estrutura de Arquivos

```text
portal-do-invocador/
├── package.json
├── package-lock.json
├── vite.config.js
│
├── index.html
├── timeline.html
├── regions.html
├── champions.html
├── modes.html
├── contact.html
│
├── public/
│   └── data/
│       └── champions.json
│
├── src/
│   ├── css/
│   │   ├── theme.css
│   │   ├── components.css
│   │   └── responsive.css
│   └── js/
│       ├── nav.js
│       ├── carousel.js
│       ├── champions.js
│       ├── faq.js
│       └── contact.js
│
├── figma/
│   ├── tokens.json
│   ├── FIGMA_GUIDE.md
│   └── canvas-preview.html
│
├── docs/
│   └── superpowers/
│       └── specs/
│           ├── 2026-09-29-portal-do-invocador-design.md
│           └── 2026-09-30-adicionar-vite-e-reestruturacao-design.md
│
├── .gitignore
├── context.md
├── PRODUCT.md
└── DESIGN.md
```

---

## 4. Detalhamento dos Componentes e Arquivos

### 4.1 `package.json`
- Define `"type": "module"`.
- Scripts de execução:
  - `"dev": "vite"`
  - `"build": "vite build"`
  - `"preview": "vite preview"`
- Dependências de desenvolvimento (`devDependencies`):
  - `vite: "^6.0.0"` (ou versão estável mais recente do Vite 6/5).

### 4.2 `.gitignore`
- Adicionar exclusões essenciais:
  - `node_modules/`
  - `dist/`
  - `.DS_Store`
  - Logs (`npm-debug.log*`)

### 4.3 `vite.config.js`
- Mapeia as 6 entradas HTML usando `path.resolve(__dirname, '<arquivo>.html')`.
- Configura o build para emitir na pasta padrão `dist/`.

### 4.4 Atualização dos HTMLs
- Atualizar todas as tags `<link rel="stylesheet" href="...">`:
  - `css/theme.css` $\rightarrow$ `/src/css/theme.css`
  - `css/components.css` $\rightarrow$ `/src/css/components.css`
  - `css/responsive.css` $\rightarrow$ `/src/css/responsive.css`
- Atualizar todas as tags `<script src="...">`:
  - Adicionar `type="module"`
  - `js/nav.js` $\rightarrow$ `/src/js/nav.js`
  - `js/carousel.js` $\rightarrow$ `/src/js/carousel.js`
  - `js/champions.js` $\rightarrow$ `/src/js/champions.js`
  - `js/faq.js` $\rightarrow$ `/src/js/faq.js`
  - `js/contact.js` $\rightarrow$ `/src/js/contact.js`

### 4.5 Atualização de `src/js/champions.js`
- Requisição do JSON atualizada de `fetch('data/champions.json')` para `fetch('/data/champions.json')` para funcionamento consistente na raiz do dev server e na pasta `dist/`.

### 4.6 Atualização de `figma/canvas-preview.html`
- Atualizar os links de estilos relativos de `../css/...` para `../src/css/...` para preservar a funcionalidade de inspeção local.

### 4.7 Atualização da Documentação (`context.md`)
- Atualizar a seção de estrutura de arquivos e o manual de execução com os comandos `npm run dev` e `npm run build`.

---

## 5. Critérios de Sucesso e Verificação

1. **Instalação e Scripts:**
   - `npm install` executa sem erros e gera `package-lock.json`.
   - `npm run build` conclui com sucesso gerando a pasta `dist/` contendo os 6 arquivos `.html`, a pasta `data/champions.json` copiada de `public/` e os bundles otimizados de CSS e JS em `dist/assets/`.
2. **Servidor de Desenvolvimento e Preview:**
   - O comando de desenvolvimento ou preview sobe corretamente.
   - Requisições HTTP às 6 páginas e a `/data/champions.json` retornam código de status 200.
3. **Integridade das Funcionalidades:**
   - Carrossel da Home opera corretamente com autoplay e navegação por setas/dots.
   - Catálogo de Campeões carrega os 30 itens, responde à pesquisa textual e aos filtros por categoria.
   - Sanfona do FAQ expande/recolhe itens com acessibilidade ARIA.
   - Formulário de contato valida campos em tempo real.
