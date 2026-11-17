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
        slug: "lab-operations",
        name: "Lab operations platform",
        headline: "One flow from a hospital's order to a clinician-approved report",
        context: "At work · team platform · in production · private code",
        description:
            "The internal platform a diagnostics company runs on, tracking every case from test request to released report. I led the report pipeline, the clinician's review workspace and the partner-lab portal, and built the notification system and the order parser on my own.",
        challenge:
            "Reports moved between two applications through about three manual hand-offs, updates to doctors went out by hand, and hospital orders arrived as messy WhatsApp text that staff retyped field by field.",
        solution:
            "One pipeline from lab upload to approved report, automatic and logged updates, and AI in one bounded place: a model copies fields out of the order, and code checks every value before a person saves it.",
        tech: ["TypeScript", "Next.js", "PostgreSQL", "Prisma", "Jest", "Azure", "LLMs"],
        caseStudy: "/projects/lab-operations",
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
        slug: "voice-agent",
        name: "Real-time voice agent",
        headline: "In production for patients and doctors; 65% less manual physician work",
        context: "At work · co-built · in production · private code",
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
        no: "05",
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
        no: "06",
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
        no: "07",
        slug: "event-horizon",
        name: "Event Horizon",
        headline: "AI-assisted grant platform",
        context: "Hackathon · team of 3",
        description:
            "Base hackathon project; I wrote 32 of ~50 commits. Uses AI to score grant proposals and pays approved ones on-chain.",
        challenge: "Reviewing many grant proposals consistently and paying the approved ones without manual back-and-forth.",
        solution:
            "A Groq-hosted LLM scores proposals; a GrantDistribution contract with Foundry unit tests pays the approved ones.",
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
        summary: "I build core parts of the lab-operations platform a diagnostics company runs on, from a hospital's test order to a clinician-approved report. I learn how each team actually works, replace manual hand-offs with tested automation, and use AI only where a step needs language understanding.",
        highlights: [
            "Led the report pipeline that folded a second application into the platform: lab uploads go to the report engine and back automatically, removing about three manual hand-offs per report.",
            "Built the notification system on my own: event-driven email and WhatsApp updates to doctors, hospitals and field staff, with signed delivery webhooks, retries with backoff and no duplicate sends (87 tests).",
            "Built an LLM-assisted order parser that turns hospitals' free-text WhatsApp orders into a pre-filled case form; the model only copies text, and code verifies every value and never guesses.",
            "Led the clinician's review workspace and the partner-lab portal: every report needs clinician approval, and labs acknowledge samples and upload reports themselves.",
            "Built internal AI agents that give staff on-demand guidance at each step, instead of waiting on a senior.",
            "Co-built a real-time voice agent patients and doctors use daily; strict guardrails over a curated dataset cut manual physician intervention by 65%.",
        ],
        stack: ["TypeScript", "Next.js", "PostgreSQL", "Prisma", "Jest", "Azure", "Gemini Live"],
        current: true,
    },
    {
        role: "Founder",
        company: "DappDrop",
        period: "Jul 2025 – Present",
        summary: "My own product: a Sybil-resistant on-chain rewards protocol, pre-launch on Sepolia testnet and backed by a developer grant from Humanity Protocol.",
        highlights: [
            "Received a developer grant from Humanity Protocol to build DappDrop.",
            "Designed the protocol and security model: escrowed ERC-20/721/1155 rewards that settle by Merkle proof after participants complete verified tasks.",
            "AI coding agents write much of the code to my specs, behind a gate I set up: 240 unit + 26 invariant Foundry tests plus Slither and Aderyn. An invariant caught a cross-campaign fund-drain bug before launch.",
            "Built the off-chain path: EIP-712 signer, SIWE auth, a The Graph subgraph with RPC fallback, a keeper and a gasless relayer.",
        ],
        stack: ["Solidity", "Foundry", "EIP-712", "Merkle proofs", "Next.js", "PostgreSQL", "The Graph"],
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
            "Built and deployed ~10 web applications for clients, used by an estimated ~500 people.",
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
    },
    {
        degree: "Diploma, Computer Science and Engineering",
        school: "MGM Polytechnic, Maharashtra",
    },
];

export const skills: { label: string; items: string[] }[] = [
    { label: "Backend", items: ["TypeScript", "Node.js", "NestJS", "Express", "Bun", "REST", "Socket.io", "Prisma", "PostgreSQL", "Redis", "OAuth", "SIWE"] },
    { label: "AI", items: ["Gemini Live (native audio)", "Claude", "AWS Bedrock", "Groq", "MCP", "Voice agents", "Guardrails"] },
    { label: "Frontend", items: ["React", "Next.js", "Tailwind CSS"] },
    { label: "Infra", items: ["Docker", "GitHub Actions", "AWS (S3, CloudFront, Lambda, Bedrock)", "Azure", "Linux", "Vercel"] },
    { label: "Web3", items: ["Solidity", "Foundry", "ethers.js", "viem", "EIP-712", "Merkle proofs", "The Graph"] },
];
