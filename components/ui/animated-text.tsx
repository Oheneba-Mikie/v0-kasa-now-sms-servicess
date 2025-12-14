"use client"

import { useState, useEffect } from "react"

interface AnimatedTextProps {
  words: string[]
  duration?: number
  className?: string
}

export function AnimatedText({ words, duration = 4000, className = "" }: AnimatedTextProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length)
    }, duration)

    return () => clearInterval(interval)
  }, [words.length, duration])

  return (
    <span className={`inline-block transition-all duration-500 ease-in-out ${className}`}>
      <span
        key={currentIndex}
        className="animate-[fadeIn_0.5s_ease-in-out] block"
        style={{
          animation: "fadeIn 0.5s ease-in-out"
        }}
      >
        {words[currentIndex]}
      </span>
      <style jsx>{`
        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateY(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </span>
  )
}