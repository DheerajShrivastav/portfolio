"use client";

import {
    KBarProvider,
    KBarPortal,
    KBarPositioner,
    KBarAnimator,
    KBarSearch,
    KBarResults,
    useMatches,
} from "kbar";
import { ReactNode } from "react";

const go = (href: string) => () => (window.location.href = href);

const actions = [
    { id: "about", name: "Go to the top", shortcut: ["g", "a"], keywords: "about home intro", perform: go("/#about") },
    { id: "work", name: "Go to Work", shortcut: ["g", "w"], keywords: "projects work portfolio", perform: go("/#work") },
    { id: "voice", name: "Case study: real-time voice agent", shortcut: ["g", "v"], keywords: "voice agent gemini case study", perform: go("/projects/voice-agent") },
    { id: "dappdrop", name: "Case study: DappDrop", shortcut: ["g", "d"], keywords: "dappdrop protocol solidity case study", perform: go("/projects/dappdrop") },
    { id: "how", name: "Go to About", shortcut: ["g", "b"], keywords: "about how i work devcon", perform: go("/#how-i-work") },
    { id: "experience", name: "Go to Experience", shortcut: ["g", "e"], keywords: "experience history jobs", perform: go("/#experience") },
    { id: "opensource", name: "Go to Open source", shortcut: ["g", "o"], keywords: "open source contributions pull requests", perform: go("/#work-03") },
    { id: "skills", name: "Go to Skills", shortcut: ["g", "s"], keywords: "skills stack tech", perform: go("/#skills") },
    { id: "contact", name: "Go to Contact", shortcut: ["g", "c"], keywords: "contact email reach call", perform: go("/#contact") },
    { id: "github", name: "Open GitHub", shortcut: ["o", "g"], keywords: "github code source", perform: () => window.open("https://github.com/DheerajShrivastav", "_blank") },
    { id: "resume", name: "Open resume (PDF)", shortcut: ["o", "r"], keywords: "resume cv download pdf", perform: () => window.open("/resume/Dheeraj-Shrivastav-Resume.pdf", "_blank") },
];

function RenderResults() {
    const { results } = useMatches();

    return (
        <KBarResults
            items={results}
            onRender={({ item, active }) =>
                typeof item === "string" ? (
                    <div className="px-5 py-2 text-[13px] font-bold text-ink-3">{item}</div>
                ) : (
                    <div
                        className={`px-5 py-3 flex items-center justify-between cursor-pointer ${active ? "bg-cobalt text-white" : "text-ink"}`}
                    >
                        <span className="text-[15px] font-medium">{item.name}</span>
                        {item.shortcut?.length ? (
                            <span className="flex gap-1">
                                {item.shortcut.map((key) => (
                                    <kbd
                                        key={key}
                                        className={`min-w-6 text-center px-1.5 text-[13px] font-sans border ${active ? "border-white/60" : "border-ink/30"}`}
                                    >
                                        {key}
                                    </kbd>
                                ))}
                            </span>
                        ) : null}
                    </div>
                )
            }
        />
    );
}

export default function CommandPalette({ children }: { children: ReactNode }) {
    return (
        <KBarProvider actions={actions} options={{ animations: { enterMs: 0, exitMs: 0 } }}>
            <KBarPortal>
                <KBarPositioner className="kbar-scrim fixed inset-0 z-50 bg-ink/40">
                    {/* kbar's own animation overshoots and ignores reduced motion; it is switched off and the panel drops in with CSS */}
                    <KBarAnimator className="w-full max-w-lg mx-auto mt-[18vh]" style={{ opacity: 1, transform: "none" }}>
                        <div className="kbar-panel bg-paper border-2 border-ink">
                            <KBarSearch
                                defaultPlaceholder="Jump to a section or case study"
                                aria-label="Jump to a section or case study"
                                className="w-full px-5 py-4 bg-transparent border-b-2 border-ink text-ink outline-none placeholder:text-ink-3"
                            />
                            <div className="py-2">
                                <RenderResults />
                            </div>
                            <p className="px-5 py-2 border-t border-ink/20 text-[13px] text-ink-3">
                                <kbd className="font-sans font-medium text-ink border border-ink/30 px-1">esc</kbd> to close
                            </p>
                        </div>
                    </KBarAnimator>
                </KBarPositioner>
            </KBarPortal>
            {children}
        </KBarProvider>
    );
}
