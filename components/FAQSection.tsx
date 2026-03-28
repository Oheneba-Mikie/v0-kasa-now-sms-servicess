"use client"

import { motion } from "framer-motion"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { HelpCircle, MessageCircle, ShieldCheck, Zap, Globe, CreditCard, ArrowRight } from "lucide-react"

const faqs = [
  {
    question: "What is KasaNow and how does it work?",
    answer: "KasaNow is a premium SMS marketing and communication platform. It allows businesses to send bulk SMS, manage two-way conversations, and track campaign performance through an intuitive web and mobile interface. Simply upload your contacts, compose your message, and hit send.",
    icon: <MessageCircle className="h-5 w-5 text-[#3A57FC]" />,
  },
  {
    question: "How fast are the SMS delivery rates?",
    answer: "We boast an industry-leading delivery rate of 99.8%. Our infrastructure is connected to over 800 carriers globally, ensuring your messages reach their destination in milliseconds, even during peak traffic hours.",
    icon: <Zap className="h-5 w-5 text-[#F97316]" />,
  },
  {
    question: "Can I import my existing contact lists?",
    answer: "Yes! You can easily import contacts via CSV or Excel files. Our system automatically handles duplicates, validates phone formats (E.164), and allows you to segment your audience into unlimited groups for targeted campaigns.",
    icon: <Globe className="h-5 w-5 text-[#10B981]" />,
  },
  {
    question: "Is my data and my customers' data secure?",
    answer: "Security is our top priority. KasaNow is ISO27001 certified and GDPR compliant. We use bank-level AES-256 encryption for data at rest and TLS 1.3 for data in transit. Your contact lists are never shared or used for any other purpose.",
    icon: <ShieldCheck className="h-5 w-5 text-[#5B6EF5]" />,
  },
  {
    question: "What are the pricing plans?",
    answer: "We offer flexible, 'pay-as-you-go' pricing alongside monthly subscriptions for high-volume senders. Our rates are transparent with no hidden fees. You can scale your usage up or down as your business grows. Contact our sales team for enterprise volume discounts.",
    icon: <CreditCard className="h-5 w-5 text-[#8B5CF6]" />,
  },
  {
    question: "Do you offer customer support?",
    answer: "Absolutely. We provide 24/7 technical support via live chat and email. Enterprise customers also get a dedicated account manager to assist with campaign optimization and technical integrations.",
    icon: <HelpCircle className="h-5 w-5 text-[#EC4899]" />,
  },
]

export default function FAQSection() {
  return (
    <section id="faq" className="bg-white py-24 md:py-40 overflow-hidden relative">
      {/* Background Decorative Gradients */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-[#3A57FC]/5 rounded-full blur-[120px] -ml-64 pointer-events-none" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[120px] -mr-64 pointer-events-none" />

      <div className="container mx-auto max-w-4xl px-4 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Badge className="mb-6 bg-[#3A57FC]/10 text-[#3A57FC] hover:bg-[#3A57FC]/20 border-none px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em]">
                FAQS
            </Badge>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 tracking-tight leading-tight">
              Everything you need to <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3A57FC] to-[#60A5FA]">know.</span>
            </h2>
            <p className="text-xl text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed">
              Got questions about KasaNow? We've got answers. If you can't find what you're looking for, feel free to contact our support team.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white border border-slate-200/60 rounded-[48px] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.08)] p-6 md:p-12"
        >
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-slate-100 last:border-0">
                <AccordionTrigger className="hover:no-underline py-8 group">
                  <div className="flex items-center gap-6 text-slate-900 font-bold text-xl md:text-2xl transition-all group-hover:text-[#3A57FC] text-left">
                    <div className="flex-shrink-0 bg-slate-50 p-3 rounded-2xl group-hover:bg-[#3A57FC]/10 group-hover:scale-110 transition-all shadow-inner">
                      {faq.icon}
                    </div>
                    {faq.question}
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-slate-500 text-lg md:text-xl leading-relaxed pl-[76px] pb-10 font-medium">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-8 p-10 bg-slate-900 rounded-[40px] border border-white/10 shadow-2xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#3A57FC]/20 to-transparent pointer-events-none" />
            <div className="relative z-10">
                <p className="text-white font-bold text-xl mb-2 sm:mb-0">Still have more questions?</p>
                <p className="text-slate-400 text-sm font-medium">Our support team responds in less than 10 minutes.</p>
            </div>
            <button className="relative z-10 bg-[#3A57FC] hover:bg-[#2D46C7] text-white px-10 py-5 rounded-2xl font-black shadow-xl shadow-[#3A57FC]/30 hover:shadow-[#3A57FC]/50 hover:scale-105 transition-all flex items-center gap-3 active:scale-95 group">
              Contact Support <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
