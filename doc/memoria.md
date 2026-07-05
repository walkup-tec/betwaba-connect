# Memória — betwaba-connect

## 2026-07-05 — 502 bet.waba.info

**Contexto:** Landing TanStack Start SSR no Easypanel (`waba` / `bets_pv`). DNS `bet.waba.info` → `72.60.51.127` OK. Proxy retorna 502 (`Cannot GET /api/errors/bad-gateway`).

**Causa provável:**
- Dockerfile com `PORT=80` conflitando com env Easypanel `PORT=3000`
- Destino interno `https://waba_bets_pv:3000` (deve ser HTTP)
- Zero-downtime reiniciando container (`Server closed successfully` nos logs)

**Alterações (commit pendente push):**
- `Dockerfile`: `PORT=3000`, `NITRO_HOST`/`NITRO_PORT`, HEALTHCHECK
- `nixpacks.toml`: alinhado porta 3000
- `doc/DEPLOY-EASYPANEL.md`: guia domínios e troubleshooting 502

**Próximos passos:**
1. Push + redeploy Easypanel
2. Easypanel: domínios → HTTP `:3000`; desativar zero downtime
3. SSL Let's Encrypt em `bet.waba.info`
4. Validar `curl -I https://bet.waba.info/`
5. Integrar cadastro com WABA API
