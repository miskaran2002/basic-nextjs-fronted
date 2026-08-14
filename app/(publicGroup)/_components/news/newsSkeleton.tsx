import React from 'react'

const NewsSkeleton = () => {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {[...Array(6)].map((_, index) => (
        <div key={index} className="space-y-4 rounded-xl border p-5 shadow-sm animate-pulse bg-card">
          {/* ইমেজ স্কেলেটন */}
          <div className="h-48 w-full rounded-lg bg-muted" />
          {/* টেক্সট স্কেলেটন */}
          <div className="space-y-2">
            <div className="h-5 w-2/3 rounded bg-muted" />
            <div className="h-4 w-full rounded bg-muted" />
            <div className="h-4 w-5/6 rounded bg-muted" />
          </div>
          {/* ইউজার প্রোফাইল স্কেলেটন */}
          <div className="flex items-center gap-2 pt-2">
            <div className="h-8 w-8 rounded-full bg-muted" />
            <div className="h-4 w-24 rounded bg-muted" />
          </div>
        </div>
      ))}
    </div>
  )
}

export default NewsSkeleton;