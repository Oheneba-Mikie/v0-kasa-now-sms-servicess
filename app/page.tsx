import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Check,
  Send,
  Globe,
  Users,
  BarChart3,
  Clock,
  Smartphone,
  MessageSquare,
  ArrowRight,
  Star,
  TrendingUp,
  Target,
  Bot,
  Languages,
} from "lucide-react"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white">
        <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#5B6EF5]">
              <Send className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">KasaNow</span>
          </Link>

          <nav className="hidden items-center space-x-8 md:flex">
            <Link href="#features" className="text-sm font-medium text-gray-700 transition-colors hover:text-gray-900">
              Features
            </Link>
            <Link href="#pricing" className="text-sm font-medium text-gray-700 transition-colors hover:text-gray-900">
              Pricing
            </Link>
            <Link href="#use-cases" className="text-sm font-medium text-gray-700 transition-colors hover:text-gray-900">
              Use Cases
            </Link>
            <Link href="#customers" className="text-sm font-medium text-gray-700 transition-colors hover:text-gray-900">
              Customers
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="text-gray-700">
              Sign in
            </Button>
            <Button size="sm" className="bg-[#FF8800] hover:bg-[#FF7700] font-medium">
              Sign up
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section - Ahrefs style with blue background */}
        <section className="bg-[#3A57FC] px-4 py-20 md:py-32">
          <div className="container mx-auto max-w-7xl">
            <div className="mb-12">
              <h1 className="mb-8 max-w-4xl font-normal text-white">Make your business reachable—via SMS, instantly</h1>

              <p className="mb-10 max-w-2xl text-xl leading-relaxed text-white/90">
                See what customers need, send what matters, track your results—that's what an SMS platform should do.
              </p>

              <div className="flex flex-col items-start gap-4 sm:flex-row">
                <Button
                  size="lg"
                  className="h-14 bg-[#FF8800] px-8 text-base font-semibold text-white hover:bg-[#FF7700]"
                >
                  Sign up for KasaNow
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="h-14 border-2 border-white bg-transparent px-8 text-base font-semibold text-white hover:bg-white/10"
                >
                  Start for Free
                </Button>
              </div>

              <p className="mt-6 text-sm text-white/80">
                <span className="font-semibold text-white">21,332</span> users joined KasaNow in the last 7 days
              </p>
            </div>

            {/* Hero Dashboard Preview */}
            <div className="rounded-xl bg-white p-1 shadow-2xl">
              <div className="overflow-hidden rounded-lg">
                <div className="border-b bg-gray-50 px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="text-sm font-semibold text-gray-900">Dashboard Overview</div>
                    <Badge variant="secondary" className="text-xs">
                      Real-time
                    </Badge>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-6 p-8 md:grid-cols-4">
                  <div>
                    <div className="mb-2 text-xs font-medium uppercase tracking-wide text-gray-500">Messages Sent</div>
                    <div className="text-4xl font-bold text-gray-900">28.7M</div>
                    <div className="mt-1 flex items-center text-sm text-green-600">
                      <TrendingUp className="mr-1 h-4 w-4" />
                      +12.5%
                    </div>
                  </div>
                  <div>
                    <div className="mb-2 text-xs font-medium uppercase tracking-wide text-gray-500">Delivery Rate</div>
                    <div className="text-4xl font-bold text-gray-900">99.8%</div>
                    <div className="mt-1 flex items-center text-sm text-green-600">
                      <TrendingUp className="mr-1 h-4 w-4" />
                      +0.3%
                    </div>
                  </div>
                  <div>
                    <div className="mb-2 text-xs font-medium uppercase tracking-wide text-gray-500">Active Users</div>
                    <div className="text-4xl font-bold text-gray-900">50K+</div>
                    <div className="mt-1 flex items-center text-sm text-green-600">
                      <TrendingUp className="mr-1 h-4 w-4" />
                      +18.2%
                    </div>
                  </div>
                  <div>
                    <div className="mb-2 text-xs font-medium uppercase tracking-wide text-gray-500">Countries</div>
                    <div className="text-4xl font-bold text-gray-900">180+</div>
                    <div className="mt-1 text-sm text-gray-500">Global reach</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

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
                  href="#"
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
                  href="#"
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
                  href="#"
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
                  href="#"
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
                  href="#"
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
                  href="#"
                  className="inline-flex items-center text-sm font-semibold text-[#5B6EF5] hover:underline"
                >
                  Inbox Manager → <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Link
                href="#"
                className="inline-flex items-center text-base font-semibold text-[#5B6EF5] hover:underline"
              >
                Explore All Features → <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>

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
              {/* Academy */}
              <div className="group">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-white/10">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-bold">Academy</h3>
                <p className="text-white/80">Take free courses on our academy.</p>
              </div>

              {/* Certification */}
              <div className="group">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-white/10">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 7h-5V4c0-1.1-.9-2-2-2h-2c-1.1 0-2 .9-2 2v3H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zM9 4h6v3H9V4zm11 16H4V9h16v11z" />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-bold">Certification</h3>
                <p className="text-white/80">Get officially KasaNow certified.</p>
              </div>

              {/* Blog */}
              <div className="group">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-white/10">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z" />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-bold">Blog</h3>
                <p className="text-white/80">Read detailed guides and case studies.</p>
              </div>

              {/* Webinars */}
              <div className="group">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-white/10">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5v2h8v-2h5c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 14H3V5h18v12z" />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-bold">Webinars</h3>
                <p className="text-white/80">Watch free live trainings and attend AMAs.</p>
              </div>

              {/* YouTube */}
              <div className="group">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-white/10">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 16.5l6-4.5-6-4.5v9zM23 12s0-3.9-.5-5.8c-.3-1-.9-1.7-1.9-2C18.9 3.7 12 3.7 12 3.7s-6.9 0-8.6.5c-1 .3-1.6 1-1.9 2C1 8.1 1 12 1 12s0 3.9.5 5.8c.3 1 .9 1.7 1.9 2 1.7.5 8.6.5 8.6.5s6.9 0 8.6-.5c1-.3 1.6-1 1.9-2 .5-1.9.5-5.8.5-5.8z" />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-bold">YouTube</h3>
                <p className="text-white/80">Watch binge-worthy tutorials.</p>
              </div>

              {/* Podcast */}
              <div className="group">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-white/10">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-12.5c-2.49 0-4.5 2.01-4.5 4.5s2.01 4.5 4.5 4.5 4.5-2.01 4.5-4.5-2.01-4.5-4.5-4.5zm0 5.5c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-bold">Podcast</h3>
                <p className="text-white/80">Pick the brains of the brightest in the industry.</p>
              </div>

              {/* Events */}
              <div className="group">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-white/10">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z" />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-bold">Events</h3>
                <p className="text-white/80">Meet us in person and attend live events.</p>
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
        </section>

        {/* Final CTA - Matching Ahrefs */}
        <section className="bg-[#5B6EF5] py-20 text-white md:py-32">
          <div className="container mx-auto max-w-7xl px-4 text-center">
            <h2 className="mb-6 text-4xl font-bold md:text-5xl">Stay connected—via SMS, instantly</h2>
            <p className="mb-8 text-lg text-white/80">
              <span className="font-semibold text-white">21,332</span> users joined KasaNow in the last 7 days
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" className="bg-[#FF8800] hover:bg-[#FF7700] text-white font-semibold h-14 px-8">
                Sign up for KasaNow
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white bg-transparent text-white hover:bg-white/10 h-14 px-8"
              >
                Start for Free
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-white py-12">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <div className="mb-4 flex items-center space-x-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#5B6EF5]">
                  <Send className="h-5 w-5 text-white" />
                </div>
                <span className="text-lg font-bold">KasaNow</span>
              </div>
              <p className="text-sm text-gray-600">SMS platform built for everyone</p>
            </div>

            <div>
              <h3 className="mb-4 font-semibold">Product</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <Link href="#" className="hover:text-gray-900">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gray-900">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gray-900">
                    Enterprise
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gray-900">
                    API
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 font-semibold">Resources</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <Link href="#" className="hover:text-gray-900">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gray-900">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gray-900">
                    Support
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gray-900">
                    Community
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 font-semibold">Company</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <Link href="#" className="hover:text-gray-900">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gray-900">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gray-900">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gray-900">
                    Terms
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 border-t pt-8 text-center text-sm text-gray-600">
            © 2025 KasaNow. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
