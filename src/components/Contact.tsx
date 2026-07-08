"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import confetti from "canvas-confetti";
import { Mail, MapPin, Send, Phone, Sparkles } from "lucide-react";
import { GitHub, LinkedIn } from "@/components/SocialIcons";

// Form Schema Validation
const contactSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(4, { message: "Subject must be at least 4 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    
    // Simulate API request
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setSubmitSuccess(true);
    reset();

    // Trigger luxury confetti celebration!
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#FF6B00", "#FF8A26", "#FFA94D"],
    });

    setTimeout(() => {
      setSubmitSuccess(false);
    }, 5000);
  };

  return (
    <section id="contact" className="relative py-24 px-6 md:px-12 w-full max-w-7xl mx-auto overflow-hidden">
      
      {/* Decorative Blur */}
      <div className="absolute top-[20%] left-[-15%] w-[40vw] h-[40vw] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      {/* Section Title */}
      <div className="text-center mb-16 flex flex-col items-center">
        <h2 className="font-heading text-xs uppercase tracking-widest font-black text-primary mb-2">
          Contact
        </h2>
        <p className="font-heading text-3xl sm:text-5xl font-black tracking-tight text-slate-900">
          Let&apos;s Build Something Great
        </p>
        <span className="w-12 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mt-4" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Contact Info & Details */}
        <div className="lg:col-span-5 space-y-6">
          <h3 className="font-heading text-2xl font-bold text-slate-800">
            Reach Out Directly
          </h3>
          <p className="text-sm sm:text-base text-slate-500 leading-relaxed font-sans">
            Have a project in mind, looking to hire, or just want to chat about engineering? Shoot me a message via the form, or ping me directly on my socials.
          </p>

          <div className="space-y-4 font-sans text-sm sm:text-base">
            {/* Email card */}
            <div className="flex items-center gap-4 p-4 rounded-xl glass-card border border-black/5 bg-white/70 shadow-sm shadow-orange-500/5">
              <div className="p-3 rounded-lg bg-primary/5 text-primary border border-primary/10">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs uppercase font-extrabold tracking-widest text-slate-500">Email</h4>
                <a href="mailto:adityaprakash112233@gmail.com" className="text-slate-600 hover:text-primary transition-colors text-sm">
                  adityaprakash112233@gmail.com
                </a>
              </div>
            </div>

            {/* Location card */}
            <div className="flex items-center gap-4 p-4 rounded-xl glass-card border border-black/5 bg-white/70 shadow-sm shadow-orange-500/5">
              <div className="p-3 rounded-lg bg-primary/5 text-primary border border-primary/10">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs uppercase font-extrabold tracking-widest text-slate-500">Location</h4>
                <span className="text-slate-655 text-sm">Delhi, India (Remote)</span>
              </div>
            </div>

            {/* Social Channels */}
            <div className="flex items-center gap-4 p-4 rounded-xl glass-card border border-black/5 bg-white/70 shadow-sm shadow-orange-500/5">
              <div className="p-3 rounded-lg bg-primary/5 text-primary border border-primary/10">
                <Phone className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <h4 className="text-xs uppercase font-extrabold tracking-widest text-slate-500">Call / Message</h4>
                <div className="flex items-center justify-between mt-1">
                  <a href="tel:+919142601081" className="text-slate-600 hover:text-primary transition-colors text-sm font-semibold">
                    +91 9142601081
                  </a>
                  <div className="flex items-center gap-3">
                    <a
                      href="https://github.com/ADITYA03PRAKASH"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-500 hover:text-slate-800 transition-colors"
                      aria-label="GitHub Profile"
                    >
                      <GitHub className="w-5 h-5" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/aditya-prakash-dwivedi-839943320"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-500 hover:text-slate-800 transition-colors"
                      aria-label="LinkedIn Profile"
                    >
                      <LinkedIn className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Cyber Map mockup (styled grid container) */}
          <div className="h-44 w-full rounded-2xl border border-black/5 glass-card relative overflow-hidden flex items-center justify-center bg-white/70 shadow-sm shadow-orange-500/5 select-none">
            {/* Mock coordinate grid overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,107,0,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,107,0,0.015)_1px,transparent_1px)] bg-[size:16px_16px]" />
            {/* Center target circle */}
            <div className="relative w-16 h-16 rounded-full border border-primary/25 flex items-center justify-center animate-ping" />
            <div className="absolute w-4 h-4 rounded-full bg-primary/30 border border-primary flex items-center justify-center">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            </div>
            {/* Overlay coordinate labels */}
            <span className="absolute bottom-2 left-3 font-mono text-[9px] text-slate-400 tracking-wider">
              COORD // 20.5937 N, 78.9629 E
            </span>
            <span className="absolute top-2 right-3 font-mono text-[9px] text-slate-400 tracking-wider">
              LOC // INDIA_HQ
            </span>
          </div>

        </div>

        {/* Contact Form Container */}
        <div className="lg:col-span-7 w-full p-6 sm:p-8 rounded-2xl glass-card border border-black/5 bg-white/75 shadow-lg shadow-orange-500/5 relative">
          
          <h3 className="font-heading text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
            Send Message
            <Send className="w-4 h-4 text-primary" />
          </h3>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 font-sans">
            {/* Name input */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-600 uppercase tracking-wider">Your Name</label>
              <input
                type="text"
                {...register("name")}
                className="w-full bg-slate-50 border border-black/8 hover:border-primary/20 focus:border-primary/50 focus:bg-white outline-none rounded-xl p-3 text-sm text-slate-800 transition-colors"
                placeholder="John Doe"
              />
              {errors.name && (
                <p className="text-xs text-red-600 font-semibold">{errors.name.message}</p>
              )}
            </div>

            {/* Email input */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-600 uppercase tracking-wider">Email Address</label>
              <input
                type="email"
                {...register("email")}
                className="w-full bg-slate-50 border border-black/8 hover:border-primary/20 focus:border-primary/50 focus:bg-white outline-none rounded-xl p-3 text-sm text-slate-800 transition-colors"
                placeholder="john@example.com"
              />
              {errors.email && (
                <p className="text-xs text-red-600 font-semibold">{errors.email.message}</p>
              )}
            </div>

            {/* Subject input */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-600 uppercase tracking-wider">Subject</label>
              <input
                type="text"
                {...register("subject")}
                className="w-full bg-slate-50 border border-black/8 hover:border-primary/20 focus:border-primary/50 focus:bg-white outline-none rounded-xl p-3 text-sm text-slate-800 transition-colors"
                placeholder="Partnership Discussion"
              />
              {errors.subject && (
                <p className="text-xs text-red-600 font-semibold">{errors.subject.message}</p>
              )}
            </div>

            {/* Message input */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-600 uppercase tracking-wider">Message</label>
              <textarea
                rows={5}
                {...register("message")}
                className="w-full bg-slate-50 border border-black/8 hover:border-primary/20 focus:border-primary/50 focus:bg-white outline-none rounded-xl p-3 text-sm text-slate-800 transition-colors resize-none"
                placeholder="Hi Aditya, I would love to build..."
              />
              {errors.message && (
                <p className="text-xs text-red-600 font-semibold">{errors.message.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 mt-4 rounded-xl bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white font-bold text-sm tracking-wide shadow-lg shadow-orange-500/10 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
            >
              {isSubmitting ? (
                <>
                  <span className="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin" />
                  Transmitting Payload...
                </>
              ) : (
                <>
                  Submit Inquiry
                  <Send className="w-4 h-4" />
                </>
              )}
            </button>

            {/* Success message banner */}
            {submitSuccess && (
              <div className="mt-4 p-4 rounded-xl border border-emerald-500/20 bg-emerald-500/5 text-emerald-600 text-xs sm:text-sm font-semibold flex items-center gap-2 animate-bounce">
                <Sparkles className="w-4 h-4 text-emerald-500" />
                Message successfully routed! I will get back to you shortly.
              </div>
            )}
          </form>

        </div>

      </div>
    </section>
  );
}
