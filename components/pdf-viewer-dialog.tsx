"use client"

import { useState, useEffect } from "react"
import { X, Download, ZoomIn, ZoomOut, FileText } from "lucide-react"
import { Button } from "./ui/button"
import { Card, CardContent, CardHeader } from "./ui/card"

interface PdfViewerDialogProps {
  isOpen: boolean
  onClose: () => void
  pdfUrl: string
  fileName?: string
}

export function PdfViewerDialog({ isOpen, onClose, pdfUrl, fileName = "resume.pdf" }: PdfViewerDialogProps) {
  const [zoom, setZoom] = useState(100)
  const [totalPages, setTotalPages] = useState(0)

  useEffect(() => {
    // Simulate page count - in a real implementation you'd get this from PDF.js
    setTotalPages(1) // You can update this based on your actual PDF
  }, [])

  if (!isOpen) return null

  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = pdfUrl
    link.download = fileName
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  const zoomIn = () => setZoom(prev => Math.min(prev + 25, 200))
  const zoomOut = () => setZoom(prev => Math.max(prev - 25, 100))

  return (
    <div 
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
      onClick={handleBackdropClick}
    >
      <Card className="w-full max-w-3xl h-[85vh] flex flex-col shadow-2xl border-0">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3 border-b">
          <div className="flex items-center gap-2">
            <FileText className="h-5 w-5 text-muted-foreground" />
            <div>
              <h3 className="text-lg font-semibold">Resume</h3>
              <p className="text-sm text-muted-foreground">{totalPages} page</p>
            </div>
          </div>
          
          <div className="flex items-center gap-1">
            <Button
              onClick={zoomOut}
              variant="ghost"
              size="sm"
              className="h-8 w-8 p-0"
              disabled={zoom <= 100}
            >
              <ZoomOut className="h-4 w-4" />
            </Button>
            
            <span className="text-sm text-muted-foreground min-w-[3rem] text-center">
              {zoom}%
            </span>
            
            <Button
              onClick={zoomIn}
              variant="ghost"
              size="sm"
              className="h-8 w-8 p-0"
              disabled={zoom >= 200}
            >
              <ZoomIn className="h-4 w-4" />
            </Button>
            
            <div className="w-px h-4 bg-border mx-1" />
            
            <Button
              onClick={handleDownload}
              variant="ghost"
              size="sm"
              className="h-8 w-8 p-0"
            >
              <Download className="h-4 w-4" />
            </Button>
            
            <Button
              onClick={onClose}
              variant="ghost"
              size="sm"
              className="h-8 w-8 p-0"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>

        <CardContent className="flex-1 p-0 overflow-hidden">
          <div className="w-full h-full bg-muted/20 flex items-center justify-center">
            <iframe
              src={pdfUrl}
              className="w-full h-full border-0"
              title="PDF Viewer"
              loading="lazy"
              style={{ transform: `scale(${zoom / 100})`, transformOrigin: 'center top' }}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}