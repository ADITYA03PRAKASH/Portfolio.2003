"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, CheckCircle2, Send } from "lucide-react";

interface ContactFormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}

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

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.2 });
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>();

  const onSubmit = async (data: ContactFormValues) => {
    setIsLoading(true);
    // Simulate API call
    await new Promise((r) => setTimeout(r, 1200));
    setIsLoading(false);
    setSubmitted(true);
    reset();
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #FF6B00 0%, #FF8A00 50%, #FFB347 100%)",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        padding: "120px 0",
      }}
    >
      {/* Dot grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.12) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Decorative blurred white circles */}
      <div
        className="absolute top-[-15%] right-[-10%] rounded-full pointer-events-none"
        style={{ width: 500, height: 500, background: "rgba(255,255,255,0.08)", filter: "blur(80px)" }}
      />
      <div
        className="absolute bottom-[-10%] left-[-8%] rounded-full pointer-events-none"
        style={{ width: 400, height: 400, background: "rgba(255,255,255,0.06)", filter: "blur(80px)" }}
      />

      <div className="container relative z-10 w-full">
        <div className="max-w-2xl mx-auto">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-12"
          >
            <span
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-white font-bold text-xs uppercase tracking-[0.12em] mb-6"
              style={{ background: "rgba(255,255,255,0.2)", border: "1px solid rgba(255,255,255,0.3)" }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse-slow" />
              Get In Touch
            </span>
            <h2
              className="text-white text-center"
              style={{
                fontSize: "clamp(44px, 6vw, 80px)",
                fontFamily: "var(--font-heading)",
                fontWeight: 900,
                lineHeight: 1.0,
                letterSpacing: "-0.035em",
              }}
            >
              Let&apos;s Build
              <br />
              Something Great
            </h2>
            <p className="text-white/75 text-lg mt-4 leading-relaxed">
              Have a project in mind? I&apos;m available for freelance, contracts, and full-time roles.
            </p>
          </motion.div>

          {/* Form Card */}
          <motion.div
            initial={{ opacity: 0, y: 48, scale: 0.97 }}
            animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white rounded-[40px] p-8 md:p-10"
            style={{ boxShadow: "0 24px 80px rgba(0,0,0,0.18), 0 4px 16px rgba(0,0,0,0.08)" }}
          >
            {submitted ? (
              /* Success State */
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col items-center justify-center py-12 gap-5 text-center"
              >
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center"
                  style={{ background: "linear-gradient(135deg, #FF6B00, #FF8A00)" }}
                >
                  <CheckCircle2 className="w-10 h-10 text-white" />
                </div>
                <h3 className="heading-2 text-[#111111]">Message Sent!</h3>
                <p className="body-md text-[#666666] max-w-sm">
                  Thanks for reaching out. I&apos;ll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn btn-primary cursor-none mt-2"
                >
                  Send Another
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5" noValidate>
                {/* Row 1: Name + Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <input
                      {...register("name", { required: "Name is required" })}
                      placeholder="Your Name"
                      className="w-full rounded-2xl border border-[#F1E4DA] bg-[#FFF8F3] px-4 py-3.5 text-[#111111] placeholder-[#999999] focus:border-[#FF6B00] focus:outline-none focus:bg-white text-sm font-body transition-all duration-200"
                    />
                    {errors.name && (
                      <p className="mt-1.5 text-xs text-[#FF6B00] pl-1">{errors.name.message}</p>
                    )}
                  </div>
                  <div>
                    <input
                      {...register("email", {
                        required: "Email is required",
                        pattern: { value: /^\S+@\S+\.\S+$/, message: "Enter a valid email" },
                      })}
                      type="email"
                      placeholder="Email Address"
                      className="w-full rounded-2xl border border-[#F1E4DA] bg-[#FFF8F3] px-4 py-3.5 text-[#111111] placeholder-[#999999] focus:border-[#FF6B00] focus:outline-none focus:bg-white text-sm font-body transition-all duration-200"
                    />
                    {errors.email && (
                      <p className="mt-1.5 text-xs text-[#FF6B00] pl-1">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <input
                    {...register("subject", { required: "Subject is required" })}
                    placeholder="What's this about?"
                    className="w-full rounded-2xl border border-[#F1E4DA] bg-[#FFF8F3] px-4 py-3.5 text-[#111111] placeholder-[#999999] focus:border-[#FF6B00] focus:outline-none focus:bg-white text-sm font-body transition-all duration-200"
                  />
                  {errors.subject && (
                    <p className="mt-1.5 text-xs text-[#FF6B00] pl-1">{errors.subject.message}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <textarea
                    {...register("message", { required: "Please write a message" })}
                    placeholder="Tell me about your project..."
                    rows={5}
                    className="w-full rounded-2xl border border-[#F1E4DA] bg-[#FFF8F3] px-4 py-3.5 text-[#111111] placeholder-[#999999] focus:border-[#FF6B00] focus:outline-none focus:bg-white text-sm font-body resize-none transition-all duration-200"
                  />
                  {errors.message && (
                    <p className="mt-1.5 text-xs text-[#FF6B00] pl-1">{errors.message.message}</p>
                  )}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="btn btn-primary w-full justify-center cursor-none py-4 text-base disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <>
                      <span
                        className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin"
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>

          {/* Contact Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-10"
          >
            <a
              href="mailto:adityaprakash112233@gmail.com"
              className="flex items-center gap-2 text-white/80 hover:text-white font-body text-sm transition-colors duration-200 cursor-none"
            >
              <Mail className="w-4 h-4" />
              adityaprakash112233@gmail.com
            </a>
            <span className="hidden sm:block w-px h-4 bg-white/30" />
            <a
              href="https://github.com/ADITYA03PRAKASH"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white/80 hover:text-white font-body text-sm transition-colors duration-200 cursor-none"
            >
              <GithubIcon className="w-4 h-4" />
              ADITYA03PRAKASH
            </a>
            <span className="hidden sm:block w-px h-4 bg-white/30" />
            <a
              href="https://www.linkedin.com/in/aditya-prakash-dwivedi-839943320"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white/80 hover:text-white font-body text-sm transition-colors duration-200 cursor-none"
            >
              <LinkedinIcon className="w-4 h-4" />
              LinkedIn
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
