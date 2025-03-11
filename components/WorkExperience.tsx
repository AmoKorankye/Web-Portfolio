"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"

const jobs = [
  {
    period: "Jun 2024 - Sep 2024",
    title: "Data Specialist Intern",
    company: "Aya Data Ghana",
    description:
      "Contributed over 12 hours weekly to annotate picture-based datasets using bounding box, key point techniques, enhancing the accuracy of computer vision models while collaborating with the team to review and ensure high-quality annotations.",
    tech: "CVAT • LabelBox",
    logo: "/aya_data.png?height=60&width=60",
    initials: "AD",
  },
  {
    period: "May 2024 - Present",
    title: "Campus Ambassador",
    company: "Paybox Global",
    description:
      "Promoted financial inclusion and entrepreneurship among students and staff through targeted financial literacy programs, outreach, and marketing initiatives.",
    tech: "Python • Web Payment Widget Integration",
    logo: "/paybox.png?height=60&width=60",
    initials: "PG",
  },
  {
    period: "Oct 2023 - Feb 2024",
    title: "Junior Developer",
    company: "mNotify and chatbots Africa",
    description:
      "Developed a web application that streamlined system development and automated internal processes. Spearheaded AI and API integration projects, focusing on Google Cloud technology to boost platform functionality. Developed the project as a strategic initiative during mNotify's Google for Startups cohort.",
    tech: "Python • Google Cloud API • NLP • TTS • STT • Streamlit",
    logo: "/mnotify.png?height=60&width=60",
    initials: "MN",
  },
  {
    period: "Jun 2023 - Sep 2023",
    title: "Software Engineering Intern",
    company: "DOBIISON VR",
    description:
      "Directed AI Engineering and Software Development initiatives, including the creation of an innovative Video Processing software for Dobiison's DRIIP programme.",
    tech: "Python • Javascript • 360 Imaging",
    logo: "/dobiison.png?height=60&width=60",
    initials: "DV",
  },
]

export default function WorkExperience() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  return (
    <section className="mb-12">
      <h2 className="text-xl sm:text-2xl font-semibold mb-6">Work Experience</h2>
      <div className="space-y-6">
        {jobs.map((job, index) => (
          <Collapsible
            key={index}
            open={openItems.includes(index)}
            onOpenChange={() => toggleItem(index)}
            className="group"
          >
            <CollapsibleTrigger className="flex items-center w-full hover:bg-muted/20 transition-colors py-2 rounded-md px-2">
              <Avatar className="h-12 w-12 mr-4">
                <AvatarImage src={job.logo} alt={`${job.company} logo`} />
                <AvatarFallback>{job.initials}</AvatarFallback>
              </Avatar>

              <div className="flex-grow">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between w-full">
                  <div className="text-left">
                    <h3 className="text-lg font-semibold flex items-center">
                      {job.company}
                      <span className="ml-2">
                        {openItems.includes(index) ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                      </span>
                    </h3>
                  <p className="text-sm text-muted-foreground">{job.title}</p>
                </div>
                <span className="hidden sm:block text-sm text-muted-foreground">{job.period}</span>
              </div>
              </div>
            </CollapsibleTrigger>

            <CollapsibleContent className="transition-all data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down">
              <div className="pl-16 pr-4 pt-2 pb-4">
                <p className="text-sm sm:text-base mb-2">{job.description}</p>
                <p className="text-sm text-muted-foreground">{job.tech}</p>
              </div>
            </CollapsibleContent>
          </Collapsible>
        ))}
      </div>
    </section>
  )
}

