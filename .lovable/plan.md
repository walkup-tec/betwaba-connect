
# Landing Page Bet Waba

Landing page premium de alta conversão para o Bet Waba — plataforma de disparos de WhatsApp em larga escala para o segmento de Bets. Estética inspirada na Linear: preta, minimalista, tecnológica, com detalhes turquesa (#33CCCC), glassmorphism sutil e microinterações.

Todos os CTAs conduzem ao formulário **Criar Conta**. Sem teste grátis, sem botão de WhatsApp.

## Estrutura de rotas

```text
src/routes/
  __root.tsx        (head global, fontes, meta)
  index.tsx         (landing completa)
  cadastro.tsx      (página do formulário Criar Conta)
  privacidade.tsx   (Política de Privacidade)
  termos.tsx        (Termos de Uso)
```

Todos os botões "Criar Conta" navegam para `/cadastro`. O formulário também aparece como seção final da home para maximizar conversão (Link "Criar Conta" no header → âncora `#cadastro` OU rota dedicada; usarei rota dedicada + âncora no CTA final).

## Seções da home (`index.tsx`)

1. **Header sticky** — logo Bet Waba, links âncora (Benefícios, Como funciona, Plano, FAQ), botão "Criar Conta".
2. **Hero** — título forte ("Disparos de WhatsApp em larga escala para o mercado de Bets"), subtítulo, 4 bullets de diferenciais com ícones turquesa, CTA "Criar Conta", mockup da plataforma (dashboard gerado via imagegen, glassmorphism, glow turquesa).
3. **Faixa de métricas** — números de impacto (capacidade de envios, uptime, latência) — cria autoridade.
4. **Benefícios** — grid de cards (estabilidade, escala, simplicidade, sem mensalidade, sem fidelidade, suporte).
5. **Como funciona** — 4 passos numerados (Cadastro → Configuração → Importar contatos → Disparar).
6. **Funcionalidades** — grid maior com ícones (disparo em larga escala, alta estabilidade, capacidade operacional, interface intuitiva, controle de envios, operação contínua).
7. **Bet Waba vs. soluções genéricas** — tabela comparativa (estabilidade, escalabilidade, simplicidade, confiabilidade).
8. **Plano** — card destacado: "Pague apenas pelo que enviar. Sem mensalidade. Sem fidelidade. A partir de R$ 0,32 por envio." + CTA.
9. **FAQ** — Accordion (shadcn) com 8 perguntas (funcionamento, cadastro, pagamentos, estabilidade, plataforma, suporte).
10. **CTA final** — bloco full-width, título forte + botão "Criar Conta".
11. **Footer** — logo, copyright, links Política/Termos.

## Formulário `/cadastro`

Campos com máscara e validação em tempo real (react-hook-form + zod):

- Nome (empresa ou pessoa) — obrigatório, 2–100
- E-mail — obrigatório, formato válido
- WhatsApp — máscara `(00) 00000-0000`
- Telefone — máscara `(00) 0000-0000` ou celular
- CPF ou CNPJ — auto-detecção pela quantidade de dígitos, máscaras `000.000.000-00` / `00.000.000/0000-00`, validação de dígitos verificadores
- Senha — mínimo 8, força visualizada (fraca/média/forte), toggle mostrar/ocultar

Mensagens de erro amigáveis em pt-BR. Botão **Criar Conta**. `onSubmit` prepara payload e mostra estado de sucesso (toast) — sem backend por enquanto; código estruturado para plugar API futuramente (função `submitSignup` isolada em `src/lib/signup.ts`).

## Design system (`src/styles.css`)

- Base `--background: oklch(0 0 0)` (preto), `--foreground` branco.
- `--primary` turquesa `#33CCCC` (oklch equivalente), `--primary-foreground` preto.
- Tokens novos: `--gradient-hero`, `--gradient-turquoise`, `--shadow-glow` (glow turquesa sutil), `--surface-glass` (rgba branco 4% + blur).
- Fonte: **Inter Tight** (display) + **Inter** (body) via `<link>` no `__root.tsx` head, registrada em `@theme` como `--font-display` e `--font-sans`.
- Modo escuro é o único modo (dark-only). `.dark` aplicada em `<html>`.
- Utilities: `@utility glass` (background glass + border sutil + backdrop-blur), `@utility glow-turquoise`.

Sem cores hardcoded — tudo via tokens semânticos.

## SEO

- `__root.tsx`: viewport, charSet, og:type website, og:site_name, twitter:card.
- `index.tsx` `head()`: title "Bet Waba — Disparos de WhatsApp em larga escala para Bets", meta description, og:title/description/url, canonical `/`. Palavras-chave (disparo de WhatsApp, WhatsApp para bets, envio em massa, automação WhatsApp, plataforma de disparo) tecidas naturalmente em H1/H2/parágrafos.
- `cadastro.tsx`, `privacidade.tsx`, `termos.tsx`: head próprio com title/description únicos, canonical relativo.
- JSON-LD Organization no root; JSON-LD Product/Service na home; FAQPage no bloco FAQ.
- `public/robots.txt` (allow all, sem Sitemap absoluto até termos domínio).
- `public/sitemap.xml` com URLs relativas comentadas + BASE_URL vazio.
- H1 único por rota; hierarquia H2/H3 semântica; alt em todas as imagens.

## Assets gerados

- `src/assets/hero-dashboard.jpg` (imagegen premium) — mockup dashboard com tema escuro/turquesa.
- `src/assets/og-cover.jpg` — social preview para leaf routes (leaf-only conforme regra).
- Logo Bet Waba como componente SVG inline (wordmark tipográfico + marca em turquesa).

## Integrações

- **Meta Pixel**: script inline no `__root.tsx` via `scripts` do head, com placeholder `META_PIXEL_ID` documentado (usuário troca depois). Evento `PageView` no load; evento `Lead` disparado no submit bem-sucedido do formulário.
- **Login**: link "Entrar" no header apontando para `/login` (rota placeholder simples com aviso "em breve") — mantém a estrutura pronta sem prometer funcionalidade não solicitada de forma detalhada. *Confirmação: usar placeholder ou já implementar tela de login estática?*

## Dependências novas

- `react-hook-form`, `@hookform/resolvers`, `zod` — formulário e validação.
- Máscaras: implementadas manualmente com utilitários em `src/lib/masks.ts` (evita dependência extra e mantém bundle enxuto).
- Animações: `motion` (framer-motion) para transições suaves de hero e reveals no scroll.

## Performance

- Imagens em `.jpg` com `loading="lazy"` (exceto hero acima da dobra: `fetchpriority="high"`).
- Sem bibliotecas pesadas. Motion aplicado só onde agrega valor.
- Fonte via `<link rel="preconnect">` + `display=swap`.

## Acessibilidade

- Contraste AA garantido (turquesa sobre preto ≥ 7:1 em textos grandes; textos body em branco/foreground).
- `aria-label` em botões-ícone; landmarks (`<main>`, `<nav>`, `<footer>`); foco visível; inputs com `<label>` associada.

## Fora de escopo (mantido para futura integração)

- Backend real do cadastro (Lovable Cloud) — o formulário faz POST simulado.
- Página de login funcional.
- Envio real de eventos para o Meta Pixel (ID real precisa ser configurado pelo usuário).

---

**Pergunta rápida antes de eu implementar**: prefere que o formulário de cadastro apareça (a) em rota dedicada `/cadastro` com CTAs da home apontando para lá, ou (b) inline como última seção da home (âncora `#cadastro`)? Meu default é **(a) rota dedicada**, que costuma converter melhor em SaaS e permite SEO próprio, mas confirmo antes de seguir.
