"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"

interface SectionNavigationArrowsProps {
  currentSection: string
  onNavigate: (sectionId: string) => void
  sections: { id: string; label: string }[]
}

export function SectionNavigationArrows({
  currentSection,
  onNavigate,
  sections,
}: SectionNavigationArrowsProps) {
  const currentIndex = sections.findIndex((s) => s.id === currentSection)
  const previousSection = currentIndex > 0 ? sections[currentIndex - 1] : null
  const nextSection = currentIndex < sections.length - 1 ? sections[currentIndex + 1] : null

  return (
    <div className="flex justify-between items-center py-8">
      {/* Previous Section */}
      <button
        onClick={() => previousSection && onNavigate(previousSection.id)}
        disabled={!previousSection}
        className={`group flex items-center gap-2 transition-all duration-300 ease-in-out ${
          previousSection
            ? "text-foreground hover:scale-105 cursor-pointer"
            : "text-muted-foreground/40 cursor-default"
        }`}
      >
        <ChevronLeft
          className={`h-5 w-5 transition-transform duration-300 ${
            previousSection ? "group-hover:-translate-x-1" : ""
          }`}
        />
        <span className="text-sm sm:text-base">
          {previousSection ? previousSection.label : "previous"}
        </span>
      </button>

      {/* Next Section */}
      <button
        onClick={() => nextSection && onNavigate(nextSection.id)}
        disabled={!nextSection}
        className={`group flex items-center gap-2 transition-all duration-300 ease-in-out ${
          nextSection
            ? "text-foreground hover:scale-105 cursor-pointer"
            : "text-muted-foreground/40 cursor-default"
        }`}
      >
        <span className="text-sm sm:text-base">
          {nextSection ? nextSection.label : "next"}
        </span>
        <ChevronRight
          className={`h-5 w-5 transition-transform duration-300 ${
            nextSection ? "group-hover:translate-x-1" : ""
          }`}
        />
      </button>
    </div>
  )
}
