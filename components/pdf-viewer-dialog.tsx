"use client"

import { useEffect, useRef, useState } from "react"
import { X } from "lucide-react"
import { Button } from "./ui/button"

interface PdfViewerDialogProps {
  isOpen: boolean
  onClose: () => void
  pdfUrl: string
  fileName?: string
}

export function PdfViewerDialog({ isOpen, onClose, pdfUrl }: PdfViewerDialogProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [scale, setScale] = useState(1)
  const [isPinching, setIsPinching] = useState(false)
  const initialDistanceRef = useRef<number>(0)
  const initialScaleRef = useRef<number>(1)

  // Prevent body scroll when dialog is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      document.body.style.height = '100vh'
      document.documentElement.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
      document.body.style.height = ''
      document.documentElement.style.overflow = ''
      setScale(1) // Reset scale when closing
    }
    return () => {
      document.body.style.overflow = ''
      document.body.style.height = ''
      document.documentElement.style.overflow = ''
    }
  }, [isOpen])

  // Handle pinch-to-zoom
  useEffect(() => {
    const container = containerRef.current
    if (!container || !isOpen) return

    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 2) {
        setIsPinching(true)
        const distance = Math.hypot(
          e.touches[0].pageX - e.touches[1].pageX,
          e.touches[0].pageY - e.touches[1].pageY
        )
        initialDistanceRef.current = distance
        initialScaleRef.current = scale
        e.preventDefault()
      }
    }

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length === 2 && isPinching) {
        const distance = Math.hypot(
          e.touches[0].pageX - e.touches[1].pageX,
          e.touches[0].pageY - e.touches[1].pageY
        )
        const newScale = (distance / initialDistanceRef.current) * initialScaleRef.current
        setScale(Math.min(Math.max(newScale, 0.5), 3)) // Limit scale between 0.5x and 3x
        e.preventDefault()
      }
    }

    const handleTouchEnd = (e: TouchEvent) => {
      if (e.touches.length < 2) {
        setIsPinching(false)
      }
    }

    // Handle wheel zoom (for desktop with Ctrl/Cmd key)
    const handleWheel = (e: WheelEvent) => {
      if (e.ctrlKey || e.metaKey) {
        e.preventDefault()
        const delta = e.deltaY > 0 ? -0.1 : 0.1
        setScale(prevScale => Math.min(Math.max(prevScale + delta, 0.5), 3))
      }
    }

    container.addEventListener('touchstart', handleTouchStart, { passive: false })
    container.addEventListener('touchmove', handleTouchMove, { passive: false })
    container.addEventListener('touchend', handleTouchEnd)
    container.addEventListener('wheel', handleWheel, { passive: false })

    return () => {
      container.removeEventListener('touchstart', handleTouchStart)
      container.removeEventListener('touchmove', handleTouchMove)
      container.removeEventListener('touchend', handleTouchEnd)
      container.removeEventListener('wheel', handleWheel)
    }
  }, [isOpen, scale, isPinching])

  if (!isOpen) return null

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return (
    <div 
      className="fixed inset-0 z-[9999]"
      style={{ 
        backgroundColor: 'rgba(0, 0, 0, 0.6)', 
        backdropFilter: 'blur(12px)', 
        WebkitBackdropFilter: 'blur(12px)',
        margin: 0,
        padding: 0
      }}
      onClick={handleBackdropClick}
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full md:w-auto md:h-auto p-4 md:p-0">
        <div 
          className="relative flex flex-col w-full h-full md:w-[min(595px,90vw)] md:h-[min(842px,85vh)]"
        >
          <Button
            onClick={onClose}
            variant="ghost"
            size="sm"
            className="absolute -top-2 -right-2 md:-top-3 md:-right-3 z-10 h-8 w-8 p-0 rounded-full bg-white shadow-lg hover:bg-gray-100"
          >
            <X className="h-4 w-4 text-black" />
          </Button>

          <div 
            ref={containerRef}
            className="w-full h-full rounded-lg overflow-auto shadow-2xl bg-white touch-pan-y"
            style={{
              WebkitOverflowScrolling: 'touch',
            }}
          >
            <div
              style={{
                transform: `scale(${scale})`,
                transformOrigin: 'top center',
                transition: isPinching ? 'none' : 'transform 0.1s ease-out',
              }}
            >
              <iframe
                src={`${pdfUrl}#view=FitH`}
                className="w-full border-0 bg-white"
                style={{
                  height: scale === 1 ? '100vh' : `${100 * scale}vh`,
                  minHeight: scale === 1 ? '100vh' : `${100 * scale}vh`,
                  pointerEvents: isPinching ? 'none' : 'auto',
                }}
                title="PDF Viewer"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}