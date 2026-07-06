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
| `bet.waba.info` | `http://tasks.waba_bets_pv:3000/` |
| `waba-bets-pv.achpyp.easypanel.host` | `http://tasks.waba_bets_pv:3000/` |

> **Nota:** `waba_bets_pv` (VIP Swarm) pode ficar stale após redeploys. Use `tasks.waba_bets_pv` se 502 persistir.

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

Mesmo problema do VIP Swarm stale (`waba_bets_pv` → IP morto). **Solução permanente** (cron + timer 20s + watch):

```bash
curl -fsSL https://raw.githubusercontent.com/walkup-tec/waba/master/scripts/traefik-permanent-bets-pv-vps.sh -o /tmp/traefik-bets.sh
sed -i 's/\r$//' /tmp/traefik-bets.sh && chmod +x /tmp/traefik-bets.sh
/tmp/traefik-bets.sh install
```

Ou via wrapper deste repo:

```bash
curl -fsSL https://raw.githubusercontent.com/walkup-tec/betwaba-connect/main/scripts/traefik-fix-502-bets-pv.sh -o /root/traefik-fix-bets-pv.sh
chmod +x /root/traefik-fix-bets-pv.sh
/root/traefik-fix-bets-pv.sh install
```

Esperado: `bet.waba.info: 200`

### Checklist Easypanel (`waba/bets_pv`)

1. Destino interno **HTTP** `http://tasks.waba_bets_pv:3000/` (não `waba_bets_pv` VIP)
2. `HOST=0.0.0.0`, `PORT=3000`
3. Zero downtime: **OFF**
4. SSL Let's Encrypt em `bet.waba.info`

## Notas

- Preset Nitro: `node-server` (ver `vite.config.ts`).
- Cadastro ainda usa mock em `src/lib/signup.ts` — integração WABA API é próximo passo.
