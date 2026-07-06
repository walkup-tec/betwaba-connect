# Memória — betwaba-connect (bets_pv)

## 2026-07-06 — Fix Traefik bet.waba.info

**Easypanel:** projeto `waba`, serviço `bets_pv`  
**Domínio:** `bet.waba.info`  
**Repo:** `walkup-tec/betwaba-connect` branch `main`

**Status:**
- **502** — mesmo VIP Swarm stale que paginadevendas
- Fix permanente: `traefik-permanent-bets-pv-vps.sh` (waba repo)
- Backend correto: `http://tasks.waba_bets_pv:3000/`

**Próximo passo:**
Rodar no VPS: `/tmp/traefik-bets.sh install` (ver `doc/DEPLOY-EASYPANEL.md`)
