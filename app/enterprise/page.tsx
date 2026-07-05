"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { 
  ShieldCheck, 
  Layers, 
  Cpu, 
  Settings, 
  PhoneCall, 
  Send, 
  CheckCircle2, 
  Check, 
  ArrowRight 
} from "lucide-react"

export default function EnterprisePage() {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    volume: "100k-500k",
    message: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulated form submission
    setFormSubmitted(true)
  }

  return (
    <div className="flex flex-col bg-white">
      {/* Hero Banner */}
      <section className="bg-blue-gradient py-24 md:py-32 text-white text-center overflow-hidden relative">
        <div className="container mx-auto max-w-7xl px-4 relative z-10">
          <Badge className="mb-6 bg-white/10 text-white border-white/20 px-4 py-1.5 text-xs font-bold uppercase tracking-wider">
            KasaNow Enterprise
          </Badge>
          <h1 className="text-5xl font-semibold md:text-7xl tracking-tight mb-8">
            Message at scale, reliably
          </h1>
          <p className="text-white/70 text-xl max-w-3xl mx-auto leading-relaxed">
            Mission-critical messaging infrastructure with 99.99% SLA, dedicated IP routing, volume-based discounts, and 24/7 dedicated support.
          </p>
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-400/10 to-transparent pointer-events-none" />
      </section>

      {/* Grid of Enterprise Benefits */}
      <section className="py-24 md:py-32 bg-gray-50 border-b border-gray-100">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Infrastructure built for scale
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Everything your organization needs to deliver secure, reliable, and high-performance SMS campaigns.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Custom Volume Pricing",
                desc: "Send millions of messages daily? Our volume-based rates scale downwards so you get the absolute lowest per-SMS cost in Ghana.",
                icon: <Layers className="h-6 w-6 text-blue-600" />
              },
              {
                title: "Dedicated Tier-1 Routing",
                desc: "By-pass standard queues. KasaNow Enterprise clients get direct connection to telecommunication carrier backbones for sub-second deliveries.",
                icon: <Cpu className="h-6 w-6 text-blue-600" />
              },
              {
                title: "Security & Compliance",
                desc: "ISO27001 certified and GDPR compliant. Bank-grade AES-256 encryption at rest and transit ensures your customer contacts are strictly protected.",
                icon: <ShieldCheck className="h-6 w-6 text-blue-600" />
              },
              {
                title: "SSO & Organizations",
                desc: "Manage team access with ease. Integrate KasaNow with standard Okta or Google Workspace SSO, and provision multi-tenant sub-accounts.",
                icon: <Settings className="h-6 w-6 text-blue-600" />
              },
              {
                title: "24/7 SLA Guarantee",
                desc: "Our systems are backed by a contractually binding 99.99% uptime SLA. We support high-availability OTP and alerting pipelines.",
                icon: <CheckCircle2 className="h-6 w-6 text-blue-600" />
              },
              {
                title: "Dedicated Account Manager",
                desc: "Get priority engineering assistance. You will be paired with a dedicated specialist for setup, optimization, and troubleshooting.",
                icon: <PhoneCall className="h-6 w-6 text-blue-600" />
              }
            ].map((feature, idx) => (
              <Card key={idx} className="border border-gray-100 hover:shadow-xl transition-all duration-300 rounded-[32px] p-8">
                <CardContent className="space-y-6 p-0">
                  <div className="h-12 w-12 bg-blue-100 rounded-2xl flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Form / Request Quote Section */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <Badge className="bg-blue-100 text-blue-600 border-none px-4 py-1.5 text-xs font-bold uppercase tracking-wider">
                Enterprise Quote
              </Badge>
              <h2 className="text-4xl font-bold text-gray-900 tracking-tight leading-tight">
                Request a custom consultation and quote
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Tell us about your organization's messaging requirements. A KasaNow Enterprise consultant will analyze your needs and respond with a customized volume discount proposal within 2 hours.
              </p>

              <div className="space-y-4">
                {[
                  "Custom service-level agreements (SLA)",
                  "API key testing & integration guidance",
                  "Dedicated test credits to verify routes",
                  "Tailored invoice billing options"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 text-slate-700 font-semibold">
                    <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <Check className="h-3 w-3 text-blue-600 stroke-[3]" />
                    </div>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white border border-gray-200/60 rounded-[48px] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.08)] p-8 md:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-blue-400/5 rounded-full blur-[50px] -mr-32 -mt-32" />
              
              {formSubmitted ? (
                <div className="text-center py-16 space-y-6">
                  <div className="h-20 w-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                    <Check className="h-10 w-10 stroke-[3]" />
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900">Request Received!</h3>
                  <p className="text-slate-500 font-medium">
                    Thank you for reaching out. An Enterprise specialist will contact you at your email address shortly with custom pricing rates.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Name</label>
                    <Input 
                      type="text" 
                      required 
                      placeholder="e.g. John Doe"
                      className="h-12 border-slate-200 rounded-xl"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Work Email</label>
                    <Input 
                      type="email" 
                      required 
                      placeholder="e.g. john@company.com"
                      className="h-12 border-slate-200 rounded-xl"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Company Name</label>
                    <Input 
                      type="text" 
                      required 
                      placeholder="e.g. Acme Corporation"
                      className="h-12 border-slate-200 rounded-xl"
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Estimated Monthly Volume (SMS)</label>
                    <select 
                      className="flex h-12 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
                      value={formData.volume}
                      onChange={(e) => setFormData({...formData, volume: e.target.value})}
                    >
                      <option value="50k-100k">50,000 - 100,000</option>
                      <option value="100k-500k">100,000 - 500,000</option>
                      <option value="500k-1M">500,000 - 1,000,000</option>
                      <option value="1M+">Over 1,000,000</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Additional details or integrations</label>
                    <textarea 
                      placeholder="Tell us about your needs..."
                      className="flex min-h-[100px] w-full rounded-xl border border-slate-200 bg-transparent px-3 py-2 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-[#FF8800] hover:bg-[#FF7700] text-white font-bold h-14 rounded-xl shadow-lg transition-transform hover:scale-[1.02]"
                  >
                    Submit Request <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
