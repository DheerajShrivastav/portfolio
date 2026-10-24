import { skills } from "@/content/site";

export default function Skills() {
    return (
        <section id="skills" className="max-w-page mx-auto px-5 md:px-12 pb-20 md:pb-28">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-x-6 gap-y-4 border-t-2 border-ink pt-6">
                <h2 className="md:col-span-3 text-display-lg font-extrabold">Skills</h2>
                <dl className="md:col-span-9 lg:col-span-8">
                    {skills.map(({ label, items }) => (
                        <div key={label} className="grid grid-cols-1 sm:grid-cols-[7rem_1fr] gap-x-6 gap-y-1 border-b border-ink/20 py-4 first:pt-0">
                            <dt className="font-bold text-ink">{label}</dt>
                            <dd className="text-[17px] leading-relaxed text-ink-2">{items.join(" · ")}</dd>
                        </div>
                    ))}
                </dl>
            </div>
        </section>
    );
}
