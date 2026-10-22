#!/usr/bin/env bash
# Renders resume/resume.html to PDF with headless Chrome.
#   ./resume/build.sh                          -> public/resume/Dheeraj-Shrivastav-Resume.pdf (no phone, served on the site)
#   PHONE="+91 ..." ./resume/build.sh          -> also resume/out/Dheeraj-Shrivastav-Resume.pdf (with phone, for applications; gitignored)
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
CHROME="${CHROME:-/Applications/Google Chrome.app/Contents/MacOS/Google Chrome}"
SRC="file://$ROOT/resume/resume.html"

render() {
  "$CHROME" --headless=new --disable-gpu --no-pdf-header-footer \
    --print-to-pdf="$2" "$1" 2>/dev/null
  echo "wrote $2"
}

mkdir -p "$ROOT/public/resume"
render "$SRC" "$ROOT/public/resume/Dheeraj-Shrivastav-Resume.pdf"

if [[ -n "${PHONE:-}" ]]; then
  mkdir -p "$ROOT/resume/out"
  render "$SRC?phone=$(python3 -c 'import sys,urllib.parse;print(urllib.parse.quote(sys.argv[1]))' "$PHONE")" \
    "$ROOT/resume/out/Dheeraj-Shrivastav-Resume.pdf"
fi
