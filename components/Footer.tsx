"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"

export default function Footer() {
  const pathname = usePathname()

  // Hide footer on auth and waitlist success routes if necessary
  if (
    pathname === "/login" ||
    pathname === "/sign-up" ||
    pathname === "/signup" ||
    pathname === "/waitlist/success"
  ) {
    return null
  }

  return (
    <footer className="border-t bg-white py-12">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center space-x-2">
              <Image
                src="/logo.jpg"
                alt="KasaNow"
                width={160}
                height={40}
                className="h-10 w-auto object-contain"
              />
            </div>
            <p className="text-sm text-gray-600">SMS platform built for everyone</p>
            {/* Social Media Links */}
            <div className="mt-6 flex items-center space-x-4">
              <a
                href="https://www.facebook.com/share/1F9T65Z3Bs/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#3A57FC] transition-colors"
                aria-label="Facebook"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a
                href="https://x.com/kasanowapp"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#3A57FC] transition-colors"
                aria-label="X (Twitter)"
              >
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://instagram.com/kasanow.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#3A57FC] transition-colors"
                aria-label="Instagram"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a
                href="https://tiktok.com/@kasanow.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#3A57FC] transition-colors"
                aria-label="TikTok"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/kasanow-app-8073773a3"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#3A57FC] transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">Product</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link href="/#features" className="hover:text-gray-900">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-gray-900">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/enterprise" className="hover:text-gray-900">
                  Enterprise
                </Link>
              </li>
              <li>
                <Link href="/docs" className="hover:text-gray-900">
                  API
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">Resources</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link href="/docs" className="hover:text-gray-900">
                  Documentation
                </Link>
              </li>

              <li>
                <Link href="/#faq" className="hover:text-gray-900">
                  FAQ
                </Link>
              </li>

            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">Company</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link href="/about" className="hover:text-gray-900">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gray-900">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-gray-900">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-gray-900">
                  Terms
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t pt-8 text-center text-sm text-gray-600">
          © {new Date().getFullYear()} KasaNow. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
