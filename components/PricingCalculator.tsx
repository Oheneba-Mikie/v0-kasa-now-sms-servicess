"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function PricingCalculator() {
    const [numSms, setNumSms] = useState(5000)

    const getPricePerSms = (amount: number) => {
        if (amount < 5000) return 0.024
        if (amount < 20000) return 0.022
        if (amount < 100000) return 0.018
        return 0.015
    }

    const pricePerSms = getPricePerSms(numSms)
    const totalCost = numSms * pricePerSms

    return (
        <div className="bg-gray-50 rounded-[48px] p-8 md:p-16 border border-gray-100 flex flex-col lg:flex-row gap-16 items-center shadow-xl">
            <div className="lg:w-1/2 w-full space-y-8">
                <h2 className="text-3xl font-extrabold text-[#1E3A8A]">Volume Calculator</h2>
                <p className="text-gray-600">Slide to see how much you can save with our volume-based discounts.</p>

                <div className="space-y-6">
                    <input
                        type="range"
                        min="1000"
                        max="200000"
                        step="1000"
                        value={numSms}
                        onChange={(e) => setNumSms(parseInt(e.target.value))}
                        className="w-full h-3 bg-blue-100 rounded-lg appearance-none cursor-pointer accent-blue-600"
                    />
                    <div className="flex justify-between text-sm font-bold text-gray-400 uppercase tracking-widest">
                        <span>1,000 SMS</span>
                        <span>200,000+ SMS</span>
                    </div>
                </div>

                <div className="p-8 bg-white rounded-3xl border border-gray-100 shadow-sm space-y-4">
                    <div className="flex justify-between items-center text-gray-500 font-bold text-sm uppercase">
                        <span>SMS Volume</span>
                        <span className="text-[#1E3A8A]">{numSms.toLocaleString()} SMS</span>
                    </div>
                    <div className="flex justify-between items-center text-gray-500 font-bold text-sm uppercase">
                        <span>Price Per SMS</span>
                        <span className="text-blue-600">₵ {pricePerSms.toFixed(3)}</span>
                    </div>
                </div>
            </div>

            <div className="lg:w-1/2 w-full bg-blue-gradient p-12 rounded-[40px] text-white text-center shadow-2xl space-y-4">
                <div className="text-white/60 font-black uppercase text-xs tracking-[0.3em]">Estimated Total</div>
                <div className="text-6xl font-black mb-2 tracking-tighter">₵ {totalCost.toLocaleString(undefined, { minimumFractionDigits: 2 })}</div>
                <p className="text-white/60 text-sm mb-8 font-bold">One-time payment. Valid for 1 year.</p>
                <Button className="w-full h-16 bg-white text-blue-700 hover:bg-white/90 font-black rounded-2xl text-xl shadow-xl shadow-blue-500/20">Buy Credits Now</Button>
            </div>
        </div>
    )
}
