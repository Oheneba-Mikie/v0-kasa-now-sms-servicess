import { Metadata } from 'next'

export const metadata: Metadata = {
    title: "Contact KasaNow SMS - 24/7 Support in Accra, Ghana",
    description: "Get in touch with KasaNow support. We're here to help you with Bulk SMS, OTP integrations, and custom business solutions via WhatsApp, Email, or Phone.",
    keywords: "Contact KasaNow, SMS support Ghana, report SMS issue",
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
