import React, { Suspense } from 'react'

// Absolute Path বা @/ ব্যবহার করে পাবলিক নিউজ ও স্কেলেটন ইমপোর্ট করা হলো
// (যদি আপনার ফাইলগুলো _components/news ফোল্ডারে থাকে)
import PublicNewsList from "@/app/(publicGroup)/_components/news/publicNewsList"
import NewsSkeleton from "@/app/(publicGroup)/_components/news/newsSkeleton"

/* 
নোট: আপনার ফাইলগুলো যদি সরাসরি (publicGroup)/news ফোল্ডারে থাকে, তবে ইমপোর্ট পাথটি এমন হবে:
import PublicNewsList from "@/app/(publicGroup)/news/publicNewsList"
import NewsSkeleton from "@/app/(publicGroup)/news/newsSkeleton"
*/

const PublicNewsPage = () => {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-8 space-y-6">
      
      {/* হেডার সেকশন */}
      <div className="space-y-2">
        <h1 className="text-3xl font-extrabold tracking-tight text-gradient sm:text-4xl">
          Latest News Feed
        </h1>
        <p className="text-muted-foreground text-sm sm:text-base">
          Explore our latest public news, general guides, and design trends.
        </p>
      </div>

      {/* সাসপেন্স বাউন্ডারি এবং রিইউজেবল লোডার */}
      <Suspense fallback={<NewsSkeleton />}>
        <PublicNewsList />
      </Suspense>

    </div>
  )
}

export default PublicNewsPage;