import Header from '@/components/Header'
import About from '@/components/About'
import Essays from '@/components/Essays'
import WorkExperience from '@/components/WorkExperience'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 font-sans">
      <Header />
      <About />
      <Essays />
      <WorkExperience />
      <Projects />
      <Contact />
    </div>
  )
}

