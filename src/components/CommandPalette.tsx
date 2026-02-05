"use client";

import {
    KBarProvider,
    KBarPortal,
    KBarPositioner,
    KBarAnimator,
    KBarSearch,
    KBarResults,
    useMatches,
    ActionImpl,
} from "kbar";
import { ReactNode } from "react";

const actions = [
    {
        id: "about",
        name: "Go to About",
        shortcut: ["g", "a"],
        keywords: "about home intro",
        perform: () => (window.location.hash = "#about"),
    },
    {
        id: "projects",
        name: "Go to Projects",
        shortcut: ["g", "p"],
        keywords: "projects work portfolio",
        perform: () => (window.location.hash = "#projects"),
    },
    {
        id: "experience",
        name: "Go to Experience",
        shortcut: ["g", "e"],
        keywords: "experience work history jobs",
        perform: () => (window.location.hash = "#experience"),
    },
    {
        id: "contact",
        name: "Go to Contact",
        shortcut: ["g", "c"],
        keywords: "contact email reach",
        perform: () => (window.location.hash = "#contact"),
    },
    {
        id: "github",
        name: "Open GitHub",
        shortcut: ["o", "g"],
        keywords: "github code source",
        perform: () => window.open("https://github.com/dheeraj", "_blank"),
    },
    {
        id: "resume",
        name: "Download Resume",
        shortcut: ["o", "r"],
        keywords: "resume cv download pdf",
        perform: () => window.open("/resume/Dheeraj_Full_Stack_dev.pdf", "_blank"),
    },
];

function RenderResults() {
    const { results } = useMatches();

    return (
        <KBarResults
            items={results}
            onRender={({ item, active }) =>
                typeof item === "string" ? (
                    <div className="px-4 py-2 text-xs text-text-muted uppercase tracking-wider">
                        {item}
                    </div>
                ) : (
                    <div
                        className={`px-4 py-3 flex items-center justify-between cursor-pointer transition-colors ${active ? "bg-bg-tertiary text-accent-green" : "text-text-secondary"
                            }`}
                    >
                        <span className="font-mono text-sm">{item.name}</span>
                        {item.shortcut?.length && (
                            <div className="flex gap-1">
                                {item.shortcut.map((key) => (
                                    <kbd
                                        key={key}
                                        className="px-1.5 py-0.5 text-xs bg-bg-primary border border-border rounded font-mono"
                                    >
                                        {key}
                                    </kbd>
                                ))}
                            </div>
                        )}
                    </div>
                )
            }
        />
    );
}

export default function CommandPalette({ children }: { children: ReactNode }) {
    return (
        <KBarProvider actions={actions}>
            <KBarPortal>
                <KBarPositioner className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm">
                    <KBarAnimator className="w-full max-w-lg mx-auto mt-[20vh] overflow-hidden rounded-lg border border-border bg-bg-secondary shadow-2xl">
                        {/* Search input styled like terminal */}
                        <div className="flex items-center gap-2 px-4 py-3 border-b border-border">
                            <span className="text-accent-green font-mono">$</span>
                            <KBarSearch className="flex-1 bg-transparent border-none outline-none text-text-primary font-mono placeholder:text-text-muted" />
                        </div>
                        <RenderResults />
                        {/* Hint footer */}
                        <div className="px-4 py-2 border-t border-border text-xs text-text-muted font-mono">
                            <span className="text-text-secondary">tip:</span> press{" "}
                            <kbd className="px-1 bg-bg-primary border border-border rounded">esc</kbd> to close
                        </div>
                    </KBarAnimator>
                </KBarPositioner>
            </KBarPortal>
            {children}
        </KBarProvider>
    );
}
