import React from "react"
import { Card, CardContent } from "@/components/ui/card"

const MyPostSkeleton = () => {
  return (
    <div className="space-y-4 animate-pulse">
      {[...Array(3)].map((_, index) => (
        <Card key={index} className="border bg-card">
          <CardContent className="p-5 flex items-center justify-between">
            <div className="space-y-2 w-2/3">
              <div className="h-5 w-1/4 rounded bg-muted" />
              <div className="h-4 w-full rounded bg-muted" />
            </div>
            <div className="flex gap-2">
              <div className="h-8 w-12 rounded bg-muted" />
              <div className="h-8 w-12 rounded bg-muted" />
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

export default MyPostSkeleton;