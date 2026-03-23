import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/logo.jpg"
            alt="KasaNow Logo"
            width={40}
            height={40}
            className="h-8 w-auto object-contain"
          />
          <span className="text-xl font-bold tracking-tight text-[#111827]">KasaNow</span>
        </Link>

        <nav className="hidden items-center space-x-8 md:flex">
          <Link href="#features" className="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900">
            Features
          </Link>
          <Link href="/pricing" className="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900">
            Pricing
          </Link>
          <Link href="/faq" className="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900">
            FAQ
          </Link>
          <Link href="/docs" className="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900">
            Docs
          </Link>
          <Link href="/contact" className="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900">
            Contact
          </Link>
        </nav>

        <div className="flex items-center space-x-6">
          <Link href="/login" className="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900">
            Sign in
          </Link>
          <Link href="/waitlist">
            <Button size="sm" className="bg-[#F97316] hover:bg-[#EA580C] px-5 font-bold rounded-lg text-white shadow-sm transition-transform hover:scale-105 border-none">
              Join Waitlist <ArrowRight className="ml-1.5 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </header>
  )
}
