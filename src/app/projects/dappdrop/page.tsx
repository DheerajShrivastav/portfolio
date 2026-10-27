import type { Metadata } from "next";
import { Bullets, CaseHeader, CaseStudyShell, Decision, Facts, Finding, Flow, Section, TalkCta } from "@/components/CaseStudy";

const title = "DappDrop case study | Dheeraj Shrivastav";
const description =
  "How I designed a Sybil-resistant on-chain rewards protocol: escrow and Merkle settlement, EIP-712 attestations, fitting under EIP-170, and the fund-drain bug an invariant test caught before launch.";

// Page-level openGraph replaces the inherited one, so the site share card is named explicitly.
const shareImage = { url: "/opengraph-image", width: 1200, height: 630, alt: "Dheeraj Shrivastav, Software Engineer" };

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/projects/dappdrop" },
  openGraph: { title, description, url: "/projects/dappdrop", type: "article", siteName: "Dheeraj Shrivastav", images: [shareImage] },
  twitter: { card: "summary_large_image", title, description, creator: "@Dheeraj_08_", images: [shareImage] },
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
    <CaseStudyShell>
      <CaseHeader
        no="02"
        title="DappDrop: a rewards protocol where hosts can't rug and bots can't farm"
        intro="Projects run reward campaigns, participants complete verified tasks, and escrowed ERC-20, ERC-721 and ERC-1155 rewards settle on-chain after the campaign ends. This page covers the decisions that shaped it and the bugs the test suite caught."
        links={[
          { label: "Live app (testnet)", href: LIVE },
          { label: "Contracts repo", href: CONTRACTS },
          { label: "App repo", href: APP_REPO },
          { label: "Security findings log", href: FINDINGS },
        ]}
      />

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
        <Flow
          caption="Off-chain app and workers above; the core contract and its satellite modules below."
          nodes={[
            {
              label: "Next.js app",
              note: "SIWE login, campaign wizard, claims",
              children: [
                { label: "API routes", note: "Task checks (Discord, Telegram, proof-of-humanity) → EIP-712 signer" },
                { label: "The Graph subgraph", note: "Falls back to direct RPC reads" },
                {
                  label: "Workers",
                  children: [
                    { label: "Keeper", note: "Ends campaigns on schedule" },
                    { label: "Relayer", note: "Gasless claims; built, not yet live" },
                  ],
                },
              ],
            },
            {
              label: "Web3Campaigns (core contract)",
              note: "Satellites, pinned per campaign",
              children: [{ label: "NFTSettlementModule" }, { label: "OnChainRewardModule" }, { label: "FeeModule" }],
            },
          ]}
        />
        <p>
          The core contract handles the campaign lifecycle (Draft → Open → Ended → Closed, or Cancelled), escrow and
          claims. Reward modes beyond Merkle payouts, NFT custody and fees live in separately deployed satellite
          contracts. The contracts are not upgradeable, by design.
        </p>
      </Section>

      <Section title="Key decisions">
        <div className="space-y-10">
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
        <div className="space-y-10">
          <Finding severity="High severity" title="Cross-campaign escrow drain">
            <p>
              ERC-20 escrow is one shared token balance across all campaigns. After a host swept campaign A&apos;s unclaimed
              funds back, a late claimant on A could still claim, and get paid out of campaign B&apos;s escrow, leaving B
              underwater. The code had a comment saying this was checked; it wasn&apos;t.
            </p>
            <p>
              An escrow-solvency invariant test found it, not manual review, while it was on the dev branch and before any
              launch. Claims now revert once a campaign is swept, with a regression test for this exact path.
            </p>
          </Finding>
          <Finding severity="Critical" title="Tasks that participants could self-complete">
            <p>
              <code className="font-mono text-[0.92em] text-ink">completeTask</code> let any wallet mark social and
              proof-of-humanity tasks as done by itself. Those tasks now require a signed attestation. The fix is merged and
              waiting for the pre-launch redeploy.
            </p>
          </Finding>
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
    </CaseStudyShell>
  );
}
