#!/usr/bin/env bash
# Renders resume/resume.html to PDF with headless Chrome, once per variant.
#   ./resume/build.sh                   -> public/resume/*.pdf (no phone, served on the site)
#   PHONE="+91 ..." ./resume/build.sh   -> also resume/out/*.pdf (with phone, for applications; gitignored)
# Variants: ai (default; AI agents + backend first) and web3 (smart contracts first). Same facts, different order.
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
CHROME="${CHROME:-/Applications/Google Chrome.app/Contents/MacOS/Google Chrome}"
SRC="file://$ROOT/resume/resume.html"

render() {
  "$CHROME" --headless=new --disable-gpu --no-pdf-header-footer \
    --print-to-pdf="$2" "$1" 2>/dev/null
  echo "wrote $2"
}

name() { [[ "$1" == "ai" ]] && echo "Dheeraj-Shrivastav-Resume.pdf" || echo "Dheeraj-Shrivastav-Resume-Web3.pdf"; }

mkdir -p "$ROOT/public/resume"
[[ -n "${PHONE:-}" ]] && mkdir -p "$ROOT/resume/out"
for v in ai web3; do
  render "$SRC?variant=$v" "$ROOT/public/resume/$(name $v)"
  if [[ -n "${PHONE:-}" ]]; then
    q=$(python3 -c 'import sys,urllib.parse;print(urllib.parse.quote(sys.argv[1]))' "$PHONE")
    render "$SRC?variant=$v&phone=$q" "$ROOT/resume/out/$(name $v)"
  fi
done
