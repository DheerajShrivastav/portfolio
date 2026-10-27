import type { Metadata, Viewport } from "next";
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
  title: "Dheeraj Shrivastav | Software Engineer: Product & Backend",
  description: "Software engineer who takes features from spec to production and owns them after launch. On the team behind a real-time voice agent for patients and doctors; built an automated pipeline and internal AI agents; founder of DappDrop. TypeScript, Node.js, PostgreSQL, Solidity.",
  keywords: ["Software Engineer", "Product Engineer", "Backend Engineer", "Full-Stack Engineer", "AI Agents", "Voice AI", "Node.js", "NestJS", "PostgreSQL", "Solidity", "Web3", "Dheeraj Shrivastav"],
  openGraph: {
    title: "Dheeraj Shrivastav | Software Engineer: Product & Backend",
    description: "I ship software people use, and I own it: from first spec to production, and after launch.",
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

export const viewport: Viewport = {
  themeColor: "#f6f6f3",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={grotesk.variable}>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:bg-cobalt focus:text-white focus:font-bold focus:px-4 focus:py-3 focus:no-underline"
        >
          Skip to content
        </a>
        <CommandPalette>{children}</CommandPalette>
      </body>
    </html>
  );
}
