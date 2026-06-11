# Protocolo de Deploy — Publicação do Site

Este protocolo guia o aluno passo a passo do código local até o site no ar, com domínio personalizado. Cobre Vercel (hospedagem), GitHub (repositório) e registro de domínio.

---

## Pré-requisitos

Antes de iniciar o deploy, o agente confirma:

- [ ] `SEO.md` executado (meta tags, title, description)
- [ ] `ANALYTICS.md` executado (GA4 instalado)
- [ ] Nenhum `console.log` no código (remover todos)
- [ ] Todas as imagens com `alt` text
- [ ] Site testado em mobile (375px) e desktop (1280px)
- [ ] Formulários funcionando (Formspree ou similar configurado)
- [ ] Links e âncoras testados

Se algum item estiver pendente, o agente avisa antes de continuar.

---

## Passo 1 — Publicar no GitHub

### 1.1 Criar repositório

1. Acessar github.com → botão verde "New"
2. Nome do repositório: `nome-do-site` (sem espaços, sem acentos)
3. Deixar "Public" selecionado
4. Clicar em "Create repository"

### 1.2 Enviar o código

No terminal da IDE (Antigravity), executar em sequência:

```bash
git init
git add .
git commit -m "primeiro commit"
git branch -M main
git remote add origin https://github.com/[seu-usuario]/[nome-do-repositorio].git
git push -u origin main
```

Substituir `[seu-usuario]` e `[nome-do-repositorio]` pelos valores reais.

### 1.3 Atualizar o repositório no futuro

Sempre que fizer alterações:

```bash
git add .
git commit -m "descrição breve do que mudou"
git push
```

---

## Passo 2 — Deploy no Vercel

### 2.1 Conectar ao GitHub

1. Acessar vercel.com → "Sign up" com conta do GitHub
2. Na dashboard, clicar em "Add New Project"
3. Selecionar o repositório criado
4. Em **"Root Directory"**: clicar em "Edit" e digitar `src`
   > Isso garante que o Vercel publica apenas a pasta do site — os arquivos de protocolo (.md) ficam fora do deploy.
5. Clicar em "Deploy"

O Vercel detecta automaticamente que é um site estático e publica sem configuração adicional.

### 2.2 URL provisória

O Vercel gera uma URL no formato `nome-do-repositorio.vercel.app`. Compartilhar com o cliente para aprovação antes de configurar o domínio.

### 2.3 Deploy automático

A partir de agora, qualquer `git push` na branch `main` publica automaticamente no Vercel.

---

## Passo 3 — Registrar Domínio

### Opção A — Registro BR (domínios .com.br / .net.br)

Indicado para: negócios brasileiros que querem domínio nacional.

1. Acessar registro.br
2. Digitar o nome desejado e verificar disponibilidade
3. Criar conta e registrar o domínio (~R$40/ano)
4. Acessar "Painel DNS" do domínio registrado

### Opção B — Hostinger (domínios .com / internacionais)

Indicado para: domínios .com, .io, ou quando quer hospedagem junto.

1. Acessar hostinger.com.br
2. Buscar o domínio desejado
3. Comprar apenas o domínio (não precisa de hospedagem — vamos usar Vercel)

**Qual escolher?**
- Negócio local ou nacional → Registro BR (.com.br)
- Projeto com alcance internacional ou domínio .com → Hostinger

---

## Passo 4 — Conectar Domínio ao Vercel

### 4.1 Adicionar domínio no Vercel

1. Na dashboard do Vercel, acessar o projeto → Settings → Domains
2. Digitar o domínio comprado (ex: `meusite.com.br`)
3. Clicar em "Add"
4. O Vercel mostra os registros DNS que precisam ser configurados

### 4.2 Configurar DNS no registrador

**Se usou Registro BR:**
1. Acessar painel DNS em registro.br
2. Remover o registro A padrão (se existir)
3. Adicionar os registros fornecidos pelo Vercel:
   - Tipo `A` apontando para o IP do Vercel
   - Tipo `CNAME` para `www` apontando para o domínio Vercel

**Se usou Hostinger:**
1. Acessar Hostinger → Domínios → Gerenciar → DNS
2. Adicionar os mesmos registros A e CNAME

### 4.3 Aguardar propagação

- Tempo de propagação: 1-48 horas (normalmente menos de 1 hora)
- Verificar em vercel.com → projeto → Settings → Domains (deve aparecer "Valid Configuration")

---

## Passo 5 — HTTPS (SSL)

O Vercel instala o certificado SSL automaticamente após a propagação do DNS.

Verificar: ao acessar o domínio, o navegador deve mostrar o cadeado e `https://`.

---

## Passo 6 — Verificação final pós-deploy

O agente orienta o aluno a verificar:

- [ ] Site abre no domínio correto
- [ ] HTTPS ativo (cadeado verde)
- [ ] Site funciona em mobile
- [ ] Formulários funcionando
- [ ] Analytics funcionando (ver relatório em tempo real)
- [ ] Enviar sitemap no Google Search Console (ver `SEO.md`)

---

## Domínios personalizados para e-mail (bônus)

Se o aluno quiser e-mail profissional (`contato@meusite.com.br`):
- Registrar no Google Workspace (pago) ou Zoho Mail (gratuito até 5 usuários)
- Configurar registros MX no painel DNS do registrador
- Não interfere com a hospedagem no Vercel

---

## Regras do Agente

1. Nunca pular o checklist pré-deploy.
2. Sempre testar a URL provisória no Vercel antes de conectar o domínio.
3. Não mexer em registros DNS sem entender — erro de DNS pode derrubar o site.
4. Registrar a URL final no `BRIEFING.md` após o deploy.
5. Orientar o aluno a fazer `git push` antes de iniciar qualquer deploy.
