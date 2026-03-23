"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import AuthSidebar from "@/components/AuthSidebar"
import { motion } from "framer-motion"

export default function LoginPage() {
    return (
        <div className="min-h-screen w-full flex flex-col lg:flex-row font-sans">
            {/* Left Panel - Branding & Features */}
            <AuthSidebar />

            {/* Right Panel - Login Form */}
            <div className="flex w-full lg:w-1/2 flex-col justify-center items-center bg-white px-6 py-12 sm:px-12 lg:px-24">
                <div className="w-full max-w-md space-y-8">
                    
                    <div className="text-center space-y-2 mb-10">
                        <h2 className="text-3xl font-extrabold tracking-tight text-[#0B1437]">
                            Welcome back
                        </h2>
                        <p className="text-sm text-slate-500 font-medium">
                            Sign in to your merchant dashboard
                        </p>
                    </div>

                    <form className="mt-8 space-y-6" onSubmit={(e) => e.preventDefault()}>
                        <div className="space-y-6 rounded-md">
                            
                            <div className="space-y-1.5">
                                <label className="text-sm font-bold text-slate-700 ml-1">
                                    Phone number or email
                                </label>
                                <Input 
                                    id="email" 
                                    name="email" 
                                    type="text" 
                                    autoComplete="email" 
                                    required 
                                    className="bg-slate-50 border-slate-200 focus:border-[#F97316] focus:ring-[#F97316]/20 text-slate-900 placeholder:text-slate-400 rounded-xl h-12 px-4 shadow-sm"
                                    placeholder="0241234567 or you@example.com" 
                                />
                            </div>

                            <div className="space-y-1.5">
                                <div className="flex items-center justify-between">
                                    <label className="text-sm font-bold text-slate-700 ml-1">
                                        Password
                                    </label>
                                </div>
                                <div className="relative">
                                    <Input 
                                        id="password" 
                                        name="password" 
                                        type="password" 
                                        autoComplete="current-password" 
                                        required 
                                        className="bg-slate-50 border-slate-200 focus:border-[#F97316] focus:ring-[#F97316]/20 text-slate-900 placeholder:text-slate-400 rounded-xl h-12 px-4 shadow-sm pr-10"
                                        placeholder="Enter your password" 
                                    />
                                    {/* Mock eye icon */}
                                    <button type="button" className="absolute inset-y-0 right-0 pr-4 flex items-center">
                                        <svg className="h-5 w-5 text-slate-400 hover:text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                        </svg>
                                    </button>
                                </div>
                                <div className="text-right mt-2">
                                    <Link href="#" className="text-sm font-bold text-[#F97316] hover:text-[#EA580C] transition-colors">
                                        Forgot password?
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="pt-2">
                            <Button type="submit" className="w-full flex justify-center py-6 px-4 border border-transparent rounded-xl shadow-sm text-sm font-bold text-white bg-[#F97316] hover:bg-[#EA580C] transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#F97316]">
                                Sign in
                            </Button>
                        </div>
                    </form>

                    <div className="mt-8">
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-slate-200" />
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-2 bg-white text-slate-400">or</span>
                            </div>
                        </div>

                        <div className="mt-6 text-center text-sm text-slate-500">
                            Don't have an account?{' '}
                            <Link href="/sign-up" className="font-bold text-[#3A57FC] hover:text-[#2563EB] transition-colors">
                                Sign up for free
                            </Link>
                        </div>

                        <div className="mt-8 text-center">
                            <Link href="/" className="inline-flex items-center text-sm font-bold text-slate-400 hover:text-slate-600 transition-colors">
                                <ArrowLeft className="mr-2 h-4 w-4" />
                                Back to homepage
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
