"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import Link from "next/link"
import Image from "next/image"
import { Send, Loader2, ArrowLeft } from "lucide-react"
import { useState, useTransition, type FormEvent } from "react"
import { supabase } from "@/lib/supabase"
import { toast } from "sonner"
import { motion } from "framer-motion"

export default function WaitlistPage() {
  const [email, setEmail] = useState("")
  const [accepted, setAccepted] = useState(false)
  const [isPending, startTransition] = useTransition()
  const [successMessage, setSuccessMessage] = useState("")
  const [isNewUser, setIsNewUser] = useState(true)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!email || !accepted) return

    startTransition(async () => {
      try {
        const { data, error } = await supabase.functions.invoke('join-waitlist', {
          body: { email }
        })

        if (error) {
          toast.error(error.message || 'Failed to join waitlist')
          return
        }

        if (data?.success) {
          setIsNewUser(data.isNew)
          setSuccessMessage(data.message)
          toast.success(data.message)
          setEmail("")
          setAccepted(false)
        } else {
          toast.error(data?.message || 'Failed to join waitlist')
        }
      } catch (err) {
        toast.error('An unexpected error occurred')
      }
    })
  }

  return (
    <div className="relative min-h-screen w-full flex flex-col justify-center items-center overflow-hidden bg-[#3A57FC] font-sans">
        
        {/* Animated Abstract Aurora Background (KasaNow Colors: Blue, Orange, White) */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            <motion.div 
                animate={{ 
                    scale: [1, 1.2, 1],
                    x: [0, 60, 0],
                    y: [0, 40, 0]
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[-10%] left-[-5%] w-[60%] h-[60%] rounded-full bg-[#3A57FC] opacity-40 blur-[130px]"
            />
            <motion.div 
                animate={{ 
                    scale: [1, 1.3, 1],
                    x: [0, -40, 0],
                    y: [0, -60, 0]
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute top-[40%] right-[-10%] w-[50%] h-[50%] rounded-full bg-[#F97316] opacity-30 blur-[120px]"
            />
            <motion.div 
                animate={{ 
                    scale: [1, 1.4, 1],
                    x: [0, 40, 0],
                    y: [0, 60, 0]
                }}
                transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 4 }}
                className="absolute bottom-[-10%] left-[20%] w-[70%] h-[70%] rounded-full bg-white opacity-15 blur-[140px]"
            />
        </div>

        {/* Content Container */}
        <div className="relative z-10 w-full max-w-md px-6 py-12">
            
            {/* Top Logo */}
            <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex justify-center mb-8"
            >
                <div className="inline-flex items-center justify-center p-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-[0_20px_60px_-15px_rgba(249,115,22,0.3)] relative group">
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-[#F97316]/20 to-transparent pointer-events-none"></div>
                    <Image
                        src="/logo.jpg"
                        alt="KasaNow Logo"
                        width={60}
                        height={60}
                        className="h-12 w-auto object-contain rounded-2xl relative z-10 group-hover:scale-105 transition-transform duration-500"
                    />
                </div>
            </motion.div>

            {/* Waitlist Card */}
            <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="bg-white rounded-[32px] p-8 sm:p-10 shadow-2xl border border-white/40"
            >
                {successMessage ? (
                    <div className="text-center py-8">
                        <div className={`mx-auto flex h-16 w-16 items-center justify-center rounded-full mb-6 ${isNewUser ? 'bg-green-100' : 'bg-blue-100'}`}>
                            {isNewUser ? (
                                <span className="text-3xl">🎉</span>
                            ) : (
                                <span className="text-3xl">👋</span>
                            )}
                        </div>
                        <h3 className={`text-2xl font-semibold mb-3 tracking-tight ${isNewUser ? 'text-green-700' : 'text-blue-700'}`}>
                            {isNewUser ? "Welcome to KasaNow!" : "Welcome Back!"}
                        </h3>
                        <p className="text-slate-600 font-medium mb-8">
                            {successMessage}
                        </p>
                        <Button
                            variant="outline"
                            onClick={() => setSuccessMessage("")}
                            className="w-full h-12 rounded-xl font-bold border-slate-200 text-slate-700 hover:bg-slate-50"
                        >
                            Add another email
                        </Button>
                    </div>
                ) : (
                    <>
                        <div className="text-center mb-10">
                            <h2 className="text-3xl font-semibold text-[#0B1437] tracking-tight mb-3">
                                Get Early Access
                            </h2>
                            <p className="text-slate-500 font-medium leading-relaxed">
                                Be the first to use KasaNow's next-generation SMS infrastructure. No API keys needed.
                            </p>
                        </div>

                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div className="space-y-1.5">
                                <label className="text-sm font-bold text-slate-700 ml-1">
                                    Email
                                </label>
                                <Input
                                    type="email"
                                    placeholder="you@company.com"
                                    className="h-14 bg-slate-50 border-slate-200 text-base text-slate-900 focus:border-[#F97316] focus:ring-[#F97316]/20 rounded-xl px-4 shadow-sm placeholder:text-slate-400 font-normal placeholder:font-normal"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    disabled={isPending}
                                />
                            </div>

                            <Button
                                type="submit"
                                className="w-full flex justify-center h-14 border border-transparent rounded-xl shadow-[0_8px_20px_-8px_rgba(249,115,22,0.6)] text-base font-bold text-white bg-[#F97316] hover:bg-[#EA580C] hover:shadow-[0_8px_25px_-8px_rgba(249,115,22,0.8)] transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#F97316] disabled:opacity-70 disabled:cursor-not-allowed"
                                disabled={!accepted || isPending}
                            >
                                {isPending ? (
                                    <>
                                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                                        Joining Waitlist...
                                    </>
                                ) : (
                                    <>
                                        Reserve My Spot <Send className="ml-2 h-4 w-4" />
                                    </>
                                )}
                            </Button>

                            <div className="flex items-start space-x-3 pt-2">
                                <Checkbox
                                    id="terms"
                                    className="mt-1 h-5 w-5 border-slate-300 data-[state=checked]:bg-[#F97316] data-[state=checked]:border-[#F97316]"
                                    checked={accepted}
                                    onCheckedChange={(checked) => setAccepted(checked === true)}
                                    disabled={isPending}
                                />
                                <label htmlFor="terms" className="text-sm text-slate-500 font-medium leading-tight">
                                    I agree to receive communications regarding KasaNow and accept the{" "}
                                    <Link href="/terms" className="text-[#F97316] hover:underline">Terms</Link>
                                    {" "}and{" "}
                                    <Link href="/privacy" className="text-[#F97316] hover:underline">Privacy Policy</Link>.
                                </label>
                            </div>
                        </form>
                    </>
                )}
            </motion.div>

            {/* Back to Home & Footer text */}
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-10 text-center space-y-6"
            >
                <Link href="/" className="inline-flex items-center text-sm font-bold text-white/80 hover:text-white transition-colors backdrop-blur-md bg-white/10 px-4 py-2 rounded-lg">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to homepage
                </Link>
                <p className="text-xs font-medium text-white/50 tracking-wide">
                    © 2025 KasaNow Ltd. Enterprise SMS Infrastructure.
                </p>
            </motion.div>

        </div>
    </div>
  )
}
