"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

export default function AuthSidebar() {
    return (
        <div className="relative hidden w-full lg:flex lg:w-1/2 overflow-hidden bg-[#3A57FC] flex-col justify-center items-center">
            
            {/* Animated Abstract Aurora Background (KasaNow Colors: Blue, Orange, White) */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div 
                    animate={{ 
                        scale: [1, 1.2, 1],
                        x: [0, 60, 0],
                        y: [0, 40, 0]
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-[20%] -left-[10%] w-[70%] h-[70%] rounded-full bg-[#3A57FC] opacity-40 blur-[130px]"
                />
                <motion.div 
                    animate={{ 
                        scale: [1, 1.3, 1],
                        x: [0, -40, 0],
                        y: [0, -60, 0]
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    className="absolute top-[30%] -right-[20%] w-[60%] h-[60%] rounded-full bg-[#F97316] opacity-30 blur-[120px]"
                />
                <motion.div 
                    animate={{ 
                        scale: [1, 1.4, 1],
                        x: [0, 40, 0],
                        y: [0, 60, 0]
                    }}
                    transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 4 }}
                    className="absolute -bottom-[20%] left-[20%] w-[80%] h-[80%] rounded-full bg-white opacity-15 blur-[140px]"
                />
            </div>

            <div className="relative z-10 w-full h-full flex flex-col justify-between p-12 lg:p-20">
                
                {/* Center Content */}
                <div className="flex-grow flex flex-col justify-center max-w-lg mx-auto w-full mt-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center flex flex-col items-center"
                    >
                        {/* KasaNow Logo styled elegantly */}
                        <div className="mb-10 inline-flex items-center justify-center p-5 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-[0_20px_60px_-15px_rgba(249,115,22,0.3)] relative group">
                            <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-[#F97316]/20 to-transparent pointer-events-none"></div>
                            <Image
                                src="/logo.jpg"
                                alt="KasaNow App"
                                width={72}
                                height={72}
                                className="h-16 w-auto object-contain rounded-2xl relative z-10 group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                        
                        <h1 className="text-4xl lg:text-5xl font-semibold text-white mb-6 leading-[1.15] tracking-tight drop-shadow-sm">
                            Next-Generation <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-orange-200 to-[#F97316]">
                                SMS Infrastructure
                            </span>
                        </h1>
                        
                        <p className="text-lg text-white/90 leading-relaxed font-medium drop-shadow-sm">
                            Scale your messaging across Ghana with enterprise-grade reliability. Experience zero setup fees, instant delivery, and real-time analytics designed for modern businesses.
                        </p>
                    </motion.div>
                </div>

                {/* Bottom Trust Badge */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="w-full flex justify-center mb-8"
                >
                    <div className="bg-[#1A2860]/40 backdrop-blur-xl border border-white/20 rounded-2xl p-4 flex items-center gap-4 max-w-sm shadow-xl hover:border-white/30 transition-colors cursor-default">
                        <div className="relative flex h-3.5 w-3.5 flex-shrink-0">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-[#10B981]"></span>
                        </div>
                        <div className="text-left">
                            <div className="text-white font-bold text-sm tracking-wide">All systems operational</div>
                            <div className="text-white/80 text-[13px] mt-0.5 leading-snug">
                                Guaranteeing 99.98% delivery uptime for critical SMS communications.
                            </div>
                        </div>
                    </div>
                </motion.div>

            </div>
        </div>
    )
}
