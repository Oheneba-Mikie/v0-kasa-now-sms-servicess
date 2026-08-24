import { Metadata } from 'next'
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
    title: "Terms of Service - KasaNow SMS",
    description: "Terms of Service and User Agreement for KasaNow SMS.",
}

export default function TermsPage() {
    return (
        <div className="flex flex-col bg-white">
            <section className="bg-blue-gradient py-20 text-white text-center">
                <div className="container mx-auto max-w-4xl px-4">
                    <Badge className="mb-4 bg-white/10 text-white border-white/20 px-4 py-1 text-xs font-bold uppercase tracking-wider">Legal</Badge>
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Terms of Service</h1>
                    <p className="text-white/80 text-lg max-w-2xl mx-auto">Please read these terms carefully before using our platform.</p>
                </div>
            </section>

            <section className="py-16 md:py-24">
                <div className="container mx-auto max-w-3xl px-4">
                    <div className="prose prose-lg text-gray-700 max-w-none">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">1. Account Termination & Forfeiture of Funds</h2>
                        <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg mb-8">
                            <p className="text-red-900 font-medium leading-relaxed m-0">
                                KasaNow reserves the right to suspend or terminate your account at our sole discretion, at any time, and for any reason. 
                                In the event of account termination—especially if you are found to be engaging in fraudulent, illegal, or unauthorized activities—any remaining balance or funds associated with your account will be permanently forfeited without refund.
                            </p>
                        </div>
                        
                        <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12">2. Acceptable Use</h2>
                        <p className="leading-relaxed mb-6">
                            By using KasaNow SMS, you agree to use our services only for lawful purposes. The transmission of unsolicited spam, malicious content, or any messages that violate local or international laws is strictly prohibited and will result in immediate account termination as outlined in Section 1.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12">3. Service Availability</h2>
                        <p className="leading-relaxed mb-6">
                            While we strive for 99.99% uptime, KasaNow is provided on an "as is" and "as available" basis. We do not guarantee that the service will be uninterrupted or error-free.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}
