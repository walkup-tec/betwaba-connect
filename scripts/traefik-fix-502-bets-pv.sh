#!/bin/bash
# Landing bet.waba.info — fix Traefik permanente (cron + timer + watch).
# Doc: doc/DEPLOY-EASYPANEL.md
set -euo pipefail

BETS_SCRIPT_URL="${BETS_SCRIPT_URL:-https://raw.githubusercontent.com/walkup-tec/waba/master/scripts/traefik-permanent-bets-pv-vps.sh}"
BETS_SCRIPT_LOCAL="/tmp/traefik-permanent-bets-pv-vps.sh"

export WABA_PUBLIC_HOST="${WABA_PUBLIC_HOST:-bet.waba.info}"
export WABA_SWARM_SERVICE="${WABA_SWARM_SERVICE:-waba_bets_pv}"
export WABA_CONTAINER_FILTER="${WABA_CONTAINER_FILTER:-waba_bets_pv}"
export WABA_EASYPANEL_HOST="${WABA_EASYPANEL_HOST:-waba-bets-pv.achpyp.easypanel.host}"
export WABA_NET="${WABA_NET:-easypanel}"
export WABA_PORT="${WABA_PORT:-3000}"
export WABA_BACKEND_URL="${WABA_BACKEND_URL:-http://tasks.waba_bets_pv:3000/}"

curl -fsSL "$BETS_SCRIPT_URL" -o "$BETS_SCRIPT_LOCAL"
sed -i 's/\r$//' "$BETS_SCRIPT_LOCAL"
chmod +x "$BETS_SCRIPT_LOCAL"

echo "=== bets_pv → traefik-permanent-bets-pv-vps.sh ==="
echo "  host=${WABA_PUBLIC_HOST}"
echo "  swarm=${WABA_SWARM_SERVICE}"
echo "  backend=${WABA_BACKEND_URL}"
echo "  cmd=${1:-run}"
echo ""

"$BETS_SCRIPT_LOCAL" "${1:-run}"

echo ""
echo "=== Validar landing ==="
curl -sS -o /dev/null -w "bet.waba.info: %{http_code}\n" --max-time 20 "https://${WABA_PUBLIC_HOST}/" || true
curl -sS -o /dev/null -w "easypanel host: %{http_code}\n" --max-time 20 "https://${WABA_EASYPANEL_HOST}/" || true
