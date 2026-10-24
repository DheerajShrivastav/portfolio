const skills: { label: string; items: string[] }[] = [
    { label: "AI", items: ["Gemini Live (native audio)", "Claude", "AWS Bedrock", "Groq", "Voice agents", "AI agents", "Guardrails", "MCP"] },
    { label: "Backend", items: ["TypeScript", "Node.js", "NestJS", "Express", "Bun", "REST", "Socket.io", "Prisma", "PostgreSQL", "Redis", "OAuth", "SIWE"] },
    { label: "Web3", items: ["Solidity", "Foundry", "ethers.js", "viem", "EIP-712", "Merkle proofs", "The Graph"] },
    { label: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "Phaser"] },
    { label: "Infra", items: ["Docker", "GitHub Actions", "AWS (S3, CloudFront, Lambda, Bedrock)", "Azure", "Linux", "Vercel"] },
];

export default function Skills() {
    return (
        <section id="skills" className="py-16 border-t border-border">
            <div className="max-w-5xl mx-auto px-6">
                <h2 className="font-mono text-accent-green mb-8 section-header">Skills</h2>

                <dl className="glass-card p-6 grid grid-cols-1 sm:grid-cols-[7rem_1fr] gap-x-6 gap-y-4">
                    {skills.map(({ label, items }) => (
                        <div key={label} className="contents">
                            <dt className="font-mono text-sm text-accent-blue sm:pt-0.5">{label}</dt>
                            <dd className="text-text-secondary text-sm leading-relaxed">{items.join(" · ")}</dd>
                        </div>
                    ))}
                </dl>
            </div>
        </section>
    );
}
