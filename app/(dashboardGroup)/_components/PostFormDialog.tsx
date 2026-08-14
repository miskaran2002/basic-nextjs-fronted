"use client"

import React, { useState } from "react"
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { PlusIcon } from "lucide-react"
import { toast } from "sonner"

export const PostFormDialog = () => {
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500))
      toast.success("Post created successfully!")
      setOpen(false)
    } catch (error) {
      toast.error("Failed to create post.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="gap-1.5 cursor-pointer">
          <PlusIcon className="size-4" />
          Create New Post
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="font-bold text-xl">Create New Post</DialogTitle>
          <DialogDescription>
            Fill in the details below to publish or save your post as a draft.
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4 py-4">
          {/* পোস্ট টাইটেল */}
          <div className="space-y-1.5">
            <Label htmlFor="title">Post Title</Label>
            <Input id="title" placeholder="Enter post title" required />
          </div>

          {/* ক্যাটাগরি */}
          <div className="space-y-1.5">
            <Label htmlFor="category">Category</Label>
            <Input id="category" placeholder="e.g. Next.js, Technology" required />
          </div>

          {/* মূল কন্টেন্ট */}
          <div className="space-y-1.5">
            <Label htmlFor="content">Post Content</Label>
            <Textarea id="content" placeholder="Write your post content here..." rows={4} required />
          </div>

          {/* অ্যাকশন বাটনসমূহ */}
          <div className="flex justify-end gap-2 pt-4">
            <Button variant="outline" type="button" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button type="submit" disabled={loading}>
              {loading ? "Publishing..." : "Publish Post"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}