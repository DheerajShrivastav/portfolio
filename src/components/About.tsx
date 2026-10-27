import Link from "next/link";

// How I work, and what I want from Devcon. Same facts as the hero and the case studies; no new claims.
export default function About() {
    return (
        <section id="how-i-work" className="max-w-page mx-auto px-5 md:px-12 pb-20 md:pb-28">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-x-6 gap-y-6 border-t-2 border-ink pt-6">
                <h2 className="md:col-span-3 text-display-lg font-extrabold">About</h2>
                <div className="md:col-span-9 lg:col-span-7 space-y-5 text-[17px] md:text-lg leading-relaxed text-ink-2 max-w-[68ch]">
                    <p className="text-ink font-medium">
                        I take a feature from first spec to production and stay with it after launch.
                    </p>
                    <p>
                        At work I&apos;m on the team that shipped a real-time voice agent patients and doctors use every day; it
                        cut manual physician intervention by 65%. I also built the automated pipeline that replaced a team&apos;s
                        separate tools, and internal AI agents staff use instead of waiting on a senior.
                    </p>
                    <p>
                        I use AI coding agents heavily, behind a gate I set up. On{" "}
                        <Link href="/projects/dappdrop" className="text-ink underline decoration-ink/30 hover:decoration-ink">
                            DappDrop
                        </Link>
                        , my on-chain rewards protocol, agents write much of the code to my specs, and nothing merges without 240
                        unit and 26 invariant Foundry tests plus Slither and Aderyn. One invariant caught a cross-campaign
                        fund-drain bug before launch. It&apos;s on Sepolia testnet: not audited, no users yet.
                    </p>
                    <p>
                        At Devcon 8 in Mumbai I want to meet Ethereum builders and teams hiring backend, product or AI engineers,
                        and learn how people test DeFi protocols and use applied cryptography in production. If that&apos;s you,
                        say hi.
                    </p>
                </div>
            </div>
        </section>
    );
}
