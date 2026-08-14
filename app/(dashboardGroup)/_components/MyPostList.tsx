import React from "react"
import MyPostCard, { PostItem } from "./MyPostCard"

// হার্ডকোডেড আপনার নিজের করা পোস্টের ডাটা
const mockPosts: PostItem[] = [
  {
    id: "p1",
    title: "Exploring Next.js 16 Server Actions and Caching",
    content: "Next.js 16 introduced several optimizations for Server Actions, making mutations easier and cleaner. This article covers advanced caching strategies and validation techniques.",
    category: "Next.js",
    status: "published",
    createdAt: "Jul 28, 2026"
  },
  {
    id: "p2",
    title: "My Experience Building SaaS Platforms with Tailwind CSS v4",
    content: "Tailwind CSS v4's CSS-first approach is incredibly powerful. Today, I'm documenting how I structured my multi-tenant dashboard templates without a tailwind.config.js.",
    category: "Tailwind",
    status: "draft",
    createdAt: "Jul 29, 2026"
  },
  {
    id: "p3",
    title: "A Complete Guide to JWT Authentication & Refresh Tokens",
    content: "Securing modern web apps requires robust authentication. This is an exhaustive guide covering access tokens, refresh tokens, cookies, and Next.js middleware protection.",
    category: "Security",
    status: "published",
    createdAt: "Jul 30, 2026"
  }
];

const MyPostList = async () => {
  // ২ সেকেন্ডের কৃত্রিম ডিলে
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return (
    <div className="space-y-4">
      {mockPosts.length === 0 ? (
        <div className="text-center py-12 border rounded-xl bg-muted/10 text-muted-foreground">
          No posts created yet. Click "+ Create New Post" above to start!
        </div>
      ) : (
        mockPosts.map((post) => (
          <MyPostCard key={post.id} post={post} />
        ))
      )}
    </div>
  )
}

export default MyPostList;