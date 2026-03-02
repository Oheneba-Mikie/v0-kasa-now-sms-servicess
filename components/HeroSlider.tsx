"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
    TrendingUp,
    Smartphone,
    Users,
    Check,
    ArrowRight,
    Code2,
    ShieldCheck,
    Zap,
    BarChart3
} from "lucide-react"
import Link from "next/link"

const slides = [
    {
        badge: "SMS Delivery Guaranteed",
        title: "Send SMS",
        highlight: "Instantly,",
        titleSuffix: "No API Needed",
        subtext: "Reliable bulk SMS delivery to MTN, Telecel & AirtelTigo. Reach thousands of customers in seconds with our premium network routing—directly from your browser.",
        primaryCTA: "Join Waitlist",
        secondaryCTA: "See How It Works",
        dashboard: "main"
    },
    {
        badge: "Developer Friendly",
        title: "Powerful SMS",
        highlight: "API",
        titleSuffix: "for Developers",
        subtext: "Integrate SMS in minutes using our robust REST API. Complete with SDKs for Node.js, PHP, and Python. Built for scale.",
        primaryCTA: "View API Docs",
        secondaryCTA: "Try Sandbox",
        dashboard: "api"
    },
    {
        badge: "Marketing Powerhouse",
        title: "Boost Your",
        highlight: "Campaigns",
        titleSuffix: "with Ease",
        subtext: "Reach thousands instantly with automated bulk messaging. Segment your audience and track real-time engagement and ROI.",
        primaryCTA: "Join Waitlist",
        secondaryCTA: "Case Studies",
        dashboard: "marketing"
    },
    {
        badge: "Security First",
        title: "Fast OTP &",
        highlight: "Alerts",
        titleSuffix: "That Deliver",
        subtext: "Secure and ultra-fast delivery for mission-critical alerts. 2FA, password resets, and transaction notifications delivered globally.",
        primaryCTA: "Join Waitlist",
        secondaryCTA: "Pricing",
        dashboard: "security"
    }
]

export default function HeroSlider() {
    const [currentSlide, setCurrentSlide] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length)
        }, 5000)
        return () => clearInterval(timer)
    }, [])

    return (
        <div className="relative w-full overflow-hidden bg-blue-gradient pt-20 pb-32">
            <div className="container mx-auto max-w-7xl px-4">
                <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

                    {/* Left Column: Content */}
                    <div className="relative z-10 text-white min-h-[450px] flex flex-col justify-center">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentSlide}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                            >
                                <Badge className="mb-6 bg-white/10 text-white border-white/20 px-4 py-1 text-sm font-medium backdrop-blur-sm">
                                    {slides[currentSlide].badge}
                                </Badge>

                                <h1 className="mb-6 text-5xl font-extrabold tracking-tight md:text-7xl leading-[1.1] text-shine">
                                    {slides[currentSlide].title}{" "}
                                    <span className="text-highlight-vibrant italic px-1">
                                        {slides[currentSlide].highlight}
                                    </span>
                                    <br className="hidden md:block" />
                                    {slides[currentSlide].titleSuffix}
                                </h1>

                                <p className="mb-10 text-lg text-white/80 max-w-xl leading-relaxed">
                                    {slides[currentSlide].subtext}
                                </p>

                                <div className="flex flex-col sm:flex-row gap-4">
                                    <Link href="/waitlist" className="w-full sm:w-auto">
                                        <Button className="w-full bg-emerald-gradient hover:opacity-90 text-white font-bold h-14 px-8 rounded-2xl text-lg shadow-xl shadow-emerald-500/30 transition-all hover:scale-105 active:scale-95 border-none">
                                            {slides[currentSlide].primaryCTA} <ArrowRight className="ml-2 h-5 w-5" />
                                        </Button>
                                    </Link>
                                    <Button variant="outline" className="border-white/30 bg-white/10 hover:bg-white/20 text-white font-bold h-14 px-8 rounded-2xl text-lg backdrop-blur-md transition-all sm:w-auto">
                                        {slides[currentSlide].secondaryCTA}
                                    </Button>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Right Column: Dashboard Preview */}
                    <div className="relative flex justify-center lg:justify-end">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentSlide}
                                initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
                                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                                exit={{ opacity: 0, scale: 0.9, rotateY: -15 }}
                                transition={{ duration: 0.8, ease: "circOut" }}
                                className="w-full max-w-[550px]"
                            >
                                {/* Main Dashboard Preview */}
                                <div className="relative glass-morphism rounded-[32px] p-2">
                                    <div className="rounded-[28px] bg-[#0F172A]/90 overflow-hidden shadow-inner border border-white/10">
                                        {/* Header */}
                                        <div className="border-b border-white/5 bg-white/5 px-8 py-6 flex items-center justify-between">
                                            <div className="flex items-center gap-4">
                                                <div className="flex gap-1.5">
                                                    <div className="h-2.5 w-2.5 rounded-full bg-red-500/50" />
                                                    <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/50" />
                                                    <div className="h-2.5 w-2.5 rounded-full bg-green-500/50" />
                                                </div>
                                                <span className="text-xs font-bold text-white/70 uppercase tracking-[0.2em] ml-2">Analytics Pro</span>
                                            </div>
                                            <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse shadow-[0_0_10px_rgba(74,222,128,0.5)]" />
                                        </div>

                                        {/* Dashboard Content - Dynamic based on slide */}
                                        <div className="p-8">
                                            {currentSlide === 0 && <MainDashboard />}
                                            {currentSlide === 1 && <APIDashboard />}
                                            {currentSlide === 2 && <MarketingDashboard />}
                                            {currentSlide === 3 && <SecurityDashboard />}
                                        </div>
                                    </div>

                                    {/* Floating Badges */}
                                    <FloatingBadge
                                        icon={<TrendingUp className="h-6 w-6 text-[#22C55E]" />}
                                        title="99.8% Success"
                                        subtitle="Reliable Delivery"
                                        className="-top-10 -right-8"
                                    />
                                    <FloatingBadge
                                        icon={<Smartphone className="h-6 w-6 text-[#F97316]" />}
                                        title="Instant Reach"
                                        subtitle="To any network"
                                        className="top-1/2 -left-12 -translate-y-1/2"
                                    />
                                    <FloatingBadge
                                        icon={<ShieldCheck className="h-6 w-6 text-blue-400" />}
                                        title="Verified Sender"
                                        subtitle="ID #8821"
                                        className="-bottom-8 -right-4"
                                    />
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>

            {/* Slide Indicators */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-20">
                {slides.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrentSlide(i)}
                        className={`h-1.5 rounded-full transition-all duration-300 ${currentSlide === i ? "w-10 bg-[#F97316]" : "w-2 bg-white/30"
                            }`}
                    />
                ))}
            </div>
        </div>
    )
}

function FloatingBadge({ icon, title, subtitle, className }: any) {
    return (
        <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className={`absolute hidden md:flex items-center gap-4 bg-white/10 backdrop-blur-2xl border border-white/20 p-5 rounded-[24px] shadow-2xl z-20 ${className}`}
        >
            <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center">
                {icon}
            </div>
            <div>
                <div className="text-white font-bold text-base leading-none mb-1">{title}</div>
                <div className="text-white/40 text-[10px] font-bold uppercase tracking-wider">{subtitle}</div>
            </div>
        </motion.div>
    )
}

function MainDashboard() {
    return (
        <div className="space-y-8">
            <div>
                <div className="text-white/40 text-[10px] font-bold uppercase tracking-[0.2em] mb-4">Total SMS Sent Today</div>
                <div className="flex items-baseline gap-3">
                    <span className="text-5xl font-mono font-bold text-white tracking-tighter">₵ 4,750.00</span>
                    <span className="text-white/30 text-lg">Value</span>
                </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
                {[
                    { label: "SMS", val: "4.2k", color: "text-white" },
                    { label: "SENT", val: "99.9%", color: "text-[#22C55E]" },
                    { label: "AVG.", val: "2s", color: "text-white" },
                ].map((stat, i) => (
                    <div key={i} className="bg-white/5 border border-white/10 rounded-2xl py-4 text-center">
                        <div className={`text-xl font-bold mb-1 ${stat.color}`}>{stat.val}</div>
                        <div className="text-[9px] font-bold text-white/30 uppercase tracking-widest">{stat.label}</div>
                    </div>
                ))}
            </div>

            <div className="space-y-4">
                {[
                    { name: "Promo: Sunday Service", time: "2 min ago", val: "+₵ 500.00" },
                    { name: "Flash Sale: App", time: "15 min ago", val: "+₵ 1,200.00" },
                ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/5 group">
                        <div className="flex items-center gap-4">
                            <div className="h-10 w-10 rounded-full bg-green-500/10 flex items-center justify-center text-green-400">
                                <Check className="h-5 w-5" />
                            </div>
                            <div>
                                <div className="text-white font-bold text-sm tracking-tight">{item.name}</div>
                                <div className="text-white/30 text-[10px]">{item.time}</div>
                            </div>
                        </div>
                        <div className="text-[#22C55E] font-mono font-bold text-sm">{item.val}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

function APIDashboard() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between mb-2">
                <div className="text-white/70 text-[10px] font-bold uppercase tracking-[0.2em]">API Endpoint Status</div>
                <div className="text-[#22C55E] text-[10px] font-bold">200 OK</div>
            </div>

            <div className="bg-white/5 rounded-2xl p-5 border border-white/10 font-mono text-sm overflow-hidden">
                <div className="flex gap-2 text-blue-300 font-bold mb-2">
                    <span>POST</span>
                    <span className="text-white/90">/v1/sms/send</span>
                </div>
                <div className="text-white/80 space-y-1 text-xs">
                    <div>{"{"}</div>
                    <div className="pl-4">"to": "+233241234567",</div>
                    <div className="pl-4">"message": "Hello from KasaNow!",</div>
                    <div className="pl-4">"sender_id": "KASANOW"</div>
                    <div>{"}"}</div>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                    <div className="text-white/40 text-[9px] font-bold uppercase mb-2">Requests / min</div>
                    <div className="text-2xl font-bold text-white">1,240</div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                    <div className="text-white/40 text-[9px] font-bold uppercase mb-2">Avg Latency</div>
                    <div className="text-2xl font-bold text-[#3B82F6]">45ms</div>
                </div>
            </div>
        </div>
    )
}

function MarketingDashboard() {
    return (
        <div className="space-y-6">
            <div className="text-white/40 text-[10px] font-bold uppercase tracking-[0.2em]">Campaign ROI Analytics</div>

            <div className="h-32 w-full flex items-end justify-between gap-1 px-2">
                {[40, 70, 45, 90, 65, 80, 55, 100, 75].map((h, i) => (
                    <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        animate={{ height: `${h}%` }}
                        transition={{ delay: i * 0.1, duration: 0.5 }}
                        className={`w-full rounded-t-lg ${i === 7 ? "bg-[#F97316]" : "bg-blue-500/30"}`}
                    />
                ))}
            </div>

            <div className="space-y-3">
                {[
                    { label: "Click Rate", val: "24.5%", color: "text-[#22C55E]" },
                    { label: "Conversion", val: "12.2%", color: "text-white" },
                ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between p-4 rounded-xl border border-white/5 bg-white/5">
                        <span className="text-white/60 text-xs font-bold">{item.label}</span>
                        <span className={`font-bold ${item.color}`}>{item.val}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

function SecurityDashboard() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-center py-4">
                <div className="relative">
                    <div className="h-24 w-24 rounded-full border-4 border-blue-500/20 flex items-center justify-center">
                        <ShieldCheck className="h-10 w-10 text-blue-400" />
                    </div>
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 border-4 border-t-blue-400 border-r-transparent border-b-transparent border-l-transparent rounded-full"
                    />
                </div>
            </div>

            <div className="bg-white/5 rounded-2xl p-5 border border-white/10">
                <div className="flex items-center gap-4 mb-4">
                    <div className="h-2 w-2 rounded-full bg-green-400" />
                    <span className="text-white font-bold text-sm tracking-tight">OTP Generation Active</span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <div className="text-white/40 text-[9px] font-bold uppercase mb-1">Verify Rate</div>
                        <div className="text-xl font-bold text-white">98.4%</div>
                    </div>
                    <div>
                        <div className="text-white/40 text-[9px] font-bold uppercase mb-1">Blocked Hits</div>
                        <div className="text-xl font-bold text-red-400">0</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
