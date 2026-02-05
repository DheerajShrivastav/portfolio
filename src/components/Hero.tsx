"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const typewriterText = "Dheeraj";
const initSequence = [
    "system.init()",
    "loading modules...",
    "├── solidity.core",
    "├── web3.protocols",
    "├── backend.systems",
    "└── ready.",
];

export default function Hero() {
    const [displayedName, setDisplayedName] = useState("");
    const [showInit, setShowInit] = useState(false);
    const [initLines, setInitLines] = useState<string[]>([]);
    const [initComplete, setInitComplete] = useState(false);

    // Typewriter effect for name
    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            if (i < typewriterText.length) {
                setDisplayedName(typewriterText.slice(0, i + 1));
                i++;
            } else {
                clearInterval(interval);
                setShowInit(true);
            }
        }, 100);
        return () => clearInterval(interval);
    }, []);

    // System init sequence
    useEffect(() => {
        if (!showInit) return;

        let i = 0;
        const interval = setInterval(() => {
            if (i < initSequence.length) {
                setInitLines((prev) => [...prev, initSequence[i]]);
                i++;
            } else {
                clearInterval(interval);
                setTimeout(() => setInitComplete(true), 300);
            }
        }, 200);
        return () => clearInterval(interval);
    }, [showInit]);

    return (
        <section id="about" className="py-20 min-h-[80vh] flex items-center">
            <div className="max-w-4xl mx-auto px-6 w-full">
                {/* Terminal window frame */}
                <div className="glass-card overflow-hidden">
                    {/* Window header */}
                    <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-bg-tertiary/50">
                        <div className="w-3 h-3 rounded-full bg-accent-red" />
                        <div className="w-3 h-3 rounded-full bg-accent-yellow" />
                        <div className="w-3 h-3 rounded-full bg-accent-green" />
                        <span className="ml-4 text-text-muted text-sm font-mono">~/dheeraj/portfolio</span>
                    </div>

                    {/* Terminal content */}
                    <div className="p-6 font-mono">
                        {/* Greeting + Name */}
                        <div className="mb-4">
                            <p className="text-text-muted text-sm">
                                <span className="text-accent-green">guest@portfolio</span>
                                <span className="text-text-muted">:</span>
                                <span className="text-accent-blue">~</span>
                                <span className="text-text-muted">$ </span>
                                <span className="text-text-secondary">whoami</span>
                            </p>
                            <h1 className="text-3xl font-bold text-accent-green mt-2">
                                {displayedName}
                                {displayedName.length < typewriterText.length && (
                                    <span className="animate-blink text-accent-green">_</span>
                                )}
                            </h1>
                        </div>

                        {/* Init sequence */}
                        {showInit && (
                            <div className="mb-6 text-sm">
                                {initLines.filter((l) => typeof l === 'string').map((line, i) => {
                                    const isTreeLine = line.startsWith("├") || line.startsWith("└");
                                    const isReady = line === "ready.";
                                    return (
                                        <p
                                            key={i}
                                            className={
                                                isTreeLine
                                                    ? "text-accent-blue pl-4"
                                                    : isReady
                                                        ? "text-accent-green pl-4"
                                                        : "text-text-muted"
                                            }
                                        >
                                            {line}
                                        </p>
                                    );
                                })}
                            </div>
                        )}

                        {/* Bio - appears after init */}
                        <div
                            className={`transition-opacity duration-500 ${initComplete ? "opacity-100" : "opacity-0"
                                }`}
                        >
                            <p className="text-text-secondary mb-2">
                                <span className="text-accent-green">$</span> cat role.txt
                            </p>
                            <p className="text-xl text-accent-blue mb-6">
                                Full Stack Developer & Blockchain Engineer
                            </p>

                            <p className="text-text-secondary mb-2">
                                <span className="text-accent-green">$</span> cat bio.txt
                            </p>
                            <div className="text-text-secondary leading-relaxed mb-6 pl-4 border-l border-border">
                                <p className="mb-2">
                                    I build scalable backend systems and smart contracts for Web3 applications.
                                </p>
                                <p>
                                    Currently exploring DeFi protocols, NFT platforms, and decentralized infrastructure.
                                </p>
                            </div>

                            {/* Quick links */}
                            <p className="text-text-secondary mb-2">
                                <span className="text-accent-green">$</span> ls links/
                            </p>
                            <div className="flex flex-wrap gap-4 text-sm">
                                <Link
                                    href="https://github.com/dheeraj"
                                    target="_blank"
                                    className="quick-link text-text-secondary hover:text-accent-green hover:no-underline"
                                >
                                    github
                                </Link>
                                <Link
                                    href="https://linkedin.com/in/dheeraj"
                                    target="_blank"
                                    className="quick-link text-text-secondary hover:text-accent-blue hover:no-underline"
                                >
                                    linkedin
                                </Link>
                                <Link
                                    href="mailto:dheeraj@example.com"
                                    className="quick-link text-text-secondary hover:text-accent-purple hover:no-underline"
                                >
                                    email
                                </Link>
                                <Link
                                    href="/resume/Dheeraj_Full_Stack_dev.pdf"
                                    target="_blank"
                                    className="quick-link text-text-secondary hover:text-accent-yellow hover:no-underline"
                                >
                                    resume.pdf
                                </Link>
                            </div>

                            {/* Cmd+K hint */}
                            <p className="mt-8 text-text-muted text-sm">
                                tip: press{" "}
                                <kbd className="px-1.5 py-0.5 bg-bg-tertiary border border-border rounded text-xs">
                                    ⌘K
                                </kbd>{" "}
                                to open command palette
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
