"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"

const jobs = [
  {
    period: "Jan 2026 - Present",
    title: "EIT and SWE",
    company: "MEST Africa",
    description:
      "Software engineering, product development, business strategy, and communication while collaborating in diverse teams to research market problems, design and build software products, run user validation experiments, and pitch investor‑ready startup concepts for potential seed funding and incubation.",
    tech: "AI Engineering • Product Design • Software Development • Business Development",
    logo: "/mest.jpg?height=60&width=60",
    initials: "MA",
  },
  {
    period: "Sep 2025 - Present",
    title: "Fullstack Software Engineer",
    company: "AI Venture Studios",
    description:
      "Managed teams and Directed AI Engineering and End-to End Fullstack Software Development initiatives, including but not limited to system design, frontend and backend development, AI/ML integration, and Infrastructure.",
    tech: "Python • TypeScript • Next.js • Supabase • AI/ML Integration • Agentic AI",
    logo: "/aivs.jpeg?height=60&width=60",
    initials: "DV",
  },
  {
    period: "July 2023 - Present",
    title: "Lead Python Tutor",
    company: "Ghana Code Club",
    description:
      "Teaching children between the ages of 5 and 17 the basics of programming in web development and Python",
    tech: "Python • Robotics • Scratch • Web Development",
    logo: "/ghana-code-club.jpeg?height=60&width=60",
    initials: "DV",
  },
  {
    period: "Sep 2025 - Jan 2026",
    title: "AI Engineer",
    company: "mNotify and Impact AI Labs",
    description:
      "Developed a web application for TTS and STT that streamlined system development and added to mNotify's product offering. Spearheaded AI and API integration projects, focusing on Google Cloud technology to boost platform functionality. Developed the project as a strategic initiative during mNotify's Google for Startups cohort.---Built an unsupervised AI fraud-detection pipeline for mNotify's flagship product, the Bulk Messaging System, as part of my contributions with Impact AI Labs. It applies topic modeling and uses ML to replace rigid keyword blocking with an intelligent scoring system that reduces false positives and automates high-risk message review.",
    tech: "Python • Google Cloud API • NLP • TTS • STT • Streamlit",
    logo: "/mnotify.png?height=60&width=60",
    initials: "MN",
  },
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
]

export default function WorkExperience() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  return (
    <section className="mb-12">
      <h2 className="text-xl sm:text-2xl font-semibold mb-6">work experience</h2>
      <div className="space-y-2">
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

            <CollapsibleContent className="overflow-hidden transition-all data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down">
              <div className="pl-16 pr-4 pt-2 pb-4">
                {job.description.includes('---') ? (
                  <>
                    {job.description.split('---').map((desc, i, arr) => (
                      <div key={i}>
                        <p className="text-sm sm:text-base mb-2">{desc}</p>
                        {i < arr.length - 1 && <hr className="my-4 border-t border-gray-300" />}
                      </div>
                    ))}
                  </>
                ) : (
                  <p className="text-sm sm:text-base mb-2">{job.description}</p>
                )}
                <p className="text-sm text-muted-foreground">{job.tech}</p>
              </div>
            </CollapsibleContent>
          </Collapsible>
        ))}
      </div>
    </section>
  )
}

