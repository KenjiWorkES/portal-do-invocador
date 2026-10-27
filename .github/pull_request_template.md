## 📝 Descrição da Task

<!-- Descreva de forma clara e objetiva o que foi desenvolvido, corrigido ou alterado nesta Pull Request. -->
- 

---

## 🔗 Link da Task

<!-- Insira abaixo o link ou referência da Issue / Card do GitHub Project (ex: #1 ou link direto da task). -->
- **Task / Issue:** [PIXP-0000](https://github.com/users/KenjiWorkES/projects/3)

---

## 🚀 Como Rodar o Deploy Temporário da PR

O check **`Deploy PR Preview`** inicia como pendente e é **obrigatório** para liberar o merge desta Pull Request. Para gerar o ambiente temporário na Vercel:

1. Vá até a caixa de comentários desta Pull Request logo abaixo.
2. Envie um comentário contendo exatamente o comando:
   ```text
   @deploy-pr
   ```
3. Aguarde alguns segundos: a Action reagirá com um 🚀 ao seu comentário, fará o build da branch atual na Vercel e responderá aqui mesmo com o **link temporário de Preview**, marcando o check **`Deploy PR Preview`** como concluído (`✅`).

---

## ✅ Checklist antes do Merge

- [ ] O título da PR segue o padrão `PIXP-0000: Nome da Task`
- [ ] Pelo menos uma das tags obrigatórias (`feature`, `fix`, `docs` ou `refactor`) foi adicionada
- [ ] Os checks de `Lint`, `Build` e `SonarCloud Code Quality` passaram sem erros
- [ ] O ambiente temporário foi gerado e validado com `@deploy-pr`
