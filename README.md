# dheerajshrivastav.me

Personal site of Dheeraj Shrivastav, a software engineer who ships production AI agents and backend systems.

Live: https://dheerajshrivastav.me

## Stack

Next.js 14 (App Router), TypeScript, Tailwind CSS, Framer Motion, kbar (⌘K command palette). The social share image is generated at build time with `next/og`.

## Develop

```bash
bun install
bun dev        # http://localhost:3000
bun run build  # production build
```

## Resume

The resume is a single HTML source, [`resume/resume.html`](resume/resume.html), rendered to PDF with headless Chrome:

```bash
./resume/build.sh                       # public/resume/Dheeraj-Shrivastav-Resume.pdf (served by the site, no phone number)
PHONE="+91 ..." ./resume/build.sh       # also resume/out/ (with phone number, gitignored, for applications)
```

Edit the HTML, rebuild, and the site and the PDF stay in sync.
