import Link from "next/link";

// How I work. Same facts as the hero and the case studies; no new claims.
export default function About() {
    return (
        <section id="how-i-work" className="max-w-page mx-auto px-5 md:px-12 pb-20 md:pb-28">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-x-6 gap-y-6 border-t-2 border-ink pt-6">
                <h2 className="md:col-span-3 text-display-lg font-extrabold">About</h2>
                <div className="md:col-span-9 lg:col-span-7 space-y-5 text-[17px] md:text-lg leading-relaxed text-ink-2 max-w-[68ch]">
                    <p className="text-ink font-medium">
                        I start with how the work actually happens, not with the tool.
                    </p>
                    <p>
                        At work I build core parts of the{" "}
                        <Link href="/projects/lab-operations" className="text-ink underline decoration-ink/30 hover:decoration-ink">
                            platform a diagnostics company runs on
                        </Link>
                        . Before writing code I watch where the work stalls: staff retyping hospital orders from WhatsApp, reports
                        passed between two applications by hand, updates to doctors sent one message at a time. Then I remove those
                        steps with plain, tested code: one pipeline from a lab&apos;s upload to an approved report, and notifications
                        that go out on their own, retry when they fail and leave a record of every message.
                    </p>
                    <p>
                        I use AI only where a step needs language understanding, and I don&apos;t let it guess. Hospital orders arrive
                        as messy free text, so a model copies the fields out word for word, and code checks every value against the
                        message before a person saves it. Where a mistake is expensive, a person decides: no report leaves without a
                        clinician&apos;s approval. The same rule shaped a voice agent I co-built, which answers only from a curated dataset
                        and cut manual physician work by 65%.
                    </p>
                    <p>
                        I own each feature end to end, from the first conversation with the people who use it to production, and I use
                        AI coding agents heavily, behind a gate I set up. On{" "}
                        <Link href="/projects/dappdrop" className="text-ink underline decoration-ink/30 hover:decoration-ink">
                            DappDrop
                        </Link>
                        , my on-chain rewards protocol, agents write much of the code to my specs, and nothing merges without 240
                        unit and 26 invariant Foundry tests plus Slither and Aderyn. One invariant caught a cross-campaign
                        fund-drain bug before launch.
                    </p>
                </div>
            </div>
        </section>
    );
}
