"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion";

interface Contribution {
    description: string;
    pr: string;
    prNumber: string;
}

interface Project {
    name: string;
    repo: string;
    contributions: Contribution[];
}

const ossProjects: Project[] = [
    {
        name: "spreadjam",
        repo: "https://github.com/wespreadjam/jam-nodes",
        contributions: [
            {
                description: "Added Dev.to integration (devtoCreateArticle, devtoUpdateArticle, devtoGetArticles)",
                pr: "https://github.com/wespreadjam/jam-nodes/pull/44",
                prNumber: "#44",
            },
            {
                description: "Added WordPress integration with blog publishing support",
                pr: "https://github.com/wespreadjam/jam-nodes/pull/45",
                prNumber: "#45",
            },
            {
                description: "Added webhookTriggerNode for receiving incoming HTTP webhooks",
                pr: "https://github.com/wespreadjam/jam-nodes/pull/48",
                prNumber: "#48",
            },
            {
                description: "Added Implementation of rateLimiterNode",
                pr: "https://github.com/wespreadjam/jam-nodes/pull/49",
                prNumber: "#49",
            },
            {
                description: "Added DataForSEO Extended Operations",
                pr: "https://github.com/wespreadjam/jam-nodes/pull/51",
                prNumber: "#51",
            },
        ],
    },
];

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.08,
        },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.35, ease: "easeOut" },
    },
};

export default function OpenSource() {
    return (
        <section id="opensource" className="py-24 border-t border-border/50">
            <div className="max-w-4xl mx-auto px-6">
                <div className="mb-12">
                    <h2 className="font-mono text-accent-green mb-2 section-header uppercase tracking-wider text-sm">
                        Open Source Contributions
                    </h2>
                    <p className="text-text-secondary text-lg max-w-2xl">
                        Merged pull requests to production open-source projects.
                    </p>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="space-y-8"
                >
                    {ossProjects.map((project) => (
                        <motion.div
                            key={project.name}
                            variants={itemVariants}
                            className="glass-card p-6 md:p-8"
                        >
                            {/* Project header */}
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-2 h-2 rounded-full bg-accent-green animate-pulse" />
                                <Link
                                    href={project.repo}
                                    target="_blank"
                                    className="font-mono text-lg font-bold text-text-primary hover:text-accent-green transition-colors"
                                >
                                    {project.name}
                                </Link>
                                <Link
                                    href={project.repo}
                                    target="_blank"
                                    className="text-text-muted hover:text-accent-blue transition-colors ml-auto"
                                    title="View Repository"
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.041-1.416-4.041-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.841 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                    </svg>
                                </Link>
                            </div>

                            {/* Terminal-style contribution log */}
                            <div className="bg-bg-primary/80 rounded-md border border-border/50 overflow-hidden">
                                {/* Terminal bar */}
                                <div className="flex items-center gap-2 px-4 py-2 border-b border-border/50 bg-bg-primary">
                                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                                    <span className="text-[10px] font-mono text-text-muted ml-2">
                                        git log --author=dheeraj --oneline
                                    </span>
                                </div>

                                {/* Contributions */}
                                <motion.div
                                    variants={containerVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    className="p-4 space-y-3"
                                >
                                    {project.contributions.map((contrib, i) => (
                                        <motion.div
                                            key={i}
                                            variants={itemVariants}
                                            className="group flex items-start gap-3 font-mono text-sm"
                                        >
                                            <span className="text-accent-green shrink-0 mt-0.5">$</span>
                                            <div className="flex-1 min-w-0">
                                                <p className="text-text-secondary group-hover:text-text-primary transition-colors leading-relaxed">
                                                    {contrib.description}
                                                </p>
                                                <Link
                                                    href={contrib.pr}
                                                    target="_blank"
                                                    className="inline-flex items-center gap-1.5 text-accent-blue hover:text-accent-green text-xs mt-1 transition-colors"
                                                >
                                                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                        <circle cx="18" cy="18" r="3" />
                                                        <circle cx="6" cy="6" r="3" />
                                                        <path d="M13 6h3a2 2 0 0 1 2 2v7" />
                                                        <line x1="6" y1="9" x2="6" y2="21" />
                                                    </svg>
                                                    PR {contrib.prNumber}
                                                </Link>
                                            </div>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            </div>

                            {/* Stats footer */}
                            <div className="mt-4 flex items-center gap-4 text-[11px] font-mono text-text-muted">
                                <span className="flex items-center gap-1.5">
                                    <svg className="w-3.5 h-3.5 text-accent-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="18" cy="18" r="3" />
                                        <circle cx="6" cy="6" r="3" />
                                        <path d="M13 6h3a2 2 0 0 1 2 2v7" />
                                        <line x1="6" y1="9" x2="6" y2="21" />
                                    </svg>
                                    {project.contributions.length} PRs merged
                                </span>
                                <span className="text-border">|</span>
                                <span className="uppercase tracking-wider">Active Contributor</span>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
