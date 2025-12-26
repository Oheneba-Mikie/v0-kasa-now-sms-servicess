import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Send, ArrowRight } from "lucide-react"

export default function PricingPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <header className="sticky top-0 z-50 w-full border-b bg-white">
                <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
                    <Link href="/" className="flex items-center space-x-2">
                        <Image
                            src="/logo.jpg"
                            alt="KasaNow"
                            width={160}
                            height={40}
                            className="h-10 w-auto object-contain"
                        />
                    </Link>

                    <nav className="hidden items-center space-x-8 md:flex">
                        <Link href="/#features" className="text-sm font-medium text-gray-700 transition-colors hover:text-gray-900">
                            Features
                        </Link>
                        <Link href="/pricing" className="text-sm font-medium text-gray-900">
                            Pricing
                        </Link>
                        <Link href="/#use-cases" className="text-sm font-medium text-gray-700 transition-colors hover:text-gray-900">
                            Use Cases
                        </Link>
                        <Link href="/#customers" className="text-sm font-medium text-gray-700 transition-colors hover:text-gray-900">
                            Customers
                        </Link>
                    </nav>

                    <div className="flex items-center space-x-4">
                        <Button variant="ghost" size="sm" className="text-gray-700">
                            Sign in
                        </Button>
                        <Link href="/waitlist">
                            <Button size="sm" className="bg-[#FF8800] hover:bg-[#FF7700] font-medium">
                                Join Waitlist
                            </Button>
                        </Link>
                    </div>
                </div>
            </header>

            <main className="flex flex-1 flex-col items-center justify-center bg-gray-50 px-4 py-20 text-center">
                <div className="max-w-3xl">
                    <div className="mb-8 inline-flex items-center justify-center rounded-full bg-[#5B6EF5]/10 px-4 py-1.5 text-sm font-semibold text-[#5B6EF5]">
                        Coming Soon
                    </div>
                    <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                        Simple, transparent pricing <br className="hidden sm:inline" />
                        <span className="text-[#5B6EF5]">is on the way</span>
                    </h1>
                    <p className="mx-auto mb-10 max-w-2xl text-xl text-gray-600">
                        We're finalizing our plans to give you the best value for your SMS marketing needs. Join our waitlist to get notified when we launch pricing and get an exclusive early-bird offer.
                    </p>
                    <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                        <Link href="/waitlist">
                            <Button size="lg" className="h-14 bg-[#FF8800] px-8 text-base font-semibold text-white hover:bg-[#FF7700]">
                                Join Waitlist <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </Link>
                        <Link href="/">
                            <Button variant="outline" size="lg" className="h-14 px-8">
                                Back to Home
                            </Button>
                        </Link>
                    </div>
                </div>
            </main>

            <footer className="border-t bg-white py-12">
                <div className="container mx-auto max-w-7xl px-4 text-center text-sm text-gray-600">
                    <p>&copy; {new Date().getFullYear()} KasaNow. All rights reserved.</p>
                </div>
            </footer>
        </div>
    )
}
