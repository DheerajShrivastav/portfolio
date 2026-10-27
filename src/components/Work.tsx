import Link from "next/link";
import { work } from "@/content/site";
import { ArrowRight, ArrowUpRight } from "@/components/icons";

// The first three are the evidence (work, own product, open source); hackathon and solo builds sit below, compact.
const featured = work.slice(0, 3);
const earlier = work.slice(3);

export default function Work() {
    return (
        <section id="work" className="max-w-page mx-auto px-5 md:px-12 pt-16 md:pt-24 pb-16 md:pb-20">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-x-6 gap-y-4 border-t-2 border-ink pt-6 mb-6">
                <h2 className="md:col-span-4 text-display-lg font-extrabold">Work</h2>
                <p className="md:col-span-6 md:col-start-6 text-lg text-ink-2 leading-relaxed max-w-[52ch] md:pt-3">
                    Shipped at work first, then what I build on my own. Work code is private; everything else links to code you can read.
                </p>
            </div>

            <ol>
                {featured.map((item) => (
                    <li
                        key={item.no}
                        id={`work-${item.no}`}
                        className="scroll-mt-24 grid grid-cols-1 md:grid-cols-12 gap-x-6 gap-y-6 border-t border-ink py-10 md:py-14"
                    >
                        <div className="md:col-span-3 flex md:flex-col items-baseline md:items-start gap-x-4 gap-y-3">
                            <span className="tabular text-display-lg font-black text-ink">{item.no}</span>
                            <span className="text-[15px] text-ink-3">{item.context}</span>
                        </div>

                        <div className="md:col-span-9 lg:col-span-8">
                            <h3 className="text-display-md font-extrabold">{item.name}</h3>
                            <p className="mt-2 text-lg font-medium text-ink-2">{item.headline}</p>
                            <p className="mt-5 max-w-[65ch] text-[17px] leading-relaxed text-ink-2">{item.description}</p>

                            {item.challenge && item.solution && (
                                <dl className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 border-t border-ink/20 pt-6">
                                    <div>
                                        <dt className="font-bold text-ink">Hard part</dt>
                                        <dd className="mt-2 text-[15px] leading-relaxed text-ink-2">{item.challenge}</dd>
                                    </div>
                                    <div>
                                        <dt className="font-bold text-ink">Fix</dt>
                                        <dd className="mt-2 text-[15px] leading-relaxed text-ink-2">{item.solution}</dd>
                                    </div>
                                </dl>
                            )}

                            {item.contributions && (
                                <ul className="mt-8 border-t border-ink/20">
                                    {item.contributions.map((c) => (
                                        <li key={c.href} className="border-b border-ink/20">
                                            <a
                                                href={c.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="group flex items-start justify-between gap-4 py-3 text-[15px] leading-relaxed text-ink no-underline hover:text-cobalt"
                                            >
                                                <span>{c.label}</span>
                                                <span className="shrink-0 inline-flex items-center gap-1 text-ink-3 group-hover:text-cobalt tabular">
                                                    {c.href.includes("/pull/") ? `PR #${c.href.split("/").pop()}` : `commit ${c.href.split("/").pop()}`}
                                                    <ArrowUpRight />
                                                </span>
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            )}

                            <p className="mt-6 text-[15px] text-ink-3">
                                <span className="sr-only">Stack: </span>
                                {item.tech.join(" · ")}
                            </p>

                            {(item.caseStudy || item.links.length > 0) && (
                                <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
                                    {item.caseStudy && (
                                        <Link
                                            href={item.caseStudy}
                                            className="group inline-flex items-center gap-2 bg-cobalt text-white font-bold px-5 py-3 no-underline hover:bg-cobalt-deep transition-colors"
                                        >
                                            Read the case study
                                            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                                        </Link>
                                    )}
                                    {item.links.map((l) => (
                                        <a
                                            key={l.href}
                                            href={l.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1 font-medium text-ink underline decoration-ink/30 hover:decoration-ink"
                                        >
                                            {l.label}
                                            <ArrowUpRight />
                                        </a>
                                    ))}
                                </div>
                            )}
                        </div>
                    </li>
                ))}
            </ol>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-x-6 gap-y-4 border-t-2 border-ink pt-6 mt-6">
                <h3 className="md:col-span-3 text-xl font-extrabold tracking-[-0.02em]">Earlier builds</h3>
                <ol className="md:col-span-9 lg:col-span-8">
                    {earlier.map((item) => (
                        <li
                            key={item.no}
                            id={`work-${item.no}`}
                            className="scroll-mt-24 grid grid-cols-[2.75rem_1fr] gap-x-4 border-b border-ink/20 py-5 first:pt-0"
                        >
                            <span className="tabular text-xl font-black text-ink leading-tight">{item.no}</span>
                            <div>
                                <p className="text-lg font-bold leading-tight text-ink">
                                    {item.name}
                                    <span className="ml-3 text-[15px] font-medium text-ink-3">{item.context}</span>
                                </p>
                                <p className="mt-1.5 max-w-[65ch] text-[15px] leading-relaxed text-ink-2">{item.description}</p>
                                <p className="mt-2 flex flex-wrap items-center gap-x-5 gap-y-1 text-[15px]">
                                    <span className="text-ink-3">
                                        <span className="sr-only">Stack: </span>
                                        {item.tech.join(" · ")}
                                    </span>
                                    {item.links.map((l) => (
                                        <a
                                            key={l.href}
                                            href={l.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1 font-medium text-ink underline decoration-ink/30 hover:decoration-ink"
                                        >
                                            {l.label}
                                            <ArrowUpRight />
                                        </a>
                                    ))}
                                </p>
                            </div>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    );
}
