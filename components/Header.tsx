import { SectionNav } from './section-nav'

export default function Header() {
  return (
    <header className="mb-12 mt-8">
      <h1 className="text-3xl sm:text-4xl font-bold mb-2">Kwaku Amo-Korankye</h1>
      <p className="text-base sm:text-lg text-muted-foreground mb-12">eit @ MEST Africa · software engineer · artficial intelligence</p>
      
      <SectionNav />
    </header>
  )
}

