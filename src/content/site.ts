// Single source for the site's facts. Every claim here is fact-checked against code or the owner's statements;
// do not add metrics, users or customers. Work items keep a stable index number across the home page and case studies.

export const EMAIL = "dheerajshrivastav08@gmail.com";
export const CALL_URL = "https://cal.com/dheeraj-shrivastav/30min";
export const RESUME_URL = "/resume/Dheeraj-Shrivastav-Resume.pdf";

export const profiles = [
    { label: "GitHub", href: "https://github.com/DheerajShrivastav" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/dheerajshrivastav/" },
    { label: "X", href: "https://x.com/Dheeraj_08_" },
];

export interface WorkLink {
    label: string;
    href: string;
}

export interface WorkItem {
    no: string;
    slug: string;
    name: string;
    headline: string;
    context: string;
    description: string;
    challenge?: string;
    solution?: string;
    contributions?: WorkLink[];
    tech: string[];
    caseStudy?: string;
    links: WorkLink[];
}

export const work: WorkItem[] = [
    {
        no: "01",
        slug: "voice-agent",
        name: "Real-time voice agent",
        headline: "Voice AI for patients and doctors, on Gemini Live",
        context: "At work · in production · private code",
        description:
            "Holds live voice conversations with patients and doctors and helps with their daily workflow: self-assessments, answers from a curated dataset, and personalized reports that doctors approve. Works in any language Gemini Live supports, switching mid-conversation.",
        challenge: "A voice agent feels broken if it pauses, and in healthcare a fluent made-up answer is worse than none.",
        solution:
            "Native speech-to-speech on Gemini Live (no separate STT/TTS hops) for live conversation, strict rules that keep answers inside a curated dataset, and a token-efficient harness. Manual physician intervention dropped 65%.",
        tech: ["Gemini Live", "Node.js", "TypeScript", "WebSockets", "Azure"],
        caseStudy: "/projects/voice-agent",
        links: [],
    },
    {
        no: "02",
        slug: "dappdrop",
        name: "DappDrop",
        headline: "Sybil-resistant on-chain rewards protocol",
        context: "Founder · testnet",
        description:
            "My own product, pre-launch on Sepolia testnet. Escrowed ERC-20/721/1155 rewards settle via Merkle proofs after participants complete verified tasks. Built with AI coding agents behind a gate I set up: 240 unit + 26 invariant tests and Slither/Aderyn static analysis.",
        challenge:
            "ERC-20 escrow is one shared balance across campaigns, so a late claim on an already-swept campaign could be paid out of another campaign's funds.",
        solution:
            "An escrow-solvency invariant test caught it before launch, not manual review. Claims now revert once a campaign is swept, with a regression test.",
        tech: ["Solidity", "Foundry", "EIP-712", "Merkle proofs", "Next.js", "PostgreSQL", "The Graph", "SIWE"],
        caseStudy: "/projects/dappdrop",
        links: [
            { label: "Contracts", href: "https://github.com/DheerajShrivastav/Dapp-Drop-Smart-Contract" },
            { label: "Live app (testnet)", href: "https://dapp-drop.dheerajshrivastav.me/" },
        ],
    },
    {
        no: "03",
        slug: "jam-nodes",
        name: "jam-nodes",
        headline: "Open-source workflow-automation framework (wespreadjam, 200+ stars)",
        context: "Open source · 5 contributions merged",
        description: "Merged contributions to an external TypeScript framework, with tests.",
        contributions: [
            { label: "Dev.to integration (create, update, and list articles), shipped with 27 tests", href: "https://github.com/wespreadjam/jam-nodes/commit/d5137d8" },
            { label: "WordPress integration with blog publishing support", href: "https://github.com/wespreadjam/jam-nodes/commit/6269fc7" },
            { label: "webhookTriggerNode for receiving incoming HTTP webhooks, with tests", href: "https://github.com/wespreadjam/jam-nodes/pull/48" },
            { label: "rateLimiterNode with fixed-window and sliding-window strategies", href: "https://github.com/wespreadjam/jam-nodes/pull/49" },
            { label: "DataForSEO extended operations (backlinks, SERP, people-also-ask)", href: "https://github.com/wespreadjam/jam-nodes/pull/51" },
        ],
        tech: ["TypeScript", "Zod"],
        links: [{ label: "Repository", href: "https://github.com/wespreadjam/jam-nodes" }],
    },
    {
        no: "04",
        slug: "aws-deploy-ai",
        name: "AWS Deploy AI",
        headline: "Natural-language AWS deployments",
        context: "Solo",
        description:
            "An MCP server and Next.js app: connect a GitHub repo, describe what you want in plain English, and it gets deployed to AWS.",
        challenge: "Turning a vague plain-English request into a concrete, working AWS deployment for an arbitrary repository.",
        solution:
            "MCP tools (analyze_repository, deploy_from_github) let AWS Bedrock (Claude) plan the deployment; the server provisions S3 + CloudFront or Lambda and reports status.",
        tech: ["TypeScript", "MCP", "AWS Bedrock", "S3", "CloudFront", "Lambda", "Next.js"],
        links: [{ label: "Code", href: "https://github.com/DheerajShrivastav/aws-deploy-ai" }],
    },
    {
        no: "05",
        slug: "latch",
        name: "Latch",
        headline: "Real-time multiplayer browser game",
        context: "Hackathon · team of 4",
        description: "A team game where players explore, chat, and fight in shared scenes. My part was the real-time multiplayer layer.",
        challenge: "Keeping player movement, combat, and health consistent across every connected browser in real time.",
        solution:
            "Clients emit movement at fixed intervals over Socket.io; the server resolves attacks, tracks health, and broadcasts animation state to the scene.",
        tech: ["Phaser 3", "Socket.io", "Express", "PostgreSQL"],
        links: [
            { label: "My commits", href: "https://github.com/DheerajShrivastav/latch/commits?author=DheerajShrivastav" },
            { label: "Live demo", href: "https://latch.netlify.app/" },
        ],
    },
    {
        no: "06",
        slug: "event-horizon",
        name: "Event Horizon",
        headline: "AI-assisted grant platform",
        context: "Hackathon · team of 3",
        description:
            "Base hackathon project, team of 3; I wrote 32 of ~50 commits. Uses AI to score grant proposals and pays approved ones on-chain.",
        challenge: "Reviewing many grant proposals consistently and paying the approved ones without manual back-and-forth.",
        solution:
            "A Groq-hosted LLM scores proposals; a GrantDistribution contract with Foundry unit tests running in CI pays the approved ones.",
        tech: ["Solidity", "Foundry", "Base", "Groq", "TypeScript", "PostgreSQL"],
        links: [{ label: "Code", href: "https://github.com/DheerajShrivastav/decentralized-grant-program-dapp" }],
    },
];

export interface Role {
    role: string;
    company: string;
    period: string;
    summary: string;
    highlights: string[];
    stack: string[];
    current?: boolean;
}

export const experience: Role[] = [
    {
        role: "Product Developer",
        company: "Seragen Biotherapeutics",
        period: "Jun 2026 – Present",
        summary: "Building AI-powered products for patient care and internal operations.",
        highlights: [
            "Built a real-time voice AI agent on Gemini Live that talks with patients and doctors in any supported language, with strict guardrails over a curated dataset; it reduced manual physician intervention by 65%.",
            "Designed a doctor-in-the-loop flow: AI drafts personalized patient reports and doctors approve them before delivery.",
            "Consolidated the team's separate tools into a single automated pipeline, removing manual hand-offs between steps.",
            "Built internal AI agents that give staff on-demand recommendations, cutting routine escalations to seniors.",
        ],
        stack: ["Gemini Live", "Claude", "Node.js", "TypeScript", "WebSockets", "Azure"],
        current: true,
    },
    {
        role: "Software Engineer Intern",
        company: "Scalefull Technologies",
        period: "Feb 2026 – May 2026",
        summary: "Backend engineering on core microservices.",
        highlights: [
            "Improved backend performance by ~25% with caching layers and REST API refactors.",
            "Designed and migrated PostgreSQL schemas to speed up queries on high-concurrency read paths.",
            "Raised test coverage on core microservices to ~90% and standardized API docs with Swagger/OpenAPI.",
        ],
        stack: ["Node.js", "TypeScript", "NestJS", "PostgreSQL", "Swagger"],
    },
    {
        role: "Freelance Software Developer",
        company: "Self-employed",
        period: "Oct 2023 – Sep 2025",
        summary: "Web apps and APIs for clients, end to end from build to deploy.",
        highlights: [
            "Built and deployed 10+ web applications for clients, actively used by 500+ users.",
            "Roughly halved API response times with Redis caching and query optimization in Express/Prisma services.",
            "Set up Docker-based CI/CD with GitHub Actions, replacing manual deploys.",
        ],
        stack: ["React", "Next.js", "Node.js", "Express", "Prisma", "PostgreSQL", "Redis", "Docker"],
    },
];

export const education = [
    {
        degree: "B.Tech, Computer Science and Engineering (AI & ML)",
        school: "Deogiri Institute of Engineering and Management Studies (DIEMS), Maharashtra",
        period: "2023 – 2026",
    },
    {
        degree: "Diploma, Computer Science and Engineering",
        school: "MGM Polytechnic, Maharashtra",
        period: "2020 – 2023",
    },
];

export const skills: { label: string; items: string[] }[] = [
    { label: "AI", items: ["Gemini Live (native audio)", "Claude", "AWS Bedrock", "Groq", "Voice agents", "AI agents", "Guardrails", "MCP"] },
    { label: "Backend", items: ["TypeScript", "Node.js", "NestJS", "Express", "Bun", "REST", "Socket.io", "Prisma", "PostgreSQL", "Redis", "OAuth", "SIWE"] },
    { label: "Web3", items: ["Solidity", "Foundry", "ethers.js", "viem", "EIP-712", "Merkle proofs", "The Graph"] },
    { label: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "Phaser"] },
    { label: "Infra", items: ["Docker", "GitHub Actions", "AWS (S3, CloudFront, Lambda, Bedrock)", "Azure", "Linux", "Vercel"] },
];
