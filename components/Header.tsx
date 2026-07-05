"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"

export default function Header() {
  const pathname = usePathname()
  
  // Hide header on auth and waitlist success routes if necessary
  if (
    pathname === "/login" ||
    pathname === "/sign-up" ||
    pathname === "/signup" ||
    pathname === "/waitlist/success"
  ) {
    return null
  }

  return (
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
          <Link
            href="/#features"
            className="text-sm font-medium text-gray-700 transition-colors hover:text-gray-900"
          >
            Features
          </Link>
          <Link
            href="/pricing"
            className={`text-sm font-medium transition-colors hover:text-gray-900 ${
              pathname === "/pricing" ? "text-gray-900 font-bold" : "text-gray-700"
            }`}
          >
            Pricing
          </Link>
          <Link
            href="/enterprise"
            className={`text-sm font-medium transition-colors hover:text-gray-900 ${
              pathname === "/enterprise" ? "text-gray-900 font-bold" : "text-gray-700"
            }`}
          >
            Enterprise
          </Link>
          <Link
            href="/docs"
            className={`text-sm font-medium transition-colors hover:text-gray-900 ${
              pathname === "/docs" ? "text-gray-900 font-bold" : "text-gray-700"
            }`}
          >
            Docs
          </Link>
          <Link
            href="/about"
            className={`text-sm font-medium transition-colors hover:text-gray-900 ${
              pathname === "/about" ? "text-gray-900 font-bold" : "text-gray-700"
            }`}
          >
            About
          </Link>
          <Link
            href="/#use-cases"
            className="text-sm font-medium text-gray-700 transition-colors hover:text-gray-900"
          >
            Use Cases
          </Link>
          <Link
            href="/#customers"
            className="text-sm font-medium text-gray-700 transition-colors hover:text-gray-900"
          >
            Customers
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <Link href="/waitlist">
            <Button size="sm" className="bg-[#FF8800] hover:bg-[#FF7700] font-medium">
              Join Waitlist
            </Button>
          </Link>
        </div>
      </div>
    </header>
  )
}
