"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface Project {
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

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.4, ease: "easeOut" },
    },
};

export default function Projects() {
    return (
        <section id="projects" className="py-16 border-t border-border">
            <div className="max-w-4xl mx-auto px-6">
                {/* Section header */}
                <h2 className="font-mono text-accent-green mb-8 section-header">
                    $ ls projects/
                </h2>

                {/* Project list with staggered animation */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="space-y-4"
                >
                    {projects.map((project) => (
                        <motion.article
                            key={project.name}
                            variants={itemVariants}
                            className="glass-card p-5 group"
                        >
                            {/* Project name + links */}
                            <div className="flex items-baseline gap-3 mb-2">
                                <h3 className="text-lg font-semibold text-text-primary group-hover:text-accent-green transition-colors">
                                    {project.name}
                                </h3>
                                <div className="flex gap-3 text-sm font-mono">
                                    {project.github && (
                                        <Link
                                            href={project.github}
                                            target="_blank"
                                            className="text-text-muted hover:text-accent-blue transition-colors"
                                        >
                                            [code]
                                        </Link>
                                    )}
                                    {project.live && (
                                        <Link
                                            href={project.live}
                                            target="_blank"
                                            className="text-text-muted hover:text-accent-green transition-colors"
                                        >
                                            [live]
                                        </Link>
                                    )}
                                </div>
                            </div>

                            {/* Description */}
                            <p className="text-text-secondary text-sm mb-3">
                                {project.description}
                            </p>

                            {/* Tech stack */}
                            <div className="flex flex-wrap gap-2">
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
