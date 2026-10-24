# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- **Startup founders and CTOs** (primary), especially at AI startups, evaluating Dheeraj directly as a hire. Success: they book a 30-minute call or email.
- **Engineering hiring managers**, who skim projects and case studies to decide whether to interview him.
- **Web3 protocol teams** (secondary), who read the DappDrop case study for smart-contract roles.
- Recruiters also pass through and need role, level and the resume within seconds.

## Product Purpose

The personal site of Dheeraj Shrivastav, a software engineer. It exists to get him interviews and calls for a significantly better role in AI agents and backend work, with Web3 as a second track.

## Positioning

He ships production systems that real people use every day, and he verifies what he ships. At work he made the workflow and product more stable and scalable, improved the UI/UX, and raised the team's whole working efficiency by building the complete process: an AI harness plus AI text and voice agents, including a real-time voice agent that patients and doctors use daily. On his own, he built DappDrop, which has a real use case: complex smart contracts, plus integration with Humanity Protocol and social platforms (Discord, Telegram).

## Operating Context

Visitors arrive from a resume link, a cold message to a founder, LinkedIn or GitHub. They mostly read on laptops; founders often open it on a phone. Each one decides within a minute whether to read a case study or book a call.

## Capabilities and Constraints

- Routes: `/` (hero, experience, projects, open source, skills, contact), `/projects/voice-agent` and `/projects/dappdrop` (case studies), plus resume PDFs at `/resume/*.pdf`.
- Next.js 14 App Router, Tailwind, framer-motion, kbar (⌘K palette, optional to keep). Deployed on Vercel.
- All copy is fact-checked against code and the owner's statements. Do not add claims, metrics, users or customers. The voice agent has no latency or cost numbers. DappDrop is pre-launch on testnet, with no real users and no external audit.
- The employer name may appear only in the job history, never as his identity.
- Must keep: Lighthouse accessibility at 100, prefers-reduced-motion support, no horizontal overflow at 390px, and performance that stays fast.

## Brand Commitments

None binding. Content and facts stay; the visual identity is fully replaceable (confirmed 2026-10-25).

## Evidence on Hand

- Case studies: the voice agent (private code, design-level) and DappDrop (public repos, `docs/SECURITY_FINDINGS.md`).
- Merged open-source contributions: wespreadjam/jam-nodes (5).
- Resumes: AI and Web3 variants, built from `resume/resume.html`.
- No portrait photography beyond `public/profilePic.jpg`, and no testimonials. Do not fabricate either.

## Product Principles

1. Proof over adjectives: every claim links to code, a case study, or a stated fact.
2. Engineer-to-engineer tone: specific, calm, no hype.
3. One clear next step on every page (call, email, or resume).
4. Honesty about status (testnet, private code, no numbers) is part of the credibility.

## Accessibility & Inclusion

WCAG AA contrast, keyboard navigation, screen-reader names, and reduced motion respected (all currently at Lighthouse accessibility 100).
