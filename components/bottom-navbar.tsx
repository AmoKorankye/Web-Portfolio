"use client"

import Link from "next/link"
import { Mail, Github, Linkedin, BookOpen } from "lucide-react"

export function BottomNavbar() {
  return (
    <div className="fixed bottom-4 left-0 right-0 z-50 flex justify-center px-2">
      <nav className="flex items-center justify-between gap-3 sm:gap-6 rounded-full bg-white px-4 sm:px-6 py-3 shadow-lg">
        <Link
          href="mailto:amokorankkye@gmail.com"
          className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full transition-colors hover:bg-gray-100"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Email"
        >
          <Mail className="h-5 w-5 text-black" />
        </Link>

        <Link
          href="https://github.com/AmoKorankye"
          className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full transition-colors hover:bg-gray-100"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <Github className="h-5 w-5 text-black" />
        </Link>

        <Link
          href="https://www.linkedin.com/in/kwaku-amo-korankye-7551751b6/"
          className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full transition-colors hover:bg-gray-100"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <Linkedin className="h-5 w-5 text-black"  />
        </Link>

        <Link
          href="https://drive.google.com/drive/folders/1jwZS7ayqjDHsphEogJWljo4Y44l0KJRf?usp=drive_link"
          className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full transition-colors hover:bg-gray-100"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Resume"
        >
          <BookOpen className="h-5 w-5 text-black" />
        </Link>
      </nav>
    </div>
  )
}

