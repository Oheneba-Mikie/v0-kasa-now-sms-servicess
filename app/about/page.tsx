import { Metadata } from 'next'
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import {
    Users,
    Heart,
    Zap,
    Globe,
    Target,
    Award,
    ChevronRight,
    Database
} from "lucide-react"

export const metadata: Metadata = {
    title: "About KasaNow SMS - Ghana's Premium Messaging Platform",
    description: "Learn more about KasaNow's mission to simplify communication for businesses, churches, and schools in Ghana through world-class technology.",
    keywords: "About KasaNow, SMS platform mission, Ghanaian tech startup",
}

export default function AboutPage() {
    return (
        <div className="flex flex-col bg-white">
            {/* Hero */}
            <section className="bg-blue-gradient py-24 md:py-32 text-white text-center overflow-hidden relative">
                <div className="container mx-auto max-w-7xl px-4 relative z-10">
                    <Badge className="mb-6 bg-white/10 text-white border-white/20 px-4 py-1.5 text-xs font-bold uppercase tracking-wider">Our Story</Badge>
                    <h1 className="text-5xl font-semibold md:text-7xl tracking-tight mb-8">Simplifying communication for all</h1>
                    <p className="text-white/70 text-xl max-w-3xl mx-auto leading-relaxed">Born in Accra, built for Ghana. We're on a mission to empower every business, church, and school with world-class messaging technology that just works.</p>
                </div>
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-400/10 to-transparent pointer-events-none" />
            </section>

            {/* Mission & Vision */}
            <section className="py-24 md:py-32">
                <div className="container mx-auto max-w-7xl px-4">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl font-bold text-gray-900 mb-8 tracking-tight">Bridging the gap in <span className="text-blue-gradient">digital communication</span></h2>
                            <p className="text-gray-600 text-lg mb-8 leading-relaxed italic">"We noticed that many Ghanaian businesses were struggling with complex, expensive, or unreliable SMS services. We built KasaNow to solve that—one message at a time."</p>
                            <p className="text-gray-600 text-lg mb-12 leading-relaxed">Our platform is designed to remove the technical barriers of traditional SMS APIs. Whether you're a developer or a local business owner, KasaNow gives you the tools to reach your audience instantly without needing a degree in computer science.</p>

                            <div className="grid grid-cols-2 gap-8">
                                <div className="space-y-4">
                                    <h4 className="text-4xl font-bold text-[#3A57FC] tabular-nums tracking-tight">500M+</h4>
                                    <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">Messages Delivered</p>
                                </div>
                                <div className="space-y-4">
                                    <h4 className="text-4xl font-bold text-[#3A57FC] tabular-nums tracking-tight">10K+</h4>
                                    <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">Active Users</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gray-100 rounded-[56px] p-2 aspect-square relative overflow-hidden shadow-2xl">
                            <div className="w-full h-full rounded-[48px] bg-white flex items-center justify-center p-12">
                                <Database className="w-full h-full text-blue-50/50 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                                <div className="relative z-10 text-center space-y-8">
                                    <div className="h-24 w-24 bg-blue-100 rounded-3xl flex items-center justify-center text-blue-600 mx-auto shadow-xl">
                                        <Award className="h-12 w-12" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900">Ghana's Preferred SMS Platform</h3>
                                    <p className="text-gray-400 font-medium">Recognized for excellence in reliability and customer support.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="bg-gray-50 py-24 md:py-32 border-y border-gray-100">
                <div className="container mx-auto max-w-7xl px-4 text-center">
                    <h2 className="text-4xl font-bold text-gray-900 mb-20">The values that drive us</h2>
                    <div className="grid gap-12 md:grid-cols-3">
                        {[
                            { title: "Extreme Reliability", icon: <Zap />, desc: "Our infrastructure is geo-redundant and built for 99.99% uptime. Failure is not an option." },
                            { title: "Local First", icon: <Globe />, desc: "We understand the Ghanaian market because we are part of it. Our support is local and human." },
                            { title: "Innovation", icon: <Target />, desc: "We constantly push the boundaries of what's possible in messaging technology." }
                        ].map((v, i) => (
                            <div key={i} className="p-10 bg-white rounded-[40px] shadow-sm hover:shadow-xl transition-shadow border border-gray-100 text-left group">
                                <div className="h-14 w-14 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all">
                                    {v.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">{v.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{v.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team/CTA */}
            <section className="py-24 md:py-32">
                <div className="container mx-auto max-w-5xl px-4 text-center">
                    <div className="space-y-8 mb-20">
                        <h2 className="text-4xl font-bold text-gray-900">Join our mission</h2>
                        <p className="text-gray-600 text-xl max-w-2xl mx-auto leading-relaxed">We're always looking for talented individuals who are passionate about building technology that matters. Based in Accra? Let's talk.</p>
                        <Button variant="outline" className="h-14 px-10 rounded-2xl border-gray-200 font-bold hover:bg-white hover:border-blue-600 hover:text-blue-600 text-lg">View Open Positions</Button>
                    </div>

                    <div className="bg-blue-gradient p-12 md:p-20 rounded-[56px] text-white shadow-2xl">
                        <h2 className="text-4xl font-bold mb-8 tracking-tight">Build with KasaNow</h2>
                        <p className="text-white/60 text-lg mb-10 max-w-md mx-auto">Start your journey today and see why 2,000+ businesses trust us with their communication.</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button className="bg-[#F97316] hover:bg-orange-700 text-white font-black h-16 px-12 rounded-2xl shadow-xl shadow-orange-500/20 text-lg">Create Free Account</Button>
                            <Link href="/contact">
                                <Button variant="outline" className="border-white/20 bg-white/10 text-white font-bold h-16 px-12 rounded-2xl text-lg backdrop-blur-md">Contact Us</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
