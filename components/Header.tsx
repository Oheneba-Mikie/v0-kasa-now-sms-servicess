"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Header() {
    return (
        <header className="fixed top-0 z-50 w-full bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100">
            <div className="container mx-auto flex h-20 max-w-7xl items-center justify-between px-4">
                <Link href="/" className="flex items-center">
                    <Image
                        src="/logo.jpg"
                        alt="KasaNow"
                        width={160}
                        height={40}
                        className="h-10 w-auto object-contain"
                    />
                </Link>

                <nav className="hidden items-center space-x-10 lg:flex font-sans">
                    <Link href="/#features" className="text-sm font-bold text-gray-500 transition-all hover:text-[#3A57FC]">
                        Features
                    </Link>
                    <Link href="/products" className="text-sm font-bold text-gray-500 transition-all hover:text-[#3A57FC]">
                        Products
                    </Link>
                    <Link href="/pricing" className="text-sm font-bold text-gray-500 transition-all hover:text-[#3A57FC]">
                        Pricing
                    </Link>
                    <Link href="/docs" className="text-sm font-bold text-gray-500 transition-all hover:text-[#3A57FC]">
                        Developers
                    </Link>
                </nav>

                <div className="flex items-center space-x-6">
                    <Link href="/login" className="hidden text-sm font-bold text-gray-900 md:block hover:text-[#3A57FC] transition-colors">
                        Log in
                    </Link>
                    <Link href="/waitlist">
                        <Button size="lg" className="bg-[#F97316] hover:bg-[#EA580C] text-white font-bold rounded-xl px-6 transition-transform hover:scale-105 active:scale-95 shadow-lg shadow-orange-500/20">
                            Get Started
                        </Button>
                    </Link>
                </div>
            </div>
        </header>
    )
}
