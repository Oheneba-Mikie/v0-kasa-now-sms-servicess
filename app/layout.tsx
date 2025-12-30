import type React from "react"
import type { Metadata } from "next"
import { Inter, Geist_Mono } from "next/font/google"
import { Toaster } from "sonner"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" })

const siteConfig = {
  name: "KasaNow",
  url: "https://kasanow.com",
  ogImage: "/logo.jpg",
  description:
    "The SMS platform built for everyone. Send thousands of messages instantly through web or mobile. No API keys, no technical setup—just results.",
  title: "KasaNow - Send Bulk SMS Instantly, No API Needed",
}

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  generator: "v0.app",
  keywords: "bulk SMS, SMS marketing, mass text messaging, business SMS, mobile marketing",
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  icons: {
    icon: "/logo.jpg",
    apple: "/logo.jpg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${geistMono.variable} font-sans antialiased text-gray-900 border-gray-200`}>
        {children}
        <Toaster position="top-center" richColors />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "KasaNow",
              "url": "https://kasanow.com",
              "logo": "https://kasanow.com/icon.svg",
            }),
          }}
        />
      </body>
    </html>
  )
}
