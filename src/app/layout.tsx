import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import CommandPalette from "@/components/CommandPalette";
import ScrollToTop from "@/components/ScrollToTop";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dheeraj.dev"), // Base URL for resolving social images
  title: "Dheeraj | Senior Full Stack & Blockchain Engineer",
  description: "Specializing in Smart Contract Security and Scalable Backend Systems. Building robust decentralized applications and high-performance server architectures.",
  keywords: ["Senior Developer", "Blockchain Security", "Smart Contract Audit", "Solidity Specialist", "Backend Architect", "Web3 Infrastructure"],
  icons: {
    icon: "/profilePic.jpg",
  },
  openGraph: {
    title: "Dheeraj | Senior Full Stack & Blockchain Engineer",
    description: "Expert in Smart Contract Security and Scalable Backend Systems.",
    url: "https://dheeraj.dev", // Replace with actual domain if known, otherwise placeholder
    siteName: "Dheeraj Portfolio",
    images: [
      {
        url: "/profilePic.jpg",
        width: 1200,
        height: 630,
        alt: "Dheeraj Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
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
        <ScrollToTop />
      </body>
    </html>
  );
}
