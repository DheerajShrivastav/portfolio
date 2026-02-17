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
    mainnetStatus: "LIVE" | "STABLE" | "BETA" | "ALPHA";
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
                    <span>{isOpen ? "▼" : "▶"} SYSTEM_LOG: View Engineering Challenge</span>
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
        name: "AWS Deploy AI",
        headline: "Autonomous Infrastructure-as-Code Engine",
        engineeringFocus: "LLM-orchestrated DevOps & IAM Security",
        description: "An AI-native orchestration layer that converts natural language into production-grade AWS environments via MCP servers.",
        challenge: "Preventing 'hallucinated' insecure IAM policies in auto-generated IaC.",
        solution: "Built a validation middleware that scrubs generated Terraform against AWS Well-Architected benchmarks before deployment.",
        tech: ["LLMs", "Node.js", "Python", "Docker", "Terraform", "AWS"],
        mainnetStatus: "STABLE",
        github: "https://github.com/DheerajShrivastav/aws-deploy-ai",
        featured: true,
    },
    {
        name: "Latch",
        headline: "Real-Time On-Chain State Machine",
        engineeringFocus: "WebSocket Synchronization & Gas Optimization",
        description: "A multiplayer game settled on-chain with sub-second perceived latency and complex smart contract logic.",
        challenge: "Matching fast-paced gameplay with 2-second block times on L2.",
        solution: "Implemented optimistic UI updates via WebSockets with a recursive SNARK-inspired batching system to settle multiple moves in a single transaction.",
        tech: ["Solidity", "Hardhat", "WebSockets", "React", "Node.js"],
        mainnetStatus: "LIVE",
        live: "https://latch.netlify.app/",
        github: "https://github.com/DheerajShrivastav/latch",
    },
    {
        name: "Dapp Dropp",
        headline: "Sybil-Resistant Airdrop Infrastructure",
        engineeringFocus: "Cryptographic Attestation & Backend Scalability",
        description: "A cross-chain SaaS platform for automated, verified token distribution with social and on-chain verification.",
        challenge: "Verifying off-chain social actions (Twitter/Discord) without exposing central API vulnerabilities.",
        solution: "Engineered a custom backend oracle using EIP-712 typed data signatures to ensure only cryptographically verified users can trigger the claim function.",
        tech: ["Solidity", "Next.js", "Node.js", "PostgreSQL", "Web3.js"],
        mainnetStatus: "LIVE",
        live: "https://dapp-drop.vercel.app/",
        github: "https://github.com/DheerajShrivastav/DappDrop-FrontEnd",
    },
    {
        name: "Event Horizon",
        headline: "AI-Powered Grant Platform",
        engineeringFocus: "AI + Blockchain Fusion",
        description: "Decentralized grant distribution on Base L2 with automated proposal evaluation and lifecycle management.",
        challenge: "Reducing manual overhead in grant processing and ensuring fair proposal scoring.",
        solution: "Integrated OpenAI API for automated proposal evaluation coupled with bulk crypto payout smart contracts for instantaneous distribution.",
        tech: ["Solidity", "Base L2", "Node.js", "PostgreSQL", "OpenAI API"],
        mainnetStatus: "BETA",
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
                        Engineering Projects
                    </h2>
                    <p className="text-text-secondary text-lg max-w-2xl">
                        Technical deep-dives into infrastructure, state machines, and cryptographic systems.
                    </p>
                </div>

                {/* Engineering Stats Bar */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-16"
                >
                    {[
                        { label: "Systems Built", value: "10+", accent: "text-accent-blue", icon: "sys" },
                        { label: "Contracts Deployed", value: "15+", accent: "text-accent-green", icon: "0x" },
                        { label: "Test Coverage", value: "90%+", accent: "text-accent-green", icon: "ok" }
                    ].map((stat, i) => (
                        <motion.div
                            key={i}
                            variants={itemVariants}
                            className="glass-card p-6 flex flex-col items-center justify-center text-center group hover:border-accent-green/30 transition-all duration-300 relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-2 opacity-5 font-mono text-xs uppercase tracking-widest">{stat.icon}</div>
                            <div className={`text-3xl font-bold ${stat.accent} mb-1 tracking-tight group-hover:scale-110 transition-transform`}>
                                {stat.value}
                            </div>
                            <div className="text-[10px] font-mono text-text-muted uppercase tracking-[0.2em]">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

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
                                                {project.mainnetStatus}
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
                                            className="tag bg-accent-green/5 text-accent-green border-accent-green/20 opacity-40 group-hover:opacity-100 group-hover:bg-accent-green/10 transition-all duration-300"
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
