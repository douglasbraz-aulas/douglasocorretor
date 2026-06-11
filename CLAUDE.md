# Regras de Desenvolvimento — Projeto de Site

Leia este arquivo antes de qualquer ação. Estas regras se aplicam automaticamente a todo projeto que usa esta base.

---

## Estrutura do Projeto

```
projeto/
├── CLAUDE.md              ← este arquivo (regras automáticas)
├── PASSO-A-PASSO.md       ← fluxo de trabalho
├── DESIGN-SYSTEM.md       ← tokens e identidade visual
├── BRIEFING.md            ← gerado automaticamente no início
├── Templates/             ← referência de leitura apenas
└── src/                   ← ÚNICO FOLDER QUE VAI PARA O DEPLOY
    ├── index.html
    ├── css/
    │   ├── variables.css
    │   ├── reset.css
    │   ├── main.css
    │   └── components/
    ├── js/
    │   ├── main.js
    │   └── modules/
    └── assets/
        ├── images/
        └── icons/
```

---

## Regras Obrigatórias

### Estrutura

1. Todo código do site (HTML, CSS, JS, assets) vai dentro de `src/`. Nunca criar arquivos de site na raiz do projeto.
2. `src/` é a pasta de deploy. Apenas ela vai para o servidor.
3. `Templates/` é referência de leitura. Nunca copiar nem modificar arquivos de Templates/.
4. Arquivos de protocolo (.md) ficam na raiz. Nunca mover para src/.

### Antes de escrever qualquer código

5. Verificar se `BRIEFING.md` existe na raiz.
   - Se não existir: executar `PLANEJAMENTO.md` antes de continuar.
6. Verificar se `DESIGN-SYSTEM.md` tem `Status: COMPLETO` no topo.
   - Se `Status: PENDENTE`: alertar o desenvolvedor e executar o protocolo de setup antes de criar CSS ou componentes.
7. Verificar se `src/` existe. Se não existir: criar a estrutura de pastas antes de qualquer código.

### Design e código

8. Nunca usar valores hardcoded de cor, fonte ou espaçamento. Sempre `var(--)` de `src/css/variables.css`.
9. CSS mobile-first. Media queries com `min-width`.
10. Nomenclatura BEM para classes CSS.
11. JavaScript sempre com ES Modules (`type="module"`, `import`/`export`). Nunca `var`.
12. Imagens em `src/assets/images/`. Fontes locais em `src/assets/fonts/`. Ícones SVG em `src/assets/icons/`.
13. `src/style-guide.html` é uma ferramenta de desenvolvimento — não vai para o deploy. Gerado automaticamente ao concluir o DESIGN-SYSTEM.

---

## Scaffold de Novo Projeto

Se `src/` não existir, criar antes de qualquer código:

```
src/
src/index.html           (placeholder vazio)
src/css/
src/css/variables.css    (vazio — preenchido pelo DESIGN-SYSTEM)
src/css/reset.css        (normalização base)
src/css/main.css         (importa os módulos na ordem correta)
src/css/components/      (pasta vazia — componentes adicionados conforme construção)
src/js/
src/js/main.js           (entry point ES Module)
src/js/modules/          (pasta vazia — módulos adicionados conforme necessidade)
src/assets/
src/assets/images/
src/assets/icons/
```

Anunciar após criar: "Estrutura criada em src/. Apenas esta pasta vai para o deploy."
