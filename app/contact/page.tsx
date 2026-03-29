"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import Link from "next/link"
import {
    MessageSquare,
    Phone,
    Mail,
    MapPin,
    ChevronRight,
    Send,
    Globe,
    ExternalLink,
    Clock,
    CheckCircle2
} from "lucide-react"
import { useState } from "react"

const contactMethods = [
  { 
    title: "Whatsapp Support", 
    value: "+233 24 000 0000", 
    icon: <MessageSquare className="h-6 w-6" />, 
    sub: "Instant chat support",
    color: "bg-emerald-500/10 text-emerald-500",
    hoverColor: "group-hover:bg-emerald-500/20"
  },
  { 
    title: "Technical Phone", 
    value: "+233 20 000 0000", 
    icon: <Phone className="h-6 w-6" />, 
    sub: "Direct line to our engineers",
    color: "bg-blue-500/10 text-blue-500",
    hoverColor: "group-hover:bg-blue-500/20"
  },
  { 
    title: "Global Email", 
    value: "support@kasanow.com", 
    icon: <Mail className="h-6 w-6" />, 
    sub: "For general inquiries",
    color: "bg-purple-500/10 text-purple-500",
    hoverColor: "group-hover:bg-purple-500/20"
  },
  { 
    title: "Accra Headquarters", 
    value: "Spintex Rd, Accra", 
    icon: <MapPin className="h-6 w-6" />, 
    sub: "Visit us in person",
    color: "bg-amber-500/10 text-amber-500",
    hoverColor: "group-hover:bg-amber-500/20"
  },
]

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
}

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut"
        }
    }
}

export default function ContactPage() {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        setTimeout(() => {
            setIsSubmitting(false)
            setSubmitted(true)
        }, 1500)
    }

    return (
        <div className="flex flex-col min-h-screen bg-white">
            {/* Immersive Hero Section */}
            <section className="relative bg-[#0F172A] py-32 md:py-48 text-white overflow-hidden border-b border-white/5">
                <div className="absolute inset-0 bg-gradient-to-br from-[#3A57FC]/20 to-transparent pointer-events-none" />
                <div className="absolute -bottom-24 -left-20 w-[600px] h-[600px] bg-[#3A57FC]/10 rounded-full blur-[120px] pointer-events-none" />
                
                <div className="container mx-auto max-w-7xl px-4 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Badge className="mb-6 bg-[#3A57FC] text-white border-none px-4 py-1.5 text-xs font-bold uppercase tracking-wider shadow-lg shadow-[#3A57FC]/40">
                            GET IN TOUCH
                        </Badge>
                        <h1 className="text-5xl md:text-8xl font-black tracking-tight mb-8 leading-tight">
                            We're here to <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3A57FC] to-[#60A5FA]">help.</span>
                        </h1>
                        <p className="text-slate-400 text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed font-medium">
                            Whether you're scaling a startup or an enterprise, our team is ready to assist with tailored SMS solutions.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Split Screen Grid */}
            <section className="py-24 md:py-40 bg-slate-50 relative overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px] -mr-64 -mt-64 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-[100px] -ml-64 -mb-64 pointer-events-none" />

                <div className="container mx-auto max-w-7xl px-4 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
                        
                        {/* Information Side */}
                        <div className="space-y-12">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 tracking-tight">Reach us across all channels</h2>
                                <p className="text-slate-500 text-lg md:text-xl leading-relaxed font-medium">
                                    We believe in direct constant communication. Choose the method that suits you best and our team will be with you shortly.
                                </p>
                            </motion.div>

                            <motion.div 
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="grid sm:grid-cols-2 gap-6"
                            >
                                {contactMethods.map((method, i) => (
                                    <motion.div
                                        key={i}
                                        variants={itemVariants}
                                        whileHover={{ y: -8 }}
                                        className="group p-8 rounded-[32px] bg-white border border-slate-200/60 shadow-sm hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 relative overflow-hidden"
                                    >
                                        <div className={`absolute inset-0 bg-gradient-to-br from-transparent to-slate-50/50 opacity-0 group-hover:opacity-100 transition-opacity`} />
                                        <div className={`h-14 w-14 rounded-2xl flex items-center justify-center mb-8 shadow-inner ${method.color} ${method.hoverColor} transition-colors relative z-10`}>
                                            {method.icon}
                                        </div>
                                        <div className="relative z-10">
                                            <h4 className="font-black text-slate-900 text-lg mb-2">{method.title}</h4>
                                            <p className="font-bold text-slate-600 mb-4">{method.value}</p>
                                            <div className="flex items-center gap-2 text-[10px] font-black uppercase text-slate-400 tracking-[0.2em]">
                                                <Clock className="h-3 w-3" /> {method.sub}
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 }}
                                className="p-8 rounded-[32px] bg-[#0F172A] text-white flex flex-col md:flex-row items-center gap-8 shadow-2xl relative overflow-hidden group border border-white/10"
                            >
                                <div className="absolute inset-0 bg-gradient-to-tr from-[#3A57FC]/20 to-transparent pointer-events-none" />
                                <div className="h-20 w-20 bg-white/5 rounded-[28px] flex items-center justify-center text-[#3A57FC] flex-shrink-0 backdrop-blur-md border border-white/10 group-hover:scale-110 transition-all shadow-xl">
                                    <Globe className="h-10 w-10" />
                                </div>
                                <div className="space-y-4">
                                    <h4 className="font-black text-2xl tracking-tight text-white mb-1">Developer API Ready?</h4>
                                    <p className="text-slate-400 font-medium text-sm leading-relaxed">
                                        Our technical guides are designed to get you sending in milliseconds. 
                                        <br /> 
                                        <Link href="/docs" className="text-[#60A5FA] font-black hover:underline inline-flex items-center gap-1 cursor-pointer mt-2 text-base">
                                            Explore API Docs <ChevronRight className="h-4 w-4" />
                                        </Link>
                                    </p>
                                </div>
                            </motion.div>
                        </div>

                        {/* Form Side */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                            className="bg-white p-8 md:p-12 rounded-[48px] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.08)] border border-slate-200/60 relative overflow-hidden"
                        >
                            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-[#3A57FC] to-transparent" />
                            
                            <div className="text-center mb-12">
                                <h3 className="text-3xl font-black text-slate-900 mb-4 tracking-tight">Ready to integrate?</h3>
                                <p className="text-slate-500 font-medium">Submit your details and we'll reach out within one business hour.</p>
                            </div>
                            
                            {!submitted ? (
                                <form onSubmit={handleSubmit} className="w-full space-y-8">
                                    <motion.div 
                                        variants={containerVariants}
                                        initial="hidden"
                                        animate="visible"
                                        className="space-y-6"
                                    >
                                        <div className="grid sm:grid-cols-2 gap-6">
                                            <motion.div variants={itemVariants} className="space-y-2">
                                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-2">Full Name</label>
                                                <input 
                                                    required
                                                    type="text" 
                                                    className="w-full h-16 bg-slate-50 rounded-2xl border border-transparent focus:border-[#3A57FC]/30 focus:bg-white focus:ring-4 focus:ring-[#3A57FC]/5 transition-all px-6 font-bold text-slate-700 placeholder:text-slate-300 outline-none shadow-inner" 
                                                    placeholder="e.g. Kwame Mensah" 
                                                />
                                            </motion.div>
                                            <motion.div variants={itemVariants} className="space-y-2">
                                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-2">Phone Number</label>
                                                <input 
                                                    required
                                                    type="tel" 
                                                    className="w-full h-16 bg-slate-50 rounded-2xl border border-transparent focus:border-[#3A57FC]/30 focus:bg-white focus:ring-4 focus:ring-[#3A57FC]/5 transition-all px-6 font-bold text-slate-700 placeholder:text-slate-300 outline-none shadow-inner" 
                                                    placeholder="+233..." 
                                                />
                                            </motion.div>
                                        </div>
                                        <motion.div variants={itemVariants} className="space-y-2">
                                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-2">Work Email</label>
                                            <input 
                                                required
                                                type="email" 
                                                className="w-full h-16 bg-slate-50 rounded-2xl border border-transparent focus:border-[#3A57FC]/30 focus:bg-white focus:ring-4 focus:ring-[#3A57FC]/5 transition-all px-6 font-bold text-slate-700 placeholder:text-slate-300 outline-none shadow-inner" 
                                                placeholder="kwame@company.gh" 
                                            />
                                        </motion.div>
                                        <motion.div variants={itemVariants} className="space-y-2">
                                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-2">Message</label>
                                            <textarea 
                                                required
                                                className="w-full h-40 bg-slate-50 rounded-[32px] border border-transparent focus:border-[#3A57FC]/30 focus:bg-white focus:ring-4 focus:ring-[#3A57FC]/5 transition-all p-8 font-bold text-slate-700 placeholder:text-slate-300 resize-none outline-none shadow-inner" 
                                                placeholder="How can we help your business grow today?"
                                            ></textarea>
                                        </motion.div>
                                        <motion.div variants={itemVariants}>
                                            <Button 
                                                type="submit"
                                                disabled={isSubmitting}
                                                className="w-full h-20 bg-[#3A57FC] hover:bg-[#2D46C7] text-white font-black rounded-2xl text-lg shadow-2xl shadow-[#3A57FC]/40 transition-all hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-3 border-none group"
                                            >
                                                {isSubmitting ? (
                                                    <div className="h-6 w-6 border-4 border-white border-t-transparent rounded-full animate-spin" />
                                                ) : (
                                                    <>
                                                        Send Message 
                                                        <motion.div
                                                            animate={{ x: [0, 5, 0] }}
                                                            transition={{ repeat: Infinity, duration: 1.5 }}
                                                        >
                                                            <Send className="h-5 w-5" />
                                                        </motion.div>
                                                    </>
                                                )}
                                            </Button>
                                        </motion.div>
                                    </motion.div>
                                </form>
                            ) : (
                                <motion.div 
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="py-12 space-y-8 flex flex-col items-center w-full"
                                >
                                    <div className="h-28 w-28 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center shadow-inner relative">
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            transition={{ type: "spring", stiffness: 200, damping: 10 }}
                                        >
                                            <CheckCircle2 className="h-16 w-16" />
                                        </motion.div>
                                        <motion.div 
                                            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                                            transition={{ repeat: Infinity, duration: 2 }}
                                            className="absolute inset-0 bg-emerald-500/20 rounded-full"
                                        />
                                    </div>
                                    <div className="space-y-4 text-center">
                                        <h4 className="text-3xl font-black text-slate-900">Message Received!</h4>
                                        <p className="text-slate-500 font-medium">Thank you for reaching out. <br />Our team is currently reviewing your inquiry.</p>
                                    </div>
                                    <Button onClick={() => setSubmitted(false)} variant="ghost" className="rounded-xl text-[#3A57FC] hover:text-[#2D46C7] font-black hover:bg-transparent">Send another message</Button>
                                </motion.div>
                            )}
                        </motion.div>
                    </div>
                </div>
            </section>
            {/* Trust / Stats Section */}
            <section className="py-24 bg-white border-t border-slate-100">
                <div className="container mx-auto max-w-7xl px-4">
                    <div className="grid md:grid-cols-4 gap-12 text-center">
                        {[
                            { label: "Delivery Rate", value: "99.99%", sub: "Industry leading" },
                            { label: "Daily Messages", value: "2M+", sub: "Scalable infra" },
                            { label: "API Uptime", value: "100%", sub: "Zero downtime" },
                            { label: "Response Time", value: "< 200ms", sub: "Ultra low latency" },
                        ].map((stat, i) => (
                            <motion.div 
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="space-y-2"
                            >
                                <div className="text-4xl font-black text-slate-900 tracking-tight">{stat.value}</div>
                                <div className="text-[10px] font-black text-[#3A57FC] uppercase tracking-[0.2em]">{stat.label}</div>
                                <div className="text-xs text-slate-400 font-medium">{stat.sub}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
