# Deploy — betwaba-connect (Easypanel)

App **TanStack Start** (SSR) — não é site estático.

## Opção A — Dockerfile (recomendado)

| Campo | Valor |
|-------|-------|
| Construção | **Dockerfile** |
| Arquivo | `Dockerfile` |
| Porta | `3000` |
| Variável | `NODE_ENV=production` |

## Opção B — Nixpacks

| Campo | Valor |
|-------|-------|
| Instalação | `bun install --frozen-lockfile` |
| Build | `bun run build` |
| Início | `node .output/server/index.mjs` |
| Porta | `3000` |

O arquivo `nixpacks.toml` na raiz já define isso.

## Validar após deploy

```bash
curl -I https://SEU-DOMINIO/
```

Deve retornar **200** com HTML da landing Bet Waba.

## Notas

- Preset Nitro: `node-server` (ver `vite.config.ts`).
- Cadastro ainda usa mock em `src/lib/signup.ts` — integração WABA API é próximo passo.
