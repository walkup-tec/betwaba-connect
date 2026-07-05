# Deploy — betwaba-connect (Easypanel)

App **TanStack Start** (SSR) — não é site estático.

## Opção A — Dockerfile (recomendado)

Evita falha do Nixpacks com Node 18 EOL no Easypanel.

| Campo | Valor |
|-------|-------|
| Construção | **Dockerfile** |
| Arquivo | `Dockerfile` |
| Porta | `3000` |
| Variável | `NODE_ENV=production` |

## Opção B — Nixpacks

Requer Node **22** (`nixpacks.toml` com `nodejs_22`). Se falhar, use Dockerfile.

## Validar após deploy

```bash
curl -I https://SEU-DOMINIO/
```

Deve retornar **200** com HTML da landing Bet Waba.

## Notas

- Preset Nitro: `node-server` (ver `vite.config.ts`).
- Cadastro ainda usa mock em `src/lib/signup.ts` — integração WABA API é próximo passo.
