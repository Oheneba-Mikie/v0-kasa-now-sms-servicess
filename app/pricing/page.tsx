import { Metadata } from 'next'
import PricingClient from './PricingClient'

export const metadata: Metadata = {
    title: "Pricing - KasaNow SMS",
    description: "Simple, transparent pricing for KasaNow's SMS platform. Flexibly choose SMS tiers with custom Sender IDs, and purchase top-up credits.",
    keywords: "Bulk SMS price Ghana, SMS rates Accra, KasaNow pricing, Sender ID Ghana",
}

export default function PricingPage() {
    return <PricingClient />
}
