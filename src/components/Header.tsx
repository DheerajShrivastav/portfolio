"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useKBar } from "kbar";

const navLinks = [
    { name: "About", href: "/#about" },
    { name: "Experience", href: "/#experience" },
    { name: "Projects", href: "/#projects" },
    { name: "Open Source", href: "/#opensource" },
    { name: "Contact", href: "/#contact" },
];

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { query } = useKBar();

    return (
        <header
            className="sticky top-0 z-40 bg-bg-primary/90 backdrop-blur-sm border-b border-border"
        >
            <nav className="max-w-5xl mx-auto px-6 py-4">
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
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <Link
                                    href={link.href}
                                    className="nav-link text-sm text-text-secondary hover:text-text-primary hover:no-underline"
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Action Buttons */}
                    <div className="flex items-center gap-3">
                        {/* Cmd+K hint (large screens only; also hinted in the footer) */}
                        <button
                            onClick={() => query.toggle()}
                            className="hidden lg:flex items-center gap-2 px-3 py-1.5 text-xs font-mono text-text-muted border border-border rounded hover:border-accent-green hover:text-accent-green transition-colors"
                        >
                            {/* accessible name starts with the visible text, as WCAG 2.5.3 expects */}
                            <span>⌘K</span>
                            <span className="sr-only">open command palette</span>
                        </button>

                        {/* Plain <a>: next/link would prefetch the PDF as a route and 404 */}
                        <a
                            href="/resume/Dheeraj-Shrivastav-Resume.pdf"
                            target="_blank"
                            rel="noopener"
                            className="px-3 py-1.5 text-sm font-semibold rounded border border-accent-green/40 text-accent-green hover:bg-accent-green/10 hover:text-accent-green transition-colors"
                        >
                            Resume
                        </a>

                        {/* Mobile Menu Toggle */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="flex md:hidden text-text-muted hover:text-accent-green transition-colors"
                            aria-label="Toggle menu"
                            aria-expanded={isMenuOpen}
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
        </header>
    );
}
