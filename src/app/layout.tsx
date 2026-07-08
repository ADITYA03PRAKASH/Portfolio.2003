import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aditya Prakash Dwivedi | Full Stack & AI Engineer",
  description: "Senior Full Stack & AI Developer specializing in building premium web applications, AI voice agents, custom automation, SaaS architectures, and high-performance digital systems.",
  keywords: [
    "Aditya Prakash Dwivedi",
    "Full Stack Developer",
    "AI Developer",
    "Software Engineer",
    "Next.js Portfolio",
    "Framer Motion Portfolio",
    "Luxury Portfolio Website"
  ],
  authors: [{ name: "Aditya Prakash Dwivedi" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-dark-bg text-slate-200 font-body select-none">
        {children}
      </body>
    </html>
  );
}
