"use client"

import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { LockIcon, Loader2Icon } from "lucide-react"
import { toast } from "sonner"

interface SubscribeButtonProps {
  amount: string;
}

export const SubscribeButton = ({ amount }: SubscribeButtonProps) => {
  const [loading, setLoading] = useState(false)

  const handlePayment = async () => {
    setLoading(true)
    try {
      // এখানে আপনার পেমেন্ট এপিআই বা গেটওয়ে কল হবে (সাময়িকভাবে ২ সেকেন্ড ডিলে দেওয়া হয়েছে)
      await new Promise((resolve) => setTimeout(resolve, 2000))
      toast.success("Payment successful! Welcome to Next js Press Premium.")
    } catch (error) {
      toast.error("Payment failed. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="w-full space-y-4">
      <Button 
        onClick={handlePayment} 
        disabled={loading}
        className="w-full gap-2 text-base font-semibold cursor-pointer"
      >
        {loading ? (
          <>
            <Loader2Icon className="size-4 animate-spin" />
            Processing Payment...
          </>
        ) : (
          <>
            <LockIcon className="size-4" />
            Pay {amount} Now
          </>
        )}
      </Button>
      <div className="flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
        <LockIcon className="size-3" />
        Secured by SSL 256-Bit Encryption
      </div>
    </div>
  )
}