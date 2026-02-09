"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const linkVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.1, duration: 0.3 },
    }),
};

export default function Contact() {
    const [copiedLabel, setCopiedLabel] = useState<string | null>(null);

    const links = [
        { label: "email", href: "mailto:dheerajshrivastav08@gmail.com", value: "dheerajshrivastav08@gmail.com" },
        { label: "github", href: "https://github.com/DheerajShrivastav", value: "github.com/DheerajShrivastav" },
        { label: "linkedin", href: "https://www.linkedin.com/in/dheerajshrivastav/", value: "linkedin.com/in/dheerajshrivastav/" },
        { label: "Book a call", href: "https://cal.com/dheeraj-shrivastav/30min", value: "cal.com/dheeraj-shrivastav/30min" },
    ];

    const handleCopy = (text: string, label: string) => {
        navigator.clipboard.writeText(text);
        setCopiedLabel(label);
        setTimeout(() => setCopiedLabel(null), 2000);
    };

    return (
        <section id="contact" className="py-16 md:py-24 border-t border-border/50 bg-bg-secondary/30">
            <div className="max-w-4xl mx-auto px-6">
                {/* Section header */}
                <h2 className="font-mono text-accent-green mb-8 section-header uppercase tracking-wider text-sm flex items-center gap-2">
                    <span className="opacity-50">#</span> ./contact.sh
                </h2>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="glass-card p-6 md:p-8 border border-border/50"
                >
                    <p className="text-text-secondary mb-8 text-base md:text-lg">
                        Open to opportunities and interesting projects. Feel free to reach out.
                    </p>

                    <div className="font-mono text-sm space-y-4">
                        {links.map((link, i) => (
                            <motion.div
                                key={link.label}
                                custom={i}
                                variants={linkVariants}
                                className="flex items-center gap-3 group"
                            >
                                <span className="text-text-muted min-w-[80px] shrink-0">{link.label}:</span>{" "}
                                <div className="flex flex-wrap items-center gap-2 overflow-hidden">
                                    <Link
                                        href={link.href}
                                        target={link.label !== "email" ? "_blank" : undefined}
                                        className="text-accent-blue hover:text-accent-green transition-colors break-all"
                                    >
                                        {link.value}
                                    </Link>
                                </div>

                                {link.label === "email" && (
                                    <div className="flex items-center gap-2">
                                        <button
                                            onClick={() => handleCopy(link.value, link.label)}
                                            className="text-text-muted hover:text-accent-green transition-all p-1 hover:bg-accent-green/10 rounded group/copy"
                                            title="Copy to clipboard"
                                        >
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                                            </svg>
                                        </button>

                                        <AnimatePresence>
                                            {copiedLabel === link.label && (
                                                <motion.span
                                                    initial={{ opacity: 0, x: -10 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    exit={{ opacity: 0, x: 10 }}
                                                    className="text-[10px] font-bold text-accent-green uppercase tracking-widest bg-accent-green/10 px-2 py-0.5 rounded border border-accent-green/20"
                                                >
                                                    [Copied!]
                                                </motion.span>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export function Footer() {
    return (
        <footer className="py-8 border-t border-border">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <p className="font-mono text-sm text-text-muted">
                    © {new Date().getFullYear()} Dheeraj • Built with Next.js
                </p>
                <p className="hidden md:block font-mono text-xs text-text-muted mt-2">
                    Press <kbd className="px-1 bg-bg-tertiary border border-border rounded">⌘K</kbd> for quick navigation
                </p>
            </div>
        </footer>
    );
}
