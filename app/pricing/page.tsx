import { Metadata } from 'next'
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, Info, Zap, ShieldCheck, Globe, Star, TrendingUp, ChevronRight } from "lucide-react"
import Link from "next/link"
import PricingCalculator from "@/components/PricingCalculator"

export const metadata: Metadata = {
    title: "Bulk SMS Pricing Ghana - KasaNow SMS Credit Rates",
    description: "View KasaNow's affordable volume-based SMS rates for Ghana. Use our calculator to estimate your costs. No hidden fees, no monthly charges.",
    keywords: "Bulk SMS price Ghana, SMS rates Accra, KasaNow pricing",
}

export default function PricingPage() {
    return (
        <div className="flex flex-col bg-white">
            {/* Hero */}
            <section className="bg-blue-gradient py-24 md:py-32 text-white text-center">
                <div className="container mx-auto max-w-7xl px-4">
                    <Badge className="mb-6 bg-white/10 text-white border-white/20 px-4 py-1.5 text-xs font-bold uppercase tracking-wider">Transparent Pricing</Badge>
                    <h1 className="text-5xl font-extrabold md:text-7xl tracking-tighter mb-8 italic">Simple. Scalable. Transparent.</h1>
                    <p className="text-white/70 text-xl max-w-2xl mx-auto leading-relaxed">No monthly fees. No hidden charges. Only pay for the messages you actually send to your customers.</p>
                </div>
            </section>

            {/* Pricing Calculator (Client Component) */}
            <section className="py-24 md:py-32">
                <div className="container mx-auto max-w-5xl px-4">
                    <PricingCalculator />
                </div>
            </section>

            {/* Main Tiers */}
            <section className="bg-gray-50 py-24 md:py-32">
                <div className="container mx-auto max-w-7xl px-4">
                    <div className="grid gap-8 md:grid-cols-3">
                        {[
                            { title: "Starter", subtitle: "For individuals & small teams", price: "₵ 0.024", features: ["Up to 5,000 SMS month", "Web SMS platform", "Standard support", "No API access"] },
                            { title: "Business", subtitle: "For growing companies", price: "₵ 0.018", features: ["Unlimited volume", "Full Developer API", "Priority support", "Sender ID registration"], hot: true },
                            { title: "Enterprise", subtitle: "For high-volume needs", price: "Custom", features: ["Dedicated IP addresses", "Multi-user accounts", "SLA & 24/7 technical lead", "Custom billing terms"] },
                        ].map((tier, i) => (
                            <div key={i} className={`p-12 rounded-[48px] border-2 transition-all duration-500 ${tier.hot ? "bg-white border-blue-600 scale-105 shadow-2xl z-10" : "bg-white border-gray-100 hover:border-blue-200"}`}>
                                <h3 className="text-2xl font-black text-[#1E3A8A] mb-2 tracking-tight">{tier.title}</h3>
                                <p className="text-gray-400 font-bold text-sm mb-8 uppercase tracking-widest">{tier.subtitle}</p>

                                <div className="mb-10 lg:min-h-[80px]">
                                    <span className="text-5xl font-black text-[#1E3A8A] tracking-tighter">{tier.price}</span>
                                    {tier.price !== "Custom" && <span className="text-gray-400 font-bold block mt-1">per SMS</span>}
                                </div>

                                <ul className="space-y-5 mb-12">
                                    {tier.features.map((f, j) => (
                                        <li key={j} className="flex items-start gap-3 text-gray-600 font-medium">
                                            <Check className="h-5 w-5 text-green-500 mt-0.5" /> {f}
                                        </li>
                                    ))}
                                </ul>

                                <Link href="/waitlist">
                                    <Button className={`w-full h-16 rounded-2xl font-black text-lg ${tier.hot ? "bg-blue-600 hover:bg-blue-700 shadow-xl shadow-blue-500/20" : "bg-gray-100 hover:bg-gray-200 text-[#1E3A8A]"}`}>Join Waitlist</Button>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Comparison Table */}
            <section className="py-24 md:py-32">
                <div className="container mx-auto max-w-4xl px-4 overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b-2 border-[#1E3A8A]">
                                <th className="py-6 px-4 text-xl font-black text-[#1E3A8A]">Features</th>
                                <th className="py-6 px-4 text-lg font-bold text-gray-400">Starter</th>
                                <th className="py-6 px-4 text-lg font-bold text-blue-600">Business</th>
                                <th className="py-6 px-4 text-lg font-bold text-gray-400">Enterprise</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {[
                                { name: "Bulk SMS Web App", s: true, b: true, e: true },
                                { name: "REST API Access", s: false, b: true, e: true },
                                { name: "OTP Pipeline", s: false, b: true, e: true },
                                { name: "Contact Hub", s: "Basic", b: "Full", e: "Full" },
                                { name: "Delivery Reports", s: "24h", b: "Lifetime", e: "Lifetime" },
                                { name: "Custom Sender ID", s: false, b: true, e: true },
                                { name: "Dedicated IP", s: false, b: false, e: true },
                            ].map((row, i) => (
                                <tr key={i} className="hover:bg-gray-50 transition-colors">
                                    <td className="py-6 px-4 font-bold text-gray-700">{row.name}</td>
                                    <td className="py-6 px-4">{typeof row.s === 'boolean' ? (row.s ? <Check className="text-green-500" /> : "-") : row.s}</td>
                                    <td className="py-6 px-4">{typeof row.b === 'boolean' ? (row.b ? <Check className="text-blue-500 font-bold" /> : "-") : <span className="text-blue-600 font-bold">{row.b}</span>}</td>
                                    <td className="py-6 px-4">{typeof row.e === 'boolean' ? (row.e ? <Check className="text-green-500" /> : "-") : row.e}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

            {/* FAQ Preview */}
            <section className="bg-gray-50 py-24">
                <div className="container mx-auto max-w-3xl px-4 text-center">
                    <h2 className="text-4xl font-black text-[#1E3A8A] mb-12 italic">Common Questions</h2>
                    <div className="space-y-8 text-left">
                        {[
                            { q: "Is there a minimum purchase?", a: "Yes, the minimum credit purchase is ₵ 50.00." },
                            { q: "Do the credits expire?", a: "No, credits purchased on KasaNow never expire as long as your account is active." },
                            { q: "Can I upgrade my plan later?", a: "Absolutely. You can switch plans or move to Enterprise billing at any time." },
                        ].map((faq, i) => (
                            <div key={i} className="p-8 bg-white rounded-3xl border border-gray-100">
                                <h4 className="font-black text-[#1E3A8A] mb-4 text-lg">{faq.q}</h4>
                                <p className="text-gray-600">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="bg-white py-24">
                <div className="container mx-auto max-w-4xl px-4 text-center">
                    <div className="bg-blue-gradient p-12 md:p-20 rounded-[48px] text-white shadow-2xl">
                        <h2 className="text-4xl font-black mb-8 tracking-tighter italic">Join 2,000+ happy businesses</h2>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/waitlist">
                                <Button className="bg-[#F97316] hover:bg-orange-700 text-white font-black h-14 px-10 rounded-2xl shadow-xl w-full sm:w-auto">Join Waitlist</Button>
                            </Link>
                            <Link href="/waitlist">
                                <Button variant="outline" className="border-white/20 bg-white/10 text-white font-bold h-14 px-10 rounded-2xl backdrop-blur-md w-full sm:w-auto">Talk to Sales</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
