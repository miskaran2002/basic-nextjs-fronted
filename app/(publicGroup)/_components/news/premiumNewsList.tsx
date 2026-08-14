import React from 'react'
import NewsCard, { NewsItem } from './newsCard' // ১. NewsCard এবং টাইপটি ইমপোর্ট করা হলো

// হার্ডকোডেড প্রিমিয়াম নিউজ ডাটা
const premiumNewsData: NewsItem[] = [
  {
    id: "1",
    title: "The Rise of Autonomous AI Agents in Software Architecture",
    excerpt: "An in-depth analysis of how autonomous AI agents are reshaping SaaS platforms, cloud automation, and software engineering workflows in 2026.",
    category: "Technology",
    date: "Jul 28, 2026",
    readTime: "5 min read",
    imageUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
    author: {
      name: "Dr. Raihan Uddin",
      avatar: "",
      initials: "RU"
    }
  },
  {
    id: "2",
    title: "Global Financial Forecast: Navigating the Next Economic Shifts",
    excerpt: "Our expert financial analysts break down global inflation rates, market volatility, and strategic asset allocation for the remainder of 2026.",
    category: "Finance",
    date: "Jul 29, 2026",
    readTime: "8 min read",
    imageUrl: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=800&q=80",
    author: {
      name: "Ada Lovelace",
      avatar: "",
      initials: "AL"
    }
  },
  {
    id: "3",
    title: "React 19 & Next.js 16: Advanced Production Patterns for Enterprise",
    excerpt: "Explore deep-dive optimizations for Turbopack, secure state preservation in nested layout groups, and advanced middleware proxy integrations.",
    category: "Development",
    date: "Jul 30, 2026",
    readTime: "6 min read",
    imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
    author: {
      name: "Alan Turing",
      avatar: "",
      initials: "AT"
    }
  }
];

const PremiumNewsList = async () => {
  // ২ সেকেন্ডের কৃত্রিম ডিলে দেওয়া হয়েছে যাতে সাসপেন্স লোডার বা স্কেলেটনটি পরীক্ষা করা যায়
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {premiumNewsData.map((news) => (
        // ২. এখানে ডাটা ম্যাপ (Map) করে প্রতিটি আইটেমের জন্য <NewsCard /> রেন্ডার করা হচ্ছে
        <NewsCard key={news.id} news={news} />
      ))}
    </div>
  )
}

export default PremiumNewsList;