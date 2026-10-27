"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useKBar } from "kbar";
import { RESUME_URL } from "@/content/site";
import { ArrowUpRight, MenuIcon } from "@/components/icons";

const navLinks = [
    { name: "Work", href: "/#work" },
    { name: "Experience", href: "/#experience" },
    { name: "Open source", href: "/#work-03" },
    { name: "Contact", href: "/#contact" },
];

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { query } = useKBar();
    const menuButton = useRef<HTMLButtonElement>(null);

    // Escape closes the mobile menu and returns focus to its toggle.
    useEffect(() => {
        if (!isMenuOpen) return;
        const onKey = (e: KeyboardEvent) => {
            if (e.key !== "Escape") return;
            setIsMenuOpen(false);
            menuButton.current?.focus();
        };
        document.addEventListener("keydown", onKey);
        return () => document.removeEventListener("keydown", onKey);
    }, [isMenuOpen]);

    return (
        <header className="sticky top-0 z-40 bg-paper border-b-2 border-ink">
            <nav className="max-w-page mx-auto px-5 md:px-12 h-16 md:h-[72px] grid grid-cols-[1fr_auto] md:grid-cols-12 items-center gap-x-6">
                <Link
                    href="/"
                    onClick={() => setIsMenuOpen(false)}
                    className="md:col-span-4 font-bold text-[17px] tracking-[-0.01em] text-ink no-underline"
                >
                    Dheeraj Shrivastav
                </Link>

                <ul className="hidden md:flex md:col-span-6 items-center gap-5 lg:gap-8">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <Link href={link.href} className="whitespace-nowrap text-[15px] text-ink no-underline hover:underline">
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                <div className="md:col-span-2 flex items-center justify-end gap-5">
                    <button
                        onClick={() => query.toggle()}
                        className="hidden lg:inline-flex items-center h-7 px-2 text-[13px] font-medium text-ink-3 border border-ink-3/60 hover:text-ink hover:border-ink transition-colors"
                    >
                        {/* accessible name starts with the visible text, as WCAG 2.5.3 expects */}
                        <span>⌘K</span>
                        <span className="sr-only">open command palette</span>
                    </button>

                    {/* Plain <a>: next/link would prefetch the PDF as a route and 404 */}
                    <a
                        href={RESUME_URL}
                        target="_blank"
                        rel="noopener"
                        className="inline-flex items-center gap-1 font-bold text-[15px] text-ink no-underline border-b-2 border-ink pb-0.5 hover:text-cobalt hover:border-cobalt transition-colors"
                    >
                        Resume
                        <ArrowUpRight className="w-4 h-4" />
                    </a>

                    <button
                        ref={menuButton}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden -mr-2.5 p-2.5 text-ink"
                        aria-label="Menu"
                        aria-expanded={isMenuOpen}
                        aria-controls="mobile-nav"
                    >
                        <MenuIcon open={isMenuOpen} />
                    </button>
                </div>
            </nav>

            {isMenuOpen && (
                <ul id="mobile-nav" className="md:hidden border-t border-ink px-5 pb-2">
                    {navLinks.map((link) => (
                        <li key={link.name} className="border-b border-ink/20 last:border-b-0">
                            <Link
                                href={link.href}
                                onClick={() => setIsMenuOpen(false)}
                                className="block py-4 text-xl font-bold tracking-[-0.02em] text-ink no-underline"
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </header>
    );
}
