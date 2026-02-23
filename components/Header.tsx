import Image from 'next/image'
import { SectionNav } from './section-nav'

export default function Header() {
  return (
    <header className="mb-12 mt-8">
      <div className="flex items-center justify-between gap-6 mb-12">
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold mb-2">Kwaku Amo-Korankye</h1>
          <p className="text-base sm:text-lg text-muted-foreground">eit @ MEST Africa · software engineer · artficial intelligence</p>
        </div>
        <div className="relative w-24 h-24 sm:w-32 sm:h-32 flex-shrink-0">
          <Image
            src="/mest-headshot.jpg"
            alt="Kwaku Amo-Korankye"
            fill
            className="rounded-full object-cover object-top"
            priority
          />
        </div>
      </div>
      
      <SectionNav />
    </header>
  )
}

