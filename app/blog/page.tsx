import { Metadata } from 'next'
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
    ArrowRight,
    Calendar,
    Clock,
    User,
    MessageSquare,
    Zap,
    ChevronRight
} from "lucide-react"

export const metadata: Metadata = {
    title: "KasaNow SMS Blog - Messaging Insights & Marketing Tips",
    description: "Read the latest about SMS marketing, developer guides, and product updates from KasaNow, Ghana's leading SMS service.",
    keywords: "SMS marketing blog, Ghanain business tips, mobile marketing insights",
}

export default function BlogPage() {
    const posts = [
        {
            title: "How to grow your church attendance using SMS",
            desc: "Discover the 5 proven SMS strategies used by the largest ministries in Ghana to keep their congregation engaged all week.",
            category: "Marketing",
            date: "March 02, 2025",
            read: "6 min read"
        },
        {
            title: "Integrating KasaNow SMS with Node.js & React",
            desc: "A developer's guide to building a robust messaging system using our REST API and SDKs in minutes.",
            category: "Developers",
            date: "Feb 28, 2025",
            read: "10 min read"
        },
        {
            title: "Why OTP delivery rates matter for your Fintech app",
            desc: "Low-latency OTP delivery is critical for user trust. Learn how KasaNow ensures 99.9% uptime for transaction alerts.",
            category: "Product",
            date: "Feb 25, 2025",
            read: "4 min read"
        },
        {
            title: "5 Common Bulk SMS mistakes to avoid in 2025",
            desc: "Stop wasting credits on unread messages. Learn how to craft the perfect CTA and optimize your sender ID.",
            category: "Marketing",
            date: "Feb 20, 2025",
            read: "8 min read"
        }
    ]

    return (
        <div className="flex flex-col bg-white">
            {/* Hero */}
            <section className="bg-blue-gradient py-24 md:py-32 text-white text-center">
                <div className="container mx-auto max-w-7xl px-4">
                    <Badge className="mb-6 bg-white/10 text-white border-white/20 px-4 py-1.5 text-xs font-bold uppercase tracking-wider">KasaNow Blog</Badge>
                    <h1 className="text-5xl font-extrabold md:text-7xl tracking-tighter mb-8 italic">Insights for the digital era</h1>
                    <p className="text-white/70 text-xl max-w-2xl mx-auto leading-relaxed">Resources, guides, and stories to help you master the art of mobile communication in Ghana.</p>
                </div>
            </section>

            {/* Featured Post Preview */}
            <section className="py-24">
                <div className="container mx-auto max-w-7xl px-4">
                    <div className="bg-gray-50 rounded-[56px] p-12 md:p-20 border border-gray-100 flex flex-col lg:flex-row gap-16 items-center shadow-xl">
                        <div className="lg:w-1/2 w-full aspect-video bg-blue-100 rounded-[40px] relative overflow-hidden flex items-center justify-center p-12">
                            <div className="text-blue-600">
                                <Zap className="h-32 w-32 animate-pulse" />
                            </div>
                        </div>
                        <div className="lg:w-1/2 w-full space-y-6">
                            <div className="flex items-center gap-4 text-xs font-black text-blue-600 uppercase tracking-[0.2em]">
                                <span>Product Update</span>
                                <span>•</span>
                                <span>12 Min Read</span>
                            </div>
                            <h2 className="text-4xl font-extrabold text-[#1E3A8A] leading-tight mb-4">Announcing our new high-throughput OTP Pipeline</h2>
                            <p className="text-gray-600 text-lg mb-8">We've upgraded our infrastructure! Discover how our new geo-redundant routing ensures your OTPs land in under 2 seconds across all Ghanaian networks.</p>
                            <Button className="h-14 px-8 rounded-2xl bg-[#1E3A8A] hover:bg-black text-white font-black group">
                                Read Featured Post <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Posts Grid */}
            <section className="pb-32">
                <div className="container mx-auto max-w-7xl px-4">
                    <div className="flex flex-wrap gap-4 mb-16 border-b border-gray-100 pb-8">
                        {['All Posts', 'Marketing', 'Product', 'Developers', 'Case Studies'].map((cat, i) => (
                            <div key={i} className={`px-6 py-2 rounded-full text-sm font-bold cursor-pointer transition-all ${i === 0 ? 'bg-blue-600 text-white' : 'bg-gray-50 text-gray-400 hover:bg-gray-100 hover:text-gray-900'}`}>
                                {cat}
                            </div>
                        ))}
                    </div>

                    <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-2">
                        {posts.map((post, i) => (
                            <div key={i} className="group cursor-pointer">
                                <div className="aspect-video bg-gray-50 rounded-[40px] mb-8 border border-transparent group-hover:border-blue-100 transition-all overflow-hidden p-12 flex items-center justify-center">
                                    <MessageSquare className="h-20 w-20 text-blue-50 group-hover:scale-110 transition-transform" />
                                </div>
                                <div className="space-y-4 px-4">
                                    <div className="flex items-center gap-4">
                                        <Badge variant="outline" className="border-blue-100 text-blue-600 font-bold uppercase tracking-widest text-[10px]">{post.category}</Badge>
                                        <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">{post.date}</span>
                                    </div>
                                    <h3 className="text-3xl font-extrabold text-[#1E3A8A] group-hover:text-blue-600 transition-colors leading-tight tracking-tight">{post.title}</h3>
                                    <p className="text-gray-600 leading-relaxed mb-6">{post.desc}</p>
                                    <div className="flex items-center text-blue-600 font-black text-sm uppercase tracking-widest group-hover:gap-2 transition-all">
                                        Read Story <ChevronRight className="h-4 w-4 ml-1" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-24 text-center">
                        <Button variant="outline" className="h-16 px-12 rounded-2xl border-gray-200 font-black text-lg hover:border-blue-600">Load More Articles</Button>
                    </div>
                </div>
            </section>

            {/* Final Meta-CTA */}
            <section className="bg-gray-50 py-24 md:py-32">
                <div className="container mx-auto max-w-4xl px-4 text-center">
                    <div className="bg-blue-gradient p-12 md:p-20 rounded-[56px] text-white shadow-2xl space-y-8">
                        <h2 className="text-4xl font-black italic tracking-tighter">Stay informed</h2>
                        <p className="text-white/60 text-xl max-w-md mx-auto">Get the latest SMS marketing tips and product updates delivered straight to your inbox.</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
                            <input type="email" placeholder="Enter your email" className="h-16 bg-white/10 border border-white/20 rounded-2xl px-6 outline-none focus:bg-white focus:text-blue-900 transition-all font-bold placeholder:text-white/30" />
                            <Button className="bg-[#F97316] hover:bg-orange-700 text-white font-black h-16 px-10 rounded-2xl shadow-xl shadow-orange-500/20">Subscribe</Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
