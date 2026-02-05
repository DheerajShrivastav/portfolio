"use client";

import { motion } from "framer-motion";

const skills = {
    blockchain: ["Solidity", "Foundry", "Hardhat", "Ethers.js", "Viem", "Smart Contracts", "DeFi"],
    backend: ["Node.js", "NestJS", "Express", "GraphQL", "PostgreSQL", "Prisma", "Redis", "Docker"],
    frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS"],
    tools: ["Git", "Linux", "AWS", "Vercel", "CI/CD", "Bun"],
};

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.05 },
    },
};

const lineVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.3 },
    },
};

export default function Skills() {
    return (
        <section className="py-16 border-t border-border">
            <div className="max-w-4xl mx-auto px-6">
                {/* Section header */}
                <h2 className="font-mono text-accent-green mb-8 section-header">
                    $ cat skills.json
                </h2>

                {/* JSON-styled skills display */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="glass-card p-6 font-mono text-sm"
                >
                    {/* Opening brace */}
                    <motion.div variants={lineVariants}>
                        <span className="syntax-bracket">{"{"}</span>
                    </motion.div>

                    {/* Skills object */}
                    {Object.entries(skills).map(([category, items], catIndex) => (
                        <div key={category} className="pl-4">
                            <motion.div variants={lineVariants} className="flex flex-wrap items-start">
                                {/* Key */}
                                <span className="syntax-key">&quot;{category}&quot;</span>
                                <span className="syntax-colon">: </span>
                                <span className="syntax-bracket">[</span>
                            </motion.div>

                            {/* Values */}
                            <div className="pl-4 flex flex-wrap gap-x-1">
                                {items.map((skill, i) => (
                                    <motion.span
                                        key={skill}
                                        variants={lineVariants}
                                        className="group inline-flex items-center"
                                    >
                                        <span className="syntax-string group-hover:underline cursor-default">
                                            &quot;{skill}&quot;
                                        </span>
                                        {i < items.length - 1 && (
                                            <span className="syntax-comma">, </span>
                                        )}
                                    </motion.span>
                                ))}
                            </div>

                            <motion.div variants={lineVariants}>
                                <span className="syntax-bracket">]</span>
                                {catIndex < Object.keys(skills).length - 1 && (
                                    <span className="syntax-comma">,</span>
                                )}
                            </motion.div>
                        </div>
                    ))}

                    {/* Closing brace */}
                    <motion.div variants={lineVariants}>
                        <span className="syntax-bracket">{"}"}</span>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
