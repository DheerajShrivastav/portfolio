"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const EMAIL = "dheerajshrivastav08@gmail.com";
const CALL = "https://cal.com/dheeraj-shrivastav/30min";

const profiles = [
    { label: "GitHub", href: "https://github.com/DheerajShrivastav" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/dheerajshrivastav/" },
    { label: "X", href: "https://x.com/Dheeraj_08_" },
];

export default function Contact() {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard
            .writeText(EMAIL)
            .then(() => {
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
            })
            .catch(() => {
                // Clipboard can be blocked (permissions, insecure context); the mailto link still works.
            });
    };

    return (
        <section id="contact" className="py-16 md:py-24 border-t border-border/50 bg-bg-secondary/30">
            <div className="max-w-5xl mx-auto px-6">
                <h2 className="font-mono text-accent-green mb-8 section-header">Contact</h2>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3 }}
                    className="glass-card p-6 md:p-8"
                >
                    <p className="text-text-primary text-xl md:text-2xl font-semibold mb-2">
                        Hiring for an AI agent or backend role? Let&apos;s talk.
                    </p>
                    <p className="text-text-secondary mb-6">
                        A 30-minute call is the fastest way to see if I&apos;m a fit. Email works too.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3 mb-6">
                        <a
                            href={CALL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3 bg-accent-green text-bg-primary font-semibold rounded hover:bg-accent-green/90 hover:text-bg-primary transition-colors text-center"
                        >
                            Book a 30-min call
                        </a>
                        <a
                            href={`mailto:${EMAIL}`}
                            className="px-6 py-3 border border-border text-text-primary font-semibold rounded hover:border-accent-green hover:text-accent-green transition-colors text-center"
                        >
                            Email me
                        </a>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 text-sm mb-4">
                        <span className="font-mono text-text-secondary break-words">{EMAIL}</span>
                        <button
                            onClick={handleCopy}
                            aria-label="Copy email address"
                            className="px-2 py-1 rounded border border-border text-text-secondary hover:text-accent-green hover:border-accent-green transition-colors text-xs font-mono"
                        >
                            copy
                        </button>
                        <AnimatePresence>
                            {copied && (
                                <motion.span
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    role="status"
                                    className="text-xs font-mono text-accent-green"
                                >
                                    copied
                                </motion.span>
                            )}
                        </AnimatePresence>
                    </div>

                    <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
                        {profiles.map((p) => (
                            <li key={p.label}>
                                <a
                                    href={p.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-text-secondary hover:text-accent-green"
                                >
                                    {p.label} ↗
                                </a>
                            </li>
                        ))}
                    </ul>
                </motion.div>
            </div>
        </section>
    );
}

export function Footer() {
    return (
        <footer className="py-8 border-t border-border">
            <div className="max-w-5xl mx-auto px-6 text-center">
                <p className="font-mono text-sm text-text-muted">
                    © {new Date().getFullYear()} Dheeraj Shrivastav · Built with Next.js
                </p>
                <p className="hidden md:block font-mono text-xs text-text-muted mt-2">
                    Press <kbd className="px-1 bg-bg-tertiary border border-border rounded">⌘K</kbd> for quick navigation
                </p>
            </div>
        </footer>
    );
}
