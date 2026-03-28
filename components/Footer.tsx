"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"

export default function Footer() {
  const pathname = usePathname()
  if (pathname === '/login' || pathname === '/sign-up' || pathname === '/signup' || pathname === '/waitlist') return null;

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
          </div>

          <div>
            <h3 className="mb-4 font-semibold">Product</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link href="#" className="hover:text-gray-900">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-900">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-900">
                  Enterprise
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-900">
                  API
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">Resources</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link href="#" className="hover:text-gray-900">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-900">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="hover:text-gray-900">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-900">
                  Support
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-900">
                  Community
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">Company</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link href="#" className="hover:text-gray-900">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-900">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-900">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-900">
                  Terms
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t pt-8 text-center text-sm text-gray-600">
          © 2025 KasaNow. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
