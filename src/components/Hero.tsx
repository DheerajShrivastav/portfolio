"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const initSequence = [
    "> engineer.info()",
    "",
    "[IN PRODUCTION]",
    "WhatsApp + AI voice patient agent",
    "AI patient reports, doctor-reviewed",
    "Tool suite -> one automated pipeline",
    "Internal recommendation agents",
    "",
    "[USED BY]",
    "Patients, doctors, internal team",
    "",
    "[BUILDING]",
    "DappDrop: 240 unit + 26 invariant tests",
    "",
    "[STACK]",
    "Backend: Node.js, NestJS, PostgreSQL",
    "Web3: Solidity, Foundry, EIP-712",
];

export default function Hero() {
    // How many log lines are revealed. Every line is rendered from the start (just invisible),
    // so the terminal card never changes size while it "types".
    const [revealed, setRevealed] = useState(0);

    useEffect(() => {
        const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        const terminalVisible = window.matchMedia("(min-width: 1024px)").matches;
        if (reduceMotion || !terminalVisible) {
            setRevealed(initSequence.length);
            return;
        }
        const interval = setInterval(() => {
            setRevealed((n) => {
                if (n >= initSequence.length) {
                    clearInterval(interval);
                    return n;
                }
                return n + 1;
            });
        }, 100);
        return () => clearInterval(interval);
    }, []);

    const done = revealed >= initSequence.length;

    return (
      <section
        id="about"
        className="py-16 md:py-20 lg:min-h-[90vh] flex items-center relative overflow-hidden"
      >
        {/* Background elements for depth */}
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-accent-green/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-accent-blue/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-5xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          {/* Main Content: CSS animation, so it's visible before (and without) JavaScript */}
          <div className="lg:col-span-3 z-10 animate-slide-up">
              <p className="font-mono text-accent-green mb-4 flex items-center gap-2 text-sm">
                <span className="w-8 h-px bg-accent-green/30" />
                <span className="bg-accent-green/10 px-2 py-0.5 rounded border border-accent-green/20">
                  Dheeraj Shrivastav · Software Engineer
                </span>
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-6 tracking-tight leading-[1.1] max-w-2xl">
                I build{' '}
                <span className="text-accent-green">AI agents</span> that run
                in production.
              </h1>

              <div className="max-w-xl text-lg text-text-secondary leading-relaxed mb-8 space-y-4">
                <p>
                  A WhatsApp voice agent patients talk to, AI reports that
                  doctors review before they go out, and internal agents a team
                  uses instead of waiting on a senior. Built on{' '}
                  <span className="text-text-primary font-medium">
                    TypeScript/Node.js backends
                  </span>
                  .
                </p>
                <p>
                  I also founded{' '}
                  <Link href="/projects/dappdrop" className="text-accent-blue font-medium hover:underline">
                    DappDrop
                  </Link>
                  , an on-chain rewards protocol whose tests caught a fund-drain
                  bug before launch.
                </p>
              </div>

              {/* CTAs. Plain <a> for the PDF: next/link would try to prefetch it as a route (404). */}
              <div className="flex flex-col sm:flex-row gap-3 mb-5">
                <a
                  href="/resume/Dheeraj-Shrivastav-Resume.pdf"
                  target="_blank"
                  rel="noopener"
                  className="px-6 py-3 bg-accent-green text-bg-primary font-semibold rounded hover:bg-accent-green/90 hover:text-bg-primary transition-colors text-center"
                >
                  Resume (PDF)
                </a>
                <a
                  href="https://cal.com/dheeraj-shrivastav/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border border-border text-text-primary font-semibold rounded hover:border-accent-green hover:text-accent-green transition-colors text-center"
                >
                  Book a 30-min call
                </a>
              </div>
              <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-text-secondary mb-6">
                <a href="mailto:dheerajshrivastav08@gmail.com" className="text-text-secondary hover:text-accent-green">Email</a>
                <a href="https://github.com/DheerajShrivastav" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent-green">GitHub</a>
                <a href="https://www.linkedin.com/in/dheerajshrivastav/" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent-green">LinkedIn</a>
              </div>
              <p className="text-sm text-text-muted">
                Open to AI agent and backend engineering roles · based in India
              </p>
          </div>

          {/* Decorative Terminal (Secondary Hierarchy) */}
          <div className="lg:col-span-2 hidden lg:block" aria-hidden="true">
            <div className="glass-card shadow-2xl relative group animate-fade-in">
              <div className="flex items-center gap-1.5 px-4 py-3 border-b border-border bg-bg-tertiary/50">
                <div className="w-2.5 h-2.5 rounded-full bg-accent-red/20 group-hover:bg-accent-red transition-colors" />
                <div className="w-2.5 h-2.5 rounded-full bg-accent-yellow/20 group-hover:bg-accent-yellow transition-colors" />
                <div className="w-2.5 h-2.5 rounded-full bg-accent-green/20 group-hover:bg-accent-green transition-colors" />
                <span className="ml-2 text-xs text-text-muted font-mono uppercase tracking-widest">
                  session.log
                </span>
              </div>
              <div className="p-5 font-mono text-xs leading-relaxed">
                <p className="text-text-muted mb-2">
                  <span className="text-accent-green">dheeraj@portfolio</span>
                  <span>:</span>
                  <span className="text-accent-blue">~</span>
                  <span>$ </span>
                  <span className="text-text-secondary">system.info()</span>
                </p>
                <div className="space-y-1">
                  {initSequence.map((line, i) => {
                      const isHeader = line.startsWith('[')
                      const isCommand = line.startsWith('>')
                      return (
                        <p
                          key={i}
                          className={`${i < revealed ? '' : 'invisible'} ${
                            isHeader
                              ? 'text-accent-blue font-bold mt-3 mb-1'
                              : isCommand
                                ? 'text-accent-green mb-2'
                                : 'text-text-muted pl-2 border-l border-border/20 ml-1'
                          }`}
                        >
                          {line || ' '}
                        </p>
                      )
                    })}
                </div>

                <div className={`mt-4 pt-4 border-t border-border/50 ${done ? '' : 'invisible'}`}>
                  <p className="text-text-muted">
                    <span className="text-accent-green">$</span> cat status.txt
                    {!done && <span className="animate-blink text-accent-green"> _</span>}
                  </p>
                  <p className="text-accent-blue mt-1">
                    Open for new opportunities
                  </p>
                  <p className="text-text-muted mt-4 italic">
                    {'// End of log'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}
