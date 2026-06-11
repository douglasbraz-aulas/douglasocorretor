# Protocolo de Manutenção

Este protocolo orienta o aluno a manter o site no ar, atualizado e seguro após o deploy. Cobre atualizações de conteúdo, versionamento Git e backup.

---

## Como usar

Após o deploy, o aluno pode usar este protocolo para:
- Atualizar textos, imagens ou preços
- Adicionar novas seções ou páginas
- Fazer backup do código
- Entender o histórico de mudanças

---

## Atualizando Conteúdo

### Regra principal

> Nunca editar arquivos na pasta `dist/`. Toda edição vai em `src/`.

### Atualizar texto

1. Abrir o arquivo HTML na pasta `src/` (ex: `src/index.html`)
2. Localizar o texto a ser alterado
3. Editar diretamente
4. Publicar (ver seção "Publicando alterações")

### Substituir uma imagem

1. Colocar a nova imagem em `src/assets/images/`
2. Usar formato WebP (converter se necessário em squoosh.app)
3. Nomear de forma descritiva: `hero-personal-trainer.webp`
4. Atualizar o `src` no HTML e o `alt` text
5. Publicar

### Atualizar preços ou ofertas

Localizar no HTML a seção de preços, editar os valores e publicar.

Se houver prazo de oferta: usar o componente de countdown do `COMPONENTES.md` e remover após o prazo.

---

## Git Workflow Simplificado

### Estrutura de branches

```
main   — versão do site que está no ar (produção)
dev    — versão em desenvolvimento (testes)
```

### Fluxo para alterar o site

```bash
# 1. Ir para a branch de desenvolvimento
git checkout dev

# 2. Baixar atualizações (se trabalha em equipe)
git pull

# 3. Fazer as alterações nos arquivos

# 4. Salvar as alterações
git add .
git commit -m "atualiza preço do plano mensal"

# 5. Enviar para o GitHub
git push

# 6. Testar na URL de preview do Vercel

# 7. Se estiver tudo certo, publicar em produção
git checkout main
git merge dev
git push
```

O Vercel publica automaticamente quando o `main` é atualizado.

### Mensagens de commit — exemplos

```
atualiza texto do hero
adiciona seção de bônus
corrige link do WhatsApp
troca imagem do depoimento
adiciona nova pergunta no FAQ
```

Usar português, verbo no presente, curto e descritivo.

---

## Visualizando o histórico de mudanças

Para ver todas as alterações feitas no site:

```bash
git log --oneline
```

Para desfazer a última alteração (antes de publicar):

```bash
git revert HEAD
```

---

## Backup do Repositório

O GitHub já é o backup principal — qualquer `git push` salva uma cópia.

### Backup local adicional (opcional)

Para ter cópia local do repositório completo:

```bash
# Clonar o repositório para uma pasta de backup
git clone https://github.com/[usuario]/[repositorio].git backup-[data]
```

Fazer isso mensalmente ou antes de grandes alterações.

### Nunca deletar o repositório do GitHub

O histórico de commits é o backup de todas as versões. Manter o repositório ativo mesmo após o projeto encerrado.

---

## Adicionando uma nova seção

1. Identificar onde a seção vai no `index.html`
2. Pedir ao agente para criar usando o `COMPONENTES.md` como referência
3. Criar o CSS do componente em `src/css/components/[nome].css`
4. Importar no `main.css`
5. Testar em mobile e desktop
6. Publicar

---

## Adicionando uma nova página

1. Copiar a estrutura do `index.html` para `src/pages/[nome-da-pagina].html`
2. Ajustar caminhos relativos (`../css/`, `../js/`, `../assets/`)
3. Atualizar o `<title>` e `<meta description>` para a nova página
4. Adicionar link no header/footer
5. Adicionar a URL no `sitemap.xml`
6. Publicar e enviar sitemap atualizado no Google Search Console

---

## Monitoramento pós-lançamento

### Verificações mensais recomendadas

- [ ] Acessar Google Analytics → conferir número de visitantes e origem do tráfego
- [ ] Acessar Google Search Console → verificar se há erros de indexação
- [ ] Testar todos os formulários do site
- [ ] Verificar se o domínio não está próximo do vencimento (renovar com 30 dias de antecedência)
- [ ] Testar velocidade em pagespeed.web.dev

### Sinais de problema

- Site fora do ar → verificar status no Vercel (vercel.com/dashboard)
- Formulário não envia → verificar cota do Formspree (plano gratuito tem limite)
- Analytics parou de registrar → verificar se o snippet do GA4 ainda está no HTML

---

## Regras do Agente

1. Nunca editar `dist/` — apenas `src/`.
2. Sempre fazer commit antes de começar uma alteração nova (preserva estado anterior).
3. Testar em mobile após qualquer alteração de layout.
4. Não remover o atributo `data-analytics="cta"` dos botões ao editar CTAs.
5. Ao substituir imagens, manter o mesmo `alt` text ou atualizar para ser mais descritivo.
