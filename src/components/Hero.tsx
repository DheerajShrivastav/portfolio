"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

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
                // Show content almost immediately after name starts typing
                setTimeout(() => setInitComplete(true), 500);
            }
        }, 50); // Faster typing
        return () => clearInterval(interval);
    }, []);

    // System init sequence (secondary effect)
    useEffect(() => {
        if (!showInit) return;

        let i = 0;
        const interval = setInterval(() => {
            if (i < initSequence.length) {
                setInitLines((prev) => [...prev, initSequence[i]]);
                i++;
            } else {
                clearInterval(interval);
            }
        }, 150);
        return () => clearInterval(interval);
    }, [showInit]);

    return (
        <section id="about" className="py-20 min-h-[90vh] flex items-center relative overflow-hidden">
            {/* Background elements for depth */}
            <div className="absolute top-1/4 -right-20 w-96 h-96 bg-accent-green/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-accent-blue/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-5xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
                {/* Main Content */}
                <div className="lg:col-span-3 z-10">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <p className="font-mono text-accent-green mb-4 flex items-center gap-2">
                            <span className="w-8 h-px bg-accent-green/30" />
                            Hello, I am
                        </p>
                        <h1 className="text-5xl md:text-7xl font-bold text-text-primary mb-4 tracking-tight">
                            {displayedName}
                            {displayedName.length < typewriterText.length && (
                                <span className="animate-blink text-accent-green">_</span>
                            )}
                        </h1>
                        <h2 className="text-2xl md:text-3xl text-accent-blue font-semibold mb-6 flex items-center gap-3">
                            Full Stack Developer
                            <span className="text-text-muted/30 font-light">|</span>
                            Blockchain Engineer
                        </h2>

                        <div className="max-w-xl text-lg text-text-secondary leading-relaxed mb-8 space-y-4">
                            <p>
                                I specialize in building <span className="text-text-primary font-medium">scalable backend systems</span> and
                                <span className="text-text-primary font-medium"> secure smart contracts</span> for the decentralized web.
                            </p>
                            <p>
                                Currently focused on pushing the boundaries of DeFi protocols and creating seamless Web3 user experiences.
                            </p>
                        </div>

                        {/* CTA Links */}
                        <div className="flex flex-wrap gap-6 items-center">
                            <div className="flex gap-4">
                                <Link
                                    href="https://github.com/dheeraj"
                                    target="_blank"
                                    className="px-6 py-3 bg-accent-green text-bg-primary font-semibold rounded hover:bg-accent-green/90 transition-all hover:scale-105 active:scale-95"
                                >
                                    View GitHub
                                </Link>
                                <Link
                                    href="#projects"
                                    className="px-6 py-3 border border-border text-text-primary font-semibold rounded hover:bg-bg-secondary transition-all"
                                >
                                    My Work
                                </Link>
                            </div>

                            <div className="flex gap-4 text-sm font-mono text-text-muted">
                                <Link href="mailto:dheeraj@example.com" className="hover:text-accent-green transition-colors">email</Link>
                                <Link href="/resume/Dheeraj_Full_Stack_dev.pdf" target="_blank" className="hover:text-accent-blue transition-colors">resume.pdf</Link>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Decorative Terminal (Secondary Hierarchy) */}
                <div className="lg:col-span-2 hidden lg:block">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="glass-card shadow-2xl relative group"
                    >
                        <div className="flex items-center gap-1.5 px-4 py-3 border-b border-border bg-bg-tertiary/50">
                            <div className="w-2.5 h-2.5 rounded-full bg-accent-red/20 group-hover:bg-accent-red transition-colors" />
                            <div className="w-2.5 h-2.5 rounded-full bg-accent-yellow/20 group-hover:bg-accent-yellow transition-colors" />
                            <div className="w-2.5 h-2.5 rounded-full bg-accent-green/20 group-hover:bg-accent-green transition-colors" />
                            <span className="ml-2 text-[10px] text-text-muted font-mono uppercase tracking-widest">session.log</span>
                        </div>
                        <div className="p-5 font-mono text-[11px] leading-relaxed">
                            <p className="text-text-muted mb-2">
                                <span className="text-accent-green">guest@portfolio</span>
                                <span>:</span>
                                <span className="text-accent-blue">~</span>
                                <span>$ </span>
                                <span className="text-text-secondary">system.info()</span>
                            </p>
                            <div className="space-y-1">
                                {initLines.filter((line) => typeof line === 'string').map((line, i) => {
                                    const isTreeLine = line?.startsWith("├") || line?.startsWith("└");
                                    const isReady = line === "ready.";
                                    return (
                                        <p
                                            key={i}
                                            className={
                                                isTreeLine
                                                    ? "text-accent-blue/70 pl-3"
                                                    : isReady
                                                        ? "text-accent-green pl-3"
                                                        : "text-text-muted/60"
                                            }
                                        >
                                            {line}
                                        </p>
                                    );
                                })}
                                {!initComplete && <span className="animate-blink text-accent-green">_</span>}
                            </div>

                            {initComplete && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="mt-4 pt-4 border-t border-border/50"
                                >
                                    <p className="text-text-muted"><span className="text-accent-green">$</span> cat status.txt</p>
                                    <p className="text-accent-blue mt-1">Open for new opportunities</p>
                                    <p className="text-[10px] text-text-muted/40 mt-4 italic">
                                        {"// End of log"}
                                    </p>
                                </motion.div>
                            )}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
