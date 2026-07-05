import { Metadata } from 'next'

export const metadata: Metadata = {
    title: "KasaNow SMS API Documentation - Developer Guide",
    description: "Complete REST API reference for KasaNow SMS. Authenticate, send messages, and track delivery with our developer-first messaging infrastructure.",
    keywords: "SMS API documentation, messaging SDK, REST API Ghana",
}

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
