"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
    TrendingUp,
    Smartphone,
    Check,
    ArrowRight,
    Users,
} from "lucide-react"
import Link from "next/link"

export default function NewHero() {
    return (
        <div className="relative w-full overflow-hidden bg-[#3A57FC] pt-20 pb-32">
            <div className="container mx-auto max-w-7xl px-4">
                <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

                    {/* Left Column: Content */}
                    <div className="relative z-10 text-white min-h-[450px] flex flex-col justify-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                        >
                            <div className="flex items-center gap-2 mb-6">
                                <div className="h-2 w-2 rounded-full bg-[#22C55E]" />
                                <span className="text-[#22C55E] text-sm font-bold tracking-widest uppercase">
                                    SMS Delivery Guaranteed
                                </span>
                            </div>

                            <h1 className="mb-6 text-5xl font-extrabold tracking-tight md:text-7xl leading-[1.1] text-shine">
                                Send SMS <br />
                                <span className="text-highlight-vibrant">instantly.</span><br />
                                No API Needed.
                            </h1>

                            <p className="mb-10 text-lg text-white/80 max-w-xl leading-relaxed">
                                The easiest way to reach your customers in Ghana. Create a campaign, upload your contacts, and send. It just works.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 mb-12">
                                <Link href="/waitlist" className="w-full sm:w-auto">
                                    <Button className="w-full bg-[#F97316] hover:bg-[#EA580C] text-white font-bold h-14 px-8 rounded-2xl text-lg shadow-xl shadow-orange-500/30 transition-all hover:scale-105 active:scale-95 border-none">
                                        Get Started Free <ArrowRight className="ml-2 h-5 w-5" />
                                    </Button>
                                </Link>
                                <Link href="#features" className="w-full sm:w-auto">
                                    <Button variant="outline" className="w-full border-white/30 bg-transparent hover:bg-white/10 text-white font-bold h-14 px-8 rounded-2xl text-lg backdrop-blur-md transition-all">
                                        See How It Works
                                    </Button>
                                </Link>
                            </div>

                            <div className="flex flex-wrap items-center gap-4 text-sm font-bold text-white/80">
                                <Badge className="bg-white/10 hover:bg-white/20 text-white border-white/20 px-4 py-1.5 backdrop-blur-sm rounded-full flex items-center gap-2">
                                    <div className="h-2 w-2 rounded-full bg-orange-400 shadow-[0_0_8px_rgba(251,146,60,0.8)]" /> 0% Complexity
                                </Badge>
                                <Badge className="bg-white/10 hover:bg-white/20 text-white border-white/20 px-4 py-1.5 backdrop-blur-sm rounded-full flex items-center gap-2">
                                    <TrendingUp className="h-3.5 w-3.5 text-green-400" /> Instant Delivery
                                </Badge>
                                <Badge className="bg-white/10 hover:bg-white/20 text-white border-white/20 px-4 py-1.5 backdrop-blur-sm rounded-full flex items-center gap-2">
                                    <Check className="h-3.5 w-3.5 text-white/90" /> MTN, Telecel, AT
                                </Badge>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column: Dashboard Preview */}
                    <div className="relative flex justify-center lg:justify-end">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
                            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                            transition={{ duration: 0.8, ease: "circOut" }}
                            className="w-full max-w-[550px] mt-12 lg:mt-0 relative"
                        >
                            <div className="relative rounded-[32px] bg-[#2F46B9] border border-white/10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] overflow-hidden">
                                    <div className="p-8 lg:p-10">
                                        <div className="space-y-8">
                                            <div>
                                                <div className="text-white/70 text-xs font-medium mb-3">Total SMS Sent Today</div>
                                                <div className="flex items-baseline gap-3">
                                                    <span className="text-5xl font-bold text-white tracking-tight">₵ 4,750.00</span>
                                                    <span className="text-white/60 text-sm font-medium">Value</span>
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-3 gap-4">
                                                {[
                                                    { label: "SMS", val: "4.2k", color: "text-white" },
                                                    { label: "SENT", val: "99.9%", color: "text-[#22C55E]" },
                                                    { label: "AVG.", val: "2s", color: "text-white" },
                                                ].map((stat, i) => (
                                                    <div key={i} className="bg-[#3E56CC] rounded-[24px] py-6 text-center shadow-md border border-transparent">
                                                        <div className={`text-3xl font-bold mb-1 ${stat.color}`}>{stat.val}</div>
                                                        <div className="text-[10px] font-bold text-white/60 uppercase tracking-widest">{stat.label}</div>
                                                    </div>
                                                ))}
                                            </div>

                                            <div className="space-y-4 pt-4">
                                                <div className="text-white/70 text-xs font-bold uppercase tracking-widest px-1">Recent Campaigns</div>
                                                {[
                                                    { name: "Promo: Sunday Service", time: "2 min ago", val: "+C 500.00" },
                                                    { name: "Flash Sale: Mobile App", time: "15 min ago", val: "+C 1,200.00" },
                                                    { name: "Alert: Account Update", time: "1 hour ago", val: "+C 350.00" },
                                                ].map((item, i) => (
                                                    <div key={i} className="flex items-center justify-between p-5 rounded-2xl bg-[#3E56CC] group transition-colors hover:bg-[#4660E0] shadow-sm border border-transparent">
                                                        <div className="flex items-center gap-4">
                                                            <div className="h-10 w-10 rounded-full bg-[#2F46B9] flex items-center justify-center text-[#22C55E]">
                                                                <Check className="h-5 w-5" />
                                                            </div>
                                                            <div>
                                                                <div className="text-white font-bold text-sm tracking-tight">{item.name}</div>
                                                                <div className="text-white/50 text-[11px]">{item.time}</div>
                                                            </div>
                                                        </div>
                                                        <div className="text-[#22C55E] font-medium text-sm">{item.val}</div>
                                                    </div>
                                                ))}
                                            </div>
                                    </div>
                                </div>
                            </div>

                                {/* Floating Badges */}
                                <FloatingBadge
                                    icon={<TrendingUp className="h-5 w-5 text-white" />}
                                    iconBg="bg-[#22C55E]"
                                    title="99.8% Success"
                                    subtitle="Reliable Delivery"
                                    className="-top-6 -right-4 lg:-right-8"
                                />
                                <FloatingBadge
                                    icon={<Smartphone className="h-5 w-5 text-white" />}
                                    iconBg="bg-[#F97316]"
                                    title="Instant Reach"
                                    subtitle="To any network"
                                    className="top-[45%] -left-6 lg:-left-12"
                                />
                                <FloatingBadge
                                    icon={<Users className="h-5 w-5 text-white" />}
                                    iconBg="bg-[#3B82F6]"
                                    title="Verified Campaign"
                                    subtitle="Sender ID #1234"
                                    className="-bottom-6 -right-2 lg:-right-6"
                                />
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function FloatingBadge({ icon, iconBg, title, subtitle, className }: any) {
    return (
        <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className={`absolute flex items-center gap-4 bg-[#445DD8] border border-white/10 px-5 py-4 rounded-[20px] shadow-[0_20px_40px_-5px_rgba(0,0,0,0.3)] z-20 ${className}`}
        >
            <div className={`h-10 w-10 rounded-full ${iconBg} flex items-center justify-center shadow-lg`}>
                {icon}
            </div>
            <div>
                <div className="text-white font-bold text-sm leading-tight mb-0.5">{title}</div>
                <div className="text-white/70 text-[10px] lowercase tracking-wide">{subtitle}</div>
            </div>
        </motion.div>
    )
}
