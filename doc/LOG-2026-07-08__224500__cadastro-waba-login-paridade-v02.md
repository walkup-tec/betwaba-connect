# betwaba-connect — cadastro WABA real + login painel (paridade V02)

## Contexto
Landing `bet.waba.info` (bets_pv) ainda usava cadastro mock (“time entrará em contato”) e `/login` placeholder. Paridade com fluxo WABA V02 `/bets`.

## Alterações

### Cadastro (`/cadastro`)
- `submitSignup` → proxy `POST /api/subscribers/register` → WABA `POST /subscribers/register`
- Payload: `segment: bets`, `signupOrigin: bet-waba`, máscaras telefone/CPF
- Sucesso: toast + redirect ~1,2s para `loginUrl` (painel WABA)
- Senha mín. 6 caracteres (igual API WABA)
- Preço exibido: R$ 0,33/envio

### Login (`/login` + header Entrar)
- Redirect para `VITE_WABA_APP_LOGIN_URL` (default `https://waba.draxsistemas.com.br/`)

### API server route
- `src/routes/api/subscribers/register.ts` — proxy server-side (sem CORS no browser)

### Logo +30%
- Header nav: `h-[3.36375rem]`
- Footer: `h-[2.925rem]`

### Config
- `.env.example`: `WABA_API_URL`, `VITE_WABA_APP_LOGIN_URL`
- `doc/DEPLOY-EASYPANEL.md` atualizado

## Deploy Easypanel (bets_pv)
1. Pull/rebuild serviço `waba_bets_pv`
2. Variáveis: `VITE_WABA_APP_LOGIN_URL`, `WABA_API_URL` (rebuild obrigatório após mudar VITE_)
3. Validar: cadastro em bet.waba.info/cadastro → redirect painel WABA

## Palavras-chave
`betwaba-connect`, `bets_pv`, `cadastro bets`, `login waba`, `proxy subscribers register`
