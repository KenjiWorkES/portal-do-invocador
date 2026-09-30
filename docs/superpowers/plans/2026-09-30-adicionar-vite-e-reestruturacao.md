# Migração para Vite e Reestruturação do Projeto Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Integrar o Vite como servidor de desenvolvimento e bundler multi-página (MPA) no Portal do Invocador e reorganizar o código-fonte nas pastas `src/` e `public/`.

**Architecture:** O projeto adota a estrutura oficial de Multi-Page App (MPA) do Vite, mantendo as 6 páginas HTML na raiz com URLs limpas, movendo o código modular para `src/css/` e `src/js/`, e os assets e dados JSON estáticos para `public/data/`. O `vite.config.js` mapeia os 6 arquivos HTML como pontos de entrada do Rollup para geração otimizada de produção.

**Tech Stack:** Node.js v22, npm v10, Vite v6 (ou v5), HTML5 semântico, CSS3 (Design Tokens), Vanilla JS (ES Modules).

**Spec:** `docs/superpowers/specs/2026-09-30-adicionar-vite-e-reestruturacao-design.md`

## Global Constraints

- Manter Vanilla JS puro: sem frameworks (React, Vue, etc.) ou bibliotecas de runtime desnecessárias.
- Todas as 6 páginas HTML devem continuar na raiz e acessíveis pelas mesmas URLs relativas (`index.html`, `timeline.html`, `regions.html`, `champions.html`, `modes.html`, `contact.html`).
- Os scripts nos HTMLs devem utilizar `type="module"` e apontar para caminhos baseados na raiz (`/src/js/...`).
- As folhas de estilo devem apontar para os caminhos baseados na raiz (`/src/css/...`).
- O arquivo `data/champions.json` deve ser servido a partir de `public/data/champions.json` e acessado via `fetch('/data/champions.json')`.
- O build de produção gerado por `npm run build` deve produzir todas as 6 páginas funcionais na pasta `dist/`.

## Review Focus

- O carregamento de `data/champions.json` no catálogo de campeões falhar caso o caminho não coincida entre dev e build: deve responder 200 em ambos os ambientes.
- O build do Vite omitir páginas secundárias se não estiverem explícitas no `rollupOptions.input`: as 6 páginas devem existir em `dist/`.
- O visualizador `figma/canvas-preview.html` quebrar por caminhos de CSS inexistentes: deve apontar para `../src/css/`.
- Faltar `type="module"` nos scripts HTML, impedindo o Vite de processá-los ou causando erros de módulo: todas as tags `<script>` devem ter `type="module"`.
- O `.gitignore` deixar vazar a pasta `node_modules/` ou `dist/` para o repositório git: o `.gitignore` deve ignorar ambos.

---

### Task 1: Configurar `package.json`, `.gitignore` e Instalar o Vite

**Files:**
- Create: `package.json`
- Create: `.gitignore`

**Interfaces:**
- Produz: scripts `npm run dev`, `npm run build`, `npm run preview` e o binário `vite` instalado em `node_modules/.bin/vite`.

- [ ] **Step 1: Criar o `.gitignore`**
Adicionar `node_modules/`, `dist/`, `.DS_Store` e arquivos de log.

- [ ] **Step 2: Criar o `package.json`**
Definir `"type": "module"`, scripts `"dev": "vite"`, `"build": "vite build"`, `"preview": "vite preview"`, e `"devDependencies": { "vite": "^6.0.0" }`.

- [ ] **Step 3: Instalar as dependências via npm**
Executar: `npm install`
Esperado: Instalação bem-sucedida e geração de `package-lock.json`.

- [ ] **Step 4: Verificar a instalação do Vite**
Executar: `npx vite --version`
Esperado: Exibir a versão instalada do Vite (ex: `vite/6.x.x` ou `vite/5.x.x`).

- [ ] **Step 5: Commit**
```bash
git add package.json package-lock.json .gitignore
git commit -m "chore: inicializar package.json com vite e criar gitignore"
```

---

### Task 2: Reorganizar a Estrutura de Diretórios (`src/` e `public/`)

**Files:**
- Move: `css/*` $\rightarrow$ `src/css/*`
- Move: `js/*` $\rightarrow$ `src/js/*`
- Move: `data/champions.json` $\rightarrow$ `public/data/champions.json`

**Interfaces:**
- Consome: arquivos existentes em `css/`, `js/` e `data/`.
- Produz: diretórios `src/css/`, `src/js/` e `public/data/champions.json`.

- [ ] **Step 1: Criar os novos diretórios de destino**
Criar `src/css`, `src/js` e `public/data`.

- [ ] **Step 2: Mover os arquivos de CSS para `src/css/`**
Mover `css/theme.css`, `css/components.css`, `css/responsive.css` para `src/css/` e remover a pasta `css/` vazia.

- [ ] **Step 3: Mover os arquivos de JS para `src/js/`**
Mover `js/nav.js`, `js/carousel.js`, `js/champions.js`, `js/faq.js`, `js/contact.js` para `src/js/` e remover a pasta `js/` vazia.

- [ ] **Step 4: Mover `data/champions.json` para `public/data/`**
Mover `data/champions.json` para `public/data/champions.json` e remover a pasta `data/` vazia.

- [ ] **Step 5: Verificar que os arquivos estão em suas novas posições**
Listar `src/css`, `src/js` e `public/data`.

- [ ] **Step 6: Commit**
```bash
git add src/ public/
git commit -m "refactor: mover css e js para src e data para public"
```

---

### Task 3: Criar a Configuração do Vite (`vite.config.js`)

**Files:**
- Create: `vite.config.js`

**Interfaces:**
- Consome: caminhos dos 6 arquivos HTML (`index.html`, `timeline.html`, `regions.html`, `champions.html`, `modes.html`, `contact.html`).
- Produz: configuração do Vite com Rollup inputs mapeados para empacotar todas as 6 páginas.

- [ ] **Step 1: Escrever `vite.config.js`**
Criar `vite.config.js` com o seguinte conteúdo:
```javascript
import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  root: '.',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        timeline: resolve(__dirname, 'timeline.html'),
        regions: resolve(__dirname, 'regions.html'),
        champions: resolve(__dirname, 'champions.html'),
        modes: resolve(__dirname, 'modes.html'),
        contact: resolve(__dirname, 'contact.html')
      }
    }
  }
});
```

- [ ] **Step 2: Verificar a sintaxe do arquivo de configuração**
Executar: `node -e "import('./vite.config.js')"`
Esperado: Saída sem erros.

- [ ] **Step 3: Commit**
```bash
git add vite.config.js
git commit -m "feat: adicionar configuracao mpa no vite.config.js"
```

---

### Task 4: Atualizar Referências de CSS e Scripts nos Arquivos HTML

**Files:**
- Modify: `index.html`
- Modify: `timeline.html`
- Modify: `regions.html`
- Modify: `champions.html`
- Modify: `modes.html`
- Modify: `contact.html`
- Modify: `figma/canvas-preview.html`

**Interfaces:**
- Consome: arquivos em `src/css/` e `src/js/`.
- Produz: páginas HTML com `<link rel="stylesheet" href="/src/css/...">` e `<script type="module" src="/src/js/...">`.

- [ ] **Step 1: Atualizar `index.html`**
Substituir links `css/` por `/src/css/` e scripts `js/` por `<script type="module" src="/src/js/nav.js"></script>` e `<script type="module" src="/src/js/carousel.js"></script>`.

- [ ] **Step 2: Atualizar `timeline.html`**
Substituir links `css/` por `/src/css/` e script `js/nav.js` por `<script type="module" src="/src/js/nav.js"></script>`.

- [ ] **Step 3: Atualizar `regions.html`**
Substituir links `css/` por `/src/css/` e script `js/nav.js` por `<script type="module" src="/src/js/nav.js"></script>`.

- [ ] **Step 4: Atualizar `champions.html`**
Substituir links `css/` por `/src/css/` e scripts `js/` por `<script type="module" src="/src/js/nav.js"></script>` e `<script type="module" src="/src/js/champions.js"></script>`.

- [ ] **Step 5: Atualizar `modes.html`**
Substituir links `css/` por `/src/css/` e script `js/nav.js` por `<script type="module" src="/src/js/nav.js"></script>`.

- [ ] **Step 6: Atualizar `contact.html`**
Substituir links `css/` por `/src/css/` e scripts `js/` por `<script type="module" src="/src/js/nav.js"></script>`, `<script type="module" src="/src/js/faq.js"></script>` e `<script type="module" src="/src/js/contact.js"></script>`.

- [ ] **Step 7: Atualizar `figma/canvas-preview.html`**
Substituir links `../css/` por `../src/css/`.

- [ ] **Step 8: Verificar que nenhum HTML ainda contém referências antigas a `href="css/` ou `src="js/`**
Executar busca por strings legadas nos arquivos HTML para garantir limpeza completa.

- [ ] **Step 9: Commit**
```bash
git add *.html figma/canvas-preview.html
git commit -m "refactor: atualizar caminhos de css e js nos htmls para padrao vite"
```

---

### Task 5: Atualizar a Chamada de Fetch em `src/js/champions.js`

**Files:**
- Modify: `src/js/champions.js`

**Interfaces:**
- Consome: `public/data/champions.json` servido em `/data/champions.json`.
- Produz: carregamento dinâmico compatível com servidor Vite e build estático.

- [ ] **Step 1: Atualizar o caminho do fetch em `src/js/champions.js`**
Substituir `fetch('data/champions.json')` por `fetch('/data/champions.json')`.

- [ ] **Step 2: Verificar a alteração no arquivo**
Confirmar a linha modificada em `src/js/champions.js`.

- [ ] **Step 3: Commit**
```bash
git add src/js/champions.js
git commit -m "fix: atualizar endpoint de champions.json para caminho absoluto compativel com vite"
```

---

### Task 6: Executar Build de Produção, Validar Páginas e Atualizar Documentação

**Files:**
- Create: pasta `dist/` (gerada por `npm run build`, não versionada)
- Modify: `context.md`

**Interfaces:**
- Consome: todos os arquivos configurados nas tarefas anteriores.
- Produz: build de produção completo em `dist/` e documentação atualizada em `context.md`.

- [ ] **Step 1: Executar o build de produção com Vite**
Executar: `npm run build`
Esperado: Saída informando sucesso do Rollup, com geração de `dist/index.html`, `dist/timeline.html`, `dist/regions.html`, `dist/champions.html`, `dist/modes.html`, `dist/contact.html`, `dist/data/champions.json` e bundles em `dist/assets/`.

- [ ] **Step 2: Validar a integridade dos 6 HTMLs e dados na pasta `dist/`**
Verificar se todos os 6 arquivos HTML existem em `dist/` e se `dist/data/champions.json` foi copiado corretamente da pasta `public/`.

- [ ] **Step 3: Testar preview do build**
Iniciar teste de fumaça usando `npx vite preview --port 4173` ou verificação automatizada de resposta HTTP status 200 nas páginas.

- [ ] **Step 4: Atualizar `context.md`**
Refletir a nova estrutura de pastas (`src/`, `public/`), os scripts do `package.json` (`npm run dev`, `npm run build`, `npm run preview`) e o papel do Vite no projeto.

- [ ] **Step 5: Commit final**
```bash
git add context.md
git commit -m "docs: atualizar context.md com nova estrutura vite e comandos de execucao"
```
