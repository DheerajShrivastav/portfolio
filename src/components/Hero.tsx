import Link from "next/link";
import { CALL_URL, EMAIL, RESUME_URL, profiles, work } from "@/content/site";
import { ArrowRight, ArrowUpRight } from "@/components/icons";

// The index beside the claim: the first three work items, each a link to its evidence.
const indexed = work.slice(0, 3).map((item) => ({
    ...item,
    href: item.caseStudy ?? `/#work-${item.no}`,
    meta: {
        "01": "In production · 65% less physician work",
        "02": "Founder · 240 unit + 26 invariant tests · case study",
        "03": "5 merged open-source contributions",
    }[item.no],
}));

export default function Hero() {
    return (
        <section id="about" className="max-w-page mx-auto px-5 md:px-12 pt-6 md:pt-8 pb-16 lg:pb-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-6 gap-y-10 lg:min-h-[calc(100svh-72px-5rem)]">
                {/* The cobalt field: the claim and the two actions */}
                <div className="on-cobalt lg:col-span-7 xl:col-span-8 bg-cobalt text-white px-6 py-10 md:px-12 md:py-14 lg:py-10 flex flex-col justify-between gap-12 lg:gap-8">
                    <h1 className="text-display-xl font-extrabold max-w-[14ch]">
                        I ship software real people use every day.
                    </h1>

                    <div>
                        <div className="max-w-[60ch] space-y-4 text-lg leading-relaxed text-cobalt-soft">
                            <p className="text-white font-semibold text-xl lg:[@media(min-height:860px)]:text-[1.625rem] leading-snug tracking-[-0.01em] [text-wrap:balance]">
                                I own features from spec to production, and stay on them after launch.
                            </p>
                            <p>
                                In my current role I&apos;ve shipped a{" "}
                                <Link href="/projects/voice-agent" className="text-white font-medium underline decoration-white/50 hover:decoration-white">
                                    real-time voice agent
                                </Link>{" "}
                                for patients and doctors that cut manual physician intervention by 65%, one automated pipeline in place
                                of a team&apos;s separate tools, and internal agents staff use instead of waiting on a senior. I also founded{" "}
                                <Link href="/projects/dappdrop" className="text-white font-medium underline decoration-white/50 hover:decoration-white">
                                    DappDrop
                                </Link>
                                , an on-chain rewards protocol whose tests caught a fund-drain bug before launch.
                            </p>
                        </div>

                        <div className="mt-8 lg:mt-6 flex flex-col sm:flex-row gap-3">
                            <a
                                href={RESUME_URL}
                                target="_blank"
                                rel="noopener"
                                className="inline-flex items-center justify-center gap-2 bg-white text-cobalt font-bold text-[17px] px-6 py-4 no-underline hover:bg-cobalt-soft transition-colors"
                            >
                                Resume (PDF)
                                <ArrowUpRight />
                            </a>
                            <a
                                href={CALL_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-bold text-[17px] px-6 py-[14px] no-underline hover:bg-white hover:text-cobalt transition-colors"
                            >
                                Book a 30-min call
                            </a>
                        </div>

                        <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-[15px]">
                            <li>
                                <a href={`mailto:${EMAIL}`} className="text-white underline decoration-white/40 hover:decoration-white">
                                    Email
                                </a>
                            </li>
                            {profiles.slice(0, 2).map((p) => (
                                <li key={p.label}>
                                    <a href={p.href} target="_blank" rel="noopener noreferrer" className="text-white underline decoration-white/40 hover:decoration-white">
                                        {p.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* The index: work beside the claim, each row a link to its evidence */}
                <div className="lg:col-span-5 xl:col-span-4 flex flex-col">
                    <h2 className="text-[15px] font-bold pb-3 border-b-2 border-ink">Selected work</h2>
                    <ol>
                        {indexed.map((item) => (
                            <li key={item.no} className="border-b border-ink">
                                <Link
                                    href={item.href}
                                    className="group grid grid-cols-[3.5rem_1fr_auto] items-start gap-x-3 py-5 -ml-2 pl-2 pr-2 text-ink no-underline transition-colors hover:bg-cobalt hover:text-white focus-visible:bg-cobalt focus-visible:text-white focus-visible:outline-white focus-visible:-outline-offset-4"
                                >
                                    <span className="tabular text-[2.5rem] font-black leading-none tracking-[-0.05em]">{item.no}</span>
                                    <span>
                                        <span className="block text-[1.4rem] font-bold leading-tight tracking-[-0.02em]">{item.name}</span>
                                        <span className="block mt-1 text-[15px] text-ink-2 [text-wrap:balance] group-hover:text-cobalt-soft group-focus-visible:text-cobalt-soft">
                                            {item.meta}
                                        </span>
                                    </span>
                                    <ArrowRight className="w-5 h-5 mt-2 transition-transform group-hover:translate-x-1 group-focus-visible:translate-x-1" />
                                </Link>
                            </li>
                        ))}
                    </ol>

                    <dl className="mt-auto pt-10 grid grid-cols-[6.5rem_1fr] gap-y-2 text-[15px]">
                        <dt className="text-ink-3">Role</dt>
                        <dd>Software Engineer</dd>
                        <dt className="text-ink-3">Based in</dt>
                        <dd>Maharashtra, India</dd>
                        <dt className="text-ink-3">Looking for</dt>
                        <dd className="font-bold [text-wrap:balance]">Roles where I own features end to end</dd>
                    </dl>
                </div>
            </div>
        </section>
    );
}
