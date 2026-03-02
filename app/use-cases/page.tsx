import { Metadata } from 'next'
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
    Users,
    BookOpen,
    TrendingUp,
    Smartphone,
    Zap,
    ShieldCheck,
    Check,
    MessageSquare,
    Globe,
    Bell
} from "lucide-react"

export const metadata: Metadata = {
    title: "SMS Solutions for Churches, Schools & Fintech - KasaNow",
    description: "See how KasaNow provides tailored SMS solutions for your industry. Reliable messaging for churches, parent-teacher alerts for schools, and OTPs for fintech.",
    keywords: "SMS for churches Ghana, school SMS system, Fintech OTP alerts",
}

export default function UseCasesPage() {
    const industries = [
        {
            title: "Churches & Ministries",
            icon: <Users className="h-10 w-10" />,
            tagline: "Engage your congregation beyond Sunday",
            desc: "Send Bible verses, weekly service reminders, and emergency prayer requests instantly. KasaNow helps Ghanaian churches stay connected with their members effortlessly.",
            features: ["Service reminders", "Bible Verse of the Day", "Tithe & Offering alerts", "Event RSVP tracking"],
            color: "blue"
        },
        {
            title: "Schools & Education",
            icon: <BookOpen className="h-10 w-10" />,
            tagline: "Bridge the gap between school and parents",
            desc: "Notify parents about PTA meetings, exam results, and school fees reminders. Ensure critical information is delivered directly to their mobile phones.",
            features: ["Result notifications", "PTA meeting alerts", "Fees payment tracking", "School closing broadcasts"],
            color: "orange"
        },
        {
            title: "Fintech & Banking",
            icon: <TrendingUp className="h-10 w-10" />,
            tagline: "Mission-critical security for every transaction",
            desc: "Power your OTPs, transaction alerts, and 2FA with our high-throughput pipeline. Trusted by major Ghanaian fintech platforms for ultra-low latency delivery.",
            features: ["Real-time transaction alerts", "Secure 2FA / OTP", "Account balance updates", "Fraud prevention alerts"],
            color: "green"
        },
        {
            title: "E-commerce & Retail",
            icon: <Smartphone className="h-10 w-10" />,
            tagline: "Drive sales with instant mobile outreach",
            desc: "Recover abandoned carts, send order tracking updates, and launch flash sales. SMS has a 98% open rate—don't let your marketing emails go unread.",
            features: ["Cart recovery alerts", "Order status updates", "Flash sale broadcasts", "Loyalty program promos"],
            color: "purple"
        }
    ]

    return (
        <div className="flex flex-col bg-white">
            {/* Hero */}
            <section className="bg-blue-gradient py-24 md:py-32 text-white text-center">
                <div className="container mx-auto max-w-7xl px-4">
                    <Badge className="mb-6 bg-white/10 text-white border-white/20 px-4 py-1.5 text-xs font-bold uppercase tracking-wider">Solutions</Badge>
                    <h1 className="text-5xl font-extrabold md:text-7xl tracking-tighter mb-8 italic">Built for your industry</h1>
                    <p className="text-white/70 text-xl max-w-2xl mx-auto leading-relaxed">Discover how KasaNow is helping Ghanaian businesses and organizations thrive with intelligent SMS communication.</p>
                </div>
            </section>

            {/* Industry Sections */}
            <section className="py-24 md:py-32">
                <div className="container mx-auto max-w-7xl px-4 space-y-32">
                    {industries.map((ind, i) => (
                        <div key={i} className={`flex flex-col lg:flex-row items-center gap-16 ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                            <div className="lg:w-1/2">
                                <div className={`h-16 w-16 bg-${ind.color}-100 rounded-[24px] flex items-center justify-center text-${ind.color}-600 mb-8`}>
                                    {ind.icon}
                                </div>
                                <h2 className="text-4xl font-extrabold text-[#1E3A8A] mb-4">{ind.title}</h2>
                                <p className="text-blue-600 font-bold mb-6 text-xl">{ind.tagline}</p>
                                <p className="text-gray-600 text-lg mb-8 leading-relaxed">{ind.desc}</p>

                                <div className="grid grid-cols-2 gap-4 mb-10">
                                    {ind.features.map((f, j) => (
                                        <div key={j} className="flex items-center gap-3 text-sm font-bold text-gray-700">
                                            <Check className="h-4 w-4 text-green-500" /> {f}
                                        </div>
                                    ))}
                                </div>
                                <Button className="bg-[#1E3A8A] hover:bg-black text-white font-bold h-14 px-8 rounded-2xl">Start for {ind.title}</Button>
                            </div>

                            <div className="lg:w-1/2 p-12 bg-gray-50 rounded-[48px] border border-gray-100 relative overflow-hidden group">
                                <div className="relative z-10 bg-white p-8 rounded-3xl shadow-2xl space-y-4 transform group-hover:-translate-y-2 transition-transform duration-500">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="h-10 w-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">K</div>
                                        <span className="font-bold text-gray-900">{ind.title} Alert</span>
                                    </div>
                                    <p className="text-gray-600 italic">"Dear member, please remember our mid-week service tomorrow at 6pm. Stay blessed!"</p>
                                    <div className="pt-4 flex justify-between items-center text-xs font-bold text-gray-400">
                                        <span>SENT VIA KASANOW</span>
                                        <Badge variant="outline">Delivered</Badge>
                                    </div>
                                </div>
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-100/30 rounded-full blur-3xl pointer-events-none" />
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Custom Solution Section */}
            <section className="bg-gray-900 py-24 md:py-32 text-white">
                <div className="container mx-auto max-w-7xl px-4 flex flex-col lg:flex-row items-center gap-16">
                    <div className="lg:w-1/2">
                        <h2 className="text-4xl font-black mb-8 italic">Need a custom solution?</h2>
                        <p className="text-white/70 text-xl leading-relaxed mb-12">Our engineering team can build custom integrations, dedicated shortcodes, and high-volume pipelines tailored to your specific business requirements.</p>
                        <div className="flex gap-6">
                            <div className="flex flex-col items-center">
                                <div className="text-4xl font-black text-blue-500 mb-2">100M+</div>
                                <div className="text-xs font-bold uppercase tracking-widest text-white/40">Monthly capacity</div>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="text-4xl font-black text-blue-500 mb-2">&lt; 1s</div>
                                <div className="text-xs font-bold uppercase tracking-widest text-white/40">Average delivery</div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/2 w-full">
                        <div className="p-10 bg-white/5 backdrop-blur-md rounded-[48px] border border-white/10 space-y-8">
                            <h3 className="text-2xl font-bold">Talk to our experts</h3>
                            <div className="space-y-4">
                                <div className="h-14 bg-white/10 rounded-2xl border border-white/10 flex items-center px-6 text-white/40">Full Name</div>
                                <div className="h-14 bg-white/10 rounded-2xl border border-white/10 flex items-center px-6 text-white/40">Company Email</div>
                                <div className="h-32 bg-white/10 rounded-2xl border border-white/10 p-6 text-white/40">Describe your needs...</div>
                            </div>
                            <Button className="w-full bg-[#1E3A8A] hover:bg-white hover:text-blue-900 text-white font-black h-14 rounded-2xl transition-all">Request Specialist Consultation</Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-white py-24 md:py-32">
                <div className="container mx-auto max-w-4xl px-4 text-center">
                    <h2 className="text-4xl font-black text-[#1E3A8A] tracking-tighter mb-12 italic">Join 2,000+ happy businesses</h2>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button className="bg-[#F97316] hover:bg-orange-700 text-white font-black h-16 px-12 rounded-2xl shadow-xl shadow-orange-500/20 text-lg">Create Free Account</Button>
                        <Button variant="outline" className="border-gray-200 font-bold h-16 px-12 rounded-2xl text-lg hover:border-blue-600">Explore API Docs</Button>
                    </div>
                </div>
            </section>
        </div>
    )
}
