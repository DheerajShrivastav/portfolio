import type { Metadata } from "next";
import { Schibsted_Grotesk } from "next/font/google";
import "./globals.css";
import CommandPalette from "@/components/CommandPalette";

// One grotesk for the whole site, at extreme size contrast (Swiss poster system).
const grotesk = Schibsted_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dheerajshrivastav.me"),
  title: "Dheeraj Shrivastav | Software Engineer: Product, Backend, AI & Web3",
  description: "Software engineer who takes features from spec to production and owns them after launch: a real-time voice agent for patients and doctors, automated pipelines, internal AI agents, and the DappDrop protocol. TypeScript, Node.js, PostgreSQL, Solidity.",
  keywords: ["Software Engineer", "Product Engineer", "Full-Stack Engineer", "AI Agents", "Voice AI", "Backend Engineer", "Node.js", "NestJS", "PostgreSQL", "Solidity", "Web3", "Dheeraj Shrivastav"],
  openGraph: {
    title: "Dheeraj Shrivastav | Software Engineer: Product, Backend, AI & Web3",
    description: "I ship software real people use every day, from first spec to production.",
    url: "https://dheerajshrivastav.me",
    siteName: "Dheeraj Shrivastav",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@Dheeraj_08_",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={grotesk.variable}>
        <CommandPalette>{children}</CommandPalette>
      </body>
    </html>
  );
}
