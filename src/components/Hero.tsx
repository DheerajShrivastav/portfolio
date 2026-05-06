"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const initSequence = [
    "> engineer.info()",
    "",
    "[NETWORK]",
    "Deployments: 12 L2",
    "Verified: 15+ Contracts",
    "Avg Gas Optimization: 24%",
    "",
    "[BACKEND]",
    "Architecture: Event-Driven",
    "Integrations: SQL, Redis, GQL",
    "Latency: <150ms",
    "",
    "[SECURITY]",
    "Audits: 3 Internal/Shadow",
    "Test Coverage: 90+% (Foundry)",

];

export default function Hero() {
    const [showInit, setShowInit] = useState(false);
    const [initLines, setInitLines] = useState<string[]>([]);
    const [initComplete, setInitComplete] = useState(false);

    // Initial delay before showing content and terminal
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowInit(true);
            // Show main content almost immediately
            setInitComplete(true);
        }, 100);
        return () => clearTimeout(timer);
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
        }, 100); // Faster sequence for scannability
        return () => clearInterval(interval);
    }, [showInit]);

    return (
      <section
        id="about"
        className="py-20 min-h-[90vh] flex items-center relative overflow-hidden"
      >
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
              <p className="font-mono text-accent-green mb-4 flex items-center gap-2 text-sm">
                <span className="w-8 h-px bg-accent-green/30" />
                <span className="bg-accent-green/10 px-2 py-0.5 rounded border border-accent-green/20">
                  Hi, I am Dheeraj Shrivastav
                </span>
              </p>
              {/* <h1 className="text-4xl md:text-6xl font-bold text-text-primary mb-6 tracking-tight leading-[1.1] max-w-2xl">
                            Engineering Secure <span className="text-accent-green">DeFi Infrastructure</span> & Scalable Backend Systems.
                        </h1>
                        <h2 className="text-xl md:text-2xl text-accent-blue font-semibold mb-6">
                            Backend Engineer specializing in Distributed Systems & Smart Contract Security.
                        </h2> */}

              <div className="max-w-xl text-lg text-text-secondary leading-relaxed mb-10 space-y-4">
                <p>
                  I build production APIs with{' '}
                  <span className="text-text-primary font-medium">
                    NodeJS/PostgreSQL
                  </span>{' '}
                  and gas-optimized, smart contracts.
                </p>
                <p>
                  Bridging the gap between{' '}
                  <span className="text-accent-blue font-medium">
                    high-performance backend architecture
                  </span>{' '}
                  and Web3 security-first development.
                </p>
              </div>

              {/* CTA Links */}
              <div className="flex flex-col sm:flex-row flex-wrap gap-6 items-start sm:items-center">
                <Link
                  href="https://drive.google.com/file/d/1TAcXTIjPE_AjyccOUJvK74LDyvWRPNTB/view?usp=sharing"
                  target="_blank"
                  className="px-6 py-3 border border-border text-text-primary font-bold rounded hover:bg-bg-secondary transition-all text-center w-full sm:w-auto"
                >
                  View Resume
                </Link>

                <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm font-mono text-text-muted">
                  <Link
                    href="mailto:dheerajshrivastav08@gmail.com"
                    className="hover:text-accent-green transition-colors border-b border-transparent hover:border-accent-green whitespace-nowrap"
                  >
                    email.send()
                  </Link>
                  <span className="hidden sm:inline opacity-20">|</span>
                  <Link
                    href="#projects"
                    className="hover:text-accent-blue transition-colors border-b border-transparent hover:border-accent-blue whitespace-nowrap"
                  >
                    ls archive/
                  </Link>
                  <span className="hidden sm:inline opacity-20">|</span>
                  <Link
                    href="https://cal.com/dheeraj-shrivastav/30min"
                    target="_blank"
                    className="hover:text-accent-green transition-colors border-b border-transparent hover:border-accent-green whitespace-nowrap"
                  >
                    schedule_call()
                  </Link>
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
                <span className="ml-2 text-[10px] text-text-muted font-mono uppercase tracking-widest">
                  session.log
                </span>
              </div>
              <div className="p-5 font-mono text-[11px] leading-relaxed">
                <p className="text-text-muted mb-2">
                  <span className="text-accent-green">dheeraj@portfolio</span>
                  <span>:</span>
                  <span className="text-accent-blue">~</span>
                  <span>$ </span>
                  <span className="text-text-secondary">system.info()</span>
                </p>
                <div className="space-y-1">
                  {initLines
                    .filter((line) => typeof line === 'string')
                    .map((line, i) => {
                      const isHeader = line.startsWith('[')
                      const isCommand = line.startsWith('>')
                      return (
                        <p
                          key={i}
                          className={
                            isHeader
                              ? 'text-accent-blue font-bold mt-3 mb-1'
                              : isCommand
                                ? 'text-accent-green mb-2'
                                : 'text-text-muted/80 pl-2 border-l border-border/20 ml-1'
                          }
                        >
                          {line}
                        </p>
                      )
                    })}
                  {!initComplete && (
                    <span className="animate-blink text-accent-green">_</span>
                  )}
                </div>

                {initComplete && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mt-4 pt-4 border-t border-border/50"
                  >
                    <p className="text-text-muted">
                      <span className="text-accent-green">$</span> cat
                      status.txt
                    </p>
                    <p className="text-accent-blue mt-1">
                      Open for new opportunities
                    </p>
                    <p className="text-[10px] text-text-muted/40 mt-4 italic">
                      {'// End of log'}
                    </p>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    )
}
