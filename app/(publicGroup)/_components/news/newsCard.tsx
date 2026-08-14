import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { CalendarIcon, ClockIcon, LockIcon } from "lucide-react"

export interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  imageUrl: string;
  author: {
    name: string;
    avatar: string;
    initials: string;
  };
  isPremium?: boolean; // অপশনাল প্রপার্টি যুক্ত করা হয়েছে
}

interface NewsCardProps {
  news: NewsItem;
}

const NewsCard = ({ news }: NewsCardProps) => {
  const { title, excerpt, category, date, readTime, imageUrl, author, isPremium = true } = news;

  return (
    <div className="group relative overflow-hidden rounded-xl border bg-card text-card-foreground shadow-sm transition-all hover:shadow-md">
      
      {/* শুধু প্রিমিয়াম নিউজের ক্ষেত্রেই গোল্ডেন লক ব্যাজটি দেখাবে */}
      {isPremium && (
        <div className="absolute top-3 right-3 z-10 flex items-center gap-1 rounded-full bg-amber-600 px-2.5 py-1 text-[10px] font-bold text-white uppercase tracking-wider shadow-sm">
          <LockIcon className="size-3" />
          Premium
        </div>
      )}

      {/* নিউজ ইমেজ */}
      <div className="relative h-48 w-full overflow-hidden bg-muted">
        <img
          src={imageUrl}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* কন্টেন্ট বডি */}
      <div className="p-5 space-y-3">
        <div className="flex items-center gap-2">
          <span className="text-[11px] font-semibold tracking-wider text-purple-600 uppercase">
            {category}
          </span>
        </div>

        <h3 className="line-clamp-2 text-lg font-bold leading-snug group-hover:text-purple-600 transition-colors">
          {title}
        </h3>

        <p className="line-clamp-3 text-sm text-muted-foreground leading-relaxed">
          {excerpt}
        </p>

        {/* মেটাডাটা ও অথর সেকশন */}
        <div className="flex items-center justify-between pt-4 border-t border-border/50">
          <div className="flex items-center gap-2">
            <Avatar className="size-7">
              <AvatarImage src={author.avatar} alt={author.name} />
              <AvatarFallback className="text-[10px] font-bold">{author.initials}</AvatarFallback>
            </Avatar>
            <span className="text-xs font-medium">{author.name}</span>
          </div>
          
          <div className="flex items-center gap-3 text-[11px] text-muted-foreground">
            <span className="flex items-center gap-1 text-nowrap">
              <CalendarIcon className="size-3" />
              {date}
            </span>
            <span className="flex items-center gap-1 text-nowrap">
              <ClockIcon className="size-3" />
              {readTime}
            </span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default NewsCard;