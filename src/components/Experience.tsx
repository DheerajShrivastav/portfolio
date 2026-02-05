"use client";

import { motion } from "framer-motion";

interface Experience {
    role: string;
    company: string;
    period: string;
    description: string;
    type: "work" | "education";
}

const experiences: Experience[] = [
    {
        role: "Open Source Contributor",
        company: "Google Summer of Code",
        period: "2024",
        description: "Contributing to open-source projects, implementing features and fixing bugs in large-scale codebases.",
        type: "work",
    },
    {
        role: "Blockchain Developer",
        company: "Freelance",
        period: "2023 - Present",
        description: "Building DeFi protocols, NFT platforms, and smart contracts on Ethereum and EVM-compatible chains.",
        type: "work",
    },
    {
        role: "Backend Developer",
        company: "Freelance",
        period: "2022 - 2023",
        description: "Developed scalable backend systems using Node.js, NestJS, and PostgreSQL.",
        type: "work",
    },
    {
        role: "B.Tech Computer Science",
        company: "University",
        period: "2020 - 2024",
        description: "Focus on distributed systems, blockchain technology, and software engineering.",
        type: "education",
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.12,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.4, ease: "easeOut" },
    },
};

export default function Experience() {
    return (
        <section id="experience" className="py-16 border-t border-border">
            <div className="max-w-4xl mx-auto px-6">
                {/* Section header */}
                <h2 className="font-mono text-accent-green mb-8 section-header">
                    $ cat experience.log
                </h2>

                {/* Experience list with staggered animation */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="space-y-6"
                >
                    {experiences.map((exp, index) => (
                        <motion.article
                            key={index}
                            variants={itemVariants}
                            className="flex gap-4 group"
                        >
                            {/* Timeline dot */}
                            <div className="flex flex-col items-center pt-1">
                                <div
                                    className={`w-2 h-2 rounded-full transition-all duration-300 ${exp.type === "work" ? "bg-accent-blue" : "bg-accent-purple"
                                        } group-hover:scale-150 group-hover:shadow-glow-sm`}
                                />
                                {index < experiences.length - 1 && (
                                    <div className="w-px flex-1 bg-border mt-2 group-hover:bg-accent-green/30 transition-colors" />
                                )}
                            </div>

                            {/* Content */}
                            <div className="flex-1 pb-4">
                                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-1">
                                    <h3 className="font-semibold text-text-primary group-hover:text-accent-green transition-colors">
                                        {exp.role}
                                    </h3>
                                    <span className="text-text-muted text-sm">@ {exp.company}</span>
                                    <span className="text-text-muted text-sm font-mono">[{exp.period}]</span>
                                </div>
                                <p className="text-text-secondary text-sm">{exp.description}</p>
                            </div>
                        </motion.article>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
