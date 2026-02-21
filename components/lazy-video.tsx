'use client'

import { useRef, useEffect, useState } from 'react'

interface LazyVideoProps {
  src: string
  className?: string
  poster?: string
}

/**
 * A video component that only loads the video source when it enters the viewport.
 * Uses IntersectionObserver to detect visibility, preventing the browser from 
 * downloading the video until the user actually scrolls to it.
 */
export function LazyVideo({ src, className = '', poster }: LazyVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { rootMargin: '200px' } // Start loading 200px before it enters viewport
    )

    observer.observe(video)
    return () => observer.disconnect()
  }, [])

  return (
    <video
      ref={videoRef}
      className={className}
      loop
      muted
      playsInline
      controls
      controlsList="nodownload nofullscreen noremoteplayback"
      disablePictureInPicture
      preload="none"
      poster={poster}
    >
      {isVisible && <source src={src} type="video/mp4" />}
      Your browser does not support the video tag.
    </video>
  )
}
