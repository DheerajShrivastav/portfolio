import type { Metadata } from "next";
import { Bullets, CaseHeader, CaseStudyShell, Decision, Facts, Flow, Section, TalkCta } from "@/components/CaseStudy";

export const metadata: Metadata = {
  title: "Real-time voice AI agent case study | Dheeraj Shrivastav",
  description:
    "How I built a real-time voice AI agent for patients and doctors on Gemini Live: native speech-to-speech with no separate STT/TTS hops, strict guardrails over a curated dataset, live language switching, and a token-efficient harness.",
  alternates: { canonical: "/projects/voice-agent" },
};

const facts = [
  { label: "Where", value: "At work, in a healthcare company. In production; the code is private." },
  { label: "Users", value: "Patients and doctors, in their daily workflow" },
  { label: "Model", value: "Gemini Live (native audio, speech in and speech out)" },
  { label: "Stack", value: "Node.js, TypeScript, WebSockets, Azure" },
  { label: "Languages", value: "Any language Gemini Live supports, switchable mid-conversation" },
  { label: "Outcome", value: "Manual physician intervention down 65%" },
];

export default function VoiceAgentCaseStudy() {
  return (
    <CaseStudyShell>
      <CaseHeader
        no="01"
        title="A voice AI agent that patients and doctors can talk to in real time"
        intro="A voice agent that holds live conversations with patients and doctors and helps with their daily workflow: it runs patient self-assessments, answers questions from a curated dataset, and drafts personalized reports that doctors approve. The code is private, so this page explains the design decisions instead."
      />

      <Facts items={facts} />

      <Section title="The problem">
        <p>
          Voice only works if it feels like a conversation. Most voice agents chain three systems: speech-to-text, then a
          language model, then text-to-speech. Each step waits for the one before it, and the pauses add up. People talk
          over the agent, repeat themselves, or give up.
        </p>
        <p>
          Healthcare raises the stakes. A fluent but made-up answer is worse than no answer, so the agent has to stay
          strictly inside information the team trusts. And patients don&apos;t all speak the same language, or stick to one.
        </p>
      </Section>

      <Section title="How it works">
        <Flow
          caption="Voice in and voice out stream over WebSockets; one native-audio model listens and speaks."
          nodes={[
            { label: "Patient / doctor (web or app)", note: "Voice in ⇄ voice out, over WebSockets" },
            {
              label: "Node.js / TypeScript harness",
              children: [
                { label: "Session setup", note: "Strict rules + curated dataset in context" },
                { label: "Report drafts", note: "Sent for doctor approval" },
              ],
            },
            { label: "Gemini Live (native audio)", note: "One model: speech in → speech out" },
          ]}
        />
        <p>
          Audio streams both ways over WebSockets. There is no separate transcription or text-to-speech service in the
          loop: Gemini Live listens and speaks natively, in a natural-sounding voice. The harness decides what each session
          knows and how it must behave.
        </p>
      </Section>

      <Section title="Key decisions">
        <div className="space-y-10">
          <Decision
            title="Native speech-to-speech instead of an STT → LLM → TTS chain"
            why="Every hop in a chained pipeline adds waiting before the patient hears anything. One native-audio model removes two of those hops, so replies start with minimal delay and the conversation stays live. The voice also keeps a natural tone instead of sounding like text being read aloud."
          >
            Gemini Live handles listening, reasoning, and speaking in a single real-time session.
          </Decision>
          <Decision
            title="A curated dataset in context, behind strict rules"
            why="Answers must come from information the team trusts, with no guessing on medical facts. Loading a curated dataset into the session context means every answer has a known source, and there's no retrieval step to slow a live conversation down."
          >
            The agent answers only from the curated dataset and follows explicit behavior rules and decision logic, which
            keeps it from hallucinating.
          </Decision>
          <Decision
            title="Doctors approve reports before they reach patients"
            why="Guardrails cut the risk of a bad answer; doctor review catches what guardrails miss, on the output that matters most. That split is what lets the agent take routine work off physicians safely."
          >
            The agent drafts each personalized report and a doctor reviews and approves it before delivery.
          </Decision>
          <Decision
            title="A harness tuned for token efficiency"
            why="Live voice sessions use tokens continuously, for audio and for the context the model carries. At daily production volume, wasted tokens are a direct cost."
          >
            I optimized the harness to spend fewer tokens per conversation, which brings the running cost down.
          </Decision>
          <Decision
            title="Any supported language, switchable mid-conversation"
            why="Patients and doctors don't all share one language, and many switch languages mid-conversation. Forcing a single language would exclude people or make conversations stilted."
          >
            Users can speak any language Gemini Live supports and change language whenever they want; the agent follows in
            real time.
          </Decision>
        </div>
      </Section>

      <Section title="Results">
        <Bullets
          items={[
            "In production, used by patients and doctors as part of their daily workflow.",
            "Manual physician intervention on patient self-assessments down 65%.",
            "Live conversation with minimal delay and a natural-sounding voice, in any language the model supports.",
          ]}
        />
      </Section>

      <Section title="What I'd measure next">
        <p>
          The design choices above are about latency, accuracy and cost, so the next step is putting numbers on all three:
        </p>
        <Bullets
          items={[
            "Response latency per turn (median and worst case), from the end of the user's speech to the first audio back.",
            "Tokens and cost per conversation, tracked over time so harness changes show their effect.",
            "A guardrail test set of tricky and off-dataset questions, run on every change to rules or data, to prove the agent still stays inside the dataset.",
          ]}
        />
      </Section>

      <TalkCta />
    </CaseStudyShell>
  );
}
