import { CALL_URL, EMAIL, profiles } from "@/content/site";
import { ArrowUpRight } from "@/components/icons";
import CopyEmail from "@/components/CopyEmail";

export default function Contact() {
    return (
        <section id="contact" className="max-w-page mx-auto px-5 md:px-12 pb-16">
            <div className="on-cobalt bg-cobalt text-white px-6 py-12 md:px-12 md:py-16 grid grid-cols-1 lg:grid-cols-12 gap-x-6 gap-y-10">
                <h2 className="lg:col-span-7 text-display-lg font-extrabold max-w-[16ch]">
                    Hiring someone to own features end to end? Let&apos;s talk.
                </h2>

                <div className="lg:col-span-5 flex flex-col justify-end">
                    <p className="text-lg text-cobalt-soft leading-relaxed max-w-[40ch]">
                        I&apos;ll be at Devcon 8 in Mumbai, 3–6 Nov, looking for my next engineering role and builders to compare notes with. Book 30 minutes or find me there. A good intro is two lines: who you are, and the problem you&apos;d want me to own.
                    </p>
                    <div className="mt-6 flex flex-col sm:flex-row gap-3">
                        <a
                            href={CALL_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center bg-white text-cobalt font-bold text-[17px] px-6 py-4 no-underline hover:bg-cobalt-soft transition-[color,background-color,border-color,transform] duration-150 active:duration-75 motion-safe:active:translate-y-px"
                        >
                            Book a 30-min call
                        </a>
                        <a
                            href={`mailto:${EMAIL}`}
                            className="inline-flex items-center justify-center border-2 border-white text-white font-bold text-[17px] px-6 py-[14px] no-underline hover:bg-white hover:text-cobalt transition-[color,background-color,border-color,transform] duration-150 active:duration-75 motion-safe:active:translate-y-px"
                        >
                            Email me
                        </a>
                    </div>
                    <p className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-1 text-[15px]">
                        <span className="text-cobalt-soft break-all">{EMAIL}</span>
                        <CopyEmail email={EMAIL} />
                    </p>
                    <ul className="mt-6 pt-6 border-t border-white/40 flex flex-wrap gap-x-6 gap-y-2 text-[15px]">
                        {profiles.map((p) => (
                            <li key={p.label}>
                                <a
                                    href={p.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group inline-flex items-center gap-1 text-white no-underline hover:underline"
                                >
                                    {p.label}
                                    <ArrowUpRight />
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}

export function Footer() {
    return (
        <footer className="max-w-page mx-auto px-5 md:px-12 pb-10">
            <div className="border-t-2 border-ink pt-5 flex flex-col sm:flex-row sm:justify-between gap-2 text-[15px] text-ink-2">
                <p>© {new Date().getFullYear()} Dheeraj Shrivastav</p>
                <p className="hidden md:block">
                    Press <kbd className="font-sans font-medium text-ink border border-ink-3/60 px-1.5">⌘K</kbd> to jump anywhere
                </p>
            </div>
        </footer>
    );
}
