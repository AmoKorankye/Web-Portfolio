import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

const essays = [
    { 
    date: '16 June 2025', 
    title: "Academic City Farewell Post",
    link: 'https://www.linkedin.com/feed/update/urn:li:activity:7340483999082926080/'
  },
  { 
    date: '17 May 2025', 
    title: "Thesis Demo",
    link: 'https://www.linkedin.com/posts/kwaku-amo-korankye-7551751b6_ghana-is-facing-a-critical-shortage-of-healthcare-activity-7329605686995120128-WY_a?utm_source=share&utm_medium=member_desktop&rcm=ACoAADI2yPEBq95zoP1c6ZFhrcjH9AwKMDrlMe0'
  },
  { 
    date: '30 June 2024', 
    title: "Girl's in ICT v2",
    link: 'https://www.linkedin.com/posts/kwaku-amo-korankye-7551751b6_on-tuesday-july-30th-i-had-the-privilege-activity-7225135872646553601-jIEI?utm_source=share&utm_medium=member_ios' 
  },
  { 
    date: '17 May 2024', 
    title: 'GDSC ACity farewell',
    link: 'https://www.linkedin.com/posts/kwaku-amo-korankye-7551751b6_gdsc-activity-7225096875110989826-URXt?utm_source=share&utm_medium=member_ios'
  }
]

export default function Essays() {
  return (
    <section className="mb-12">
      <h2 className="text-xl sm:text-2xl font-semibold mb-6">Essays</h2>
      <ul className="space-y-3">
        {essays.map((essay, index) => (
          <li key={index} className="flex flex-col sm:flex-row sm:items-baseline">
            <span className="text-sm text-muted-foreground sm:w-40 flex-shrink-0 mb-1 sm:mb-0">{essay.date}</span>
            <Link href={essay.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 inline-flex items-center text-sm sm:text-base">
              {essay.title}
              <ArrowUpRight className="w-4 h-4 ml-1" />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}