"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useSearchParams } from "next/navigation"
import { Suspense } from "react"

function SuccessContent() {
  const searchParams = useSearchParams()
  const email = searchParams.get("email") || ""

  return (
    <div className="min-h-screen bg-[#5B6EF5] flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* Envelope Icon */}
        <div className="mb-12 flex justify-center">
          <svg
            width="120"
            height="120"
            viewBox="0 0 120 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="animate-bounce"
          >
            {/* Envelope body */}
            <rect x="20" y="40" width="80" height="50" rx="4" fill="white" stroke="#FF8800" strokeWidth="2" />
            {/* Envelope flap */}
            <path d="M20 40 L60 65 L100 40" stroke="#FF8800" strokeWidth="2" fill="none" />
            {/* Happy face */}
            <circle cx="45" cy="60" r="2" fill="#5B6EF5" />
            <circle cx="75" cy="60" r="2" fill="#5B6EF5" />
            <path d="M50 70 Q60 75 70 70" stroke="#5B6EF5" strokeWidth="2" fill="none" strokeLinecap="round" />
          </svg>
        </div>

        {/* Heading */}
        <h1 className="text-5xl md:text-6xl font-normal text-white mb-6 leading-tight">Joined Waitlist</h1>

        {/* Email display */}
        {email && <p className="text-xl md:text-2xl text-white/90 mb-8 font-medium">{email}</p>}

        {/* Message */}
        <p className="text-lg md:text-xl text-white/80 mb-12 max-w-xl mx-auto leading-relaxed">
          We'll notify you when we go live!
        </p>

        {/* CTA Button */}
        <Link href="/">
          <Button
            size="lg"
            className="bg-[#FF8800] hover:bg-[#FF9900] text-white font-semibold text-lg px-12 py-6 h-auto rounded-md"
          >
            Got it
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default function WaitlistSuccess() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#5B6EF5]" />}>
      <SuccessContent />
    </Suspense>
  )
}
