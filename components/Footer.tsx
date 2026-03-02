import Link from "next/link"
import Image from "next/image"
import { Users, MessageSquare } from "lucide-react"

export default function Footer() {
    return (
        <footer className="bg-gray-50 border-t border-gray-100 py-24 font-sans">
            <div className="container mx-auto max-w-7xl px-4">
                <div className="grid gap-12 md:grid-cols-4 lg:grid-cols-5">
                    <div className="lg:col-span-2">
                        <Link href="/" className="flex items-center space-x-2 mb-8">
                            <Image
                                src="/logo.jpg"
                                alt="KasaNow"
                                width={180}
                                height={50}
                                className="h-12 w-auto object-contain mix-blend-multiply"
                            />
                        </Link>
                        <p className="text-gray-500 text-lg max-w-xs leading-relaxed mb-8">
                            Ghana's leading premium SMS platform for businesses that demand reliability and speed.
                        </p>
                        <div className="flex gap-4">
                            <div className="h-10 w-10 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-all cursor-pointer"><Users className="h-5 w-5" /></div>
                            <div className="h-10 w-10 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-all cursor-pointer"><MessageSquare className="h-5 w-5" /></div>
                        </div>
                    </div>

                    {[
                        { title: "Product", links: ["Features", "SMS API", "Pricing", "OTP Messaging", "Enterprise"] },
                        { title: "Resources", links: ["Documentation", "SDKs", "Blog", "Tutorials", "Status"] },
                        { title: "Company", links: ["About Us", "Careers", "Impact", "Privacy", "Terms"] }
                    ].map((col, i) => (
                        <div key={i}>
                            <h3 className="font-bold text-[#1E3A8A] text-lg mb-8">{col.title}</h3>
                            <ul className="space-y-4">
                                {col.links.map((link, j) => (
                                    <li key={j}>
                                        <Link href="#" className="text-gray-500 hover:text-blue-600 font-medium transition-colors">{link}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="mt-24 pt-12 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-gray-400 font-bold text-sm tracking-widest uppercase">© 2025 KasaNow SMS. Localized for Ghana.</div>
                    <div className="flex gap-8 text-sm font-bold text-gray-400">
                        <Link href="#" className="hover:text-blue-600 transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-blue-600 transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
