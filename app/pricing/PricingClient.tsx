"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, Info, ShieldCheck, Globe, Zap, ArrowRight, Minus, Plus, Sparkles, AlertCircle } from "lucide-react"
import Link from "next/link"

const TIERS = [
  {
    id: 1,
    name: "Tier 1 (Starter Pro)",
    basePrice: 100,
    includedSenderIds: 1,
    description: "Ideal for startups and growing local businesses.",
    features: [
      "1 Sender ID included",
      "Additional Sender IDs at ₵50/each",
      "Instant PRO Account status",
      "Full Developer API & Web Platform Access",
      "Standard Delivery Rates & Route Optimization",
      "Email & Chat Support",
    ]
  },
  {
    id: 2,
    name: "Tier 2 (Growth Pro)",
    basePrice: 500,
    includedSenderIds: 3,
    description: "Perfect for established teams needing multiple brands.",
    features: [
      "3 Sender IDs included",
      "Additional Sender IDs at ₵50/each",
      "Instant PRO Account status",
      "Full Developer API & Web Platform Access",
      "Priority Queue Routing (Faster Delivery)",
      "Dedicated WhatsApp & Chat Support",
    ]
  },
  {
    id: 3,
    name: "Tier 3 (Enterprise Pro)",
    basePrice: 1000,
    includedSenderIds: 6,
    description: "Designed for high-volume enterprise communications.",
    features: [
      "6 Sender IDs included",
      "Additional Sender IDs at ₵50/each",
      "Instant PRO Account status",
      "Full Developer API & Web Platform Access",
      "Dedicated Queue & Highest Routing Priority",
      "24/7 Phone & Technical Account Support",
    ]
  }
]

export default function PricingClient() {
  // Track custom sender IDs for each tier
  const [tierSenderIds, setTierSenderIds] = useState<Record<number, number>>({
    1: 1,
    2: 3,
    3: 6
  })

  // SMS top-up calculator state
  const [smsCount, setSmsCount] = useState<number>(5000)

  const updateSenderIds = (tierId: number, delta: number) => {
    const tier = TIERS.find(t => t.id === tierId)!
    setTierSenderIds(prev => {
      const current = prev[tierId]
      const nextVal = Math.max(tier.includedSenderIds, current + delta)
      return { ...prev, [tierId]: nextVal }
    })
  }

  const getTierPrice = (tierId: number) => {
    const tier = TIERS.find(t => t.id === tierId)!
    const currentIds = tierSenderIds[tierId]
    const extraIds = Math.max(0, currentIds - tier.includedSenderIds)
    return tier.basePrice + extraIds * 50
  }

  const getTopupPrice = (count: number) => {
    return (count / 1000) * 100
  }

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
            Flexible SMS Tiers
          </Badge>
          <h1 className="text-5xl font-semibold md:text-7xl tracking-tight mb-8 text-gray-900 leading-tight">
            Simple, Transparent Tiers.<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3A57FC] to-[#0EA5E9]">Unlock PRO Status Instantly.</span>
          </h1>
          <p className="text-slate-600 text-xl max-w-2xl mx-auto leading-relaxed">
            Choose a tier to register your custom Sender IDs. Any tier selection immediately upgrades your account to <span className="font-bold text-[#3A57FC]">PRO</span> status.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="relative pb-16 z-10">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid gap-8 lg:grid-cols-3 items-stretch">
            {TIERS.map((tier) => {
              const currentIds = tierSenderIds[tier.id]
              const extraIds = currentIds - tier.includedSenderIds
              const totalPrice = getTierPrice(tier.id)
              const isPopular = tier.id === 2

              return (
                <div 
                  key={tier.id}
                  className={`bg-white rounded-[32px] p-8 md:p-10 border flex flex-col justify-between transition-all duration-300 relative ${
                    isPopular 
                      ? 'border-2 border-[#3A57FC] shadow-2xl shadow-[#3A57FC]/15 lg:scale-105 z-20' 
                      : 'border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:scale-[1.01]'
                  }`}
                >
                  {isPopular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#FF8800] to-[#F97316] text-white text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full shadow-md flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" /> Most Popular
                    </div>
                  )}

                  <div>
                    {/* Header */}
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{tier.name}</h3>
                        <p className="text-slate-500 text-sm mt-1">{tier.description}</p>
                      </div>
                      <Badge className="bg-emerald-50 text-emerald-700 border-emerald-100 font-semibold px-2.5 py-0.5 rounded-md">
                        PRO Included
                      </Badge>
                    </div>

                    {/* Pricing Display */}
                    <div className="mb-6 pb-6 border-b border-slate-100">
                      <div className="flex items-baseline">
                        <span className="text-5xl font-extrabold text-gray-900">₵{totalPrice.toFixed(2)}</span>
                        <span className="text-slate-500 font-medium ml-2">/ tier rate</span>
                      </div>
                      {extraIds > 0 && (
                        <p className="text-xs text-slate-500 mt-2 font-medium">
                          ₵{tier.basePrice} base rate + ₵{extraIds * 50} for {extraIds} extra Sender {extraIds === 1 ? 'ID' : 'IDs'}
                        </p>
                      )}
                    </div>

                    {/* Sender ID Customizer */}
                    <div className="mb-8 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-sm font-semibold text-slate-700 flex items-center gap-1.5">
                          Sender IDs
                          <span className="text-xs font-normal text-slate-500">({tier.includedSenderIds} incl.)</span>
                        </span>
                        <span className="text-sm font-bold text-[#3A57FC]">{currentIds} selected</span>
                      </div>

                      <div className="flex items-center justify-between gap-4">
                        <Button 
                          onClick={() => updateSenderIds(tier.id, -1)}
                          disabled={currentIds <= tier.includedSenderIds}
                          variant="outline"
                          size="icon"
                          className="h-9 w-9 rounded-lg border-slate-200 bg-white hover:bg-slate-100 disabled:opacity-50"
                        >
                          <Minus className="h-4 w-4 text-slate-600" />
                        </Button>
                        
                        <div className="flex-1 text-center font-medium text-xs text-slate-600">
                          {extraIds > 0 ? `+${extraIds} Extra (₵50.00/ea)` : 'Base Quantity'}
                        </div>

                        <Button 
                          onClick={() => updateSenderIds(tier.id, 1)}
                          variant="outline"
                          size="icon"
                          className="h-9 w-9 rounded-lg border-slate-200 bg-white hover:bg-slate-100"
                        >
                          <Plus className="h-4 w-4 text-slate-600" />
                        </Button>
                      </div>
                    </div>

                    {/* Features List */}
                    <ul className="space-y-4 mb-8">
                      {tier.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-slate-700 text-sm font-medium">
                          <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                            isPopular ? 'bg-[#3A57FC]/10 text-[#3A57FC]' : 'bg-emerald-50 text-emerald-600'
                          }`}>
                            <Check className="h-3.5 w-3.5 stroke-[3]" />
                          </div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link href={`/sign-up?tier=${tier.id}&senders=${currentIds}`} className="w-full block">
                    <Button 
                      className={`w-full h-12 rounded-xl font-bold text-sm cursor-pointer transition-all duration-300 transform hover:scale-[1.03] active:scale-[0.97] ${
                        isPopular
                          ? 'bg-[#3A57FC] hover:bg-[#2546e5] text-white shadow-[0_8px_20px_-8px_rgba(58,87,252,0.6)] hover:shadow-[0_12px_25px_-8px_rgba(58,87,252,0.8)]'
                          : 'bg-slate-900 hover:bg-slate-800 text-white hover:shadow-lg'
                      }`}
                    >
                      Choose {tier.name.split(" ")[1]}
                    </Button>
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Interactive SMS Top-up Calculator */}
      <section className="relative py-20 z-10 bg-white border-t border-b border-slate-100">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-orange-100 text-orange-700 hover:bg-orange-200 border-none px-4 py-1.5 text-xs font-semibold">
              Flexible Credits
            </Badge>
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Pay-As-You-Go SMS Credits</h2>
            <p className="text-slate-600 max-w-2xl mx-auto font-medium">
              Top up your account with SMS messages whenever you need. Keep sending messages with simple, linear rates.
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-100 rounded-[32px] p-8 md:p-10 shadow-lg shadow-slate-100/55 max-w-2xl mx-auto">
            {/* SMS credits selection and output */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
              <div className="text-center md:text-left">
                <span className="text-sm font-semibold text-slate-500 uppercase tracking-wider block mb-1">
                  Total SMS Credits
                </span>
                <span className="text-4xl font-extrabold text-slate-900">
                  {smsCount.toLocaleString()} SMS
                </span>
              </div>

              <div className="h-px w-12 bg-slate-200 md:hidden"></div>

              <div className="text-center md:text-right">
                <span className="text-sm font-semibold text-slate-500 uppercase tracking-wider block mb-1">
                  Est. Total Cost
                </span>
                <span className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-[#FF8800]">
                  ₵{getTopupPrice(smsCount).toFixed(2)}
                </span>
              </div>
            </div>

            {/* Range Slider */}
            <div className="space-y-4 mb-8">
              <input 
                type="range" 
                min={1000} 
                max={50000} 
                step={1000} 
                value={smsCount} 
                onChange={(e) => setSmsCount(parseInt(e.target.value))}
                className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <div className="flex justify-between text-xs font-semibold text-slate-400 px-1">
                <span>1,000 SMS (₵100.00)</span>
                <span>25,000 SMS</span>
                <span>50,000 SMS (₵5,000.00)</span>
              </div>
            </div>

            {/* Quick selectors */}
            <div className="flex flex-wrap gap-3 justify-center mb-8">
              {[1000, 5000, 10000, 20000, 50000].map((val) => (
                <button
                  key={val}
                  onClick={() => setSmsCount(val)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 border ${
                    smsCount === val
                      ? 'bg-orange-500 border-orange-500 text-white shadow-md shadow-orange-500/20'
                      : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300'
                  }`}
                >
                  {val.toLocaleString()} SMS
                </button>
              ))}
            </div>

            {/* Warning Message about Validity */}
            <div className="flex gap-3.5 items-start p-4 rounded-2xl bg-amber-50/50 border border-amber-100 text-amber-800 text-sm leading-relaxed mb-8">
              <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-bold">Important Notice:</span> SMS credits expire after <span className="font-semibold underline">1 month (30 days)</span> from the date of purchase. Make sure to purchase credits that align with your monthly sending volume.
              </div>
            </div>

            <Link href={`/sign-up?topup=${smsCount}`} className="block">
              <Button className="w-full h-14 rounded-2xl bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white font-bold text-[15px] shadow-lg shadow-orange-500/25 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] cursor-pointer hover:shadow-xl">
                Purchase SMS Credits <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Value Props / Info */}
      <section className="bg-slate-50 py-24">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why KasaNow PRO?</h2>
            <p className="text-slate-600 max-w-2xl mx-auto font-medium">No matter which tier you fall into, KasaNow delivers premium infrastructure as standard.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm shadow-slate-100">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-6">
                <Globe className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-3">Global Coverage</h4>
              <p className="text-slate-600 leading-relaxed text-sm font-medium">Reach customers seamlessly across hundreds of local and international carrier networks instantly.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm shadow-slate-100">
              <div className="w-12 h-12 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center mb-6">
                <Zap className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-3">Lightning Fast</h4>
              <p className="text-slate-600 leading-relaxed text-sm font-medium">Direct tier-1 routes ensure your time-sensitive OTPs and critical alerts are delivered in absolute milliseconds.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm shadow-slate-100">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-6">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-3">Enterprise Security</h4>
              <p className="text-slate-600 leading-relaxed text-sm font-medium">Bank-grade encryption, rigorous data protection, and full compliance with regional privacy laws.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#3A57FC]/20 to-transparent"></div>
        <div className="container mx-auto max-w-4xl px-4 text-center relative z-10">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to upgrade your messaging?</h2>
          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto font-medium">Join over 2,000 businesses already using KasaNow to communicate with their audience securely and reliably.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/sign-up" className="w-full sm:w-auto">
              <Button className="bg-[#F97316] hover:bg-[#EA580C] text-white font-bold h-14 px-10 rounded-xl shadow-[0_8px_20px_-8px_rgba(249,115,22,0.6)] text-lg w-full transition-all duration-300 transform hover:scale-[1.03] active:scale-[0.97] cursor-pointer hover:shadow-xl">
                Get Started Free
              </Button>
            </Link>
            <Link href="/waitlist" className="w-full sm:w-auto">
              <Button variant="outline" className="border-slate-700 bg-slate-800/50 hover:bg-slate-800 text-white font-bold h-14 px-10 rounded-xl w-full text-lg transition-all duration-300 transform hover:scale-[1.03] active:scale-[0.97] cursor-pointer hover:bg-slate-800/70">
                Contact Sales
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
