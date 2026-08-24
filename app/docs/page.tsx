"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
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
  ExternalLink,
  Activity,
  CreditCard,
  UserCheck,
  Send,
  Sparkles,
  HelpCircle,
  Hash,
  Check,
  X,
  Smartphone,
  Tag,
  Download,
  FileCode
} from "lucide-react"
import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"

const navHeaderTabs = [
  { name: "Documentation", href: "/docs", active: true },
  { name: "Guides", href: "#quickstart", active: false },
  { name: "API Reference", href: "#send-sms", active: false },
]

const sidebarLinks = [
  {
    group: "Get Started",
    links: [
      { name: "Introduction", id: "introduction" },
      { name: "Account & Sign In", id: "sign-in-req" },
      { name: "Buy Credits & Pricing", id: "pricing-credits" },
      { name: "Create API Key", id: "create-api-key" },
      { name: "Sender ID Rules", id: "sender-id-guide" },
      { name: "Phone Formatting", id: "phone-format" },
      { name: "Quickstart", id: "quickstart" },
      { name: "Postman Collection", id: "postman" },
    ]
  },
  {
    group: "API Fundamentals",
    links: [
      { name: "Authentication", id: "auth" },
      { name: "Error Codes", id: "errors" },
      { name: "Webhooks", id: "webhooks" },
    ]
  },
  {
    group: "Endpoints",
    links: [
      { name: "Send Single SMS", id: "send-sms" },
      { name: "Bulk Messaging", id: "bulk" },
      { name: "Delivery Reports", id: "reports" },
    ]
  }
]

const codeExamples = {
  curl: `curl -X POST https://lgjfiquiaynelpxrybowl.supabase.co/functions/v1/sms-send \\
  -H "Content-Type: application/json" \\
  -H "apikey: YOUR_SUPABASE_ANON_KEY" \\
  -H "x-api-key: YOUR_SECRET_KASANOW_API_KEY" \\
  -d '{
    "sender": "KASANOW",
    "to": "233XXXXXXXXX, 233YYYYYYYYY",
    "message": "Hello from Kasanow SMS reseller API"
  }'`,

  nodejs: `const axios = require('axios');

const response = await axios.post(
  'https://lgjfiquiaynelpxrybowl.supabase.co/functions/v1/sms-send',
  {
    sender: 'KASANOW',
    to: '233XXXXXXXXX, 233YYYYYYYYY',
    message: 'Hello from Kasanow SMS reseller API'
  },
  {
    headers: {
      'Content-Type': 'application/json',
      'apikey': process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
      'x-api-key': process.env.KASANOW_API_KEY
    }
  }
);

console.log(response.data);`,

  nextjs: `// app/api/send-sms/route.ts (Next.js App Router Server Route)
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { to, message, sender } = await req.json();

  const res = await fetch('https://lgjfiquiaynelpxrybowl.supabase.co/functions/v1/sms-send', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'apikey': process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      'x-api-key': process.env.KASANOW_API_KEY!,
    },
    body: JSON.stringify({
      sender: sender || 'KASANOW',
      to,
      message
    }),
  });

  const data = await res.json();
  return NextResponse.json(data);
}`,

  python: `import requests
import os

url = "https://lgjfiquiaynelpxrybowl.supabase.co/functions/v1/sms-send"

headers = {
    "Content-Type": "application/json",
    "apikey": os.environ.get("SUPABASE_ANON_KEY"),
    "x-api-key": os.environ.get("KASANOW_API_KEY")
}

payload = {
    "sender": "KASANOW",
    "to": "233XXXXXXXXX, 233YYYYYYYYY",
    "message": "Hello from Kasanow SMS reseller API"
}

response = requests.post(url, json=payload, headers=headers)
print(response.json())`,

  php: `<?php
$ch = curl_init('https://lgjfiquiaynelpxrybowl.supabase.co/functions/v1/sms-send');

$payload = json_encode([
    'sender' => 'KASANOW',
    'to' => '233XXXXXXXXX, 233YYYYYYYYY',
    'message' => 'Hello from Kasanow SMS reseller API'
]);

curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, $payload);
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    'Content-Type: application/json',
    'apikey: ' . getenv('SUPABASE_ANON_KEY'),
    'x-api-key: ' . getenv('KASANOW_API_KEY')
]);

$response = curl_exec($ch);
curl_close($ch);
echo $response;
?>`,

  go: `package main

import (
	"bytes"
	"encoding/json"
	"fmt"
	"net/http"
	"os"
)

func main() {
	url := "https://lgjfiquiaynelpxrybowl.supabase.co/functions/v1/sms-send"

	payload := map[string]string{
		"sender":  "KASANOW",
		"to":      "233XXXXXXXXX, 233YYYYYYYYY",
		"message": "Hello from Kasanow SMS reseller API",
	}
	jsonVal, _ := json.Marshal(payload)

	req, _ := http.NewRequest("POST", url, bytes.NewBuffer(jsonVal))
	req.Header.Set("Content-Type", "application/json")
	req.Header.Set("apikey", os.Getenv("SUPABASE_ANON_KEY"))
	req.Header.Set("x-api-key", os.Getenv("KASANOW_API_KEY"))

	client := &http.Client{}
	resp, err := client.Do(req)
	if err != nil {
		panic(err)
	}
	defer resp.Body.Close()

	fmt.Println("Status:", resp.Status)
}`
}

const postmanJsonSample = `{
  "info": {
    "name": "KasaNow SMS API Collection",
    "schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
  },
  "item": [
    {
      "name": "Send SMS",
      "request": {
        "method": "POST",
        "header": [
          { "key": "Content-Type", "value": "application/json" },
          { "key": "apikey", "value": "{{SUPABASE_ANON_KEY}}" },
          { "key": "x-api-key", "value": "{{KASANOW_API_KEY}}" }
        ],
        "body": {
          "mode": "raw",
          "raw": "{\\n  \\"sender\\": \\"KASANOW\\",\\n  \\"to\\": \\"233241234567\\",\\n  \\"message\\": \\"Hello from KasaNow Postman collection!\\"\\n}"
        },
        "url": {
          "raw": "https://lgjfiquiaynelpxrybowl.supabase.co/functions/v1/sms-send"
        }
      }
    }
  ]
}`

export default function DocsPage() {
  const [activeTab, setActiveTab] = useState<keyof typeof codeExamples>("curl")
  const [copiedId, setCopiedId] = useState<string | null>(null)
  const [activeSection, setActiveSection] = useState("introduction")
  const [searchQuery, setSearchQuery] = useState("")
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text)
    setCopiedId(id)
    setTimeout(() => setCopiedId(null), 2000)
  }

  const downloadPostmanCollection = () => {
    const blob = new Blob([postmanJsonSample], { type: "application/json" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = "kasanow-sms-api.postman_collection.json"
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  // Keyboard shortcut listener for Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault()
        setIsSearchOpen(prev => !prev)
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-15% 0px -70% 0px",
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

  const allLinks = sidebarLinks.flatMap(g => g.links)
  const searchResults = allLinks.filter(l => 
    l.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased selection:bg-[#3A57FC]/10 selection:text-[#3A57FC] relative">
      
      {/* Light Mode Top Header Navbar */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-xl border-b border-slate-200/80 h-14 flex items-center px-4 md:px-8 justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center group">
            <Image
              src="/logo.jpg"
              alt="KasaNow"
              width={140}
              height={36}
              className="h-8 w-auto object-contain"
            />
          </Link>

          {/* Nav Links */}
          <nav className="hidden md:flex items-center gap-1 text-xs font-medium text-slate-600">
            {navHeaderTabs.map((tab, idx) => (
              <a
                key={idx}
                href={tab.href}
                className={`px-3 py-1.5 rounded-md transition-colors ${
                  tab.active ? "text-slate-900 bg-slate-100 font-semibold" : "hover:text-slate-900 hover:bg-slate-50"
                }`}
              >
                {tab.name}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-3">
          {/* Search Trigger Bar */}
          <button
            onClick={() => setIsSearchOpen(true)}
            className="relative hidden sm:flex items-center w-56 md:w-64 h-8 bg-slate-100/80 rounded-md pl-8 pr-12 text-xs font-medium text-slate-500 border border-slate-200 hover:border-slate-300 transition-colors text-left"
          >
            <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-400" />
            <span>Search docs...</span>
            <div className="absolute right-2 top-1/2 -translate-y-1/2 px-1.5 py-0.5 bg-white border border-slate-200 rounded text-[9px] font-mono text-slate-500 shadow-xs">
              Ctrl K
            </div>
          </button>

          <a href="https://ksndash.netlify.app/auth" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" className="h-8 px-3 text-xs text-slate-600 hover:text-slate-900 hover:bg-slate-100">
              Sign In
            </Button>
          </a>
          <a href="https://ksndash.netlify.app/auth" target="_blank" rel="noopener noreferrer">
            <Button className="h-8 px-3 text-xs bg-[#3A57FC] hover:bg-[#2F4AD8] text-white font-semibold rounded-md shadow-sm">
              Get Started
            </Button>
          </a>
        </div>
      </header>

      {/* Ctrl+K Search Modal Dialog */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs flex items-start justify-center pt-20 px-4">
          <div className="bg-white border border-slate-200 rounded-xl w-full max-w-xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-center px-4 border-b border-slate-200 h-12">
              <Search className="h-4 w-4 text-slate-400 mr-2 shrink-0" />
              <input
                type="text"
                placeholder="Search documentation..."
                className="w-full bg-transparent text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
              />
              <button onClick={() => setIsSearchOpen(false)} className="p-1 text-slate-400 hover:text-slate-700">
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="max-h-80 overflow-y-auto p-2 space-y-1 text-xs">
              {searchResults.length > 0 ? (
                searchResults.map((item, i) => (
                  <a
                    key={i}
                    href={`#${item.id}`}
                    onClick={() => setIsSearchOpen(false)}
                    className="flex items-center justify-between p-2.5 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors"
                  >
                    <span className="font-medium">{item.name}</span>
                    <span className="text-[10px] text-slate-400 font-mono">#{item.id}</span>
                  </a>
                ))
              ) : (
                <div className="p-6 text-center text-slate-500">
                  No matching documentation sections found.
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        <div className="flex gap-10">
          
          {/* Left Navigation Sidebar */}
          <aside className="w-56 shrink-0 hidden lg:block sticky top-20 h-[calc(100vh-100px)] overflow-y-auto pr-3 custom-scrollbar">
            <nav className="space-y-6 text-xs">
              {sidebarLinks.map((group, idx) => (
                <div key={idx} className="space-y-2">
                  <h3 className="font-semibold text-slate-400 px-2 tracking-wide text-[11px]">
                    {group.group}
                  </h3>
                  <ul className="space-y-0.5">
                    {group.links.map((link, lIdx) => {
                      const isActive = activeSection === link.id
                      return (
                        <li key={lIdx}>
                          <a
                            href={`#${link.id}`}
                            className={`flex items-center justify-between px-2.5 py-1.5 rounded-md font-medium transition-all ${
                              isActive
                                ? "bg-[#3A57FC]/10 text-[#3A57FC] font-semibold"
                                : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/70"
                            }`}
                          >
                            <span>{link.name}</span>
                            {isActive && <div className="h-1.5 w-1.5 rounded-full bg-[#3A57FC]" />}
                          </a>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              ))}
            </nav>
          </aside>

          {/* Center Main Content */}
          <main className="flex-1 min-w-0 max-w-4xl space-y-20 pb-28">

            {/* Introduction Section */}
            <section id="introduction" className="scroll-mt-24 space-y-6 border-b border-slate-200/80 pb-12">
              <div className="space-y-3">
                <div className="text-xs font-mono text-slate-500 uppercase tracking-wider">Get Started</div>
                <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
                  Introduction
                </h1>
                <p className="text-slate-600 text-base md:text-lg leading-relaxed">
                  KasaNow is the premier programmable SMS API for developers and businesses in Ghana and across Africa.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 space-y-4">
                <h3 className="text-sm font-semibold text-slate-900">To get started with KasaNow, you&apos;ll need:</h3>
                <ol className="space-y-3 text-xs text-slate-700">
                  <li className="flex items-start gap-2.5">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white text-[10px] font-bold text-slate-700 border border-slate-300 shadow-xs">1</span>
                    <span>
                      <strong className="text-slate-900">A KasaNow account:</strong>{" "}
                      <a href="https://ksndash.netlify.app/auth" target="_blank" rel="noopener noreferrer" className="text-[#3A57FC] underline font-medium hover:text-[#2F4AD8]">Sign up or Sign in</a> to access your developer portal.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white text-[10px] font-bold text-slate-700 border border-slate-300 shadow-xs">2</span>
                    <span>
                      <strong className="text-slate-900">SMS Wallet Credits:</strong> Top up your balance to unlock API key generation.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white text-[10px] font-bold text-slate-700 border border-slate-300 shadow-xs">3</span>
                    <span>
                      <strong className="text-slate-900">A KasaNow Live API Key:</strong> Include your key in the <code className="text-emerald-700 bg-emerald-50 border border-emerald-200 px-1 py-0.5 rounded font-mono">x-api-key</code> request header.
                    </span>
                  </li>
                </ol>
              </div>
            </section>

            {/* Account & Sign In Requirement */}
            <section id="sign-in-req" className="scroll-mt-24 space-y-6 border-b border-slate-200/80 pb-12">
              <div className="space-y-2">
                <Badge className="bg-blue-50 text-blue-700 border-blue-200 text-[10px] uppercase font-mono px-2 py-0.5">
                  Authentication & Approval Requirement
                </Badge>
                <h2 className="text-2xl font-bold tracking-tight text-slate-900">Account & Approval Access</h2>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Developers must log into a verified KasaNow account. Your account must be approved before you can generate API keys or execute outbound messages.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <UserCheck className="h-5 w-5 text-[#3A57FC]" />
                  <h4 className="text-sm font-semibold text-slate-900">1. Sign In & Verify</h4>
                  <p className="text-xs text-slate-600">Sign up and log in to view your profile, SMS credit balance, and Sender IDs.</p>
                </div>
                <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <Key className="h-5 w-5 text-emerald-600" />
                  <h4 className="text-sm font-semibold text-slate-900">2. Account Approval</h4>
                  <p className="text-xs text-slate-600">Your account must be approved before API key creation is unlocked.</p>
                </div>
              </div>
            </section>

            {/* Buy Credits & Pricing */}
            <section id="pricing-credits" className="scroll-mt-24 space-y-6 border-b border-slate-200/80 pb-12">
              <div className="space-y-2">
                <Badge className="bg-amber-50 text-amber-700 border-amber-200 text-[10px] uppercase font-mono px-2 py-0.5">
                  SMS Bundles & Top Up
                </Badge>
                <h2 className="text-2xl font-bold tracking-tight text-slate-900">SMS Pricing & Top Up</h2>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Your account must be approved before you can access API key creation. KasaNow operates on a prepaid credit balance for outbound SMS messages.
                </p>
              </div>

              {/* Pricing Tier Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5 text-left">
                  <div className="text-sm font-bold text-slate-900">0 - 100 SMS</div>
                  <div className="text-base font-semibold text-slate-700">0.070 <span className="text-xs font-normal text-slate-500">/ SMS</span></div>
                  <p className="text-[11px] text-slate-500">Starter Developer Tier</p>
                </div>
                <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5 text-left">
                  <div className="text-sm font-bold text-slate-900">0 - 500 SMS</div>
                  <div className="text-base font-semibold text-slate-700">0.080 <span className="text-xs font-normal text-slate-500">/ SMS</span></div>
                  <p className="text-[11px] text-slate-500">Growth Tier</p>
                </div>
                <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5 text-left">
                  <div className="text-sm font-bold text-slate-900">1000+ SMS</div>
                  <div className="text-base font-semibold text-[#3A57FC]">0.050 <span className="text-xs font-normal text-slate-500">/ SMS</span></div>
                  <p className="text-[11px] text-slate-500">Reseller & High Volume Tier</p>
                </div>
              </div>
            </section>

            {/* Create API Key Section */}
            <section id="create-api-key" className="scroll-mt-24 space-y-6 border-b border-slate-200/80 pb-12">
              <div className="space-y-2">
                <Badge className="bg-emerald-50 text-emerald-700 border-emerald-200 text-[10px] uppercase font-mono px-2 py-0.5">
                  Dashboard
                </Badge>
                <h2 className="text-2xl font-bold tracking-tight text-slate-900">Create your Live API Key</h2>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Go to <strong className="text-slate-900">API Keys</strong> in your dashboard sidebar. Once your account is approved by admin, click <span className="text-[#3A57FC] font-semibold">+ Create</span> to issue your live secret API key.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 font-mono text-xs text-slate-700 space-y-3">
                <div className="flex items-center justify-between text-slate-400 border-b border-slate-200 pb-2">
                  <span>Required Headers</span>
                  <span>Header Key</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-800">Public Supabase Gateway Key</span>
                  <code className="text-amber-700 font-bold">apikey</code>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-800">Secret KasaNow API Key</span>
                  <code className="text-emerald-700 font-bold">x-api-key</code>
                </div>
              </div>
            </section>

            {/* NEW: Sender ID Registration Rules */}
            <section id="sender-id-guide" className="scroll-mt-24 space-y-6 border-b border-slate-200/80 pb-12">
              <div className="space-y-2">
                <Badge className="bg-indigo-50 text-indigo-700 border-indigo-200 text-[10px] uppercase font-mono px-2 py-0.5">
                  Branding & Compliance
                </Badge>
                <h2 className="text-2xl font-bold tracking-tight text-slate-900">Sender ID Registration Guide</h2>
                <p className="text-slate-600 text-sm leading-relaxed">
                  The <code className="text-[#3A57FC] font-mono">sender</code> parameter represents the custom name displayed on recipient mobile devices (e.g., <code className="text-slate-900 font-mono">&quot;KASANOW&quot;</code> or your registered brand).
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4 text-xs">
                <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="flex items-center gap-2 font-semibold text-slate-900">
                    <Tag className="h-4 w-4 text-[#3A57FC]" /> Max 11 Characters
                  </div>
                  <p className="text-slate-600">Alphanumeric names must be 1 to 11 characters long (A-Z, a-z, 0-9). Spaces are permitted.</p>
                </div>
                <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="flex items-center gap-2 font-semibold text-slate-900">
                    <ShieldCheck className="h-4 w-4 text-emerald-600" /> Telecom & NCA Approval
                  </div>
                  <p className="text-slate-600">In Ghana, custom company Sender IDs are verified against registered business names to prevent spoofing.</p>
                </div>
              </div>

              <div className="bg-amber-50/70 border border-amber-200 rounded-xl p-4 text-xs text-amber-900 space-y-1">
                <div className="font-semibold flex items-center gap-2">
                  <HelpCircle className="h-4 w-4 text-amber-700" /> Default Testing Sender ID
                </div>
                <p className="text-amber-800">
                  During sandbox testing or before your custom Sender ID is approved, use the default pre-approved ID: <code className="font-mono font-bold bg-white px-1.5 py-0.5 rounded border border-amber-300">&quot;KASANOW&quot;</code>.
                </p>
              </div>
            </section>

            {/* NEW: Phone Number Format Helper */}
            <section id="phone-format" className="scroll-mt-24 space-y-6 border-b border-slate-200/80 pb-12">
              <div className="space-y-2">
                <Badge className="bg-[#3A57FC]/10 text-[#3A57FC] border-[#3A57FC]/20 text-[10px] uppercase font-mono px-2 py-0.5">
                  Format Helper
                </Badge>
                <h2 className="text-2xl font-bold tracking-tight text-slate-900">Phone Number Formatting</h2>
                <p className="text-slate-600 text-sm leading-relaxed">
                  KasaNow automatically formats phone numbers to international standard E.164. However, adhering to recommended formats ensures maximum delivery speed across MTN, Telecel, and AT Ghana networks.
                </p>
              </div>

              <div className="border border-slate-200 rounded-xl overflow-hidden text-xs">
                <div className="divide-y divide-slate-200">
                  <div className="p-4 flex items-center justify-between bg-slate-50/60">
                    <div>
                      <div className="font-semibold text-slate-900">International E.164 (Recommended)</div>
                      <div className="text-slate-500 font-mono text-[11px]">233XXXXXXXXX or +233XXXXXXXXX</div>
                    </div>
                    <Badge className="bg-emerald-100 text-emerald-800 border-emerald-300 font-mono">Preferred</Badge>
                  </div>
                  <div className="p-4 flex items-center justify-between bg-slate-50/20">
                    <div>
                      <div className="font-semibold text-slate-900">Local Ghana Format</div>
                      <div className="text-slate-500 font-mono text-[11px]">0241234567 / 0501234567</div>
                    </div>
                    <span className="text-slate-500 text-[11px]">Auto-converted to 233</span>
                  </div>
                  <div className="p-4 flex items-center justify-between bg-slate-50/60">
                    <div>
                      <div className="font-semibold text-slate-900">Multiple Numbers / Bulk</div>
                      <div className="text-slate-500 font-mono text-[11px]">233240000000, 233500000000</div>
                    </div>
                    <span className="text-slate-500 text-[11px]">Comma-separated string</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Quickstart Section */}
            <section id="quickstart" className="scroll-mt-24 space-y-6 border-b border-slate-200/80 pb-12">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold tracking-tight text-slate-900">Quickstart</h2>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Learn how to make your first HTTP request to send SMS using cURL or your framework of choice.
                </p>
              </div>

              {/* Framework Selector Tabs */}
              <div className="space-y-3">
                <div className="flex flex-wrap items-center gap-1.5 border-b border-slate-200 pb-2">
                  {(Object.keys(codeExamples) as Array<keyof typeof codeExamples>).map((lang) => (
                    <button
                      key={lang}
                      onClick={() => setActiveTab(lang)}
                      className={`px-3 py-1.5 rounded-md text-xs font-mono font-medium transition-all ${
                        activeTab === lang
                          ? "bg-slate-900 text-white font-bold shadow-xs"
                          : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                      }`}
                    >
                      {lang === "nodejs" ? "Node.js (Axios)" : lang === "nextjs" ? "Next.js Route" : lang.toUpperCase()}
                    </button>
                  ))}
                </div>

                {/* Code Block Container (Sleek Dark Box inside Light Page) */}
                <div className="relative bg-[#0d1117] rounded-xl border border-slate-800/90 overflow-hidden font-mono text-xs shadow-md">
                  <div className="flex items-center justify-between px-4 py-2.5 bg-[#161b22] border-b border-zinc-800/80 text-zinc-400">
                    <span className="text-[11px]">POST /functions/v1/sms-send</span>
                    <button
                      onClick={() => copyToClipboard(codeExamples[activeTab], "quickstart-code")}
                      className="flex items-center gap-1.5 text-[11px] text-zinc-400 hover:text-white transition-colors bg-zinc-800/60 hover:bg-zinc-800 px-2 py-1 rounded border border-zinc-700/50"
                    >
                      {copiedId === "quickstart-code" ? (
                        <>
                          <Check className="h-3.5 w-3.5 text-emerald-400" />
                          <span className="text-emerald-400">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="h-3.5 w-3.5" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>

                  <pre className="p-4 overflow-x-auto text-zinc-200 leading-relaxed custom-scrollbar">
                    <code>{codeExamples[activeTab]}</code>
                  </pre>
                </div>
              </div>
            </section>

            {/* NEW: Postman Collection Import / Download Section */}
            <section id="postman" className="scroll-mt-24 space-y-6 border-b border-slate-200/80 pb-12">
              <div className="space-y-2">
                <Badge className="bg-orange-50 text-orange-700 border-orange-200 text-[10px] uppercase font-mono px-2 py-0.5">
                  Sandbox & Collection
                </Badge>
                <h2 className="text-2xl font-bold tracking-tight text-slate-900">Postman Collection</h2>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Test the KasaNow SMS API in your Postman workspace without writing code. Import pre-configured requests for sending single SMS, bulk messaging, and checking delivery logs.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 space-y-4">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                      <FileCode className="h-4 w-4 text-orange-600" /> Official Postman Collection v2.1
                    </h4>
                    <p className="text-xs text-slate-500 mt-1">Includes pre-set headers for <code className="font-mono font-semibold">apikey</code> and <code className="font-mono font-semibold">x-api-key</code>.</p>
                  </div>

                  <div className="flex items-center gap-2">
                    <Button
                      onClick={downloadPostmanCollection}
                      className="bg-[#3A57FC] hover:bg-[#2F4AD8] text-white text-xs font-semibold h-9 px-4 rounded-lg shadow-sm"
                    >
                      <Download className="mr-1.5 h-3.5 w-3.5" /> Download JSON
                    </Button>
                    <Button
                      onClick={() => copyToClipboard(postmanJsonSample, "postman-json")}
                      variant="outline"
                      className="text-xs font-semibold h-9 px-3 border-slate-300"
                    >
                      {copiedId === "postman-json" ? (
                        <>
                          <Check className="mr-1 h-3.5 w-3.5 text-emerald-600" /> Copied
                        </>
                      ) : (
                        <>
                          <Copy className="mr-1 h-3.5 w-3.5" /> Copy JSON
                        </>
                      )}
                    </Button>
                  </div>
                </div>

                <div className="bg-[#0d1117] p-4 rounded-xl border border-slate-800 font-mono text-[11px] text-zinc-300 overflow-x-auto custom-scrollbar">
                  <pre><code>{postmanJsonSample}</code></pre>
                </div>
              </div>
            </section>

            {/* Authentication Deep-Dive */}
            <section id="auth" className="scroll-mt-24 space-y-6 border-b border-slate-200/80 pb-12">
              <div className="space-y-2">
                <div className="text-xs font-mono text-slate-500 uppercase tracking-wider">API Fundamentals</div>
                <h2 className="text-2xl font-bold tracking-tight text-slate-900">Authentication</h2>
                <p className="text-slate-600 text-sm leading-relaxed">
                  The KasaNow Edge API authenticates requests using two HTTP headers.
                </p>
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                  <div className="flex items-center justify-between">
                    <code className="text-amber-700 font-mono text-xs font-semibold">apikey</code>
                    <span className="text-[10px] text-slate-500 uppercase font-mono">Public Header</span>
                  </div>
                  <p className="text-xs text-slate-700">
                    The public Supabase gateway key. Required to route the request through the edge infrastructure safely.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                  <div className="flex items-center justify-between">
                    <code className="text-emerald-700 font-mono text-xs font-semibold">x-api-key</code>
                    <span className="text-[10px] text-slate-500 uppercase font-mono">Secret Header</span>
                  </div>
                  <p className="text-xs text-slate-700">
                    Your secret KasaNow reseller key generated in the dashboard. Authenticates your account and bills your credit balance.
                  </p>
                </div>
              </div>
            </section>

            {/* Error Codes */}
            <section id="errors" className="scroll-mt-24 space-y-6 border-b border-slate-200/80 pb-12">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold tracking-tight text-slate-900">Error Codes</h2>
                <p className="text-slate-600 text-sm leading-relaxed">
                  KasaNow uses standard HTTP response codes to indicate success or failure.
                </p>
              </div>

              <div className="border border-slate-200 rounded-xl overflow-hidden text-xs">
                <div className="divide-y divide-slate-200">
                  {[
                    { code: "200 OK", desc: "Message delivered or queued successfully." },
                    { code: "400 Bad Request", desc: "Missing fields (sender, to, message) or invalid phone format." },
                    { code: "401 Unauthorized", desc: "Invalid or missing x-api-key header." },
                    { code: "402 Payment Required", desc: "Insufficient wallet balance. Top up credits in dashboard." },
                    { code: "429 Rate Exceeded", desc: "Too many requests. Back off and retry." },
                  ].map((err, idx) => (
                    <div key={idx} className="p-3.5 flex items-center justify-between bg-slate-50/50">
                      <code className="font-mono text-amber-700 font-semibold">{err.code}</code>
                      <span className="text-slate-600">{err.desc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Webhooks */}
            <section id="webhooks" className="scroll-mt-24 space-y-6 border-b border-slate-200/80 pb-12">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold tracking-tight text-slate-900">Webhooks</h2>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Receive real-time notifications for delivery reports directly to your server endpoint without polling.
                </p>
              </div>

              <div className="bg-[#0d1117] p-4 rounded-xl border border-slate-800 font-mono text-xs text-zinc-300 space-y-2 shadow-md">
                <div className="text-zinc-400 border-b border-zinc-800 pb-2 flex items-center justify-between">
                  <span>Signed Event Payload</span>
                  <span className="text-emerald-400">HTTP 200 POST</span>
                </div>
                <pre>{`{
  "event": "sms.delivered",
  "message_id": "msg_8091241",
  "to": "233240000000",
  "status": "DELIVERED",
  "delivered_at": "2026-08-24T14:30:00Z",
  "units_deducted": 1
}`}</pre>
              </div>
            </section>

            {/* Send SMS Endpoint Specification */}
            <section id="send-sms" className="scroll-mt-24 space-y-6 border-b border-slate-200/80 pb-12">
              <div className="space-y-3">
                <div className="text-xs font-mono text-slate-500 uppercase tracking-wider">Endpoints</div>
                <div className="flex items-center gap-3">
                  <Badge className="bg-emerald-100 text-emerald-800 border-emerald-300 font-mono text-xs px-2.5 py-0.5">POST</Badge>
                  <code className="text-sm md:text-base font-mono text-slate-900">/functions/v1/sms-send</code>
                </div>
                <h2 className="text-2xl font-bold tracking-tight text-slate-900">Send Single SMS</h2>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Sends an SMS to one or multiple recipient phone numbers in Ghana (233XXXXXXXXX).
                </p>
              </div>

              {/* Request Parameters */}
              <div className="border border-slate-200 rounded-xl overflow-hidden text-xs">
                <div className="p-3 bg-slate-100/80 border-b border-slate-200 font-semibold text-slate-700">
                  JSON Body Parameters
                </div>
                <div className="divide-y divide-slate-200">
                  <div className="p-4 space-y-1">
                    <div className="flex items-center justify-between">
                      <code className="font-mono text-[#3A57FC] font-bold">sender</code>
                      <span className="text-[10px] text-emerald-700 font-mono uppercase font-semibold">Required</span>
                    </div>
                    <p className="text-slate-600">Approved Sender ID name (e.g. <code className="text-slate-900 font-mono">&quot;KASANOW&quot;</code>).</p>
                  </div>

                  <div className="p-4 space-y-1">
                    <div className="flex items-center justify-between">
                      <code className="font-mono text-[#3A57FC] font-bold">to</code>
                      <span className="text-[10px] text-emerald-700 font-mono uppercase font-semibold">Required</span>
                    </div>
                    <p className="text-slate-600">Recipient number(s) in format <code className="text-slate-900 font-mono">&quot;233XXXXXXXXX&quot;</code> or comma-separated list.</p>
                  </div>

                  <div className="p-4 space-y-1">
                    <div className="flex items-center justify-between">
                      <code className="font-mono text-[#3A57FC] font-bold">message</code>
                      <span className="text-[10px] text-emerald-700 font-mono uppercase font-semibold">Required</span>
                    </div>
                    <p className="text-slate-600">Text message body (e.g. <code className="text-slate-900 font-mono">&quot;Hello from Kasanow SMS reseller API&quot;</code>).</p>
                  </div>
                </div>
              </div>

              {/* Sample Response */}
              <div className="space-y-2">
                <div className="text-xs font-semibold text-slate-600">Sample Response (200 OK)</div>
                <div className="bg-[#0d1117] p-4 rounded-xl border border-slate-800 font-mono text-xs text-zinc-300 shadow-md">
                  <pre>{`{
  "status": "success",
  "message_id": "msg_90128419",
  "recipients_count": 2,
  "units_charged": 2,
  "balance_remaining": 98.0
}`}</pre>
                </div>
              </div>
            </section>

            {/* Bulk Messaging */}
            <section id="bulk" className="scroll-mt-24 space-y-6 border-b border-slate-200/80 pb-12">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Badge className="bg-emerald-100 text-emerald-800 border-emerald-300 font-mono text-xs px-2.5 py-0.5">POST</Badge>
                  <code className="text-sm md:text-base font-mono text-slate-900">/functions/v1/sms-send</code>
                </div>
                <h2 className="text-2xl font-bold tracking-tight text-slate-900">Bulk Messaging</h2>
                <p className="text-slate-600 text-sm leading-relaxed">
                  To send bulk SMS to multiple recipients at once, supply comma-separated numbers in the <code className="text-[#3A57FC] font-mono">to</code> parameter.
                </p>
              </div>

              <div className="bg-[#0d1117] p-4 rounded-xl border border-slate-800 font-mono text-xs text-zinc-300 space-y-2 shadow-md">
                <div className="text-zinc-400 border-b border-zinc-800 pb-2">Bulk JSON Request Body</div>
                <pre>{`{
  "sender": "KASANOW",
  "to": "233241112222, 233503334444, 233205556666",
  "message": "Special Announcement: KasaNow Bulk SMS is active!"
}`}</pre>
              </div>
            </section>

            {/* Delivery Reports */}
            <section id="reports" className="scroll-mt-24 space-y-6 pb-12">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Badge className="bg-blue-100 text-blue-800 border-blue-300 font-mono text-xs px-2.5 py-0.5">GET</Badge>
                  <code className="text-sm md:text-base font-mono text-slate-900">/functions/v1/sms-status?id=msg_90128419</code>
                </div>
                <h2 className="text-2xl font-bold tracking-tight text-slate-900">Delivery Reports</h2>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Retrieve logs, carrier response status, delivery timestamps, and network details for any message.
                </p>
              </div>

              <div className="bg-[#0d1117] p-4 rounded-xl border border-slate-800 font-mono text-xs text-zinc-300 space-y-2 shadow-md">
                <div className="text-zinc-400 border-b border-zinc-800 pb-2">Status Response</div>
                <pre>{`{
  "message_id": "msg_90128419",
  "status": "DELIVERED",
  "network": "MTN GHANA",
  "delivered_at": "2026-08-24T14:31:02Z"
}`}</pre>
              </div>
            </section>

          </main>

        </div>
      </div>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #94a3b8;
        }
      `}</style>
    </div>
  )
}
