"use client"

import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { PencilIcon, Trash2Icon, BookOpenIcon } from "lucide-react"
import { toast } from "sonner"

export interface PostItem {
  id: string;
  title: string;
  content: string;
  category: string;
  status: "published" | "draft";
  createdAt: string;
}

interface MyPostCardProps {
  post: PostItem;
}

const MyPostCard = ({ post }: MyPostCardProps) => {
  const handleDelete = () => {
    toast.success(`Post "${post.title}" deleted successfully!`);
  }

  return (
    <Card className="border shadow-sm bg-card hover:shadow-md transition-shadow">
      <CardContent className="p-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
        
        {/* বাম পাশ: পোস্টের বিস্তারিত ক্যাটাগরি ও স্ট্যাটাসসহ */}
        <div className="space-y-2 flex-1">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-[11px] font-semibold text-purple-600 bg-purple-50 dark:bg-purple-950/30 px-2 py-0.5 rounded uppercase tracking-wider">
              {post.category}
            </span>
            <span className={`text-[11px] font-semibold px-2 py-0.5 rounded uppercase tracking-wider ${
              post.status === "published" 
                ? "text-emerald-600 bg-emerald-50 dark:bg-emerald-950/30" 
                : "text-amber-600 bg-amber-50 dark:bg-amber-950/30"
            }`}>
              {post.status}
            </span>
          </div>
          
          <h3 className="text-lg font-bold leading-snug">{post.title}</h3>
          <p className="text-sm text-muted-foreground line-clamp-2">{post.content}</p>
          
          <div className="flex items-center gap-1 text-[11px] text-muted-foreground pt-1">
            <BookOpenIcon className="size-3" />
            <span>Created on {post.createdAt}</span>
          </div>
        </div>

        {/* ডান পাশ: এডিট ও ডিলিট বাটন */}
        <div className="flex items-center gap-2 self-end md:self-center">
          <Button variant="outline" size="sm" className="gap-1.5 cursor-pointer">
            <PencilIcon className="size-3.5" />
            Edit
          </Button>
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={handleDelete}
            className="gap-1.5 text-red-600 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950/30 cursor-pointer"
          >
            <Trash2Icon className="size-3.5" />
            Delete
          </Button>
        </div>

      </CardContent>
    </Card>
  )
}

export default MyPostCard;