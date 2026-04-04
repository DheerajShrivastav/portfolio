import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import OpenSource from "@/components/OpenSource";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Contact, { Footer } from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Projects />
        <OpenSource />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
