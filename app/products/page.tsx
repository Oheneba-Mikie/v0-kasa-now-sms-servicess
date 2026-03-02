import { Metadata } from 'next'
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
    Send,
    ShieldCheck,
    Code2,
    Zap,
    MessageSquare,
    TrendingUp,
    ArrowRight,
    Database,
    Globe,
    Lock,
    Users,
    Smartphone
} from "lucide-react"

export const metadata: Metadata = {
    title: "KasaNow SMS Products - Bulk SMS, OTP & SMS API in Ghana",
    description: "Explore KasaNow's full suite of messaging services: high-throughput Bulk SMS, ultra-secure OTP delivery, and developer-first REST APIs.",
    keywords: "Bulk SMS Ghana, SMS API, OTP Messaging, SMS Gateway",
}

export default function ProductsPage() {
    return (
        <div className="flex flex-col bg-white">
            {/* Hero Section */}
            <section className="bg-blue-gradient py-24 md:py-32 text-white text-center">
                <div className="container mx-auto max-w-7xl px-4">
                    <Badge className="mb-6 bg-white/10 text-white border-white/20 px-4 py-1.5 text-xs font-bold uppercase tracking-wider">Product Suite</Badge>
                    <h1 className="text-5xl font-extrabold md:text-7xl tracking-tighter mb-8 italic">World-class messaging tools</h1>
                    <p className="text-white/70 text-xl max-w-2xl mx-auto leading-relaxed">From simple bulk SMS to mission-critical OTPs and developer-first APIs, KasaNow delivers everything your business needs to stay connected.</p>
                </div>
            </section>

            {/* 1. Bulk SMS */}
            <section id="bulk-sms" className="py-24 md:py-32">
                <div className="container mx-auto max-w-7xl px-4">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="h-16 w-16 bg-blue-100 rounded-[24px] flex items-center justify-center text-blue-600 mb-8 shadow-xl shadow-blue-500/10">
                                <Send className="h-8 w-8" />
                            </div>
                            <h2 className="text-4xl font-extrabold text-[#1E3A8A] mb-6">Bulk SMS Campaigns</h2>
                            <p className="text-gray-600 text-lg mb-8 leading-relaxed">Reach your entire audience at once with targeted, high-impact SMS campaigns. Whether it's promotional offers or service announcements, our platform ensures your message is read within seconds.</p>

                            <div className="space-y-4 mb-10">
                                {[
                                    "High throughput (1000+ SMS/sec)",
                                    "Custom Sender IDs (MTN, Telecel, etc.)",
                                    "Smart contact segmentation",
                                    "Detailed delivery reports"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3 text-gray-700 font-bold">
                                        <Zap className="h-5 w-5 text-blue-500" /> {item}
                                    </div>
                                ))}
                            </div>
                            <Button className="bg-[#1E3A8A] hover:bg-blue-900 text-white font-bold h-14 px-8 rounded-2xl">Start Sending Bulk SMS</Button>
                        </div>
                        <div className="bg-gray-50 rounded-[48px] p-12 lg:p-20 border border-gray-100 relative overflow-hidden">
                            <div className="relative z-10 bg-white p-8 rounded-3xl shadow-2xl space-y-6">
                                <div className="flex justify-between items-center bg-gray-50 p-4 rounded-2xl">
                                    <span className="font-bold text-gray-400">Recipient Group</span>
                                    <span className="text-[#1E3A8A] font-bold">All Customers (4,200)</span>
                                </div>
                                <div className="p-4 bg-blue-50/50 rounded-2xl border border-blue-100">
                                    <p className="text-sm italic text-gray-600">"Flash Sale! Use code GHANA20 for 20% off your next order. Shop now at shop.com"</p>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-xs font-bold text-gray-400">Characters: 82</span>
                                    <Badge className="bg-green-100 text-green-700 border-green-200">Ready to send</Badge>
                                </div>
                            </div>
                            <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-400/10 rounded-full blur-3xl" />
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. OTP SMS */}
            <section id="otp-sms" className="py-24 md:py-32 bg-gray-50">
                <div className="container mx-auto max-w-7xl px-4">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1 bg-[#1E3A8A] rounded-[48px] p-12 lg:p-20 relative overflow-hidden">
                            <div className="relative z-10 bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-3xl shadow-2xl text-center text-white">
                                <div className="text-xs font-black tracking-[0.3em] text-white/40 mb-6 font-mono uppercase">Authentication Pipeline</div>
                                <div className="text-6xl font-black mb-8 tracking-tighter">8 8 2 1</div>
                                <div className="flex justify-center gap-2 mb-4">
                                    <div className="h-2 w-8 bg-green-400 rounded-full" />
                                    <div className="h-2 w-2 bg-white/20 rounded-full" />
                                </div>
                                <p className="text-sm font-bold opacity-60">Verified in 1.2s</p>
                            </div>
                            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-blue-400/20 to-transparent pointer-events-none" />
                        </div>
                        <div className="order-1 lg:order-2">
                            <div className="h-16 w-16 bg-[#F97316]/10 rounded-[24px] flex items-center justify-center text-[#F97316] mb-8 shadow-xl shadow-orange-500/10">
                                <ShieldCheck className="h-8 w-8" />
                            </div>
                            <h2 className="text-4xl font-extrabold text-[#1E3A8A] mb-6">Secure OTP Messaging</h2>
                            <p className="text-gray-600 text-lg mb-8 leading-relaxed">The most reliable 2FA and authentication pipeline in Ghana. Ensure your users can log in securely and fast with our dedicated OTP network routes.</p>

                            <div className="space-y-4 mb-10">
                                {[
                                    "99.99% Network Uptime",
                                    "Geo-redundant server clusters",
                                    "Automatic re-routing logic",
                                    "Fraud detection & prevention"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3 text-gray-700 font-bold">
                                        <Lock className="h-5 w-5 text-[#F97316]" /> {item}
                                    </div>
                                ))}
                            </div>
                            <Button className="bg-[#F97316] hover:bg-orange-700 text-white font-bold h-14 px-8 rounded-2xl">Integrate OTP Now</Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. API SMS for Developers */}
            <section id="api-sms" className="py-24 md:py-32 bg-white">
                <div className="container mx-auto max-w-7xl px-4">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="h-16 w-16 bg-blue-100 rounded-[24px] flex items-center justify-center text-blue-600 mb-8">
                                <Code2 className="h-8 w-8" />
                            </div>
                            <h2 className="text-4xl font-extrabold text-[#1E3A8A] mb-6">SMS API for Developers</h2>
                            <p className="text-gray-600 text-lg mb-8 leading-relaxed">Developer-first messaging infrastructure. Our REST API is built to be integrated in minutes, not days. We provide complete SDKs and code samples for every language.</p>

                            <div className="grid grid-cols-2 gap-6 mb-10">
                                <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100">
                                    <h4 className="font-bold text-[#1E3A8A] mb-2 uppercase text-xs tracking-widest">Latency</h4>
                                    <div className="text-2xl font-black text-blue-600 tracking-tighter">&lt; 45ms</div>
                                </div>
                                <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100">
                                    <h4 className="font-bold text-[#1E3A8A] mb-2 uppercase text-xs tracking-widest">Reliability</h4>
                                    <div className="text-2xl font-black text-blue-600 tracking-tighter">99.99%</div>
                                </div>
                            </div>
                            <Button className="bg-[#1E3A8A] hover:bg-black text-white font-bold h-14 px-8 rounded-2xl">View API Documentation</Button>
                        </div>
                        <div className="bg-[#0F172A] rounded-[48px] p-8 lg:p-12 relative overflow-hidden font-mono shadow-2xl">
                            <div className="flex gap-2 mb-6">
                                <div className="h-3 w-3 rounded-full bg-red-500/50" />
                                <div className="h-3 w-3 rounded-full bg-yellow-500/50" />
                                <div className="h-3 w-3 rounded-full bg-green-500/50" />
                            </div>
                            <div className="space-y-2 text-sm">
                                <p className="text-blue-400">curl <span className="text-white">-X POST https://api.kasanow.com/v1/send</span> \</p>
                                <p className="text-white">  -H "Authorization: Bearer YOUR_API_KEY" \</p>
                                <p className="text-white">  -d "to=+233241234567" \</p>
                                <p className="text-white">  -d "message=Hello from KasaNow" \</p>
                                <p className="text-white">  -d "sender_id=KASANOW"</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Use Cases Page Integration (Short Preview) */}
            <section className="bg-gray-50 py-24 md:py-32">
                <div className="container mx-auto max-w-7xl px-4 text-center">
                    <h2 className="text-4xl font-extrabold text-[#1E3A8A] md:text-5xl tracking-tight mb-16">Solutions for every industry</h2>
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                        {[
                            { title: "Churches", icon: <Users /> },
                            { title: "Fintech", icon: <TrendingUp /> },
                            { title: "E-commerce", icon: <Smartphone /> },
                            { title: "Logistics", icon: <Globe /> }
                        ].map((s, i) => (
                            <div key={i} className="p-10 bg-white rounded-3xl border border-gray-100 hover:shadow-xl transition-all cursor-pointer group">
                                <div className="text-blue-600 mb-6 group-hover:scale-110 transition-transform">
                                    {s.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900">{s.title}</h3>
                            </div>
                        ))}
                    </div>
                    <Button variant="outline" className="mt-16 h-14 px-10 rounded-xl border-gray-200 font-bold hover:bg-white hover:border-blue-600">See All Use Cases</Button>
                </div>
            </section>

            {/* Final CTA */}
            <section className="bg-white py-24 md:py-32">
                <div className="container mx-auto max-w-4xl px-4 text-center">
                    <div className="bg-blue-gradient p-12 md:p-20 rounded-[48px] text-white shadow-2xl">
                        <h2 className="text-4xl font-black mb-8 tracking-tighter">Ready to scale your messaging?</h2>
                        <p className="text-white/60 text-lg mb-10 mx-auto max-w-md">Join 2,000+ businesses in Ghana using KasaNow to stay ahead.</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button className="bg-[#F97316] hover:bg-orange-700 text-white font-bold h-14 px-10 rounded-2xl shadow-xl">Start Sending Free</Button>
                            <Button variant="outline" className="border-white/20 bg-white/10 text-white font-bold h-14 px-10 rounded-2xl backdrop-blur-md">Talk to Sales</Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
