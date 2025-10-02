"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

interface GitHubContributionsProps {
  username: string
  className?: string
}

export function GitHubContributions({ username, className = "" }: GitHubContributionsProps) {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [imageLoaded, setImageLoaded] = useState(false)

  useEffect(() => {
    // Simulate loading time for the external service
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  const handleImageLoad = () => {
    setImageLoaded(true)
    setError(null)
  }

  const handleImageError = () => {
    setError("Failed to load GitHub contributions")
    setLoading(false)
  }

  if (loading && !imageLoaded) {
    return (
      <div className={`rounded-lg border p-4 bg-card ${className}`}>
        <div className="animate-pulse">
          <div className="h-32 bg-muted rounded"></div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className={`rounded-lg border p-4 bg-card ${className}`}>
        <div className="text-center text-destructive">
          <p>Unable to load GitHub contributions</p>
          <p className="text-sm mt-1 text-muted-foreground">Please check your connection</p>
        </div>
      </div>
    )
  }

  return (
    <div className={`rounded-lg border bg-card overflow-hidden ${className}`}>
      <div className="p-4 pb-2">
        <h3 className="text-sm font-medium">GitHub Contributions</h3>
        <p className="text-xs text-muted-foreground">Last 12 months</p>
      </div>
      
      <div className="px-4 pb-4">
        <div className="relative">
          {!imageLoaded && (
            <div className="absolute inset-0 animate-pulse bg-muted rounded"></div>
          )}
          <Image
            src={`https://ghchart.rshah.org/${username}`}
            alt="GitHub contribution chart"
            width={800}
            height={200}
            className={`w-full rounded transition-opacity duration-300 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={handleImageLoad}
            onError={handleImageError}
            loading="lazy"
          />
        </div>
      </div>
      
      <div className="px-4 pb-3">
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span>Less</span>
          <div className="flex gap-1">
            <div className="w-2 h-2 rounded-sm bg-muted"></div>
            <div className="w-2 h-2 rounded-sm bg-green-200"></div>
            <div className="w-2 h-2 rounded-sm bg-green-400"></div>
            <div className="w-2 h-2 rounded-sm bg-green-600"></div>
            <div className="w-2 h-2 rounded-sm bg-green-800"></div>
          </div>
          <span>More</span>
        </div>
      </div>
    </div>
  )
}