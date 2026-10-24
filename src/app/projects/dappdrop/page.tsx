import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import { Footer } from "@/components/Contact";
import { Bullets, Decision, Facts, Section, TalkCta, ext } from "@/components/CaseStudy";

export const metadata: Metadata = {
  title: "DappDrop case study | Dheeraj Shrivastav",
  description:
    "How I designed a Sybil-resistant on-chain rewards protocol: escrow and Merkle settlement, EIP-712 attestations, fitting under EIP-170, and the fund-drain bug an invariant test caught before launch.",
  alternates: { canonical: "/projects/dappdrop" },
};

const CONTRACTS = "https://github.com/DheerajShrivastav/Dapp-Drop-Smart-Contract";
const APP_REPO = "https://github.com/DheerajShrivastav/DappDrop-FrontEnd";
const LIVE = "https://dapp-drop.dheerajshrivastav.me";
const FINDINGS = `${CONTRACTS}/blob/dev/docs/SECURITY_FINDINGS.md`;

const facts = [
  { label: "Role", value: "Founder; architecture and security model" },
  { label: "Status", value: "Pre-launch, Sepolia testnet. No external audit yet." },
  { label: "Contracts", value: "Solidity, Foundry, OpenZeppelin" },
  { label: "Off-chain", value: "Next.js 15, Prisma, PostgreSQL, The Graph" },
  { label: "Tests", value: "240 unit + 26 invariant (default branch)" },
];

export default function DappDropCaseStudy() {
  return (
    <>
      <Header />
      <main className="max-w-3xl mx-auto px-6 py-16 md:py-24">
        <Link href="/#projects" className="font-mono text-sm text-text-muted hover:text-accent-green">
          ← back to projects
        </Link>

        <header className="mt-8 mb-12">
          <p className="font-mono text-sm text-accent-green mb-3">case study</p>
          <h1 className="text-3xl md:text-5xl font-bold text-text-primary tracking-tight leading-[1.1] mb-6">
            DappDrop: a rewards protocol where hosts can&apos;t rug and bots can&apos;t farm
          </h1>
          <p className="text-lg text-text-secondary leading-relaxed">
            Projects run reward campaigns, participants complete verified tasks, and escrowed ERC-20, ERC-721 and ERC-1155
            rewards settle on-chain after the campaign ends. This page covers the decisions that shaped it and the bugs the
            test suite caught.
          </p>
          <div className="flex flex-wrap gap-x-5 gap-y-2 mt-6 font-mono text-sm">
            <a href={LIVE} {...ext}>live app (testnet)</a>
            <a href={CONTRACTS} {...ext}>contracts repo</a>
            <a href={APP_REPO} {...ext}>app repo</a>
            <a href={FINDINGS} {...ext}>security findings log</a>
          </div>
        </header>

        <Facts items={facts} />

        <Section title="The problem">
          <p>
            Airdrop and quest campaigns have two trust problems. Bots farm rewards with many wallets, so real users get
            diluted. And participants have to trust the host: a host can let people do the work, then cancel or never pay.
          </p>
          <p>
            DappDrop&apos;s answer is to lock rewards in escrow up front, verify tasks off-chain with signed attestations,
            and settle on-chain so that once rewards are committed, the host can&apos;t take them back.
          </p>
        </Section>

        <Section title="How it is built">
          <pre className="glass-card p-5 font-mono text-xs leading-relaxed overflow-x-auto text-text-secondary">
{`Next.js app (SIWE login, wizard, claims)
 ├─ API routes
 │   └─ task checks → EIP-712 signer
 │      (Discord, Telegram, humanity)
 ├─ The Graph subgraph (RPC fallback)
 └─ workers
     ├─ keeper: ends campaigns
     └─ relayer: gasless claims (not live)

Web3Campaigns (core contract)
 ├─ NFTSettlementModule
 ├─ OnChainRewardModule
 └─ FeeModule
    satellites, pinned per campaign`}
          </pre>
          <p>
            The core contract handles the campaign lifecycle (Draft → Open → Ended → Closed, or Cancelled), escrow and
            claims. Reward modes beyond Merkle payouts, NFT custody and fees live in separately deployed satellite
            contracts. The contracts are not upgradeable, by design.
          </p>
        </Section>

        <Section title="Key decisions">
          <div className="space-y-4">
            <Decision
              title="Escrow first, then Merkle settlement after the campaign ends"
              why="Paying from the host's live wallet let a host revoke the allowance and leave winners unpaid, and paying in claim order rewarded whoever claimed first. Escrow removes the rug; a Merkle list fixes allocations before anyone claims."
            >
              Hosts fund the campaign into the contract. After it ends, the host publishes a Merkle root of allocations
              and claims open only after a 24-hour dispute window.
            </Decision>
            <Decision
              title="The dispute window re-arms only when the root actually changes"
              why="A review caught that re-publishing the same root would restart the clock, letting a host keep claims locked indefinitely while looking active. Now only a genuinely different root restarts it."
            >
              A corrected allocation gets its own 24-hour review period; a byte-identical update doesn&apos;t.
            </Decision>
            <Decision
              title="Signed attestations instead of hosts marking tasks done"
              why="Off-chain tasks (Discord, Telegram, proof-of-humanity) can't be checked on-chain, so a backend signer verifies them. A per-(participant, campaign, task) version counter blocks replays, and the EIP-712 domain binds each signature to one deployment."
            >
              Task completion is recorded on-chain only through an EIP-712 attestation from the SIGNER_ROLE service.
            </Decision>
            <Decision
              title="Satellite modules to stay under Ethereum's 24 KB contract limit"
              why="The core contract kept hitting the EIP-170 size limit. Moving NFT settlement, tiered rewards and fees into separate contracts made room for security fixes, and pinning each campaign to its module means a later rotation can't desync campaigns already in flight."
            >
              Logic that doesn&apos;t need to be in the core contract lives in satellite contracts it calls into.
            </Decision>
            <Decision
              title="Nobody gets stuck: permissionless ending and a fallback settler"
              why="If a host disappears, rewards shouldn't be locked forever. Anyone can end a campaign once its time is up, and a time-gated SETTLER_ROLE can settle an abandoned one without ever overriding the host."
            >
              Cancellation is also blocked once anyone has participated, so a host can&apos;t collect free work and walk away.
            </Decision>
          </div>
        </Section>

        <Section title="Bugs the tests caught">
          <div className="glass-card p-6 border-l-2" style={{ borderLeftColor: "var(--accent-red)" }}>
            <h3 className="text-lg font-bold text-text-primary mb-2">High severity: cross-campaign escrow drain</h3>
            <p className="mb-3">
              ERC-20 escrow is one shared token balance across all campaigns. After a host swept campaign A&apos;s unclaimed
              funds back, a late claimant on A could still claim, and get paid out of campaign B&apos;s escrow, leaving B
              underwater. The code had a comment saying this was checked; it wasn&apos;t.
            </p>
            <p>
              An escrow-solvency invariant test found it, not manual review, while it was on the dev branch and before any
              launch. Claims now revert once a campaign is swept, with a regression test for this exact path.
            </p>
          </div>
          <div className="glass-card p-6 border-l-2" style={{ borderLeftColor: "var(--accent-yellow)" }}>
            <h3 className="text-lg font-bold text-text-primary mb-2">Critical: tasks that participants could self-complete</h3>
            <p>
              <code className="font-mono text-sm">completeTask</code> let any wallet mark social and proof-of-humanity
              tasks as done by itself. Those tasks now require a signed attestation. The fix is merged and waiting for the
              pre-launch redeploy.
            </p>
          </div>
        </Section>

        <Section title="How I verify work">
          <p>
            I build DappDrop with AI coding agents, so the verification gate matters more than who typed the code. I set
            the architecture and security decisions, and nothing ships without passing the gate:
          </p>
          <Bullets
            items={[
              "Foundry unit tests plus stateful-fuzz invariant suites for escrow solvency, NFT inventory and attestation replay.",
              "Negative controls: deliberately breaking a fix to prove the invariant actually fails without it.",
              "Slither and Aderyn static analysis, with every finding and its status recorded in the security findings log.",
              "Honest claims: no external audit has been done, so nothing on the site says \"audited\".",
            ]}
          />
        </Section>

        <Section title="Status and what's next">
          <p>
            DappDrop runs on Sepolia testnet with internal test campaigns only, with no real users yet. A batch of
            pre-launch security fixes is waiting for a redeploy, and the gasless claim relayer is built but not yet
            switched on. No external audit has been done yet.
          </p>
        </Section>

        <TalkCta />
      </main>
      <Footer />
    </>
  );
}
