import { Metadata } from 'next'
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
    Code2,
    Terminal,
    Copy,
    ShieldCheck,
    Zap,
    BookOpen,
    ChevronRight,
    Database,
    Lock,
    Globe
} from "lucide-react"

export const metadata: Metadata = {
    title: "KasaNow SMS API Documentation - Developer Guide",
    description: "Complete REST API reference for KasaNow SMS. Authenticate, send messages, and track delivery with our developer-first messaging infrastructure.",
    keywords: "SMS API documentation, messaging SDK, REST API Ghana",
}

export default function DocsPage() {
    return (
        <div className="flex flex-col bg-white">
            {/* Hero */}
            <section className="bg-blue-gradient py-20 text-white">
                <div className="container mx-auto max-w-7xl px-4">
                    <div className="max-w-3xl">
                        <Badge className="mb-6 bg-white/10 text-white border-white/20 px-4 py-1.5 text-xs font-bold uppercase tracking-wider">Developer Portal</Badge>
                        <h1 className="text-5xl font-extrabold tracking-tighter mb-6 italic">Build the future of communication</h1>
                        <p className="text-white/70 text-xl leading-relaxed">Integrated messaging for any application. Use our REST API to send SMS, OTPs, and track delivery with a few lines of code.</p>
                    </div>
                </div>
            </section>

            <div className="container mx-auto max-w-7xl px-4 py-16">
                <div className="flex flex-col lg:flex-row gap-16">

                    {/* Sidebar Navigation */}
                    <aside className="lg:w-1/4 space-y-12">
                        <div>
                            <h3 className="text-sm font-black text-gray-400 uppercase tracking-[0.2em] mb-6">Introduction</h3>
                            <ul className="space-y-4 font-bold text-gray-700">
                                <li className="text-blue-600">Quick Start Guide</li>
                                <li className="hover:text-blue-600 cursor-pointer">Postman Collection</li>
                                <li className="hover:text-blue-600 cursor-pointer">Official SDKs</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-sm font-black text-gray-400 uppercase tracking-[0.2em] mb-6">API Fundamentals</h3>
                            <ul className="space-y-4 font-bold text-gray-700">
                                <li className="hover:text-blue-600 cursor-pointer">Authentication</li>
                                <li className="hover:text-blue-600 cursor-pointer">Rate Limiting</li>
                                <li className="hover:text-blue-600 cursor-pointer">Error Codes</li>
                                <li className="hover:text-blue-600 cursor-pointer">Webhooks</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-sm font-black text-gray-400 uppercase tracking-[0.2em] mb-6">Endpoints</h3>
                            <ul className="space-y-4 font-bold text-gray-700">
                                <li className="hover:text-blue-600 cursor-pointer">Send SMS</li>
                                <li className="hover:text-blue-600 cursor-pointer">Bulk Messaging</li>
                                <li className="hover:text-blue-600 cursor-pointer">Verification (OTP)</li>
                                <li className="hover:text-blue-600 cursor-pointer">Delivery Reports</li>
                            </ul>
                        </div>
                    </aside>

                    {/* Content Area */}
                    <main className="lg:w-3/4 space-y-24 pb-32">

                        {/* Quick Start */}
                        <section id="auth" className="space-y-8">
                            <h2 className="text-4xl font-black text-[#1E3A8A] tracking-tight">Authentication</h2>
                            <p className="text-gray-600 text-lg">The KasaNow API uses API keys to authenticate requests. You can view and manage your API keys in the KasaNow Dashboard.</p>

                            <div className="p-8 bg-blue-50 border border-blue-100 rounded-[32px] space-y-4">
                                <div className="flex items-center gap-3 text-blue-800 font-bold">
                                    <Lock className="h-5 w-5" /> Your API Key should be kept secret!
                                </div>
                                <p className="text-blue-800/60 text-sm">Authentication is performed via the `Authorization` header. You must include your secret key in all requests.</p>
                            </div>

                            <div className="bg-[#0F172A] rounded-[32px] p-8 text-sm font-mono shadow-2xl relative">
                                <div className="absolute top-6 right-8 text-white/30 hover:text-white cursor-pointer transition-colors"><Copy className="h-5 w-5" /></div>
                                <div className="text-blue-400">Authorization: <span className="text-white">Bearer YOUR_API_KEY</span></div>
                            </div>
                        </section>

                        {/* Send SMS Endpoint */}
                        <section id="send-sms" className="space-y-8">
                            <div className="flex items-center gap-4">
                                <Badge className="bg-blue-600 text-white font-bold h-8 px-4 rounded-lg">POST</Badge>
                                <code className="text-xl font-bold font-mono text-gray-800">/v1/sms/send</code>
                            </div>
                            <h3 className="text-2xl font-black text-[#1E3A8A]">Send a Single SMS</h3>
                            <p className="text-gray-600">This endpoint allows you to send a single SMS message to any Ghanaian or international mobile number.</p>

                            <div className="grid gap-8 bg-gray-50 p-10 rounded-[40px] border border-gray-100">
                                <div>
                                    <h4 className="font-black text-[#1E3A8A] mb-6 uppercase text-xs tracking-widest">Parameters</h4>
                                    <div className="space-y-6">
                                        {[
                                            { name: "to", type: "string", desc: "The recipient phone number in E.164 format (e.g. +233241234567)." },
                                            { name: "message", type: "string", desc: "The content of the message (Up to 160 chars for 1 credit)." },
                                            { name: "sender_id", type: "string", desc: "Your registered Sender ID (Approved by KasaNow/NCA)." },
                                        ].map((param, i) => (
                                            <div key={i} className="flex gap-6 pb-6 border-b border-gray-100 last:border-0">
                                                <div className="w-1/3">
                                                    <div className="font-bold text-blue-600 font-mono text-sm">{param.name}</div>
                                                    <div className="text-[10px] font-black uppercase text-gray-400 mt-1">{param.type}</div>
                                                </div>
                                                <div className="text-sm text-gray-600">{param.desc}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Code Example Tabs */}
                            <div className="space-y-4">
                                <div className="flex gap-4">
                                    <Badge className="bg-blue-600 text-white cursor-pointer px-4 py-2">Node.js</Badge>
                                    <Badge className="bg-gray-100 text-gray-400 cursor-pointer px-4 py-2 hover:bg-gray-200">PHP</Badge>
                                    <Badge className="bg-gray-100 text-gray-400 cursor-pointer px-4 py-2 hover:bg-gray-200">Python</Badge>
                                </div>
                                <div className="bg-[#0F172A] rounded-[32px] p-10 text-sm font-mono shadow-2xl space-y-2">
                                    <p className="text-gray-500">// Example Node.js using Axios</p>
                                    <p className="text-blue-400">const<span className="text-white"> axios = require('axios');</span></p>
                                    <p className="text-blue-400">const<span className="text-white"> data = {"{"}</span></p>
                                    <p className="text-white">  to: '+233241234567',</p>
                                    <p className="text-white">  message: 'Hello from KasaNow!',</p>
                                    <p className="text-white">  sender_id: 'KASANOW'</p>
                                    <p className="text-white">{"};"}</p>
                                    <br />
                                    <p className="text-blue-400">axios<span className="text-white">.post('https://api.kasanow.com/v1/sms/send', data, {"{"}</span></p>
                                    <p className="text-white">  headers: {"{"} 'Authorization': 'Bearer YOUR_API_KEY' {"}"}</p>
                                    <p className="text-white">{"}).then(response => console.log(response.data));"}</p>
                                </div>
                            </div>
                        </section>

                        {/* Error Codes Table */}
                        <section className="space-y-8">
                            <h2 className="text-3xl font-black text-[#1E3A8A]">Error Codes</h2>
                            <table className="w-full text-left font-sans">
                                <thead>
                                    <tr className="border-b border-gray-100 font-black text-gray-400 uppercase text-xs tracking-widest">
                                        <th className="py-4">Status</th>
                                        <th className="py-4">Code</th>
                                        <th className="py-4">Description</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-50 text-sm">
                                    {[
                                        { status: 200, code: "SUCCESS", desc: "The request was successful." },
                                        { status: 401, code: "UNAUTHORIZED", desc: "No valid API key provided." },
                                        { status: 402, code: "INSUFFICIENT_CREDITS", desc: "Account balance is too low." },
                                        { status: 404, code: "NOT_FOUND", desc: "Resource does not exist." },
                                        { status: 429, code: "TOO_MANY_REQUESTS", desc: "Rate limit exceeded." },
                                    ].map((err, i) => (
                                        <tr key={i} className="hover:bg-gray-50 transition-colors">
                                            <td className="py-6 font-bold text-gray-800">{err.status}</td>
                                            <td className="py-6 font-mono text-blue-600 font-bold">{err.code}</td>
                                            <td className="py-6 text-gray-600">{err.desc}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </section>

                    </main>
                </div>
            </div>

            {/* Final Meta-CTA */}
            <section className="bg-gray-50 py-24">
                <div className="container mx-auto max-w-4xl px-4 text-center">
                    <div className="p-12 md:p-20 bg-white rounded-[48px] border border-gray-100 shadow-xl space-y-8">
                        <div className="h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mx-auto">
                            <ChevronRight className="h-8 w-8" />
                        </div>
                        <h2 className="text-3xl font-extrabold text-[#1E3A8A]">Ready to test?</h2>
                        <p className="text-gray-600 max-w-sm mx-auto">Generate your free API key and start sending SMS in our sandbox environment.</p>
                        <div className="flex gap-4 justify-center">
                            <Button className="bg-[#1E3A8A] text-white font-bold h-14 px-10 rounded-2xl">Get API Key</Button>
                            <Button variant="outline" className="border-gray-200 font-bold h-14 px-10 rounded-2xl">Sandbox Env</Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
