import type { Metadata } from "next";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Work from "@/components/Work";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Contact, { Footer } from "@/components/Contact";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

// Structured data so search engines can show a person card for name searches.
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Dheeraj Shrivastav",
  jobTitle: "Software Engineer",
  url: "https://dheerajshrivastav.me",
  address: { "@type": "PostalAddress", addressRegion: "Maharashtra", addressCountry: "IN" },
  knowsAbout: ["Product engineering", "AI agents", "Voice agents", "Backend engineering", "Node.js", "TypeScript", "PostgreSQL", "Solidity", "Smart contracts"],
  sameAs: [
    "https://github.com/DheerajShrivastav",
    "https://www.linkedin.com/in/dheerajshrivastav/",
    "https://x.com/Dheeraj_08_",
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <Header />
      <main id="main">
        <Hero />
        <Work />
        <About />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
