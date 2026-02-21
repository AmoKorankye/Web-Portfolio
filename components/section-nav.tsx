"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import Essays from "./Essays"
import About from "./About"
import WorkExperience from "./WorkExperience"
import Projects from "./Projects"
import Skills from "./Skills"
import { SocialLinks } from "./bottom-navbar"
import { SectionNavigationArrows } from "./section-navigation-arrows"
import { LazyVideo } from "./lazy-video"

interface SectionNavProps {
  className?: string
}

export function SectionNav({ className = "" }: SectionNavProps) {
  const [activeSection, setActiveSection] = useState("about")
  const [swipeDirection, setSwipeDirection] = useState<'left' | 'right' | null>(null)
  const touchStartX = useRef<number>(0)
  const touchEndX = useRef<number>(0)
  const touchStartY = useRef<number>(0)
  const touchEndY = useRef<number>(0)
  const touchStartTime = useRef<number>(0)
  const contentRef = useRef<HTMLDivElement>(null)

  const sections = [
    { id: "about", label: "about" },
    { id: "projects", label: "projects" },
    { id: "media", label: "media and writings" },
  ]

  const handleSwipe = () => {
    const swipeThreshold = 100 // minimum distance for a swipe (increased from 50)
    const maxVerticalThreshold = 60 // maximum vertical movement to still be considered a horizontal swipe
    const maxSwipeTime = 500 // maximum time in ms for a swipe gesture
    
    const horizontalDiff = touchStartX.current - touchEndX.current
    const verticalDiff = Math.abs(touchStartY.current - touchEndY.current)
    const swipeTime = Date.now() - touchStartTime.current

    // If vertical movement is too large, it's a scroll not a swipe
    if (verticalDiff > maxVerticalThreshold) return
    
    // If horizontal movement is too small, ignore it
    if (Math.abs(horizontalDiff) < swipeThreshold) return
    
    // If the gesture took too long, it's not a swipe
    if (swipeTime > maxSwipeTime) return
    
    // Ensure horizontal movement is significantly larger than vertical (more horizontal than vertical)
    if (Math.abs(horizontalDiff) < verticalDiff * 2) return

    const currentIndex = sections.findIndex(s => s.id === activeSection)
    
    if (horizontalDiff > 0) {
      // Swiped left - go to next section
      if (currentIndex < sections.length - 1) {
        setSwipeDirection('left')
        setActiveSection(sections[currentIndex + 1].id)
      }
    } else {
      // Swiped right - go to previous section
      if (currentIndex > 0) {
        setSwipeDirection('right')
        setActiveSection(sections[currentIndex - 1].id)
      }
    }
  }

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
    touchStartY.current = e.touches[0].clientY
    touchStartTime.current = Date.now()
  }

  const onTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX
    touchEndY.current = e.touches[0].clientY
  }

  const onTouchEnd = () => {
    handleSwipe()
  }

  return (
    <div className={className}>
      <nav className="border-b mb-8">
        <div className="flex gap-8 items-center">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => {
                setSwipeDirection(null)
                setActiveSection(section.id)
              }}
              className={`pb-3 relative transition-all duration-300 ease-in-out ${
                activeSection === section.id
                  ? "font-bold text-foreground"
                  : "font-normal text-muted-foreground hover:text-foreground hover:scale-105"
              }`}
            >
              {section.label}
              {activeSection === section.id && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-foreground animate-in slide-in-from-left duration-300" />
              )}
            </button>
          ))}
        </div>
      </nav>

      {/* About Section */}
      {activeSection === "about" && (
        <div 
          ref={contentRef}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          className={`space-y-12 animate-in fade-in duration-500 ${
            swipeDirection === 'left' ? 'slide-in-from-right-8' : 
            swipeDirection === 'right' ? 'slide-in-from-left-8' : 
            'slide-in-from-bottom-4'
          }`}
        >
          <About />
          <WorkExperience />
          <Skills />
        </div>
      )}

      {/* Projects Section */}
      {activeSection === "projects" && (
        <div 
          ref={contentRef}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          className={`animate-in fade-in duration-500 ${
            swipeDirection === 'left' ? 'slide-in-from-right-8' : 
            swipeDirection === 'right' ? 'slide-in-from-left-8' : 
            'slide-in-from-bottom-4'
          }`}
        >
          <Projects />
        </div>
      )}

      {/* Media Section */}
      {activeSection === "media" && (
        <div 
          ref={contentRef}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          className={`space-y-12 animate-in fade-in duration-500 ${
            swipeDirection === 'left' ? 'slide-in-from-right-8' : 
            swipeDirection === 'right' ? 'slide-in-from-left-8' : 
            'slide-in-from-bottom-4'
          }`}
        >
          <div className="mb-8">
            <LazyVideo
              src="/kwaku-cs-excellence-award-optimized.mp4"
              poster="/video-poster.jpg"
              className="w-full rounded-lg"
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
            <div className="col-span-1 row-span-2">
              <Image src="/large-image-L.JPEG" width={400} height={800} alt="Gallery image 1" className="rounded-lg object-cover w-full h-full" sizes="(max-width: 640px) 25vw, 200px" priority />
            </div>
            <div className="col-span-1">
              <Image src="/small-image-1.JPG" width={400} height={400} alt="Gallery image 2" className="rounded-lg object-cover w-full h-full" sizes="(max-width: 640px) 25vw, 200px" priority />
            </div>
            <div className="col-span-1">
              <Image src="/mest-headshot.jpg" width={400} height={400} alt="Gallery image 3" className="rounded-lg object-cover w-full h-full" sizes="(max-width: 640px) 25vw, 200px" priority />
            </div>
            <div className="col-span-1 row-span-2">
              <Image src="/large-image-R.JPG" width={400} height={800} alt="Gallery image 4" className="rounded-lg object-cover w-full h-full" sizes="(max-width: 640px) 25vw, 200px" priority />
            </div>
            <div className="col-span-1">
              <Image src="/small-image-3.JPG" width={400} height={400} alt="Gallery image 5" className="rounded-lg object-cover w-full h-full" sizes="(max-width: 640px) 25vw, 200px" priority />
            </div>
            <div className="col-span-1">
              <Image src="/small-image-4.PNG" width={400} height={400} alt="Gallery image 6" className="rounded-lg object-cover w-full h-full" sizes="(max-width: 640px) 25vw, 200px" priority />
            </div>
          </div>
          <Essays />
        </div>
      )}

      {/* Persistent Navigation Arrows */}
      <SectionNavigationArrows
        currentSection={activeSection}
        onNavigate={(sectionId) => {
          setSwipeDirection(null)
          setActiveSection(sectionId)
          window.scrollTo({ top: 0, behavior: 'smooth' })
        }}
        sections={sections}
      />
      
      {/* Persistent Social Links */}
      <SocialLinks />
    </div>
  )
}
