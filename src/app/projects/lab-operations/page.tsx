import type { Metadata } from "next";
import { Bullets, CaseHeader, CaseStudyShell, Decision, Facts, Flow, Section, TalkCta } from "@/components/CaseStudy";

const title = "Lab operations platform case study | Dheeraj Shrivastav";
const description =
  "How I took manual hand-offs out of a diagnostics company's lab operations: one pipeline from lab upload to clinician-approved report, notifications that retry and log every message, and an LLM order parser where code checks every value.";

// Page-level openGraph replaces the inherited one, so the site share card is named explicitly.
const shareImage = { url: "/opengraph-image", width: 1200, height: 630, alt: "Dheeraj Shrivastav, Software Engineer" };

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/projects/lab-operations" },
  openGraph: { title, description, url: "/projects/lab-operations", type: "article", siteName: "Dheeraj Shrivastav", images: [shareImage] },
  twitter: { card: "summary_large_image", title, description, creator: "@Dheeraj_08_", images: [shareImage] },
};

// Every number here comes from the repository (git history, test counts, constants) or is marked as derived or estimated.
const facts = [
  { label: "Where", value: "At work, at a diagnostics company. In production; the code is private." },
  { label: "Team", value: "A small team. 106 of 361 commits are mine, and I wrote 43% of the test code." },
  {
    label: "My part",
    value:
      "Led the report pipeline, the clinician's review workspace and the partner-lab portal. Built the notification system and the order parser on my own.",
  },
  { label: "Users", value: "Operations staff, partner labs, the report-checking team and the approving clinician; doctors and hospitals receive the updates" },
  { label: "Stack", value: "TypeScript, Next.js, React, PostgreSQL, Prisma, Jest, Azure" },
  { label: "AI", value: "One bounded place in my work: reading free-text orders. Everything else is rules and tested code." },
];

export default function LabOperationsCaseStudy() {
  return (
    <CaseStudyShell>
      <CaseHeader
        no="01"
        title="A lab-operations platform: from a hospital's order to an approved report"
        intro="Hospitals order specialised tests, partner labs run them, and a senior clinician approves every report before it goes back. The platform tracks each case through all of it. My work was taking the manual steps out of that chain without taking people out of the decisions that matter."
      />

      <Facts items={facts} />

      <Section title="The work before">
        <p>The platform tracked cases, but the work around it ran on hand-offs:</p>
        <Bullets
          items={[
            "Reports lived in a second application with its own login. Operations uploaded each lab report and then handled it again in the other app, the clinician reviewed there, and the finished PDF was downloaded and uploaded back: about three hand-offs per report, and nowhere that showed where a report stood.",
            "Hospitals ordered tests in free-text WhatsApp messages, and staff retyped each one into a form of about ten fields, picking from many near-identical test names.",
            "Doctors and hospitals were updated by hand, one message at a time, with no record of what had been sent.",
            "Labs reported by email or chat, so nobody knew when a lab had actually received a sample.",
          ]}
        />
      </Section>

      <Section title="How it works now">
        <Flow
          caption="Each step writes to the case record, and each event sends the right update to doctors, hospitals and field staff."
          nodes={[
            {
              label: "Hospital order",
              note: "A free-text WhatsApp message",
              children: [{ label: "Order parser", note: "Pre-fills the new case; a person reviews and saves" }],
            },
            {
              label: "Partner lab portal",
              children: [
                { label: "Acknowledge receipt", note: "Starts the turnaround clock" },
                { label: "Upload raw report", note: "Sent to the report engine and back automatically" },
              ],
            },
            {
              label: "Clinician review",
              note: "Raw report beside the report as it will print; nothing leaves without approval",
              children: [{ label: "Final PDFs", note: "Drawn from deterministic templates inside the platform" }],
            },
            { label: "Final check and release", note: "A second person checks every report before it goes out" },
          ]}
        />
      </Section>

      <Section title="Key decisions">
        <Decision
          title="One pipeline instead of a second application"
          why="Every hand-off between systems was a place where a report could stall unseen. With one flow, the case record always shows where a report is, and the people doing the work stop being the integration layer."
        >
          A lab&apos;s upload is stored first, handed to the report engine, and its reading comes back onto the test, straight into the
          clinician&apos;s queue. After approval the platform draws the final PDFs itself. If the engine can&apos;t be reached, the upload is
          never lost: the failure is recorded on the test and the handover can be retried.
        </Decision>
        <Decision
          title="AI copies; code decides"
          why="Matching a test, a hospital or a date is a lookup with a right answer. Code is exact, testable and never guesses, and a wrong test sent to a lab is far worse than a blank field a person fills in."
        >
          For WhatsApp orders, a model only copies fields out of the message, word for word. Every value it returns must appear in the
          original text, or it&apos;s dropped. Code then matches tests to the catalogue (a test fills only if every meaningful word of its name is
          in the message), fills a hospital or doctor only on a single clear match, and leaves ambiguous dates blank. Tuning the model cut
          its response from up to two minutes to a few seconds, with a second provider as fallback.
        </Decision>
        <Decision
          title="Clinical reports are rules, not model output"
          why="A clinical report has to be reproducible and auditable: the same values must always produce the same report."
        >
          Interpretation, wording and template choice are plain, tested code, ported so they behave exactly as clinicians already knew them.
          The PDFs come from deterministic HTML templates.
        </Decision>
        <Decision
          title="Notifications that can't go missing or go twice"
          why="Before, nothing recorded what had been sent, so messages were missed or sent twice. A message about a patient's report has to arrive once, and someone has to be able to prove it did."
        >
          Each workflow event writes the message to a table before anything is sent, and sending happens after the response so nobody
          waits. Email and WhatsApp delivery statuses come back through signed webhooks, so they can&apos;t be faked. Failures worth retrying
          are retried at 5 minutes, 30 minutes and 2 hours, and each message is sent once. Admins choose who receives each event.
        </Decision>
        <Decision
          title="People stay where mistakes are expensive"
          why="Automation takes the routine work. The decisions that reach a hospital stay with people, which is what makes it safe to automate everything around them."
        >
          Every report goes to the approving clinician, and a second person does a final check before release. The order parser never
          saves on its own. The clinician&apos;s workspace puts the raw report beside the final one and has in-browser dictation for clinical notes,
          with no server cost.
        </Decision>
      </Section>

      <Section title="What changed">
        <Bullets
          items={[
            "Reports go through one application instead of two, with about three manual hand-offs per report gone.",
            "Labs upload their own reports, and every sample's receipt time is now recorded.",
            "Pickup, processing and assignment updates go out on their own, and every message is logged with its delivery status.",
            "A new case from a WhatsApp order needs roughly 0 to 3 fields typed instead of about 10 (an estimate, not yet timed).",
          ]}
        />
        <p>
          These come from comparing the flow before and after, not from timed studies. Measuring them is the next step, listed below.
        </p>
      </Section>

      <Section title="Reliability">
        <Bullets
          items={[
            "87 automated tests on notifications, 108 on lab logic and 32 on the order parser, which run against the full real test catalogue.",
            "A failed handover never loses a lab's upload, and a refused upload leaves the test unchanged.",
            "Bugs I found and fixed: duplicate sends, reports dropped silently, a report page repeated in preview, and files downloaded in the wrong format.",
          ]}
        />
      </Section>

      <Section title="What I'd measure next">
        <Bullets
          items={[
            "Accepted versus corrected fields in the order parser, to put a real accuracy number on it.",
            "Turnaround per lab against the agreed time, now that receipt is recorded.",
            "Delivery and read rates per channel, with an alert when failures rise.",
            "Automatic retries with backoff for the report-engine handover, which is a manual retry button today.",
          ]}
        />
      </Section>

      <TalkCta />
    </CaseStudyShell>
  );
}
