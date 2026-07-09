# Memória — betwaba-connect (bets_pv)

## 2026-07-08 — Cadastro WABA real + login painel (paridade V02)

**Easypanel:** projeto `waba`, serviço `bets_pv`  
**Domínio:** `bet.waba.info`  
**Repo:** `walkup-tec/betwaba-connect` branch `main`

- Cadastro real via proxy `POST /api/subscribers/register` → WABA (`segment: bets`, boas-vindas, redirect login)
- `/login` e header **Entrar** → `VITE_WABA_APP_LOGIN_URL` (painel WABA)
- Logo header/footer +30% (`3.36375rem` / `2.925rem`)
- Preço landing: R$ 0,33/envio
- Log: `doc/LOG-2026-07-08__224500__cadastro-waba-login-paridade-v02.md`
- Deploy: rebuild `bets_pv` com `WABA_API_URL` + `VITE_WABA_APP_LOGIN_URL` (ver `.env.example`)

## 2026-07-06 — Fix Traefik bet.waba.info

**Status:**
- Logo **draxBets** + favicon WABA — commit `617bdc9` (bet.waba.info / bets_pv)
- Fix Traefik: `traefik-permanent-bets-pv-vps.sh install` no VPS
