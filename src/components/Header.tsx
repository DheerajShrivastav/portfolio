"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const navLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
];

export default function Header() {
    return (
        <motion.header
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="sticky top-0 z-40 bg-bg-primary/90 backdrop-blur-sm border-b border-border"
        >
            <nav className="max-w-4xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link
                        href="/"
                        className="font-mono text-accent-green logo-link hover:no-underline"
                    >
                        ~/dheeraj
                    </Link>

                    {/* Navigation */}
                    <ul className="flex items-center gap-6">
                        {navLinks.map((link, i) => (
                            <motion.li
                                key={link.name}
                                initial={{ opacity: 0, y: -5 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 * i, duration: 0.3 }}
                            >
                                <Link
                                    href={link.href}
                                    className="nav-link text-sm text-text-secondary hover:text-text-primary hover:no-underline"
                                >
                                    {link.name}
                                </Link>
                            </motion.li>
                        ))}
                    </ul>

                    {/* Cmd+K hint */}
                    <button
                        onClick={() => {
                            // Trigger kbar
                            const event = new KeyboardEvent("keydown", {
                                key: "k",
                                metaKey: true,
                            });
                            document.dispatchEvent(event);
                        }}
                        className="hidden md:flex items-center gap-2 px-3 py-1.5 text-xs font-mono text-text-muted border border-border rounded hover:border-accent-green hover:text-accent-green transition-colors"
                    >
                        <span>⌘K</span>
                    </button>
                </div>
            </nav>
        </motion.header>
    );
}
