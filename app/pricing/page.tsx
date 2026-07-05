import { Metadata } from 'next'
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, Info, ShieldCheck, Globe, Zap, ArrowRight } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
    title: "Pricing - KasaNow SMS",
    description: "Simple, transparent pricing for KasaNow's SMS platform. No hidden fees, no monthly charges.",
    keywords: "Bulk SMS price Ghana, SMS rates Accra, KasaNow pricing",
}

export default function PricingPage() {
    return (
        <div className="min-h-screen bg-[#F8FAFC] flex flex-col relative overflow-hidden">

            {/* Aurora Background Effect */}
            <div className="absolute top-0 left-0 right-0 h-[600px] bg-gradient-to-b from-blue-50 to-transparent z-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-[#3A57FC]/10 blur-[120px]"></div>
                <div className="absolute -top-[10%] right-[0%] w-[40%] h-[40%] rounded-full bg-[#FF8800]/10 blur-[120px]"></div>
            </div>

            {/* Hero */}
            <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 text-center z-10">
                <div className="container mx-auto max-w-4xl px-4">
                    <Badge className="mb-6 bg-[#3A57FC]/10 text-[#3A57FC] hover:bg-[#3A57FC]/20 border-none px-4 py-1.5 text-sm font-semibold tracking-wide">
                        Transparent Pricing
                    </Badge>
                    <h1 className="text-5xl font-semibold md:text-7xl tracking-tight mb-8 text-gray-900">
                        Pay for what you send.<br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3A57FC] to-[#0EA5E9]">Nothing else.</span>
                    </h1>
                    <p className="text-slate-600 text-xl max-w-2xl mx-auto leading-relaxed">
                        No monthly fees. No hidden charges. No complex volume calculators. Just simple, scalable pricing designed to grow with your business.
                    </p>
                </div>
            </section>

            {/* Pricing Cards */}
            <section className="relative pb-24 z-10">
                <div className="container mx-auto max-w-6xl px-4">
                    <div className="grid gap-8 md:grid-cols-3 items-center">
                        {/* Starter */}
                        <div className="bg-white rounded-[32px] p-8 md:p-10 border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl transition-all duration-300">
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">Starter</h3>
                            <p className="text-slate-500 text-sm mb-6">For individuals & small teams exploring SMS.</p>
                            <div className="mb-8">
                                <span className="text-5xl font-bold text-gray-900">₵0.024</span>
                                <span className="text-slate-500 font-medium ml-2">/ SMS</span>
                            </div>
                            <ul className="space-y-4 mb-10">
                                {["Pay As You Go", "Up to 5,000 SMS / month", "Full Web Platform Access", "Standard Support", "No API Access"].map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-slate-700 font-medium">
                                        <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <Check className="h-3 w-3 text-green-600 stroke-[3]" />
                                        </div>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <Link href="/sign-up">
                                <Button className="w-full h-14 rounded-xl font-bold text-[15px] bg-slate-100 hover:bg-slate-200 text-slate-900">
                                    Get Started
                                </Button>
                            </Link>
                        </div>

                        {/* Business (Popular) */}
                        <div className="bg-white rounded-[32px] p-8 md:p-10 border-2 border-[#3A57FC] shadow-2xl shadow-[#3A57FC]/20 md:scale-105 relative">
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#FF8800] to-[#F97316] text-white text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full shadow-md">
                                Most Popular
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">Business</h3>
                            <p className="text-slate-500 text-sm mb-6">For growing companies requiring API access.</p>
                            <div className="mb-8">
                                <span className="text-5xl font-bold text-gray-900">₵0.018</span>
                                <span className="text-slate-500 font-medium ml-2">/ SMS</span>
                            </div>
                            <ul className="space-y-4 mb-10">
                                {["Unlimited Volume", "Full Developer API Access", "Priority Customer Support", "Custom Sender ID Registration", "Advanced Analytics Dashboard"].map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-slate-700 font-medium">
                                        <div className="w-5 h-5 rounded-full bg-[#3A57FC]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <Check className="h-3 w-3 text-[#3A57FC] stroke-[3]" />
                                        </div>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <Link href="/sign-up">
                                <Button className="w-full h-14 rounded-xl font-bold text-[15px] bg-[#3A57FC] hover:bg-[#2546e5] text-white shadow-[0_8px_20px_-8px_rgba(58,87,252,0.6)] hover:shadow-[0_8px_25px_-8px_rgba(58,87,252,0.8)] transition-all">
                                    Start Sending Now
                                </Button>
                            </Link>
                        </div>

                        {/* Enterprise */}
                        <div className="bg-white rounded-[32px] p-8 md:p-10 border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl transition-all duration-300">
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">Enterprise</h3>
                            <p className="text-slate-500 text-sm mb-6">For high-volume, mission-critical needs.</p>
                            <div className="mb-8">
                                <span className="text-5xl font-bold text-gray-900">Custom</span>
                                <span className="text-slate-500 font-medium ml-2">Scale</span>
                            </div>
                            <ul className="space-y-4 mb-10">
                                {["Volume-based Discounts", "Dedicated IP Addresses", "Multi-User Account Handles", "24/7 Technical Phone Support", "Custom Billing Agreements"].map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-slate-700 font-medium">
                                        <div className="w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <Check className="h-3 w-3 text-orange-600 stroke-[3]" />
                                        </div>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <Link href="/waitlist">
                                <Button className="w-full h-14 rounded-xl font-bold text-[15px] bg-slate-900 hover:bg-slate-800 text-white">
                                    Contact Sales
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Value Props / Info */}
            <section className="bg-white py-24 border-t border-slate-100">
                <div className="container mx-auto max-w-6xl px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Everything you need, included.</h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">No matter which tier you fall into, KasaNow delivers premium infrastructure as standard.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                         <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
                            <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-6">
                                <Globe className="w-6 h-6" />
                            </div>
                            <h4 className="text-lg font-bold text-gray-900 mb-3">Global Coverage</h4>
                            <p className="text-slate-600 leading-relaxed">Reach customers seamlessly across hundreds of local and international carrier networks instantly.</p>
                         </div>
                         <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
                            <div className="w-12 h-12 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center mb-6">
                                <Zap className="w-6 h-6" />
                            </div>
                            <h4 className="text-lg font-bold text-gray-900 mb-3">Lightning Fast</h4>
                            <p className="text-slate-600 leading-relaxed">Direct tier-1 routes ensure your time-sensitive OTPs and critical alerts are delivered in absolute milliseconds.</p>
                         </div>
                         <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
                            <div className="w-12 h-12 rounded-xl bg-green-100 text-green-600 flex items-center justify-center mb-6">
                                <ShieldCheck className="w-6 h-6" />
                            </div>
                            <h4 className="text-lg font-bold text-gray-900 mb-3">Enterprise Security</h4>
                            <p className="text-slate-600 leading-relaxed">Bank-grade encryption, rigorous data protection, and full compliance with regional privacy laws.</p>
                         </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-24 bg-slate-900 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[#3A57FC]/20 to-transparent"></div>
                <div className="container mx-auto max-w-4xl px-4 text-center relative z-10">
                    <h2 className="text-4xl font-bold text-white mb-6">Ready to upgrade your messaging?</h2>
                    <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">Join over 2,000 businesses already using KasaNow to communicate with their audience securely and reliably.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/sign-up">
                            <Button className="bg-[#F97316] hover:bg-[#EA580C] text-white font-bold h-14 px-10 rounded-xl shadow-[0_8px_20px_-8px_rgba(249,115,22,0.6)] text-lg w-full sm:w-auto">
                                Get Started Free
                            </Button>
                        </Link>
                        <Link href="/waitlist">
                            <Button variant="outline" className="border-slate-700 bg-slate-800/50 hover:bg-slate-800 text-white font-bold h-14 px-10 rounded-xl w-full sm:w-auto text-lg">
                                Contact Sales
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}
