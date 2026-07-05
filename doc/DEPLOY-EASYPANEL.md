# Deploy — betwaba-connect (Easypanel)

App **TanStack Start** (SSR) — não é site estático.

## Opção A — Dockerfile (recomendado)

Evita falha do Nixpacks com Node 18 EOL no Easypanel.

| Campo | Valor |
|-------|-------|
| Construção | **Dockerfile** |
| Arquivo | `Dockerfile` |
| Porta interna | `3000` |
| Variáveis | `NODE_ENV=production`, `HOST=0.0.0.0`, `PORT=3000` |

## Domínios (Easypanel → Destino)

O proxy **sempre** fala HTTP com o container. Nunca use `https://` no destino interno.

| Domínio público | Destino interno |
|-----------------|-----------------|
| `bet.waba.info` | `http://waba_bets_pv:3000/` |
| `waba-bets-pv.achpyp.easypanel.host` | `http://waba_bets_pv:3000/` |

## Avançado

- **Tempo de inatividade zero**: desligado (evita ciclo listen → SIGTERM → 502).
- **Réplicas**: `1`.

## Opção B — Nixpacks

Requer Node **22** (`nixpacks.toml` com `nodejs_22`). Se falhar, use Dockerfile.

## Validar após deploy

```bash
curl -I https://SEU-DOMINIO/
```

Deve retornar **200** com HTML da landing Bet Waba.

## 502 / `Cannot GET /api/errors/bad-gateway`

1. Confirme destino interno **HTTP** `:3000` (não HTTPS).
2. Logs devem mostrar `Listening on: http://0.0.0.0:3000` **sem** `Server closed` em loop.
3. Env no serviço: `HOST=0.0.0.0`, `PORT=3000`.
4. SSL Let's Encrypt na aba **Domínios → bet.waba.info → SSL**.

## Notas

- Preset Nitro: `node-server` (ver `vite.config.ts`).
- Cadastro ainda usa mock em `src/lib/signup.ts` — integração WABA API é próximo passo.
