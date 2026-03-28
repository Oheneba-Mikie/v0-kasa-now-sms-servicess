"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { motion, AnimatePresence } from "framer-motion"
import {
  Code2,
  Terminal,
  Copy,
  ShieldCheck,
  Zap,
  BookOpen,
  ChevronRight,
  Database,
  Lock,
  Globe,
  Settings,
  Layers,
  Cpu,
  ArrowRight,
  CheckCircle2,
  Search,
  Command,
  FileText,
  MessageSquare,
  Key,
  ExternalLink
} from "lucide-react"
import { useState, useEffect, useRef } from "react"

const sidebarLinks = [
  {
    group: "Introduction",
    links: [
      { name: "Quick Start Guide", id: "quickstart" },
      { name: "Postman Collection", id: "postman" },
      { name: "Official SDKs", id: "sdks" },
    ]
  },
  {
    group: "API Fundamentals",
    links: [
      { name: "Authentication", id: "auth" },
      { name: "Rate Limiting", id: "ratelimit" },
      { name: "Error Codes", id: "errors" },
      { name: "Webhooks", id: "webhooks" },
    ]
  },
  {
    group: "Endpoints",
    links: [
      { name: "Send SMS", id: "send-sms" },
      { name: "Bulk Messaging", id: "bulk" },
      { name: "Verification (OTP)", id: "otp" },
      { name: "Delivery Reports", id: "reports" },
    ]
  }
]

export default function DocsPage() {
  const [activeTab, setActiveTab] = useState("nodejs")
  const [copiedId, setCopiedId] = useState<string | null>(null)
  const [activeSection, setActiveSection] = useState("quickstart")
  const [searchQuery, setSearchQuery] = useState("")

  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({})

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text)
    setCopiedId(id)
    setTimeout(() => setCopiedId(null), 2000)
  }

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0
    }

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    const sections = document.querySelectorAll("section[id]")
    sections.forEach((section) => observer.observe(section))

    return () => {
      sections.forEach((section) => observer.unobserve(section))
    }
  }, [])

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Search Header (Mockup) */}
      <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 h-16 flex items-center">
        <div className="container mx-auto max-w-7xl px-4 flex items-center justify-between">
            <div className="flex items-center gap-8">
                <div className="hidden md:flex items-center gap-2 text-slate-400 font-medium text-sm">
                    <BookOpen className="h-4 w-4" />
                    <span>Docs</span>
                    <ChevronRight className="h-3 w-3" />
                    <span className="text-slate-900 font-bold capitalize">{activeSection.replace("-", " ")}</span>
                </div>
            </div>
            <div className="relative group w-full max-w-sm">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 group-focus-within:text-[#3A57FC] transition-colors" />
                <input 
                    type="text" 
                    placeholder="Search documentation..." 
                    className="w-full h-10 bg-slate-100 rounded-xl pl-10 pr-12 text-sm font-medium focus:bg-white focus:ring-2 focus:ring-[#3A57FC]/10 focus:border-[#3A57FC]/30 transition-all outline-none border border-transparent"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <div className="absolute right-3 top-1/2 -translate-y-1/2 px-1.5 py-0.5 bg-white border border-slate-200 rounded text-[10px] font-black text-slate-400 flex items-center gap-1 shadow-sm">
                    <Command className="h-2.5 w-2.5" /> K
                </div>
            </div>
        </div>
      </div>

      <div className="container mx-auto max-w-7xl px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Sidebar Navigation */}
          <aside className="lg:w-64 hidden lg:block sticky top-28 h-[calc(100vh-120px)] overflow-y-auto pr-4 custom-scrollbar">
            <nav className="space-y-10">
              {sidebarLinks.map((group, idx) => (
                <div key={idx} className="space-y-3">
                  <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4 ml-4">
                    {group.group}
                  </h3>
                  <ul className="space-y-1">
                    {group.links.map((link, lIdx) => (
                      <li key={lIdx}>
                        <a 
                          href={`#${link.id}`}
                          className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-bold transition-all group ${
                            activeSection === link.id 
                            ? "bg-[#3A57FC]/5 text-[#3A57FC] shadow-sm shadow-[#3A57FC]/5" 
                            : "text-slate-500 hover:text-slate-900 hover:bg-slate-50"
                          }`}
                        >
                          <div className={`w-1.5 h-1.5 rounded-full transition-all ${
                            activeSection === link.id ? "bg-[#3A57FC] scale-125" : "bg-transparent group-hover:bg-slate-300"
                          }`} />
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </nav>
          </aside>

          {/* Content Area */}
          <main className="flex-1 space-y-32">
            
            {/* Quick Start Section */}
            <section id="quickstart" className="scroll-mt-32 space-y-10">
                <div className="space-y-6">
                    <Badge className="bg-[#3A57FC]/10 text-[#3A57FC] border-none px-4 py-1.5 text-xs font-bold uppercase tracking-wider">
                        Introduction
                    </Badge>
                    <h1 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tight leading-tight">
                        Quick Start Guide
                    </h1>
                    <p className="text-slate-500 text-xl leading-relaxed max-w-3xl font-medium">
                        Welcome to the KasaNow API. This guide will help you send your first SMS in less than 5 minutes using our global developer infrastructure.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-8 rounded-[32px] bg-slate-50 border border-slate-100 hover:border-[#3A57FC]/20 transition-all group">
                        <div className="h-12 w-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-[#3A57FC] mb-6 group-hover:scale-110 transition-transform">
                            <Key className="h-6 w-6" />
                        </div>
                        <h4 className="text-xl font-bold text-slate-900 mb-3">1. Get API Key</h4>
                        <p className="text-slate-500 text-sm leading-relaxed">Sign up for a developer account and generate your secret API key from the dashboard.</p>
                    </div>
                    <div className="p-8 rounded-[32px] bg-slate-50 border border-slate-100 hover:border-[#3A57FC]/20 transition-all group">
                        <div className="h-12 w-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-[#3A57FC] mb-6 group-hover:scale-110 transition-transform">
                            <Terminal className="h-6 w-6" />
                        </div>
                        <h4 className="text-xl font-bold text-slate-900 mb-3">2. Send Request</h4>
                        <p className="text-slate-500 text-sm leading-relaxed">Use our SDKs or direct HTTP endpoints to send your first message to any number in Ghana.</p>
                    </div>
                </div>
            </section>

            {/* Authentication Section */}
            <section id="auth" className="scroll-mt-32 space-y-10">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-slate-100 border border-slate-200 text-slate-600 text-xs font-black uppercase tracking-widest">
                <Lock className="h-3.5 w-3.5" /> Authentication
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                Secure API Access
              </h2>
              <p className="text-slate-500 text-lg leading-relaxed max-w-3xl font-medium">
                The KasaNow API uses secret keys to authenticate requests. You can view and manage your API keys in the developer dashboard. Never expose these keys in client-side code.
              </p>

              <div className="relative group bg-[#0F172A] rounded-[40px] p-8 md:p-12 shadow-2xl overflow-hidden border border-white/5">
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#3A57FC]/10 rounded-full blur-[100px] -mr-48 -mt-48" />
                
                <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
                    <div className="space-y-4 max-w-md">
                        <h4 className="text-white font-bold text-xl flex items-center gap-3">
                            <div className="h-8 w-8 rounded-xl bg-white/10 flex items-center justify-center text-[#3A57FC]">
                                <ShieldCheck className="h-5 w-5" />
                            </div>
                            How to authenticate
                        </h4>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            Pass your API key in the standard <code className="text-blue-400 bg-blue-500/10 px-1.5 py-0.5 rounded font-mono">Authorization</code> header for every request.
                        </p>
                    </div>

                    <div className="flex-1 bg-white/5 rounded-3xl p-6 border border-white/10 font-mono text-sm group/code">
                        <div className="flex items-center justify-between mb-4">
                            <span className="text-slate-500 text-[10px] font-black uppercase tracking-widest">Header Example</span>
                            <button 
                                onClick={() => copyToClipboard("Authorization: Bearer YOUR_API_KEY", "auth-code")}
                                className="text-slate-400 hover:text-white transition-colors p-2 bg-white/5 rounded-xl"
                            >
                                {copiedId === "auth-code" ? <CheckCircle2 className="h-4 w-4 text-green-400" /> : <Copy className="h-4 w-4" />}
                            </button>
                        </div>
                        <div className="text-blue-400">Authorization: <span className="text-white">Bearer <span className="text-emerald-400">YOUR_API_KEY</span></span></div>
                    </div>
                </div>
              </div>
            </section>

            {/* Send SMS Section */}
            <section id="send-sms" className="scroll-mt-32 space-y-10">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-slate-100 pb-8">
                <div className="space-y-3">
                  <div className="flex items-center gap-4">
                    <Badge className="bg-[#10B981] text-white font-black h-8 px-4 rounded-xl border-none">POST</Badge>
                    <code className="text-lg font-bold font-mono text-slate-800 bg-slate-50 px-3 py-1 rounded-xl">/v1/sms/send</code>
                  </div>
                  <h3 className="text-3xl font-black text-slate-900 tracking-tight">Send Single Message</h3>
                </div>
                <div className="flex items-center gap-3">
                    <Button variant="outline" className="rounded-xl border-slate-200 font-bold text-slate-600 hover:bg-slate-50">
                        <ExternalLink className="mr-2 h-4 w-4" /> Try with Postman
                    </Button>
                </div>
              </div>

              <p className="text-slate-500 text-lg leading-relaxed font-medium">
                Deliver time-sensitive updates, transactional alerts, or personalized messages to any phone number globally.
              </p>

              {/* Params Table */}
              <div className="bg-white rounded-[40px] border border-slate-100 shadow-sm overflow-hidden">
                <div className="px-10 py-6 border-b border-slate-50 bg-slate-50/50 flex items-center justify-between">
                   <h4 className="font-black text-slate-400 uppercase text-[10px] tracking-[0.2em]">Request Parameters</h4>
                   <Badge variant="outline" className="text-slate-400 border-slate-200">JSON Body</Badge>
                </div>
                <div className="divide-y divide-slate-100">
                  {[
                    { name: "to", type: "string", required: true, desc: "Phone number in international E.164 format (e.g., +233241234567)." },
                    { name: "message", type: "string", required: true, desc: "Text content. For long messages, multi-part charges apply." },
                    { name: "sender_id", type: "string", required: false, desc: "Alphanumeric ID. Must be pre-approved in dashboard." },
                  ].map((param, i) => (
                    <div key={i} className="flex flex-col md:flex-row gap-4 md:gap-16 px-10 py-8 hover:bg-slate-50/30 transition-colors">
                      <div className="md:w-1/3 flex items-start gap-4">
                        <div className="font-bold text-[#3A57FC] font-mono text-base">{param.name}</div>
                        {param.required && <Badge className="bg-amber-100 text-amber-700 text-[9px] px-1.5 py-0 border-none font-black uppercase">Required</Badge>}
                      </div>
                      <div className="flex-1 text-slate-600 leading-relaxed font-semibold text-sm">
                        {param.desc}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Advanced Code Blocks */}
              <div className="space-y-6">
                <div className="flex items-center gap-2 p-1.5 bg-slate-100 rounded-2xl w-fit">
                  {["nodejs", "python", "curl"].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-6 py-2 rounded-xl font-black text-xs uppercase tracking-widest transition-all ${
                        activeTab === tab ? "bg-white text-[#3A57FC] shadow-sm" : "text-slate-400 hover:text-slate-600"
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>

                <div className="bg-[#0F172A] rounded-[48px] p-10 font-mono text-sm leading-relaxed shadow-2xl relative border border-white/5 group">
                  <div className="absolute top-8 right-10 z-20">
                    <button 
                        onClick={() => copyToClipboard("CODE_SNIPPET", "sms-code")}
                        className="p-3 bg-white/5 hover:bg-white/10 rounded-2xl text-slate-400 hover:text-white transition-all border border-white/5"
                    >
                        {copiedId === "sms-code" ? <CheckCircle2 className="h-5 w-5 text-green-400" /> : <Copy className="h-5 w-5" />}
                    </button>
                  </div>
                  
                  <div className="flex items-center gap-2 mb-8 opacity-40">
                    <div className="h-3 w-3 rounded-full bg-red-500" />
                    <div className="h-3 w-3 rounded-full bg-amber-500" />
                    <div className="h-3 w-3 rounded-full bg-green-500" />
                  </div>

                  {activeTab === "nodejs" && (
                    <div className="animate-in fade-in duration-500">
                      <p className="text-slate-500 mb-4">// npm install axios</p>
                      <p className="text-[#60A5FA]">const <span className="text-white">axios = require(<span className="text-[#A5F3FC]">'axios'</span>);</span></p>
                      <br />
                      <p className="text-[#60A5FA]">const <span className="text-white">options = {"{"}</span></p>
                      <p className="text-white pl-4 text-slate-300">method: <span className="text-[#A5F3FC]">'POST'</span>,</p>
                      <p className="text-white pl-4 text-slate-300">url: <span className="text-[#A5F3FC]">'https://api.kasanow.com/v1/sms/send'</span>,</p>
                      <p className="text-white pl-4 text-slate-300">headers: {"{"}</p>
                      <p className="text-white pl-8 text-slate-300">Authorization: <span className="text-[#A5F3FC]">'Bearer YOUR_KEY'</span>,</p>
                      <p className="text-white pl-8 text-slate-300">Content-Type: <span className="text-[#A5F3FC]">'application/json'</span></p>
                      <p className="text-white pl-4">{"}"},</p>
                      <p className="text-white pl-4 text-slate-300">data: {"{"} to: <span className="text-[#A5F3FC]">'+233240000000'</span>, message: <span className="text-[#A5F3FC]">'Hello!'</span> {"}"}</p>
                      <p className="text-white">{"};"}</p>
                    </div>
                  )}
                  {activeTab === "python" && (
                     <div className="animate-in fade-in duration-500">
                        <p className="text-slate-500 mb-4"># pip install requests</p>
                        <p className="text-blue-400">import <span className="text-white">requests</span></p>
                        <br />
                        <p className="text-white">response = requests.post(</p>
                        <p className="text-white pl-4"><span className="text-[#A5F3FC]">"https://api.kasanow.com/v1/sms/send"</span>,</p>
                        <p className="text-white pl-4">json={"{"}<span className="text-[#A5F3FC]">"to"</span>: <span className="text-[#A5F3FC]">"+233240000000"</span>, <span className="text-[#A5F3FC]">"message"</span>: <span className="text-[#A5F3FC]">"Hi!"</span>{"}"},</p>
                        <p className="text-white pl-4">headers={"{"}<span className="text-[#A5F3FC]">"Authorization"</span>: <span className="text-[#A5F3FC]">"Bearer YOUR_KEY"</span>{"}"}</p>
                        <p className="text-white">)</p>
                        <p className="text-white">print(response.json())</p>
                     </div>
                  )}
                  {activeTab === "curl" && (
                     <div className="animate-in fade-in duration-500">
                        <p className="text-white"><span className="text-[#10B981]">curl</span> -X POST https://api.kasanow.com/v1/sms/send \</p>
                        <p className="text-white pl-4">-H <span className="text-[#A5F3FC]">"Authorization: Bearer YOUR_KEY"</span> \</p>
                        <p className="text-white pl-4">-H <span className="text-[#A5F3FC]">"Content-Type: application/json"</span> \</p>
                        <p className="text-white pl-4">-d <span className="text-[#A5F3FC]">{`'{"to": "+23324", "message": "Verify me!"}'`}</span></p>
                     </div>
                  )}
                </div>
              </div>

              {/* Next/Prev Navigation */}
              <div className="flex items-center justify-between pt-12 border-t border-slate-100">
                <a href="#auth" className="flex items-center gap-4 group">
                    <div className="h-10 w-10 rounded-full border border-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-slate-50 transition-all">
                        <ChevronRight className="h-4 w-4 rotate-180" />
                    </div>
                    <div className="text-left">
                        <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Previous</div>
                        <div className="font-bold text-slate-900 group-hover:text-[#3A57FC] transition-colors">Authentication</div>
                    </div>
                </a>
                <a href="#bulk" className="flex items-center gap-4 group text-right">
                    <div className="text-right">
                        <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Next</div>
                        <div className="font-bold text-slate-900 group-hover:text-[#3A57FC] transition-colors">Bulk Messaging</div>
                    </div>
                    <div className="h-10 w-10 rounded-full border border-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-slate-50 transition-all">
                        <ChevronRight className="h-4 w-4" />
                    </div>
                </a>
              </div>
            </section>

          </main>
        </div>
      </div>

      {/* Modern Meta-CTA */}
      <section className="bg-slate-50 py-32 border-t border-slate-100 overflow-hidden relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
        
        <div className="container mx-auto max-w-5xl px-4 text-center">
           <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative bg-white rounded-[64px] border border-slate-200/60 p-12 md:p-24 shadow-xl overflow-hidden"
           >
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#3A57FC]/5 rounded-full blur-[100px] -mr-64 -mt-64" />
              <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-[100px] -ml-64 -mb-64" />
              
              <div className="relative z-10 space-y-10">
                <div className="h-24 w-24 bg-[#3A57FC]/10 rounded-[32px] flex items-center justify-center text-[#3A57FC] mx-auto shadow-inner">
                  <Terminal className="h-12 w-12" />
                </div>
                <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-tight">Ready to integrate?</h2>
                <p className="text-slate-500 text-xl max-w-sm mx-auto font-medium">Generate your API key and send your first message in minutes.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-[#3A57FC] hover:bg-[#4E67FF] text-white font-bold h-16 px-12 rounded-2xl text-lg shadow-xl shadow-[#3A57FC]/20 transition-all hover:scale-105">Create API Key</Button>
                  <Button variant="outline" className="border-slate-200 text-slate-600 bg-white hover:bg-slate-50 font-bold h-16 px-12 rounded-2xl text-lg transition-all">Explore Postman</Button>
                </div>
              </div>
           </motion.div>
        </div>
      </section>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #e2e8f0;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #cbd5e1;
        }
      `}</style>
    </div>
  )
}
