"use client";

import { useEffect, useRef, type ReactNode } from "react";

// Draws the Flow diagram's connectors once it scrolls into view. Labels are never hidden: without JS, with reduced
// motion, or when the figure is already on screen at load, the connectors are simply drawn.
export default function FlowDraw({ children }: { children: ReactNode }) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
        if (el.getBoundingClientRect().top < window.innerHeight) return;

        el.dataset.draw = "pending";
        const io = new IntersectionObserver(
            ([entry]) => {
                if (!entry.isIntersecting) return;
                el.dataset.draw = "done";
                io.disconnect();
            },
            { rootMargin: "0px 0px -20% 0px" },
        );
        io.observe(el);
        return () => io.disconnect();
    }, []);

    return <div ref={ref}>{children}</div>;
}
