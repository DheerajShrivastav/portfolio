import type { ReactNode } from "react";

// Shared building blocks for the /projects/* case study pages (server components).

export const ext = { target: "_blank", rel: "noopener noreferrer" } as const;

export function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mb-14">
      <h2 className="font-mono text-accent-green mb-4 section-header">{title}</h2>
      <div className="space-y-4 text-text-secondary leading-relaxed">{children}</div>
    </section>
  );
}

export function Decision({ title, why, children }: { title: string; why: string; children: ReactNode }) {
  return (
    <div className="glass-card p-6">
      <h3 className="text-lg font-bold text-text-primary mb-2">{title}</h3>
      <p className="mb-3">{children}</p>
      <p className="text-sm">
        <span className="font-mono text-accent-blue">why: </span>
        {why}
      </p>
    </div>
  );
}

export function Facts({ items }: { items: { label: string; value: string }[] }) {
  return (
    <dl className="glass-card p-6 mb-14 grid grid-cols-1 sm:grid-cols-[8rem_1fr] gap-x-6 gap-y-2 text-sm">
      {items.map((f) => (
        <div key={f.label} className="contents">
          <dt className="font-mono text-text-muted">{f.label}</dt>
          <dd className="text-text-primary">{f.value}</dd>
        </div>
      ))}
    </dl>
  );
}

export function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span className="text-accent-green font-mono shrink-0">&gt;</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function TalkCta() {
  return (
    <div className="glass-card p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
      <p className="text-text-primary">Want to go deeper on any of these decisions?</p>
      <div className="flex gap-4 font-mono text-sm">
        <a href="mailto:dheerajshrivastav08@gmail.com">email me</a>
        <a href="https://cal.com/dheeraj-shrivastav/30min" {...ext}>book a call</a>
      </div>
    </div>
  );
}
