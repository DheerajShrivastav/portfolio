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
  title: "Dheeraj Shrivastav | Software Engineer: Workflow Automation & Backend",
  description: "Software engineer who takes the manual work out of how businesses run: learns how the work actually happens, automates it with tested code, and uses AI only where it earns its place. Builds core parts of a diagnostics company's lab-operations platform; founder of DappDrop. TypeScript, Next.js, PostgreSQL.",
  keywords: ["Software Engineer", "Backend Engineer", "Full-Stack Engineer", "Workflow Automation", "Process Automation", "Forward Deployed Engineer", "Internal Tools", "LLM", "Next.js", "Node.js", "PostgreSQL", "Dheeraj Shrivastav"],
  openGraph: {
    title: "Dheeraj Shrivastav | Software Engineer: Workflow Automation & Backend",
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
