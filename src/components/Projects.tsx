"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, Variants } from "framer-motion";

interface Project {
    name: string;
    headline: string;
    description: string;
    engineeringFocus: string;
    challenge: string;
    solution: string;
    tech: string[];
    context: string;
    github?: string;
    live?: string;
    featured?: boolean;
}

const TechnicalDeepDive = ({ challenge, solution, stack }: { challenge: string; solution: string; stack: string[] }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="mt-auto pt-4">
            <div className="border border-accent-green/30 bg-accent-green/5 rounded-md p-3">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="text-xs font-mono text-accent-green hover:text-accent-green/80 flex items-center gap-2 w-full transition-colors"
                >
                    <span>{isOpen ? "▼" : "▶"} The hardest problem and how I solved it</span>
                </button>

                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden font-mono text-[11px] mt-3 space-y-3 border-t border-accent-green/20 pt-3"
                        >
                            <p className="leading-relaxed">
                                <span className="text-red-400 font-bold">[ISSUE]:</span> {challenge}
                            </p>
                            <p className="leading-relaxed">
                                <span className="text-blue-400 font-bold">[SOLVE]:</span> {solution}
                            </p>
                            <div className="flex flex-wrap gap-2 mt-2">
                                {stack.map((s) => (
                                    <span key={s} className="bg-accent-green/20 text-accent-green px-1.5 py-0.5 rounded text-[10px]">
                                        {s}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

const projects: Project[] = [
    {
        name: "DappDrop",
        headline: "Sybil-Resistant On-Chain Rewards Protocol",
        engineeringFocus: "Protocol Design, Invariant Testing & Off-Chain Infra",
        description: "My own product, pre-launch on Sepolia testnet. Projects run reward campaigns, participants complete verified tasks, and escrowed ERC-20/721/1155 rewards settle via Merkle proofs. I set the architecture and security model and build it with AI coding agents, gated by 240 unit tests, 26 invariant tests, and Slither/Aderyn static analysis. I review every merge.",
        challenge: "ERC-20 escrow is one shared token balance across campaigns. A late claim on a campaign whose leftovers had already been swept back to its host could be paid out of a different campaign's escrow.",
        solution: "An escrow-solvency invariant test caught it before launch, not manual review. claimERC20 now reverts once a campaign is swept, with a regression test. The same suite fuzzes NFT inventory and EIP-712 attestation replay.",
        tech: ["Solidity", "Foundry", "EIP-712", "Merkle Proofs", "Next.js", "PostgreSQL", "The Graph", "SIWE"],
        context: "Founder · testnet",
        live: "https://dapp-drop.dheerajshrivastav.me/",
        github: "https://github.com/DheerajShrivastav/Dapp-Drop-Smart-Contract",
        featured: true,
    },
    {
        name: "AWS Deploy AI",
        headline: "Natural-Language AWS Deployments",
        engineeringFocus: "LLM Tooling via MCP & AWS Automation",
        description: "An MCP server and Next.js app: connect a GitHub repo, describe what you want in plain English, and it gets deployed to AWS.",
        challenge: "Turning a vague plain-English request into a concrete, working AWS deployment for an arbitrary repository.",
        solution: "The MCP server exposes analyze_repository and deploy_from_github tools. AWS Bedrock (Claude) analyzes the repo and plans the deployment, then the server provisions S3 + CloudFront or Lambda and reports deployment status.",
        tech: ["TypeScript", "MCP", "AWS Bedrock", "S3", "CloudFront", "Lambda", "Next.js"],
        context: "Solo",
        github: "https://github.com/DheerajShrivastav/aws-deploy-ai",
    },
    {
        name: "Latch",
        headline: "Real-Time Multiplayer Browser Game",
        engineeringFocus: "Real-Time State Sync over Socket.io",
        description: "A team game where players explore, chat, and fight in shared scenes. My part was the real-time multiplayer layer.",
        challenge: "Keeping player movement, combat, and health consistent across every connected browser in real time.",
        solution: "Clients emit movement to the server at fixed intervals over Socket.io; the server resolves attacks, tracks health, and broadcasts animation state to everyone in the scene.",
        tech: ["Phaser 3", "Socket.io", "Express", "PostgreSQL"],
        context: "Hackathon · team of 4",
        live: "https://latch.netlify.app/",
        github: "https://github.com/DheerajShrivastav/latch/commits?author=DheerajShrivastav",
    },
    {
        name: "Event Horizon",
        headline: "AI-Assisted Grant Platform",
        engineeringFocus: "LLM Evaluation + On-Chain Payouts",
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

export default function Projects() {
    return (
        <section id="projects" className="py-24 border-t border-border/50 bg-bg-secondary/30">
            <div className="max-w-5xl mx-auto px-6">
                <div className="mb-16">
                    <h2 className="font-mono text-accent-green mb-2 section-header uppercase tracking-wider text-sm">
                        Projects
                    </h2>
                    <p className="text-text-secondary text-lg max-w-2xl">
                        Things I built outside work. Every claim here links to code you can read.
                    </p>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                    {projects.map((project) => {
                        const projectLink = project.live || project.github;

                        return (
                            <motion.article
                                key={project.name}
                                variants={itemVariants}
                                className={`glass-card p-8 group flex flex-col h-full hover:border-accent-green/30 transition-all duration-300 ${project.featured ? "md:col-span-2" : ""
                                    }`}
                            >
                                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
                                    <div className="flex-1 min-w-0">
                                        <div className="flex flex-wrap items-center gap-3 mb-2">
                                            {projectLink ? (
                                                <Link
                                                    href={projectLink}
                                                    target="_blank"
                                                    className="hover:text-accent-green transition-colors min-w-0"
                                                >
                                                    <h3 className="text-2xl font-bold text-text-primary tracking-tight truncate">
                                                        {project.name}
                                                    </h3>
                                                </Link>
                                            ) : (
                                                <h3 className="text-2xl font-bold text-text-primary tracking-tight">
                                                    {project.name}
                                                </h3>
                                            )}
                                            <span className="shrink-0 px-2 py-0.5 rounded text-[10px] font-mono border border-accent-green/20 text-accent-green bg-accent-green/5">
                                                {project.context}
                                            </span>
                                        </div>
                                        <div className="mb-3">
                                            {projectLink ? (
                                                <Link
                                                    href={projectLink}
                                                    target="_blank"
                                                    className="text-accent-green/80 font-mono text-xs uppercase tracking-widest font-semibold hover:text-accent-green transition-colors block"
                                                >
                                                    {project.headline}
                                                </Link>
                                            ) : (
                                                <p className="text-accent-green/80 font-mono text-xs uppercase tracking-widest font-semibold">
                                                    {project.headline}
                                                </p>
                                            )}
                                        </div>
                                        <div className="flex items-center gap-2 text-text-muted text-[11px] font-mono">
                                            <span className="w-1.5 h-1.5 rounded-full bg-accent-green animate-pulse" />
                                            FOCUS: {project.engineeringFocus}
                                        </div>
                                    </div>

                                    <div className="flex md:flex-col items-center md:items-end gap-4 shrink-0">
                                        {project.github && (
                                            <Link
                                                href={project.github}
                                                target="_blank"
                                                className="flex items-center gap-3 text-text-muted hover:text-accent-blue transition-all group/link relative"
                                                title="View Source Code"
                                            >
                                                <span className="text-[10px] font-mono uppercase tracking-wider opacity-0 pointer-events-none group-hover/link:opacity-100 transition-opacity absolute right-full mr-3 whitespace-nowrap hidden md:block">
                                                    View Code
                                                </span>
                                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.041-1.416-4.041-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.841 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                                </svg>
                                            </Link>
                                        )}
                                        {project.live && (
                                            <Link
                                                href={project.live}
                                                target="_blank"
                                                className="flex items-center gap-3 text-text-muted hover:text-accent-green transition-all group/link relative"
                                                title="Live Demo"
                                            >
                                                <span className="text-[10px] font-mono uppercase tracking-wider opacity-0 pointer-events-none group-hover/link:opacity-100 transition-opacity absolute right-full mr-3 whitespace-nowrap hidden md:block">
                                                    View Demo
                                                </span>
                                                <svg
                                                    className="w-6 h-6"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                >
                                                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                                    <polyline points="15 3 21 3 21 9"></polyline>
                                                    <line x1="10" y1="14" x2="21" y2="3"></line>
                                                </svg>
                                            </Link>
                                        )}
                                    </div>
                                </div>

                                <p className="text-text-secondary mb-10 leading-relaxed flex-grow">
                                    {project.description}
                                </p>

                                <TechnicalDeepDive
                                    challenge={project.challenge}
                                    solution={project.solution}
                                    stack={project.tech}
                                />

                                <div className="flex flex-wrap gap-2 mt-8 pt-5 border-t border-border/30">
                                    {project.tech.slice(0, 5).map((t) => (
                                        <span
                                            key={t}
                                            className="tag bg-accent-green/5 text-accent-green border-accent-green/20 md:opacity-60 md:group-hover:opacity-100 group-hover:bg-accent-green/10 transition-all duration-300"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                    {project.tech.length > 5 && (
                                        <span className="text-[10px] text-text-muted font-mono mt-1 group-hover:text-text-secondary transition-colors">
                                            +{project.tech.length - 5} more
                                        </span>
                                    )}
                                </div>
                            </motion.article>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
