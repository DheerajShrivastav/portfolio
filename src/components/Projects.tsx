"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion";

interface Project {
    name: string;
    headline: string;
    description: string;
    challenge: string;
    solution: string;
    tech: string[];
    context: string;
    github?: string;
    live?: string;
    featured?: boolean;
    caseStudy?: string;
}

const projects: Project[] = [
    {
        name: "Real-Time Voice Agent",
        headline: "Voice AI agent for patients and doctors, on Gemini Live",
        description: "Holds live voice conversations with patients and doctors and helps with their daily workflow: self-assessments, answers from a curated dataset, and personalized reports that doctors approve. Works in any language Gemini Live supports, switching mid-conversation.",
        challenge: "A voice agent feels broken if it pauses, and in healthcare a fluent made-up answer is worse than none.",
        solution: "Native speech-to-speech on Gemini Live (no separate STT/TTS hops) for live conversation, strict rules that keep answers inside a curated dataset, and a token-efficient harness. Manual physician intervention dropped 65%.",
        tech: ["Gemini Live", "Node.js", "TypeScript", "WebSockets", "Azure"],
        context: "At work · in production · private code",
        featured: true,
        caseStudy: "/projects/voice-agent",
    },
    {
        name: "DappDrop",
        headline: "Sybil-resistant on-chain rewards protocol",
        description: "My own product, pre-launch on Sepolia testnet. Escrowed ERC-20/721/1155 rewards settle via Merkle proofs after participants complete verified tasks. Built with AI coding agents behind a gate I set up: 240 unit + 26 invariant tests and Slither/Aderyn static analysis.",
        challenge: "ERC-20 escrow is one shared balance across campaigns, so a late claim on an already-swept campaign could be paid out of another campaign's funds.",
        solution: "An escrow-solvency invariant test caught it before launch, not manual review. Claims now revert once a campaign is swept, with a regression test.",
        tech: ["Solidity", "Foundry", "EIP-712", "Merkle Proofs", "Next.js", "PostgreSQL", "The Graph", "SIWE"],
        context: "Founder · testnet",
        live: "https://dapp-drop.dheerajshrivastav.me/",
        github: "https://github.com/DheerajShrivastav/Dapp-Drop-Smart-Contract",
        featured: true,
        caseStudy: "/projects/dappdrop",
    },
    {
        name: "AWS Deploy AI",
        headline: "Natural-language AWS deployments",
        description: "An MCP server and Next.js app: connect a GitHub repo, describe what you want in plain English, and it gets deployed to AWS.",
        challenge: "Turning a vague plain-English request into a concrete, working AWS deployment for an arbitrary repository.",
        solution: "MCP tools (analyze_repository, deploy_from_github) let AWS Bedrock (Claude) plan the deployment; the server provisions S3 + CloudFront or Lambda and reports status.",
        tech: ["TypeScript", "MCP", "AWS Bedrock", "S3", "CloudFront", "Lambda", "Next.js"],
        context: "Solo",
        github: "https://github.com/DheerajShrivastav/aws-deploy-ai",
    },
    {
        name: "Latch",
        headline: "Real-time multiplayer browser game",
        description: "A team game where players explore, chat, and fight in shared scenes. My part was the real-time multiplayer layer.",
        challenge: "Keeping player movement, combat, and health consistent across every connected browser in real time.",
        solution: "Clients emit movement at fixed intervals over Socket.io; the server resolves attacks, tracks health, and broadcasts animation state to the scene.",
        tech: ["Phaser 3", "Socket.io", "Express", "PostgreSQL"],
        context: "Hackathon · team of 4",
        live: "https://latch.netlify.app/",
        github: "https://github.com/DheerajShrivastav/latch/commits?author=DheerajShrivastav",
    },
    {
        name: "Event Horizon",
        headline: "AI-assisted grant platform",
        description: "Base hackathon project, team of 3; I wrote 32 of ~50 commits. Uses AI to score grant proposals and pays approved ones on-chain.",
        challenge: "Reviewing many grant proposals consistently and paying the approved ones without manual back-and-forth.",
        solution: "A Groq-hosted LLM scores proposals; a GrantDistribution contract with Foundry unit tests running in CI pays the approved ones.",
        tech: ["Solidity", "Foundry", "Base", "Groq", "TypeScript", "PostgreSQL"],
        context: "Hackathon · team of 3",
        github: "https://github.com/DheerajShrivastav/decentralized-grant-program-dapp",
    },
];

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.4, ease: "easeOut" },
    },
};

const ext = { target: "_blank", rel: "noopener noreferrer" } as const;

const GitHubIcon = () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.041-1.416-4.041-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.841 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
);

const ExternalIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
        <polyline points="15 3 21 3 21 9" />
        <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
);

// A lone non-featured card in the last row spans the full width instead of leaving an empty slot.
const regular = projects.filter((p) => !p.featured);
const lastLoneCard = regular.length % 2 === 1 ? regular[regular.length - 1] : undefined;

export default function Projects() {
    return (
        <section id="projects" className="py-24 border-t border-border/50 bg-bg-secondary/30">
            <div className="max-w-5xl mx-auto px-6">
                <div className="mb-12">
                    <h2 className="font-mono text-accent-green mb-2 section-header">
                        Projects
                    </h2>
                    <p className="text-text-secondary text-lg max-w-2xl">
                        What I&apos;ve built. Work projects are private; everything else links to code you can read.
                    </p>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                    {projects.map((project) => (
                        <motion.article
                            key={project.name}
                            variants={itemVariants}
                            className={`glass-card p-6 md:p-8 flex flex-col h-full ${project.featured || project === lastLoneCard ? "md:col-span-2" : ""}`}
                        >
                            <div className="flex items-start justify-between gap-4 mb-4">
                                <div className="min-w-0">
                                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-1">
                                        <h3 className="text-2xl font-bold text-text-primary tracking-tight">
                                            {project.name}
                                        </h3>
                                        <span className="px-2 py-0.5 rounded text-xs font-mono border border-accent-green/30 text-accent-green bg-accent-green/5">
                                            {project.context}
                                        </span>
                                    </div>
                                    <p className="text-sm font-medium text-text-primary/90">{project.headline}</p>
                                </div>

                                <div className="flex items-center gap-4 shrink-0 pt-1">
                                    {project.github && (
                                        <a
                                            href={project.github}
                                            {...ext}
                                            aria-label={`${project.name} source on GitHub`}
                                            className="text-text-muted hover:text-accent-blue transition-colors"
                                        >
                                            <GitHubIcon />
                                        </a>
                                    )}
                                    {project.live && (
                                        <a
                                            href={project.live}
                                            {...ext}
                                            aria-label={`${project.name} live demo`}
                                            className="text-text-muted hover:text-accent-green transition-colors"
                                        >
                                            <ExternalIcon />
                                        </a>
                                    )}
                                </div>
                            </div>

                            <p className="text-text-secondary leading-relaxed mb-5">
                                {project.description}
                            </p>

                            <dl className="text-sm leading-relaxed space-y-2 mb-5">
                                <div>
                                    <dt className="inline font-semibold text-text-primary">Hard part: </dt>
                                    <dd className="inline text-text-secondary">{project.challenge}</dd>
                                </div>
                                <div>
                                    <dt className="inline font-semibold text-text-primary">Fix: </dt>
                                    <dd className="inline text-text-secondary">{project.solution}</dd>
                                </div>
                            </dl>

                            {project.caseStudy && (
                                <Link
                                    href={project.caseStudy}
                                    className="self-start mb-5 font-mono text-sm text-accent-green hover:underline"
                                >
                                    Read the case study: architecture and trade-offs →
                                </Link>
                            )}

                            <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-border/30">
                                {project.tech.map((t) => (
                                    <span key={t} className="tag">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </motion.article>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
