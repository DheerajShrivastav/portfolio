"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion";

interface Project {
    role?: string;
    company?: string;
    period?: string;
    name: string;
    description: string;
    tech: string[];
    github?: string;
    live?: string;
}

const projects: Project[] = [
    {
        name: "DappDrop",
        description: "Web3 campaign platform with smart contracts for NFT rewards and social verification tasks.",
        tech: ["Solidity", "Next.js", "TypeScript", "Prisma"],
        github: "https://github.com/dheeraj/dappdrop",
        live: "#",
    },
    {
        name: "Job Wizard AI",
        description: "AI-powered job application assistant with intelligent resume matching.",
        tech: ["TypeScript", "Next.js", "OpenAI", "PostgreSQL"],
        github: "https://github.com/dheeraj/job-wizard",
    },
    {
        name: "Smart Contract Auditor",
        description: "Automated security analysis tool for Solidity smart contracts.",
        tech: ["Solidity", "Foundry", "Python"],
        github: "https://github.com/dheeraj/sc-auditor",
    },
    {
        name: "Slooze Backend",
        description: "Scalable NestJS backend with GraphQL API for food ordering platform.",
        tech: ["NestJS", "GraphQL", "Prisma", "PostgreSQL"],
        github: "https://github.com/dheeraj/slooze",
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
            <div className="max-w-4xl mx-auto px-6">
                {/* Section header */}
                <div className="mb-12">
                    <h2 className="font-mono text-accent-green mb-2 section-header uppercase tracking-wider text-sm">
                        Projects
                    </h2>
                    <p className="text-text-secondary text-lg">Featured work and open-source contributions.</p>
                </div>

                {/* Project list with staggered animation */}
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
                            className="glass-card p-8 group flex flex-col h-full hover:-translate-y-2 transition-all duration-300"
                        >
                            {/* Project name + links */}
                            <div className="flex items-start justify-between mb-4">
                                <h3 className="text-2xl font-bold text-text-primary group-hover:text-accent-green transition-colors tracking-tight">
                                    {project.name}
                                </h3>
                                <div className="flex gap-4">
                                    {project.github && (
                                        <Link
                                            href={project.github}
                                            target="_blank"
                                            className="text-text-muted hover:text-accent-blue transition-all hover:scale-110"
                                            title="View Source Code"
                                        >
                                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.041-1.416-4.041-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.841 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                                        </Link>
                                    )}
                                    {project.live && (
                                        <Link
                                            href={project.live}
                                            target="_blank"
                                            className="text-text-muted hover:text-accent-green transition-all hover:scale-110"
                                            title="Live Demo"
                                        >
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                                        </Link>
                                    )}
                                </div>
                            </div>

                            {/* Description */}
                            <p className="text-text-secondary mb-6 flex-1 leading-relaxed">
                                {project.description}
                            </p>

                            {/* Tech stack */}
                            <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-border/30">
                                {project.tech.map((t) => (
                                    <span key={t} className="tag bg-accent-green/5 text-accent-green border-accent-green/20">
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
