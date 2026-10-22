"use client";

import { motion, Variants } from "framer-motion";

interface Experience {
    role: string;
    company: string;
    period: string;
    summary: string;
    highlights: string[];
    stack?: string[];
    current?: boolean;
}

interface Education {
    degree: string;
    school: string;
    period: string;
}

const experiences: Experience[] = [
    {
        role: "Product Developer",
        company: "Seragen Biotherapeutics",
        period: "Jun 2026 - Present",
        summary: "Building AI-powered products for patient care and internal operations.",
        highlights: [
            "Built a WhatsApp patient assistant with an integrated AI voice agent that runs patient self-assessments end to end, reducing manual physician intervention by 65%.",
            "Designed a doctor-in-the-loop flow: AI drafts personalized patient reports and doctors approve them before delivery.",
            "Consolidated the team's separate tools into a single automated pipeline, removing manual hand-offs between steps.",
            "Built internal AI agents that give staff on-demand recommendations, cutting routine escalations to seniors.",
        ],
        stack: ["Claude", "Gemini", "Node.js", "TypeScript", "WebSockets", "WhatsApp Business API", "Azure"],
        current: true,
    },
    {
        role: "Software Engineer Intern",
        company: "Scalefull Technologies",
        period: "Feb 2026 - May 2026",
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
        period: "Oct 2023 - Sep 2025",
        summary: "Web apps and APIs for clients, end to end from build to deploy.",
        highlights: [
            "Built and deployed 10+ web applications for clients, actively used by 500+ users.",
            "Roughly halved API response times with Redis caching and query optimization in Express/Prisma services.",
            "Set up Docker-based CI/CD with GitHub Actions, replacing manual deploys.",
        ],
        stack: ["React", "Next.js", "Node.js", "Express", "Prisma", "PostgreSQL", "Redis", "Docker"],
    },
];

const education: Education[] = [
    {
        degree: "B.Tech, Computer Science and Engineering (AI & ML)",
        school: "Deogiri Institute of Engineering and Management Studies (DIEMS), Maharashtra",
        period: "2023 - 2026",
    },
    {
        degree: "Diploma, Computer Science and Engineering",
        school: "MGM Polytechnic, Maharashtra",
        period: "2020 - 2023",
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
                    <p className="text-text-secondary text-lg">Where I&apos;ve worked and what I shipped.</p>
                </div>

                {/* Experience list with staggered animation */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="relative pl-8 before:absolute before:left-0 before:top-2 before:bottom-2 before:w-px before:bg-gradient-to-b before:from-accent-green/50 before:via-border before:to-transparent"
                >
                    {experiences.map((exp) => (
                        <motion.article
                            key={`${exp.company}-${exp.role}`}
                            variants={itemVariants}
                            className="relative mb-12 last:mb-0 group"
                        >
                            {/* Timeline dot */}
                            <div
                                className={`absolute -left-[37px] top-1.5 w-4 h-4 rounded-full border-4 border-bg-primary transition-all duration-300 ${exp.current ? "bg-accent-green" : "bg-accent-blue"
                                    } group-hover:scale-125 group-hover:shadow-[0_0_15px_rgba(74,246,38,0.3)] group-hover:bg-accent-green`}
                            />

                            {/* Content */}
                            <div className="glass-card p-6 border-l-2 group-hover:border-accent-green transition-all"
                                style={{ borderLeftColor: exp.current ? 'var(--accent-green)' : 'var(--accent-blue)' }}>
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                                    <div>
                                        <h3 className="text-xl font-bold text-text-primary group-hover:text-accent-green transition-colors leading-tight">
                                            {exp.role}
                                        </h3>
                                        <div className="flex items-center gap-2 text-accent-blue font-medium mt-1">
                                            <span>{exp.company}</span>
                                            {exp.current && (
                                                <>
                                                    <span className="text-text-muted/30">•</span>
                                                    <span className="text-xs font-mono uppercase tracking-widest text-accent-green">current</span>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                    <span className="text-sm font-mono text-accent-green bg-accent-green/5 px-3 py-1 rounded-full border border-accent-green/20 self-start md:self-center">
                                        {exp.period}
                                    </span>
                                </div>
                                <p className="text-text-secondary leading-relaxed mb-4">
                                    {exp.summary}
                                </p>
                                <ul className="space-y-2">
                                    {exp.highlights.map((item) => (
                                        <li key={item} className="flex gap-3 text-text-secondary leading-relaxed">
                                            <span className="text-accent-green font-mono shrink-0">&gt;</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                {exp.stack && (
                                    <div className="flex flex-wrap gap-2 mt-5 pt-4 border-t border-border/30">
                                        {exp.stack.map((s) => (
                                            <span key={s} className="tag">{s}</span>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </motion.article>
                    ))}
                </motion.div>

                {/* Education (compact) */}
                <div className="mt-16">
                    <h3 className="font-mono text-text-muted uppercase tracking-wider text-xs mb-4">Education</h3>
                    <ul className="space-y-3">
                        {education.map((edu) => (
                            <li key={edu.degree} className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1">
                                <span className="text-text-secondary">
                                    <span className="text-text-primary">{edu.degree}</span>
                                    <span className="text-text-muted"> · {edu.school}</span>
                                </span>
                                <span className="font-mono text-xs text-text-muted shrink-0">{edu.period}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}
