"use client";

import Link from "next/link";
import { ArrowLeft, Printer, Mail, Phone, MapPin, Globe } from "lucide-react";

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function ResumePage() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-[#FFF8F3] text-[#111111] font-body antialiased pb-20 print:pb-0 print:bg-white">
      {/* ─── Floating Navigation (Hidden on Print) ────────────────────── */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-[#F1E4DA] py-4 px-6 mb-8 print:hidden shadow-sm">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#666666] hover:text-[#FF6B00] transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </Link>
          <button
            onClick={handlePrint}
            className="btn btn-primary inline-flex items-center gap-2 px-5 py-2.5 text-sm"
          >
            <Printer className="w-4 h-4" />
            Print / Save as PDF
          </button>
        </div>
      </header>

      {/* ─── Resume Paper Sheet ───────────────────────────────────────── */}
      <main className="max-w-4xl mx-auto bg-white border border-[#F1E4DA] rounded-[32px] shadow-[0_2px_8px_rgba(0,0,0,0.02),0_20px_48px_rgba(0,0,0,0.04)] p-10 md:p-14 print:p-0 print:border-none print:shadow-none print:rounded-none">
        
        {/* ─── Header Info ────────────────────────────────────────────── */}
        <section className="border-b border-[#F1E4DA] pb-8 mb-8 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h1 className="font-heading font-black text-4xl md:text-5xl tracking-tight text-[#111111] leading-none mb-3">
              Aditya Prakash Dwivedi
            </h1>
            <p className="text-[#FF6B00] font-heading font-bold text-lg tracking-wide uppercase">
              Full Stack Developer
            </p>
          </div>
          
          <div className="flex flex-col gap-2 text-xs md:text-right text-[#666666] font-semibold tracking-wide">
            <span className="flex items-center justify-center md:justify-end gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#FF6B00]" /> Delhi, India
            </span>
            <span className="flex items-center justify-center md:justify-end gap-1.5">
              <Phone className="w-3.5 h-3.5 text-[#FF6B00]" /> +91 9142601081
            </span>
            <span className="flex items-center justify-center md:justify-end gap-1.5">
              <Mail className="w-3.5 h-3.5 text-[#FF6B00]" /> adityaprakash112233@gmail.com
            </span>
            <div className="flex items-center justify-center md:justify-end gap-3 mt-1 text-[#FF6B00]">
              <a
                href="https://www.linkedin.com/in/aditya-prakash-dwivedi-839943320"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline flex items-center gap-1"
              >
                <LinkedinIcon className="w-3 h-3" /> LinkedIn
              </a>
              <span>•</span>
              <a
                href="https://github.com/ADITYA03PRAKASH"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline flex items-center gap-1"
              >
                <GithubIcon className="w-3 h-3" /> GitHub
              </a>
              <span>•</span>
              <Link href="/" className="hover:underline flex items-center gap-1">
                <Globe className="w-3 h-3" /> Portfolio
              </Link>
            </div>
          </div>
        </section>

        {/* ─── Professional Summary ───────────────────────────────────── */}
        <section className="mb-8">
          <h2 className="font-heading font-bold text-sm tracking-widest text-[#FF6B00] uppercase mb-3 border-b border-[#FFE8D6] pb-1">
            Professional Summary
          </h2>
          <p className="text-sm text-[#333333] leading-relaxed">
            AI-driven Full-Stack Developer with hands-on experience building scalable, high-performance web applications using the MERN Stack, TypeScript, and modern development practices. Completed a Full Stack Development with AI program from PW Skills, strengthening expertise in end-to-end application development, system design, API integration, and deployment of efficient, production-ready solutions.
          </p>
        </section>

        {/* ─── Technical Skills ───────────────────────────────────────── */}
        <section className="mb-8">
          <h2 className="font-heading font-bold text-sm tracking-widest text-[#FF6B00] uppercase mb-3 border-b border-[#FFE8D6] pb-1">
            Technical Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 text-sm">
            <p className="text-[#666666]">
              <strong className="text-[#111111]">Languages:</strong> JavaScript, TypeScript, Python, SQL
            </p>
            <p className="text-[#666666]">
              <strong className="text-[#111111]">Frontend:</strong> React.js, Next.js, HTML5, CSS3, Tailwind CSS, Bootstrap
            </p>
            <p className="text-[#666666]">
              <strong className="text-[#111111]">Backend:</strong> Node.js, Express.js, REST APIs, GraphQL, API Integration
            </p>
            <p className="text-[#666666]">
              <strong className="text-[#111111]">Databases:</strong> MongoDB, MySQL, PostgreSQL
            </p>
            <p className="text-[#666666]">
              <strong className="text-[#111111]">DevOps & Cloud:</strong> Docker, GitHub Actions (CI/CD), Vercel, Linux
            </p>
            <p className="text-[#666666]">
              <strong className="text-[#111111]">Concepts:</strong> Data Structures & Algorithms, OOP, System Design, Scalable Architecture
            </p>
            <p className="text-[#666666] md:col-span-2">
              <strong className="text-[#111111]">Tools:</strong> Git, GitHub, VS Code, Cursor AI, GitHub Copilot, ChatGPT, Claude AI
            </p>
          </div>
        </section>

        {/* ─── Experience ─────────────────────────────────────────────── */}
        <section className="mb-8">
          <h2 className="font-heading font-bold text-sm tracking-widest text-[#FF6B00] uppercase mb-4 border-b border-[#FFE8D6] pb-1">
            Work Experience
          </h2>
          
          <div className="flex flex-col gap-6">
            {/* Tevatel */}
            <div>
              <div className="flex justify-between items-start gap-2 mb-1.5">
                <div>
                  <h3 className="font-heading font-extrabold text-base text-[#111111]">
                    Full Stack Developer
                  </h3>
                  <p className="text-xs font-semibold text-[#666666]">
                    Tevatel Software Solutions
                  </p>
                </div>
                <span className="text-xs font-bold text-[#FF6B00] tracking-wide whitespace-nowrap bg-[#FFF4EE] px-2.5 py-1 rounded-full print:bg-transparent print:p-0">
                  May 2026 – Present
                </span>
              </div>
              <ul className="list-disc pl-4 text-xs text-[#333333] space-y-1 leading-relaxed">
                <li>Built and shipped full-stack features using React.js, TypeScript, Node.js, and REST APIs, contributing to a codebase serving production users.</li>
                <li>Improved frontend rendering performance by refactoring reusable component architecture, reducing re-renders and improving page load consistency.</li>
                <li>Integrated and debugged third-party APIs, resolved production issues, and improved deployment reliability through better routing and error handling.</li>
                <li>Implemented SEO optimizations and routing improvements, increasing discoverability across key application pages.</li>
              </ul>
            </div>

            {/* Codingal */}
            <div>
              <div className="flex justify-between items-start gap-2 mb-1.5">
                <div>
                  <h3 className="font-heading font-extrabold text-base text-[#111111]">
                    Software Developer Associate Intern
                  </h3>
                  <p className="text-xs font-semibold text-[#666666]">
                    Codingal
                  </p>
                </div>
                <span className="text-xs font-bold text-[#FF6B00] tracking-wide whitespace-nowrap bg-[#FFF4EE] px-2.5 py-1 rounded-full print:bg-transparent print:p-0">
                  Nov 2025 – Apr 2026
                </span>
              </div>
              <ul className="list-disc pl-4 text-xs text-[#333333] space-y-1 leading-relaxed">
                <li>Enhanced live class features used by thousands of students, improving real-time interaction and session reliability.</li>
                <li>Debugged and optimized frontend and backend code, reducing reported bugs by collaborating directly with the core engineering team.</li>
                <li>Contributed to project-based learning module design, improving curriculum structure for coding courses.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ─── Projects ───────────────────────────────────────────────── */}
        <section className="mb-8">
          <h2 className="font-heading font-bold text-sm tracking-widest text-[#FF6B00] uppercase mb-4 border-b border-[#FFE8D6] pb-1">
            Projects
          </h2>
          
          <div className="flex flex-col gap-6">
            {/* EHub */}
            <div>
              <div className="flex justify-between items-center gap-2 mb-1">
                <h3 className="font-heading font-extrabold text-base text-[#111111]">
                  EHub – Full Stack Startup Project
                </h3>
                <a
                  href="https://www.ehubind.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-[#FF6B00] hover:underline"
                >
                  Live Link
                </a>
              </div>
              <ul className="list-disc pl-4 text-xs text-[#333333] space-y-1 leading-relaxed">
                <li>Architected and developed a production-ready full-stack engineering platform using React.js, Node.js, Express.js, MySQL, and Tailwind CSS.</li>
                <li>Built secure REST APIs with JWT authentication, role-based access control, protected routes, and centralized error handling.</li>
                <li>Designed a responsive, SEO-optimized user interface with dynamic forms, reusable components, and modern UI/UX principles.</li>
                <li>Integrated frontend and backend services, optimized application performance, and managed deployment, domain configuration, and production hosting.</li>
              </ul>
            </div>

            {/* Smart Task Manager */}
            <div>
              <div className="flex justify-between items-center gap-2 mb-1">
                <h3 className="font-heading font-extrabold text-base text-[#111111]">
                  Full Stack Task Management Application (MERN)
                </h3>
                <a
                  href="https://github.com/ADITYA03PRAKASH/Smart-Task-Manager-MERN-"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-[#FF6B00] hover:underline"
                >
                  GitHub Link
                </a>
              </div>
              <ul className="list-disc pl-4 text-xs text-[#333333] space-y-1 leading-relaxed">
                <li>Built a full-stack task manager with MongoDB, Express.js, React, and Node.js.</li>
                <li>Implemented JWT-based authentication with protected routes, role-based access control, and error-handling middleware.</li>
              </ul>
            </div>

            {/* OOP Task Manager */}
            <div>
              <div className="flex justify-between items-center gap-2 mb-1">
                <h3 className="font-heading font-extrabold text-base text-[#111111]">
                  Task Management Application (OOP-Based)
                </h3>
                <a
                  href="https://github.com/ADITYA03PRAKASH"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-[#FF6B00] hover:underline"
                >
                  GitHub Link
                </a>
              </div>
              <ul className="list-disc pl-4 text-xs text-[#333333] space-y-1 leading-relaxed">
                <li>Developed a scalable task management system using JavaScript classes and Object-Oriented Programming principles; implemented localStorage persistence to maintain seamless data retention and user experience across sessions.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ─── Education & Certifications ────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Education */}
          <section>
            <h2 className="font-heading font-bold text-sm tracking-widest text-[#FF6B00] uppercase mb-3 border-b border-[#FFE8D6] pb-1">
              Education
            </h2>
            <div className="flex flex-col gap-4 text-xs text-[#333333]">
              <div>
                <div className="flex justify-between font-bold text-[#111111] mb-0.5">
                  <span>B.Tech in Electrical Engineering</span>
                  <span className="text-[#FF6B00]">2021 – 2025</span>
                </div>
                <p className="text-[#666666]">Dr. B. C. Roy Engineering College (MAKAUT)</p>
                <p className="text-[#666666] font-semibold mt-0.5">CGPA: 7.29</p>
              </div>
              <div>
                <div className="flex justify-between font-bold text-[#111111] mb-0.5">
                  <span>Full Stack Dev with AI</span>
                  <span className="text-[#FF6B00]">2025 – 2026</span>
                </div>
                <p className="text-[#666666]">PW Skills (Aug 2025 – Mar 2026)</p>
              </div>
            </div>
          </section>

          {/* Certifications */}
          <section>
            <h2 className="font-heading font-bold text-sm tracking-widest text-[#FF6B00] uppercase mb-3 border-b border-[#FFE8D6] pb-1">
              Certifications
            </h2>
            <ul className="list-disc pl-4 text-xs text-[#333333] space-y-1">
              <li>
                <strong className="text-[#111111]">JavaScript (Basic)</strong> — HackerRank
              </li>
              <li>
                <strong className="text-[#111111]">Artificial Intelligence</strong> — CodSoft
              </li>
            </ul>
          </section>
        </div>

      </main>
    </div>
  );
}
