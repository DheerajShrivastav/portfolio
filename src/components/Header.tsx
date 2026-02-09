"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
];

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

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
                        onClick={() => setIsMenuOpen(false)}
                    >
                        ~/dheeraj
                    </Link>

                    {/* Desktop Navigation */}
                    <ul className="hidden md:flex items-center gap-6">
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

                    {/* Action Buttons */}
                    <div className="flex items-center gap-4">
                        {/* Cmd+K hint (Desktop only) */}
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

                        {/* Mobile Menu Toggle */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="flex md:hidden text-text-muted hover:text-accent-green transition-colors"
                            aria-label="Toggle menu"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {isMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation Dropdown */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="md:hidden overflow-hidden"
                        >
                            <ul className="flex flex-col gap-4 pt-6 pb-4">
                                {navLinks.map((link, i) => (
                                    <motion.li
                                        key={link.name}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.05 * i }}
                                    >
                                        <Link
                                            href={link.href}
                                            onClick={() => setIsMenuOpen(false)}
                                            className="block text-text-secondary hover:text-accent-green font-mono text-sm py-2"
                                        >
                                            <span className="text-accent-green mr-2 opacity-50">&gt;</span>
                                            {link.name}
                                        </Link>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </motion.header>
    );
}
