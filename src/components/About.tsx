// How I work, in four lines a reader can take in at a glance. Same facts as the hero and the case studies; no new claims.
const principles = [
    { lead: "Understand the work first.", rest: "I sit with the people doing it and find where it stalls or breaks." },
    { lead: "Automate with tested code.", rest: "One pipeline instead of hand-offs, and updates that send themselves." },
    { lead: "Use AI only where it's needed.", rest: "And check it: code verifies what it reads, and a person approves what matters." },
    { lead: "Own it end to end.", rest: "From the first conversation to production, and after launch." },
];

export default function About() {
    return (
        <section id="how-i-work" className="max-w-page mx-auto px-5 md:px-12 pb-20 md:pb-28">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-x-6 gap-y-6 border-t-2 border-ink pt-6">
                <h2 className="md:col-span-3 text-display-lg font-extrabold">About</h2>
                <div className="md:col-span-9 lg:col-span-7 max-w-[68ch]">
                    <p className="text-[17px] md:text-lg leading-relaxed text-ink font-medium">
                        I start with how the work actually happens, not with the tool.
                    </p>
                    <ul className="mt-6 border-t border-ink/20">
                        {principles.map((p) => (
                            <li key={p.lead} className="border-b border-ink/20 py-4 text-[17px] md:text-lg leading-relaxed text-ink-2">
                                <span className="font-bold text-ink">{p.lead}</span> {p.rest}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}
