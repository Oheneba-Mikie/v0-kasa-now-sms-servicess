import { Metadata } from 'next'
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
    MessageSquare,
    Phone,
    Mail,
    MapPin,
    ChevronRight,
    Send,
    Globe
} from "lucide-react"

export const metadata: Metadata = {
    title: "Contact KasaNow SMS - 24/7 Support in Accra, Ghana",
    description: "Get in touch with KasaNow support. We're here to help you with Bulk SMS, OTP integrations, and custom business solutions via WhatsApp, Email, or Phone.",
    keywords: "Contact KasaNow, SMS support Ghana, report SMS issue",
}

export default function ContactPage() {
    return (
        <div className="flex flex-col bg-white">
            {/* Hero */}
            <section className="bg-blue-gradient py-24 md:py-32 text-white text-center">
                <div className="container mx-auto max-w-7xl px-4">
                    <Badge className="mb-6 bg-white/10 text-white border-white/20 px-4 py-1.5 text-xs font-bold uppercase tracking-wider">Contact Us</Badge>
                    <h1 className="text-5xl font-extrabold md:text-7xl tracking-tighter mb-8 italic">We're here to help</h1>
                    <p className="text-white/70 text-xl max-w-2xl mx-auto leading-relaxed">Have a question? Our support team is available 24/7 to help you with anything from account setup to custom API integrations.</p>
                </div>
            </section>

            {/* Contact Grid */}
            <section className="py-24 md:py-32">
                <div className="container mx-auto max-w-7xl px-4">
                    <div className="grid lg:grid-cols-2 gap-24 items-start">

                        {/* Left Column: Info */}
                        <div className="space-y-12">
                            <div>
                                <h2 className="text-4xl font-extrabold text-[#1E3A8A] mb-8">Get in touch</h2>
                                <p className="text-gray-600 text-lg leading-relaxed">Choose the most convenient way to reach us. We're responsive across all channels and typically respond within minutes during business hours.</p>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-8">
                                {[
                                    { title: "Whatsapp", value: "+233 24 000 0000", icon: <MessageSquare />, sub: "Instant chat support" },
                                    { title: "Phone", value: "+233 20 000 0000", icon: <Phone />, sub: "Technical hotlines" },
                                    { title: "Email", value: "support@kasanow.com", icon: <Mail />, sub: "Account inquiries" },
                                    { title: "Location", value: "Accra, Ghana", icon: <MapPin />, sub: "Main Headquarters" },
                                ].map((item, i) => (
                                    <div key={i} className="p-8 rounded-3xl bg-gray-50 border border-transparent hover:border-blue-100 transition-all group">
                                        <div className="h-12 w-12 bg-white rounded-2xl flex items-center justify-center text-blue-600 mb-6 shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-all">
                                            {item.icon}
                                        </div>
                                        <h4 className="font-bold text-[#1E3A8A] mb-1">{item.title}</h4>
                                        <p className="font-bold text-gray-900 mb-2">{item.value}</p>
                                        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">{item.sub}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="p-8 bg-blue-50 border border-blue-100 rounded-[32px] flex items-center gap-6">
                                <div className="h-16 w-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white flex-shrink-0 animate-pulse">
                                    <Globe className="h-8 w-8" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-blue-900">Looking for our API Documentation?</h4>
                                    <p className="text-blue-900/60 text-sm">Everything you need to build with KasaNow in minutes. <br /> <span className="font-bold hover:underline cursor-pointer">Explore API Docs →</span></p>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Form */}
                        <div className="bg-white p-10 md:p-16 rounded-[56px] shadow-2xl border border-gray-100 relative overflow-hidden">
                            <h3 className="text-3xl font-extrabold text-[#1E3A8A] mb-12">Send us a message</h3>
                            <form className="space-y-6 relative z-10">
                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-gray-400 uppercase tracking-widest px-2">First Name</label>
                                        <input type="text" className="w-full h-14 bg-gray-50 rounded-2xl border-transparent focus:border-blue-500 focus:bg-white transition-all px-6 outline-none font-medium" placeholder="Kwame" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-gray-400 uppercase tracking-widest px-2">Last Name</label>
                                        <input type="text" className="w-full h-14 bg-gray-50 rounded-2xl border-transparent focus:border-blue-500 focus:bg-white transition-all px-6 outline-none font-medium" placeholder="Mensah" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-400 uppercase tracking-widest px-2">Work Email</label>
                                    <input type="email" className="w-full h-14 bg-gray-50 rounded-2xl border-transparent focus:border-blue-500 focus:bg-white transition-all px-6 outline-none font-medium" placeholder="kwame@company.gh" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-400 uppercase tracking-widest px-2">Message</label>
                                    <textarea className="w-full h-40 bg-gray-50 rounded-2xl border-transparent focus:border-blue-500 focus:bg-white transition-all p-6 outline-none font-medium" placeholder="How can we help you today?"></textarea>
                                </div>
                                <Button className="w-full h-16 bg-blue-600 hover:bg-black text-white font-black rounded-2xl text-lg shadow-xl shadow-blue-500/20 group">
                                    Send Message <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </form>
                            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-blue-50 rounded-full blur-[100px] pointer-events-none" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
