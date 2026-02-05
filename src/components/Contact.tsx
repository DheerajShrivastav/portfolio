"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const linkVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.1, duration: 0.3 },
    }),
};

export default function Contact() {
    const links = [
        { label: "email", href: "mailto:dheeraj@example.com", value: "dheeraj@example.com" },
        { label: "github", href: "https://github.com/dheeraj", value: "github.com/dheeraj" },
        { label: "linkedin", href: "https://linkedin.com/in/dheeraj", value: "linkedin.com/in/dheeraj" },
    ];

    return (
        <section id="contact" className="py-16 border-t border-border">
            <div className="max-w-4xl mx-auto px-6">
                {/* Section header */}
                <h2 className="font-mono text-accent-green mb-6 section-header">
                    $ ./contact.sh
                </h2>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="glass-card p-6"
                >
                    <p className="text-text-secondary mb-4">
                        Open to opportunities and interesting projects. Feel free to reach out.
                    </p>

                    <div className="font-mono text-sm space-y-2">
                        {links.map((link, i) => (
                            <motion.p key={link.label} custom={i} variants={linkVariants}>
                                <span className="text-text-muted">{link.label}:</span>{" "}
                                <Link
                                    href={link.href}
                                    target={link.label !== "email" ? "_blank" : undefined}
                                    className="text-accent-blue hover:text-accent-green transition-colors"
                                >
                                    {link.value}
                                </Link>
                            </motion.p>
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
                <p className="font-mono text-xs text-text-muted mt-2">
                    Press <kbd className="px-1 bg-bg-tertiary border border-border rounded">⌘K</kbd> for quick navigation
                </p>
            </div>
        </footer>
    );
}
