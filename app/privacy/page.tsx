import { Metadata } from 'next'
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
    title: "Privacy Policy - KasaNow SMS",
    description: "Privacy Policy for KasaNow SMS.",
}

export default function PrivacyPage() {
    return (
        <div className="flex flex-col bg-white">
            <section className="bg-blue-gradient py-20 text-white text-center">
                <div className="container mx-auto max-w-4xl px-4">
                    <Badge className="mb-4 bg-white/10 text-white border-white/20 px-4 py-1 text-xs font-bold uppercase tracking-wider">Legal</Badge>
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Privacy Policy</h1>
                    <p className="text-white/80 text-lg max-w-2xl mx-auto">How we collect, use, and protect your information.</p>
                </div>
            </section>

            <section className="py-16 md:py-24">
                <div className="container mx-auto max-w-3xl px-4">
                    <div className="prose prose-lg text-gray-700 max-w-none">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">1. Data Collection & Usage</h2>
                        <p className="leading-relaxed mb-6">
                            Your privacy is critically important to us. We collect personal and business information strictly to provide, improve, and secure our messaging services. This includes authentication data, transaction logs, and contact lists required for message delivery.
                        </p>
                        
                        <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12">2. Data Security & Fraud Prevention</h2>
                        <p className="leading-relaxed mb-6">
                            We implement industry-standard security measures to protect your data. Consistent with our Terms of Service, we actively monitor usage patterns to detect and prevent fraudulent activities. If fraudulent activity is detected, we may use your data in cooperation with law enforcement to prevent abuse.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12">3. Third-Party Sharing</h2>
                        <p className="leading-relaxed mb-6">
                            We do not sell your personal data to third parties. Data is only shared with trusted telecommunication partners necessary for the sole purpose of delivering your messages.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}
