---
version: 1
slug: "src-app-page-tsx"
primary_target: "src/app/page.tsx"
related_targets: ["src/app/projects/voice-agent/page.tsx","src/app/projects/dappdrop/page.tsx"]
---

## Scope

Home page `/` plus the case studies `/projects/voice-agent` and `/projects/dappdrop`, all in one visual world. Visitor mode: Experience (a portfolio: the work leads), with a Persuade action (book a call / resume). Audience: startup founders and CTOs first, then engineering hiring managers and Web3 protocol teams. Constraints: copy and facts unchanged; Lighthouse accessibility 100; reduced motion; no overflow at 390px; ⌘K palette kept.

## Direction contract

THESIS: The portfolio as a Swiss conference poster: one claim, one grotesk, one cobalt field, a strict grid. It refuses the dark-terminal developer portfolio and the centred headline over a row of rounded cards.

OWN-WORLD: Paper-white ground #f6f6f3, ink #0d0d0d, cobalt #1f3bff used only for the claim field and the primary actions. One grotesk (Schibsted Grotesk) at extreme size contrast. 2px black rules, numbered index rows, square corners, no shadows, no glows, no monospace labels.

STORY: Within seconds the visitor knows: software engineer, AI agents in production, proof indexed beside the claim, and how to act (resume, call). Then experience, the work in depth, open source, and contact.

FIRST VIEWPORT: 12-column grid. A thin header (name, nav, Resume) over a 2px rule. The cobalt field spans columns 1–8, holding the claim (clamp ~52–84px), the description and two actions. Columns 9–12 hold the "Selected work" index (01 voice agent, 02 DappDrop, 03 jam-nodes, each a link), then the role/location/status lines. All of it fits a 1440×900 viewport.

FORM: Swiss conference poster, #5 on the ordered list. seed:c84d9cf12ae61db0. Signature interaction: an index row inverts to cobalt with its arrow advancing on hover/focus. Motion grammar: content is always visible, with no scroll fades; only the cobalt fills transition (~150ms), and reduced motion removes them.

Raises: charged emptiness (one focal element per section, a third of the grid empty); only actionable things are cobalt; stable index numbers across home and case studies; whole-grid discipline; every claim beside its evidence.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
