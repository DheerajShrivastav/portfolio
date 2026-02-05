import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import CommandPalette from "@/components/CommandPalette";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Dheeraj | Full Stack Developer & Blockchain Engineer",
  description: "Full Stack Developer and Blockchain Engineer. Building scalable backend systems and smart contracts for Web3.",
  keywords: ["Developer", "Blockchain", "Solidity", "Web3", "Full Stack", "Backend", "Smart Contracts"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${jetbrains.variable}`}>
        <CommandPalette>{children}</CommandPalette>
      </body>
    </html>
  );
}
