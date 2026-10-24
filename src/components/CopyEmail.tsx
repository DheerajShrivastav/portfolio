"use client";

import { useState } from "react";

export default function CopyEmail({ email }: { email: string }) {
    const [copied, setCopied] = useState(false);

    const copy = () => {
        navigator.clipboard
            .writeText(email)
            .then(() => {
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
            })
            .catch(() => {
                // Clipboard can be blocked (permissions, insecure context); the mailto link still works.
            });
    };

    return (
        <button
            onClick={copy}
            aria-label={copied ? "Email address copied" : "Copy email address"}
            className="text-[15px] font-medium text-white underline decoration-white/40 hover:decoration-white"
        >
            <span aria-live="polite">{copied ? "Copied" : "Copy"}</span>
        </button>
    );
}
