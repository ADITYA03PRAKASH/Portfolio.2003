import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Aditya Prakash Dwivedi | Full Stack & AI Engineer",
  description:
    "Senior Full Stack & AI Developer. Building premium web applications, AI voice agents, SaaS architectures, and high-performance digital products.",
  keywords: [
    "Aditya Prakash Dwivedi",
    "Full Stack Developer India",
    "AI Engineer",
    "Next.js Developer",
    "React Developer",
    "Software Engineer Portfolio",
  ],
  authors: [{ name: "Aditya Prakash Dwivedi" }],
  openGraph: {
    title: "Aditya Prakash Dwivedi | Full Stack & AI Engineer",
    description: "Building exceptional digital experiences.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-[#111111] font-body selection:bg-[#FFE8D6] selection:text-[#FF6B00]">
        {children}
      </body>
    </html>
  );
}
