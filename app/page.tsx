import Link from "next/link"
import NewHero from "@/components/NewHero"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AnimatedText } from "@/components/ui/animated-text"
import {
  Check,
  Send,
  Users,
  BarChart3,
  Clock,
  Smartphone,
  MessageSquare,
  ArrowRight,
  Star,
  TrendingUp,
  BookOpen,
  Code2,
  FileText,
  HelpCircle,
  Video,
  Activity,
} from "lucide-react"
import FAQSection from "@/components/FAQSection"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">


      <main className="flex-1">
        <NewHero />

        {/* Trust Bar */}
        <section className="bg-white py-12">
          <div className="container mx-auto max-w-7xl px-4 text-center">
            <p className="text-sm text-gray-600">
              Marketers at 44% of the Fortune 500 use KasaNow to stay ahead in SMS marketing.
            </p>
          </div>
        </section>

        {/* Features Grid - "Your SMS platform" section */}
        <section id="features" className="bg-gray-50 py-20 md:py-32">
          <div className="container mx-auto max-w-7xl px-4">
            <h2 className="mb-16 text-4xl font-bold text-gray-900 md:text-5xl lg:text-6xl">
              Your SMS platform—built for everyone
            </h2>

            <div className="grid gap-12 lg:grid-cols-2">
              {/* Feature 1 */}
              <div>
                <div className="mb-4 inline-block rounded-lg bg-[#5B6EF5]/10 p-3">
                  <Send className="h-8 w-8 text-[#5B6EF5]" />
                </div>
                <h3 className="mb-3 text-2xl font-bold text-gray-900">Bulk SMS Sending</h3>
                <p className="mb-4 text-gray-600">
                  Send thousands of messages instantly. Upload contacts, write your message, and reach everyone in
                  seconds—no API needed.
                </p>
                <Link
                  href="#feature-bulk-sms"
                  className="inline-flex items-center text-sm font-semibold text-[#5B6EF5] hover:underline"
                >
                  Message Manager → <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>

              {/* Feature 2 */}
              <div>
                <div className="mb-4 inline-block rounded-lg bg-[#5B6EF5]/10 p-3">
                  <BarChart3 className="h-8 w-8 text-[#5B6EF5]" />
                </div>
                <h3 className="mb-3 text-2xl font-bold text-gray-900">Real-Time Analytics</h3>
                <p className="mb-4 text-gray-600">
                  Track delivery rates, engagement metrics, and campaign ROI with comprehensive real-time dashboards.
                </p>
                <Link
                  href="#feature-analytics"
                  className="inline-flex items-center text-sm font-semibold text-[#5B6EF5] hover:underline"
                >
                  Analytics Dashboard → <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>

              {/* Feature 3 */}
              <div>
                <div className="mb-4 inline-block rounded-lg bg-[#5B6EF5]/10 p-3">
                  <Users className="h-8 w-8 text-[#5B6EF5]" />
                </div>
                <h3 className="mb-3 text-2xl font-bold text-gray-900">Contact Management</h3>
                <p className="mb-4 text-gray-600">
                  Organize contacts into segments, import from CSV or CRM, and manage your audience with powerful
                  filtering tools.
                </p>
                <Link
                  href="#feature-contacts"
                  className="inline-flex items-center text-sm font-semibold text-[#5B6EF5] hover:underline"
                >
                  Contact Manager → <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>

              {/* Feature 4 */}
              <div>
                <div className="mb-4 inline-block rounded-lg bg-[#5B6EF5]/10 p-3">
                  <Clock className="h-8 w-8 text-[#5B6EF5]" />
                </div>
                <h3 className="mb-3 text-2xl font-bold text-gray-900">Campaign Scheduling</h3>
                <p className="mb-4 text-gray-600">
                  Plan campaigns in advance with smart scheduling. Set timezone-aware delivery for maximum impact.
                </p>
                <Link
                  href="#feature-scheduling"
                  className="inline-flex items-center text-sm font-semibold text-[#5B6EF5] hover:underline"
                >
                  Campaign Scheduler → <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>

              {/* Feature 5 */}
              <div>
                <div className="mb-4 inline-block rounded-lg bg-[#5B6EF5]/10 p-3">
                  <Smartphone className="h-8 w-8 text-[#5B6EF5]" />
                </div>
                <h3 className="mb-3 text-2xl font-bold text-gray-900">Mobile & Web Access</h3>
                <p className="mb-4 text-gray-600">
                  Send from anywhere with responsive web interface and dedicated mobile apps for iOS and Android.
                </p>
                <Link
                  href="#feature-access"
                  className="inline-flex items-center text-sm font-semibold text-[#5B6EF5] hover:underline"
                >
                  Mobile Apps → <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>

              {/* Feature 6 */}
              <div>
                <div className="mb-4 inline-block rounded-lg bg-[#5B6EF5]/10 p-3">
                  <MessageSquare className="h-8 w-8 text-[#5B6EF5]" />
                </div>
                <h3 className="mb-3 text-2xl font-bold text-gray-900">Two-Way Messaging</h3>
                <p className="mb-4 text-gray-600">
                  Receive replies, manage conversations, and engage with customers through our unified inbox.
                </p>
                <Link
                  href="#feature-inbox"
                  className="inline-flex items-center text-sm font-semibold text-[#5B6EF5] hover:underline"
                >
                  Inbox Manager → <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>

          </div>
        </section>

        {/* Expanded Feature Details Map */}
        {[
          {
            id: "feature-bulk-sms",
            badge: "Message Manager",
            title: "Reach thousands in milliseconds.",
            highlight: "milliseconds",
            desc: "Our Bulk SMS Sending tool is designed for speed and simplicity. Whether you are sending a quick promotional blast or critical alerts, our intuitive interface ensures you get your message out reliably—no API coding required.",
            points: ["Instant upload via CSV or Excel", "Automated duplicate removal", "Dynamic personalization options"],
            cta: "Start Sending Today"
          },
          {
            id: "feature-analytics",
            badge: "Analytics Dashboard",
            title: "Turn data into actionable insights.",
            highlight: "actionable insights",
            desc: "Stop guessing if your messages are working. Get real-time delivery reports, open rates, and bounce details directly on your beautiful dashboard to optimize campaigns instantly.",
            points: ["Real-time delivery status", "Campaign ROI tracking", "Exportable PDF/CSV reports"],
            cta: "View Dashboard Demo",
            reverse: true
          },
          {
            id: "feature-contacts",
            badge: "Contact Manager",
            title: "Audience segmentation made effortless.",
            highlight: "effortless",
            desc: "Manage massive lists of contacts without a dedicated CRM. Group your audiences by location, tags, or behavior to ensure you are targeting exactly the right people at the right time.",
            points: ["Unlimited contact groups", "Bulk import capability", "Opt-out management automation"],
            cta: "Organize Contacts"
          },
          {
            id: "feature-scheduling",
            badge: "Campaign Scheduler",
            title: "Set it and forget it scheduling.",
            highlight: "forget it",
            desc: "Plan your marketing calendar months in advance. Draft your messages now, pick the perfect date and timezone, and let KasaNow automatically dispatch them while you focus on your business.",
            points: ["Timezone-aware dispatching", "Recurring message automation", "Cancel or pause anytime before launch"],
            cta: "Automate Campaigns",
            reverse: true
          },
          {
            id: "feature-access",
            badge: "Mobile & Web Apps",
            title: "Full control from your pocket.",
            highlight: "your pocket",
            desc: "Your business doesn’t stop when you leave your desk. Use our native iOS and Android apps or our responsive web platform to shoot off quick updates or monitor campaigns from anywhere in the world.",
            points: ["Native iOS & Android integration", "Real-time push notifications", "Secure biometric login"],
            cta: "Download the App"
          },
          {
            id: "feature-inbox",
            badge: "Two-Way Inbox",
            title: "Conversations, not just broadcasts.",
            highlight: "Conversations",
            desc: "Texting shouldn't be a one-way street. Engage in live chats with your customers straight from a unified inbox. Provide support, answer queries, and build loyalty directly via SMS.",
            points: ["Threaded unified inbox", "Auto-responders for off-hours", "Assign chats to team members"],
            cta: "Start Engaging",
            reverse: true
          }
        ].map((feature) => (
          <section key={feature.id} id={feature.id} className={`py-20 md:py-32 overflow-hidden ${feature.reverse ? 'bg-gray-50' : 'bg-white'}`}>
            <div className="container mx-auto max-w-7xl px-4">
              <div className={`flex flex-col lg:flex-row items-center gap-16 ${feature.reverse ? 'lg:flex-row-reverse' : ''}`}>
                <div className="w-full lg:w-1/2">
                  <Badge className="mb-6 bg-[#3A57FC]/10 text-[#3A57FC] hover:bg-[#3A57FC]/20 border-none px-4 py-1.5 text-sm tracking-wide">{feature.badge}</Badge>
                  <h2 className="text-3xl font-bold text-gray-900 md:text-5xl lg:text-5xl mb-6 leading-tight">
                    {feature.title.split(feature.highlight)[0]}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3A57FC] to-[#0EA5E9]">{feature.highlight}</span>
                    {feature.title.split(feature.highlight)[1] || ''}
                  </h2>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-xl">
                    {feature.desc}
                  </p>
                  <ul className="space-y-4 mb-10 max-w-lg">
                    {feature.points.map((pt, i) => (
                      <li key={i} className="flex items-center gap-4 text-gray-700 font-medium">
                        <div className="flex h-7 w-7 rounded-full bg-[#10B981]/15 items-center justify-center text-[#10B981] shadow-sm flex-shrink-0">
                          <Check className="h-4 w-4 stroke-[3]" />
                        </div>
                        {pt}
                      </li>
                    ))}
                  </ul>
                  <Link href="/sign-up">
                    <Button className="bg-[#F97316] hover:bg-[#EA580C] text-white rounded-xl px-8 h-14 text-base font-bold shadow-[0_8px_20px_-8px_rgba(249,115,22,0.6)] hover:shadow-[0_8px_25px_-8px_rgba(249,115,22,0.8)] hover:scale-105 transition-all inline-flex items-center gap-2">
                      {feature.cta} <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
                <div className="w-full lg:w-1/2 relative">
                  <div className={`absolute inset-0 bg-gradient-to-tr ${feature.reverse ? 'from-[#FF8800]/20 to-[#3A57FC]/20' : 'from-[#3A57FC]/20 to-[#10B981]/20'} rounded-[40px] blur-3xl`} />
                  <div className="relative bg-white border border-gray-100 rounded-[32px] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] p-3 md:p-4 hover:scale-[1.02] transition-transform duration-500">
                     {/* Abstract UI Mockup Box */}
                     <div className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-100 flex flex-col h-[380px] md:h-[450px]">
                        <div className="bg-white border-b border-slate-100 px-6 py-4 flex items-center justify-between shadow-sm z-10">
                           <div className="flex gap-2.5">
                              <div className="w-3 h-3 rounded-full bg-[#EF4444]"></div>
                              <div className="w-3 h-3 rounded-full bg-[#F59E0B]"></div>
                              <div className="w-3 h-3 rounded-full bg-[#10B981]"></div>
                           </div>
                           <div className="text-xs font-bold text-slate-400 tracking-wider uppercase">{feature.badge}</div>
                        </div>
                        <div className="p-0 flex-1 flex flex-col relative overflow-hidden bg-slate-50 w-full">
                            {feature.id === "feature-bulk-sms" && (
                                <div className="p-6 w-full h-full flex flex-col gap-4">
                                    <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200">
                                        <label className="text-xs font-bold text-slate-500 mb-1 block">To:</label>
                                        <div className="flex flex-wrap gap-2 mb-1">
                                            <span className="bg-[#3A57FC]/10 text-[#3A57FC] text-xs px-2.5 py-1 rounded-md font-semibold">All Customers (5,241)</span>
                                            <span className="bg-[#10B981]/10 text-[#10B981] text-xs px-2.5 py-1 rounded-md font-semibold">VIP Group</span>
                                        </div>
                                    </div>
                                    <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 flex-1 flex flex-col">
                                        <label className="text-xs font-bold text-slate-500 mb-2 block">Message:</label>
                                        <p className="text-sm text-slate-600 mb-2 leading-relaxed">
                                            Hi <span className="bg-orange-100 text-orange-700 px-1 rounded">{'{First Name}'}</span>, our exclusive 50% off weekend sale starts now! Click here to shop: <span className="text-blue-500 underline">https://ksnw.co/sale</span>
                                        </p>
                                        <div className="mt-auto flex justify-between items-center border-t border-slate-100 pt-3">
                                            <span className="text-xs font-semibold text-slate-400">1 SMS (104 chars)</span>
                                            <div className="bg-[#3A57FC] text-white text-[11px] font-bold px-4 py-2 rounded-lg shadow-sm flex items-center gap-1">
                                                Send Now <Send className="w-3 h-3"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {feature.id === "feature-analytics" && (
                                <div className="p-6 w-full h-full flex flex-col gap-4 overflow-hidden">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200">
                                            <div className="text-xs font-bold text-slate-500 mb-1">Delivery Rate</div>
                                            <div className="text-2xl font-black text-[#10B981]">99.8%</div>
                                        </div>
                                        <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200">
                                            <div className="text-xs font-bold text-slate-500 mb-1">Click Rate</div>
                                            <div className="text-2xl font-black text-[#F97316]">24.5%</div>
                                        </div>
                                    </div>
                                    <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200 flex-1 flex flex-col justify-end gap-2">
                                        <div className="text-xs font-bold text-slate-500 mb-2">Campaign Performance (7 days)</div>
                                        <div className="flex items-end justify-between h-28 gap-2 mt-auto">
                                            {[40, 70, 45, 90, 65, 100, 80].map((h, i) => (
                                                <div key={i} className="w-full bg-[#3A57FC] rounded-t-md" style={{height: `${h}%`, opacity: 0.4 + (0.6 * (i/7))}}></div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}
                            {feature.id === "feature-contacts" && (
                                <div className="p-6 w-full h-full flex flex-col gap-3">
                                    <div className="flex justify-between items-center mb-2">
                                        <div className="bg-white px-3 py-2 rounded-lg border border-slate-200 text-xs font-semibold text-slate-400 w-1/2 flex items-center shadow-sm">Search contacts...</div>
                                        <div className="bg-[#3A57FC] text-white px-3 py-2 rounded-lg text-xs font-bold shadow-sm">+ Import CSV</div>
                                    </div>
                                    {[
                                        { name: "Kwame Mensah", phone: "+233 24 123 4567", tag: "VIP" },
                                        { name: "Abena Osei", phone: "+233 55 987 6543", tag: "New" },
                                        { name: "John Doe", phone: "+1 415 555 2671", tag: "International" },
                                        { name: "Ama Serwaa", phone: "+233 20 444 9999", tag: "VIP" }
                                    ].map((contact, i) => (
                                        <div key={i} className="bg-white p-3 rounded-xl shadow-sm border border-slate-100 flex justify-between items-center">
                                            <div className="flex items-center gap-3">
                                                <div className="w-9 h-9 rounded-full bg-[#3A57FC]/10 flex items-center justify-center text-xs font-bold text-[#3A57FC]">{contact.name.charAt(0)}</div>
                                                <div>
                                                    <div className="text-sm font-bold text-slate-800">{contact.name}</div>
                                                    <div className="text-[11px] font-medium text-slate-400">{contact.phone}</div>
                                                </div>
                                            </div>
                                            <div className={`text-[10px] font-bold px-2.5 py-1 rounded-md ${contact.tag === 'VIP' ? 'bg-[#F97316]/10 text-[#F97316]' : 'bg-slate-100 text-slate-500'}`}>{contact.tag}</div>
                                        </div>
                                    ))}
                                </div>
                            )}
                            {feature.id === "feature-scheduling" && (
                                <div className="p-6 w-full h-full flex flex-col gap-4 relative overflow-y-auto">
                                    <div className="absolute left-10 top-8 bottom-8 w-0.5 bg-slate-200"></div>
                                    {[
                                        { time: "Today, 10:00 AM", title: "Flash Sale Alert", status: "Sent", color: "bg-[#10B981]" },
                                        { time: "Tomorrow, 2:00 PM", title: "Weekend Promo", status: "Scheduled", color: "bg-[#F97316]" },
                                        { time: "Dec 25, 9:00 AM", title: "Holiday Greetings", status: "Draft", color: "bg-slate-400" },
                                    ].map((event, i) => (
                                        <div key={i} className="flex gap-4 relative z-10">
                                            <div className={`mt-2 w-4 h-4 rounded-full border-[3px] border-white shadow-sm ${event.color} flex-shrink-0`}></div>
                                            <div className="bg-white flex-1 p-4 rounded-xl shadow-sm border border-slate-200">
                                                <div className="flex justify-between items-start mb-1.5">
                                                    <div className="text-sm font-bold text-slate-800">{event.title}</div>
                                                    <div className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${event.status === 'Sent' ? 'bg-green-100 text-green-700' : event.status === 'Scheduled' ? 'bg-orange-100 text-orange-700' : 'bg-slate-100 text-slate-600'}`}>{event.status}</div>
                                                </div>
                                                <div className="text-xs font-semibold text-slate-400 flex items-center gap-1">
                                                    <Clock className="w-3 h-3" /> {event.time}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                            {feature.id === "feature-access" && (
                                <div className="p-6 w-full h-full flex items-center justify-center bg-slate-100/50">
                                    <div className="w-[230px] h-[360px] bg-white rounded-[32px] shadow-xl border-[6px] border-slate-800 p-0 flex flex-col relative overflow-hidden">
                                        {/* Phone Notch */}
                                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 bg-slate-800 rounded-b-xl z-20"></div>
                                        {/* App Header */}
                                        <div className="bg-[#3A57FC] text-white pt-9 pb-3 px-5 rounded-t-[20px] flex justify-between items-center text-sm font-bold shadow-md z-10">
                                            <span>KasaNow</span>
                                            <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">+</div>
                                        </div>
                                        {/* App Body */}
                                        <div className="flex-1 bg-slate-50 p-4 flex flex-col gap-4 overflow-hidden">
                                            <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
                                                <div className="text-[10px] font-bold text-slate-400 mb-1 uppercase tracking-wider">Total Sent Today</div>
                                                <div className="text-2xl font-black text-slate-800">14,205</div>
                                            </div>
                                            <div className="flex justify-between items-center px-1 mt-1">
                                               <span className="text-xs font-bold text-slate-700">Active Campaigns</span>
                                               <span className="text-[10px] font-bold text-[#3A57FC]">View All</span>
                                            </div>
                                            <div className="bg-white p-3 rounded-2xl shadow-sm border border-slate-100">
                                                <div className="text-[11px] font-bold text-slate-800 mb-1">Weekend Promo</div>
                                                <div className="text-[10px] text-slate-500 mb-2.5">Sent to 8,432 contacts</div>
                                                <div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden"><div className="bg-[#10B981] h-1.5 rounded-full" style={{width: '98%'}}></div></div>
                                            </div>
                                        </div>
                                        {/* App Nav */}
                                        <div className="h-12 bg-white border-t border-slate-100 flex justify-around items-center px-4 pb-1">
                                            <div className="w-5 h-5 rounded-full bg-[#3A57FC]"></div>
                                            <div className="w-5 h-5 rounded-full bg-slate-200"></div>
                                            <div className="w-5 h-5 rounded-full bg-slate-200"></div>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {feature.id === "feature-inbox" && (
                                <div className="p-0 w-full h-full flex flex-col bg-white">
                                    <div className="p-4 border-b border-slate-100 flex items-center gap-3 bg-white shadow-sm z-10">
                                        <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center font-bold text-[#F97316] text-sm"> JD </div>
                                        <div>
                                            <div className="text-sm font-bold text-slate-800">John Doe</div>
                                            <div className="text-[11px] font-semibold text-[#10B981] flex items-center gap-1">
                                                <div className="w-1.5 h-1.5 rounded-full bg-[#10B981]"></div> Online
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex-1 p-4 bg-[#F8FAFC] flex flex-col gap-3 overflow-y-auto">
                                        <div className="bg-[#3A57FC] text-white p-3 rounded-2xl rounded-tr-sm text-xs shadow-sm max-w-[85%] self-end">
                                            Hi John, your order #4492 has been shipped! Track it here: ksnw.co/trk
                                        </div>
                                        <div className="bg-white border border-slate-200 text-slate-700 p-3 rounded-2xl rounded-tl-sm text-xs shadow-sm max-w-[85%] self-start">
                                            Thanks! Do you know what time it will arrive?
                                        </div>
                                        <div className="bg-[#3A57FC] text-white p-3 rounded-2xl rounded-tr-sm text-xs shadow-sm max-w-[85%] self-end">
                                            It should arrive by 3:00 PM today. We will send another SMS when it drops.
                                        </div>
                                    </div>
                                    <div className="p-3 border-t border-slate-100 bg-white flex gap-2 items-center">
                                        <div className="flex-1 bg-slate-100 rounded-full h-10 px-4 text-xs text-slate-400 flex items-center border border-slate-200">Type your reply...</div>
                                        <div className="w-10 h-10 rounded-full bg-[#F97316] flex items-center justify-center text-white shadow-sm hover:scale-105 transition-transform">
                                            <Send className="h-4 w-4 ml-0.5" />
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                     </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* AI Section - Matching Ahrefs AI features */}

        {/* Big Data Section - Matching Ahrefs */}
        <section className="bg-gray-50 py-20 md:py-32">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="mb-12">
              <Badge className="mb-4 bg-[#5B6EF5] text-white hover:bg-[#5B6EF5]/90">KASANOW BIG DATA</Badge>
              <h2 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">
                Lead with infrastructure built for scale
              </h2>
              <p className="max-w-3xl text-xl text-gray-600">
                With our global carrier network and real-time delivery tracking, we ensure every message reaches its
                destination—fast, reliably, and securely.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <Card className="border-2">
                <CardContent className="p-8 text-center">
                  <div className="mb-4 text-5xl font-bold text-[#5B6EF5]">#1</div>
                  <div className="mb-2 text-lg font-bold text-gray-900">SMS Delivery Rate</div>
                  <p className="text-sm text-gray-600">Industry-leading 99.8% delivery success</p>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="p-8 text-center">
                  <div className="mb-4 text-5xl font-bold text-[#5B6EF5]">500M+</div>
                  <div className="mb-2 text-lg font-bold text-gray-900">Messages Delivered</div>
                  <p className="text-sm text-gray-600">Trusted by businesses worldwide</p>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="p-8 text-center">
                  <div className="mb-4 text-5xl font-bold text-[#5B6EF5]">180+</div>
                  <div className="mb-2 text-lg font-bold text-gray-900">Countries Covered</div>
                  <p className="text-sm text-gray-600">Global reach with local reliability</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Role-Based Use Cases - Matching Ahrefs */}
        <section id="use-cases" className="bg-white py-20 md:py-32">
          <div className="container mx-auto max-w-7xl px-4">
            <h2 className="mb-16 text-4xl font-bold text-gray-900 md:text-5xl lg:text-6xl">
              Whatever your role, KasaNow gives you an edge
            </h2>

            <div className="grid gap-8 lg:grid-cols-2">
              {/* Marketing Teams */}
              <Card className="border-2">
                <CardContent className="p-8">
                  <h3 className="mb-6 text-2xl font-bold">Marketing Teams</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-[#5B6EF5]" />
                      <span className="text-gray-700">Launch promotional campaigns in minutes</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-[#5B6EF5]" />
                      <span className="text-gray-700">Track engagement and ROI with detailed analytics</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-[#5B6EF5]" />
                      <span className="text-gray-700">A/B test messages for maximum impact</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-[#5B6EF5]" />
                      <span className="text-gray-700">Segment audiences for personalized outreach</span>
                    </li>
                  </ul>
                  <Link
                    href="#"
                    className="mt-6 inline-flex items-center text-sm font-semibold text-[#5B6EF5] hover:underline"
                  >
                    Learn more → <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>

              {/* E-commerce */}
              <Card className="border-2">
                <CardContent className="p-8">
                  <h3 className="mb-6 text-2xl font-bold">E-commerce</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-[#5B6EF5]" />
                      <span className="text-gray-700">Send order confirmations and shipping updates</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-[#5B6EF5]" />
                      <span className="text-gray-700">Recover abandoned carts with timely reminders</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-[#5B6EF5]" />
                      <span className="text-gray-700">Drive flash sales with instant notifications</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-[#5B6EF5]" />
                      <span className="text-gray-700">Build customer loyalty with exclusive offers</span>
                    </li>
                  </ul>
                  <Link
                    href="#"
                    className="mt-6 inline-flex items-center text-sm font-semibold text-[#5B6EF5] hover:underline"
                  >
                    Learn more → <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>

              {/* Healthcare */}
              <Card className="border-2">
                <CardContent className="p-8">
                  <h3 className="mb-6 text-2xl font-bold">Healthcare</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-[#5B6EF5]" />
                      <span className="text-gray-700">Send appointment reminders to reduce no-shows</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-[#5B6EF5]" />
                      <span className="text-gray-700">Deliver test results and health updates securely</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-[#5B6EF5]" />
                      <span className="text-gray-700">HIPAA-compliant messaging infrastructure</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-[#5B6EF5]" />
                      <span className="text-gray-700">Emergency alerts and health notifications</span>
                    </li>
                  </ul>
                  <Link
                    href="#"
                    className="mt-6 inline-flex items-center text-sm font-semibold text-[#5B6EF5] hover:underline"
                  >
                    Learn more → <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>

              {/* Small Business */}
              <Card className="border-2">
                <CardContent className="p-8">
                  <h3 className="mb-6 text-2xl font-bold">Small Business</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-[#5B6EF5]" />
                      <span className="text-gray-700">Affordable pricing with no hidden fees</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-[#5B6EF5]" />
                      <span className="text-gray-700">No technical skills required—start in 5 minutes</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-[#5B6EF5]" />
                      <span className="text-gray-700">Connect with local customers effectively</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-[#5B6EF5]" />
                      <span className="text-gray-700">Scale as your business grows</span>
                    </li>
                  </ul>
                  <Link
                    href="#"
                    className="mt-6 inline-flex items-center text-sm font-semibold text-[#5B6EF5] hover:underline"
                  >
                    Learn more → <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Enterprise Section - Matching Ahrefs Enterprise */}
        <section className="bg-gray-900 py-20 text-white md:py-32">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="mb-16">
              <h2 className="mb-6 text-4xl font-bold md:text-5xl">KasaNow Enterprise—Scale with confidence</h2>
              <p className="max-w-3xl text-xl text-white/80">
                Advanced features, dedicated support, and enterprise-grade security for organizations that need more.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div>
                <h3 className="mb-3 text-xl font-bold">API Access</h3>
                <p className="text-white/70">
                  Power custom integrations, internal tools, and automated workflows with our flexible REST API.
                </p>
              </div>

              <div>
                <h3 className="mb-3 text-xl font-bold">Dedicated Support</h3>
                <p className="text-white/70">
                  Get priority support with dedicated account managers and 24/7 technical assistance.
                </p>
              </div>

              <div>
                <h3 className="mb-3 text-xl font-bold">Custom Reporting</h3>
                <p className="text-white/70">
                  Build custom dashboards and reports tailored to your business metrics and KPIs.
                </p>
              </div>

              <div>
                <h3 className="mb-3 text-xl font-bold">Single Sign-On</h3>
                <p className="text-white/70">
                  Integrate with your existing identity provider for seamless access control.
                </p>
              </div>

              <div>
                <h3 className="mb-3 text-xl font-bold">Compliance & Security</h3>
                <p className="text-white/70">ISO27001 certified, GDPR compliant, with bank-level encryption.</p>
              </div>

              <div>
                <h3 className="mb-3 text-xl font-bold">Volume Discounts</h3>
                <p className="text-white/70">
                  Enterprise pricing scales with your usage—the more you send, the less you pay.
                </p>
              </div>
            </div>

            <div className="mt-12">
              <Button size="lg" className="bg-[#FF8800] hover:bg-[#FF7700] text-white font-semibold">
                Contact Sales
              </Button>
            </div>
          </div>
        </section>

        {/* Support Resources - Matching Ahrefs */}
        <section className="bg-[#5B6EF5] py-20 text-white md:py-32">
          <div className="container mx-auto max-w-7xl px-4">
            <h2 className="mb-6 text-center text-4xl font-normal leading-tight md:text-5xl lg:text-6xl">
              We'll support you all the way—whatever your question, there's a guide, video, or real human ready to help
            </h2>

            <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* Documentation */}
              <div className="group">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-white/10">
                  <BookOpen className="h-6 w-6 text-white" />
                </div>
                <h3 className="mb-2 text-xl font-bold">Documentation</h3>
                <p className="text-white/80">Comprehensive guides for developers and marketers.</p>
              </div>

              {/* API Reference */}
              <div className="group">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-white/10">
                  <Code2 className="h-6 w-6 text-white" />
                </div>
                <h3 className="mb-2 text-xl font-bold">API Reference</h3>
                <p className="text-white/80">Complete API endpoints and code examples.</p>
              </div>

              {/* Case Studies */}
              <div className="group">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-white/10">
                  <FileText className="h-6 w-6 text-white" />
                </div>
                <h3 className="mb-2 text-xl font-bold">Case Studies</h3>
                <p className="text-white/80">See how other businesses use KasaNow.</p>
              </div>

              {/* Help Center */}
              <div className="group">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-white/10">
                  <HelpCircle className="h-6 w-6 text-white" />
                </div>
                <h3 className="mb-2 text-xl font-bold">Help Center</h3>
                <p className="text-white/80">Find answers to common questions immediately.</p>
              </div>

              {/* Video Tutorials */}
              <div className="group">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-white/10">
                  <Video className="h-6 w-6 text-white" />
                </div>
                <h3 className="mb-2 text-xl font-bold">Video Tutorials</h3>
                <p className="text-white/80">Watch step-by-step guides on our channel.</p>
              </div>

              {/* System Status */}
              <div className="group">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-white/10">
                  <Activity className="h-6 w-6 text-white" />
                </div>
                <h3 className="mb-2 text-xl font-bold">System Status</h3>
                <p className="text-white/80">Check real-time uptime and performance.</p>
              </div>
            </div>


            {/* Orange Stats Banner */}
            <div className="mt-20 rounded-2xl bg-[#FF8800] p-12 md:p-16">
              <div className="grid gap-8 lg:grid-cols-2">
                <div className="flex items-center">
                  <p className="text-2xl font-normal leading-relaxed md:text-3xl">
                    Responsive, reliable, multilingual <span className="font-bold">world-class customer support</span>
                    —available 5 days a week when you need it most.
                  </p>
                </div>
                <div className="grid gap-8 sm:grid-cols-2">
                  <div>
                    <div className="mb-2 text-6xl font-bold md:text-7xl">90%</div>
                    <div className="text-xl font-medium">Satisfaction rating</div>
                  </div>
                  <div>
                    <div className="mb-2 text-6xl font-bold md:text-7xl">6:41m</div>
                    <div className="text-xl font-medium">Median first response time</div>
                  </div>
                  <div className="sm:col-span-2">
                    <div className="mb-2 text-6xl font-bold md:text-7xl">91,418</div>
                    <div className="text-xl font-medium">Closed conversations</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Customer Testimonials - Matching Ahrefs */}
        <section id="customers" className="bg-gray-50 py-20 md:py-32">
          <div className="container mx-auto max-w-7xl px-4">
            <h2 className="mb-16 text-center text-4xl font-bold text-gray-900 md:text-5xl">
              KasaNow is how modern businesses communicate
            </h2>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card className="border-2">
                <CardContent className="p-8">
                  <div className="mb-4 flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-[#FF8800] text-[#FF8800]" />
                    ))}
                  </div>
                  <p className="mb-6 text-gray-700">
                    "KasaNow transformed how we reach customers. Setup took 5 minutes and we saw immediate results. The
                    delivery rates are outstanding."
                  </p>
                  <div>
                    <div className="font-bold text-gray-900">Sarah Johnson</div>
                    <div className="text-sm text-gray-600">Marketing Director, TechStart Inc</div>
                  </div>
                  <div className="mt-4 text-sm font-semibold text-[#5B6EF5]">
                    <span className="text-2xl font-bold text-gray-900">12K+</span> messages sent monthly
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="p-8">
                  <div className="mb-4 flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-[#FF8800] text-[#FF8800]" />
                    ))}
                  </div>
                  <p className="mb-6 text-gray-700">
                    "We switched from a complex API solution to KasaNow. Our team loves the simplicity and the cost
                    savings are significant."
                  </p>
                  <div>
                    <div className="font-bold text-gray-900">Michael Chen</div>
                    <div className="text-sm text-gray-600">CTO, RetailHub</div>
                  </div>
                  <div className="mt-4 text-sm font-semibold text-[#5B6EF5]">
                    <span className="text-2xl font-bold text-gray-900">50%</span> cost reduction
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="p-8">
                  <div className="mb-4 flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-[#FF8800] text-[#FF8800]" />
                    ))}
                  </div>
                  <p className="mb-6 text-gray-700">
                    "The analytics dashboard gives us insights we never had before. We can track every campaign and
                    optimize in real-time."
                  </p>
                  <div>
                    <div className="font-bold text-gray-900">Emily Rodriguez</div>
                    <div className="text-sm text-gray-600">Growth Lead, FitnessPro</div>
                  </div>
                  <div className="mt-4 text-sm font-semibold text-[#5B6EF5]">
                    <span className="text-2xl font-bold text-gray-900">3x</span> engagement increase
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-16 flex flex-wrap items-center justify-center gap-8">
              <div className="text-center">
                <div className="mb-2 text-sm font-medium text-gray-600">Rated on Capterra</div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold">4.8</span>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-[#FF8800] text-[#FF8800]" />
                    ))}
                  </div>
                </div>
              </div>

              <div className="text-center">
                <div className="mb-2 text-sm font-medium text-gray-600">Rated on G2</div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold">4.7</span>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-[#FF8800] text-[#FF8800]" />
                    ))}
                  </div>
                </div>
              </div>

              <div className="text-center">
                <div className="mb-2 text-sm font-medium text-gray-600">Rated on Trustpilot</div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold">4.9</span>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-[#FF8800] text-[#FF8800]" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section >

        <FAQSection />

        {/* Final CTA - Matching Ahrefs */}
        < section className="bg-[#5B6EF5] py-20 text-white md:py-32" >
          <div className="container mx-auto max-w-7xl px-4 text-center">
            <h2 className="mb-6 text-4xl font-bold md:text-5xl">Stay connected—via SMS, instantly</h2>
            <p className="mb-8 text-lg text-white/80">
              <span className="font-semibold text-white">21,332</span> users joined KasaNow in the last 7 days
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/waitlist">
                <Button size="lg" className="bg-[#FF8800] hover:bg-[#FF7700] text-white font-semibold h-14 px-8">
                  Join Waitlist
                </Button>
              </Link>
              <Link href="/waitlist">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white bg-transparent text-white hover:bg-white/10 h-14 px-8"
                >
                  Join Waitlist
                </Button>
              </Link>
            </div>
          </div>
        </section >
      </main >


    </div >
  )
}
