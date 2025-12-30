"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import Link from "next/link"
import Image from "next/image"
import { Send, Loader2 } from "lucide-react"
import { useState, useTransition, type FormEvent } from "react"
import { supabase } from "@/lib/supabase"
import { toast } from "sonner"


export default function WaitlistPage() {
  const [email, setEmail] = useState("")
  const [accepted, setAccepted] = useState(false)
  const [isPending, startTransition] = useTransition()
  const [successMessage, setSuccessMessage] = useState("")

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
    <div className="min-h-screen bg-[#3A57FC] px-4 py-12">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-5xl font-normal text-white md:text-7xl">Join Waitlist</h1>

        </div>

        {/* Signup Card */}
        <div className="mx-auto max-w-md rounded-lg bg-white p-8 shadow-xl">
          <div className="mb-6 flex items-start justify-between">
            <div>
              <h2 className="mb-2 text-2xl font-semibold text-gray-900">Get Early Access</h2>
              <p className="text-base text-gray-600">Be the first to send SMS without API keys!</p>
            </div>
            <div className="flex-shrink-0">
              <Image
                src="/logo.jpg"
                alt="KasaNow"
                width={60}
                height={60}
                className="h-12 w-auto object-contain"
              />
            </div>
          </div>

          {successMessage ? (
            <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-6 rounded-lg text-center">
              <h3 className="text-lg font-semibold mb-2">Joined Waitlist</h3>
              <p>{successMessage}</p>
              <Button
                variant="link"
                onClick={() => setSuccessMessage("")}
                className="mt-4 text-[#3A57FC]"
              >
                Add another email
              </Button>
            </div>
          ) : (
            <>


              {/* Email Form */}
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <Input
                    type="email"
                    placeholder="Email"
                    className="h-14 border-2 border-gray-300 text-base focus:border-[#3A57FC]"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={isPending}
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="h-14 w-full bg-[#FF8800] text-base font-semibold text-white hover:bg-[#FF7700]"
                  disabled={!accepted || isPending}
                >
                  {isPending ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Joining...
                    </>
                  ) : (
                    "Join Waitlist"
                  )}
                </Button>

                {/* Terms */}
                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="terms"
                    className="mt-1"
                    checked={accepted}
                    onCheckedChange={(checked) => setAccepted(checked === true)}
                    disabled={isPending}
                  />
                  <label htmlFor="terms" className="text-sm text-gray-600">
                    I accept the{" "}
                    <Link href="/terms" className="text-[#3A57FC] underline hover:no-underline">
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link href="/privacy" className="text-[#3A57FC] underline hover:no-underline">
                      Privacy Policy
                    </Link>
                  </label>
                </div>
              </form>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="mt-12 text-center text-sm text-white/80">
          <p>© 2025 KasaNow Ltd. Simplifying SMS communication worldwide.</p>
        </div>
      </div>

    </div>
  )
}
