import React, { Suspense } from 'react'
import NewsSkeleton from '../_components/news/newsSkeleton'
import PremiumNewsList from '../_components/news/premiumNewsList'


const PremiumPage = () => {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-8 space-y-6">
      
      {/* হেডার সেকশন */}
      <div className="space-y-2">
        <h1 className="text-3xl font-extrabold tracking-tight text-gradient sm:text-4xl">
          Premium News Feed
        </h1>
        <p className="text-muted-foreground text-sm sm:text-base">
          Get instant access to our exclusive articles, deep dives, and expert analysis.
        </p>
      </div>

      {/* সাসপেন্স বাউন্ডারি এবং কমন লোডার */}
      <Suspense fallback={<NewsSkeleton />}>
        <PremiumNewsList />
      </Suspense>

    </div>
  )
}

export default PremiumPage