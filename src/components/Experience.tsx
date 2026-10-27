import { education, experience } from "@/content/site";

export default function Experience() {
    return (
        <section id="experience" className="max-w-page mx-auto px-5 md:px-12 pb-20 md:pb-28">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-x-6 gap-y-4 border-t-2 border-ink pt-6 mb-6">
                <h2 className="md:col-span-4 text-display-lg font-extrabold">Experience</h2>
                <p className="md:col-span-6 md:col-start-6 text-lg text-ink-2 leading-relaxed md:pt-3">
                    Shipping since 2023: client apps, a backend internship, now production features.
                </p>
            </div>

            <ol>
                {experience.map((r) => (
                    <li key={r.role} className="grid grid-cols-1 md:grid-cols-12 gap-x-6 gap-y-4 border-t border-ink py-10 md:py-12">
                        <div className="md:col-span-3">
                            <p className="tabular font-bold text-ink">{r.period}</p>
                            <p className="mt-1 text-[15px] text-ink-2">{r.company}</p>
                            {r.current && <p className="mt-3 text-[15px] font-bold text-ink">Current role</p>}
                        </div>
                        <div className="md:col-span-9 lg:col-span-8">
                            <h3 className="text-display-md font-extrabold">{r.role}</h3>
                            <p className="mt-3 text-lg text-ink-2">{r.summary}</p>
                            <ul className="mt-6 space-y-3 max-w-[70ch]">
                                {r.highlights.map((h) => (
                                    <li key={h} className="grid grid-cols-[1.25rem_1fr] text-[17px] leading-relaxed text-ink">
                                        <span aria-hidden="true" className="mt-[0.7em] h-[2px] w-2.5 bg-ink" />
                                        <span>{h}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="mt-6 text-[15px] text-ink-3">
                                <span className="sr-only">Stack: </span>
                                {r.stack.join(" · ")}
                            </p>
                        </div>
                    </li>
                ))}
            </ol>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-x-6 gap-y-4 border-t-2 border-ink pt-6 mt-4">
                <h3 className="md:col-span-3 font-bold">Education</h3>
                <ul className="md:col-span-9 lg:col-span-8 space-y-4">
                    {education.map((e) => (
                        <li key={e.degree} className="flex flex-col md:flex-row md:justify-between md:gap-6">
                            <span>
                                <span className="font-medium text-ink">{e.degree}</span>
                                <span className="block text-[15px] text-ink-2">{e.school}</span>
                            </span>
                            <span className="tabular text-[15px] text-ink-3 shrink-0">{e.period}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
