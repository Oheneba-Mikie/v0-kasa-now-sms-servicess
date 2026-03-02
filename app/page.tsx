import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import HeroSlider from "@/components/HeroSlider"
import Link from "next/link"
import {
  Check,
  Send,
  Users,
  BarChart3,
  Clock,
  Smartphone,
  ArrowRight,
  Star,
  TrendingUp,
  Code2,
  Zap,
  ShieldCheck,
  LifeBuoy,
  ChevronRight,
  Database
} from "lucide-react"

export default function HomePage() {
  return (
    <div className="flex flex-col bg-white">
      <HeroSlider />

      {/* 1. Trust Bar */}
      <section className="bg-white py-16 border-y border-gray-100">
        <div className="container mx-auto max-w-7xl px-4 text-center">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-[0.3em] mb-10">Trusted by Ghana's Leading Networks & Businesses</p>
          <div className="flex flex-wrap items-center justify-center gap-12 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
            <span className="text-2xl font-black tracking-tighter text-gray-900">MTN</span>
            <span className="text-2xl font-black tracking-tighter text-gray-900">Telecel</span>
            <span className="text-2xl font-black tracking-tighter text-gray-900">AT</span>
            <span className="text-2xl font-black tracking-tighter text-gray-900">GHANA POST</span>
            <span className="text-2xl font-black tracking-tighter text-gray-900">HUBTEL</span>
          </div>
        </div>
      </section>

      {/* 2. Features Grid (6 Cards) */}
      <section id="features" className="bg-white py-24 md:py-32">
        <div className="container mx-auto max-w-7xl px-4 text-center">
          <Badge className="mb-6 bg-blue-100 text-[#1E3A8A] border-blue-200 px-4 py-1.5 text-xs font-bold uppercase tracking-wider">Capabilities</Badge>
          <h2 className="mb-4 text-4xl font-extrabold text-[#1E3A8A] md:text-6xl tracking-tight">
            Powerful features for <span className="text-blue-gradient italic">limitless</span> messaging
          </h2>
          <p className="mb-20 text-xl text-gray-600 max-w-2xl mx-auto">Everything you need to reach your customers at scale, with tools built for speed and absolute reliability.</p>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: <Send className="h-8 w-8 text-[#3B82F6]" />, title: "Bulk SMS", desc: "Send thousands of messages in seconds with our high-throughput platform. Perfect for campaigns." },
              { icon: <Code2 className="h-8 w-8 text-[#3B82F6]" />, title: "SMS API", desc: "Robust REST API documentation with SDKs for Node.js, PHP, and Python. Build faster." },
              { icon: <ShieldCheck className="h-8 w-8 text-[#3B82F6]" />, title: "OTP Messaging", desc: "Secure 2FA and one-time passwords delivered with ultra-low latency across all networks." },
              { icon: <BarChart3 className="h-8 w-8 text-[#3B82F6]" />, title: "Delivery Reports", desc: "Real-time insights and granular data on every message's status. Know exactly when it's read." },
              { icon: <Clock className="h-8 w-8 text-[#3B82F6]" />, title: "Campaign Scheduler", desc: "Plan your outreach in advance with automated time-zone aware scheduling. Set and forget." },
              { icon: <Users className="h-8 w-8 text-[#3B82F6]" />, title: "Contact Management", desc: "Smart segmentation and audience organization. Import your leads with one click." },
            ].map((feat, i) => (
              <div key={i} className="group p-10 rounded-[40px] bg-gray-50 border border-transparent hover:border-blue-100 hover:bg-white hover:shadow-[0_20px_60px_-15px_rgba(30,58,138,0.1)] transition-all duration-500 text-left">
                <div className="mb-8 inline-block rounded-2xl bg-white p-5 shadow-lg group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  <div className="group-hover:text-white transition-colors">{feat.icon}</div>
                </div>
                <h3 className="mb-4 text-2xl font-bold text-[#1E3A8A]">{feat.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{feat.desc}</p>
                <Link href="#" className="inline-flex items-center text-sm font-bold text-blue-600 group-hover:gap-2 transition-all">
                  Explore Feature <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Why Choose KasaNow (4 Columns) */}
      <section className="bg-blue-gradient py-24 md:py-32 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
          <Database className="w-full h-full rotate-12 scale-150" />
        </div>
        <div className="container mx-auto max-w-7xl px-4 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-extrabold md:text-5xl tracking-tight mb-6">Why businesses choose KasaNow</h2>
            <p className="text-white/70 text-xl max-w-2xl mx-auto">Built for scale, stability, and speed. We handle the complexity so you can focus on your message.</p>
          </div>
          <div className="grid gap-12 lg:grid-cols-4 md:grid-cols-2 text-center">
            {[
              { icon: <Zap className="h-10 w-10" />, title: "99.9% Delivery", desc: "Proprietary routing logic ensures your messages hit their mark every time." },
              { icon: <TrendingUp className="h-10 w-10" />, title: "Affordable Pricing", desc: "Best-in-market rates with transparent volume-based discounts for all sizes." },
              { icon: <Smartphone className="h-10 w-10" />, title: "Instant Setup", desc: "Go from signup to first message in 2 minutes. No technical overhead required." },
              { icon: <LifeBuoy className="h-10 w-10" />, title: "24/7 Support", desc: "Real humans based in Accra ready to assist you any time of day via chat." },
            ].map((item, i) => (
              <div key={i} className="group p-8 rounded-3xl hover:bg-white/5 transition-colors duration-300">
                <div className="mx-auto h-20 w-20 rounded-[24px] bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 mb-8 group-hover:scale-110 transition-transform bg-blue-400/20">
                  <div className="text-blue-300">{item.icon}</div>
                </div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-white/60 leading-relaxed text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. How It Works (Visual 3-step UI) */}
      <section className="bg-white py-24 md:py-40">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <Badge className="mb-6 bg-[#F97316]/10 text-[#F97316] border-[#F97316]/20 px-4 py-1.5 text-xs font-bold uppercase tracking-wider">Simple Process</Badge>
              <h2 className="text-4xl font-extrabold text-[#1E3A8A] md:text-6xl tracking-tight mb-8">Ready to send in <span className="text-blue-gradient italic">minutes</span></h2>
              <p className="text-xl text-gray-600 mb-12 leading-relaxed">No complex integration required. KasaNow is designed for anyone to start messaging immediately.</p>

              <div className="space-y-10">
                {[
                  { step: "01", title: "Create Your Account", desc: "Sign up in seconds. No credit card required to start." },
                  { step: "02", title: "Upload Your Contacts", desc: "Import directly from Excel, CSV, or your phonebook." },
                  { step: "03", title: "Send Your Message", desc: "Compose, preview, and hit send. Watch it deliver instantly." },
                ].map((s, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="text-4xl font-black text-blue-100 flex-shrink-0">{s.step}</div>
                    <div>
                      <h4 className="text-2xl font-bold text-[#1E3A8A] mb-2">{s.title}</h4>
                      <p className="text-gray-600">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Button className="mt-12 bg-[#1E3A8A] hover:bg-[#1E3A8A]/90 text-white font-bold h-14 px-10 rounded-2xl shadow-xl">Start Sending For Free</Button>
            </div>
            <div className="lg:w-1/2 relative bg-gray-50 rounded-[48px] p-12 overflow-hidden border border-gray-100">
              <div className="relative z-10 bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
                <div className="flex justify-between items-center mb-8 pb-4 border-b border-gray-50">
                  <span className="font-bold text-[#1E3A8A]">New Campaign</span>
                  <Badge variant="outline">Draft</Badge>
                </div>
                <div className="space-y-6">
                  <div className="h-4 w-1/3 bg-gray-100 rounded-full" />
                  <div className="space-y-2">
                    <div className="h-12 w-full bg-gray-50 rounded-xl" />
                    <div className="h-32 w-full bg-gray-50 rounded-xl flex items-center justify-center text-gray-400 text-sm">Type your message...</div>
                  </div>
                  <div className="flex justify-end pt-4">
                    <div className="h-12 w-32 bg-[#F97316] rounded-xl flex items-center justify-center text-white font-bold text-sm">Send Now</div>
                  </div>
                </div>
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-blue-100/30 rounded-full blur-[100px] pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* 5. Pricing Preview */}
      <section className="bg-gray-50 py-24 md:py-32">
        <div className="container mx-auto max-w-7xl px-4 text-center">
          <h2 className="text-4xl font-extrabold text-[#1E3A8A] md:text-5xl tracking-tight mb-6">Simple, pay-as-you-go pricing</h2>
          <p className="text-gray-600 text-lg mb-16 mx-auto max-w-xl">No monthly fees. No hidden charges. Only pay for what you actually send.</p>

          <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
            {[
              { title: "Starter", price: "₵ 0.024", per: "per SMS", features: ["1,000 Contacts", "Basic Analytics", "Standard Support", "No API Access"] },
              { title: "Business", price: "₵ 0.018", per: "per SMS", features: ["Unlimited Contacts", "Advanced Analytics", "Priority Support", "Full API Access"], hot: true },
              { title: "Enterprise", price: "Custom", per: "volume based", features: ["Dedicated IP", "Custom Integration", "SLA Guarantee", "Account Manager"] },
            ].map((tier, i) => (
              <div key={i} className={`relative p-10 rounded-[40px] border-2 transition-all duration-300 ${tier.hot ? "bg-white border-blue-600 shadow-2xl scale-105 z-10" : "bg-white border-gray-100 hover:border-blue-200"}`}>
                {tier.hot && <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white text-[10px] font-black uppercase tracking-[0.2em] px-4 py-1.5 rounded-full">Most Popular</div>}
                <h3 className="text-xl font-bold text-gray-900 mb-6">{tier.title}</h3>
                <div className="mb-8">
                  <span className="text-4xl font-extrabold text-[#1E3A8A] tracking-tighter">{tier.price}</span>
                  <span className="text-gray-400 block mt-1 text-sm font-bold uppercase">{tier.per}</span>
                </div>
                <ul className="space-y-4 mb-10 text-left">
                  {tier.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-3 text-sm text-gray-600 font-medium">
                      <Check className="h-4 w-4 text-green-500" /> {f}
                    </li>
                  ))}
                </ul>
                <Button className={`w-full h-14 rounded-2xl font-bold text-lg ${tier.hot ? "bg-blue-600 hover:bg-blue-700 text-white" : "bg-gray-100 hover:bg-gray-200 text-[#1E3A8A]"}`}>Select Plan</Button>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <Link href="/pricing" className="text-[#1E3A8A] font-bold py-4 px-8 border-b-2 border-transparent hover:border-blue-600 transition-all inline-flex items-center gap-2">View Full Pricing <ChevronRight className="h-5 w-5" /></Link>
          </div>
        </div>
      </section>

      {/* 6. Testimonials */}
      <section id="customers" className="bg-white py-24 md:py-32">
        <div className="container mx-auto max-w-7xl px-4 text-center">
          <h2 className="mb-20 text-4xl font-extrabold text-[#1E3A8A] md:text-5xl tracking-tight">Loved by businesses of <span className="text-blue-gradient">all sizes</span></h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              { name: "Pastor Mensah", role: "Faith Chapel International", text: "KasaNow has been a blessing for our congregation. We send our Sunday reminders effortlessly and our attendance has improved greatly." },
              { name: "Sarah K.", role: "Founder, Glow Up Shop", text: "The flash sales we run through KasaNow sell out in hours. The delivery is instant and the platform is so easy to use even for me!" },
              { name: "Kofi Appiah", role: "CTO, PaySwift Ghana", text: "We integrated their SMS API for our OTPs. The reliability is unmatched in Ghana. Latency is minimal and the documentation is perfect." },
            ].map((t, i) => (
              <div key={i} className="p-10 rounded-[40px] bg-gray-50 text-left border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="flex gap-1 mb-6 text-[#F97316]">
                  {[...Array(5)].map((_, j) => <Star key={j} className="h-5 w-5 fill-current" />)}
                </div>
                <p className="text-gray-700 text-lg leading-relaxed mb-8 italic">"{t.text}"</p>
                <div>
                  <div className="font-bold text-[#1E3A8A] text-lg">{t.name}</div>
                  <div className="text-sm font-bold text-gray-400 uppercase tracking-wider">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Final CTA Banner */}
      <section className="bg-white py-24 px-4 overflow-hidden">
        <div className="container mx-auto max-w-6xl">
          <div className="relative rounded-[56px] bg-blue-gradient p-12 md:p-24 overflow-hidden text-center text-white">
            <div className="relative z-10">
              <h2 className="text-4xl font-extrabold md:text-7xl mb-8 tracking-tighter">Ready to send SMS today?</h2>
              <p className="text-white/70 text-xl md:text-2xl mb-12 max-w-2xl mx-auto">Join thousands of Ghanaian businesses growing with KasaNow.</p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button className="bg-white text-blue-700 hover:bg-white/90 font-black h-16 px-12 rounded-2xl text-xl shadow-2xl hover:scale-105 transition-transform">Create Free Account</Button>
                <Button variant="outline" className="border-white/30 bg-white/10 hover:bg-white/20 text-white font-bold h-16 px-12 rounded-2xl text-xl backdrop-blur-md">Talk to Sales</Button>
              </div>
              <div className="mt-12 flex items-center justify-center gap-2 text-white/50 text-sm font-bold uppercase tracking-[0.2em]">
                <div className="h-2 w-2 rounded-full bg-green-400" /> 21,332 users joined in the last 7 days
              </div>
            </div>
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-400/20 to-transparent pointer-events-none" />
          </div>
        </div>
      </section>
    </div>
  )
}
