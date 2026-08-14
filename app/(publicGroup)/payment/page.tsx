import React, { Suspense } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CreditCardIcon } from "lucide-react"

// কাস্টম ৩টি কম্পোনেন্ট ইমপোর্ট করা হলো
import { PricingSection } from "@/app/(publicGroup)/_components/payment/pricingSection"
import { PricingSectionLoader } from "@/app/(publicGroup)/_components/payment/pricingSectionLoader"
import { SubscribeButton } from "@/app/(publicGroup)/_components/payment/subscribeButton"

const PaymentPage = () => {
  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-8 space-y-6">
      
      {/* হেডার সেকশন */}
      <div className="space-y-2 text-center md:text-left">
        <h1 className="text-3xl font-extrabold tracking-tight text-gradient sm:text-4xl">
          Checkout
        </h1>
        <p className="text-muted-foreground text-sm sm:text-base">
          Securely complete your subscription to Next js Press Premium.
        </p>
      </div>

      {/* মেইন গ্রিড লেআউট */}
      <div className="grid gap-8 lg:grid-cols-12">
        
        {/* বাম কলাম: অর্ডার সামারি (Pricing Section) যা সাসপেন্স লোডারের ভেতর থাকবে */}
        <div className="lg:col-span-5">
          <Suspense fallback={<PricingSectionLoader />}>
            <PricingSection />
          </Suspense>
        </div>

        {/* ডান কলাম: পেমেন্ট ফর্ম কার্ড */}
        <div className="lg:col-span-7">
          <Card className="border shadow-sm">
            <CardHeader>
              <CardTitle className="text-xl font-bold flex items-center gap-2">
                <CreditCardIcon className="size-5 text-purple-600" />
                Payment Details
              </CardTitle>
              <CardDescription>Enter your credit card details below to subscribe</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="cardname">Cardholder Name</Label>
                <Input id="cardname" placeholder="John Doe" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="cardnumber">Card Number</Label>
                <div className="relative">
                  <Input id="cardnumber" placeholder="0000 0000 0000 0000" className="pr-10" required />
                  <CreditCardIcon className="absolute right-3 top-3 size-4 text-muted-foreground" />
                </div>
              </div>

              <div className="grid gap-4 grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="expiry">Expiration Date</Label>
                  <Input id="expiry" placeholder="MM/YY" maxLength={5} required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cvc">CVC / CVV</Label>
                  <Input id="cvc" placeholder="123" maxLength={3} required />
                </div>
              </div>
            </CardContent>

            {/* সাবস্ক্রিপশন বাটন সেকশনটি নিচে কাস্টম বাটন দিয়ে রেন্ডার করা হলো */}
            <div className="border-t bg-muted/5 p-6">
              <SubscribeButton amount="$19.00" />
            </div>
          </Card>
        </div>

      </div>
    </div>
  )
}

export default PaymentPage;