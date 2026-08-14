import React from 'react'

export const PricingSectionLoader = () => {
  return (
    <div className="space-y-6 animate-pulse">
      <div className="rounded-xl border bg-card p-6 space-y-6">
        <div className="space-y-2">
          <div className="h-5 w-1/3 rounded bg-muted" />
          <div className="h-4 w-2/3 rounded bg-muted" />
        </div>
        <hr className="border-border" />
        <div className="flex justify-between items-center">
          <div className="h-4 w-24 rounded bg-muted" />
          <div className="h-7 w-20 rounded bg-muted" />
        </div>
        <div className="space-y-3">
          <div className="h-4 w-full rounded bg-muted" />
          <div className="h-4 w-5/6 rounded bg-muted" />
        </div>
        <hr className="border-border" />
        <div className="space-y-2">
          <div className="h-4 w-full rounded bg-muted" />
          <div className="h-5 w-2/3 rounded bg-muted" />
        </div>
      </div>
    </div>
  )
}