"use client";

import { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, Bot, User, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ChatMessage {
  sender: "user" | "bot";
  text: string;
}

export default function AIChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      sender: "bot",
      text: "Hi there! I am Aditya's AI agent. Ask me anything about his technical experience, projects, or work availability!",
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const chatBottomRef = useRef<HTMLDivElement>(null);

  // Auto scroll to bottom of chat
  useEffect(() => {
    chatBottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const getAIResponse = (query: string): string => {
    const q = query.toLowerCase();

    if (q.includes("project") || q.includes("work") || q.includes("portfolio")) {
      return "Aditya has built several premium projects: 1) EHub (production-ready full-stack commerce platform), 2) Smart Task Manager (MERN stack with JWT authentication), and 3) OOP Task Manager (local-storage persisted). Details are highlighted in the Projects section above!";
    }
    if (q.includes("tech") || q.includes("stack") || q.includes("skill") || q.includes("language")) {
      return "His primary stack is React.js, Next.js, TypeScript, Node.js, Express, MySQL, PostgreSQL, and MongoDB. He is also skilled in Docker, CI/CD pipelines, and AI integrations.";
    }
    if (q.includes("avail") || q.includes("hire") || q.includes("job") || q.includes("freelance") || q.includes("contract")) {
      return "Yes! Aditya is actively open to Full-Time, Contract, or Freelance remote roles worldwide. You can lock in a consultation using the Contact Form or reach out directly at adityaprakash112233@gmail.com.";
    }
    if (q.includes("experience") || q.includes("background") || q.includes("history")) {
      return "Aditya has been developing software since 2021. He has worked as a Full Stack Developer at Tevatel Software Solutions and as a Software Developer Associate Intern at Codingal, engineering features for production scale.";
    }
    if (q.includes("hello") || q.includes("hi") || q.includes("hey")) {
      return "Hello! How can I assist you with Aditya's profile today? You can ask about his projects, skills, or contract rates.";
    }

    return "Interesting question! While I am a mock agent, Aditya himself would love to answer that. Let him know through the Contact Form at the bottom of the page, or connect on LinkedIn!";
  };

  const handleSendMessage = (textToSend: string) => {
    if (!textToSend.trim()) return;

    // Add user message
    const userMsg: ChatMessage = { sender: "user", text: textToSend };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    // Simulate typing latency
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      const botResponse: ChatMessage = {
        sender: "bot",
        text: getAIResponse(textToSend),
      };
      setMessages((prev) => [...prev, botResponse]);
    }, 1200);
  };

  const suggestions = [
    "What is your tech stack?",
    "Tell me about your projects",
    "Are you available for hire?",
  ];

  return (
    <>
      {/* Chat bubble button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 p-4 rounded-full bg-gradient-to-r from-primary via-secondary to-accent hover:scale-110 shadow-[0_4px_20px_rgba(6,182,212,0.4)] hover:shadow-[0_4px_30px_rgba(124,58,237,0.5)] transition-all duration-300 z-50 text-white cursor-pointer"
        title="Chat with AI Assistant"
        aria-label="Toggle AI Assistant"
      >
        {isOpen ? <X className="w-5 h-5" /> : <MessageSquare className="w-5 h-5 animate-pulse" />}
      </button>

      {/* Chat Window overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-24 right-6 w-[90%] max-w-[360px] h-[450px] rounded-2xl border border-black/5 glass-card bg-white/95 overflow-hidden shadow-2xl z-50 flex flex-col font-sans"
          >
            {/* Window Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-black/5 bg-slate-50 select-none">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-primary to-secondary flex items-center justify-center border border-primary/10">
                  <Bot className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-800 flex items-center gap-1">
                    Aditya&apos;s AI Agent
                    <Sparkles className="w-3 h-3 text-primary animate-spin" />
                  </h4>
                  <span className="text-[9px] text-primary font-bold uppercase tracking-wider">
                    Online
                  </span>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-slate-500 hover:text-slate-800 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Chat Messages flow */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3.5 scrollbar-thin">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex gap-2.5 max-w-[85%] ${
                    msg.sender === "user" ? "ml-auto flex-row-reverse" : ""
                  }`}
                >
                  <div
                    className={`w-7 h-7 rounded-full shrink-0 flex items-center justify-center text-xs border ${
                      msg.sender === "user"
                        ? "bg-slate-100 border-black/5 text-slate-500"
                        : "bg-primary/5 border-primary/10 text-primary"
                    }`}
                  >
                    {msg.sender === "user" ? <User className="w-3.5 h-3.5" /> : <Bot className="w-3.5 h-3.5" />}
                  </div>
                  
                  <div
                    className={`p-3 rounded-2xl text-xs leading-relaxed ${
                      msg.sender === "user"
                        ? "bg-primary text-white rounded-tr-none shadow-sm shadow-orange-500/10"
                        : "bg-slate-550 bg-slate-50 border border-black/5 text-slate-700 rounded-tl-none"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex gap-2.5 max-w-[85%]">
                  <div className="w-7 h-7 rounded-full bg-primary/5 border border-primary/10 flex items-center justify-center text-primary">
                    <Bot className="w-3.5 h-3.5" />
                  </div>
                  <div className="bg-slate-50 border border-black/5 p-3 rounded-2xl rounded-tl-none flex items-center gap-1.5 h-8">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              )}
              <div ref={chatBottomRef} />
            </div>

            {/* Quick Suggestion buttons */}
            {messages.length === 1 && (
              <div className="px-4 py-2 flex flex-col gap-1.5 bg-slate-50/50 border-t border-black/5 select-none">
                {suggestions.map((sug, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSendMessage(sug)}
                    className="text-left text-[10px] text-primary bg-primary/5 hover:bg-primary/10 border border-primary/10 hover:border-primary/20 px-2.5 py-1.5 rounded-lg transition-colors cursor-pointer"
                  >
                    {sug}
                  </button>
                ))}
              </div>
            )}

            {/* Input message form */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage(input);
              }}
              className="p-3 border-t border-black/5 bg-slate-50/50 flex items-center gap-2"
            >
              <input
                type="text"
                className="flex-1 bg-transparent border-none outline-none text-xs text-slate-800 placeholder-slate-400 font-sans"
                placeholder="Ask about Aditya..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                autoComplete="off"
              />
              <button
                type="submit"
                className="p-1.5 rounded-lg bg-primary/5 border border-primary/10 hover:bg-primary/10 text-primary transition-colors cursor-pointer"
                aria-label="Send message"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
