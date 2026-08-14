import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckIcon, ShieldCheckIcon } from "lucide-react"

export const PricingSection = async () => {
  // এপিআই বা ডাটা লোড হওয়ার কৃত্রিম সময় (টেস্ট করার জন্য)
  await new Promise((resolve) => setTimeout(resolve, 1500));

  return (
    <div className="space-y-6">
      <Card className="border shadow-sm bg-card text-card-foreground">
        <CardHeader className="bg-muted/30 border-b">
          <CardTitle className="text-lg font-bold">Order Summary</CardTitle>
          <CardDescription>You are purchasing the Premium Plan</CardDescription>
        </CardHeader>
        <CardContent className="p-6 space-y-6">
          {/* প্রাইস */}
          <div className="flex items-baseline justify-between">
            <span className="text-sm font-medium text-muted-foreground">Premium Monthly</span>
            <span className="text-2xl font-extrabold text-purple-600">$19.00/mo</span>
          </div>

          {/* ফিচারস */}
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <div className="flex size-4 items-center justify-center rounded-full bg-purple-100 text-purple-600">
                <CheckIcon className="size-2.5 stroke-[3]" />
              </div>
              <span>Unlimited access to all Premium News</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="flex size-4 items-center justify-center rounded-full bg-purple-100 text-purple-600">
                <CheckIcon className="size-2.5 stroke-[3]" />
              </div>
              <span>Exclusive weekly expert analysis</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="flex size-4 items-center justify-center rounded-full bg-purple-100 text-purple-600">
                <CheckIcon className="size-2.5 stroke-[3]" />
              </div>
              <span>Ad-free reading experience</span>
            </li>
          </ul>

          <hr className="border-border" />

          {/* প্রাইস ক্যালকুলেশন */}
          <div className="space-y-2 text-sm">
            <div className="flex justify-between text-muted-foreground">
              <span>Subtotal</span>
              <span>$19.00</span>
            </div>
            <div className="flex justify-between text-muted-foreground">
              <span>Est. Taxes (0%)</span>
              <span>$0.00</span>
            </div>
            <div className="flex justify-between font-bold text-base pt-2 border-t">
              <span>Total Amount</span>
              <span>$19.00</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* সিকিউরড ব্যাজ */}
      <div className="flex items-center gap-3 p-4 rounded-xl border bg-muted/20 text-xs text-muted-foreground">
        <ShieldCheckIcon className="size-8 text-emerald-500 shrink-0" />
        <span>
          <strong>Safe & Secure checkout.</strong> Your connection is encrypted and your payment details are never saved on our servers.
        </span>
      </div>
    </div>
  )
}