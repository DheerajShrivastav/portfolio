"use client";

import { motion, Variants } from "framer-motion";

interface Experience {
    role: string;
    company: string;
    period: string;
    description: string;
    type: "work" | "education";
}

const experiences: Experience[] = [
    {
        role: "Software Engineer Intern",
        company: "Scalfull Technologies",
        period: "2026 - Present",
        description: "Building scalable backend systems using Node.js, NestJS, and PostgreSQL.",
        type: "work",
    },
    {
        role: "Backend Developer",
        company: "Freelance",
        period: "2022 - 2025",
        description: "Developed scalable backend systems using Node.js, NestJS, and PostgreSQL.",
        type: "work",
    },
    {
        role: "B.Tech Computer Science and Engineering (AI & ML)",
        company: "Deogiri Institute of Engineering and Management Studies, Chhatrapati Sambhajinagar",
        period: "2023 - 2026",
        description: "Focus on Artificial Intelligence and Machine Learning.",
        type: "education",
    },
    {
        role: "Diploma in Computer Science and Engineering",
        company: "MGM's Polytechnic, Chhatrapati Sambhajinagar",
        period: "2020 - 2023",
        description: "Focus on CS fundamentals, Networking, and Database Management.",
        type: "education",
    },
];

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.12,
        },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.4, ease: "easeOut" },
    },
};

export default function Experience() {
    return (
        <section id="experience" className="py-24 border-t border-border/50">
            <div className="max-w-4xl mx-auto px-6">
                {/* Section header */}
                <div className="mb-12">
                    <h2 className="font-mono text-accent-green mb-2 section-header uppercase tracking-wider text-sm">
                        Experience
                    </h2>
                    <p className="text-text-secondary text-lg">My professional journey and education.</p>
                </div>

                {/* Experience list with staggered animation */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="relative pl-8 before:absolute before:left-0 before:top-2 before:bottom-2 before:w-px before:bg-gradient-to-b before:from-accent-green/50 before:via-border before:to-transparent"
                >
                    {experiences.map((exp, index) => (
                        <motion.article
                            key={index}
                            variants={itemVariants}
                            className="relative mb-12 last:mb-0 group"
                        >
                            {/* Timeline dot */}
                            <div
                                className={`absolute -left-[37px] top-1.5 w-4 h-4 rounded-full border-4 border-bg-primary transition-all duration-300 ${exp.type === "work" ? "bg-accent-blue" : "bg-accent-purple"
                                    } group-hover:scale-125 group-hover:shadow-[0_0_15px_rgba(74,246,38,0.3)] group-hover:bg-accent-green`}
                            />

                            {/* Content */}
                            <div className="glass-card p-6 border-l-2 group-hover:border-accent-green transition-all"
                                style={{ borderLeftColor: exp.type === 'work' ? 'var(--accent-blue)' : 'var(--accent-purple)' }}>
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                                    <div>
                                        <h3 className="text-xl font-bold text-text-primary group-hover:text-accent-green transition-colors leading-tight">
                                            {exp.role}
                                        </h3>
                                        <div className="flex items-center gap-2 text-accent-blue font-medium mt-1">
                                            <span>{exp.company}</span>
                                            <span className="text-text-muted/30">•</span>
                                            <span className="text-xs font-mono uppercase tracking-widest text-text-muted">{exp.type}</span>
                                        </div>
                                    </div>
                                    <span className="text-sm font-mono text-accent-green bg-accent-green/5 px-3 py-1 rounded-full border border-accent-green/20 self-start md:self-center">
                                        {exp.period}
                                    </span>
                                </div>
                                <p className="text-text-secondary leading-relaxed">
                                    {exp.description}
                                </p>
                            </div>
                        </motion.article>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
