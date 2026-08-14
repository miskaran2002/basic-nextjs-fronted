import React from 'react'
import NewsCard, { NewsItem } from './newsCard'

const publicNewsData: NewsItem[] = [
  {
    id: "101",
    title: "10 Essential Tailwind CSS Classes Every Developer Should Know",
    excerpt: "Boost your styling efficiency with these extremely useful utility classes that will speed up your responsive design workflow.",
    category: "Design",
    date: "Jul 25, 2026",
    readTime: "4 min read",
    imageUrl: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
    author: {
      name: "John Doe",
      avatar: "",
      initials: "JD"
    },
    isPremium: false // এটি ফ্রি নিউজ
  },
  {
    id: "102",
    title: "Getting Started with Next.js 15 Starter Templates",
    excerpt: "Kickstart your new React web applications using these modern, pre-configured templates with clean folder structures.",
    category: "Guide",
    date: "Jul 26, 2026",
    readTime: "3 min read",
    imageUrl: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80",
    author: {
      name: "Jane Smith",
      avatar: "",
      initials: "JS"
    },
    isPremium: false // এটিও ফ্রি নিউজ
  }
];

const PublicNewsList = async () => {
  // ২ সেকেন্ডের কৃত্রিম ডিলে
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {publicNewsData.map((news) => (
        <NewsCard key={news.id} news={news} />
      ))}
    </div>
  )
}

export default PublicNewsList;