

import React, { Suspense } from "react"

// Absolute Path বা @/ ব্যবহার করে আপনার ৪টি কম্পোনেন্ট ইমপোর্ট করা হলো
import MyPostList from "@/app/(dashboardGroup)/_components/MyPostList"
import MyPostSkeleton from "@/app/(dashboardGroup)/_components/MyPostSkeleton"
import { PostFormDialog } from "@/app/(dashboardGroup)/_components/PostFormDialog"

export default function UserMyPostPage() {
  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-8 space-y-6">
      
      {/* ড্যাশবোর্ড হেডার সেকশন */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b pb-4">
        <div className="space-y-1">
          <h1 className="text-3xl font-extrabold tracking-tight text-gradient">
            My Posts
          </h1>
          <p className="text-muted-foreground text-sm">
            Manage your published articles and saved drafts.
          </p>
        </div>
        
        {/* ডান পাশে নতুন পোস্ট ক্রিয়েট করার ডায়ালগ বাটন */}
        <div className="self-start sm:self-center">
          <PostFormDialog />
        </div>
      </div>

      {/* সাসপেন্স ও লোডিং স্কেলেটন */}
      <Suspense fallback={<MyPostSkeleton />}>
        <MyPostList />
      </Suspense>

    </div>
  )
}