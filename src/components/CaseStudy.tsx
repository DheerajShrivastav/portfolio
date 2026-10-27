import type { ReactNode } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import { Footer } from "@/components/Contact";
import { ArrowLeft, ArrowUpRight } from "@/components/icons";
import { CALL_URL, EMAIL } from "@/content/site";

// Building blocks for the /projects/* case studies, in the same Swiss poster system as the home page.

export const ext = { target: "_blank", rel: "noopener noreferrer" } as const;

const pagePad = "max-w-page mx-auto px-5 md:px-12";

export function CaseStudyShell({ children }: { children: ReactNode }) {
    return (
        <>
            <Header />
            <main id="main" className={`${pagePad} pt-8 md:pt-12`}>
                <Link href="/#work" className="inline-flex items-center gap-2 text-[15px] font-medium text-ink no-underline hover:underline">
                    <ArrowLeft className="w-4 h-4" />
                    Back to work
                </Link>
                {children}
            </main>
            <Footer />
        </>
    );
}

// Title lockup: the stable work index number sits beside the title, as on the home page.
export function CaseHeader({
    no,
    title,
    intro,
    links = [],
}: {
    no: string;
    title: string;
    intro: string;
    links?: { label: string; href: string }[];
}) {
    return (
        <header className="grid grid-cols-1 md:grid-cols-12 gap-x-6 gap-y-6 mt-8 md:mt-12 pb-12 md:pb-16 border-b-2 border-ink">
            <span aria-hidden="true" className="md:col-span-2 tabular text-display-xl font-black text-ink">
                {no}
            </span>
            <div className="md:col-span-10 lg:col-span-9">
                <h1 className="text-display-lg font-extrabold max-w-[22ch]">{title}</h1>
                <p className="mt-6 text-lg md:text-xl leading-relaxed text-ink-2 max-w-[62ch]">{intro}</p>
                {links.length > 0 && (
                    <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
                        {links.map((l) => (
                            <li key={l.href}>
                                <a href={l.href} {...ext} className="inline-flex items-center gap-1 font-medium text-ink underline decoration-ink/30 hover:decoration-ink">
                                    {l.label}
                                    <ArrowUpRight />
                                </a>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </header>
    );
}

export function Facts({ items }: { items: { label: string; value: string }[] }) {
    return (
        <dl className="grid grid-cols-1 md:grid-cols-12 gap-x-6 py-8 md:py-10 border-b border-ink">
            {items.map((f) => (
                <div key={f.label} className="contents">
                    <dt className="md:col-span-2 md:col-start-3 pt-3 md:py-3 font-bold text-ink">{f.label}</dt>
                    <dd className="md:col-span-8 lg:col-span-7 pb-3 md:py-3 text-[17px] text-ink-2 border-b border-ink/15 md:border-b-0">
                        {f.value}
                    </dd>
                </div>
            ))}
        </dl>
    );
}

export function Section({ title, children }: { title: string; children: ReactNode }) {
    return (
        <section className="grid grid-cols-1 md:grid-cols-12 gap-x-6 gap-y-5 py-12 md:py-16 border-b border-ink">
            <h2 className="md:col-span-2 text-xl font-extrabold tracking-[-0.02em] leading-tight">{title}</h2>
            <div className="md:col-span-10 lg:col-span-9 md:col-start-3 space-y-5 text-[17px] leading-relaxed text-ink-2 max-w-[68ch]">
                {children}
            </div>
        </section>
    );
}

export function Decision({ title, why, children }: { title: string; why: string; children: ReactNode }) {
    return (
        <div className="border-t border-ink pt-5">
            <h3 className="text-[1.375rem] font-bold tracking-[-0.02em] leading-snug text-ink">{title}</h3>
            <p className="mt-3 text-ink">{children}</p>
            <p className="mt-3">
                <span className="font-bold text-ink">Why. </span>
                {why}
            </p>
        </div>
    );
}

// A finding from testing or review: severity is set in words as trailing meta, not color or an eyebrow.
export function Finding({ severity, title, children }: { severity: string; title: string; children: ReactNode }) {
    return (
        <div className="border-t-2 border-ink pt-5">
            <h3 className="text-[1.375rem] font-bold tracking-[-0.02em] leading-snug text-ink">
                {title}
                <span className="ml-3 align-baseline text-[15px] font-medium tracking-normal text-ink-3">{severity}</span>
            </h3>
            <div className="mt-3 space-y-3">{children}</div>
        </div>
    );
}

export function Bullets({ items }: { items: string[] }) {
    return (
        <ul className="space-y-3">
            {items.map((item) => (
                <li key={item} className="grid grid-cols-[1.25rem_1fr]">
                    <span aria-hidden="true" className="mt-[0.75em] h-[2px] w-2.5 bg-ink" />
                    <span>{item}</span>
                </li>
            ))}
        </ul>
    );
}

export interface FlowNode {
    label: string;
    note?: string;
    children?: FlowNode[];
}

// Architecture as a real nested list with drawn connectors (replaces ASCII art).
export function Flow({ nodes, caption }: { nodes: FlowNode[]; caption: string }) {
    const render = (list: FlowNode[], depth: number): ReactNode => (
        <ul className={depth === 0 ? "space-y-6" : "mt-3 ml-3 pl-5 border-l-2 border-ink space-y-3"}>
            {list.map((n) => (
                <li key={n.label} className={depth === 0 ? "" : "relative before:absolute before:-left-5 before:top-[0.8em] before:w-4 before:h-[2px] before:bg-ink"}>
                    <span className={depth === 0 ? "inline-block bg-ink text-paper font-bold px-3 py-1.5" : "font-bold text-ink"}>
                        {n.label}
                    </span>
                    {n.note && <span className="block text-[15px] text-ink-2">{n.note}</span>}
                    {n.children && render(n.children, depth + 1)}
                </li>
            ))}
        </ul>
    );

    return (
        <figure className="border-2 border-ink p-5 md:p-7">
            {render(nodes, 0)}
            <figcaption className="mt-6 pt-4 border-t border-ink/20 text-[15px] text-ink-3">{caption}</figcaption>
        </figure>
    );
}

export function TalkCta() {
    return (
        <section className="on-cobalt my-12 md:my-16 bg-cobalt text-white px-6 py-10 md:px-12 md:py-12 grid grid-cols-1 md:grid-cols-12 gap-x-6 gap-y-6 items-end">
            <h2 className="md:col-span-7 text-display-md font-extrabold max-w-[20ch]">Want to go deeper on any of these decisions?</h2>
            <div className="md:col-span-5 flex flex-col sm:flex-row gap-3 md:justify-end">
                <a
                    href={CALL_URL}
                    {...ext}
                    className="inline-flex items-center justify-center bg-white text-cobalt font-bold px-6 py-4 no-underline hover:bg-cobalt-soft transition-colors"
                >
                    Book a 30-min call
                </a>
                <a
                    href={`mailto:${EMAIL}`}
                    className="inline-flex items-center justify-center border-2 border-white text-white font-bold px-6 py-[14px] no-underline hover:bg-white hover:text-cobalt transition-colors"
                >
                    Email me
                </a>
            </div>
        </section>
    );
}
