"use client";

import { useEffect, useRef, useState } from "react";

export default function CopyEmail({ email }: { email: string }) {
    const [copied, setCopied] = useState(false);
    const timer = useRef<ReturnType<typeof setTimeout>>();

    useEffect(() => () => clearTimeout(timer.current), []);

    const copy = () => {
        navigator.clipboard
            .writeText(email)
            .then(() => {
                setCopied(true);
                // A repeat click restarts the 2s window instead of letting the old timer cut it short.
                clearTimeout(timer.current);
                timer.current = setTimeout(() => setCopied(false), 2000);
            })
            .catch(() => {
                // Clipboard can be blocked (permissions, insecure context); the mailto link still works.
            });
    };

    return (
        <button
            onClick={copy}
            aria-label={copied ? "Email address copied" : "Copy email address"}
            className={`text-[15px] font-medium text-white underline transition-[text-decoration-color] duration-150 hover:decoration-white ${copied ? "decoration-white" : "decoration-white/40"}`}
        >
            {/* Both labels share one grid cell, so the button never changes width */}
            <span className="inline-grid" aria-hidden="true">
                <span className={`[grid-area:1/1] ${copied ? "invisible" : ""}`}>Copy</span>
                <span className={`[grid-area:1/1] ${copied ? "copied-in" : "invisible"}`}>Copied</span>
            </span>
            <span className="sr-only" aria-live="polite">
                {copied ? "Email address copied" : ""}
            </span>
        </button>
    );
}
